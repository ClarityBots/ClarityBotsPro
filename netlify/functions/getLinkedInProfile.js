// netlify/functions/getLinkedInProfile.js

const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    // Require ?url= query parameter
    const { url } = event.queryStringParameters || {};
    if (!url) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing ?url parameter" }),
      };
    }

    console.log("🚀 Launching PhantomBuster scrape for:", url);

    // Launch the Phantom with the provided LinkedIn URL
    const launchResponse = await fetch(
      "https://api.phantombuster.com/api/v2/agents/launch",
      {
        method: "POST",
        headers: {
          "X-Phantombuster-Key-1": process.env.PHANTOMBUSTER_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: process.env.PHANTOMBUSTER_AGENT_ID,
          argument: {
            profileUrls: [url], // 👈 Passes the LinkedIn URL dynamically
            numberOfProfiles: 1,
          },
        }),
      }
    );

    const launchData = await launchResponse.json();
    console.log("Phantom launch response:", launchData);

    if (!launchResponse.ok) {
      throw new Error(`Phantom launch failed: ${launchData.error || "Unknown error"}`);
    }

    // Wait a short period for Phantom to complete (tune as needed)
    await new Promise((resolve) => setTimeout(resolve, 10000));

    // Fetch the most recent results from the Phantom
    const resultResponse = await fetch(
      `https://api.phantombuster.com/api/v2/agents/fetch-output?id=${process.env.PHANTOMBUSTER_AGENT_ID}`,
      {
        method: "GET",
        headers: {
          "X-Phantombuster-Key-1": process.env.PHANTOMBUSTER_API_KEY,
        },
      }
    );

    const resultData = await resultResponse.json();
    console.log("Phantom result data:", resultData);

    if (!resultResponse.ok) {
      throw new Error(`Failed to fetch Phantom output: ${resultData.error || "Unknown error"}`);
    }

    // Extract profile text from Phantom results
    let profileText = "";
    if (resultData && resultData.output && resultData.output.length > 0) {
      const profileInfo = resultData.output[0];
      if (profileInfo && profileInfo.profile && profileInfo.profile.summary) {
        profileText = profileInfo.profile.summary;
      } else if (profileInfo.summary) {
        profileText = profileInfo.summary;
      } else {
        profileText = JSON.stringify(profileInfo, null, 2);
      }
    } else {
      profileText = "No profile data found.";
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ profileText }),
    };
  } catch (error) {
    console.error("❌ Error in getLinkedInProfile:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
