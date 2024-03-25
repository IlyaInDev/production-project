const fs = require('fs');
const path = require('path');

const cacheDirPath = path.resolve(__dirname, '..', 'node_modules', '.cache');

fs.rmSync(cacheDirPath, { recursive: true, force: true });