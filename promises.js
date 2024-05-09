let promise1 = new Promise((res, rej) => {
    setTimeout(() => {
         res("after 5 sec")
    }, 5000)
})

let promise2 = new Promise((res, rej) => {
    setTimeout(() => {
       res("after 3 sec")
    }, 3000)
})

let promise3 = async () => {
     const data = await fetch("https://example.com/api/data");
     return data.json();
} 

Promise.race([promise1, promise2]).then((val) => {
    console.log(val)
})

console.log(promise3)