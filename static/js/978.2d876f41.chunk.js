"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[978],{20978:(e,n,i)=>{i.r(n),i.d(n,{default:()=>De});var t=i(92936),r=i(56250),o=i(8806);const a=(0,r.z)(o.xv,{p:0,m:0,fontSize:52,fontStyle:"normal",lineHeight:60,color:"$neutral1","$platform-web":{letterSpacing:"-0.02em"},$xl:{fontSize:36}}),l=(0,r.z)(o.xv,{p:0,m:0,fontSize:24,lineHeight:32,color:"$neutral1","$platform-web":{letterSpacing:"-0.02em"}}),s=(0,r.z)(o.xv,{p:0,m:0,fontSize:18,fontStyle:"normal",fontWeight:"$book",lineHeight:24,color:"$neutral1","$platform-web":{letterSpacing:"-0.01em",fontFeatureSettings:"'ss07' on"}});var d=i(27427),c=i(39572),p=i(11947);const h=(0,r.z)(p.k,{width:"100%",height:"100%",flexDirection:"row-reverse",alignItems:"center",position:"absolute",top:0,right:0,bottom:0,opacity:1,$xxl:{opacity:.24},$lg:{opacity:0}});function g({label:e,icon:n,color:i,onClick:r,cursor:a}){return(0,t.jsx)(p.k,{px:"$spacing16",py:"$spacing12",borderRadius:"$rounded24",gap:"$gap8",centered:!0,cursor:a,borderWidth:0,backgroundColor:"$surface1",overflow:"hidden",onPress:r,userSelect:"none",children:(0,t.jsxs)(p.k,{animation:"quick",row:!0,centered:!0,gap:"$gap8","$group-card-hover":{x:-24},hoverStyle:{x:-24},children:[(0,t.jsx)(p.k,{animation:"quick",opacity:1,"$group-card-hover":{opacity:0},children:n}),(0,t.jsx)(o.xv,{fontSize:20,lineHeight:24,fontWeight:"$medium",color:i,$xl:{fontSize:18},children:e}),(0,t.jsx)(p.k,{animation:"bouncy",opacity:0,width:24,mr:-24,"$group-card-hover":{opacity:1},children:(0,t.jsx)(p.k,{overflow:"visible",children:(0,t.jsx)(c.ol,{size:"24",fill:i})})})]})})}var x=i(6282);function u(e){const{color:n,alignTextToBottom:i,href:r,to:a,button:l,children:s,titleText:d,smaller:c,...h}=e,g=(0,x.s0)();return(0,t.jsxs)(p.k,{position:"relative",flexShrink:1,flexGrow:0,flexBasis:"auto",borderRadius:32,width:"100%",height:609,overflow:"hidden",minHeight:240,maxWidth:"calc(50% - 8px)",containerType:"normal",group:"card",tag:"a",href:r,target:"_blank",cursor:"pointer",rel:"noreferrer noopener",onPress:()=>{a&&g(a)},"$platform-web":{textDecoration:"none"},$lg:{maxWidth:"100%",height:"auto"},$xl:{height:516,...c&&{height:"auto",pr:0}},...c&&{height:340,pr:"16%",$sm:{height:"auto"}},...h,children:[(0,t.jsxs)(p.k,{width:"100%",height:"100%",gap:16,p:32,alignItems:"flex-start",zIndex:2,pointerEvents:"none",justifyContent:i?"space-between":"flex-start",$xs:{p:20},children:[l,(0,t.jsx)(o.xv,{className:"text-wrap-pretty",fontSize:36,lineHeight:44,whiteSpace:"pre-line",color:n,"$platform-web":{fontFeatureSettings:"'ss07' on",textDecoration:"none"},$xl:{fontSize:28,lineHeight:32},$md:{fontSize:24,lineHeight:32},children:d})]}),s]})}var m=i(87464),f=i(97994);const w="#00C3A0";function v(){const{rive:e,RiveComponent:n}=(0,d.useRive)({src:"/rive/landing-page.riv",artboard:"Dev",stateMachines:"Animation",layout:new d.Layout({fit:d.Fit.Contain,alignment:d.Alignment.CenterRight})});return(0,t.jsx)(u,{smaller:!0,backgroundColor:(0,m.B)("rgba(0, 195, 160, 0.06)"),"$theme-dark":{backgroundColor:"rgba(0, 195, 160, 0.08)"},href:"https://docs.uniswap.org/",color:w,button:(0,t.jsx)(g,{color:w,label:(0,f.t)("landing.devDocs"),icon:(0,t.jsx)(c.EG,{size:"24px",fill:w})}),titleText:(0,f.t)("landing.buildNextGen"),alignTextToBottom:!0,children:(0,t.jsx)(h,{$xxl:{opacity:.32},children:(0,t.jsx)(n,{onMouseEnter:()=>e&&e.play()})})})}var j=i(74534),b=i(63935);function $(){const e=(0,b.E)(),n=(0,j.Gv)(),{rive:i,RiveComponent:r}=(0,d.useRive)({src:"/rive/landing-page.riv",artboard:"Mobile-Light",stateMachines:"Animation",layout:new d.Layout({fit:d.Fit.Contain,alignment:d.Alignment.BottomCenter})}),{rive:o,RiveComponent:a}=(0,d.useRive)({src:"/rive/landing-page.riv",artboard:"Mobile-Dark",stateMachines:"Animation",layout:new d.Layout({fit:d.Fit.Contain,alignment:d.Alignment.BottomCenter})});return(0,t.jsx)(u,{href:"https://wallet.uniswap.org/",minHeight:500,color:"$accent1",backgroundColor:"rgba(252, 114, 255, 0.12)",button:(0,t.jsx)(g,{color:e.accent1.val,label:(0,f.t)("common.uniswapWallet"),icon:(0,t.jsx)(c.w5,{size:"24px",fill:e.accent1.val})}),titleText:(0,f.t)("common.walletForSwapping"),children:(0,t.jsx)(p.k,{width:"100%",height:"75%",position:"absolute",m:"auto",bottom:0,zIndex:1,children:n?(0,t.jsx)(a,{onMouseEnter:()=>{var e;return null===(e=o)||void 0===e?void 0:e.play()}}):(0,t.jsx)(r,{onMouseEnter:()=>{var e;return null===(e=i)||void 0===e?void 0:e.play()}})})})}const y="#9E62FF";function k(){const{rive:e,RiveComponent:n}=(0,d.useRive)({src:"/rive/landing-page.riv",artboard:"LP",stateMachines:"Animation",layout:new d.Layout({fit:d.Fit.Contain,alignment:d.Alignment.CenterRight})});return(0,t.jsx)(u,{to:"/pool",smaller:!0,color:y,backgroundColor:"rgba(136, 63, 255, 0.06)","$theme-dark":{backgroundColor:"rgba(136, 63, 255, 0.12)"},button:(0,t.jsx)(g,{color:y,label:(0,f.t)("common.liquidity"),icon:(0,t.jsx)(c.Ll,{size:"24px",fill:y})}),titleText:(0,f.t)("landing.provideLiquidity.message"),alignTextToBottom:!0,children:(0,t.jsx)(h,{children:(0,t.jsx)(n,{onMouseEnter:()=>e&&e.play()})})})}var C=i(70855),z=i(1890),S=i(73397),T=i(12799),R=i(61190),I=i(97704),E=i(93465),P=i(40834),H=i(70854),V=i(769),W=i(64972);const F="#2ABDFF",O=[{chainId:V.UniverseChainId.Mainnet,address:"ETH"},{chainId:V.UniverseChainId.Base,address:P.USDC_BASE.address},{chainId:V.UniverseChainId.Mainnet,address:P.UNI[V.UniverseChainId.Mainnet].address},{chainId:V.UniverseChainId.Mainnet,address:P.LDO.address}];function D({chainId:e,address:n}){var i,r,a,l,s,d,c,h,g,u,m;const f=(0,E.e)().sm,w=(0,x.s0)(),{formatFiatPrice:v,formatDelta:j}=(0,W.Gb)(),b=(0,I.U8)(n,e),$=(0,H.useTokenPromoQuery)({variables:{address:null===(i=b)||void 0===i?void 0:i.wrapped.address,chain:(0,S.tq)({chainId:e})}}),y=(null===(s=$.data)||void 0===s||null===(l=s.token)||void 0===l||null===(a=l.market)||void 0===a||null===(r=a.price)||void 0===r?void 0:r.value)??0,k=(null===(g=$.data)||void 0===g||null===(h=g.token)||void 0===h||null===(c=h.market)||void 0===c||null===(d=c.pricePercentChange)||void 0===d?void 0:d.value)??0;return(0,t.jsxs)(p.k,{width:"100%",height:72,overflow:"hidden",p:16,pr:24,row:!0,alignItems:"center",gap:"$gap16",borderRadius:"$rounded20",backgroundColor:"$surface1",onPress:i=>{i.stopPropagation(),w((0,R.dG)({address:"ETH"===n?T.d:n,chain:(0,S.tq)({chainId:e})}))},"$platform-web":{transition:"background-color 125ms ease-in, transform 125ms ease-in"},hoverStyle:{backgroundColor:"$surface2",scale:1.03},$xl:{height:64,pr:16},$lg:{height:56,pr:16},$xs:{height:48,p:12,borderRadius:16},children:[(0,t.jsx)(C.V,{currencies:[b],chainId:e,size:f?32:24}),(0,t.jsxs)(p.k,{row:!0,flex:1,justifyContent:"space-between",gap:"$gap16",children:[(0,t.jsxs)(p.k,{row:!0,width:"auto",gap:"$gap8",alignItems:"center",overflow:"hidden",children:[(0,t.jsx)(o.xv,{fontWeight:"$medium",fontSize:24,lineHeight:32,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",color:"$neutral1",$xl:{fontSize:18,lineHeight:24},$xs:{fontSize:16,lineHeight:20,display:"none"},children:null===(u=b)||void 0===u?void 0:u.name}),(0,t.jsx)(o.xv,{fontWeight:"$medium",fontSize:24,lineHeight:32,color:"$neutral2",$xl:{fontSize:18,lineHeight:24},$xs:{fontSize:16,lineHeight:20,color:"$neutral1"},children:null===(m=b)||void 0===m?void 0:m.symbol})]}),(0,t.jsxs)(p.k,{row:!0,width:"auto",gap:"$gap8",alignItems:"center",children:[(0,t.jsx)(o.xv,{fontWeight:"$medium",fontSize:24,lineHeight:32,color:"$neutral1",$xl:{fontSize:18,lineHeight:24},$xs:{fontSize:16,lineHeight:20},children:v({price:y,type:W.sw.FiatTokenPrice})}),(0,t.jsxs)(p.k,{row:!0,gap:"$gap4",alignItems:"center",justifyContent:"flex-end",$xl:{display:"none"},$lg:{display:"none"},children:[(0,t.jsx)(z.Kx,{delta:k}),(0,t.jsx)(o.xv,{textAlign:"right",fontSize:24,fontWeight:"$medium",lineHeight:32,color:k<0?"$statusCritical":"$statusSuccess",$xl:{fontSize:18,lineHeight:24,width:50},$xs:{fontSize:16,lineHeight:20,width:50},children:j(k)})]})]})]})]})}function A(){return(0,t.jsx)(u,{to:"/tokens/ethereum",minHeight:500,color:F,"$theme-dark":{backgroundColor:"rgba(0, 102, 255, 0.12)"},"$theme-light":{backgroundColor:"rgba(0, 102, 255, 0.04)"},button:(0,t.jsx)(g,{color:F,label:(0,f.t)("common.webApp"),icon:(0,t.jsx)(c.ar,{size:"24px",fill:F})}),titleText:(0,f.t)("landing.swapSimple"),children:(0,t.jsx)(p.k,{gap:"$gap8",alignItems:"center",position:"absolute",width:"100%",bottom:0,p:32,pb:32,$xl:{p:24,pb:32},$xs:{p:16,pb:24},children:O.map((e=>(0,t.jsx)(D,{chainId:e.chainId,address:e.address},`tokenRow-${e.address}`)))})})}function G(){return(0,t.jsx)(p.k,{alignItems:"center",px:40,$md:{px:48},$sm:{px:24},children:(0,t.jsxs)(p.k,{maxWidth:1280,gap:32,$md:{gap:24},children:[(0,t.jsx)(a,{children:(0,t.jsx)(f.Trans,{i18nKey:"landing.directToDeFi"})}),(0,t.jsxs)(p.k,{gap:"$gap16",children:[(0,t.jsxs)(p.k,{row:!0,flexWrap:"wrap",height:"auto",flex:1,gap:"$gap16",$md:{flexDirection:"column"},children:[(0,t.jsx)(A,{}),(0,t.jsx)($,{})]}),(0,t.jsxs)(p.k,{row:!0,flexWrap:"wrap",height:"auto",flex:1,gap:"$gap16",$md:{flexDirection:"column"},children:[(0,t.jsx)(v,{}),(0,t.jsx)(k,{})]})]})]})})}var M=i(75835);const B=(0,r.z)(p.k,{width:"100%",maxWidth:1360,alignItems:"center",p:40,$lg:{p:48},$sm:{p:24}}),L=(0,r.z)(p.k,{width:"100%",maxWidth:1280,className:"connect-with-us-layout","$platform-web":{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridColumnGap:"16px",gridRowGap:"16px"}}),K=(0,r.z)(p.k,{flex:1,maxWidth:1328,gap:24,$lg:{gap:24}}),U=(0,r.z)(p.k,{containerType:"normal",alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"$surface2",position:"relative",height:250,borderRadius:20,p:32,overflow:"hidden",$xl:{gap:16,p:24},$lg:{gap:16,p:24,width:"100%"}}),_=(0,r.z)(U,{cursor:"pointer",tag:"a",className:"text-decoration-none","$platform-web":{gridColumn:"span 1",gridRow:"span 4"},$xl:{"$platform-web":{gridArea:"3 / span 2 / 5 / span 2"}}}),N=(0,r.z)(U,{cursor:"pointer",tag:"a","$platform-web":{textDecoration:"none",gridColumn:"span 2",gridRow:"span 4",gap:32}}),q="#FF4D00",Z="#8E8767";function Q(){const e=(0,b.E)();return(0,t.jsx)(B,{children:(0,t.jsx)(p.k,{row:!0,maxWidth:1328,gap:"$spacing24",width:"100%",children:(0,t.jsxs)(K,{justifyContent:"space-between",height:"100%",children:[(0,t.jsx)(a,{children:(0,t.jsx)(f.Trans,{i18nKey:"landing.connectWithUs"})}),(0,t.jsxs)(L,{children:[(0,t.jsxs)(_,{group:"card",href:"https://help.uniswap.org/",target:"_blank",rel:"noopener noreferrer",backgroundColor:"rgba(255, 77, 0, 0.04)","$theme-dark":{backgroundColor:"rgba(255, 77, 0, 0.08)"},children:[(0,t.jsx)(g,{icon:(0,t.jsx)(c.j$,{fill:q}),color:q,label:(0,f.t)("common.helpCenter")}),(0,t.jsx)(l,{color:q,children:(0,t.jsx)(f.Trans,{i18nKey:"common.getSupport.button"})})]}),(0,t.jsxs)(_,{group:"card",href:"https://blog.uniswap.org/",target:"_blank",rel:"noopener noreferrer",backgroundColor:"rgba(98, 84, 50, 0.04)","$theme-dark":{backgroundColor:"rgba(98, 84, 50, 0.16)"},children:[(0,t.jsx)(g,{icon:(0,t.jsx)(c.p1,{fill:Z}),color:Z,label:(0,f.t)("common.blog")}),(0,t.jsx)(l,{color:Z,children:(0,t.jsx)(f.Trans,{i18nKey:"landing.teamInsights"})})]}),(0,t.jsxs)(N,{group:"card",href:"https://twitter.com/Uniswap/",target:"_blank",rel:"noopener noreferrer",backgroundColor:"$accent2",children:[(0,t.jsx)(g,{icon:(0,t.jsx)(c.r_,{fill:e.accent1.val}),color:e.accent1.val,label:(0,f.t)("common.stayConnected")}),(0,t.jsx)(o.xv,{color:"$accent1",fontSize:24,children:(0,t.jsx)(f.Trans,{i18nKey:"landing.followOnX"})})]})]})]})})})}var X=i(95055),J=i(36664),Y=i(61152),ee=i(36399),ne=i(41248);const ie=(0,X.E)(J.ZP.div`
  position: relative;
  display: flex;
  flex: 0;
  min-height: 52px;
  width: 100%;
  overflow: hidden;
  @media (max-width: 1024px) {
    min-height: 40px;
  }
  @media (max-width: 768px) {
    min-height: 32px;
  }
