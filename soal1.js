// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne=0
for(let index=0;index<numbers.length;index++){
    number=numbers[index]
    resultOne=resultOne+number
}
console.log(resultOne, " => Soal 1 Line 8");

const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo=0
for(let index=0;index<numbers.length;index++){
    if (index%2==0){
        continue
    }
    else{
        number=numbers[index]
        resultTwo=resultTwo+number
    }
}
console.log(resultTwo, " => Soal 2 Line 22");

// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree=[]
students.forEach((elem)=>{
    resultThree.push(elem.toLowerCase())
})
console.log(resultThree," =>Soal 3 line 30")

// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];
let index =0
let resultFour =[]
people.forEach((elem)=>{
    if(elem.age>=18 && elem.name.length>5){
        resultFour.push(elem.name)
    }
})
console.log(resultFour, " => Soal 4 Line 47")

// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];
let resultFive=0
items.forEach((elem)=>{
    resultFive=resultFive+elem.price
    })
console.log(resultFive, " => Soal 5 Line 59") 

//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];
let resultSix=[]
let checkerNums =0
numbersThree.forEach((elem)=>{
    if(elem!=checkerNums){
        resultSix.push(elem)
    }
    checkerNums=elem
})
console.log(resultSix, " => Soal 6 Line 71");

// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];
let resultSeven =""
let checkerPrice =0
products.forEach((elem)=>{
    if(elem.price>checkerPrice){
        resultSeven=elem.name
    }
    checkerPrice=elem.price
})
console.log(resultSeven, " => Soal 7 Line 87");

// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
let resultEight = ''
words.forEach((elem)=>{
    resultEight=resultEight+elem+" "
})
console.log(resultEight, " => Soal 8 Line 95");

// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];
let resultNine=[]
let iteration=1
names.forEach((elem)=>{
    if(iteration<4){
        if(elem.includes('a')||elem.includes('A')){
            resultNine.push(elem)
            iteration++
        }
    }
})
console.log(resultNine, " => Soal 9 Line 109");


// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter
let resultTen=0
namesTwo.forEach((elem)=>{
    resultTen=resultTen+elem.length
})
console.log(resultTen, " => Soal 10 Line 118");

// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];
let resultEleven = []
peopleTwo.forEach((elem)=>{
    if(elem.age>=21){
        resultEleven.push(elem.name + " (" +elem.age+ ")")
    }
})
console.log(resultEleven, " => Soal 11 Line 134");

