// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = 0;
for (let index = 0; index < numbers.length; index++) {
  //ngecek one by one pake looping
  let x = numbers[index]; //number = nama deklarasinya, [index] = isi array-nya

  if (x % 2 === 0) {
    resultOne = x + resultOne;
  }
}
console.log(resultOne);

const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo = 0;
for (let index = 0; index < numbers.length; index++) {
  let x = numbers[index];

  if (x % 2 === 1) {
    resultTwo = x + resultTwo;
  }
}
console.log(resultTwo);

// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"];
let resultThree = [];

for (let index = 0; index < students.length; index++) {
  const element = students[index];
  const upperCaseElement = element.toUpperCase();

  resultThree.push(upperCaseElement);
}
console.log(resultThree);

// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
  { name: "Andi", age: 17 },
  { name: "Tito Alexsta", age: 20 },
  { name: "Bostang", age: 22 },
  { name: "Cici", age: 17 },
];
for (let index = 0; index < people.length; index++) {
  const elAge = people[index].age;
  const elName = people[index].name;

  if (elAge > 18 && elName.length > 5) {
    console.log(elAge && elName);
  }
}

// Hitung total harga semua barang
const items = [
  { name: "Book", price: 10000 },
  { name: "Pen", price: 5000 },
  { name: "Pencil", price: 3000 },
];
let totalPrice = 0;
for (let index = 0; index < items.length; index++) {
  const element = items[index].price;
  totalPrice = element + totalPrice;
}
console.log(totalPrice);

//Ambil hanya angka unik dari array (hapus duplikat).
let uniqueNumber = []; // 1, 2, 3,
const numbersThree = [1, 2, 2, 3, 4, 4, 5];
for (let index = 0; index < numbersThree.length; index++) {
  const element = numbersThree[index];

  if (uniqueNumber.includes(element) === false) {
    uniqueNumber.push(element);
  }
}
console.log(uniqueNumber);

// Ambil nama produk dengan harga tertinggi
let highProduct = {};
const products = [
  { name: "Laptop", price: 15000000 },
  { name: "Phone", price: 8000000 },
  { name: "Monitor", price: 3000000 },
];
for (let index = 0; index < products.length; index++) {
  const element = products[index];
  const price = element.price;
  if (index === 0 || price > highProduct.price) {
    highProduct = element;
  }
}
console.log(highProduct.name);

// Buat kalimat dari array kata.
const words = ["Belajar", "array", "itu", "menyenangkan"];

console.log(words.join(" "));

// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const resultLetterA = [];
const names = ["Aldo", "Budi", "Caca", "Dinda", "Eka", "Fajar"];
for (let index = 0; index < names.length; index++) {
  const element = names[index];
  const lowerCaseNames = names[index].toLowerCase();

  if (lowerCaseNames.includes("a") && resultLetterA.length < 3) {
    resultLetterA.push(element);
  }
}
console.log(resultLetterA);

// Hitung total karakter dari semua nama dalam array.
let totalChar = 0;
const namesTwo = ["Ani", "Budi", "Citra"]; // 12 karakter
for (let index = 0; index < namesTwo.length; index++) {
  const element = namesTwo[index];
  totalChar = element.length + totalChar;
}
console.log(totalChar);

// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
  { name: "Tono", age: 22 },
  { name: "Tini", age: 19 },
  { name: "Tara", age: 25 },
];

let arrayString = [];
for (let index = 0; index < peopleTwo.length; index++) {
  const elAge = peopleTwo[index].age;
  const elName = peopleTwo[index].name;

  if (elAge > 21) {
    arrayString.push(`${elName}, (${elAge})`);
  }
}
console.log(arrayString);
