import { clients } from './clientConfig.js';

const urlParams = new URLSearchParams(window.location.search);
const clientName = urlParams.get('company');
const topic = urlParams.get('topic') || 'default';

const client = clients[clientName];

if (!client) {
  document.body.innerHTML = `
    <div style="color: red; font-size: 1.5rem; padding: 2rem;">
      ❌ Error: Invalid or missing client name.
    </div>
    <p style="color: white; text-align: center;">Please use a valid ClarityBots chat link.</p>
  `;
  throw new Error("Invalid client.");
}

document.body.style.backgroundImage = `url('${client.background}')`;

document.getElementById('logo').src = client.logo;
document.getElementById('logo').alt = client.altText || "Company Logo";
document.getElementById('company-heading').textContent = client.heading || "Welcome";
document.getElementById('topic-heading').textContent = `Topic: ${topic}`;

let gptUrl = client.gptUrl;
if (topic && topic !== 'default') {
  gptUrl += `+${encodeURIComponent(topic)}`;
}

document.getElementById('gpt-frame').src = gptUrl;
