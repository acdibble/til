# `Option` into `Result`

The `Option` method
[`ok_or`](https://doc.rust-lang.org/std/option/enum.Option.html#method.ok_or)
can be used to unwrap an `Option` if it is some, or convert it to an `Err` if it
is `None`.

```rust
fn try_get_element<T: Copy>(vec: &Vec<T>, index: usize) -> Result<T, String> {
    Ok(*vec.get(index).ok_or("whoops not found")?)
}
```

There is also
[`ok_or_else`](https://doc.rust-lang.org/std/option/enum.Option.html#method.ok_or_else)
which accepts a closure to convert into an `Err`.
