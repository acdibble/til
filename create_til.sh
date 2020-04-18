#!/bin/env zsh

file=$1/$2.md

mkdir -p $1

echo '# Title

Here is some text explaining the thing I learned, how I came across it, and
demonstrating it:

```shell
$ echo "The example"
```

Here is some more text maybe with the source or some additional info.' > $file

category=''
files=$(ls *)
categories='### Categories\n'
file_list=''

while read -r line
do
  # echo $line
  if [[ $line == *":"* ]]; then
    category="${line:0:-1}"
    file_list="${file_list}\n### ${category}\n\n"
    categories="${categories}\n* [${category}](#${category})"
    continue
  fi

  if [[ ! -z $category ]]; then
    if [[ ! -z $line ]]; then
      titelized=$(echo "${line:0:-3}" | sed -r -e "s/-|_/ /g" -e 's/\b(.)/\U\1/g')
      file_list="${file_list}- [$titelized]($category/$line)\n"
    fi
  fi
done <<< "$files"

echo '# TIL

> Today I Learned

A collection of concise write-ups on small things I learn day to day across a
variety of languages and technologies.

---
' > README.md

echo "$categories\n\n---" >> README.md
echo $file_list >> README.md
echo '## About

I shamelessly stole this idea from
[jbranchaud/til](https://github.com/jbranchaud/til).

## Other TIL Collections

* [jwworth/til](https://github.com/jwworth/til)
* [thoughtbot/til](https://github.com/thoughtbot/til)
* [jbranchaud/til](https://github.com/jbranchaud/til)

## License

This repository is licensed under the MIT license. See `LICENSE` for
details.' >> README.md
