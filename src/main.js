import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery } from './js/render-functions.js';
// import createGallery from "./js/render-functions";
// import clearGallery from "./js/render-functions";
// import showLoader from "./js/render-functions";
// import hideLoader from "./js/render-functions";

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
    getImagesByQuery(query);
};


