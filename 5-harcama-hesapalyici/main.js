// html elemanlarını çağırma
var form = document.getElementById('add-form');
var list = document.getElementById('list');

// formun gönderilme olayını izleme
form.addEventListener('submit', addExpense);

// harcamayı listeye ekler
function addExpense(event) {
  // sayfayı yenileemyi engelle
  event.preventDefault();

  // inputtaki değerlere erişme
  var title = event.target[0].value;
  var price = event.target[1].value;

  // listenin html'ine yeni li ekle
  list.innerHTML += `
       <li>
          <h3>${title}</h3>
          <h3>${price} ₺</h3>
          <button id="delete">Sil</button>
        </li>
  `;

  //   inputları temizle
  event.target[0].value = '';
  event.target[1].value = '';
}

// liste alanındaki tıklnama olaylarını izle
list.addEventListener('click', handleClick);

function handleClick(e) {
  var element = e.target;
  // tıklanılan elemanın id'si delete ise silme işlemini yap
  if (element.id === 'delete') {
    // butonun kapsayıcına erişme
    const parent = element.parentElement;
    // html'den kaldırma
    parent.remove();
  }
}
