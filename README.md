# Marcela & Rob — Wedding Website

Static wedding website for Marcela & Rob, 23 April 2027 at Castle De Haar, Utrecht.

## Stack

- Plain HTML/CSS/JS — no build step, no framework
- RSVP via [Formspree](https://formspree.io) (form ID: `mojzkngo`)
- Photo gallery with lightbox
- Live countdown timer

## Running locally

```bash
cd src
node server.js
# → http://localhost:3001
```

## Personalising

| File | What to edit |
|---|---|
| `src/index.html` | Names, dates, venue, story text, dress code, accommodation, photo `data-src` attributes |
| `src/server.js` | Port (default 3001) |
| `src/photos/` | Drop photo files here, reference them via `data-src="photos/filename.jpg"` on each `.gallery-item` |

## RSVP

Submissions go to the Formspree dashboard. To change the endpoint, replace the form `action` URL in `src/index.html`.
