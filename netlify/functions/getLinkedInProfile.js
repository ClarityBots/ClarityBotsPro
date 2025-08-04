// netlify/functions/getLinkedInProfile.js

const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const { url } = event.queryStringParameters || {};

    if (!url) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing ?url parameter" }),
      };
    }

    const apiKey = process.env.PHANTOMBUSTER_API_KEY;
    const agentId = process.env.PHANTOMBUSTER_AGENT_ID;

    if (!apiKey || !agentId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing PhantomBuster credentials" }),
      };
    }

    console.log("🚀 Launching PhantomBuster scrape for:", url);

    // Launch PhantomBuster agent with LinkedIn URL
    const launchResponse = await fetch(
      "https://api.phantombuster.com/api/v2/agents/launch",
      {
        method: "POST",
        headers: {
          "X-Phantombuster-Key-1": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: agentId,
          argument: {
            profileUrls: [url], // Send the LinkedIn URL dynamically
            numberOfProfiles: 1,
          },
        }),
      }
    );

    const launchData = await launchResponse.json();
    console.log("📦 Launch response:", launchData);

    if (!launchResponse.ok) {
      throw new Error(`Phantom launch failed: ${launchData.error || "Unknown error"}`);
    }

    // Polling logic
    let attempts = 0;
    const maxAttempts = 6; // ~1 min total
    const waitTime = 10000; // 10 sec between tries
    let profileText = "";

    while (attempts < maxAttempts) {
      console.log(`⏳ Checking Phantom output (attempt ${attempts + 1}/${maxAttempts})...`);

      const resultResponse = await fetch(
        `https://api.phantombuster.com/api/v2/agents/fetch-output?id=${agentId}`,
        {
          method: "GET",
          headers: {
            "X-Phantombuster-Key-1": apiKey,
          },
        }
      );

      const resultData = await resultResponse.json();

      if (!resultResponse.ok) {
        console.error("⚠️ Error fetching Phantom output:", resultData);
      } else if (resultData?.output && resultData.output.length > 0) {
        const profileInfo = resultData.output[0];
        if (profileInfo?.profile?.summary) {
          profileText = profileInfo.profile.summary;
          console.log("✅ Profile summary found!");
          break;
        } else if (profileInfo?.summary) {
          profileText = profileInfo.summary;
          console.log("✅ Profile summary found!");
          break;
        }
      }

      // Wait before next attempt
      await new Promise((resolve) => setTimeout(resolve, waitTime));
      attempts++;
    }

    if (!profileText) {
      console.warn("⚠️ No LinkedIn profile text found after retries. Falling back.");
      profileText = "Profile information not available.";
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
