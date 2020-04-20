# String manipulation in shell

This is related to the [`mv` TIL](mv-tips-and-tricks.md). You can use `%` to
easily remove the file extension from a string with a filename:

```shell
$ file="example.txt"
$ echo "${file%.txt}"
example
```

`%` deletes the shortest match of the given pattern from the string. There is
also `#`, `##`, and `%%` that you can find more out about
[here](https://stackoverflow.com/questions/34951901/percent-symbol-in-bash-whats-it-used-for)
.
