/**
 * Menentukan bilangan ganjil dan genap
 *
 * Buatlah program untuk menentukan input bilangan apakah ganjil atau genap. Gunakan if-else dan function yang mengembalikan hasil "ganjil"/"genap"
 */

  function checkOddEven(inputNumber) {
    if (typeof inputNumber === "number") {
      if (inputNumber % 2 === 0) {
        return "genap";
      } else {
        return "ganjil";
      }
    } else {
      return "invalid input";
    }
  }
  console.log("SOAL NOMOR 1");
  console.log(checkOddEven(5)); // ganjil
  console.log(checkOddEven(2)); // genap
  console.log(checkOddEven("enam")); // invalid input
  console.log("    ");


/**
 * Menentukan usia dewasa
 *
 * Buat sebuah program yang meminta usia seseorang, lalu gunakan if-else untuk menampilkan apakah seseorang tersebut sudah dewasa (>=18 tahun) atau belum. Gunakan if-else dan function yang mengembalikan string
 */

    function checkMature(age) {
    if (typeof age === "number" && age >= 0) {
      if (age >= 18) {
        return "Dewasa";
      } else {
        return "Belum dewasa";
      }
    } else {
      return "invalid input";
    }
  } 
  console.log("SOAL NOMOR 2");
  console.log(checkMature(18)); // Dewasa
  console.log(checkMature(17)); // Belum dewasa
  console.log(checkMature("enam")); // invalid input
  console.log(checkMature(-1)); // invalid input
  console.log("    ");

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

  function scoreReport() {}
  function scoreReport(score) {
    if (typeof score === "number" && score >= 0 && score <= 100) {
      if (score >= 90) {
        return "A";
      } else if (score >= 80) {
        return "B";
      } else if (score >= 70) {
        return "C";
      } else if (score >= 60) {
        return "D";
      } else {
        return "E";
      }
    } else {
      return "invalid input";
    }
  }
  console.log("SOAL NOMOR 3");
  console.log(scoreReport(90)); // A
  console.log(scoreReport(89)); // B
  console.log(scoreReport(75)); // C
  console.log(scoreReport(59)); // E
  console.log(scoreReport(101)); // invalid input
  console.log(scoreReport(-1)); // invalid input
  console.log(scoreReport("sembilan puluh")); // invalid input
  console.log("    ");

/**
 * Menampilkan Bilangan Ganjil dari 1 sampai 20
 *
 * Buat program yang menampilkan semua bilangan ganjil dari 1 sampai 20 menggunakan for loop
 */
  console.log("SOAL NOMOR 4");
  function loopCheckOddEven() {}
  function loopCheckOddEven(inputNumber) {
    if (typeof inputNumber === "number") {
      for (let i = 1; i <= inputNumber; i++) {
        if (i % 2 === 0) {
          console.log(`${i} => Bilangan Genap`);
        } else {
          console.log(`${i} => Bilangan Ganjil`);
        }
      }
    } else {
      console.log("invalid input");
    }
  }

  loopCheckOddEven(5);
  // 1 => Bilangan Ganjil
  // 2 => Bilangan Genap
  // 3 => Bilangan Ganjil
  // 4 => Bilangan Genap
  // 5 => Bilangan Ganjil
  loopCheckOddEven("lima"); // invalid input

/**
 * Menghitung Total Jumlah Angka
 *
 * Buat program yang menjumlahkan semua angka dari 1 sampai dengan 100 menggunakan loop. Gunakan function yang mengirimkan value hasil penjumlahan tersebut
 */

    function totalValue(inputNumber) {
    if (typeof inputNumber === "number") {
      let totalNumber = 0;
      for (let index = 1; index <= inputNumber; index++) {
        totalNumber += index;
      }
      return totalNumber;
    } else {
      return "Invalid Input";
    }
  }
  console.log("    ");
  console.log("SOAL NOMOR 5");
  console.log(totalValue(100)); // 5050
  console.log(totalValue("empat")); // invalid input
  console.log("    ");

/**
 * Menghitung huruf vokal
 *
 * Buat program yang menerima sebuah string, lalu hitung berapa banyak huruf vokal (a, e, i, o, u) di dalam string tersebut. Gunakan function untuk mengembalikan value total jumlah huruf vocal
 */
    console.log("SOAL NOMOR 6");
    function countVowels(str) {
    if (typeof str === "string") {
      const vowels = "aeiouAEIOU";
      let count = 0;
      for (let char of str) {
        if (vowels.includes(char)) {
          count++;
        }
      }
      return count;
    } else {
      return "invalid input";
    }
  }
  console.log(countVowels("I Love JavaScript")); // 6
  console.log(countVowels("mie ayam")); //4 
  console.log("    ");

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
    if (typeof char === "string" && char.length === 1) {
      const vowels = "aeiouAEIOU";
      if (vowels.includes(char)) {
        return "Vokal";
      } else {
        return "Konsonan";
      }
    } else {
      return "invalid input";
    }
  }
  console.log("SOAL NOMOR 7");
  console.log(checkVowelConsonant("A")); // Output: "Vokal"
  console.log(checkVowelConsonant("b")); // Output: "Konsonan"
  console.log(checkVowelConsonant("a")); // Output: "Vokal"
  console.log("    ");

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
    if (typeof age === "number") {
      return age >= 18;
    } else {
      return "invalid input";
    }
  }
  console.log("SOAL NOMOR 8");
  console.log(canVote(20)); // true
  console.log(canVote(17)); // false
  console.log(canVote("dua puluh")); // invalid input
  console.log("    ");

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

  function getDayName(dayNumber) {
    if (dayNumber === 1) {
      return "Senin";
    } else if (dayNumber === 2) {
      return "Selasa";
    } else if (dayNumber === 3) {
      return "Rabu";
    } else if (dayNumber === 4) {
      return "Kamis";
    } else if (dayNumber === 5) {
      return "Jumat";
    } else if (dayNumber === 6) {
      return "Sabtu";
    } else if (dayNumber === 7) {
      return "Minggu";
    } else {
      return "Nomor hari tidak valid";
    }
  }
  console.log("SOAL NOMOR 9");
  console.log(getDayName(1)); // Output: "Senin"
  console.log(getDayName(5)); // Output: "Jumat"
  console.log(getDayName(8)); // Output: "Nomor hari tidak valid"
  console.log("    ");

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

  function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  console.log("SOAL NOMOR 10");
  console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
  console.log(reverseArray(["a", "b", "c"])); // Output: ['c', 'b', 'a']
  console.log("    ");

/**
 * Buat function untuk mengecek apakah input tersebut palindrome, return true jika palindrome, dan jika tidak palindrome maka return false
 *
 */

  const isPalindrome = (inputUser) => {
    const cleanedInput = inputUser.replace(/\s+/g, "").toLowerCase();
    const reversedInput = cleanedInput.split("").reverse().join("");
    return cleanedInput === reversedInput;
  };
  console.log("SOAL NOMOR 11");
  console.log(isPalindrome("kasur rusak")); // true
  console.log(isPalindrome("kodok")); // true
  console.log(isPalindrome("makan malam")); // false
  console.log("    ");
