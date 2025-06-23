// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = 0;
for (let index = 0; index < numbers.length; index++) {
    //const element = array[index];
    if (numbers[index] % 2 == 0){
        resultOne = resultOne + numbers[index];
    }
}
console.log(resultOne);


const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo = 0;
for (let index = 0; index < numbersTwo.length; index++) {
    //const element = array[index];
    if (numbers[index] % 2 != 0) {
        resultTwo = resultTwo + numbersTwo[index];
    }
}
console.log(resultTwo);


// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree = [];
for (let i = 0; i < students.length; i++) {
    let element = students[i];
    let nameElement = "";
    for (let j = 0; j < element.length; j++) {
        let letterElement = element[j];
        if (letterElement === letterElement.toLowerCase()) {
            nameElement = nameElement + letterElement.toUpperCase();
        } else {
            nameElement = nameElement + letterElement
        }
    }
    resultThree.push(nameElement);
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

function over18(peopleData) {
    let resultFour = [];
    for (let index = 0; index < peopleData.length; index++) {
        let person = peopleData[index];
        if (person.age > 18) {
            resultFour.push(person.name)
        }
    }
    return resultFour;
}
console.log(over18(people));

function fiveLetter(peopleData){
    let resultFour = [];
    for (let index = 0; index < peopleData.length; index++) {
        let person = peopleData[index];
        if (person.name.length > 5){
            resultFour.push(person.name)
        }
    }
    return resultFour;
}
console.log(fiveLetter(people));


// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];

function totalPrice(dataItems){
    let total = 0;
    for (let index = 0; index < dataItems.length; index++) {
        let eachItem = dataItems[index];
        total = total + eachItem.price;
    }
    return total;
}
console.log(totalPrice(items));


//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicate(dataNumbersThree) {
    let result = [];
    for (let i = 0; i < dataNumbersThree.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < result.length; j++) {
            if (dataNumbersThree[i] === result[j]){
                isDuplicate = true;

            }
        }
        if (!isDuplicate){
            result.push(dataNumbersThree[i])
        }
    }
    return result;
}
console.log(removeDuplicate(numbersThree));


// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];
function highestPrice(dataProducts) {
    let maxPrice = 0;
    let productName = "";
    for (let index = 0; index < dataProducts.length; index++) {
        if (dataProducts[index].price > maxPrice) {
            maxPrice = dataProducts[index].price;
            productName = dataProducts[index].name;
        }
    }
    return productName;
}
console.log(highestPrice(products));


// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
function makeStatement(dataWords) {
    return dataWords.join(' ');
}
console.log(makeStatement(words));

// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];
function containA(dataNames) {
    let result = [];
    for (let i = 0; i < dataNames.length; i++) {
        let eachName = dataNames[i];
        for (let j = 0; j < eachName.length; j++) {
            if (eachName[j] === 'a' || eachName[j] === 'A'){
                result.push(eachName);
                break;
            } 
        }
        if (result.length === 3){
            break;
        }
    }
    return result;
}
console.log(containA(names));


// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter
function countCharacters(dataNames) {
    let total = 0;
    for (let index = 0; index < dataNames.length; index++) {
        total = total + dataNames[index].length;
    }
    return total;
}
console.log(countCharacters(namesTwo), "karakter");


// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];
function objectToString(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index].age > 21){
            result.push(`${array[index].name} (${array[index].age})`)
        }
    }
    return result;
}
console.log(objectToString(peopleTwo));
