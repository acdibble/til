# Return just matched strings with `grep`

When filtering output with `grep`, the flag `-o` can be used to return only the
matched parts of a line. The flag `-h` can be used to suppress the filename for
each match.

To run eslint on a repo and find which typescript-eslint rules currently have
infractions, you can sort and then take uniques of the matches returned by
`grep` with the aforementioned flags:
```shell
$ npx eslint . | grep -oh "@typescript-eslint/.*" | sort | uniq
```

[source](https://stackoverflow.com/questions/1546711/can-grep-show-only-words-that-match-search-pattern)
