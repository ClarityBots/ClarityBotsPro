// js/clients/fullClientList.js

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

// Shared button label array
const sharedLandingButtons = [
  "ClarityRocks™",
  "ClaritySolved™",
  "ClarityCards™",
  "ClarityValues™",
  "ClaritySource™"
];

// -------------------------------
// Full Client List (Alphabetical)
// -------------------------------
export const defaultClients = {
  alder: {
    heading: "Alder Construction",
    background: `${imageBasePath}alder_image.jpg`,
    logo: `${imageBasePath}alder_logo.png`,
    altText: "Alder Construction Logo",
    preloadImage: true,
    brandColor: "#445777",
    profile: {
      staticText: `Alder Construction delivers infrastructure and commercial projects with a focus on quality, timelines, and budget.`
    },
    landingButtons: [...sharedLandingButtons, "Meet AlderBots"],
    button6Url: `${gptBaseUrl}g-682b24c7f4d881919884989d08b645ed-claritybots-about-us`
  },
  bi: {
    heading: "Business Intuition",
    background: `${imageBasePath}business_intuition_image.jpg`,
    logo: `${imageBasePath}business_intuition_logo.png`,
    altText: "Business Intuition Logo",
    preloadImage: true,
    brandColor: "#F04E23",
    profile: {
      staticText: `Kyle Fowles empowers growth-minded leaders through EOS, Kolbe, and Outgrow frameworks.`
    },
    landingButtons: [...sharedLandingButtons, "Meet BI Bots"],
    button6Url: `${gptBaseUrl}g-682b24c7f4d881919884989d08b645ed-claritybots-about-us`
  },
  cop: {
    heading: "COP Construction",
    background: `${imageBasePath}cop_image.jpg`,
    logo: `${imageBasePath}cop_logo.png`,
    altText: "COP Construction Logo",
    preloadImage: true,
    brandColor: "#6C7C90",
    profile: {
      staticText: `Heavy civil and infrastructure contractor delivering excellence across the Intermountain West.`
    },
    landingButtons: [...sharedLandingButtons, "Meet COP Bots"],
    button6Url: `${gptBaseUrl}g-682b24c7f4d881919884989d08b645ed-claritybots-about-us`
  },
  eosww: {
    heading: "EOS Worldwide",
    background: `${imageBasePath}eosww_image.png`,
    logo: `${imageBasePath}eosww_logo.webp`,
    altText: "EOS Worldwide Logo",
    preloadImage: true,
    brandColor: "#6C7C90",
    profile: {
      staticText: `EOS Worldwide helps entrepreneurs get what they want from their businesses through simple, proven tools.`
    },
    landingButtons: [...sharedLandingButtons, "Meet EOS Bots"],
    button6Url: `${gptBaseUrl}g-682b24c7f4d881919884989d08b645ed-claritybots-about-us`
  },
  havenlight: {
    heading: "Havenlight",
    background: `${imageBasePath}havenlight_image.jpg`,
    logo: `${imageBasePath}havenlight_logo.png`,
    altText: "Havenlight Logo",
    preloadImage: true,
    brandColor: "#A9B7C6",
    profile: {
      staticText: `Fine art that brings inspiration and light to homes, galleries, and sacred spaces.`
    },
    landingButtons: [...sharedLandingButtons, "Meet HavenBots"],
    button6Url: `${gptBaseUrl}g-682b24c7f4d881919884989d08b645ed-claritybots-about-us`
  },
  lumos: {
    heading: "Lumos Painting Company",
    background: `${imageBasePath}lumos_image.webp`,
    logo: `${imageBasePath}lumos_logo.png`,
    altText: "Lumos Logo",
    preloadImage: true,
    brandColor: "#A9B7C6",
    profile: {
      staticText: `Founded by Arthur Pili, Lumos Painting delivers quality finishes, warranties, and unmatched attention to detail.`
    },
    landingButtons: [...sharedLandingButtons, "Meet LumosBots"],
    button6Url: `${gptBaseUrl}g-682b24c7f4d881919884989d08b645ed-claritybots-about-us`
  },
  mark: {
    heading: "Mark O'Donnell",
    background: `${imageBasePath}mark_image.png`,
    logo: `${imageBasePath}mark_logo.png`,
    altText: "Mark Logo",
    preloadImage: true,
    brandColor: "#A9B7C6",
    profile: {
      staticText: `Mark is the Visionary of EOS Worldwide, helping millions of leaders run better businesses.`
    },
    landingButtons: [...sharedLandingButtons, "Meet MarkBots"],
    button6Url: `${gptBaseUrl}g-682b24c7f4d881919884989d08b645ed-claritybots-about-us`
  },
  ninety: {
    heading: "Ninety.io",
    background: `${imageBasePath}ninety_image.webp`,
    logo: `${imageBasePath}ninety_logo.png`,
    altText: "Ninety Logo",
    preloadImage: true,
    brandColor: "#A9B7C6",
    profile: {
      staticText: `Ninety.io equips EOS-run businesses with digital tools for clarity, traction, and team health.`
    },
    landingButtons: [...sharedLandingButtons, "Meet NinetyBots"],
    button6Url: `${gptBaseUrl}g-682b24c7f4d881919884989d08b645ed-claritybots-about-us`
  },
  overland: {
    heading: "Overland Group",
    background: `${imageBasePath}overland_image.png`,
    logo: `${imageBasePath}overland_logo.png`,
    altText: "Overland Logo",
    preloadImage: true,
    brandColor: "#A9B7C6",
    profile: {
      staticText: `Full-service real estate development, design, and construction firm serving the Mountain West.`
    },
    landingButtons: [...sharedLandingButtons, "Meet OverlandBots"],
    button6Url: `${gptBaseUrl}g-682b24c7f4d881919884989d08b645ed-claritybots-about-us`
  },
  remedyww: {
    heading: "Remedy World Wide",
    background: `${imageBasePath}remedyww_image.jpg`,
    logo: `${imageBasePath}remedyww_logo.png`,
    altText: "Remedy World Wide Logo",
    preloadImage: true,
    brandColor: "#A9B7C6",
    profile: {
      staticText: `Innovative health solutions provider improving outcomes for patients and providers.`
    },
    landingButtons: [...sharedLandingButtons, "Meet RemedyBots"],
    button6Url: `${gptBaseUrl}g-682b24c7f4d881919884989d08b645ed-claritybots-about-us`
  },
  skyline: {
    heading: "Skyline Electric Company",
    background: `${imageBasePath}skyline_image.png`,
    logo: `${imageBasePath}skyline_logo.png`,
    altText: "Skyline Electric Logo",
    preloadImage: true,
    brandColor: "#FBBF24",
    profile: {
      staticText: `Electrical contractor trusted by industrial, utility, and commercial partners across the region.`
    },
    landingButtons: [...sharedLandingButtons, "Meet SkylineBots"],
    button6Url: `${gptBaseUrl}g-682b24c7f4d881919884989d08b645ed-claritybots-about-us`
  },
  techplus: {
    heading: "TechPlus",
    background: `${imageBasePath}techplus_image.png`,
    logo: `${imageBasePath}techplus_logo.png`,
    altText: "TechPlus Logo",
    preloadImage: true,
    brandColor: "#FBBF24",
    profile: {
      staticText: `TechPlus provides smart solutions for digital transformation and operational efficiency.`
    },
    landingButtons: [...sharedLandingButtons, "Meet TechPlusBots"],
    button6Url: `${gptBaseUrl}g-682b24c7f4d881919884989d08b645ed-claritybots-about-us`
  },
  vlcm: {
    heading: "VLCM",
    background: `${imageBasePath}vlcm_image.jpg`,
    logo: `${imageBasePath}vlcm_logo.svg`,
    altText: "VLCM Logo",
    preloadImage: true,
    brandColor: "#28A745",
    profile: {
      staticText: `VLCM is a leading IT solutions provider in Utah offering networking, infrastructure, and cybersecurity services.`
    },
    landingButtons: [...sharedLandingButtons, "Meet VLCMBots"],
    button6Url: `${gptBaseUrl}g-682b24c7f4d881919884989d08b645ed-claritybots-about-us`
  },
  winward: {
    heading: "Winward Electric",
    background: `${imageBasePath}winward_image.jpg`,
    logo: `${imageBasePath}winward_logo.png`,
    altText: "Winward Electric Logo",
    preloadImage: true,
    brandColor: "#9C27B0",
    profile: {
      staticText: `Electrical solutions for residential, commercial, and industrial customers in the Intermountain West.`
    },
    landingButtons: [...sharedLandingButtons, "Meet WinwardBots"],
    button6Url: `${gptBaseUrl}g-682b24c7f4d881919884989d08b645ed-claritybots-about-us`
  },
  default: {
    heading: "ClarityBots",
    background: `${imageBasePath}default_image.jpg`,
    logo: `${imageBasePath}default_logo.png`,
    altText: "ClarityBots Default Logo",
    preloadImage: false,
    brandColor: "#FF7900",
    profile: {
      staticText: `This is a default ClarityBots profile. Please configure your clientConfig.js with the correct client information for your subdomain.`
    },
    landingButtons: [...sharedLandingButtons, "Meet ClarityBots"],
    button6Url: `${gptBaseUrl}g-682b24c7f4d881919884989d08b645ed-claritybots-about-us`
  }
};
