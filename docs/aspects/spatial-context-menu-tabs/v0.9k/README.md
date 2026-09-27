# Spatial Context-Menu Tabs — v0.9k Checkpoint

Status: **exploratory / non-actionable**

This checkpoint preserves the first smooth accessible vertical-tab motion pass.

## Preserved behavior

- Normal menu rows begin fresh traversal.
- Root vertical slices restore the latest explicitly saved branch workspace.
- Starred vertical slices restore exact saved checkpoints.
- The menu chain behaves as one ordered ribbon.
- The newest/bottom menus remain prioritized for accessibility.
- Older/top menus compress and stack upward under density pressure.
- Memory tabs slide smoothly in Presentation mode rather than jumping.
- Instant mode performs the same movement very quickly.
- Saved vertical tabs keep their labels and starred checkpoint affordances under density.
- Tab height, label size, and star size may scale down proportionally rather than disappearing.
- The tab deck maintains outer-edge clearance from the visible ribbon.

## Known next issue

The compressed top menu headers themselves can become too visually reduced: their menu name and star may no longer remain clearly visible/clickable.

The next version should guarantee that every compressed top header keeps:

- its menu title visible
- its star visible and clickable
- proportional font/star reduction under extreme density
- ordered stacked placement without hiding those affordances behind neighboring headers

## Version note

Preserve this checkpoint unchanged for comparison with the always-identifiable compressed-header version.
