(this["webpackJsonpmy-aoo"]=this["webpackJsonpmy-aoo"]||[]).push([[0],{37:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var c,r=n(7),i=n.n(r),a=n(30),o=n.n(a),s=(n(37),n(9)),l=n.n(s),u=n(13),j=n(20),d=n(11),f=n(21),x=(n(41),n(42),n(4)),b=function(t){var e=Object(r.useState)(!1),n=Object(d.a)(e,2),c=n[0],i=n[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"wrapper",onClick:function(){return i(!0)},children:[Object(x.jsx)("input",{type:"checkbox",checked:c}),Object(x.jsxs)("div",{className:"tooltip",children:[Object(x.jsx)("span",{onClick:function(e){i(!1),t.onSetStart(),e.stopPropagation()},children:"Start"}),Object(x.jsx)("span",{onClick:function(e){i(!1),t.onSetWall(),e.stopPropagation()},children:"Wall"}),Object(x.jsx)("span",{onClick:function(e){i(!1),t.onSetEnd(),e.stopPropagation()},children:"End"}),Object(x.jsx)("span",{onClick:function(t){i(!1),t.stopPropagation()},children:"Cancel"})]})]}),Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"},children:[Object(x.jsxs)("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 22",id:"icon-01",children:[Object(x.jsx)("path",{d:"M18.29,5.76l-.7-1.37A2.59,2.59,0,0,0,15.29,3H10.71a2.59,2.59,0,0,0-2.3,1.39l-.7,1.37a2.6,2.6,0,0,1-2.3,1.39H3.58A2.57,2.57,0,0,0,1,9.71V20.44A2.57,2.57,0,0,0,3.58,23H22.42A2.57,2.57,0,0,0,25,20.44V9.71a2.57,2.57,0,0,0-2.58-2.56H20.59A2.6,2.6,0,0,1,18.29,5.76Z",transform:"translate(0 -2)"}),Object(x.jsx)("ellipse",{cx:"13",cy:"12.99",rx:"4.52",ry:"4.49"})]}),Object(x.jsxs)("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 22",id:"icon-02",children:[Object(x.jsx)("line",{x1:"25",y1:"12.58",x2:"25",y2:"9.42"}),Object(x.jsx)("line",{x1:"21",y1:"14.16",x2:"21",y2:"7.84"}),Object(x.jsx)("line",{x1:"17",y1:"15.74",x2:"17",y2:"6.26"}),Object(x.jsx)("line",{x1:"13",y1:"21",x2:"13",y2:"1"}),Object(x.jsx)("line",{x1:"9",y1:"17.32",x2:"9",y2:"4.68"}),Object(x.jsx)("line",{x1:"5",y1:"13.63",x2:"5",y2:"8.37"}),Object(x.jsx)("line",{x1:"1",y1:"11.53",x2:"1",y2:"10.47"})]}),Object(x.jsxs)("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 22",id:"icon-03",children:[Object(x.jsx)("polygon",{points:"8.08 10 1 21 25 21 18.09 12.66 13.78 17.45 8.08 10"}),Object(x.jsx)("circle",{cx:"8",cy:"4",r:"3"})]})]})]})};!function(t){t.wall="#6e97cc",t.start="#3CE1BB",t.end="#ff4154"}(c||(c={}));var p="#3CE1BB",h="#ffffff",y=(n(44),function(t){return Object(x.jsxs)("div",{id:"play_panel",children:[Object(x.jsx)("p",{children:"Choose end node and start node on grid"}),Object(x.jsx)("button",{className:"menu-button",onClick:function(){t.onStartSearch()},children:"Start search"}),Object(x.jsx)("button",{className:"menu-button",onClick:function(){t.clearAll()},children:"Clear all"}),Object(x.jsx)("button",{className:"menu-button",onClick:function(){t.clearWalls()},children:"Clear walls"}),Object(x.jsx)("button",{className:"menu-large-button",onClick:function(){t.ShowAllPaths()},children:"Show all paths"}),Object(x.jsxs)("div",{className:"map",children:[Object(x.jsxs)("div",{className:"map-item",children:[Object(x.jsx)("div",{className:"line",style:{backgroundColor:h}}),Object(x.jsx)("div",{className:"instruction",children:"The shortest path with minimal turns"})]}),Object(x.jsxs)("div",{className:"map-item",children:[Object(x.jsx)("div",{className:"line",style:{backgroundColor:p}}),Object(x.jsx)("div",{className:"instruction",children:"One of the shortest paths"})]})]})]})}),O=50;function m(t,e,n){return t.x+1===e||t.y+1===n}function v(t){var e=[],n=w();return t.points.forEach((function(t){var c={x:t.x*O+n.x,y:t.y*O+n.y};e.push(c.x),e.push(c.y)})),e}function w(){var t=function(t){for(var e=0,n=0;null!=t;e+=t.offsetLeft,n+=t.offsetTop,t=t.offsetParent);return{x:e,y:n}}(document.getElementById("board"));return{x:t.x+O,y:t.y+O}}var g=function(){var t=Object(r.useState)(new Array(15).fill(0).map((function(t){return new Array(15).fill(0)}))),e=Object(d.a)(t,1)[0],n=Object(r.useState)([]),i=Object(d.a)(n,2),a=i[0],o=i[1],s=Object(r.useState)([]),g=Object(d.a)(s,2),S=g[0],k=g[1],C=Object(r.useState)(),N=Object(d.a)(C,2),I=N[0],P=N[1],B=Object(r.useState)(),E=Object(d.a)(B,2),W=E[0],F=E[1],H=Object(r.useState)(),z=Object(d.a)(H,2),T=z[0],G=z[1],L=function(){var t=[];return e.forEach((function(e,n){var c=[];e.forEach((function(t,e){var r=a.find((function(t){return t.center.y===n&&t.center.x===e}));r&&("wall"===r.type||"start"===r.type&&r!==I||"end"===r.type&&r!==W)?c.push(1):c.push(0)})),t.push(c)})),t},V=function(t){var e=S.find((function(e){return e.points.find((function(e){return e.x===t.x&&e.y===t.y}))}));return!(!e||!e.isShortest&&!T)},_=function(t){var e=a.findIndex((function(e){return e.center.x===t.center.x&&e.center.y===t.center.y}));if(console.log(V(t.center)),e>=0){var n=a[e];if("start"===n.type||"end"===n.type)return}else if(V(t.center))return;if("start"===t.type)if(I){var c=a.findIndex((function(t){return t.center.x===I.center.x&&t.center.y===I.center.y}));a.splice(c,1),P(t)}else P(t);else if("end"===t.type)if(W){var r=a.findIndex((function(t){return t.center.x===W.center.x&&t.center.y===W.center.y}));a.splice(r,1),F(t)}else F(t);e>=0&&a.splice(e,1),o([].concat(Object(j.a)(a),[t]))},D=function(){var t=Object(u.a)(l.a.mark((function t(){var e,n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!I||!W){t.next=11;break}return e=L(),console.log(e),t.next=5,A({start:I.center,end:W.center,grid:e});case 5:n=t.sent,c=n.data,console.log(c),k([].concat(Object(j.a)(S),Object(j.a)(c))),P(void 0),F(void 0);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),J=function(t){var e=a.find((function(e){return e.center.x===t.x&&e.center.y===t.y}));return e?"start"===e.type?c.start:"end"===e.type?c.end:c.wall:V(t)?p:c.wall};return Object(x.jsxs)("div",{className:"ctn-board",children:[Object(x.jsxs)("div",{id:"board",className:"board",children:[e.map((function(t,n){return Object(x.jsx)("div",{className:"row",children:t.map((function(r,i){var a={x:i,y:n};return Object(x.jsx)("div",{className:"cell",children:!m(a,t.length,e.length)&&Object(x.jsx)("div",{className:"dot",style:{backgroundColor:J(a)},onClick:function(){console.log("x :".concat(a.x," , y: ").concat(a.y))},children:Object(x.jsx)(b,{onSetEnd:function(){_({center:a,type:"end",color:c.end})},onSetStart:function(){_({center:a,type:"start",color:c.start})},onSetWall:function(){_({center:a,type:"wall",color:c.wall})}})})},a.x)}))},n)})),Object(x.jsx)(f.d,{width:window.innerWidth,height:window.innerHeight,children:Object(x.jsxs)(f.a,{children:[a.map((function(t){var e=function(t){var e=w();return{x:t.center.x*O-25+e.x,y:t.center.y*O-25+e.y}}(t);return Object(x.jsx)(f.c,{x:e.x,y:e.y,width:O,height:O,onClick:function(t){},fill:t.color})})),S.filter((function(t){return t.isShortest})).map((function(t){return Object(x.jsx)(f.b,{points:v(t),strokeWidth:4,stroke:h})})),T&&S.filter((function(t){return!t.isShortest})).map((function(t){return Object(x.jsx)(f.b,{points:v(t),strokeWidth:4,stroke:p})}))]})})]}),Object(x.jsx)(y,{onStartSearch:D,clearWalls:function(){var t=[];a.forEach((function(e){"wall"!==e.type&&t.push(e)})),o(t)},clearAll:function(){k([]),P(void 0),F(void 0),o([])},ShowAllPaths:function(){return G(!T)}})]})},S=(n(45),n(32)),k=n(28),C=Object(S.a)({apiKey:"AIzaSyAOh33-NCPkemiF_SIOVvSRP-AeGs_-wxk",authDomain:"optimized-path-finder-1a74f.firebaseapp.com",projectId:"optimized-path-finder-1a74f",storageBucket:"optimized-path-finder-1a74f.appspot.com",messagingSenderId:"221335645760",appId:"1:221335645760:web:ed229600239c9909a339a5",measurementId:"G-1ZGCWNPC48"}),N=Object(k.a)(C),A=Object(k.b)(N,"pathfinding");var I=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(g,{})})},P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),i(t),a(t)}))};o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),P()}},[[46,1,2]]]);
//# sourceMappingURL=main.ccef83d7.chunk.js.map