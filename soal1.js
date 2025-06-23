// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = 0
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        // resultOne = numbers[i] + resultOne
        resultOne += numbers[i]
        //+= sama saja dengan menambahkan value resultOne terakhir(bentuk singkat dari comment line 6)
    }
}
console.log("Jawaban Soal No.1 ==> ", resultOne + "\n")


const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo = 0
for (let index = 0; index < numbersTwo.length; index++) {
    if (numbersTwo[index] % 2 !== 0) {
        resultTwo += numbersTwo[index];
    }
}
console.log("Jawaban Soal No.2 ==> ", resultTwo + "\n")

// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree = [];
for (let index = 0; index < students.length; index++) {
    resultThree.push(students[index].toUpperCase());
}
console.log("Jawaban Soal No.3 ==> ", resultThree + "\n")


// 4a. Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// 4b. Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];

let resultFourA = [];
for (let index = 0; index < people.length; index++) {
    if (people[index].age > 18) {
        resultFourA.push(people[index].name);
    }
}

let resultFourB = [];
for (let index = 0; index < people.length; index++) {
    if (people[index].name.length > 5) {
        resultFourB.push(people[index].name);
    }
}

console.log("Jawaban Soal No.4a ==> ", resultFourA + "\n")
console.log("Jawaban Soal No.4b ==> ", resultFourB + "\n")

let resultFourCombine = [];
for (let index = 0; index < people.length; index++) {
    let person = people[index];
    if (person.age > 18 && person.name.length > 5) {
        resultFourCombine.push(person.name);
    }
}

console.log("Jawaban Soal No.4 combine ==> ", resultFourCombine + "\n")


// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];
let resultFive = 0;
for (let index = 0; index < items.length; index++) {
    resultFive += items[index].price;
}
console.log("Jawaban Soal No.5 ==> ", resultFive + "\n")
  

//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];
let resultSix = [];

// console.log(numbersThree.includes(1)); // true
//Fungsi includes() mengecek apakah suatu nilai ada di dalam array

for (let index = 0; index < numbersThree.length; index++) {
    
    if (!resultSix.includes(numbersThree[index])) {
        resultSix.push(numbersThree[index])
        // console.log(`${index} tambah ke resultSix`)
    }else {
        // console.log(`${index} duplikat`)
    }
}

console.log("Jawaban Soal No.6 ==> ", resultSix + "\n")


// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];
let highestPrice = products[0];
for (let index = 0; index < products.length; index++) {
    if (products[index].price > highestPrice.price) {
        highestPrice = products[index]
        
    }
    
}
// console.log(highestPrice)
let resultSeven = highestPrice.name

console.log("Jawaban Soal No.7 ==> ", resultSeven + "\n")



// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
let resultEight = ""
for (let index = 0; index < words.length; index++) {
    resultEight += words[index]
    if (index < words.length - 1) {
        resultEight += " "
    }
}

console.log("Jawaban Soal No.8 ==> ", resultEight + "\n")


// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];
let resultNine = []
let index = 0
while (index < names.length && resultNine.length < 3) {
    if (names[index].toLowerCase().includes('a')) {
        resultNine.push(names[index]);
    }
    index++;
}
console.log("Jawaban Soal No.9 ==> ", resultNine + "\n")



// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter
let resultTen = 0;
for (let index = 0; index < namesTwo.length; index++) {
    resultTen += namesTwo[index].length;
}
console.log("Jawaban Soal No.10 ==> ", resultTen + " Karakter \n")


// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];
let resultEleven = [];
peopleTwo.forEach((person) => {
    if (person.age > 21) {
        resultEleven.push(`${person.name} (${person.age})`)
    }
})
console.log ("Jawaban Soal No.11 ==> ", resultEleven)
