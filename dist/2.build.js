webpackJsonp([2],{41:function(t,e,i){"use strict";function a(t){i(90)}Object.defineProperty(e,"__esModule",{value:!0});var n=i(53),r=i(96),o=i(5),s=a,d=o(n.a,r.a,!1,s,"data-v-7b749de9",null);e.default=d.exports},43:function(t,e,i){"use strict";function a(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function n(t){function e(t){var e=t.getBoundingClientRect();return e.left>0&&e.left<window.innerWidth&&e.top>0&&e.top<window.innerHeight}function i(t){return t.src==t.dataset.src}function n(){[].concat(a(document.querySelectorAll("img[data-src]"))).forEach(function(t){e(t)&&!i(t)&&(t.src=t.dataset.src)})}n(),t?document.querySelector(t).addEventListener("scroll",n):window.onscroll=n}e.a=n},53:function(t,e,i){"use strict";var a=i(6),n=i(43),r=i(11),o=(i.n(r),i(92)),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e.a={data:function(){return{flag:!1,SerialID:0,ImageID:0,swipershow:!1,newimgdataarr:[],numindex:0}},computed:s({},Object(a.c)({imgpagedata:function(t){return t.imgpage.imgpagedata},imgdetailtwo:function(t){return t.imgdetail.imgdetailtwo},swiperOption:function(){var t=this;return{on:{slideChange:function(){this.activeIndex>t.imgdetailtwo.length-3&&(console.log(t.ImageID,"这里哟"),t.getimgdataTwo({SerialID:t.$route.query.ids,ImageID:6})),t.numindex=this.activeIndex}},lazy:{loadPrevNext:!0}}},swiper:function(){return this.$refs.mySwiper.swiper}})),components:{imgdetail:o.a,swiper:r.swiper,swiperSlide:r.swiperSlide},methods:s({},Object(a.b)({imgpage:"imgpage/imgpage",getimgdataTwo:"imgdetail/getimgdataTwo"}),{goimgdetail:function(t,e){"0"==t&&(this.flag=!0),this.SerialID=this.$route.query.ids,this.ImageID=e},swiperbanner:function(t,e){console.log(e,"这里"),0!=t&&(this.swipershow=!0,this.getimgdataTwo({SerialID:this.$route.query.ids,ImageID:e})),this.numindex=t,this.swiper.slideTo(this.numindex,1e3,!1)},closebanner:function(){this.swipershow=!1},getcolor:function(){this.$router.push({path:"/getcolorcar",query:{SerialID:this.$route.query.ids}})}}),mounted:function(){this.imgpage(this.$route.query.ids)},updated:function(){Object(n.a)(".imgpagescroll")}}},54:function(t,e,i){"use strict";var a=i(6),n=i(43),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e.a={props:["SerialID","ImageID"],computed:r({},Object(a.c)({imgpagedata:function(t){return t.imgdetail.imgpagedata}})),methods:r({},Object(a.b)({getimgdata:"imgdetail/getimgdata"}),{scroll:function(t){var e=this.$refs.detailbox.getBoundingClientRect().height;t.target.scrollTop>e-window.innerHeight-20&&this.getimgdata({SerialID:this.SerialID,ImageID:this.ImageID})}}),mounted:function(){console.log(this.SerialID),this.getimgdata({SerialID:this.SerialID,ImageID:this.ImageID})},updated:function(){Object(n.a)(".detailbox")}}},90:function(t,e,i){var a=i(91);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(2)("06db1b70",a,!0,{})},91:function(t,e,i){e=t.exports=i(1)(!1),e.push([t.i,".imgbox[data-v-7b749de9],.imgpagebox[data-v-7b749de9]{width:100%;height:100%;overflow:hidden}.imgpagebox[data-v-7b749de9]{display:flex;flex-direction:column;background-color:#eee}.imgpageboxtop[data-v-7b749de9]{width:100%;display:flex;padding:.2rem 0;box-sizing:border-box;background:#fff}.imgpageboxtop p[data-v-7b749de9]{width:50%;display:flex;align-items:center;justify-content:center}.imgpagescroll[data-v-7b749de9]{width:100%;overflow:hidden;overflow-y:scroll;margin-top:.2rem}.imgpagebottom[data-v-7b749de9],.imgpageboxlist[data-v-7b749de9]{width:100%}.imgpageboxlistdiv[data-v-7b749de9]{width:31.3%;margin:0 1%;display:inline-block}.imgpageboxlistdiv img[data-v-7b749de9]{width:100%;border:none}.imgactive[data-v-7b749de9]{position:relative}.imgactive div[data-v-7b749de9]{position:absolute;flex-direction:column;background:rgba(0,0,0,.1)}.imgactive div[data-v-7b749de9],.swiperbanner[data-v-7b749de9]{top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#fff}.swiperbanner[data-v-7b749de9]{position:fixed;background:#000;z-index:99}.swiperbanner img[data-v-7b749de9]{width:100%}.bannernum[data-v-7b749de9]{position:absolute;bottom:5%;left:50%;transform:translateX(-50%)}.swiperbanner[data-v-7b749de9]{touch-action:none}.swiper-container[data-v-7b749de9]{height:4rem}",""])},92:function(t,e,i){"use strict";function a(t){i(93)}var n=i(54),r=i(95),o=i(5),s=a,d=o(n.a,r.a,!1,s,"data-v-4ab61506",null);e.a=d.exports},93:function(t,e,i){var a=i(94);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(2)("2a554344",a,!0,{})},94:function(t,e,i){e=t.exports=i(1)(!1),e.push([t.i,".detailbox[data-v-4ab61506]{width:100%;height:100%;position:fixed;top:0;left:0;overflow:hidden;overflow-y:scroll;background-color:#eee}.detailimg[data-v-4ab61506]{width:100%}.detailimg div[data-v-4ab61506]{display:inline-block;width:31.3%;margin:0 1%}.detailimg div img[data-v-4ab61506]{width:100%}",""])},95:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detailbox",on:{scroll:t.scroll}},[i("div",{ref:"detailbox",staticClass:"detailimg"})])},n=[],r={render:a,staticRenderFns:n};e.a=r},96:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"imgbox"},[i("div",{staticClass:"imgpagebox"},[i("div",{staticClass:"imgpageboxtop"},[i("p",{on:{click:t.getcolor}},[t._v("颜色")]),t._v(" "),i("p",[t._v("车款")])]),t._v(" "),i("div",{staticClass:"imgpagescroll"},[i("div",{staticClass:"imgpagebottom"},t._l(t.imgpagedata,function(e,a){return i("div",{key:a,staticClass:"imgpageboxlist"},t._l(e.List,function(a,n){return i("div",{key:n,staticClass:"imgpageboxlistdiv",class:0==n?"imgactive":"",on:{click:function(i){t.goimgdetail(n,e.Id)}}},[0==n?i("div",[i("p",[t._v(t._s(e.Name))]),i("p",[t._v(t._s(e.Count)+"张>")])]):t._e(),t._v(" "),i("img",{attrs:{src:a.Url.slice(0,a.Url.length-7)+a.LowSize+".jpg"},on:{click:function(i){t.swiperbanner(n,e.Id)}}})])}))}))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.swipershow,expression:"swipershow"}],staticClass:"swiperbanner",on:{click:t.closebanner}},[i("swiper",{ref:"mySwiper",staticClass:"swiperbox",attrs:{options:t.swiperOption}},t._l(t.imgdetailtwo,function(e,a){return i("swiper-slide",{key:a},[i("img",{staticClass:"swiper-lazy",attrs:{"data-src":e.Url.slice(0,e.Url.length-7)+e.LowSize+".jpg"}}),t._v(" "),i("div",{staticClass:"swiper-lazy-preloader"})])})),t._v(" "),i("div",{staticClass:"bannernum"},[t._v(t._s(1*t.numindex+1)+"/"+t._s(t.imgdetailtwo.length))])],1),t._v(" "),t.flag?i("imgdetail",{attrs:{SerialID:t.SerialID,ImageID:t.ImageID}}):t._e()],1)},n=[],r={render:a,staticRenderFns:n};e.a=r}});
//# sourceMappingURL=2.build.js.map