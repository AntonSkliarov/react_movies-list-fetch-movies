(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),s=(a(15),a(9)),l=a(1),m=(a(16),a(17),a(18),function(e){var t=e.Title,a=e.Plot,n=void 0===a?"":a,r=e.Poster,i=e.imdbID;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("figure",{className:"image is-4by3"},c.a.createElement("img",{src:r,alt:"Film logo"}))),c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"media"},c.a.createElement("div",{className:"media-left"},c.a.createElement("figure",{className:"image is-48x48"},c.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),c.a.createElement("div",{className:"media-content"},c.a.createElement("p",{className:"title is-8"},t))),c.a.createElement("div",{className:"content"},n,c.a.createElement("br",null),c.a.createElement("a",{href:"https://www.imdb.com/title/".concat(i,"/")},"IMDB"))))}),o=function(e){var t=e.movies,a=void 0===t?[]:t;return c.a.createElement("div",{className:"movies"},a.map((function(e){return c.a.createElement(m,Object.assign({key:e.imdbID},e))})))},u=a(2),d=a.n(u),v=a(5),p=(a(20),a(6)),b=a.n(p),f="https://www.omdbapi.com/?apikey=2488e367";function E(e){return N.apply(this,arguments)}function N(){return(N=Object(v.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"&t=[").concat(t,"]"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){var t=e.addMovie,a=e.movies,r=Object(n.useState)(""),i=Object(l.a)(r,2),s=i[0],o=i[1],u=Object(n.useState)(),p=Object(l.a)(u,2),f=p[0],N=p[1],h=Object(n.useState)(!1),g=Object(l.a)(h,2),j=g[0],w=g[1],O=Object(n.useState)(!1),y=Object(l.a)(O,2),k=y[0],x=y[1],I=function(){var e=Object(v.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(s);case 2:if("False"!==(t=e.sent).Response){e.next=6;break}return x(!0),e.abrupt("return");case 6:x(!1),N(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"find-movie"},c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:b()("input",{"is-danger":k}),value:s,onChange:function(e){return function(e){x(!1),w(!1),o(e.target.value)}(e)}})),k&&c.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title")),c.a.createElement("div",{className:"field is-grouped"},c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"button",className:"button is-light",onClick:I},"Find a movie")),c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"button",className:"button is-primary",onClick:function(){a.find((function(e){return e.imdbID===f.imdbID}))?w(!0):(t(f),o(""))},disabled:!f},"Add to the list"),j&&c.a.createElement("p",{className:b()({"help is-danger":!k})},"The movie already on the list")))),c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"title"},"Preview"),f&&c.a.createElement(m,{Title:f.Title,Plot:f.Plot,Poster:f.Poster,imdbID:f.imdbID})))}var g=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"page-content"},c.a.createElement(o,{movies:a})),c.a.createElement("div",{className:"sidebar"},c.a.createElement(h,{addMovie:function(e){r((function(t){return[].concat(Object(s.a)(t),[e])}))},movies:a})))};i.a.render(c.a.createElement(g,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.792adf98.chunk.js.map