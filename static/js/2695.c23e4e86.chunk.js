"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2695],{74623:(e,i,r)=>{r.d(i,{$:()=>s,p:()=>d});var t=r(66284),n=r(53258),o=r(44958),a=r(39499),l=r(769);const s=(e=l.UniverseChainId.Mainnet)=>{var i;const r=(0,o.Z)(e),t=(0,a.Z)("1",r);return(null===(i=(0,n.L)(t))||void 0===i?void 0:i.data)??0};function d(e){var i,r,n,o;const a=s();return a&&(null===(r=e)||void 0===r||null===(i=r.priceInfo)||void 0===i?void 0:i.ETHPrice)?(parseFloat((0,t.formatEther)(null===(o=e)||void 0===o||null===(n=o.priceInfo)||void 0===n?void 0:n.ETHPrice))*a).toString():""}},92695:(e,i,r)=>{r.r(i),r.d(i,{default:()=>si});var t=r(92936),n=r(5985),o=r(36664),a=r(98859),l=r(52801);const s=(e,i)=>(e<0?e+i:e)%i;var d=r(45779),c=r(76907);function p(e,i,r,t,n,o,a){try{var l=e[o](a),s=l.value}catch(d){return void r(d)}l.done?i(s):Promise.resolve(s).then(t,n)}function h(e){return function(){var i=this,r=arguments;return new Promise((function(t,n){var o=e.apply(i,r);function a(e){p(o,t,n,a,l,"next",e)}function l(e){p(o,t,n,a,l,"throw",e)}a(void 0)}))}}const x=o.ZP.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,m=o.ZP.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,u=(0,o.ZP)(c.a.div)`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  will-change: transform;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,g=o.ZP.div`
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,f=800,v=({children:e,activeIndex:i,toggleNextSlide:r})=>{const n=(0,d.useCallback)(((i,r=e.length)=>s(i,r)),[e]),o=(0,d.useCallback)(((e,i,r)=>((e,i,r,t)=>t(e-i+r))(e,i,r,n)),[n]),[a,p]=(0,c.bY)(e.length,(i=>({x:(i<e.length-1?i:-1)*f}))),v=(0,d.useRef)([0,1]),w=(0,d.useCallback)(((i,r)=>{const t=n(Math.floor(i/f)%e.length),a=r<0?e.length-2:1;p((n=>{const l=o(n,t,a),s=o(n,v.current[0],v.current[1]),d=((e,i,r,t,n)=>e-(n<0?t:0)+r-i+(n<0&&0===e?t:0))(t,a,l,e.length,i);return{x:-i%(f*e.length)+f*d,immediate:r<0?s>l:s<l,config:{tension:250,friction:30}}})),v.current=[t,a]}),[n,o,p,e.length]),y=(0,d.useRef)(0);(0,d.useEffect)((()=>{w(i*f,y.current)}),[i,w]);const b=(0,d.useCallback)((e=>{y.current=e,r(e)}),[r]);return(0,d.useEffect)((()=>{const e=setInterval(h((function*(){b(1)})),7e3);return()=>{clearInterval(e)}}),[b,i]),(0,t.jsxs)(x,{children:[(0,t.jsx)(g,{onClick:()=>b(-1),children:(0,t.jsx)(l.wy,{width:"16px",height:"16px"})}),(0,t.jsx)(m,{children:a.map((({x:i},r)=>(0,t.jsx)(u,{style:{x:i},children:e[r]},r)))}),(0,t.jsx)(g,{onClick:()=>b(1),children:(0,t.jsx)(l.XC,{width:"16px",height:"16px"})})]})},w=({children:e})=>(0,t.jsx)(v,{activeIndex:0,toggleNextSlide:()=>{},children:[e]});var y=r(38081),b=r(52529),j=r(71943),$=r(39550),k=r(56363),P=r(64972);const T=o.ZP.div`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,S=o.ZP.div`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,z=o.ZP.div`
  position: relative;
  animation: ${y.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,C=o.ZP.div`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,H=o.ZP.div`
  display: inline-flex;
  vertical-align: text-bottom;
  margin-left: 2px;
  transform: translateY(-2px) translateX(2px);
`,Z=o.ZP.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,F=(0,o.ZP)(b.X)`
  width: 50%;
`,E=o.ZP.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,D=o.ZP.img`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border-radius: 100px;
`,N=o.ZP.div`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${y.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,_=(0,o.ZP)(b.X)`
  width: 50px;
