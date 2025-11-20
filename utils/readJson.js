const fs = require('fs').promises;
const path = require('path');

async function readJson(filePath) {
  
  try {
 const fullPath = path.join(process.cwd(), filePath); 
    const data = await fs.readFile(fullPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Failed to read JSON file: " + error.message);
  }
}

module.exports = readJson;
