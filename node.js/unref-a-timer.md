# unref a timer

Outstanding timers in the event loop will prevent Node.js from exiting. There
are several ways of preventing this behavior when not desirable.

## Manual

`setTimeout` returns an intsance of the `Timer` class. This class has an `unref`
method that can be used to keep the timer running, but prevent the timer from
blocking the event loop from exiting.

```ts
const timer = setTimeout(someFunction, 1_000);
timer.unref();
```

## Automatic

In the `timers/promises` module, there is an asynchronous version of
`setTimeout` that accepts options. NB that the second argument to the function
will be the return value of the promise. The third argument is for options.

```ts
import { setTimeout } from 'timers/promises';

await setTimeout(1_000, null, { ref: false });
```

[docs](https://nodejs.org/docs/latest-v20.x/api/timers.html)
