// JavaScript Control Flow Statement
// JavaScript if Statement
// var age = 10
// if (age >= 18){
//     console.log("Anjay")
// }

// JavaScript if - else Statement
// let score = 40
// if (score >= 50){
//     console.log("You passed.")
// }
// else{
//     console.log("You failed.")
// }

// JavaScript if - else if - else Statement
// const temp = 19
// if (temp >= 30){
//     console.log("It's hot.")
// }
// else if(temp >= 20 && temp < 30){
//     console.log("It's warm.")
// }
// else{
//     console.log("It's cold.")
// }

// JavaScript switch Statement
// const readline=require("readline")
// const rl=readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("Kalkulator\nPilih menu:\n1. Tambah\n2. Kurang\n3. Perkalian\n4. Pembagian\nInput menu:",
// (menu) => {
//     switch(menu){
//         case "1":
//             console.log("Kamu memilih Tambah")
//             rl.question("Masukkan angka pertama: ", (angka1) => {
//                 rl.question("Masukkan angka kedua:", (angka2) => {
//                     angka1=Number(angka1)
//                     angka2=Number(angka2)

//                     var hasil =  angka1 + angka2

//                     console.log(`Hasil pertambahan ${angka1} dan ${angka2} adalah ${hasil}`)
//                     rl.close()
//                 })
//             })
//             break
        
//         case "2":
//             console.log("Kamu memilih Kurang")
//             rl.question("Masukkan angka pertama: ", (angka1) => {
//                 rl.question("Masukkan angka kedua:", (angka2) => {
//                     angka1=Number(angka1)
//                     angka2=Number(angka2)

//                     var hasil =  angka1 - angka2

//                     console.log(`Hasil pengurangan ${angka1} dan ${angka2} adalah ${hasil}`)
//                     rl.close()
//                 })
//             })
//             break

//         case "3":
//             console.log("Kamu memilih Perkalian")
//             rl.question("Masukkan angka pertama: ", (angka1) => {
//                 rl.question("Masukkan angka kedua:", (angka2) => {
//                     angka1=Number(angka1)
//                     angka2=Number(angka2)

//                     var hasil =  angka1 * angka2

//                     console.log(`Hasil perkalian ${angka1} dan ${angka2} adalah ${hasil}`)
//                     rl.close()
//                 })
//             })
//             break

//         case "4":
//             console.log("Kamu memilih Pembagian")
//             rl.question("Masukkan angka pertama: ", (angka1) => {
//                 rl.question("Masukkan angka kedua:", (angka2) => {
//                     angka1=Number(angka1)
//                     angka2=Number(angka2)

//                     var hasil =  angka1 / angka2

//                     console.log(`Hasil pembagian ${angka1} dan ${angka2} adalah ${hasil}`)
//                     rl.close()
//                 })
//             })
//             break

//         default:
//             console.log("Pilih yang ada di menu.")
//             rl.close()
//     }
// }   
// )


// JavaScript Looping Statement
// JavaScript for Statement
// for (let i=1;i<=3;i++){
//     console.log("Print i", i)
//     for(let k=3; k>0; k--){
//         console.log("Print k", k)
//     }
// }

// JavaScript while Statement
// let i = 1;
// while(i<=3){
//     console.log(i)
//     i++
// }

// JavaScript do while Statement
// let i = 1
// do{
//     console.log(i)
//     i++
// } while(i<=3)

// Ternary Operator or Conditional Operator
// let a = 10
// console.log(a === 5  ? "a is equal to 5" : "a is not equal to 5")



