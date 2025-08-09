// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const config = window.clientConfig;

  if (!config) {
    console.error("❌ No client configuration found.");
    return;
  }

  // Set background image
  if (config.background) {
    document.body.style.backgroundImage = `url('${config.background}')`;
  }

  // Set logo image and alt text
  const logoEl = document.getElementById("logo");
  if (logoEl && config.logo) {
    logoEl.src = config.logo;
    logoEl.alt = config.altText || "Company Logo";
  }

  // Set heading text
  const headingEl = document.getElementById("heading");
  if (headingEl) {
    headingEl.textContent = config.heading || "ClarityBots";
  }

  // Set profile static text
  const descriptionEl = document.getElementById("description");
  if (descriptionEl) {
    descriptionEl.textContent =
      config.profile?.staticText || "Welcome to ClarityBots!";
  }

  // Render buttons
  const buttonsEl = document.getElementById("buttons");
  if (buttonsEl && Array.isArray(config.landingButtons)) {
    buttonsEl.innerHTML = ""; // Clear any existing buttons

    config.landingButtons.forEach((label) => {
      const button = document.createElement("a");
      button.href = "#";
      button.classList.add("cta-button");
      button.textContent = label;
      buttonsEl.appendChild(button);
    });
  }

  // Set theme color (optional)
  if (config.brandColor) {
    document.documentElement.style.setProperty("--primary", config.brandColor);
  }

  console.log("✅ Configuration loaded for:", config.heading);
});
