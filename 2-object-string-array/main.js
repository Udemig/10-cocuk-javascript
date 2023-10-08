// //! Object (nesne)
// // Özillikler ve Methodlar bir veri yapısıdırç
// // Anahtar - Değer çiftleriyle şeklinde verileri saklar
// // Verileri düzenli bir şekilde organize etmek için kullanılır

// var araba = {
//   renk: 'Kırmızı',
//   marka: 'Nissan',
//   maxHiz: 400,
//   kazaliMi: false,
//   calistir: function () {
//     document.write('Araba çalışıyor...');
//   },
// };

// // objenin özelliklerine erişme
// document.write(araba.renk + '<br>');
// document.write(araba.marka + '<br>');
// document.write(araba.maxHiz + '<br>');

// // objenin methodlarına erişme
// araba.calistir();

// //! Görev
// //*  En az 5 değere sahip bir obje oluşturun
// //*  En az 1 method | true/false | string | number değeri olsun

// //! String
// // metin ifadeleri
// var text = "Selam nasılsın'ben iyiyim";
// var text2 = 'Selam nasılsın ${derece} iyiyim';
// var derece = 40;

// //* backtick (template literals)
// //* birden çok satıda smetin yazabiliyoruz
// //* metnin içerisine ${} saysenide değişken veya fonksiyon yazabiliriz
// // altgr + , > kısa yol

// var uzun_metin = `
// <br>
//  Bugün hava çok sıcak <br>
//  - Geçekten bunaldım ben &#9925; <br>
//  - Hava ${derece} derece olmuş <br>
// `;

// document.write(uzun_metin);

// //! String Methodları
// var metin = "Merhaba benim adım 'Furkan' nasılsın ?";

// document.write(metin + '<br>');

// // length > kaç harf
// document.write('uzunluk: ' + metin.length + '<br>');

// //* indexOf > bir kelime veya harfin kaçıncı sırada olduğu bulur
// document.write('sıra: ' + metin.indexOf('adım') + '<br>');

// //* search > bir kelime veya harfin kaçıncı sırada olduğu bulur
// document.write('sıra: ' + metin.search('benim') + '<br>');

// //* slice > belirli bir kısmını kesme
// document.write('kesme: ' + metin.slice(14, 27) + '<br>');

// //* replace > bir kelimeyi çıkarıp yenisni koymamyay yarar
// document.write(
//   'değişim: ' + metin.replace('Furkan', 'Bora') + '<br>'
// );

// //* toUpperCase > bütün harfleri büyük yapar
// document.write('değişim: ' + metin.toUpperCase() + '<br>');

// //* toLowerCase > bütün harfleri küçük yapar
// document.write('değişim: ' + metin.toLowerCase() + '<br>');

// //* concat > iki metni birleştirmeye yarar
// document.write(
//   'birleşim: ' + metin.concat('<br> -İyiyim sen nasılsın') + '<br>'
// );

// //! Number (Sayı) Methodları
// var sayi = 10.4294323543;
// var sayi2 = 10;
// var strSayi = '40';

// // toString(): sayıyı stringe çevirme
// document.write(typeof sayi.toString() + '<br>');

// // parseInt(): stringi sayıya çevirme
// document.write(parseInt(strSayi) + parseInt(strSayi) + '<br>');

// // toFixed(): . dan sora basamak sayısı belirler
// // document.write(sayi.toFixed(2) + '<br>');

//!js math objesi
// bazı yararlı değişken ve fonksiyonlara sahip bir obje
document.write('Pİ SAYISI: ' + Math.PI + '<br>');
document.write('E SAYISI: ' + Math.E + '<br>');

// math.round > sayıyı yuvarlar
document.write('yuvarlama: ' + Math.round(42.62426543654) + '<br>');

// math.ceil > sayıyı yukarıya yuvarlar
document.write('yuvarlama: ' + Math.ceil(13.2) + '<br>');

// math.floor > sayıyı aşşaıya yuvarlar
document.write('yuvarlama: ' + Math.floor(13.9) + '<br>');

// math.random > 0 ile 1  arasında rastgele sayı üretir
document.write(
  'rastgele: ' + Math.round(Math.random() * 90 + 10) + '<br>'
);

// math.max() > verdiğimi sayılar arasına en büyüğünü bulmaya yarar
document.write('en büyük: ' + Math.max(10, 39, 94, 34, 12) + '<br>');

// math.min() > verdiğimi sayılar arasına en büyüğünü bulmaya yarar
document.write('en küçük: ' + Math.min(10, 39, 94, 34, 12) + '<br>');
