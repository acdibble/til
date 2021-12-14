# `include_str!`

If you want to include a static utf-8 file in your Rust binary, you can simply
use the `include_str!` macro:

```txt
# hello.txt
hello world!
```

```rust
const CONTENTS: &str = include_str!("hello.txt");

fn main() {
    println!("{}", CONTENTS);
    // prints "hello world!"
}
```

[docs](https://doc.rust-lang.org/std/macro.include_str.html)
