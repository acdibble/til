# Inspect with labels

`IO.inspect/2` has an option for passing a label to be printed in front of the
inspected term:

```elixir
iex(1)> [1, 2, 3] \
...(1)> |> IO.inspect(label: "before") \
...(1)> |> Enum.map(&(&1 * 2)) \
...(1)> |> IO.inspect(label: "after") \
...(1)> |> Enum.sum()
before: [1, 2, 3]
after: [2, 4, 6]
12
```

It looks like label can be an atom as well:

```elixir
iex(2)> defmodule Printer do
...(2)>   def print(term) do
...(2)>     IO.inspect(term, label: __MODULE__)
...(2)>   end
...(2)> end
{:module, Printer, <<...>>, {:print, 1}}
iex(3)> Printer.print(nil)
Elixir.Printer: nil
```

[source](https://hexdocs.pm/elixir/IO.html#inspect/2)
