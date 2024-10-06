"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2507],{26303:(e,n,i)=>{i.d(n,{t:()=>c});var t=i(92936),r=i(45779),o=i(61152);function s(e,n,i){const t=n.getContext("2d");if(t){let{width:r,height:o}=e;const s=r/o;o=i,r=Math.round(s*i),n.width=r*devicePixelRatio,n.height=o*devicePixelRatio,n.style.width=r+"px",n.style.height=o+"px",t.scale(devicePixelRatio,devicePixelRatio),t.clearRect(0,0,r,o),t.drawImage(e,0,0,r,o)}}const d=o.default.div.withConfig({displayName:"PositionNFT__NFTGrid",componentId:"sc-171b1061-0"})`
  display: grid;
  grid-template: 'overlap';
  min-height: 400px;
`,l=o.default.canvas.withConfig({displayName:"PositionNFT__NFTCanvas",componentId:"sc-171b1061-1"})`
  grid-area: overlap;
`,a=o.default.img.withConfig({displayName:"PositionNFT__NFTImage",componentId:"sc-171b1061-2"})`
  grid-area: overlap;
  height: 400px;
  /* Ensures SVG appears on top of canvas. */
  z-index: 1;
`;function c({image:e,height:n}){const[i,o]=(0,r.useState)(!1),c=(0,r.useRef)(null),u=(0,r.useRef)(null);return(0,t.jsxs)(d,{onMouseEnter:()=>{o(!0)},onMouseLeave:()=>{u.current&&c.current&&s(u.current,c.current,n),o(!1)},children:[(0,t.jsx)(l,{ref:c}),(0,t.jsx)(a,{ref:u,src:e,hidden:!i,onLoad:()=>{u.current&&c.current&&s(u.current,c.current,n)}})]})}},98640:(e,n,i)=>{i.d(n,{Z:()=>d});var t=i(92936),r=i(36664);const o=r.ZP.button`
  display: flex;
  align-items: center;
  width: ${({width:e})=>e??"100%"};
  padding: 1px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 8px;
  border: ${({theme:e})=>"1px solid "+e.surface3};
  cursor: pointer;
  outline: none;
`,s=r.ZP.span`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0.5rem;
  border-radius: 6px;
  justify-content: center;
  height: 100%;
  background: ${({theme:e,isActive:n})=>n?e.surface1:"none"};
  color: ${({theme:e,isActive:n})=>n?e.neutral1:e.neutral3};
  font-size: ${({fontSize:e})=>e??"1rem"};
  font-weight: 535;
  white-space: nowrap;
  :hover {
    user-select: initial;
    color: ${({theme:e,isActive:n})=>n?e.neutral2:e.neutral3};
  }
