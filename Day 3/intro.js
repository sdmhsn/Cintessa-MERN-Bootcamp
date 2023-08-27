// var nama = "Eri Akbar";
// let umur = 18;
// const pekerjaan = "Fullstack Developer";
// if (umur == 18) {
//     var umur_str = "Umur 18";
//     console.log(umur_str)
// }
// pekerjaan = "Frontend"
// console.log(umur_str)

//------------------------

// var nama = "Eri Akbar";
// var umur = 26.9;
// var is_dev = false //true or false
// var fruit = ['apel','mangga','jeruk']
// var nama_lengkap = {
//     "nama_pertama":"Eri",
//     "nama_tengah":"Akbar",
//     "nama_belakang":"Nurjaman"
// }
// var produk = [
//     {
//         "nama_produk":"Iphone 14",
//         "harga":20000
//     },
//     {
//         "nama_produk":"Iphone 15",
//         "harga":30000
//     },
// ]
// var umur_str = umur.toString()
// var umur_int = parseInt(umur)

//------------------------

// var numberA = 10;
// var numberB = 4;
// var hasil = numberA + numberB
// // console.log(hasil)
// var hasil = numberA - numberB
// // console.log(hasil)
// var hasil = numberA / numberB
// // console.log(hasil)
// var hasil = numberA * numberB
// // console.log(hasil)
// var hasil = numberA % numberB
// // console.log(hasil)

// var nama = "Eri Akbar";
// // console.log(nama.length)
// // console.log(nama[8])
// var str1 = "hello"
// var str2 = "javascript"
// var umur = 18
// console.log(str1.concat(" ",str2))
// console.log(str2.concat(" ",str1))
// console.log("nama: "+nama+"; umur : "+umur);
// is_dev = false;
// if (is_dev) { //operator condition == , >= , <= , > = <
//     console.log("kamu developer");
// }else{
//     console.log("kamu bukan developer");
// }
// if (umur > 20) {
//     console.log("umur kamu diatas 20")
// }else if(umur > 15){
//     console.log("umur kamu di atas 15")
// }else{
//     console.log("umur kamu di bawah 15")
// }

//--------
var umur = 17;
switch (umur) {
    case 18:
        console.log("umur kamu adalah 18")
    break;
    case 19:
        console.log("umur kamu adalah 19")
    break;
    default:
        console.log("umur kamu bukan 18 dan 19")
    break;
}
// for (let index = 5; index <= 10; index++) {
//     console.log(index)
// }
// var value = 1
// while (value <=19) {
//     console.log(value)
//     value++
// }
// var ind = 1
// do{
//     console.log(ind)
//     ind++
// }while (ind <= 19)

//--------------
const fruit = ["apel","mangga","jeruk"]
// for (const text of fruit) {
//     console.log(text)
// }
// var nama_lengkap = {
//     "nama_pertama":"Eri",
//     "nama_tengah":"Akbar",
//     "nama_belakang":"Nurjaman"
// }
// for (const key in nama_lengkap) {
//     console.log(nama_lengkap[key])
    
// }
// fruit[1]
// nama_lengkap.nama_belakang
// fruit.push("anggur") // menambahkan value kedalam array di bagian akhir
// console.log(fruit)
// fruit.pop() // menghapus value paling akhir dari array
// console.log(fruit)
// fruit.unshift("anggur") // menambahkan value kedalam array di bagian awal
// console.log(fruit)
// fruit.shift() // menghapus value paling awal dari array
// console.log(fruit)
// fruit.splice(1,2,"anggur","kiwi")
// console.log(fruit)
// fruit.splice(1,2)
// console.log(fruit)
// fruit.forEach(function (value) {
//     console.log("buah :  "+ value)
// })

// fruit.forEach(loopfor)
// function loopfor(value) {
//     console.log("buah :  "+ value)
// }

// function name() {
//     let nama = "Eri";
//     console.log('halo semuanya')
//     console.log('nama saya : ',nama)
// }
// for (let index = 0; index < 10; index++) {
//     name()
// }
// function sumAB(a=2,b=0) {
//     let hasil = a+b;
//     name()
//     return hasil
// }
// var nama_lengkap = {
//     "nama_pertama":"Eri",
//     "nama_tengah":"Akbar",
//     "nama_belakang":"Nurjaman"
// }
// function showObject(obj){
//     console.log(obj)
// }
// var array_ = [0,1,2]
// const showArray = (arr)=>{
//     console.log(arr)
// }
// showArray(array_)
// showObject(nama_lengkap)
// var a = 10;
// var b = 11;
// var hasilAB = sumAB()

// console.log(hasilAB)

// var transaksi = {
//     produk : {
//         nama_produk : "Air Minum",
//         harga : 100000,
//         stok : 100,
//     },
//     qty:100,
//     order_id:1,
//     customer:{
//         nama:"Eri",
//         no_hp:"08999832132"
//     }
// }
// console.log(transaksi.produk.nama_produk)
// //key
// var produk_key = Object.keys(transaksi)
// console.log(produk_key)
// //values
// var transaksi_values = Object.values(transaksi)
// console.log(transaksi_values)
// //hasOwnProperty
// var has_qty = transaksi.hasOwnProperty('qty')
// var has_kode_order = transaksi.hasOwnProperty('kode_order')
// console.log(has_qty)
// console.log(has_kode_order)