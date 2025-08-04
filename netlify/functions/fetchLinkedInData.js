// netlify/functions/fetchLinkedInData.js
import fetch from "node-fetch";

export async function handler() {
  try {
    const apiKey = process.env.PHANTOMBUSTER_API_KEY;
    const agentId = process.env.PHANTOMBUSTER_AGENT_ID;

    if (!apiKey || !agentId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing API key or Agent ID" }),
      };
    }

    // Trigger the PhantomBuster Agent
    const triggerUrl = `https://api.phantombuster.com/api/v2/agents/launch?id=${agentId}&output=first-result-object`;

    const response = await fetch(triggerUrl, {
      method: "POST",
      headers: {
        "X-Phantombuster-Key-1": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`PhantomBuster API error: ${response.status}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data, null, 2),
    };
  } catch (error) {
    console.error("Error fetching LinkedIn data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
