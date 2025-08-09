// js/clientConfig.js

console.log("✅ clientConfig.js is loaded");

// -------------------------------
// Constants
// -------------------------------
const imageBasePath = "images/";
const gptBaseUrl = "https://chatgpt.com/g/";

// -------------------------------
// Shared GPT URLs for buttons 1–5
// -------------------------------
const sharedGptLinks = {
  "ClarityRocks™": `${gptBaseUrl}g-687bd0db062c8191912d6ad51220058c-clarityrockstm`,
  "ClaritySolved™": `${gptBaseUrl}g-6844396598588191bdfdead2be09d6ed-claritysolvedtm`,
  "ClarityCards™": `${gptBaseUrl}g-682f6f00fb5481918997b663d2d6bdcc-claritycardstm`,
  "ClarityValues™": `${gptBaseUrl}g-6823a5c5e36c819195d6c280b196c359-clarityvaluestm`,
  "ClaritySource™": `${gptBaseUrl}g-682b1a17970081919e98326822f047e5-claritysourcetm`,
};

// -------------------------------
// Shared button label array
// -------------------------------
const sharedLandingButtons = [
  "ClarityRocks™",
  "ClaritySolved™",
  "ClarityCards™",
  "ClarityValues™",
  "ClaritySource™"
];

// -------------------------------
// Full client definitions
// -------------------------------
import { defaultClients } from "./clients/fullClientList.js";
export const clients = defaultClients;

// -------------------------------
// Subdomain detection
// -------------------------------
(function () {
  let hostname = location.hostname.toLowerCase();
  let subdomain;

  if (hostname === "localhost" || hostname.startsWith("127.")) {
    subdomain = "bi"; // Default for local testing
  } else if (hostname.includes("--")) {
    subdomain = hostname.split("--")[0]; // Handle Vercel-style preview URLs
  } else {
    subdomain = hostname.split(".")[0];
  }

  subdomain = subdomain.toLowerCase();
  console.log("🌐 Detected subdomain:", subdomain);

  // Store config globally for access in other scripts
  window.clientConfig = clients[subdomain] || clients.default;
})();
