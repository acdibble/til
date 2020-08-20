# Sync deleted remote branches

To remove all local branches that were deleted remotely, `git-fetch` can be used
with a prune flag to remove them:

```shell
$ git fetch -p
```

[source](https://stackoverflow.com/questions/5751582/fetch-from-origin-with-deleted-remote-branches)
