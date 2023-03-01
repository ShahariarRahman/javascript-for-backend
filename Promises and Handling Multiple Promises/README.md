## Synchronous vs Asynchronous Node.js

### States of Promise

- Pending
- Resolved
- Rejected

### Promise() Constructor

- To make an object or instance from a constructor, we write new operator before constructor
- Promise() takes callback function
- - the callback function have 2 parameters : resolve, reject

### The object of Promise Constructor

- The object of Promise constructor have three methods
- then
- - only execute when resolve function called
- - get the value passed by the function
- catch
- - only execute when rejected function called
- - get the value passed by the function
- finally
