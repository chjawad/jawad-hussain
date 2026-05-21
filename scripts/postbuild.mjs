import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const src = resolve('dist/index.html');
const dest = resolve('dist/404.html');

if (!existsSync(src)) {
  console.error(`postbuild error: missing ${src}`);
  process.exit(1);
}

copyFileSync(src, dest);
console.log(`Copied ${src} -> ${dest}`);
