# High resolution timer

Node.js has a high resolution timer available on the process object that returns
a `BigInt` in nanoseconds:

```javascript
> process.hrtime.bigint()
91064631083291n
```

[source](https://nodejs.org/api/process.html#process_process_hrtime_bigint)
