# Tables

Tables can be used to store references to functions which can then be invoked
by using the `call_indirect` opcode with an integer that refers to the table
index of the function you wish to execute:

```wasm
(module
  (table 1 funcref) ;; declare table with length of 1
  (elem (i32.const 0) $store) ;; define elements with no offset
  (func $store (param $value i32) (param $address i32)
    local.get $address
    local.get $value
    i32.store
  )
  (start
    i32.const 0    ;; the $address param for $store
    i32.const 42   ;; the $value param for $store
    i32.const 1    ;; the index of the function in the table, i.e. $store
    call_indirect
  )
) 
```
Offsets can be defined, i.e. the functions start at 0 + offset, and you must
specify return values on an indirect call if you want to return a value.

More info [here](https://github.com/WebAssembly/design/blob/master/Modules.md).

