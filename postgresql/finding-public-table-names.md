# Finding public table names

Working in a new database? The following query will return the names of all
public tables:

```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name;
```

[source](https://flaviocopes.com/postgres-how-to-list-tables-database/)
