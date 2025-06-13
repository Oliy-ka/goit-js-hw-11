// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query).
// Ця функція повинна приймати один параметр query(пошукове слово, яке є рядком),
//     здійснювати HTTP - запит і повертати значення властивості data з отриманої відповіді.

import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const API_KEY = '50843154-75a8c51af40c5c9efbd704511' ;

export function getImagesByQuery(query) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    return axios(`https://pixabay.com/api/?${searchParams}`)
        .then(res => { 
            if (res.data.hits.length === 0) {
                throw new Error(
                    'Sorry, there are no images matching your search query. Please try again!'
                );
            }
            console.log(res.data.hits);
            return res.data.hits;
        })
        .catch(error => {
            throw error;
        })
}