# Changing next search hits

When doing interactive rebases to merge a feature branch that was previously
based off of another feature branch that was merged into the main branch, it's
useful to be able to quickly be able to drop all of the old commits by replacing
`pick` with `drop`:

```shell
pick 3f68c02 Add randomInt TIL
pick 41faaa4 Add zmv TIL
pick 64943ae Change linuxx to Unix
pick 2c65fac Add Unix TIL
pick 982940a Add mysql TIL
pick 3f2eea3 Add node TIL
pick c820786 Update repo
pick 788cb27 Add rust TIL
pick 97802fc Add rust TIL
pick e2c4632 add rust TIL
```

After entering the interactive rebase you can perform the following:

1. `*` to find the next match of the word under the cursor
2. `Shift-n` (previous match) to go back to the first match
3. `ciw` (change inner word) followed by `Enter` to begin editing
4. type drop/pick/edit followed by `Escape`
5. `n` (find next occurrence) followed by `.` repeat change as many times as
   desired

[source](https://vim.fandom.com/wiki/Search_and_replace_the_word_under_the_cursor#Manual_procedure)
