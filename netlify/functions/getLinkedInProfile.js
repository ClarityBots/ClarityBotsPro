// netlify/functions/getLinkedInProfile.js

import fetch from "node-fetch";

export const handler = async (event) => {
  console.log("📥 Incoming request to getLinkedInProfile");

  try {
    // Get LinkedIn URL from query string
    const linkedInUrl = event.queryStringParameters.url;
    if (!linkedInUrl) {
      console.warn("⚠️ No LinkedIn URL provided in request.");
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing LinkedIn URL" }),
      };
    }

    console.log("🔗 LinkedIn URL:", linkedInUrl);

    // Environment variables
    const apiKey = process.env.PHANTOMBUSTER_API_KEY;
    const agentId = process.env.PHANTOMBUSTER_AGENT_ID;

    if (!apiKey || !agentId) {
      console.error("❌ Missing PhantomBuster API key or Agent ID in env vars.");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Server configuration error" }),
      };
    }

    // 1️⃣ Launch PhantomBuster agent
    console.log("🚀 Launching PhantomBuster scrape for:", linkedInUrl);

    const launchRes = await fetch(
      `https://api.phantombuster.com/api/v2/agents/launch`,
      {
        method: "POST",
        headers: {
          "X-Phantombuster-Key-1": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: agentId,
          argument: { profileUrl: linkedInUrl },
        }),
      }
    );

    const launchData = await launchRes.json();
    console.log("📦 Launch response:", launchData);

    if (!launchRes.ok || !launchData.containerId) {
      console.error("❌ PhantomBuster launch failed:", launchData);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "PhantomBuster launch failed" }),
      };
    }

    const containerId = launchData.containerId;

    // 2️⃣ Wait for PhantomBuster to finish scraping
    const waitMs = parseInt(process.env.PHANTOMBUSTER_WAIT_MS || "30000", 10);
    console.log(`⏳ Waiting ${waitMs / 1000} seconds for PhantomBuster to finish...`);
    await new Promise((resolve) => setTimeout(resolve, waitMs));

    // 3️⃣ Fetch container output
    console.log("📤 Fetching PhantomBuster output for container:", containerId);

    const outputRes = await fetch(
      `https://api.phantombuster.com/api/v2/containers/fetch-output?id=${containerId}`,
      {
        method: "GET",
        headers: { "X-Phantombuster-Key-1": apiKey },
      }
    );

    const outputData = await outputRes.json();
    console.log("📄 Full output from PhantomBuster:", JSON.stringify(outputData, null, 2));

    // 4️⃣ Extract profile text
    let profileText = null;
    try {
      // Adjust extraction logic based on actual JSON structure
      profileText =
        outputData?.output?.[0]?.fullName ||
        outputData?.output?.[0]?.profile?.summary ||
        outputData?.output?.[0]?.description ||
        null;
    } catch (err) {
      console.warn("⚠️ Could not extract profile text from output JSON.");
    }

    if (!profileText) {
      console.warn("⚠️ No LinkedIn profile text found, falling back to static text.");
      profileText = "Profile information not available.";
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ profileText }),
    };
  } catch (err) {
    console.error("💥 Error in getLinkedInProfile:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
