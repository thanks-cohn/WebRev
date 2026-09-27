# Spatial Context-Menu Tabs — Production 1

Status: **Production baseline / preserved reference**

Production 1 promotes the behavior represented by the v0.9l checkpoint into the first named production baseline for this interaction concept.

## Canonical source

Production 1 is based on:

- checkpoint: `docs/aspects/spatial-context-menu-tabs/v0.9l/README.md`
- checkpoint commit: `b29a46dad5d1a6cd6ff8840695b75e8163bcf5b2`
- prototype artifact: `redown_v09l_always_identifiable_top_headers_demo.html`

The v0.9l behavior should remain unchanged as the Production 1 comparison baseline while later versions continue experimenting.

## Production 1 behavior

- Ordinary menu rows perform fresh traversal.
- Root vertical slices restore the latest explicitly saved state for that branch.
- Starred appended slices restore exact saved checkpoints.
- The spatial pop-out chain behaves as one ordered ribbon.
- The newest/bottom portion of the ribbon is prioritized for accessibility.
- Older/top menus progressively move upward and compress under density.
- Compressed top headers retain visible menu names and visible/clickable stars.
- Header height, title size, and star size reduce proportionally as density increases.
- The vertical memory-tab deck moves smoothly in Presentation mode.
- Instant mode performs the same state transitions rapidly.
- Saved vertical tabs retain their names and star affordances under density.
- The memory-tab deck maintains clearance from the outermost visible menu edge.
- Extremely tall active menus may scroll internally rather than leaving the viewport.
- Fold/unfold preserves branch memory and starred checkpoint state.

## Preservation rule

Do not overwrite or reinterpret Production 1 when exploring the next interaction version.

Future experiments should receive a new version/checkpoint and explicitly describe their differences from this baseline.
