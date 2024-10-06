"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3449],{13310:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(45779),i=n(68090),r=n.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=(0,o.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,d=void 0===r?24:r,a=l(e,["color","size"]);return o.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),o.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),o.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));d.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},d.displayName="Inbox";const a=d},42183:(e,t,n)=>{n.d(t,{G:()=>l});var o=n(73397),i=n(22722),r=n(95625),s=n(39063);function l(){const{chainId:e}=(0,i.m)(),t=(0,s.useFeatureFlag)(r.FeatureFlags.V2Everywhere);return e&&t&&o.Ep.includes(e)}},17125:(e,t,n)=>{n.d(t,{W:()=>a,n:()=>d});var o=n(11604),i=n(29717),r=n(24055),s=n(45779);function l(e){var t;const n=(0,i.GL)(),l=(0,s.useMemo)((()=>e?e.map((e=>[o.O$.from(e)])):[]),[e]),d=(0,r.es)(n,"positions",l),a=(0,s.useMemo)((()=>d.some((({loading:e})=>e))),[d]),p=(0,s.useMemo)((()=>d.some((({error:e})=>e))),[d]),c=(0,s.useMemo)((()=>{if(!a&&!p&&e)return d.map(((t,n)=>{const o=e[n],i=t.result;return{tokenId:o,fee:i.fee,feeGrowthInside0LastX128:i.feeGrowthInside0LastX128,feeGrowthInside1LastX128:i.feeGrowthInside1LastX128,liquidity:i.liquidity,nonce:i.nonce,operator:i.operator,tickLower:i.tickLower,tickUpper:i.tickUpper,token0:i.token0,token1:i.token1,tokensOwed0:i.tokensOwed0,tokensOwed1:i.tokensOwed1}}))}),[a,p,d,e]);return{loading:a,positions:null===(t=c)||void 0===t?void 0:t.map(((e,t)=>({...e,tokenId:l[t][0]})))}}function d(e){var t;const n=l(e?[e]:void 0);return{loading:n.loading,position:null===(t=n.positions)||void 0===t?void 0:t[0]}}function a(e){var t,n;const d=(0,i.GL)(),{loading:a,result:p}=(0,r.Wk)(d,"balanceOf",[e??void 0]),c=null===(n=p)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.toNumber(),h=(0,s.useMemo)((()=>{if(c&&e){const t=[];for(let n=0;n<c;n++)t.push([e,n]);return t}return[]}),[e,c]),u=(0,r.es)(d,"tokenOfOwnerByIndex",h),x=(0,s.useMemo)((()=>u.some((({loading:e})=>e))),[u]),m=(0,s.useMemo)((()=>e?u.map((({result:e})=>e)).filter((e=>!!e)).map((e=>o.O$.from(e[0]))):[]),[e,u]),{positions:g,loading:f}=l(m);return{loading:x||a||f,positions:g}}},63449:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var o=n(92936),i=n(5985),r=n(66142),s=n(3115),l=n(55478),d=n(99454),a=n(24644),p=n(36664),c=n(43969),h=n(97994);const u=p.ZP.div`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${c.e.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,x=p.ZP.div`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${c.e.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${c.e.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,m=p.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,g=p.ZP.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function f({positions:e,setUserHideClosedPositions:t,userHideClosedPositions:n}){const{t:i}=(0,h.useTranslation)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(u,{children:[(0,o.jsxs)("div",{children:[i("pool.positions.title"),e&&" ("+e.length+")"]}),(0,o.jsx)(g,{id:"desktop-hide-closed-positions",onClick:()=>{t(!n)},children:i(n?"pool.showClosed":"pool.hideClosed")})]}),(0,o.jsxs)(x,{children:[i("pool.positions.title"),(0,o.jsx)(m,{children:(0,o.jsx)(g,{onClick:()=>{t(!n)},children:i(n?"pool.showClosed":"pool.hideClosed")})})]}),e.map((e=>(0,o.jsx)(a.Z,{...e},e.tokenId.toString())))]})}var v=n(92241),j=n(73397),w=n(22722),y=n(74488),b=n(42183),k=n(17125),O=n(61152),P=n(77134),$=n(56363),T=n(45427),L=n(769);const C=p.ZP.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`,z=O.css`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.surface3};
  text-decoration: none;

  * {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};

    * {
      text-decoration: none !important;
    }
  }
`,I=(0,p.ZP)(P.dL)`
  ${z}
`,E=(0,p.ZP)(P.m_)`
  ${z}
