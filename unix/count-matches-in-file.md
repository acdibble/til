# Count matches in file

Using `grep`, it is easy to count the occurrences of a string or regular
expression in a file. Using the `-o` flag, it will print each individual match
to its own line, which can then just be counted with the `wc` utility:

```shell
$ grep -o "match" ./count-matches-in-file.md | wc -l
```

If the file is binary, the `-a` flag can be used.

[source](https://stackoverflow.com/questions/2908757/count-number-of-occurrences-of-a-pattern-in-a-file-even-on-same-line)
