#!/usr/bin/env node
const fse = require('fse');
const path = require('path');

fse.copydir(path.join(__dirname, 'temp/default'), '.vscode');
