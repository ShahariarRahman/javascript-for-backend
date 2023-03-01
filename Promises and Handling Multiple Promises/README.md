## Synchronous vs Asynchronous Node.js

### States of Promise

- Pending
- Resolved
- Rejected

### Promise() Constructor

- To make an object or instance from a constructor, we write new operator before constructor
- Promise() takes callback function
- - The callback function have 2 parameters : resolve, reject

### The object of Promise Constructor

- The object of Promise constructor have three methods
- then
- - Only execute when resolve function called
- - Get the value passed by the function
- catch
- - Only execute when rejected function called
- - Get the value passed by the function
- finally

### Multiple Async Task

- In Array
- - Push the Promises in array instant of consuming it.
- - Promise.all(ArrayOfPromise).then(res=>console.log(res))
- - - complete all promise in an array then the callback function execute
