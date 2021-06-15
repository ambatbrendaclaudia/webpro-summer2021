// /* 1. Callback */
// const mandi = function(){
//     console.log("Mandi")
// }

// const sarapan = function(){
//     console.log("Sarapan tertunda 3 detik");
// }
// const berangkatsekolah = function(callback){
//     console.log("Berangkat Sekolah");
//     callback();
// }
// setTimeout(sarapan, 3000);
// berangkatsekolah(mandi);


// /* 2. Promise */
// function helloWorld(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Hello Word!");
//         },2000)
//     });
// }

// async function message(){
//     console.log("msg");
//     const result = await helloWorld();
//     console.log(result);
// }
// message();


// /* 3. Fetch */
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => console.log(users));


// /* 4. Class */
// class orang{
//     constructor(nama, umur){
//         this.nama = nama;
//         this.umur = umur;
//     }
//     bekerja(){
//         console.log(`${this.nama} sedang berkerja seperti biasa`);
//     }
// }

// const user1 = new orang ("Brenda Ambat", 22);
// console.log(user1.nama);
// console.log(user1.umur);
// user1.bekerja();


/* 5. Inheritance */
class orang{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    tidur(){
        console.log(`${this.nama} sedang tidur`);
        console.log(`${this.nama} sedang makan`);
    }
}

class pelajar extends orang{
    constructor(nama, umur, namaSekolah){
        super(nama, umur);
        this.namaSekolah = namaSekolah;  
    }
    belajar(){
        console.log(`${this.nama} belajar di ${this.namaSekolah}`);
    }
}
const user1 = new orang ("John", 17)
console.log(user1.nama);
console.log(user1.umur);
user1.tidur();

const user = new pelajar ("John", 17, "Unklab");
console.log(user.nama);
console.log(user.umur);
console.log(user.namaSekolah);
user.belajar();