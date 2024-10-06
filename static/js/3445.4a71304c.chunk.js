"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3445],{37246:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(45779),r=i(68090),o=i.n(r);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=(0,n.forwardRef)((function(e,t){var i=e.color,r=void 0===i?"currentColor":i,o=e.size,l=void 0===o?24:o,d=s(e,["color","size"]);return n.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),n.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),n.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="Link";const d=l},60654:(e,t,i)=>{i.d(t,{aU:()=>T,Tg:()=>b,r4:()=>y});var n=i(92936),r=i(85976),o=i(17466),a=i(99026),s=i(77287);class l{_data=null;_options=null;draw(e,t){e.useBitmapCoordinateSpace((e=>this._drawImpl(e,t)))}update(e,t){this._data=e,this._options=t}_drawImpl(e,t){if(null===this._data||0===this._data.bars.length||null===this._data.visibleRange||null===this._options)return;let i=-1/0;const n=this._data.bars.map((e=>{const n=e.originalData.close>=i;i=e.originalData.close??i;return{openY:t(e.originalData.open)??0,highY:t(e.originalData.high)??0,lowY:t(e.originalData.low)??0,closeY:t(e.originalData.close)??0,x:e.x,isUp:n}})),r=this._options.radius(this._data.barSpacing);this._drawWicks(e,n,this._data.visibleRange),this._drawCandles(e,n,this._data.visibleRange,r)}_drawWicks(e,t,i){if(null===this._data||null===this._options)return;const{context:n,horizontalPixelRatio:r,verticalPixelRatio:o}=e,l=function(e){return function(e){return Math.max(1,Math.floor(e))}(e)/e}(r);for(let d=i.from;d<i.to;d++){const e=t[d];n.fillStyle=e.isUp?this._options.wickUpColor:this._options.wickDownColor;const i=(0,s.n1)(e.lowY,e.highY,o),c=(0,a.q)(e.x,r,l);n.fillRect(c.position,i.position,c.length,i.length)}}_drawCandles(e,t,i,n){if(null===this._data||null===this._options)return;const{context:r,horizontalPixelRatio:o,verticalPixelRatio:l}=e,d=function(e,t){let i=function(e,t){const i=4,n=3;if(e>=2.5&&e<=i)return Math.floor(n*t);const r=1-.2*Math.atan(Math.max(i,e)-i)/(.5*Math.PI),o=Math.floor(e*r*t),a=Math.floor(e*t),s=Math.min(o,a);return Math.max(Math.floor(t),s)}(e,t);if(i>=2){Math.floor(t)%2!==i%2&&i--}return i}(this._data.barSpacing,1);for(let c=i.from;c<i.to;c++){const e=t[c],i=(0,s.n1)(Math.min(e.openY,e.closeY),Math.max(e.openY,e.closeY),l),h=(0,a.q)(e.x,o,d);r.fillStyle=e.isUp?this._options.upColor:this._options.downColor,r.roundRect?(r.beginPath(),r.roundRect(h.position,i.position,h.length,Math.max(i.length,1),n),r.fill()):r.fillRect(h.position,i.position,h.length,i.length)}}}var d=i(69632);const c={...d.Qb,upColor:"#26a69a",downColor:"#ef5350",neutralColor:"#26a69a",wickVisible:!0,borderVisible:!0,borderColor:"#378658",borderUpColor:"#26a69a",borderDownColor:"#ef5350",wickColor:"#737375",wickUpColor:"#26a69a",wickDownColor:"#ef5350",radius:e=>e<4?0:e/3};class h{_renderer;constructor(){this._renderer=new l}priceValueBuilder(e){return[e.high,e.low,e.close]}renderer(){return this._renderer}isWhitespace(e){return void 0===e.close}update(e,t){this._renderer.update(e,t)}defaultOptions(){return c}}var p=i(71967),u=i(54842),x=i(1890),m=i(45779),v=i(41248),g=i(8806),f=i(56250),j=i(11947),w=i(97994),C=i(64972);class y extends o.BH{series;originalData;lowPriceRangeScaleFactor=1;type;minPriceLine;maxPriceLine;priceLineOptions;min;max;constructor(e,t){super(e,t),this.originalData=this.data;const{adjustedData:i,lowPriceRangeScaleFactor:n,min:r,max:o}=y.getAdjustedPrices(t.data);this.data=i,this.lowPriceRangeScaleFactor=n,this.min=r,this.max=o,this.type=t.type,this.series=this.type===u.E4.LINE?this.api.addAreaSeries():this.api.addCustomSeries(new h),this.series.setData(this.data),this.updateOptions(t),this.fitContent()}static applyPriceScaleFactor(e,t){return{time:e.time,value:(e.value||e.close)*t,open:e.open*t,close:e.close*t,high:e.high*t,low:e.low*t}}static getAdjustedPrices(e){let t=1,i=e,{min:n,max:r}=(0,p.x)(e);return r-n<.2&&(t=1e9,i=e.map((e=>this.applyPriceScaleFactor(e,t))),n*=t,r*=t),{adjustedData:i,lowPriceRangeScaleFactor:t,min:n,max:r}}updateOptions(e){var t,i;const{data:n,theme:r,type:o,locale:a,format:s}=e;if(super.updateOptions(e,{localization:{locale:a,priceFormatter:e=>s.formatFiatPrice({price:Number(e)/this.lowPriceRangeScaleFactor,type:C.sw.ChartFiatValue})},grid:{vertLines:{style:d.TD.CustomDotGrid,color:r.neutral3},horzLines:{style:d.TD.CustomDotGrid,color:r.neutral3}}}),this.type!==o&&(this.type=e.type,this.api.removeSeries(this.series),this.type===u.E4.CANDLESTICK?this.series=this.api.addCustomSeries(new h):this.series=this.api.addAreaSeries(),this.series.setData(this.data)),this.originalData!==n){this.originalData=n;const{adjustedData:e,lowPriceRangeScaleFactor:t,min:i,max:r}=y.getAdjustedPrices(n);this.data=e,this.lowPriceRangeScaleFactor=t,this.min=i,this.max=r,this.series.setData(this.data),this.fitContent()}this.series.applyOptions({priceLineVisible:!1,lastValueVisible:!1,lineType:n.length<20?d.SP.WithSteps:d.SP.Curved,lineWidth:2,lineColor:r.accent1,topColor:(0,v.jb)(12,r.accent1),bottomColor:(0,v.jb)(12,r.accent1),crosshairMarkerRadius:5,crosshairMarkerBorderColor:(0,v.jb)(30,r.accent1),crosshairMarkerBorderWidth:3,upColor:r.success,wickUpColor:r.success,downColor:r.critical,wickDownColor:r.critical,borderVisible:!1}),this.priceLineOptions={color:r.surface3,lineWidth:2,lineStyle:d.TD.Dashed,axisLabelColor:r.neutral3,axisLabelTextColor:r.neutral2},null===(t=this.minPriceLine)||void 0===t||t.applyOptions({price:this.min,...this.priceLineOptions}),null===(i=this.maxPriceLine)||void 0===i||i.applyOptions({price:this.max,...this.priceLineOptions})}onSeriesHover(e){if(e){const t=this.originalData[e.logicalIndex],i={...e,item:t};super.onSeriesHover(i)}else super.onSeriesHover(void 0);void 0===e?this.minPriceLine&&this.maxPriceLine&&(this.series.removePriceLine(this.minPriceLine),this.series.removePriceLine(this.maxPriceLine),this.minPriceLine=void 0,this.maxPriceLine=void 0):!this.minPriceLine&&!this.maxPriceLine&&this.min&&this.max&&(this.minPriceLine=this.series.createPriceLine({price:this.min,...this.priceLineOptions}),this.maxPriceLine=this.series.createPriceLine({price:this.max,...this.priceLineOptions}))}}function b({startingPrice:e,endingPrice:t,noColor:i}){const r=(0,x.YD)(e.close??e.value,t.close??t.value),{formatDelta:o}=(0,C.Gb)();return(0,n.jsxs)(g.xv,{variant:"body2",alignItems:"center",gap:"$gap4",children:[(0,n.jsx)(x.Kx,{delta:r,noColor:i}),(0,n.jsx)(x.Jp,{delta:r,children:o(r)})]})}const P=(0,f.z)(j.k,{row:!0,justifyContent:"space-between",gap:"$sm"});function k({data:e}){const{formatFiatPrice:t}=(0,C.Gb)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(g.xv,{variant:"body3",color:"$neutral1",children:[(0,n.jsxs)(P,{children:[(0,n.jsx)(w.Trans,{i18nKey:"chart.price.label.open"}),(0,n.jsx)("div",{children:t({price:e.open})})]}),(0,n.jsxs)(P,{children:[(0,n.jsx)(w.Trans,{i18nKey:"chart.price.label.high"}),(0,n.jsx)("div",{children:t({price:e.high})})]}),(0,n.jsxs)(P,{children:[(0,n.jsx)(w.Trans,{i18nKey:"chart.price.label.low"}),(0,n.jsx)("div",{children:t({price:e.low})})]}),(0,n.jsxs)(P,{children:[(0,n.jsx)(w.Trans,{i18nKey:"chart.price.label.close"}),(0,n.jsx)("div",{children:t({price:e.close})})]})]})})}function T({data:e,height:t,type:i,stale:a}){const s=e[e.length-1];return(0,n.jsx)(o.kL,{Model:y,params:(0,m.useMemo)((()=>({data:e,type:i,stale:a})),[e,a,i]),height:t,TooltipBody:i===u.E4.CANDLESTICK?k:void 0,children:t=>{var i,o,a,l;return(0,n.jsx)(r._,{value:(null===(i=t??s)||void 0===i?void 0:i.value)??(null===(o=t??s)||void 0===o?void 0:o.close),additionalFields:(0,n.jsx)(b,{startingPrice:null===(a=e)||void 0===a?void 0:a[0],endingPrice:t??s}),valueFormatterType:C.sw.FiatTokenPrice,time:null===(l=t)||void 0===l?void 0:l.time})}})}},96857:(e,t,i)=>{i.d(t,{P:()=>r});var n=i(92936);const r=e=>(0,n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:[(0,n.jsx)("path",{d:"M5.08042 8.66148C5.08043 8.58693 5.09517 8.51313 5.12378 8.44429C5.1524 8.37546 5.19432 8.31297 5.24716 8.26038C5.30001 8.2078 5.3627 8.16617 5.43167 8.13788C5.50064 8.1096 5.57452 8.09522 5.64907 8.09557L6.59187 8.09865C6.74218 8.09865 6.88635 8.15836 6.99263 8.26465C7.09893 8.37094 7.15865 8.5151 7.15865 8.66543V12.2303C7.26478 12.1988 7.4011 12.1652 7.55026 12.1301C7.65387 12.1058 7.74621 12.0471 7.8123 11.9637C7.87839 11.8803 7.91434 11.777 7.91432 11.6705V7.24848C7.91432 7.09814 7.97403 6.95397 8.08032 6.84766C8.1866 6.74135 8.33077 6.68162 8.4811 6.68158H9.42577C9.57609 6.68162 9.72026 6.74135 9.82655 6.84766C9.93284 6.95397 9.99255 7.09814 9.99255 7.24848V11.3526C9.99255 11.3526 10.2291 11.2569 10.4595 11.1596C10.545 11.1234 10.6181 11.0629 10.6694 10.9854C10.7208 10.908 10.7482 10.8172 10.7483 10.7242V5.83152C10.7483 5.68122 10.808 5.53707 10.9143 5.43078C11.0206 5.32449 11.1647 5.26478 11.315 5.26474H12.2597C12.41 5.26474 12.5542 5.32445 12.6604 5.43075C12.7667 5.53704 12.8265 5.6812 12.8265 5.83152V9.86056C13.6455 9.267 14.4754 8.55315 15.1341 7.69474C15.2297 7.57015 15.2929 7.42383 15.3181 7.26887C15.3434 7.1139 15.3299 6.95509 15.2788 6.8066C14.9739 5.9294 14.4894 5.12551 13.856 4.44636C13.2226 3.76722 12.4544 3.22777 11.6005 2.86256C10.7467 2.49734 9.82602 2.31439 8.89742 2.32542C7.96882 2.33645 7.05275 2.54121 6.20783 2.9266C5.36291 3.31199 4.60774 3.86952 3.99066 4.56352C3.37358 5.25751 2.90817 6.07269 2.62422 6.95689C2.34027 7.84107 2.24403 8.7748 2.34166 9.69832C2.43929 10.6218 2.72863 11.5148 3.19118 12.3201C3.27176 12.459 3.39031 12.572 3.53289 12.6459C3.67548 12.7198 3.83618 12.7514 3.99614 12.7372C4.17482 12.7215 4.3973 12.6992 4.66181 12.6681C4.77695 12.655 4.88326 12.6001 4.96048 12.5137C5.0377 12.4273 5.08043 12.3155 5.08053 12.1996L5.08042 8.66148Z",fill:e.fill??"#607BEE"}),(0,n.jsx)("path",{d:"M5.05957 14.3792C6.05531 15.1036 7.23206 15.5384 8.45961 15.6356C9.68716 15.7326 10.9176 15.4883 12.0149 14.9294C13.1122 14.3705 14.0334 13.519 14.6768 12.4691C15.3201 11.4191 15.6605 10.2116 15.6601 8.98024C15.6601 8.82658 15.653 8.67457 15.6428 8.52344C13.2041 12.1605 8.70139 13.8609 5.05978 14.3786",fill:e.fill??"#607BEE"})]})},66203:(e,t,i)=>{i.d(t,{J:()=>r});var n=i(92936);const r=e=>(0,n.jsx)("svg",{stroke:"none",fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,n.jsx)("path",{d:"m6.31991 7.43304c.16666.07333.34001.12001.51334.16001v6.34665c-.10666-.0267-.21331-.0667-.31331-.1133l-4-1.78c-.72-.32-1.18669-1.0334-1.18669-1.8267v-4.43998c0-.18.02666-.36001.07333-.52668zm6.43339-3.06c-.1734-.17333-.3734-.32-.6067-.42l-4.00003-1.77999c-.52-.23334-1.10663-.23334-1.62663 0l-4 1.77999c-.23334.1-.43336.24667-.60669.42l4.80664 2.13999c.38667.17334.83339.17334 1.22672 0zm-1.6193 3.55534c.688-.162 1.3419-.11 1.9299.09267.132.04533.2694-.044.2694-.184v-2.05733c0-.18-.0267-.36001-.0734-.52668l-4.9133 2.18c-.16667.06666-.34001.12001-.51335.16001v6.34665c.012.008.01201.008.02401.016l1.12866-.504c.11467-.0513.14868-.19.07935-.294-.482-.7207-.68736-1.636-.49203-2.5993.26067-1.28602 1.28405-2.32936 2.56076-2.63002zm3.8859 6.42402c-.0973.0973-.2253.1466-.3533.1466s-.256-.0486-.3534-.1466l-1.0333-1.0334c-.3846.252-.842.402-1.3353.402-1.348 0-2.44468-1.0966-2.44468-2.4446 0-1.34802 1.09668-2.4447 2.44468-2.4447 1.3473 0 2.444 1.09668 2.444 2.4447 0 .4933-.1494.9513-.4014 1.3353l1.0334 1.0333c.1947.1954.1947.512-.0007.7074zm-1.6313-3.0754c0-.7966-.648-1.44463-1.444-1.44463-.7967 0-1.4447.64803-1.4447 1.44463 0 .7967.648 1.4447 1.4447 1.4447.796-.0007 1.444-.6487 1.444-1.4447z"})})},85188:(e,t,i)=>{i.d(t,{m:()=>r});var n=i(92936);const r=e=>(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,n.jsx)("path",{d:"M13 4.99092C13 4.09592 14.094 3.66096 14.709 4.31196L20.637 10.582C21.121 11.094 21.121 11.894 20.637 12.406L14.709 18.676C14.094 19.326 13 18.891 13 17.997V14.4919C5.437 14.4919 4.93602 16.962 4.96802 19.529C4.97402 20.019 4.32501 20.1811 4.08301 19.7561C3.46701 18.6751 3 17.1999 3 15.4909C3 8.99592 10 8.49702 13 8.49702V4.99092Z",fill:e.fill})})},73593:(e,t,i)=>{i.d(t,{E:()=>r});var n=i(92936);const r=e=>(0,n.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,n.jsx)("path",{d:"M12.8761 3H14.9451L10.4251 8.16609L15.7425 15.196H11.579L8.31797 10.9324L4.58662 15.196H2.51644L7.35104 9.67026L2.25 3H6.51922L9.46689 6.89708L12.8761 3ZM12.15 13.9576H13.2964L5.89628 4.17332H4.66605L12.15 13.9576Z",fill:e.fill??"#607BEE"})})},76696:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(92936),r=i(10849),o=i(65229),a=i(36664),s=i(57221),l=i(30335),d=i(22953),c=i(77134),h=i(97994);const p=a.ZP.div`
  width: 100%;
  padding: 12px 20px 16px;
  background-color: ${({backgroundColor:e})=>e};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({color:e})=>e};
