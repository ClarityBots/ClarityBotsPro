// netlify/functions/getLinkedInProfile.js

const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const { url } = event.queryStringParameters || {};

    if (!url) {
      console.error("❌ Missing ?url parameter");
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing ?url parameter" }),
      };
    }

    const apiKey = process.env.PHANTOMBUSTER_API_KEY;
    const agentId = process.env.PHANTOMBUSTER_AGENT_ID;

    if (!apiKey || !agentId) {
      console.error("❌ Missing PhantomBuster credentials");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing PhantomBuster credentials" }),
      };
    }

    console.log("🚀 Launching PhantomBuster scrape for:", url);

    // Launch the Phantom
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
            profileUrls: [url],
            numberOfProfiles: 1,
          },
        }),
      }
    );

    const launchData = await launchResponse.json();
    console.log("📦 Launch response status:", launchResponse.status);
    console.log("📦 Launch response body:", JSON.stringify(launchData, null, 2));

    if (!launchResponse.ok) {
      console.error("❌ Launch failed:", launchData);
      throw new Error(`Phantom launch failed: ${launchData.error || "Unknown error"}`);
    }

    // Poll results
    let attempts = 0;
    const maxAttempts = 6;
    const waitTime = 10000; // 10 seconds
    let profileText = "";

    while (attempts < maxAttempts) {
      console.log(`⏳ Checking Phantom output (attempt ${attempts + 1}/${maxAttempts})`);

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
      console.log(`📦 Fetch-output status: ${resultResponse.status}`);
      console.log(`📦 Fetch-output body: ${JSON.stringify(resultData, null, 2)}`);

      if (!resultResponse.ok) {
        console.error("⚠️ Error fetching Phantom output:", resultData);
      } else if (resultData?.output && resultData.output.length > 0) {
        const profileInfo = resultData.output[0];
        console.log("✅ Raw profileInfo object:", JSON.stringify(profileInfo, null, 2));

        if (profileInfo?.profile?.summary) {
          profileText = profileInfo.profile.summary;
          console.log("✅ Found profile.summary");
          break;
        } else if (profileInfo?.summary) {
          profileText = profileInfo.summary;
          console.log("✅ Found summary");
          break;
        } else {
          console.warn("⚠️ No summary field found in this attempt.");
        }
      } else {
        console.warn("⚠️ Output empty this attempt.");
      }

      // Wait before next attempt
      await new Promise((resolve) => setTimeout(resolve, waitTime));
      attempts++;
    }

    if (!profileText) {
      console.warn("⚠️ No LinkedIn profile text found after retries. Falling back.");
      profileText = "Profile information not available.";
    }

    console.log("🏁 Final profile text length:", profileText.length);

    return {
      statusCode: 200,
      body: JSON.stringify({ profileText }),
    };
  } catch (error) {
    console.error("💥 Error in getLinkedInProfile:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
