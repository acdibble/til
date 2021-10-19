# `Buffer.concat`

`Buffer.concat` accepts the total byte length of all the `Buffer`s in the array
as a second argument to prevent a primary pass over the array:

```typescript
const buffers: Buffer[] = [];
let byteLength = 0;

for await (const chunk of res as IncomingMessage) {
  buffers.push(chunk);
  byteLength += chunk.byteLength;
}

const result = Buffer.concat(buffers, byteLength);
```

[source](https://nodejs.org/api/buffer.html#static-method-bufferconcatlist-totallength)
