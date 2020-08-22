# Get list of commits between two tags

In order to get a list of commits between two tags, the following shell commands
can be used:

```shell
$ git tag | sort -V | tail -n 2 | xargs -n 2 sh -c 'git log $0...$1'
```

`git-tag` lists all the tags, `sort -V` sorts the semvers properly, `tail -n 2`
takes the last two lines, in this case the most recent two tags, and then
`xargs` executes `git-log` with the two tags.
