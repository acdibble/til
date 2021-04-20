# `tar` with nested directories

In order to compress a nested directory with tar without having to first change
into its parent directory, the `-C` flag can be used:

```shell
$ tar -czvf compressed.tar.gz -C path/to/almost/ target_dir
```

[source](https://stackoverflow.com/questions/18681595/tar-a-directory-but-dont-store-full-absolute-paths-in-the-archive)
