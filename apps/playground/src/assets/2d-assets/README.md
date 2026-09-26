# 2D asset discovery

Drop image assets here using:

```text
<artworkName>-<anything>.<ext>
```

Examples:

```text
first-light-petals.png
first-light-memory.webp
blue-room-orbit.jpg
```

Supported extensions: PNG, JPG/JPEG, WEBP, AVIF, SVG.

A station whose `artworkName` is `first-light` automatically owns all matching
`first-light-<anything>.*` images.

2D assets are billboarded by default: they remain visually facing the viewer
while occupying a 3D position inside the station's influence sphere.

Automatic placement keeps them outside the protected image + paper viewport.
Manual editing may override that rule later.
