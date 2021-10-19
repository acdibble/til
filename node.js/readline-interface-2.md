# Readline interface 2

[Part 1](readline-interface.md)

If you want to pipe something into a Node.js file, `readline` will read
everything from `stdin` and then close after the pipe has finished:

```javascript
import { createInterface } from 'readline';
import processLine from './processLine';

const rl = createInterface(process.stdin);

rl.on('line', processLine);
```

Here's
[an example](https://gist.github.com/acdibble/b4961524b11ce9c529b3791ce23f4a6c)
usage for inserting `eslint-ignore-next-line` comments based off of the eslint
cli output.
