function errorHandler(error) {
  const { name, message, stack } = error;
  console.log(message);
}

// default
// module.exports = errorHandler;

function two() {
  console.log("two");
}

module.exports = {
  errorHandler,
  two,
};
