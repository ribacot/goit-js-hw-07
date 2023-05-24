import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const murkup = galleryItems
	.map(
		({ preview, original, description }) => `<li class="gallery__item gallery " >
  <a class="gallery__link" href='${original}' >
    <img
      class="gallery__image"
      src='${preview}'
    alt='${description}'
 
    />
  </a>
</li>`
	)
	.join("");

galleryEl.insertAdjacentHTML("afterbegin", murkup);

const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
	overlayOpacity: 0.9,
	closeText: "&#10007;",
});
