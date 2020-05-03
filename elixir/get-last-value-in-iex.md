# Get last value in IEx

REPLs often provide a way to access the last processed value, in the Chrome Dev
Tools, it's `$_`, in the Node.js or Ruby REPLs, it's `_`. In IEx, the last
processed value is retrieved by `v/0`:

```elixir
iex(1)> 1
1
iex(2)> v
1
iex(3)> v |> Kernel.+(1)
2
```

Additionally, there is `v/1` to retrieve the nth value from history. In IEX, use
`h/0` or `h/1` for more details.
