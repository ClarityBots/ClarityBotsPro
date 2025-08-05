// netlify/functions/getLinkedInProfile.js

import fetch from "node-fetch";

export const handler = async (event) => {
  try {
    const linkedInUrl = event.queryStringParameters.url;
    if (!linkedInUrl) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing LinkedIn URL" }),
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

    console.log(`🚀 Launching PhantomBuster scrape for: ${linkedInUrl}`);

    // 1️⃣ Launch the Phantom
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
        }),
      }
    );

    const launchData = await launchRes.json();
    console.log("📦 Launch response:", launchData);

    if (!launchRes.ok || !launchData.containerId) {
      throw new Error(
        `Phantom launch failed: ${launchData.error || "Unknown error"}`
      );
    }

    // 2️⃣ Wait for PhantomBuster to finish (30 seconds)
    console.log("⏳ Waiting 30 seconds for PhantomBuster to finish...");
    await new Promise((resolve) => setTimeout(resolve, 30000));

    // 3️⃣ Fetch the output
    const outputRes = await fetch(
      `https://api.phantombuster.com/api/v2/agents/fetch-output?id=${agentId}`,
      {
        method: "GET",
        headers: {
          "X-Phantombuster-Key-1": apiKey,
        },
      }
    );

    const outputData = await outputRes.json();
    console.log("📦 Output data:", outputData);

    if (!outputRes.ok || !outputData || !outputData.output) {
      throw new Error(
        `Failed to fetch output: ${outputData.error || "No output returned"}`
      );
    }

    // 4️⃣ Extract profile text (adjust depending on your Phantom’s data format)
    let profileText = "Profile information not found.";
    try {
      const firstResult =
        outputData.output?.[0] || outputData.output?.resultObject?.[0];
      if (firstResult) {
        profileText =
          firstResult.description ||
          firstResult.summary ||
          JSON.stringify(firstResult);
      }
    } catch (err) {
      console.error("⚠️ Error parsing profile output:", err);
    }

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
