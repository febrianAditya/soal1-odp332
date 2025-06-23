/**
 * Menentukan bilangan ganjil dan genap
 * 
 * Buatlah program untuk menentukan input bilangan apakah ganjil atau genap. Gunakan if-else dan function yang mengembalikan hasil "ganjil"/"genap"
 */

function checkOddEven(num) {
    if (typeof num !== "number") {
        return "invalid input"
    }else{
        return num % 2 === 0 ? "genap" : "ganjil"
    }
}


console.log(checkOddEven(5)); // ganjil
console.log(checkOddEven(2)); // genap
console.log(checkOddEven("enam"), "\n"); // invalid input



/**
 * Menentukan usia dewasa
 * 
 * Buat sebuah program yang meminta usia seseorang, lalu gunakan if-else untuk menampilkan apakah seseorang tersebut sudah dewasa (>=18 tahun) atau belum. Gunakan if-else dan function yang mengembalikan string
 */

function checkMature(age) {
    if (typeof age !== "number" || age < 0){
        return "invalid input"
    }else{
        return age >= 18 ? "Dewasa" : "Belum dewasa"
    }
}


console.log(checkMature(18)); // Dewasa
console.log(checkMature(17)); // Belum dewasa
console.log(checkMature("enam")); // invalid input
console.log(checkMature(-1), "\n"); // invalid input



/**
 * Menentukan score student
 * 
 * Buat program yang mengubah nilai angka ke dalam nilai huruf (A, B, C, D, E) berdasarkan rentang berikut:
 * 90 - 100: A
 * 80 - 89: B
 * 70 - 79: C
 * 60 - 69: D
 * < 60: E
 * Gunakan if-else dan function yang mengembalikan string
 */

function scoreReport(score) {
    if (typeof score !== "number" || score < 0 || score > 100){ 
        return "invalid input";
    }
    if (score >= 90){
        return "A"
    }
    else if (score >= 80) {
        return "B"
    }
    else if (score >= 70) {
        return "C"
    }
    else if (score >= 60) {
        return "D"
    }
    else {
        return "E"
    }
}


console.log(scoreReport(90)); // A
console.log(scoreReport(89)); // B
console.log(scoreReport(75)); // C
console.log(scoreReport(59)); // E
console.log(scoreReport(101)); // invalid input
console.log(scoreReport(-1)); // invalid input
console.log(scoreReport("sembilan puluh"), "\n"); // invalid input



/**
 * Menampilkan Bilangan Ganjil dari 1 sampai 20
 * 
 * Buat program yang menampilkan semua bilangan ganjil dari 1 sampai 20 menggunakan for loop
 */

function loopCheckOdd(num) {
    if (typeof num !== "number"){
     return console.log("invalid input")
    }
    for (let index = 1; index <= num; index++) {
        if (index % 2 !== 0) {
            console.log(index);
        }
    }
}


loopCheckOdd(20)
loopCheckOdd("lima") // invalid input
console.log("\n");





/**
 * Menghitung Total Jumlah Angka
 * 
 * Buat program yang menjumlahkan semua angka dari 1 sampai dengan 100 menggunakan loop. Gunakan function yang mengirimkan value hasil penjumlahan tersebut
 */
function totalValue(num) {
    if (typeof num !== "number" || num < 1){ 
        return "Invalid Input"
    }
    let total = 0;
    for (let index = 1; index <= num; index++) {
        total += index;
    }
    return total;
}


console.log(totalValue(100)); // 5050
console.log(totalValue("empat"), "\n"); // invalid input



/**
 * Menghitung huruf vokal
 * 
 * Buat program yang menerima sebuah string, lalu hitung berapa banyak huruf vokal (a, e, i, o, u) di dalam string tersebut. Gunakan function untuk mengembalikan value total jumlah huruf vocal
 */

function checkVowels(inputUser) {
    if (typeof inputUser === "string"){
        const vocal = "aeiouAEIOU";
        let count = 0;
        for (let char of inputUser) {
            if (vocal.includes(char)){
                count++;
            }
        }
        return count;
    }
    
}


console.log(checkVowels("I Love JavaScript")); // 6
console.log(checkVowels("mie ayam"), "\n"); //4



