import{a as f,S as d}from"./assets/vendor-5Sq5AeRf.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const h="50843154-75a8c51af40c5c9efbd704511";function m(i){const o=new URLSearchParams({key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return f(`https://pixabay.com/api/?${o}`).then(e=>{if(e.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return console.log(e.data.hits),e.data.hits}).catch(e=>{throw e})}const c=document.querySelector(".gallery");let l;function y(i){const o=i.map(e=>`
         <li class="gallery-item">
                <a href="${e.largeImageURL}" class="gallery-link">
                    <img 
                        src="${e.webformatURL}" 
                        alt="${e.tags}"
                        class="gallery-image"

                    />
                </a>
                <ul class="gallery-info">
                    <li class="gallery-info-list-item">
                     <h3>Likes:</h3>
                     <p>${e.likes}</p>
                    </li>
                    <li class="gallery-info-list-item">
                        <h3>Views:</h3>
                        <p>${e.views}</p>
                    </li>
                    <li class="gallery-info-list-item">
                        <h3>Comments:</h3>
                        <p>${e.comments}</p>
                    </li>
                    <li class="gallery-info-list-item">
                        <h3>Downloads:</h3>
                        <p>${e.downloads}</p>
                    </li>
                </ul>
            </li>
        `).join("");c.insertAdjacentHTML("beforeend",o),l?l.refresh():l=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function p(){c.innerHTML="",l&&(l.destroy(),l=null)}const u=document.querySelector(".loader");function g(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}const b=document.querySelector(".form"),n=document.querySelector("input[name='search-text']");document.querySelector("button");b.addEventListener("submit",w);function w(i){if(i.preventDefault(),!n.value.trim())return;const o=n.value.trim();p(),g(),m(o).then(e=>{e.length>0&&y(e)}).catch(e=>{iziToast.error({title:"Error",message:e.message,position:"topRight"})}).finally(()=>{L()})}
//# sourceMappingURL=index.js.map
