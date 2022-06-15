fetch("https://api.jikan.moe/v4/anime")
.then(response => response.json())
.then(animes => animes.data.forEach(anime => createAnimeCard(anime), console.log(animes)))
  
const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.img-container img');
const largeAnimeCard = document.querySelector('.full-img');
const animeTitle = document.querySelector('.caption')
const gallery = document.querySelector('.gallery')


// create anime card 
function createAnimeCard(anime) {
// holds all images
    const container = document.createElement('div')
    container.setAttribute('class', 'img-container')
// images
    const animeCard = document.createElement('img');
    animeCard.src = anime.images.jpg.image_url;
    animeCard.alt = anime.title;
// make images original data the large image
    animeCard.setAttribute('data-original', `${anime.images.jpg.large_image_url}`);
//add image container to root
    gallery.appendChild(container);
//add images to container
    container.appendChild(animeCard);
//change opacity of picture when hovered
    animeCard.addEventListener("mouseenter", event => {
        event.target.style = "opacity: 1"
    });
    animeCard.addEventListener("mouseleave", event => {
        event.target.style = "opacity: 0.8"
    });  
    animeCard.addEventListener("click", () => {
        modal.classList.add("open");
        largeAnimeCard.classList.add("open");
        const largeImageSrc = animeCard.getAttribute("data-original");
        largeAnimeCard.src = largeImageSrc;
        const altText = animeCard.alt;
        animeTitle.textContent = altText
    });
    modal.addEventListener('click', (event) => {
        if(event.target.classList.contains("modal")) {
            modal.classList.remove("open")
            largeAnimeCard.classList.remove("open")
        }
    })
}


// modal.addEventListener('click', (event) => {
//     if(event.target.classList.contains("modal")) {
//         modal.classList.remove("open")
//         largeAnimeCard.classList.remove("open")
//     }
// })
