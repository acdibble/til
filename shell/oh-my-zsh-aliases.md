# Aliases

If you are an [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh) user, there is a
command that combines `mkdir` and `cd`, `take`:

```shell
$ take foo
```

This will make a directory called `foo` and `cd` into it. If the directory
already exists, it will just perform `cd` and not alert you that the directory
already existed.

Oh My Zsh provides many other
[pre-configured aliases](https://github.com/ohmyzsh/ohmyzsh/wiki/Cheatsheet)
that can prove useful.

The definition of `take` can be found using the [`which`](which.md) command.
