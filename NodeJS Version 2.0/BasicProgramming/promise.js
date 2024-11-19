const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched from Server..!");
    }, 2000);
});

fetchData
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => {
        console.log("Finally closed this error");
    });
