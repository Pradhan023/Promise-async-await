// Q1
// function outer(cb)
// {
//     console.log("Callback 1");
//     cb()
// }
// function outer1()
// {
//     console.log("Callback 2");
// }
// outer(outer1)

// Q2
// setTimeout(() => {
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//         setTimeout(() => {
//             console.log("3");
//             setTimeout(() => {
//                 console.log("4");
//                 setTimeout(() => {
//                     console.log("5");
//                     setTimeout(() => {
//                         console.log("6");
//                         setTimeout(() => {
//                             console.log("7");
//                         },7000)
//                     },6000)
//                 },5000)
//             },4000)
//         },3000)
//     },2000)
// },1000);

// Q3
// const pro = (num)=>{
// return new Promise(function(res,rej){
//    for(let i = 1 ; i < 8 ; i++)
//    {
//     setTimeout(() => {
//         res()
//         console.log(i);
//     },i*(i+1)/2*num);
//    }
// })
// }
// pro(1000).then()


// })
// Q4
// function fun(argu){
//     return new Promise((res,rej) => {
//         if(argu === 'Yes')
//         {
//             res()
//         }
//         else
//         {
//             rej()
//         }
//     })
// }
// fun('Yes').then(()=> {console.log("Promise is resolved");}).catch(() => {console.log("Promise is rejected");})

// Q5
// function call1(cb){
//     console.log("cb 1");
//     cb()
// }
// function call2(cb){
//     console.log("cb 2");
//     cb()
// }
// function call3(cb){
//     console.log("cb 3");
//     cb()
// }
// function call4(cb){
//     console.log("cb 4");
//     cb()
// }
// function call5(cb){
//     console.log("cb 5");
//     cb()
// }
// function call6(){
//     console.log("cb 6");
// }

// call1(() => {
//     call2(() => {
//         call3(() => {
//             call4(() => {
//                 call5(call6)
//             })
//         })
//     })
// })

// Q6
// const pro = new Promise((res,rej)=>{
//     let math=60
//     if(math>=55)
//     {
//         res()
//     }
//     else{
//         rej()
//     }
// })
// pro.then(() => {
//     console.log("Maths is passed");
// })
// .catch(() => {
//     console.log("You are fail");
// })

// Q7
// const pro = new Promise((res,rej)=>{
//         let math=60
//         if(math>=55)
//         {
//             res("Pass")
//         }
//         else{
//             rej("Fail")
//         }
//     })
//     async function fun()
//     {
//         var wait = await pro
//         console.log(wait);

//         console.log("successfully run");
//     }
//     fun()

// Q8
// const pro = new Promise((res,rej) => {
//     let name = "Anish"
//     if(name === "Anish")
//     {
//         res()
//     }
//     else{
//         rej()
//     }
// })

// const pro1 = new Promise((res,rej) => {
//     let name = "Akanksha"
//     if(name === "Akanksha")
//     {
//         res()
//     }
//     else{
//         rej()
//     }
// })

// Promise.all([pro,pro1]).then(() => {console.log('Resolved');}).catch(() => {console.log('error');})