`,u=a.ZP.div`
  align-items: center;
  font-weight: 535;
  display: inline-flex;
`,x=(0,a.ZP)(d.xv)`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin-left: 7px;
`,m=a.ZP.div`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,v=(0,a.ZP)(c.dL)`
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
`;function g({warning:e,tokenAddress:t,plural:i=!1,tokenSymbol:a}){const d=(0,o.g)(e.level),c=(0,o.A)(e.level),{heading:g,description:f}=(0,r.N6)(e,i,a);return(0,n.jsxs)(p,{color:c,backgroundColor:d,children:[(0,r._x)(e)&&(0,n.jsxs)(u,{"data-cy":"token-safety-message",children:[e.canProceed?(0,n.jsx)(s.Z,{size:"16px"}):(0,n.jsx)(l.Z,{size:"16px"}),(0,n.jsx)(x,{marginLeft:"7px",children:e.message})]}),(0,n.jsxs)(m,{"data-cy":"token-safety-description",children:[g,Boolean(g)&&" ",f,Boolean(f)&&" ",t&&(0,n.jsx)(v,{href:r.W3,children:(0,n.jsx)(h.Trans,{i18nKey:"common.button.learn"})})]})]})}},27165:(e,t,i)=>{i.d(t,{W:()=>m});var n=i(92936),r=i(54842),o=i(99454),a=i(75985),s=i(61152),l=i(45779),d=i(7797),c=i(81205),h=i(97994),p=i(94685);const u={borderRadius:20,width:"100%",height:36},x={minWidth:130,borderRadius:"$rounded16",right:0};function m({options:e,disabledOption:t,menuLabel:i,currentChartType:m,onSelectOption:v,tooltipText:g}){const f=(0,s.useTheme)(),[j,w]=(0,l.useState)(!1);return(0,n.jsx)(o.u,{isOpen:j,toggleOpen:w,menuLabel:i??r.lU[m],internalMenuItems:(0,n.jsx)(n.Fragment,{children:e.map((e=>{const{value:i,display:s}=function(e){return"string"===typeof e?{value:e}:e}(e),l=i===t;return(0,n.jsx)(a.ud,{text:l&&(0,n.jsx)(h.Trans,{i18nKey:"chart.settings.unavailable.label"}),placement:p.isMobileWeb?void 0:"right",children:(0,n.jsxs)(o.f,{onPress:()=>{l||(v(i),w(!1))},disabled:l,children:[s??r.lU[i],i===m&&(0,n.jsx)(d.Z,{size:20,color:f.accent1}),l&&(0,n.jsx)(c.Z,{size:20,color:"$neutral2"})]})},i)}))}),tooltipText:g,buttonStyle:u,dropdownStyle:x,adaptToSheet:!1})}},15007:(e,t,i)=>{i.d(t,{Os:()=>X,Bz:()=>K,Yv:()=>N,ZP:()=>B,Gn:()=>A});var n,r=i(92936),o=i(17466),a=i(6878),s=i(60654),l=i(74220),d=i(17006),c=i(54842),h=i(45779);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},p.apply(this,arguments)}function u(e,t){let{title:i,titleId:r,...o}=e;return h.createElement("svg",p({width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},o),i?h.createElement("title",{id:r},i):null,n||(n=h.createElement("path",{d:"M8.41667 15.5H7.58333C6.75 15.5 6.33333 15.0833 6.33333 14.25V1.75C6.33333 0.916667 6.75 0.5 7.58333 0.5H8.41667C9.25 0.5 9.66667 0.916667 9.66667 1.75V14.25C9.66667 15.0833 9.25 15.5 8.41667 15.5ZM15.5 8.83333V3.83333C15.5 3 15.0833 2.58333 14.25 2.58333H13.4167C12.5833 2.58333 12.1667 3 12.1667 3.83333V8.83333C12.1667 9.66667 12.5833 10.0833 13.4167 10.0833H14.25C15.0833 10.0833 15.5 9.66667 15.5 8.83333ZM3.83333 10.9167V7.58333C3.83333 6.75 3.41667 6.33333 2.58333 6.33333H1.75C0.916667 6.33333 0.5 6.75 0.5 7.58333V10.9167C0.5 11.75 0.916667 12.1667 1.75 12.1667H2.58333C3.41667 12.1667 3.83333 11.75 3.83333 10.9167Z",fill:"currentColor"})))}const x=h.forwardRef(u);i.p;var m;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},v.apply(this,arguments)}function g(e,t){let{title:i,titleId:n,...r}=e;return h.createElement("svg",v({width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),i?h.createElement("title",{id:n},i):null,m||(m=h.createElement("path",{d:"M23.02 9C23.02 10.104 22.124 11 21.02 11C20.738 11 20.47 10.94 20.226 10.835L16.855 14.2061C16.96 14.4501 17.021 14.717 17.021 15C17.021 16.104 16.125 17 15.021 17C13.917 17 13.016 16.104 13.016 15C13.016 14.727 13.071 14.467 13.17 14.229L9.787 10.8459C9.551 10.9439 9.292 10.999 9.021 10.999C8.739 10.999 8.471 10.939 8.22701 10.834L4.856 14.2051C4.961 14.4491 5.022 14.716 5.022 14.999C5.022 16.103 4.126 16.999 3.022 16.999C1.918 16.999 1.017 16.103 1.017 14.999C1.017 13.895 1.90699 12.999 3.01199 12.999H3.022C3.294 12.999 3.55199 13.0541 3.78799 13.1521L7.172 9.76807C7.073 9.53107 7.017 9.27102 7.017 8.99902C7.017 7.89502 7.90699 6.99902 9.01199 6.99902H9.022C10.126 6.99902 11.022 7.89502 11.022 8.99902C11.022 9.28102 10.962 9.54897 10.856 9.79297L14.224 13.1609C14.465 13.0569 14.731 12.999 15.011 12.999H15.021C15.293 12.999 15.551 13.0541 15.787 13.1521L19.171 9.76807C19.072 9.53107 19.016 9.27102 19.016 8.99902C19.016 7.89502 19.906 6.99902 21.011 6.99902H21.021C22.125 7.00002 23.02 7.896 23.02 9Z",fill:"currentColor"})))}const f=h.forwardRef(g);i.p;var j=i(83792),w=i(27165),C=i(93465),y=i(36664),b=i(77134),P=i(97994);const k=(0,y.ZP)(j.ZP)`
  ${b.cw}
`,T=[{value:c.E4.LINE,icon:(0,r.jsx)(f,{width:20,height:20}),display:(0,r.jsxs)(k,{gap:"md",children:[(0,r.jsx)(f,{width:20,height:20}),c.lU[c.E4.LINE]]})},{value:c.E4.CANDLESTICK,icon:(0,r.jsx)(x,{width:20,height:20}),display:(0,r.jsxs)(k,{gap:"md",children:[(0,r.jsx)(x,{width:20,height:20}),c.lU[c.E4.CANDLESTICK]]})}],L=({currentChartType:e,onChartTypeChange:t,disableCandlestickUI:i})=>{var n,o;const a=!(0,C.e)().sm,s=T.find((t=>t.value===e));return(0,r.jsx)(w.W,{options:T,disabledOption:i?c.E4.CANDLESTICK:void 0,menuLabel:a?null===(n=s)||void 0===n?void 0:n.display:null===(o=s)||void 0===o?void 0:o.icon,currentChartType:e,onSelectOption:t,tooltipText:a?void 0:(0,P.t)("common.chartType")})};var $=i(61825),E=i(70854);function S(e){const{value:t,timestamp:i}=e;return{time:i,value:t,open:t,high:t,low:t,close:t}}function Z(e){const{open:t,high:i,low:n,close:r}=e;return{time:e.timestamp,value:r.value,open:t.value,high:i.value,low:n.value,close:r.value}}const I=()=>Date.now()/1e3,O=.1;function D(e){return{values:[e.value],time:e.timestamp}}var M=i(77807),z=i(61190),_=i(64505),V=i(37451),R=i(56250),H=i(11947),U=i(58832);const N=356,F=[c.oX.PRICE,c.oX.VOLUME,c.oX.TVL],K=M.W9.map((e=>({value:M.rD[e]}))),X=(0,R.z)(H.k,{flexDirection:"row-reverse",width:"100%",justifyContent:"space-between",alignItems:"center",mt:12,$md:{flexDirection:"column",gap:16}}),W=()=>(0,r.jsx)(P.Trans,{i18nKey:"chart.error.tokens"});function A(e,t){const[i,n]=(0,h.useState)(z.XH.DAY),[r,o]=(0,h.useState)(c.oX.PRICE),[a,s]=(0,h.useState)(c.E4.LINE),l={address:e,chain:t,duration:(0,z.uw)(i)},d=function(e,t,i){var n,r;const[o,a]=(0,h.useReducer)((()=>!0),!1),{data:s,loading:l}=(0,E.useTokenPriceQuery)({variables:{...e,fallback:o},skip:t});return(0,h.useMemo)((()=>{var t,n,r,d,h;const{ohlc:p,priceHistory:u,price:x}=(null===(n=s)||void 0===n||null===(t=n.token)||void 0===t?void 0:t.market)??{};let m=(p?null===(r=p)||void 0===r?void 0:r.filter((e=>void 0!==e)).map(Z):null===(d=u)||void 0===d?void 0:d.filter((e=>void 0!==e)).map(S))??[];const v=null===(h=x)||void 0===h?void 0:h.value;if(p){const e=m.filter((e=>0===e.value)).length;if(!p.length||e/m.length>O)return a(),{chartType:c.oX.PRICE,entries:[],loading:!0,disableCandlestickUI:!0,dataQuality:$.x1.INVALID};if(i===c.E4.LINE){let e=m[0].low,t=0,i=m[0].high,n=0;m.forEach(((r,o)=>{r.low<e&&(e=r.low,t=o),r.high>i&&(i=r.high,n=o)})),t!==m.length-1&&(m[t].value=e),n!==m.length-1&&(m[n].value=i)}else if(i===c.E4.CANDLESTICK){const e=[];for(let t=m.length%2;t<m.length;t+=2){const i=m[t],n=m[t+1],r={time:i.time,open:i.open,high:Math.max(i.high,n.high),low:Math.min(i.low,n.low),close:n.close,value:n.close};e.push(r)}m=e}}if(v&&m.length>1){const e=m[m.length-1],t=m[m.length-2],i=e.time-t.time,n=I();n-e.time<i?(e.time=n,e.value=v,e.close=v):m.push({time:n,value:v,open:v,high:v,low:v,close:v})}const g=(0,$.q6)(m,c.oX.PRICE,e.duration);return{chartType:c.oX.PRICE,entries:m,loading:l,dataQuality:g,disableCandlestickUI:o}}),[null===(r=s)||void 0===r||null===(n=r.token)||void 0===n?void 0:n.market,o,l,i,e.duration])}(l,r!==c.oX.PRICE,a),p=function(e,t){var i,n,r;const{data:o,loading:a}=(0,E.useTokenHistoricalVolumesQuery)({variables:e,skip:t});return(0,h.useMemo)((()=>{var t,i,n,r;const s=(null===(r=o)||void 0===r||null===(n=r.token)||void 0===n||null===(i=n.market)||void 0===i||null===(t=i.historicalVolume)||void 0===t?void 0:t.filter((e=>void 0!==e)).map($.Yz))??[],l=(0,$.q6)(s,c.oX.VOLUME,e.duration);return{chartType:c.oX.VOLUME,entries:s,loading:a,dataQuality:l}}),[null===(r=o)||void 0===r||null===(n=r.token)||void 0===n||null===(i=n.market)||void 0===i?void 0:i.historicalVolume,a,e.duration])}(l,r!==c.oX.VOLUME),u=function(e,t){var i,n;const{data:r,loading:o}=(0,E.useTokenHistoricalTvlsQuery)({variables:e,skip:t});return(0,h.useMemo)((()=>{var t,i,n,a;const{historicalTvl:s,totalValueLocked:l}=(null===(i=r)||void 0===i||null===(t=i.token)||void 0===t?void 0:t.market)??{},d=(null===(n=s)||void 0===n?void 0:n.filter((e=>void 0!==e)).map(D))??[],h=null===(a=l)||void 0===a?void 0:a.value;if(h&&d.length>1){const e=d[d.length-1],t=d[d.length-2],i=e.time-t.time,n=I();n-e.time<i?(e.time=n,e.values=[h]):d.push({time:n,values:[h]})}const p=(0,$.q6)(d,c.oX.TVL,e.duration);return{chartType:c.oX.TVL,entries:d,loading:o,dataQuality:p}}),[null===(n=r)||void 0===n||null===(i=n.token)||void 0===i?void 0:i.market,o,e.duration])}(l,r!==c.oX.TVL);return(0,h.useMemo)((()=>{const{disableCandlestickUI:e}=d,t=(()=>{switch(r){case c.oX.PRICE:return d;case c.oX.VOLUME:return p;case c.oX.TVL:return u}})();return{timePeriod:i,setTimePeriod:n,setChartType:o,priceChartType:e?c.E4.LINE:a,setPriceChartType:s,activeQuery:t,disableCandlestickUI:e}}),[r,d,p,u,i,a])}function B(){const{activeQuery:e,timePeriod:t,priceChartType:i}=(0,V.U)().chartState;return(0,r.jsxs)("div",{"data-cy":`tdp-${e.chartType}-chart-container`,children:[(()=>{if(e.dataQuality===$.x1.INVALID)return(0,r.jsx)(a.M,{type:e.chartType,height:N,errorText:e.loading?void 0:(0,r.jsx)(W,{})});const n=e.dataQuality===$.x1.STALE;switch(e.chartType){case c.oX.PRICE:return(0,r.jsx)(s.aU,{data:e.entries,height:N,type:i,stale:n});case c.oX.VOLUME:return(0,r.jsx)(d.x,{data:e.entries,height:N,timePeriod:t,stale:n});case c.oX.TVL:return(0,r.jsx)(l.w,{data:e.entries,height:N,stale:n})}})(),(0,r.jsx)(Y,{})]})}function Y(){const{activeQuery:e,timePeriod:t,setTimePeriod:i,setChartType:n,priceChartType:a,setPriceChartType:s,disableCandlestickUI:l}=(0,V.U)().chartState,d=(0,_.Dv)(o.N),h=!(0,C.e)().md;return(0,r.jsxs)(X,{children:[(0,r.jsxs)(H.k,{row:!0,gap:"$gap8",$md:{width:"100%",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))"},children:[e.chartType===c.oX.PRICE&&(0,r.jsx)("div",{children:(0,r.jsx)(L,{currentChartType:a,onChartTypeChange:s,disableCandlestickUI:l})}),(0,r.jsx)(w.W,{options:F,currentChartType:e.chartType,onSelectOption:e=>{n(e),e===c.oX.PRICE&&s(c.E4.LINE)}})]}),(0,r.jsx)(H.k,{$md:{width:"100%"},children:(0,r.jsx)(U.s,{fullWidth:h,options:K,selectedOption:M.rD[t],onSelectOption:e=>{const n=(0,M.Wz)(e);var r;n===t?null===(r=d)||void 0===r||r():i(n)}})})]})}},70789:(e,t,i)=>{i.d(t,{D:()=>b,Z:()=>P});var n=i(92936),r=i(99454),o=i(85188),a=i(73593),s=i(36710),l=i(74689),d=i(36664),c=i(45779),h=i(37246),p=i(43454),u=i(75762),x=i(41248),m=i(63935),v=i(8806),g=i(43087),f=i(58564),j=i(94685);const w=560,C=480,y=d.ZP.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 485;
  gap: 12px;
  height: 40px;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  :hover {
    background-color: ${({theme:e})=>(0,x.jb)(10,e.darkMode?u.O9.gray200:u.O9.gray300)};
  }
`;function b(e){const t=window.location.href,i=(window.screen.width-w)/2,n=(window.screen.height-C)/2;window.open(`https://twitter.com/intent/tweet?text=Check%20out%20${e}%20${t}%20via%20@Uniswap`,"newwindow",`left=${i}, top=${n}, width=${w}, height=${C}`)}function P({name:e,utmSource:t}){const i=(0,m.E)(),{t:d}=(0,f.useTranslation)(),[u,x]=(0,c.useState)(!1),[w]=(0,p.lr)(),C=`${w.size>0?"&":"?"}utm_source=${t}&utm_medium=${j.isMobileWeb?"mobile":"web"}`,P=window.location.href+C,[k,T]=(0,l.Z)();return(0,n.jsx)(r.u,{isOpen:u,toggleOpen:x,menuLabel:(0,n.jsx)(o.m,{fill:i.neutral1.val,width:18,height:18}),tooltipText:d("common.share"),internalMenuItems:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(y,{onClick:()=>T(P),children:[k?(0,n.jsx)(g.Check,{size:16,p:1,color:i.statusSuccess.val}):(0,n.jsx)(h.Z,{width:"18px",height:"18px",color:i.neutral1.val}),(0,n.jsx)(v.xv,{variant:"body2",children:d(k?"common.copied":"common.copyLink.button")})]}),(0,n.jsxs)(y,{onClick:()=>{x(!1),b(e)},children:[(0,n.jsx)(a.E,{width:"18px",height:"18px",fill:i.neutral1.val}),(0,n.jsx)(v.xv,{variant:"body2",children:d("common.share.shareToTwitter")})]})]}),hideChevron:!0,buttonStyle:s.TX,dropdownStyle:s.jF,adaptToSheet:!1})}},33569:(e,t,i)=>{i.d(t,{WQ:()=>W,sT:()=>xe,QN:()=>A,Gy:()=>X,lJ:()=>ge,Pn:()=>B,yn:()=>Y});var n=i(92936),r=i(48836),o=i(6878),a=i(54842),s=i(36664),l=i(56363),d=i(45003);const c=s.ZP.div`
  gap: 16px;
  padding: 24px 0px;
  ${d.Sj}
`,h=(0,s.ZP)(l.T.MediumHeader)`
  font-size: 28px !important;
`;var p=i(15007),u=i(96967),x=i(36710),m=i(52529),v=i(61808),g=i(61152),f=i(4168),j=i(97994);const w=(0,s.ZP)(v.nR)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`,C=s.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;

  padding: 8px;
  border: ${({theme:e})=>`1px solid ${e.surface3}`};
  border-radius: 16px;
  background-color: ${({theme:e})=>e.surface1};
`,y=s.ZP.div`
  background-color: ${({theme:e})=>e.surface2};
  border-radius: ${({radius:e})=>(e??4)+"px"};
  height: 56px;
  width: ${({width:e})=>e?e+"px":"100%"};
`,b=(0,s.ZP)(y)`
  background-color: ${({theme:e})=>e.surface3};
  height: 36px;
`,P=s.ZP.div`
  padding: 8px;
`,k=s.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,T=s.ZP.div`
  display: flex;
  flex-flow: column;
  background-color: ${({theme:e})=>e.surface2};
  border-radius: 16px;
  display: flex;
  gap: 30px;
  padding: 48px 12px;
`,L=s.ZP.div`
  position: relative;
`;function $(){return(0,n.jsx)(P,{children:(0,n.jsx)(l.T.SubHeader,{children:(0,n.jsx)(j.Trans,{i18nKey:"common.swap"})})})}function E(){return(0,n.jsxs)(k,{children:[(0,n.jsx)(b,{width:60}),(0,n.jsx)(b,{width:100,radius:16})]})}function S(){return(0,n.jsx)(y,{radius:16})}function Z(){const e=(0,g.useTheme)();return(0,n.jsxs)(C,{children:[(0,n.jsx)($,{}),(0,n.jsx)(T,{children:(0,n.jsx)(E,{})}),(0,n.jsxs)(L,{children:[(0,n.jsx)(w,{clickable:!1,children:(0,n.jsx)(v.Gz,{children:(0,n.jsx)(f.Z,{size:"16",color:e.neutral3})})}),(0,n.jsx)(T,{children:(0,n.jsx)(E,{})})]}),(0,n.jsx)(S,{})]})}var I=i(73397),O=i(12799),D=i(61190),M=i(97704),z=i(51578),_=i(6282),V=i(77134),R=i(89341),H=i(56250),U=i(11947),N=i(8806),F=i(20449),K=i(30754);const X=(0,H.z)(U.k,{row:!0,justifyContent:"center",width:"100%",gap:40,py:"$spacing48",px:"$padding20",$lg:{pt:0,px:"$padding16",pb:52},$xl:{flexDirection:"column",alignItems:"center"},$xxl:{gap:60}}),W=(0,H.z)(U.k,{maxWidth:780,overflow:"hidden",width:"100%",flexGrow:1,flexShrink:1}),A=(0,H.z)(U.k,{pt:53,gap:40,width:360,$xl:{width:"100%",maxWidth:780}}),B=(0,H.z)(U.k,{row:!0,justifyContent:"space-between",alignItems:"center",gap:"$gap20",pt:"$padding8",mb:"$spacing20",animation:"quick",zIndex:"$default"}),Y=(0,H.z)(U.k,{row:!0,gap:"$gap12",alignItems:"center",pt:"$spacing4",minWidth:32,$md:{flexDirection:"column",alignItems:"flex-start"}}),Q=(0,s.ZP)(m.X)`
  height: 16px;
  width: 180px;
`,G=(0,s.ZP)(Q)`
  height: 32px;
  border-radius: 8px;
`,q=(0,s.ZP)(Q)`
  width: 169px;
`,J=(0,s.ZP)(Q)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`,ee=(0,s.ZP)(Q)`
  height: 36px;
  width: 136px;
`,te=(0,s.ZP)(G)`
  width: 120px;
`,ie=(0,s.ZP)(Q)`
  width: 80px;
  margin-bottom: 4px;
`,ne=(0,s.ZP)(G)`
  width: 116px;
`,re=(0,s.ZP)(Q)`
  margin-bottom: 6px;
  width: 100%;
`,oe=(0,s.ZP)(re)`
  width: 120px;
`,ae=(0,s.ZP)(re)`
  width: 50%;
`,se=(0,H.z)(U.k,{row:!0,flexWrap:"wrap",width:"100%"}),le=(0,H.z)(U.k,{row:!0,pt:"$spacing24"}),de={color:"$neutral3",fontSize:12,fontWeight:"500",lineHeight:16,"$platform-web":{textDecoration:"none"}},ce=(0,H.z)(U.k,{row:!0,alignItems:"center",pt:"$padding16",pr:90,pb:"$padding8",pl:0,bottom:0,right:0,justifyContent:"flex-end",...de,"$platform-web":{position:"fixed"},$lg:{p:"unset",position:"unset",bottom:"unset",right:"unset",justifyContent:"unset"}}),he=(0,H.z)(N.xv,{variant:"heading1",...de}),pe=(0,H.z)(F.e,{fontFamily:"$body",...de,...V.GG});function ue(e,t,i,r){var o,a,s,l,d;let c="";var h,p;if((null===(o=e)||void 0===o?void 0:o.name)&&(null===(a=e)||void 0===a?void 0:a.symbol))c=`${null===(h=e)||void 0===h?void 0:h.name} (${null===(p=e)||void 0===p?void 0:p.symbol})`;else if(null===(s=e)||void 0===s?void 0:s.name){var u;c=null===(u=e)||void 0===u?void 0:u.name}else if(null===(l=e)||void 0===l?void 0:l.symbol){var x;c=null===(x=e)||void 0===x?void 0:x.symbol}else c=t||"";const m=(null===(d=e)||void 0===d?void 0:d.isNative)?(0,n.jsx)(n.Fragment,{children:c}):(0,n.jsx)(pe,{href:(0,K.getExplorerLink)(i,t,K.ExplorerDataType.TOKEN),target:"_blank",rel:"noopener noreferrer",children:c});return r?(0,n.jsx)(j.Trans,{i18nKey:"tdp.loading.title.withChain",values:{chainName:(0,R.capitalize)(r)},components:{tokenLink:m}}):(0,n.jsx)(j.Trans,{i18nKey:"tdp.loading.title.default",components:{tokenLink:m}})}function xe(){return(0,n.jsx)(o.M,{dim:!0,type:a.oX.PRICE,height:p.Yv})}function me(){return(0,n.jsxs)(u.h6,{children:[(0,n.jsx)(te,{}),(0,n.jsxs)(se,{children:[(0,n.jsxs)(u.sy,{children:[(0,n.jsxs)(u.Fy,{children:[(0,n.jsx)(ie,{}),(0,n.jsx)(ne,{})]}),(0,n.jsxs)(u.Fy,{children:[(0,n.jsx)(ie,{}),(0,n.jsx)(ne,{})]})]}),(0,n.jsxs)(u.sy,{children:[(0,n.jsxs)(u.Fy,{children:[(0,n.jsx)(ie,{}),(0,n.jsx)(ne,{})]}),(0,n.jsxs)(u.Fy,{children:[(0,n.jsx)(ie,{}),(0,n.jsx)(ne,{})]})]})]})]})}function ve(){const e=(0,D.L7)((0,I.WN)(),{fallbackToEthereum:!0}),{tokenAddress:t}=(0,_.UO)(),i=(0,M.U8)(t===O.d?"ETH":t,e.id);return(0,n.jsxs)(W,{children:[(0,n.jsxs)(r.zG,{"aria-label":"breadcrumb-nav",children:[(0,n.jsxs)(r.yY,{to:`/explore/${e.urlParam}`,children:[(0,n.jsx)(j.Trans,{i18nKey:"common.explore"})," ",(0,n.jsx)(z.Z,{size:14})]}),(0,n.jsxs)(r.yY,{to:`/explore/tokens/${e.urlParam}`,children:[(0,n.jsx)(j.Trans,{i18nKey:"common.tokens"})," ",(0,n.jsx)(z.Z,{size:14})]}),(0,n.jsx)(q,{})]}),(0,n.jsx)(B,{children:(0,n.jsxs)(Y,{children:[(0,n.jsx)(J,{}),(0,n.jsx)(ee,{})]})}),(0,n.jsx)(xe,{}),(0,n.jsx)(U.k,{row:!0,height:4}),(0,n.jsx)(me,{}),(0,n.jsx)(x.Hr,{}),(0,n.jsx)(c,{children:(0,n.jsx)(h,{children:(0,n.jsx)(te,{})})}),(0,n.jsx)(re,{}),(0,n.jsx)(re,{}),(0,n.jsx)(ae,{style:{marginBottom:"24px"}}),(0,n.jsxs)(le,{children:[(0,n.jsx)(oe,{}),(0,n.jsx)(ae,{})]}),(0,n.jsxs)(le,{children:[(0,n.jsx)(oe,{}),(0,n.jsx)(ae,{})]}),t&&(0,n.jsxs)(ce,{gap:"xs",children:[(0,n.jsx)(j.Trans,{i18nKey:"common.loading"}),(0,n.jsx)(he,{children:ue(i,t,e.id,e.urlParam)})]})]})}function ge(){return(0,n.jsxs)(X,{children:[(0,n.jsx)(ve,{}),(0,n.jsx)(A,{children:(0,n.jsx)(Z,{})})]})}},96967:(e,t,i)=>{i.d(t,{Fy:()=>v,ZP:()=>P,h6:()=>y,sy:()=>f});var n=i(92936),r=i(54699),o=i(65866),a=i(22773),s=i(75985),l=i(73397),d=i(36664),c=i(56363),h=i(77134),p=i(45003),u=i(45427),x=i(97994),m=i(64972);const v=d.ZP.div`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  min-width: 121px;
  flex: 1;
  padding-top: 24px;
  padding-bottom: 0px;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    min-width: 168px;
  }
`,g=d.ZP.div`
  display: flex;
  flex-wrap: wrap;
`,f=d.ZP.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`,j=(0,d.ZP)(c.T.MediumHeader)`
  font-size: 28px !important;
  padding-top: 40px;
`,w=d.ZP.div`
  margin-top: 4px;
  font-size: 28px;
  color: ${({theme:e})=>e.neutral1};
`,C=d.ZP.div`
  color: ${({theme:e})=>e.neutral3};
  padding-top: 40px;
`,y=d.ZP.div`
  gap: 16px;
  ${p.Sj}
`;function b({dataCy:e,value:t,title:i,description:r}){const{formatNumber:o}=(0,m.Gb)();return(0,n.jsxs)(v,{"data-cy":`${e}`,children:[(0,n.jsx)(s.ud,{disabled:!r,text:r,children:i}),(0,n.jsx)(w,{children:o({input:t,type:m.sw.FiatTokenStats})})]})}function P(e){var t,i,s,d,p,m,v,w,P,k,T,L;const{chainId:$,address:E,tokenQueryData:S}=e,Z=(0,l.Nb)($),{label:I,infoLink:O}=Z?u.UNIVERSE_CHAIN_INFO[$]:{label:void 0,infoLink:void 0},D=null===(t=S)||void 0===t?void 0:t.market,M=null===(d=S)||void 0===d||null===(s=d.project)||void 0===s||null===(i=s.markets)||void 0===i?void 0:i[0],z=null===(m=M)||void 0===m||null===(p=m.fullyDilutedValuation)||void 0===p?void 0:p.value,_=null===(w=M)||void 0===w||null===(v=w.marketCap)||void 0===v?void 0:v.value,V=null===(k=D)||void 0===k||null===(P=k.totalValueLocked)||void 0===P?void 0:P.value,R=null===(L=D)||void 0===L||null===(T=L.volume24H)||void 0===T?void 0:T.value;return V||z||_||R?(0,n.jsxs)(y,{"data-testid":"token-details-stats",children:[(0,n.jsx)(j,{children:(0,n.jsx)(x.Trans,{i18nKey:"common.stats"})}),(0,n.jsxs)(g,{children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(b,{dataCy:"tvl",value:V,description:(0,n.jsx)(x.Trans,{i18nKey:"stats.tvl.description"}),title:(0,n.jsx)(x.Trans,{i18nKey:"common.totalValueLocked"})}),(0,n.jsx)(b,{dataCy:"market-cap",value:_,description:(0,n.jsx)(x.Trans,{i18nKey:"stats.marketCap.description"}),title:(0,n.jsx)(x.Trans,{i18nKey:"stats.marketCap"})})]}),(0,n.jsxs)(f,{children:[(0,n.jsx)(b,{dataCy:"fdv",value:z,description:r.h8[a.PU.FULLY_DILUTED_VALUATION],title:(0,n.jsx)(x.Trans,{i18nKey:"stats.fdv"})}),(0,n.jsx)(b,{dataCy:"volume-24h",value:R,description:(0,n.jsx)(x.Trans,{i18nKey:"stats.volume.1d.description"}),title:(0,n.jsx)(x.Trans,{i18nKey:"stats.volume.1d"})})]})]})]}):o.N0.includes($)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j,{children:(0,n.jsx)(x.Trans,{i18nKey:"common.stats"})}),(0,n.jsx)(c.T.BodySecondary,{pt:"12px",children:(0,n.jsx)(x.Trans,{i18nKey:"tdp.stats.unsupportedChainDescription",values:{chain:I,infoLink:(0,n.jsx)(h.dL,{color:"currentColor",href:`${O}tokens/${E}`,children:"info.uniswap.org"})}})})]}):(0,n.jsx)(C,{"data-cy":"token-details-no-stats-data",children:"No stats available"})}},36710:(e,t,i)=>{i.d(t,{Hr:()=>s,Nt:()=>c,TX:()=>o,aZ:()=>l,jF:()=>a,ou:()=>d});var n=i(36664),r=i(36399);const o={display:"flex",alignItems:"center",justifyContent:"flex-start",py:"$spacing8",px:"$spacing12",borderRadius:20,borderWidth:0,backgroundColor:"$surface2",width:"maxContent",...i(77134).it,hoverStyle:{backgroundColor:"$surface2Hovered"},focusStyle:{backgroundColor:"$surface1Hovered"}},a={width:200,top:"calc(100% + 8px)",right:0},s=n.ZP.hr`
  background-color: ${({theme:e})=>e.surface3};
  border: none;
  height: 0.5px;
`,l=n.ZP.p`
  color: ${({theme:e})=>e.neutral3};
  font-weight: 485;
  font-size: 16px;
`,d=n.ZP.div`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 485;
  font-size: 0.85em;
  padding-top: 0.5em;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,r._j)(.1,e.neutral2)};
    cursor: pointer;
  }
`,c=(e,t=h)=>{let i=e.slice(0,t);return i=`${i.slice(0,Math.min(i.length,i.lastIndexOf(" ")))}...`,i},h=400},37451:(e,t,i)=>{i.d(t,{A:()=>s,U:()=>a});var n=i(92936),r=i(45779);const o=(0,r.createContext)(void 0);function a(){const e=(0,r.useContext)(o);if(!e)throw new Error("useTDPContext must be used within a TDPContextProvider");return e}function s({children:e,contextValue:t}){return(0,n.jsx)(o.Provider,{value:t,children:e})}}}]);
//# sourceMappingURL=3445.4a71304c.chunk.js.map