#!/usr/bin/env node
const fs = require('fs');

const [category, fileName, ...tocNameParts] = process.argv.slice(2);

const tocName = tocNameParts.join(' ');

try {
  fs.mkdirSync(`${__dirname}/${category}`);
} catch {}

fs.writeFileSync(`${__dirname}/${category}/${fileName}.md`, `# ${tocName}

Here is some text explaining the thing I learned, how I came across it, and
demonstrating it:

\`\`\`shell
$ echo "The example"
\`\`\`

Here is some more text maybe with the source or some additional info.`, 'utf8');

const readme = fs.readFileSync('README.md', 'utf8').split('\n');

const newCategory = `### ${category}`;
let newCatIndex = readme.indexOf(newCategory);
const categories = readme.filter((line) => line.startsWith('###')).slice(1);

if (newCatIndex === -1) {
  categories.push(newCategory);
  categories.sort();
  newCatIndex = readme.indexOf(categories[categories.indexOf(newCategory) + 1 ]);
  if (newCatIndex === -1) newCatIndex = readme.indexOf('## About');
  readme.splice(newCatIndex, 0, newCategory, '', '');
}

const nextTopic = categories[categories.indexOf(newCategory) + 1];
const topics = readme.slice(newCatIndex + 2, readme.indexOf(nextTopic || '## About') - 1);
topics.push(`- [${tocName}](${category}/${fileName}.md)`);
const re = /[^\w]/g;
topics.sort((a, b) => (
  a.replace(re, '').toLowerCase() < b.replace(re, '').toLowerCase() ? -1 : 1
));
readme.splice(newCatIndex + 2, topics.length - 1, ...topics);

fs.writeFileSync('README.md', readme.join('\n'), 'utf8');