`;function d({currencyA:e,currencyB:n,handleRateToggle:i}){var r,d;const l=null===(r=e)||void 0===r?void 0:r.wrapped,a=null===(d=n)||void 0===d?void 0:d.wrapped,c=l&&a&&l.sortsBefore(a);return l&&a?(0,t.jsx)("div",{style:{width:"fit-content",display:"flex",alignItems:"center"},onClick:i,children:(0,t.jsxs)(o,{width:"fit-content",children:[(0,t.jsx)(s,{isActive:c,fontSize:"12px",children:c?e.symbol:n.symbol}),(0,t.jsx)(s,{isActive:!c,fontSize:"12px",children:c?n.symbol:e.symbol})]})}):null}},38043:(e,n,i)=>{i.d(n,{b:()=>a});var t=i(11604),r=i(29717),o=i(24055),s=i(70359),d=i(45779);const l="data:application/json;base64,";function a(e){const n=(0,r.GL)(),i=(0,d.useMemo)((()=>{var n;return[e instanceof t.O$?e.toHexString():null===(n=e)||void 0===n?void 0:n.toString(16)]}),[e]),{result:a,error:c,loading:u,valid:x}=(0,o.Wk)(n,"tokenURI",i,{...s.DB,gasRequired:3e6});return(0,d.useMemo)((()=>{if(c||!x||!e)return{valid:!1,loading:!1};if(u)return{valid:!0,loading:!0};if(!a)return{valid:!1,loading:!1};const[n]=a;if(!n||!n.startsWith(l))return{valid:!1,loading:!1};try{return{valid:!0,loading:!1,result:JSON.parse(atob(n.slice(l.length)))}}catch(i){return{valid:!1,loading:!1}}}),[c,u,a,e,x])}},17125:(e,n,i)=>{i.d(n,{W:()=>a,n:()=>l});var t=i(11604),r=i(29717),o=i(24055),s=i(45779);function d(e){var n;const i=(0,r.GL)(),d=(0,s.useMemo)((()=>e?e.map((e=>[t.O$.from(e)])):[]),[e]),l=(0,o.es)(i,"positions",d),a=(0,s.useMemo)((()=>l.some((({loading:e})=>e))),[l]),c=(0,s.useMemo)((()=>l.some((({error:e})=>e))),[l]),u=(0,s.useMemo)((()=>{if(!a&&!c&&e)return l.map(((n,i)=>{const t=e[i],r=n.result;return{tokenId:t,fee:r.fee,feeGrowthInside0LastX128:r.feeGrowthInside0LastX128,feeGrowthInside1LastX128:r.feeGrowthInside1LastX128,liquidity:r.liquidity,nonce:r.nonce,operator:r.operator,tickLower:r.tickLower,tickUpper:r.tickUpper,token0:r.token0,token1:r.token1,tokensOwed0:r.tokensOwed0,tokensOwed1:r.tokensOwed1}}))}),[a,c,l,e]);return{loading:a,positions:null===(n=u)||void 0===n?void 0:n.map(((e,n)=>({...e,tokenId:d[n][0]})))}}function l(e){var n;const i=d(e?[e]:void 0);return{loading:i.loading,position:null===(n=i.positions)||void 0===n?void 0:n[0]}}function a(e){var n,i;const l=(0,r.GL)(),{loading:a,result:c}=(0,o.Wk)(l,"balanceOf",[e??void 0]),u=null===(i=c)||void 0===i||null===(n=i[0])||void 0===n?void 0:n.toNumber(),x=(0,s.useMemo)((()=>{if(u&&e){const n=[];for(let i=0;i<u;i++)n.push([e,i]);return n}return[]}),[e,u]),h=(0,o.es)(l,"tokenOfOwnerByIndex",x),p=(0,s.useMemo)((()=>h.some((({loading:e})=>e))),[h]),m=(0,s.useMemo)((()=>e?h.map((({result:e})=>e)).filter((e=>!!e)).map((e=>t.O$.from(e[0]))):[]),[e,h]),{positions:v,loading:j}=d(m);return{loading:p||a||j,positions:v}}},32507:(e,n,i)=>{i.r(n),i.d(n,{PositionPageUnsupportedContent:()=>Ie,default:()=>Me});var t=i(92936),r=i(11604),o=i(5985),s=i(76078),d=i(21651),l=i(67978),a=i(42704),c=i(3115),u=i(32409),x=i(26303),h=i(38081),p=i(80187),m=i(23652),v=i(24644),j=i(98640),g=i(92241),y=i(44842),f=i(55478),w=i(83792),T=i(61808),b=i(73397),k=i(61190),P=i(97704),D=i(22722),I=i(29717),M=i(74015),L=i(67189),A=i(64063),z=i(38043),$=i(87075),C=i(78087),S=i(17125),R=i(24055),Z=i(44958),K=i(36664),q=i(61152),O=i(83639),F=i(45779),U=i(437),B=i(43454),E=i(6282),N=i(74695),W=i(90379),G=i(67153),H=i(56363),_=i(77134),J=i(8806),Q=i(1596),V=i(48313),X=i(45878),Y=i(97994),ee=i(769),ne=i(30754),ie=i(30102),te=i(58730),re=i(85209),oe=i(88671),se=i(64972),de=i(88362);function le(e,n,i,t,r,o,s){try{var d=e[o](s),l=d.value}catch(a){return void i(a)}d.done?n(l):Promise.resolve(l).then(t,r)}function ae(e){return function(){var n=this,i=arguments;return new Promise((function(t,r){var o=e.apply(n,i);function s(e){le(o,t,r,s,d,"next",e)}function d(e){le(o,t,r,s,d,"throw",e)}s(void 0)}))}}const ce=(0,K.ZP)(c.DF)`
  width: 228px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
