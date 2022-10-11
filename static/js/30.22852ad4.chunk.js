"use strict";(self.webpackChunklucky_online_game=self.webpackChunklucky_online_game||[]).push([[30],{886:function(n,e,r){r.d(e,{Z:function(){return b}});var t,i,o,a=r(885),s=r(5995),l=r(9565),c=r(6359),d=r(6451),u=r(4943),p=r(168),h=r(2499),m=r(3504),x=h.Z.ul(t||(t=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  margin-bottom: 30px;\n"]))),f=h.Z.li(i||(i=(0,p.Z)(["\n  margin-right: 30px;\n\n  :last-child {\n    margin-right: 0;\n  }\n"]))),g=(0,h.Z)(m.OL)(o||(o=(0,p.Z)(["\n  font-weight: 900;\n  font-size: 42px;\n  text-transform: uppercase;\n\n  color: var(--brown-color);\n\n  &.active {\n    opacity: 0.7;\n  }\n"]))),w=r(3329),b=function(){var n=(0,l.C)(c.L),e=(0,s.Z)(d,{sprite:u.Z,soundEnabled:n}),r=(0,a.Z)(e,1)[0];return(0,w.jsxs)(x,{children:[(0,w.jsx)(f,{children:(0,w.jsx)(g,{to:"/sign-in",onClick:function(){return r({id:"counter_click"})},children:"Sign in"})}),(0,w.jsx)(f,{children:(0,w.jsx)(g,{to:"/sign-up",onClick:function(){return r({id:"counter_click"})},children:"Sign up"})})]})}},6268:function(n,e,r){r.d(e,{Z:function(){return x}});var t,i,o,a,s=r(168),l=r(2499),c=r(5705),d=l.Z.label(t||(t=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: ",";\n"])),(function(n){var e=n.margin;return e||""})),u=l.Z.span(i||(i=(0,s.Z)(["\n  font-size: 15px;\n  text-transform: uppercase;\n  color: var(--brown-color);\n\n  margin-bottom: 6px;\n"]))),p=(0,l.Z)(c.gN)(o||(o=(0,s.Z)(["\n  width: ",";\n  height: ",";\n  padding: 0 15px;\n\n  font-family: inherit;\n  font-weight: 700;\n  font-size: 19px;\n\n  color: var(--brown-color);\n  background: var(--white-transparent);\n  border: 2px solid var(--brown-color);\n  border-radius: 8px;\n  outline: none;\n\n  :focus {\n    border: 2px solid rgba(105, 74, 4, 0.7);\n  }\n\n  ::placeholder {\n    font-size: 19px;\n    color: var(--brown-color);\n    opacity: 0.5;\n  }\n"])),(function(n){var e=n.width;return e||""}),(function(n){var e=n.height;return e||""})),h=(0,l.Z)(c.Bc)(a||(a=(0,s.Z)(["\n  margin-top: 5px;\n  color: red;\n"]))),m=r(3329),x=function(n){var e=n.label,r=n.type,t=n.name,i=n.value,o=n.onChange,a=n.required,s=n.placeholder,l=n.width,c=n.height,x=n.margin;return(0,m.jsxs)(d,{margin:x,children:[(0,m.jsx)(u,{children:e}),(0,m.jsx)(p,{type:r,name:t,value:i,onChange:o,required:a,placeholder:s,width:l,height:c}),(0,m.jsx)(h,{name:t,component:"div"})]})}},4073:function(n,e,r){r.d(e,{Z:function(){return Z}});var t,i,o,a,s,l=r(2791),c=function(n){(0,l.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[n]);return{onBackdropClick:function(e){e.target===e.currentTarget&&n()}}},d=r(4164),u=r(3840),p=r(168),h=r(2499),m=h.Z.div(t||(t=(0,p.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),x=h.Z.div(i||(i=(0,p.Z)(["\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  width: 780px;\n  height: auto;\n  padding: 60px;\n\n  background-color: var(--white-color);\n  color: var(--brown-color);\n  border-radius: 30px;\n  border: 5px solid var(--brown-transparent);\n"]))),f=h.Z.div(o||(o=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  margin-bottom: 70px;\n  padding-bottom: 30px;\n\n  border-bottom: 1px solid var(--green-color);\n"]))),g=h.Z.h1(a||(a=(0,p.Z)(["\n  font-size: 38px;\n  font-weight: 900;\n"]))),w=h.Z.button(s||(s=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: var(--brown-color);\n  background-color: transparent;\n  border: none;\n\n  cursor: pointer;\n  transition: color var(--hover-effect);\n\n  :hover,\n  :focus {\n    color: var(--green-color);\n  }\n"]))),b=r(3329),v=document.querySelector("#modal-root"),Z=function(n){var e=n.children,r=n.title,t=n.onClose,i=c(t).onBackdropClick;return(0,d.createPortal)((0,b.jsx)(m,{onClick:i,children:(0,b.jsxs)(x,{children:[(0,b.jsxs)(f,{children:[(0,b.jsx)(g,{children:r}),(0,b.jsx)(w,{type:"button",onClick:t,children:(0,b.jsx)(u.Z,{name:"cross",size:"18px",fill:"currentColor"})})]}),e]})}),v)}},2316:function(n,e,r){r.d(e,{S:function(){return i},q:function(){return o}});var t=r(6863),i=t.Ry().shape({email:t.Z_().email("The email address must be valid and existing.").required("The email field is required and cannot be empty.")}),o=t.Ry().shape({email:t.Z_().email("The email address must be valid and existing.").required("The email field is required and cannot be empty."),password:t.Z_().min(6,"The minimum password length must be 6 characters.").max(12,"The maximum password length must not exceed 12 characters.").required("The password field is required and cannot be empty."),passwordAgain:t.Z_().oneOf([t.iH("password")],"Passwords must match")})},9030:function(n,e,r){r.r(e),r.d(e,{default:function(){return J}});var t,i,o,a=r(5861),s=r(885),l=r(7757),c=r.n(l),d=r(2791),u=r(6871),p=r(9911),h=r(5995),m=r(9565),x=r(6359),f=r(6451),g=r(4943),w=r(8353),b=r(9085),v=r(6863),Z=v.Ry().shape({email:v.Z_().email("The email address must be valid and existing.").required("The email field is required and cannot be empty."),password:v.Z_().min(6,"The minimum password length must be 6 characters.").max(12,"The maximum password length must not exceed 12 characters.").required("The password field is required and cannot be empty.")}),y=function(){var n=(0,p.T)(),e=(0,u.s0)(),r=(0,m.C)(x.L),t=(0,h.Z)(f,{sprite:g.Z,soundEnabled:r}),i=(0,s.Z)(t,1)[0],o=(0,d.useState)(!1),l=(0,s.Z)(o,2),v=l[0],y=l[1],j=function(){var r=(0,a.Z)(c().mark((function r(t){var i;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i={email:t.email,password:t.password},r.next=3,n(w.Z.signin(i));case 3:"ok"===r.sent.payload.status?e("/profile"):b.Am.warning("Sorry something went wrong... Please try again.");case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}();return{initialValues:{email:"",password:"",rememberMe:!1},login:j,showModalResetPassword:v,signinSchema:Z,toogleModalResetPassword:function(){y((function(n){return!n})),i({id:"counter_click"})},play:i}},j=r(5705),k=r(6268),C=r(5465),S=r(1270),q=r(886),T=r(4073),_=function(){var n=(0,p.T)(),e=(0,u.s0)(),r=function(){var r=(0,a.Z)(c().mark((function r(t){return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n(w.Z.sendPasswordResetEmail(t));case 2:"ok"===r.sent.payload.status&&(e("/"),b.Am.success("Email sent successfully. Please check your inbox for a link to reset your password."));case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}();return{initialValues:{email:""},onSubmit:r}},E=r(2316),R=r(168),P=r(2499),z=P.Z.p(t||(t=(0,R.Z)(["\n  text-align: center;\n  margin-bottom: 40px;\n"]))),L=r(3329),V=function(){var n=_(),e=n.initialValues,r=n.onSubmit;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(z,{children:"Enter the email address to which the account is registered. We will send an email to reset and reset your password."}),(0,L.jsx)(j.J9,{initialValues:e,onSubmit:r,validationSchema:E.S,children:function(n){var e=n.values,r=n.handleSubmit,t=n.handleChange;return(0,L.jsxs)(j.l0,{onSubmit:r,children:[(0,L.jsx)(k.Z,{label:"email",type:"email",name:"email",value:e.email,onChange:t,placeholder:"Enter your e-mail",required:!0,height:"50px",width:"100%",margin:"0 0 30px 0"}),(0,L.jsx)(C.Z,{type:"submit",background:"green",width:"100%",height:"60px",borderRadius:"50px",shadow:!0,children:"send"})]})}})]})},M=P.Z.div(i||(i=(0,R.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  margin-bottom: 30px;\n  margin-top: 30px;\n"]))),A=P.Z.button(o||(o=(0,R.Z)(["\n  font-family: inherit;\n  font-size: 19px;\n\n  border: none;\n  background-color: transparent;\n  color: var(--green-color);\n\n  cursor: pointer;\n  transition: opacity var(--hover-effect);\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"]))),B=function(){var n=y(),e=n.initialValues,r=n.login,t=n.showModalResetPassword,i=n.signinSchema,o=n.toogleModalResetPassword,a=n.play;return(0,L.jsxs)(S.Z,{type:"transparent",alignItems:"center",width:"856px",padding:"50px",children:[(0,L.jsx)(q.Z,{}),(0,L.jsx)(j.J9,{initialValues:e,onSubmit:r,validationSchema:i,children:function(n){var e=n.values,r=n.handleSubmit,t=n.handleChange;return(0,L.jsxs)(j.l0,{onSubmit:r,children:[(0,L.jsxs)(M,{children:[(0,L.jsx)(k.Z,{label:"email",type:"email",name:"email",value:e.email,onChange:t,placeholder:"Enter your e-mail",required:!0,height:"50px",width:"363px"}),(0,L.jsx)(k.Z,{label:"password",type:"password",name:"password",value:e.password,onChange:t,required:!0,height:"50px",width:"363px"})]}),(0,L.jsx)(C.Z,{type:"submit",background:"green",width:"756px",height:"60px",borderRadius:"50px",shadow:!0,onClick:function(){return a({id:"counter_click"})},children:"Sign in"}),(0,L.jsx)(M,{children:(0,L.jsx)(A,{type:"button",onClick:o,children:"Lost your password?"})})]})}}),t&&(0,L.jsx)(T.Z,{title:"Reset the password",onClose:o,children:(0,L.jsx)(V,{})})]})},J=function(){return(0,L.jsx)(B,{})}}}]);
//# sourceMappingURL=30.22852ad4.chunk.js.map