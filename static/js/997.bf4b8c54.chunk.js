"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[997,2011],{76531:(e,i,o)=>{o.d(i,{K:()=>b});var t=o(76078),n=o(21651),d=o(73397),r=o(22722),l=o(64063),a=o(61592),s=o.n(a),c=o(63490),u=o.n(c),v=o(45779),p=o(70854),h=o(769),x=o(30102);const m=8;function g(e,i,o,t,d,r){let l={...o},a=[];for(let p=d+(r?1:-1);r?p<t.length:p>=0;r?p++:p--){var c,u;const o=Number(null===(c=t[p])||void 0===c?void 0:c.tick),d=(0,n.tickToPrice)(e,i,o),h={liquidityActive:l.liquidityActive,tick:o,liquidityNet:s().BigInt((null===(u=t[p])||void 0===u?void 0:u.liquidityNet)??""),price0:d.toFixed(m),sdkPrice:d};var v;if(r)h.liquidityActive=s().add(l.liquidityActive,s().BigInt((null===(v=t[p])||void 0===v?void 0:v.liquidityNet)??0));else!r&&s().notEqual(l.liquidityNet,s().BigInt(0))&&(h.liquidityActive=s().subtract(l.liquidityActive,l.liquidityNet));a.push(h),l=h}return r||(a=a.reverse()),a}const k=8,y=(e,i)=>e&&i?Math.floor(e/n.TICK_SPACINGS[i])*n.TICK_SPACINGS[i]:void 0,f=1e3;function j(e,i,o,r){var l,a,s;const[c,h]=(0,v.useState)(0),[x,m]=(0,v.useState)([]),{data:g,error:k,loading:y}=function(e,i,o,r=0,l){var a,s,c;const v=e&&i&&o?n.Pool.getAddress(null===(a=e)||void 0===a?void 0:a.wrapped,null===(s=i)||void 0===s?void 0:s.wrapped,o,void 0,l?t.V3_CORE_FACTORY_ADDRESSES[l]:void 0):void 0,h=(0,d.Jw)(l);return(0,p.useAllV3TicksQuery)({variables:{address:(null===(c=v)||void 0===c?void 0:c.toLowerCase())??"",chain:(0,d.tq)({chainId:h,withFallback:!0}),skip:r,first:f},skip:!v,pollInterval:u()("30s")})}(e,i,o,c,r),j=null===(a=g)||void 0===a||null===(l=a.v3Pool)||void 0===l?void 0:l.ticks;return(0,v.useEffect)((()=>{var e,i;(null===(e=j)||void 0===e?void 0:e.length)&&(m((e=>[...e,...j])),(null===(i=j)||void 0===i?void 0:i.length)===f&&h((e=>e+f)))}),[j]),{isLoading:y||(null===(s=j)||void 0===s?void 0:s.length)===f,error:k,ticks:x}}function b(e,i,o,t){var d,a,c,u,p;const m=(0,r.m)().chainId??h.UniverseChainId.Mainnet,f=(0,l.$o)(null===(d=e)||void 0===d?void 0:d.wrapped,null===(a=i)||void 0===a?void 0:a.wrapped,o,t??m),b=null===(c=f[1])||void 0===c?void 0:c.liquidity,P=null===(u=f[1])||void 0===u?void 0:u.sqrtRatioX96,T=null===(p=f[1])||void 0===p?void 0:p.tickCurrent,w=(0,v.useMemo)((()=>y(T,o)),[T,o]),{isLoading:$,error:I,ticks:C}=j(e,i,o,t??m);return(0,v.useMemo)((()=>{var o,t,d,r,a;if(!e||!i||void 0===w||f[0]!==l.tK.EXISTS||!C||0===C.length||$)return{isLoading:$||f[0]===l.tK.LOADING,error:I,activeTick:w,data:void 0};const c=null===(o=e)||void 0===o?void 0:o.wrapped,u=null===(t=i)||void 0===t?void 0:t.wrapped,v=C.findIndex((e=>{var i;return(null===(i=e)||void 0===i?void 0:i.tick)&&e.tick>w}))-1;if(v<0)return x.logger.debug("usePoolTickData","usePoolActiveLiquidity","TickData pivot not found",{token0:c.address,token1:u.address,chainId:c.chainId}),{isLoading:$,error:I,activeTick:w,data:void 0};const p=(0,n.tickToPrice)(c,u,w),h={liquidityActive:s().BigInt((null===(d=f[1])||void 0===d?void 0:d.liquidity)??0),tick:w,liquidityNet:Number(null===(r=C[v])||void 0===r?void 0:r.tick)===w?s().BigInt((null===(a=C[v])||void 0===a?void 0:a.liquidityNet)??0):s().BigInt(0),price0:p.toFixed(k),sdkPrice:p},m=g(c,u,h,C,v,!0),y=g(c,u,h,C,v,!1).concat(h).concat(m);return{isLoading:$,error:I,currentTick:T,activeTick:w,liquidity:b,sqrtPriceX96:P,data:y}}),[e,i,w,f,C,$,I,T,b,P])}},25543:(e,i,o)=>{o.r(i),o.d(i,{default:()=>y});var t=o(92936),n=o(5985);const d=o.p+"static/media/404-page-dark.f24684e761633ae99402.png",r=o.p+"static/media/404-page-light.c448d3fd36de14609aba.png";var l=o(3115),a=o(75603),s=o(36664),c=o(43454),u=o(56363),v=o(74534),p=o(48313),h=o(97994);const x=s.ZP.img`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`,m=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,g=(0,s.ZP)(m)`
  gap: 30px;
