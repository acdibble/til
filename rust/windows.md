# Windows

If you want to iterate over a slice in windows, you can use
[`std::slice::Windows`](https://doc.rust-lang.org/std/slice/struct.Windows.html):

```rust
fn foo() {
    let slice = ['h', 'e', 'l', 'l', 'o', ' ', 't', 'h', 'e', 'r', 'e'];

    for window in slice.windows(2) {
      println!("{:?}", window);
      // prints ['h', 'e']
      //        ['e', 'l']
      //        ['l', 'l']
      //        ['l', 'o']
      //        ['o', ' ']
      //        [' ', 't']
      //        ['t', 'h']
      //        ['h', 'e']
      //        ['e', 'r']
      //        ['r', 'e']
    }
}
```
