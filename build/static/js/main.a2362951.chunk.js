(this.webpackJsonpadminshugar21=this.webpackJsonpadminshugar21||[]).push([[0],{160:function(e,t,c){},161:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(41),r=c.n(a),i=c(4),o=c(14),l=c(58),j=c(36),b=c(101),h=c(30),d=c(67),u=c(92),O=c(93),x={en:{translation:c(94)},es:{translation:c(95)}};d.a.use(u.a).use(O.a).use(h.a).init({resources:x,lng:"es",fallbackLng:"es",whitelist:["en","es"],keySeparator:!1,interpolation:{escapeValue:!1},backend:{loadPath:"./locales/{{lng}}/{{ns}}.json"}});var m=d.a,p=c(23),g=c(96),f=c.n(g),v=c(97),N=c.n(v),_=c(177),w=c(1),k=function(){return Object(w.jsxs)("div",{className:"header",children:[Object(w.jsx)(p.a,{to:"/chatbot",children:Object(w.jsx)(_.a,{children:Object(w.jsx)(f.a,{className:"header_icon",fontSize:"large"})})}),Object(w.jsx)(p.a,{to:"/app",children:Object(w.jsx)("img",{className:"header_logo",src:"images/logo.jpg",alt:"l52mas"})}),Object(w.jsx)(p.a,{to:"/logout",children:Object(w.jsx)(_.a,{children:Object(w.jsx)(N.a,{className:"header_icon",fontSize:"large"})})})]})},C=Object(h.b)()((function(e){var t=e.t,c=function(e){m.changeLanguage(e)};return Object(w.jsxs)(n.Fragment,{children:[Object(w.jsx)(k,{}),Object(w.jsx)("h1",{children:t("welcome")}),Object(w.jsxs)("div",{children:[Object(w.jsx)("button",{onClick:function(){return c("es")},children:"es"}),Object(w.jsx)("button",{onClick:function(){return c("en")},children:"en"})]})]})})),y=function(){return Object(w.jsx)(n.Fragment,{children:Object(w.jsx)("p",{children:"NoticeOfPrivacy"})})},S=function(){return Object(w.jsx)(n.Fragment,{children:Object(w.jsx)("p",{children:"TermsAndServices"})})},F=function(){return Object(w.jsx)(n.Fragment,{children:Object(w.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark",children:Object(w.jsxs)("div",{className:"container-fluid",children:[Object(w.jsx)("a",{className:"navbar-brand",href:"#",children:"L52+"}),Object(w.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(w.jsx)("span",{className:"navbar-toggler-icon"})})]})})})},R=Object(h.b)()((function(e){e.t;return Object(w.jsxs)(n.Fragment,{children:[Object(w.jsx)(F,{}),Object(w.jsx)("main",{className:"container-fluid cover  ",children:Object(w.jsx)("div",{className:"row align-items-center justify-content-center justify-content-xl-start vh-100",children:Object(w.jsxs)("div",{className:"col col-sm-7 text-center text-xl-left col-xl-4 offset-xl-2",children:[Object(w.jsx)("h1",{className:"mb-4 sh_colors-white",children:"Chatvoice"}),Object(w.jsx)("h4",{className:"mb-1 subtitle-mb sh_colors-white",children:"Reconocimiento de rasgos faciales"}),Object(w.jsx)("p",{className:"sh_colors-white",children:"Contacto: ivanvladimir@gmail.com"})]})})})]})})),L=c(100),E=c(49),P=c.n(E),I=Object(h.b)()((function(e){e.t;var t=Object(E.useSpeechRecognition)({language:"es-MX"}),c=t.transcript,s=t.resetTranscript,a=Object(n.useState)([]),r=Object(j.a)(a,2),o=r[0],l=r[1],b=Object(i.g)();if(!P.a.browserSupportsSpeechRecognition())return null;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h1",{children:"\xbfCu\xe1l es tu nombre?"}),Object(w.jsxs)("div",{className:"",children:[0===o.length&&Object(w.jsxs)("div",{className:"sh_box_header",children:[c?Object(w.jsx)("span",{children:"\ud83d\udd34"}):Object(w.jsx)("span",{children:"\ud83c\udf99\ufe0f"}),Object(w.jsx)("button",{onClick:function(){P.a.startListening()},children:"Iniciar"}),Object(w.jsx)("button",{onClick:function(){return P.a.stopListening(),l([].concat(Object(L.a)(o),[c])),void s()},children:"Guardar"}),Object(w.jsx)("button",{onClick:function(){s()},children:"Resetear"})]}),Object(w.jsxs)("div",{className:"box",children:[c?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("p",{children:c}),Object(w.jsx)("hr",{})]}):0===o.length&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("p",{className:"sh_placeholder",children:"Ej. en mis tiempo libres me gusta viajar"}),Object(w.jsx)("hr",{})]}),o.map((function(e,t){return Object(w.jsx)("p",{children:e},t)}))]}),o.length>0&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("button",{className:"sh_center sh_width",onClick:function(){b.push("/register/verify")},children:"Continuar"}),Object(w.jsx)("button",{className:"sh_center sh_width",onClick:function(){l([])},children:"Cambiar Nombre"})]})]})]})})),J=c(98),M=c.n(J),T={width:1280,height:720,facingMode:"user"},A=Object(h.b)()((function(){var e=Object(n.useState)(),t=Object(j.a)(e,2),c=(t[0],t[1],s.a.useRef(null)),a=s.a.useCallback((function(){c.current.getScreenshot()}),[c]);return Object(w.jsxs)(n.Fragment,{children:[Object(w.jsx)(M.a,{audio:!1,height:720,ref:c,screenshotFormat:"image/jpeg",width:1280,videoConstraints:T}),Object(w.jsx)("button",{onClick:function(){return a()},children:"Capture photo"}),Object(w.jsx)("img",{src:"",alt:""})]})})),G=function(){return Object(w.jsxs)("div",{className:"sh_block sh__mt2",children:[Object(w.jsx)("h3",{className:"auth__title",children:"Register"}),Object(w.jsxs)("form",{children:[Object(w.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off"}),Object(w.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off"}),Object(w.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input"}),Object(w.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input"}),Object(w.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(w.jsx)(p.a,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},z=c(99),B=c.n(z),D=Object(n.createContext)(),V=function(e){var t=e.children,c=function(e){var t=Object(n.useMemo)((function(){return B.a.connect(e)}),[e]),c=Object(n.useState)(!1),s=Object(j.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){r(t.connected)}),[t]),Object(n.useEffect)((function(){t.on("connect",(function(){r(!0)}))}),[t]),Object(n.useEffect)((function(){t.on("disconnect",(function(){r(!1)}))}),[t]),{socket:t,online:a}}("http://localhost:8080"),s=c.socket,a=c.online;return Object(w.jsx)(D.Provider,{value:{socket:s,online:a},children:t})},W=function(){Object(n.useContext)(D).socket;return Object(w.jsx)("div",{className:"form",children:Object(w.jsxs)("div",{className:"sh_form",children:[Object(w.jsx)("lottie-player",{src:"/lottie/person.json",background:"transparent",speed:"1",style:{width:"200px",height:"200px",display:"flex",margin:"auto",justifyContent:"center"},loop:!0,autoplay:!0}),Object(w.jsxs)("div",{className:"sh_block sh__mt2",children:[Object(w.jsx)("h3",{className:"sh_auth__title",children:"Face L52+"}),Object(w.jsxs)("form",{children:[Object(w.jsx)("input",{type:"text",placeholder:"Correo",name:"email",className:"",autoComplete:"off"}),Object(w.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",name:"password",className:""}),Object(w.jsx)("button",{type:"submit",className:"sh_btn sh_block",children:"Iniciar sesi\xf3n"}),Object(w.jsxs)("div",{className:"sh_auth__social-networks",children:[Object(w.jsx)("p",{children:"Iniciar sesi\xf3n con Redes Sociales"}),Object(w.jsx)("div",{className:"sh_btn-white sh_google-btn",children:Object(w.jsx)("img",{className:"sh_google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})})]}),Object(w.jsx)(p.a,{to:"/auth/register",className:"sh_link",children:"Crear cuenta"})]})]})]})})},X=function(e){var t=e.component,c=Object(b.a)(e,["component"]),s=Object(n.useState)(!0),a=Object(j.a)(s,2),r=a[0];a[1];return Object(w.jsx)(i.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){return r?Object(w.jsx)(t,Object(l.a)({},e)):Object(w.jsx)(i.a,{to:{pathname:"/"}})}}))},q=function(e){return Object(w.jsxs)(i.d,{children:[Object(w.jsx)(i.b,{exact:!0,path:"/",component:R}),Object(w.jsx)(i.b,{exact:!0,path:"/NoticeOfPrivacy",component:y}),Object(w.jsx)(i.b,{exact:!0,path:"/TermsAndServices",component:S}),Object(w.jsx)(i.b,{exact:!0,path:"/auth/login",component:W}),Object(w.jsx)(i.b,{exact:!0,path:"/auth/register",component:G}),Object(w.jsx)(i.b,{exact:!0,path:"/auth/register/create",component:I}),Object(w.jsx)(i.b,{exact:!0,path:"/auth/register/verify",component:A}),Object(w.jsx)(X,{exact:!0,path:"/app",component:C})]})};c(160);var H=function(){var e=Object(o.a)();return Object(w.jsx)(V,{children:Object(w.jsx)(i.c,{history:e,children:Object(w.jsx)(q,{})})})};r.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(H,{})}),document.getElementById("root"))},94:function(e){e.exports=JSON.parse('{"welcome":"Welcome to React and react-i18next","profile":"profile"}')},95:function(e){e.exports=JSON.parse('{"welcome":"Bienvenido","profile":"perfil"}')}},[[161,1,2]]]);
//# sourceMappingURL=main.a2362951.chunk.js.map