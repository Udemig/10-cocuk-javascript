// ekran yazdırma
document.write('Merhaba Dünya!' + '<br>');

// Değişkenler
// Veri veya değer saklamak için kullanılan depolama alanlarıdır
var isim = 'Bora';
document.write(isim + '<br>');

//! isimlendirme kuralları
// Genelde küçük harfle başlanır
// Türkçe ve özel karakter içerermez
// birden falza kelime olucaksa ikininci
// kelime büyük yazılır veya ralarına _ konur
var kullanici_adi = 'Ahmetx';
var kullaniciAdi = 'Mehmet';

//! Javascript veri türleri
//1- number > sayılar
var sayi = 985;

//2- string > metinler > tırnak içinde kullanılır
var metin = 'Mehaba Dünya';

//3- boolean > doğru yanlış > true - false
var yetiskin_mi = true;
var ehliyet_varmi = false;

//4- objeler
//5- diziler
//6- function

//! Number Detaylar
//* > Operatörler (+ - / % *)
var sayi1 = 20;
var sayi2 = 5;

// Toplama
var toplam = sayi1 + sayi2;
document.write('Toplam_Değer:' + toplam + '<br>');

// Çıkarma
var cikan = 30 - 19;
document.write('Çıkan Sonuç:' + cikan + '<br>');

// Çarpma
var carpim = 9 * 19;
document.write('Çarpım Sonuç: ' + carpim + '<br>');

// Bölme
var bolum = 900 / 15;
document.write('Bölüm Sonuç: ' + bolum + '<br>');

// Mod (Bölümden Kalan)
var kalan = 789 % 65;
document.write('Kalan Sonuç: ' + kalan + '<br>');

// Değikenin değerini değiştirme
var sayi3 = 90;

document.write('Sayi3 Değişkeni: ' + sayi3 + '<br>');

sayi3 = 50;

document.write('Sayi3 Değişkeni: ' + sayi3 + '<br>');

//! Atama Operörler
// bir değişkenin değerini doğrudan değiştiren operatörler
var adet = 10;
document.write('adet değeri: ' + adet + '<br>');

// değeri 1 arttırır
adet++;
document.write('adet değeri: ' + adet + '<br>');

// değeri 1 azaltır
adet--;
document.write('adet değeri: ' + adet + '<br>');

// istediğimiz kadar arttırma
adet += 10;
document.write('adet değeri: ' + adet + '<br>');

// istediğimiz kadar azlatma
adet -= 15;
document.write('adet değeri: ' + adet + '<br>');

// istediğimi çaprma
adet *= 8;
document.write('adet değeri: ' + adet + '<br>');

// istediğimizle  bölme
adet /= 10;
document.write('adet değeri: ' + adet + '<br>');

//! Fonkiyonlar
//* 1- Fonksiyon Tanımlama
//* 2- Paramatreler(): işelem yaparken dışarıdan veri alamaya yarar
//* 2- Yazılan paramatreler "," ile biribirnden ayrılır
//* 3- Kod Bloğu{}: fonksiyonnun yapıcağı işlemleri buraya yazıyoruz
//* 4- "return": fonksiyonun döndğredceği sonucu belirliyoruz
//* 5- Fonksion çağırma: Fonksiyon adını yazırızı ardında "()" koyarız
//* 6- Değişken isimlendirme kurllarına göre isimlendirirlir (eylem)

// fonksiyon tanımlama
function saldir() {
  document.write('Kılıcını savurdu.. <br>');
}

// fonksiyonu çağırma
saldir();
saldir();

// parametre alan fonksiyon
// parametre: fonksiyona dışarıdan gelen değer
// () içerisinde dışarıdan gelicek değerleri belirleriz
function hasarVer(hasar) {
  document.write('Düşmana ' + hasar + '  hasar verildi <br>');
}

// paramtre alan fonksiyonu çalıştırma
// () içersine paramtreye değer atarız
hasarVer(10);
hasarVer(46);
hasarVer(99);

function saldir2(silah, hasar) {
  // paramtrler ile bir metin oluşturmma
  var yazi =
    'Düşmana ' +
    silah +
    ' silahıyla ' +
    hasar +
    ' hasar verildi <br>';

  //  metni ekran basma
  document.write(yazi);
}

saldir2('lazer', 90);
saldir2('roket', 220);

// işlem yapan fonksiyonlarda genelde
// sonucu fonksiyonun çağrıldığı yere göndermek isteriz
// bu tarz durumlarda "return" anahtar kelimesini sonuç döndürmek için
// kullanırırz

function islemYap(sayi_1, sayi_2) {
  const sonuc = sayi_1 * sayi_2 - sayi_1;
  // sonucu fonksiyonun çağrıldığı yere göndeririz
  return sonuc;
}

document.write('Fonksiyonunu sonucu ' + islemYap(20, 9) + '<br>');

// dönen sonuca erişme
var sonuc = islemYap(10, 7);

document.write(sonuc + sonuc);
