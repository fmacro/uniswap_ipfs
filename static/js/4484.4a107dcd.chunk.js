"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4484],{94484:(t,e,n)=>{n.r(e),n.d(e,{getClientSideQuote:()=>S,getRouter:()=>k});var o=n(76078),s=n(69531),r=n(73397),a=n(9444),i=n(61592),d=n.n(i),u=n(12055),c=n(45427),l=n(40834),m=n(92650),p=n(21651);function h(t,e,n,o,s,r,a){try{var i=t[r](a),d=i.value}catch(u){return void n(u)}i.done?e(d):Promise.resolve(d).then(o,s)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(o,s){var r=t.apply(e,n);function a(t){h(r,o,s,a,i,"next",t)}function i(t){h(r,o,s,a,i,"throw",t)}a(void 0)}))}}const I=new Map;function k(t){const e=I.get(t);if(e)return e;if((0,r.ht)(t)&&(0,r.zK)({chainId:t}).supportsClientSideRouting){const e=a.v[t],n=new s.hfy({chainId:c.UNIVERSE_CHAIN_INFO[t].sdkId,provider:e});return I.set(t,n),n}throw new Error(`Router does not support this chain (chainId: ${t}).`)}function g(){return(g=y((function*({tradeType:t,tokenIn:e,tokenOut:n,amount:r},a,i){const c=Object.values(u.Yp).includes(e.address),h=Object.values(u.Yp).includes(n.address),y=c?(0,l.nativeOnChain)(e.chainId):new o.Token(e.chainId,e.address,e.decimals,e.symbol),I=h?(0,l.nativeOnChain)(n.chainId):new o.Token(n.chainId,n.address,n.decimals,n.symbol),k=t===o.TradeType.EXACT_INPUT?y:I,g=t===o.TradeType.EXACT_INPUT?I:y,S=o.CurrencyAmount.fromRawAmount(k,d().BigInt(r)),f=yield a.route(S,g,t,void 0,i);return f?function(t,e,{quote:n,quoteGasAdjusted:r,route:a,estimatedGasUsed:i,estimatedGasUsedQuoteToken:d,estimatedGasUsedUSD:c,gasPriceWei:l,methodParameters:h,blockNumber:y}){const I=[];for(const s of a){const{amount:e,quote:n,tokenPath:r}=s,a=s.protocol===m.Protocol.V2?s.route.pairs:s.route.pools,i=[];for(let s=0;s<a.length;s++){const d=a[s],u=r[s],c=r[s+1];let l,m;if(0===s&&(l=t===o.TradeType.EXACT_INPUT?e.quotient.toString():n.quotient.toString()),s===a.length-1&&(m=t===o.TradeType.EXACT_INPUT?n.quotient.toString():e.quotient.toString()),d instanceof p.Pool)i.push({type:"v3-pool",tokenIn:{chainId:u.chainId,decimals:u.decimals,address:u.address,symbol:u.symbol},tokenOut:{chainId:c.chainId,decimals:c.decimals,address:c.address,symbol:c.symbol},fee:d.fee.toString(),liquidity:d.liquidity.toString(),sqrtRatioX96:d.sqrtRatioX96.toString(),tickCurrent:d.tickCurrent.toString(),amountIn:l,amountOut:m});else{const t=d.reserve0,e=d.reserve1;i.push({type:"v2-pool",tokenIn:{chainId:u.chainId,decimals:u.decimals,address:u.address,symbol:u.symbol},tokenOut:{chainId:c.chainId,decimals:c.decimals,address:c.address,symbol:c.symbol},reserve0:{token:{chainId:t.currency.wrapped.chainId,decimals:t.currency.wrapped.decimals,address:t.currency.wrapped.address,symbol:t.currency.wrapped.symbol},quotient:t.quotient.toString()},reserve1:{token:{chainId:e.currency.wrapped.chainId,decimals:e.currency.wrapped.decimals,address:e.currency.wrapped.address,symbol:e.currency.wrapped.symbol},quotient:e.quotient.toString()},amountIn:l,amountOut:m})}}I.push(i)}const k={methodParameters:h,blockNumber:y.toString(),amount:e.quotient.toString(),amountDecimals:e.toExact(),quote:n.quotient.toString(),quoteDecimals:n.toExact(),quoteGasAdjusted:r.quotient.toString(),quoteGasAdjustedDecimals:r.toExact(),gasUseEstimateQuote:d.quotient.toString(),gasUseEstimateQuoteDecimals:d.toExact(),gasUseEstimate:i.toString(),gasUseEstimateUSD:c.toExact(),gasPriceWei:l.toString(),route:I,routeString:(0,s.zDd)(a)};return{state:u.k4.SUCCESS,data:{routing:u.AX.CLASSIC,quote:k,allQuotes:[]}}}(t,S,f):{state:u.k4.NOT_FOUND}}))).apply(this,arguments)}function S(t,e,n){return f.apply(this,arguments)}function f(){return f=y((function*({tokenInAddress:t,tokenInChainId:e,tokenInDecimals:n,tokenInSymbol:o,tokenOutAddress:s,tokenOutChainId:r,tokenOutDecimals:a,tokenOutSymbol:i,amount:d,tradeType:u},c,l){return function(t,e,n){return g.apply(this,arguments)}({tradeType:u,tokenIn:{address:t,chainId:e,decimals:n,symbol:o},tokenOut:{address:s,chainId:r,decimals:a,symbol:i},amount:d},c,l)})),f.apply(this,arguments)}}}]);
//# sourceMappingURL=4484.4a107dcd.chunk.js.map