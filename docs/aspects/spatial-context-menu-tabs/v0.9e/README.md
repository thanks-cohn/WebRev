# Spatial Context-Menu Tabs — v0.9e Checkpoint

Status: **exploratory / non-actionable**

This checkpoint preserves the ordered-ribbon stress test with corrected tab-stack envelope anchoring, before introducing vertical ribbon lift and scrollable pop-outs.

## Preserved behavior

### Ordered ribbon
Deep pop-out traversal is treated as one ordered chain rather than a collection of independently clamped floating cards.

- left/right alternation stays coherent
- older menus collapse in depth order under pressure
- surviving menus shuffle forward as a group when going back
- Presentation mode animates the choreography
- Instant mode performs the same transitions very quickly

### Stress-test structure
- 3 child options per layer
- up to 100 levels deep
- intended to expose placement, compression, restoration, and back-navigation failures

### Tab-stack envelope anchoring
The vertical memory-tab deck is positioned using the visible envelope of the whole stack.

The system does not anchor spacing to a particular front/top tab. Instead:

1. measure the leftmost and rightmost visible extents of the whole tab deck
2. identify the tab edge nearest the menu
3. keep that entire visible edge a fixed gap away from the farthest-left visible pop-out
4. prevent lower/behind tabs from sliding underneath the menu

This works regardless of whether the visual stack fans leftward or rightward.

## Known next issue

The ordered ribbon can still extend downward beyond the viewport during very deep traversal.

The next version should:

- lift the visible ribbon upward as one coordinated unit before the newest pop-out falls out of view
- prefer keeping the active/newest menus mostly visible
- preserve ordered left/right ribbon geometry
- allow an individual pop-out to become vertically scrollable when its own contents exceed the available height
- avoid independently scattering or clamping menus

## Version note

Preserve this checkpoint unchanged for comparison with the vertical-lift experiment.