`),te=(0,X.E)(J.ZP.div`
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Basel;
  font-size: 52px;
  font-style: normal;
  font-weight: 500;
  color: ${({color:e})=>e};
  line-height: 52px;
  @media (max-width: 1280px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media (max-width: 1050px) {
    font-size: 32px;
    line-height: 32px;
  }
  @media (max-width: 850px) {
    font-size: 28px;
    line-height: 28px;
  }
  @media (max-width: 396px) {
    font-size: 22px;
    line-height: 22px;
  }
`),re=J.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 20px;

  width: 100%;
  height: 100%;
  max-height: 230px;

  padding: 32px;

  background-color: ${({theme:e,live:n})=>n?"#2FBA610A":e.surface2};
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 24px;
  }
  @media (max-width: 768px) {
  }
  background-image: radial-gradient(rgba(${({theme:e})=>{const{red:n,green:i,blue:t}=(0,ee.Oq)(e.neutral2);return`${n}, ${i}, ${t}`}}, 0.25) 0.5px, transparent 0)};
  background-size: 12px 12px;
  background-position: -8.5px -8.5px;
`,oe=(0,X.E)(J.ZP.div`
  pointer-events: none;
  diplay: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral2};
`),ae=J.ZP.div`
  display: ${({display:e})=>e};
  width: 6px;
  height: 6px;

  border-radius: 50%;
  background: ${({theme:e})=>e.success};

  animation-name: ${({theme:e})=>{return n=e.success,Y.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${(0,ne.jb)(24,n)};
  }
  100% {
    box-shadow: 0 0 0 4px ${(0,ne.jb)(24,n)};
  }
`;var n}};
  animation-fill-mode: forwards;
  animation-direction: alternate;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`,le=J.ZP.h3`
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 535;
  line-height: 32px; /* 133.333% */
  color: ${({color:e})=>e};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 20px;
  }
