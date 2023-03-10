// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

 const containerGallery = document.querySelector('.gallery');

const cardMarcup = createCardMarcup(galleryItems);

containerGallery.insertAdjacentHTML('beforeend',cardMarcup)

    function createCardMarcup(gallery) {
    return gallery.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}).join('');
};

 
   new SimpleLightbox('.gallery a', {
        captionsData: `alt`,
        captionDelay: 250
    })

console.log(galleryItems)