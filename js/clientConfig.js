// js/clientConfig.js

console.log("✅ clientConfig.js is loaded");

// -------------------------------
// Constants
// -------------------------------
const imageBasePath = "images/";
const gptBaseUrl = "https://chatgpt.com/g/g-682b24c7f4d881919884989d08b645ed-claritybots-meet-the-author?q=";

// -------------------------------
// Shared landing buttons (all companies inherit)
// -------------------------------
const sharedLandingButtons = [
  "ClarityRocks™",
  "ClaritySolved™",
  "ClarityCards™",
  "ClarityValues™",
  "ClarityTrax™"
];

// -------------------------------
// Full client definitions (alphabetized)
// -------------------------------
export const clients = {
  alder: {
    heading: "Alder Construction",
    background: `${imageBasePath}alder_image.jpg`,
    logo: `${imageBasePath}alder_logo.png`,
    altText: "Alder Construction Logo",
    preloadImage: true,
    basePath: imageBasePath,
    brandColor: "#445777",
    gptUrl: `${gptBaseUrl}alder`,
    profile: {
      staticText: `Alder Construction is a leading provider of infrastructure and commercial construction services, known for delivering high-quality projects on time and within budget.`
    },
    landingButtons: [...sharedLandingButtons, "Meet AlderBots"]
  },
  bi: {
    heading: "Business Intuition",
    background: `${imageBasePath}business_intuition_image.jpg`,
    logo: `${imageBasePath}business_intuition_logo.png`,
    altText: "Business Intuition Logo",
    preloadImage: true,
    basePath: imageBasePath,
    brandColor: "#F04E23",
    gptUrl: `${gptBaseUrl}bi`,
    profile: {
      staticText: `Kyle Fowles is a Certified EOS Implementer®, Kolbe Certified Consultant, and Certified Outgrow Advisor. He has facilitated over 250 EOS Session Days, with a 9.5/10 client rating. Kyle helps entrepreneurial leadership teams gain clarity, accountability, and traction so they can grow with confidence.`
    },
    landingButtons: [...sharedLandingButtons, "Meet BI Bots"]
  },
  cop: {
    heading: "COP Construction",
    background: `${imageBasePath}cop_image.jpg`,
    logo: `${imageBasePath}cop_logo.png`,
    altText: "COP Construction Logo",
    preloadImage: true,
    basePath: imageBasePath,
    brandColor: "#6C7C90",
    gptUrl: `${gptBaseUrl}cop`,
    profile: {
      staticText: `COP Construction is a full-service construction contractor specializing in heavy civil and infrastructure projects across the region.`
    },
    landingButtons: [...sharedLandingButtons, "Meet COP Bots"]
  },
  eosww: {
    heading: "EOS Worldwide",
    background: `${imageBasePath}eosww_image.png`,
    logo: `${imageBasePath}eosww_logo.webp`,
    altText: "EOS Worldwide Logo",
    preloadImage: true,
    basePath: imageBasePath,
    brandColor: "#6C7C90",
    gptUrl: `${gptBaseUrl}eosww`,
    profile: {
      staticText: `EOS Worldwide provides simple, practical tools to help entrepreneurs run their businesses more effectively and achieve their vision.`
    },
    landingButtons: [...sharedLandingButtons, "Meet EOS Bots"]
  },
  havenlight: {
    heading: "Havenlight",
    background: `${imageBasePath}havenlight_image.jpg`,
    logo: `${imageBasePath}havenlight_logo.png`,
    altText: "Havenlight Logo",
    preloadImage: true,
    basePath: imageBasePath,
    brandColor: "#A9B7C6",
    gptUrl: `${gptBaseUrl}havenlight`,
    profile: {
      staticText: `Havenlight is a fine art company specializing in faith-inspired artwork, helping people bring meaningful art into their homes and spaces.`
    },
    landingButtons: [...sharedLandingButtons, "Meet HavenBots"]
  },
  lumos: {
    heading: "Lumos Painting Company",
    background: `${imageBasePath}lumos_image.webp`,
    logo: `${imageBasePath}lumos_logo.png`,
    altText: "Lumos Logo",
    preloadImage: true,
    basePath: imageBasePath,
    brandColor: "#A9B7C6",
    gptUrl: `${gptBaseUrl}lumos`,
    profile: {
      staticText: `Arthur Pili, the founder of Lumos Painting Company, offers detailed interior and exterior painting, finishing, and new construction services across Northern Utah. The company has a longstanding reputation, emphasizing quality and customer service with a two-year warranty on all projects.`
    },
    landingButtons: [...sharedLandingButtons, "Meet LumosBots"]
  },
  mark: {
    heading: "Mark O'Donnell",
    background: `${imageBasePath}mark_image.png`,
    logo: `${imageBasePath}mark_logo.png`,
    altText: "Mark Logo",
    preloadImage: true,
    basePath: imageBasePath,
    brandColor: "#A9B7C6",
    gptUrl: `${gptBaseUrl}mark`,
    profile: {
      staticText: `Mark O'Donnell is the Visionary and CEO of EOS Worldwide, leading the organization to help millions of entrepreneurs get what they want from their businesses.`
    },
    landingButtons: [...sharedLandingButtons, "Meet MarkBots"]
  },
  ninety: {
    heading: "Ninety.io",
    background: `${imageBasePath}ninety_image.webp`,
    logo: `${imageBasePath}ninety_logo.png`,
    altText: "Ninety Logo",
    preloadImage: true,
    basePath: imageBasePath,
    brandColor: "#A9B7C6",
    gptUrl: `${gptBaseUrl}ninety`,
    profile: {
      staticText: `Ninety.io provides cloud-based tools to help organizations implement EOS effectively and run better companies.`
    },
    landingButtons: [...sharedLandingButtons, "Meet NinetyBots"]
  },
  overland: {
    heading: "Overland Group",
    background: `${imageBasePath}overland_image.png`,
    logo: `${imageBasePath}overland_logo.png`,
    altText: "Overland Logo",
    preloadImage: true,
    basePath: imageBasePath,
    brandColor: "#A9B7C6",
    gptUrl: `${gptBaseUrl}overland`,
    profile: {
      staticText: `Overland Group is a full-service real estate and construction company offering development, design, and building expertise.`
    },
    landingButtons: [...sharedLandingButtons, "Meet OverlandBots"]
  },
  remedyww: {
    heading: "Remedy World Wide",
    background: `${imageBasePath}remedyww_image.jpg`,
    logo: `${imageBasePath}remedyww_logo.png`,
    altText: "Remedy World Wide Logo",
    preloadImage: true,
    basePath: imageBasePath,
    brandColor: "#A9B7C6",
    gptUrl: `${gptBaseUrl}remedyww`,
    profile: {
      staticText: `Remedy World Wide offers innovative healthcare products and solutions for patients and providers worldwide.`
    },
    landingButtons: [...sharedLandingButtons, "Meet RemedyBots"]
  },
  skyline: {
    heading: "Skyline Electric Company",
    background: `${imageBasePath}skyline_image.png`,
    logo: `${imageBasePath}skyline_logo.png`,
    altText: "Skyline Electric Logo",
    preloadImage: true,
    basePath: imageBasePath,
    brandColor: "#FBBF24",
    gptUrl: `${gptBaseUrl}skyline`,
    profile: {
      staticText: `Skyline Electric Company specializes in electrical contracting services, providing high-quality solutions for industrial, commercial, and utility clients.`
    },
    landingButtons: [...sharedLandingButtons, "Meet SkylineBots"]
  },
  techplus: {
    heading: "TechPlus",
    background: `${imageBasePath}techplus_image.png`,
    logo: `${imageBasePath}techplus_logo.png`,
    altText: "TechPlus Logo",
    preloadImage: true,
    basePath: imageBasePath,
    brandColor: "#FBBF24",
    gptUrl: `${gptBaseUrl}techplus`,
    profile: {
      staticText: `TechPlus delivers innovative technology solutions to help organizations modernize operations and improve efficiency.`
    },
    landingButtons: [...sharedLandingButtons, "Meet TechPlusBots"]
  },
  vlcm: {
    heading: "VLCM",
    background: `${imageBasePath}vlcm_image.jpg`,
    logo: `${imageBasePath}vlcm_logo.svg`,
    altText: "VLCM Logo",
    preloadImage: true,
    basePath: imageBasePath,
    brandColor: "#28A745",
    gptUrl: `${gptBaseUrl}vlcm`,
    profile: {
      staticText: `VLCM provides enterprise technology solutions, helping organizations with IT infrastructure, networking, and cybersecurity.`
    },
    landingButtons: [...sharedLandingButtons, "Meet VLCMBots"]
  },
  winward: {
    heading: "Winward Electric",
    background: `${imageBasePath}winward_image.jpg`,
    logo: `${imageBasePath}winward_logo.png`,
    altText: "Winward Electric Logo",
    preloadImage: true,
    basePath: imageBasePath,
    brandColor: "#9C27B0",
    gptUrl: `${gptBaseUrl}winward`,
    profile: {
      staticText: `Winward Electric offers professional electrical contracting services for residential, commercial, and industrial clients.`
    },
    landingButtons: [...sharedLandingButtons, "Meet WinwardBots"]
  },
  default: {
    heading: "ClarityBots",
    background: `${imageBasePath}default_image.jpg`,
    logo: `${imageBasePath}default_logo.png`,
    altText: "ClarityBots Default Logo",
    preloadImage: false,
    basePath: imageBasePath,
    brandColor: "#FF7900",
    gptUrl: `${gptBaseUrl}default`,
    profile: {
      staticText: `This is a default ClarityBots profile. Please configure your clientConfig.js with the correct client information for your subdomain.`
    },
    landingButtons: [...sharedLandingButtons, "Meet ClarityBots"]
  }
};

// -------------------------------
// Subdomain detection
// -------------------------------
(function () {
  let hostname = location.hostname.toLowerCase();
  let subdomain;

  if (hostname === "localhost" || hostname.startsWith("127.")) {
    subdomain = "bi"; // Local dev default
  } else if (hostname.includes("--")) {
    subdomain = hostname.split("--")[0];
  } else {
    subdomain = hostname.split(".")[0];
  }

  subdomain = subdomain.toLowerCase();
  console.log("🌐 Detected subdomain:", subdomain);

  window.clientConfig = clients[subdomain] || clients.default;
})();
