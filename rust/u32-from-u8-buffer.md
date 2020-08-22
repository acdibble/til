# u32 from u8 buffer

`u32` has built-in methods to convert from `u8` buffers:

```rust
fn main() {
    let buf = [0, 0, 0, 1];
    let num = u32::from_be_bytes(buf);

    assert_eq!(1, num);
}
```

[source](https://stackoverflow.com/questions/29307474/how-can-i-convert-a-buffer-of-a-slice-of-bytes-u8-to-an-integer)
