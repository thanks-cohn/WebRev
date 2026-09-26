# Website and CDN configuration

WebRev does not hardcode deployable origins throughout source code.

The canonical configuration lives in:

`config/websites.json`

## Model

A website entry has:

- a stable website ID
- one origin
- zero or more broad `categories`
- zero or more granular `responsibilities`

A single origin may serve many categories at once.

For example, one website can simultaneously be:

- landing
- application
- documentation
- inspection
- control

while another may be primarily:

- CDN
- assets
- distribution

Categories are intentionally broad. Responsibilities are intentionally granular.

Neither list is required to be exhaustive.

WebRev should allow a project to start simple and become more granular only when the architecture needs it.

## Defaults

The optional `defaults` object maps a category to the preferred website ID.

This lets code ask:

```ts
resolveCategory(websites, "landing")
resolveCategory(websites, "cdn")
```

instead of knowing which concrete origin currently owns that job.

## Responsibilities

For narrower questions, code can resolve a responsibility:

```ts
resolveResponsibility(websites, "wasm")
resolveResponsibility(websites, "video")
```

A responsibility may be provided by more than one website. The resolver therefore returns all matching entries.

This is deliberate. WebRev must not assume that a responsibility has exactly one provider forever.

## Granularity rule

Do not require users to model every possible responsibility before they need it.

A small project may declare only:

```json
{
  "categories": ["landing", "cdn"]
}
```

A larger project may distinguish:

- public landing
- control surface
- documentation
- media CDN
- WASM CDN
- downloads
- inspection
- API
- tournament traffic
- regional mirrors

The same schema should support both.

## Single source of truth

Concrete origins are intentionally defined only in `config/websites.json`.

Documentation and application code should refer to website IDs, categories, or responsibilities rather than duplicating domain strings.
