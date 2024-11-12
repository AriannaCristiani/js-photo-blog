const base_url = 'https://jsonplaceholder.typicode.com/'
let url_body = 'photos'

const endPoint = base_url + url_body

const albumPhotos = document.getElementById('album-photos')
const overlayBox = document.getElementById('over')
const button = document.getElementById('button')
const imgOverlay = document.getElementById('picture')



axios.get(endPoint, {
    params: {
        _limit: 6
    }
})
    .then((res) => {
        const photos = res.data;
        console.log(photos);
        appendPhotos(photos, albumPhotos);
    })
    .catch((err) => {
        console.log(alert('qualcosa è andato storto'));
    })


function appendPhotos(photos, root) {

    photos.forEach((photo) => {
        const { title, url, } = photo;
        const cardHtml = `
             <div class="col-4">
              <div class="card">
                 <img class="pin" src="./img/pin.svg" alt="">
                 <img class="random-pic" src="${url}" alt="">
                 <p class="album">${title}</p>
              </div>
             </div>
            `

        root.innerHTML += cardHtml;

    });


    const cards = document.querySelectorAll('.card')
    //console.log(cards)

    cards.forEach((card, i) => {
        console.log(card)

        card.addEventListener('click', () => {

            overlayBox.classList.remove('display-none');

            const { url } = photos[i];

            imgOverlay.src = url;

        })
    })
}


button.addEventListener('click', function () {
    //console.log('hai cliccato')
    overlayBox.classList.add('display-none')
})