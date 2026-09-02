# Sivanambi & Bhargavi — Updated Wedding Invitation

This is the updated GitHub Pages-ready version.

## Files

- `index.html` — complete invitation
- `styles.css` — royal maroon / cream / gold styling
- `script.js` — two event countdowns + music button
- `assets/couple.jpg` — the single couple photo used on the opening page

## What was changed

1. Only one photo remains: the opening/hero photo.
2. The royal typography and maroon/gold/cream palette are retained.
3. Reception details and the reception countdown are in the same event card.
4. Wedding details and the wedding countdown are in the same event card.
5. Venue information is contained in one clean card so the address/details do not overlap the map area.
6. Added railway-station and bus-stand route cards with Google Maps directions.
7. Added nearby/local bus approach points.
8. Removed the later photo/gallery section.
9. The closing section remains text-only.

## GitHub Pages

Upload these files to the repository root:

```text
index.html
styles.css
script.js
assets/
  couple.jpg
```

Then in GitHub:
Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.

## Optional music

The floating music button is retained. If you want music, add your own licensed MP3 as:

```text
assets/music.mp3
```

The current JavaScript will automatically use it.

## Important route note

The invitation uses the venue's public Plus Code/address and opens Google Maps for live navigation. Distances shown on the page are intentionally approximate because Google Maps can change the route/distance depending on the starting point and road conditions.
