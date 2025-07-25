// js/script.js

import prompts from './promptConfig.js';
import { clients } from './js/clientConfig.js';

console.log('✅ script.js loaded. Applying dynamic branding.');

const toolContainer = document.getElementById("toolContainer");
const chat = document.getElementById("chat");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const resetButton = document.getElementById("resetButton");
const exportButton = document.getElementById("exportButton");
const loader = document.getElementById("loader");
const logoImg = document.getElementById("logoImg");
const backgroundDiv = document.getElementById("backgroundImage");
const headingEl = document.getElementById("pageHeading");
const footerEl = document.getElementById("footer");

let currentTool = null;
let stepIndex = 0;
let conversationState = {};

function applyBranding(clientKey) {
  const client = clients[clientKey];
  if (!client) {
    console.warn(`⚠️ Client "${clientKey}" not found. Using fallback.`);
    return;
  }

  if (logoImg) {
    logoImg.src = client.logo;
    logoImg.alt = client.altText;
    console.log(`🔍 Logo set to: ${client.logo}`);
  }
  if (headingEl) {
    headingEl.textContent = `${client.heading} ClarityBot`;
    console.log(`🔍 Heading set to: ${headingEl.textContent}`);
  }
  if (backgroundDiv) {
    backgroundDiv.style.backgroundImage = `url('${client.background}')`;
    console.log(`🖼️ Background set to: ${client.background}`);
  }
  if (footerEl) {
    footerEl.style.backgroundColor = client.brandColor;
  }
}

function addMessage(content, sender = "user") {
  const messageEl = document.createElement("div");
  messageEl.className = `chat-bubble p-3 rounded-lg shadow-md w-fit max-w-[90%] ${
    sender === "user" ? "bg-blue-100 self-end" : "bg-gray-200 self-start"
  }`;
  messageEl.innerText = content;
  chat.appendChild(messageEl);
  chat.scrollTop = chat.scrollHeight;
}

function clearChat() {
  chat.innerHTML = "";
}

function showLoader() {
  loader.classList.remove("hidden");
}

function hideLoader() {
  loader.classList.add("hidden");
}

async function sendMessage() {
  const input = userInput.value.trim();
  if (!input || !currentTool) return;
  addMessage(input, "user");
  userInput.value = "";
  showLoader();

  try {
    const response = await fetch("/.netlify/functions/gpt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: input,
        tool: currentTool,
        step: stepIndex,
        state: conversationState
      })
    });

    const data = await response.json();
    if (data.reply) {
      addMessage(data.reply, "bot");
    }
    if (data.nextStep !== undefined) {
      stepIndex = data.nextStep;
    }
    if (data.updatedState) {
      conversationState = data.updatedState;
    }
  } catch (error) {
    console.error("GPT Error:", error);
    addMessage("Something went wrong while getting a response.", "bot");
  } finally {
    hideLoader();
  }
}

function setupToolButtons() {
  toolContainer.innerHTML = "";
  Object.keys(prompts).forEach((toolKey) => {
    const button = document.createElement("button");
    button.innerText = prompts[toolKey].label || toolKey;
    button.className =
      "px-4 py-2 rounded-lg shadow bg-white hover:bg-gray-100 border text-gray-800 font-semibold text-left";
    button.onclick = () => {
      currentTool = toolKey;
      stepIndex = 0;
      conversationState = {};
      clearChat();
      addMessage(prompts[toolKey].initialPrompt, "bot");
    };
    toolContainer.appendChild(button);
  });
}

function exportChat() {
  const messages = chat.querySelectorAll(".chat-bubble");
  let chatLog = "";
  messages.forEach((msg) => {
    chatLog += msg.innerText + "\n\n";
  });
  const blob = new Blob([chatLog], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${currentTool || "chat"}-log.txt`;
  link.click();
}

sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

resetButton.addEventListener("click", () => {
  userInput.value = "";
  clearChat();
});

exportButton.addEventListener("click", exportChat);

window.onload = () => {
  const hostname = window.location.hostname.toLowerCase(); // e.g., lumos.claritybots.ai
  const subdomain = hostname.split(".")[0]; // extract "lumos"
  const urlParams = new URLSearchParams(window.location.search);

  let clientKey = urlParams.get("client") || subdomain || "business_intuition";

  if (!clients[clientKey]) {
    console.warn(`⚠️ No client config found for '${clientKey}'. Using fallback.`);
    clientKey = "business_intuition";
  }

  console.log("🌐 Hostname:", hostname);
  console.log("🏷️ Subdomain:", subdomain);
  console.log("✅ Final selected clientKey:", clientKey);

  applyBranding(clientKey);
  setupToolButtons();
};
