# Decisions — Wedding Website

## No framework / no build step

Plain HTML/CSS/JS. No React, no bundler. Fast to iterate, nothing to install, easy for non-devs to edit directly.

## Formspree for RSVP

Free tier, no backend needed, no server-side code. Submissions arrive by email and in the Formspree dashboard. Form ID: `mojzkngo`.

## Node.js static server (no dependency)

Uses Node's built-in `http` module only. Port 3001 (3000 was occupied on the host).

## Private GitHub repo

Follows AI Governance Workspace convention: all new repos private by default.
