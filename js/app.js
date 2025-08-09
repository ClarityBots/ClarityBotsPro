// js/app.js — v3.1.2 (shared buttons 1–5; company-aware button 6)

console.log("✅ app.js is loaded");

(function () {
  // safety
  if (!window.clients) return console.error("clients not found");
  if (!window.sharedGptLinks) return console.error("sharedGptLinks not found");
  if (!window.landingButtons) return console.error("landingButtons not found");

  // company detection: subdomain first, then ?company= fallback
  const sub = (location.hostname.split(".")[0] || "").toLowerCase();
  const urlParamCompany = (new URLSearchParams(location.search).get("company") || "").toLowerCase();
  const companyKey = (sub || urlParamCompany || "default").toLowerCase();
  const client = window.clients[companyKey] || window.clients.default;

  console.log("🌐 Detected subdomain:", sub || "(none)", "→ company:", companyKey);
  console.log("✅ clientConfig.js is loaded");

  // fill UI
  const bg = document.getElementById("background");
  const logo = document.getElementById("logo");
  const heading = document.getElementById("heading");
  const blurb = document.getElementById("blurb");
  const buttonsWrap = document.getElementById("buttons");

  if (bg && client.background) bg.style.backgroundImage = `url('${client.background}')`;
  if (logo && client.logo) { logo.src = client.logo; logo.alt = client.altText || "Company Logo"; }
  if (heading) heading.textContent = client.heading || "ClarityBots";
  if (blurb) blurb.textContent = client.profile?.staticText || "";

  // Build Buttons 1–5 from shared list
  if (buttonsWrap) buttonsWrap.innerHTML = "";
  (window.landingButtons || []).forEach((label) => {
    const url = window.sharedGptLinks[label];
    if (!url) { console.warn("Missing shared link for label:", label); return; }
    const a = document.createElement("a");
    a.className = "btn";
    a.textContent = label;
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    buttonsWrap.appendChild(a);
  });

  // Button 6: company-aware “Meet …Bots”
  const btn6 = document.createElement("a");
  btn6.className = "btn";
  const shortName = (client.heading || "Company").split(",")[0]; // trim after comma if present
  btn6.textContent = `Meet ${shortName}Bots`;
  const aboutBase = client.button6Url || window.ABOUT_US;
  btn6.href = `${aboutBase}?q=${encodeURIComponent(companyKey)}`;
  btn6.target = "_blank";
  btn6.rel = "noopener";
  buttonsWrap.appendChild(btn6);

  // hide loader
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";

  console.log("✅ Render complete for", companyKey);
})();
