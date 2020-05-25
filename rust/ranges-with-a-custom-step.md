# Ranges with a custom step

Rust `Range` structs and anything that implements the
`Iterator` trait have a `step_by` method that allows you to iterate by a
given number:

```rust
for i in (1..10).step_by(2) {
    println!("i: {}", i);
}
```

[source](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.step_by)
