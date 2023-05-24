import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const murkup = galleryItems
	.map(
		({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href='#'>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
    alt=${description}
    />
  </a>
</li>`
	)
	.join("");
galleryEl.insertAdjacentHTML("afterbegin", murkup);

const hendleGalleryClick = (e) => {
	e.preventDefault();
	console.dir(e.target.dataset.source);
	const largeImgSrc = e.target.dataset.source;
	console.log(largeImgSrc);
	const instance = basicLightbox.create(`
	    <img src=${largeImgSrc} width="800" height="600">
	`);

	instance.show();
};

const HendleCloseEsc = function (e) {
	if (e.key === "Escape") {
		const largeImgEl = document.querySelector(".basicLightbox--visible");
		largeImgEl.classList.remove("basicLightbox--visible");
	}
};

document.addEventListener("keydown", HendleCloseEsc);
galleryEl.addEventListener("click", hendleGalleryClick);
