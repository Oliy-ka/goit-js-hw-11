import{a as d,S as h,i as n}from"./assets/vendor-QQhsBNEi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="50843154-75a8c51af40c5c9efbd704511";function y(i){const o=new URLSearchParams({key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return d(`https://pixabay.com/api/?${o}`).then(e=>{if(e.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return console.log(e.data.hits),e.data.hits}).catch(e=>{throw e})}const u=document.querySelector(".gallery");let s;function p(i){const o=i.map(e=>`
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
        `).join("");u.insertAdjacentHTML("beforeend",o),s?s.refresh():s=new h(".gallery a",{captionsData:"alt",captionDelay:250})}function g(){u.innerHTML="",s&&(s.destroy(),s=null)}const f=document.querySelector(".loader");function L(){f.classList.remove("hidden")}function b(){f.classList.add("hidden")}const w=document.querySelector(".form"),c=document.querySelector("input[name='search-text']");document.querySelector("button");w.addEventListener("submit",S);function S(i){if(i.preventDefault(),!c.value.trim())return;const o=c.value.trim();g(),L(),y(o).then(e=>{e.length>0?p(e):n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"})}).catch(e=>{n.error({title:"Error",message:e.message,position:"bottomRight"})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
