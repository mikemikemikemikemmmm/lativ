(function(t){function e(e){for(var n,r,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)r=c[u],s[r]&&d.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s={app:0},i=[];function c(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"affe00bd","chunk-1f714e68":"ed31d3d9","chunk-365b9031":"b3379390","chunk-6085c68a":"e5effba7","chunk-7ecc608e":"6629af66","chunk-9d996f76":"47b8c94b"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={about:1,"chunk-1f714e68":1,"chunk-365b9031":1,"chunk-7ecc608e":1,"chunk-9d996f76":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"95228b73","chunk-1f714e68":"4c91e960","chunk-365b9031":"a3fb8036","chunk-6085c68a":"31d6cfe0","chunk-7ecc608e":"757b0324","chunk-9d996f76":"410160fc"}[t]+".css",s=o.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.request=n,delete r[t],f.parentNode.removeChild(f),a(i)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[t]=0}));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,a){n=s[t]=[e,a]});e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}s[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/lativ/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-auto",attrs:{id:"app"}},[a("Nav"),a("router-view"),a("Foot")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"position-relative bg-white"},[a("section",{staticClass:"mt-2 d-none d-sm-flex flex-column mb-3 container"},[t._m(0),a("div",{staticClass:"row d-flex"},[a("router-link",{staticClass:"nav-logo col-2 text-primary h1 mb-0",attrs:{to:"/"}},[t._v("\n        Lativ\n      ")]),a("div",{staticClass:"col-10 d-flex align-items-end"},[a("ul",{staticClass:"d-inline-flex align-items-center mb-0"},[a("li",{staticClass:"px-2"},[a("router-link",{staticClass:"nav_link px-2",class:{nav_link_select:"women"===t.$route.params.gender},attrs:{to:{name:"cardListIndex",params:{gender:"women"}}}},[t._v("\n              WOMEN\n            ")])],1),a("div",{staticClass:"py-1 border-right"})]),a("ul",{staticClass:"d-inline-flex align-items-end mb-0 ml-auto"},[a("li",{staticClass:"ml-auto d-flex text-primary"},[a("a",{staticClass:"line-r mx-2 h6",attrs:{href:""}},[t._v("\n              訂閱電子報\n            ")]),a("a",{staticClass:"mx-2 h6",attrs:{href:""}},[t._v("\n              登入/註冊\n            ")]),a("span",{staticClass:"ml-2 position-relative h6",attrs:{href:""},on:{mouseenter:function(e){t.isHoverCart=!0},mouseleave:function(e){t.isHoverCart=!1}}},[t._v("\n              "+t._s(t.allQty)+"個商品\n              "),t.isAddToCart?a("div",{staticClass:"add-cart-show position-absolute border"},[a("h6",{staticClass:"text-center text-primary my-3"},[t._v("本商品已經加入購物車")]),a("div",{staticClass:"border-top border-bottom w-75 mb-3 py-3 mx-auto"},[a("img",{staticClass:"d-inline-block w-25",attrs:{src:t.lastCartProduct.imgUrl,alt:""}}),a("h6",{staticClass:"d-inline-block w-75 pl-1"},[t._v(t._s(t.showCartProduct(t.cart.length-1)))])]),a("div",{staticClass:"d-flex mb-3 mr-3"},[a("router-link",{staticClass:"check-btn ml-auto bg-primary text-white px-3 py-1 rounded",attrs:{to:"/check"}},[t._v("\n                    前往結帳\n                  ")])],1)]):t._e(),t.isHoverCart?a("div",{staticClass:"add-cart-show position-absolute border"},[0!==t.cart.length?a("div",[a("table",{staticClass:"text-center w-75 py-3 mx-auto"},[t._m(1),t._l(t.cart,function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.colorObject.name))]),a("td",[t._v(t._s(e.sizeObject.name))]),a("td",[t._v(t._s(e.qty))])])})],2),a("div",{staticClass:"d-flex mb-3 mr-3"},[a("router-link",{staticClass:"check-btn ml-auto bg-primary text-white px-3 py-1 rounded",attrs:{to:"/check"}},[t._v("前往結帳")])],1)]):a("div",{staticClass:"text-center py-5"},[t._v("\n                  目前你還沒選購商品喔\n                ")])]):t._e()])])])])],1)]),t._m(2)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ml-auto"},[a("input",{staticClass:"px-2",attrs:{type:"text",name:"",id:"",placeholder:"SEARCH"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"border-bottom"},[a("th",[t._v("商品名稱")]),a("th",[t._v("顏色")]),a("th",[t._v("尺寸")]),a("th",[t._v("數量")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mobile-header d-block d-sm-none position-fixed bg-white w-100 p-2"},[a("div",{staticClass:"d-flex w-100"},[a("div",{staticClass:"text-white bg-primary px-1 py-1 flex-center"},[t._v("Lativ")]),a("div",{staticClass:"rounded d-flex mx-3 flex-grow-1"},[a("i",{staticClass:"nav-search px-3 fas fa-search flex-center"}),a("input",{staticClass:"nav-search flex-grow-1 mr-2 border-0",attrs:{type:"text",name:"",id:"",placeholder:"輸入關鍵字"}})]),a("div",{staticClass:"px-1 py-1 position-relative h6"},[a("i",{staticClass:"far fa-comment"}),t._v("\n          消息\n      ")])]),a("ul",{staticClass:"d-flex text-unclick mb-0 mt-2"},[a("li",{staticClass:"px-2"},[t._v("首頁")]),a("li",{staticClass:"px-2"},[t._v("女裝")])])])}],o=(a("7f7f"),{data:function(){return{selectedNav:"",isHoverCart:!1}},computed:{allQty:function(){return this.$store.state.cart.length},isAddToCart:function(){return this.$store.state.isAddToCart},lastCartProduct:function(){return this.$store.state.cart[this.$store.state.cart.length-1]},cart:function(){return this.$store.state.cart}},methods:{showCartProduct:function(t){var e="".concat(this.cart[t].title,"-").concat(this.cart[t].gender," ").concat(this.cart[t].colorObject.name,"-").concat(this.cart[t].sizeObject.name," NT$").concat(this.cart[t].totalPrice);return e}}}),l=o,u=(a("8d42"),a("2877")),d=Object(u["a"])(l,i,c,!1,null,"26d0e430",null),f=d.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{attrs:{id:"section-footer"}},[a("section",{staticClass:"d-sm-flex d-none py-3 border-top container"},[a("span",{staticClass:"d-flex"},[a("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("聯絡lativ")]),a("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("購物說明")]),a("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("最新消息")]),a("a",{staticClass:"text-primary px-lg-4 px-2",attrs:{href:""}},[t._v("品牌日誌")])]),a("span",{staticClass:"d-flex ml-auto"},[a("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("網站使用條款")]),a("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("隱私權政策")]),a("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("免責聲明")]),a("a",{staticClass:"text-primary px-lg-4 px-2",attrs:{href:""}},[t._v("© 2019 lativ")])])]),a("section",{staticClass:"mobile-footer border-top d-flex d-sm-none position-fixed bg-white w-100 pt-2"},[a("div",{staticClass:"w-25 text-center py-1"},[a("i",{staticClass:"fas fa-home"}),t._v("\n      首頁\n    ")]),a("div",{staticClass:"w-25 text-center py-1"},[a("i",{staticClass:"fas fa-bars"}),t._v("分類")]),a("div",{staticClass:"w-25 text-center py-1"},[a("i",{staticClass:"fas fa-shopping-cart"}),t._v("購物車")]),a("div",{staticClass:"w-25 text-center py-1"},[a("i",{staticClass:"fas fa-user"}),t._v("個人")])])])}],m={},v=m,b=(a("f187"),Object(u["a"])(v,p,h,!1,null,null,null)),C=b.exports,x={components:{Nav:f,Foot:C}},g=x,_=(a("5c0b"),Object(u["a"])(g,r,s,!1,null,null,null)),y=_.exports,k=a("8c4f");n["a"].use(k["a"]);var w=new k["a"]({mode:"history",base:"/lativ/",routes:[{path:"/",name:"index",component:function(){return a.e("chunk-6085c68a").then(a.bind(null,"d504"))}},{path:"/check",name:"",component:function(){return a.e("chunk-9d996f76").then(a.bind(null,"43e5"))},children:[{path:"",name:"Check1",component:function(){return a.e("chunk-1f714e68").then(a.bind(null,"4dae"))}},{path:"2",name:"Check2",component:function(){return a.e("chunk-365b9031").then(a.bind(null,"5e73"))}},{path:"3",name:"Check3",component:function(){return a.e("chunk-7ecc608e").then(a.bind(null,"72a9"))}}]},{path:"/:gender",name:"",component:function(){return a.e("about").then(a.bind(null,"5ef2"))},children:[{path:":productId",name:"productDetail",component:function(){return a.e("about").then(a.bind(null,"2e1b"))}},{path:":category",name:"cardList",component:function(){return a.e("about").then(a.bind(null,"3af2"))}},{path:"",name:"cardListIndex",component:function(){return a.e("about").then(a.bind(null,"3af2"))}}]}]}),T=a("2f62");n["a"].use(T["a"]);var E=new T["a"].Store({state:{allProducts:{F1:{title:"領結長袖針織衫",gender:"女",price:490,sizes:[{name:"S",num:1},{name:"M",num:2},{name:"L",num:3}]}},cart:[],isAddToCart:!1,asideData:{activity:{},women:[{title:"上身類",url:"tshirt",subCategory:[{name:"印花短T",url:"g-st"}]}]},checkStep:0,totalPrice:0,receiverData:{},payType:""},mutations:{ADDTOCART:function(t,e){t.cart.push(e),t.isAddToCart=!0,setTimeout(function(){t.isAddToCart=!1},1e3)},CHECKSTEP:function(t,e){t.checkStep=e},CHECKCART:function(t,e){t.cart=e},TOTALPRICE:function(t,e){t.totalPrice=e},SETRECEIVE:function(t,e){t.receiverData=e},SETPAYTYPE:function(t,e){t.payType=e}},actions:{}});a("4989");n["a"].config.productionTip=!1,new n["a"]({router:w,store:E,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5e27":function(t,e,a){},"8d42":function(t,e,a){"use strict";var n=a("8f3c"),r=a.n(n);r.a},"8f3c":function(t,e,a){},cdd1:function(t,e,a){},f187:function(t,e,a){"use strict";var n=a("cdd1"),r=a.n(n);r.a}});
//# sourceMappingURL=app.285a9fac.js.map