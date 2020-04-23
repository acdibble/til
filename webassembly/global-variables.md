# Global variables

Global variables in WebAssembly differ from local ones in that they can be
mutable or constant and need to be initialized before use. They can also be
imported from JS. Or they can be defined like so:

```wasm
(global $pointer (mut i32) (i32.const 0))
(func $usePointer
  global.get $pointer
  call $doSomething
)
```

[source](https://livebook.manning.com/book/webassembly-in-action/chapter-11/101)