`,k=(0,s.ZP)(m)`
  flex: 1;
  justify-content: center;
  gap: 50px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function y(){const e=(0,v.Gv)(),i=(0,a.d)(),o=i?u.T.LargeHeader:u.T.Hero,s=i?u.T.HeadlineMedium:u.T.HeadlineLarge;return(0,t.jsx)(k,{children:(0,t.jsxs)(p.default,{logImpression:!0,page:n.yJ.NOT_FOUND,children:[(0,t.jsxs)(g,{children:[(0,t.jsxs)(m,{children:[(0,t.jsx)(o,{children:"404"}),(0,t.jsx)(s,{color:"neutral2",children:(0,t.jsx)(h.Trans,{i18nKey:"common.pageNotFound"})})]}),(0,t.jsx)(x,{src:e?d:r,alt:"Liluni"})]}),(0,t.jsx)(l.Hm,{as:c.rU,to:"/",children:(0,t.jsx)(h.Trans,{i18nKey:"notFound.oops"})})]})})}},70137:(e,i,o)=>{o.r(i),o.d(i,{default:()=>Fo});var t=o(92936),n=o(5985),d=o(76078),r=o(21651),l=o(85976),a=o(17466),s=o(77287);class c{_data=null;_options;constructor(e){this._options=e,this._options.hoveredTick=e.activeTick}draw(e,i){e.useBitmapCoordinateSpace((e=>this._drawImpl(e,i)))}update(e,i){this._data=e,this._options={...this._options,...i}}_drawImpl(e,i){if(null===this._data||0===this._data.bars.length||null===this._data.visibleRange||null===this._options)return;const o=e.context,t=this._data.bars.map((e=>({x:e.x,y:i(e.originalData.liquidity)??0,tick:e.originalData.tick})));(0,s.XV)(t,this._data.barSpacing,e.horizontalPixelRatio,this._data.visibleRange.from,this._data.visibleRange.to);const n=i(0)??0;o.fillStyle=this._options.tokenAColor;for(let d=this._data.visibleRange.from;d<this._data.visibleRange.to;d++){const i=t[d],r=i.column,l=this._options.activeTick===i.tick,a=this._options.hoveredTick===i.tick;if(!r)return;const c=Math.min(Math.max(e.horizontalPixelRatio,r.right-r.left),this._data.barSpacing*e.horizontalPixelRatio),u=.3*c,v=c-2*u,p=(0,s.n1)(n,i.y,e.verticalPixelRatio);if(a){const e=.3*o.canvas.height,i=o.canvas.height-e;o.fillStyle=this._options.highlightColor,o.beginPath(),o.roundRect(r.left+u,e,v,i,8),o.fill(),o.globalAlpha=1}else o.globalAlpha=.4;if(l?o.fillStyle=this._options.tokenBColor:void 0===this._options.activeTick?o.fillStyle=this._options.color??"white":this._options.activeTick>i.tick?o.fillStyle=this._options.tokenBColor:this._options.activeTick<i.tick&&(o.fillStyle=this._options.tokenAColor),o.beginPath(),o.roundRect(r.left+u,p.position,v,p.length,8),o.fill(),o.globalAlpha=1,l&&this._options.activeTickProgress){o.globalCompositeOperation="source-atop";const e=p.length*this._options.activeTickProgress,i=p.position+(p.length-e);o.fillStyle=this._options.tokenAColor,o.beginPath(),o.fillRect(r.left,i,c,e),o.globalCompositeOperation="source-over"}}}}var u=o(69632);class v{_renderer;_tokenAColor;_tokenBColor;_highlightColor;constructor(e){this._tokenAColor=e.tokenAColor,this._renderer=new c(e),this._tokenBColor=e.tokenBColor,this._highlightColor=e.highlightColor}priceValueBuilder(e){return[0,e.liquidity]}isWhitespace(e){return!e.liquidity}renderer(){return this._renderer}update(e,i){this._renderer.update(e,i)}defaultOptions(){return{...u.Qb,tokenAColor:this._tokenAColor,tokenBColor:this._tokenBColor,highlightColor:this._highlightColor}}}var p=o(68707),h=o(76531),x=o(61592),m=o.n(x),g=o(45779),k=o(64972);function y(e,i,o,t,n,d,r){try{var l=e[d](r),a=l.value}catch(s){return void o(s)}l.done?i(a):Promise.resolve(a).then(t,n)}function f(e){return function(){var i=this,o=arguments;return new Promise((function(t,n){var d=e.apply(i,o);function r(e){y(d,t,n,r,l,"next",e)}function l(e){y(d,t,n,r,l,"throw",e)}r(void 0)}))}}class j extends a.BH{series;activeTick;constructor(e,i){super(e,i),this.series=this.api.addCustomSeries(new v(i)),this.series.setData(this.data),this.updateOptions(i),this.fitContent()}updateOptions(e){super.updateOptions(e,{localization:{locale:e.locale},rightPriceScale:{visible:!1,borderVisible:!1,scaleMargins:{top:.35,bottom:0},autoScale:!0},timeScale:{visible:!1,fixLeftEdge:!0,fixRightEdge:!0,borderVisible:!1},crosshair:{horzLine:{visible:!1,labelVisible:!1},vertLine:{visible:!1,labelVisible:!1}},grid:{vertLines:{visible:!1},horzLines:{visible:!1}}});const{data:i,activeTick:o}=e;this.activeTick=o,this.data!==i&&(this.data=i,this.series.setData(i),this.fitContent()),this.series.applyOptions({priceFormat:{type:"volume"},priceLineVisible:!1,lastValueVisible:!1}),this.series.applyOptions(e)}onSeriesHover(e){var i;super.onSeriesHover(e);const o={hoveredTick:(null===(i=e)||void 0===i?void 0:i.item.tick)??this.activeTick};this.series.applyOptions(o)}activeTickIndex(){return this.data.findIndex((e=>e.tick===this.activeTick))}fitContent(){const e=this.data.length,i=this.data.findIndex((e=>e.tick===this.activeTick)),o=-1!==i?i:e/2;this.api.timeScale().setVisibleLogicalRange({from:Math.max(o-50,0),to:Math.min(o+50,this.data.length)})}}const b=p.BigNumber.from(2).pow(128).sub(1);function P(e){return d.CurrencyAmount.fromRawAmount(e,b.toString())}function T(){return(T=f((function*(e,i,o,t,n){if(n.currentTick&&n.sqrtPriceX96&&n.liquidity)try{const d=m().greaterThan(t.liquidityNet,m().BigInt(0))?t.liquidityNet:m().multiply(t.liquidityNet,m().BigInt("-1")),l=[{index:t.tick,liquidityGross:d,liquidityNet:m().multiply(t.liquidityNet,m().BigInt("-1"))},{index:t.tick+r.TICK_SPACINGS[o],liquidityGross:d,liquidityNet:t.liquidityNet}],a=new r.Pool(e,i,o,n.sqrtPriceX96,t.liquidityActive,n.currentTick,l),s=r.TickMath.getSqrtRatioAtTick(l[0].index),c=(yield a.getOutputAmount(P(e),s))[0],u=parseFloat(t.sdkPrice.invert().quote(c).toExact()),v=r.TickMath.getSqrtRatioAtTick(l[1].index),p=(yield a.getOutputAmount(P(i),v))[0];return{amount0Locked:u,amount1Locked:parseFloat(t.sdkPrice.quote(p).toExact())}}catch{return{amount0Locked:0,amount1Locked:0}}}))).apply(this,arguments)}function w(e,i,o,t){return $.apply(this,arguments)}function $(){return($=f((function*(e,i,o,t){try{const n=r.TICK_SPACINGS[o],l=m().greaterThan(t.liquidityNet,m().BigInt(0))?t.liquidityNet:m().multiply(t.liquidityNet,m().BigInt("-1")),a=r.TickMath.getSqrtRatioAtTick(t.tick),s=[{index:t.tick,liquidityGross:l,liquidityNet:m().multiply(t.liquidityNet,m().BigInt("-1"))},{index:t.tick+r.TICK_SPACINGS[o],liquidityGross:l,liquidityNet:t.liquidityNet}],c=new r.Pool(e,i,Number(o),a,t.liquidityActive,t.tick,s),u=r.TickMath.getSqrtRatioAtTick(t.tick-n),v=d.CurrencyAmount.fromRawAmount(e,b.toString()),p=(yield c.getOutputAmount(v,u))[0],h=parseFloat(t.sdkPrice.invert().quote(p).toExact());return{amount0Locked:h,amount1Locked:parseFloat(p.toExact())}}catch{return{amount0Locked:0,amount1Locked:0}}}))).apply(this,arguments)}function I({tokenA:e,tokenB:i,feeTier:o,isReversed:t,chainId:n}){const{formatNumber:d,formatPrice:l}=(0,k.Gb)(),a=(0,h.K)(e,i,o,n),[s,c]=(0,g.useState)();return(0,g.useEffect)((()=>{function n(){return n=f((function*(){var n;const d=a.data;if(!d)return;let s,u;const v=[];for(let c=0;c<d.length;c++){const n=d[c],p=t?1e3*c:1e3*(d.length-c),h=a.activeTick===n.tick;let x=n.sdkPrice,m=n.sdkPrice.invert();h&&a.activeTick&&a.currentTick&&(u=c,s=(a.currentTick-n.tick)/r.TICK_SPACINGS[o],x=(0,r.tickToPrice)(e,i,n.tick),m=x.invert());const{amount0Locked:g,amount1Locked:y}=yield w(e,i,o,n);v.push({tick:n.tick,liquidity:parseFloat(n.liquidityActive.toString()),price0:l({price:x,type:k.sw.SwapDetailsAmount}),price1:l({price:m,type:k.sw.SwapDetailsAmount}),time:p,amount0Locked:g,amount1Locked:y})}null===(n=v)||void 0===n||n.map(((e,i)=>{i>0&&(v[i-1].amount0Locked=e.amount0Locked,v[i-1].amount1Locked=e.amount1Locked)}));const p=void 0!==u?v[u]:void 0;if(void 0!==u&&p){const t=yield function(e,i,o,t,n){return T.apply(this,arguments)}(e,i,o,d[u],a);v[u]={...p,...t}}t||v.reverse(),c({barData:v.filter((e=>e.liquidity>0)),activeRangeData:p,activeRangePercentage:s})})),n.apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a,e,i,d,l,t,o]),{tickData:s,activeTick:a.activeTick,loading:a.isLoading||!s}}var C=o(6878),S=o(60654),L=o(17006),Z=o(54842),A=o(61825),V=o(70854);var D=o(15007),R=o(27165),B=o(33569),q=o(77807),_=o(61190),E=o(87075),M=o(64505),N=o(36664),O=o(61152),F=o(56363),U=o(77134),z=o(45003),H=o(58832),K=o(97994),X=o(769);const W=356,Q=[Z.oX.VOLUME,Z.oX.PRICE,Z.oX.LIQUIDITY],G=N.ZP.div`
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,Y=N.ZP.div`
  display: flex;
  gap: 8px;

  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,J=({chartType:e,onChartTypeChange:i,disabledOption:o})=>(0,t.jsx)(Y,{children:(0,t.jsx)(R.W,{options:Q,currentChartType:e,onSelectOption:i,disabledOption:o})});function ee(e,i,o,t,n,d){var r;const[l,a]=(0,g.useState)(_.XH.DAY),[s,c]=(0,g.useState)(Z.oX.VOLUME),u=d===V.ProtocolVersion.V2,v=d===V.ProtocolVersion.V3,p=d===V.ProtocolVersion.V4,h={addressOrId:(null===(r=e)||void 0===r?void 0:r.address)??"",chain:n,duration:(0,_.uw)(l),isV4:p,isV3:v,isV2:u},x=function(e,i,o,t,n){var d,r,l;const{data:a,loading:s}=(0,V.usePoolPriceHistoryQuery)({variables:e});return(0,g.useMemo)((()=>{var e,d,r;const{priceHistory:l}=(null===(e=a)||void 0===e?void 0:e.v2Pair)??(null===(d=a)||void 0===d?void 0:d.v3Pool)??{},c=n?o:t,u=(null===(r=l)||void 0===r?void 0:r.filter((e=>null!==e)).map((e=>{var o,t,n,d;const r=(null===(o=i)||void 0===o?void 0:o.token0.address)===(null===(t=c)||void 0===t?void 0:t.address.toLowerCase())?null===(n=e)||void 0===n?void 0:n.token0Price:null===(d=e)||void 0===d?void 0:d.token1Price;return{time:e.timestamp,value:r,open:r,high:r,low:r,close:r}})))??[],v=!s&&l&&l.length?A.x1.VALID:A.x1.INVALID;return{chartType:Z.oX.PRICE,entries:u,loading:s,dataQuality:v}}),[null===(d=a)||void 0===d?void 0:d.v2Pair,null===(r=a)||void 0===r?void 0:r.v3Pool,n,s,null===(l=i)||void 0===l?void 0:l.token0.address,o,t])}(h,e,i,o,t),m=function(e){var i,o;const{data:t,loading:n}=(0,V.usePoolVolumeHistoryQuery)({variables:e});return(0,g.useMemo)((()=>{var i,o,d;const{historicalVolume:r}=(null===(i=t)||void 0===i?void 0:i.v2Pair)??(null===(o=t)||void 0===o?void 0:o.v3Pool)??{},l=(null===(d=r)||void 0===d?void 0:d.filter((e=>null!==e)).map(A.Yz))??[],a=(0,A.q6)(l,Z.oX.VOLUME,e.duration);return{chartType:Z.oX.VOLUME,entries:l,loading:n,dataQuality:a}}),[null===(i=t)||void 0===i?void 0:i.v2Pair,null===(o=t)||void 0===o?void 0:o.v3Pool,n,e.duration])}(h);return(0,g.useMemo)((()=>{const e=(()=>{switch(s){case Z.oX.PRICE:return x;case Z.oX.VOLUME:return m;case Z.oX.LIQUIDITY:return{chartType:Z.oX.LIQUIDITY,entries:[],loading:!1,dataQuality:A.x1.VALID}}})();return{timePeriod:l,setTimePeriod:a,setChartType:c,activeQuery:e}}),[s,m,x,l])}function ie(e){var i,o,n,d,r,l,s;const[c,u]=[(null===(i=e.poolData)||void 0===i?void 0:i.token0)&&(0,_.Pc)(e.poolData.token0),(null===(o=e.poolData)||void 0===o?void 0:o.token1)&&(0,_.Pc)(e.poolData.token1)],{setChartType:v,timePeriod:p,setTimePeriod:h,activeQuery:x}=ee(e.poolData,null===(n=c)||void 0===n?void 0:n.wrapped,null===(d=u)||void 0===d?void 0:d.wrapped,e.isReversed,e.chain??V.Chain.Ethereum,(null===(r=e.poolData)||void 0===r?void 0:r.protocolVersion)??V.ProtocolVersion.V3),m=(0,M.Dv)(a.N),k=e.loading||x.chartType!==Z.oX.LIQUIDITY&&(null===(l=x)||void 0===l?void 0:l.loading),y=(()=>{if(!c||!u||!e.poolData||!e.chain)return(0,t.jsx)(C.M,{type:x.chartType,height:W});const i={...e,feeTier:Number(e.poolData.feeTier),height:W,timePeriod:p,tokenA:c.wrapped,tokenB:u.wrapped,chainId:(0,_.Tz)(e.chain)??X.UniverseChainId.Mainnet};if(x.chartType===Z.oX.LIQUIDITY)return(0,t.jsx)(ae,{...i});if(x.dataQuality===A.x1.INVALID||!c||!u){const e=k?void 0:(0,t.jsx)(K.Trans,{i18nKey:"chart.error.pools"});return(0,t.jsx)(C.M,{type:x.chartType,height:W,errorText:e})}const o=x.dataQuality===A.x1.STALE;switch(x.chartType){case Z.oX.PRICE:return(0,t.jsx)(ne,{...i,data:x.entries,stale:o});case Z.oX.VOLUME:return(0,t.jsx)(L.x,{...i,data:x.entries,stale:o})}})(),f=(0,g.useMemo)((()=>{if(x.chartType===Z.oX.PRICE){const e=D.Bz.filter((e=>e.value!==q._u.HOUR));return p===_.XH.HOUR&&h(_.XH.DAY),{options:e,selected:q.rD[p]}}return{options:D.Bz,selected:q.rD[p]}}),[x.chartType,p,h]),j=(null===(s=e.poolData)||void 0===s?void 0:s.protocolVersion)===V.ProtocolVersion.V2?Z.oX.LIQUIDITY:void 0;return(0,t.jsxs)("div",{"data-testid":"pdp-chart-container",children:[y,(0,t.jsxs)(D.Os,{children:[(0,t.jsx)(J,{chartType:x.chartType,onChartTypeChange:v,disabledOption:j}),x.chartType!==Z.oX.LIQUIDITY&&(0,t.jsx)(G,{children:(0,t.jsx)(H.s,{options:f.options,selectedOption:f.selected,onSelectOption:e=>{const i=(0,q.Wz)(e);var o;i===p?null===(o=m)||void 0===o||o():h(i)}})})]})]})}const oe=N.ZP.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
`,te=(0,N.ZP)(F.T.HeadlineMedium)`
  ${U.cw}
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    font-size: 24px !important;
    line-height: 32px !important;
  }
`;function ne({tokenA:e,tokenB:i,isReversed:o,data:n,stale:r}){const{formatCurrencyAmount:s,formatPrice:c}=(0,k.Gb)(),[u,v]=o?[i,e]:[e,i],p=(0,g.useMemo)((()=>({data:n,stale:r,type:Z.E4.LINE})),[n,r]),{price:h}=(0,E.ZP)(u),x=n[n.length-1];return(0,t.jsx)(a.kL,{height:W,Model:S.r4,params:p,children:e=>{var i;const o=e??x,r=Math.floor((o.value??o.close)*10**v.decimals),a=(0,t.jsxs)(oe,{children:[(0,t.jsx)(te,{children:`1 ${u.symbol} = ${s({amount:d.CurrencyAmount.fromRawAmount(v,r)})} \n            ${v.symbol}`}),(0,t.jsx)(te,{color:"neutral2",children:h?"("+c({price:h})+")":""})]});return(0,t.jsx)(l._,{value:a,additionalFields:(0,t.jsx)(S.Tg,{startingPrice:n[0],endingPrice:o}),valueFormatterType:k.sw.FiatTokenPrice,time:null===(i=e)||void 0===i?void 0:i.time})}})}const de=(0,N.ZP)(F.T.H1Medium)`
  ${z.Sj};
  line-height: 32px;
`,re=(0,N.ZP)(F.T.SubHeader)`
  ${z.Sj}
`;function le({data:e,tokenADescriptor:i,tokenBDescriptor:o,currentTick:n}){const{formatNumber:d}=(0,k.Gb)();if(!n)return null;const r=e.tick>=n?d({input:e.amount0Locked,type:k.sw.TokenQuantityStats}):0,l=e.tick<=n?d({input:e.amount1Locked,type:k.sw.TokenQuantityStats}):0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F.T.BodySmall,{children:(0,K.t)("liquidityPool.chart.tooltip.amount",{token:i,amount:r})}),(0,t.jsx)(F.T.BodySmall,{children:(0,K.t)("liquidityPool.chart.tooltip.amount",{token:o,amount:l})})]})}function ae({tokenA:e,tokenB:i,feeTier:o,isReversed:n,chainId:d}){const s=e.symbol??e.name??(0,K.t)("common.tokenA"),c=i.symbol??i.name??(0,K.t)("common.tokenB"),{tickData:u,activeTick:v,loading:p}=I({tokenA:e,tokenB:i,feeTier:o,isReversed:n,chainId:d}),h=(0,O.useTheme)(),x=(0,g.useMemo)((()=>{var e,i;return{data:(null===(e=u)||void 0===e?void 0:e.barData)??[],tokenAColor:n?h.token1:h.token0,tokenBColor:n?h.token0:h.token1,highlightColor:h.surface3,activeTick:v,activeTickProgress:null===(i=u)||void 0===i?void 0:i.activeRangePercentage}}),[v,n,h,u]);return p?(0,t.jsx)(B.sT,{}):(0,t.jsx)(a.kL,{height:W,Model:j,params:x,TooltipBody:o!==r.FeeAmount.LOWEST?({data:e})=>{var i,o;return(0,t.jsx)(le,{data:e,tokenADescriptor:s,tokenBDescriptor:c,currentTick:null===(o=u)||void 0===o||null===(i=o.activeRangeData)||void 0===i?void 0:i.tick})}:void 0,children:e=>{var i,o,n;const d=e??(null===(i=u)||void 0===i?void 0:i.activeRangeData),r=(0,t.jsxs)("div",{children:[(0,t.jsx)(de,{children:`1 ${s} = ${null===(o=d)||void 0===o?void 0:o.price0} ${c}`}),(0,t.jsx)(de,{children:`1 ${c} = ${null===(n=d)||void 0===n?void 0:n.price1} ${s}`}),d&&d.tick===v&&(0,t.jsx)(re,{color:"neutral2",paddingTop:"4px",children:(0,t.jsx)(K.Trans,{i18nKey:"pool.activeRange"})})]});return(0,t.jsx)(l._,{value:r})}})}var se=o(48836),ce=o(99454),ue=o(96857),ve=o(66203),pe=o(69952),he=o(80187),xe=o(23652),me=o(52529);const ge=(0,N.ZP)(me.X)`
  height: ${({$height:e})=>e?`${e}px`:"16px"};
  width: ${({$width:e})=>e?`${e}px`:"80px"};
`,ke=(0,N.ZP)(me.X)`
  height: 20px;
  width: 20px;
  border-radius: 100px;
`;var ye=o(70789),fe=o(36710),je=o(55478),be=o(83792),Pe=o(73397),Te=o(12799),we=o(93465),$e=o(51578),Ie=o(48111),Ce=o(43454),Se=o(54872),Le=o(30754),Ze=o(92457);const Ae=(0,N.ZP)(U.dL)`
  &:hover {
    // Override hover behavior from ExternalLink
    opacity: 1;
  }
`,Ve=N.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: 'flex-start';
  width: 100%;
  ${z.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
`,De=(0,N.ZP)(F.T.LabelMicro)`
  background: ${({theme:e})=>e.surface2};
  padding: 2px 6px;
  border-radius: 4px;
`,Re=(0,N.ZP)(pe.o)`
  ${U.iV}
  fill: ${({theme:e})=>e.neutral2};
`,Be=(0,N.ZP)(me.X)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;function qe({chainId:e,poolAddress:i,token0:o,token1:n,loading:d}){var r,l;const a=(0,Pe.tq)({chainId:e,withFallback:!0}),s=`/explore/${a.toLowerCase()}`,c=`/explore/pools/${a.toLowerCase()}`;return(0,t.jsxs)(se.zG,{"aria-label":"breadcrumb-nav",children:[(0,t.jsxs)(se.yY,{to:s,children:[(0,t.jsx)(K.Trans,{i18nKey:"common.explore"})," ",(0,t.jsx)($e.Z,{size:14})]}),(0,t.jsxs)(se.yY,{to:c,children:[(0,t.jsx)(K.Trans,{i18nKey:"common.pools"})," ",(0,t.jsx)($e.Z,{size:14})]}),d||!i?(0,t.jsx)(ge,{$width:200}):(0,t.jsx)(se.f3,{address:i,poolName:`${null===(r=o)||void 0===r?void 0:r.symbol} / ${null===(l=n)||void 0===l?void 0:l.symbol}`})]})}const _e=N.ZP.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: max-content;
  align-items: center;
`,Ee=(0,N.ZP)(F.T.HeadlineMedium)`
  font-size: 24px !important;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    font-size: 18px !important;
    line-height: 24px !important;
  }
`,Me=({token0:e,token1:i,chainId:o,feeTier:n,protocolVersion:r,toggleReversed:l})=>{var a,s,c,u;const{formatPercent:v}=(0,k.Gb)(),p=n&&v(new d.Percent(n,100*Se.BIPS_BASE));return(0,t.jsxs)(_e,{children:[(0,t.jsx)("div",{children:(0,t.jsxs)(Ee,{children:[(0,t.jsx)(ze,{to:(0,_.dG)({address:null===(a=e)||void 0===a?void 0:a.address,chain:(0,Pe.tq)({chainId:o,withFallback:!0})}),children:null===(s=e)||void 0===s?void 0:s.symbol}),"\xa0/\xa0",(0,t.jsx)(ze,{to:(0,_.dG)({address:null===(c=i)||void 0===c?void 0:c.address,chain:(0,Pe.tq)({chainId:o,withFallback:!0})}),children:null===(u=i)||void 0===u?void 0:u.symbol})]})}),r===V.ProtocolVersion.V2&&(0,t.jsx)(De,{children:"v2"}),!!p&&(0,t.jsx)(De,{children:p}),(0,t.jsx)(Re,{"data-testid":"toggle-tokens-reverse-arrows",onClick:l})]})},Ne=(0,N.ZP)(be.ZP)`
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  gap: 12px;
  padding: 10px 8px;
  border-radius: 8px;
  ${U.cw}
  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Oe=({address:e,chainId:i,tokens:o})=>{var n;const d=(0,O.useTheme)(),r=o[0]&&(0,_.Pc)(o[0]),l=2===o.length,a=l&&o[1]?[r,(0,_.Pc)(o[1])]:[r],s=e===Te.d,c=i&&e&&(0,Le.getExplorerLink)(i,e,s?Le.ExplorerDataType.NATIVE:l?Le.ExplorerDataType.ADDRESS:Le.ExplorerDataType.TOKEN);return i&&c?(0,t.jsx)(Ae,{href:c,children:(0,t.jsxs)(Ne,{children:[(0,t.jsxs)(be.ZP,{gap:"sm",children:[l?(0,t.jsx)(xe.io,{chainId:i,currencies:a,size:24}):(0,t.jsx)(he.Z,{currency:r,size:24}),(0,t.jsx)(F.T.BodyPrimary,{children:l?(0,t.jsx)(K.Trans,{i18nKey:"common.pool"}):null===(n=o[0])||void 0===n?void 0:n.symbol}),(0,t.jsx)(F.T.BodySecondary,{children:(0,Ze.shortenAddress)(e)})]}),(0,t.jsx)(Ie.Z,{size:"16px",stroke:d.neutral2})]})}):(0,t.jsx)(Ne,{children:(0,t.jsx)(ge,{$width:117})})},Fe={...fe.jF,minWidth:235,borderRadius:"$rounded16"},Ue=({chainId:e,poolAddress:i,poolName:o,token0:n,token1:d})=>{var r,l;const a=(0,O.useTheme)(),[s,c]=(0,g.useState)(!1);return(0,t.jsxs)(be.ZP,{width:"max-content",justify:"flex-end",gap:"sm",children:[(0,t.jsx)(ce.u,{isOpen:s,toggleOpen:c,menuLabel:e===X.UniverseChainId.Mainnet?(0,t.jsx)(ue.P,{width:"18px",height:"18px",fill:a.neutral1}):(0,t.jsx)(ve.J,{width:"18px",height:"18px",fill:a.neutral1}),internalMenuItems:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Oe,{address:i,chainId:e,tokens:[n,d]}),(0,t.jsx)(Oe,{address:null===(r=n)||void 0===r?void 0:r.address,chainId:e,tokens:[n]}),(0,t.jsx)(Oe,{address:null===(l=d)||void 0===l?void 0:l.address,chainId:e,tokens:[d]})]}),tooltipText:(0,K.t)("pool.explorers"),hideChevron:!0,buttonStyle:fe.TX,dropdownStyle:Fe,adaptToSheet:!1}),(0,t.jsx)(ye.Z,{name:o,utmSource:"share-pool"})]})},ze=(0,N.ZP)(Ce.rU)`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  ${U.iV}
`;function He({chainId:e,poolAddress:i,token0:o,token1:n,feeTier:d,protocolVersion:r,toggleReversed:l,loading:a}){var s,c;const u=!(0,we.e)().sm,v=`${null===(s=o)||void 0===s?void 0:s.symbol} / ${null===(c=n)||void 0===c?void 0:c.symbol}`,p=(0,g.useMemo)((()=>o&&n?[(0,_.Pc)(o),(0,_.Pc)(n)]:[]),[o,n]);return a?(0,t.jsx)(Ve,{"data-testid":"pdp-header-loading-skeleton",children:u?(0,t.jsxs)(je.ZP,{gap:"sm",style:{width:"100%"},children:[(0,t.jsx)(Be,{}),(0,t.jsx)(ge,{$height:40,$width:137})]}):(0,t.jsxs)(be.ZP,{gap:"sm",children:[(0,t.jsx)(Be,{}),(0,t.jsx)(ge,{$height:40,$width:137})]})}):(0,t.jsx)(Ve,{children:u?(0,t.jsxs)(je.ZP,{gap:"sm",style:{width:"100%"},children:[(0,t.jsxs)(be.ZP,{gap:"md",justify:"space-between",children:[e&&(0,t.jsx)(xe.io,{"data-testid":"double-token-logo",chainId:e,currencies:p}),(0,t.jsx)(Ue,{chainId:e,poolAddress:i,poolName:v,token0:o,token1:n})]}),(0,t.jsx)(Me,{token0:o,token1:n,chainId:e,feeTier:d,protocolVersion:r,toggleReversed:l})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(be.ZP,{gap:"md",children:[e&&(0,t.jsx)(xe.io,{"data-testid":"double-token-logo",chainId:e,currencies:p}),(0,t.jsx)(Me,{token0:o,token1:n,chainId:e,feeTier:d,protocolVersion:r,toggleReversed:l})]}),(0,t.jsx)(Ue,{chainId:e,poolAddress:i,poolName:v,token0:o,token1:n})]})})}var Ke=o(75985),Xe=o(74689),We=o(94191),Qe=o(6282),Ge=o(43969);const Ye=(0,N.ZP)(F.T.BodyPrimary)`
  display: none;

  @media (max-width: ${Ge.j$.lg}px) and (min-width: ${Ge.j$.xs}px) {
    display: block;
  }
  ${U.cw}
`,Je=(0,N.ZP)(be.ZP)`
  gap: 8px;
  margin-right: 12px;
  ${U.cw}
  ${({isClickable:e})=>e&&U.iV}
`,ei=(0,N.ZP)(F.T.BodyPrimary)`
  flex-shrink: 0;

  @media (max-width: ${Ge.j$.lg}px) and (min-width: ${Ge.j$.xs}px) {
    color: ${({theme:e})=>e.neutral2};
  }
`,ii=(0,N.ZP)(be.ZP)`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  flex-shrink: 0;
  ${U.iV}
`,oi=(0,N.ZP)(We.Z)`
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.neutral2};
  flex-shrink: 0;
`,ti=N.ZP.div`
  padding: 8px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  display: flex;
  ${U.iV}
`,ni=(0,N.ZP)(be.ZP)`
  gap: 8px;
  flex-shrink: 0;
  width: max-content;
`;function di({address:e,chainId:i,tokens:o,loading:n}){var d,r,l,a,s,c,u;const v=(0,O.useTheme)(),p=e===Te.d,h=o[0]&&(0,_.Pc)(o[0]),[x,m]=(0,Xe.Z)(),k=(0,g.useCallback)((()=>{const i=(0,Ze.isAddress)(e);i&&m(i)}),[e,m]),y=2===o.length,f=y&&o[1]?[h,(0,_.Pc)(o[1])]:[h],j=e&&i&&(0,Le.getExplorerLink)(i,e,p?Le.ExplorerDataType.NATIVE:y?Le.ExplorerDataType.ADDRESS:Le.ExplorerDataType.TOKEN),b=(0,Qe.s0)(),P=(0,Pe.tq)({chainId:i,withFallback:!0}),T=(0,g.useCallback)((()=>{var e;y||b((0,_.dG)({address:null===(e=o[0])||void 0===e?void 0:e.address,chain:P}))}),[b,o,y,P]),[w,$]=(0,g.useState)(!1),I=(0,g.useCallback)((e=>{if(e){e.clientWidth<e.scrollWidth&&$((e=>e?"both":"start"))}}),[w]);return!n&&e&&i?(0,t.jsxs)(be.ZP,{align:"space-between",children:[(0,t.jsxs)(Je,{"data-testid":y?`pdp-pool-logo-${null===(d=o[0])||void 0===d?void 0:d.symbol}-${null===(r=o[1])||void 0===r?void 0:r.symbol}`:`pdp-token-logo-${null===(l=o[0])||void 0===l?void 0:l.symbol}`,isClickable:!y,onClick:T,ref:I,children:[y?(0,t.jsx)(xe.io,{chainId:i,currencies:f,size:20}):(0,t.jsx)(he.Z,{currency:h,size:20}),(0,t.jsx)(Ye,{children:y?(0,t.jsx)(K.Trans,{i18nKey:"common.pool"}):null===(a=o[0])||void 0===a?void 0:a.name}),(0,t.jsx)(ei,{children:y?`${null===(s=o[0])||void 0===s?void 0:s.symbol} / ${null===(c=o[1])||void 0===c?void 0:c.symbol}`:(0,t.jsxs)(be.ZP,{gap:"4px",children:[null===(u=o[0])||void 0===u?void 0:u.symbol," ",(0,t.jsx)($e.Z,{size:16,color:v.neutral2})]})})]}),(0,t.jsxs)(ni,{children:[!p&&(0,t.jsx)(Ke.ZP,{placement:"bottom",size:Ke.Oz.Max,show:x,text:(0,K.t)("common.copied"),children:(0,t.jsxs)(ii,{"data-testid":`copy-address-${e}`,onClick:k,children:[(0,Ze.shortenAddress)(e,w?2:void 0,"both"===w?2:void 0),(0,t.jsx)(oi,{})]})}),j&&(0,t.jsx)(U.dL,{href:j,"data-testid":`explorer-url-${j}`,children:(0,t.jsx)(ti,{children:i===X.UniverseChainId.Mainnet?(0,t.jsx)(ue.P,{width:"16px",height:"16px",fill:v.neutral1}):(0,t.jsx)(ve.J,{width:"16px",height:"16px",fill:v.neutral1})})})]})]}):(0,t.jsxs)(be.ZP,{gap:"8px",padding:"6px 0px",children:[(0,t.jsx)(ke,{}),(0,t.jsx)(ge,{$width:117})]})}var ri=o(1890),li=o(97704),ai=o(22953),si=o(40834);const ci=(0,N.ZP)(ai.xv)`
  font-weight: 485;
  font-size: 24px;
  line-height: 36px;
  @media (max-width: ${Ge.j$.lg}px) {
    width: 100%;
  }
`,ui=(0,N.ZP)(je.ZP)`
  gap: 24px;
  padding: 20px;
  border-radius: 20px;
  background: ${({theme:e})=>e.surface2};
  width: 100%;
  z-index: 1;
  margin-top: ${({loaded:e})=>e&&"-24px"};

  @media (max-width: ${Ge.j$.lg}px) {
    flex-direction: row;
    background: transparent;
    flex-wrap: wrap;
    padding: 20px 0px;
    justify-content: space-between;
    margin-top: 0px;
  }
`,vi=(0,N.ZP)(je.ZP)`
  gap: 8px;
  flex: 1;
  min-width: 180px;

  @media (max-width: ${Ge.j$.sm}px) {
    min-width: 150px;
  }
`,pi=(0,N.ZP)(be.ZP)`
  justify-content: space-between;

  @media (max-width: ${Ge.j$.lg}px) {
    flex-direction: column;
  }
`,hi=(0,N.ZP)(be.ZP)`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  width: max-content;

  @media (max-width: ${Ge.j$.lg}px) {
    font-size: 20px;
    line-height: 28px;
    width: 100%;
  }
`,xi=(0,N.ZP)(Ce.rU)`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  ${U.iV}
`,mi=O.css`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: 1px solid ${({theme:e})=>e.surface2};
`,gi=O.css`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid ${({theme:e})=>e.surface2};
`,ki=N.ZP.div`
  height: 8px;
  width: ${({percent:e})=>100*e}%;
  background: ${({$color:e})=>e};
  ${({isLeft:e})=>e?mi:gi}
`,yi=(0,N.ZP)(me.X)`
  width: 180px;
  height: 40px;
`,fi=(0,N.ZP)(me.X)`
  width: 116px;
  height: 24px;
  border-radius: 8px;
`,ji=({token:e,chainId:i})=>{var o;const n=(0,we.e)().lg,{formatNumber:d}=(0,k.Gb)(),r=i?(0,_.vR)(i,e):e,l=(null===(o=r)||void 0===o?void 0:o.address)===Te.d&&i?(0,si.nativeOnChain)(i):e.currency;return(0,t.jsxs)(hi,{children:[!n&&(0,t.jsx)(he.Z,{currency:l,size:20,style:{marginRight:"8px"}}),d({input:e.tvl,type:k.sw.TokenQuantityStats}),"\xa0",(0,t.jsxs)(xi,{to:(0,_.dG)({address:r.address,chain:(0,Pe.tq)({chainId:i,withFallback:!0})}),children:[n&&(0,t.jsx)(he.Z,{currency:l,size:16,style:{marginRight:"4px",marginLeft:"4px"}}),r.symbol]})]})};function bi({poolData:e,isReversed:i,chainId:o,loading:n}){var d,r,l,a,s,c,u,v;const p=(0,we.e)().lg,h=(0,O.useTheme)(),x=(0,li.U8)(null===(r=e)||void 0===r||null===(d=r.token0)||void 0===d?void 0:d.address,o),m=(0,li.U8)(null===(a=e)||void 0===a||null===(l=a.token1)||void 0===l?void 0:l.address,o),[k,y]=(0,g.useMemo)((()=>{if(e&&e.tvlToken0&&e.token0Price&&e.tvlToken1&&e.token1Price){var o,t,n,d,r,l,a,s,c,u,v,p,h,g;const k=(null===(o=e)||void 0===o?void 0:o.tvlToken0)*(null===(t=e)||void 0===t?void 0:t.token0Price)+(null===(n=e)||void 0===n?void 0:n.tvlToken1)*(null===(d=e)||void 0===d?void 0:d.token1Price),y={...null===(r=e)||void 0===r?void 0:r.token0,price:null===(l=e)||void 0===l?void 0:l.token0Price,tvl:null===(a=e)||void 0===a?void 0:a.tvlToken0,percent:(null===(s=e)||void 0===s?void 0:s.tvlToken0)*(null===(c=e)||void 0===c?void 0:c.token0Price)/k,currency:x},f={...null===(u=e)||void 0===u?void 0:u.token1,price:null===(v=e)||void 0===v?void 0:v.token1Price,tvl:null===(p=e)||void 0===p?void 0:p.tvlToken1,percent:(null===(h=e)||void 0===h?void 0:h.tvlToken1)*(null===(g=e)||void 0===g?void 0:g.token1Price)/k,currency:m};return i?[f,y]:[y,f]}return[void 0,void 0]}),[x,m,i,e]);return!n&&k&&y&&e?(0,t.jsxs)(ui,{loaded:!0,children:[(0,t.jsx)(ci,{children:(0,t.jsx)(K.Trans,{i18nKey:"common.stats"})}),(0,t.jsxs)(vi,{children:[(0,t.jsx)(F.T.BodySecondary,{children:(0,t.jsx)(K.Trans,{i18nKey:"pool.balances"})}),(0,t.jsxs)(pi,{children:[(0,t.jsx)(ji,{token:k,chainId:o}),(0,t.jsx)(ji,{token:y,chainId:o})]}),p&&(0,t.jsxs)(be.ZP,{"data-testid":"pool-balance-chart",children:[(0,t.jsx)(ki,{percent:k.percent,$color:h.token0,isLeft:!0}),(0,t.jsx)(ki,{percent:y.percent,$color:h.token1,isLeft:!1})]})]}),(null===(s=e)||void 0===s?void 0:s.tvlUSD)&&(0,t.jsx)(wi,{title:(0,t.jsx)(K.Trans,{i18nKey:"common.totalValueLocked"}),value:e.tvlUSD,delta:e.tvlUSDChange}),void 0!==(null===(c=e)||void 0===c?void 0:c.volumeUSD24H)&&(0,t.jsx)(wi,{title:(0,t.jsx)(K.Trans,{i18nKey:"stats.24volume"}),value:e.volumeUSD24H,delta:e.volumeUSD24HChange}),void 0!==(null===(u=e)||void 0===u?void 0:u.volumeUSD24H)&&void 0!==(null===(v=e)||void 0===v?void 0:v.feeTier)&&(0,t.jsx)(wi,{title:(0,t.jsx)(K.Trans,{i18nKey:"stats.24fees"}),value:e.volumeUSD24H*(e.feeTier/1e6)})]}):(0,t.jsxs)(ui,{children:[(0,t.jsx)(ci,{children:(0,t.jsx)(fi,{})}),Array.from({length:4}).map(((e,i)=>(0,t.jsxs)(je.ZP,{gap:"md",children:[(0,t.jsx)(ge,{}),(0,t.jsx)(yi,{})]},`loading-info-row-${i}`)))]})}const Pi=(0,N.ZP)(be.ZP)`
  gap: 4px;
  width: 100%;
  align-items: flex-end;

  @media (max-width: ${Ge.j$.lg}px) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }
`,Ti=(0,N.ZP)(ai.xv)`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  font-weight: 485;
  line-height: 44px;

  @media (max-width: ${Ge.j$.lg}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;function wi({title:e,value:i,delta:o}){const{formatNumber:n,formatDelta:d}=(0,k.Gb)();return(0,t.jsxs)(vi,{children:[(0,t.jsx)(F.T.BodySecondary,{children:e}),(0,t.jsxs)(Pi,{children:[(0,t.jsx)(Ti,{children:n({input:i,type:k.sw.FiatTokenStats})}),!!o&&(0,t.jsxs)(be.ZP,{width:"max-content",padding:"4px 0px",children:[(0,t.jsx)(ri.Kx,{delta:o}),(0,t.jsx)(F.T.BodySecondary,{children:d(o)})]})]})]})}var $i=o(78903),Ii=o(3857),Ci=o(97456),Si=o(61808),Li=o(76696),Zi=o(10849),Ai=o(96238),Vi=o(22722),Di=o(37891),Ri=o(45283),Bi=o(63194),qi=o(57809),_i=o(41248),Ei=o(54884),Mi=o(85209);function Ni(e,i,o,t,n,d,r){try{var l=e[d](r),a=l.value}catch(s){return void o(s)}l.done?i(a):Promise.resolve(a).then(t,n)}const Oi=(0,N.ZP)(be.ZP)`
  gap: 12px;
  z-index: 1;

  @media (max-width: ${Ge.j$.lg}px) {
    gap: 8px;
    position: fixed;
    bottom: 0px;
    left: 0;
    margin: 8px;
    width: calc(100% - 16px);
    background: ${({theme:e})=>e.surface1};
    padding: 12px 32px;
    border: 1px solid ${({theme:e})=>e.surface3};
    border-radius: 20px;
    backdrop-filter: blur(10px);
    & > :first-child {
      margin-right: auto;
    }
    z-index: ${Ei.k.sticky};
  }
  @media (max-width: ${Ge.j$.md}px) {
    bottom: 56px;
  }
