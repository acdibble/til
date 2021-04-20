# Find process running on port

`fuser` can be used to find (and kill) processes running on ports:

```shell
$ fuser 3000/tcp
3000/tcp:            26617
```

See `man fuser` for more info.
