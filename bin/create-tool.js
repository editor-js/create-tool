#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const getAllFiles = require('get-all-files');

/**
 * Get Tool Name from CLI arguments
 */
const toolName = process.argv[2];

if (!toolName) {
  console.log('Please specify tool name');
  process.exit(1);
}

/**
 * Copy template folder to new Tool folder
 */
console.log('Creating tool', toolName);

const toolPath = path.join(process.cwd(), toolName);
fs.mkdirSync(toolPath);

const templatePath = path.join(__dirname, '..', 'template');
const files = getAllFiles.getAllFilesSync(templatePath).toArray();
files.forEach(file => {
  const relativePath = path.relative(templatePath, file);

  console.log(`Copying ${relativePath}`);

  /**
   * Get file content and replase VAR_TOOL_NAME with tool name
   */
  const content = fs.readFileSync(file, 'utf-8');
  const replacedContent = content.replace(/VAR_TOOL_NAME/g, toolName);
  
  /**
   * Create folders if needed
   */
  const folder = path.dirname(path.join(toolPath, relativePath));
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
  
  /**
   * Write file
   */
  fs.writeFileSync(path.join(toolPath, relativePath), replacedContent);
});

console.log('');
console.log('Done!');
console.log('');

/**
 * Show next steps message
 */
console.log('Now run:');
console.log(`  cd ${toolName}`);
console.log('  npm install');
console.log('  npm run build:dev');

console.log('');