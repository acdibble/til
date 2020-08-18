# Finding available methods for class

When too lazy to look at documentation for a third party library, inspect allows
the methods available on an object to be retrieved quickly:

```python
>>> import inspect
>>> inspect.getmembers("", predicate=inspect.ismethod)
```

[source](https://stackoverflow.com/questions/1911281/how-do-i-get-list-of-methods-in-a-python-class)