`,Fi=N.ZP.button`
  display: flex;
  flex-direction: row;
  padding: 12px 16px 12px 12px;
  border: unset;
  border-radius: 900px;
  width: ${({$open:e})=>e?"100px":"50%"};
  gap: 8px;
  color: ${({theme:e,$open:i})=>i?e.neutral1:e.accent1};
  background-color: ${({theme:e,$open:i})=>i?e.surface1:(0,_i.jb)(12,e.accent1)};
  justify-content: center;
  transition: ${({theme:e})=>`width ${e.transition.duration.medium} ${e.transition.timing.inOut}`};
  border: ${({theme:e,$open:i})=>i&&`1px solid ${e.surface3}`};
  ${U.iV}
  @media (max-width: ${Ge.j$.lg}px) {
    width: ${({$fixedWidth:e})=>e&&"120px"};
  }
  @media (max-width: ${Ge.j$.sm}px) {
    display: ${({$hideOnMobile:e})=>e&&"none"};
    width: ${({$fixedWidth:e})=>!e&&"100%"};
  }
`,Ui=(0,N.ZP)(pe.o)`
  fill: ${({theme:e})=>e.accent1};
  rotate: 90deg;
`,zi=(0,N.ZP)(me.X)`
  height: 44px;
  width: 175px;
  border-radius: 900px;
