function errorHandler(error) {
  const { name, message, stack } = error;
  console.log(message);
}

function two() {
  console.log("two");
}
