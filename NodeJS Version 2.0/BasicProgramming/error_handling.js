async function fecthData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched")
        }, 2000);
    })
}

async function fecthDataAndLog() {
    try {
        const data = await fecthData();
    console.log(data);
    } catch (err) {
        console.log(err);
    }
    finally {
        console.log("finally colsed this ");
        
    }
    
    
}
fecthDataAndLog()