/**
 * Cek karakter vokal atau konsonan
 * 
 * Buatlah sebuah fungsi untuk memeriksa apakah sebuah karakter adalah vokal atau konsonan
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama checkVowelConsonant.
 * 2. Fungsi tersebut harus menerima satu parameter, contoh nama parameternya "char".
 * 3. Gunakan pernyataan if, else if, dan else untuk memeriksa apakah char adalah vokal atau konsonan.
 * 4. Anggap bahwa input selalu berupa SATU KARAKTER HURUF.
 * 5. RETURN string "Vokal" atau "Konsonan" sesuai dengan nilai char.
 */

function checkVowelConsonant(char) {
    const lowerChar = char.toLowerCase();
    if ("aeiou".includes(lowerChar)){
        return "Vokal";
    }else {
        return "Konsonan";
    }
}


console.log(checkVowelConsonant('A')); // Output: "Vokal"
console.log(checkVowelConsonant('b')); // Output: "Konsonan"
console.log(checkVowelConsonant('a'), "\n"); // Output: "Vokal"



/**
 * Menentukan kelayakan Voting
 * 
 * Buatlah sebuah fungsi JavaScript yang memeriksa apakah seseorang memenuhi syarat untuk memberikan suara dalam pemilihan berdasarkan usia.
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama canVote.
 * 2. Fungsi tersebut harus menerima satu parameter age.
 * 3. Gunakan pernyataan if dan else untuk memeriksa apakah age lebih besar atau sama dengan 18.
 * 4. RETURN tipe data BOOLEAN, true jika age >= 18, dan false jika tidak.
 */

function canVote(age) {
    if (typeof age === "number" && age >= 18) {
        return true;
    }else{
        return false;
    }
}



console.log(canVote(20)); // true
console.log(canVote(17), "\n"); // false




/**
 * Menentukan Hari dalam Seminggu
 * 
 * Buatlah sebuah fungsi JavaScript yang menerima angka dan mengembalikan nama hari dalam seminggu.
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama getDayName.
 * 2. Fungsi tersebut harus menerima satu parameter dayNumber (1 sampai 7).
 * 3. Gunakan pernyataan if, else if, dan else untuk mengembalikan nama hari dalam seminggu:
 *      a. 1: "Senin"
 *      b. 2: "Selasa"
 *      c. 3: "Rabu"
 *      d. 4: "Kamis"
 *      e. 5: "Jumat"
 *      f. 6: "Sabtu"
 *      g. 7: "Minggu"
 * 4. RETURN "Nomor hari tidak valid" jika dayNumber tidak berada dalam rentang 1 sampai 7.
 */

function getDayName(dayNum) {
    let days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
    if (typeof dayNum === "number" && dayNum > 0 && dayNum <= 7) {
        return days[dayNum - 1];
    }else{
    return "Nomor hari tidak valid"
    }
}


console.log(getDayName(1)); // Output: "Senin"
console.log(getDayName(5)); // Output: "Jumat"
console.log(getDayName(8), "\n"); // Output: "Nomor hari tidak valid"



/**
 * Membalikkan Array
 * 
 * Buatlah sebuah fungsi JavaScript yang membalikkan urutan elemen dalam sebuah array menggunakan loop.
 * 
 * Langkah: 
 * 1. Buat sebuah fungsi bernama reverseArray.
 * 2. Fungsi tersebut harus menerima satu parameter berupa array arr.
 * 3. Boleh menggunakan built in function, setelah itu dicoba mengunakan loop untuk membalikkan urutan elemen dalam array tersebut.
 * 4. RETURN array yang telah dibalik.
 */

//**Pakai Built-in function .slice() dan revers() */
// function reverseArray(arr) {
//   return arr.slice().reverse(); 
// }

function reverseArray(arr) {
  let reverseArr = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    reverseArr.push(arr[index]);
  }
  return reverseArr;
}


console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(['a', 'b', 'c']), "\n"); // Output: ['c', 'b', 'a']



/**
 * Buat function untuk mengecek apakah input tersebut palindrome, return true jika palindrome, dan jika tidak palindrome maka return false
 * 
 */

//Palindrome adalah kata, frasa, angka, atau urutan karakter lain yang terbaca sama baik dari depan maupun belakang

const isPalindrome = (inputUser) => {   
    let revSentence = ""
    let sentence  = inputUser.length - 1
    for(let index = sentence; index >= 0; index--){
        revSentence += inputUser[index]
    }
    if (inputUser === revSentence){
        return true
    }
    else{
        return false
    }
}

console.log(isPalindrome("kasur rusak")); // true
console.log(isPalindrome("kodok")); // true
console.log(isPalindrome("makan malam")); // false