function fecthData(callback) {
    setTimeout(() => {
        console.log("Data fetched from Server..!");
        callback();
    }, 2000);
}

fecthData(() => {
    console.log("Call Executed..!");
})