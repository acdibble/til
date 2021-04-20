# Sorting directories by size

Combining a couple command line utilities, we can easily get the size of
directories (or files if so desired) and sort them:

```shell
$ du -sh */ | sort -hr
```

The trailing slash is important.

[source](https://superuser.com/questions/322521/du-only-for-directories)
