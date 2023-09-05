// console.log("starting task")
// console.log("waiting task")
// setTimeout(function () {
//     console.log("task is running")
// },5000)
// var detik = 0
// setInterval(function() {
//     console.log(detik)
//     detik++
// },2000)
// console.log('end')
// function getData() {
//     return new Promise(function (resolve,reject) {
//         // setTimeout(function () {
//         //     const data = "Data Berhasil diambil"
//         //     resolve(data)
//         // },2000)
//         reject("data error")
//     })
// }
// getData().then(function(res) {
//     console.log(res)
// }).catch(function(error) {
//     console.log(error)
// })
 async function getData() {
    console.log("waiting get data")
    await fetch('http://localhost:3001/blog').then(res=>{
        return res.json()
    }).then(data=>{
        console.log(data)
    })
    // console.log(data)
    console.log("end")
}
async function getDataAxios() {
    console.log("waiting get data")
    const data = {
        userId:123
    }
    await axios.post('http://localhost:3001/user',data,{
     headers:{
        'Authorization':"bearer 12321"
     }
    }).then(res=>{
        console.log(res.data)
    }).catch(error=>{
        console.log(error)
    })
    try {
        const data =  axios.post('http://localhost:3001/user',data,{
            headers:{
               'Authorization':"bearer 12321"
            }
           });
        console.log(data)
    } catch (error) {
        
    }
    console.log("end")
}
var data;
try {
    if (data) {
        console.log(data)
    }else{
        throw new Error("data tidak boleh kosong")
    }
} catch (error) {
    console.log(error)
}