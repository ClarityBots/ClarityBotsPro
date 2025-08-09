# ClarityBots Gold Standard Backup – v2.6.0

## Contents
1. index.html – Working production version with:
   - Sixth button "Meet [Name]" dynamic from clientConfig.js
   - Single universal ChatGPT link
   - Dynamic profile pre-fill
   - Works for staticText now, LinkedIn-ready later
2. clientConfig.js – Improved subdomain detection:
   - Handles "www" prefix
   - Detects correct subdomain for Lumos, BI, etc.
   - Attaches active client config to window.clientConfig
3. README.txt – This file

---

## How to Restore

1. **Upload Files**
   - Place `index.html` at your project root (or wherever your homepage is served from).
   - Place `clientConfig.js` in `/js/` folder (update `<script src="clientConfig.js">` path if different).

2. **Verify**
   - Open browser console (`F12`) → You should see:
     ```
     ✅ clientConfig.js is loaded
     🌐 Detected subdomain: lumos
     ```
   - Sixth button should read "Meet Dan" on lumos.claritybots.ai, "Meet Kyle" on bi.claritybots.ai.

3. **Test**
   - Click sixth button → Should:
     - Inside chat UI → Send profile text into ChatGPT.
     - On landing page → Open ChatGPT with profile pre-filled.

---

## Notes
- To update profile text later:
  - Edit `staticText` in `clientConfig.js` for the specific client.
- When LinkedIn integration is ready:
  - Replace `staticText` with dynamically fetched LinkedIn data.
  - Sixth button will still work without further changes.
- If adding new clients:
  - Add a new object in `clients` inside `clientConfig.js`.
  - Ensure subdomain matches the new client's subdomain.

---

## Backup Tagging
Recommended Git tag for this version:
