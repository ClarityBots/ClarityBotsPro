# 📦 ClarityBots Release – v2.3.0

**Tag:** `v2.3.0`  
**Date:** July 20, 2025  
**Status:** ✅ Gold-standard backup  
**Filename:** ClarityBots-v2.3.0.zip

---

## 🎯 Summary

This release aligns the background image fade-in perfectly with the UI content animations for a clean, professional loading experience. It ensures your visual hierarchy is preserved while eliminating flickers or mismatches between background and overlay elements.

---

## ✨ What’s New

- ✅ **Synced Background Fade**
  - Background loads using `Image()` and applies after a 1.5s delay to match UI animations
- ✅ **Inline Fallback Background**
  - Ensures a branded experience is immediately visible, even before JS executes
- ✅ **Preload Optimization**
  - Dynamically inserts a `<link rel="preload">` for the appropriate background image based on subdomain
- ✅ **Unified Transition Timing**
  - All background and content elements now animate smoothly at 1.5s

---

## 💡 Technical Highlights

- `index.html`
  - Inline fallback background in `<body style=...>`
  - `.bg-fade` and `.loaded` classes applied with intentional delay
- `styles.css`
  - `transition: background-image 1.5s ease-in-out` added to `body`
- JavaScript Logic
  - Uses `img.onload` + `setTimeout(1500)` before applying `.loaded`

---

## 🛠️ Installation / Restore

From the root of your ClarityBots project:

```bash
git checkout tags/v2.3.0
