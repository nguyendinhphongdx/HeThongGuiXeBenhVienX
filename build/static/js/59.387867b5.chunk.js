(this["webpackJsonpreact-admin-template"]=this["webpackJsonpreact-admin-template"]||[]).push([[59],{1130:function(e,t,n){"use strict";n.r(t);var a=n(749),i=n(3),r=n(9),c=n(17),o=n(0),l=n(25),s=n.n(l),u=n(229),d=n(89);function h(e){var t=e.className,n=e.direction,a=e.index,c=e.marginDirection,l=e.children,s=e.split,u=e.wrap,d=o.useContext(v),h=d.horizontalSize,m=d.verticalSize,p=d.latestIndex,b={};return d.supportFlexGap||("vertical"===n?a<p&&(b={marginBottom:h/(s?2:1)}):b=Object(i.a)(Object(i.a)({},a<p&&Object(r.a)({},c,h/(s?2:1))),u&&{paddingBottom:m})),null===l||void 0===l?null:o.createElement(o.Fragment,null,o.createElement("div",{className:t,style:b},l),a<p&&s&&o.createElement("span",{className:"".concat(t,"-split"),style:b},s))}var m=n(789),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n},v=o.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),b={small:8,middle:16,large:24};var f=function(e){var t,n=o.useContext(d.b),a=n.getPrefixCls,l=n.space,f=n.direction,x=e.size,g=void 0===x?(null===l||void 0===l?void 0:l.size)||"small":x,j=e.align,y=e.className,O=e.children,k=e.direction,w=void 0===k?"horizontal":k,z=e.prefixCls,S=e.split,N=e.style,I=e.wrap,E=void 0!==I&&I,A=p(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),C=Object(m.a)(),D=o.useMemo((function(){return(Array.isArray(g)?g:[g,g]).map((function(e){return function(e){return"string"===typeof e?b[e]:e||0}(e)}))}),[g]),F=Object(c.a)(D,2),P=F[0],B=F[1],G=Object(u.a)(O,{keepEmpty:!0}),M=void 0===j&&"horizontal"===w?"center":j,J=a("space",z),L=s()(J,"".concat(J,"-").concat(w),(t={},Object(r.a)(t,"".concat(J,"-rtl"),"rtl"===f),Object(r.a)(t,"".concat(J,"-align-").concat(M),M),t),y),T="".concat(J,"-item"),U="rtl"===f?"marginLeft":"marginRight",R=0,V=G.map((function(e,t){return null!==e&&void 0!==e&&(R=t),o.createElement(h,{className:T,key:"".concat(T,"-").concat(t),direction:w,index:t,marginDirection:U,split:S,wrap:E},e)})),H=o.useMemo((function(){return{horizontalSize:P,verticalSize:B,latestIndex:R,supportFlexGap:C}}),[P,B,R,C]);if(0===G.length)return null;var W={};return E&&(W.flexWrap="wrap",C||(W.marginBottom=-B)),C&&(W.columnGap=P,W.rowGap=B),o.createElement("div",Object(i.a)({className:L,style:Object(i.a)(Object(i.a)({},W),N)},A),o.createElement(v.Provider,{value:H},V))},x=n(769),g=n(1149),j=n(222),y=n(128),O=(n(127),n(776),n(19)),k=function(e){e.service,Object(y.b)();var t=Object(o.useState)(!1),n=Object(j.a)(t,2),a=n[0];n[1];return Object(O.jsx)("div",{onClick:function(){},style:{display:"flex",justifyContent:"center",cursor:"pointer",width:"120px"},children:Object(O.jsx)(x.a,{block:!0,color:"primary",disabled:a,children:"Exec"})})};t.default=function(){var e=[{title:"DeviceId",dataIndex:"deviceId",width:"15%"},{title:"UserName",dataIndex:"username",width:"10%"},{title:"Ip Address",dataIndex:"ip",width:"10%"},{title:"Connect",dataIndex:"connect",width:"10%"},{title:"Action",key:"action",fixed:"right",width:"25%",render:function(e){return Object(O.jsxs)(f,{size:"middle",children:[Object(O.jsx)(k,{service:e}),Object(O.jsx)(x.a,{className:"ant-dropdown-link",onClick:function(){return console.log()},children:"Update"})]})}}];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(a.j,{children:[Object(O.jsx)(a.n,{children:"FIREBASE"}),Object(O.jsx)(a.k,{children:Object(O.jsx)(a.wb,{children:Object(O.jsx)(a.u,{children:Object(O.jsx)(g.a,{tableLayout:"fixed",dataSource:[{deviceId:"a",username:"b",ip:"c",connect:!1}],columns:e,pagination:{pageSize:5}})})})})]})})}},776:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return u}));var a=n(5),i=n(218),r=n(755),c=function(e){try{console.log("inconvert",e);var t=e.header||[],n=e.body||[],a=e.params||[],c=e.Authorization||{},o=e.typebody||"json",l={};Array.isArray(t)&&t.forEach((function(e,t){l["".concat(e.key)]=e.value}));var s={};Array.isArray(n)?n.forEach((function(e,t){s["".concat(e.key)]=e.value})):s=JSON.parse(n);var u={};Array.isArray(a)&&a.forEach((function(e,t){u["".concat(e.key)]=e.value})),"none"===c.type?delete c.type:c=r.a.EncodeAuthorization(c);var d={method:e.method_direct,url:e.url,header:l,typebody:o,body:s,params:u,Authorization:c},h={Id:e.id||-1,endpoint:e.endpoint,config:{}};return h.config["".concat(e.method)]=d,h}catch(m){i.b.error(m.message)}},o=function(e){return e.taikhoan?!!e.matkhau||{message:"Password not invalid"}:{message:"Username not invalid"}},l=function(e){return e.sodienthoai?e.tenNhanVien?!e.tuoi||+e.tuoi<16?"Tu\u1ed5i kh\xf4ng \u0111\u01b0\u1ee3c nh\u1ecf h\u01a1n 16":["1","2","3",1,2,3].includes(e.mavaitro)?{manv:e.manv?+e.manv:-1,sodienthoai:e.sodienthoai,tennv:e.tenNhanVien,tuoi:+e.tuoi,mavaitro:+e.mavaitro}:"Ch\u1ecdn ch\u1ee9c v\u1ee5":"T\xean nh\xe2n vi\xean kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!":"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!"},s=function(e){if(console.log(e),!e.mathe)return"Ch\u1ecdn th\u1ebb";if(!e.bienso)return"Nh\u1eadp v\xe0o bi\u1ec3n s\u1ed1!";if(!e.dstart||!e.tstart)return"Nh\u1eadp v\xe0o ng\xe0y b\u1eaft \u0111\u1ea7u!";if(!e.magia)return"Ch\u1ecdn lo\u1ea1i g\u1eedi!";if(!e.loaixe)return"Nh\u1eadp lo\u1ea1i xe!";if(!e.mauxe)return"Nh\u1eadp m\xe0u xe!";if(!e.manv)return"Nh\xe2n vi\xean l\u1eadp ch\u01b0a \u0111\u01b0\u1ee3c l\u1ef1a ch\u1ecdn!";var t=e.tstart.split(":"),n=new Date(e.dstart);return n.setHours(t[0]),n.setMinutes(t[1]),delete e.thoigianketthuc,Object(a.a)(Object(a.a)({},e),{},{mathe:+e.mathe,manv:+e.manv,magia:+e.magia,thoigianbatdau:n.toISOString()})},u=function(e){return e.mathe?e.bienso?e.loaixe?e.mauxe?{bienso:e.bienso,mathe:+e.mathe,loaixe:e.loaixe,mauxe:e.mauxe,thoigianketthuc:new Date((new Date).getTime()+252e5).toISOString()}:"M\xe0u xe kh\xf4ng ch\xednh x\xe1c!":"Lo\u1ea1i xe kh\xf4ng ch\xednh x\xe1c!":"Bi\u1ec3n s\u1ed1 kh\xf4ng ch\xednh x\xe1c!":"M\xe3 th\u1ebb kh\xf4ng ch\xednh x\xe1c!"}}}]);
//# sourceMappingURL=59.387867b5.chunk.js.map