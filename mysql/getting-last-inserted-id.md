# Getting last inserted id

MySQL provides the `LAST_INSERT_ID()` function to get the most recently inserted
id for the current connection. Other connections' insertions will not be
returned by this function:

```sql
mysql> SELECT LAST_INSERT_ID();
        -> 195
```

[docs](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_last-insert-id)
