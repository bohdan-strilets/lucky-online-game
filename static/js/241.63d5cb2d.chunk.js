"use strict";(self.webpackChunklucky_online_game=self.webpackChunklucky_online_game||[]).push([[241],{126:function(e,n){n.Z={ZERO:"zero",NUMBER:"number",HIGH:"high",LOW:"low",EVEN:"even",ODD:"odd",BLACK:"black",RED:"red",DOZEN_1:"dozen-1",DOZEN_2:"dozen-2",DOZEN_3:"dozen-3",COLUMN_1:"column-1",COLUMN_2:"column-2",COLUMN_3:"column-3"}},8488:function(e,n,t){var i=t(126);n.Z=function(){var e={low:{type:"low",coefficient:{number:5.7,bottomRow:4.2,oneFromTwo:3.2},initialFunds:3200,experience:30},medium:{type:"medium",coefficient:{number:3.2,bottomRow:2.1,oneFromTwo:1.7},initialFunds:1600,experience:20},high:{type:"high",coefficient:{number:1.9,bottomRow:1.5,oneFromTwo:1.3},initialFunds:700,experience:10}};return{coefficientInfo:e,getCoefficient:function(n,t){switch(n){case e.low.type:return t===i.Z.ZERO||t===i.Z.NUMBER?e.low.coefficient.number:t===i.Z.HIGH||t===i.Z.LOW||t===i.Z.EVEN||t===i.Z.ODD||t===i.Z.BLACK||t===i.Z.RED?e.low.coefficient.oneFromTwo:t===i.Z.DOZEN_1||t===i.Z.DOZEN_2||t===i.Z.DOZEN_3||t===i.Z.COLUMN_1||t===i.Z.COLUMN_2||t===i.Z.COLUMN_3?e.low.coefficient.bottomRow:0;case e.medium.type:return t===i.Z.ZERO||t===i.Z.NUMBER?e.medium.coefficient.number:t===i.Z.HIGH||t===i.Z.LOW||t===i.Z.EVEN||t===i.Z.ODD||t===i.Z.BLACK||t===i.Z.RED?e.medium.coefficient.oneFromTwo:t===i.Z.DOZEN_1||t===i.Z.DOZEN_2||t===i.Z.DOZEN_3||t===i.Z.COLUMN_1||t===i.Z.COLUMN_2||t===i.Z.COLUMN_3?e.medium.coefficient.bottomRow:0;case e.high.type:return t===i.Z.ZERO||t===i.Z.NUMBER?e.high.coefficient.number:t===i.Z.HIGH||t===i.Z.LOW||t===i.Z.EVEN||t===i.Z.ODD||t===i.Z.BLACK||t===i.Z.RED?e.high.coefficient.oneFromTwo:t===i.Z.DOZEN_1||t===i.Z.DOZEN_2||t===i.Z.DOZEN_3||t===i.Z.COLUMN_1||t===i.Z.COLUMN_2||t===i.Z.COLUMN_3?e.high.coefficient.bottomRow:0;default:return 0}}}}},4241:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var i,o,r,c,d=t(5607),a=t(4456),l=t(5861),h=t(885),u=t(7757),s=t.n(u),x=t(9911),p=t(8353),Z=t(6871),m=t(8488),f=t(5995),b=t(9565),w=t(6359),g=t(6451),j=t(4943),C=function(){var e=(0,x.T)(),n=(0,Z.s0)(),t=(0,m.Z)().coefficientInfo,i=(0,b.C)(w.L),o=(0,f.Z)(g,{sprite:j.Z,soundEnabled:i}),r=(0,h.Z)(o,1)[0],c=function(){var i=(0,l.Z)(s().mark((function i(o){var c;return s().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return c=o.currentTarget.textContent,r({id:"counter_click"}),i.next=4,e(p.Z.createSession({complexity:c,bank:null===t||void 0===t?void 0:t[c].initialFunds}));case 4:"ok"===i.sent.payload.status&&n("/game");case 6:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}();return{createNewGame:c}},N=t(1270),O=t(5465),E=t(168),y=t(2499),k=y.Z.h1(i||(i=(0,E.Z)(["\n  text-align: center;\n  margin-bottom: 40px;\n  text-transform: uppercase;\n\n  width: 100%;\n"]))),_=y.Z.p(o||(o=(0,E.Z)(["\n  text-align: center;\n\n  margin-bottom: 15px;\n"]))),R=y.Z.ul(r||(r=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 100%;\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"])),a.Z.tablet),D=y.Z.li(c||(c=(0,E.Z)(["\n  @media screen and (max-width: 767px) {\n    margin-bottom: 15px;\n\n    :last-child {\n      margin-bottom: 0;\n    }\n  }\n"]))),L=t(3329),v=function(){var e=C().createNewGame;return(0,L.jsxs)(N.Z,{type:"transparent",width:"300px",padding:"10px",margin:"0 0 80px 0",children:[(0,L.jsx)(k,{children:"Create a new game"}),(0,L.jsx)(_,{children:"Choose the level of difficulty. What will determine the coefficient that will be applied to the amount of winnings and the experience that you get for the bet."}),(0,L.jsxs)(R,{children:[(0,L.jsx)(D,{children:(0,L.jsx)(O.Z,{type:"button",background:"blue",borderRadius:"50px",height:"50px",width:"200px",onClick:e,children:"low"})}),(0,L.jsx)(D,{children:(0,L.jsx)(O.Z,{type:"button",background:"blue",borderRadius:"50px",height:"50px",width:"200px",onClick:e,children:"medium"})}),(0,L.jsx)(D,{children:(0,L.jsx)(O.Z,{type:"button",background:"blue",borderRadius:"50px",height:"50px",width:"200px",onClick:e,children:"high"})})]})]})},M=function(){var e=C().createNewGame;return(0,L.jsxs)(N.Z,{type:"transparent",width:"680px",padding:"40px 10px 10px 10px",margin:"50px 0 80px 0",children:[(0,L.jsx)(k,{children:"Create a new game"}),(0,L.jsx)(_,{children:"Choose the level of difficulty. What will determine the coefficient that will be applied to the amount of winnings and the experience that you get for the bet."}),(0,L.jsxs)(R,{children:[(0,L.jsx)(D,{children:(0,L.jsx)(O.Z,{type:"button",background:"blue",borderRadius:"50px",height:"50px",width:"200px",onClick:e,children:"low"})}),(0,L.jsx)(D,{children:(0,L.jsx)(O.Z,{type:"button",background:"blue",borderRadius:"50px",height:"50px",width:"200px",onClick:e,children:"medium"})}),(0,L.jsx)(D,{children:(0,L.jsx)(O.Z,{type:"button",background:"blue",borderRadius:"50px",height:"50px",width:"200px",onClick:e,children:"high"})})]})]})},U=function(){var e=C().createNewGame;return(0,L.jsxs)(N.Z,{type:"transparent",width:"856px",padding:"50px 100px",alignItems:"center",children:[(0,L.jsx)(k,{children:"Create a new game"}),(0,L.jsx)(_,{children:"Choose the level of difficulty. What will determine the coefficient that will be applied to the amount of winnings and the experience that you get for the bet."}),(0,L.jsxs)(R,{children:[(0,L.jsx)("li",{children:(0,L.jsx)(O.Z,{type:"button",background:"blue",borderRadius:"50px",height:"50px",width:"200px",onClick:e,children:"low"})}),(0,L.jsx)("li",{children:(0,L.jsx)(O.Z,{type:"button",background:"blue",borderRadius:"50px",height:"50px",width:"200px",onClick:e,children:"medium"})}),(0,L.jsx)("li",{children:(0,L.jsx)(O.Z,{type:"button",background:"blue",borderRadius:"50px",height:"50px",width:"200px",onClick:e,children:"high"})})]})]})},F=function(){return(0,L.jsx)(d.Z,{queries:{small:"(max-width: 767px)",medium:"(min-width: ".concat(a.Z.tablet,") and (max-width: 1439px)"),large:"(min-width: ".concat(a.Z.desktop,")")},children:function(e){return(0,L.jsxs)(L.Fragment,{children:[e.small&&(0,L.jsx)(v,{}),e.medium&&(0,L.jsx)(M,{}),e.large&&(0,L.jsx)(U,{})]})}})},B=function(){return(0,L.jsx)(F,{})}}}]);
//# sourceMappingURL=241.63d5cb2d.chunk.js.map