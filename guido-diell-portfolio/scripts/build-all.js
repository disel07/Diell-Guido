
import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const ROOT_DIR = path.resolve(__dirname, '..', '..'); // Workspace root (up 2 levels from scripts/)
const PORTFOLIO_DIR = path.resolve(__dirname, '..'); // Portfolio root (up 1 level)
const SMART_COMPOUND_DIR = path.resolve(ROOT_DIR, 'legacy', 'smartcompound_-investi-nel-futuro');
const CAREER_PATH_DIR = path.resolve(ROOT_DIR, 'legacy', 'global-life-simulator');

const DIST_DIR = path.resolve(PORTFOLIO_DIR, 'dist');

console.log('🚀 Starting Unified Build Process...');

try {
  // 1. Build Portfolio Main
  console.log('\n📦 Building Main Portfolio...');
  execSync('npm run build', { stdio: 'inherit', cwd: PORTFOLIO_DIR });

  // 2. Build SmartCompound
  console.log('\n☕ Building SmartCompound...');
  execSync('npm install', { stdio: 'inherit', cwd: SMART_COMPOUND_DIR }); // Ensure deps
  execSync('npm run build', { stdio: 'inherit', cwd: SMART_COMPOUND_DIR });
  
  const smartDest = path.join(DIST_DIR, 'SmartCompound');
  fs.ensureDirSync(smartDest);
  fs.copySync(path.join(SMART_COMPOUND_DIR, 'dist'), smartDest);
  console.log('✅ SmartCompound copied to dist/SmartCompound');

  // 3. Build CareerPath
  console.log('\n📈 Building CareerPath...');
  execSync('npm install', { stdio: 'inherit', cwd: CAREER_PATH_DIR }); // Ensure deps
  execSync('npm run build', { stdio: 'inherit', cwd: CAREER_PATH_DIR });

  const careerDest = path.join(DIST_DIR, 'CareerPath-Proiezioni');
  fs.ensureDirSync(careerDest);
  fs.copySync(path.join(CAREER_PATH_DIR, 'dist'), careerDest);
  console.log('✅ CareerPath copied to dist/CareerPath-Proiezioni');

  console.log('\n🎉 ALL BUILDS COMPLETE! Ready to deploy.');

} catch (error) {
  console.error('\n❌ Build Failed:', error);
  process.exit(1);
}
