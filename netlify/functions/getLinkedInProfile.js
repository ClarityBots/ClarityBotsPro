// netlify/functions/getLinkedInProfile.js
import fetch from "node-fetch";

export async function handler(event) {
  try {
    const apiKey = process.env.PHANTOMBUSTER_API_KEY;
    const agentId = process.env.PHANTOMBUSTER_AGENT_ID;

    if (!apiKey || !agentId) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Missing PHANTOMBUSTER_API_KEY or PHANTOMBUSTER_AGENT_ID in environment variables"
        })
      };
    }

    // Read LinkedIn URL from query string
    const linkedInUrl = event.queryStringParameters.url;
    if (!linkedInUrl) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing LinkedIn URL" })
      };
    }

    console.log(`🚀 Launching Phantom for LinkedIn URL: ${linkedInUrl}`);

    // Launch the PhantomBuster LinkedIn Profile Scraper with the provided URL
    const launchUrl = `https://api.phantombuster.com/api/v2/agents/launch?id=${agentId}&argument=${encodeURIComponent(JSON.stringify({ profileUrl: linkedInUrl }))}`;
    const launchResp = await fetch(launchUrl, {
      method: "POST",
      headers: { "X-Phantombuster-Key-1": apiKey }
    });

    if (!launchResp.ok) {
      throw new Error(`Failed to launch Phantom: ${launchResp.statusText}`);
    }

    const launchData = await launchResp.json();
    console.log("✅ Phantom launch response:", launchData);

    // Wait briefly for PhantomBuster to finish
    await new Promise((resolve) => setTimeout(resolve, 10000));

    // Fetch the output
    const resultUrl = `https://api.phantombuster.com/api/v2/agents/fetch-output?id=${agentId}`;
    const resultResp = await fetch(resultUrl, {
      headers: { "X-Phantombuster-Key-1": apiKey }
    });

    if (!resultResp.ok) {
      throw new Error(`Failed to fetch Phantom results: ${resultResp.statusText}`);
    }

    const resultData = await resultResp.json();
    console.log("📄 Phantom results:", resultData);

    // Extract name, headline, and summary if available
    let profileText = "";
    if (resultData?.output?.[0]?.name) profileText += `${resultData.output[0].name}. `;
    if (resultData?.output?.[0]?.headline) profileText += `${resultData.output[0].headline}. `;
    if (resultData?.output?.[0]?.summary) profileText += resultData.output[0].summary;

    // If nothing found, return empty to let front-end fall back
    return {
      statusCode: 200,
      body: JSON.stringify({ profileText: profileText.trim() })
    };

  } catch (err) {
    console.error("❌ Error fetching LinkedIn profile:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
