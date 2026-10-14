# Flux-bored

Central repository storing plugin metadata, custom badges, and developer information for [FluxCord](https://github.com/l7oz/FluxCord).

based on [Equicord/Equibored](https://github.com/Equicord/Equibored).

Ported from [LOSTSTR/Esharq-Bored](https://github.com/LOSTSTR/Esharq-Bored) (GPL-3.0).

## Sharing a CustomProfile

The CustomProfile plugin reads the shared directory from `profiles.json`.
To list someone (admin only):

```
node scripts/add-profile.mjs <discord-user-id> <profile.json>
git commit -m "List <name> in profiles directory" profiles.json
git push
```

The user exports their profile JSON from the plugin; you validate and merge it with the script.
