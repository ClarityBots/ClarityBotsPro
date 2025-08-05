// netlify/functions/getLinkedInProfile.js

import fetch from "node-fetch";

export const handler = async (event) => {
  console.log("📥 Incoming request to getLinkedInProfile");

  const linkedInUrl = event.queryStringParameters.url;
  if (!linkedInUrl) {
    console.error("❌ Missing LinkedIn URL");
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing LinkedIn URL" }),
    };
  }

  console.log(`🔗 LinkedIn URL: ${linkedInUrl}`);

  const apiKey = process.env.PHANTOMBUSTER_API_KEY;
  const agentId = process.env.PHANTOMBUSTER_AGENT_ID;

  if (!apiKey || !agentId) {
    console.error("❌ Missing PhantomBuster API credentials");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing PhantomBuster API credentials" }),
    };
  }

  try {
    // 1️⃣ Launch the PhantomBuster scrape
    console.log(`🚀 Launching PhantomBuster scrape for: ${linkedInUrl}`);
    const launchRes = await fetch(
      `https://api.phantombuster.com/api/v2/agents/launch`,
      {
        method: "POST",
        headers: {
          "X-Phantombuster-Key-1": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: agentId, argument: { profileUrl: linkedInUrl } }),
      }
    );

    const launchData = await launchRes.json();
    console.log("📦 Launch response:", launchData);

    if (!launchRes.ok || !launchData.containerId) {
      throw new Error(
        `PhantomBuster launch failed: ${JSON.stringify(launchData)}`
      );
    }

    // 2️⃣ Wait for PhantomBuster to complete
    const waitTime = 30000; // 30 seconds
    console.log(`⏳ Waiting ${waitTime / 1000} seconds for PhantomBuster to finish...`);
    await new Promise((resolve) => setTimeout(resolve, waitTime));

    // 3️⃣ Retrieve the results from PhantomBuster
    console.log("📥 Fetching PhantomBuster result data...");
    const resultRes = await fetch(
      `https://api.phantombuster.com/api/v2/containers/fetch-output?id=${launchData.containerId}`,
      {
        headers: { "X-Phantombuster-Key-1": apiKey },
      }
    );

    const resultData = await resultRes.json();
    console.log("📦 Full PhantomBuster result JSON:", JSON.stringify(resultData, null, 2));

    if (!resultRes.ok) {
      throw new Error(`Failed to fetch PhantomBuster results: ${JSON.stringify(resultData)}`);
    }

    // 4️⃣ Extract the profile text
    let profileText = "";
    if (
      resultData &&
      resultData.output &&
      Array.isArray(resultData.output) &&
      resultData.output.length > 0
    ) {
      // Adjust this path based on your PhantomBuster output structure
      profileText = resultData.output[0]?.description || "";
    }

    if (!profileText) {
      throw new Error("No profile text found in PhantomBuster output");
    }

    console.log("✅ Extracted profile text:", profileText);

    // 5️⃣ Return profile text to the site
    return {
      statusCode: 200,
      body: JSON.stringify({ profileText }),
    };

  } catch (error) {
    console.error("💥 Error in getLinkedInProfile:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Unknown error" }),
    };
  }
};
