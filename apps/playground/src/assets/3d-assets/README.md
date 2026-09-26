# 3D asset discovery

Drop GLB/GLTF files here using:

```text
<artworkName>-<anything>.glb
```

Examples: `first-light-rose.glb`, `first-light-clock.glb`, `blue-room-sculpture.glb`.

A station whose `artworkName` is `first-light` automatically owns all matching
`first-light-<anything>.*` assets.

3D assets are assigned a position inside the station's influence sphere and
outside the protected image + paper viewport. They may float/spin in place and
are draggable/tossable inside that sphere. Automatic placement respects the
viewport exclusion; future manual editing may override it.

## Click actions

Optional click behavior is configured by exact filename in
`config/presentations/uniqueness-rewarded.json` under `assetActions`.

Supported actions:

```json
{
  "assetActions": {
    "first-light-rose.glb": {
      "type": "station",
      "stationId": "blue-room"
    },
    "first-light-clock.glb": {
      "type": "link",
      "linkKey": "world"
    },
    "first-light-3.glb": {
      "type": "url",
      "url": "https://example.com"
    },
    "first-light-4.glb": {
      "type": "text",
      "title": "A hidden note",
      "body": "This replaces the paper text beneath the center image."
    }
  }
}
```

The same action registry works for matching 2D billboard assets.

The current lightweight canvas renderer uses mathematical proxy solids for 3D
geometry. Discovered GLB URLs and interaction metadata are already carried by the
scene objects so a future real GLB renderer can replace the proxy draw step
without changing naming, placement, or action contracts.
