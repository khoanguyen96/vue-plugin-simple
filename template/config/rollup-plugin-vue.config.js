// http://vuejs.github.io/rollup-plugin-vue/#/en/2.3/

import path from 'path';
import fs from 'fs';

export const pack = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, 'package.json'),
    'utf8',
  ),
);

export default {
  compileTemplate: true,
  css: true,
  standalone: true,
};
