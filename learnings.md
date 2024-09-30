# Asynchronous JavaScript Learning

## Topics to Explore Later
- Event Loop in depth
- Promise chaining
- Error handling in async/await
- Async iterators and generators
- Performance implications of async/await

## Questions Asked

1. "What is the difference between two functions suppose we call a function in async function which itself is async function or we just call that outside like()?"

2. "Remember, both scenarios are non-blocking in nature, allowing other code to execute while waiting for the async operations to complete. How can they be non-blocking while they are being asked to 'await'?"

3. "Okay got it, it blocks the function not the thread?"

4. "Okay now suppose that if we simply use const res = await asyncoperate(); then too it will block the thread?"

## Async/Await Behavior

### Function-level blocking vs Thread-level non-blocking

When using `await` in an async function, it's important to understand that it blocks the function execution, but not the entire JavaScript thread.

#### Example:

```
#### Key Points:
1. The `await` keyword pauses execution within the async function (`someFunction`).
2. It does not block the entire JavaScript thread or program execution.
3. Other code outside the async function can continue to run.
4. The JavaScript event loop remains free to handle other tasks while waiting for async operations.

This behavior allows for efficient handling of multiple asynchronous operations without freezing the entire application.

<!-- now start from here for the second question -->







