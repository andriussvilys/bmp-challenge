parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"rEqs":[function(require,module,exports) {
var e=document.getElementById("links"),t=document.getElementById("hamburger");t.addEventListener("click",function(){e.classList.toggle("menu-links-container__display-on")});var i=function(e,t){var i=$("#".concat(t," .slick-dots"))[0],o=$("#".concat(e))[0],s={behavior:"smooth"};if(i)return e?void(o&&(s.left=o.offsetLeft-30,i.scrollTo(s))):(s.left=0,void i.scrollTo(s))},o=function(){setTimeout(function(){var e=Object.values($("#carousel .slick-dots li")).filter(function(e){return e.id}),t={attributes:!0,childList:!0,subtree:!0,attributeOldValue:!0,attributeFilter:["class"]},o=new MutationObserver(function(e){e.forEach(function(e){e.target.classList.contains("slick-active")&&i(e.target.id,"carousel")})});e.forEach(function(e){o.observe(e,t)})},100)},s=$("#grid-cta"),l=300;s.click(function(){if($(document).width()>468)return $("#grid-extra__1").animate({right:"25%"},600),void $("#grid-extra__2").animate({right:"0"},400);900!==l&&(l+=200,$(".gallery").animate({height:"".concat(l,"vw")}))}),$(window).resize(function(){scrollCounter=0,o(),i($("#carousel .slick-dots .slick-active")[0].id,"carousel"),$(document).width()>468?$(".gallery")[0].style.height="50vw":($(".gallery")[0].style.height="300vw",l=300)}),$(document).on("ready",function(){o(),setTimeout(function(){Object.values($("#work li")).map(function(e){return e.id}).filter(function(e){return void 0!==e}).forEach(function(e){document.getElementById(e).addEventListener("click",function(){console.log(e),i(e,"work")})});$("#carousel .slick-active")[0]},1e3),$(".your-class").slick({dots:!0,infinite:!0,slidesToShow:2,slidesToScroll:3}),$(".logos-wrapper").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:768,settings:{slidesToShow:.5,slidesToScroll:.5}},{breakpoint:468,settings:{slidesToShow:.25,slidesToScroll:.25}}]}),$(".testimonials-mainBody").slick({dots:!0,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1}),$("#carousel-photos").slick({arrows:!1,dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:3e3,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:768,settings:{slidesToShow:1.5,slidesToScroll:1.5}}]})});
},{}]},{},["rEqs"], null)
//# sourceMappingURL=/javascript.f8912c80.js.map