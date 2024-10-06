"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6194],{40187:(e,n,t)=>{t.d(n,{Z:()=>B});var i=t(92936),r=t(5985),o=t(46781),s=t(3115),a=t(83557),d=t(38081),l=t(80187),c=t(23652),u=t(87478),p=t(26410),h=t(83792),m=t(73397),v=t(96238),x=t(22722),g=t(36664),f=t(61152),y=t(36399),b=t(45779),$=t(97047),j=t(43969),P=t(56363),k=t(45003),T=t(48313),w=t(97994),N=t(64972);const A=g.ZP.div`
  ${k.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,I=g.ZP.div`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:t})=>!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,_=(0,g.ZP)(s.Ux)`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,y._j)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,O=g.ZP.div`
  ${k.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,Z=g.ZP.div`
  ${k.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,y._j)(.2,e.neutral2)};
  }
`,E=(0,g.ZP)(Z)`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,C=g.ZP.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,D=(0,g.ZP)(o.r)`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,S=g.ZP.span`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
  white-space: nowrap;

  @media screen and (max-width: ${j.j$.sm}px) {
    font-size: 16px;
  }
`,R=g.ZP.button`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,U=(0,g.ZP)(u.II)`
  ${d._Q};
  text-align: left;
`,K=(0,g.ZP)(v.Kh)`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function B({value:e,onUserInput:n,onMax:t,showMaxButton:o,onCurrencySelect:s,currency:u,otherCurrency:v,id:g,showCurrencyAmount:y,currencyField:j,renderBalance:k,fiatValue:Z,hideBalance:B=!1,pair:z=null,hideInput:M=!1,locked:V=!1,loading:G=!1,...W}){var q,F,L,H,X;const{t:Q}=(0,w.useTranslation)(),[J,Y]=(0,b.useState)(!1),ee=(0,x.m)(),ne=(0,m.Nb)(ee.chainId),te=(0,$.ZP)(ee.address,u??void 0),ie=(0,f.useTheme)(),{formatCurrencyAmount:re}=(0,N.Gb)(),oe=(0,b.useCallback)((()=>{Y(!1)}),[Y]);return(0,i.jsxs)(A,{id:g,hideInput:M,...W,children:[!V&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(I,{hideInput:M,disabled:!ne,children:[(0,i.jsxs)(O,{style:M?{padding:"0",borderRadius:"8px"}:{},selected:!s,children:[!M&&(0,i.jsx)(U,{className:"token-amount-input",value:e,onUserInput:n,disabled:!ne,$loading:G,maxDecimals:null===(q=u)||void 0===q?void 0:q.decimals}),(0,i.jsx)(K,{$fullWidth:M,children:(0,i.jsx)(_,{disabled:!ne,visible:void 0!==u,selected:!!u,hideInput:M,className:"open-currency-select-button",onClick:()=>{s&&Y(!0)},pointerEvents:s?void 0:"none",children:(0,i.jsxs)(C,{children:[(0,i.jsxs)(h.DA,{children:[z?(0,i.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,i.jsx)(c.ge,{currencies:[z.token0,z.token1],size:24})}):u&&(0,i.jsx)(l.Z,{style:{marginRight:"0.5rem"},currency:u,size:24}),z?(0,i.jsxs)(S,{className:"pair-name-container",children:[null===(F=z)||void 0===F?void 0:F.token0.symbol,":",null===(L=z)||void 0===L?void 0:L.token1.symbol]}):(0,i.jsx)(S,{className:"token-symbol-container",active:Boolean(u&&u.symbol),children:(u&&u.symbol&&u.symbol.length>20?u.symbol.slice(0,4)+"..."+u.symbol.slice(u.symbol.length-5,u.symbol.length):null===(H=u)||void 0===H?void 0:H.symbol)||(0,i.jsx)(w.Trans,{i18nKey:"tokens.selector.button.choose"})})]}),s&&(0,i.jsx)(D,{selected:!!u})]})})})]}),Boolean(!M&&!B&&u)&&(0,i.jsx)(E,{children:(0,i.jsxs)(h.m0,{children:[(0,i.jsx)(d.EG,{$loading:G,children:Z&&(0,i.jsx)(a.x,{fiatValue:Z})}),ee&&(0,i.jsxs)(h.DA,{style:{height:"17px"},children:[(0,i.jsx)(P.T.DeprecatedBody,{onClick:t,color:ie.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!B&&u&&te)&&((null===(X=k)||void 0===X?void 0:X(te))||(0,i.jsx)(w.Trans,{i18nKey:"swap.balance.amount",values:{amount:re({amount:te,type:N.sw.TokenNonTx})}}))}),Boolean(o&&te)&&(0,i.jsx)(T.default,{logPress:!0,eventOnTrigger:r.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:r.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,i.jsx)(R,{onClick:t,children:Q("common.max").toUpperCase()})})]})]})})]})}),s&&(0,i.jsx)(p.Z,{isOpen:J,onDismiss:oe,onCurrencySelect:s,selectedCurrency:u,otherSelectedCurrency:v,showCurrencyAmount:y,currencyField:j})]})}},76394:(e,n,t)=>{t.d(n,{q:()=>P,w:()=>T});var i=t(92936),r=t(83792),o=t(30340),s=t(22722),a=t(36664),d=t(61152),l=t(21926),c=t(43454),u=t(6282),p=t(22953),h=t(34946),m=t(2456),v=t(74695),x=t(56363),g=t(45003),f=t(97994);const y=a.ZP.div`
  ${g.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,b=(0,a.ZP)(c.rU)`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,$=(0,a.ZP)(x.T.H1Small)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,j=(0,a.ZP)(l.Z)`
  color: ${({theme:e})=>e.neutral1};
`;function P({origin:e}){return(0,i.jsx)(y,{children:(0,i.jsxs)(r.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(c.rU,{to:e,children:(0,i.jsx)(j,{})}),(0,i.jsx)($,{children:(0,i.jsx)(f.Trans,{i18nKey:"pool.import.v2"})})]})})}const k=(0,a.ZP)(x.T.H1Small)`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function T({adding:e,creating:n,autoSlippage:t,positionID:a,children:l}){var c;const{chainId:x}=(0,s.m)(),g=(0,d.useTheme)(),$=(0,h.T)(),{state:P}=(0,u.TH)(),T=(0,u.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(a?`/${a.toString()}`:""),w=(null===(c=P)||void 0===c?void 0:c.from)??T;return(0,i.jsx)(y,{children:(0,i.jsxs)(r.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(b,{to:w,onClick:()=>{e&&($((0,m.dA)()),$((0,v.dA)()))},flex:l?"1":void 0,children:(0,i.jsx)(j,{stroke:g.neutral2})}),(0,i.jsx)(k,{$center:!l,children:n?(0,i.jsx)(f.Trans,{i18nKey:"pool.create.pair"}):e?(0,i.jsx)(f.Trans,{i18nKey:"common.addLiquidity"}):(0,i.jsx)(f.Trans,{i18nKey:"pool.removeLiquidity"})}),l&&(0,i.jsx)(p.xu,{style:{marginRight:".5rem"},children:l}),(0,i.jsx)(o.Z,{autoSlippage:t,chainId:x,hideRoutingSettings:!0})]})})}},90162:(e,n,t)=>{t.d(n,{q:()=>d});var i=t(42433),r=t(45779),o=t(90379),s=t(67153);function a(e){const n=(0,o.h7)();return(0,r.useCallback)((()=>e().then((e=>{if(e){const{response:t,tokenAddress:i,spenderAddress:r,amount:o}=e;n(t,{type:s.i.APPROVAL,tokenAddress:i,spender:r,amount:o.quotient.toString()})}}))),[n,e])}function d(e,n){const[t,r]=(0,i.o)(e,n,o.wB);return[t,a(r)]}},42433:(e,n,t)=>{t.d(n,{U:()=>v,o:()=>x});var i=t(16790),r=t(5985),o=t(22722),s=t(29717),a=t(77960),d=t(53242),l=t(45779),c=t(45878),u=t(30102),p=t(58730);function h(e,n,t,i,r,o,s){try{var a=e[o](s),d=a.value}catch(l){return void t(l)}a.done?n(d):Promise.resolve(d).then(i,r)}function m(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var o=e.apply(n,t);function s(e){h(o,i,r,s,a,"next",e)}function a(e){h(o,i,r,s,a,"throw",e)}s(void 0)}))}}var v=(e=>(e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED",e))(v||{});function x(e,n,t){var h,v,x,g;const{chainId:f}=(0,o.m)(),y=(null===(v=e)||void 0===v||null===(h=v.currency)||void 0===h?void 0:h.isToken)?e.currency:void 0,b=function(e,n,t){var i,r;const s=(0,o.m)(),d=(null===(r=e)||void 0===r||null===(i=r.currency)||void 0===i?void 0:i.isToken)?e.currency:void 0,{tokenAllowance:c}=(0,a.Fx)(d,s.address,n),u=t(d,n);return(0,l.useMemo)((()=>e&&n?e.currency.isNative?"APPROVED":c?c.lessThan(e)?u?"PENDING":"NOT_APPROVED":"APPROVED":"UNKNOWN":"UNKNOWN"),[e,u,n,c])}(e,n,t),$=(0,s.Ib)(null===(x=y)||void 0===x?void 0:x.address,void 0,null===(g=y)||void 0===g?void 0:g.chainId),j=(0,l.useCallback)(m((function*(){function t(n){var t,i,r;"string"===typeof n?u.logger.debug("useApproval","approve",n):u.logger.debug("useApproval","approve","Failed to approve amount",{error:n,tokenChain:null===(t=y)||void 0===t?void 0:t.chainId,token:null===(i=y)||void 0===i?void 0:i.address,chainId:f,amountToApprove:null===(r=e)||void 0===r?void 0:r.toFixed()})}if("NOT_APPROVED"!==b)return t("approve was called unnecessarily");if(!f)return t("no chainId");if(!y)return t("no token");if(!$)return t("tokenContract is null");if(!e)return t("missing amount to approve");if(!n)return t("no spender");let o=!1;const s=yield $.estimateGas.approve(n,i.Bz).catch((()=>(o=!0,$.estimateGas.approve(n,e.quotient.toString()))));return $.approve(n,o?e.quotient.toString():i.Bz,{gasLimit:(0,p.y)(s)}).then((t=>{var i;const o={chain_id:f,token_symbol:null===(i=y)||void 0===i?void 0:i.symbol,token_address:(0,d.DT)(y)};return(0,c.sendAnalyticsEvent)(r.Je.APPROVE_TOKEN_TXN_SUBMITTED,o),{response:t,tokenAddress:y.address,spenderAddress:n,amount:e}})).catch((e=>{throw t(e),e}))})),[b,y,$,e,n,f]);return[b,j]}},11712:(e,n,t)=>{t.d(n,{Z:()=>a,e:()=>s});var i=t(92936),r=t(36664),o=t(54884);const s=r.ZP.main`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${o.k.default};
`;function a(e){return(0,i.jsx)(s,{...e})}}}]);
//# sourceMappingURL=6194.c9c8e73b.chunk.js.map