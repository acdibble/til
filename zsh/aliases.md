# Aliases

I was wondering if there was a command that combines `mkdir` and `cd` and found
there is indeed if you are an [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh)
user. It's called `take`:

```shell
$ take foo
```

This will make a directory called `foo` and `cd` into it. If the directory
already exists, it will just perform `cd` and not alert you that the directory
already existed.

Oh My Zsh provides a ton of
[pre-configured aliases](https://github.com/ohmyzsh/ohmyzsh/wiki/Cheatsheet)
that will definitely come in handy at some point.
