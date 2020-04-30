# Regular expression flags

The flags `g`, `i`, and `m` seem to be well-known regex flags in JavaScript.
However, there are some lesser known useful flags. The "dotAll" `s` flag can be
used to include newlines in a `.` wildcard match. The unicode `u` flag can be
used to match instances of unicode characters in a string. The sticky `y`
flag[1] can be used to start a search at a different index of the string than 0.

`RegExp` instances also have getter methods that can tell you which flags are
enabled[2].

[1] [javascript.info](https://javascript.info/regexp-introduction)
<br />
[2] [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
