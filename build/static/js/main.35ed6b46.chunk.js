(this["webpackJsonprem-graph-web"]=this["webpackJsonprem-graph-web"]||[]).push([[0],{13:function(e,t,r){e.exports=r(29)},18:function(e,t,r){},29:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n),i=r(9),o=r.n(i),c=(r(18),r(1)),u=r.n(c),s=r(2),d=r(7),l=r.n(d),p=r(10),f=r.n(p),h=r(11),m=r.n(h),g=r(0),b=r(12),w=(r(28),r(4)),v=function(e){return window.RemNoteAPI.v0.get(e)};var y=function e(t,r,n){var a=t.indexOf(r),i=a+1;if(1===n)return a;var o=e(t.slice(i),r,n-1);return-1===o?-1:i+o};function x(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""}function k(e){return(new DOMParser).parseFromString("<div>".concat(e,"</div>"),"text/html").body.firstChild}var _=[],O=[];function j(e){return C.apply(this,arguments)}function C(){return(C=Object(s.a)(u.a.mark((function e(t){var r,n,a,i,o,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=c.length>1&&void 0!==c[1]?c[1]:[],n=c.length>2?c[2]:void 0,a=c.length>3?c[3]:void 0,!Array.isArray(t)){e.next=11;break}return e.next=6,Promise.all(t.filter((function(e){return"string"===typeof e||"q"===e.i||"i"===e.i||"m"===e.i})).map(function(){var e=Object(s.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!==typeof t){e.next=2;break}return e.abrupt("return",t);case 2:if("m"!==t.i){e.next=4;break}return e.abrupt("return",t.text);case 4:if("i"!==t.i){e.next=6;break}return e.abrupt("return","<img src=".concat(t.url," width=").concat(t.width," height={r.height} />"));case 6:if(!(n=[].concat(_,Object(w.a)(r)).find((function(e){return e._id===t._id})))){e.next=9;break}return e.abrupt("return",{remId:n._id,name:n.name});case 9:return e.next=11,v(t._id);case 11:return a=e.sent,_.push(a),e.abrupt("return",{remId:a._id,name:a.name});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return i=e.sent,e.next=9,Promise.all(i.map(function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!==typeof t){e.next=2;break}return e.abrupt("return",t);case 2:if(!a){e.next=10;break}return e.t1='<a href="#" data-source="'.concat(n,'" data-target="').concat(t.remId,'" onclick="handleFocus(this)">'),e.next=6,j(t.name,r,void 0,!1);case 6:e.t2=e.sent,e.t0=e.t1.concat.call(e.t1,e.t2,"</a>"),e.next=11;break;case 10:e.t0=j(t.name,r,void 0,!1);case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 9:return o=e.sent,e.abrupt("return",o.join(""));case 11:return e.abrupt("return","");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return I.apply(this,arguments)}function I(){return(I=Object(s.a)(u.a.mark((function e(t){var r,n,a,i,o,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=c.length>1&&void 0!==c[1]?c[1]:[],n=c.length>2?c[2]:void 0,a=c.length>3?c[3]:void 0,!Array.isArray(t)){e.next=11;break}return e.next=6,Promise.all(t.filter((function(e){return"string"===typeof e||"q"===e.i||"i"===e.i||"m"===e.i})).map(function(){var e=Object(s.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!==typeof t){e.next=2;break}return e.abrupt("return",t);case 2:if("m"!==t.i){e.next=4;break}return e.abrupt("return",t.text);case 4:if("i"!==t.i){e.next=6;break}return e.abrupt("return","<img src=".concat(t.url," width=").concat(t.width," height={r.height} />"));case 6:if(!(n=[].concat(O,Object(w.a)(r)).find((function(e){return e._id===t._id})))){e.next=9;break}return e.abrupt("return",{remId:n._id,name:n.name});case 9:return e.next=11,v(t._id);case 11:return a=e.sent,O.push(a),e.abrupt("return",{remId:n._id,name:n.name});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return i=e.sent,e.next=9,Promise.all(i.map(function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!==typeof t){e.next=2;break}return e.abrupt("return",t);case 2:if("m"!==t.i){e.next=4;break}return e.abrupt("return",t.text);case 4:if(!a){e.next=12;break}return e.t1='<a href="#" data-source="'.concat(n,'" data-target="').concat(t.remId,'" onclick="handleFocus(this)">'),e.next=8,j(t.name,r,void 0,!1);case 8:e.t2=e.sent,e.t0=e.t1.concat.call(e.t1,e.t2,"</a>"),e.next=13;break;case 12:e.t0=j(t.name,r,void 0,!1);case 13:return e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 9:return o=e.sent,e.abrupt("return",o.join(""));case 11:return e.abrupt("return","");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(s.a)(u.a.mark((function e(t){var r,n,a,i,o,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=4;break;case 4:return e.next=6,window.RemNoteAPI.v0.get_context();case 6:e.t0=e.sent;case 7:r=e.t0,e.next=14;break;case 11:e.t1=e.sent,e.next=17;break;case 14:return e.next=16,window.RemNoteAPI.v0.get(r.documentId);case 16:e.t1=e.sent;case 17:return n=e.t1,e.next=20,Promise.all(n.visibleRemOnDocument.map((function(e){return v(e)})));case 20:return a=e.sent.filter((function(e){return e.found})),e.next=23,Promise.all(a.map((function(e){return j(e.name,a,e._id,!0)})));case 23:return i=e.sent,o=i.map((function(e){return x(e).split(" ").map((function(e,t){return t%2===0?e:e+"\n"})).join(" ")})),e.next=27,Promise.all(a.map((function(e){return E(e.content,a,e._id,!0)})));case 27:return c=e.sent,a.push.apply(a,O),s=a.map((function(e,t){var r=o[t],n=y(r," ",10),a=n>=0?"".concat(r.substr(0,n),"..."):r;return{data:{id:e._id,title:a,fullTitle:i[t],content:c[t],nodeColor:e.isDocument?"yellow":"red"}}})).filter((function(e){return e.data.title})),a.forEach((function(e){e.children.length>0&&s.push.apply(s,Object(w.a)(e.children.map((function(t){return{data:{source:e._id,target:t,target_arrow_shape:"diamond"}}})))),Array.isArray(e.content)&&s.push.apply(s,Object(w.a)(e.content.filter((function(e){return"q"===e.i&&!s.some((function(t){return t.data.target===e._id&&"vee"===t.data.target_arrow_shape}))})).map((function(t){return{data:{source:e._id,target:t._id,target_arrow_shape:"vee"}}})))),Array.isArray(e.name)&&s.push.apply(s,Object(w.a)(e.name.filter((function(e){return"q"===e.i&&!s.some((function(t){return t.data.target===e._id&&"vee"===t.data.target_arrow_shape}))})).map((function(t){return{data:{source:e._id,target:t._id,target_arrow_shape:"vee"}}}))))})),e.abrupt("return",s);case 32:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(e){return A.apply(this,arguments)};function F(e){var t=e.popperRef(),r=document.createElement("div");e.tippy=Object(g.o)(r,{onCreate:function(e){e.popperInstance.reference=t},lazy:!1,plugins:[b.a],content:function(){var t=document.createElement("div"),r=e.data(),n=r.fullTitle,a=r.content,i=document.createElement("h3");if(i.appendChild(k(n)),t.appendChild(i),a){var o=document.createElement("div");o.appendChild(k(a)),t.appendChild(o)}return t},arrow:!0,placement:"bottom",hideOnClick:!1,multiple:!0,interactive:!0,sticky:!0,appendTo:document.body,trigger:"manual"})}function R(){return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(u.a.mark((function e(){var t,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P("GH5MRkMCJ6R6aoLbB");case 2:t=e.sent,r=t.filter((function(e){return!!e.data.title||t.some((function(t){return t.data.id===e.data.source}))&&t.some((function(t){return t.data.id===e.data.target}))})),l.a.use(m.a),l.a.use(f.a),(n=l()({container:document.getElementById("cy"),elements:r,style:[{selector:"node",style:{"background-color":"data(nodeColor)",label:"data(title)",color:" #66ff66","font-size":"10px","text-wrap":"wrap","text-overflow-wrap":"anywhere"}},{selector:"node[[degree = 0]]",style:{width:8,height:8}},{selector:"node[[degree >= 1]][[degree <= 3]]",style:{width:10,height:10}},{selector:"node[[degree > 3]][[degree <= 5]]",style:{width:12,height:12}},{selector:"node[[degree > 5]][[degree <= 7]]",style:{width:14,height:14}},{selector:"node[[degree > 7]][[degree <= 9]]",style:{width:16,height:16}},{selector:"node[[degree > 9]]",style:{width:18,height:18}},{selector:"edge",style:{width:1,"line-color":"#ccc","target-arrow-color":"#ccc","target-arrow-shape":"data(target_arrow_shape)","curve-style":"bezier","arrow-scale":1,label:"data(label)",color:"green","font-size":"7px","text-wrap":"wrap"}},{selector:"node.highlight",style:{"border-color":"#FFF","border-width":"1px"}},{selector:"node.semitransp",style:{opacity:"0.2"}},{selector:"edge.highlight",style:{"mid-target-arrow-color":"#FFF"}},{selector:"edge.semitransp",style:{opacity:"0.2"}}],layout:{name:"cose-bilkent",quality:"default",nodeDimensionsIncludeLabels:!0,idealEdgeLength:50}})).ready((function(){window.cy=n,n.elements().forEach((function(e){e.isNode()&&(F(e),e.unbind("select"),e.bind("select",(function(e){return e.target.tippy.show()})),e.unbind("unselect"),e.bind("unselect",(function(e){return e.target.tippy.hide()})))})),n.on("mouseover","node",(function(e){var t=e.target;n.elements().difference(t.outgoers().union(t.incomers())).not(t).addClass("semitransp"),t.addClass("highlight").outgoers().union(t.incomers()).addClass("highlight")})),n.on("mouseout","node",(function(e){var t=e.target;n.elements().removeClass("semitransp"),t.removeClass("highlight").outgoers().union(t.incomers()).removeClass("highlight")}))}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a.a.createElement("div",null,a.a.createElement("div",{id:"cy"}))}window.handleFocus=function(e){var t=window.cy;t.fit(t.$("#".concat(e.dataset.source,", #").concat(e.dataset.target)),100)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.35ed6b46.chunk.js.map