//       CHETELGA SAYOHAT
// alisherMablagi = +prompt("Alisher, o'zingizda necha pul bor ekanligini so'mda kiriting:");
// let samolyotBileti = 500 * 11000.34; // AQSH dollariga o'tkazish
// let mehmonxonaTolov  = 250 * 11000.34;  // AQSH dollariga o'tkazish
// let muzeyVaJoylar = 120 * 12354.03; // Yevrodan so'mga o'tkazish

// var umumiyXarajatlar = samolyotBileti + mehmonxonaTolov + muzeyVaJoylar;
// var yetarlichaMablag = alisherMablagi - umumiyXarajatlar;

// if (yetarlichaMablag >= 0) {
//     console.log("Oq yo'l, Alisher!");
// } else {
//     console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
// }
//      KECHIKKAN POYEZD
// Roboyning poyezdi soat t vaqtda ketishi kerak edi, ammo u T soatga kechikdi. Uni poyezdi nechada ketishini topuvchi dastur tuzing.
// let time = +prompt("Ketish vaqtini kiriting: ");
// let delay = +prompt("Kechikishni soatlarda kiriting: ");
// let haqiqiyVaqt = time + delay;
// console.log(haqiqiyVaqt);

//  1 -MASALA 
//    4 xonali sonning juft raqamlari sonini topvchi algoritm yozing?
// let num = 6425;
// let counter = 0;
// let birinchiRaqam = num % 10;
// let ikkinchiRaqam = Math.floor((num % 100) / 100);
// let uchinchiRaqam = Math.floor((num % 1000) / 100);
// let tortinchiRaqam = Math.floor(num / 1000);

// if (birinchiRaqam % 2 === 0) {
//     counter++;
// }
// if (ikkinchiRaqam % 2 === 0) {
//     counter++;
// }
// if (uchinchiRaqam % 2 === 0) {
//     counter++;
// }
// if (tortinchiRaqam % 2 === 0) {
//     counter++;
// }
// console.log(counter);

//   2 - MASALA
//Agar berilgan 3 xonali son sonning raqamlari yigʻindisi juft hamda 5 ga karrali bolsa true aks holda false qiymat qaytaruvchi algoritm yozing
// let son = 545;
// let birlik = son % 10;
// let unlik = Math.floor((son / 10) % 10);
// let yuzlik = Math.floor((son / 100) % 10);

// let yigindi = birlik + unlik + yuzlik;

// let Juft = yigindi % 2 === 0;
// let BeshgaBolinadi = yigindi % 5 === 0;
// let result = false;

// if (Juft && BeshgaBolinadi) {
// result = true;
// } 
// console.log(result);
//   3 - MASALA
// 3 ta son berilgan. Ular orasidan o'rtachasini topuvchi algoritm yozing?

// let num1 = 5;
// let num2 = 9;
// let num3 = 15;
// let sum = (num1 + num2 + num3) / 3;
// console.log(sum);
//   4 - MASALA
//  Foydalanuvchi kopi bilan 4xonali son kirita oladi (1xonali 2xonali yoki 3 xonali bolishi ham mumkin).Ushbu kiritgan sonning palindrom emasligini tekshiruvchi algoritm yozing.

let number = 12321; 
let originalNumber = number; 
let reversedNumber = 0; 

let temp = number; 
while (temp > 0) {
    let remainder = temp % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    temp = Math.floor(temp / 10);
}

if (originalNumber === reversedNumber) {
    console.log("Bu son palindrom son");
} else {
    console.log("Bu son palindrom emas");
}


