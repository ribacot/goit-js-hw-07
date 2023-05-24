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

let instance = null

const hendleGalleryClick = (e) => {
	e.preventDefault();
	const largeImgSrc = e.target.dataset.source;
	 instance = basicLightbox.create(`
	    <img class="largeImg" src=${largeImgSrc} width="800" height="600">
	`);
	instance.show();
};

const HendleCloseEsc = function (e) {
    if (e.key === "Escape" || e.key === "Enter") {
        e.preventDefault();
       instance.close();

		// const largeImgEl = document.querySelector(".basicLightbox--visible");
		// largeImgEl.classList.remove("basicLightbox--visible");
	}
};

document.addEventListener("keydown", HendleCloseEsc);
galleryEl.addEventListener("click", hendleGalleryClick);
