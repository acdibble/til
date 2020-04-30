# `select` vs `pluck`

A good way of limiting queries in ActiveRecord is with `select` or `pluck`, but
they have different return values:

```ruby
> Book.all.select(:title)
# => [#<Book:0x000000055cf0f8 id: nil, title: "The Great Gatsby">]
> Book.all.pluck(:title)
# => ["The Great Gatsby"]
```

Consider using pluck
[in hotter paths](http://gavinmiller.io/2013/getting-to-know-pluck-and-select/).
