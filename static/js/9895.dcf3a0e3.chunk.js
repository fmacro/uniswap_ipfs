"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9895],{76394:(e,n,i)=>{i.d(n,{q:()=>k,w:()=>$});var r=i(92936),t=i(83792),o=i(30340),l=i(22722),d=i(36664),s=i(61152),a=i(21926),c=i(43454),u=i(6282),m=i(22953),x=i(34946),p=i(2456),h=i(74695),v=i(56363),y=i(45003),g=i(97994);const f=d.ZP.div`
  ${y.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,b=(0,d.ZP)(c.rU)`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,j=(0,d.ZP)(v.T.H1Small)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,T=(0,d.ZP)(a.Z)`
  color: ${({theme:e})=>e.neutral1};
`;function k({origin:e}){return(0,r.jsx)(f,{children:(0,r.jsxs)(t.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,r.jsx)(c.rU,{to:e,children:(0,r.jsx)(T,{})}),(0,r.jsx)(j,{children:(0,r.jsx)(g.Trans,{i18nKey:"pool.import.v2"})})]})})}const w=(0,d.ZP)(v.T.H1Small)`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function $({adding:e,creating:n,autoSlippage:i,positionID:d,children:a}){var c;const{chainId:v}=(0,l.m)(),y=(0,s.useTheme)(),j=(0,x.T)(),{state:k}=(0,u.TH)(),$=(0,u.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(d?`/${d.toString()}`:""),z=(null===(c=k)||void 0===c?void 0:c.from)??$;return(0,r.jsx)(f,{children:(0,r.jsxs)(t.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,r.jsx)(b,{to:z,onClick:()=>{e&&(j((0,p.dA)()),j((0,h.dA)()))},flex:a?"1":void 0,children:(0,r.jsx)(T,{stroke:y.neutral2})}),(0,r.jsx)(w,{$center:!a,children:n?(0,r.jsx)(g.Trans,{i18nKey:"pool.create.pair"}):e?(0,r.jsx)(g.Trans,{i18nKey:"common.addLiquidity"}):(0,r.jsx)(g.Trans,{i18nKey:"pool.removeLiquidity"})}),a&&(0,r.jsx)(m.xu,{style:{marginRight:".5rem"},children:a}),(0,r.jsx)(o.Z,{autoSlippage:i,chainId:v,hideRoutingSettings:!0})]})})}},83109:(e,n,i)=>{i.d(n,{Z:()=>d});var r=i(92936),t=i(36664),o=i(45779);const l=t.ZP.input`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: ${({theme:e})=>e.accent1};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow:
        0px 0px 1px rgba(0, 0, 0, 0.1),
        0px 4px 8px rgba(0, 0, 0, 0.08),
        0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow:
        0px 0px 1px rgba(0, 0, 0, 0.1),
        0px 4px 8px rgba(0, 0, 0, 0.08),
        0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow:
        0px 0px 1px rgba(0, 0, 0, 0.1),
        0px 4px 8px rgba(0, 0, 0, 0.08),
        0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.accent1}, ${({theme:e})=>e.accent1});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.surface4}, ${({theme:e})=>e.surface2});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:e})=>e.surface4};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:e})=>e.surface4};
  }
  &::-ms-fill-upper {
    background: ${({theme:e})=>e.surface2};
  }
`;function d({value:e,onChange:n,min:i=0,step:t=1,max:d=100,size:s=28,...a}){const c=(0,o.useCallback)((e=>{n(parseInt(e.target.value))}),[n]);return(0,r.jsx)(l,{size:s,...a,type:"range",value:e,style:{padding:"15px 0"},onChange:c,"aria-labelledby":"input slider",step:t,min:i,max:d})}},44609:(e,n,i)=>{i.d(n,{SS:()=>x,sq:()=>a,MN:()=>c,RF:()=>u,uO:()=>m,I8:()=>s});const r=i.p+"static/media/big_unicorn.595c49962d708abbaaec.png",t=i.p+"static/media/noise.3c7efafc83614205bd1a.png",o=i.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var l=i(55478),d=i(36664);const s=(0,d.ZP)(l.Tz)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,a=d.ZP.span`
  background: url(${r});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,c=d.ZP.span`
  background: url(${o});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,u=d.ZP.span`
  background: url(${t});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,m=(0,d.ZP)(l.Tz)`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,x=d.ZP.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},87995:(e,n,i)=>{i.d(n,{Z:()=>t});var r=i(45779);function t(e,n,i=100){const[t,o]=(0,r.useState)((()=>e)),l=(0,r.useRef)(),d=(0,r.useCallback)((e=>{o(e),l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{n(e),l.current=void 0}),i)}),[i,n]);return(0,r.useEffect)((()=>{l.current&&(clearTimeout(l.current),l.current=void 0),o(e)}),[e]),[t,d]}},11712:(e,n,i)=>{i.d(n,{Z:()=>d,e:()=>l});var r=i(92936),t=i(36664),o=i(54884);const l=t.ZP.main`
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
`;function d(e){return(0,r.jsx)(l,{...e})}},19188:(e,n,i)=>{i.r(n),i.d(n,{default:()=>ce});var r=i(92936),t=i(11604),o=i(5985),l=i(76078),d=i(21651),s=i(42704),a=i(3115),c=i(32409),u=i(87710),m=i(80187),x=i(23652),p=i(76394),h=i(83109),v=i(44842),y=i(55478),g=i(83792),f=i(44609),b=i(73397),j=i(22722),T=i(29717),k=i(87995),w=i(74015),$=i(64063),z=i(72976),S=i(17125),C=i(44958),q=i(11712),P=i(32507),Z=i(36664),A=i(83639),I=i(22953);const L=Z.ZP.div`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `};
`,R=(0,Z.ZP)(A.ER)`
  font-size: 12px;
