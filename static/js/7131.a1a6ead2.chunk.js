"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7131],{33393:(e,t,n)=>{n.d(t,{Z:()=>C});var i=n(92936),o=n(5985),r=n(21651),d=n(3115),s=n(32409),a=n(55478),l=n(97994),u=n(769);const c={[r.FeeAmount.LOWEST]:{label:"0.01",description:(0,i.jsx)(l.Trans,{i18nKey:"fee.bestForVeryStable"}),supportedChains:u.WEB_SUPPORTED_CHAIN_IDS},[r.FeeAmount.LOW_200]:{label:"0.02",supportedChains:[u.UniverseChainId.Base]},[r.FeeAmount.LOW_300]:{label:"0.03",supportedChains:[u.UniverseChainId.Base]},[r.FeeAmount.LOW_400]:{label:"0.04",supportedChains:[u.UniverseChainId.Base]},[r.FeeAmount.LOW]:{label:"0.05",description:(0,i.jsx)(l.Trans,{i18nKey:"fee.bestForStablePairs"}),supportedChains:u.WEB_SUPPORTED_CHAIN_IDS},[r.FeeAmount.MEDIUM]:{label:"0.3",description:(0,i.jsx)(l.Trans,{i18nKey:"fee.bestForMost"}),supportedChains:u.WEB_SUPPORTED_CHAIN_IDS},[r.FeeAmount.HIGH]:{label:"1",description:(0,i.jsx)(l.Trans,{i18nKey:"fee.bestForExotic"}),supportedChains:u.WEB_SUPPORTED_CHAIN_IDS}};var m=n(75985),p=n(64063),v=n(11947),x=n(63808),A=n(8806),b=n(64972);function h({feeAmount:e,selected:t,poolState:n,distributions:o,onClick:r}){var d,s;const{formatDelta:u}=(0,b.Gb)(),h=null===(s=o)||void 0===s||null===(d=s[e])||void 0===d?void 0:d.toFixed(0),f=c[e].description;return(0,i.jsx)(m.ud,{disabled:!f,text:f,size:m.Oz.Max,placement:"auto",children:(0,i.jsxs)(v.k,{alignItems:"flex-start",py:"$padding12",px:"$padding8",borderRadius:"$rounded12",borderWidth:"$spacing1",borderColor:t?"$accent1":"$surface3",focusStyle:{shadowColor:"$surface3",shadowRadius:"$spacing1"},pressStyle:{shadowColor:"$surface3",shadowRadius:"$spacing1"},hoverStyle:{shadowColor:"$neutral3",shadowRadius:"$spacing1"},disabledStyle:{opacity:.5,cursor:"auto"},children:[(0,i.jsx)(x.E,{position:"absolute",top:"$spacing8",right:"$spacing8",value:e.toString(),onPress:r,variant:"branded"}),(0,i.jsxs)(a.Tz,{gap:"sm",justify:"flex-start",children:[(0,i.jsx)(A.xv,{variant:"buttonLabel3",children:u(parseFloat(c[e].label))}),o&&(0,i.jsx)(A.xv,{variant:"body4",color:"$neutral2",children:o&&n!==p.tK.NOT_EXISTS&&n!==p.tK.INVALID?void 0!==o[e]?(0,i.jsx)(l.Trans,{i18nKey:"fee.selectPercent",values:{pct:h}}):(0,i.jsx)(l.Trans,{i18nKey:"common.noData"}):(0,i.jsx)(l.Trans,{i18nKey:"common.notCreated.label"})})]})]})})}var f=n(67978),F=n(56363);function I({feeAmount:e,distributions:t,poolState:n}){var o,r;const d=null===(r=t)||void 0===r||null===(o=r[e])||void 0===o?void 0:o.toFixed(0);return(0,i.jsx)(f.Z,{children:(0,i.jsx)(F.T.DeprecatedLabel,{fontSize:10,children:t&&n!==p.tK.NOT_EXISTS&&n!==p.tK.INVALID?void 0!==t[e]?(0,i.jsx)(l.Trans,{i18nKey:"fee.selectPercent",values:{pct:d}}):(0,i.jsx)(l.Trans,{i18nKey:"common.noData"}):(0,i.jsx)(l.Trans,{i18nKey:"common.notCreated.label"})})})}var S=n(83792),T=n(22722),L=n(73397),O=n(63490),E=n.n(O),g=n(45779),W=n(70854),_=n(30102);function j(e,t){var n,i;const{isLoading:o,error:d,distributions:s}=function(e,t){var n,i,o,d;const s=(0,L.tq)({chainId:null===(n=e)||void 0===n?void 0:n.chainId,withFallback:!0}),{loading:a,error:l,data:u}=(0,W.useFeeTierDistributionQuery)({variables:{chain:s,token0:(null===(i=e)||void 0===i?void 0:i.address)??"",token1:(null===(o=t)||void 0===o?void 0:o.address)??""},pollInterval:E()("30s")}),{data:c,error:m}=(0,W.useIsV3SubgraphStaleQuery)({variables:{chain:s},pollInterval:E()("30s")}),{v3PoolsForTokenPair:p}=u??{};return(0,g.useMemo)((()=>{var e;if(m||!p)return{isLoading:a,error:l??m};if(null===(e=c)||void 0===e?void 0:e.isV3SubgraphStale)return _.logger.info("useFeeTierDistribution","usePoolTVL","Subgraph stale"),{isLoading:a,error:l};const t=p.reduce(((e,t)=>{var n,i;return t.feeTier?((n=e)[i=t.feeTier]??(n[i]=[0,0]),e[t.feeTier][0]=(e[t.feeTier][0]??0)+Number(t.token0Supply),e[t.feeTier][1]=(e[t.feeTier][1]??0)+Number(t.token1Supply),e):e}),{[r.FeeAmount.LOWEST]:[void 0,void 0],[r.FeeAmount.LOW]:[void 0,void 0],[r.FeeAmount.MEDIUM]:[void 0,void 0],[r.FeeAmount.HIGH]:[void 0,void 0],[r.FeeAmount.LOW_200]:[void 0,void 0],[r.FeeAmount.LOW_300]:[void 0,void 0],[r.FeeAmount.LOW_400]:[void 0,void 0]}),[n,i]=Object.values(t).reduce(((e,t)=>(e[0]+=t[0]??0,e[1]+=t[1]??0,e)),[0,0]),o=(e,t,n,i)=>void 0===e&&void 0===n?void 0:((e??0)+(n??0))/(t+i)||0,d={[r.FeeAmount.LOWEST]:o(t[r.FeeAmount.LOWEST][0],n,t[r.FeeAmount.LOWEST][1],i),[r.FeeAmount.LOW]:o(t[r.FeeAmount.LOW][0],n,t[r.FeeAmount.LOW][1],i),[r.FeeAmount.MEDIUM]:o(t[r.FeeAmount.MEDIUM][0],n,t[r.FeeAmount.MEDIUM][1],i),[r.FeeAmount.HIGH]:o(t[r.FeeAmount.HIGH][0],n,t[r.FeeAmount.HIGH][1],i),[r.FeeAmount.LOW_200]:o(t[r.FeeAmount.LOW_200][0],n,t[r.FeeAmount.LOW_200][1],i),[r.FeeAmount.LOW_300]:o(t[r.FeeAmount.LOW_300][0],n,t[r.FeeAmount.LOW_300][1],i),[r.FeeAmount.LOW_400]:o(t[r.FeeAmount.LOW_400][0],n,t[r.FeeAmount.LOW_400][1],i)};return{isLoading:a,error:l,distributions:d}}),[m,p,null===(d=c)||void 0===d?void 0:d.isV3SubgraphStale,a,l])}(null===(n=e)||void 0===n?void 0:n.wrapped,null===(i=t)||void 0===i?void 0:i.wrapped),[a]=(0,p.AI)(e,t,r.FeeAmount.LOWEST),[l]=(0,p.AI)(e,t,r.FeeAmount.LOW_200),[u]=(0,p.AI)(e,t,r.FeeAmount.LOW_300),[c]=(0,p.AI)(e,t,r.FeeAmount.LOW_400),[m]=(0,p.AI)(e,t,r.FeeAmount.LOW),[v]=(0,p.AI)(e,t,r.FeeAmount.MEDIUM),[x]=(0,p.AI)(e,t,r.FeeAmount.HIGH);return(0,g.useMemo)((()=>{if(o||d||!s)return{isLoading:o,isError:!!d,distributions:s};const e=Object.keys(s).map((e=>Number(e))).filter((e=>0!==s[e]&&void 0!==s[e])).reduce(((e,t)=>(s[e]??0)>(s[t]??0)?e:t),-1),t=o||d||!s||a===p.tK.LOADING||l===p.tK.LOADING||u===p.tK.LOADING||c===p.tK.LOADING||m===p.tK.LOADING||v===p.tK.LOADING||x===p.tK.LOADING?void 0:{[r.FeeAmount.LOWEST]:a===p.tK.EXISTS?100*(s[r.FeeAmount.LOWEST]??0):void 0,[r.FeeAmount.LOW_200]:l===p.tK.EXISTS?100*(s[r.FeeAmount.LOW_200]??0):void 0,[r.FeeAmount.LOW_300]:u===p.tK.EXISTS?100*(s[r.FeeAmount.LOW_300]??0):void 0,[r.FeeAmount.LOW_400]:c===p.tK.EXISTS?100*(s[r.FeeAmount.LOW_400]??0):void 0,[r.FeeAmount.LOW]:m===p.tK.EXISTS?100*(s[r.FeeAmount.LOW]??0):void 0,[r.FeeAmount.MEDIUM]:v===p.tK.EXISTS?100*(s[r.FeeAmount.MEDIUM]??0):void 0,[r.FeeAmount.HIGH]:x===p.tK.EXISTS?100*(s[r.FeeAmount.HIGH]??0):void 0};return{isLoading:o,isError:!!d,distributions:t,largestUsageFeeTier:-1===e?void 0:e}}),[o,d,s,a,m,v,x,l,u,c])}var y=n(94109),D=n(61152),P=n(36664),M=n(94724),K=n(22953),$=n(45878),U=n(89081);const w=(0,P.ZP)(s.ZP)`
  border: 1px solid ${({theme:e})=>e.surface3};
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,D.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${n};
  }

  70% {
    box-shadow: 0 0 0 2px ${n};
  }

  100% {
    box-shadow: 0 0 0 0 ${n};
  }
