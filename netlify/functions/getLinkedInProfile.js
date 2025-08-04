// netlify/functions/getLinkedInProfile.js
import fetch from "node-fetch";

export async function handler(event) {
  try {
    const { url } = event.queryStringParameters;

    if (!url) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing LinkedIn URL" })
      };
    }

    // PhantomBuster credentials from Netlify env vars
    const apiKey = process.env.PHANTOMBUSTER_API_KEY;
    const agentId = process.env.PHANTOMBUSTER_AGENT_ID;

    if (!apiKey || !agentId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing PhantomBuster credentials" })
      };
    }

    console.log(`🚀 Launching Phantom for LinkedIn URL: ${url}`);

    // Launch PhantomBuster Phantom with LinkedIn URL as input
    const launchResponse = await fetch(
      `https://api.phantombuster.com/api/v2/agents/launch?id=${agentId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Phantombuster-Key-1": apiKey
        },
        body: JSON.stringify({
          argument: {
            profileUrls: [url], // pass LinkedIn profile URL
            numberOfProfiles: 1
          }
        })
      }
    );

    const launchData = await launchResponse.json();

    if (!launchResponse.ok) {
      console.error("❌ Phantom launch failed:", launchData);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to launch Phantom" })
      };
    }

    console.log("✅ Phantom launched successfully, getting output...");

    // Give Phantom a moment to process
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Fetch Phantom output
    const outputResponse = await fetch(
      `https://api.phantombuster.com/api/v2/agents/fetch-output?id=${agentId}`,
      {
        method: "GET",
        headers: {
          "X-Phantombuster-Key-1": apiKey
        }
      }
    );

    const outputData = await outputResponse.json();

    if (!outputResponse.ok || !outputData?.output) {
      console.error("⚠️ No output from Phantom:", outputData);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "No profile data found" })
      };
    }

    // Extract profile text from Phantom output
    let profileText = "";
    try {
      const firstProfile = outputData.output[0];
      if (firstProfile?.profile?.description) {
        profileText = firstProfile.profile.description;
      } else {
        profileText = JSON.stringify(firstProfile, null, 2);
      }
    } catch (err) {
      console.error("⚠️ Failed to parse Phantom output:", err);
      profileText = "Profile data could not be parsed.";
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ profileText })
    };
  } catch (error) {
    console.error("💥 Server error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" })
    };
  }
}
