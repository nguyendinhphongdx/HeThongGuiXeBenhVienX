(this["webpackJsonpreact-admin-template"]=this["webpackJsonpreact-admin-template"]||[]).push([[25],{1142:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(222),i=n(837),c=n(753),o=n(749),s=n(218),u=n(0),l=n(913),d=n(29),h=n(232),m=n(133),j=n(776),p=n(819),b=n(19);t.default=function(){var e=Object(u.useState)(!1),t=Object(r.a)(e,2),n=t[0],f=t[1],x=Object(l.a)(),g=x.register,O=x.handleSubmit,v=x.formState.errors,y=Object(u.useContext)(m.a),w=(y.login,y.token,Object(d.g)());return Object(b.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(b.jsx)(o.w,{children:Object(b.jsx)(o.wb,{className:"justify-content-center",children:Object(b.jsx)(o.u,{md:"9",lg:"7",xl:"6",children:Object(b.jsxs)(o.j,{className:"mx-4",children:[Object(b.jsx)(h.b,{to:"/login",children:Object(b.jsx)(i.a,{style:{fontSize:"30px",textAlign:"left",marginTop:"10px",marginLeft:"10px"}})}),Object(b.jsx)(o.k,{className:"p-4",children:Object(b.jsxs)(o.J,{onSubmit:O((function(e){f(!n);var t=Object(j.d)(e);!0!==t?(alert(t.message),f(!1)):(console.log(e),p.a.SignUpService(e).then((function(e){if(e){e.token;w.replace("/login"),s.b.success("Registry successfully")}})).finally((function(){f(!1)})))})),children:[Object(b.jsx)("h1",{children:"Register"}),Object(b.jsx)("p",{className:"text-muted",children:"Create your account"}),Object(b.jsxs)(o.V,{className:"mb-3",children:[Object(b.jsx)(o.X,{children:Object(b.jsx)(o.Y,{children:Object(b.jsx)(c.a,{name:"cil-user"})})}),Object(b.jsx)(o.S,Object(a.a)({type:"text",placeholder:"Username",autoComplete:"username"},g("username",{required:!0})))]}),v.username&&Object(b.jsx)("span",{className:"error",children:"This field is required"}),Object(b.jsxs)(o.V,{className:"mb-3",children:[Object(b.jsx)(o.X,{children:Object(b.jsx)(o.Y,{children:"@"})}),Object(b.jsx)(o.S,Object(a.a)({type:"text",placeholder:"Email",autoComplete:"email"},g("mail",{required:!0})))]}),v.mail&&Object(b.jsx)("span",{className:"error",children:"This field is required"}),Object(b.jsxs)(o.V,{className:"mb-3",children:[Object(b.jsx)(o.X,{children:Object(b.jsx)(o.Y,{children:Object(b.jsx)(c.a,{name:"cil-lock-locked"})})}),Object(b.jsx)(o.S,Object(a.a)({type:"password",placeholder:"Password",autoComplete:"new-password"},g("password",{required:!0})))]}),v.password&&Object(b.jsx)("span",{className:"error",children:"This field is required"}),Object(b.jsxs)(o.V,{className:"mb-4",children:[Object(b.jsx)(o.X,{children:Object(b.jsx)(o.Y,{children:Object(b.jsx)(c.a,{name:"cil-lock-locked"})})}),Object(b.jsx)(o.S,Object(a.a)({type:"password",placeholder:"Repeat password",autoComplete:"new-password"},g("repeat",{required:!0})))]}),v.repeat&&Object(b.jsx)("span",{className:"error",children:"This field is required"}),Object(b.jsxs)(o.wb,{children:[Object(b.jsxs)(o.u,{md:"9",lg:"7",xl:"6",children:[Object(b.jsxs)(o.V,{className:"mb-4",children:[Object(b.jsx)(o.X,{children:Object(b.jsx)(o.Y,{children:Object(b.jsx)(c.a,{name:"cil-settings"})})}),Object(b.jsxs)(o.xb,Object(a.a)(Object(a.a)({selected:3,defaultValue:"3"},g("role_id",{required:!0})),{},{children:[Object(b.jsx)("option",{children:"Role"}),Object(b.jsx)("option",{value:3,children:"Super User"}),Object(b.jsx)("option",{value:1,children:"Admin"}),Object(b.jsx)("option",{value:2,children:"User"})]}))]}),v.role_id&&Object(b.jsx)("span",{className:"error",children:"This field is required"})]}),Object(b.jsxs)(o.u,{md:"9",lg:"7",xl:"6",children:[Object(b.jsxs)(o.V,{className:"mb-4",children:[Object(b.jsx)(o.X,{children:Object(b.jsx)(o.Y,{children:Object(b.jsx)(c.a,{name:"cil-user"})})}),Object(b.jsx)(o.S,Object(a.a)({placeholder:"Ip Address"},g("ip",{required:!0})))]}),v.ip&&Object(b.jsx)("span",{className:"error",children:"This field is required"})]})]}),Object(b.jsx)(o.f,{color:"primary",type:"submit",disabled:n,className:"px-12",block:!0,children:"Create Account"})]})}),Object(b.jsx)(o.l,{className:"p-4"})]})})})})})}},755:function(e,t,n){"use strict";var a=n(5),r=n(219),i=(n(773),n(127));t.a=new function e(){Object(r.a)(this,e),this.EncodeAuthorization=function(e){if("Bear"===e.type)return"Bear ".concat(e.token);if("Basic"===e.type){var t="".concat(e.username||"",":").concat(e.password||"");return"Basic ".concat(window.btoa(t))}return{}},this.DecodeAuthorization=function(e){if("string"===typeof e){var t=e.split(" ");if(console.log("decode",t),"Bear"===t[0])return{type:t[0],token:t[1]};var n=window.atob(t[1]).split(":");return{type:t[0],username:n[0],password:n[1]}}return{}},this.convertUsers=function(e){return e.map((function(e,t){return Object(a.a)(Object(a.a)({},e),{},{index:t,maNhanVien:"Nh\xe2n Vi\xean ".concat(e.manv),tenNhanVien:"".concat(e.tennv),tuoi:e.tuoi,soDienThoai:e.sdt||"0352337342"})}))},this.convertLocation=function(e){return e.map((function(e,t){return{index:t,maKhuVuc:e.makhuvuc,tenKhuVuc:"Khu V\u1ef1c  ".concat(e.tenkhuvuc),soLuongToiDa:e.soluongtoida,soLuongHienTai:e.soluonghientai}}))},this.convertCard=function(e){return e.map((function(e,t){return Object(a.a)(Object(a.a)({index:t},e),{},{trangthai:e.tinhtrang?"\u0111ang \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng":"ch\u01b0a \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng"})}))},this.convertTicket=function(e){return e.map((function(e,t){var n=e.thoigianketthuc===e.thoigianbatdau?"Ch\u01b0a tr\u1ea3 l\u1ea1i":new Date(e.thoigianketthuc).toLocaleDateString()+" - "+new Date(e.thoigianketthuc).toLocaleTimeString();return Object(a.a)(Object(a.a)({index:t},e),{},{dstart:e.thoigianbatdau,tstart:i.a.getTimeInputTime(e.thoigianbatdau),dend:e.thoigianketthuc,tend:i.a.getTimeInputTime(e.thoigianketthuc),thoigianbatdau:new Date(e.thoigianbatdau).toLocaleDateString()+" - "+new Date(e.thoigianbatdau).toLocaleTimeString(),thoigianketthuc:n})}))},this.convertPrice=function(e){return e.map((function(e,t){return Object(a.a)(Object(a.a)({index:t},e),{},{maGia:"M\xe3 gi\xe1 ".concat(e.magia),loaiGui:"".concat(e.loaiGui," Ng\xe0y")})}))},this.convertChartAnalysType=function(e){var t=e.map((function(e,t){return Object(a.a)(Object(a.a)({},e),{},{key:e.loaixe,value:e.soluong})}));return i.a.addFieldColorRandom(t)}}},759:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(756),r=n.n(a),i=n(757),c=n(847),o=n.n(c),s=n(773),u=o.a.CancelToken.source();function l(e,t,n){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(r.a.mark((function e(t,n,a){var i,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=localStorage.getItem("token")||"",c={method:n,url:"".concat(s.a).concat(t),data:a,cancelToken:u.token,headers:{authorization:"Bear ".concat(i)}},console.log(c),e.next=5,o()(c).then((function(e){if(e&&e.data)return e.data}));case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},771:function(e,t,n){"use strict";var a=n(219),r=n(241);t.a=new function e(){Object(a.a)(this,e),this.openSuccessNotif=function(e,t,n,a){r.store.addNotification({id:t,title:e||"Wonderful!",message:t||"teodosii@react-notifications-component",type:a||"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:n||5e3,onScreen:!0}})},this.openTypeNotif=function(e,t,n,a){r.store.addNotification({id:t,title:e||"Wonderful!",message:t||"teodosii@react-notifications-component",type:a||"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:n||5e3,onScreen:!0}})},this.clearNotif=function(e){r.store.removeNotification(e)}}},773:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="https://localhost:5001/api"},776:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return l}));var a=n(5),r=n(218),i=n(755),c=function(e){try{console.log("inconvert",e);var t=e.header||[],n=e.body||[],a=e.params||[],c=e.Authorization||{},o=e.typebody||"json",s={};Array.isArray(t)&&t.forEach((function(e,t){s["".concat(e.key)]=e.value}));var u={};Array.isArray(n)?n.forEach((function(e,t){u["".concat(e.key)]=e.value})):u=JSON.parse(n);var l={};Array.isArray(a)&&a.forEach((function(e,t){l["".concat(e.key)]=e.value})),"none"===c.type?delete c.type:c=i.a.EncodeAuthorization(c);var d={method:e.method_direct,url:e.url,header:s,typebody:o,body:u,params:l,Authorization:c},h={Id:e.id||-1,endpoint:e.endpoint,config:{}};return h.config["".concat(e.method)]=d,h}catch(m){r.b.error(m.message)}},o=function(e){return e.taikhoan?!!e.matkhau||{message:"Password not invalid"}:{message:"Username not invalid"}},s=function(e){return e.sodienthoai?e.tenNhanVien?!e.tuoi||+e.tuoi<16?"Tu\u1ed5i kh\xf4ng \u0111\u01b0\u1ee3c nh\u1ecf h\u01a1n 16":["1","2","3",1,2,3].includes(e.mavaitro)?{manv:e.manv?+e.manv:-1,sodienthoai:e.sodienthoai,tennv:e.tenNhanVien,tuoi:+e.tuoi,mavaitro:+e.mavaitro}:"Ch\u1ecdn ch\u1ee9c v\u1ee5":"T\xean nh\xe2n vi\xean kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!":"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!"},u=function(e){if(console.log(e),!e.mathe)return"Ch\u1ecdn th\u1ebb";if(!e.bienso)return"Nh\u1eadp v\xe0o bi\u1ec3n s\u1ed1!";if(!e.dstart||!e.tstart)return"Nh\u1eadp v\xe0o ng\xe0y b\u1eaft \u0111\u1ea7u!";if(!e.magia)return"Ch\u1ecdn lo\u1ea1i g\u1eedi!";if(!e.loaixe)return"Nh\u1eadp lo\u1ea1i xe!";if(!e.mauxe)return"Nh\u1eadp m\xe0u xe!";if(!e.manv)return"Nh\xe2n vi\xean l\u1eadp ch\u01b0a \u0111\u01b0\u1ee3c l\u1ef1a ch\u1ecdn!";var t=e.tstart.split(":"),n=new Date(e.dstart);return n.setHours(t[0]),n.setMinutes(t[1]),delete e.thoigianketthuc,Object(a.a)(Object(a.a)({},e),{},{mathe:+e.mathe,manv:+e.manv,magia:+e.magia,thoigianbatdau:n.toISOString()})},l=function(e){return e.mathe?e.bienso?e.loaixe?e.mauxe?{bienso:e.bienso,mathe:+e.mathe,loaixe:e.loaixe,mauxe:e.mauxe,thoigianketthuc:new Date((new Date).getTime()+252e5).toISOString()}:"M\xe0u xe kh\xf4ng ch\xednh x\xe1c!":"Lo\u1ea1i xe kh\xf4ng ch\xednh x\xe1c!":"Bi\u1ec3n s\u1ed1 kh\xf4ng ch\xednh x\xe1c!":"M\xe3 th\u1ebb kh\xf4ng ch\xednh x\xe1c!"}},819:function(e,t,n){"use strict";var a=n(756),r=n.n(a),i=n(757),c=n(219),o=n(218),s=n(759),u=n(755),l=n(771),d=n(16),h=function(e){return{type:d.j.QUERY_ALL,payload:e}};t.a=new function e(){Object(c.a)(this,e),this.LoginService=function(){var e=Object(i.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)("/user/login","post",t).then((function(e){if(e&&e.data)return console.log("result.data",e.data),e.data;throw new Error(e.message)})).catch((function(e){l.a.openSuccessNotif("Create User",e.message,2e3)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.SignUpService=function(){var e=Object(i.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)("/user/registry","post",t).then((function(e){if(e&&e.data)return e.data;throw new Error(e.message)})).catch((function(e){o.b.error(e.message),console.log(e.message)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.QueryAll=function(){var e=Object(i.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)("/user/queryAll","get").then((function(e){if(e&&e.data){var n=h(u.a.convertUsers(e.data));return t(n),e.data}throw new Error(e.message)})).catch((function(e){l.a.openSuccessNotif("Query User",e.message,2e3)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.DeleteUser=function(){var e=Object(i.a)(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)("/user/".concat(t),"delete").then((function(e){if(e&&e.data){var t=h(u.a.convertUsers(e.data));return n(t),e.data}throw new Error(e.message)})).catch((function(e){o.b.error(e.message)}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=25.4bacb114.chunk.js.map