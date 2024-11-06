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

function appendPhotos(photos, root) {

    photos.forEach((photo) => {
        const { albumId, title, id, url, thumbnailUrl } = photo
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
