# `EXCEPT` keyword

The `EXCEPT` keyword can be used to efficiently get the difference between two
sets in Postgres.

```sql
SELECT *
FROM generate_series(0, 100) AS amount
EXCEPT
SELECT generate_series(1, 99) AS amount
ORDER BY amount;
--  amount
-- --------
--       0
--     100
```

[source](https://www.postgresql.org/docs/current/queries-union.html)