`,Hi=(0,N.ZP)(je.ZP)`
  z-index: 0;
  gap: 24px;
  visibility: ${({open:e})=>e?"visible":"hidden"};
  opacity: ${({open:e})=>e?"1":"0"};
  max-height: ${({open:e})=>e?"100vh":"0"};
  transition: ${({theme:e})=>`max-height ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  padding-bottom: ${({open:e})=>e?"24px":"0"};

  ${Si.R0} {
    &:before {
      background-color: unset;
    }
  }

  // Need to override the default visibility to properly hide
  ${Ci.Vt} {
    visibility: ${({open:e})=>e?"visible":"hidden"};
  }

  @media (max-width: ${Ge.j$.lg}px) {
    position: fixed;
    width: calc(100% - 16px);
    padding: 0px 12px 12px;
    border-radius: 24px;
    max-width: 480px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: ${Ei.k.fixed};
    background: ${({theme:e})=>e.surface1};
    transition: ${({theme:e})=>`opacity ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  }
`,Ki=(0,N.ZP)(je.ZP)`
  gap: 2px;
  display: none;
  @media (max-width: ${Ge.j$.lg}px) {
    display: flex;
  }
`;function Xi({chainId:e,token0:i,token1:o,feeTier:n,loading:d}){var r,l,a,s,c,u,v,p,h,x;const m=(0,Vi.m)(),{positions:y}=(0,Ii.Z)(m.address??"",e?[e]:void 0),f=y&&function(e,i,o,t){var n;return null===(n=e)||void 0===n?void 0:n.find((e=>{var n,d,r,l,a,s,c,u,v;return((null===(n=e)||void 0===n?void 0:n.details.token0.toLowerCase())===(null===(d=i)||void 0===d?void 0:d.address)||(null===(r=e)||void 0===r?void 0:r.details.token0.toLowerCase())===(null===(l=o)||void 0===l?void 0:l.address))&&((null===(a=e)||void 0===a?void 0:a.details.token1.toLowerCase())===(null===(s=i)||void 0===s?void 0:s.address)||(null===(c=e)||void 0===c?void 0:c.details.token1.toLowerCase())===(null===(u=o)||void 0===u?void 0:u.address))&&(null===(v=e)||void 0===v?void 0:v.details.fee)==t&&!e.closed}))}(y,i,o,n),j=null===(r=f)||void 0===r?void 0:r.details.tokenId,b=(0,Di.o)(),P=(0,Qe.s0)(),T=(0,Qe.TH)(),w=i&&(0,_.Pc)(i),$=o&&(0,_.Pc)(o),{data:I}=(0,Ai.vv)(),{balance0:C,balance1:S,balance0Fiat:L,balance1Fiat:Z}=(0,g.useMemo)((()=>{var t,n,d,r,l,a,s,c,u,v,p,h;const x=null===(r=I)||void 0===r||null===(d=r.portfolios)||void 0===d||null===(n=d[0])||void 0===n||null===(t=n.tokenBalances)||void 0===t?void 0:t.filter((i=>{var o,t;return(null===(t=i)||void 0===t||null===(o=t.token)||void 0===o?void 0:o.chain)===(0,Pe.tq)({chainId:e,withFallback:!0})})),m=null===(l=x)||void 0===l?void 0:l.find((e=>{var o,t,n;return(null===(t=e)||void 0===t||null===(o=t.token)||void 0===o?void 0:o.address)===(null===(n=i)||void 0===n?void 0:n.address)})),g=null===(a=x)||void 0===a?void 0:a.find((e=>{var i,t,n;return(null===(t=e)||void 0===t||null===(i=t.token)||void 0===i?void 0:i.address)===(null===(n=o)||void 0===n?void 0:n.address)}));return{balance0:(null===(s=m)||void 0===s?void 0:s.quantity)??0,balance1:(null===(c=g)||void 0===c?void 0:c.quantity)??0,balance0Fiat:(null===(v=m)||void 0===v||null===(u=v.denominatedValue)||void 0===u?void 0:u.value)??0,balance1Fiat:(null===(h=g)||void 0===h||null===(p=h.denominatedValue)||void 0===p?void 0:p.value)??0}}),[null===(l=I)||void 0===l?void 0:l.portfolios,e,null===(a=i)||void 0===a?void 0:a.address,null===(s=o)||void 0===s?void 0:s.address]),{formatNumber:A}=(0,k.Gb)(),V=A({input:C,type:k.sw.TokenNonTx}),D=A({input:S,type:k.sw.TokenNonTx}),R=L+Z,B=A({input:R,type:k.sw.PortfolioBalance}),q=function(){var i,o=(i=function*(){w&&$&&(m.chainId!==e&&e&&(yield b(e)),P(`/add/${(0,Mi.H)(w)}/${(0,Mi.H)($)}/${n}${j?`/${j}`:""}`,{state:{from:T.pathname}}))},function(){var e=this,o=arguments;return new Promise((function(t,n){var d=i.apply(e,o);function r(e){Ni(d,t,n,r,l,"next",e)}function l(e){Ni(d,t,n,r,l,"throw",e)}r(void 0)}))});return function(){return o.apply(this,arguments)}}(),[E,M]=(0,g.useReducer)((e=>!e),!1),N=(0,we.e)(),O=N.lg,U=!N.sm,z=(0,Zi.Xp)(null===(c=i)||void 0===c?void 0:c.address,e),H=(0,Zi.Xp)(null===(u=o)||void 0===u?void 0:u.address,e),X=(0,Zi.em)(z,H);return!d&&w&&$?(0,t.jsxs)(je.ZP,{gap:"lg",children:[(0,t.jsxs)(Oi,{children:[m.address&&(0,t.jsxs)(Ki,{children:[(0,t.jsx)(F.T.SubHeaderSmall,{children:(0,t.jsx)(K.Trans,{i18nKey:"pool.yourBalances"})}),(0,t.jsxs)(be.ZP,{gap:"8px",children:[(0,t.jsxs)(F.T.HeadlineSmall,{children:[V," ",w.symbol]}),(0,t.jsx)(F.T.HeadlineSmall,{color:"neutral3",children:"|"}),(0,t.jsxs)(F.T.HeadlineSmall,{children:[D," ",$.symbol]}),Boolean(R)&&!U&&(0,t.jsxs)(F.T.Caption,{children:["(",B,")"]})]})]}),(0,t.jsx)(Fi,{onClick:M,$open:E,$fixedWidth:Boolean(m.address),"data-testid":`pool-details-${E?"close":"swap"}-button`,children:E?(0,t.jsxs)(t.Fragment,{children:[O&&(0,t.jsx)(Bi.Z,{size:20}),(0,t.jsx)(F.T.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,t.jsx)(K.Trans,{i18nKey:"common.close"})})]}):(0,t.jsxs)(t.Fragment,{children:[O&&(0,t.jsx)(Ui,{}),(0,t.jsx)(F.T.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,t.jsx)(K.Trans,{i18nKey:"common.swap"})})]})}),(0,t.jsxs)(Fi,{onClick:q,"data-testid":"pool-details-add-liquidity-button",$fixedWidth:Boolean(m.address),$hideOnMobile:!0,children:[O&&(0,t.jsx)(qi.Z,{size:20}),(0,t.jsx)(F.T.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,t.jsx)(K.Trans,{i18nKey:"common.addLiquidity"})})]})]}),(0,t.jsxs)(Hi,{open:E,"data-testid":"pool-details-swap-modal",children:[(0,t.jsx)(Ri.HY,{syncTabToUrl:!1,chainId:e,initialInputCurrency:w,initialOutputCurrency:$,compact:!0,disableTokenInputs:e!==m.chainId}),Boolean(X)&&(0,t.jsx)(Li.Z,{tokenAddress:(X===z?null===(v=i)||void 0===v?void 0:v.address:null===(p=o)||void 0===p?void 0:p.address)??"",warning:X??Zi.Jf,plural:Boolean(z&&H),tokenSymbol:X===z?null===(h=i)||void 0===h?void 0:h.symbol:null===(x=o)||void 0===x?void 0:x.symbol})]}),(0,t.jsx)($i.ZM,{$open:E&&!O,$maxWidth:Ge.j$.lg,$zIndex:Ei.k.sticky,onClick:M})]}):(0,t.jsxs)(Oi,{"data-testid":"pdp-buttons-loading-skeleton",children:[(0,t.jsx)(Ki,{children:(0,t.jsx)(zi,{})}),(0,t.jsx)(zi,{}),(0,t.jsx)(zi,{})]})}const Wi=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",...e,children:[(0,t.jsxs)("g",{clipPath:"url(#clip0_2958_135280)",children:[(0,t.jsx)("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M2.46484 2.46509L9.53484 9.53509",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"clip0_2958_135280",children:(0,t.jsx)("rect",{width:"12",height:"12",fill:"white"})})})]});var Qi=o(57221),Gi=o(74695);function Yi(e,i,o,t,n,d,r){try{var l=e[d](r),a=l.value}catch(s){return void o(s)}l.done?i(a):Promise.resolve(a).then(t,n)}function Ji(e){return function(){var i=this,o=arguments;return new Promise((function(t,n){var d=e.apply(i,o);function r(e){Yi(d,t,n,r,l,"next",e)}function l(e){Yi(d,t,n,r,l,"throw",e)}r(void 0)}))}}const eo=(0,N.ZP)(je.ZP)`
  gap: 24px;
  margin-top: 24px;
  width: 100%;
