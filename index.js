#! /usr/bin/env node

const fs = require('fs');
const path = require('path');

const getModuleSource = (moduleName) => path.join(__dirname, moduleName);
const getModuleDestination = (moduleName) => path.join(process.cwd(), moduleName);

fs.promises.copyFile(getModuleSource('globals.css'), getModuleDestination('globals.css'), fs.constants.COPYFILE_EXCL, (err) => {
  if (err) throw err;
  console.log('deu bom');
})