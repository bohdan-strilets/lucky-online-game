"use strict";(self.webpackChunklucky_online_game=self.webpackChunklucky_online_game||[]).push([[400],{6268:function(e,n,r){r.d(n,{Z:function(){return g}});var a,i,s,t,o=r(168),d=r(2499),l=r(5705),u=d.Z.label(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: ",";\n"])),(function(e){var n=e.margin;return n||""})),p=d.Z.span(i||(i=(0,o.Z)(["\n  font-size: 15px;\n  text-transform: uppercase;\n  color: var(--brown-color);\n\n  margin-bottom: 6px;\n"]))),c=(0,d.Z)(l.gN)(s||(s=(0,o.Z)(["\n  width: ",";\n  height: ",";\n  padding: 0 15px;\n\n  font-family: inherit;\n  font-weight: 700;\n  font-size: 19px;\n\n  color: var(--brown-color);\n  background: var(--white-transparent);\n  border: 2px solid var(--brown-color);\n  border-radius: 8px;\n  outline: none;\n\n  :focus {\n    border: 2px solid rgba(105, 74, 4, 0.7);\n  }\n\n  ::placeholder {\n    font-size: 19px;\n    color: var(--brown-color);\n    opacity: 0.5;\n  }\n"])),(function(e){var n=e.width;return n||""}),(function(e){var n=e.height;return n||""})),h=(0,d.Z)(l.Bc)(t||(t=(0,o.Z)(["\n  margin-top: 5px;\n  color: red;\n"]))),m=r(3329),g=function(e){var n=e.label,r=e.type,a=e.name,i=e.value,s=e.onChange,t=e.required,o=e.placeholder,d=e.width,l=e.height,g=e.margin;return(0,m.jsxs)(u,{margin:g,children:[(0,m.jsx)(p,{children:n}),(0,m.jsx)(c,{type:r,name:a,value:i,onChange:s,required:t,placeholder:o,width:d,height:l}),(0,m.jsx)(h,{name:a,component:"div"})]})}},2316:function(e,n,r){r.d(n,{S:function(){return i},q:function(){return s}});var a=r(6863),i=a.Ry().shape({email:a.Z_().email("The email address must be valid and existing.").required("The email field is required and cannot be empty.")}),s=a.Ry().shape({email:a.Z_().email("The email address must be valid and existing.").required("The email field is required and cannot be empty."),password:a.Z_().min(6,"The minimum password length must be 6 characters.").max(12,"The maximum password length must not exceed 12 characters.").required("The password field is required and cannot be empty."),passwordAgain:a.Z_().oneOf([a.iH("password")],"Passwords must match")})},3400:function(e,n,r){r.r(n),r.d(n,{default:function(){return q}});var a,i,s=r(5861),t=r(7757),o=r.n(t),d=r(9911),l=r(6871),u=r(9085),p=r(8353),c=r(2316),h=function(){var e=(0,d.T)(),n=(0,l.s0)(),r=function(){var r=(0,s.Z)(o().mark((function r(a){var i;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i={email:a.email,password:a.password},r.next=3,e(p.Z.resetPassword(i));case 3:"ok"===r.sent.payload.status&&(n("/sign-in"),u.Am.success("Password changed successfully. Try logging in again."));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return{initialValues:{email:"",password:"",passwordAgain:""},resetPassword:r,restorePasswordSchema:c.q}},m=r(5705),g=r(6268),w=r(5465),x=r(1270),f=r(168),b=r(2499),v=b.Z.h1(a||(a=(0,f.Z)(["\n  font-weight: 900;\n  font-size: 42px;\n  text-transform: uppercase;\n  text-align: center;\n"]))),y=b.Z.div(i||(i=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  margin-bottom: 30px;\n  margin-top: 30px;\n"]))),Z=r(3329),j=function(){var e=h(),n=e.resetPassword,r=e.initialValues,a=e.restorePasswordSchema;return(0,Z.jsx)(x.Z,{type:"transparent",width:"856px",padding:"50px",children:(0,Z.jsx)(m.J9,{initialValues:r,onSubmit:n,validationSchema:a,children:function(e){var n=e.values,r=e.handleSubmit,a=e.handleChange;return(0,Z.jsxs)(m.l0,{onSubmit:r,children:[(0,Z.jsx)(v,{children:"Password recovery"}),(0,Z.jsx)(g.Z,{label:"email",type:"email",name:"email",value:n.email,onChange:a,placeholder:"Enter your e-mail",required:!0,height:"50px",width:"100%"}),(0,Z.jsxs)(y,{children:[(0,Z.jsx)(g.Z,{label:"password",type:"password",name:"password",value:n.password,onChange:a,required:!0,height:"50px",width:"363px"}),(0,Z.jsx)(g.Z,{label:"password again",type:"password",name:"passwordAgain",value:n.passwordAgain,onChange:a,required:!0,height:"50px",width:"363px"})]}),(0,Z.jsx)(w.Z,{type:"submit",background:"green",width:"756px",height:"60px",borderRadius:"50px",shadow:!0,children:"Reset password"})]})}})})},q=function(){return(0,Z.jsx)(j,{})}}}]);
//# sourceMappingURL=400.91ed3d81.chunk.js.map