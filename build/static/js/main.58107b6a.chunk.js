(this.webpackJsonpspotifymusicmasternewui=this.webpackJsonpspotifymusicmasternewui||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/logo3.a1f673e7.png"},21:function(e,t,n){e.exports=n(64)},26:function(e,t,n){},27:function(e,t,n){},44:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){e.exports=n.p+"static/media/profile2.e4498a31.png"},62:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(17),r=n.n(c),i=(n(26),n(27),"796082e2f9fcc201acce08bb47153388"),l={tranding:"/trending/all/week?api_key=".concat(i,"&language=en-US"),netflix_original:"/discover/tv?api_key=".concat(i,"&with_networks=213"),top_rated:"/movie/top_rated?api_key=".concat(i,"&language=en-US"),action_movies:"/discover/movie?api_key=".concat(i,"&with_genres=28"),comedy_movies:"/discover/movie?api_key=".concat(i,"&with_genres=35"),horror_movies:"/discover/movie?api_key=".concat(i,"&with_genres=27"),romance_movies:"/discover/movie?api_key=".concat(i,"&with_genres=10749"),documentaries:"/discover/movie?api_key=".concat(i,"&with_genres=99")},s=n(3),m=n(4),u=n.n(m),h=(n(44),n(5)),d=n(6),f=n.n(d),g=function(e){var t=e.title,n=e.fetchUrl,c=e.isLargeRow,r=Object(a.useState)([]),i=Object(s.a)(r,2),l=i[0],m=i[1],d=Object(a.useState)(""),g=Object(s.a)(d,2),v=g[0],p=g[1];Object(a.useEffect)((function(){u()({url:"".concat("https://api.themoviedb.org/3").concat(n),method:"GET"}).then((function(e){m(e.data.results)}))}),[]);return o.a.createElement("div",{className:"main-row"},o.a.createElement("h3",{className:"row-title"},t),o.a.createElement("div",{className:"row-images"},l.map((function(e){return o.a.createElement("img",{key:e.id,onClick:function(){return function(e){console.log(e),v?p(""):f()(e.name?e.name:e.title).then((function(e){console.log(e);var t=e.split("v=")[1].substring(0,11);p(t)})).catch((function(){return alert("Unable to find video Try after refreshing...")}))}(e)},title:c?e.name:e.original_title,className:"row-image ".concat(c&&"row-image-large"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(c?e.poster_path:e.backdrop_path)})}))),v&&o.a.createElement(h.a,{videoId:v,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))};n(60);var v=function(e){var t=e.fetchUrl,n=Object(a.useState)([]),c=Object(s.a)(n,2),r=c[0],i=c[1],l=Object(a.useState)(""),m=Object(s.a)(l,2),d=m[0],g=m[1];return Object(a.useEffect)((function(){u()({url:"".concat("https://api.themoviedb.org/3").concat(t),method:"GET"}).then((function(e){var t=e.data.results.length,n=Math.floor(Math.random()*(t-1));i(e.data.results[n])}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"banner",style:{backgroundImage:"url(\n          'https://image.tmdb.org/t/p/original/".concat(r.backdrop_path,"'\n        )"),backgroundPosition:"center center",backgroundSize:"cover",width:"100%",height:"auto"},onClick:function(){d&&g("")}},o.a.createElement("div",{className:"banner-contents"},o.a.createElement("h1",{className:"banner-title"},r.name||r.title||r.original_name),o.a.createElement("div",{className:"banner-buttons"},o.a.createElement("button",{className:"banner-button",onClick:function(){return function(e){d?g(""):f()(e.name?e.name:e.title).then((function(e){var t=e.split("v=")[1].substring(0,11);g(t)})).catch((function(){return alert("Unable to find video Try after refreshing...")}))}(r)}},"Play Trailer")),o.a.createElement("p",{className:"banner-description"},r.overview))),d&&o.a.createElement(h.a,{videoId:d,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))},p=n(20),b=n.n(p);n(61),n(62);var w=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?c(!0):c(!1)})),function(){window.removeEventListener("scroll")}}),[]),o.a.createElement("div",{className:"nav px-3 ".concat(n&&"nav-black")},o.a.createElement("img",{className:"nav-logo",src:b.a,width:"100",height:"50"}),o.a.createElement("a",{href:"https://www.github.com/khushwantkodecha",target:"blank",style:{color:"red",fontWeight:700,textDecoration:"none"}},"Fork Me On Github"))},E=function(){return o.a.createElement("div",{className:"app"},o.a.createElement(w,null),o.a.createElement(v,{fetchUrl:l.netflix_original}),o.a.createElement(g,{title:"NETFLIX-ORIGINALS",fetchUrl:l.netflix_original,isLargeRow:!0}),o.a.createElement(g,{title:"TOP-RATED",fetchUrl:l.top_rated}),o.a.createElement(g,{title:"TRANDING",fetchUrl:l.tranding}),o.a.createElement(g,{title:"ROMANCE",fetchUrl:l.romance_movies}),o.a.createElement(g,{title:"ACTION",fetchUrl:l.action_movies}),o.a.createElement(g,{title:"HORROR",fetchUrl:l.horror_movies}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(63);r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.58107b6a.chunk.js.map