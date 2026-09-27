# Spatial Context-Menu Tabs — v0.9f Checkpoint

Status: **exploratory / non-actionable**

This checkpoint preserves the first vertical-lift + scrollable-popout version before allowing older/top menus to compress farther upward.

## Preserved behavior

- Normal menu rows begin fresh traversal.
- Root vertical slices restore the latest explicitly saved branch workspace.
- Starred vertical slices restore exact saved checkpoints.
- The menu chain behaves as one ordered ribbon rather than independent floating cards.
- The visible tab deck is anchored by its full envelope so no exposed tab slips underneath the leftmost pop-out.
- The chain lifts upward as a coordinated unit before the newest pop-out falls below the viewport.
- A single menu may become vertically scrollable if its own content is too tall for the available viewport.
- Presentation mode animates these transitions; Instant mode performs the same transitions quickly.

## Known next issue

The current upward-lift rule is still too conservative.

Older/top menus should be allowed to move progressively farther upward while preserving only the minimum useful header context.

For the next version, the practical top delimiter is:

- the menu title text must remain visible enough to identify the menu
- the star must remain fully clickable
- the newest/current menus should remain mostly visible lower in the viewport

Older menus may therefore move partially beyond the top edge as density increases, as long as their title and star remain available.

A later version may reduce those old headers further into semi-slivers, but that is intentionally deferred.

## Version note

Preserve this checkpoint unchanged for comparison with more aggressive upward compression.
