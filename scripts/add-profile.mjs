// Usage:
//   node scripts/add-profile.mjs <discord-user-id> <profile.json>
// Validates the profile entry and merges it into profiles.json.
// The CustomProfile plugin reads this directory from:
//   https://raw.githubusercontent.com/l7oz/Flux-bored/main/profiles.json
import { readFileSync, writeFileSync } from "fs";

const [, , userId, profilePath] = process.argv;

if (!userId || !/^\d{16,22}$/.test(userId) || !profilePath) {
    console.error("Usage: node scripts/add-profile.mjs <discord-user-id> <profile.json>");
    process.exit(1);
}

let entry;
try {
    entry = JSON.parse(readFileSync(profilePath, "utf8"));
} catch (e) {
    console.error(`Cannot read/parse ${profilePath}: ${e.message}`);
    process.exit(1);
}

if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
    console.error("Profile entry must be a JSON object.");
    process.exit(1);
}

const dirPath = new URL("../profiles.json", import.meta.url);
const dir = JSON.parse(readFileSync(dirPath, "utf8"));
dir[userId] = entry;
writeFileSync(dirPath, JSON.stringify(dir, null, 4) + "\n");
console.log(`Listed ${userId} in profiles.json`);
