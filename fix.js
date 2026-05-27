const fs = require('fs');
let code = fs.readFileSync('components/Header.tsx', 'utf8');

code = code.replace(/backdrop-blur-xl rounded-2xl border overflow-hidden p-1\.5/g, 'isolate rounded-2xl border overflow-hidden p-1.5');
code = code.replace(/transition-colors duration-300 shadow-\[0_8px_32px_0_rgba\(0,0,0,0\.1\)\]/g, 'transition-[background-color,border-color,opacity,transform] duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]');
code = code.replace(/bg-white\/60 border-white\/40 shadow-gray-200\/50/g, 'bg-white/70 border-white/20 shadow-gray-200/50');
code = code.replace(/bg-gray-800\/90 backdrop-blur-md/g, 'bg-gray-800/95');
code = code.replace(/bg-white\/90 backdrop-blur-md/g, 'bg-white/95 isolate');
code = code.replace(/hover:backdrop-blur-md/g, '');
code = code.replace(/will-change-transform z-50/g, 'will-change-[transform,opacity] z-50');

fs.writeFileSync('components/Header.tsx', code);
console.log('Fixed Header.tsx');
