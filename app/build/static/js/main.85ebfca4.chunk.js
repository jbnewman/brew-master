(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(34)},22:function(e,t,a){},24:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),i=(a(22),a(5)),l=a(6),s=a(8),u=a(7),m=a(9),h=a(37),d=a(39),p=a(38),g=a(36),f=(a(24),a(26),a(35));function b(e){return e.authenticated?r.a.createElement(f.a,{to:"/logout",className:"nav-link"},"Logout"):r.a.createElement(f.a,{to:"/login",className:"nav-link"},"Login")}var v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.getAuthenticated()?r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement(f.a,{to:"/",className:"navbar-brand"},"Brew Master"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/about",className:"nav-link"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b,{authenticated:this.props.getAuthenticated()}))))):""}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.getAuthenticated()?r.a.createElement("div",null,r.a.createElement("h1",null,"Home")):r.a.createElement(g.a,{to:"/login"})}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.getAuthenticated()?r.a.createElement("div",null,r.a.createElement("h1",null,"About")):r.a.createElement(g.a,{to:"/login"})}}]),t}(n.Component),A=(a(32),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-center"},r.a.createElement("form",{className:"form-signin"},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email address",required:!0,autofocus:!0}),r.a.createElement("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"button",onClick:function(){return e.props.setAuthenticated(!0)}},"Sign in")))}}]),t}(n.Component)),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={authenticated:"true"===localStorage.getItem("authenticated")||!1},a.setAuthenticated=function(e){localStorage.setItem("authenticated",e),a.setState({authenticated:e},function(){})},a.getAuthenticated=function(){return a.state.authenticated},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{getAuthenticated:this.getAuthenticated}),r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:function(){return r.a.createElement(E,{getAuthenticated:e.getAuthenticated})}}),r.a.createElement(p.a,{exact:!0,path:"/about",component:function(){return r.a.createElement(w,{getAuthenticated:e.getAuthenticated})}}),r.a.createElement(p.a,{exact:!0,path:"/login",component:function(){return e.getAuthenticated()?r.a.createElement(g.a,{to:"/"}):r.a.createElement(A,{setAuthenticated:e.setAuthenticated})}}),r.a.createElement(p.a,{exact:!0,path:"/logout",component:function(){return e.setAuthenticated(!1),r.a.createElement(g.a,{to:"/login"})}}))))}}]),t}(n.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");y?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):O(t,e)})}}()}},[[16,2,1]]]);
//# sourceMappingURL=main.85ebfca4.chunk.js.map