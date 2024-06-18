import{A as J,S as O,N as B,K as C,a as A,i as P,b as D}from"./assets/vendor-21c62013.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{J.init()});const l=new O(".reviews-swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".button-next",prevEl:".button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},modules:[B,C,A],slidesPerView:2,spaceBetween:32,breakpoints:{320:{slidesPerView:1,spaceBetween:32},768:{slidesPerView:1,spaceBetween:32},1280:{slidesPerView:2,spaceBetween:32}},effect:"creative",creativeEffect:{prev:{translate:[0,0,-400]},next:{translate:["100%",0,0]}}});function w(e){P.error({title:"Error",message:e})}function G(e){return`<li class="swiper-slide review-list-item" id="list-item-id">
          <p class="review-section-text">${e.review}</p>
          <div class="review-avatar-text">
        <img
        srcset="${e.avatar_url}"
        class="review-section-img"
        src="${e.avatar_url}"
        alt="Avatar"
        width="40"
        height="40"/>
            <h3 class="review-section-title">${e.author}</h3>
          </div>
        </li>`}function U(e){return e.map(G).join("")}function H(e){const t=document.getElementById("reviews-list-id"),i=U(e);t.innerHTML=i,l.update()}async function z(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Failed to fetch reviews");const t=await e.json();t&&t.length>0?H(t):(w("No reviews found"),document.getElementById("reviews-list-id").innerHTML="<p>Not found</p>")}catch{w("An error occurred while fetching reviews"),document.getElementById("reviews-list-id").innerHTML="<p>Not found</p>"}}function V(){const e=document.querySelector(".button-prev"),t=document.querySelector(".button-next");l.isBeginning?e.classList.add("disabled"):e.classList.remove("disabled"),l.isEnd?t.classList.add("disabled"):t.classList.remove("disabled")}l.on("slideChange",V);l.on("init",V);l.init();document.addEventListener("DOMContentLoaded",z);const f="/js_104_Voroshylo/assets/1-676ecb00.jpg",W="/js_104_Voroshylo/assets/1-2x-c9d1ecc4.jpg",v="/js_104_Voroshylo/assets/2-b8ef22f2.jpg",K="/js_104_Voroshylo/assets/2-2x-b7c901f2.jpg",S="/js_104_Voroshylo/assets/3-cadf2c0c.jpg",Q="/js_104_Voroshylo/assets/3-2x-aff37560.jpg",j="/js_104_Voroshylo/assets/4-6eaa8875.jpg",Z="/js_104_Voroshylo/assets/4-2x-bec27449.jpg",y="/js_104_Voroshylo/assets/5-5810cc52.jpg",X="/js_104_Voroshylo/assets/5-2x-379d8de8.jpg",b="/js_104_Voroshylo/assets/6-21d18a69.jpg",Y="/js_104_Voroshylo/assets/6-2x-72392c33.jpg",L="/js_104_Voroshylo/assets/7-37e7b7ff.jpg",ee="/js_104_Voroshylo/assets/7-2x-2485cf3c.jpg",x="/js_104_Voroshylo/assets/8-3c99fabe.jpg",te="/js_104_Voroshylo/assets/8-2x-4ae4ee3e.jpg",_="/js_104_Voroshylo/assets/9-e0576bd7.jpg",oe="/js_104_Voroshylo/assets/9-2x-fb79b545.jpg",k="/js_104_Voroshylo/assets/10-1e5fb8ac.jpg",se="/js_104_Voroshylo/assets/10-2x-73d6d9f4.jpg",R="/js_104_Voroshylo/assets/sprite-4c574536.svg",E=[{imgSrc:f,imgSrcSet:`${f} 1x, ${W} 2x`,alt:"power-pulse-webservice",tech:"React, JavaScript, Node JS, Git",description:"power pulse webservice",link:"https://github.com/Voroshylo/projeckt-js-group-02"},{imgSrc:v,imgSrcSet:`${v} 1x, ${K} 2x`,alt:"mimino-website",tech:"React, JavaScript, Node JS, Git",description:"mimino website",link:"https://github.com/Voroshylo/projeckt-js-group-02"},{imgSrc:S,imgSrcSet:`${S} 1x, ${Q} 2x`,alt:"vyshyvanka",tech:"React, JavaScript, Node JS, Git",description:"vyshyvanka vibes Landing Page",link:"https://github.com/Voroshylo/projeckt-js-group-02"},{imgSrc:j,imgSrcSet:`${j} 1x, ${Z} 2x`,alt:"green-harvest-online-store",tech:"React, JavaScript, Node JS, Git",description:"green harvest online store",link:"https://voroshylo.github.io/project-group-3/"},{imgSrc:y,imgSrcSet:`${y} 1x, ${X} 2x`,alt:"wallet-webservice",tech:"React, JavaScript, Node JS, Git",description:"wallet webservice",link:"https://github.com/Voroshylo/projeckt-js-group-02"},{imgSrc:b,imgSrcSet:`${b} 1x, ${Y} 2x`,alt:"chego-jewelry-website",tech:"React, JavaScript, Node JS, Git",description:"chego jewelry website",link:"https://github.com/Voroshylo/projeckt-js-group-02"},{imgSrc:L,imgSrcSet:`${L} 1x, ${ee} 2x`,alt:"energy-flow-webservice",tech:"React, JavaScript, Node JS, Git",description:"energy flow webservice",link:"https://github.com/Voroshylo/projeckt-js-group-02"},{imgSrc:x,imgSrcSet:`${x} 1x, ${te} 2x`,alt:"fruitbox-online-store",tech:"React, JavaScript, Node JS, Git",description:"fruitbox online store",link:"https://github.com/Voroshylo/projeckt-js-group-02"},{imgSrc:_,imgSrcSet:`${_} 1x, ${oe} 2x`,alt:"English-excellence-webservice",tech:"React, JavaScript, Node JS, Git",description:"English excellence webservice",link:"https://github.com/Voroshylo/projeckt-js-group-02"},{imgSrc:k,imgSrcSet:`${k} 1x, ${se} 2x`,alt:"starlight-studio-landing-page",tech:"React, JavaScript, Node JS, Git",description:"starlight studio landing page",link:"https://github.com/Voroshylo/projeckt-js-group-02"}],u=3;let m=0;const re=document.querySelector(".projects-ul"),$=document.querySelector(".btn-load-more");function F(){const e=m*u,t=e+u;E.slice(e,t).forEach(r=>{const s=document.createElement("li");s.classList.add("projects-li"),s.innerHTML=`
    <div class="div-projects">
      <img
        class="projects-img"
        srcset="${r.imgSrcSet}"
        src="${r.imgSrc}"
        alt="${r.alt}"
        width="320"
      />
      </div>
        <h3 class="projects-h">${r.tech}</h3>
        <div class="div-p-a">
        <p class="projects-p">${r.description}</p>
        <a href="${r.link}" class="projects-btn" target="_blank" rel="noopener noreferrer">
          VISIT
          <svg class="btn-projects-icon" width="14" height="14">
            <use href="${R}#icon-Vector-Projects"></use>
          </svg>
        </a>
        </div>
      
    `,re.appendChild(s)}),m++,m*u>=E.length&&($.style.display="none")}$.addEventListener("click",F);F();const ne=document.querySelector(".faq-list");new D(".accordion-container",{openOnInit:[0]});const ie=e=>{const t=e.target.closest(".ac-trigger");if(!t)return;const r=t.closest(".ac").classList.contains("is-active"),s=t.querySelector(".faq-scroll-button-icon"),n=r?"#icon-Arrow-Up-Quetions":"#icon-Arrow-Down-Quetions";s.innerHTML=`<use href="${R}${n}"></use>`};ne.addEventListener("click",ie);const M=20,o={wtFillingForm:document.querySelector("#work-together-form"),wtModal:document.querySelector(".work-together-modal-wrapper"),wtResultMsg:document.querySelector(".filling-result-msg"),wtModalRespTitle:document.querySelector("#work-together-modal-resp-title"),wtModalRespMessage:document.querySelector("#work-together-modal-resp-message"),wtModalClose:document.querySelector(".work-together-modal-close"),wtModalBox:document.querySelector(".work-together-modal")};o.wtFillingForm.addEventListener("submit",ce);o.wtFillingForm.elements.email.addEventListener("input",q);o.wtFillingForm.elements.email.addEventListener("blur",me);o.wtFillingForm.elements.email.addEventListener("blur",N);o.wtFillingForm.elements.email.addEventListener("focus",I);o.wtFillingForm.elements.comment.addEventListener("blur",N);o.wtFillingForm.elements.comment.addEventListener("focus",I);o.wtModal.addEventListener("click",T);window.addEventListener("keydown",T);async function ce(e){e.preventDefault();const t=o.wtFillingForm.elements.email.value,i=o.wtFillingForm.elements.comment.value;try{const r=await ae(t,i);le(r),o.wtFillingForm.reset()}catch(r){de(r)}}async function ae(e,t){const s="https://portfolio-js.b.goit.study/api"+"/requests",n={method:"POST",body:JSON.stringify({email:e,comment:t}),headers:{"Content-Type":"application/json",Accept:"application/json"}};return await fetch(s,n).then(c=>{if(!c.ok)throw new Error(c.status);return c.json()})}function le(e){const{title:t,message:i}=e;ue({title:t,message:i})}function de(e){console.error("Request failed:",e),o.wtResultMsg.textContent="Failed to send message. Please try again later."}function ue({title:e,message:t}){o.wtModalRespTitle.textContent=e,o.wtModalRespMessage.textContent=t,o.wtModal.classList.add("IsOpen")}function T(e){(!o.wtModalBox.contains(e.target)||e.target===o.wtModalClose||e.code==="Escape")&&(o.wtModal.classList.remove("IsOpen"),o.wtResultMsg.textContent="")}function me(e){e.target.value=e.target.value.trim();const t=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!e.target.value){q(e);return}e.target.value.match(t)?pe():ge()}function pe(){const{email:e}=o.wtFillingForm.elements;e.classList.remove("Invalid"),e.classList.add("Success"),o.wtResultMsg.textContent="Success!",o.wtResultMsg.classList.add("Success")}function ge(){const{email:e}=o.wtFillingForm.elements;e.classList.remove("Success"),e.classList.add("Invalid"),o.wtResultMsg.textContent="Invalid email, try again",o.wtResultMsg.classList.remove("Success")}function q(e){e.target.name==="email"&&(o.wtResultMsg.textContent="",o.wtResultMsg.classList.remove("Success"));const{email:t}=o.wtFillingForm.elements;t.classList.remove("Invalid"),t.classList.remove("Success")}function N(e){e.target.setAttribute("data-value",e.target.value.trim()),e.target.value.length>M&&(e.target.value=e.target.value.slice(0,M-3).concat("..."))}function I(e){e.target.value&&(e.target.value=e.target.getAttribute("data-value"))}console.log("start js");const g="onThema",p={colorThema:"light"},d=document.querySelector("body"),h=document.querySelector("#sitetheme"),a=JSON.parse(localStorage.getItem(g));a===null?(console.log("localStorage порожній, встановлюємо стандартну світлу тему."),localStorage.setItem(g,JSON.stringify(p)),d.classList.add("lightthema")):(d.classList.add(a.colorThema==="dark"?"darkthema":"lightthema"),h.checked=a.colorThema==="dark",console.log(`Тема з localStorage: ${a.colorThema.toUpperCase()}`));h.addEventListener("click",()=>{const e=d.classList.contains("darkthema")?"dark":"light",t=e==="dark"?"light":"dark";d.classList.remove(`${e}thema`),d.classList.add(`${t}thema`),p.colorThema=t,localStorage.setItem(g,JSON.stringify(p)),console.log(`Тема з localStorage змінена на ${t.toUpperCase()}`)});document.addEventListener("DOMContentLoaded",()=>{a&&a.colorThema==="dark"&&(h.checked=!0)});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("[data-menu-open]"),t=document.querySelector(".close-menu"),i=document.querySelector(".menu");function r(){i.classList.add("is-open"),document.body.classList.add("no-scroll")}function s(){i.classList.remove("is-open"),document.body.classList.remove("no-scroll")}e.addEventListener("click",r),t.addEventListener("click",s),document.querySelectorAll(".nav-mob-menu a").forEach(n=>{n.addEventListener("click",s)})});
//# sourceMappingURL=commonHelpers.js.map
