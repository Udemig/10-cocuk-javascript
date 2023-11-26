// htmlden etiket ismine göre elerman çağırma
const form = document.querySelector('form');
const main = document.querySelector('main');

// verileri alır ve main alanındaki
// arayüzü ekrana basar
function renderProfile(data) {
  main.innerHTML = `
     <section id="left">
        <img src="${data.avatar_url}" />
        <a href="${data.html_url}" target="_blank">Profili Göster</a>
      </section>

      <section id="right">
        <div>
          <span>Açık Repolar: ${data.public_repos}</span>
          <span>Açık Gistler: ${data.public_gists}</span>
          <span>Takipçiler: ${data.followers}</span>
          <span>Takip Edilenler: ${data.following}</span>
        </div>

        <ul>
          <li>Hakkında: ${data.bio}</li>
          <li>Şirket:${data.company}</li>
          <li>Website: ${data.blog}</li>
          <li>Konum: ${data.location}</li>
          <li>Hesap Oluşturma: ${new Date(
            data.created_at
          ).toLocaleDateString()}</li>
        </ul>
      </section>
    `;
}

// kullanıcı ismine göre veritabanında bilgileri alır
function getUserData(olay) {
  olay.preventDefault(); // sayfa yenilmeyi engelle
  var username = olay.target[0].value; // inputa yazılan değer

  // veritabanından kullanıcın bilgilerini al
  fetch(`https://api.github.com/users/${username}`)
    // istek başarılı olursa cevabı işle
    .then(function (res) {
      return res.json();
    })
    // veri js formatına çevrilirse
    .then(function (data) {
      renderProfile(data); // arayüzü ekran bas
    });
}

// form gönderlime olayını izle ve
// gönderlince getUserData'yı çalıştır
form.addEventListener('submit', getUserData);
