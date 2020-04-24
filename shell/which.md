# `which`

`which` can be used to determine what a shell command actually points to. I was
familiar with using it with an installed binary program to find out where that
binary actually lives. But you can also use it with aliases and functions to see
what they actually equate to:

```shell
$ which take
take () {
	mkdir -p $@ && cd ${@:$#}
}
```

See `man which` for more details.
