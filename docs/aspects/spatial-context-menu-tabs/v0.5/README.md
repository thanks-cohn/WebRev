# Spatial Context-Menu Tabs — v0.5 Checkpoint

Status: **exploratory / non-actionable**

This checkpoint preserves the first version where ordinary menu traversal and saved-state restoration are explicitly separated, while retaining the corrected fold animation.

## Core semantic split

### Ordinary menu rows = fresh traversal
Clicking a normal root menu row such as `Move to…` opens that branch from its normal starting point.

It does **not** restore saved state.

### Root vertical slice = latest explicitly saved workspace
Clicking the root slice for a branch such as `MOVE` restores the latest arrangement that the user explicitly saved by folding that branch.

The slice is therefore a memory surface, not an alternate copy of the normal menu row.

### Starred appended slice = exact checkpoint
Starred deeper levels create appended slices behind the active root slice.

Each appended slice restores the exact spatial arrangement captured at that checkpoint.

## Fold behavior preserved here

When the user clicks the active root slice to save and fold:

1. the current arrangement is saved as that root branch's latest workspace state
2. appended starred slices disappear first
3. the active root slice remains fixed in place
4. the lower root deck rises upward to meet it
5. the interface resolves into the normal single root deck

The active slice does **not** sink downward during the fold.

## Timing

Presentation mode remains the default and uses a short configurable delay.

Instant mode preserves the same state transitions with effectively no theatrical delay.

## Known next issue

Submenu placement can currently run partially or fully outside the visible viewport.

The next version should make spatial placement visibility-aware:

- attempt the normal alternating left/right placement first
- detect whether the proposed submenu would leave the usable viewport
- if necessary, flip or pull it back into view
- treat the corrected position as the new anchor
- resume the alternating cross-cross pattern from that corrected anchor

No pop-out should ever become inaccessible simply to preserve the idealized alternating geometry.

## Version note

Preserve this checkpoint unchanged for comparison with later viewport-aware placement work.
