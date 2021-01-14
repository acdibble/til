# Random integers

Add in Node.js v14.10.0 is a built-in function for getting a random integer
synchronously or asynchronously:

```javascript
import * as crypto from "crypto";

console.log(crypto.randomInt(10));
// => 5

// asynchronously
crypto.randomInt(10, console.log);
// => 7
```

[source](https://nodejs.org/docs/latest-v14.x/api/crypto.html#crypto_crypto_randomint_min_max_callback)
