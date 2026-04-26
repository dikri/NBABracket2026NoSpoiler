# 🏀 NBA Playoffs 2026 — #DS4's Personal Bracket

Track the 2026 NBA Playoffs at your own pace. No spoilers, no stress.

## What is this?

A single-page PWA that lets you manually track every series from the Play-In Tournament through the NBA Finals. Built for fans who watch games on delay via League Pass and need a spoiler-free way to keep score.

## Features

- **Full Bracket**: Play-In → First Round → Conf. Semis → Conf. Finals → Finals
- **Auto-Advance**: Winners automatically move to the next round
- **Game Tracker**: Visual `GAME 1 2 3 4 5 6 7` boxes per series — green checkmarks for watched games
- **Date Tracker**: "Watched through" date picker so you know where to resume on League Pass
- **🔥 Dynamic Player Heads**: Star headshots appear next to each matchup
  - Both team stars shown once a matchup is set
  - Fire glow animation for the series winner
  - Red/greyed out for the eliminated team
  - 💤 rest badge when a team is waiting for their next opponent
- **Sound Effects**: Sneaker squeaks, swish, arena fanfares, brick clanks, and music riffs (Pump It, Welcome to the Jungle)
- **Big Star Players**: Dynamic full-size player images at the bottom corners, updating as teams get eliminated
- **Conference Standings**: Final regular season tables in each conference tab
- **Export/Import**: Transfer your bracket between devices via clipboard code
- **Installable**: Add to Home Screen on iPhone/Android for an app-like experience
- **Offline Support**: Service Worker caches the app for offline use
- **Built-in Guide & Teaser**: Anleitung and animated teaser accessible via top navigation

## Usage

Open the GitHub Pages URL ( https://dikri.github.io/NBABracket2026NoSpoiler/ )  in any browser, or install as PWA:
- **iPhone**: Safari → Share → "Add to Home Screen"
- **Chrome**: Address bar → Install icon

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire app (bracket + guide + teaser) |
| `manifest.json` | PWA manifest for installation |
| `sw.js` | Service Worker for offline caching |

## Credits

Built by Dirk & [Kiro](https://kiro.dev) 🏀
