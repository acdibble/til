# Test setup

ExUnit provides hooks to set up test environment such as the `setup_all` hook:

```elixir
setup_all do
  System.put_env("SLACK_SIGNING_SECRET", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
  on_exit(fn -> System.delete_env("SLACK_SIGNING_SECRET") end)
end
```

The `on_exit` callback is invoked after the file's tests are complete.

[source](https://hexdocs.pm/ex_unit/master/ExUnit.Callbacks.html)
