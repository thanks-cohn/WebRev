# Spatial Context-Menu Tabs — v0.8 Checkpoint

Status: **exploratory / non-actionable**

This checkpoint preserves the 100-layer stress-test model and animated return/shuffle behavior before changing how appended starred slices expose themselves for clicking.

## Stress-test structure

- Each branch can descend through up to 100 menu layers.
- Every layer exposes exactly 3 child pop-outs until the maximum depth.
- The purpose is to stress viewport correction, density compression, deep traversal, and return behavior rather than model realistic production content.

## Traversal and density behavior

- Normal menu rows continue fresh traversal.
- Root vertical slices restore the latest explicitly saved workspace.
- Starred appended slices restore exact checkpoints.
- The active/newest menu keeps a fully legible row.
- Older menus may rise and collapse to title + star under density pressure.
- Viewport correction may flip or clamp placement while preserving continued cross-cross traversal from the corrected anchor.

## Return / back behavior

When returning upward through a deep chain:

1. deeper menus travel upward/out first
2. the surviving chain remains
3. the surviving menus then shuffle forward to reclaim the released space

Presentation mode performs this choreography visibly and elegantly.

Instant mode performs the same state transition and shuffle at very high speed rather than changing the underlying behavior.

## Known next issue

In the current stacked-tab treatment, newly appended/starred slices can sit too directly behind the front slice, making them difficult or impossible to click when the available area becomes narrow.

The next version should preserve the same vertical height while moving each newly appended slice farther toward the exposed left edge of the existing stack. The newest hidden-behind slice should slide to the farthest-left exposed position so every saved checkpoint remains independently clickable.

## Version note

Preserve this checkpoint unchanged for comparison with the next exposed-tab-stack experiment.