`,ue=K.ZP.div`
  padding: 68px 16px 16px 16px;

  min-width: 800px;
  max-width: 960px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    min-width: 100%;
    padding: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    min-width: 100%;
    padding: 16px;
  }
`,xe=K.ZP.div`
  font-weight: 535;
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
`,he=(0,K.ZP)((({end:e,...n})=>(0,t.jsx)(H.T.DeprecatedLabel,{...n})))`
  display: flex;
  font-size: 16px;
  justify-content: ${({end:e})=>e?"flex-end":"flex-start"};
  align-items: center;
`,pe=K.ZP.span`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  text-align: center;
  margin-right: 4px;
  font-weight: 535;
`,me=(0,K.ZP)(H.T.DeprecatedMain)`
  text-decoration: none;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
`,ve=K.ZP.span`
  color: ${({theme:e})=>e.neutral3};
  margin: 0 1rem;
`,je=(0,K.ZP)(w.m0)`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    width: 100%;
  }
`,ge=(0,K.ZP)(je)`
  width: 50%;
  justify-content: flex-end;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    * {
      width: 100%;
    }
  }
`,ye=(0,K.ZP)(c.gn)`
  border-radius: 12px;
  padding: 6px 8px;
  width: fit-content;
  font-size: 16px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: fit-content;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: fit-content;
  }
`,fe=(0,K.ZP)(B.rU)`
  text-decoration: none;
  ${_.iV}
`,we=(0,K.ZP)(H.T.H1Medium)`
  margin-right: 10px;
