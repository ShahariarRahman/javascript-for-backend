// Starts

// sync task 1:
console.log("Block 1");

// async task 1
setTimeout(() => {
  const user = { id: 1 };
  // async task 2
  // 2nd async callback function declare here inside 1st async callback function because we need value of 1st async callback function.
  setTimeout(() => {
    const products = [{}, {}, {}];
    // async task 3
    // 3rd async callback function declare here inside 2nd async callback function because we need value of 2nd async callback function.
    setTimeout(() => {
      const prices = [];
    }, 1000);
  }, 500);
}, 1000);

// sync task 2
console.log("Block 3");

/**
 Problems of nested async callback: 
 * Readability compromised
 * Difficult to maintain
 * Nested Complex callback task is called Callback Hell 
*/
