# `zmv`

zsh has a `zmv` utility for batch-renaming files:

```zsh
$ ls
10_test.txt 1_test.txt  2_test.txt  3_test.txt  4_test.txt  5_test.txt  6_test.txt  7_test.txt  8_test.txt  9_test.txt
$ autoload -U zmv
$ zmv '(*)_test.txt' 'test_$1.txt'
$ ls
test_1.txt  test_10.txt test_2.txt  test_3.txt  test_4.txt  test_5.txt  test_6.txt  test_7.txt  test_8.txt  test_9.txt
```

[src](https://coderwall.com/p/yepegw/mass-renaming-files-with-zmv-zsh)
