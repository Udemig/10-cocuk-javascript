// ! Diziler
// Birden çok eş görevli elemanı bir adada tutmak için kullanılır.

// var meyveler = ['Elma', 'Armut', 'Muz', 'Karpuz'];

// var sayilar = [10, 123, 34, 576, 765, 654];

// var liderlikTablosu = [
//   {
//     name: 'xAhmetx',
//     point: 9000,
//   },
//   {
//     name: 'Mehmetxyx',
//     point: 12521,
//   },
//   {
//     name: 'AliKayay',
//     point: 7823,
//   },
// ];

// // diziye erişme
// document.write('<b>Meyveler</b>: ', meyveler + '<br>');

// // dizideki eleman sayısına erişme
// document.write('<b>Eleman Sayısı</b>: ' + meyveler.length + '<br>');

// // belirli elemana erişme
// document.write('<b>2 sıradaki</b>: ' + meyveler[2] + '<br>');

// //! Dizi Methodları
// //* dizinin sonuna eleman ekler
// meyveler.push('Kivi');

// document.write('<b>Meyveler</b>: ', meyveler + '<br>');

// //* dizinin başına eleman ekler
// meyveler.unshift('Kiraz');

// document.write('<b>Meyveler</b>: ', meyveler + '<br>');

// //* dizinin sonundaki elemanı çıkarma
// meyveler.pop();

// document.write('<b>Meyveler</b>: ', meyveler + '<br>');

// //* dizinin başındaki elemanı çıkarma
// meyveler.shift();

// document.write('<b>Meyveler</b>: ', meyveler + '<br>');

// meyveler.push('Kivi');
// meyveler.push('Kavun');
// meyveler.push('Kiraz');

// document.write('<b>Meyveler</b>: ', meyveler + '<br>');

// //* slice > diziyi keser ve yeni dizi döndürür
// var yeniMeyveler = meyveler.slice(1, 5);

// document.write('<b>yeniMeyveler</b>: ', yeniMeyveler + '<br>');
// document.write('<b>meyveler</b>: ', meyveler + '<br>');

// // diziyi dönen methodları
// document.write('<b>sayılar</b>: ', sayilar + '<br>');

// //! map > diziyi dönüp yeni bir dizi oluşturur
// var yeniSayilar = sayilar.map(yeniDeger);

// function yeniDeger(eleman) {
//   return eleman * 2;
// }

// document.write('<b>yeniSayilar</b>: ', yeniSayilar + '<br>');

// //! forEach (her biri için) > her eleman için fonk çalıştırır
// // fonksiyona parametre oalrak elemanı gönderir
// sayilar.forEach(ekranaYaz);

// function ekranaYaz(sayi) {
//   document.write('<b>Sayı bulundu: </b>' + sayi + '<br>');
// }
// document.write('<b>yeniSayilar</b>: ', yeniSayilar + '<br>');

// //! filter
// //* diziyi filtrelemeyey yarar
// //* dizideki her bir eleman için fonk. çalıştırır
// //* fonk. elemanın yeni diziye geçip geçmeyecieğine karar verir

// var filtrelenmis = yeniSayilar.filter(gecsinMi);

// function gecsinMi(sayi) {
//   return sayi > 300;
// }

// document.write('<b>filtrelenmis</b>: ', filtrelenmis + '<br>');

// //! find
// //* dizideki elemanın bir değeri aracılığı ile
// //* diğer bütün değerlerine erişmeye yarar
// console.table(liderlikTablosu);

// var bulunan = liderlikTablosu.find(function (user) {
//   return user.name === 'Mehmetxyx';
// });

// console.log(bulunan);

//! DATE Object
// tarihe erişebiliyoruz

setInterval(function () {
  //   const tarih = new Date();
  //   document.write('<b>tarih</b>: ', tarih + '<br>');
  location.reload();
}, 1000);

const tarih = new Date();

document.write('<b>getFullYear</b>: ', tarih.getFullYear() + '<br>');
document.write('<b>getMonth</b>: ', tarih.getMonth() + 1 + '<br>');
document.write('<b>getDate</b>: ', tarih.getDate() + '<br>');
document.write('<b>getHours</b>: ', tarih.getHours() + '<br>');
document.write('<b>getMinutes</b>: ', tarih.getMinutes() + '<br>');
document.write('<b>getSeconds</b>: ', tarih.getSeconds() + '<br>');
document.write(
  '<b>getMilliseconds</b>: ',
  tarih.getMilliseconds() + '<br>'
);

// farklı formata çevirir
document.write(
  '<b>toLocaleTimeString</b>: ',
  tarih.toLocaleTimeString() + '<br>'
);

document.write(
  '<b>toLocaleDateString</b>: ',
  tarih.toLocaleDateString() + '<br>'
);

document.write(
  '<b>toDateString</b>: ',
  tarih.toDateString() + '<br>'
);

// bütün get modthodlarıyla aynı isimde
// set methodları vardır
// tarihi güncellmeyey yarar
tarih.setFullYear(2077);

document.write('<b>tarih</b>: ', tarih + '<br>');

//! switch - case
//bir değişkenin farklı değerlerine göre işlem yapmaya yarar

var havaDurmu = 'güneşli';

switch (havaDurmu) {
  case 'bulutlu':
    document.write('<b>Bugün hava bultulu:&#9925; </b>');
    break;
  case 'güneşli':
    document.write('<b>Bugün hava güneşli:  &#127774;</b>');
    break;
  case 'karlı':
    document.write('<b>Bugün hava karlı: &#10052;</b>');
    break;
  //  varsayılan durum
  //  yukarıdakilerden hiçbiri devreye girmezse çalışır
  default:
    document.write('<b>Hava verisi alınamadı</b>');
}
