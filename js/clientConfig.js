// js/clientConfig.js

console.log("✅ clientConfig.js is loaded");

// Base GPT URL for Meet the Author GPT
const BASE_GPT_URL = "https://chatgpt.com/g/g-682b24c7f4d881919884989d08b645ed-claritybots-meet-the-author?q=";

// -------------------------------
// Full client definitions
// -------------------------------
export const clients = {
  alder: {
    heading: "Alder Construction",
    background: "images/alder_image.jpg",
    logo: "images/alder_logo.png",
    altText: "Alder Construction Logo",
    preloadImage: true,
    basePath: "images/",
    brandColor: "#445777",
    gptUrl: BASE_GPT_URL + "alder",
    profile: {
      source: "static",
      linkedInUrl: "",
      staticText: `Alder Construction is a leading provider of infrastructure and commercial construction services, known for delivering high-quality projects on time and within budget.`
    }
  },
  bi: {
    heading: "Business Intuition",
    background: "images/business_intuition_image.jpg",
    logo: "images/business_intuition_logo.png",
    altText: "Business Intuition Logo",
    preloadImage: true,
    basePath: "images/",
    brandColor: "#F04E23",
    gptUrl: BASE_GPT_URL + "bi",
    profile: {
      source: "static",
      linkedInUrl: "https://www.linkedin.com/in/kylefowles/",
      staticText: `Kyle Fowles is a Certified EOS Implementer®, Kolbe Certified Consultant, and Certified Outgrow Advisor. He has facilitated over 250 EOS Session Days, with a 9.5/10 client rating. Kyle helps entrepreneurial leadership teams gain clarity, accountability, and traction so they can grow with confidence.`
    }
  },
  cop: {
    heading: "COP Construction",
    background: "images/cop_image.jpg",
    logo: "images/cop_logo.png",
    altText: "COP Construction Logo",
    preloadImage: true,
    basePath: "images/",
    brandColor: "#6C7C90",
    gptUrl: BASE_GPT_URL + "cop",
    profile: {
      source: "static",
      linkedInUrl: "",
      staticText: `COP Construction is a full-service construction contractor specializing in heavy civil and infrastructure projects across the region.`
    }
  },
  eosww: {
    heading: "EOS Worldwide",
    background: "images/eosww_image.png",
    logo: "images/eosww_logo.webp",
    altText: "EOS Worldwide Logo",
    preloadImage: true,
    basePath: "images/",
    brandColor: "#6C7C90",
    gptUrl: BASE_GPT_URL + "eosww",
    profile: {
      source: "static",
      linkedInUrl: "https://www.linkedin.com/company/eos-worldwide/",
      staticText: `EOS Worldwide provides simple, practical tools to help entrepreneurs run their businesses more effectively and achieve their vision.`
    }
  },
  havenlight: {
    heading: "Havenlight",
    background: "images/havenlight_image.jpg",
    logo: "images/havenlight_logo.png",
    altText: "Havenlight Logo",
    preloadImage: true,
    basePath: "images/",
    brandColor: "#A9B7C6",
    gptUrl: BASE_GPT_URL + "havenlight",
    profile: {
      source: "static",
      linkedInUrl: "",
      staticText: `Havenlight is a fine art company specializing in faith-inspired artwork, helping people bring meaningful art into their homes and spaces.`
    }
  },
  lumos: {
    heading: "Lumos",
    background: "images/lumos_image.webp",
    logo: "images/lumos_logo.png",
    altText: "Lumos Logo",
    preloadImage: true,
    basePath: "images/",
    brandColor: "#A9B7C6",
    gptUrl: BASE_GPT_URL + "lumos",
    profile: {
      source: "static",
      linkedInUrl: "https://www.linkedin.com/in/dan-example/",
      staticText: `Dan Smith is the founder of Lumos Consulting, specializing in leadership alignment, growth strategy, and operational excellence. He works with executive teams to break through plateaus, align their vision, and reach their highest potential.`
    }
  },
  mark: {
    heading: "Mark O'Donnell",
    background: "images/mark_image.png",
    logo: "images/mark_logo.png",
    altText: "Mark Logo",
    preloadImage: true,
    basePath: "images/",
    brandColor: "#A9B7C6",
    gptUrl: BASE_GPT_URL + "mark",
    profile: {
      source: "static",
      linkedInUrl: "https://www.linkedin.com/in/markodonnell-eosworldwide/",
      staticText: `Mark O'Donnell is the Visionary and CEO of EOS Worldwide, leading the organization to help millions of entrepreneurs get what they want from their businesses.`
    }
  },
  ninety: {
    heading: "Ninety.io",
    background: "images/ninety_image.webp",
    logo: "images/ninety_logo.png",
    altText: "Ninety Logo",
    preloadImage: true,
    basePath: "images/",
    brandColor: "#A9B7C6",
    gptUrl: BASE_GPT_URL + "ninety",
    profile: {
      source: "static",
      linkedInUrl: "https://www.linkedin.com/company/ninety-io/",
      staticText: `Ninety.io provides cloud-based tools to help organizations implement EOS effectively and run better companies.`
    }
  },
  overland: {
    heading: "Overland Group",
    background: "images/overland_image.png",
    logo: "images/overland_logo.png",
    altText: "Overland Logo",
    preloadImage: true,
    basePath: "images/",
    brandColor: "#A9B7C6",
    gptUrl: BASE_GPT_URL + "overland",
    profile: {
      source: "static",
      linkedInUrl: "",
      staticText: `Overland Group is a full-service real estate and construction company offering development, design, and building expertise.`
    }
  },
  remedyww: {
    heading: "Remedy World Wide",
    background: "images/remedyww_image.jpg",
    logo: "images/remedyww_logo.png",
    altText: "Remedy World Wide Logo",
    preloadImage: true,
    basePath: "images/",
    brandColor: "#A9B7C6",
    gptUrl: BASE_GPT_URL + "remedyww",
    profile: {
      source: "static",
      linkedInUrl: "",
      staticText: `Remedy World Wide offers innovative healthcare products and solutions for patients and providers worldwide.`
    }
  },
  skyline: {
    heading: "Skyline Electric Company",
    background: "images/skyline_image.png",
    logo: "images/skyline_logo.png",
    altText: "Skyline Electric Logo",
    preloadImage: true,
    basePath: "images/",
    brandColor: "#FBBF24",
    gptUrl: BASE_GPT_URL + "skyline",
    profile: {
      source: "static",
      linkedInUrl: "",
      staticText: `Skyline Electric Company specializes in electrical contracting services, providing high-quality solutions for industrial, commercial, and utility clients.`
    }
  },
  techplus: {
    heading: "TechPlus",
    background: "images/techplus_image.png",
    logo: "images/techplus_logo.png",
    altText: "TechPlus Logo",
    preloadImage: true,
    basePath: "images/",
    brandColor: "#FBBF24",
    gptUrl: BASE_GPT_URL + "techplus",
    profile: {
      source: "static",
      linkedInUrl: "",
      staticText: `TechPlus delivers innovative technology solutions to help organizations modernize operations and improve efficiency.`
    }
  },
  vlcm: {
    heading: "VLCM",
    background: "images/vlcm_image.jpg",
    logo: "images/vlcm_logo.svg",
    altText: "VLCM Logo",
    preloadImage: true,
    basePath: "images/",
    brandColor: "#28A745",
    gptUrl: BASE_GPT_URL + "vlcm",
    profile: {
      source: "static",
      linkedInUrl: "",
      staticText: `VLCM provides enterprise technology solutions, helping organizations with IT infrastructure, networking, and cybersecurity.`
    }
  },
  winward: {
    heading: "Winward Electric",
    background: "images/winward_image.jpg",
    logo: "images/winward_logo.png",
    altText: "Winward Electric Logo",
    preloadImage: true,
    basePath: "images/",
    brandColor: "#9C27B0",
    gptUrl: BASE_GPT_URL + "winward",
    profile: {
      source: "static",
      linkedInUrl: "",
      staticText: `Winward Electric offers professional electrical contracting services for residential, commercial, and industrial clients.`
    }
  },
  default: {
    heading: "ClarityBots",
    background: "images/default_image.jpg",
    logo: "images/default_logo.png",
    altText: "ClarityBots Default Logo",
    preloadImage: false,
    basePath: "images/",
    brandColor: "#FF7900",
    gptUrl: BASE_GPT_URL + "default",
    profile: {
      source: "static",
      linkedInUrl: "",
      staticText: `This is a default ClarityBots profile. Please configure your clientConfig.js with the correct client information for your subdomain.`
    }
  }
};

// -------------------------------
// Improved subdomain detection
// -------------------------------
(function () {
  let hostname = location.hostname.toLowerCase();

  if (hostname === "localhost" || hostname.startsWith("127.")) {
    console.log("🛠 Local environment detected, using 'bi' profile for testing");
    window.clientConfig = clients["bi"];
    return;
  }

  let subdomain = hostname.split(".")[0];
  if (subdomain.includes("--")) {
    subdomain = subdomain.split("--")[0];
  }
  subdomain = subdomain.toLowerCase();

  console.log("🌐 Detected subdomain:", subdomain);
  window.clientConfig = clients[subdomain] || clients.default;
  console.log("📦 Loaded client config:", window.clientConfig.heading);
})();
