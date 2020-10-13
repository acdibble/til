# Regular expression non-capture groups

Regular expressions in JavaScript have "non-capture groups" to allow for a
quantifier to be expressed as a group but have the group omitted from the
results. The syntax is `?:` at the beginning of the group:

```js
const string = 'ABC';
console.log(/A(?:B)([A-Z])/.exec(string));
// => [ 'ABC', 'C', index: 0, input: 'ABC', groups: undefined ]
```

[source](https://javascript.info/regexp-groups#non-capturing-groups-with)
