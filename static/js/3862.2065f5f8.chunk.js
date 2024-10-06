"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3862],{37525:(e,n,i)=>{i.d(n,{Z:()=>a});var r=i(45779),t=i(68090),o=i.n(t);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},s.apply(this,arguments)}function l(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var d=(0,r.forwardRef)((function(e,n){var i=e.color,t=void 0===i?"currentColor":i,o=e.size,d=void 0===o?24:o,a=l(e,["color","size"]);return r.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.createElement("polyline",{points:"18 15 12 9 6 15"}))}));d.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},d.displayName="ChevronUp";const a=d},76394:(e,n,i)=>{i.d(n,{q:()=>k,w:()=>S});var r=i(92936),t=i(83792),o=i(30340),s=i(22722),l=i(36664),d=i(61152),a=i(21926),c=i(43454),x=i(6282),p=i(22953),m=i(34946),h=i(2456),u=i(74695),g=i(56363),j=i(45003),f=i(97994);const v=l.ZP.div`
  ${j.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,y=(0,l.ZP)(c.rU)`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,T=(0,l.ZP)(g.T.H1Small)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,b=(0,l.ZP)(a.Z)`
  color: ${({theme:e})=>e.neutral1};
`;function k({origin:e}){return(0,r.jsx)(v,{children:(0,r.jsxs)(t.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,r.jsx)(c.rU,{to:e,children:(0,r.jsx)(b,{})}),(0,r.jsx)(T,{children:(0,r.jsx)(f.Trans,{i18nKey:"pool.import.v2"})})]})})}const $=(0,l.ZP)(g.T.H1Small)`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function S({adding:e,creating:n,autoSlippage:i,positionID:l,children:a}){var c;const{chainId:g}=(0,s.m)(),j=(0,d.useTheme)(),T=(0,m.T)(),{state:k}=(0,x.TH)(),S=(0,x.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(l?`/${l.toString()}`:""),w=(null===(c=k)||void 0===c?void 0:c.from)??S;return(0,r.jsx)(v,{children:(0,r.jsxs)(t.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,r.jsx)(y,{to:w,onClick:()=>{e&&(T((0,h.dA)()),T((0,u.dA)()))},flex:a?"1":void 0,children:(0,r.jsx)(b,{stroke:j.neutral2})}),(0,r.jsx)($,{$center:!a,children:n?(0,r.jsx)(f.Trans,{i18nKey:"pool.create.pair"}):e?(0,r.jsx)(f.Trans,{i18nKey:"common.addLiquidity"}):(0,r.jsx)(f.Trans,{i18nKey:"pool.removeLiquidity"})}),a&&(0,r.jsx)(p.xu,{style:{marginRight:".5rem"},children:a}),(0,r.jsx)(o.Z,{autoSlippage:i,chainId:g,hideRoutingSettings:!0})]})})}},11712:(e,n,i)=>{i.d(n,{Z:()=>l,e:()=>s});var r=i(92936),t=i(36664),o=i(54884);const s=t.ZP.main`
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
`;function l(e){return(0,r.jsx)(s,{...e})}},83639:(e,n,i)=>{i.d(n,{DC:()=>l,ER:()=>d,bb:()=>a,im:()=>s,pr:()=>c});var r=i(38081),t=i(36664),o=i(22953);const s=t.ZP.div`
  position: relative;
  padding: 20px;
`,l=(0,t.ZP)(o.xv)`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,d=t.ZP.button`
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
`,a=t.ZP.span`
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
`,c=(0,t.ZP)(r.pr)`
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
`},75779:(e,n,i)=>{i.r(n),i.d(n,{default:()=>A});var r=i(92936),t=i(5985),o=i(3115),s=i(32409),l=i(80187),d=i(76394),a=i(89045),c=i(26410),x=i(92241),p=i(17256),m=i(55478),h=i(83792),u=i(22722),g=i(42183),j=i(99300),f=i(61592),v=i.n(f),y=i(11712),T=i(83639),b=i(45779),k=i(57809),$=i(6282),S=i(22953),w=i(97047),P=i(16138),Z=i(56363),K=i(77134),O=i(40834),_=i(48313),I=i(97994),z=i(85209);function A(){var e;const n=new URLSearchParams((0,$.TH)().search),i=(0,u.m)(),[f,A]=(0,b.useState)(!1),[C,L]=(0,b.useState)(1),[q,W]=(0,b.useState)((()=>i.chainId?(0,O.nativeOnChain)(i.chainId):null)),[E,F]=(0,b.useState)(null),[D,G]=(0,j.Oo)(q??void 0,E??void 0),H=(0,P.uB)();(0,b.useEffect)((()=>{G&&H(G)}),[G,H]);const B=D===j._G.NOT_EXISTS||Boolean(D===j._G.EXISTS&&G&&v().equal(G.reserve0.quotient,v().BigInt(0))&&v().equal(G.reserve1.quotient,v().BigInt(0))),R=(0,w.mM)(i.address,null===(e=G)||void 0===e?void 0:e.liquidityToken),N=Boolean(R&&v().greaterThan(R.quotient,v().BigInt(0))),U=(0,b.useCallback)((e=>{0===C?W(e):F(e)}),[C]),X=(0,b.useCallback)((()=>{A(!1)}),[A]),M=(0,r.jsx)(s.hl,{padding:"45px 10px",children:(0,r.jsx)(S.xv,{textAlign:"center",children:i.isConnected?(0,r.jsx)(I.Trans,{i18nKey:"poolFinder.selectToken"}):(0,r.jsx)(I.Trans,{i18nKey:"poolFinder.connect"})})});return(0,g.G)()?(0,r.jsx)(_.default,{logImpression:!0,page:t.yJ.POOL_PAGE,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(y.Z,{children:[(0,r.jsx)(d.q,{origin:n.get("origin")??"/pools/v2"}),(0,r.jsxs)(m.Tz,{style:{padding:"1rem"},gap:"md",children:[(0,r.jsx)(s.Pj,{children:(0,r.jsx)(m.Tz,{gap:"10px",children:(0,r.jsx)(Z.T.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,r.jsx)(I.Trans,{i18nKey:"poolFinder.tip"})})})}),(0,r.jsx)(o.KA,{onClick:()=>{A(!0),L(0)},children:q?(0,r.jsxs)(h.ZP,{children:[(0,r.jsx)(l.Z,{currency:q}),(0,r.jsx)(S.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:q.symbol})]}):(0,r.jsx)(S.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(I.Trans,{i18nKey:"common.selectToken.label"})})}),(0,r.jsx)(m.lg,{children:(0,r.jsx)(k.Z,{size:"16",color:"#888D9B"})}),(0,r.jsx)(o.KA,{onClick:()=>{A(!0),L(1)},children:E?(0,r.jsxs)(h.ZP,{children:[(0,r.jsx)(l.Z,{currency:E}),(0,r.jsx)(S.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:E.symbol})]}):(0,r.jsx)(S.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(I.Trans,{i18nKey:"common.selectToken.label"})})}),N&&(0,r.jsxs)(m.lg,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,r.jsx)(S.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(I.Trans,{i18nKey:"poolFinder.found"})}),(0,r.jsx)(K.m_,{to:"/pools/v2",children:(0,r.jsx)(S.xv,{textAlign:"center",children:(0,r.jsx)(I.Trans,{i18nKey:"poolFinder.managePool"})})})]}),q&&E?D===j._G.EXISTS?N&&G?(0,r.jsx)(a.WP,{pair:G,border:"1px solid #CED0D9"}):(0,r.jsx)(s.hl,{padding:"45px 10px",children:(0,r.jsxs)(m.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(S.xv,{textAlign:"center",children:(0,r.jsx)(I.Trans,{i18nKey:"poolFinder.noLiquidity"})}),(0,r.jsx)(K.m_,{to:`/add/v2/${(0,z.H)(q)}/${(0,z.H)(E)}`,children:(0,r.jsx)(S.xv,{textAlign:"center",children:(0,r.jsx)(I.Trans,{i18nKey:"common.addLiquidity"})})})]})}):B?(0,r.jsx)(s.hl,{padding:"45px 10px",children:(0,r.jsxs)(m.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(S.xv,{textAlign:"center",children:(0,r.jsx)(I.Trans,{i18nKey:"poolFinder.noPoolFound"})}),(0,r.jsx)(K.m_,{to:`/add/${(0,z.H)(q)}/${(0,z.H)(E)}`,children:(0,r.jsx)(I.Trans,{i18nKey:"poolFinder.create"})})]})}):D===j._G.INVALID?(0,r.jsx)(s.hl,{padding:"45px 10px",children:(0,r.jsx)(m.Tz,{gap:"sm",justify:"center",children:(0,r.jsx)(S.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(I.Trans,{i18nKey:"common.invalidPair"})})})}):D===j._G.LOADING?(0,r.jsx)(s.hl,{padding:"45px 10px",children:(0,r.jsx)(m.Tz,{gap:"sm",justify:"center",children:(0,r.jsxs)(S.xv,{textAlign:"center",children:[(0,r.jsx)(I.Trans,{i18nKey:"common.loading"}),(0,r.jsx)(T.bb,{})]})})}):null:M]}),(0,r.jsx)(c.Z,{isOpen:f,onCurrencySelect:U,onDismiss:X,selectedCurrency:(0===C?E:q)??void 0})]}),(0,r.jsx)(x.c,{})]})}):(0,r.jsx)(p.A,{})}}}]);
//# sourceMappingURL=3862.2065f5f8.chunk.js.map