`);var n}} 0.6s linear;
  align-self: center;
`,k=P.ZP.div`
  align-items: flex-start;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  width: 100%;
`;function C({disabled:e=!1,feeAmount:t,handleFeePoolSelect:n,currencyA:s,currencyB:u}){var m;const{chainId:v}=(0,T.m)(),A=(0,U.useTrace)(),{formatDelta:f}=(0,b.Gb)(),{isLoading:L,isError:O,largestUsageFeeTier:E,distributions:W}=j(s,u),_=(0,p.Oh)([[s,u,r.FeeAmount.LOWEST],[s,u,r.FeeAmount.LOW_200],[s,u,r.FeeAmount.LOW_300],[s,u,r.FeeAmount.LOW_400],[s,u,r.FeeAmount.LOW],[s,u,r.FeeAmount.MEDIUM],[s,u,r.FeeAmount.HIGH]]),D=(0,g.useMemo)((()=>_.reduce(((e,[t,n])=>{var i;return e={...e,[null===(i=n)||void 0===i?void 0:i.fee]:t}}),{[r.FeeAmount.LOWEST]:p.tK.NOT_EXISTS,[r.FeeAmount.LOW_200]:p.tK.NOT_EXISTS,[r.FeeAmount.LOW_300]:p.tK.NOT_EXISTS,[r.FeeAmount.LOW_400]:p.tK.NOT_EXISTS,[r.FeeAmount.LOW]:p.tK.NOT_EXISTS,[r.FeeAmount.MEDIUM]:p.tK.NOT_EXISTS,[r.FeeAmount.HIGH]:p.tK.NOT_EXISTS})),[_]),[P,C]=(0,g.useState)(!1),[N,R]=(0,g.useState)(!1),H=(0,y.Z)(t),z=(0,g.useRef)(!1),Z=(0,g.useCallback)((e=>{(0,$.sendAnalyticsEvent)(o.vp.SELECT_LIQUIDITY_POOL_FEE_TIER,{action:o.jI.MANUAL,...A}),n(e)}),[n,A]);return(0,g.useEffect)((()=>{t||L||O||(E?(C(!1),z.current=!0,(0,$.sendAnalyticsEvent)(o.vp.SELECT_LIQUIDITY_POOL_FEE_TIER,{action:o.jI.RECOMMENDED,...A}),n(E)):C(!0))}),[t,L,O,E,n,A]),(0,g.useEffect)((()=>{C(O)}),[O]),(0,g.useEffect)((()=>{t&&H!==t&&R(!0)}),[H,t]),(0,i.jsx)(a.Tz,{gap:"16px",children:(0,i.jsxs)(M.DD,{gap:"md",disabled:e,children:[(0,i.jsx)(w,{pulsing:N,onAnimationEnd:()=>R(!1),children:(0,i.jsxs)(S.m0,{children:[(0,i.jsx)(a.Tz,{id:"add-liquidity-selected-fee",children:t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(F.T.DeprecatedLabel,{className:"selected-fee-label",children:(0,i.jsx)(l.Trans,{i18nKey:"fee.tierExact",values:{fee:f(parseFloat(c[t].label))}})}),W&&(0,i.jsx)(K.xu,{style:{width:"fit-content",marginTop:"8px"},className:"selected-fee-percentage",children:(0,i.jsx)(I,{distributions:W,feeAmount:t,poolState:D[t]})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(F.T.DeprecatedLabel,{children:(0,i.jsx)(l.Trans,{i18nKey:"fee.tier"})}),(0,i.jsx)(F.T.DeprecatedMain,{fontWeight:485,fontSize:"12px",textAlign:"left",children:(0,i.jsx)(l.Trans,{i18nKey:"fee.percentEarned"})})]})}),(0,i.jsx)(d.Ux,{onClick:()=>C(!P),width:"auto",padding:"4px",$borderRadius:"6px",children:P?(0,i.jsx)(l.Trans,{i18nKey:"common.hide.button"}):(0,i.jsx)(l.Trans,{i18nKey:"common.edit.button"})})]})}),v&&P&&(0,i.jsx)(x.S,{value:null===(m=t)||void 0===m?void 0:m.toString(),orientation:"horizontal",justifyContent:"flex-start",flexWrap:"wrap",children:(0,i.jsx)(k,{children:[r.FeeAmount.LOWEST,r.FeeAmount.LOW_200,r.FeeAmount.LOW_300,r.FeeAmount.LOW_400,r.FeeAmount.LOW,r.FeeAmount.MEDIUM,r.FeeAmount.HIGH].map(((e,n)=>{const{supportedChains:o}=c[e];return o.includes(v)?(0,i.jsx)(h,{feeAmount:e,selected:e===t,onClick:()=>Z(e),distributions:W,poolState:D[e]},n):null}))})})]})})}},55750:(e,t,n)=>{n.d(t,{Z:()=>g});var i=n(92936),o=n(3115),r=n(32409),d=n(55478),s=n(87478),a=n(61152),l=n(36664),u=n(45779),c=n(57809),m=n(79784),p=n(56363),v=n(56250),x=n(8806),A=n(97994);const b=l.ZP.div`
  display: flex;
`,h=(0,l.ZP)(o.Ux)`
  border-radius: 8px;
  padding: 4px;
`,f=(0,l.ZP)(r.nq)`
  border-color: ${({active:e,theme:t})=>e&&t.deprecated_stateOverlayPressed};
  padding: 12px;
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,a.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${n};
  }

  70% {
    box-shadow: 0 0 0 2px ${n};
  }

  100% {
    box-shadow: 0 0 0 0 ${n};
  }
`);var n}} 0.8s linear;
`,F=(0,l.ZP)(s.II)`
  background-color: transparent;
  font-weight: 535;
  text-align: left;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 16px;
  `};
`,I=(0,l.ZP)(d.Tz)`
  width: 100%;
`,S=(0,v.z)(x.xv,{fontSize:12,fontWeight:"$medium",color:"$neutral2"}),T=(0,l.ZP)(p.T.DeprecatedWhite)`
  color: ${({theme:e,disabled:t})=>t?e.neutral2:e.neutral1} !important;
  display: flex;
`,L=({value:e,decrement:t,increment:n,decrementDisabled:o=!1,incrementDisabled:r=!1,width:s,locked:a,onUserInput:l,title:p,tokenA:v,tokenB:x})=>{const[L,O]=(0,u.useState)(!1),[E,g]=(0,u.useState)(""),[W,_]=(0,u.useState)(!1),[j,y]=(0,u.useState)(!1),D=(0,u.useCallback)((()=>{_(!1),O(!1),l(E)}),[E,l]),P=(0,u.useCallback)((()=>{_(!1),l(t())}),[t,l]),M=(0,u.useCallback)((()=>{_(!1),l(n())}),[n,l]);return(0,u.useEffect)((()=>{E===e||W||setTimeout((()=>{g(e),y(!0),setTimeout((function(){y(!1)}),1800)}),0)}),[E,W,e]),(0,i.jsx)(f,{pulsing:j,active:L,onFocus:()=>{_(!0),O(!0)},onBlur:D,width:s,children:(0,i.jsxs)(b,{children:[(0,i.jsxs)(I,{justify:"flex-start",children:[(0,i.jsx)(S,{fontSize:12,textAlign:"center",children:p}),(0,i.jsx)(F,{className:"rate-input-0",value:E,fontSize:"20px",disabled:a,onUserInput:e=>{g(e)}}),(0,i.jsx)(S,{fontSize:12,textAlign:"left",children:(0,i.jsx)(A.Trans,{i18nKey:"common.feesEarnedPerBase",values:{symbolA:x,symbolB:v}})})]}),(0,i.jsxs)(d.Tz,{gap:"8px",children:[!a&&(0,i.jsx)(h,{"data-testid":"increment-price-range",onClick:M,disabled:r,children:(0,i.jsx)(T,{disabled:r,fontSize:"12px",children:(0,i.jsx)(c.Z,{size:18})})}),!a&&(0,i.jsx)(h,{"data-testid":"decrement-price-range",onClick:P,disabled:o,children:(0,i.jsx)(T,{disabled:o,fontSize:"12px",children:(0,i.jsx)(m.Z,{size:18})})})]})]})})};var O=n(83792),E=n(74695);function g({priceLower:e,priceUpper:t,onLeftRangeInput:n,onRightRangeInput:o,getDecrementLower:r,getIncrementLower:d,getDecrementUpper:s,getIncrementUpper:a,currencyA:l,currencyB:u,feeAmount:c,ticksAtLimit:m}){var p,v,x,b,h,f,F,I,S,T,g,W;const _=null===(p=l??void 0)||void 0===p?void 0:p.wrapped,j=null===(v=u??void 0)||void 0===v?void 0:v.wrapped,y=_&&j&&_.sortsBefore(j),D=y?e:null===(x=t)||void 0===x?void 0:x.invert(),P=y?t:null===(b=e)||void 0===b?void 0:b.invert();return(0,i.jsxs)(O.BA,{gap:"md",children:[(0,i.jsx)(L,{value:m[y?E.Mb.LOWER:E.Mb.UPPER]?"0":(null===(h=D)||void 0===h?void 0:h.toSignificant(8))??"",onUserInput:n,decrement:y?r:a,increment:y?d:s,decrementDisabled:void 0===D||m[y?E.Mb.LOWER:E.Mb.UPPER],incrementDisabled:void 0===D||m[y?E.Mb.LOWER:E.Mb.UPPER],feeAmount:c,label:D?`${null===(f=u)||void 0===f?void 0:f.symbol}`:"-",title:(0,i.jsx)(A.Trans,{i18nKey:"common.lowPrice"}),tokenA:null===(F=l)||void 0===F?void 0:F.symbol,tokenB:null===(I=u)||void 0===I?void 0:I.symbol}),(0,i.jsx)(L,{value:m[y?E.Mb.UPPER:E.Mb.LOWER]?"\u221e":(null===(S=P)||void 0===S?void 0:S.toSignificant(8))??"",onUserInput:o,decrement:y?s:d,increment:y?a:r,incrementDisabled:void 0===P||m[y?E.Mb.UPPER:E.Mb.LOWER],decrementDisabled:void 0===P||m[y?E.Mb.UPPER:E.Mb.LOWER],feeAmount:c,label:P?`${null===(T=u)||void 0===T?void 0:T.symbol}`:"-",tokenA:null===(g=l)||void 0===g?void 0:g.symbol,tokenB:null===(W=u)||void 0===W?void 0:W.symbol,title:(0,i.jsx)(A.Trans,{i18nKey:"common.highPrice"})})]})}},11678:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(22722),o=n(29717),r=n(24055),d=n(70359),s=n(45779);function a(){var e,t;const n=(0,i.m)(),a=(0,o.c5)(),l=(0,s.useMemo)((()=>[n.address]),[n.address]),u=(0,r.Wk)(a,"isArgentWallet",l,d.DB);return Boolean(null===(t=u)||void 0===t||null===(e=t.result)||void 0===e?void 0:e[0])}},94724:(e,t,n)=>{n.d(t,{DD:()=>a,Fy:()=>l,SF:()=>c,Sx:()=>u,im:()=>d,zH:()=>s});var i=n(55478),o=n(87478),r=n(36664);const d=r.ZP.div`
  position: relative;
  padding: 26px 16px;
`,s=r.ZP.div`
  padding: 20px 8px 0px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin: 0 auto;
  `};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,a=(0,r.ZP)(i.Tz)`
  opacity: ${({disabled:e})=>e?"0.2":"1"};
  pointer-events: ${({disabled:e})=>e?"none":"initial"};
`,l=(0,r.ZP)(o.II)`
  background-color: ${({theme:e})=>e.surface1};
  text-align: left;
  font-size: 18px;
  width: 100%;
`,u=r.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;

  border-top: 1px solid ${({theme:e})=>e.surface3};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin-top: 0;
  `};
`,c=r.ZP.div`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    display: none;
  `};
`}}]);
//# sourceMappingURL=7131.a1a6ead2.chunk.js.map