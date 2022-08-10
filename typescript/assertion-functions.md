# Assertion functions

TypeScript has "assertion functions", which vary slightly from type guards. In
theory, they behave like this:

```typescript
declare function assert(condition: unknown): asserts condition;

declare const value: number | null;

value; // => number | null

assert(typeof value === 'number');

value; // => number
```

In practice, they can be employed in different ways to achieve type inference
goals:

```typescript
// asserts the value passed is a string
function assertString(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('Expected string');
  }
}

// asserts that the value passed is not null or undefined
function assertNonNullish<T>(value: T): asserts value is NonNullable<T> {
  if (value == null || value === undefined) {
    throw new Error('Expected non-nullish value');
  }
}

// or a concrete implementation of the `assert` function above
function assert(
  condition: unknown,
  message?: string | Error
): asserts condition {
  if (!condition) {
    throw message instanceof Error
      ? message
      : new Error(message || 'Assertion failed');
  }
}

// this `assert` function can even be used to narrow down to a constant value
const number = Math.floor(Math.random() * 100);
assert(number === 42);
console.log(number); // prints 42 if it makes it here
```

Note that the `function` keyword must be used with assertion functions, arrow
functions will error within the TypeScript compiler.

[source](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions)
