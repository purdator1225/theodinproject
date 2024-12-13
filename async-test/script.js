// function loadScript (src,callback) {
//     let script = document.createElement('script');

//     script.src = src;
//     script.onload = ()=> callback(script);
//     document.head.append(script)
// }


// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//   alert(`Cool, the script ${script.src} is loaded`);
//   alert( script ); // _ is a function declared in the loaded script
// });

//write  a promise that calculates a result and returns it when asked 

let calculate4Promise = new Promise((resolve, reject)=>{

    const result = 2 + 2 

    resolve(result)
})

let request2plus2 = calculate4Promise.then(res=>{
    console.log(res)
})


function delay(ms){
    return new Promise((resolve)=>

        setTimeout(resolve,ms)
     )
}

delay(3000).then(()=> alert('after 3 secs'))