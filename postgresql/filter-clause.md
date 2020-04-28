# Filter clause

The filter clause can be used to shorten long case statements in select clauses:

```postgresql
SELECT
  COUNT(*) (WHERE integer_column > 10)
FROM
  my_table;
```

Obviously not super useful in trivial examples, but in more complex queries,
it's a nice tool to have.

[docs](https://www.postgresql.org/docs/9.4/sql-expressions.html)
