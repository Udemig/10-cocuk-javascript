// html'den gelenler
var menuList = document.querySelector('.menu-area');

// ürünlerin veirisni bu değişkende tutucaz
var menu = [];

// paramete olarak aldığı ürünleri ekrana basar
function renderMenu(data) {
  // diziyi dön ve herbir eleman için kart html'i oluştur
  let menuHtml = data.map(function (item) {
    return `
        <div id="card">
        <img src="${item.img}" />
        <div class="card-info">
          <div class="name">
            <h3>${item.title}</h3>
            <p>$${item.price}</p>
          </div>
          <p class="desc">
           ${item.desc}
          </p>
        </div>
      </div>
        `;
  });

  // diziyi stringe çevir
  menuHtml = menuHtml.join(' ');

  // oluşturrdğmuz kartları ekrana bas
  menuList.innerHTML = menuHtml;
}

// ürünleri veritbanından alıp getirir
function getMenu() {
  fetch('db.json')
    // istek başarılı olursa(pakedi aç) veirlere eriş
    .then(function (res) {
      return res.json();
    })
    // verileri al ve ekrana basıcak fonk. çalıştır
    .then(function (data) {
      menu = data.menu; // menu değişkennini güncelle
      renderMenu(data.menu); // menu veilerini ekrana bas
    });
}

// sayfanın yüklenme anını izleme
document.addEventListener('DOMContentLoaded', getMenu);

// bütün butonları çağır
var buttons = document.querySelectorAll('label');

// seçilen kategoriye göre filtrelme yap
function filterCategory(e) {
  // seçilen kategoriyi bulma
  var selected = e.target.dataset.id;

  if (selected === 'all') {
    // hepsini seçtiyse bütün menüyü göster
    renderMenu(menu);
  } else {
    // kategori seçtiyse o kategoriye ait ürünleri filtrele
    var filtred = menu.filter(function (item) {
      return item.category === selected;
    });

    // filtrelenen veiryi ekrana bas
    renderMenu(filtred);
  }
}

// bütün butonlara olay izleyicisi ekle
buttons.forEach(function (btn) {
  btn.addEventListener('click', filterCategory);
});
