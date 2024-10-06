"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[564],{10404:(n,e,r)=>{r.d(e,{Z:()=>u});var o=r(45779),t=r(68090),s=r.n(t);function i(){return i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},i.apply(this,arguments)}function a(n,e){if(null==n)return{};var r,o,t=function(n,e){if(null==n)return{};var r,o,t={},s=Object.keys(n);for(o=0;o<s.length;o++)r=s[o],e.indexOf(r)>=0||(t[r]=n[r]);return t}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(o=0;o<s.length;o++)r=s[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var c=(0,o.forwardRef)((function(n,e){var r=n.color,t=void 0===r?"currentColor":r,s=n.size,c=void 0===s?24:s,u=a(n,["color","size"]);return o.createElement("svg",i({ref:e,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),o.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),o.createElement("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"}))}));c.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},c.displayName="AlertCircle";const u=c},10109:(n,e,r)=>{r.d(e,{Z:()=>o});r(45779);const o=r.p+"static/media/blue-loader.249140daf016adc355cfb029ec67de19.svg"},44842:(n,e,r)=>{r.d(e,{p:()=>An,Z:()=>Cn});var o=r(92936),t=r(45386),s=r(10109),i=r(76078),a=r(68707),c=r(97704),u=r(45389),l=r(61592),d=r.n(l),m=(n=>(n[n.Against=0]="Against",n[n.For=1]="For",n[n.Abstain=2]="Abstain",n))(m||{}),y=r(67153),x=r(40834),p=r(97994);function f(n,e,r){return new i.Fraction(n,d().exponentiate(d().BigInt(10),d().BigInt(e))).toSignificant(r)}function j({rawAmount:n,symbol:e,decimals:r,sigFigs:t}){return(0,o.jsxs)(o.Fragment,{children:[f(n,r,t)," ",e]})}function h({rawAmount:n,currencyId:e,sigFigs:r=6}){const t=(0,c.U8)(e);return t?(0,o.jsx)(j,{rawAmount:n,decimals:t.decimals,sigFigs:r,symbol:t.symbol??"???"}):null}function v({info:{recipient:n,uniAmountRaw:e}}){const{ENSName:r}=(0,u.Z)(),t=r??n;return"string"===typeof e?(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.claimFor",components:{currency:(0,o.jsx)(j,{rawAmount:e,symbol:"UNI",decimals:18,sigFigs:4})},values:{username:t}}):(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.claimReward",values:{username:t}})}function g(){return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.submitProposal"})}function T({info:n}){var e,r,t;const s=(0,c.dQ)(n.tokenAddress);return(null===(e=a.BigNumber.from(n.amount))||void 0===e?void 0:e.eq(0))?(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.revoke",values:{tokenSymbol:null===(r=s)||void 0===r?void 0:r.symbol}}):(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.approve",values:{sym:null===(t=s)||void 0===t?void 0:t.symbol}})}function b({info:n}){const e=`${n.governorAddress}/${n.proposalId}`;if(n.reason&&n.reason.trim().length>0)switch(n.decision){case m.For:return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.vote.for",values:{proposalKey:e}});case m.Abstain:return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.vote.abstain",values:{proposalKey:e}});case m.Against:return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.vote.against",values:{proposalKey:e}})}else switch(n.decision){case m.For:return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.decision.for",values:{proposalKey:e,reason:n.reason}});case m.Abstain:return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.decision.abstain",values:{proposalKey:e,reason:n.reason}});case m.Against:return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.decision.against",values:{proposalKey:e,reason:n.reason}})}}function w({info:n}){const e=`${n.governorAddress}/${n.proposalId}`;return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.queueProposal",values:{proposalKey:e}})}function I({info:n}){const e=`${n.governorAddress}/${n.proposalId}`;return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.executeProposal",values:{proposalKey:e}})}function S({info:{delegatee:n}}){const{ENSName:e}=(0,u.Z)(n),r=e??n;return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.delegateSummary",values:{username:r}})}function A({info:{chainId:n,currencyAmountRaw:e,unwrapped:r}}){const t=n?(0,x.nativeOnChain)(n):void 0;var s,i,a,c,u,l;return r?(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.unwrapTo",components:{amount:(0,o.jsx)(j,{rawAmount:e,symbol:(null===(i=t)||void 0===i||null===(s=i.wrapped)||void 0===s?void 0:s.symbol)??"WETH",decimals:18,sigFigs:6})},values:{symbol:(null===(a=t)||void 0===a?void 0:a.symbol)??"ETH"}}):(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.wrapTo",components:{amount:(0,o.jsx)(j,{rawAmount:e,symbol:(null===(c=t)||void 0===c?void 0:c.symbol)??"ETH",decimals:18,sigFigs:6})},values:{symbol:(null===(l=t)||void 0===l||null===(u=l.wrapped)||void 0===u?void 0:u.symbol)??"WETH"}})}function k(){return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.depositLiquidity"})}function K(){return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.withdrawLiquidity"})}function C({info:{baseCurrencyId:n,quoteCurrencyId:e}}){var r,t;const s=(0,c.U8)(n),i=(0,c.U8)(e);return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.migrateLiquidity",values:{baseSymbol:null===(r=s)||void 0===r?void 0:r.symbol,quoteSymbol:null===(t=i)||void 0===t?void 0:t.symbol}})}function E({info:{quoteCurrencyId:n,baseCurrencyId:e}}){var r,t;const s=(0,c.U8)(e),i=(0,c.U8)(n);return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.createPool",values:{baseSymbol:null===(r=s)||void 0===r?void 0:r.symbol,quoteSymbol:null===(t=i)||void 0===t?void 0:t.symbol}})}function O({info:{currencyId0:n,currencyId1:e}}){var r,t;const s=(0,c.U8)(n),i=(0,c.U8)(e);return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.collectFees",values:{symbol0:null===(r=s)||void 0===r?void 0:r.symbol,symbol1:null===(t=i)||void 0===t?void 0:t.symbol}})}function L({info:{baseCurrencyId:n,quoteCurrencyId:e,expectedAmountBaseRaw:r,expectedAmountQuoteRaw:t}}){return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.removeLiquiditySummary",components:{base:(0,o.jsx)(h,{rawAmount:r,currencyId:n,sigFigs:3}),quote:(0,o.jsx)(h,{rawAmount:t,currencyId:e,sigFigs:3})}})}function P({info:{createPool:n,quoteCurrencyId:e,baseCurrencyId:r}}){var t,s,i,a;const u=(0,c.U8)(r),l=(0,c.U8)(e);return n?(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.createAddLiquidity",values:{baseSymbol:null===(t=u)||void 0===t?void 0:t.symbol,quoteSymbol:null===(s=l)||void 0===s?void 0:s.symbol}}):(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.addLiquidity",values:{baseSymbol:null===(i=u)||void 0===i?void 0:i.symbol,quoteSymbol:null===(a=l)||void 0===a?void 0:a.symbol}})}function D({info:{quoteCurrencyId:n,expectedAmountBaseRaw:e,expectedAmountQuoteRaw:r,baseCurrencyId:t}}){return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.addLiquidityv2",components:{baseAmountAndToken:(0,o.jsx)(h,{rawAmount:e,currencyId:t,sigFigs:3}),quoteAmountAndToken:(0,o.jsx)(h,{rawAmount:r,currencyId:n,sigFigs:3})}})}function _({info:n}){return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.sendSummary",components:{amount:(0,o.jsx)(h,{rawAmount:n.amount,currencyId:n.currencyId,sigFigs:6})},values:{recipient:n.recipient}})}function F({info:n}){return n.tradeType===i.TradeType.EXACT_INPUT?(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.swapExactIn",components:{amount1:(0,o.jsx)(h,{rawAmount:n.inputCurrencyAmountRaw,currencyId:n.inputCurrencyId,sigFigs:6}),amount2:(0,o.jsx)(h,{rawAmount:n.settledOutputCurrencyAmountRaw??n.expectedOutputCurrencyAmountRaw,currencyId:n.outputCurrencyId,sigFigs:6})}}):(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.swapExactOut",components:{amount1:(0,o.jsx)(h,{rawAmount:n.expectedInputCurrencyAmountRaw,currencyId:n.inputCurrencyId,sigFigs:6}),amount2:(0,o.jsx)(h,{rawAmount:n.outputCurrencyAmountRaw,currencyId:n.outputCurrencyId,sigFigs:6})}})}function U({info:n}){var e,r;const{token0CurrencyId:t,token1CurrencyId:s}=n,i=(0,c.U8)(t),a=(0,c.U8)(s);return(0,o.jsx)(p.Trans,{i18nKey:"account.transactionSummary.addLiquidity",values:{baseSymbol:null===(e=i)||void 0===e?void 0:e.symbol,quoteSymbol:null===(r=a)||void 0===r?void 0:r.symbol}})}function R({info:n}){switch(n.type){case y.i.ADD_LIQUIDITY_V3_POOL:return(0,o.jsx)(P,{info:n});case y.i.ADD_LIQUIDITY_V2_POOL:return(0,o.jsx)(D,{info:n});case y.i.CLAIM:return(0,o.jsx)(v,{info:n});case y.i.DEPOSIT_LIQUIDITY_STAKING:return(0,o.jsx)(k,{});case y.i.WITHDRAW_LIQUIDITY_STAKING:return(0,o.jsx)(K,{});case y.i.SWAP:return(0,o.jsx)(F,{info:n});case y.i.APPROVAL:return(0,o.jsx)(T,{info:n});case y.i.VOTE:return(0,o.jsx)(b,{info:n});case y.i.DELEGATE:return(0,o.jsx)(S,{info:n});case y.i.WRAP:return(0,o.jsx)(A,{info:n});case y.i.CREATE_V3_POOL:return(0,o.jsx)(E,{info:n});case y.i.MIGRATE_LIQUIDITY_V3:return(0,o.jsx)(C,{info:n});case y.i.COLLECT_FEES:return(0,o.jsx)(O,{info:n});case y.i.REMOVE_LIQUIDITY_V3:return(0,o.jsx)(L,{info:n});case y.i.QUEUE:return(0,o.jsx)(w,{info:n});case y.i.EXECUTE:return(0,o.jsx)(I,{info:n});case y.i.SUBMIT_PROPOSAL:return(0,o.jsx)(g,{});case y.i.SEND:return(0,o.jsx)(_,{info:n});case y.i.INCREASE_LIQUIDITY:return(0,o.jsx)(U,{info:n})}}var Z=r(67978),N=r(3115),q=r(53972),$=r(96771),z=r(36664),H=r(61152);const W=z.ZP.div`
  height: 90px;
  width: 90px;
`,B=H.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,Q=H.keyframes`
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
`,V=z.ZP.circle`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${B} 0.9s ease-in-out;
  animation: ${B} 0.9s ease-in-out;
`,M=z.ZP.polyline`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  stroke-dashoffset: -100;
  -webkit-animation: ${Q} 0.9s 0.35s ease-in-out forwards;
  animation: ${Q} 0.9s 0.35s ease-in-out forwards;
`;function Y({className:n}){const e=(0,H.useTheme)();return(0,o.jsx)(W,{className:n,"data-testid":"animated-confirmation",children:(0,o.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2",children:[(0,o.jsx)(V,{className:"path circle",fill:"none",stroke:e.success,strokeWidth:"6",strokeMiterlimit:"10",cx:"65.1",cy:"65.1",r:"62.1"}),(0,o.jsx)(M,{className:"path check",fill:"none",stroke:e.success,strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})]})})}var G=r(55478),X=r(83792),J=r(73397),nn=r(22722),en=r(45779),rn=r(68090),on=r.n(rn);function tn(){return tn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},tn.apply(this,arguments)}function sn(n,e){if(null==n)return{};var r,o,t=function(n,e){if(null==n)return{};var r,o,t={},s=Object.keys(n);for(o=0;o<s.length;o++)r=s[o],e.indexOf(r)>=0||(t[r]=n[r]);return t}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(o=0;o<s.length;o++)r=s[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var an=(0,en.forwardRef)((function(n,e){var r=n.color,o=void 0===r?"currentColor":r,t=n.size,s=void 0===t?24:t,i=sn(n,["color","size"]);return en.createElement("svg",tn({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),en.createElement("circle",{cx:"12",cy:"12",r:"10"}),en.createElement("polyline",{points:"16 12 12 8 8 12"}),en.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"8"}))}));an.propTypes={color:on().string,size:on().oneOfType([on().string,on().number])},an.displayName="ArrowUpCircle";const cn=an;var un=r(19733),ln=r(10404),dn=r(90379),mn=r(97756),yn=r(77134),xn=r(56363),pn=r(45427),fn=r(70854),jn=r(9450),hn=r(769),vn=r(30754);const gn=z.ZP.div`
  background-color: ${({theme:n})=>n.surface1};
  border-radius: 20px;
  outline: 1px solid ${({theme:n})=>n.surface3};
  width: 100%;
  padding: 16px;
`,Tn=(0,z.ZP)(G.Tz)`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`,bn=(0,z.ZP)(G.lg)`
  padding: ${({inline:n})=>n?"20px 0":"32px 0;"};
`,wn=(0,z.ZP)(G.Tz)`
  padding-bottom: 12px;
`;function In({onDismiss:n,pendingText:e,inline:r}){return(0,o.jsx)(gn,{children:(0,o.jsxs)(G.Tz,{gap:"md",children:[!r&&(0,o.jsxs)(X.m0,{children:[(0,o.jsx)("div",{}),(0,o.jsx)(yn.Tw,{onClick:n})]}),(0,o.jsx)(bn,{inline:r,children:(0,o.jsx)(yn._1,{src:s.Z,alt:"loader",size:r?"40px":"90px"})}),(0,o.jsxs)(G.Tz,{gap:"md",justify:"center",children:[(0,o.jsx)(xn.T.SubHeaderLarge,{color:"neutral1",textAlign:"center",children:(0,o.jsx)(p.Trans,{i18nKey:"transaction.confirmation.waiting"})}),(0,o.jsx)(xn.T.SubHeader,{color:"neutral1",textAlign:"center",children:e}),(0,o.jsx)(xn.T.SubHeaderSmall,{color:"neutral2",textAlign:"center",marginBottom:"12px",children:(0,o.jsx)(p.Trans,{i18nKey:"common.confirmTransaction.button"})})]})]})})}function Sn({onDismiss:n,chainId:e,hash:r,currencyToAdd:s,inline:i}){var a,u,l;const d=(0,H.useTheme)(),{connector:m}=(0,t.G)(),y=null===(a=s)||void 0===a?void 0:a.wrapped,x=(null===(u=(0,c.J3)(y))||void 0===u?void 0:u.logoUrl)??"",[f,j]=(0,en.useState)(),h=(0,en.useCallback)((()=>{var n,e,r;(null===(n=y)||void 0===n?void 0:n.symbol)&&(null===(e=m)||void 0===e?void 0:e.watchAsset)&&(null===(r=m)||void 0===r||r.watchAsset({address:y.address,symbol:y.symbol,decimals:y.decimals,image:x}).then((()=>j(!0))).catch((()=>j(!1))))}),[m,x,y]),v=e===hn.UniverseChainId.Mainnet?(0,o.jsx)(p.Trans,{i18nKey:"common.etherscan.link"}):(0,o.jsx)(p.Trans,{i18nKey:"common.viewOnBlockExplorer"});return(0,o.jsx)(gn,{children:(0,o.jsxs)(G.Tz,{children:[!i&&(0,o.jsxs)(X.m0,{children:[(0,o.jsx)("div",{}),(0,o.jsx)(yn.Tw,{onClick:n})]}),(0,o.jsx)(bn,{inline:i,children:(0,o.jsx)(cn,{strokeWidth:1,size:i?"40px":"75px",color:d.accent1})}),(0,o.jsxs)(wn,{gap:"md",justify:"center",children:[(0,o.jsx)(xn.T.MediumHeader,{textAlign:"center",children:(0,o.jsx)(p.Trans,{i18nKey:"common.transactionSubmitted"})}),s&&(null===(l=m)||void 0===l?void 0:l.watchAsset)&&(0,o.jsx)(N.Sy,{mt:"12px",padding:"6px 12px",width:"fit-content",onClick:h,children:f?(0,o.jsxs)(X.DA,{children:[(0,o.jsx)(p.Trans,{i18nKey:"transaction.confirmation.submitted.currency.added",values:{currency:s.symbol}}),(0,o.jsx)(un.Z,{size:"16px",stroke:d.success,style:{marginLeft:"6px"}})]}):(0,o.jsx)(X.DA,{children:(0,o.jsx)(p.Trans,{i18nKey:"transaction.confirmation.submitted.currency.add",values:{currency:s.symbol}})})}),(0,o.jsx)(N.DF,{onClick:n,style:{margin:"20px 0 0 0"},"data-testid":"dismiss-tx-confirmation",children:(0,o.jsx)(xn.T.HeadlineSmall,{color:d.deprecated_accentTextLightPrimary,children:i?(0,o.jsx)(p.Trans,{i18nKey:"common.return.label"}):(0,o.jsx)(p.Trans,{i18nKey:"common.close"})})}),e&&r&&(0,o.jsx)(yn.dL,{href:(0,vn.getExplorerLink)(e,r,vn.ExplorerDataType.TRANSACTION),children:(0,o.jsx)(xn.T.Link,{color:d.accent1,children:v})})]})]})})}function An({title:n,bottomContent:e,onDismiss:r,topContent:t,headerContent:s}){var i;return(0,o.jsxs)(gn,{children:[(0,o.jsxs)(G.Tz,{gap:"sm",children:[(0,o.jsxs)(X.ZP,{children:[null===(i=s)||void 0===i?void 0:i(),(0,o.jsx)(X.ZP,{justify:"center",marginLeft:"24px",children:(0,o.jsx)(xn.T.SubHeader,{children:n})}),(0,o.jsx)(yn.Tw,{onClick:r,"data-testid":"confirmation-close-icon"})]}),t()]}),e&&(0,o.jsx)(Tn,{gap:"16px",children:e()})]})}const kn=(0,z.ZP)(Z.Z)`
  padding: 6px 8px;
`;function Kn({onDismiss:n,chainId:e,hash:r,pendingText:t,inline:i}){var a;const c=(0,H.useTheme)(),u=(0,dn.kF)(r),l=u&&(0,mn.q)(u),d=(null===(a=u)||void 0===a?void 0:a.status)===fn.TransactionStatus.Confirmed,m=l&&u.confirmedTime?(u.confirmedTime-u.addedTime)/1e3:void 0,y=pn.UNIVERSE_CHAIN_INFO[e];return(0,o.jsx)(gn,{children:(0,o.jsxs)(G.Tz,{children:[!i&&(0,o.jsxs)(X.m0,{mb:"16px",children:[(0,o.jsx)(kn,{children:(0,o.jsxs)(X.DA,{gap:"sm",children:[(0,o.jsx)(q.E,{chainId:e}),(0,o.jsx)(xn.T.SubHeaderSmall,{children:y.label})]})}),(0,o.jsx)(yn.Tw,{onClick:n})]}),(0,o.jsx)(bn,{inline:i,children:l?d?(0,o.jsx)(Y,{}):(0,o.jsx)(ln.Z,{strokeWidth:1,size:i?"40px":"90px",color:c.critical}):(0,o.jsx)(yn._1,{src:s.Z,alt:"loader",size:i?"40px":"90px"})}),(0,o.jsxs)(G.Tz,{gap:"md",justify:"center",children:[(0,o.jsx)(xn.T.SubHeaderLarge,{textAlign:"center",children:r?l?d?(0,o.jsx)(p.Trans,{i18nKey:"common.success"}):(0,o.jsx)(p.Trans,{i18nKey:"common.error.label"}):(0,o.jsx)(p.Trans,{i18nKey:"common.transactionSubmitted"}):(0,o.jsx)(p.Trans,{i18nKey:"transaction.confirmation.pending.wallet"})}),(0,o.jsx)(xn.T.BodySecondary,{textAlign:"center",children:u?(0,o.jsx)(R,{info:u.info}):t}),e&&r?(0,o.jsx)(yn.dL,{href:(0,vn.getExplorerLink)(e,r,vn.ExplorerDataType.TRANSACTION),children:(0,o.jsx)(xn.T.SubHeaderSmall,{color:c.accent1,children:(0,o.jsx)(p.Trans,{i18nKey:"common.viewOnExplorer"})})}):(0,o.jsx)("div",{style:{height:"17px"}}),(0,o.jsx)(xn.T.SubHeaderSmall,{color:c.neutral3,marginTop:"20px",children:m?(0,o.jsx)("div",{children:(0,o.jsx)(p.Trans,{i18nKey:"transaction.confirmation.completionTime",components:{highlight:(0,o.jsx)("span",{style:{fontWeight:535,marginLeft:"4px",color:c.neutral1}})},count:m})}):(0,o.jsx)("div",{style:{height:"24px"}})}),(0,o.jsx)(N.DF,{onClick:n,style:{margin:"4px 0 0 0"},children:i?(0,o.jsx)(p.Trans,{i18nKey:"common.return.label"}):(0,o.jsx)(p.Trans,{i18nKey:"common.close"})})]})]})})}function Cn({isOpen:n,onDismiss:e,attemptingTxn:r,hash:t,pendingText:s,reviewContent:i,currencyToAdd:a}){const{chainId:c}=(0,nn.m)(),u=(0,J.Nb)(c);return c&&u?(0,o.jsx)($.Z,{isOpen:n,$scrollOverlay:!0,onDismiss:e,maxHeight:"90vh",children:(0,jn.isL2ChainId)(c)&&(t||r)?(0,o.jsx)(Kn,{chainId:c,hash:t,onDismiss:e,pendingText:s}):r?(0,o.jsx)(In,{onDismiss:e,pendingText:s}):t?(0,o.jsx)(Sn,{chainId:c,hash:t,onDismiss:e,currencyToAdd:a}):i()}):null}},83639:(n,e,r)=>{r.d(e,{DC:()=>a,ER:()=>c,bb:()=>u,im:()=>i,pr:()=>l});var o=r(38081),t=r(36664),s=r(22953);const i=t.ZP.div`
  position: relative;
  padding: 20px;
`,a=(0,t.ZP)(s.xv)`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:n})=>n.accent1};
`,c=t.ZP.button`
  padding: 0.5rem 1rem;
  background-color: ${({theme:n})=>n.accent2};
  border: 1px solid ${({theme:n})=>n.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:n})=>n.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:n})=>n.accent1};
  :hover {
    border: 1px solid ${({theme:n})=>n.accent1};
  }
  :focus {
    border: 1px solid ${({theme:n})=>n.accent1};
    outline: none;
  }
`,u=t.ZP.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,l=(0,t.ZP)(o.pr)`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`}}]);
//# sourceMappingURL=564.1750e686.chunk.js.map