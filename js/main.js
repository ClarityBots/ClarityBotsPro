import { clients } from './clientConfig.js';

// Parse subdomain or fallback to URL param ?q=clientKey
let subdomain;
const hostname = location.hostname.toLowerCase();

if (hostname === 'localhost' || hostname.startsWith('127.')) {
  subdomain = 'bi'; // Local dev default
} else if (hostname.includes('--')) {
  subdomain = hostname.split('--')[0];
} else {
  subdomain = hostname.split('.')[0];
}

const urlParams = new URLSearchParams(window.location.search);
const queryOverride = urlParams.get('q');
const clientKey = queryOverride || subdomain;
const company = clients[clientKey] || clients.default;

console.log(`🎯 Loaded config for: ${clientKey}`);

// Branding & visuals
document.body.style.backgroundImage = `url('${company.background}')`;

const logo = document.getElementById('logo');
logo.src = company.logo;
logo.alt = company.altText;

document.getElementById('heading').textContent = company.heading;
document.getElementById('profile-text').textContent = company.profile.staticText;

// Prompt buttons
const promptButtonsDiv = document.getElementById('prompt-buttons');
if (Array.isArray(company.defaultPrompts)) {
  company.defaultPrompts.forEach((prompt) => {
    const btn = document.createElement('button');
    btn.className = 'prompt-button';
    btn.textContent = prompt;
    btn.onclick = () => {
      const url = `${company.gptUrl}&prompt=${encodeURIComponent(prompt)}`;
      window.open(url, '_blank');
    };
    promptButtonsDiv.appendChild(btn);
  });
}

// Landing navigation buttons
const landingLinksDiv = document.getElementById('landing-links');
if (Array.isArray(company.landingButtons)) {
  company.landingButtons.forEach((label) => {
    const btn = document.createElement('button');
    btn.className = 'link-button';
    btn.textContent = label;
    btn.onclick = () => {
      alert(`${label} is coming soon.`); // Or route later
    };
    landingLinksDiv.appendChild(btn);
  });
}

// Global launchBot function used by HTML
window.launchBot = () => {
  window.open(company.gptUrl, '_blank');
};
