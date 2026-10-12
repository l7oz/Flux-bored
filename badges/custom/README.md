# FluxCord Custom badges (مخصّص)

Custom badges for **specific members** who don't fit the owner / admin / supporter / tester /
user tiers. Each member gets their own image, shown in their profile.

## How to add a member
1. Drop the member's image in this folder, e.g. `custom/<name>.png`
   (square, transparent, 256×256 — it is shown as a circle).
2. Add an entry to `custom.json` mapping the member's Discord user ID to the raw image URL:

   ```json
   {
     "123456789012345678": {
       "image": "https://raw.githubusercontent.com/l7oz/Flux-bored/main/badges/custom/<name>.png",
       "tooltip": "FluxCord · فلوكس كورد"
     }
   }
   ```
