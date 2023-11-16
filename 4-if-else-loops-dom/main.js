// //! Koşullar
// /*
//  * Belirli bir şartın doğru veya yanlış olduğunu kontorl
//  * etmek ve kodun belirli birşsekild çalışmasını sağlamak
//  * için kullanılan kontrol meknaizması
//  ? if else
// */
// var Kerem = {
//   yas: 17,
//   tip: 'Admin',
// };
// var Bora = {
//   yas: 20,
//   tip: 'Kullanıcı',
// };

// // if içerisine ( > kontrol etmek istediğimiz koşulu yazıyoruz )
// if (Bora.yas > Kerem.yas) {
//   // koşul gerçekleşirse çalışacak kodlar
//   document.write('Boranın Yaşı Daha <b>Büyüktür</b> <br>');
// }

// // büyük eşittir
// if (Bora.yas >= 18) {
//   document.write('Bu kişi ehliyet <b>alabilir</b> <br>');
// }

// // 3 eşitttir
// if (Kerem.tip === 'Admin') {
//   document.write('Bu kullanıcı admin paeline <b>erişebilir</b> <br>');
// }

// // eşit değildir
// if (Bora.tip !== 'Admin') {
//   document.write('Bu kullanıcı panele <b>erişemez</b> <br>');
// }

// // birden fazla koşul belirleme
// // && (ve) operorü belirlen bütün koşulların gerçeklemeşini bekler
// if (Kerem.yas >= 18 && Kerem.tip == 'Admin') {
//   document.write('Admin panelinde tam yetkiye sahiptir');
// }

// // || (veya) koşullardan bir tanesi yeterli
// if (Kerem.yas >= 18 || Bora.yas >= 18) {
//   document.write('Sinemaya girebilirsiniz.. <br>');
// }

// var yolcuSayisi = 29;
// var aracKapasite = 24;

// //! else koşulun gerçekleşmediği durumda çalışır.
// if (yolcuSayisi < aracKapasite) {
//   document.write('<b>1</b> araç yeterlidir... <br>');
// } else {
//   document.write('<b>1</b> araçtan fazlası gerekiyor... <br>');
// }

// // birden faszla koşulu zincirleme
// if (yolcuSayisi < aracKapasite) {
//   document.write('<b>1</b> araç yeterlidir... <br>');
// } else if (yolcuSayisi < aracKapasite * 2) {
//   document.write('<b>2</b> araç yeterlidir... <br>');
// } else {
//   document.write('<b>2</b>den fazla  araç daha grekiyor... <br>');
// }

// //! == ve === farkı

// // == sadece değer kontrolu yapar
// // === hem değer hem tip kontrolu yapar

// // != SADECE DEĞER EŞİT DEĞİL Mİ
// // !== GEM DEĞER EŞİT DEĞİL Mİ HEMDE TİP

// if (18 == '18') {
//   document.write('Değerler eşittir <br>');
// }

// if (18 === '18') {
//   document.write('Değerlee ve tipler eşittir <br>');
// }

// // Döngüler

// // Tekrar eden işlemlerde kullanılır.
// function sepeteEkle(i) {
//   document.write(i + ' kez Ürün Sepete eklendi ✅ <br>');
// }

// //! For Döngüsü
// for (var i = 0; i < 5; i++) {
//   // sayaç her arttığınd çalışan kod
//   sepeteEkle(i);

//   console.log('selam');
// }

// //! While Döngüsü
// var sayac = 0;
// var sayac2 = 0;

// // 1. yazım sitli
// while (sayac < 10) {
//   document.write(sayac + 'Sayaç Arttı <br>');
//   sayac++;
// }

// // 2.yazım stili
// do {
//   document.write(sayac2 + 'Sayaç Arttı <br>');
//   sayac2++;
// } while (sayac2 < 5);

// //! Hata Ayıklama
// // try kısmında hata çıkma olasılığı olan
// // kodu yazarız. catch hatayı yakalar ve
// // hata  olduğunda ne yapılması gerektiği belirlers

// try {
//   // bu kodu çalıştırmayı dener
//   var z = 10 + y;

//   document.write(z);
// } catch (err) {
//   // hata olursa burası çalışır
//   document.write('üzgünz birr hata oluştu');
// } finally {
//   document.write('hata olsa da olmasa da çalışır');
// }
// //
// //! DOM (Document Object Model)
// Html Dökümanıumızın obje modeli
// web sayfarlındaki içeriği jasvascript tarafından değiştirelibyoruz
// bir html elemanını değiştirmek istiyorsak
// o elemanı jasvascripte çağırmamaız

// elemanı js ye çağırma
var baslik = document.getElementById('baslik');

// yazı içeriğini değiştirme
baslik.innerText = 'Js tarafından dinamikleştirildi';

// stillerini değiştirme
baslik.style.background = 'red';
baslik.style.color = 'white';
baslik.style.padding = '10px';
baslik.style.borderRadius = '10px';

// class değişimi
var parag = document.getElementById('parag');

// add / remove / toggle

// varolan klassı kaldırma
parag.classList.remove('blue');

// yeni class ekleme
parag.classList.add('green');

// toggle > varsa çıkartır yoksa ekler
parag.classList.toggle('green');
parag.classList.toggle('green');

// yeni örnek

var button = document.getElementById('btn');
var input = document.getElementById('inp');

// kullanıcın gerçekleşitr,dği olaylara event diyoruz
// addEventListener methdu ile html etiketleri üzerinde
// gereçekleşen olayları izleyeibliyoruz
//todo bunu öğren
