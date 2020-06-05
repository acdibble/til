# Finding next primary key for table

PostgreSQL provides some simple procedures to interact with sequences. To find
the next value from a primary key sequence, the `nextval` function can be used
to find the next value from the sequence.

```sql
SELECT nextval('your_table_id_seq');
-- nextval
-- 629
```

[source](https://stackoverflow.com/questions/244243/how-to-reset-postgres-primary-key-sequence-when-it-falls-out-of-sync)
