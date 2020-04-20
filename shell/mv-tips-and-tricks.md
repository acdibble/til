# `mv` Tips and Tricks

There are a couple tricks you can use to make working with `mv` a little quicker
and less painless. The first one is uses brace expansion to rename a file
without having to type the full path twice[1]:

```shell
$ mv -v README.{md,org}
README.md -> README.org
```

Globbing and brace expansion don't play together however, so if you want to move
multiple files according to a pattern, you can use a simple for loop[2]:

```shell
$ touch {1,2,3,4,5}.txt
$ for file in *.txt; do
for> mv -v "$file" "${file%.txt}.md"
for> done
1.txt -> 1.md
2.txt -> 2.md
3.txt -> 3.md
4.txt -> 4.md
5.txt -> 5.md
```

[1] [Cyberciti.biz](https://www.cyberciti.biz/faq/explain-brace-expansion-in-cp-mv-bash-shell-commands/)
<br/>
[2] [StackExchange](https://unix.stackexchange.com/questions/19654/how-do-i-change-the-extension-of-multiple-files)
