(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{110:function(t,e,i){var a=i(2756);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(2).default)("4ca2b865",a,!0,{})},111:function(t,e,i){"use strict";i.r(e);var a=i(112),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e.default=n.a},112:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=i(10),o=i(19),r=i(8),d=i(29),l=(a=d)&&a.__esModule?a:{default:a};e.default={props:["type","limit"],data:function(){return{jq:null,holder:null,isBottom:!1,limitElement:null,hasLimit:!1,screenSize:null,holderHeight:0,isFixed:!1}},computed:{stickyBottomHeight:function(){return this.$store.state.stickyBottomHeight}},methods:{resized:function(t){this.screenSize=t,this.updateOffset(),this.setBottom()},updateOffset:function(){this.$el.style.height=this.holder.offsetHeight+"px",this.isBottom||this.$store.commit("STICKY_POSITION",(0,r.getOffsetTop)(this.$el))},setBottom:function(){if(this.isFixed){var t=(0,l.default)(this.$el).find(".holder"),e=t.get(t.length-1);this.isBottom&&(0!==this.stickyBottomHeight||t.length>1)&&this.$store.commit("STICKY_BOTTOM_HEIGHT",e.offsetHeight)}},moveToFix:function(){if(!this.isFixed&&(this.isFixed=!0,this.updateOffset(),this.isBottom)){var t=(0,l.default)(this.$el).find(".holder");t=t.get(t.length-1),this.$store.commit("STICKY_BOTTOM_HEIGHT",t.offsetHeight)}},moveToRel:function(){this.isFixed&&(this.isFixed=!1,this.updateOffset(),this.isBottom&&this.$store.commit("STICKY_BOTTOM_HEIGHT",0))},onscroll:function(t){var e=void 0,i=void 0;if(this.isBottom){if(this.jq.hasClass("on"))return;e=this.limitElement?(0,r.getOffsetTop)(this.limitElement)+this.limitElement.offsetHeight:-100,i=(0,r.getOffsetTop)(this.$el)+this.holderHeight-this.screenSize.height}else e=(0,r.getOffsetTop)(this.$el),i=this.limitElement?(0,r.getOffsetTop)(this.limitElement)+this.limitElement.offsetHeight:1e7;t>e&&t<i?this.moveToFix():this.moveToRel()}},mounted:function(){this.jq=(0,l.default)(this.$el),this.holder=this.$el.querySelector(".holder"),this.holderHeight=this.holder.offsetHeight,this.isBottom="bottom"===this.$props.type,this.$props.limit&&(this.limitElement=document.querySelector(this.$props.limit)),(0,n.addResize)(this.resized),(0,o.addScroll)(this.onscroll)},beforeDestroy:function(){(0,o.removeScroll)(this.onscroll),(0,n.removeResize)(this.resized),this.$store.commit("STICKY_POSITION",1e5),this.$store.commit("STICKY_BOTTOM_HEIGHT",0)},updated:function(){this.$props.limit&&(this.limitElement=document.querySelector(this.$props.limit)),this.holderHeight=this.holder.offsetHeight,this.updateOffset()}}},113:function(t,e,i){var a=i(2758);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(2).default)("3b1805fc",a,!0,{})},126:function(t,e,i){"use strict";i.r(e);var a=i(127),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e.default=n.a},127:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["src","html"],methods:{setPrintInnerHtml:function(t,e){var i=this.$el.contentWindow;return i.document.querySelector(e).innerHTML=t.innerHTML,i},print:function(t){var e=this.setPrintInnerHtml(t,".print-body");setTimeout((function(){e.focus(),e.print()}),333)}}}},128:function(t,e,i){var a=i(2768);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(2).default)("17de171a",a,!0,{})},16:function(t,e,i){"use strict";i.r(e);i(2755);var a=i(0),n=Object(a.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{hero:""}},[this._t("default")],2)}),[],!1,null,"6e66e098",null);e.default=n.exports},1763:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:[this.type?this.type:"top",{fixed:this.isFixed}],attrs:{sticky:""}},[e("div",{staticClass:"holder"},[this._t("default")],2)])},n=[]},1998:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}));var a=function(){var t=this.$createElement;return(this._self._c||t)("iframe",{attrs:{src:this.src}})},n=[]},2111:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{attrs:{policy:""}},[i("hero",[i("h2",[t._v(t._s(t.$t("main.policy")))])]),i("sticky",[i("scroll-menu",{attrs:{type:"tab tab-block col-3"}},t._l(t.category,(function(e){return i("a",{key:e.code,class:{on:t.code===e.code},on:{click:function(i){return t.goRouter(e.code)}}},[t._v(t._s(e.codeName))])})),0)],1),t.availableAgree?i("dl",{staticClass:"agree",on:{click:function(e){return e.stopPropagation(),t.contentClick(e)}}},[i("dt",[i("p",[t._v("\n        "+t._s(t.$t("policy.agree.title"))+"\n        "),i("span",{staticClass:"mh-10 hidden-md-down"},[t._v("|")]),i("br",{staticClass:"hidden-md-up"}),t.isActivated?i("span",[t._v("\n          "+t._s(t.$t("policy.agree.status"))+" : "+t._s(t.$t("policy.agree.activated"))+", "+t._s(t._f("dateFormat")(t.agreeInfo.agreeYmdt,"YYYY-MM-DD"))+" "+t._s(t.$t("policy.agree.confirmation"))+"\n          "),i("a",{staticClass:"hidden-sm-down",on:{click:t.openConfirmationPopup}},[i("icon",{staticClass:"move-link ml-5"})],1)]):i("span",[t._v(t._s(t.$t("policy.agree.status"))+" : "+t._s(t.$t("policy.agree.deactivated")))])])]),i("dd",[i("p",[t._v(t._s(t.$t("policy.agree.agreeDesc")))]),t.isActivated?[i("p",{staticClass:"mt-20 grey--text"},[t._v(t._s(t.$t("policy.agree.agreeDesc2")))]),i("input-wrap",{staticClass:"mt-10"},[i("check",{staticClass:"check fs-14"},[t._v("\n            "+t._s(t.$t("policy.agree.disagree1"))+"\n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.agree1,expression:"agree1"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.agree1)?t._i(t.agree1,null)>-1:t.agree1},on:{change:function(e){var i=t.agree1,a=e.target,n=!!a.checked;if(Array.isArray(i)){var o=t._i(i,null);a.checked?o<0&&(t.agree1=i.concat([null])):o>-1&&(t.agree1=i.slice(0,o).concat(i.slice(o+1)))}else t.agree1=n}}})])],1),i("input-wrap",{staticClass:"type-1"},[i("check",{staticClass:"check fs-14"},[t._v("\n            "+t._s(t.$t("policy.agree.disagree2"))+"\n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.agree2,expression:"agree2"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.agree2)?t._i(t.agree2,null)>-1:t.agree2},on:{change:function(e){var i=t.agree2,a=e.target,n=!!a.checked;if(Array.isArray(i)){var o=t._i(i,null);a.checked?o<0&&(t.agree2=i.concat([null])):o>-1&&(t.agree2=i.slice(0,o).concat(i.slice(o+1)))}else t.agree2=n}}})]),i("a",{staticClass:"btn disagree md lgray line mt-10",class:{disabled:!t.agree1||!t.agree2},on:{click:function(e){return t.agree("N")}}},[t._v(t._s(t.$t("policy.agree.termination")))])],1)]:[i("input-wrap",{staticClass:"type-1 mt-10",staticStyle:{"line-height":"42px"}},[i("check",{staticClass:"check fs-14"},[t._v("\n            "+t._s(t.$t("policy.agree.agree"))+"\n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.agree1,expression:"agree1"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.agree1)?t._i(t.agree1,null)>-1:t.agree1},on:{change:function(e){var i=t.agree1,a=e.target,n=!!a.checked;if(Array.isArray(i)){var o=t._i(i,null);a.checked?o<0&&(t.agree1=i.concat([null])):o>-1&&(t.agree1=i.slice(0,o).concat(i.slice(o+1)))}else t.agree1=n}}})]),i("a",{staticClass:"btn md lgray line mt-10",class:{disabled:!t.agree1},on:{click:function(e){return t.agree("Y")}}},[t._v(t._s(t.$t("policy.agree.change")))])],1)]],2)]):t._e(),i("div",{staticClass:"content-box"},[i("div",{staticClass:"policy-content",class:{"content-hide":!t.supportPdf}},[i("ul",t._l(t.lists,(function(e,a){return i("li",{key:a,class:{on:t.paramType===e.provisionTypeCode}},[t.supportPdf?i("div",{staticClass:"item-box"},[i("router-link",{attrs:{to:"/policy/"+t.paramCode+"/"+e.provisionTypeCode.toLowerCase()}},[t._v(t._s(e.provisionName))])],1):i("div",{staticClass:"item-box"},[i("a",{attrs:{href:e.provisionFilePath,target:"_blank"}},[i("icon",{staticClass:"download2 mr-5 mt-0"}),t._v("\n              "+t._s(e.provisionName)+"\n            ")],1)])])})),0)]),t.supportPdf?i("div",{staticClass:"content",attrs:{id:"pdfContent"}},[i("div",{staticClass:"footer"},[i("span",[t._v(t._s(t.$t("main.policyDate"))+" : "+t._s(t._f("dateFormat")(t.currentProvision.applyYmd,t.$t("dateForm.yyyymmddFilter"))))]),0!==t.currentProvision.preVersion?i("a",{staticClass:"prev",on:{click:function(e){return t.getPdf("pre")}}},[i("img",{attrs:{src:"/public/img/icon/chevron-left.svg"}}),t._v("\n          "+t._s(t.$t("main.policyPrev"))+"\n        ")]):t._e(),0!==t.currentProvision.nextVersion?i("a",{staticClass:"next",on:{click:function(e){return t.getPdf("next")}}},[t._v("\n          "+t._s(t.$t("main.policyNext"))+"\n          "),i("img",{attrs:{src:"/public/img/icon/chevron-right.svg"}})]):t._e()]),i("div",{ref:"pdf",staticClass:"pdf",staticStyle:{height:"100%",overflow:"hidden"}})]):t._e()]),i("policy-confirm-popup",{ref:"policyConfirmPopup"})],1)},n=[]},2176:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isOpen?i("popup",[i("panel",{attrs:{title:t.$t("policy.confimation.popTitle")},on:{close:function(e){t.isOpen=!1}}},[i("div",{staticClass:"btn-wrap"},[i("a",{staticClass:"btn sm point line",on:{click:t.printThis}},[t._v(t._s(t.$t("common.print")))])]),i("div",{staticClass:"div-wrap for-print"},[i("p",{staticClass:"title"},[t._v(t._s(t.$t("policy.confimation.title")))]),i("p",{staticClass:"sub-title",domProps:{innerHTML:t._s(t.$t("policy.confimation.subtitle"))}}),i("hr",{staticClass:"line"}),i("div",{staticClass:"row"},[i("div",{staticClass:"label"},[t._v(t._s(t.$t("policy.confimation.memberName")))]),i("div",{staticClass:"row-data"},[t._v(t._s(t.agreeInfo.memberName))])]),i("div",{staticClass:"row"},[i("div",{staticClass:"label"},[t._v(t._s(t.$t("policy.confimation.loginId")))]),i("div",{staticClass:"row-data"},[t._v(t._s(t.agreeInfo.loginId))])]),i("div",{staticClass:"row"},[i("div",{staticClass:"label"},[t._v(t._s(t.$t("policy.confimation.agreeYmdt")))]),i("div",{staticClass:"row-data"},[t._v(t._s(t.dateFormat(t.agreeInfo.agreeYmdt)))])]),i("div",{staticClass:"row"},[i("div",{staticClass:"label"},[t._v(t._s(t.$t("policy.confimation.etc1")))]),i("div",{staticClass:"row-data"},[t._v(t._s(t.$t("policy.confimation.value1")))])]),i("div",{staticClass:"row"},[i("div",{staticClass:"label"},[t._v(t._s(t.$t("policy.confimation.etc2")))]),i("div",{staticClass:"row-data"},[t._v(t._s(t.$t("policy.confimation.value2")))])]),i("p",{staticClass:"desc",domProps:{innerHTML:t._s(t.$t("policy.confimation.desc"))}}),i("p",{staticClass:"date"},[i("span",[t._v(t._s(t.$t("policy.confimation.date")))]),i("span",[t._v(t._s(t.today))])])]),i("btn-wrap",[i("a",{staticClass:"btn lg point mt-20",on:{click:function(e){t.isOpen=!1}}},[t._v(t._s(t.$t("common.close")))])])],1)],1):t._e(),i("print-html",{ref:"print",attrs:{src:"/public/print/policyConfirmation.html"}})],1)},n=[]},2755:function(t,e,i){"use strict";var a=i(110);i.n(a).a},2756:function(t,e,i){(t.exports=i(1)(!1)).push([t.i,".flex-vhm[data-v-6e66e098]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flex-hm[data-v-6e66e098],.flex-vhm[data-v-6e66e098]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.flex-vm[data-v-6e66e098]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}[hero][data-v-6e66e098]{padding:27px 20px 25px;position:relative;background-color:#fff}[hero] h2[data-v-6e66e098]{font-size:1.875rem;letter-spacing:-.8999999999999999px;line-height:1.5;line-height:1;font-weight:400}[hero] h2+p[data-v-6e66e098]{font-weight:400;margin-top:10px;display:none}[hero] h2+p.no-hide[data-v-6e66e098]{font-size:.875rem;letter-spacing:-.42px;line-height:1.5;display:block}@media (min-width:768px){[hero][data-v-6e66e098]{padding:32px 0;text-align:center}[hero] h2[data-v-6e66e098]{font-size:2.25rem;letter-spacing:-1.08px;line-height:1.5;line-height:1;font-weight:400}[hero] h2+p[data-v-6e66e098]{margin-top:20px}}@media (min-width:992px){[hero] h2[data-v-6e66e098]{font-size:2.625rem;letter-spacing:-1.26px;line-height:1.5;line-height:1}}@media (min-width:1260px){[hero][data-v-6e66e098]{padding:47px 0}[hero] h2+p[data-v-6e66e098]{display:block;font-size:1rem;letter-spacing:-.48px;line-height:1.5;line-height:1.75}#app.en-US [hero][data-v-6e66e098]{padding:50px 0 45px}#app.en-US [hero] h2+p[data-v-6e66e098]{margin-top:10px}#app.en-US [hero].inner[data-v-6e66e098]{padding:50px 0 20px;text-align:left}#app.en-US [hero].inner span[data-v-6e66e098]{font-size:1.5em}#app.en-US [hero].inner .search-wrap[data-v-6e66e098]{float:right}}",""])},2757:function(t,e,i){"use strict";var a=i(113);i.n(a).a},2758:function(t,e,i){(t.exports=i(1)(!1)).push([t.i,".flex-vhm[data-v-3419dd5f]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flex-hm[data-v-3419dd5f],.flex-vhm[data-v-3419dd5f]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.flex-vm[data-v-3419dd5f]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.holder[data-v-3419dd5f]{position:relative;width:100%;z-index:100}.top .holder[data-v-3419dd5f]{top:0}.bottom .holder[data-v-3419dd5f]{bottom:0;left:0}.fixed .holder[data-v-3419dd5f]{position:fixed}.sub-menu .holder[data-v-3419dd5f]{z-index:99}.filter-sticky .holder[data-v-3419dd5f]{z-index:0}",""])},2767:function(t,e,i){"use strict";var a=i(128);i.n(a).a},2768:function(t,e,i){(t.exports=i(1)(!1)).push([t.i,".flex-vhm[data-v-01e0ca84]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flex-hm[data-v-01e0ca84],.flex-vhm[data-v-01e0ca84]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.flex-vm[data-v-01e0ca84]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}iframe[data-v-01e0ca84]{position:absolute;left:-600px;right:auto;top:-600px;bottom:auto;width:0;height:0}",""])},30:function(t,e,i){"use strict";i.r(e);var a=i(1763),n=i(111);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i(2757);var r=i(0),d=Object(r.a)(n.default,a.a,a.b,!1,null,"3419dd5f",null);e.default=d.exports},3555:function(t,e,i){"use strict";i.r(e);var a=i(2176),n=i(877);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i(3556);var r=i(0),d=Object(r.a)(n.default,a.a,a.b,!1,null,"d017d450",null);e.default=d.exports},3556:function(t,e,i){"use strict";var a=i(879);i.n(a).a},3557:function(t,e,i){(t.exports=i(1)(!1)).push([t.i,'.flex-vhm[data-v-d017d450]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flex-hm[data-v-d017d450],.flex-vhm[data-v-d017d450]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.flex-vm[data-v-d017d450]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}[policy] h4[data-v-d017d450]{margin-top:55px;font-size:1.75rem;letter-spacing:-.84px;line-height:1.5;font-weight:500;text-align:center;margin-bottom:20px}[policy] h5[data-v-d017d450]{margin-top:35px;font-size:1.25rem;letter-spacing:-.6px;line-height:1.5;font-weight:500}[policy] h5.h6[data-v-d017d450],[policy] h6[data-v-d017d450]{margin:20px 0 10px;font-size:1.125rem;letter-spacing:-.54px;line-height:1.5}[policy] .policy-content[data-v-d017d450]{background:#f6f7f8;padding:10px 20px}[policy] .policy-content ul[data-v-d017d450]{-webkit-column-count:2;-moz-column-count:2;column-count:2}[policy] .policy-content li[data-v-d017d450]{-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:top;display:inline-block;font-size:.875rem;letter-spacing:-.42px;line-height:1.5;line-height:1.43;font-weight:400;margin:12px 0;width:100%;letter-spacing:-1px;color:#000;background:#f6f7f8}[policy] .policy-content li.on[data-v-d017d450]{color:#14adea}[policy] .policy-content li div[data-v-d017d450]{height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center}[policy] .policy-content li div[data-v-d017d450],[policy] .policy-content li div a[data-v-d017d450]{display:-webkit-box;display:-ms-flexbox;display:flex}[policy] .content[data-v-d017d450]{margin:40px auto 0;height:1000px;padding:0 20px}[policy] .content .footer[data-v-d017d450]{text-align:center;font-size:.875rem;letter-spacing:-.42px;line-height:1.5;line-height:2.86;padding:0 20px;color:#222;position:relative}[policy] .content .footer a[data-v-d017d450]{cursor:pointer;position:absolute}[policy] .content .footer a.prev[data-v-d017d450]{left:10px}[policy] .content .footer a.prev img[data-v-d017d450]{margin-right:5px}[policy] .content .footer a.next[data-v-d017d450]{right:10px}[policy] .content .footer a.next img[data-v-d017d450]{margin-left:5px}[policy] .content .footer a[data-v-d017d450]:hover{font-weight:500}[policy] .pdfobject[data-v-d017d450]{border:1px solid #707070}[policy] dl.agree[data-v-d017d450]{margin:20px;background:#14adea;color:#fff;font-size:.875rem;letter-spacing:-.42px;line-height:1.5;border-radius:2px;border:1px solid #14adea;-webkit-box-sizing:border-box;box-sizing:border-box}[policy] dl.agree dt[data-v-d017d450]{padding:12px 20px;margin-right:10px;position:relative;background:url("/public/img/icon/arrow-down-w.svg") 100%;background-repeat:no-repeat}[policy] dl.agree dt.on[data-v-d017d450]{background:url("/public/img/icon/arrow-up-w.svg") 100%;background-repeat:no-repeat}[policy] dl.agree dt.on+dd[data-v-d017d450]{display:block}[policy] dl.agree dd[data-v-d017d450]{padding:8px 20px 10px;display:none;color:#222;background-color:#fff}[policy] dl.agree dd [Check][data-v-d017d450]{color:#707070}[policy] dl.agree dd .input-wrap[data-v-d017d450]{line-height:1.5;padding-right:0}[policy] dl.agree dd .input-wrap .btn[data-v-d017d450]{position:relative;width:100%;display:block}[policy] dl.agree dd p.grey--text[data-v-d017d450]{color:#707070}[policy] dl.agree .btn.disabled[data-v-d017d450]{background-color:#dadada;pointer-events:none}[policy] dl.agree .btn.disabled[data-v-d017d450]:hover{border-color:#dadada}@media (min-width:768px){[policy] .policy-content[data-v-d017d450]{padding:10px 40px}[policy] .policy-content ul[data-v-d017d450]{-webkit-column-count:3;-moz-column-count:3;column-count:3}[policy] .policy-content li[data-v-d017d450]{font-size:.875rem;letter-spacing:-.42px;line-height:1.5;line-height:1.43;letter-spacing:-.5px}[policy] .content[data-v-d017d450]{padding:0 40px}[policy] dl.agree[data-v-d017d450]{margin:20px 40px}[policy] dl.agree dt[data-v-d017d450]{padding:18px 30px;margin-right:30px}[policy] dl.agree dd[data-v-d017d450]{padding:20px 30px 30px}[policy] dl.agree dd .input-wrap[data-v-d017d450]{padding-right:200px}[policy] dl.agree dd .input-wrap .btn[data-v-d017d450]{position:absolute;width:120px}}@media (min-width:992px){[policy] .content[data-v-d017d450]{padding:0 40px}[policy] dl.agree dd .input-wrap .disagree[data-v-d017d450]{margin-top:-10px!important}}@media (min-width:1260px){[policy] .policy-content[data-v-d017d450]{margin:0 auto;padding:10px calc(50% - 600px);background-clip:border-box}[policy] .content[data-v-d017d450]{width:1200px;padding:0}[policy] dl.agree[data-v-d017d450]{width:1200px;margin:30px auto}}[panel][data-v-d017d450]{margin-top:calc(50vh - 400px);padding:30px 40px}[panel] .btn-wrap[data-v-d017d450]{float:right}[panel] .btn-wrap .btn[data-v-d017d450]{padding-left:24px;padding-right:24px;margin-left:3px}[panel] p[data-v-d017d450]{font-size:1.125rem;letter-spacing:-.54px;line-height:1.5;line-height:32px;font-weight:500;margin-top:20px}[panel] .div-wrap[data-v-d017d450]{margin-top:50px;margin-bottom:30px;padding:40px 50px}[panel] .div-wrap.for-print[data-v-d017d450]{border:1px solid #dadada}[panel] .div-wrap .title[data-v-d017d450]{text-align:center;font-size:2rem;letter-spacing:-.96px;line-height:1.5}[panel] .div-wrap .sub-title[data-v-d017d450]{text-align:center;font-size:1.125rem;letter-spacing:-.54px;line-height:1.5;line-height:1.56;font-weight:400}[panel] .div-wrap hr[data-v-d017d450]{margin-top:30px;height:3px;border:0;background:#14adea}[panel] .div-wrap .row[data-v-d017d450]{height:50px;border-bottom:1px solid #dadada;display:table;width:100%}[panel] .div-wrap .row .label[data-v-d017d450]{width:200px;background-color:#f6f7f8;font-size:.9375rem;letter-spacing:-.44999999999999996px;line-height:1.5;font-weight:500}[panel] .div-wrap .row .label[data-v-d017d450],[panel] .div-wrap .row .row-data[data-v-d017d450]{display:table-cell;padding:10px 20px;vertical-align:middle}[panel] .div-wrap .desc[data-v-d017d450]{margin-top:60px;text-align:center;font-size:1.5rem;letter-spacing:-.72px;line-height:1.5}[panel] .div-wrap .date[data-v-d017d450]{margin-top:60px;text-align:right}[panel] .div-wrap .date span[data-v-d017d450]{margin-left:50px}@media (min-width:1260px){[panel][data-v-d017d450]{width:1000px}[panel] .content[data-v-d017d450]{margin-top:0}}',""])},3558:function(t,e,i){"use strict";var a=i(880);i.n(a).a},3559:function(t,e,i){(t.exports=i(1)(!1)).push([t.i,'.flex-vhm[data-v-666153da]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flex-hm[data-v-666153da],.flex-vhm[data-v-666153da]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.flex-vm[data-v-666153da]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}[policy] h4[data-v-666153da]{margin-top:55px;font-size:1.75rem;letter-spacing:-.84px;line-height:1.5;font-weight:500;text-align:center;margin-bottom:20px}[policy] h5[data-v-666153da]{margin-top:35px;font-size:1.25rem;letter-spacing:-.6px;line-height:1.5;font-weight:500}[policy] h5.h6[data-v-666153da],[policy] h6[data-v-666153da]{margin:20px 0 10px;font-size:1.125rem;letter-spacing:-.54px;line-height:1.5}[policy] .policy-content[data-v-666153da]{background:#f6f7f8;padding:10px 20px}[policy] .policy-content ul[data-v-666153da]{-webkit-column-count:2;-moz-column-count:2;column-count:2}[policy] .policy-content li[data-v-666153da]{-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:top;display:inline-block;font-size:.875rem;letter-spacing:-.42px;line-height:1.5;line-height:1.43;font-weight:400;margin:12px 0;width:100%;letter-spacing:-1px;color:#000;background:#f6f7f8}[policy] .policy-content li.on[data-v-666153da]{color:#14adea}[policy] .policy-content li div[data-v-666153da]{height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center}[policy] .policy-content li div[data-v-666153da],[policy] .policy-content li div a[data-v-666153da]{display:-webkit-box;display:-ms-flexbox;display:flex}[policy] .content[data-v-666153da]{margin:40px auto 0;height:1000px;padding:0 20px}[policy] .content .footer[data-v-666153da]{text-align:center;font-size:.875rem;letter-spacing:-.42px;line-height:1.5;line-height:2.86;padding:0 20px;color:#222;position:relative}[policy] .content .footer a[data-v-666153da]{cursor:pointer;position:absolute}[policy] .content .footer a.prev[data-v-666153da]{left:10px}[policy] .content .footer a.prev img[data-v-666153da]{margin-right:5px}[policy] .content .footer a.next[data-v-666153da]{right:10px}[policy] .content .footer a.next img[data-v-666153da]{margin-left:5px}[policy] .content .footer a[data-v-666153da]:hover{font-weight:500}[policy] .pdfobject[data-v-666153da]{border:1px solid #707070}[policy] dl.agree[data-v-666153da]{margin:20px;background:#14adea;color:#fff;font-size:.875rem;letter-spacing:-.42px;line-height:1.5;border-radius:2px;border:1px solid #14adea;-webkit-box-sizing:border-box;box-sizing:border-box}[policy] dl.agree dt[data-v-666153da]{padding:12px 20px;margin-right:10px;position:relative;background:url("/public/img/icon/arrow-down-w.svg") 100%;background-repeat:no-repeat}[policy] dl.agree dt.on[data-v-666153da]{background:url("/public/img/icon/arrow-up-w.svg") 100%;background-repeat:no-repeat}[policy] dl.agree dt.on+dd[data-v-666153da]{display:block}[policy] dl.agree dd[data-v-666153da]{padding:8px 20px 10px;display:none;color:#222;background-color:#fff}[policy] dl.agree dd [Check][data-v-666153da]{color:#707070}[policy] dl.agree dd .input-wrap[data-v-666153da]{line-height:1.5;padding-right:0}[policy] dl.agree dd .input-wrap .btn[data-v-666153da]{position:relative;width:100%;display:block}[policy] dl.agree dd p.grey--text[data-v-666153da]{color:#707070}[policy] dl.agree .btn.disabled[data-v-666153da]{background-color:#dadada;pointer-events:none}[policy] dl.agree .btn.disabled[data-v-666153da]:hover{border-color:#dadada}@media (min-width:768px){[policy] .policy-content[data-v-666153da]{padding:10px 40px}[policy] .policy-content ul[data-v-666153da]{-webkit-column-count:3;-moz-column-count:3;column-count:3}[policy] .policy-content li[data-v-666153da]{font-size:.875rem;letter-spacing:-.42px;line-height:1.5;line-height:1.43;letter-spacing:-.5px}[policy] .content[data-v-666153da]{padding:0 40px}[policy] dl.agree[data-v-666153da]{margin:20px 40px}[policy] dl.agree dt[data-v-666153da]{padding:18px 30px;margin-right:30px}[policy] dl.agree dd[data-v-666153da]{padding:20px 30px 30px}[policy] dl.agree dd .input-wrap[data-v-666153da]{padding-right:200px}[policy] dl.agree dd .input-wrap .btn[data-v-666153da]{position:absolute;width:120px}}@media (min-width:992px){[policy] .content[data-v-666153da]{padding:0 40px}[policy] dl.agree dd .input-wrap .disagree[data-v-666153da]{margin-top:-10px!important}}@media (min-width:1260px){[policy] .policy-content[data-v-666153da]{margin:0 auto;padding:10px calc(50% - 600px);background-clip:border-box}[policy] .content[data-v-666153da]{width:1200px;padding:0}[policy] dl.agree[data-v-666153da]{width:1200px;margin:30px auto}}',""])},4165:function(t,e,i){"use strict";i.r(e);var a=i(2111),n=i(875);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i(3558);var r=i(0),d=Object(r.a)(n.default,a.a,a.b,!1,null,"666153da",null);e.default=d.exports},84:function(t,e,i){"use strict";i.r(e);var a=i(1998),n=i(126);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i(2767);var r=i(0),d=Object(r.a)(n.default,a.a,a.b,!1,null,"01e0ca84",null);e.default=d.exports},875:function(t,e,i){"use strict";i.r(e);var a=i(876),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e.default=n.a},876:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=v(i(16)),n=v(i(18)),o=v(i(30)),r=v(i(14)),d=v(i(29)),l=v(i(5)),s=v(i(23)),c=i(8),p=v(i(11)),f=v(i(12)),u=v(i(15)),g=i(19),h=v(i(3555));function v(t){return t&&t.__esModule?t:{default:t}}e.default={watch:{$route:{handler:function(t,e){t.meta.hash=this.$el.offsetTop-78,t.params.code===e.params.code||t.params.code===this.category[0].code.toLowerCase()&&!e.params.code?(t.meta.hash=this.$el.offsetTop,(0,g.getScrollBody)().animate({scrollTop:(0,c.getOffsetTop)(this.$el.querySelector("#pdfContent"))-78},500)):t.meta.hash="",this.routed()}}},components:{Hero:a.default,ScrollMenu:n.default,Sticky:o.default,Icon:p.default,Check:u.default,InputWrap:f.default,PolicyConfirmPopup:h.default},data:function(){return{category:[],listMap:{},popupTitle:"",pdfPath:"",currentProvision:{},supportPdf:!1,agreeInfo:null,agree1:!1,agree2:!1}},computed:{isActivated:function(){return this.agreeInfo&&"Y"===this.agreeInfo.agreeYn},isLogin:function(){return this.$store.getters.isLogin},loginUser:function(){return this.$store.state.user},paramType:function(){return this.$route.params.type||(this.lists[0]?this.lists[0].provisionTypeCode:"")},paramCode:function(){return this.$route.params.code||(this.category[0]?this.category[0].code.toLowerCase():"")},code:function(){return this.paramCode.toUpperCase()},screen:function(){return this.$store.state.screen.now},locale:function(){return this.$store.state.locale},lists:function(){return this.listMap[this.code]||[]},availableAgree:function(){return"TERMS"===this.code&&this.isLogin&&"JP"===this.loginUser.cntryCd&&"BIZ"===this.loginUser.accntTpCd&&"ja-JP"===this.locale},cntryCd:function(){return this.isLogin?this.loginUser.cntryCd:"KR"}},methods:{getCategory:function(){var t=this;r.default.get("/api/provision/category",{params:{categoryKind:"MAIN"}}).then((function(e){var i=e.data;t.category=i;var a=l.default.map(t.category,(function(e){return t.getCategoryList(e.code)}));Promise.all(a).then((function(){t.routed()}))})).catch((0,s.default)(this))},getCategoryList:function(t){var e=this;return r.default.get("/api/common/provisions/"+t+"/"+this.cntryCd).then((function(i){var a=i.data,n=l.default.map(a,(function(t){return t.provisionTypeCode=l.default.toLower(t.provisionTypeCode),t}));e.$set(e.listMap,t,n)})).catch((0,s.default)(this))},getPdf:function(t){var e=this,i="";if("open"===t){var a=l.default.find(this.lists,{provisionTypeCode:this.paramType})||{},n=a.provisionName;i=a.version,this.popupTitle=n}else if(i=this.currentProvision[t+"Version"],0===this.currentProvision[t+"Version"])return;var o="/api/common/provision/"+this.paramType+"/"+i+"/"+this.cntryCd+"?provisionCategoryCode="+this.code;r.default.get(o).then((function(t){var i=t.data;i&&i.provision&&(e.currentProvision=i.provision||{},e.pdfPath=e.currentProvision.provisionFilePath),e.$nextTick((function(){(0,c.renderPDF)(e.pdfPath,e.$refs.pdf)}))})).catch((0,s.default)(this))},routed:function(){this.supportPdf&&this.getPdf("open")},goRouter:function(t,e){void 0===e&&(e=this.listMap[t][0].provisionTypeCode),this.$router.push("/policy/"+t.toLowerCase()+"/"+e)},contentClick:function(t){"DT"===t.target.tagName&&(0,d.default)(t.target).toggleClass("on")},openConfirmationPopup:function(){this.$refs.policyConfirmPopup.open(this.agreeInfo)},checkPolicyAgree:function(){var t=this;this.agree1=!1,this.agree2=!1,r.default.get("/api/provision/add").then((function(e){var i=e.data;t.agreeInfo=i})).catch((0,s.default)(this))},agree:function(t){var e=this,i={agreeNo:1,agreeYn:t};r.default.post("/api/provision/add",i).then((function(t){"success"===t.data.result&&(alert(e.$t("common.changed")),(0,d.default)(".agree dt").removeClass("on"),e.checkPolicyAgree())})).catch((0,s.default)(this))}},mounted:function(){this.supportPdf=(0,c.isSupportPDFs)()||(0,c.isIE11)(),this.getCategory(),this.availableAgree&&this.checkPolicyAgree()}}},877:function(t,e,i){"use strict";i.r(e);var a=i(878),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e.default=n.a},878:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),o=f(i(6)),r=f(i(22)),d=f(i(7)),l=f(i(25)),s=f(i(31)),c=f(i(9)),p=f(i(84));function f(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var h=(0,d.default)({components:{Popup:l.default,Panel:s.default,BtnWrap:c.default,PrintHtml:p.default}})(a=function(t){function e(){var t,i,a;u(this,e);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return i=a=g(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),a.isOpen=!1,a.agreeInfo={},g(a,i)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"open",value:function(t){this.agreeInfo=t,this.isOpen=!0}},{key:"dateFormat",value:function(t){return(0,r.default)(t).format("ll")}},{key:"printThis",value:function(){this.$refs.print.print(this.$el.querySelector(".for-print"))}},{key:"today",get:function(){return(0,r.default)().format("ll")}}]),e}(o.default))||a;e.default=h},879:function(t,e,i){var a=i(3557);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(2).default)("c5d948b2",a,!0,{})},880:function(t,e,i){var a=i(3559);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(2).default)("06732a14",a,!0,{})}}]);