import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

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
            else {
                iziToast.info({
                    title: 'No results',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'bottomRight',
                });
            }
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: error.message,
                position: 'bottomRight',
              });
        })
        .finally(() => {
            hideLoader();
        });
};


