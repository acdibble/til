# Readline interface

[Part 2](readline-interface.md)

Node.js's native [`readline`](https://nodejs.org/api/readline.html) module can
be applied in various situations for reading some sort of stream line-by-line,
e.g. with a TCP socket or with a file stream to quickly make a `cat` command:

```javascript
// cat.js
#!/usr/bin/env node
import { createInterface } from 'readline';
import * as fs from 'fs';
import * as path from 'path';

const fileStream = createReadStream(resolve(process.argv[2]), 'utf8');

createInterface(fileStream, process.stdout);
```

A less trivial example for using the `readline` interface with files would be
reading a large file line-by-line to do processing while buffering very little
of the file directly into memory:

```javascript
const doSomethingLineByLine = async () => {
  const rl = createInterface(createReadStream('path/to/file', 'utf8'));

  for await (const line of rl) {
    doSomething(line);
  }
};
```
