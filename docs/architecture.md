# Architecture — Wedding Website

## Overview

Single-page static site. No framework, no build step, no dependencies.

```
src/
  index.html    — full site (all sections, styles, and scripts inline)
  server.js     — minimal Node.js static file server
  photos/       — drop photo files here; reference via data-src on .gallery-item elements
```

## Sections

| Section | Description |
|---|---|
| Hero | Names, date, venue, live countdown timer |
| Our Story | Free-text narrative (placeholder) |
| Details | 4-card grid: ceremony, reception, dress code, accommodation |
| Gallery | 6-slot CSS grid with lightbox; photos loaded via `data-src` |
| RSVP | Form POSTing to Formspree (ID: `mojzkngo`) |
| Footer | Monogram, names, date |

## RSVP flow

```
Guest fills form → AJAX POST to Formspree → success/error state in UI
Formspree forwards → Rob's email + dashboard
```

## Styling

CSS custom properties in `:root`. No external stylesheets or fonts. Colors: `--cream`, `--gold`, `--gold-light`, `--dark`, `--mid`, `--light`.

## Server

`src/server.js` uses Node's built-in `http` module only. No npm install required. Default port: 3001.
