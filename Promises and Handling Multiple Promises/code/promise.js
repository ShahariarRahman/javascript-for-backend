console.log("1st block");

const myPromise = new Promise((resolve, reject) => {
  const user = { id: 1 };
  if (!user) {
    reject("Something went wrong!");
  } else {
    setTimeout(() => {
      resolve("Successfully got the data");
    }, 1000);
  }
});

myPromise
  .then((res) => console.log("found in then:", res))
  .catch((err) => console.log("found in error:", err));

console.log("last block");
