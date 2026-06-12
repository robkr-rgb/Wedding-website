# Running Locally

## Prerequisites

- Node.js (any version with built-in `http` module — v14+)
- No npm install required

## Start

```bash
cd src
node server.js
```

Site available at `http://localhost:3001`.

## Adding photos

1. Drop image files into `src/photos/`
2. In `src/index.html`, find the `.gallery-item` divs
3. Set `data-src="photos/your-filename.jpg"` on the relevant item
4. The lightbox activates automatically on click

## Changing the RSVP endpoint

Find the `<form>` tag in `src/index.html` and update the `action` attribute:

```html
<form id="rsvp-form" action="https://formspree.io/f/YOUR_ID" method="POST">
```

## Port conflict

If port 3001 is in use, edit the `PORT` constant at the top of `src/server.js`.
