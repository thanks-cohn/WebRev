# Spatial Context-Menu Tabs — v0.4 Checkpoint

Status: **exploratory / non-actionable**

This checkpoint preserves the presentation-mode fold/unfold workspace model before changing the meaning of ordinary menu traversal versus vertical-tab restoration.

## Preserved v0.4 behavior

### Root deck
The initial right-click menu may expose multiple first-level pop-out families such as:

- Move to…
- Copy to…
- Share with…
- Organize…
- Versions…

Each initial pop-out has a vertical slice in a single elegant overlapping deck to the left of the root menu.

Older slices peek from behind. The currently active or most recently worked slice sits visually in front.

### Branch separation
Selecting a root branch visually separates the deck:

1. the selected root slice rises into the upper workspace position
2. the remaining root slices descend into a lower overlapping deck
3. menus may then be traversed normally using the alternating left/right spatial pattern

### Starred appended tabs
While inside a branch, deeper menu headers may be starred.

A starred level creates an appended vertical slice behind the active root slice.

These appended slices preserve specific spatial arrangements/checkpoints within the branch.

They are not shown globally. They belong to the root branch that created them.

### Saving and folding the branch
Clicking the active root slice while its workspace is open:

1. saves the branch's current arrangement as its latest workspace state
2. causes appended starred slices to disappear from view
3. after a configurable delay, the active root slice sinks
4. the lower root deck rises to meet it
5. the interface returns to one overlapping root deck

The hidden starred slices and saved workspace state remain preserved.

### Reopening
Clicking that root slice later:

1. raises the root slice back out of the deck
2. separates the remaining root deck downward
3. restores the saved branch workspace
4. reveals the branch's appended starred slices behind it

### Starred checkpoint restoration
Clicking an appended starred slice restores the exact arrangement captured when that checkpoint was starred.

### Timing modes
The interaction model is the same in both modes.

**Presentation mode** is the default:
- deliberate short delay before movement
- appended tabs disappear first
- branch/root slices then move
- intended to feel elegant and legible

**Instant mode**:
- same state transitions
- little or no theatrical delay
- intended for high-frequency use

The delay is a Settings-level preference rather than a different navigation model.

## Important limitation preserved in v0.4

v0.4 still allows the root menu item and the root vertical slice to behave too similarly.

The next version will explicitly separate:

- ordinary menu traversal
- root-slice saved-state restoration
- starred checkpoint restoration

This file preserves v0.4 as a comparison point before that semantic split.

## Version note

Do not reinterpret v0.4 as the final interaction specification. Preserve it unchanged for later comparison.
