# Readline interface

I have some experience creating interactive CLI interfaces using Node.js's
included [`readline`](https://nodejs.org/api/readline.html) module, which is
teeming with functionality. You could, for example, use it with a TCP socket
to wait for entire lines to come in, or, as it occurred to me today, you can use
it with a read stream to create a basic `cat` script in JS:

```javascript
// cat.js
#!/usr/bin/env node
const { createInterface } = require('readline');
const { resolve } = require('path');
const { createReadStream } = require('fs');

const fileStream = createReadStream(resolve(process.argv[2]), 'utf8');

createInterface(fileStream, process.stdout);
```

You could then do `./cat.js cat.js` and, after making it executable, it will
print the contents of the file to the terminal.

A less trivial example would be reading a large file's contents line by line:

```javascript
const doSomethingLineByLine = async () => {
  const rl = createInterface(createReadStream('path/to/file', 'utf8'));

  for await (const line of rl) {
    doSomething(line);
  }
};
```
