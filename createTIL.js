#!/usr/bin/env node
const fs = require('fs');

const [newCategory, newTopic] = process.argv.slice(2);

const topicToFileName = (topic) => topic.toLowerCase().replace(/ /g, '-').replace(/`/g, '');
const catToDir = (category) => category.toLowerCase().replace(/ /g, '-');
const fullPath = (category, topic) => `${catToDir(category)}/${topicToFileName(topic)}.md`

try {
  fs.mkdirSync(`${__dirname}/${catToDir(newCategory)}`);
} catch {}

fs.writeFileSync(fullPath(`${__dirname}/${newCategory}`, newTopic), `# ${newTopic}

Here is some text explaining the thing I learned, how I came across it, and
demonstrating it:

\`\`\`shell
$ echo "The example"
\`\`\`

Here is some more text maybe with the source or some additional info.
`, { encoding: 'utf8', flag: 'wx' });

const sortLowerCase = (a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1);

const structure = JSON.parse(fs.readFileSync('structure.json', 'utf8'));
structure[newCategory] = (structure[newCategory] || []).concat([newTopic]).sort(sortLowerCase);
fs.writeFileSync('structure.json', JSON.stringify(structure, null, 2), 'utf8');

const readme = fs.createWriteStream('README.md', 'utf8');
readme.write(`# TIL

> Today I Learned

A collection of concise write-ups on small things I learn day to day across a
variety of languages and technologies.

---

### Categories

`);

const categories = ['', '---', ''];
Object.keys(structure).sort(sortLowerCase).forEach((category) => {
  readme.write(`- [${category}](#${category.replace(/ /g, '-')})\n`);
  categories.push(
    `### ${category}`,
    '',
    ...structure[category].map((topic) => `- [${topic}](${fullPath(category, topic)})`),
    '',
  );
});

readme.write(categories.join('\n'));
readme.write(`
## About

I shamelessly stole this idea from
[jbranchaud/til](https://github.com/jbranchaud/til).

## Other TIL Collections

- [jwworth/til](https://github.com/jwworth/til)
- [thoughtbot/til](https://github.com/thoughtbot/til)
- [jbranchaud/til](https://github.com/jbranchaud/til)

## License

This repository is licensed under the MIT license. See \`LICENSE\` for
details.
`)
