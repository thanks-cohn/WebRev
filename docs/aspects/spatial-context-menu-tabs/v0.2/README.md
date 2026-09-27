# Spatial Context-Menu Tabs — v0.2 Draft

Status: **exploratory / non-actionable**

This version refines v0.1 by changing the secondary vertical-tab behavior from automatic recent-history tracking to **explicit user-starred quick-access arrangements**.

v0.1 remains preserved unchanged for comparison.

## Main change from v0.1

The vertical slice rail is no longer populated automatically from the most recently visited/deepest menu level.

Instead:

> A vertical slice exists only when the user explicitly stars a menu level/arrangement.

The rail therefore represents intentional shortcuts, not passive navigation history.

## Permanent REDOWN slice

The permanent REDOWN slice remains the root/master slice for the context-menu workspace.

It continues to act as the stable anchor for the interaction.

## Starred arrangement slices

Every pop-out menu has a clickable top/header bar.

A star affordance may appear in that header.

When the user stars a level:

1. the current full menu arrangement is snapshotted
2. that level becomes a saved quick-access arrangement
3. a vertical slice is added to the dedicated slice column
4. the slice is labeled using the starred level name

Example labels:

- REDOWN-ASSETS
- IMAGES
- FINALS
- MONOMEDIA

Only explicitly starred arrangements receive slices.

The latest visited level does **not** automatically create or rename a slice.

## What a starred slice stores

A starred slice represents a saved spatial arrangement, including:

- context target if applicable
- full open path
- selected branch
- left/right/left/right submenu placement
- the starred level
- any future arrangement-specific metadata needed to reproduce the state

This is closer to a bookmark than a breadcrumb.

## Clicking a starred slice

Clicking a saved slice:

1. restores the exact arrangement captured when the star was created
2. brings that saved arrangement to the front
3. promotes that slice to the top/front position in the vertical stack
4. leaves other starred slices preserved behind it

The active/front slice therefore indicates which saved arrangement is currently foregrounded.

## Stack behavior

The vertical slice rail remains in its dedicated column to the left of the root context menu.

Slices may overlap one another aesthetically, but they do not overlap menu panels.

Conceptually:

```
[ starred slice stack ]   [ ROOT MENU ]   [ submenu ]   [ deeper submenu ]
```

The selected slice is visually foremost.

Other starred slices remain slightly offset behind it and can be clicked to restore their own saved arrangements.

## Example

The user descends:

```
Move to…
  → Cloudflare Account
    → REDOWN-ASSETS
      → images
```

At `images`, the user clicks the star in the menu header.

A vertical slice labeled **IMAGES** is created.

The user later navigates elsewhere:

```
Move to…
  → Cloudflare Account
    → MONOMEDIA
      → mascots
```

Nothing new appears in the rail merely because `mascots` is the latest level.

If the user stars `mascots`, then a **MASCOTS** slice is created.

The rail now contains intentional shortcuts such as:

```
REDOWN
IMAGES
MASCOTS
```

Clicking **IMAGES** restores the original REDOWN-ASSETS → images arrangement and brings IMAGES to the front of the slice stack.

Clicking **MASCOTS** restores that arrangement and promotes MASCOTS to the front.

## Why this version exists

This revision gives the vertical slices a stronger purpose.

They become:

- user-selected spatial bookmarks
- quick-access context states
- durable menu arrangements
- explicit workflow shortcuts

They are no longer merely a visual record of whichever menu level happened to be visited last.

## Still exploratory

This version does not yet decide:

- maximum number of starred arrangements
- whether stars persist across page reloads or browser sessions
- whether a star is global, per file, per directory, per site, or per account
- how starred states are renamed or deleted
- whether duplicate arrangements are deduplicated
- keyboard access
- final animation and visual styling
- production persistence/storage format

## Version note

**v0.2** changes the secondary slice model from automatic recent-level tracking to explicit starred arrangements.

Do not treat this as a final implementation requirement. Preserve it as a versioned design checkpoint.
