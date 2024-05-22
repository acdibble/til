# Copy file between branches

If you need to reset a file on your local branch with main, for example, you can
use `git show`.

```shell
$ git show main:package.json > package.json
```

[source](https://stackoverflow.com/questions/307579/how-do-i-copy-a-version-of-a-single-file-from-one-git-branch-to-another)
