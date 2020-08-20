# Avoiding `git-checkout`

`git-checkout`, the Swiss army knife&trade; of git, has various pieces of
functionality built in. Two I've picked up over the years have since been moved
into other functions, which has made `git-checkout` obsolete for me and reduced
autopilot induced `git-checkout` anxiety:

Switching branches:
```shell
# instead of `git checkout master`:
$ git switch branch-name
# to create and switch to a new branch
$ git switch -c new-branch-name
```

Resetting files back to state at last commit:
```shell
# instead of `git checkout -- .`
$ git restore .
```

Gone is the fear of accidentally destroying all of your uncommitted changes when
switching branches.

[`git-switch` docs](https://git-scm.com/docs/git-switch)
