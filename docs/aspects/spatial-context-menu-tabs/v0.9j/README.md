# Spatial Context-Menu Tabs — v0.9j Checkpoint

Status: **exploratory / non-actionable**

This checkpoint preserves the first top-weighted adaptive-compression model before smoothing vertical-tab motion and guaranteeing persistent tab-label/star accessibility.

## Preserved behavior

- Normal menu rows begin fresh traversal.
- Root vertical slices restore the latest explicitly saved branch workspace.
- Starred vertical slices restore exact saved checkpoints.
- The pop-out chain behaves as one ordered ribbon.
- The newest/bottom menus are prioritized for accessibility.
- Older/top menus are pushed upward first as depth increases.
- Older menus collapse into compact headers and begin stacking at the top.
- Their title text and stars scale down proportionally as density increases.
- Extreme depth is absorbed by the compressed top stack rather than by sacrificing the active bottom.
- Oversized active menus may use internal scrollbars.
- The memory-tab deck maintains outer-edge clearance from the visible ribbon and remains constrained to the viewport.

## Known next issues

The vertical memory tabs can still jump abruptly when their anchor position changes.

The next version should:

1. animate vertical-tab movement smoothly rather than snapping
2. use the same Presentation vs Instant timing model already established
3. preserve visible/clickable tab names even when the tab deck itself moves upward
4. preserve accessible stars for any compressed/raised saved-tab representation
5. if tab density becomes extreme, scale tab text/star affordances proportionally rather than hiding them

The intended invariant is that saved memory locations remain identifiable and clickable at every density level.

## Version note

Preserve this checkpoint unchanged for comparison with the animated accessible-tab-stack version.
