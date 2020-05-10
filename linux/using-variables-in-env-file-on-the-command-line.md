# Using variables in .env file on the command line

If you keep secrets in a .env file (or in any file with the normal KEY=value
format), they can be temporarily exported to invoke a command:

```shell
$ (export $(cat .env | xargs) && MIX_ENV=prod mix release)
```

They will not be persisted outside of this command.

[source](https://stackoverflow.com/questions/19331497/set-environment-variables-from-file-of-key-value-pairs)
