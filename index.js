import{S as f,a as m,i as n}from"./assets/vendor-QQhsBNEi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u=document.querySelector(".gallery");let i;function h(l){const o=l.map(e=>`
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
        `).join("");u.insertAdjacentHTML("beforeend",o),i?i.refresh():i=new f(".gallery a",{captionsData:"alt",captionDelay:250})}function y(){u.innerHTML="",i&&(i.destroy(),i=null)}const d=document.querySelector(".loader");function p(){console.log("Loader SHOWN"),d.classList.add("hidden")}function g(){console.log("Loader HIDDEN"),d.classList.remove("hidden")}const L="50806144-c57902bc5e70df58c5637df69";function b(l){const o=new URLSearchParams({key:L,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0});p(),m(`https://pixabay.com/api/?${o}`).then(e=>{if(e.data.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}console.log(e.data.hits),h(e.data.hits)}).catch(e=>{console.log(e),n.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}).finally(()=>g())}const S=document.querySelector(".form"),c=document.querySelector("input[name='search-text']");document.querySelector("button");S.addEventListener("submit",w);function w(l){if(l.preventDefault(),!c.value.trim())return;const o=c.value.trim();y(),b(o)}
//# sourceMappingURL=index.js.map
