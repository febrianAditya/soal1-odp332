// Jumlahkan semua angka genap dalam array berikut
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let resultOne
    console.log("SOAL NOMOR 1");
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let resultOne = 0;

    numbers.forEach(num => {
    if (num % 2 === 0) {
        resultOne += num;
    }
    });

    console.log("Total jumlah angka genap:", resultOne);
    console.log("    ");


    console.log("SOAL NOMOR 2");
    const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
    //Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
    let resultTwo = 0;
    numbersTwo.forEach(num => {
    if (num % 2 !== 0) {
        resultTwo += num;
    }
    });
    console.log("Total jumlah angka ganjil:", resultTwo);
    console.log(resultOne); // 20
    console.log(resultTwo); // 16
    console.log("    ");

// Ubah semua huruf kecil dalam array menjadi huruf besar
    console.log("SOAL NOMOR 3")       
    let students = ["Tito", "arY", "Bostang"]
    let resultThree = students.map(student => student.toUpperCase());
    console.log("Hasil perubahan huruf kecil ke besar:", resultThree);
    console.log("    ");


// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
    console.log("SOAL NOMOR 4");

    const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
    ];


    let age18plus = [];
    for (const person of people) {
    if (person.age > 18) {
        age18plus.push(person.name);
    }
    }
    console.log("Orang-orang yang umurnya di atas 18 adalah:", age18plus);


    let name5plus = [];
    for (const person of people) {
    if (person.name.length > 5) {
        name5plus.push(person.name);
    }
    }
    console.log("Orang-orang yang panjang namanya lebih dari 5 karakter adalah:", name5plus);
    console.log("    ");



//  Hitung total harga semua barang
    console.log("SOAL NOMOR 5");    
    const items = [
        { name: 'Book', price: 10000 },
        { name: 'Pen', price: 5000 },
        { name: 'Pencil', price: 3000 },
    ];

        let resultFive = 0;

    for (let index = 0; index < items.length; index++) {
    resultFive += items[index].price;
    }

    console.log("Total harga semua barang:", resultFive);
    console.log("    ");

//Ambil hanya angka unik dari array (hapus duplikat).
    console.log("SOAL NOMOR 6");

    const numbersThree = [1, 2, 2, 3, 4, 4, 5, 1];
    let resultSix = [];
    let tempArr = [];

    for (let i = 0; i < numbersThree.length; i++) {
        if (!tempArr.includes(numbersThree[i])) {
            tempArr.push(numbersThree[i]);
            resultSix.push(numbersThree[i]);
        }
    }

    console.log("Angka unik:", resultSix);
    console.log("    ");



// Ambil nama produk dengan harga tertinggi
    console.log("SOAL NOMOR 7");
    const products = [
        { name: 'Laptop', price: 15000000 },
        { name: 'Phone', price: 8000000 },
        { name: 'Monitor', price: 3000000 },
    ];
    let highestPrice = 0;
    let productName = '';
    for (const product of products) {   
        if (product.price > highestPrice) {
            highestPrice = product.price;
            productName = product.name;
        }
    }
    console.log("Produk dengan harga tertinggi:", productName, "(", highestPrice, ")");
    console.log("    ");



// Buat kalimat dari array kata-kata
    console.log("SOAL NOMOR 8");
    const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
    let sentence = '';
    for (let i = 0; i < words.length; i++) {
        sentence += words[i] + ' ';
    }
    console.log("Kalimat yang terbentuk:", sentence.trim());
    console.log("    ");

// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
    console.log("SOAL NOMOR 9");
    const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];
    let filteredNames = names.filter(name => name.includes('a')).slice(0, 3);
    console.log("3 nama yang mengandung 'a':", filteredNames);
    console.log("    ");


// Hitung total karakter dari semua nama dalam array.
    console.log("SOAL NOMOR 10");
    const namesTwo = ['Ani', 'Budi', 'Citra'];
    let resultTen = ""; 
    for (let i = 0; i < namesTwo.length; i++) {
    resultTen += namesTwo[i];
    }

    let lenTen = resultTen.length;

    console.log("Jumlah karakter dari", resultTen, "adalah", lenTen);
    console.log("    ");


// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
    console.log("SOAL NOMOR 11");

    const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
    ];


    let resultEleven = [];
    for (const person of peopleTwo) {
        if (person.age > 21) {
            resultEleven.push(`${person.name} (${person.age})`);
        }
    }
    console.log("Data setelah diubah:", resultEleven);
    console.log("    ");
    