`;const se=["0","1","2","3","4","5","6","7","8","9"],de=["\xa5","\xa3","\u20ac","$"],ce=[" ","K","M","B","T"],pe=[",","."];function he(e){const n=(0,Y.useTheme)();return(0,t.jsxs)(re,{live:e.live,children:[(0,t.jsxs)(p.k,{row:!0,alignItems:"center",gap:"$gap4",children:[(0,t.jsx)(ae,{display:e.live?"block":"none"}),(0,t.jsx)(le,{color:e.live?n.success:n.neutral2,children:e.title})]}),(0,t.jsx)(ge,{prefix:e.prefix,suffix:e.suffix,value:e.value,live:e.live,delay:e.delay,inView:e.inView})]})}function ge({value:e,delay:n,inView:i,live:r}){const o=e.split(""),a=(0,Y.useTheme)();return(0,t.jsx)(ie,{initial:"initial",animate:i?"animate":"initial",transition:{staggerChildren:.025,delayChildren:n},children:o.map(((e,n)=>{const i=se.includes(e)?se:pe.includes(e)?pe:de.includes(e)?de:ce;return(0,t.jsx)(xe,{char:e,charset:i,color:r?a.success:a.neutral1},n)}))})}function xe({char:e,charset:n,color:i}){const r=(o=n,a=n.indexOf(e),o.slice(a,o.length).concat(o.slice(0,a)));var o,a;const l=r.indexOf(e),s={initial:{y:l+-180},animate:{y:-60*l,transition:{duration:1,type:"spring"}}};return(0,t.jsx)(oe,{variants:s,children:r.map(((e,n)=>{const r={initial:{opacity:.25},animate:{opacity:l===n?1:0,transition:{opacity:{duration:.5},duration:1,type:"spring"}}};return(0,t.jsx)(te,{variants:r,color:i,children:e},n)}))})}var ue=i(45779);var me=i(68090),fe=i.n(me);function we(){return we=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},we.apply(this,arguments)}function ve(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var je=(0,ue.forwardRef)((function(e,n){var i=e.color,t=void 0===i?"currentColor":i,r=e.size,o=void 0===r?24:r,a=ve(e,["color","size"]);return ue.createElement("svg",we({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),ue.createElement("circle",{cx:"12",cy:"12",r:"10"}),ue.createElement("polyline",{points:"12 16 16 12 12 8"}),ue.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));je.propTypes={color:fe().string,size:fe().oneOfType([fe().string,fe().number])},je.displayName="ArrowRightCircle";const be=je;var $e=i(77134);const ye=(0,r.z)(p.k,{width:"100%",maxWidth:1360,alignItems:"center",p:40,$lg:{p:48},$sm:{p:24}}),ke=(0,r.z)(p.k,{width:"100%",maxWidth:1280}),Ce=(0,r.z)(p.k,{display:"none",$md:{display:"flex"}}),ze=(0,r.z)(p.k,{display:"flex",$md:{display:"none"}}),Se=(0,r.z)(p.k,{className:"grid-area",height:"100%","$platform-web":{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(4, 1fr)",gridColumnGap:"16px",gridRowGap:"16px"},$xs:{height:320,"$platform-web":{gridColumnGap:"12px",gridRowGap:"12px"}},$xxs:{"$platform-web":{gridColumnGap:"8px",gridRowGap:"8px"}}}),Te=(0,r.z)(p.k,{width:"100%","$platform-web":{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"repeat(2, 234px)",gridColumnGap:"24px",gridRowGap:"16px",gap:"16px"},$md:{"$platform-web":{gridTemplateRows:"repeat(2, 160px)"}},$lg:{"$platform-web":{gridTemplateRows:"repeat(2, 200px)"}}}),Re=(0,r.z)(p.k,{p:12,px:16,borderRadius:24,backgroundColor:"$surface2",alignSelf:"flex-start"}),Ie=()=>(0,t.jsx)(f.Trans,{i18nKey:"landing.protocolDescription"});function Ee(){const e=(0,b.E)();return(0,t.jsx)(Re,{href:"/explore",children:(0,t.jsx)($e.dL,{href:"/explore",children:(0,t.jsxs)(p.k,{row:!0,gap:"$gap8",alignItems:"center",children:[(0,t.jsx)(o.xv,{fontSize:20,lineHeight:24,color:"$neutral1",children:(0,t.jsx)(f.Trans,{i18nKey:"common.button.learn"})}),(0,t.jsx)(be,{size:24,stroke:e.surface2.val,fill:e.neutral1.val})]})})})}function Pe(){const{ref:e,inView:n}=(()=>{const e=(0,ue.useRef)(),[n,i]=(0,ue.useState)(!1);return(0,ue.useEffect)((()=>{const n=new IntersectionObserver((e=>{if(!e.length)return;const[n]=e;n.isIntersecting&&i(!0)}),{threshold:.25});return n.observe(e.current),()=>{n.disconnect()}}),[e]),{ref:e,inView:n}})();return(0,t.jsx)(ye,{children:(0,t.jsxs)(ke,{ref:e,children:[(0,t.jsx)(ze,{children:(0,t.jsxs)(Te,{children:[(0,t.jsx)(p.k,{start:1,end:3,gridRowStart:1,gridRowEnd:3,height:"100%",children:(0,t.jsxs)(p.k,{justifyContent:"space-between",height:"100%",children:[(0,t.jsx)(a,{children:(0,t.jsx)(f.Trans,{i18nKey:"landing.trusted"})}),(0,t.jsxs)(p.k,{bottom:0,position:"absolute",maxWidth:480,gap:"$spacing24",children:[(0,t.jsx)(s,{children:(0,t.jsx)(Ie,{})}),(0,t.jsx)(Ee,{})]})]})}),(0,t.jsx)(p.k,{start:2,end:3,gridRowStart:1,gridRowEnd:3,height:"100%",children:(0,t.jsx)(Oe,{inView:n})})]})}),(0,t.jsxs)(Ce,{maxWidth:1280,gap:"$spacing32",children:[(0,t.jsx)(o.xv,{fontSize:32,children:(0,t.jsx)(f.Trans,{i18nKey:"landing.trusted"})}),(0,t.jsx)(Oe,{inView:n}),(0,t.jsx)(s,{children:(0,t.jsx)(Ie,{})}),(0,t.jsx)(Ee,{})]})]})})}const He=(0,r.z)(p.k,{"$platform-web":{gridColumnStart:1,gridColumnEnd:3,gridRowStart:1,gridRowEnd:3}}),Ve=(0,r.z)(p.k,{"$platform-web":{gridColumnStart:3,gridColumnEnd:5,gridRowStart:1,gridRowEnd:3}}),We=(0,r.z)(p.k,{"$platform-web":{gridColumnStart:1,gridColumnEnd:3,gridRowStart:3,gridRowEnd:5}}),Fe=(0,r.z)(p.k,{"$platform-web":{gridColumnStart:3,gridColumnEnd:5,gridRowStart:3,gridRowEnd:5}});function Oe({inView:e}){var n,i,r,o;const{formatNumber:a}=(0,W.Gb)(),l=(0,H.useDailyProtocolVolumeQuery)({variables:{version:H.ProtocolVersion.V2}}),s=(0,H.useDailyProtocolVolumeQuery)({variables:{version:H.ProtocolVersion.V3}}),d=(0,ue.useMemo)((()=>{var e,n,i,t;const r=null===(n=l)||void 0===n||null===(e=n.data)||void 0===e?void 0:e.historicalProtocolVolume,o=r&&r.length>=2?r[r.length-2].value:0,a=null===(t=s)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.historicalProtocolVolume;return o+(a&&a.length>=2?a[a.length-2].value:0)}),[null===(i=l)||void 0===i||null===(n=i.data)||void 0===n?void 0:n.historicalProtocolVolume,null===(o=s)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.historicalProtocolVolume]);return(0,t.jsxs)(Se,{children:[(0,t.jsx)(He,{children:(0,t.jsx)(he,{title:(0,f.t)("stats.allTimeVolume"),value:a({input:2.2*10**12,type:W.sw.FiatTokenStats}),delay:0,inView:e})}),(0,t.jsx)(Ve,{children:(0,t.jsx)(he,{title:(0,f.t)("stats.allTimeSwappers"),value:a({input:16.6*10**6,type:W.sw.TokenQuantityStats}),delay:.2,inView:e})}),(0,t.jsx)(We,{children:(0,t.jsx)(he,{title:(0,f.t)("stats.allTimeFees"),value:a({input:3.4*10**9,type:W.sw.FiatTokenStats}),delay:.4,inView:e})}),(0,t.jsx)(Fe,{children:(0,t.jsx)(he,{title:(0,f.t)("stats.24volume"),value:a({input:d||5e8,type:W.sw.FiatTokenStats}),live:!0,delay:.6,inView:e})})]})}const De=(0,ue.forwardRef)((function(e,n){return(0,t.jsxs)(p.k,{gap:120,$sm:{gap:80},position:"relative",alignItems:"center",width:"100%",zIndex:1,maxWidth:"100vw",ref:n,children:[(0,t.jsx)(G,{}),(0,t.jsx)(Pe,{}),(0,t.jsx)(Q,{}),(0,t.jsx)(M.$,{})]})}))}}]);
//# sourceMappingURL=978.2d876f41.chunk.js.map