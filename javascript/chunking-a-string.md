# Chunking a string

Use a regular expression to easily chunk a string:

```javascript
const string = '68656c6c6f20776f726c6421';
const chunks = string.match(/.{2}/g);
// ['68', '65', '6c', '6c', '6f', '20', '77', '6f', '72', '6c', '64', '21']
const hex = chunks.map((chunk) => Number(`0x${chunk}`));
const buf = Buffer.from(hex);
// <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 21>
console.log(buf.toString());
// 'hello world!'
```

[source](https://stackoverflow.com/questions/7033639/split-large-string-in-n-size-chunks-in-javascript)
