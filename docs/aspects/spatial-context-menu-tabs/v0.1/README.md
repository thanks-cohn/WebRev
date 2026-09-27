# Spatial Context-Menu Tabs — v0.1 Draft

Status: **exploratory / non-actionable**

This document preserves a rough interaction concept discussed for WebRev-adjacent tooling. It is intentionally versioned as a design aspect, not as an implementation requirement. The current prototype is considered **decent but not the end vision**.

## Why this exists

The goal is to explore a context-menu navigation system that keeps deep paths spatially legible and recoverable without forcing the user to restart from the root every time.

The concept grew out of a REDOWN Explore use case:

- right-click a file
- choose **Move to…**
- show a Cloudflare account
- show top-level buckets
- continue through nested folders/paths
- allow file reorganization from the context interaction

This document preserves the interaction language independently of any specific production implementation.

## Core spatial rule

Nested menus alternate direction as depth increases:

```
root → submenu ← deeper submenu → deeper submenu ...
```

The purpose is to keep deep navigation spatially compact rather than expanding endlessly in one direction.

Parent headings at the top of each pop-out are themselves clickable. Clicking a parent heading returns the interaction to that level.

## Dedicated vertical-tab column

A narrow vertical-tab column lives **to the left of the original/root right-click menu**.

It must not:

- overlap the root menu
- overlap any submenu
- move with deeper pop-outs
- appear between menu panels

The geometry is conceptually:

```
[ vertical tabs ]   [ ROOT MENU ]   [ submenu ]   [ deeper submenu ]
```

Only the vertical tabs may overlap one another aesthetically.

## Two-tab model

While the REDOWN-style context UI is active, the normal model is a two-tab stack.

### Permanent tab

The first/top tab is persistent and represents the parent context-menu workspace.

In the prototype it is labeled **REDOWN**.

It acts as a master fold/unfold control for the remembered menu arrangement.

### Recent-level tab

The second tab represents the **most recently accessed / deepest current level**.

Examples:

- Cloudflare Account
- REDOWN-ASSETS
- images
- finals

As the user drills deeper, this tab changes its label to the current level.

The most recent tab normally sits visually **in front** of the permanent tab.

## Fold behavior

When the user clicks the permanent/top tab:

1. the exact current arrangement is snapshotted
2. the pop-out menus are hidden
3. the permanent tab comes to the front
4. the recent-level tab remains physically present, tucked behind it

The hidden state preserves:

- selected file/context target
- open branch/path
- deepest level
- left/right/left/right menu geometry
- latest recent-level label

Clicking the rear recent-level tab restores the saved arrangement.

## Persistence across dismissed right-click sessions

Clicking elsewhere on the page dismisses the entire context-menu UI, including the vertical tabs.

However, the saved arrangement survives invisibly.

On a later right-click:

- the two-tab stack returns
- the permanent tab is initially in front
- the saved recent-level tab remains behind it
- clicking that rear tab restores the previous menu arrangement

This makes the tab stack a lightweight memory mechanism for context-menu navigation rather than merely a breadcrumb display.

## Multiple pop-out families

A separate exploratory idea remains compatible with this system:

The original/root right-click menu may contain multiple independent pop-out menu families. A vertical tab can represent a preserved pop-out family rather than a deeper hierarchy level.

Important distinction:

- a deeper menu is **depth**
- another pop-out family is **parallel context**

The design should not confuse the two.

One possible future treatment is to layer parallel-family tabs atop the vertical tab from which they originated, while preserving the dedicated no-overlap column. This is not settled in v0.1.

## Example REDOWN / Cloudflare flow

```
Right-click file
  → Move to…
    → Cloudflare Account
      → REDOWN-ASSETS
        → images
          → finals
```

At `images`, the recent vertical tab reads **IMAGES**.

At `finals`, it reads **FINALS**.

Clicking the **images** menu title returns to the images level and updates the recent tab accordingly.

## Current prototype

The accompanying `prototype.html` is a rough visual/behavioral sketch only.

It demonstrates:

- Explore-style file rows
- file right-click
- Move to…
- Cloudflare bucket hierarchy
- alternating submenu directions
- clickable parent titles
- a permanent vertical tab
- a recent-level vertical tab
- front/back tab swapping
- folding the current arrangement
- restoring the saved arrangement after dismissal

It does **not** establish final styling, final persistence semantics, accessibility behavior, keyboard behavior, animation language, or production architecture.

## Design intent

The important idea is not the exact CSS.

The intended feeling is:

- depth is spatial
- navigation history is recoverable
- context can be folded instead of destroyed
- returning to work should feel immediate
- visible UI should disappear when the context menu is dismissed
- remembered state should remain available without cluttering the page

## Open questions for later versions

- What meaningful purpose should persistent arrangements serve beyond convenience?
- How many saved arrangements should be allowed?
- Should persistence survive page reloads or only the current session?
- Should the saved arrangement bind to a file, directory, account, site, or generic menu family?
- How should multiple parallel pop-out families be represented without confusing them with depth?
- How should keyboard navigation work?
- What is the final animation language for folding/restoring?
- How should this generalize beyond REDOWN Explore?
- Which parts belong in WebRev versus an application built on WebRev?

## Version note

**v0.1** preserves the current conversation-derived rough draft.

It should remain available for comparison even if a later design replaces it. Do not silently reinterpret this file as the final interaction specification.