`,io=(0,N.ZP)(je.ZP)`
  gap: 4px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 12px;
  width: 100%;
  ${U.iV}
  padding: 16px;
`,oo=(0,N.ZP)(F.T.LabelMicro)`
  padding: 4px 6px;
  background: ${({theme:e})=>e.surface2};
`,to=(0,N.ZP)(be.ZP)`
  gap: 8px;
  width: max-content;
  margin-right: 0;
  margin-left: auto;
  color: ${({theme:e,status:i})=>"In range"===i?e.success:"Out of range"===i?e.deprecated_accentWarning:e.neutral2};
`,no=(0,N.ZP)(be.ZP)`
  gap: 10px;

  @media screen and (max-width: ${Ge.j$.sm}px) {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
`,ro=(0,N.ZP)((e=>(0,t.jsx)("svg",{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path",{d:"M4.00284 8.5L0.184659 4.68182L4.00284 0.863636L4.65909 1.51136L1.95739 4.21307H12.1335L9.43182 1.51136L10.0881 0.863636L13.9062 4.68182L10.0881 8.5L9.43182 7.84375L12.1335 5.15057H1.95739L4.65909 7.84375L4.00284 8.5Z",fill:"#5E5E5E"})})))`
  @media screen and (max-width: ${Ge.j$.sm}px) {
    display: none;
  }
`,lo=(0,N.ZP)(F.T.Caption)`
  width: max-content;
  white-space: nowrap;
`,ao=N.ZP.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.success};
`;function so({positionInfo:e}){const{t:i}=(0,K.useTranslation)(),o=[(0,li.U8)(e.details.token0,e.chainId),(0,li.U8)(e.details.token1,e.chainId)],n=(0,Vi.m)(),d=(0,Qe.s0)(),r=(0,Di.o)(),l=(0,O.useTheme)(),{formatTickPrice:a}=(0,k.Gb)(),s=(0,g.useCallback)(Ji((function*(){n.chainId!==e.chainId&&(yield r(e.chainId)),d("/pool/"+e.details.tokenId)})),[d,e.chainId,e.details.tokenId,r,n.chainId]),c=e.inRange?"In range":e.closed?"Closed":"Out of range",u=e.position.token0PriceLower.invert(),v=e.position.token0PriceUpper.invert(),p={LOWER:0===parseFloat(v.toFixed(0)),UPPER:parseFloat(u.toFixed(0))>Number.MAX_SAFE_INTEGER};return(0,t.jsxs)(io,{onClick:s,children:[(0,t.jsxs)(be.ZP,{gap:"8px",children:[(0,t.jsx)(xe.ge,{currencies:o,size:16}),(0,t.jsxs)(F.T.SubHeader,{children:[e.pool.token0.symbol,"/",e.pool.token1.symbol]}),(0,t.jsxs)(oo,{children:[e.pool.fee/Se.BIPS_BASE,"%"]}),(0,t.jsxs)(to,{status:c,children:[(0,t.jsx)(F.T.Caption,{color:"inherit",children:c}),"In range"===c&&(0,t.jsx)(ao,{}),"Out of range"===c&&(0,t.jsx)(Qi.Z,{size:12,color:l.deprecated_accentWarning}),"Closed"===c&&(0,t.jsx)(Wi,{})]})]}),(0,t.jsxs)(no,{children:[(0,t.jsxs)(lo,{"data-testid":`position-min-${v.toFixed(0)}`,children:[(0,t.jsx)(K.Trans,{i18nKey:"pool.min.label"}),"\xa0",i("liquidityPool.positions.price",{amountWithSymbol:`${a({price:v,atLimit:p,direction:Gi.Mb.LOWER})} ${e.pool.token0.symbol}`,outputToken:e.pool.token1.symbol})]}),(0,t.jsx)(ro,{}),(0,t.jsxs)(lo,{"data-testid":`position-max-${u.toFixed(0)}`,children:[(0,t.jsx)(K.Trans,{i18nKey:"pool.max.label"}),"\xa0",i("liquidityPool.positions.price",{amountWithSymbol:`${a({price:u,atLimit:p,direction:Gi.Mb.UPPER})} ${e.pool.token0.symbol}`,outputToken:e.pool.token1.symbol})]})]})]})}function co({positions:e}){return(0,t.jsx)(eo,{children:e.map(((e,i)=>(0,t.jsx)(so,{positionInfo:e},`pool-position-${i}`)))})}var uo=o(73705),vo=o(36365),po=o(90184),ho=o(88339),xo=o(39650),mo=(e=>(e.BUY="Buy",e.SELL="Sell",e.REMOVE="Remove",e.ADD="Add",e))(mo||{});const go=25;var ko=o(93919);const yo=(0,N.ZP)(U.dL)`
  color: ${({theme:e})=>e.neutral2};
  stroke: ${({theme:e})=>e.neutral2};
`,fo=N.ZP.div`
  min-height: 256px;
`;const jo={0:120,1:144,2:100,3:125,4:125,5:125};function bo(e,i){var o,t,n;if((null===(o=i)||void 0===o?void 0:o.address)===Te.d){var d;const o=(0,_.Tz)(i.chain);return o&&e.id.toLowerCase()===(null===(d=si.WRAPPED_NATIVE_CURRENCY[o])||void 0===d?void 0:d.address.toLowerCase())}return e.id.toLowerCase()===(null===(n=i)||void 0===n||null===(t=n.address)||void 0===t?void 0:t.toLowerCase())}function Po({poolAddress:e,token0:i,token1:o,protocolVersion:n}){var d;const r=(0,_.L7)((0,Pe.WN)(),{fallbackToEthereum:!0}),l=(0,ko.X)(),{formatNumber:a,formatFiatPrice:s}=(0,k.Gb)(),[c,u]=(0,g.useReducer)((e=>!e),!1),v=(0,g.useRef)(null),[p,h]=(0,g.useState)([mo.BUY,mo.SELL,mo.REMOVE,mo.ADD]),{transactions:x,loading:m,loadMore:y,error:f}=function(e,i,o=["Buy","Sell","Remove","Add"],t,n=V.ProtocolVersion.V3,d=go){var r,l,a,s,c;const{loading:u,error:v,data:p,fetchMore:h}=(0,V.useV3PoolTransactionsQuery)({variables:{first:d,chain:(0,Pe.tq)({chainId:i,withFallback:!0}),address:e},skip:n!==V.ProtocolVersion.V3}),{loading:x,error:m,data:k,fetchMore:y}=(0,V.useV2PairTransactionsQuery)({variables:{first:d,chain:(0,Pe.tq)({chainId:i,withFallback:!0}),address:e},skip:!i||n!==V.ProtocolVersion.V2}),f=(0,g.useRef)(!1),{transactions:j,loading:b,fetchMore:P,error:T}=n===V.ProtocolVersion.V3?{transactions:null===(l=p)||void 0===l||null===(r=l.v3Pool)||void 0===r?void 0:r.transactions,loading:u,fetchMore:h,error:v}:{transactions:null===(s=k)||void 0===s||null===(a=s.v2Pair)||void 0===a?void 0:a.transactions,loading:x,fetchMore:y,error:m},w=(0,g.useCallback)((({onComplete:e})=>{var i,o;f.current||(f.current=!0,P({variables:{cursor:null===(o=j)||void 0===o||null===(i=o[j.length-1])||void 0===i?void 0:i.timestamp},updateQuery:(i,{fetchMoreResult:o})=>{var t,d,r;if(!o)return i;null===(t=e)||void 0===t||t();const l=n===V.ProtocolVersion.V3?{v3Pool:{...o.v3Pool,transactions:[...(null===(d=i.v3Pool)||void 0===d?void 0:d.transactions)??[],...o.v3Pool.transactions]}}:{v2Pair:{...o.v2Pair,transactions:[...(null===(r=i.v2Pair)||void 0===r?void 0:r.transactions)??[],...o.v2Pair.transactions]}};return f.current=!1,l}}))}),[P,j,n]),$=(0,g.useMemo)((()=>{var e;return null===(e=j??[])||void 0===e?void 0:e.map((e=>{var n,d,r,l,a,s;if(!e)return;const c=parseFloat(e.token0Quantity)>0?e.token0:e.token1,u=(null===(n=t)||void 0===n?void 0:n.address)===Te.d?null===(d=si.WRAPPED_NATIVE_CURRENCY[i??X.UniverseChainId.Mainnet])||void 0===d?void 0:d.address:null===(r=t)||void 0===r?void 0:r.address,v=(null===(a=c)||void 0===a||null===(l=a.address)||void 0===l?void 0:l.toLowerCase())===(null===(s=u)||void 0===s?void 0:s.toLowerCase()),p=e.type===V.PoolTransactionType.Swap?v?"Sell":"Buy":e.type===V.PoolTransactionType.Remove?"Remove":"Add";return o.includes(p)?{timestamp:e.timestamp,transaction:e.hash,pool:{token0:{id:e.token0.address??"",symbol:e.token0.symbol??""},token1:{id:e.token1.address??"",symbol:e.token1.symbol??""}},maker:e.account,amount0:parseFloat(e.token0Quantity),amount1:parseFloat(e.token1Quantity),amountUSD:e.usdValue.value,type:p}:void 0})).filter((e=>void 0!==e))}),[j,null===(c=t)||void 0===c?void 0:c.address,i,o]);return(0,g.useMemo)((()=>({transactions:$,loading:b,loadMore:w,error:T})),[$,b,w,T])}(e,r.id,p,i,n),j=m||!!f,b=(0,g.useMemo)((()=>{const e=(0,uo.Cl)();return[e.accessor((e=>e),{id:"timestamp",header:()=>(0,t.jsx)(po.b,{minWidth:jo[0],justifyContent:"flex-start",children:(0,t.jsxs)(be.ZP,{gap:"4px",children:[(0,t.jsx)(xo.iX,{direction:_.N9.Desc}),(0,t.jsx)(xo.Hu,{active:!0,children:(0,t.jsx)(K.Trans,{i18nKey:"common.time"})})]})}),cell:e=>{var i,o,n,d;return(0,t.jsx)(po.b,{loading:j,minWidth:jo[0],justifyContent:"flex-start",children:(0,t.jsx)(xo._q,{timestamp:Number(null===(i=(o=e).getValue)||void 0===i?void 0:i.call(o).timestamp),link:(0,Le.getExplorerLink)(r.id,null===(n=(d=e).getValue)||void 0===n?void 0:n.call(d).transaction,Le.ExplorerDataType.TRANSACTION)})})}}),e.accessor((e=>{let o,n;var d;if(e.type===mo.BUY)o="success",n=(0,t.jsxs)("span",{children:[(0,t.jsx)(K.Trans,{i18nKey:"common.buy.label"}),"\xa0",null===(d=i)||void 0===d?void 0:d.symbol]});else if(e.type===mo.SELL){var r;o="critical",n=(0,t.jsxs)("span",{children:[(0,t.jsx)(K.Trans,{i18nKey:"common.sell.label"}),"\xa0",null===(r=i)||void 0===r?void 0:r.symbol]})}else o=e.type===mo.ADD?"success":"critical",n=e.type===mo.ADD?(0,t.jsx)(K.Trans,{i18nKey:"common.add.label"}):(0,t.jsx)(K.Trans,{i18nKey:"common.remove.label"});return(0,t.jsx)(F.T.BodyPrimary,{color:o,children:n})}),{id:"swap-type",header:()=>(0,t.jsx)(po.b,{minWidth:jo[1],justifyContent:"flex-start",children:(0,t.jsxs)(xo.j4,{clickable:c,onPress:()=>u(),ref:v,children:[(0,t.jsx)(ho.w,{allFilters:Object.values(mo),activeFilter:p,setFilters:h,isOpen:c,toggleFilterModal:u,anchorRef:v}),(0,t.jsx)(F.T.BodySecondary,{children:(0,t.jsx)(K.Trans,{i18nKey:"common.type.label"})})]})}),cell:e=>{var i,o;return(0,t.jsx)(po.b,{loading:j,minWidth:jo[1],justifyContent:"flex-start",children:null===(i=(o=e).getValue)||void 0===i?void 0:i.call(o)})}}),e.accessor((e=>e.amountUSD),{id:"fiat-value",header:()=>(0,t.jsx)(po.b,{minWidth:jo[3],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(F.T.BodySecondary,{children:l})}),cell:e=>{var i,o;return(0,t.jsx)(po.b,{loading:j,minWidth:jo[3],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(F.T.BodyPrimary,{children:s({price:null===(i=(o=e).getValue)||void 0===i?void 0:i.call(o)})})})}}),e.accessor((e=>bo(e.pool.token0,i)?e.amount0:e.amount1),{id:"input-amount",header:()=>{var e;return(0,t.jsx)(po.b,{loading:j,minWidth:jo[4],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(F.T.BodySecondary,{children:null===(e=i)||void 0===e?void 0:e.symbol})})},cell:e=>{var i,o;return(0,t.jsx)(po.b,{loading:j,minWidth:jo[4],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(F.T.BodyPrimary,{children:a({input:Math.abs((null===(i=(o=e).getValue)||void 0===i?void 0:i.call(o))??0),type:k.sw.TokenTx})})})}}),e.accessor((e=>bo(e.pool.token0,i)?e.amount1:e.amount0),{id:"output-amount",header:()=>{var e;return(0,t.jsx)(po.b,{loading:j,minWidth:jo[5],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(F.T.BodySecondary,{children:null===(e=o)||void 0===e?void 0:e.symbol})})},cell:e=>{var i,o;return(0,t.jsx)(po.b,{loading:j,minWidth:jo[5],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(F.T.BodyPrimary,{children:a({input:Math.abs((null===(i=(o=e).getValue)||void 0===i?void 0:i.call(o))??0),type:k.sw.TokenTx})})})}}),e.accessor((e=>e.maker),{id:"maker-address",header:()=>(0,t.jsx)(po.b,{minWidth:jo[2],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(F.T.BodySecondary,{children:(0,t.jsx)(K.Trans,{i18nKey:"common.wallet.label"})})}),cell:e=>{var i,o,n,d;return(0,t.jsx)(po.b,{loading:j,minWidth:jo[2],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(yo,{href:(0,Le.getExplorerLink)(r.id,null===(i=(o=e).getValue)||void 0===i?void 0:i.call(o),Le.ExplorerDataType.ADDRESS),children:(0,t.jsx)(F.T.BodyPrimary,{children:(0,Ze.shortenAddress)(null===(n=(d=e).getValue)||void 0===n?void 0:n.call(d),0)})})})}})]}),[l,r.id,p,c,s,a,j,i,null===(d=o)||void 0===d?void 0:d.symbol]);return(0,t.jsx)(fo,{"data-testid":"pool-details-transactions-table",children:(0,t.jsx)(vo.i,{columns:b,data:x,loading:m,error:f,loadMore:y,maxHeight:600})})}const To=(0,N.ZP)(F.T.HeadlineMedium)`
  color: ${({theme:e,active:i})=>!i&&e.neutral2};
  ${({disabled:e})=>!e&&U.iV}
  user-select: none;
`;function wo({poolAddress:e,token0:i,token1:o,protocolVersion:n}){var d;const[l,a]=(0,g.useState)("transactions"),s=(0,_.L7)((0,Pe.WN)(),{fallbackToEthereum:!0}),c=(0,Vi.m)(),{positions:u}=(0,Ii.Z)(c.address??"",[s.id]),v=(0,g.useMemo)((()=>{var i;return(null===(i=u)||void 0===i?void 0:i.filter((i=>r.Pool.getAddress(i.pool.token0,i.pool.token1,i.pool.fee).toLowerCase()===e.toLowerCase())))??[]}),[e,u]);return(0,t.jsxs)(je.ZP,{gap:"lg",children:[(0,t.jsxs)(be.ZP,{gap:"16px",children:[(0,t.jsx)(To,{active:"transactions"===l,onClick:()=>a("transactions"),disabled:!v.length,children:(0,t.jsx)(K.Trans,{i18nKey:"common.transactions"})}),Boolean(v.length)&&(0,t.jsxs)(To,{active:"positions"===l,onClick:()=>a("positions"),children:[(0,t.jsx)(K.Trans,{i18nKey:"pool.positions"}),` (${null===(d=v)||void 0===d?void 0:d.length})`]})]}),"transactions"===l?(0,t.jsx)(Po,{poolAddress:e,token0:i,token1:o,protocolVersion:n}):(0,t.jsx)(co,{positions:v})]})}var $o=o(83123),Io=o(63490),Co=o.n(Io);function So(e){if(!e)return;const i=(new Date).getTime(),o=(i-Co()("1d"))/1e3,t=(i-Co()("2d"))/1e3,n=e.filter((e=>{var i;return void 0!==(null===(i=e)||void 0===i?void 0:i.timestamp)&&e.timestamp>=o})).reduce(((e,i)=>e+i.value),0),d=e.filter((e=>{var i;return void 0!==(null===(i=e)||void 0===i?void 0:i.timestamp)&&e.timestamp>=t&&e.timestamp<o})).reduce(((e,i)=>e+i.value),0);return(n-d)/d*100}var Lo=o(54971),Zo=o(25543);const Ao=e=>{var i,o;const t=null===(i=e)||void 0===i?void 0:i.token0.symbol,n=null===(o=e)||void 0===o?void 0:o.token1.symbol,d=(0,K.t)("common.buyAndSell");return t&&n?`${t}/${n}: ${d}`:d};var Vo=o(80438),Do=o(437),Ro=o(48313);const Bo=(0,N.ZP)(be.ZP)`
  padding: 0 16px 52px;
  justify-content: center;
  width: 100%;
  gap: 40px;
  align-items: flex-start;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 48px 20px;
  }
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.xl}px) {
    gap: 60px;
  }
`,qo=(0,N.ZP)(je.ZP)`
  gap: 40px;
  max-width: 780px;
  overflow: hidden;
  justify-content: flex-start;

  @media (max-width: ${Ge.j$.lg}px) {
    width: 100%;
    max-width: unset;
  }
`,_o=N.ZP.hr`
  border: 0.5px solid ${({theme:e})=>e.surface3};
  width: 100%;
`,Eo=(0,N.ZP)(je.ZP)`
  gap: 24px;
  width: 360px;

  @media (max-width: ${Ge.j$.lg}px) {
    margin: 44px 0px;
    width: 100%;
    min-width: unset;
    & > *:first-child {
      margin-top: -24px;
    }
  }
`,Mo=(0,N.ZP)(je.ZP)`
  gap: 24px;
  padding: 20px;

  @media (max-width: ${Ge.j$.lg}px) and (min-width: ${Ge.j$.sm}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: unset;
  }

  @media (max-width: ${Ge.j$.sm}px) {
    padding: unset;
  }
`,No=(0,N.ZP)(ai.xv)`
  width: 100%;
  font-size: 24px;
  font-weight: 485;
  line-height: 32px;
`,Oo=(0,N.ZP)(je.ZP)`
  gap: 16px;
  width: 100%;
`;function Fo(){var e,i,o,d,r,l,a,s,c,u,v,p,h,x,m,k,y,f,j,b,P,T,w,$,I,C,S,L,Z,A;const{poolAddress:D}=(0,Qe.UO)(),R=(0,_.L7)((0,Pe.WN)()),{data:B,loading:q}=function(e,i){var o,t;const{loading:n,error:d,data:r}=(0,V.useV3PoolQuery)({variables:{chain:(0,Pe.tq)({chainId:i,withFallback:!0}),address:e},errorPolicy:"all"}),{loading:l,error:a,data:s}=(0,V.useV2PairQuery)({variables:{chain:(0,Pe.tq)({chainId:i,withFallback:!0}),address:e},skip:!i,errorPolicy:"all"});return(0,g.useMemo)((()=>{var e,i,o,t,c,u,v,p,h,x,m,g,k,y,f,j,b,P;const T=Boolean(d||a),w=Boolean(n||l),$=(null===(e=r)||void 0===e?void 0:e.v3Pool)??(null===(i=s)||void 0===i?void 0:i.v2Pair)??void 0,I=(null===(t=r)||void 0===t||null===(o=t.v3Pool)||void 0===o?void 0:o.feeTier)??$o.y9;return{data:$?{address:$.address,txCount:$.txCount,protocolVersion:$.protocolVersion,token0:$.token0,tvlToken0:$.token0Supply,token0Price:null===(h=$.token0)||void 0===h||null===(p=h.project)||void 0===p||null===(v=p.markets)||void 0===v||null===(u=v[0])||void 0===u||null===(c=u.price)||void 0===c?void 0:c.value,token1:$.token1,tvlToken1:$.token1Supply,token1Price:null===(y=$.token1)||void 0===y||null===(k=y.project)||void 0===k||null===(g=k.markets)||void 0===g||null===(m=g[0])||void 0===m||null===(x=m.price)||void 0===x?void 0:x.value,feeTier:I,volumeUSD24H:null===(f=$.volume24h)||void 0===f?void 0:f.value,volumeUSD24HChange:So(null===(j=$.historicalVolume)||void 0===j?void 0:j.concat()),tvlUSD:null===(b=$.totalLiquidity)||void 0===b?void 0:b.value,tvlUSDChange:null===(P=$.totalLiquidityPercentChange24h)||void 0===P?void 0:P.value}:void 0,error:T,loading:w}}),[null===(o=s)||void 0===o?void 0:o.v2Pair,null===(t=r)||void 0===t?void 0:t.v3Pool,a,d,l,n])}((null===(e=D)||void 0===e?void 0:e.toLowerCase())??"",null===(i=R)||void 0===i?void 0:i.id),[E,M]=(0,g.useReducer)((e=>!e),!1),N=function(e,i){var o,t,n,d;return(null===(o=e)||void 0===o?void 0:o.token0)&&(null===(t=e)||void 0===t?void 0:t.token1)&&i?[(0,_.vR)(i,null===(n=e)||void 0===n?void 0:n.token0),(0,_.vR)(i,null===(d=e)||void 0===d?void 0:d.token1)]:[void 0,void 0]}(B,null===(o=R)||void 0===o?void 0:o.id),[F,U]=E?[null===(d=N)||void 0===d?void 0:d[1],null===(r=N)||void 0===r?void 0:r[0]]:N,{darkMode:z,surface2:H,accent1:X}=(0,O.useTheme)(),W=(0,Lo.r)(F&&(0,_.Pc)(F),{backgroundColor:H,darkMode:z}),Q=(0,Lo.r)(U&&(0,_.Pc)(U),{backgroundColor:H,darkMode:z}),G=!D||!R||!(0,Ze.isAddress)(D),Y=!q&&!B||G,J=(0,g.useMemo)((()=>{var e,i,o;const t=`${null===(e=B)||void 0===e?void 0:e.token0.symbol}/${null===(i=B)||void 0===i?void 0:i.token1.symbol}`,n=(null===(o=R)||void 0===o?void 0:o.label)??"Ethereum";return{title:t,url:window.location.href,description:`Swap ${t} on ${n}. Trade tokens and provide liquidity. Real-time prices, charts, transaction data, and more.`}}),[null===(l=R)||void 0===l?void 0:l.label,null===(a=B)||void 0===a?void 0:a.token0.symbol,null===(s=B)||void 0===s?void 0:s.token1.symbol]),ee=(0,Vo.X)(J);return Y?(0,t.jsx)(Zo.default,{}):(0,t.jsxs)(Ge.f6,{token0:W!==X?W:void 0,token1:Q!==X?Q:void 0,children:[(0,t.jsxs)(Do.Helmet,{children:[(0,t.jsx)("title",{children:Ao(B)}),ee.map(((e,i)=>(0,t.jsx)("meta",{...e},i)))]}),(0,t.jsx)(Ro.default,{logImpression:!q,page:n.yJ.POOL_DETAILS_PAGE,properties:{poolAddress:D,chainId:null===(c=R)||void 0===c?void 0:c.id,feeTier:null===(u=B)||void 0===u?void 0:u.feeTier,token0Address:null===(v=B)||void 0===v?void 0:v.token0.address,token1Address:null===(p=B)||void 0===p?void 0:p.token1.address,token0Symbol:null===(h=B)||void 0===h?void 0:h.token0.symbol,token1Symbol:null===(x=B)||void 0===x?void 0:x.token1.symbol,token0Name:null===(m=B)||void 0===m?void 0:m.token0.name,token1Name:null===(k=B)||void 0===k?void 0:k.token1.name},children:(0,t.jsxs)(Bo,{children:[(0,t.jsxs)(qo,{children:[(0,t.jsxs)(je.ZP,{gap:"20px",children:[(0,t.jsxs)(je.ZP,{children:[(0,t.jsx)(qe,{chainId:null===(y=R)||void 0===y?void 0:y.id,poolAddress:D,token0:F,token1:U,loading:q}),(0,t.jsx)(He,{chainId:null===(f=R)||void 0===f?void 0:f.id,poolAddress:D,token0:F,token1:U,feeTier:null===(j=B)||void 0===j?void 0:j.feeTier,protocolVersion:null===(b=B)||void 0===b?void 0:b.protocolVersion,toggleReversed:M,loading:q})]}),(0,t.jsx)(ie,{poolData:B,loading:q,isReversed:E,chain:null===(P=R)||void 0===P?void 0:P.backendChain.chain})]}),(0,t.jsx)(_o,{}),(0,t.jsx)(wo,{poolAddress:D,token0:F,token1:U,protocolVersion:null===(T=B)||void 0===T?void 0:T.protocolVersion})]}),(0,t.jsxs)(Eo,{children:[(0,t.jsx)(Xi,{chainId:null===(w=R)||void 0===w?void 0:w.id,token0:F,token1:U,feeTier:null===($=B)||void 0===$?void 0:$.feeTier,loading:q}),(0,t.jsx)(bi,{poolData:B,isReversed:E,chainId:null===(I=R)||void 0===I?void 0:I.id,loading:q}),(0,t.jsxs)(Mo,{children:[(0,t.jsx)(No,{children:(0,t.jsx)(K.Trans,{i18nKey:"common.links"})}),(0,t.jsxs)(Oo,{children:[(0,t.jsx)(di,{address:D,chainId:null===(C=R)||void 0===C?void 0:C.id,tokens:[F,U],loading:q}),(0,t.jsx)(di,{address:null===(S=F)||void 0===S?void 0:S.address,chainId:null===(L=R)||void 0===L?void 0:L.id,tokens:[F],loading:q}),(0,t.jsx)(di,{address:null===(Z=U)||void 0===Z?void 0:Z.address,chainId:null===(A=R)||void 0===A?void 0:A.id,tokens:[U],loading:q})]})]})]})]})})]})}}}]);
//# sourceMappingURL=997.bf4b8c54.chunk.js.map