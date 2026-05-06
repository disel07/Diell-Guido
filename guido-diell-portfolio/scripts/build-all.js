import { execSync } from 'child_process';

console.log('Building the GitHub Pages portfolio...');
execSync('npm run build', { stdio: 'inherit' });
console.log('Portfolio build complete.');
