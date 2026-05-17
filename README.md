# 🏀 NBA Playoffs 2026 — #DS4's Personal Bracket

Track the 2026 NBA Playoffs at your own pace. No spoilers, no stress.

## What is this?

A single-page PWA that lets you manually track every series from the Play-In Tournament through the NBA Finals. Built for fans who watch games on delay via League Pass and need a spoiler-free way to keep score.

## Features

- **Full Bracket**: Play-In → First Round → Conf. Semis → Conf. Finals → Finals
- **Auto-Advance**: Winners automatically move to the next round
- **Game Tracker**: `GAME 1-7` boxes between teams — ▲ green arrow for top team wins, ▼ gold arrow for bottom team wins. Hover/long-press to tag games:
  - 💨 Blowout (≥20pt) · 💀 Demolition (≥30pt) · ⚡ Nail-biter (≤5pt) · ⏱️ OT · ⏱️⏱️ 2OT
  - Enter score → auto-tagged, or pick manually
- **Date Tracker**: "Watched through" date + countdown showing days behind live
- **🔥 Dynamic Player Heads**: Star headshots next to each matchup
  - Both team stars shown once a matchup is set
  - Fire glow animation for the series winner
  - Red/greyed out for the eliminated team
  - 💤 rest badge when waiting for next opponent
  - 🧹 **SWEPT** stamp + intense flames on 4-0 wins
  - 🐺 **UPSET** stamp + purple glow when underdog wins (seed diff ≥ 3)
  - 🧹🐺 **Combo**: Both stamps in cross pattern with slam animation + dust particles on underdog sweeps
- **Conference Champion Badge**: Team logo + title appears when a conference winner is decided
- **Finals Celebration**: All 5 starters of the champion team appear with fire glow
- **Mirrored Brackets**: West flows left→right, East flows right→left (like a real TV bracket)
- **+ Button Lock**: Disabled once a series is decided (no accidental extra clicks)
- **Sound Effects**: Sneaker squeaks, swish, arena fanfares, brick clanks, Pump It, Welcome to the Jungle
- **Big Star Players**: Dynamic full-size player images at bottom corners, showing 2 stars from same team when only 1 team remains
- **Language Toggle**: 🇬🇧 EN / 🇩🇪 DE switch for the guide
- **Export/Import**: Transfer bracket + watch date between devices
- **Installable PWA**: Add to Home Screen on iPhone/Android
- **Offline Support**: Service Worker caches the app
- **Built-in Guide & Animated Teaser**

## Usage

Open the GitHub Pages URL in any browser, or install as PWA:
- **iPhone**: Safari → Share → "Add to Home Screen"
- **Chrome**: Address bar → Install icon
- **📱 Landscape mode recommended** on mobile

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire app (bracket + guide + teaser) |
| `manifest.json` | PWA manifest for installation |
| `sw.js` | Service Worker for offline caching |

## Credits

Built by Dirk & [Kiro](https://kiro.dev) 🏀

## Disclaimer

Unofficial fan project. Not affiliated with or endorsed by the NBA. Team logos and player images loaded from cdn.nba.com, property of the NBA and its teams. For personal, non-commercial use only.
