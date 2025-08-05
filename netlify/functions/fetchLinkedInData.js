// netlify/functions/fetchLinkedInData.js

import fetch from 'node-fetch';

export async function handler(event) {
  console.log('📥 Incoming request to fetchLinkedInData');

  const apiKey = process.env.PHANTOMBUSTER_API_KEY;
  const agentId = process.env.PHANTOMBUSTER_AGENT_ID;

  // Fail-fast check
  if (!apiKey || !agentId) {
    console.error('❌ Missing required environment variables.');
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Missing PHANTOMBUSTER_API_KEY or PHANTOMBUSTER_AGENT_ID',
      }),
    };
  }

  try {
    // Build request to PhantomBuster
    const launchUrl = 'https://api.phantombuster.com/api/v2/agents/launch';
    const body = { id: agentId };

    console.log('🚀 Launching PhantomBuster scrape...');
    console.log('   🔹 API URL:', launchUrl);
    console.log('   🔹 Payload:', JSON.stringify(body));
    console.log('   🔹 Using API key:', apiKey.substring(0, 6) + '********');

    const res = await fetch(launchUrl, {
      method: 'POST',
      headers: {
        'X-Phantombuster-Key-1': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const launchData = await res.json();
    console.log('📦 Launch response:', launchData);

    if (!res.ok) {
      throw new Error(
        `PhantomBuster API error: ${res.status} - ${JSON.stringify(launchData)}`
      );
    }

    // Wait for PhantomBuster to finish scraping
    console.log('⏳ Waiting 30 seconds for PhantomBuster to finish...');
    await new Promise((resolve) => setTimeout(resolve, 30000));

    // Fetch the agent's latest output
    const outputUrl = `https://api.phantombuster.com/api/v2/agents/fetch-output?id=${agentId}`;
    console.log('📥 Fetching scrape output from:', outputUrl);

    const outputRes = await fetch(outputUrl, {
      method: 'GET',
      headers: {
        'X-Phantombuster-Key-1': apiKey,
      },
    });

    const outputData = await outputRes.json();
    console.log('📦 Output data:', outputData);

    if (!outputRes.ok) {
      throw new Error(
        `PhantomBuster output fetch error: ${outputRes.status} - ${JSON.stringify(outputData)}`
      );
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Scrape complete',
        launch: launchData,
        output: outputData,
      }),
    };
  } catch (error) {
    console.error('❌ Error fetching LinkedIn data:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