`,O=o.ZP.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,I=o.ZP.div``,A=o.ZP.div`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,B=o.ZP.img`
  width: 20px;
  height: 20px;
`,M=o.ZP.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${O}:nth-child(3n-1), ${_}:nth-child(3n-1) {
    justify-self: center;
  }

  ${O}:nth-child(3n), ${_}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${I} {
      display: none;
    }
    ${O} {
      justify-self: left !important;
    }
    ${C} {
      padding: 0 20px;
    }
  }
`,V=({marketplace:e,floorInEth:i,listings:r})=>{const{formatNumberOrString:n}=(0,P.Gb)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(O,{children:[(0,t.jsx)(B,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,t.jsx)(I,{children:(0,t.jsx)(k.T.BodySmall,{color:"neutral2",children:e})})]}),(0,t.jsx)(O,{children:(0,t.jsx)(k.T.BodySmall,{color:"neutral2",children:Number(i)>0?`${n({input:i,type:P.sw.NFTTokenFloorPriceTrailingZeros})} ETH`:"-"})}),(0,t.jsx)(O,{children:(0,t.jsx)(k.T.BodySmall,{color:"neutral2",children:Number(r)>0?r:"None"})})]})},L=[$.Fz.Opensea,$.Fz.X2Y2,$.Fz.LooksRare],G={[$.Fz.Opensea]:"OpenSea",[$.Fz.X2Y2]:"X2Y2",[$.Fz.LooksRare]:"LooksRare"},R=({collection:e,onClick:i})=>{var r;const{data:n,loading:o}=(0,j.K)(e.address??""),{formatNumber:a}=(0,P.Gb)();return o?(0,t.jsx)(U,{}):(0,t.jsx)(T,{children:(0,t.jsxs)(M,{onClick:i,children:[(0,t.jsx)(W,{collection:e}),(0,t.jsx)(A,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(O,{children:[(0,t.jsx)(l.pD,{width:"20",height:"20"}),(0,t.jsx)(I,{children:(0,t.jsx)(k.T.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),(0,t.jsx)(O,{children:e.floor&&(0,t.jsxs)(k.T.SubHeaderSmall,{color:"userThemeColor",children:[a({input:e.floor,type:P.sw.NFTToken})," ETH Floor"]})}),(0,t.jsx)(O,{children:(0,t.jsxs)(k.T.SubHeaderSmall,{color:"userThemeColor",children:[null===(r=n.marketplaceCount)||void 0===r?void 0:r.reduce(((e,i)=>e+i.count),0)," Listings"]})}),L.map((i=>{var r;const o=null===(r=n.marketplaceCount)||void 0===r?void 0:r.find((e=>e.marketplace===i));return o?(0,t.jsx)(V,{marketplace:G[i],listings:o.count,floorInEth:o.floorPrice},`CarouselCard-key-${e.address}-${o.marketplace}`):null}))]})})]})})},X=()=>(0,t.jsx)(t.Fragment,{children:[...Array(12)].map((e=>(0,t.jsx)(_,{},e)))}),Y=(0,o.ZP)(k.T.MediumHeader)`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,W=({collection:e})=>(0,t.jsxs)(S,{src:e.bannerImageUrl??"",children:[(0,t.jsxs)(C,{children:[(0,t.jsx)(D,{src:e.imageUrl}),(0,t.jsxs)(Z,{children:[(0,t.jsx)(Y,{color:"deprecated_accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,t.jsx)(H,{children:(0,t.jsx)(l.SA,{width:"24px",height:"24px"})})]})]}),(0,t.jsx)(E,{})]}),U=({collection:e})=>(0,t.jsx)(T,{children:(0,t.jsxs)(M,{children:[e?(0,t.jsx)(W,{collection:e}):(0,t.jsxs)(z,{children:[(0,t.jsxs)(C,{children:[(0,t.jsx)(N,{}),(0,t.jsx)(F,{})]}),(0,t.jsx)(E,{})]}),(0,t.jsx)(A,{children:(0,t.jsx)(X,{})})]})});var K=r(6282),q=r(70854);const J=o.ZP.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,Q=o.ZP.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>`${e.maxWidth}px`};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,ee=o.ZP.div`
  display: flex;
  max-width: 500px;
  font-weight: 535;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.neutral1};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,ie=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"],re=()=>{const e=(0,K.s0)(),{data:i}=(0,a.S)(5+ie.length,q.HistoryDuration.Day),r=(0,d.useMemo)((()=>{var e;return null===(e=i)||void 0===e?void 0:e.filter((e=>e.address&&!ie.includes(e.address))).slice(0,5)}),[i]),[n,o]=(0,d.useState)(0),l=(0,d.useCallback)((e=>{r&&o((i=>s(i+e,r.length)))}),[r]);return(0,t.jsx)(J,{children:(0,t.jsxs)(Q,{children:[(0,t.jsxs)(ee,{children:["Better prices. ",(0,t.jsx)("br",{}),"More listings."]}),r?(0,t.jsx)(v,{activeIndex:n,toggleNextSlide:l,children:r.map((i=>(0,t.jsx)(R,{collection:i,onClick:()=>e(`/nfts/collection/${i.address}`)},i.address)))}):(0,t.jsx)(w,{children:(0,t.jsx)(U,{})})]})})};var te=r(42277),ne=r(66284),oe=r(1890),ae=r(75603),le=(r(21422),(e=>(e.OneDay="ONE_DAY",e.SevenDays="SEVEN_DAYS",e.ThirtyDays="THIRTY_DAYS",e.AllTime="ALL_TIME",e))(le||{})),se=(e=>(e.ETH="ETH",e.USD="USD",e))(se||{});const de=o.ZP.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ce=(0,o.ZP)(de)`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,pe=(0,o.ZP)(de)`
  margin-left: 8px;
`,he=(0,o.ZP)(k.T.SubHeader)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,xe=(0,o.ZP)(k.T.SubHeaderSmall)`
  color: ${({theme:e})=>`${e.neutral1}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,me=o.ZP.div`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:i})=>e?`url(${e})`:i.surface2};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,ue=o.ZP.div`
  display: flex;
  color: ${({theme:e,change:i})=>i>=0?e.success:e.critical};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,ge=o.ZP.div`
  display: flex;
  justify-content: flex-end;
`,fe=({value:e})=>{const i=(0,ae.d)();return(0,t.jsxs)(ce,{children:[(0,t.jsx)(me,{src:e.logo}),(0,t.jsx)(pe,{children:i?(0,t.jsx)(xe,{children:e.name}):(0,t.jsx)(he,{children:e.name})}),e.isVerified&&(0,t.jsx)("span",{className:"rgw6ezl3 rgw6ez453 rgw6ez2o3 rgw6ez19r rgw6ez12r rgw6ez45x",children:(0,t.jsx)(l.SA,{})})]})},ve=({value:e})=>{const{formatNumberOrString:i}=(0,P.Gb)();return(0,t.jsx)("span",{children:e.value?i({input:e.value,type:P.sw.NFTCollectionStats}):"-"})},we=(e,i,r,t)=>e===se.ETH?r:t&&r?t*(i?parseFloat((0,ne.formatEther)(r)):r):void 0,ye=({value:e,denomination:i,usdPrice:r})=>{const{formatNumberOrString:n}=(0,P.Gb)(),o=we(i,!1,e,r),a=i===se.ETH,l=n({input:o,type:a?P.sw.NFTToken:P.sw.FiatTokenStats})+(a?" ETH":""),s=(0,ae.d)()?k.T.BodySmall:k.T.BodyPrimary;return(0,t.jsx)(ge,{children:(0,t.jsx)(s,{children:e?l:"-"})})},be=({value:e})=>(0,t.jsx)(k.T.BodyPrimary,{children:e}),je=({value:e,denomination:i,usdPrice:r})=>{const{formatNumberOrString:n}=(0,P.Gb)(),o=we(i,!1,e,r),a=i===se.ETH,l=n({input:o,type:a?P.sw.WholeNumber:P.sw.FiatTokenStats})+(a?" ETH":"");return(0,t.jsx)(ge,{children:(0,t.jsx)(k.T.BodyPrimary,{children:l})})},$e=({change:e,children:i})=>{const r=(0,ae.d)()?k.T.BodySmall:k.T.BodyPrimary;return(0,t.jsxs)(ue,{change:e??0,children:[(0,t.jsx)(oe.Kx,{delta:e}),(0,t.jsx)(r,{color:"currentColor",children:i||`${e?Math.abs(Math.round(e)):0}%`})]})};var ke=r(57577),Pe=r(79613),Te=r(52843),Se=r(26686),ze=r(22722),Ce=r(61152),He="_1mor7veh rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2of rgw6ez27x rgw6ez1jl rgw6ez463 rgw6ez48x",Ze="_1mor7vea rgw6ez4qf rgw6ez16r rgw6ez80x rgw6ez7zl",Fe="_1mor7ved rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4bf rgw6ez2or rgw6ez289",Ee="rgw6ezr9 rgw6ez55f rgw6ez895 rgw6ez805",De=r(40403),Ne=r(48313);const _e=o.ZP.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,Oe=o.ZP.tr`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.surface3};
  }
  :active {
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }
`,Ie=o.ZP.tr`
  height: 80px;
`,Ae=o.ZP.th`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:i})=>!i&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:i})=>!i&&`opacity: ${e.opacity.click};`}
  }
