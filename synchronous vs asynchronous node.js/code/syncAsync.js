// Starts

// 1st event in event Queue
console.log("Block 1");

// async task: sent to threat Pool
setTimeout(() => {
  // threat pool process complete: send to event Queue
  console.log("Block 2");
}, 1000);

// 2nd event in event Queue
console.log("Block 3");
