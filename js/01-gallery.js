import { galleryItems } from './gallery-items.js';
const homeGallery = document.querySelector("ul.gallery");
const doNewGallery = galleryCreate(galleryItems);
homeGallery.addEventListener("click", modalImage);
homeGallery.insertAdjacentHTML("beforeend", doNewGallery);
function modalImage(event) {
    event.preventDefault();
    imgBox.element().querySelector("img").src = event.target.dataset.source;
    imgBox.show();
};
function galleryCreate(galleryItems) {
    return galleryItems.map(({ preview, original, description}) => {
        return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}"
                data-source="${original}" alt="${description}">
                </a>
                </li>`;
    } )
    .join("");
};
function btnEscape(event) {
    if (event.code === "Escape") {
        imgBox.close();
    }
};
const imgBox = basicLightbox.create("<img>", {
    onShow: () => { document.addEventListener("keydown", btnEscape) }, 
    onClose: () => { document.removeEventListener("keydown", btnEscape) }
});
console.log(galleryItems);
console.log(homeGallery);