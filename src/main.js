import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions.js';

const form = document.querySelector(".form");
const input = document.querySelector("input[name='search-text']");
const btn = document.querySelector("button");

form.addEventListener("submit", handlesubmit);

function handlesubmit(event) {
    event.preventDefault();
    if (!input.value.trim()) {
        return;
    }

    const query = input.value.trim();
    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then(imges => {
            if (imges.length > 0) {
                createGallery(imges);
            }
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: error.message,
                position: 'topRight',
              });
        })
        .finally(() => {
            hideLoader();
        });
};


