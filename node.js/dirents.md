# `Dirent`s

In v10.10.0, `Dirent`s were added to Node.js's `fs` module. Together with the
new promises API, it is easy to recurse through a directory and find all the
files within:

```typescript
import * as fs from 'fs';
import * as path from 'path';

const traverse = async (directory) => {
  const contents = await fs.promises.readdir(directory, {
    withFileTypes: true,
  });

  const [files, directories] = contents.reduce(
    (acc, dirent) => {
      acc[Number(dirent.isDirectory())].push(
        path.resolve(directory, dirent.name)
      );
      return acc;
    },
    [[], []]
  );

  return files.concat(...(await Promise.all(directories.map(traverse))));
};

traverse(__dirname).then(console.log);
// [
//   '/Users/coder/til/node.js/dirents.md',
//   '/Users/coder/til/node.js/file-system-flags-in-node.md',
//   '/Users/coder/til/node.js/high-resolution-timer.md',
//   '/Users/coder/til/node.js/readline-interface-2.md',
//   '/Users/coder/til/node.js/readline-interface.md'
// ]
```

[source](https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_class_fs_dirent)
