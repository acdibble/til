# Find file creation date

To find when a file was first tracked, `git log` can be used:

```bash
$ git log --format=%aI --follow -- README.md | tail -1
2020-04-18T20:37:08+02:00
```

Do this in a for-loop, and you get a history of when all TILs in this repo were
created:

```bash
for file in $(ls **/*.md); do
    echo "$(git log --format=%aI --follow -- $file | tail -1): $file"
done
```

See `man git log` for more date formats.
