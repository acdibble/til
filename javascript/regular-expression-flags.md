# Regular expression flags

The flags `g`, `i`, and `m` are popular in my experience. However, if you're
looking to match something over several lines, there is now a "dotAll" `s` flag
that captures new lines with the `.` wildcard. If you're looking to match
unicode characters, there is the unicode `u`. If you're looking to specify and
index to start the search at, you can use the sticky `y` flag[1].

`RegExp` instances also have getter methods that can tell you which flags are
enabled[2].

[1] [javascript.info](https://javascript.info/regexp-introduction)
[2] [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
