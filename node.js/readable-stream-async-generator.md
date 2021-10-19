# Readable stream async generator

Added in v10 and no longer experimental since v11.14.0, readable streams expose
an async generator API:

```javascript
import * as fs from 'fs';
import * as path from 'path';

(async () => {
  const stream = fs.createReadStream(path.join(process.cwd(), 'README.md'));

  for await (const chunk of stream) {
    console.log(chunk.slice(0, 5));
    // <Buffer 23 20 54 49 4c>
  }
})();
```

This makes working with chunks asynchronously easier, because the next chunk
won't be pulled from the generator until the current iteration is complete.

[source](https://nodejs.org/api/stream.html#stream_readable_symbol_asynciterator)
