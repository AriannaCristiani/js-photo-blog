const base_url = 'https://jsonplaceholder.typicode.com/'
let url_body = 'photos'

const endPoint = base_url + url_body

const albumPhotos = document.getElementById('album-photos')
console.log(albumPhotos)

axios.get(endPoint, {
    params: {
        _limit: 6
    }
})
    .then((res) => {
        const photos = res.data
        console.log(photos)
        appendPhotos(photos, albumPhotos)


    })
    .catch((err) =>{
        console.log(alert('qualcosa è andato storto'))
    })

function appendPhotos(photos, root) {

    photos.forEach((photo) => {
        const { title, url, } = photo
        const cardHtml = `
         <div class="col-4">
          <div class="card">
             <img src="${url}" alt="">
             <p class="album">${title}</p>

          </div>

         </div>
        `
        root.innerHTML += cardHtml
    });
}
