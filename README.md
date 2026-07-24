# M.A.U (合気) — Way of the Harmonizing Blade

A browser-based top-down action game where you walk the path of the Harmonizing Blade, fighting through waves of enemies across distinctive arenas.

## Tech

- Single `index.html` with embedded CSS and vanilla JavaScript
- HTML5 Canvas for gameplay
- No build step or external dependencies (aside from Google Fonts)

## How to Run

1. Open `index.html` in any modern web browser.
2. Click **出陣 — Enter Battle** to start.

## Game Features

### Main Menu
- Animated ember background (`bgCanvas`) with drifting particles
- Rotating seal emblem (合気) with dual-ring animation
- Current level pill with persistent progression
- Four menu buttons with hover/active feedback

### Choose Avatar
- 5 selectable forms with unique color palettes and images:
  - White Blade (Shiro Ronin)
  - Shadow Ronin (Kage Wanderer)
  - Indigo Sentinel (Ai Guardian)
  - Gilded Blossom (Kinka Warrior)
  - Ember Wolf (Honoo Kensei)
- Visual selected/equipped feedback

### Select Arena
- 10 maps with unique themes and fallback colors:
  - Crimson Hollow, Misty Peaks, Shadow Marsh, Golden Temple, Frozen Abyss
  - Ember Wastes, Jade Cavern, Storm Ridge, Void Realm, Aurora Drift
- Map thumbnails preloaded from `assets/maps/`
- Confirmation starts the run immediately

### Battle Loop
- **Movement:** WASD or Arrow Keys
- **Aim:** Mouse
- **Auto-attack:** Triggers when an enemy is in range of the crosshair
- **Stats:** ATK, SPD, KB (knockback), Crit, HP
- **HP bar:** Large HUD bar with segmented overlay
- **Wave progression:** Enemies spawn in timed intervals; surviving a wave triggers the next
- **Knockback / dying state:** Enemies separate via physics-based knockback before removal
- **Damage popups:** Floating numbers with crit highlight

### HUD
- Player card with avatar, name, title, and mini stat grid
- Large HP fill with live text readout
- Wave tracker dots (past / current / upcoming)
- Remaining enemies count

### Rewards & Progression
- XP gained from kills
- Automatic level-ups on return to menu
- Best wave, total kills, total runs persisted locally in session state

### Game Over
- Summary of waves survived and enemies defeated
- Retry with same avatar + map
- Return to Dojo (main menu)

### About
- Lore blocks describing Origin, Purpose, The Harmonizing Blade, and Worlds

### How to Play
- Gallery-style visual guide (5 cards)
- Key-principles summary (movement, aiming, auto-attack, wave survival, avatar/arena choices)

## Assets

- `assets/player/avatar_1.png` — `assets/player/avatar_5.png`
- `assets/maps/map_1.png` — `assets/maps/map_10.png`
- `assets/enemies/enemy_tier1_*.png`, `_tier2_*.png`, `_tier3_*.png`
- `web_icon.png`

## Project Structure

```
M.A.U (合気) - Game Website/
├─ index.html
├─ web_icon.png
└─ assets/
   ├─ player/
   ├─ maps/
   └─ enemies/
```

## Browser Support

Chrome, Firefox, Edge, and Safari with Canvas 2D support.
