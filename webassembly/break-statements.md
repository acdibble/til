# Break statements

When using `br` or `br_if` in WebAssembly, you provide a number to the statement
that indicates which level to jump to, 0 is the current block, 1 is the parent
block, 2 is the the parent's parent block, and so on:

```wasm
(func $process
  (block
    (loop
      i32.const 1
      i32.const 1
      i32.add
      if
        (br 0) ;; leaves the current if-block
        (br 1) ;; jumps to the start of the loop-block, i.e. continue
        (br 2) ;; leaves the loop and goes back to the block, i.e. break
      end
    )
  )
)
```
