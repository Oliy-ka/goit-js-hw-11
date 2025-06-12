// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query).
// Ця функція повинна приймати один параметр query(пошукове слово, яке є рядком),
//     здійснювати HTTP - запит і повертати значення властивості data з отриманої відповіді.

import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createGallery, showLoader, hideLoader } from "./render-functions.js";

const API_KEY = '50806144-c57902bc5e70df58c5637df69';

export function getImagesByQuery(query) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    
    showLoader()

    axios(`https://pixabay.com/api/?${searchParams}`)
        .then(res => { 
            if (res.data.hits.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                return;
            };
            console.log(res.data.hits);
            createGallery(res.data.hits);
        })
        .catch(error => {
            console.log(error);
            iziToast.error({
                title: 'Error',
                message: 'An error occurred while fetching images. Please try again later.',
            });
        })
        .finally(() => hideLoader())
}