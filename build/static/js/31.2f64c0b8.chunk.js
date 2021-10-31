(this["webpackJsonpreact-admin-template"]=this["webpackJsonpreact-admin-template"]||[]).push([[31],{1117:function(e,t,a){},1131:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(240),s=a(222),i=a(749),c=a(810),l=a(769),j=a(907),o=a(0),d=a(128),b=a(756),u=a.n(b),m=a(757),h=a(219),f=a(759),O=a(223),x=a(16),y=new(function(){function e(){Object(h.a)(this,e)}return Object(O.a)(e,[{key:"GetConfig",value:function(e){return{type:x.g.CONFIG,payload:e}}}]),e}()),p=a(755),g=a(771),v=new function e(){Object(h.a)(this,e),this.QueryConfig=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)("/settings/config","get").then((function(e){if(200==e.status){var a=y.GetConfig(p.a.convertConfigFile(e.data||[]));return t(a),e.data}throw new Error(e.message)})).catch((function(e){console.log(e)}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.UpdateConfig=function(){var e=Object(m.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)("/settings/config","put",t).then((function(e){if(200==e.status){var t=y.GetConfig(p.a.convertConfigFile(e.data||[]));return a(t),e.data}throw new Error(e.message)})).catch((function(e){console.log(e),g.a.openSuccessNotif("Th\xf4ng b\xe1o",e.message,2e3,"error")}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},w=a(1152),I=a(1157),C=a(1154),S=a(1151),k=a(787),q=a(793),T=a(1158),L=a(839),N=(a(1117),a(127)),E=a(19),A=function(e){var t=e.notify,a=e.bmail,r=e.firebase,i=e.news,c=e.els,j=e.logs,b=e.form,h=Object(d.b)(),f=Object(o.useState)((function(){return t.activeUser})),O=Object(s.a)(f,2),x=O[0],y=O[1],p=Object(o.useState)((function(){return t.activeSPUser})),g=Object(s.a)(p,2),A=g[0],P=g[1],F=Object(o.useState)((function(){return a.active})),D=Object(s.a)(F,2),U=D[0],R=D[1],M=Object(o.useState)((function(){return a.image})),B=Object(s.a)(M,2),W=B[0],G=B[1],H=Object(o.useState)((function(){return j.active})),_=Object(s.a)(H,2),J=_[0],Q=_[1],Y=function(e,t){t(!e)};Object(o.useEffect)((function(){b.setFieldsValue({notify:t,bmail:a,firebase:r,news:i,els:c,logs:j}),R(a.active),G(a.image),y(t.activeUser),P(t.activeSPUser),Q(j.active)}),[t,b,a,j]);var z={labelCol:{xs:{span:24}}},V=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h5",{children:"Mail"}),Object(E.jsx)(w.a.Item,{label:"Active Send Mail",children:Object(E.jsx)(I.a,{defaultChecked:U,onChange:function(){return Y(U,R)}})}),Object(E.jsxs)(w.a.Item,{label:"Image",name:["bmail","image"],children:[Object(E.jsx)(C.a,{value:W,onChange:function(e){return function(e){G(e.target.value)}(e)}}),Object(E.jsx)("div",{style:{paddingTop:10,display:"flex",justifyContent:"center"},children:Object(E.jsx)(S.a,{src:W,style:{width:"250px",height:140}})})]}),Object(E.jsx)(w.a.Item,{label:"Address",name:["bmail","address"],rules:[{required:!0,message:"please fill this field"}],children:Object(E.jsx)(C.a,{})}),Object(E.jsx)(w.a.Item,{label:"Telephone",name:["bmail","telephone"],rules:[{required:!0,message:"please fill this field"}],children:Object(E.jsx)(C.a,{})}),Object(E.jsx)(w.a.Item,{label:"Title",name:["bmail","title"],rules:[{required:!0,message:"please fill this field"}],children:Object(E.jsx)(C.a,{})}),Object(E.jsx)(w.a.Item,{label:"Mail Server",name:["bmail","adminEmail"],rules:[{required:!0,message:"please fill this field"}],children:Object(E.jsx)(C.a,{placeholder:"adminEmail"})}),Object(E.jsx)(w.a.Item,{label:"Mail Password ",name:["bmail","adminPassword"],rules:[{required:!0,message:"please fill this field"}],children:Object(E.jsx)(C.a.Password,{})}),Object(E.jsx)(w.a.Item,{label:"Mail Host ",name:["bmail","mailHost"],rules:[{required:!0,message:"please fill this field"}],children:Object(E.jsx)(C.a,{placeholder:"mail.yenbai.gov.vn"})}),Object(E.jsx)(w.a.Item,{label:"Mail Port ",name:["bmail","mailPort"],rules:[{required:!0,message:"please fill this field"}],children:Object(E.jsx)(C.a,{type:"number"})}),Object(E.jsx)(w.a.Item,{label:"Receiver",children:Object(E.jsx)(w.a.List,{name:["bmail","to"],rules:[{validator:function(){var e=Object(m.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&!(a.length<1)){e.next=2;break}return e.abrupt("return",Promise.reject(new Error("At least 1 email")));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}],children:function(e,t,a){var r=t.add,s=t.remove,i=a.errors;return Object(E.jsxs)(E.Fragment,{children:[e.map((function(t,a){return Object(o.createElement)(w.a.Item,Object(n.a)(Object(n.a)({},z),{},{required:!1,key:t.key}),Object(E.jsx)(w.a.Item,Object(n.a)(Object(n.a)({},t),{},{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input email or delete this field."}],noStyle:!0,children:Object(E.jsx)(C.a,{placeholder:"email",style:{width:"95%"}})})),e.length>1?Object(E.jsx)(T.a,{className:"dynamic-delete-button",onClick:function(){return s(t.name)}}):null)})),Object(E.jsxs)(w.a.Item,{children:[Object(E.jsx)(l.a,{type:"dashed",onClick:function(){return r()},style:{width:"95%"},icon:Object(E.jsx)(L.a,{}),children:"Add field"}),Object(E.jsx)(w.a.ErrorList,{errors:i})]})]})}})})]})},K=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h5",{children:"Notify"}),Object(E.jsxs)(k.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(E.jsx)(w.a.Item,{label:"Active User",children:Object(E.jsx)(I.a,{defaultChecked:x,onChange:function(){return Y(x,y)}})}),Object(E.jsx)(w.a.Item,{label:"Active Supper User",children:Object(E.jsx)(I.a,{defaultChecked:A,onChange:function(){return Y(A,P)}})})]}),Object(E.jsx)(w.a.Item,{label:"Days delete Notify",name:["notify","dayAgoDeleteNotify"],rules:[{required:!0,message:"please fill this field"}],children:Object(E.jsx)(C.a,{type:"number"})}),Object(E.jsx)(w.a.Item,{label:"Limited Record Send",name:["notify","limitRecord"],rules:[{required:!0,message:"please fill this field"}],children:Object(E.jsx)(C.a,{type:"number"})}),Object(E.jsx)(w.a.Item,{label:"Offset",name:["notify","offset"],rules:[{required:!0,message:"please fill this field"}],children:Object(E.jsx)(C.a,{type:"number"})}),Object(E.jsx)(w.a.Item,{label:"Time Sync",name:["notify","timeSync"],rules:[{required:!0,message:"Default 60000"}],children:Object(E.jsx)(C.a,{type:"number"})}),Object(E.jsx)(k.a,{children:"Template"}),Object(E.jsx)(k.a,{children:Object(E.jsx)(w.a.Item,{style:{width:"100%"},label:"Title",name:["notify","template","title"],rules:[{required:!0,message:"please enter message"}],children:Object(E.jsx)(C.a,{type:"text"})})})]})},X=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h5",{children:"FireBase"}),Object(E.jsx)(k.a,{style:{display:"flex",justifyContent:"space-between"},children:Object(E.jsx)(w.a.Item,{label:"Database_URL",name:["firebase","database_url"],style:{width:"100%"},rules:[{required:!0,message:"Database URL"}],children:Object(E.jsx)(C.a,{})})})]})},Z=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h5",{children:"News"}),Object(E.jsxs)(k.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(E.jsx)(w.a.Item,{label:"WhiteHat News",name:["news","white_hat_rss"],style:{width:"100%"},rules:[{required:!0,message:"Enter whitehat news"}],children:Object(E.jsx)(C.a,{})}),Object(E.jsx)(w.a.Item,{label:"Time Sync",name:["news","timeSync"],style:{width:"100%"},rules:[{required:!0,message:"Enter whitehat news"}],children:Object(E.jsx)(C.a,{type:"number"})})]})]})},$=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h5",{children:"ElastichSearch"}),Object(E.jsx)(k.a,{style:{display:"flex",justifyContent:"space-between"},children:Object(E.jsx)(w.a.Item,{label:"host",name:["els","host"],style:{width:"100%"},rules:[{required:!0,message:"Host"}],children:Object(E.jsx)(C.a,{})})})]})},ee=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h5",{children:"Logs"}),Object(E.jsx)(w.a.Item,{label:"Active Collect Logs",children:Object(E.jsx)(I.a,{defaultChecked:J,onChange:function(){return Y(J,Q)}})}),Object(E.jsx)(w.a.Item,{name:["logs","subIndex"],children:Object(E.jsx)(C.a,{disabled:!0})}),Object(E.jsx)(w.a.Item,{label:"TimeSync",name:["logs","timeSync"],rules:[{message:"please fill this field",required:!0}],children:Object(E.jsx)(C.a,{})}),Object(E.jsx)(w.a.Item,{label:"Limit Record every Sync",name:["logs","limit"],rules:[{message:"please fill this field",required:!0}],children:Object(E.jsx)(C.a,{})}),Object(E.jsx)(w.a.Item,{label:"Day Number Delete Logs",name:["logs","deleteAffterDay"],children:Object(E.jsx)(C.a,{})}),Object(E.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:[Object(E.jsxs)("div",{style:{width:"33%",minWidth:300},children:[Object(E.jsx)("h5",{children:"Table Logs Delete"}),Object(E.jsx)(w.a.Item,{children:Object(E.jsx)(w.a.List,{name:["logs","tableDeleteAffterDay"],rules:[{validator:function(){var e=Object(m.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&!(a.length<1)){e.next=2;break}return e.abrupt("return",Promise.reject(new Error("At least 1 email")));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}],children:function(e,t,a){var r=t.add,s=(t.remove,a.errors);return Object(E.jsxs)(E.Fragment,{children:[e.map((function(t,a){return Object(o.createElement)(w.a.Item,Object(n.a)(Object(n.a)({},z),{},{required:!1,key:t.key}),Object(E.jsx)(w.a.Item,Object(n.a)(Object(n.a)({},t),{},{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input email or delete this field."}],noStyle:!0,children:Object(E.jsx)(C.a,{placeholder:"Name Table",style:{width:"90%"},disabled:!0})})),e.length>1?Object(E.jsx)(T.a,{className:"dynamic-delete-button"}):null)})),Object(E.jsxs)(w.a.Item,{children:[Object(E.jsx)(l.a,{type:"dashed",onClick:function(){return r()},style:{width:"90%"},icon:Object(E.jsx)(L.a,{}),disabled:!0,children:"Add field"}),Object(E.jsx)(w.a.ErrorList,{errors:s})]})]})}})})]}),Object(E.jsxs)("div",{style:{width:"33%",minWidth:300},children:[Object(E.jsx)("h5",{children:"Logs for Notify"}),Object(E.jsx)(w.a.Item,{children:Object(E.jsx)(w.a.List,{name:["logs","toNotify"],rules:[{validator:function(){var e=Object(m.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&!(a.length<1)){e.next=2;break}return e.abrupt("return",Promise.reject(new Error("At least 1 email")));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}],children:function(e,t,a){var r=t.add,s=(t.remove,a.errors);return Object(E.jsxs)(E.Fragment,{children:[e.map((function(t,a){return Object(o.createElement)(w.a.Item,Object(n.a)(Object(n.a)({},z),{},{required:!1,key:t.key}),Object(E.jsx)(w.a.Item,Object(n.a)(Object(n.a)({},t),{},{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input email or delete this field."}],noStyle:!0,children:Object(E.jsx)(C.a,{placeholder:"Name Table",style:{width:"90%"},disabled:!0})})),e.length>1?Object(E.jsx)(T.a,{className:"dynamic-delete-button"}):null)})),Object(E.jsxs)(w.a.Item,{children:[Object(E.jsx)(l.a,{type:"dashed",onClick:function(){return r()},style:{width:"90%"},icon:Object(E.jsx)(L.a,{}),disabled:!0,children:"Add field"}),Object(E.jsx)(w.a.ErrorList,{errors:s})]})]})}})})]}),Object(E.jsxs)("div",{style:{width:"33%",minWidth:300},children:[Object(E.jsx)("h5",{children:"Logs for Mail"}),Object(E.jsx)(w.a.Item,{children:Object(E.jsx)(w.a.List,{name:["logs","toEmail"],rules:[{validator:function(){var e=Object(m.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&!(a.length<1)){e.next=2;break}return e.abrupt("return",Promise.reject(new Error("At least 1 email")));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}],children:function(e,t,a){var r=t.add,s=(t.remove,a.errors);return Object(E.jsxs)(E.Fragment,{children:[e.map((function(t,a){return Object(o.createElement)(w.a.Item,Object(n.a)(Object(n.a)({},z),{},{required:!1,key:t.key}),Object(E.jsx)(w.a.Item,Object(n.a)(Object(n.a)({},t),{},{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input email or delete this field."}],noStyle:!0,children:Object(E.jsx)(C.a,{placeholder:"Name Table",style:{width:"90%"},disabled:!0})})),e.length>1?Object(E.jsx)(T.a,{className:"dynamic-delete-button"}):null)})),Object(E.jsxs)(w.a.Item,{children:[Object(E.jsx)(l.a,{type:"dashed",onClick:function(){return r()},style:{width:"90%"},icon:Object(E.jsx)(L.a,{}),disabled:!0,children:"Add field"}),Object(E.jsx)(w.a.ErrorList,{errors:s})]})]})}})})]})]})]})};return Object(E.jsx)("div",{className:"settings-notify",children:Object(E.jsx)(k.a,{children:Object(E.jsx)(w.a,{form:b,onFinish:function(e){return function(e){var t=Object(n.a)(Object(n.a)({},e),{},{news:Object(n.a)(Object(n.a)({},e.news),{},{timeSync:parseInt(e.notify.timeSync)}),bmail:Object(n.a)(Object(n.a)({},e.bmail),{},{image:W,active:U,mailPort:parseInt(e.bmail.mailPort),subIndex:"datamail-",deleteAffterDay:1}),notify:Object(n.a)(Object(n.a)({},e.notify),{},{activeUser:x,activeSPUser:A,dayAgoDeleteNotify:parseInt(e.notify.dayAgoDeleteNotify),limitRecord:parseInt(e.notify.limitRecord),offset:parseInt(e.notify.offset),timeSync:parseInt(e.notify.timeSync)}),logs:Object(n.a)(Object(n.a)({},e.logs),{},{active:J})});N.a.SetLoading(!0,h),setTimeout((function(){v.UpdateConfig(t,h).then((function(e){})).finally((function(){return N.a.SetLoading(!1,h)}))}),1e3)}(e)},style:{width:"100%"},children:Object(E.jsxs)(k.a,{style:{display:"flex",justifyContent:"space-between",padding:"0px 10px"},children:[Object(E.jsxs)(q.a,{span:11,children:[Object(E.jsx)(k.a,{style:{display:"contents"},children:Object(E.jsx)(K,{})}),Object(E.jsx)(k.a,{style:{display:"contents"},children:Object(E.jsx)(X,{})}),Object(E.jsx)(k.a,{style:{display:"contents"},children:Object(E.jsx)(Z,{})}),Object(E.jsx)(k.a,{style:{display:"contents"},children:Object(E.jsx)($,{})}),Object(E.jsx)(k.a,{style:{display:"contents"},children:Object(E.jsx)(ee,{})})]}),Object(E.jsx)(q.a,{span:11,children:Object(E.jsx)(k.a,{style:{display:"contents"},children:Object(E.jsx)(V,{})})})]})})})})};t.default=function(){var e,t=Object(d.b)(),a=Object(j.useForm)(),b=Object(s.a)(a,1)[0],u=Object(d.c)((function(e){return e.Settings})).fileConfig||(e={notify:{},firebase:{},bmail:{}},Object(r.a)(e,"firebase",{}),Object(r.a)(e,"logs",{}),e);return Object(o.useEffect)((function(){v.QueryConfig(t).then((function(e){console.log("fileConfig",u)}))}),[]),Object(E.jsxs)(i.j,{children:[Object(E.jsxs)(i.n,{style:{display:"flex",justifyContent:"space-between"},children:[Object(E.jsx)("span",{style:{fontSize:16,color:"black",fontWeight:600},children:"Settings System"}),Object(E.jsxs)("div",{className:"",children:[Object(E.jsx)(c.a,{placement:"bottomRight",title:"Are you really change config !",onConfirm:function(){N.a.SetLoading(!0,t),setTimeout((function(){v.UpdateConfig({reset:!0},t).then((function(e){})).finally((function(){return N.a.SetLoading(!1,t)}))}),1e3)},okText:"Yes",cancelText:"No",style:{marginRight:20},children:Object(E.jsx)(l.a,{type:"dashed",htmlType:"submit",children:"Back to Default"})}),Object(E.jsx)(c.a,{placement:"bottomLeft",title:"Are you really change config !",onConfirm:function(){b.submit()},okText:"Yes",cancelText:"No",children:Object(E.jsx)(l.a,{type:"primary",htmlType:"submit",children:"Save"})})]})]}),Object(E.jsx)(i.k,{children:Object(E.jsx)(A,Object(n.a)({form:b},u))})]})}}}]);
//# sourceMappingURL=31.2f64c0b8.chunk.js.map