`,Be=o.ZP.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,Me=o.ZP.div`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,Ve=(0,o.ZP)(b.X)`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Le=(0,o.ZP)(b.X)`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`,Ge=10;function Re({columns:e,data:i,smallHiddenColumns:r,mediumHiddenColumns:o,largeHiddenColumns:a,...l}){const s=(0,Ce.useTheme)(),{chainId:c}=(0,ze.m)(),{width:p}=(0,Se.i)(),h=(0,ae.d)(),{getTableProps:x,getTableBodyProps:m,headerGroups:u,rows:g,prepareRow:f,setHiddenColumns:v,visibleColumns:w}=(0,De.useTable)({columns:e,data:i,initialState:{sortBy:[{desc:!0,id:We.Volume}]},...l},De.useSortBy),y=(0,K.s0)();return(0,d.useEffect)((()=>{p&&(p<=s.breakpoint.sm?v(r):p<=s.breakpoint.md?v(o):p<=s.breakpoint.lg?v(a):v([]))}),[p,v,e,r,o,a,s.breakpoint]),0===i.length?(0,t.jsx)(Xe,{headerGroups:u,visibleColumns:w,...x()}):(0,t.jsxs)("table",{...x(),className:Ze,children:[(0,t.jsx)("thead",{className:Ee,children:u.map((e=>(0,d.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,i)=>(0,d.createElement)(Ae,{className:Fe,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===i?"left":"right",paddingLeft:0===i?h?"16px":"52px":0},disabled:e.disableSortBy,key:i,children:[(0,t.jsx)(Te.n,{as:"span",color:"neutral2",position:"relative",children:e.isSorted?e.isSortedDesc?(0,t.jsx)(Pe.V,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):(0,t.jsx)(ke.c,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):""}),(0,t.jsx)(Te.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,t.jsx)("tbody",{...m(),children:g.map(((e,i)=>(f(e),(0,t.jsx)(Ne.default,{logPress:!0,eventOnTrigger:n.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:c},element:n.xo.NFT_TRENDING_ROW,children:(0,d.createElement)(Oe,{...e.getRowProps(),key:e.id,onClick:()=>y(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map(((e,r)=>(0,d.createElement)("td",{className:"_1mor7vef rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2o3 rgw6ez27l rgw6ez1jl rgw6ez463 rgw6ez48x",...e.getCellProps(),key:r,style:{maxWidth:0===r?h?"240px":"360px":"160px"}},0===r?(0,t.jsxs)(_e,{children:[!h&&(0,t.jsx)(k.T.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:i+1}),e.render("Cell")]}):e.render("Cell")))))},i))))})]})}function Xe({headerGroups:e,visibleColumns:i,...r}){return(0,t.jsxs)("table",{...r,className:Ze,children:[(0,t.jsx)("thead",{className:Ee,children:e.map((e=>(0,d.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,i)=>(0,d.createElement)(Ae,{className:Fe,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===i?"left":"right",paddingLeft:0===i?"52px":0},disabled:0===i,key:i,children:[(0,t.jsx)(Te.n,{as:"span",color:"accent1",position:"relative",children:e.isSorted?e.isSortedDesc?(0,t.jsx)(Pe.V,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):(0,t.jsx)(ke.c,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):""}),(0,t.jsx)(Te.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,t.jsx)("tbody",{...r,children:[...Array(Ge)].map(((e,r)=>(0,t.jsx)(Ie,{children:[...Array(i.length)].map(((e,i)=>(0,t.jsx)("td",{className:He,children:0===i?(0,t.jsxs)(Me,{children:[(0,t.jsx)(Le,{}),(0,t.jsx)(Ve,{}),(0,t.jsx)(b.X,{})]}):(0,t.jsx)(Be,{children:(0,t.jsx)(b.X,{})})},i)))},r)))})]})}var Ye=r(77134),We=(e=>(e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners",e))(We||{});const Ue=(e,i)=>e?i?Math.round(1e5*e)>=Math.round(1e5*i)?1:-1:1:-1,Ke=({data:e,timePeriod:i})=>{const r=(0,d.useMemo)((()=>(e,i)=>Ue(e.original.floor.value,i.original.floor.value)),[]),n=(0,d.useMemo)((()=>(e,i)=>Ue(e.original.floor.change,i.original.floor.change)),[]),o=(0,d.useMemo)((()=>(e,i)=>Ue(e.original.volume.value,i.original.volume.value)),[]),a=(0,d.useMemo)((()=>(e,i)=>Ue(e.original.volume.change,i.original.volume.change)),[]),l=(0,d.useMemo)((()=>[{Header:"Collection name",accessor:"collection",Cell:fe,disableSortBy:!0},{id:"Floor",Header:"Floor",accessor:({floor:e})=>e.value,sortType:r,Cell:function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ye,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),i!==le.AllTime&&(0,t.jsx)(Ye.SF,{children:(0,t.jsx)($e,{change:e.row.original.floor.change})})]})}},{id:"Floor change",Header:"Floor change",accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:i===le.AllTime,sortType:n,Cell:function(e){return i===le.AllTime?(0,t.jsx)(be,{value:"-"}):(0,t.jsx)($e,{change:e.row.original.floor.change})}},{id:"Volume",Header:"Volume",accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:o,Cell:function(e){return(0,t.jsx)(je,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:"Volume change",Header:"Volume change",accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:i===le.AllTime,sortType:a,Cell:function(e){const{change:r}=e.row.original.volume;return i===le.AllTime?(0,t.jsx)(be,{value:"-"}):r&&r>=9999?(0,t.jsxs)($e,{change:r,children:[">9999","%"]}):(0,t.jsx)($e,{change:r})}},{id:"Items",Header:"Items",accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,t.jsx)(ve,{value:{value:e.row.original.totalSupply}})}},{Header:"Owners",accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,t.jsx)(ve,{value:e.row.original.owners})}}]),[n,r,a,o,i]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(Re,{smallHiddenColumns:["Items","Floor change","Volume","Volume change","Owners"],mediumHiddenColumns:["Items","Floor change","Volume change","Owners"],largeHiddenColumns:["Items","Owners"],data:e,columns:l})})};var qe=r(74623);const Je=[{label:"1D",value:le.OneDay},{label:"1W",value:le.SevenDays},{label:"1M",value:le.ThirtyDays},{label:"All",value:le.AllTime}],Qe=o.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>`${e.maxWidth}px`};
  padding: 0 16px;
`,ei=o.ZP.h1`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  line-height: 44px;
  font-weight: 535;
  margin: 0;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,ii=o.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,ri=o.ZP.div`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  padding: 4px;
