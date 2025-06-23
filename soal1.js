// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        resultOne += numbers[i];
    }
}
console.log(resultOne);


const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo = 0

for (let i = 0; i < numbersTwo.length; i++) {
    if (numbersTwo[i] % 2 !== 0) {
        resultTwo += numbersTwo[i];
    }
}
console.log(resultTwo);


// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree = []

for (let i = 0; i < students.length; i++) {
    resultThree.push(students[i].toUpperCase());
}
console.log(resultThree);


// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];
const resultFour = [];

for (let i = 0; i < people.length; i++) {
    if (people[i].age > 18 && people[i].name.length > 5) {
        resultFour.push(people[i].name);
    }
}
console.log(resultFour);


// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];
let totalPrice = 0;
for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
}
console.log(totalPrice);


//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [];
for (let i = 0; i < numbersThree.length; i++) {
    if (!uniqueNumbers.includes(numbersThree[i])) {
        uniqueNumbers.push(numbersThree[i]);
    }
}
console.log(uniqueNumbers);

// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];
let highestPrice = 0;
let highestProduct = '';
for (let i = 0; i < products.length; i++) {
    if (products[i].price > highestPrice) {
        highestPrice = products[i].price;
        highestProduct = products[i].name;
    }
}
console.log(highestProduct);


// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
let sentence = '';
for (let i = 0; i < words.length; i++) {
    sentence += words[i] + ' ';
}
console.log(sentence);


// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];
const filteredNames = [];
for (let i = 0; i < names.length; i++) {
    if (names[i].includes('a') && filteredNames.length < 3) {
        filteredNames.push(names[i]);
    }
}
console.log(filteredNames);


// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter
let totalCharacters = 0;
for (let i = 0; i < namesTwo.length; i++) {
    totalCharacters += namesTwo[i].length;
}
console.log(totalCharacters);


// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];
const resultFive = [];
for (let i = 0; i < peopleTwo.length; i++) {
    if (peopleTwo[i].age > 21) {
        resultFive.push(`${peopleTwo[i].name} (${peopleTwo[i].age})`);
    }
}
console.log(resultFive);

