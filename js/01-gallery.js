import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("afterbegin", murkup(galleryItems));
galleryEl.addEventListener("click", hendleGalleryClick);
document.addEventListener("keydown", HendleCloseEsc);

let instance = null;

function murkup(gallery) {
	return gallery
		.map(
			({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href='#'>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
    alt="${description}"
    />
  </a>
</li>`
		)
		.join("");
}

function hendleGalleryClick  (e) {
    e.preventDefault();
    if (!e.target.classList.contains("gallery__image")) {
			return;
		}
	const largeImgSrc = e.target.dataset.source;
	instance = basicLightbox.create(`
	    <img class="largeImg" src=${largeImgSrc} width="800" height="600">
	`);
	instance.show();
};

function HendleCloseEsc(e) {
	if (e.key === "Escape" || e.key === "Enter") {
		e.preventDefault();
		instance.close();
	}
}

