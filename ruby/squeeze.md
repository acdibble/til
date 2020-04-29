# `squeeze`

Ruby strings' `squeeze` method can be used to remove repeating characters. It
will remove as many consecutive repetitions as it finds, leaving just one
behind. Or you can pass it a character to explicitly squeeze:

```ruby
> "aabbbbbbbbcbc".squeeze
=> "abcbc"
> "  a   lot   of   extra  space".squeeze(' ')
# => " a lot of extra space"
```

[source](https://apidock.com/ruby/String/squeeze)
