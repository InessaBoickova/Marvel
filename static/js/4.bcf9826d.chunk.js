(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[4],{32:function(e,t,c){"use strict";var n=c(2);t.a=function(){return Object(n.jsx)("img",{alt:"Error",src:"/Marvel/error.gif",style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"}})}},33:function(e,t,c){"use strict";var n=c(4),r=c.n(n),a=c(7),s=c(5),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(a.a)(r.a.mark((function e(t){var c,a,s,i,o,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"applicacation/json"},n(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:a,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not feath ".concat(t," , status : ").concat(i.states));case 10:return n(!1),e.next=13,i.json();case 13:return o=e.sent,e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),n(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,c=e.request,n=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=bf7a152fb52d1be51c5f46bf7dad913d",j=210,b=function(e){return{name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,id:e.id,comics:e.comics.items}},h=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:j,e.next=3,c("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(b));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",b(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"comics/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",{id:(r=n.data.results[0]).id,title:r.title,description:r.description||"There is no description",pageCount:r.pageCount?"".concat(r.pageCount," p."):"No information about the number of pages",thumbnail:r.thumbnail.path+"."+r.thumbnail.extension,language:r.textObjects.language||"en-us",price:r.prices[0].price?"".concat(r.prices[0].price,"$"):"not available"});case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}();return{loading:t,error:n,getAllCharacters:h,getCharacter:d,clearError:o,getComics:function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:j,e.next=3,c("".concat(l,"comics?limit=8&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getComic:m}}},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(5),r=c(0),a=c(34),s=c(6);function i(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}c(41);var o=c(21),l=c(33),u=c(32),j=c.p+"static/media/mjolnir.61f31e18.png",b=c(2),h=function(e){var t=e.char,c=t.name,n=t.description,r=t.thumbnail,a=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(i={objectFit:"contain"}),Object(b.jsxs)("div",{className:"randomchar__block",children:[Object(b.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),Object(b.jsxs)("div",{className:"randomchar__info",children:[Object(b.jsx)("p",{className:"randomchar__name",children:c}),Object(b.jsx)("p",{className:"randomchar__descr",children:n}),Object(b.jsxs)("div",{className:"randomchar__btns",children:[Object(b.jsx)("a",{href:a,className:"button button__main",children:Object(b.jsx)("div",{className:"inner",children:"homepage"})}),Object(b.jsx)("a",{href:s,className:"button button__secondary",children:Object(b.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=function(){var e=Object(r.useState)({}),t=Object(n.a)(e,2),c=t[0],a=t[1],d=Object(l.a)(),m=d.loading,O=d.error,p=d.getCharacter,f=d.clearError,v=function(){f();var e=Math.floor(400*Math.random()+1011e3);p(e).then(x)},x=function(e){a(function(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?i(Object(c),!0).forEach((function(t){Object(s.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):i(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}({},e))};Object(r.useEffect)((function(){v()}),[]);var _=O?Object(b.jsx)(u.a,{}):null,g=m?Object(b.jsx)(o.a,{}):null,N=m||O?null:Object(b.jsx)(h,{char:c});return Object(b.jsxs)("div",{className:"randomchar",children:[_,g,N,Object(b.jsxs)("div",{className:"randomchar__static",children:[Object(b.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(b.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(b.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(b.jsx)("button",{className:"button button__main",onClick:function(){return v()},children:Object(b.jsx)("div",{className:"inner",children:"try it"})}),Object(b.jsx)("img",{src:j,alt:"mjolnir",className:"randomchar__decoration"})]})]})},m=c(8),O=(c(42),function(e){var t=e.onCharCelected,c=Object(r.useState)(!1),a=Object(n.a)(c,2),s=a[0],i=a[1],j=Object(r.useState)([]),h=Object(n.a)(j,2),d=h[0],O=h[1],p=Object(r.useState)(210),f=Object(n.a)(p,2),v=f[0],x=f[1],_=Object(r.useState)(!1),g=Object(n.a)(_,2),N=g[0],k=g[1],y=Object(l.a)(),w=y.loading,C=y.error,E=y.getAllCharacters;Object(r.useEffect)((function(){S(v,!0)}),[]);var S=function(e,t){i(!t),E(e).then(F)},F=function(e){e.length<9&&k(!0),O((function(t){return[].concat(Object(m.a)(t),Object(m.a)(e))})),i(!1),x((function(e){return e+9}))},P=Object(r.useRef)([]),D=d.map((function(e,c){var n=e.name,r=e.thumbnail,a=e.id,s={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(s={objectFit:"unset"}),Object(b.jsxs)("li",{className:"char__item",onClick:function(){t(a),function(e){P.current.forEach((function(e){return e.classList.remove("char__item_selected")})),P.current[e].classList.add("char__item_selected"),P.current[e].focus()}(c)},tabIndex:0,ref:function(e){return P.current[c]=e},children:[Object(b.jsx)("img",{src:r,alt:e.name,style:s}),Object(b.jsx)("div",{className:"char__name",children:n})]},a)})),M=C?Object(b.jsx)(u.a,{}):null,T=w&&!s?Object(b.jsx)(o.a,{}):null;return Object(b.jsxs)("div",{className:"char__list",children:[Object(b.jsxs)("ul",{className:"char__grid",children:[M,T,D]}),Object(b.jsx)("button",{className:"button button__main button__long",disabled:s,style:{display:N?"none":"block"},onClick:function(){return S(v)},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})}),p=(c(43),c(44),function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(b.jsxs)("div",{className:"skeleton",children:[Object(b.jsxs)("div",{className:"pulse skeleton__header",children:[Object(b.jsx)("div",{className:"pulse skeleton__circle"}),Object(b.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(b.jsx)("div",{className:"pulse skeleton__block"}),Object(b.jsx)("div",{className:"pulse skeleton__block"}),Object(b.jsx)("div",{className:"pulse skeleton__block"})]})]})}),f=function(e){var t=e.char,c=t.name,n=t.description,r=t.thumbnail,a=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"contain"}),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"char__basics",children:[Object(b.jsx)("img",{src:r,alt:c,style:o}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"char__info-name",children:c}),Object(b.jsxs)("div",{className:"char__btns",children:[Object(b.jsx)("a",{href:a,className:"button button__main",children:Object(b.jsx)("div",{className:"inner",children:"homepage"})}),Object(b.jsx)("a",{href:s,className:"button button__secondary",children:Object(b.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(b.jsx)("div",{className:"char__descr",children:n}),Object(b.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(b.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>11))return Object(b.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})},v=function(e){var t=e.charId,c=Object(r.useState)(null),a=Object(n.a)(c,2),s=a[0],i=a[1],j=Object(l.a)(),h=j.loading,d=j.error,m=j.getCharacter,O=j.clearError;Object(r.useEffect)((function(){v()}),[t]);var v=function(){t&&(O(),m(t).then(x))},x=function(e){i(e)},_=s||h||d?null:Object(b.jsx)(p,{}),g=d?Object(b.jsx)(u.a,{}):null,N=h?Object(b.jsx)(o.a,{}):null,k=h||d||!s?null:Object(b.jsx)(f,{char:s});return Object(b.jsxs)("div",{className:"char__info",children:[_,g,N,k]})},x=c(10),_=c(14),g=c(15),N=c(16),k=function(e){Object(g.a)(c,e);var t=Object(N.a)(c);function c(){var e;Object(x.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(_.a)(c,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(b.jsx)(u.a,{}):this.props.children}}]),c}(r.Component),y=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),c=t[0],s=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(a.a,{children:[Object(b.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(b.jsx)("title",{children:"Marvel information portal"})]}),Object(b.jsx)(k,{children:Object(b.jsx)(d,{})}),Object(b.jsxs)("div",{className:"char__content",children:[Object(b.jsx)(k,{children:Object(b.jsx)(O,{onCharCelected:function(e){s(e)}})}),Object(b.jsx)(k,{children:Object(b.jsx)(v,{charId:c})})]}),Object(b.jsx)("img",{className:"bg-decoration",src:y,alt:"vision"})]})}}}]);
//# sourceMappingURL=4.bcf9826d.chunk.js.map