"use strict";(self.webpackChunklucky_online_game=self.webpackChunklucky_online_game||[]).push([[868],{886:function(e,n,i){i.d(n,{Z:function(){return Z}});var a,r,t,s=i(885),l=i(5995),d=i(9565),o=i(6359),c=i(6451),h=i(4943),p=i(168),u=i(2499),m=i(4456),x=i(3504),g=u.Z.ul(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  margin-bottom: 30px;\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n    justify-content: center;\n  }\n"])),m.Z.tablet),w=u.Z.li(r||(r=(0,p.Z)(["\n  @media screen and (min-width: ",") {\n    margin-right: 30px;\n\n    :last-child {\n      margin-right: 0;\n    }\n  }\n"])),m.Z.tablet),y=(0,u.Z)(x.OL)(t||(t=(0,p.Z)(["\n  font-weight: 900;\n  font-size: 30px;\n  text-transform: uppercase;\n\n  color: var(--brown-color);\n\n  &.active {\n    opacity: 0.7;\n  }\n\n  @media screen and (min-width: ",") {\n    font-size: 42px;\n  }\n"])),m.Z.tablet),j=i(3329),Z=function(){var e=(0,d.C)(o.L),n=(0,l.Z)(c,{sprite:h.Z,soundEnabled:e}),i=(0,s.Z)(n,1)[0];return(0,j.jsxs)(g,{children:[(0,j.jsx)(w,{children:(0,j.jsx)(y,{to:"/sign-in",onClick:function(){return i({id:"counter_click"})},children:"Sign in"})}),(0,j.jsx)(w,{children:(0,j.jsx)(y,{to:"/sign-up",onClick:function(){return i({id:"counter_click"})},children:"Sign up"})})]})}},868:function(e,n,i){i.r(n),i.d(n,{default:function(){return O}});var a,r,t,s=i(5607),l=i(4456),d=i(5861),o=i(885),c=i(7757),h=i.n(c),p=i(9911),u=i(6871),m=i(8353),x=i(5995),g=i(9565),w=i(6359),y=i(6451),j=i(4943),Z=i(9085),b=i(6863),f=b.Ry().shape({name:b.Z_().min(3,"The minimum name length must be 3 characters.").max(15,"The maximum name length should not exceed 15 characters.").required("The name field is required and cannot be empty."),email:b.Z_().email("The email address must be valid and existing.").required("The email field is required and cannot be empty."),password:b.Z_().min(6,"The minimum password length must be 6 characters.").max(12,"The maximum password length must not exceed 12 characters.").required("The password field is required and cannot be empty."),passwordAgain:b.Z_().oneOf([b.iH("password")],"Passwords must match")}),v=function(){var e=(0,p.T)(),n=(0,u.s0)(),i=(0,g.C)(w.L),a=(0,x.Z)(y,{sprite:j.Z,soundEnabled:i}),r=(0,o.Z)(a,1)[0],t=function(){var i=(0,d.Z)(h().mark((function i(a){var r;return h().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return r={name:a.name,email:a.email,password:a.password},i.next=3,e(m.Z.signup(r));case 3:"ok"===i.sent.payload.status?n("/welcome"):Z.Am.warning("Sorry something went wrong... Please try again.");case 5:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}();return{signupSchema:f,initialValues:{name:"",email:"",password:"",passwordAgain:""},registration:t,play:r}},C=i(5705),k=i(6268),S=i(5465),q=i(1270),_=i(886),T=i(168),A=i(2499),E=i(3504),P=A.Z.div(a||(a=(0,T.Z)(["\n  margin-bottom: 30px;\n\n  @media screen and (min-width: ",") {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n"])),l.Z.tablet),V=A.Z.p(r||(r=(0,T.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n\n  color: var(--brown-color);\n\n  margin-top: 30px;\n"]))),R=(0,A.Z)(E.rU)(t||(t=(0,T.Z)(["\n  color: var(--green-color);\n"]))),z=i(3329),B=function(){var e=v(),n=e.initialValues,i=e.registration,a=e.signupSchema,r=e.play;return(0,z.jsxs)(q.Z,{type:"transparent",alignItems:"center",width:"300px",padding:"50px",children:[(0,z.jsx)(C.J9,{initialValues:n,onSubmit:i,validationSchema:a,children:function(e){var n=e.values,i=e.handleSubmit,a=e.handleChange;return(0,z.jsxs)(C.l0,{onSubmit:i,children:[(0,z.jsx)(_.Z,{}),(0,z.jsxs)(P,{children:[(0,z.jsx)(k.Z,{label:"name",type:"text",name:"name",value:n.name,onChange:a,placeholder:"Enter your name",required:!0,height:"50px",width:"280px",margin:"0 0 25px 0"}),(0,z.jsx)(k.Z,{label:"email",type:"email",name:"email",value:n.email,onChange:a,placeholder:"Enter your e-mail",required:!0,height:"50px",width:"280px",margin:"0 0 25px 0"})]}),(0,z.jsxs)(P,{children:[(0,z.jsx)(k.Z,{label:"password",type:"password",name:"password",value:n.password,onChange:a,required:!0,height:"50px",width:"280px",margin:"0 0 25px 0"}),(0,z.jsx)(k.Z,{label:"password again",type:"password",name:"passwordAgain",value:n.passwordAgain,onChange:a,required:!0,height:"50px",width:"280px"})]}),(0,z.jsx)(S.Z,{type:"submit",background:"green",width:"100%",height:"60px",borderRadius:"50px",shadow:!0,onClick:function(){return r({id:"counter_click"})},children:"Sign up"})]})}}),(0,z.jsxs)(V,{children:["By registering on the site, you agree to the"," ",(0,z.jsx)(R,{to:"/terms-and-conditions",children:"Terms and Conditions"})," ","and ",(0,z.jsx)(R,{to:"/privacy-policy",children:"Privacy Policy"})]})]})},I=function(){var e=v(),n=e.initialValues,i=e.registration,a=e.signupSchema,r=e.play;return(0,z.jsxs)(q.Z,{type:"transparent",alignItems:"center",width:"560px",padding:"50px",children:[(0,z.jsx)(C.J9,{initialValues:n,onSubmit:i,validationSchema:a,children:function(e){var n=e.values,i=e.handleSubmit,a=e.handleChange;return(0,z.jsxs)(C.l0,{onSubmit:i,children:[(0,z.jsx)(_.Z,{}),(0,z.jsxs)(P,{children:[(0,z.jsx)(k.Z,{label:"name",type:"text",name:"name",value:n.name,onChange:a,placeholder:"Enter your name",required:!0,height:"50px",width:"250px"}),(0,z.jsx)(k.Z,{label:"email",type:"email",name:"email",value:n.email,onChange:a,placeholder:"Enter your e-mail",required:!0,height:"50px",width:"250px"})]}),(0,z.jsxs)(P,{children:[(0,z.jsx)(k.Z,{label:"password",type:"password",name:"password",value:n.password,onChange:a,required:!0,height:"50px",width:"250px"}),(0,z.jsx)(k.Z,{label:"password again",type:"password",name:"passwordAgain",value:n.passwordAgain,onChange:a,required:!0,height:"50px",width:"250px"})]}),(0,z.jsx)(S.Z,{type:"submit",background:"green",width:"520px",height:"60px",borderRadius:"50px",shadow:!0,onClick:function(){return r({id:"counter_click"})},children:"Sign up"})]})}}),(0,z.jsxs)(V,{children:["By registering on the site, you agree to the"," ",(0,z.jsx)(R,{to:"/terms-and-conditions",children:"Terms and Conditions"})," ","and ",(0,z.jsx)(R,{to:"/privacy-policy",children:"Privacy Policy"})]})]})},J=function(){var e=v(),n=e.initialValues,i=e.registration,a=e.signupSchema,r=e.play;return(0,z.jsxs)(q.Z,{type:"transparent",alignItems:"center",width:"856px",padding:"50px",children:[(0,z.jsx)(C.J9,{initialValues:n,onSubmit:i,validationSchema:a,children:function(e){var n=e.values,i=e.handleSubmit,a=e.handleChange;return(0,z.jsxs)(C.l0,{onSubmit:i,children:[(0,z.jsx)(_.Z,{}),(0,z.jsxs)(P,{children:[(0,z.jsx)(k.Z,{label:"name",type:"text",name:"name",value:n.name,onChange:a,placeholder:"Enter your name",required:!0,height:"50px",width:"363px"}),(0,z.jsx)(k.Z,{label:"email",type:"email",name:"email",value:n.email,onChange:a,placeholder:"Enter your e-mail",required:!0,height:"50px",width:"363px"})]}),(0,z.jsxs)(P,{children:[(0,z.jsx)(k.Z,{label:"password",type:"password",name:"password",value:n.password,onChange:a,required:!0,height:"50px",width:"363px"}),(0,z.jsx)(k.Z,{label:"password again",type:"password",name:"passwordAgain",value:n.passwordAgain,onChange:a,required:!0,height:"50px",width:"363px"})]}),(0,z.jsx)(S.Z,{type:"submit",background:"green",width:"756px",height:"60px",borderRadius:"50px",shadow:!0,onClick:function(){return r({id:"counter_click"})},children:"Sign up"})]})}}),(0,z.jsxs)(V,{children:["By registering on the site, you agree to the"," ",(0,z.jsx)(R,{to:"/terms-and-conditions",children:"Terms and Conditions"})," ","and ",(0,z.jsx)(R,{to:"/privacy-policy",children:"Privacy Policy"})]})]})},L=function(){return(0,z.jsx)(s.Z,{queries:{small:"(max-width: 767px)",medium:"(min-width: ".concat(l.Z.tablet,") and (max-width: 1439px)"),large:"(min-width: ".concat(l.Z.desktop,")")},children:function(e){return(0,z.jsxs)(z.Fragment,{children:[e.small&&(0,z.jsx)(B,{}),e.medium&&(0,z.jsx)(I,{}),e.large&&(0,z.jsx)(J,{})]})}})},O=function(){return(0,z.jsx)(L,{})}}}]);
//# sourceMappingURL=868.932ebc5f.chunk.js.map