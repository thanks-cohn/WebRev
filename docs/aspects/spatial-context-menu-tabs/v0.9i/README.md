# Spatial Context-Menu Tabs — v0.9i Checkpoint

Status: **exploratory / non-actionable**

This checkpoint preserves the shared viewport-envelope approach before switching to top-weighted adaptive compression.

## Preserved behavior

- Normal menu rows begin fresh traversal.
- Root vertical slices restore the latest explicitly saved workspace for that branch.
- Starred slices restore exact saved checkpoints.
- The pop-out chain behaves as one ordered ribbon.
- The memory-tab deck is positioned from the outermost visible ribbon edge so starred tabs grow outward rather than across menus.
- Ribbon and memory tabs share viewport-aware positioning.
- Full menus may become internally scrollable when their own contents exceed usable height.
- Presentation mode and Instant mode share the same state model with different transition timing.

## Known issue

The shared hard-envelope approach is too restrictive at large depth.

It can preserve the top/bottom bounds while still making the active bottom of the chain awkward to reach. The next version should prioritize the newest/bottom menus and progressively absorb density into the oldest/top menus.

## Next-version rule

As depth increases:

1. keep the newest/bottom menus accessible
2. move older menus upward first
3. collapse old menus into stacked headers
4. progressively reduce header height, title font, and star size
5. keep those compressed headers identifiable and clickable
6. accumulate extreme density at the top rather than sacrificing the active bottom
7. use a scrollbar only when a single active menu's own contents exceed available height

## Version note

Preserve this checkpoint unchanged for comparison with top-weighted adaptive compression.
