// netlify/functions/fetchLinkedInData.js

const fetch = require("node-fetch");

exports.handler = async (event) => {
  console.log("📥 Incoming request to fetchLinkedInData");

  const API_KEY = process.env.PHANTOMBUSTER_API_KEY;
  const AGENT_ID = process.env.PHANTOMBUSTER_AGENT_ID;
  const WAIT_TIME = process.env.PB_WAIT_TIME_MS
    ? parseInt(process.env.PB_WAIT_TIME_MS, 10)
    : 30000; // default 30s

  if (!API_KEY || !AGENT_ID) {
    console.error("❌ Missing required environment variables.");
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Server misconfigured: Missing PhantomBuster API key or Agent ID.",
      }),
    };
  }

  try {
    // 1️⃣ Launch PhantomBuster Agent
    console.log(`🚀 Launching PhantomBuster agent ${AGENT_ID}...`);
    const launchRes = await fetch(
      `https://api.phantombuster.com/api/v2/agents/launch`,
      {
        method: "POST",
        headers: {
          "X-Phantombuster-Key-1": API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: AGENT_ID }),
      }
    );

    if (!launchRes.ok) {
      const errText = await launchRes.text();
      throw new Error(`Launch failed: ${launchRes.status} ${errText}`);
    }

    const launchData = await launchRes.json();
    console.log("📦 Launch response:", launchData);

    const containerId = launchData.containerId;
    if (!containerId) {
      throw new Error("No containerId returned from PhantomBuster launch.");
    }

    // 2️⃣ Wait for agent to complete
    console.log(`⏳ Waiting ${WAIT_TIME / 1000} seconds for agent to finish...`);
    await new Promise((resolve) => setTimeout(resolve, WAIT_TIME));

    // 3️⃣ Fetch output from container
    console.log(`📡 Fetching results for containerId: ${containerId}`);
    const outputRes = await fetch(
      `https://api.phantombuster.com/api/v2/containers/fetch-output?id=${containerId}`,
      {
        method: "GET",
        headers: {
          "X-Phantombuster-Key-1": API_KEY,
        },
      }
    );

    if (!outputRes.ok) {
      const errText = await outputRes.text();
      throw new Error(
        `Fetch output failed: ${outputRes.status} ${errText}`
      );
    }

    const outputData = await outputRes.json();
    console.log("📄 Output data:", outputData);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        containerId,
        output: outputData,
      }),
    };
  } catch (err) {
    console.error("❌ Error in fetchLinkedInData:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message || "Unknown error",
      }),
    };
  }
};
