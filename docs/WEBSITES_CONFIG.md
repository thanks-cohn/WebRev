# Website and CDN configuration

WebRev must not hardcode deployable website origins throughout source code.

The canonical configuration lives in:

`config/websites.json`

Current WebRev roles:

- `primary` — the main application/control/documentation origin
- `cdn` — the heavy immutable asset origin

Current configured values:

- primary: `https://webrev.online`
- cdn: `https://cdn.webrev.online`

These are configuration values, not framework constants.

Code should request a website by semantic role rather than repeating literal domains.

Example:

```ts
const origin = getWebsiteOrigin(websites, "cdn");
```

This allows deployment topology to change later without requiring broad source edits.

## Responsibility-driven routing

Each website entry declares responsibilities.

For example, the CDN currently owns:

- WASM binaries
- video
- models
- textures
- revisioned static assets
- large media
- downloadable artifacts

The primary origin owns:

- application shell
- docs
- inspection discovery
- control surface

Responsibilities may be reassigned later without changing the conceptual APIs that consume them.
