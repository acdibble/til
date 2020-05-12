# Tailing a file

Powershell has a `Get-Content` (or `cat`) command to read the contents of an
item at a specified location. Among its flags are `-Tail <Int32>` and `-Wait`:

```powershell
$ Get-Content file.txt -Tail 10 -Wait
```

This will read the contents of the file, print the last 10 lines and wait for
more lines to be written to the file. In Linux this is equivalent to:

```bash
$ tail file.txt -n 10 -f
```

[docs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-content)
