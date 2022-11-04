"use strict";(self.webpackChunklucky_online_game=self.webpackChunklucky_online_game||[]).push([[747],{126:function(e,n){n.Z={ZERO:"zero",NUMBER:"number",HIGH:"high",LOW:"low",EVEN:"even",ODD:"odd",BLACK:"black",RED:"red",DOZEN_1:"dozen-1",DOZEN_2:"dozen-2",DOZEN_3:"dozen-3",COLUMN_1:"column-1",COLUMN_2:"column-2",COLUMN_3:"column-3"}},1737:function(e,n){n.Z=function(e){if(e)return e.slice(0,19).replace("T"," ")}},8488:function(e,n,t){var i=t(126);n.Z=function(){var e={low:{type:"low",coefficient:{number:5.7,bottomRow:4.2,oneFromTwo:3.2},initialFunds:3200,experience:30},medium:{type:"medium",coefficient:{number:3.2,bottomRow:2.1,oneFromTwo:1.7},initialFunds:1600,experience:20},high:{type:"high",coefficient:{number:1.9,bottomRow:1.5,oneFromTwo:1.3},initialFunds:700,experience:10}};return{coefficientInfo:e,getCoefficient:function(n,t){switch(n){case e.low.type:return t===i.Z.ZERO||t===i.Z.NUMBER?e.low.coefficient.number:t===i.Z.HIGH||t===i.Z.LOW||t===i.Z.EVEN||t===i.Z.ODD||t===i.Z.BLACK||t===i.Z.RED?e.low.coefficient.oneFromTwo:t===i.Z.DOZEN_1||t===i.Z.DOZEN_2||t===i.Z.DOZEN_3||t===i.Z.COLUMN_1||t===i.Z.COLUMN_2||t===i.Z.COLUMN_3?e.low.coefficient.bottomRow:0;case e.medium.type:return t===i.Z.ZERO||t===i.Z.NUMBER?e.medium.coefficient.number:t===i.Z.HIGH||t===i.Z.LOW||t===i.Z.EVEN||t===i.Z.ODD||t===i.Z.BLACK||t===i.Z.RED?e.medium.coefficient.oneFromTwo:t===i.Z.DOZEN_1||t===i.Z.DOZEN_2||t===i.Z.DOZEN_3||t===i.Z.COLUMN_1||t===i.Z.COLUMN_2||t===i.Z.COLUMN_3?e.medium.coefficient.bottomRow:0;case e.high.type:return t===i.Z.ZERO||t===i.Z.NUMBER?e.high.coefficient.number:t===i.Z.HIGH||t===i.Z.LOW||t===i.Z.EVEN||t===i.Z.ODD||t===i.Z.BLACK||t===i.Z.RED?e.high.coefficient.oneFromTwo:t===i.Z.DOZEN_1||t===i.Z.DOZEN_2||t===i.Z.DOZEN_3||t===i.Z.COLUMN_1||t===i.Z.COLUMN_2||t===i.Z.COLUMN_3?e.high.coefficient.bottomRow:0;default:return 0}}}}},5747:function(e,n,t){t.r(n),t.d(n,{default:function(){return rn}});var i,r,a,o,s,l,c,d,u,h,x,p,m,f,g,w,Z,j,b,v,y,C,E,k,M,D=t(5607),S=t(4456),A=t(5861),_=t(885),T=t(7757),N=t.n(T),O=t(2791),R=t(9565),L=t(9911),z=t(8353),F=t(1074),P=t(5995),G=t(6359),B=t(1383),U=t(2426),I=t.n(U),q=t(6451),V=t(4943),H=function(){var e=(0,O.useState)(!1),n=(0,_.Z)(e,2),t=n[0],i=n[1],r=(0,O.useState)(!1),a=(0,_.Z)(r,2),o=a[0],s=a[1],l=(0,O.useState)(!1),c=(0,_.Z)(l,2),d=c[0],u=c[1],h=(0,O.useState)(!1),x=(0,_.Z)(h,2),p=x[0],m=x[1],f=(0,O.useState)(!1),g=(0,_.Z)(f,2),w=g[0],Z=g[1],j=(0,R.C)(B.PR),b=(0,R.C)(B.Xp),v=(0,L.T)(),y=(0,F.uD)().data,C=(0,R.C)(G.L),E=(0,P.Z)(q,{sprite:V.Z,soundEnabled:C}),k=(0,_.Z)(E,1)[0],M=function(){var e=(0,A.Z)(N().mark((function e(){var n;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(z.Z.deleteSession());case 2:n=e.sent,k({id:"counter_click"}),"ok"===n.payload.status&&Z(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{showEditAvatarModal:t,switchEditAvatarModal:function(e){i(e),k({id:"counter_click"})},showEditEmailModal:o,switchEditEmailModal:function(e){s(e),k({id:"counter_click"})},showEditPasswordModal:d,switchEditPasswordModal:function(e){u(e),k({id:"counter_click"})},showEditComplexityModal:p,switchEditComplexityModal:function(e){m(e),k({id:"counter_click"})},showDeleteSessionModal:w,switchDeleteSessionModal:function(e){Z(e),k({id:"counter_click"})},data:y,age:function(){var e;if(j.dateBirth)return(null===(e=j.dateBirth)||void 0===e?void 0:e.length)>9?Number.parseInt(I()(j.dateBirth).fromNow(!0)):0},deleteGameSession:M,user:j,products:b}},W=t(8212),K=t(1737),J=t(1270),Y=t(9426),$=t(3840),X=function(e){var n=(0,L.T)(),t=(0,O.useState)(!1),i=(0,_.Z)(t,2),r=i[0],a=i[1],o=(0,O.useState)(""),s=(0,_.Z)(o,2),l=s[0],c=s[1],d=(0,O.useState)(null),u=(0,_.Z)(d,2),h=u[0],x=u[1],p=(0,O.useState)(""),m=(0,_.Z)(p,2),f=m[0],g=m[1],w=function(){var t=(0,A.Z)(N().mark((function t(i){var r;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i.preventDefault(),!h){t.next=12;break}if(Z(h),a(!0),(r=new FormData).append("avatar",h),r){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,n(z.Z.changeAvatar(r));case 10:"ok"===t.sent.payload.status&&(e(),a(!1));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Z=function(e){var n=new FileReader;n.readAsDataURL(e),n.onloadend=function(){g(n.result)}};return{changeAvatar:w,previewSource:f,handleFileInputChange:function(e){var n=e.target.files[0];Z(n),x(n),c(e.target.value)},fileInputState:l,isLoading:r}},Q=t(5465),ee=t(1549),ne=t(168),te=t(2499),ie=te.Z.p(i||(i=(0,ne.Z)(["\n  text-align: center;\n  margin-bottom: 40px;\n"]))),re=te.Z.label(r||(r=(0,ne.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100%;\n  height: 150px;\n  margin-bottom: 50px;\n\n  background-color: var(--brown-transparent);\n  border-radius: 30px;\n"]))),ae=te.Z.input(a||(a=(0,ne.Z)(["\n  font-size: 26px;\n  font-weight: 900;\n  font-family: inherit;\n\n  color: var(--white-color);\n  background-color: var(--brown-color);\n"]))),oe=te.Z.img(o||(o=(0,ne.Z)(["\n  width: 150px;\n  margin-left: 50%;\n  transform: translate(-50%);\n  margin-bottom: 50px;\n"]))),se=t(3329),le=function(e){var n=e.onClose,t=X(n),i=t.changeAvatar,r=t.previewSource,a=t.handleFileInputChange,o=t.fileInputState,s=t.isLoading;return(0,se.jsxs)("form",{encType:"multipart/from-data",onSubmit:i,children:[(0,se.jsx)(ie,{children:'The selected file must be in one of the following formats ".jpg, .png, .svg". The file must not exceed 2MB. A square image is best.'}),(0,se.jsx)(re,{children:(0,se.jsx)(ae,{type:"file",name:"avatar",multiple:!0,accept:".jpg, .png, .svg",onChange:a,value:o})}),r&&(0,se.jsx)(oe,{src:r,alt:"chosen"}),(0,se.jsx)(Q.Z,{type:"submit",background:"green",borderRadius:"50px",height:"50px",width:"100%",shadow:!0,children:"change avatar"}),s&&(0,se.jsx)(ee.Z,{})]})},ce=function(e){var n=(0,L.T)(),t=function(){var t=(0,A.Z)(N().mark((function t(i){return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(z.Z.changeEmail(i));case 2:"ok"===t.sent.payload.status&&e();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{initialValues:{email:""},changeEmail:t}},de=t(5705),ue=t(6268),he=t(6863),xe=he.Ry().shape({email:he.Z_().email("The email address must be valid and existing.").required("The email field is required and cannot be empty.")}),pe=te.Z.p(s||(s=(0,ne.Z)(["\n  text-align: center;\n  margin-bottom: 40px;\n"]))),me=function(e){var n=e.onClose,t=ce(n),i=t.changeEmail,r=t.initialValues;return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(pe,{children:"After changing your email, you will need to re-verify your email."}),(0,se.jsx)(de.J9,{initialValues:r,onSubmit:i,validationSchema:xe,children:function(e){var n=e.values,t=e.handleSubmit,i=e.handleChange;return(0,se.jsxs)(de.l0,{onSubmit:t,children:[(0,se.jsx)(ue.Z,{label:"email",type:"email",name:"email",value:n.email,onChange:i,placeholder:"Enter your e-mail",required:!0,height:"50px",width:"100%",margin:"0 0 30px 0"}),(0,se.jsx)(Q.Z,{type:"submit",background:"green",width:"100%",height:"60px",borderRadius:"50px",shadow:!0,children:"Sign up"})]})}})]})},fe=function(e){var n=(0,L.T)(),t=function(){var t=(0,A.Z)(N().mark((function t(i){var r;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={password:i.password,newPassword:i.newPassword},t.next=3,n(z.Z.changePassword(r));case 3:"ok"===t.sent.payload.status&&e();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{initialValues:{password:"",newPassword:"",passwordAgain:""},changePassword:t}},ge=he.Ry().shape({password:he.Z_().min(6,"The minimum password length must be 6 characters.").max(12,"The maximum password length must not exceed 12 characters.").required("The password field is required and cannot be empty."),newPassword:he.Z_().min(6,"The minimum password length must be 6 characters.").max(12,"The maximum password length must not exceed 12 characters.").required("The password field is required and cannot be empty."),passwordAgain:he.Z_().oneOf([he.iH("newPassword")],"Passwords must match")}),we=function(e){var n=e.onClose,t=fe(n),i=t.changePassword,r=t.initialValues;return(0,se.jsx)(de.J9,{initialValues:r,onSubmit:i,validationSchema:ge,children:function(e){var n=e.values,t=e.handleSubmit,i=e.handleChange;return(0,se.jsxs)(de.l0,{onSubmit:t,children:[(0,se.jsx)(ue.Z,{label:"password",type:"password",name:"password",value:n.password,onChange:i,required:!0,height:"50px",width:"100%",margin:"0 0 30px 0"}),(0,se.jsx)(ue.Z,{label:"new password",type:"password",name:"newPassword",value:n.newPassword,onChange:i,required:!0,height:"50px",width:"100%",margin:"0 0 30px 0"}),(0,se.jsx)(ue.Z,{label:"password again",type:"password",name:"passwordAgain",value:n.passwordAgain,onChange:i,required:!0,height:"50px",width:"100%",margin:"0 0 30px 0"}),(0,se.jsx)(Q.Z,{type:"submit",background:"green",width:"100%",height:"60px",borderRadius:"50px",shadow:!0,children:"Sign up"})]})}})},Ze=t(8488),je=function(e,n){var t=(0,L.T)(),i=(0,Ze.Z)().coefficientInfo,r={complexity:n},a=function(){var n=(0,A.Z)(N().mark((function n(r){return N().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===r.complexity||void 0===r.complexity){n.next=5;break}return n.next=3,t(z.Z.changeComplexity({complexity:r.complexity,bank:i[r.complexity].initialFunds}));case 3:"ok"===n.sent.payload.status&&e();case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return{initialValues:r,changeComplexity:a}},be=t(4184),ve=he.Ry().shape({complexity:he.Z_().required("The complexity field is required and cannot be empty.")}),ye=te.Z.p(l||(l=(0,ne.Z)(["\n  text-align: center;\n  margin-bottom: 40px;\n"]))),Ce=te.Z.div(c||(c=(0,ne.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n\n  margin-bottom: 30px;\n"]))),Ee=function(e){var n=e.onClose,t=e.complexity,i=je(n,t),r=i.changeComplexity,a=i.initialValues;return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(ye,{children:"After changing the difficulty level, the rules for calculating rewards and experience will change."}),(0,se.jsx)(de.J9,{initialValues:a,onSubmit:r,validationSchema:ve,children:function(e){var n=e.values,t=e.handleSubmit;e.handleChange;return(0,se.jsxs)(de.l0,{onSubmit:t,children:[(0,se.jsxs)(Ce,{children:[(0,se.jsx)(be.Z,{label:"low",name:"complexity",value:"low",checked:"low"===n.complexity}),(0,se.jsx)(be.Z,{label:"medium",name:"complexity",value:"medium",checked:"medium"===n.complexity}),(0,se.jsx)(be.Z,{label:"high",name:"complexity",value:"high",checked:"high"===n.complexity})]}),(0,se.jsx)(Q.Z,{type:"submit",background:"green",width:"100%",height:"60px",borderRadius:"50px",shadow:!0,children:"change"})]})}})]})},ke=t(493),Me=t(9085),De=function(){var e=(0,O.useState)(!1),n=(0,_.Z)(e,2),t=n[0],i=n[1],r=(0,O.useState)(null),a=(0,_.Z)(r,2),o=a[0],s=a[1],l=(0,O.useState)(null),c=(0,_.Z)(l,2),d=c[0],u=c[1],h=(0,O.useState)(0),x=(0,_.Z)(h,2),p=x[0],m=x[1],f=(0,L.T)(),g=(0,R.C)(G.L),w=(0,P.Z)(q,{sprite:V.Z,soundEnabled:g}),Z=(0,_.Z)(w,1)[0],j=function(){i(!1),Z({id:"counter_click"})};return{openDialogWindow:function(e){i(!0),Z({id:"counter_click"});var n=e.currentTarget.dataset.index,t=e.currentTarget.dataset.price;void 0!==n&&void 0!==t&&(s(Number(n)),u(Number(t)),m(Number(t)/2))},closeDialogWindow:j,sell:function(){null!==o&&null!==d&&(f(z.Z.sellItem({index:o,price:d/2})),j(),Me.Am.success("You have successfully sold an item you don't want."),Z({id:"sound_victory"}))},showDialog:t,currentPrice:d,halfPrice:p}},Se=t(7189),Ae=te.Z.ul(d||(d=(0,ne.Z)(["\n  width: 100%;\n\n  @media screen and (min-width: ",") {\n    display: flex;\n    flex-wrap: wrap;\n\n    margin: -5px;\n  }\n"])),S.Z.tablet),_e=te.Z.li(u||(u=(0,ne.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  padding: 15px;\n\n  border: 3px solid var(--white-transparent);\n  border-radius: 10px;\n\n  @media screen and (max-width: 767px) {\n    margin-bottom: 10px;\n\n    :last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  @media screen and (min-width: ",") {\n    width: calc((100% - 4 * 5px) / 2);\n    margin: 5px;\n  }\n\n  @media screen and (min-width: ",") {\n    width: calc((100% - 8 * 5px) / 4);\n    margin: 5px;\n  }\n"])),S.Z.tablet,S.Z.desktop),Te=te.Z.img(h||(h=(0,ne.Z)(["\n  max-height: 150px;\n  margin-bottom: 10px;\n"]))),Ne=te.Z.p(x||(x=(0,ne.Z)(["\n  font-weight: 900;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n"]))),Oe=te.Z.p(p||(p=(0,ne.Z)(["\n  color: var(--green-color);\n"]))),Re=te.Z.div(m||(m=(0,ne.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n"]))),Le=function(e){var n=e.products,t=De(),i=t.closeDialogWindow,r=t.openDialogWindow,a=t.sell,o=t.currentPrice,s=t.halfPrice,l=t.showDialog;return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(Ae,{children:n.map((function(e,n){var t=e.imageURL,i=e.title,a=e.price;return(0,se.jsxs)(_e,{children:[(0,se.jsx)(Te,{src:t,alt:i}),(0,se.jsx)(Ne,{children:i}),(0,se.jsxs)(Oe,{children:[(0,Se.Z)(Number(a).toFixed(2))," $"]}),(0,se.jsx)(Re,{children:(0,se.jsx)(Q.Z,{type:"button",background:"green",width:"40px",height:"40px",borderRadius:"10px",onClick:r,"data-index":n,"data-price":a,children:(0,se.jsx)($.Z,{name:"dollar",size:"22px",fill:"var(--white-color)"})})})]},n)}))}),l&&(0,se.jsx)(Y.Z,{title:"Are you sure you want to sell this item?",onClose:i,children:(0,se.jsx)(ke.Z,{successBtnText:"Sell",failureBtnText:"Cancel",onFailure:i,onSuccess:a,text:"The price of this item on the market is ".concat((0,Se.Z)(Number(o).toFixed(2))," $ do you really want to sell it for half the price? You can only get ").concat((0,Se.Z)(Number(s).toFixed(2))," $")})})]})},ze=t(6871),Fe=te.Z.div(f||(f=(0,ne.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 100%;\n  padding: 40px;\n\n  border: 3px solid var(--white-transparent);\n  border-radius: 20px;\n"]))),Pe=te.Z.p(g||(g=(0,ne.Z)(["\n  font-size: 22px;\n  font-weight: 900;\n  margin-bottom: 25px;\n"]))),Ge=function(){var e=(0,ze.s0)();return(0,se.jsxs)(Fe,{children:[(0,se.jsx)(Pe,{children:"You haven't bought anything yet.... :("}),(0,se.jsx)(Q.Z,{type:"button",background:"green",height:"60px",width:"650px",borderRadius:"50px",shadow:!0,onClick:function(){return e("/store")},children:"go to the store"})]})},Be=t(3526),Ue=te.Z.div(w||(w=(0,ne.Z)(["\n  width: 100%;\n  padding-bottom: 50px;\n"]))),Ie=te.Z.div(Z||(Z=(0,ne.Z)(["\n  margin-bottom: 50px;\n\n  @media screen and (min-width: ",") {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n"])),S.Z.tablet),qe=te.Z.ul(j||(j=(0,ne.Z)(["\n  display: flex;\n  margin-bottom: 15px;\n"]))),Ve=te.Z.li(b||(b=(0,ne.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  margin-bottom: 30px;\n\n  border-bottom: 2px dotted var(--brown-color);\n\n  :last-child {\n    margin-bottom: 0;\n  }\n"]))),He=te.Z.img(v||(v=(0,ne.Z)(["\n  width: 100%;\n  height: auto;\n\n  opacity: 1;\n\n  cursor: pointer;\n  transition: border-color var(--hover-effect), opacity var(--hover-effect);\n\n  :hover,\n  :focus {\n    border-color: var(--brown-color);\n    opacity: 0.7;\n  }\n\n  @media screen and (max-width: 767px) {\n    margin-bottom: 30px;\n  }\n\n  @media screen and (min-width: ",") {\n    position: absolute;\n    top: -50px;\n    left: 50px;\n\n    width: 93px;\n    height: 93px;\n\n    border-radius: 50%;\n    border: 3px solid var(--white-color);\n  }\n"])),S.Z.tablet),We=te.Z.p(y||(y=(0,ne.Z)(["\n  font-size: 30px;\n  font-weight: 900;\n  margin-bottom: 50px;\n\n  @media screen and (min-width: ",") {\n    font-size: 34px;\n  }\n\n  @media screen and (min-width: ",") {\n    font-size: 44px;\n  }\n"])),S.Z.tablet,S.Z.desktop),Ke=te.Z.span(C||(C=(0,ne.Z)(["\n  font-size: 18px;\n  color: var(--green-color);\n\n  @media screen and (min-width: ",") {\n    font-size: 20px;\n  }\n\n  @media screen and (min-width: ",") {\n    font-size: 24px;\n  }\n"])),S.Z.tablet,S.Z.desktop),Je=te.Z.p(E||(E=(0,ne.Z)(["\n  font-size: 12px;\n  margin-bottom: 15px;\n\n  @media screen and (min-width: ",") {\n    font-size: 16px;\n  }\n\n  @media screen and (min-width: ",") {\n    font-size: 20px;\n  }\n"])),S.Z.tablet,S.Z.desktop),Ye=te.Z.span(k||(k=(0,ne.Z)(["\n  margin-right: 5px;\n\n  @media screen and (max-width: 767px) {\n    font-size: 12px;\n    margin-right: 10px;\n  }\n\n  @media screen and (min-width: ",") {\n    text-transform: uppercase;\n  }\n"])),S.Z.desktop),$e=te.Z.button(M||(M=(0,ne.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: transparent;\n  border: none;\n  outline: none;\n\n  cursor: pointer;\n  transition: opacity var(--hover-effect);\n\n  :hover,\n  :focus {\n    opacity: 0.5;\n  }\n"]))),Xe=function(){var e=H(),n=e.age,t=e.data,i=e.deleteGameSession,r=e.switchEditAvatarModal,a=e.switchEditComplexityModal,o=e.switchEditEmailModal,s=e.switchEditPasswordModal,l=e.showDeleteSessionModal,c=e.showEditAvatarModal,d=e.showEditComplexityModal,u=e.showEditEmailModal,h=e.showEditPasswordModal,x=e.switchDeleteSessionModal,p=e.user,m=e.products,f=(0,W.Z)(),g=f.switchEditProfileModal,w=f.switchDialogModal,Z=f.showDialogModal,j=f.showEditProfileModal,b=f.deleteAccount;return(0,se.jsxs)(J.Z,{type:"transparent",width:"280px",padding:"10px",margin:"0 0 80px 0",children:[p.name&&(0,se.jsxs)(Ue,{children:[(0,se.jsxs)(Ie,{children:[(0,se.jsxs)(Je,{children:["ID: ",p._id]}),(0,se.jsxs)("div",{children:[(0,se.jsx)("p",{children:"Account creation date:"}),(0,se.jsx)(Je,{children:p.createdAt&&(0,K.Z)(p.createdAt)}),(0,se.jsx)("p",{children:"Last update date:"}),(0,se.jsx)(Je,{children:p.updatedAt&&(0,K.Z)(p.updatedAt)})]})]}),(0,se.jsxs)(qe,{children:[(0,se.jsx)("li",{children:(0,se.jsx)(Q.Z,{type:"button",background:"blue",borderRadius:"10px",height:"40px",width:"40px",margin:"0 10px 0 0 ",onClick:function(){return g(!0)},children:(0,se.jsx)($.Z,{name:"adjust",size:"18px",fill:"var(--white-color)"})})}),(0,se.jsx)("li",{children:(0,se.jsx)(Q.Z,{type:"button",background:"blue",borderRadius:"10px",height:"40px",width:"40px",onClick:function(){return w(!0)},children:(0,se.jsx)($.Z,{name:"delete",size:"18px",fill:"var(--white-color)"})})})]}),(0,se.jsx)(He,{src:p.avatarURL,alt:"".concat(p.name," user avatar"),onClick:function(){return r(!0)}}),(0,se.jsxs)(We,{children:[p.name,(0,se.jsx)("br",{}),(0,se.jsx)(Ke,{children:p.nickname})]}),(0,se.jsxs)("ul",{children:[(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Email:"}),(0,se.jsxs)("div",{children:[(0,se.jsx)(Ye,{children:p.email}),(0,se.jsx)($e,{type:"button",onClick:function(){return o(!0)},children:(0,se.jsx)($.Z,{name:"pen",size:"12px",fill:"var(--green-color)"})})]})]}),(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Password:"}),(0,se.jsxs)("div",{children:[(0,se.jsx)(Ye,{children:"******"}),(0,se.jsx)($e,{type:"button",onClick:function(){return s(!0)},children:(0,se.jsx)($.Z,{name:"pen",size:"12px",fill:"var(--green-color)"})})]})]}),(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Gender:"}),(0,se.jsx)(Ye,{children:p.gender})]}),(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Date of birth:"}),(0,se.jsx)(Ye,{children:"".concat(p.dateBirth," | ").concat(n())})]}),(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Complexity:"}),(0,se.jsxs)("div",{children:[(0,se.jsx)(Ye,{children:p.complexity?p.complexity:"The game session has not yet been created."}),p.inGame&&(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)($e,{type:"button",onClick:function(){return a(!0)},children:(0,se.jsx)($.Z,{name:"pen",size:"12px",fill:"var(--green-color)"})}),(0,se.jsx)($e,{type:"button",onClick:function(){return x(!0)},children:(0,se.jsx)($.Z,{name:"delete",size:"12px",fill:"var(--green-color)"})})]})]})]}),(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Game session:"}),(0,se.jsxs)(Ye,{children:[p.inGame&&"Game creation date: ".concat(t&&(0,K.Z)(null===t||void 0===t?void 0:t.level.createdAt)),!p.inGame&&"Start a new game"]})]})]})]}),m&&m.length>0?(0,se.jsx)(Le,{products:m}):(0,se.jsx)(Ge,{}),c&&(0,se.jsx)(Y.Z,{title:"Choose a new avatar",onClose:function(){return r(!1)},children:(0,se.jsx)(le,{onClose:function(){return r(!1)}})}),u&&(0,se.jsx)(Y.Z,{title:"Change email",onClose:function(){return o(!1)},children:(0,se.jsx)(me,{onClose:function(){return o(!1)}})}),h&&(0,se.jsx)(Y.Z,{title:"Change password",onClose:function(){return s(!1)},children:(0,se.jsx)(we,{onClose:function(){return s(!1)}})}),d&&(0,se.jsx)(Y.Z,{title:"Change complexity",onClose:function(){return a(!1)},children:(0,se.jsx)(Ee,{onClose:function(){return a(!1)},complexity:p.complexity})}),l&&(0,se.jsx)(Y.Z,{title:"Delete current game session?",onClose:function(){return x(!1)},children:(0,se.jsx)(ke.Z,{onFailure:function(){return x(!1)},onSuccess:i,text:"After deleting a game session, data such as betting history, statistics and game level will be lost. Are you sure you want to continue?",failureBtnText:"Cancel",successBtnText:"Delete"})}),Z&&(0,se.jsx)(Y.Z,{onClose:function(){return w(!1)},title:"Delete account?",children:(0,se.jsx)(ke.Z,{onFailure:function(){return w(!1)},onSuccess:b,text:'Do you really want to delete your account and all data associated with it. All game progress will be lost, including statistics. Instead, you can use the delete "game session" function.',failureBtnText:"Cancel",successBtnText:"Delete"})}),j&&(0,se.jsx)(Y.Z,{onClose:function(){return g(!1)},title:"Edit personal data",children:(0,se.jsx)(Be.Z,{onClose:function(){return g(!1)}})})]})},Qe=function(){var e=H(),n=e.age,t=e.data,i=e.deleteGameSession,r=e.switchEditAvatarModal,a=e.switchEditComplexityModal,o=e.switchEditEmailModal,s=e.switchEditPasswordModal,l=e.showDeleteSessionModal,c=e.showEditAvatarModal,d=e.showEditComplexityModal,u=e.showEditEmailModal,h=e.showEditPasswordModal,x=e.switchDeleteSessionModal,p=e.user,m=e.products;return(0,se.jsxs)(J.Z,{type:"transparent",width:"680px",padding:"40px 10px 10px 10px",margin:"50px 0 80px 0",children:[p.name&&(0,se.jsxs)(Ue,{children:[(0,se.jsxs)(Ie,{children:[(0,se.jsxs)("p",{children:["ID: ",p._id]}),(0,se.jsxs)("div",{children:[(0,se.jsxs)("p",{children:["Account creation date:"," ",p.createdAt&&(0,K.Z)(p.createdAt)]}),(0,se.jsxs)("p",{children:["Last update date:"," ",p.updatedAt&&(0,K.Z)(p.updatedAt)]})]})]}),(0,se.jsx)(He,{src:p.avatarURL,alt:"".concat(p.name," user avatar"),onClick:function(){return r(!0)}}),(0,se.jsxs)(We,{children:[p.name," ",(0,se.jsx)(Ke,{children:p.nickname})]}),(0,se.jsxs)("ul",{children:[(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Email:"}),(0,se.jsxs)("div",{children:[(0,se.jsx)(Ye,{children:p.email}),(0,se.jsx)($e,{type:"button",onClick:function(){return o(!0)},children:(0,se.jsx)($.Z,{name:"pen",size:"16px",fill:"var(--green-color)"})})]})]}),(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Password:"}),(0,se.jsxs)("div",{children:[(0,se.jsx)(Ye,{children:"******"}),(0,se.jsx)($e,{type:"button",onClick:function(){return s(!0)},children:(0,se.jsx)($.Z,{name:"pen",size:"16px",fill:"var(--green-color)"})})]})]}),(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Gender:"}),(0,se.jsx)(Ye,{children:p.gender})]}),(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Date of birth:"}),(0,se.jsx)(Ye,{children:"".concat(p.dateBirth," | ").concat(n())})]}),(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Complexity:"}),(0,se.jsxs)("div",{children:[(0,se.jsx)(Ye,{children:p.complexity?p.complexity:"The game session has not yet been created."}),p.inGame&&(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)($e,{type:"button",onClick:function(){return a(!0)},children:(0,se.jsx)($.Z,{name:"pen",size:"16px",fill:"var(--green-color)"})}),(0,se.jsx)($e,{type:"button",onClick:function(){return x(!0)},children:(0,se.jsx)($.Z,{name:"delete",size:"16px",fill:"var(--green-color)"})})]})]})]}),(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Game session:"}),(0,se.jsxs)(Ye,{children:[p.inGame&&"Game creation date: ".concat(t&&(0,K.Z)(null===t||void 0===t?void 0:t.level.createdAt)),!p.inGame&&"Start a new game"]})]})]})]}),m&&m.length>0?(0,se.jsx)(Le,{products:m}):(0,se.jsx)(Ge,{}),c&&(0,se.jsx)(Y.Z,{title:"Choose a new avatar",onClose:function(){return r(!1)},children:(0,se.jsx)(le,{onClose:function(){return r(!1)}})}),u&&(0,se.jsx)(Y.Z,{title:"Change email",onClose:function(){return o(!1)},children:(0,se.jsx)(me,{onClose:function(){return o(!1)}})}),h&&(0,se.jsx)(Y.Z,{title:"Change password",onClose:function(){return s(!1)},children:(0,se.jsx)(we,{onClose:function(){return s(!1)}})}),d&&(0,se.jsx)(Y.Z,{title:"Change complexity",onClose:function(){return a(!1)},children:(0,se.jsx)(Ee,{onClose:function(){return a(!1)},complexity:p.complexity})}),l&&(0,se.jsx)(Y.Z,{title:"Delete current game session?",onClose:function(){return x(!1)},children:(0,se.jsx)(ke.Z,{onFailure:function(){return x(!1)},onSuccess:i,text:"After deleting a game session, data such as betting history, statistics and game level will be lost. Are you sure you want to continue?",failureBtnText:"Cancel",successBtnText:"Delete"})})]})},en=t(3012),nn=function(){var e=H(),n=e.age,t=e.data,i=e.deleteGameSession,r=e.switchEditAvatarModal,a=e.switchEditComplexityModal,o=e.switchEditEmailModal,s=e.switchEditPasswordModal,l=e.showDeleteSessionModal,c=e.showEditAvatarModal,d=e.showEditComplexityModal,u=e.showEditEmailModal,h=e.showEditPasswordModal,x=e.switchDeleteSessionModal,p=e.user,m=e.products;return(0,se.jsxs)(J.Z,{type:"transparent",width:"1050px",padding:"70px 50px",margin:"50px",children:[(0,se.jsx)(en.Z,{}),p.name&&(0,se.jsxs)(Ue,{children:[(0,se.jsxs)(Ie,{children:[(0,se.jsxs)("p",{children:["ID: ",p._id]}),(0,se.jsxs)("div",{children:[(0,se.jsxs)("p",{children:["Account creation date:"," ",p.createdAt&&(0,K.Z)(p.createdAt)]}),(0,se.jsxs)("p",{children:["Last update date:"," ",p.updatedAt&&(0,K.Z)(p.updatedAt)]})]})]}),(0,se.jsx)(He,{src:p.avatarURL,alt:"".concat(p.name," user avatar"),onClick:function(){return r(!0)}}),(0,se.jsxs)(We,{children:[p.name," ",(0,se.jsx)(Ke,{children:p.nickname})]}),(0,se.jsxs)("ul",{children:[(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Email:"}),(0,se.jsxs)("div",{children:[(0,se.jsx)(Ye,{children:p.email}),(0,se.jsx)($e,{type:"button",onClick:function(){return o(!0)},children:(0,se.jsx)($.Z,{name:"pen",size:"16px",fill:"var(--green-color)"})})]})]}),(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Password:"}),(0,se.jsxs)("div",{children:[(0,se.jsx)(Ye,{children:"******"}),(0,se.jsx)($e,{type:"button",onClick:function(){return s(!0)},children:(0,se.jsx)($.Z,{name:"pen",size:"16px",fill:"var(--green-color)"})})]})]}),(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Gender:"}),(0,se.jsx)(Ye,{children:p.gender})]}),(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Date of birth:"}),(0,se.jsx)(Ye,{children:"".concat(p.dateBirth," | ").concat(n())})]}),(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Complexity:"}),(0,se.jsxs)("div",{children:[(0,se.jsx)(Ye,{children:p.complexity?p.complexity:"The game session has not yet been created."}),p.inGame&&(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)($e,{type:"button",onClick:function(){return a(!0)},children:(0,se.jsx)($.Z,{name:"pen",size:"16px",fill:"var(--green-color)"})}),(0,se.jsx)($e,{type:"button",onClick:function(){return x(!0)},children:(0,se.jsx)($.Z,{name:"delete",size:"16px",fill:"var(--green-color)"})})]})]})]}),(0,se.jsxs)(Ve,{children:[(0,se.jsx)(Je,{children:"Game session:"}),(0,se.jsxs)(Ye,{children:[p.inGame&&"Game creation date: ".concat(t&&(0,K.Z)(null===t||void 0===t?void 0:t.level.createdAt)),!p.inGame&&"Start a new game"]})]})]})]}),m&&m.length>0?(0,se.jsx)(Le,{products:m}):(0,se.jsx)(Ge,{}),c&&(0,se.jsx)(Y.Z,{title:"Choose a new avatar",onClose:function(){return r(!1)},children:(0,se.jsx)(le,{onClose:function(){return r(!1)}})}),u&&(0,se.jsx)(Y.Z,{title:"Change email",onClose:function(){return o(!1)},children:(0,se.jsx)(me,{onClose:function(){return o(!1)}})}),h&&(0,se.jsx)(Y.Z,{title:"Change password",onClose:function(){return s(!1)},children:(0,se.jsx)(we,{onClose:function(){return s(!1)}})}),d&&(0,se.jsx)(Y.Z,{title:"Change complexity",onClose:function(){return a(!1)},children:(0,se.jsx)(Ee,{onClose:function(){return a(!1)},complexity:p.complexity})}),l&&(0,se.jsx)(Y.Z,{title:"Delete current game session?",onClose:function(){return x(!1)},children:(0,se.jsx)(ke.Z,{onFailure:function(){return x(!1)},onSuccess:i,text:"After deleting a game session, data such as betting history, statistics and game level will be lost. Are you sure you want to continue?",failureBtnText:"Cancel",successBtnText:"Delete"})})]})},tn=function(){return(0,se.jsx)(D.Z,{queries:{small:"(max-width: 767px)",medium:"(min-width: ".concat(S.Z.tablet,") and (max-width: 1439px)"),large:"(min-width: ".concat(S.Z.desktop,")")},children:function(e){return(0,se.jsxs)(se.Fragment,{children:[e.small&&(0,se.jsx)(Xe,{}),e.medium&&(0,se.jsx)(Qe,{}),e.large&&(0,se.jsx)(nn,{})]})}})},rn=function(){return(0,se.jsx)(tn,{})}}}]);
//# sourceMappingURL=747.2c2a1dbd.chunk.js.map