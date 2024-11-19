async function fecthData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched")
        }, 2000);
    })
}

async function fecthDataAndLog() {
    const data = await fecthData();
    console.log(data);
    
}
fecthDataAndLog()