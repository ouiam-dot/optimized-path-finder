(this["webpackJsonpmy-aoo"]=this["webpackJsonpmy-aoo"]||[]).push([[0],{37:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c,r=n(7),o=n.n(r),i=n(30),a=n.n(i),s=(n(37),n(9)),l=n.n(s),u=n(13),f=n(21),d=n(12),j=n(22),x=(n(41),n(42),n(6)),p=function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),c=n[0],o=n[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"wrapper",onClick:function(){return o(!0)},children:[Object(x.jsx)("input",{type:"checkbox",checked:c}),Object(x.jsxs)("div",{className:"tooltip",children:[Object(x.jsx)("span",{onClick:function(t){o(!1),e.onSetStart(),t.stopPropagation()},children:"Start"}),Object(x.jsx)("span",{onClick:function(t){o(!1),e.onSetWall(),t.stopPropagation()},children:"Wall"}),Object(x.jsx)("span",{onClick:function(t){o(!1),e.onSetEnd(),t.stopPropagation()},children:"End"}),Object(x.jsx)("span",{onClick:function(e){o(!1),e.stopPropagation()},children:"Cancel"})]})]}),Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"},children:[Object(x.jsxs)("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 22",id:"icon-01",children:[Object(x.jsx)("path",{d:"M18.29,5.76l-.7-1.37A2.59,2.59,0,0,0,15.29,3H10.71a2.59,2.59,0,0,0-2.3,1.39l-.7,1.37a2.6,2.6,0,0,1-2.3,1.39H3.58A2.57,2.57,0,0,0,1,9.71V20.44A2.57,2.57,0,0,0,3.58,23H22.42A2.57,2.57,0,0,0,25,20.44V9.71a2.57,2.57,0,0,0-2.58-2.56H20.59A2.6,2.6,0,0,1,18.29,5.76Z",transform:"translate(0 -2)"}),Object(x.jsx)("ellipse",{cx:"13",cy:"12.99",rx:"4.52",ry:"4.49"})]}),Object(x.jsxs)("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 22",id:"icon-02",children:[Object(x.jsx)("line",{x1:"25",y1:"12.58",x2:"25",y2:"9.42"}),Object(x.jsx)("line",{x1:"21",y1:"14.16",x2:"21",y2:"7.84"}),Object(x.jsx)("line",{x1:"17",y1:"15.74",x2:"17",y2:"6.26"}),Object(x.jsx)("line",{x1:"13",y1:"21",x2:"13",y2:"1"}),Object(x.jsx)("line",{x1:"9",y1:"17.32",x2:"9",y2:"4.68"}),Object(x.jsx)("line",{x1:"5",y1:"13.63",x2:"5",y2:"8.37"}),Object(x.jsx)("line",{x1:"1",y1:"11.53",x2:"1",y2:"10.47"})]}),Object(x.jsxs)("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 22",id:"icon-03",children:[Object(x.jsx)("polygon",{points:"8.08 10 1 21 25 21 18.09 12.66 13.78 17.45 8.08 10"}),Object(x.jsx)("circle",{cx:"8",cy:"4",r:"3"})]})]})]})},b=(n(44),function(e){return Object(x.jsxs)("div",{id:"play_panel",children:[Object(x.jsx)("p",{children:"Choose end node and start node on grid"}),Object(x.jsx)("button",{className:"menu-button",onClick:function(){e.onStartSearch()},children:"Start Search"}),Object(x.jsx)("button",{className:"menu-button",onClick:function(){e.clearAll()},children:"Clear All"}),Object(x.jsx)("button",{className:"menu-button",onClick:function(){e.clearWalls()},children:"Clear Walls"})]})});!function(e){e.wall="#6e97cc",e.start="#3CE1BB",e.end="#ff4154"}(c||(c={}));var y="#3CE1BB",h=50;function O(e,t,n){return e.x+1===t||e.y+1===n}function v(e){var t=[],n=m();return e.points.forEach((function(e){var c={x:e.x*h+n.x,y:e.y*h+n.y};t.push(c.x),t.push(c.y)})),t}function m(){var e=function(e){for(var t=0,n=0;null!=e;t+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent);return{x:t,y:n}}(document.getElementById("board"));return{x:e.x+h,y:e.y+h}}var w=function(){var e=Object(r.useState)(new Array(15).fill(0).map((function(e){return new Array(15).fill(0)}))),t=Object(d.a)(e,1)[0],n=Object(r.useState)([]),o=Object(d.a)(n,2),i=o[0],a=o[1],s=Object(r.useState)([]),w=Object(d.a)(s,2),g=w[0],S=w[1],C=Object(r.useState)(),k=Object(d.a)(C,2),I=k[0],N=k[1],B=Object(r.useState)(),E=Object(d.a)(B,2),P=E[0],W=E[1],F=function(){var e=[];return t.forEach((function(t,n){var c=[];t.forEach((function(e,t){var r=i.find((function(e){return e.center.y===n&&e.center.x===t}));r&&("wall"===r.type||"start"===r.type&&r!==I||"end"===r.type&&r!==P)?c.push(1):c.push(0)})),e.push(c)})),e},H=function(e){return!!g.find((function(t){return t.points.find((function(t){return t.x===e.x&&t.y===e.y}))}))},z=function(e){var t=i.findIndex((function(t){return t.center.x===e.center.x&&t.center.y===e.center.y}));if(console.log(H(e.center)),t>=0){var n=i[t];if("start"===n.type||"end"===n.type)return}else if(H(e.center))return;if("start"===e.type)if(I){var c=i.findIndex((function(e){return e.center.x===I.center.x&&e.center.y===I.center.y}));i.splice(c,1),N(e)}else N(e);else if("end"===e.type)if(P){var r=i.findIndex((function(e){return e.center.x===P.center.x&&e.center.y===P.center.y}));i.splice(r,1),W(e)}else W(e);t>=0&&i.splice(t,1),a([].concat(Object(f.a)(i),[e]))},G=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I||!P){e.next=12;break}return t=F(),console.log(t),e.next=5,A({start:I.center,end:P.center,grid:t});case 5:n=e.sent,c=n.data,console.log(c),(r=c.find((function(e){return e.isShortest})))&&S([].concat(Object(f.a)(g),[r])),N(void 0),W(void 0);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){var t=i.find((function(t){return t.center.x===e.x&&t.center.y===e.y}));return t?"start"===t.type?c.start:"end"===t.type?c.end:c.wall:H(e)?y:c.wall};return Object(x.jsxs)("div",{id:"board",className:"board",children:[Object(x.jsx)(b,{onStartSearch:G,clearAll:function(){S([]),N(void 0),W(void 0),a([])},clearWalls:function(){var e=[];i.forEach((function(t){"wall"!==t.type&&e.push(t)})),a(e)}}),t.map((function(e,n){return Object(x.jsx)("div",{className:"row",children:e.map((function(r,o){var i={x:o,y:n};return Object(x.jsx)("div",{className:"cell",children:!O(i,e.length,t.length)&&Object(x.jsx)("div",{className:"dot",style:{backgroundColor:L(i)},onClick:function(){console.log("x :".concat(i.x," , y: ").concat(i.y))},children:Object(x.jsx)(p,{onSetEnd:function(){z({center:i,type:"end",color:c.end})},onSetStart:function(){z({center:i,type:"start",color:c.start})},onSetWall:function(){z({center:i,type:"wall",color:c.wall})}})})},i.x)}))},n)})),Object(x.jsx)(j.d,{width:window.innerWidth,height:window.innerHeight,children:Object(x.jsxs)(j.a,{children:[i.map((function(e){var t=function(e){var t=m();return{x:e.center.x*h-25+t.x,y:e.center.y*h-25+t.y}}(e);return Object(x.jsx)(j.c,{x:t.x,y:t.y,width:h,height:h,onClick:function(e){},fill:e.color})})),g.map((function(e){return Object(x.jsx)(j.b,{points:v(e),strokeWidth:4,stroke:e.isShortest?"#ffffff":y})}))]})})]})},g=(n(45),n(32)),S=n(28),C=Object(g.a)({apiKey:"AIzaSyAOh33-NCPkemiF_SIOVvSRP-AeGs_-wxk",authDomain:"optimized-path-finder-1a74f.firebaseapp.com",projectId:"optimized-path-finder-1a74f",storageBucket:"optimized-path-finder-1a74f.appspot.com",messagingSenderId:"221335645760",appId:"1:221335645760:web:ed229600239c9909a339a5",measurementId:"G-1ZGCWNPC48"}),k=Object(S.a)(C),A=Object(S.b)(k,"pathfinding");var I=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(w,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};a.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),N()}},[[46,1,2]]]);
//# sourceMappingURL=main.afa8af87.chunk.js.map