`,Z=(0,p.ZP)($.T.DeprecatedLabel)`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,_=(0,p.ZP)(l.Tz)`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function S(){const{chainId:e}=(0,w.m)(),t=T.UNIVERSE_CHAIN_INFO[(0,j.Jw)(e)??L.UniverseChainId.Mainnet];return(0,o.jsxs)(C,{children:[(0,o.jsx)(I,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:(0,o.jsxs)(_,{children:[(0,o.jsxs)(Z,{children:[(0,o.jsx)(h.Trans,{i18nKey:"pool.learnLiquidity"})," \u2197"]}),(0,o.jsx)($.T.DeprecatedBody,{style:{alignItems:"center",display:"flex",fontWeight:485},children:(0,o.jsx)(h.Trans,{i18nKey:"pool.learnv3LP"})})]})}),(0,o.jsx)(E,{"data-testid":"cta-poolslink",to:`/explore/pools/${t.urlParam}`,children:(0,o.jsxs)(_,{children:[(0,o.jsxs)(Z,{style:{alignSelf:"flex-start"},children:[(0,o.jsx)(h.Trans,{i18nKey:"pool.top"})," \u2197"]}),(0,o.jsx)($.T.DeprecatedBody,{style:{alignSelf:"flex-start",fontWeight:485},children:(0,o.jsx)(h.Trans,{i18nKey:"pool.exporeAnalytics"})})]})})]})}var V=n(67148),W=n(83639),F=n(45779),M=n(57221),N=n(13310),B=n(74928),D=n(68090),U=n.n(D);function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},q.apply(this,arguments)}function A(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var G=(0,F.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,r=void 0===i?24:i,s=A(e,["color","size"]);return F.createElement("svg",q({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),F.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),F.createElement("polyline",{points:"2 17 12 22 22 17"}),F.createElement("polyline",{points:"2 12 12 17 22 12"}))}));G.propTypes={color:U().string,size:U().oneOfType([U().string,U().number])},G.displayName="Layers";const H=G;function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var J=(0,F.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,r=void 0===i?24:i,s=R(e,["color","size"]);return F.createElement("svg",K({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),F.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),F.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))}));J.propTypes={color:U().string,size:U().oneOfType([U().string,U().number])},J.displayName="BookOpen";const X=J;var Q=n(43454),Y=n(16138),ee=n(56250),te=n(20449),ne=n(11947),oe=n(8806),ie=n(70854),re=n(48313);const se=(0,p.ZP)(l.Tz)`
  padding: 68px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,le=(0,ee.z)(te.e,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",fontWeight:"$book",p:"$spacing8",textDecorationLine:"none",color:"$neutral2",hoverStyle:{color:"$neutral1"}}),de=p.ZP.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,ae=O.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,pe=(0,p.ZP)(M.Z)`
  ${ae}
`,ce=(0,p.ZP)(N.Z)`
  ${ae}
`,he=(0,p.ZP)(s.DF)`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  white-space: nowrap;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,ue=p.ZP.main`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function xe(){return(0,o.jsxs)(W.pr,{children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{})]})}function me(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(se,{children:(0,o.jsx)(l.Tz,{gap:"lg",justify:"center",children:(0,o.jsxs)(l.Tz,{gap:"lg",style:{width:"100%"},children:[(0,o.jsx)(ne.k,{row:!0,p:"$none",gap:"$gap12",children:(0,o.jsx)(oe.xv,{variant:"heading2",children:(0,h.t)("pool.positions")})}),(0,o.jsx)(ue,{children:(0,o.jsx)(de,{children:(0,o.jsxs)(oe.xv,{variant:"body1",color:"$neutral3",textAlign:"center",children:[(0,o.jsx)(pe,{strokeWidth:1.2}),(0,o.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,h.t)("pool.connection.networkUnsupported")})]})})})]})})}),(0,o.jsx)(v.c,{})]})}function ge(){var e;const{t:t}=(0,h.useTranslation)(),n=(0,w.m)(),a=(0,j.Nb)(n.chainId),p=(0,b.G)(),c=(0,r.Q5)(),[u,x]=(0,F.useState)(!1),m=(0,O.useTheme)(),[g,T]=(0,Y.QP)(),{positions:L,loading:C}=(0,k.W)(n.address),[z,I]=(null===(e=L)||void 0===e?void 0:e.reduce(((e,t)=>{var n;return e[(null===(n=t.liquidity)||void 0===n?void 0:n.isZero())?1:0].push(t),e}),[[],[]]))??[[],[]],E=(0,F.useMemo)((()=>[...z,...g?[]:I]),[I,z,g]),Z=(0,y.J)(E);if(!a)return(0,o.jsx)(me,{});const _=Boolean(!n),W=[(0,o.jsxs)(le,{href:"/migrate/v2",children:[t("common.migrate"),(0,o.jsx)(B.Z,{size:16})]},"migrate"),(0,o.jsxs)(le,{href:"/pools/v2",children:[t("pool.v2liquidity"),(0,o.jsx)(H,{size:16})]},"v2-liquidity"),(0,o.jsxs)(le,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:[t("pool.learn"),(0,o.jsx)(X,{size:16})]},"learn")];return(0,o.jsxs)(re.default,{logImpression:!0,page:i.yJ.POOL_PAGE,children:[(0,o.jsx)(se,{children:(0,o.jsx)(l.Tz,{gap:"lg",justify:"center",children:(0,o.jsxs)(l.Tz,{gap:"lg",style:{width:"100%"},children:[(0,o.jsxs)(ne.k,{row:!0,alignItems:"center",justifyContent:"space-between",p:"$none",gap:"$gap12",$md:{flexWrap:"wrap",width:"100%"},children:[(0,o.jsxs)(ne.k,{row:!0,alignItems:"center",gap:"$spacing8",width:"min-content",children:[(0,o.jsx)(oe.xv,{variant:"heading2",children:t("pool.positions")}),(0,o.jsx)("div",{children:(0,o.jsx)(V.p,{protocolVersion:ie.ProtocolVersion.V3})})]}),(0,o.jsxs)(ne.k,{row:!0,gap:"8px",$md:{width:"100%"},children:[p&&(0,o.jsx)(ne.k,{grow:!0,$md:{width:"calc(50% - 4px)"},children:(0,o.jsx)(d.u,{isOpen:u,toggleOpen:x,menuLabel:(0,o.jsx)(o.Fragment,{children:t("common.more")}),internalMenuItems:(0,o.jsx)(o.Fragment,{children:[...W]}),buttonStyle:{height:40,justifyContent:"center"},dropdownStyle:{width:200,top:"calc(100% + 20px)"},adaptToSheet:!1})}),(0,o.jsx)(he,{"data-cy":"join-pool-button",id:"join-pool-button",as:Q.rU,to:"/add/ETH",children:t("pool.newPosition.plus")})]})]}),(0,o.jsx)(ue,{children:C?(0,o.jsx)(xe,{}):Z&&I&&Z.length>0?(0,o.jsx)(f,{positions:Z,setUserHideClosedPositions:T,userHideClosedPositions:g}):(0,o.jsxs)(de,{children:[(0,o.jsxs)($.T.BodyPrimary,{color:m.neutral3,textAlign:"center",children:[(0,o.jsx)(ce,{strokeWidth:1,style:{marginTop:"2em"}}),(0,o.jsx)("div",{children:t("pool.activePositions.appear")})]}),!_&&I.length>0&&(0,o.jsx)(s.oD,{style:{marginTop:".5rem"},onClick:()=>T(!g),children:t("pool.showClosed")}),_&&(0,o.jsx)(re.default,{logPress:!0,eventOnTrigger:i.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:i.xo.CONNECT_WALLET_BUTTON,children:(0,o.jsx)(s.DF,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:c.open,children:t("common.connectAWallet.button")})})]})}),(0,o.jsx)(P.Pw,{children:(0,o.jsx)(S,{})})]})})}),(0,o.jsx)(v.c,{})]})}},67148:(e,t,n)=>{n.d(t,{p:()=>f});var o=n(92936),i=n(99454),r=n(57367),s=n(45779),l=n(56250),d=n(20449),a=n(8806),p=n(70854),c=n(95625),h=n(39063),u=n(97994);const x=(0,l.z)(d.e,{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",gap:"$gap12",textDecorationLine:"none",color:"$neutral2",hoverStyle:{color:"$neutral1"}}),m={[p.ProtocolVersion.V4]:{title:(0,u.t)("pool.v4"),link:"/pool"},[p.ProtocolVersion.V3]:{title:(0,u.t)("pool.v3"),link:"/pool"},[p.ProtocolVersion.V2]:{title:(0,u.t)("pool.v2"),link:"/pools/v2"}},g={[p.ProtocolVersion.V4]:"v4",[p.ProtocolVersion.V3]:"v3",[p.ProtocolVersion.V2]:"v2"};function f({protocolVersion:e}){const[t,n]=(0,s.useState)(!1),l=(0,h.useFeatureFlag)(c.FeatureFlags.V4Everywhere);return(0,o.jsx)(i.u,{isOpen:t,menuLabel:(0,o.jsx)(a.xv,{variant:"body1",children:g[e]}),internalMenuItems:(0,o.jsx)(o.Fragment,{children:Object.entries(m).filter((([t,n])=>!(!l&&t===p.ProtocolVersion.V4)&&n.title!==m[e].title)).map((([,e])=>(0,o.jsxs)(x,{href:e.link,children:[(0,o.jsx)(r.K,{width:"20px",height:"20px"}),(0,o.jsx)(a.xv,{variant:"body1",style:{color:"inherit"},children:e.title})]},e.title)))}),toggleOpen:n,buttonStyle:{height:36},adaptToSheet:!1})}},83639:(e,t,n)=>{n.d(t,{DC:()=>l,ER:()=>d,bb:()=>a,im:()=>s,pr:()=>p});var o=n(38081),i=n(36664),r=n(22953);const s=i.ZP.div`
  position: relative;
  padding: 20px;
`,l=(0,i.ZP)(r.xv)`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,d=i.ZP.button`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,a=i.ZP.span`
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
`,p=(0,i.ZP)(o.pr)`
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
//# sourceMappingURL=3449.8f699e55.chunk.js.map