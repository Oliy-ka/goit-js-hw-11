// У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:

// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
let lightbox;

export function createGallery(images) {
    const createMarkUp = images.map(image => {
        return `
         <li class="gallery-item">
                <a href="${image.largeImageURL}" class="gallery-link">
                    <img 
                        src="${image.webformatURL}" 
                        alt="${image.tags}"
                        class="gallery-image"

                    />
                </a>
                <ul class="gallery-info">
                    <li class="gallery-info-list-item">
                     <h3>Likes:</h3>
                     <p>${image.likes}</p>
                    </li>
                    <li class="gallery-info-list-item">
                        <h3>Views:</h3>
                        <p>${image.views}</p>
                    </li>
                    <li class="gallery-info-list-item">
                        <h3>Comments:</h3>
                        <p>${image.comments}</p>
                    </li>
                    <li class="gallery-info-list-item">
                        <h3>Downloads:</h3>
                        <p>${image.downloads}</p>
                    </li>
                </ul>
            </li>
        `;
    }).join("");

    gallery.insertAdjacentHTML('beforeend', createMarkUp);

    if (lightbox) {
        lightbox.refresh();
      } else {
        lightbox = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionDelay: 250
        });
      }
};

export function clearGallery() {
    gallery.innerHTML = "";
    if (lightbox) {
        lightbox.destroy();
        lightbox = null;
      }
};

const loader = document.querySelector(".loader");

export function showLoader() {
    console.log('Loader SHOWN');
    loader.classList.add("hidden");
 };

export function hideLoader() { 
    console.log('Loader HIDDEN');
    loader.classList.remove("hidden");
};




