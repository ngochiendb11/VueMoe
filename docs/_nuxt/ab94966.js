(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{217:function(t,e,r){var content=r(219);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("6f627aca",content,!0,{sourceMap:!1})},218:function(t,e,r){"use strict";r(217)},219:function(t,e,r){var o=r(23)((function(i){return i[1]}));o.push([t.i,".details[data-v-46db6312]{cursor:pointer;position:absolute;top:0;left:0;width:100%;height:100%;z-index:1}.details[data-v-46db6312]:hover{border:1px solid #51bafc}.button[data-v-46db6312],.select[data-v-46db6312]{z-index:2}.select[data-v-46db6312]{position:absolute;right:15px;bottom:35px}.card-content[data-v-46db6312]{padding:0}.buttons[data-v-46db6312]{margin:0}",""]),o.locals={},t.exports=o},220:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(25);function o(t,e){var r=e.trim().toLowerCase();return r.length?t.filter((function(t){return t.title.toLowerCase().indexOf(r)>-1})):t}},221:function(t,e,r){"use strict";var o={name:"products",props:["product"],data:function(){return{addToCartLabel:"Add to cart",viewDetailsLabel:"Details",removeFromCartLabel:"Remove from cart",addToFavouriteLabel:"Add to favourite",removeFromFavouriteLabel:"Remove from favourite",selected:1,quantityArray:[]}},mounted:function(){for(var i=1;i<=20;i++)this.quantityArray.push(i);this.$props.product.quantity>1&&(this.selected=this.$props.product.quantity)},computed:{isUserLogged:function(){return this.$store.getters.isUserLoggedIn}},methods:{increaseItem:function(t){var data={id:t.id,quantity:t.quantity+1};this.$store.commit("quantity",data)},decreaseItem:function(t){var data={id:t.id,quantity:t.quantity-1};this.$store.commit("quantity",data)},addToCart:function(t){var data={id:t,status:!0};this.$store.commit("addToCart",t),this.$store.commit("setAddedBtn",data)},removeFromCart:function(t){var data={id:t,status:!1};this.$store.commit("removeFromCart",t),this.$store.commit("setAddedBtn",data)},saveToFavorite:function(t){this.$store.state.userInfo.isLoggedIn?this.$store.commit("addToFavourite",t):this.$store.commit("showLoginModal",!0)},removeFromFavourite:function(t){this.$store.commit("removeFromFavourite",t)},onSelectQuantity:function(t){var data={id:t,quantity:this.selected};this.$store.commit("quantity",data)}}},n=(r(218),r(4)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image is-4by3"},[r("img",{attrs:{src:t.product.url,alt:"Placeholder image"}})])]),t._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"media"},[r("div",{staticClass:"media-content"},[r("p",{staticClass:"title is-4"},[t._v(t._s(t.product.title))])]),t._v(" "),r("div",[r("button",{directives:[{name:"show",rawName:"v-show",value:t.product.isFavourite,expression:"product.isFavourite"}],staticClass:"button is-small",attrs:{title:t.removeFromFavouriteLabel},on:{click:function(e){return t.removeFromFavourite(t.product.id)}}},[t._m(0)]),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:!t.product.isFavourite,expression:"!product.isFavourite"}],staticClass:"button is-small",attrs:{title:t.addToFavouriteLabel},on:{click:function(e){return t.saveToFavorite(t.product.id)}}},[t._m(1)])])]),t._v(" "),r("div",{staticClass:"content is-clearfix"},[r("p",[t._v(t._s(t.product.description))]),t._v(" "),r("div",{staticClass:"is-pulled-left"},[1===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),2===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),2===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),3===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),3===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),3===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),r("p",[t._v("\n          "+t._s(t.product.reviews>0?t.product.reviews+" Reviews":"No reviews")+"\n        ")])]),t._v(" "),r("p",{staticClass:"is-pulled-right"},[r("span",{staticClass:"title is-4"},[r("strong",[t._v("€ "+t._s(t.product.price))])])])]),t._v(" "),r("div",{staticClass:"card-footer btn-actions"},[r("div",{staticClass:"card-footer-item field is-grouped"},[r("div",{staticClass:"buttons"},[t.product.isAddedToCart?t._e():r("button",{staticClass:"button is-primary",on:{click:function(e){return t.addToCart(t.product.id)}}},[t._v("\n            "+t._s(t.addToCartLabel)+"\n          ")]),t._v(" "),t.product.isAddedToCart?r("button",{staticClass:"button is-text",on:{click:function(e){return t.removeFromCart(t.product.id,!1)}}},[t._v("\n            "+t._s(t.removeFromCartLabel)+"\n          ")]):t._e()]),t._v(" "),r("div",{staticClass:" is-rounded is-small"},[r("button",{staticClass:"button is-small",attrs:{disabled:t.product.quantity<=1},on:{click:function(e){return t.decreaseItem(t.product)}}},[t._v("\n            -\n          ")]),t._v(" "),r("input",{staticClass:"input is-outlined",staticStyle:{width:"40px",height:"30px"},attrs:{type:"text"},domProps:{value:t.product.quantity}}),t._v(" "),r("button",{staticClass:"button is-small",on:{click:function(e){return t.increaseItem(t.product)}}},[t._v("\n            +\n          ")])])])])]),t._v(" "),r("nuxt-link",{staticClass:"details",attrs:{to:{name:"product_detail-id",params:{id:t.product.id,title:t.product.title,price:t.product.price,rating:t.product.ratings,reviews:t.product.reviews,isAddedBtn:t.product.isAddedBtn}}}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-heart"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"far fa-heart"})])}],!1,null,"46db6312",null);e.a=component.exports},226:function(t,e,r){var content=r(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("d0e1bb54",content,!0,{sourceMap:!1})},227:function(t,e,r){var content=r(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("4b32cd74",content,!0,{sourceMap:!1})},237:function(t,e,r){"use strict";r(226)},238:function(t,e,r){var o=r(23)((function(i){return i[1]}));o.push([t.i,".card[data-v-77eaf695]{margin:10px}",""]),o.locals={},t.exports=o},239:function(t,e,r){"use strict";r(227)},240:function(t,e,r){var o=r(23),n=r(139),c=r(241),d=o((function(i){return i[1]})),l=n(c);d.push([t.i,".hero[data-v-3f0f3726]{background-image:url("+l+");background-repeat:no-repeat;background-size:cover}h1[data-v-3f0f3726],h2[data-v-3f0f3726]{color:#fff}",""]),d.locals={},t.exports=d},241:function(t,e,r){t.exports=r.p+"img/Aircraft.3e90b2d.png"},242:function(t,e,r){"use strict";r.r(e);var o=r(221),n=r(220),c={name:"productsList",components:{VmProducts:o.a},data:function(){return{id:"",noProductLabel:"No product found",productsFiltered:[]}},computed:{products:function(){return this.$store.state.userInfo.hasSearched?this.getProductByTitle():this.$store.state.products}},methods:{getProductByTitle:function(){var t=this.$store.state.products,e=this.$store.state.userInfo.productTitleSearched;return this.productsFiltered=Object(n.a)(t,e)}}},d=(r(237),r(4)),l=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"columns is-centered is-multiline"},[t._l(t.products,(function(t){return r("div",{key:t.id,staticClass:"card column is-one-quarter"},[r("VmProducts",{attrs:{product:t}})],1)})),t._v(" "),0===t.products.length?r("div",{staticClass:"section"},[r("p",[t._v(t._s(t.noProductLabel))])]):t._e()],2)}),[],!1,null,"77eaf695",null).exports,v=(r(239),{name:"index",components:{VmProductsList:l,VmHero:Object(d.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero is-large is-bold"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[t._v("\n        Free ecommerce template for Vue.js projects\n      ")]),t._v(" "),r("h2",{staticClass:"subtitle"},[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n        eiusmod tempor incididunt\n      ")])])])])}],!1,null,"3f0f3726",null).exports}}),f=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("VmHero"),t._v(" "),r("VmProductsList")],1)}),[],!1,null,null,null);e.default=f.exports}}]);