# 3d assets

Drop optional scene assets here.

Each presentation station owns a folder whose name matches its `artworkName` in
`config/presentations/uniqueness-rewarded.json`.

Example:

```text
3d assets/
  first-light/
    rose.glb
    lamp.glb
    frame-detail.glb
  blue-room/
    sculpture.glb
  rose-archive/
    vase.glb
```

The Prism Rail presentation treats these as optional objects surrounding the
central image plane. The current lightweight showcase renders mathematical
placeholder objects so the page works with zero external assets. A later GLB
loader can replace those placeholders without changing the station or
arrangement contracts.

Arrangement modes:

- `random-every-visit`: generate a fresh placement on each load.
- `seeded-once`: derive repeatable placements from the configured seed so a
  creator can keep an arrangement and refine it.
