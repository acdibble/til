# Processing PDF files

Node.js native modules offer a way of parsing PDF documents in a memory
efficient way using streams:

```javascript
import * as fs from 'fs';
import { promisify } from 'util';
import * as zlib from 'zlib';

const unzipAsync = promisify(zlib.unzip);

// this regular expression finds the zipped contents
const pageRegExp = /(?<=>>stream\n).+?(?=\nendstream)/gsu;

const parsePDF = async (path) => {
  // we need to cache data across chunks in case the search area finds itself
  // across the boundary of two chunks
  let data = '';

  for await (const chunk of fs.createReadStream(path)) {
    // convert chunk to string for regular expression checking
    data += chunk.toString('binary');
    let sliceIndex = 0;
    for (const match of data.matchAll(pageRegExp)) {
      sliceIndex = match.index + match[0].length;
      // unzip the data from the match and convert to correct encoding
      console.log(
        (await unzipAsync(Buffer.from(match[0], 'binary'))).toString('utf8')
      );
    }
    // remove the data that we've already seen in preparation for the next chunk
    // matchAll will otherwise match data we've already seen
    if (sliceIndex) data = data.slice(sliceIndex);
  }
};
```

The original
[gist](https://gist.github.com/averagesecurityguy/ba8d9ed3c59c1deffbd1390dafa5a3c2)
(written in Python) that inspired this.
