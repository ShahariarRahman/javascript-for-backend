const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success!");
  }, 1000);
});

const getData = async () => {
  const res = await promise;
  console.log(res);
};

getData();

// fetch:
fetch("")
  .then((res) => res.json())
  .then((data) => console.log(data));

// async await
const getUser = async () => {
  const res = await fetch("");
  const user = await res.json();

  const res2 = await fetch(`https://www.example.com/${user.id}`);
  const products = await res2.json();

  console.log(products);
};

getUser();