`,ti=o.ZP.div`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:i})=>e?i.surface3:"none"};
  cursor: pointer;

  ${te.c}
`,ni=(0,o.ZP)(k.T.SubHeader)`
  color: ${({theme:e,active:i})=>i?e.neutral1:e.neutral2};
`;const oi=()=>{const{formatterLocalCurrency:e}=(0,P.h2)(),[i,r]=(0,d.useState)(le.OneDay),[n,o]=(0,d.useState)(!0),{data:l,loading:s}=(0,a.S)(100,function(e){switch(e){case le.OneDay:return q.HistoryDuration.Day;case le.SevenDays:return q.HistoryDuration.Week;case le.ThirtyDays:return q.HistoryDuration.Month;case le.AllTime:return q.HistoryDuration.Max;default:return q.HistoryDuration.Day}}(i)),c=(0,qe.$)(),p=(0,d.useMemo)((()=>!s&&l?l.map((e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:n?se.ETH:se.USD,usdPrice:c}))):[]),[l,s,n,c]);return(0,t.jsxs)(Qe,{children:[(0,t.jsx)(ei,{children:"Trending NFT collections"}),(0,t.jsxs)(ii,{children:[(0,t.jsx)(ri,{children:Je.map((e=>(0,t.jsx)(ti,{active:e.value===i,onClick:()=>r(e.value),children:(0,t.jsx)(ni,{lineHeight:"20px",active:e.value===i,children:e.label})},e.value)))}),(0,t.jsxs)(ri,{onClick:()=>o(!n),children:[(0,t.jsx)(ti,{active:n,children:(0,t.jsx)(ni,{lineHeight:"20px",active:n,children:"ETH"})}),(0,t.jsx)(ti,{active:!n,children:(0,t.jsx)(ni,{lineHeight:"20px",active:!n,children:e})})]})]}),(0,t.jsx)(Ke,{data:p,timePeriod:i})]})};var ai=r(99251);const li=o.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`,si=()=>{const e=(0,ai.c)((e=>e.setBagExpanded));return(0,d.useEffect)((()=>{e({bagExpanded:!1,manualClose:!1})}),[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(Ne.default,{logImpression:!0,page:n.yJ.NFT_EXPLORE_PAGE,children:(0,t.jsxs)(li,{children:[(0,t.jsx)(re,{}),(0,t.jsx)(oi,{})]})})})}}}]);
//# sourceMappingURL=2695.c23e4e86.chunk.js.map