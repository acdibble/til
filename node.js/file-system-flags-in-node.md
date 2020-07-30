# File system flags in Node

Node.js's filesystem module provides some useful flags that can help decrease
code complexity. This file was created with the `wx` flag for example. `w` is
write mode, and `x` will cause an error to be thrown if the file already
exists. This saves one round trip and a race condition if `existsSync` or
`access` had to be used beforehand.

[source](https://nodejs.org/api/fs.html#fs_file_system_flags)
