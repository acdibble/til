# Finding size of folder

The `du` (disk usage) command can be used to determine the total size of a
folder and its contents:

```shell
$ du -sh ~
7.5G	/home/andrew
```

`-s` limits it to exactly the specified folder and not subdirectories. `-h` is
human-readable.

[source](https://linuxize.com/post/how-get-size-of-file-directory-linux/)
