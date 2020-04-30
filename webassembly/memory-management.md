# Memory management

There are two ways of interacting with WebAssembly memory from JS, 1. exporting
memory to JS and 2. importing memory from JS. Demonstrated below is the somewhat
easier way (method 1). Memory in WebAssembly is linear[1], so byte sizes of data
has to be taken into account with the offset:

```wasm
// mod.wat
(module
  (memory (export "memory") 1) ;; create one page of memory and export it
  (export "read" (func $read (param $index i32) (result i32)
    local.get $index    ;; get the index to be read
    i32.const 4         ;; i32 uses 4 bytes per number
    i32.mul
    i32.load            ;; load that index
  ))
)
```

After exporting the memory, the memory can be accessed as an exported member on
the WASM instance and combine it with a Uint32Array to enable direct reading and
writing directly to the instance's memory:

```js
const module = await WebAssembly.compile(readFileSync('path/to/mod.wasm'));
const instance = await WebAssembly.instantiate(module);
const memory = new Uint32Array(instance.exports.memory.buffer, 0, 1);
memory[0] = 42;
console.log(instance.exports.read(0))
// => 42
```

This is useful in avoiding the overhead that comes with crossing the boundary
between JS and WASM during function invocations. Instead of loading values
one-by-one in function calls, they can be put directly into the buffer in JS.

Some further reading that helped me along is
[WebAssembly by Hand](https://blog.scottlogic.com/2018/04/26/webassembly-by-hand.html)
and [WASM by Hand](https://github.com/rhmoller/wasm-by-hand) (but it's a
different one).

[1] [Linear memory](https://webassembly.org/docs/semantics/#linear-memory)
