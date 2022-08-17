# Resize vector with fill

The fastest/easiest way to resize a vector in Rust is to use its `resize`
method:

```rust
let mut vec = vec!["hello"];
vec.resize(3, "world");
assert_eq!(vec, ["hello", "world", "world"]);

let mut vec = vec![1, 2, 3, 4];
vec.resize(2, 0);
assert_eq!(vec, [1, 2]);
```

[source](https://doc.rust-lang.org/std/vec/struct.Vec.html#method.resize)
