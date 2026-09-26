# 3D asset discovery

Drop GLB/GLTF files here using:

```text
<artworkName>-<number>.glb
```

Examples: `first-light-1.glb`, `first-light-2.glb`, `blue-room-1.glb`.

The presentation component discovers these files at build time and groups them by
the artwork-name prefix. The current canvas renderer uses lightweight proxy
solids for arrangement/prototyping; the discovered URLs are carried in the scene
data so a future GLB renderer can swap the real geometry in without changing the
naming or placement system.
