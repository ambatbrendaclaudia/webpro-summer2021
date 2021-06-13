//?1. CALLBACK
/*
 function mandi()
{
    console.log("Mandi");
}
function sarapan(){
    setTimeout(=>
        funtion{
            console.log("Sarapan");
        }, 3000)
}
function berangkatSekolah(){
    console.log("Berangkat Sekolah");
}
function sarapan (callback){
   const sarapan = '$(sarapan)';
   callback(sarapan);
}
mandi();
sarapan();
berangkatSekolah();
*/
//? 2. PROMISE
/*
function helloWorld(){
    return new Promise(function(resolve){
        setTimeout(() => resolve("Hello World!")
    }, 2000);
}
async function messages(){
     msg = await helloWorld()
     console.log(msg)
};
messages();
*/
//?. 3. FETCH
/*
function ambilDataUser(){
    const Fetch = fetch("https://jsonplaceholder.typicode.com/users");
    .then(function(response){
        return response.json();
    })
    .than(function(user){
        console.log(user);
    })
}
ambilDataUser();
*/
//? 4. Class
/*
class Orang{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
     const bekerja() {
         console.log('${this.nama}sedang bekerja seperti biasa');
     }
}
const user1 = new Orang("Arlius Lalong", 30);
*/
//? 5. Inheritance
/*
class Orang{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    const tidur(){
        console.log('${this.nama} sedang tidur');
    }
    const makan() {
        console.log('${this.nama}sedang makan');
    }
}
class Pelajar extends orang{  
    constructor(nama, umur,namaSekolah){
        super(nama,umur);
        this.namaSekolah = namaSekolah;
        assign namaSekolah(namaSekolah);
    }
    const belajar (){
        console.log('${this.nama}belajar di ${this.namaSekolah}');
    }
}
class Pelajar instance user("jhon", 17 ,"Unklab"){
    console.log();
}
*/