`,W=(0,Z.ZP)(I.xv)`
  font-size: 40px;
  font-weight: 535;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `};
`;var _=i(45779),E=i(6282),D=i(69532),K=i(97704),V=i(78087),O=i(25277),M=i(34946),U=i(97994),N=i(88362);function F(){return(0,M.C)((e=>e.burnV3))}var H=i(90379),B=i(67153),G=i(16138),Q=i(56363),Y=i(8806),J=i(1596),X=i(40834),ee=i(45878),ne=i(30102),ie=i(89081),re=i(58730),te=i(85209),oe=i(88671),le=i(64972);function de(e,n,i,r,t,o,l){try{var d=e[o](l),s=d.value}catch(a){return void i(a)}d.done?n(s):Promise.resolve(s).then(r,t)}function se(e){return function(){var n=this,i=arguments;return new Promise((function(r,t){var o=e.apply(n,i);function l(e){de(o,r,t,l,d,"next",e)}function d(e){de(o,r,t,l,d,"throw",e)}l(void 0)}))}}const ae=new l.Percent(50,1e4);function ce(){const{chainId:e}=(0,j.m)(),n=(0,b.Nb)(e),{tokenId:i}=(0,E.UO)(),o=(0,E.TH)(),l=(0,_.useMemo)((()=>{try{return t.O$.from(i)}catch{return null}}),[i]),{position:d,loading:s}=(0,S.n)(l??void 0);return null===l||l.eq(0)?(0,r.jsx)(E.Fg,{to:{...o,pathname:"/pools"},replace:!0}):n&&(s||d)?(0,r.jsx)(ue,{tokenId:l}):(0,r.jsx)(P.PositionPageUnsupportedContent,{})}function ue({tokenId:e}){var n,i,t,b,P,Z,A,I,E,de,ce,ue,me,xe,pe,he,ve,ye,ge,fe,be,je,Te,ke,we,$e,ze,Se,Ce,qe,Pe,Ze;const{position:Ae}=(0,S.n)(e),Ie=(0,j.m)(),Le=(0,w.z)(),Re=(0,ie.useTrace)(),{formatCurrencyAmount:We}=(0,le.Gb)(),[_e,Ee]=(0,_.useState)(!1),De=(0,C.Z)(Ie.chainId).wrapped.symbol,{percent:Ke}=F(),{position:Ve,liquidityPercentage:Oe,liquidityValue0:Me,liquidityValue1:Ue,feeValue0:Ne,feeValue1:Fe,outOfRange:He,error:Be}=function(e,n=!1){var i,t,o,s;const a=(0,j.m)(),{percent:c}=F(),u=(0,K.dQ)(null===(i=e)||void 0===i?void 0:i.token0),m=(0,K.dQ)(null===(t=e)||void 0===t?void 0:t.token1),[,x]=(0,$.AI)(u??void 0,m??void 0,null===(o=e)||void 0===o?void 0:o.fee),p=(0,_.useMemo)((()=>{var n,i,r;return x&&(null===(n=e)||void 0===n?void 0:n.liquidity)&&"number"===typeof(null===(i=e)||void 0===i?void 0:i.tickLower)&&"number"===typeof(null===(r=e)||void 0===r?void 0:r.tickUpper)?new d.Position({pool:x,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0}),[x,e]),h=new l.Percent(c,100),v=p?h.multiply(p.amount0.quotient).quotient:void 0,y=p?h.multiply(p.amount1.quotient).quotient:void 0,g=u&&v?l.CurrencyAmount.fromRawAmount(n?u:(0,N.B)(u),v):void 0,f=m&&y?l.CurrencyAmount.fromRawAmount(n?m:(0,N.B)(m),y):void 0,[b,T]=(0,V.t)(x??void 0,null===(s=e)||void 0===s?void 0:s.tokenId,n),k=!(!x||!e)&&(x.tickCurrent<e.tickLower||x.tickCurrent>e.tickUpper);let w;return a.isConnected||(w=(0,r.jsx)(D.T,{})),0===c&&(w=w??(0,r.jsx)(U.Trans,{i18nKey:"burn.input.enterAPercent.error"})),{position:p,liquidityPercentage:h,liquidityValue0:g,liquidityValue1:f,feeValue0:b,feeValue1:T,outOfRange:k,error:w}}(Ae,_e),{onPercentSelect:Ge}=function(){const e=(0,M.T)();return{onPercentSelect:(0,_.useCallback)((n=>{e((0,O.o)({percent:n}))}),[e])}}(),Qe=null===(i=Ae)||void 0===i||null===(n=i.liquidity)||void 0===n?void 0:n.eq(0),[Ye,Je]=(0,k.Z)(Ke,Ge),Xe=(0,z.n)(),en=(0,G.eq)(ae),[nn,rn]=(0,_.useState)(!1),[tn,on]=(0,_.useState)(!1),[ln,dn]=(0,_.useState)(),sn=(0,H.h7)(),an=(0,T.GL)(),cn=(0,_.useCallback)(se((function*(){if(on(!0),!an||!Me||!Ue||"connected"!==Ie.status||!Ve||!Oe||!Le)return;const n=yield Xe();if(!n)throw new Error("could not get deadline");const{calldata:i,value:r}=d.NonfungiblePositionManager.removeCallParameters(Ve,{tokenId:e.toString(),liquidityPercentage:Oe,slippageTolerance:en,deadline:n.toString(),collectOptions:{expectedCurrencyOwed0:Ne??l.CurrencyAmount.fromRawAmount(Me.currency,0),expectedCurrencyOwed1:Fe??l.CurrencyAmount.fromRawAmount(Ue.currency,0),recipient:Ie.address}}),t={to:an.address,data:i,value:r},s=yield Le.getChainId();if(Ie.chainId!==s)throw new oe.CJ;Le.estimateGas(t).then((e=>{const n={...t,gasLimit:(0,re.y)(e)};return Le.sendTransaction(n).then((e=>{var n;(0,ee.sendAnalyticsEvent)(o.vp.REMOVE_LIQUIDITY_SUBMITTED,{source:o.GM.V3,label:[Me.currency.symbol,Ue.currency.symbol].join("/"),...Re,type:o.GM.V3,transaction_hash:e.hash,fee_tier:null===(n=Ae)||void 0===n?void 0:n.fee,pool_address:Ie.chainId&&Ae?$.WQ.getPoolAddress(l.V3_CORE_FACTORY_ADDRESSES[Ie.chainId],Ve.amount0.currency,Ve.amount1.currency,Ae.fee,Ie.chainId):void 0}),dn(e.hash),on(!1),sn(e,{type:B.i.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,te.H)(Me.currency),quoteCurrencyId:(0,te.H)(Ue.currency),expectedAmountBaseRaw:Me.quotient.toString(),expectedAmountQuoteRaw:Ue.quotient.toString()})}))})).catch((e=>{on(!1),ne.logger.error(e,{tags:{file:"RemoveLiquidity/V3",function:"burn"}})}))})),[an,Me,Ue,Ie.status,Ie.address,Ie.chainId,Ve,Oe,Le,Xe,e,en,Ne,Fe,Re,Ae,sn]),un=(0,_.useCallback)((()=>{rn(!1),ln&&Je(0),on(!1),dn("")}),[Je,ln]),mn=(0,r.jsx)(U.Trans,{i18nKey:"removeLiquidity.removing",values:{amt1:null===(t=Me)||void 0===t?void 0:t.toSignificant(6),symbol1:null===(P=Me)||void 0===P||null===(b=P.currency)||void 0===b?void 0:b.symbol,amt2:null===(Z=Ue)||void 0===Z?void 0:Z.toSignificant(6),symbol2:null===(I=Ue)||void 0===I||null===(A=I.currency)||void 0===A?void 0:A.symbol}});function xn(){var e,n,i,t,o,l,d,s,c,u,x,p,h,v;return(0,r.jsxs)(y.Tz,{gap:"sm",style:{padding:"16px"},children:[(0,r.jsxs)(g.m0,{align:"flex-end",children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",children:(0,r.jsx)(U.Trans,{i18nKey:"removeLiquidity.pooled",values:{symbol:null===(n=Me)||void 0===n||null===(e=n.currency)||void 0===e?void 0:e.symbol}})}),(0,r.jsxs)(g.DA,{children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Me&&We({amount:Me})}),(0,r.jsx)(m.Z,{size:20,style:{marginLeft:"8px"},currency:null===(i=Me)||void 0===i?void 0:i.currency})]})]}),(0,r.jsxs)(g.m0,{align:"flex-end",children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",children:(0,r.jsx)(U.Trans,{i18nKey:"removeLiquidity.pooled",values:{symbol:null===(o=Ue)||void 0===o||null===(t=o.currency)||void 0===t?void 0:t.symbol}})}),(0,r.jsxs)(g.DA,{children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ue&&We({amount:Ue})}),(0,r.jsx)(m.Z,{size:20,style:{marginLeft:"8px"},currency:null===(l=Ue)||void 0===l?void 0:l.currency})]})]}),(null===(d=Ne)||void 0===d?void 0:d.greaterThan(0))||(null===(s=Fe)||void 0===s?void 0:s.greaterThan(0))?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Y.xv,{fontSize:12,color:"$neutral2",textAlign:"left",pt:8,children:(0,r.jsx)(U.Trans,{i18nKey:"removeLiquidity.collectFees"})}),(0,r.jsxs)(g.m0,{children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",children:(0,r.jsx)(U.Trans,{i18nKey:"common.feesEarned.label",values:{symbol:null===(u=Ne)||void 0===u||null===(c=u.currency)||void 0===c?void 0:c.symbol}})}),(0,r.jsxs)(g.DA,{children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ne&&We({amount:Ne})}),(0,r.jsx)(m.Z,{size:20,style:{marginLeft:"8px"},currency:null===(x=Ne)||void 0===x?void 0:x.currency})]})]}),(0,r.jsxs)(g.m0,{children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",children:(0,r.jsx)(U.Trans,{i18nKey:"common.feesEarned.label",values:{symbol:null===(h=Fe)||void 0===h||null===(p=h.currency)||void 0===p?void 0:p.symbol}})}),(0,r.jsxs)(g.DA,{children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Fe&&We({amount:Fe})}),(0,r.jsx)(m.Z,{size:20,style:{marginLeft:"8px"},currency:null===(v=Fe)||void 0===v?void 0:v.currency})]})]})]}):null,(0,r.jsx)(a.DF,{mt:"16px",onClick:cn,children:(0,r.jsx)(U.Trans,{i18nKey:"common.remove.label"})})]})}const pn=Boolean((null===(E=Me)||void 0===E?void 0:E.currency)&&(null===(de=Ue)||void 0===de?void 0:de.currency)&&(Me.currency.isNative||Ue.currency.isNative||(null===(ce=X.WRAPPED_NATIVE_CURRENCY[Me.currency.chainId])||void 0===ce?void 0:ce.equals(Me.currency.wrapped))||(null===(ue=X.WRAPPED_NATIVE_CURRENCY[Ue.currency.chainId])||void 0===ue?void 0:ue.equals(Ue.currency.wrapped))));return(0,r.jsxs)(y.Tz,{children:[(0,r.jsx)(v.Z,{isOpen:nn,onDismiss:un,attemptingTxn:tn,hash:ln??"",reviewContent:()=>(0,r.jsx)(v.p,{title:(0,r.jsx)(U.Trans,{i18nKey:"pool.removeLiquidity"}),onDismiss:un,topContent:xn}),pendingText:mn}),(0,r.jsxs)(q.Z,{$maxWidth:"unset",children:[(0,r.jsx)(p.w,{creating:!1,adding:!1,autoSlippage:ae}),(0,r.jsx)(L,{children:Ae?(0,r.jsxs)(y.Tz,{gap:"lg",children:[(0,r.jsxs)(g.m0,{children:[(0,r.jsxs)(g.DA,{children:[(0,r.jsx)(x.ge,{currencies:[null===(me=Me)||void 0===me?void 0:me.currency,null===(xe=Ue)||void 0===xe?void 0:xe.currency],size:20}),(0,r.jsx)(Q.T.DeprecatedLabel,{ml:"10px",fontSize:"20px",id:"remove-liquidity-tokens",children:`${null===(he=Me)||void 0===he||null===(pe=he.currency)||void 0===pe?void 0:pe.symbol}/${null===(ye=Ue)||void 0===ye||null===(ve=ye.currency)||void 0===ve?void 0:ve.symbol}`})]}),(0,r.jsx)(s.Z,{removed:Qe,inRange:!He})]}),(0,r.jsx)(c.hl,{children:(0,r.jsxs)(y.Tz,{gap:"md",children:[(0,r.jsx)(Q.T.DeprecatedMain,{fontWeight:485,children:(0,r.jsx)(U.Trans,{i18nKey:"common.amount.label"})}),(0,r.jsxs)(g.m0,{children:[(0,r.jsxs)(W,{children:[Ye,"%"]}),(0,r.jsxs)(g.BA,{gap:"4px",justify:"flex-end",children:[(0,r.jsx)(R,{onClick:()=>Ge(25),width:"20%",children:"25%"}),(0,r.jsx)(R,{onClick:()=>Ge(50),width:"20%",children:"50%"}),(0,r.jsx)(R,{onClick:()=>Ge(75),width:"20%",children:"75%"}),(0,r.jsx)(R,{onClick:()=>Ge(100),width:"20%",children:(0,r.jsx)(U.Trans,{i18nKey:"common.max"})})]})]}),(0,r.jsx)(h.Z,{value:Ye,onChange:Je})]})}),(0,r.jsx)(c.hl,{children:(0,r.jsxs)(y.Tz,{gap:"md",children:[(0,r.jsxs)(g.m0,{children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",id:"remove-pooled-tokena-symbol",children:(0,r.jsx)(U.Trans,{i18nKey:"removeLiquidity.pooled",values:{symbol:null===(fe=Me)||void 0===fe||null===(ge=fe.currency)||void 0===ge?void 0:ge.symbol}})}),(0,r.jsxs)(g.DA,{children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Me&&We({amount:Me})}),(0,r.jsx)(m.Z,{size:20,style:{marginLeft:"8px"},currency:null===(be=Me)||void 0===be?void 0:be.currency})]})]}),(0,r.jsxs)(g.m0,{children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",id:"remove-pooled-tokenb-symbol",children:(0,r.jsx)(U.Trans,{i18nKey:"removeLiquidity.pooled",values:{symbol:null===(Te=Ue)||void 0===Te||null===(je=Te.currency)||void 0===je?void 0:je.symbol}})}),(0,r.jsxs)(g.DA,{children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ue&&We({amount:Ue})}),(0,r.jsx)(m.Z,{size:20,style:{marginLeft:"8px"},currency:null===(ke=Ue)||void 0===ke?void 0:ke.currency})]})]}),(null===(we=Ne)||void 0===we?void 0:we.greaterThan(0))||(null===($e=Fe)||void 0===$e?void 0:$e.greaterThan(0))?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.SS,{}),(0,r.jsxs)(g.m0,{children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",children:(0,r.jsx)(U.Trans,{i18nKey:"common.feesEarned.label",values:{symbol:null===(Se=Ne)||void 0===Se||null===(ze=Se.currency)||void 0===ze?void 0:ze.symbol}})}),(0,r.jsxs)(g.DA,{children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ne&&We({amount:Ne})}),(0,r.jsx)(m.Z,{size:20,style:{marginLeft:"8px"},currency:null===(Ce=Ne)||void 0===Ce?void 0:Ce.currency})]})]}),(0,r.jsxs)(g.m0,{children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",children:(0,r.jsx)(U.Trans,{i18nKey:"common.feesEarned.label",values:{symbol:null===(Pe=Fe)||void 0===Pe||null===(qe=Pe.currency)||void 0===qe?void 0:qe.symbol}})}),(0,r.jsxs)(g.DA,{children:[(0,r.jsx)(Y.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Fe&&We({amount:Fe})}),(0,r.jsx)(m.Z,{size:20,style:{marginLeft:"8px"},currency:null===(Ze=Fe)||void 0===Ze?void 0:Ze.currency})]})]})]}):null]})}),pn&&(0,r.jsxs)(g.m0,{children:[(0,r.jsx)(Q.T.DeprecatedMain,{children:(0,r.jsx)(U.Trans,{i18nKey:"pool.collectAs",values:{nativeWrappedSymbol:De}})}),(0,r.jsx)(J.r,{id:"receive-as-weth",checked:_e,onCheckedChange:()=>Ee((e=>!e)),variant:"branded"})]}),(0,r.jsx)("div",{style:{display:"flex"},children:(0,r.jsx)(y.Tz,{gap:"md",style:{flex:"1"},children:(0,r.jsx)(a.gn,{confirmed:!1,disabled:Qe||0===Ke||!Me,onClick:()=>rn(!0),children:Qe?(0,r.jsx)(U.Trans,{i18nKey:"common.closed"}):Be??(0,r.jsx)(U.Trans,{i18nKey:"common.remove.label"})})})})]}):(0,r.jsx)(u.ZP,{})})]})]})}}}]);
//# sourceMappingURL=9895.dcf3a0e3.chunk.js.map