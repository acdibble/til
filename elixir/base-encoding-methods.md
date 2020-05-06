# Base encoding methods

With the methods of the `Base` module, you can pass which case you want the
output string to be encoded in. Default is upper, but lower can be achieved
without `String.downcase/1`:

```elixir
iex(1)> bytes = :crypto.strong_rand_bytes(32)
<<10, 172, 2, 91, 154, 240, 89, 162, 143, 96, 28, 69, 174,
  179, 223, 221, 232, 248, 28, 193, 159, 57, 142, 148, 188,
  215, 14, 42, 69, 35, 225, 48>>
iex(2)> bytes |> Base.encode16()
"0AAC025B9AF059A28F601C45AEB3DFDDE8F81CC19F398E94BCD70E2A4523E130"
iex(3)> bytes |> Base.encode16(case: :lower)
"0aac025b9af059a28f601c45aeb3dfdde8f81cc19f398e94bcd70e2a4523e130"

```

[source](https://hexdocs.pm/elixir/Base.html)
