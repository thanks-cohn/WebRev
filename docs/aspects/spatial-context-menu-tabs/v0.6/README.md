# Spatial Context-Menu Tabs — v0.6 Checkpoint

Status: **exploratory / non-actionable**

This checkpoint preserves the first viewport-safe traversal model before introducing adaptive vertical compression of older menus.

## Core behavior

### Fresh traversal vs memory restoration
- Normal menu rows such as `Move to…` start that branch fresh.
- Root vertical slices restore the latest explicitly saved workspace for that branch.
- Starred appended slices restore exact saved checkpoints.

### Viewport-safe cross-cross traversal
The preferred spatial traversal still alternates left/right.

However, visibility takes precedence over ideal geometry:

1. try the preferred alternating side
2. if that placement would leave the usable viewport, flip to the opposite side
3. if neither side fits ideally, clamp the new menu into the visible work area
4. if the new menu would fall below the viewport, pull it upward into view
5. treat the corrected placement as the new anchor
6. continue the alternating pattern from that corrected anchor

No submenu should become inaccessible simply to preserve the idealized zig-zag.

### Fold behavior
When saving/folding an active branch:
1. the current arrangement is saved
2. appended starred slices disappear first
3. the active root slice stays fixed
4. the lower root deck rises upward to meet it
5. the interface resolves into the combined root deck

### Timing
Presentation mode remains the default with a short configurable delay.
Instant mode preserves the same state changes without theatrical delay.

## Known next issue

When horizontal and vertical space become dense, the current implementation can still make the overall menu chain feel cramped.

The next version should add adaptive density behavior:

- always preserve at least one fully legible option row for the active/newest menu
- when space runs out, push older/top menus upward
- collapse older menus into a compact header-only state containing the title and star
- keep the newest/current menu fully readable
- defer font-size and star-size reduction to a later density stage/version

## Version note

Preserve this checkpoint unchanged for comparison with later adaptive-density work.