`;function Te({inverted:e,pool:n,currencyQuote:i,currencyBase:r}){var o,s;const{formatPrice:d}=(0,se.Gb)();return n&&i&&r?(0,t.jsx)(u.hl,{padding:"12px",children:(0,t.jsxs)(f.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(pe,{children:(0,t.jsx)(Y.Trans,{i18nKey:"common.currentPrice"})}),(0,t.jsx)(H.T.DeprecatedMediumHeader,{textAlign:"center",children:d({price:e?n.token1Price:n.token0Price,type:se.sw.TokenTx})}),(0,t.jsx)(pe,{children:(0,t.jsx)(Y.Trans,{i18nKey:"common.feesEarnedPerBase",values:{symbolA:null===(o=i)||void 0===o?void 0:o.symbol,symbolB:null===(s=r)||void 0===s?void 0:s.symbol}})})]})}):null}const be=({children:e,chainId:n,address:i})=>{const r=(0,k.dG)({address:i,chain:(0,b.tq)({chainId:n})});return(0,t.jsx)(_.bm,{to:r,children:e})},ke=({children:e,chainId:n,address:i})=>(0,t.jsx)(_.dL,{href:(0,ne.getExplorerLink)(n,i,ne.ExplorerDataType.TOKEN),children:e});function Pe({chainId:e,currency:n}){var i,r;const o=null===(i=n)||void 0===i?void 0:i.address,s=(0,b.Jw)(e),d=(0,k.bx)(s)?be:ke;return(0,t.jsx)(d,{chainId:e,address:o,children:(0,t.jsxs)(w.DA,{children:[(0,t.jsx)(p.Z,{currency:n,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsxs)(H.T.DeprecatedMain,{children:[null===(r=n)||void 0===r?void 0:r.symbol," \u2197"]})]})})}const De=({priceLower:e,priceUpper:n,quote:i,base:t,invert:r})=>{var o,s;return{priceUpper:r?null===(o=e)||void 0===o?void 0:o.invert():n,priceLower:r?null===(s=n)||void 0===s?void 0:s.invert():e,quote:r?t:i,base:r?i:t}};function Ie(){return(0,t.jsx)(ue,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,t.jsx)(H.T.HeadlineLarge,{style:{marginBottom:"8px"},children:(0,t.jsx)(Y.Trans,{i18nKey:"common.positionUnavailable",children:"Position unavailable"})}),(0,t.jsx)(H.T.BodyPrimary,{style:{marginBottom:"32px"},children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.position.networkConnect"})}),(0,t.jsx)(ce,{as:B.rU,to:"/pool",width:"fit-content",children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.back"})})]})})}function Me(){const{chainId:e}=(0,D.m)();return(0,b.Nb)(e)?(0,t.jsx)(Ae,{}):(0,t.jsx)(Ie,{})}const Le=(0,K.ZP)(w.DA)({flexWrap:"wrap",gap:8});function Ae(){var e,n,i,K,le,ce,be,ke,Me,Ae,ze,$e,Ce,Se,Re,Ze,Ke,qe,Oe,Fe,Ue,Be,Ee,Ne,We,Ge,He,_e,Je,Qe;const{tokenId:Ve}=(0,E.UO)(),Xe=(0,D.m)(),Ye=(0,b.Jw)(Xe.chainId),en=(0,M.z)(),nn=(0,q.useTheme)(),{formatCurrencyAmount:tn,formatDelta:rn,formatTickPrice:on}=(0,se.Gb)(),sn=function(e){if(e)try{return r.O$.from(e)}catch(n){return}}(Ve),{loading:dn,position:ln}=(0,S.n)(sn),{token0:an,token1:cn,fee:un,liquidity:xn,tickLower:hn,tickUpper:pn,tokenId:mn}=ln||{},vn=null===(e=xn)||void 0===e?void 0:e.eq(0),jn=(0,z.b)(sn),gn=(0,P.dQ)(an),yn=(0,P.dQ)(cn),fn=gn?(0,de.B)(gn):void 0,wn=yn?(0,de.B)(yn):void 0,[Tn,bn]=(0,F.useState)(!1),kn=(0,Z.Z)(Ye).wrapped.symbol,Pn=gn&&yn&&un?d.Pool.getAddress(gn,yn,un):void 0,[Dn,In]=(0,A.AI)(gn??void 0,yn??void 0,un),Mn=(0,F.useMemo)((()=>{if(In&&xn&&"number"===typeof hn&&"number"===typeof pn)return new d.Position({pool:In,liquidity:xn.toString(),tickLower:hn,tickUpper:pn})}),[xn,In,hn,pn]),Ln=(0,L.Z)(un,hn,pn),An=(0,v.N)(Mn),[zn,$n]=(0,F.useState)(!1),{priceLower:Cn,priceUpper:Sn,base:Rn}=De({priceLower:An.priceLower,priceUpper:An.priceUpper,quote:An.quote,base:An.base,invert:zn}),Zn=yn?null===(n=Rn)||void 0===n?void 0:n.equals(yn):void 0,Kn=Zn?fn:wn,qn=Zn?wn:fn,On=(0,F.useMemo)((()=>Cn&&In&&Sn?function(e,n,i){try{if(!n.greaterThan(e))return 100;if(!n.lessThan(i))return 0;const t=Number.parseFloat(e.toSignificant(15)),r=Number.parseFloat(i.toSignificant(15)),o=Number.parseFloat(n.toSignificant(15)),s=Math.floor(1/((Math.sqrt(t*r)-Math.sqrt(r*o))/(o-Math.sqrt(r*o))+1)*100);if(s<0||s>100)throw Error("Out of range");return s}catch{return}}(Zn?Sn.invert():Cn,In.token0Price,Zn?Cn.invert():Sn):void 0),[Zn,In,Cn,Sn]),[Fn,Un]=(0,C.t)(In??void 0,null===(i=ln)||void 0===i?void 0:i.tokenId,Tn),Bn=In?Tn?In.token0:(0,de.B)(In.token0):void 0,En=In?Tn?In.token1:(0,de.B)(In.token1):void 0,[Nn,Wn]=(0,F.useState)(!1),[Gn,Hn]=(0,F.useState)(null),_n=(0,W.ub)(Gn??void 0),[Jn,Qn]=(0,F.useState)(!1),{price:Vn}=(0,$.ZP)(gn??void 0),{price:Xn}=(0,$.ZP)(yn??void 0),Yn=(0,F.useMemo)((()=>{var e,n;if(!Vn||!Xn||!Fn||!Un)return null;const i=null===(e=Fn)||void 0===e?void 0:e.wrapped,t=null===(n=Un)||void 0===n?void 0:n.wrapped;if(!i||!t)return null;const r=Vn.quote(i),o=Xn.quote(t);return r.add(o)}),[Vn,Xn,Fn,Un]),ei=(0,F.useMemo)((()=>{if(!Vn||!Xn||!Mn)return null;const e=Vn.quote(Mn.amount0),n=Xn.quote(Mn.amount1);return e.add(n)}),[Vn,Xn,Mn]),ni=(0,W.h7)(),ii=(0,I.GL)(),ti=(0,F.useCallback)(ae((function*(){if(!Bn||!En||"connected"!==Xe.status||!ii||!mn||!en)return;Wn(!0);const{calldata:e,value:n}=d.NonfungiblePositionManager.collectCallParameters({tokenId:mn.toString(),expectedCurrencyOwed0:Fn??s.CurrencyAmount.fromRawAmount(Bn,0),expectedCurrencyOwed1:Un??s.CurrencyAmount.fromRawAmount(En,0),recipient:Xe.address}),i={to:ii.address,data:e,value:n},t=yield en.getChainId();if(Xe.chainId!==t)throw new oe.CJ;en.estimateGas(i).then((e=>{const n={...i,gasLimit:(0,te.y)(e)};return en.sendTransaction(n).then((e=>{var n,i;Hn(e.hash),Wn(!1),(0,X.sendAnalyticsEvent)(o.vp.COLLECT_LIQUIDITY_SUBMITTED,{source:o.GM.V3,label:[Bn.symbol,En.symbol].join("/"),type:o.GM.V3,fee_tier:un}),ni(e,{type:G.i.COLLECT_FEES,currencyId0:(0,re.H)(Bn),currencyId1:(0,re.H)(En),expectedCurrencyOwed0:(null===(n=Fn)||void 0===n?void 0:n.quotient.toString())??s.CurrencyAmount.fromRawAmount(Bn,0).toExact(),expectedCurrencyOwed1:(null===(i=Un)||void 0===i?void 0:i.quotient.toString())??s.CurrencyAmount.fromRawAmount(En,0).toExact()})}))})).catch((e=>{Wn(!1),ie.logger.error(e,{tags:{file:"PositionPage",function:"collectCallback"}})}))})),[Bn,En,Xe.status,Xe.address,Xe.chainId,ii,mn,en,Fn,Un,un,ni]),ri=null===(K=(0,R.Wk)(mn?ii:null,"ownerOf",[mn]).result)||void 0===K?void 0:K[0],oi=ri===Xe.address||(null===(le=ln)||void 0===le?void 0:le.operator)===Xe.address,si=Zn?Fn:Un,di=Zn?Un:Fn,li=In&&"number"===typeof hn?In.tickCurrent<hn:void 0,ai=In&&"number"===typeof pn?In.tickCurrent>=pn:void 0,ci="boolean"===typeof li&&"boolean"===typeof ai&&(!li&&!ai);function ui(){var e,n,i,r,o,s;return(0,t.jsxs)(f.Tz,{gap:"md",style:{marginTop:"20px"},children:[(0,t.jsx)(u.hl,{padding:"12px 16px",children:(0,t.jsxs)(f.Tz,{gap:"md",children:[(0,t.jsxs)(w.m0,{children:[(0,t.jsxs)(w.DA,{children:[(0,t.jsx)(p.Z,{currency:null===(e=si)||void 0===e?void 0:e.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(H.T.DeprecatedMain,{children:si?tn({amount:si}):"-"})]}),(0,t.jsx)(H.T.DeprecatedMain,{children:null===(i=si)||void 0===i||null===(n=i.currency)||void 0===n?void 0:n.symbol})]}),(0,t.jsxs)(w.m0,{children:[(0,t.jsxs)(w.DA,{children:[(0,t.jsx)(p.Z,{currency:null===(r=di)||void 0===r?void 0:r.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(H.T.DeprecatedMain,{children:di?tn({amount:di}):"-"})]}),(0,t.jsx)(H.T.DeprecatedMain,{children:null===(s=di)||void 0===s||null===(o=s.currency)||void 0===o?void 0:o.symbol})]})]})}),(0,t.jsx)(J.xv,{fontSize:12,fontStyle:"italic",color:"$neutral2",children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.collectingFeesWithdraw"})}),(0,t.jsx)(c.DF,{"data-testid":"modal-collect-fees-button",onClick:ti,children:(0,t.jsx)(Y.Trans,{i18nKey:"common.collect.button"})})]})}const xi=Boolean(oi&&((null===(ce=Fn)||void 0===ce?void 0:ce.greaterThan(0))||(null===(be=Un)||void 0===be?void 0:be.greaterThan(0)))&&fn&&wn&&(fn.isNative||wn.isNative)&&!Gn);return ln||dn?dn||Dn===A.tK.LOADING||!un?(0,t.jsxs)(O.pr,{children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{})]}):(0,t.jsx)(V.default,{logImpression:!0,page:o.yJ.POOL_PAGE,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(U.Helmet,{children:(0,t.jsx)("title",{children:(0,Y.t)("liquidityPool.positions.page.title",{quoteSymbol:null===(ke=Kn)||void 0===ke?void 0:ke.symbol,baseSymbol:null===(Me=qn)||void 0===Me?void 0:Me.symbol})})}),(0,t.jsxs)(ue,{children:[(0,t.jsx)(y.Z,{isOpen:Jn,onDismiss:()=>Qn(!1),attemptingTxn:Nn,hash:Gn??"",reviewContent:()=>(0,t.jsx)(y.p,{title:(0,t.jsx)(Y.Trans,{i18nKey:"pool.claimFees"}),onDismiss:()=>Qn(!1),topContent:ui}),pendingText:(0,t.jsx)(Y.Trans,{i18nKey:"common.collecting.fees"})}),(0,t.jsxs)(f.Tz,{gap:"md",children:[(0,t.jsxs)(f.Tz,{gap:"sm",children:[(0,t.jsx)(B.rU,{"data-cy":"visit-pool",style:{textDecoration:"none",width:"fit-content",marginBottom:"0.5rem"},to:"/pool",children:(0,t.jsxs)(me,{children:["\u2190 ",(0,t.jsx)(Y.Trans,{i18nKey:"pool.back"})]})}),(0,t.jsxs)(je,{children:[(0,t.jsxs)(Le,{children:[(0,t.jsx)(m.ge,{currencies:[qn,Kn],size:24}),(0,t.jsx)(fe,{to:Pn?(0,k.Ah)(Pn,(0,b.tq)({chainId:Ye,withFallback:!0})):"",children:(0,t.jsxs)(we,{children:["\xa0",null===(Ae=Kn)||void 0===Ae?void 0:Ae.symbol,"\xa0/\xa0",null===(ze=qn)||void 0===ze?void 0:ze.symbol]})}),(0,t.jsx)(l.Z,{style:{marginRight:"8px"},children:(0,t.jsx)(xe,{children:rn(parseFloat(new s.Percent(un,1e6).toSignificant()))})}),(0,t.jsx)(a.Z,{removed:vn,inRange:ci})]}),oi&&(0,t.jsxs)(ge,{children:[fn&&wn&&un&&mn?(0,t.jsx)(c.Ux,{as:B.rU,to:`/add/${(0,re.H)(fn)}/${(0,re.H)(wn)}/${un}/${mn}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",style:{marginRight:"8px"},children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.increaseLiquidity"})}):null,mn&&!vn?(0,t.jsx)(c.Hm,{as:B.rU,to:`/remove/${mn}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.removeLiquidity"})}):null]})]})]}),(0,t.jsxs)(je,{align:"flex-start",children:[(0,t.jsx)(_.Pw,{style:{height:"100%",marginRight:12},children:"result"in jn?(0,t.jsxs)(u.Wm,{width:"100%",height:"100%",style:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around",minWidth:"340px"},children:[(0,t.jsx)(x.t,{image:jn.result.image,height:400}),"number"===typeof Xe.chainId&&ri&&!oi?(0,t.jsx)(_.dL,{href:(0,ne.getExplorerLink)(Xe.chainId,ri,ne.ExplorerDataType.ADDRESS),children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.owner"})}):null]}):(0,t.jsx)(u.Wm,{width:"100%",height:"100%",style:{minWidth:"340px",position:"relative",overflow:"hidden"},children:(0,t.jsx)(h.tG,{})})}),(0,t.jsxs)(f.Tz,{gap:"sm",style:{width:"100%",height:"100%"},children:[(0,t.jsx)(u.Wm,{children:(0,t.jsxs)(f.Tz,{gap:"md",style:{width:"100%"},children:[(0,t.jsxs)(f.Tz,{gap:"md",children:[(0,t.jsx)(he,{children:(0,t.jsx)(Y.Trans,{i18nKey:"common.liquidity"})}),(null===($e=ei)||void 0===$e?void 0:$e.greaterThan(new s.Fraction(1,100)))?(0,t.jsx)(H.T.DeprecatedLargeHeader,{fontSize:"36px",fontWeight:535,children:tn({amount:ei,type:se.sw.FiatTokenPrice})}):(0,t.jsx)(H.T.DeprecatedLargeHeader,{color:nn.neutral1,fontSize:"36px",fontWeight:535,children:"-"})]}),(0,t.jsx)(u.hl,{padding:"12px 16px",children:(0,t.jsxs)(f.Tz,{gap:"md",children:[(0,t.jsxs)(w.m0,{children:[(0,t.jsx)(Pe,{chainId:Xe.chainId??ee.UniverseChainId.Mainnet,currency:Kn}),(0,t.jsxs)(w.DA,{children:[(0,t.jsx)(H.T.DeprecatedMain,{children:tn({amount:Zn?null===(Ce=Mn)||void 0===Ce?void 0:Ce.amount0:null===(Se=Mn)||void 0===Se?void 0:Se.amount1})}),"number"!==typeof On||vn?null:(0,t.jsx)(l.Z,{style:{marginLeft:"10px"},children:(0,t.jsxs)(xe,{children:[Zn?On:100-On,"%"]})})]})]}),(0,t.jsxs)(w.m0,{children:[(0,t.jsx)(Pe,{chainId:Xe.chainId??ee.UniverseChainId.Mainnet,currency:qn}),(0,t.jsxs)(w.DA,{children:[(0,t.jsx)(H.T.DeprecatedMain,{children:tn({amount:Zn?null===(Re=Mn)||void 0===Re?void 0:Re.amount1:null===(Ze=Mn)||void 0===Ze?void 0:Ze.amount0})}),"number"!==typeof On||vn?null:(0,t.jsx)(l.Z,{style:{marginLeft:"10px"},children:(0,t.jsxs)(xe,{children:[Zn?100-On:On,"%"]})})]})]})]})})]})}),(0,t.jsx)(u.Wm,{children:(0,t.jsxs)(f.Tz,{gap:"md",style:{width:"100%"},children:[(0,t.jsx)(f.Tz,{gap:"md",children:(0,t.jsxs)(w.m0,{style:{alignItems:"flex-start"},children:[(0,t.jsxs)(f.Tz,{gap:"md",children:[(0,t.jsx)(he,{children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.unclaimedFees"})}),(null===(Ke=Yn)||void 0===Ke?void 0:Ke.greaterThan(new s.Fraction(1,100)))?(0,t.jsx)(H.T.DeprecatedLargeHeader,{color:nn.success,fontSize:"36px",fontWeight:535,children:tn({amount:Yn,type:se.sw.FiatTokenPrice})}):(0,t.jsx)(H.T.DeprecatedLargeHeader,{color:nn.neutral1,fontSize:"36px",fontWeight:535,children:"-"})]}),oi&&((null===(qe=Fn)||void 0===qe?void 0:qe.greaterThan(0))||(null===(Oe=Un)||void 0===Oe?void 0:Oe.greaterThan(0))||Gn)?(0,t.jsx)(ye,{"data-testid":"collect-fees-button",disabled:Nn||!!Gn,confirmed:!!Gn&&!_n,width:"fit-content",style:{borderRadius:"12px"},padding:"4px 8px",onClick:()=>Qn(!0),children:Gn&&!_n?(0,t.jsx)(H.T.DeprecatedMain,{color:nn.neutral1,children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.collected"})}):_n||Nn?(0,t.jsxs)(H.T.DeprecatedMain,{color:nn.neutral1,children:[" ",(0,t.jsx)(T.bb,{children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.collecting"})})]}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(H.T.DeprecatedMain,{color:nn.white,children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.collectingFees"})})})}):null]})}),(0,t.jsx)(u.hl,{padding:"12px 16px",children:(0,t.jsxs)(f.Tz,{gap:"md",children:[(0,t.jsxs)(w.m0,{children:[(0,t.jsxs)(w.DA,{children:[(0,t.jsx)(p.Z,{currency:null===(Fe=si)||void 0===Fe?void 0:Fe.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(H.T.DeprecatedMain,{children:null===(Be=si)||void 0===Be||null===(Ue=Be.currency)||void 0===Ue?void 0:Ue.symbol})]}),(0,t.jsx)(w.DA,{children:(0,t.jsx)(H.T.DeprecatedMain,{children:si?tn({amount:si}):"-"})})]}),(0,t.jsxs)(w.m0,{children:[(0,t.jsxs)(w.DA,{children:[(0,t.jsx)(p.Z,{currency:null===(Ee=di)||void 0===Ee?void 0:Ee.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(H.T.DeprecatedMain,{children:null===(We=di)||void 0===We||null===(Ne=We.currency)||void 0===Ne?void 0:Ne.symbol})]}),(0,t.jsx)(w.DA,{children:(0,t.jsx)(H.T.DeprecatedMain,{children:di?tn({amount:di}):"-"})})]})]})}),xi&&(0,t.jsx)(f.Tz,{gap:"md",children:(0,t.jsxs)(w.m0,{children:[(0,t.jsx)(H.T.DeprecatedMain,{children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.collectAs",values:{nativeWrappedSymbol:kn}})}),(0,t.jsx)(Q.r,{id:"receive-as-weth",checked:Tn,onCheckedChange:()=>bn((e=>!e)),variant:"branded"})]})})]})})]})]}),(0,t.jsx)(u.Wm,{children:(0,t.jsxs)(f.Tz,{gap:"md",children:[(0,t.jsxs)(w.m0,{children:[(0,t.jsxs)(w.DA,{children:[(0,t.jsx)(he,{display:"flex",style:{marginRight:"12px"},children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.priceRange"})}),(0,t.jsx)(_.v_,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Z,{removed:vn,inRange:ci}),(0,t.jsx)("span",{style:{width:"8px"}})]})})]}),(0,t.jsx)(w.DA,{children:qn&&Kn&&(0,t.jsx)(j.Z,{currencyA:qn,currencyB:Kn,handleRateToggle:()=>$n(!zn)})})]}),(0,t.jsxs)(w.m0,{children:[(0,t.jsx)(u.hl,{padding:"12px",width:"100%",children:(0,t.jsxs)(f.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(pe,{children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.minPrice"})}),(0,t.jsx)(H.T.DeprecatedMediumHeader,{textAlign:"center",children:on({price:Cn,atLimit:Ln,direction:N.Mb.LOWER,numberType:se.sw.TokenTx})}),(0,t.jsxs)(pe,{children:[" ",(0,t.jsx)(Y.Trans,{i18nKey:"common.feesEarnedPerBase",values:{symbolA:null===(Ge=Kn)||void 0===Ge?void 0:Ge.symbol,symbolB:null===(He=qn)||void 0===He?void 0:He.symbol}})]}),ci&&(0,t.jsx)(J.xv,{fontSize:11,color:"$neutral3",children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.position.100"})})]})}),(0,t.jsx)(ve,{children:"\u27f7"}),(0,t.jsx)(u.hl,{padding:"12px",width:"100%",children:(0,t.jsxs)(f.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(pe,{children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.maxPrice"})}),(0,t.jsx)(H.T.DeprecatedMediumHeader,{textAlign:"center",children:on({price:Sn,atLimit:Ln,direction:N.Mb.UPPER,numberType:se.sw.TokenTx})}),(0,t.jsxs)(pe,{children:[" ",(0,t.jsx)(Y.Trans,{i18nKey:"common.feesEarnedPerBase",values:{symbolA:null===(_e=Kn)||void 0===_e?void 0:_e.symbol,symbolB:null===(Je=qn)||void 0===Je?void 0:Je.symbol}})]}),ci&&(0,t.jsx)(J.xv,{fontSize:11,color:"$neutral3",children:(0,t.jsx)(Y.Trans,{i18nKey:"pool.position.100.at",values:{symbol:null===(Qe=Kn)||void 0===Qe?void 0:Qe.symbol}})})]})})]}),(0,t.jsx)(Te,{inverted:Zn,pool:In,currencyQuote:Kn,currencyBase:qn})]})})]})]}),(0,t.jsx)(g.c,{})]})}):(0,t.jsx)(Ie,{})}}}]);
//# sourceMappingURL=2507.4ccfe211.chunk.js.map