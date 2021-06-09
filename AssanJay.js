//Assan, Jay
//Web Programming - Summer Class

//1. Callback
   const mandi = function(){
        console.log('mandi');
    }
    
    const sarapan = function(a){
         setTimeout(() => {
         console.log("sarapan");
         a();
         }, 3000);
     }

     const  berangkatSekolah = function(){
     console.log("berangkat sekolah");
     }
     mandi();
     sarapan(berangkatSekolah);
 
// 2. Promise
 helloWorld =() => {
     return helloWorld = new Promise((resolve) => {
             resolve("Hello World !");
     })
 };

 let messages = async () => {
     try{
         const msg = await helloWorld();
         setTimeout( () =>{
             console.log(msg);
         },2000);
     }
     catch(error)
     {
         console.log(error);
     }
 };
 messages();

 //3. Fetch
 fetch("https://jsonplaceholder.typicode.com/users")
 .then( (response) => {
     return response.json();
   })
   .then( (user) => {
     console.log(user);
   });
 const ambilDataUser = function() {
 }
 ambilDataUser();

//4. Class
 class Orang1{
      constructor(nama, umur){
          this.nama = nama;
          this.umur = umur;
      }
      bekerja(){
          console.log(`${this.nama} sedang bekerja seperti biasa`);
      }
 }

 let user1 = new Orang1('Jay', 20);
 console.log(user1.bekerja());


//5. Inheritance
 class Orang2{
     constructor(nama, umur){
         this.nama = nama;
         this.umur = umur;
     }
     tidur(){
         console.log (`${this.nama} sedang tidur`);
     }
     makan(){
         console.log (`${this.nama} sedang makan`);
     }
 } 

 class Pelajar extends Orang2{
     constructor(nama, umur, namaSekolah){
         super(nama, umur);
         this.namaSekolah = namaSekolah;
     }
     belajar(){
        console.log(`${this.nama} belajar di ${this.namaSekolah}`);
     }
 }

 let user = new Pelajar('John', 17, 'Unklab'); 
 console.log(user);
 user.belajar();
 user.tidur();
 user.makan();