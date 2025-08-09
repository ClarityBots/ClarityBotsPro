// js/clientConfig.js — v3.1.2 (shared buttons 1–5, company-aware button 6)

console.log("✅ clientConfig.js loaded (v3.1.2 shared-buttons)");

/** Shared GPT links used by EVERY company for buttons 1–5 */
const sharedGptLinks = {
  "ClarityRocks™":  "https://chatgpt.com/g/g-687bd0db062c8191912d6ad51220058c-clarityrockstm",
  "ClaritySolved™": "https://chatgpt.com/g/g-6844396598588191bdfdead2be09d6ed-claritysolvedtm",
  "ClarityCards™":  "https://chatgpt.com/g/g-682f6f00fb5481918997b663d2d6bdcc-claritycardstm",
  "ClarityValues™": "https://chatgpt.com/g/g-6823a5c5e36c819195d6c280b196c359-clarityvaluestm",
  "ClaritySource™": "https://chatgpt.com/g/g-682b1a17970081919e98326822f047e5-claritysourcetm"
};

/** One shared definition for the first five buttons */
const landingButtons = [
  "ClarityRocks™",
  "ClaritySolved™",
  "ClarityCards™",
  "ClarityValues™",
  "ClaritySource™"
];

/** About-Us base link (button 6) */
const ABOUT_US = "https://chatgpt.com/g/g-682b24c7f4d881919884989d08b645ed-claritybots-about-us";

/** Alphabetized client definitions (no per-company button arrays) */
const clients = {
  alder: {
    heading: "Alder Construction",
    background: "images/alder_image.jpg",
    logo: "images/alder_logo.png",
    altText: "Alder Construction Logo",
    preloadImage: true,
    brandColor: "#445777",
    profile: { staticText: "Alder Construction delivers infrastructure and commercial projects with a focus on quality, timelines, and budget." },
    button6Url: ABOUT_US
  },
  bi: {
    heading: "Business Intuition",
    background: "images/business_intuition_image.jpg",
    logo: "images/business_intuition_logo.png",
    altText: "Business Intuition Logo",
    preloadImage: true,
    brandColor: "#F04E23",
    profile: { staticText: "Kyle Fowles empowers growth-minded leaders through EOS, Kolbe, and Outgrow frameworks." },
    button6Url: ABOUT_US
  },
  cop: {
    heading: "COP Construction",
    background: "images/cop_image.jpg",
    logo: "images/cop_logo.png",
    altText: "COP Construction Logo",
    preloadImage: true,
    brandColor: "#6C7C90",
    profile: { staticText: "Heavy civil and infrastructure contractor delivering excellence across the Intermountain West." },
    button6Url: ABOUT_US
  },
  default: {
    heading: "ClarityBots",
    background: "images/default_image.jpg",
    logo: "images/default_logo.png",
    altText: "ClarityBots Default Logo",
    preloadImage: false,
    brandColor: "#FF7900",
    profile: { staticText: "This is a default ClarityBots profile. Configure your clientConfig.js with the correct client for your subdomain." },
    button6Url: ABOUT_US
  },
  eosww: {
    heading: "EOS Worldwide",
    background: "images/eosww_image.png",
    logo: "images/eosww_logo.webp",
    altText: "EOS Worldwide Logo",
    preloadImage: true,
    brandColor: "#6C7C90",
    profile: { staticText: "EOS Worldwide helps entrepreneurs get what they want from their businesses through simple, proven tools." },
    button6Url: ABOUT_US
  },
  havenlight: {
    heading: "Havenlight",
    background: "images/havenlight_image.jpg",
    logo: "images/havenlight_logo.png",
    altText: "Havenlight Logo",
    preloadImage: true,
    brandColor: "#A9B7C6",
    profile: { staticText: "Fine art that brings inspiration and light to homes, galleries, and sacred spaces." },
    button6Url: ABOUT_US
  },
  lumos: {
    heading: "Lumos Painting Company",
    background: "images/lumos_image.webp",
    logo: "images/lumos_logo.png",
    altText: "Lumos Logo",
    preloadImage: true,
    brandColor: "#A9B7C6",
    profile: { staticText: "Founded by Arthur Pili, Lumos Painting delivers quality finishes, warranties, and unmatched attention to detail." },
    button6Url: ABOUT_US
  },
  mark: {
    heading: "Mark O'Donnell",
    background: "images/mark_image.png",
    logo: "images/mark_logo.png",
    altText: "Mark Logo",
    preloadImage: true,
    brandColor: "#A9B7C6",
    profile: { staticText: "Mark is the Visionary of EOS Worldwide, helping millions of leaders run better businesses." },
    button6Url: ABOUT_US
  },
  ninety: {
    heading: "Ninety.io",
    background: "images/ninety_image.webp",
    logo: "images/ninety_logo.png",
    altText: "Ninety Logo",
    preloadImage: true,
    brandColor: "#A9B7C6",
    profile: { staticText: "Ninety.io equips EOS-run businesses with digital tools for clarity, traction, and team health." },
    button6Url: ABOUT_US
  },
  overland: {
    heading: "Overland Group",
    background: "images/overland_image.png",
    logo: "images/overland_logo.png",
    altText: "Overland Logo",
    preloadImage: true,
    brandColor: "#A9B7C6",
    profile: { staticText: "Full-service real estate development, design, and construction firm serving the Mountain West." },
    button6Url: ABOUT_US
  },
  remedyww: {
    heading: "Remedy World Wide",
    background: "images/remedyww_image.jpg",
    logo: "images/remedyww_logo.png",
    altText: "Remedy World Wide Logo",
    preloadImage: true,
    brandColor: "#A9B7C6",
    profile: { staticText: "Innovative health solutions provider improving outcomes for patients and providers." },
    button6Url: ABOUT_US
  },
  skyline: {
    heading: "Skyline Electric Company",
    background: "images/skyline_image.png",
    logo: "images/skyline_logo.png",
    altText: "Skyline Electric Logo",
    preloadImage: true,
    brandColor: "#FBBF24",
    profile: { staticText: "Electrical contractor trusted by industrial, utility, and commercial partners across the region." },
    button6Url: ABOUT_US
  },
  techplus: {
    heading: "TechPlus",
    background: "images/techplus_image.png",
    logo: "images/techplus_logo.png",
    altText: "TechPlus Logo",
    preloadImage: true,
    brandColor: "#FBBF24",
    profile: { staticText: "TechPlus provides smart solutions for digital transformation and operational efficiency." },
    button6Url: ABOUT_US
  },
  vlcm: {
    heading: "VLCM",
    background: "images/vlcm_image.jpg",
    logo: "images/vlcm_logo.svg",
    altText: "VLCM Logo",
    preloadImage: true,
    brandColor: "#28A745",
    profile: { staticText: "VLCM is a leading IT solutions provider in Utah offering networking, infrastructure, and cybersecurity services." },
    button6Url: ABOUT_US
  },
  winward: {
    heading: "Winward Electric",
    background: "images/winward_image.jpg",
    logo: "images/winward_logo.png",
    altText: "Winward Electric Logo",
    preloadImage: true,
    brandColor: "#9C27B0",
    profile: { staticText: "Electrical solutions for residential, commercial, and industrial customers in the Intermountain West." },
    button6Url: ABOUT_US
  }
};

// expose globals for non-module scripts
window.sharedGptLinks = sharedGptLinks;
window.landingButtons = landingButtons;
window.ABOUT_US = ABOUT_US;
window.clients = clients;
