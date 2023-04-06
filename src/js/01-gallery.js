import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
console.log('hhhhhhhhh');

const galleryItemsContainer = document.querySelector('.gallery');
const cardsMarkup = createGaleryMarkup(galleryItems);
console.log(galleryItemsContainer);
console.log(cardsMarkup);

galleryItemsContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGaleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
    `
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  close: false,  
});