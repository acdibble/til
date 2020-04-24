#!/usr/bin/env node
const fs = require('fs');

const [
  tocCategory,
  tocName,
  fileName = tocName.toLowerCase().replace(/ /g, '-'),
  category = tocCategory.toLowerCase(),
] = process.argv.slice(2);

const re = /[^\w]/g;
const lowerCaseAndSort = (transform) => (a, b) => (
  transform(a) < transform(b) ? -1 : 1
);

try {
  fs.mkdirSync(`${__dirname}/${category}`);
} catch {}

fs.writeFileSync(`${__dirname}/${category}/${fileName}.md`, `# ${tocName}

Here is some text explaining the thing I learned, how I came across it, and
demonstrating it:

\`\`\`shell
$ echo "The example"
\`\`\`

Here is some more text maybe with the source or some additional info.`, { encoding: 'utf8', flag: 'wx' });

const readme = fs.readFileSync('README.md', 'utf8').split('\n');

const newCategory = `### ${tocCategory}`;
let newCatIndex = readme.indexOf(newCategory);
const categories = readme.filter((line) => line.startsWith('###')).slice(1);

if (newCatIndex === -1) {
  categories.push(newCategory);
  categories.sort(lowerCaseAndSort((s) => s.replace(re, '').toLowerCase()));
  newCatIndex = readme.indexOf(categories[categories.indexOf(newCategory) + 1 ]);
  if (newCatIndex === -1) newCatIndex = readme.indexOf('## About');
  readme.splice(newCatIndex, 0, newCategory, '', '');
  const categoryList = readme.filter((l) => /\- \[.+?\]\(#/.test(l));
  categoryList.push(`- [${tocCategory}](#${tocCategory})`);
  categoryList.sort(lowerCaseAndSort((s) => s.replace(re, "").toLowerCase()));
  const categoryListStart = readme.indexOf('### Categories');
  readme.splice(categoryListStart + 2, categoryList.length - 1, ...categoryList);
}

const nextTopic = categories[categories.indexOf(newCategory) + 1];
const topics = readme.slice(newCatIndex + 2, readme.indexOf(nextTopic || '## About') - 1);
topics.push(`- [${tocName}](${category}/${fileName}.md)`);
topics.filter(Boolean).sort(lowerCaseAndSort((s) => s.match(/\[.+?\]/)[1]));
readme.splice(newCatIndex + 2, topics.length - 1, ...topics);

fs.writeFileSync('README.md', readme.join('\n'), 'utf8');
