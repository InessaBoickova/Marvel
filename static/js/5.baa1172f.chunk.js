(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{32:function(t,e,n){"use strict";var c=n(2);e.a=function(){return Object(c.jsx)("img",{alt:"Error",src:"/Marvel/error.gif",style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"}})}},33:function(t,e,n){"use strict";var c=n(4),r=n.n(c),a=n(7),i=n(5),s=n(0);e.a=function(){var t=function(){var t=Object(s.useState)(!1),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(s.useState)(null),u=Object(i.a)(o,2),l=u[0],b=u[1];return{loading:n,request:Object(s.useCallback)(function(){var t=Object(a.a)(r.a.mark((function t(e){var n,a,i,s,o,u=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,i=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"applicacation/json"},c(!0),t.prev=4,t.next=7,fetch(e,{method:n,body:a,headers:i});case 7:if((s=t.sent).ok){t.next=10;break}throw new Error("Could not feath ".concat(e," , status : ").concat(s.states));case 10:return c(!1),t.next=13,s.json();case 13:return o=t.sent,t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(4),c(!1),b(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]),error:l,clearError:Object(s.useCallback)((function(){return b(null)}),[])}}(),e=t.loading,n=t.request,c=t.error,o=t.clearError,u="https://gateway.marvel.com:443/v1/public/",l="apikey=bf7a152fb52d1be51c5f46bf7dad913d",b=210,p=function(t){return{name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,id:t.id,comics:t.comics.items}},m=function(){var t=Object(a.a)(r.a.mark((function t(){var e,c,a=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:b,t.next=3,n("".concat(u,"characters?limit=9&offset=").concat(e,"&").concat(l));case 3:return c=t.sent,t.abrupt("return",c.data.results.map(p));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(r.a.mark((function t(e){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters/").concat(e,"?").concat(l));case 2:return c=t.sent,t.abrupt("return",p(c.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(r.a.mark((function t(e){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"comics/").concat(e,"?").concat(l));case 2:return c=t.sent,t.abrupt("return",{id:(r=c.data.results[0]).id,title:r.title,description:r.description||"There is no description",pageCount:r.pageCount?"".concat(r.pageCount," p."):"No information about the number of pages",thumbnail:r.thumbnail.path+"."+r.thumbnail.extension,language:r.textObjects.language||"en-us",price:r.prices[0].price?"".concat(r.prices[0].price,"$"):"not available"});case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}();return{loading:e,error:c,getAllCharacters:m,getCharacter:j,clearError:o,getComics:function(){var t=Object(a.a)(r.a.mark((function t(){var e,c,a=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:b,t.next=3,n("".concat(u,"comics?limit=8&offset=").concat(e,"&").concat(l));case 3:return c=t.sent,t.abrupt("return",c.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getComic:d}}},45:function(t,e,n){},46:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var c=n(34),r=n(8),a=n(5),i=(n(45),n(0)),s=n(11),o=n(21),u=n(32),l=n(33),b=n(2),p=function(){var t=Object(i.useState)(!1),e=Object(a.a)(t,2),n=e[0],c=e[1],p=Object(i.useState)([]),m=Object(a.a)(p,2),j=m[0],d=m[1],f=Object(i.useState)(2),h=Object(a.a)(f,2),v=h[0],g=h[1],O=Object(i.useState)(!1),x=Object(a.a)(O,2),_=x[0],w=x[1],k=Object(l.a)(),y=k.loading,C=k.error,N=k.getComics;Object(i.useEffect)((function(){E(v,!0)}),[]);var E=function(t,e){c(!e),N(t).then(S)},S=function(t){t.length<8&&w(!0),d((function(e){return[].concat(Object(r.a)(e),Object(r.a)(t))})),c(!1),g((function(t){return t+8}))},A=Object(i.useRef)([]),F=j.map((function(t,e){var n=t.thumbnail.path+"."+t.thumbnail.extension,c=t.prices[0].price?t.prices[0].price+"$":"",r=t.title,a=t.id,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(i={objectFit:"unset"}),Object(b.jsx)("li",{className:"comics__list",onClick:function(){!function(t){A.current.forEach((function(t){return t.classList.remove("char__item_selected")})),A.current[t].classList.add("char__item_selected"),A.current[t].focus()}(e)},tabIndex:0,ref:function(t){return A.current[e]=t},children:Object(b.jsxs)(s.b,{to:"/comics/".concat(a),children:[Object(b.jsx)("img",{className:"comics__item-img",src:n,alt:r,style:i}),Object(b.jsx)("div",{className:"comics__item-name",children:r}),Object(b.jsx)("div",{className:"comics__item-price",children:c})]})},e)})),T=C?Object(b.jsx)(u.a,{}):null,q=y&&!n?Object(b.jsx)(o.a,{}):null;return Object(b.jsxs)("div",{className:"comics__list",children:[Object(b.jsxs)("ul",{className:"comics__grid",children:[T,q,F]}),Object(b.jsx)("button",{className:"button button__main button__long",disabled:n,style:{display:_?"none":"block"},onClick:function(){return E(v)},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})},m=(n(46),n.p+"static/media/Avengers.4065c8f9.png"),j=n.p+"static/media/Avengers_logo.9eaf2193.png",d=function(){return Object(b.jsxs)("div",{className:"app__banner",children:[Object(b.jsx)("img",{src:m,alt:"Avengers"}),Object(b.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(b.jsx)("br",{}),"Stay tuned!"]}),Object(b.jsx)("img",{src:j,alt:"Avengers logo"})]})};e.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(c.a,{children:[Object(b.jsx)("meta",{name:"description",content:"Page with list of our comics"}),Object(b.jsx)("title",{children:"Comics Page"})]}),Object(b.jsx)(d,{}),Object(b.jsx)(p,{})]})}}}]);
//# sourceMappingURL=5.baa1172f.chunk.js.map