import { readdirSync, writeFileSync } from "fs";

const path = "./src/assets/memories";
const fileExclusions = [".DS_Store", "memories.json"];

const memories = readdirSync(path).filter(
  (file) => !fileExclusions.includes(file),
);
writeFileSync(`${path}/memories.json`, JSON.stringify(memories));
