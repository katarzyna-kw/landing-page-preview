(this["webpackJsonplanding-page-preview"]=this["webpackJsonplanding-page-preview"]||[]).push([[0],[,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(5),c=n.n(i),s=(n(10),n(2)),o=(n(3),n(11),n(0));var l=function(){return Object(o.jsx)("header",{className:"header-wrapper",children:Object(o.jsx)("img",{className:"header-logo",src:"https://raw.githubusercontent.com/katarzyna-kw/landing-page-preview/a583f9599cce6b85750eccdc96687c5f4d0f779f/public/images/logo.svg",alt:"logo"})})};n(13);var d=function(){return Object(o.jsx)("div",{className:"image-wrapper",children:Object(o.jsx)("img",{className:"image",src:"https://raw.githubusercontent.com/katarzyna-kw/landing-page-preview/main/public/images/hero-mobile.jpg",alt:"closeup of a woman in an orange shirt and a gold bracelet looking at the camera with a large green plant behind her"})})};n(14),n(15);var u=function(){var e=Object(r.useRef)(!0),t=Object(r.useState)(!0),n=Object(s.a)(t,2),a=n[0],i=n[1],c=Object(r.useState)(null),l=Object(s.a)(c,2),d=l[0],u=l[1],b=Object(r.useState)(""),j=Object(s.a)(b,2),p=j[0],g=j[1];return Object(r.useEffect)((function(){if(e.current)e.current=!1;else{i(function(){var e=!/\S+@\S+\.\S+/.test(p);u(e?"Please provide a valid email":null)}())}}),[p]),Object(o.jsxs)("div",{className:"form-wrapper",children:[Object(o.jsxs)("form",{className:d?"border-red":"border-default",onSubmit:function(e){e.preventDefault(),d||console.log("submitting form with",p)},children:[Object(o.jsx)("input",{placeholder:"Email Address",type:"email",name:"email",value:p,onChange:function(e){return g(e.target.value)}}),d&&Object(o.jsx)("img",{className:"error-img",src:"https://raw.githubusercontent.com/katarzyna-kw/landing-page-preview/9b5f41dec688c2ad0edf8bf13a94743021fe5bd8/public/images/icon-error.svg",alt:"error: enter valid email address"}),Object(o.jsx)("button",{className:"btn",type:"submit",disabled:a,children:Object(o.jsx)("img",{src:"https://raw.githubusercontent.com/katarzyna-kw/landing-page-preview/d39487d8743a0fb56e66db0dc6f974936e478f71/public/images/icon-arrow.svg",alt:"click to submit email address"})})]}),Object(o.jsx)("div",{className:"error-wrapper",children:d&&Object(o.jsx)("p",{className:"error-body",children:d})})]})};n(16);var b=function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("p",{className:"attribution",children:["Challenge by"," ",Object(o.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer noopener",children:"Frontend Mentor"}),". Coded by"," ",Object(o.jsx)("a",{href:"https://katarzyna-kw.github.io/portfolio-website/",target:"_blank",rel:"noreferrer noopener",children:"Katarzyna Wegrzynowicz"}),"."]})})};var j=function(){return Object(o.jsxs)("div",{className:"text-wrapper",children:[Object(o.jsx)("h1",{className:"text-greeting__light",children:"We're"}),Object(o.jsx)("h1",{className:"text-greeting__bold",children:"coming soon"}),Object(o.jsx)("p",{className:"text-body",children:"Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals."}),Object(o.jsx)(u,{}),Object(o.jsx)(b,{})]})};n(17);var p=function(){var e=Object(r.useState)(window.innerWidth<865),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(window.innerWidth>=1024&&window.innerHeight>=1366),c=Object(s.a)(i,2),l=c[0],d=c[1],u=function(){a(window.innerWidth<865),d(window.innerWidth>=1024&&window.innerHeight>=1366)};return Object(r.useEffect)((function(){return window.addEventListener("resize",u),function(){return window.removeEventListener("resize",u)}})),Object(o.jsx)("div",{className:n?"wrapper-tablet":l?"wrapper-ipadpro":"wrapper-desktop ",children:Object(o.jsx)("img",{className:n?"image-tablet":l?"image-ipadpro":"image-desktop",src:"https://raw.githubusercontent.com/katarzyna-kw/landing-page-preview/main/public/images/hero-desktop.jpg",alt:"closeup of a woman in an orange shirt and a gold bracelet looking at the camera with a large green plant behind her"})})};n(18);var g=function(){var e=Object(r.useState)(window.innerWidth<550),t=Object(s.a)(e,2),n=t[0],a=t[1],i=function(){a(window.innerWidth<550)};return Object(r.useEffect)((function(){return window.addEventListener("resize",i),function(){return window.removeEventListener("resize",i)}})),Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsxs)("div",{className:"wrapper-content",children:[Object(o.jsx)(l,{}),n&&Object(o.jsx)(d,{}),Object(o.jsx)(j,{})]}),!n&&Object(o.jsx)(p,{})]})};var h=function(){return Object(o.jsx)("div",{className:"App","data-testid":"app",children:Object(o.jsx)(g,{})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),m()}],[[19,1,2]]]);
//# sourceMappingURL=main.c3acf41e.chunk.js.map