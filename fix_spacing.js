const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/components/**/*.{tsx,jsx}');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace static large paddings with responsive paddings
  content = content.replace(/\bpy-32\b/g, 'py-16 md:py-24 lg:py-32');
  content = content.replace(/\bpy-24\b/g, 'py-12 md:py-16 lg:py-24');
  content = content.replace(/\bpt-32\b/g, 'pt-16 md:pt-24 lg:pt-32');
  content = content.replace(/\bpt-24\b/g, 'pt-12 md:pt-16 lg:pt-24');
  content = content.replace(/\bpb-32\b/g, 'pb-16 md:pb-24 lg:pb-32');
  content = content.replace(/\bpb-24\b/g, 'pb-12 md:pb-16 lg:pb-24');
  
  // Replace large gaps with responsive gaps
  content = content.replace(/\bgap-20\b/g, 'gap-10 lg:gap-20');
  content = content.replace(/\bgap-16\b/g, 'gap-8 lg:gap-16');
  
  // Replace large margins
  content = content.replace(/\bmb-24\b/g, 'mb-12 lg:mb-24');
  content = content.replace(/\bmb-20\b/g, 'mb-10 lg:mb-20');
  content = content.replace(/\bmt-24\b/g, 'mt-12 lg:mt-24');
  content = content.replace(/\bmt-20\b/g, 'mt-10 lg:mt-20');
  
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Fixed responsive spacing globally.');
