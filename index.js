import os from 'os';

import Simple, {PART1, PART2} from './src/const';

console.log(os.platform());

const smpl = new Simple();

console.log(`${smpl.one} ${smpl.two}`);
console.log(`${PART1} ${PART2}`);