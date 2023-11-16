// API'a istek atma
fetch('https://fakestoreapi.com/products')
  // istek başarılı olursa bu fonk çalışır ve verilereri paketini açar
  .then(function (paket) {
    return paket.json();
  })
  //  paketten çıkan veirlere erişme
  .then(function (veri) {
    renderCards(veri);
  })
  // istek başarısız olursa bu fonk çalışır
  .catch(function (hata) {
    console.log(hata);
  });

// html elemanı çağırma
const list = document.getElementById('list');

// Bir dizi içerisindeki her bir obje için ekrana kart basan
function renderCards(veri) {
  veri.forEach(function (ürün) {
    console.log(ürün);
    list.innerHTML += `
      <div class="card">
            <img
              height="150px"
              src="${ürün.image}"
            />
            <h2>${ürün.title}</h2>
            <p>${ürün.category}</p>
            <p>⭐ ${ürün.rating.rate}</p>
            <button>
              <span>Sepete Ekle</span>
              <p>₺${ürün.price}</p>
            </button>
        </div>
    `;
  });
}
