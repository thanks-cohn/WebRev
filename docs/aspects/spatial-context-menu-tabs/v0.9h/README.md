# Spatial Context-Menu Tabs — v0.9h Checkpoint

Status: **exploratory / non-actionable**

This checkpoint preserves the outermost-edge tab-clearance invariant before adding complete top/bottom viewport constraints for both the menu ribbon and the vertical memory-tab deck.

## Preserved behavior

- Normal menu rows begin fresh traversal.
- Root vertical slices restore the latest explicitly saved branch workspace.
- Starred vertical slices restore exact saved checkpoints.
- The pop-out chain behaves as one ordered ribbon rather than independent floating cards.
- Older/top menus may compress upward under density pressure while keeping title text and the star usable.
- A single menu may become vertically scrollable when its own content exceeds the available viewport.
- The memory-tab deck is positioned from the outermost visible edge of the entire ribbon.
- Adding starred tabs grows the deck outward, not inward across the pop-out menus.
- Presentation mode and Instant mode use the same state model with different transition timing.

## Known issue preserved in this checkpoint

The top/bottom viewport rules are incomplete.

In particular:

- the ordered ribbon can still allow old headers to travel too far above the viewport
- the newest/full menus can still extend too far below the viewport
- the vertical memory-tab deck can itself move partially or fully off-screen because its vertical position is currently inherited too directly from the ribbon

The next version should establish a strict viewport envelope shared by both systems:

1. keep the vertical tab deck fully inside the viewport
2. keep at least the title + clickable star visible for compressed old menus
3. keep the active/newest pop-outs mostly visible
4. if vertical density still exceeds the viewport, prefer internal scrollbars for full menus
5. reflow the ribbon and tab deck together rather than correcting them independently

## Version note

Preserve this checkpoint unchanged for comparison with the full viewport-envelope implementation.
