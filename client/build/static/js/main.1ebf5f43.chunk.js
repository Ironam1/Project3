(window.webpackJsonpproject3=window.webpackJsonpproject3||[]).push([[0],{101:function(e,a,t){},166:function(e,a,t){},171:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(3),c=t.n(r),o=(t(101),t(20)),s=t(24),m=t(6),i=t(7),u=t(11),p=t(8),d=t(12),h=t(35),b=t.n(h),f={getFeed:function(){return b.a.get("/api/feedMe/")},getChangeTime:function(){return b.a.post("/api/change/")},getZzz:function(){return b.a.get("/api/zzz/")},saveLogin:function(){return b.a.post("/api/login")},feedMe:function(){return b.a.post("/api/feedMe")}},E=(t(36),t(48),t(14)),g=t.n(E),v=t(27),y="h:mm a",N=g()().hour(0).minute(0),w=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={feed:""},t.handleFormSubmit=function(e){e.preventDefault(),console.log("submitted"),f.feedMe().then((function(e){return t.setState({feed:e.data})})).catch((function(e){return console.log("Error"+e)}))},t.onChange=function(e){console.log(e&&e.format(y))},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Feed Me"),l.a.createElement(v.a,{showSecond:!1,defaultValue:N,className:"xxx",onChange:this.onChange,format:y,use12Hours:!0,inputReadOnly:!0}),",",l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text"},"Details")),l.a.createElement("textarea",{className:"form-control"})),l.a.createElement("button",{type:"button",className:"btn btn-info",id:"save",onClick:this.handleFormSubmit,value:this.state.feed},"Save"))}}]),a}(n.Component),j=g()().hour(0).minute(0),O=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("h2",null,"Sleep"),l.a.createElement("h6",null,"Asleep"),l.a.createElement(v.a,{showSecond:!1,defaultValue:j,className:"xxx",format:"h:mm a",use12Hours:!0,inputReadOnly:!0}),l.a.createElement("h6",null,"to"),l.a.createElement("h6",null,"Awake"),l.a.createElement(v.a,{showSecond:!1,defaultValue:j,className:"xxx",format:"h:mm a",use12Hours:!0,inputReadOnly:!0}),l.a.createElement("div",{class:"input-group"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("label",{class:"input-group-text"},"Details")),l.a.createElement("textarea",{class:"form-control"})),l.a.createElement("button",{type:"button",class:"btn btn-info",id:"save"},"Save"))}}]),a}(n.Component),x=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={value:g()(),details:""},t.getChangeTime=function(){f.getChangeTime().then((function(e){return t.setState({value:e.data,details:e.data})})).catch((function(e){return console.log(e)}))},t.handleFormSubmit=function(e,a){t.setState({value:e}),t.setState({details:a}),t.getChangeTime(t.state.value.format("hh:mm:ss")),t.getChangeTime(t.state.details),console.log("time: "+t.state.value.format("hh:mm:ss")),console.log("details: "+t.state.details)},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.state.value;return l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Change Me"),l.a.createElement(v.a,{showSecond:!1,defaultValue:a,className:"xxx",onChange:function(a){return e.handleFormSubmit(a)},format:"hh:mm a",use12Hours:!0,inputReadOnly:!0,name:"value"}),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text"},"Details")),l.a.createElement("textarea",{className:"form-control",id:"details",name:"details"})),l.a.createElement("button",{type:"button",className:"btn btn-info",id:"save",onClick:this.handleFormSubmit},"Save"))}}]),a}(n.Component),S=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("h2",null,"Daily Log"),l.a.createElement("div",{class:"log"},l.a.createElement("p",null,"Sample text")))}}]),a}(n.Component);t(39);var C=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",{className:"footerText"},"\xa9 Pope, MacInnis, Dunn, Rezanka"))};t(166);var k=function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"home",href:"/"},"Login"),l.a.createElement("a",{className:"eat",href:"/eat"},"Eat"),l.a.createElement("a",{className:"zzz",href:"/sleep"},"Sleep"),l.a.createElement("a",{className:"change",href:"/change"},"Change"),l.a.createElement("a",{className:"daily",href:"/dailyLog"},"Daily Log")))};var z=function(){return l.a.createElement("div",{className:"jumbotron jumbotron-fluid",id:"header"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-4"},"Parent's Little Helper"),l.a.createElement("p",{className:"lead"},"Tracking Baby's Basic Needs"),l.a.createElement(k,null)))},I=t(93),L=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={email:"",password:""},t.handleInputChange=function(e){var a=e.target.keepSignedIn;t.setState(Object(I.a)({},a,!0))},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Login"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",email:this.state.email})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"********",password:this.state.password})),l.a.createElement(o.b,{to:"/start",className:"/start"===window.location.pathname},l.a.createElement("button",{type:"submit",className:"btn btn-info"},"Submit")),l.a.createElement("a",{className:"",href:"/register"},"Register your baby here!")))}}]),a}(n.Component),A=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(o.b,{to:"/eat",className:"/eat"===window.location.pathname},l.a.createElement("button",{type:"button",className:"btn btn-info",id:"eat"},"Feed Me")),l.a.createElement(o.b,{to:"/change",className:"/change"===window.location.pathname},l.a.createElement("button",{type:"button",className:"btn btn-info",id:"change"},"Change Me")),l.a.createElement(o.b,{to:"/sleep",className:"/sleep"===window.location.pathname},l.a.createElement("button",{type:"button",className:"btn btn-info",id:"sleep"},"Zzzzz")),l.a.createElement(o.b,{to:"/dailyLog",className:"/dailyLog"===window.location.pathname},l.a.createElement("button",{type:"button",className:"btn btn-info",id:"dailyLog"},"DailyLog")))}}]),a}(n.Component);var B=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("button",{type:"button",className:"btn btn-info",id:"add"},"Add a child"),l.a.createElement("button",{type:"button",className:"btn btn-info",id:"name"},"Who's Your Baby?"))},D=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={email:"",password:"",babyName:"",babyImg:""},t.handleFormSubmit=function(e){e.preventDefault(),console.log("success!")},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Register Your Baby"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email or User Name"),l.a.createElement("input",{type:"string",className:"form-control",id:"newEmail",placeholder:"Enter email or user name",email:this.state.email})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",className:"form-control",id:"newPassword",placeholder:"*******",password:this.state.password})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Baby Name"),l.a.createElement("input",{type:"string",className:"form-control",id:"newName",placeholder:"Baby's Name Here!",babyName:this.state.babyName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Baby Image"),l.a.createElement("input",{type:"string",className:"form-control",id:"newImage",placeholder:"Image Url",babyImg:this.state.babyImg})),l.a.createElement("button",{type:"submit",className:"btn btn-info"},"Register")))}}]),a}(n.Component);var F=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(z,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:L}),l.a.createElement(s.a,{exact:!0,path:"/start",component:B}),l.a.createElement(s.a,{exact:!0,path:"/menu",component:A}),l.a.createElement(s.a,{exact:!0,path:"/eat",component:w}),l.a.createElement(s.a,{exact:!0,path:"/sleep",component:O}),l.a.createElement(s.a,{exact:!0,path:"/change",component:x}),l.a.createElement(s.a,{exact:!0,path:"/dailyLog",component:S}),l.a.createElement(s.a,{exact:!0,path:"/register",component:D})),l.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},36:function(e,a,t){},39:function(e,a,t){},96:function(e,a,t){e.exports=t(171)}},[[96,1,2]]]);
//# sourceMappingURL=main.1ebf5f43.chunk.js.map
