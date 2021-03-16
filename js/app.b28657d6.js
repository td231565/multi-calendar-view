(function(e){function t(t){for(var n,r,l=t[0],i=t[1],s=t[2],d=0,b=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&b.push(o[r][0]),o[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),c()}function c(){for(var e,t=0;t<a.length;t++){for(var c=a[t],n=!0,l=1;l<c.length;l++){var i=c[l];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=c[0]))}return e}var n={},o={app:0},a=[];function r(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=n,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(c,n,function(t){return e[t]}.bind(null,n));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/multi-calendar-view/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;a.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function o(e,t,c,o,a,r){var l=Object(n["resolveComponent"])("Calendar");return Object(n["openBlock"])(),Object(n["createBlock"])(l,{username:o.userName,onLogout:o.liffLogout,onLogin:o.liffLogin},null,8,["username","onLogout","onLogin"])}var a=c("fd32"),r=c.n(a),l=Object(n["withScopeId"])("data-v-24cb169c");Object(n["pushScopeId"])("data-v-24cb169c");var i={class:"calendar-shadow",style:{padding:"6px 10px 18px 10px"}},s={class:"fx fx-jsb fx-aic mb-1"},u={key:0,class:"fx fx-jsb fx-aic calendar-datepicker"},d={key:1,class:"ml-2"},b={class:"fx"},f={class:"fx fx-jsb fx-aic"},p={key:0,class:"calendar-weeks-bar fx fx-jsb"},O={class:"mb-1"},v={key:0},j={class:"calendar-container"},m={class:"fx fx-jcc mt-4"},h=Object(n["createVNode"])("h3",null,"新增預約",-1),k=Object(n["createVNode"])("p",{class:"mb-1"},"每次預約將花費您1個小時",-1),g=Object(n["createVNode"])("span",{class:"mr-1"},"預約時段/",-1),w=Object(n["createVNode"])("option",{value:"am"},"上午",-1),y=Object(n["createVNode"])("option",{value:"pm"},"下午",-1),V=Object(n["createVNode"])("span",{class:"ml-3 mr-1"},"預約時間/",-1);Object(n["popScopeId"])();var C=l((function(e,t,c,o,a,r){var C=Object(n["resolveComponent"])("CustomSelector"),D=Object(n["resolveComponent"])("VueCal"),S=Object(n["resolveComponent"])("CalendarMonthSelect"),N=Object(n["resolveComponent"])("CustomDialog");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])("section",i,[Object(n["withDirectives"])(Object(n["createVNode"])("div",s,[o.isDayView?(Object(n["openBlock"])(),Object(n["createBlock"])("div",u,[Object(n["createVNode"])("button",{class:"calendar-arrow-btn calendar-arrow-btn__prev",onClick:t[1]||(t[1]=function(e){return o.changeDate("prev")})}),Object(n["createVNode"])("p",null,Object(n["toDisplayString"])(o.selectedDate),1),Object(n["createVNode"])("button",{class:"calendar-arrow-btn calendar-arrow-btn__next",onClick:t[2]||(t[2]=function(e){return o.changeDate("next")})})])):o.isWeekView?(Object(n["openBlock"])(),Object(n["createBlock"])("h1",d,"預約行事曆")):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])("div",b,[Object(n["createVNode"])(C,{current:o.activeView,optionList:o.viewSelectOptions,onOnChange:o.switchView},null,8,["current","optionList","onOnChange"]),Object(n["createVNode"])(C,{current:o.currentUser,optionList:o.userSetting,onOnChange:o.handleUserLogState,class:"ml-1"},null,8,["current","optionList","onOnChange"])])],512),[[n["vShow"],!o.isMonthView]]),Object(n["createVNode"])("div",f,[Object(n["createVNode"])("button",{class:"calendar-switch-btn bg-secondary circle mr-1",onClick:t[3]||(t[3]=function(e){return o.showMonthCalendar(!0)})}),o.isMonthView?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])("div",p,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(o.weekDateNumber,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{key:e,class:"calendar-weeks-bar__item fx fx-jcc"},[Object(n["createVNode"])("div",{class:["calendar-weeks-bar__item__content",{"calendar-weeks-bar__item--current":e===o.getLocalDateString(new Date),"calendar-weeks-bar__item--selected":o.isDayView&&e===o.getLocalDateString(o.selectedDate)}],onClick:function(t){return o.chooseDate(e)}},[Object(n["createVNode"])("p",O,Object(n["toDisplayString"])(o.weekList[t]),1),o.isMonthView?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])("p",v,Object(n["toDisplayString"])(new Date(e).getDate()),1))],10,["onClick"])])})),128))])),"month"===o.activeView.key?(Object(n["openBlock"])(),Object(n["createBlock"])("button",{key:1,class:"calendar-close-btn",onClick:t[4]||(t[4]=function(){return o.callMonth&&o.callMonth.apply(o,arguments)})},"╳")):Object(n["createCommentVNode"])("",!0)])]),Object(n["createVNode"])("div",j,[Object(n["createVNode"])(D,{ref:"vuecal","hide-view-selector":"","hide-title-bar":"",xsmall:"",twelveHour:"",timeFrom:360,timeCellHeight:60,activeView:o.activeView.key,disableViews:["years","year"],class:"vuecal--rounded-theme custom-theme","selected-date":o.selectedDate,onCellFocus:o.chooseDate,onViewChange:o.handleViewChange},null,8,["activeView","selected-date","onCellFocus","onViewChange"])]),Object(n["createVNode"])("div",m,[Object(n["createVNode"])("button",{class:"btn btn-primary",onClick:t[5]||(t[5]=function(){return o.showEventCreate&&o.showEventCreate.apply(o,arguments)})},Object(n["toDisplayString"])(o.submitBtn.text),1)]),o.isShowMonthCalendar?(Object(n["openBlock"])(),Object(n["createBlock"])(S,{key:0,current:o.selectedDate,onSelectDate:o.selectDateFromMonth,onOnClose:t[6]||(t[6]=function(e){return o.showMonthCalendar(!1)})},null,8,["current","onSelectDate"])):Object(n["createCommentVNode"])("",!0),o.isShowEventPicker?(Object(n["openBlock"])(),Object(n["createBlock"])(N,{key:1,onOnClose:o.handleTimePickAction},{header:l((function(){return[h]})),content:l((function(){return[k,g,Object(n["withDirectives"])(Object(n["createVNode"])("select",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return o.timeNoon=e})},[w,y],512),[[n["vModelSelect"],o.timeNoon]]),V,Object(n["withDirectives"])(Object(n["createVNode"])("select",{"onUpdate:modelValue":t[8]||(t[8]=function(e){return o.timeHour=e})},[(Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(12,(function(e){return Object(n["createVNode"])("option",{key:e,value:"".concat(e,":00")},Object(n["toDisplayString"])(e)+":00",9,["value"])})),64))],512),[[n["vModelSelect"],o.timeHour]])]})),_:1},8,["onOnClose"])):Object(n["createCommentVNode"])("",!0)],64)})),D=c("2909"),S=c("3835"),N=(c("4de4"),c("7db0"),c("1276"),c("ac1f"),c("4d90"),c("99af"),c("d81d"),c("cb29"),c("a15b"),c("13d5"),c("a9e3"),c("7fa7")),_=c.n(N),x=(c("b55b"),{class:"custom-select__current fx fx-jsb fx-aic"}),B={class:"custom-select__current"},L={key:0,class:"custom-select__list"};function M(e,t,c,o,a,r){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{class:"custom-select",onClick:t[1]||(t[1]=function(e){return o.isSelectActive=!o.isSelectActive})},[Object(n["createVNode"])("div",x,[Object(n["createVNode"])("p",B,Object(n["toDisplayString"])(o.selectedOption.title),1),Object(n["createVNode"])("p",{class:["custom-select__arrow ml-1",{active:o.isSelectActive}]},null,2)]),o.isSelectActive?(Object(n["openBlock"])(),Object(n["createBlock"])("div",L,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(o.list,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("p",{key:e.key,class:"custom-select__item",onClick:function(t){return o.selectAOption(e.key)}},Object(n["toDisplayString"])(e.title),9,["onClick"])})),128))])):Object(n["createCommentVNode"])("",!0)])}var A={name:"CustomSelector",props:{current:{type:Object},optionList:{type:Array}},setup:function(e,t){var c=t.emit,o=Object(n["ref"])(!1),a=Object(n["toRefs"])(e),r=a.current,l=a.optionList,i=function(e){c("on-change",e)};return{isSelectActive:o,list:l,selectedOption:r,selectAOption:i}}};A.render=M;var I=A,F=Object(n["withScopeId"])("data-v-33a8e68f");Object(n["pushScopeId"])("data-v-33a8e68f");var P={class:"custom-dialog__cover"},E={class:"custom-dialog__main"},T={class:"custom-dialog__header fx fx-jsb fx-aic mb-3"},U={class:"custom-dialog__content"},H={class:"custom-dialog__footer"},R={class:"fx fx-jcc fx-aic mt-3"};Object(n["popScopeId"])();var W=F((function(e,t,c,o,a,r){return Object(n["openBlock"])(),Object(n["createBlock"])("div",P,[Object(n["createVNode"])("div",E,[Object(n["createVNode"])("header",T,[Object(n["renderSlot"])(e.$slots,"header"),Object(n["createVNode"])("button",{class:"calendar-close-btn",onClick:t[1]||(t[1]=function(e){return o.closeDialog()})},"╳")]),Object(n["createVNode"])("main",U,[Object(n["renderSlot"])(e.$slots,"content")]),Object(n["createVNode"])("footer",H,[Object(n["renderSlot"])(e.$slots,"footer",{},(function(){return[Object(n["createVNode"])("div",R,[Object(n["createVNode"])("button",{class:"btn btn-primary",onClick:t[2]||(t[2]=function(e){return o.closeDialog("success")})},"送出"),Object(n["createVNode"])("button",{class:"btn ml-1",onClick:t[3]||(t[3]=function(e){return o.closeDialog()})},"取消")])]}))])])])})),$={name:"CustomDialog",props:{},emits:["on-close"],setup:function(e,t){var c=t.emit,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";c("on-close",e)};return{closeDialog:n}}};$.render=W,$.__scopeId="data-v-33a8e68f";var J=$,X=Object(n["withScopeId"])("data-v-6ac8957e");Object(n["pushScopeId"])("data-v-6ac8957e");var z=Object(n["createVNode"])("h3",null,"選擇日期",-1),G={class:"fx fx-jcc mt-3"};Object(n["popScopeId"])();var q=X((function(e,t,c,o,a,r){var l=Object(n["resolveComponent"])("VueCal"),i=Object(n["resolveComponent"])("CustomDialog");return Object(n["openBlock"])(),Object(n["createBlock"])(i,{onOnClose:o.closeDialog},{header:X((function(){return[z]})),content:X((function(){return[Object(n["createVNode"])(l,{"hide-view-selector":"",xsmall:"",activeView:"month","selected-date":o.selectDate,disableViews:["years","year","week","day"],class:"vuecal--rounded-theme custom-theme",onCellFocus:o.chooseDate},null,8,["selected-date","onCellFocus"])]})),footer:X((function(){return[Object(n["createVNode"])("div",G,[Object(n["createVNode"])("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=function(){return o.submit&&o.submit.apply(o,arguments)})},"選擇")])]})),_:1},8,["onOnClose"])})),K={name:"CalendarMonthSelect",components:{VueCal:_.a,CustomDialog:J},props:{current:{type:String}},emits:["select-date","on-close"],setup:function(e,t){var c=t.emit,o=Object(n["toRefs"])(e),a=o.current,r=Object(n["ref"])("");r.value=a.value;var l=function(e){r.value=e},i=function(){c("select-date",r.value)},s=function(e){c("on-close",e)};return{selectDate:r,chooseDate:l,submit:i,closeDialog:s}}};K.render=q,K.__scopeId="data-v-6ac8957e";var Q=K,Y={name:"Calendar",components:{VueCal:_.a,CustomSelector:I,CustomDialog:J,CalendarMonthSelect:Q},props:{username:{type:String}},emits:["logout","login"],setup:function(e,t){var c=t.emit,o=Object(n["toRefs"])(e),a=o.username,r=Object(n["reactive"])({key:"user",title:a}),l=Object(n["ref"])({}),i=Object(n["computed"])((function(){return"month"===l.value.key})),s=Object(n["computed"])((function(){return"week"===l.value.key})),u=Object(n["computed"])((function(){return"day"===l.value.key})),d=[{key:"week",title:"周檢視"},{key:"day",title:"日檢視"},{key:"month",title:"月檢視"}];l.value=d[0];var b=d.filter((function(e){return"month"!==e.key})),f=Object(n["ref"])(!1),p=function(e){l.value=d.find((function(t){return t.key===e}))},O=function(){var e=l.value,t=function(){"month"!==l.value.key?(e=l.value,p("month")):p(e.key)};return{switch:t}}(),v=Object(n["ref"])(null),j=Object(n["ref"])([]),m=Object(n["ref"])(""),h=function(e){var t=new Date(e).toLocaleDateString().split("/"),c=Object(S["a"])(t,3),n=c[0],o=c[1],a=c[2];return o=o.padStart(2,"0"),a=a.padStart(2,"0"),"".concat(n,"-").concat(o,"-").concat(a)},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;m.value=h(e),p("day")};k();var g=function(e){"prev"===e?v.value.previous():v.value.next()},w=["M","T","W","T","F","S","S"],y=Object(n["ref"])([]),V=function(e){var t=new Date(e),c=1===t.getDay()?t.getDate():0===t.getDay()?t.getDate()-6:t.getDate()-(t.getDay()-1);y.value=new Array(7).fill(0).map((function(t,n){return h(new Date(new Date(e).setDate(c+n)))}))};V(m.value);var C=function(e){var t=e.view,c=e.startDate;if(t)switch(p(t),V(c),t){case"day":k(c);break;default:break}},N=Object(n["computed"])((function(){return i.value?{type:"select",text:"選擇",func:k}:{type:"add",text:"+ 新增預約",func:P}})),_=Object(n["ref"])(!1),x=function(e){_.value=e},B=function(e){k(e),x(!1)},L=[{key:"login",title:"登入"},{key:"logout",title:"登出"}],M=Object(n["computed"])((function(){return L.filter((function(e){var t="訪客"===a.value?"login":"logout";return e.key===t}))})),A=function(e){c(e)},I=Object(n["ref"])(!1),F=function(e){I.value=e},P=function(e){v.value.createEvent("".concat(m.value," ").concat(e),60,{title:"預約",content:"換電池",class:"blue-event"})},E=Object(n["ref"])("am"),T=Object(n["ref"])("1:00"),U=function(e){if(console.log(e),"success"===e){var t="am"===E.value&&"12:00"===T.value?"0:00":"pm"===E.value?T.value.split(":").reduce((function(e,t,c){return[].concat(Object(D["a"])(e),[0===c?Number(t)+12:t])}),[]).join(":"):T.value;P(t)}F(!1)};return{currentUser:r,activeView:l,isMonthView:i,isWeekView:s,isDayView:u,weekList:w,weekDateNumber:y,viewSelectOptions:b,isSelectActive:f,switchView:p,callMonth:O.switch,vuecal:v,selectedDate:m,chooseDate:k,changeDate:g,getLocalDateString:h,bookingList:j,handleViewChange:C,addNewEvent:P,handleUserLogState:A,submitBtn:N,userSetting:M,selectDateFromMonth:B,showMonthCalendar:x,isShowMonthCalendar:_,timeHour:T,timeNoon:E,handleTimePickAction:U,isShowEventPicker:I,showEventCreate:F}}};Y.render=C,Y.__scopeId="data-v-24cb169c";var Z=Y,ee={name:"App",components:{Calendar:Z},setup:function(){var e=Object(n["ref"])("訪客"),t=Object(n["ref"])(!1),c="1654944538-wRrGzXyX",o=function(){r.a.login()},a=function(){r.a.logout(),l()},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"訪客";e.value=t},i=function(){r.a.getProfile().then((function(e){var t=e.displayName;l(t)})).catch((function(e){console.log(e)}))},s=function(){r.a.init({liffId:c}).then((function(){t.value=r.a.isLoggedIn()})).then((function(){t.value&&i()}))};return s(),{isLogin:t,userName:e,liffLogout:a,liffLogin:o}}};c("c86a");ee.render=o;var te=ee;Object(n["createApp"])(te).mount("#app")},c86a:function(e,t,c){"use strict";c("cfd5")},cfd5:function(e,t,c){}});
//# sourceMappingURL=app.b28657d6.js.map