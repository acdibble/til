# Memory management

TI finally L how to interact with WebAssembly memory from JS. There are two
basic ways, 1. exporting memory to JS and 2. importing memory from JS. Below I
show the (IMO simpler) exporting memory approach. Be aware of byte-lengths in
linear memory[1].

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

After exporting the memory, we can access the memory as an exported member on
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
one-by-one in function calls, you can put them directly into the buffer in JS.

Some further reading that helped me along is
[WebAssembly by Hand](https://blog.scottlogic.com/2018/04/26/webassembly-by-hand.html)
and [WASM by Hand](https://github.com/rhmoller/wasm-by-hand) (but it's a
different one).

[1] [Linear memory](https://webassembly.org/docs/semantics/#linear-memory)
