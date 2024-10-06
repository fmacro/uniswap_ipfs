"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3672],{89045:(e,n,i)=>{i.d(n,{WP:()=>R,ZP:()=>K,rG:()=>I});var t=i(92936),r=i(76078),o=i(12972),s=i(3115),d=i(32409),a=i(80187),l=i(23652),c=i(55478),x=i(83792),u=i(44609),h=i(61808),p=i(73397),g=i(22407),j=i(22722),f=i(54971),m=i(14366),v=i(61592),y=i.n(v),b=i(36664),S=i(36399),T=i(45779),k=i(37525),z=i(86082),A=i(43454),w=i(22953),q=i(97047),$=i(56363),D=i(77134),W=i(97994),F=i(85209),L=i(88362);const I=(0,b.ZP)(x.m0)`
  height: 24px;
`,P=(0,b.ZP)(d.hl)`
  border: none;
  background: ${({theme:e,bgColor:n})=>`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,S.DZ)(.8,n)} 0%, ${e.surface2} 100%) `};
  position: relative;
  overflow: hidden;
`;function R({pair:e,showUnwrapped:n=!1,border:i}){var o,s;const a=(0,j.m)(),u=n?e.token0:(0,L.B)(e.token0),h=n?e.token1:(0,L.B)(e.token1),[p,g]=(0,T.useState)(!1),f=(0,q.mM)(a.address,e.liquidityToken),v=(0,m.A)(e.liquidityToken),b=f&&v&&y().greaterThanOrEqual(v.quotient,f.quotient)?new r.Percent(f.quotient,v.quotient):void 0,[S,k]=e&&v&&f&&y().greaterThanOrEqual(v.quotient,f.quotient)?[e.getLiquidityValue(e.token0,v,f,!1),e.getLiquidityValue(e.token1,v,f,!1)]:[void 0,void 0];return(0,t.jsx)(t.Fragment,{children:f&&y().greaterThan(f.quotient,y().BigInt(0))?(0,t.jsx)(d.rd,{border:i,children:(0,t.jsxs)(c.Tz,{gap:"md",children:[(0,t.jsx)(I,{children:(0,t.jsx)(x.DA,{children:(0,t.jsx)(w.xv,{fontWeight:535,fontSize:16,children:(0,t.jsx)(W.Trans,{i18nKey:"position.your"})})})}),(0,t.jsxs)(I,{onClick:()=>g(!p),children:[(0,t.jsxs)(x.DA,{children:[(0,t.jsx)(l.ge,{currencies:[u,h],size:20}),(0,t.jsxs)(w.xv,{fontWeight:535,fontSize:20,children:[u.symbol,"/",h.symbol]})]}),(0,t.jsx)(x.DA,{children:(0,t.jsx)(w.xv,{fontWeight:535,fontSize:20,children:f?f.toSignificant(4):"-"})})]}),(0,t.jsxs)(c.Tz,{gap:"4px",children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(w.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(W.Trans,{i18nKey:"pool.share.label"})}),(0,t.jsx)(w.xv,{fontSize:16,fontWeight:535,children:b?b.toFixed(6)+"%":"-"})]}),(0,t.jsxs)(I,{children:[(0,t.jsxs)(w.xv,{fontSize:16,fontWeight:535,children:[u.symbol,":"]}),S?(0,t.jsx)(x.DA,{children:(0,t.jsx)(w.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(o=S)||void 0===o?void 0:o.toSignificant(6)})}):"-"]}),(0,t.jsxs)(I,{children:[(0,t.jsxs)(w.xv,{fontSize:16,fontWeight:535,children:[h.symbol,":"]}),k?(0,t.jsx)(x.DA,{children:(0,t.jsx)(w.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(s=k)||void 0===s?void 0:s.toSignificant(6)})}):"-"]})]})]})}):(0,t.jsx)(d.hl,{children:(0,t.jsxs)($.T.DeprecatedSubHeader,{style:{textAlign:"center"},children:[(0,t.jsx)("span",{role:"img","aria-label":"wizard-icon",children:"\u2b50\ufe0f"})," ",(0,t.jsx)(W.Trans,{i18nKey:"pool.earnFees"})," "]})})})}function K({pair:e,border:n,stakedBalance:i}){var d,v,b,S;const $=(0,j.m)(),R=(0,L.B)(e.token0),K=(0,L.B)(e.token1),[Z,_]=(0,T.useState)(!1),E=(0,q.mM)($.address,e.liquidityToken),O=(0,m.A)(e.liquidityToken),C=i?null===(d=E)||void 0===d?void 0:d.add(i):E,V=C&&O&&y().greaterThanOrEqual(O.quotient,C.quotient)?new r.Percent(C.quotient,O.quotient):void 0,[B,M]=e&&O&&C&&y().greaterThanOrEqual(O.quotient,C.quotient)?[e.getLiquidityValue(e.token0,O,C,!1),e.getLiquidityValue(e.token1,O,C,!1)]:[void 0,void 0],H=(0,f.r)(null===(v=e)||void 0===v?void 0:v.token0);return(0,t.jsxs)(P,{border:n,bgColor:H,children:[(0,t.jsx)(u.RF,{}),(0,t.jsxs)(c.Tz,{gap:"md",children:[(0,t.jsxs)(I,{children:[(0,t.jsxs)(x.BA,{gap:"8px",style:{marginLeft:"8px"},children:[(0,t.jsx)(l.ge,{currencies:[R,K],size:20}),(0,t.jsx)(w.xv,{fontWeight:535,fontSize:20,children:R&&K?`${R.symbol}/${K.symbol}`:(0,t.jsx)(h.bb,{children:(0,t.jsx)(W.Trans,{i18nKey:"common.loading"})})})]}),(0,t.jsx)(x.DA,{gap:"8px",style:{marginRight:"4px"},children:(0,t.jsx)(s.qL,{padding:"6px 8px",$borderRadius:"12px",width:"100%",onClick:()=>_(!Z),children:Z?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(W.Trans,{i18nKey:"common.manage"}),(0,t.jsx)(k.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(W.Trans,{i18nKey:"common.manage"}),(0,t.jsx)(z.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]})})})]}),Z&&(0,t.jsxs)(c.Tz,{gap:"sm",children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(w.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(W.Trans,{i18nKey:"pool.totalTokens"})}),(0,t.jsx)(w.xv,{fontSize:16,fontWeight:535,children:C?C.toSignificant(4):"-"})]}),i&&(0,t.jsxs)(I,{children:[(0,t.jsx)(w.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(W.Trans,{i18nKey:"pool.rewardsPool.label"})}),(0,t.jsx)(w.xv,{fontSize:16,fontWeight:535,children:i.toSignificant(4)})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(x.DA,{children:(0,t.jsx)(w.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(W.Trans,{i18nKey:"pool.pooled",values:{sym:R.symbol}})})}),B?(0,t.jsxs)(x.DA,{children:[(0,t.jsx)(w.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(b=B)||void 0===b?void 0:b.toSignificant(6)}),(0,t.jsx)(a.Z,{size:20,style:{marginLeft:"8px"},currency:R})]}):"-"]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(x.DA,{children:(0,t.jsx)(w.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(W.Trans,{i18nKey:"pool.pooled",values:{sym:K.symbol}})})}),M?(0,t.jsxs)(x.DA,{children:[(0,t.jsx)(w.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(S=M)||void 0===S?void 0:S.toSignificant(6)}),(0,t.jsx)(a.Z,{size:20,style:{marginLeft:"8px"},currency:K})]}):"-"]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(w.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(W.Trans,{i18nKey:"pool.share.label"})}),(0,t.jsx)(w.xv,{fontSize:16,fontWeight:535,children:V?`${"0.00"===V.toFixed(2)?"<0.01":V.toFixed(2)}%`:"-"})]}),(0,t.jsx)(s.PL,{padding:"8px",$borderRadius:"8px",children:(0,t.jsxs)(D.m_,{style:{width:"100%",textAlign:"center"},to:`/explore/pools/${(0,p.tq)({chainId:e.chainId,withFallback:!0}).toLowerCase()}/${o.Pair.getAddress(e.token0,e.token1)}`,children:[(0,t.jsx)(W.Trans,{i18nKey:"pool.accruedFees"}),(0,t.jsx)("span",{style:{fontSize:"11px"},children:"\u2197"})]})}),E&&y().greaterThan(E.quotient,g.iV)&&(0,t.jsxs)(x.m0,{marginTop:"10px",children:[(0,t.jsx)(s.DF,{padding:"8px",$borderRadius:"8px",as:A.rU,to:`/migrate/v2/${e.liquidityToken.address}`,width:"32%",children:(0,t.jsx)(W.Trans,{i18nKey:"common.migrate"})}),(0,t.jsx)(s.DF,{padding:"8px",$borderRadius:"8px",as:A.rU,to:`/add/v2/${(0,F.H)(R)}/${(0,F.H)(K)}`,width:"32%",children:(0,t.jsx)(W.Trans,{i18nKey:"common.add.label"})}),(0,t.jsx)(s.DF,{padding:"8px",$borderRadius:"8px",as:A.rU,width:"32%",to:`/remove/v2/${(0,F.H)(R)}/${(0,F.H)(K)}`,children:(0,t.jsx)(W.Trans,{i18nKey:"common.remove.label"})})]}),i&&y().greaterThan(i.quotient,g.iV)&&(0,t.jsx)(s.DF,{padding:"8px",$borderRadius:"8px",as:A.rU,to:`/uni/${(0,F.H)(R)}/${(0,F.H)(K)}`,width:"100%",children:(0,t.jsx)(W.Trans,{i18nKey:"pool.manageRewardsLiquidity"})})]})]})]})}},17256:(e,n,i)=>{i.d(n,{A:()=>l});var t=i(92936),r=i(55478),o=i(36664),s=i(56363),d=i(97994);const a=o.ZP.div`
  border: 1px solid ${({theme:e})=>e.neutral3};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function l(){return(0,t.jsx)(r.Tz,{gap:"lg",justify:"center",children:(0,t.jsx)(r.Tz,{gap:"md",style:{width:"100%"},children:(0,t.jsx)(a,{children:(0,t.jsx)(s.T.BodySecondary,{color:"neutral2",textAlign:"center",children:(0,t.jsx)(d.Trans,{i18nKey:"v2.notAvailable"})})})})})}},44609:(e,n,i)=>{i.d(n,{SS:()=>h,sq:()=>l,MN:()=>c,RF:()=>x,uO:()=>u,I8:()=>a});const t=i.p+"static/media/big_unicorn.595c49962d708abbaaec.png",r=i.p+"static/media/noise.3c7efafc83614205bd1a.png",o=i.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var s=i(55478),d=i(36664);const a=(0,d.ZP)(s.Tz)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,l=d.ZP.span`
  background: url(${t});
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
`,x=d.ZP.span`
  background: url(${r});
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
`,u=(0,d.ZP)(s.Tz)`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,h=d.ZP.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},42183:(e,n,i)=>{i.d(n,{G:()=>d});var t=i(73397),r=i(22722),o=i(95625),s=i(39063);function d(){const{chainId:e}=(0,r.m)(),n=(0,s.useFeatureFlag)(o.FeatureFlags.V2Everywhere);return e&&n&&t.Ep.includes(e)}},14366:(e,n,i)=>{i.d(n,{A:()=>d});var t=i(76078),r=i(29717),o=i(24055),s=i(45779);function d(e){var n,i,d,a;const l=(0,r.Ib)((null===(n=e)||void 0===n?void 0:n.isToken)?e.address:void 0,!1),c=null===(a=(0,o.Wk)(l,"totalSupply"))||void 0===a||null===(d=a.result)||void 0===d||null===(i=d[0])||void 0===i?void 0:i.toString();return(0,s.useMemo)((()=>{var n;return(null===(n=e)||void 0===n?void 0:n.isToken)&&c?t.CurrencyAmount.fromRawAmount(e,c):void 0}),[e,c])}},99300:(e,n,i)=>{i.d(n,{OY:()=>x,Oo:()=>u,_G:()=>c});var t=i(51371),r=i(76078),o=i(40148),s=i(12972),d=i(24055),a=i(45779);const l=new t.vU(o.abi);var c=(e=>(e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID",e))(c||{});function x(e){const n=(0,a.useMemo)((()=>e.map((([e,n])=>{var i,t;return[null===(i=e)||void 0===i?void 0:i.wrapped,null===(t=n)||void 0===t?void 0:t.wrapped]}))),[e]),i=(0,a.useMemo)((()=>n.map((([e,n])=>e&&n&&e.chainId===n.chainId&&!e.equals(n)&&r.V2_FACTORY_ADDRESSES[e.chainId]?(0,s.computePairAddress)({factoryAddress:r.V2_FACTORY_ADDRESSES[e.chainId],tokenA:e,tokenB:n}):void 0))),[n]),t=(0,d._Y)(i,l,"getReserves");return(0,a.useMemo)((()=>t.map(((e,i)=>{const{result:t,loading:o}=e,d=n[i][0],a=n[i][1];if(o)return[0,null];if(!d||!a||d.equals(a))return[3,null];if(!t)return[1,null];const{reserve0:l,reserve1:c}=t,[x,u]=d.sortsBefore(a)?[d,a]:[a,d];return[2,new s.Pair(r.CurrencyAmount.fromRawAmount(x,l.toString()),r.CurrencyAmount.fromRawAmount(u,c.toString()))]}))),[t,n])}function u(e,n){return x((0,a.useMemo)((()=>[[e,n]]),[e,n]))[0]}}}]);
//# sourceMappingURL=3672.089337e6.chunk.js.map