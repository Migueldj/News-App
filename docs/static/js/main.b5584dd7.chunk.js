(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(11),r=n.n(c),i=n(7),s=n(45),o=n(43),j=n(46),d=n(1),l=function(e){var t=e.toggleCategory,n=function(e){t(e)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.a,{bg:"dark",variant:"dark",expand:"sm",sticky:"top",children:Object(d.jsxs)(o.a,{fluid:!0,children:[Object(d.jsx)(s.a,{bg:"dark",variant:"dark",children:Object(d.jsx)(o.a,{children:Object(d.jsxs)(s.a.Brand,{children:[Object(d.jsx)("img",{alt:"",src:"https://cdn.pixabay.com/photo/2014/04/02/17/08/globe-308065_960_720.png",width:"30",height:"30",className:"d-inline-block align-top"})," ","News API"]})})}),Object(d.jsx)(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(s.a.Collapse,{id:"basic-navbar-nav",className:"navbar navbar-expand-sm bg-dark navbar-dark",children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(j.a.Link,{onClick:function(){return n(0)},children:"Inicio"}),Object(d.jsx)(j.a.Link,{onClick:function(){return n(1)},children:"Econom\xeda"}),Object(d.jsx)(j.a.Link,{onClick:function(){return n(2)},children:"Entretenimiento"}),Object(d.jsx)(j.a.Link,{onClick:function(){return n(3)},children:"Negocios"})]})})]})})})},b=n(2),u=n(44),h=n(47),p=function(e){var t=e.description,n=e.title,a=e.date,c=e.image,r=e.url,i=c&&c.thumbnail.contentUrl;return Object(d.jsx)(h.a,{style:{width:"20rem"},children:Object(d.jsxs)("a",{href:r,children:[Object(d.jsx)(h.a.Img,{variant:"top",src:i,alt:""}),Object(d.jsxs)(h.a.Body,{children:[Object(d.jsx)(h.a.Title,{children:n}),Object(d.jsx)(h.a.Text,{children:"".concat(t.substr(0,120),"...")}),Object(d.jsxs)(h.a.Subtitle,{children:[Object(d.jsx)("img",{id:"logo",src:"https://preview.pixlr.com/images/800wm/100/1/1001503340.jpg",alt:""}),a.substr(0,10)]})]})]})})},x=function(e){var t=e.category,n=e.news;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(o.a,{fluid:!0,className:"animate__animated animate__fadeInUp",children:Object(d.jsx)(u.a,{xs:2,md:4,lg:6,children:n.map((function(e){return Object(d.jsx)(p,Object(b.a)({},e),e.title)}))})})]})},m=n(19),O=n.n(m),g=n(26),f=function(){var e=Object(g.a)(O.a.mark((function e(t){var n,a,c,r,i,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="Inicio"===t?"hoy":t,a="Inicio"===t?"Day":"Week",e.next=4,fetch("https://bing-news-search1.p.rapidapi.com/news/search?q=".concat(encodeURI(n),"&safeSearch=Off&textFormat=Raw&freshness=").concat(a,"&mkt=es-MX&sortBy=Date&count=100"),{method:"GET",headers:{"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"03192d6a16msh50e40a23df72d9fp1e7878jsn3f64491b9687"}});case 4:return c=e.sent,e.next=7,c.json();case 7:return r=e.sent,i=r.value,s=i.map((function(e){return{description:e.description,title:e.name,date:e.datePublished,image:e.image,url:e.url}})),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(a.useState)("Inicio"),t=Object(i.a)(e,2),n=t[0],c=t[1],r=function(e){var t=Object(a.useState)({data:[]}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){r({data:e})}))}),[e]),c}(n),s=r.data;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l,{toggleCategory:function(e){c(["Inicio","Econom\xeda Digital","Entretenimiento","Negocios"][e])}}),Object(d.jsx)(x,{news:s,category:n})]})};n(39),n(40);r.a.render(Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b5584dd7.chunk.js.map