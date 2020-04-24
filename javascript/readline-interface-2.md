# Readline interface 2

If you want to pipe something into a Node.js file, `readline` will read
everything from `stdin` and then close after the pipe has finished:

```javascript
const { createInterface } = require('readline');
const processLine = require('./processLine');

const rl = createInterface(process.stdin);

rl.on('line', processLine);
```

Here's
[an example](https://gist.github.com/acdibble/b4961524b11ce9c529b3791ce23f4a6c)
usage for inserting `eslint-ignore-next-line` comments based of of the eslint
cli output.
