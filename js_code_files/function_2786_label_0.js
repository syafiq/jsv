      `)}setCanRenderAvatars(e){this.canRenderAvatars=e}render(e){const t=!!this.stickerContainer;if(!t)this.stickerContainer=document.createElement("div"),this.stickerContainer.classList.add(wa+"-sticker"),this.append(this.stickerContainer);else return this.customEmojiElement;const s=this.reactionCount;if(e||t)return;const i=s.reaction;if(i._==="reactionEmoji"){const n=fe.getReaction(i.emoticon);return Xs(n,a=>{a.center_icon?this.stickerContainer.classList.add("is-regular"):this.stickerContainer.classList.add("is-static"),a.pFlags.inactive&&this.classList.add("is-inactive");const r=a.center_icon??a.static_icon;this.renderDoc(r)})}else if(i._==="reactionCustomEmoji"){if(this.stickerContainer.classList.add("is-custom"),!this.customEmojiElement){this.customEmojiElement=wm.create();const n=this.wrapStickerPromise=this.customEmojiElement.readyPromise=Rt();this.wrapStickerPromise.finally(()=>{this.wrapStickerPromise===n&&(this.wrapStickerPromise=void 0)}),this.stickerContainer.append(this.customEmojiElement)}return this.customEmojiElement.docId=i.document_id,this.customEmojiElement}}renderDoc(e){const t=Fp[this.type],s=this.wrapStickerPromise=Ds({div:this.stickerContainer,doc:e,width:t,height:t,static:!0,managers:this.managers,middleware:this.middleware,needFadeIn:!1}).then(({render:i})=>i).finally(()=>{this.wrapStickerPromise===s&&(this.wrapStickerPromise=void 0)})}findTitle(){let e;return this.type==="tag"&&(e=rc.find(s=>Ai(s.reaction,this.reactionCount.reaction))?.title),e}renderCounter(e,t=this.findTitle()){const s=Rp[this.type];if(s===void 0&&!e&&!t&&!this.hasTitle)return;const i=this.reactionCount;let n=!1;if(e||t||i.count>=s||this.type==="block"&&!this.canRenderAvatars){this.counter||(this.counter=document.createElement(this.type==="inline"?"i":"span"),this.counter.classList.add(wa+"-counter"));const a=Ri(i.count);if(t){const r=document.createElement("span");r.classList.add(wa+"-counter-title"),r.append(typeof t=="string"?Pe(t):t),this.counter.replaceChildren(r),n=!0,e&&this.counter.append(" ",a)}else this.counter.textContent!==a&&(this.counter.textContent=a);this.counter.parentElement||this.append(this.counter)}else this.counter?.parentElement&&(this.counter.remove(),this.counter=void 0);this.hasTitle=n}renderAvatars(e){if(this.type==="block"){if(this.reactionCount.count>=Rp[this.type]||!this.canRenderAvatars){this.stackedAvatars&&(this.stackedAvatars.container.remove(),this.stackedAvatars=void 0);return}this.stackedAvatars||(this.stackedAvatars=new Wo({avatarSize:24,middleware:this.middleware}),this.append(this.stackedAvatars.container)),this.stackedAvatars.render(e.map(t=>Je(t.peer_id)))}}setIsChosen(e=this.reactionCount.chosen_order!==void 0){if(this.type==="inline")return;(this.classList.contains("is-chosen")&&!this.classList.contains("backwards"))!==e&&vt({element:this,className:"is-chosen",forwards:e,duration:this.isConnected?300:0})}fireAroundAnimation(e){let t=0;return this.type==="inline"?t=14:(this.type==="block"||this.type==="tag")&&(t=18),za?.fireAroundAnimation({waitPromise:e,cache:this,middleware:this.middleware,reaction:this.reactionCount?.reaction,stickerContainer:this.stickerContainer,managers:this.managers,sizes:{genericEffect:26,genericEffectSize:100,size:Fp[this.type]+t,effectSize:80},scrollable:ce.chat.bubbles.scrollable})}static fireAroundAnimation(e){if(e.cache.hasAroundAnimation||!et.isAvailable("effects_reactions"))return;e.managers??(e.managers=C.managers);const t=e.reaction;if(t._==="reactionEmpty")return;const s=({availableReaction:a,genericEffect:r,sticker:l,onlyAround:c})=>{const d=r?e.sizes.genericEffect:e.sizes.size,h=r?void 0:document.createElement("div");h&&h.classList.add(wa+"-sticker-activate");const u=e.sizes.genericEffectSize,p=r&&l.sticker!==2,m=e.textColor||"primary-text-color",g={doc:r||a.around_animation,size:r?u:e.sizes.effectSize,target:e.stickerContainer,side:"center",skipRatio:1,play:!1,managers:e.managers,middleware:e.middleware,scrollable:e.scrollable},f=jd(g),y=r&&jd({...g,doc:p?g.doc:l,size:u,stickerSize:d,loopEffect:!0,textColor:m}),v=(!r||p)&&!c&&Ds({div:h||document.createElement("div"),doc:l||a.center_icon,width:d,height:d,withThumb:!1,needUpscale:!0,play:!1,skipRatio:1,group:"none",needFadeIn:!1,managers:e.managers,middleware:e.middleware,textColor:m,loop:p}).then(({render:b})=>b);return Promise.all([r?y.stickerPromise:v,f.stickerPromise,v,r&&c0(),e.waitPromise]).then(([b,w,S,I,L])=>{c&&(b=w);const M=Rt(),P=()=>{M.resolve(),b?.remove(),h?.remove(),e.stickerContainer.classList.remove("has-animation")};if(r){const k=b.canvas[0];k.classList.add("hide");const A=b.contexts[0],x=k.dpr,T=u*x,O=k.width;y.animationDiv.append(k),y.animationDiv.style.transform="scaleX(-1)";const F=S?.[0],N=F instanceof HTMLVideoElement;b.addEventListener("firstFrame",()=>{b.setSize(T,T),k.classList.remove("hide"),N&&Pi(F)},{once:!0});let G=0;const R=T/512,{layersPositions:B,op:H}=I;b.overrideRender=z=>{p&&(z=F);const W=z instanceof ImageData;A.clearRect(0,0,T,T);for(let ue=0;ue<B.length;++ue){const ee=B[ue][G];if(!ee)continue;let _e=!1,ae=!1,re=!1,Ue=O,ye=O;if(ee.scale){const[be,pe]=ee.scale;Ue*=be*4/100,ye*=pe*4/100,ae=be<0,re=pe<0}let[Z,de]=ee.translation;Z=(Z+ee.anchor[0])*R-Math.abs(Ue)/2,de=(de+ee.anchor[1])*R-Math.abs(ye)/2,(ae||re)&&(_e=!0,A.save(),A.scale(ae?-1:1,re?-1:1),ae&&(Z=-Z),re&&(de=-de)),ee.opacity&&(_e||(_e=!0,A.save()),A.globalAlpha=ee.opacity[0]/100),W?A.putImageData(z,Z,de):A.drawImage(z,Z,de,Ue,ye),_e&&A.restore()}G++,G>=H&&E()}}if(!b||!w)return P(),M;const E=()=>{vs(P)};return e.middleware.onDestroy(E),!r&&b.addEventListener("enterFrame",k=>{k===b.maxFrame&&(e.cache.wrapStickerPromise?e.cache.wrapStickerPromise.then(()=>{setTimeout(E,1e3)}):E())}),b.addEventListener("firstFrame",()=>{h&&e.stickerContainer.append(h),e.stickerContainer.classList.add("has-animation"),b.play(),w.play()},{once:!0}),M})},i=(a,r=a.stickerEmojiRaw)=>Zh([fe.getReaction(r),a?e.managers.appReactionsManager.getRandomGenericAnimation():void 0],([l,c])=>s(l?{availableReaction:l,onlyAround:!!a}:{genericEffect:c,sticker:a}));let n;t._==="reactionEmoji"?n=i(void 0,t.emoticon):n=Xs(e.managers.appEmojiManager.getCustomEmojiDocument(t.document_id),a=>i(a)),e.middleware.onDestroy(()=>{e.cache.hasAroundAnimation=void 0}),e.cache.hasAroundAnimation=n,n.finally(()=>{e.cache.hasAroundAnimation===n&&(e.cache.hasAroundAnimation=void 0)})}}customElements.define(r0,za);const er="reactions",d0=er+"-element",so=new Map,rc=[];C.addEventListener("saved_tags",({savedPeerId:o,tags:e})=>{o||(rc.splice(0,rc.length,...e),so.forEach(t=>{t.forEach(s=>{s.getContext().peerId===C.myId&&s.getType()===Ki.Tag&&s.render()})}))});class Jh extends HTMLElement{constructor(){super(),this.classList.add(er),this.sorted=[],this.middlewareHelpers=new Map,this.managers=C.managers}connectedCallback(){let e=so.get(this.key);e||so.set(this.key,e=new Set),e.add(this),this.onConnectCallback&&this.isConnected&&(this.onConnectCallback(),this.onConnectCallback=void 0)}disconnectedCallback(){const e=so.get(this.key);e.delete(this),e.size||so.delete(this.key)}getType(){return this.type}getReactionCount(e){return this.sorted[this.sorted.indexOf(e)].reactionCount}getContext(){return this.context}getSorted(){return this.sorted}shouldUseTagsForContext(e){if(e.peerId!==C.myId)return!1;const t=e.reactions;return!t||t.pFlags.reactions_as_tags?!0:!t.results.length}init({context:e,type:t,middleware:s,isPlaceholder:i=this.isPlaceholder,animationGroup:n,lazyLoadQueue:a,forceCounter:r}){this.key!==void 0&&this.disconnectedCallback(),this.middleware!==s&&s.onDestroy(()=>{this.middlewareHelpers.clear()}),this.context=e,this.key=this.context.peerId+"_"+this.context.mid,this.middleware=s,this.isPlaceholder=i,this.animationGroup=n,this.lazyLoadQueue=a,this.forceCounter=r,this.setType(t),this.connectedCallback()}setType(e){if(e===Ki.Block&&this.shouldUseTagsForContext(this.context)&&(e=Ki.Tag),this.type!==e){this.type=e;for(const t in Ki)this.classList.remove(er+"-"+t);this.classList.add(er+"-"+e),this.classList.toggle(er+"-like-block",e===Ki.Block||e===Ki.Tag)}}changeContext(e){return this.init({context:e,type:this.type,middleware:this.middleware})}update(e,t,s){this.context=e,this.render(t,s)}render(e,t){const s=this.context.reactions,i=!!(s&&s.results.length);if(this.classList.toggle("has-no-reactions",!i),!i&&!this.sorted.length)return;const n=i?s.results:[];n.sort((c,d)=>d.count-c.count||(c.chosen_order??0)-(d.chosen_order??0)),ii(this.sorted,(c,d,h)=>{const u=c.reactionCount.reaction;n.some(m=>Ai(m.reaction,u))||(this.middlewareHelpers.get(c).destroy(),this.middlewareHelpers.delete(c),h.splice(d,1),c.remove())});const a=n.reduce((c,d)=>c+d.count,0),r=s&&(!!s.pFlags.can_see_list||this.context.peerId.isUser())&&a<Rp[this.type],l=new Array(n.length);if(this.sorted=n.map((c,d,h)=>{let u=this.sorted.find(g=>Ai(g.reactionCount.reaction,c.reaction));if(!u){const g=this.middleware.create();u=new za,u.init(this.type,g.get()),this.middlewareHelpers.set(u,g)}u.classList.toggle("is-last",d===h.length-1),ws(u,this,d);const p=s.recent_reactions?s.recent_reactions.filter(g=>Ai(g.reaction,c.reaction)):[];u.reactionCount={...c},u.setCanRenderAvatars(r);const m=u.render(this.isPlaceholder);return u.renderCounter(this.forceCounter),u.renderAvatars(p),u.setIsChosen(),l[d]=m,u}),Zh(l,c=>{const d=new Map;if(c.forEach(h=>{h&&d.set(h.docId,new Set([h]))}),!d.size){this.customEmojiRenderer&&(this.customEmojiRendererMiddlewareHelper.destroy(),this.customEmojiRenderer.remove(),this.customEmojiRenderer=this.customEmojiRendererMiddlewareHelper=void 0);return}if(!this.customEmojiRenderer){const h=Fp[this.type];this.customEmojiRendererMiddlewareHelper=this.middleware.create(),this.customEmojiRenderer=ov.create({animationGroup:this.animationGroup,customEmojiSize:ys(h,h),middleware:this.customEmojiRendererMiddlewareHelper.get(),lazyLoadQueue:this.lazyLoadQueue,observeResizeElement:this}),this.customEmojiRenderer.classList.add(er+"-renderer"),this.customEmojiRenderer.canvas.classList.add(er+"-renderer-canvas"),this.prepend(this.customEmojiRenderer)}this.customEmojiRenderer.add({addCustomEmojis:d,lazyLoadQueue:this.lazyLoadQueue})}),!this.isPlaceholder&&e?.length&&(this.isConnected?this.handleChangedResults(e,t):this.onConnectCallback=()=>{this.handleChangedResults(e,t)}),!this.sorted.length&&this.type==="block"){const c=this.parentElement;if(this.remove(),c.classList.contains("document-message")&&!c.childNodes.length){c.remove();return}const d=this.querySelector(".time");d&&c.append(d)}}handleChangedResults(e,t){this.context.peerId===ce.chat.peerId&&e.forEach(s=>{this.sorted.find(n=>Ai(n.reactionCount.reaction,s.reaction))?.fireAroundAnimation(t)})}}customElements.define(d0,Jh);function Ca(o,e="asc"){if(!o)return[];const t=o instanceof Map?[...o.keys()]:Object.keys(o).map(s=>+s);return e==="asc"?t.sort((s,i)=>s-i):t.sort((s,i)=>i-s)}class h0{constructor(e){this.observing=new Map,this.observingQueue=new Map,this.freezedObservingNew=!1,this.observer=new IntersectionObserver(t=>{const s=this.observing;for(let i=0,n=t.length;i<n;++i){const a=t[i],r=s.get(a.target);if(!r){console.error("intersection process no callbacks:",a);debugger;continue}for(const l of r)try{l(a)}catch(c){console.error("intersection process callback error:",c)}}},e)}disconnect(){this.observing.clear(),this.observingQueue.clear(),this.observer.disconnect()}toggleObservingNew(e){if(this.freezedObservingNew===e)return;this.freezedObservingNew=e;const t=this.observingQueue;if(!e&&t.size){for(const[s,i]of t)for(const n of i)this.observe(s,n);t.clear()}}has(e,t,s=this.observing){const i=s.get(e);return!!(i&&i.has(t))}observe(e,t){if(this.freezedObservingNew&&this.has(e,t))return;const s=this.freezedObservingNew?this.observingQueue:this.observing;let i=s.get(e);i&&i.has(t)||(i||(i=new Set,s.set(e,i),s===this.observing&&this.observer.observe(e)),i.add(t))}unobserve(e,t){const s=this.freezedObservingNew&&!this.has(e,t)?this.observingQueue:this.observing,i=s.get(e);i&&(i.delete(t),i.size||(s.delete(e),this.observer.unobserve(e)))}}function u0(o){Us(o.textContent)}function Bb(o,e,t){if(t)return us(o.description||"",{...e,entities:o.entities});const s=Aa(o.description||"",150,180);return us(s,e)}function Nb(o){let e=o.title||o.author||"";return e=Aa(e,80,100),us(e,{noLinks:!0,noLinebreaks:!0})}function Df(o){if(!o)return!1;const e=o.media?.document;return!!(o.pFlags.media_unread&&o.pFlags.mentioned&&(!e||!["voice","round"].includes(e.type)))}function Ob(o){let e=0,t;for(const s of o)if(s.message){if(++e>1)break;t=s}return e>1&&(t=void 0),t}const qe={None:0,Top:1,Right:2,Bottom:4,Left:8};class lh{constructor(e,t,s,i,n=t){this.sizes=e,this.maxWidth=t,this.minWidth=s,this.spacing=i,this.maxHeight=n,this.count=e.length,this.ratios=lh.countRatios(e),this.proportions=lh.countProportions(this.ratios),this.averageRatio=Lr(this.ratios,1)/this.count,this.maxSizeRatio=t/this.maxHeight}layout(){return this.count?this.count>=5||this.ratios.find(e=>e>2)?new ag(this.ratios,this.averageRatio,this.maxWidth,this.minWidth,this.spacing).layout():this.count===2?this.layoutTwo():this.count===3?this.layoutThree():this.layoutFour():[]}layoutTwo(){return this.proportions==="ww"&&this.averageRatio>1.4*this.maxSizeRatio&&this.ratios[1]-this.ratios[0]<.2?this.layoutTwoTopBottom():this.proportions==="ww"||this.proportions==="qq"?this.layoutTwoLeftRightEqual():this.layoutTwoLeftRight()}layoutThree(){return this.proportions[0]==="n"?this.layoutThreeLeftAndOther():this.layoutThreeTopAndOther()}layoutFour(){return this.proportions[0]==="w"?this.layoutFourTopAndOther():this.layoutFourLeftAndOther()}layoutTwoTopBottom(){const e=this.maxWidth,t=Math.round(Math.min(e/this.ratios[0],Math.min(e/this.ratios[1],(this.maxHeight-this.spacing)/2)));return[{geometry:{x:0,y:0,width:e,height:t},sides:qe.Left|qe.Top|qe.Right},{geometry:{x:0,y:t+this.spacing,width:e,height:t},sides:qe.Left|qe.Bottom|qe.Right}]}layoutTwoLeftRightEqual(){const e=(this.maxWidth-this.spacing)/2,t=Math.round(Math.min(e/this.ratios[0],Math.min(e/this.ratios[1],this.maxHeight*1)));return[{geometry:{x:0,y:0,width:e,height:t},sides:qe.Top|qe.Left|qe.Bottom},{geometry:{x:e+this.spacing,y:0,width:e,height:t},sides:qe.Top|qe.Right|qe.Bottom}]}layoutTwoLeftRight(){const e=Math.round(this.minWidth*1.5),t=Math.min(Math.round(Math.max(.4*(this.maxWidth-this.spacing),(this.maxWidth-this.spacing)/this.ratios[0]/(1/this.ratios[0]+1/this.ratios[1]))),this.maxWidth-this.spacing-e),s=this.maxWidth-t-this.spacing,i=Math.min(this.maxHeight,Math.round(Math.min(s/this.ratios[0],t/this.ratios[1])));return[{geometry:{x:0,y:0,width:s,height:i},sides:qe.Top|qe.Left|qe.Bottom},{geometry:{x:s+this.spacing,y:0,width:t,height:i},sides:qe.Top|qe.Right|qe.Bottom}]}layoutThreeLeftAndOther(){const e=this.maxHeight,t=Math.round(Math.min((this.maxHeight-this.spacing)/2,this.ratios[1]*(this.maxWidth-this.spacing)/(this.ratios[2]+this.ratios[1]))),s=e-t-this.spacing,i=Math.max(this.minWidth,Math.round(Math.min((this.maxWidth-this.spacing)/2,Math.min(t*this.ratios[2],s*this.ratios[1])))),n=Math.min(Math.round(e*this.ratios[0]),this.maxWidth-this.spacing-i);return[{geometry:{x:0,y:0,width:n,height:e},sides:qe.Top|qe.Left|qe.Bottom},{geometry:{x:n+this.spacing,y:0,width:i,height:s},sides:qe.Top|qe.Right},{geometry:{x:n+this.spacing,y:s+this.spacing,width:i,height:t},sides:qe.Bottom|qe.Right}]}layoutThreeTopAndOther(){const e=this.maxWidth,t=Math.round(Math.min(e/this.ratios[0],(this.maxHeight-this.spacing)*.66)),s=(this.maxWidth-this.spacing)/2,i=Math.min(this.maxHeight-t-this.spacing,Math.round(Math.min(s/this.ratios[1],s/this.ratios[2]))),n=e-s-this.spacing;return[{geometry:{x:0,y:0,width:e,height:t},sides:qe.Left|qe.Top|qe.Right},{geometry:{x:0,y:t+this.spacing,width:s,height:i},sides:qe.Bottom|qe.Left},{geometry:{x:s+this.spacing,y:t+this.spacing,width:n,height:i},sides:qe.Bottom|qe.Right}]}layoutFourTopAndOther(){const e=this.maxWidth,t=Math.round(Math.min(e/this.ratios[0],(this.maxHeight-this.spacing)*.66)),s=Math.round((this.maxWidth-2*this.spacing)/(this.ratios[1]+this.ratios[2]+this.ratios[3])),i=Math.max(this.minWidth,Math.round(Math.min((this.maxWidth-2*this.spacing)*.4,s*this.ratios[1]))),n=Math.round(Math.max(Math.max(this.minWidth*1,(this.maxWidth-2*this.spacing)*.33),s*this.ratios[3])),a=e-i-n-2*this.spacing,r=Math.min(this.maxHeight-t-this.spacing,s);return[{geometry:{x:0,y:0,width:e,height:t},sides:qe.Left|qe.Top|qe.Right},{geometry:{x:0,y:t+this.spacing,width:i,height:r},sides:qe.Bottom|qe.Left},{geometry:{x:i+this.spacing,y:t+this.spacing,width:a,height:r},sides:qe.Bottom},{geometry:{x:i+this.spacing+a+this.spacing,y:t+this.spacing,width:n,height:r},sides:qe.Right|qe.Bottom}]}layoutFourLeftAndOther(){const e=this.maxHeight,t=Math.round(Math.min(e*this.ratios[0],(this.maxWidth-this.spacing)*.6)),s=Math.round((this.maxHeight-2*this.spacing)/(1/this.ratios[1]+1/this.ratios[2]+1/this.ratios[3])),i=Math.round(s/this.ratios[1]),n=Math.round(s/this.ratios[2]),a=e-i-n-2*this.spacing,r=Math.max(this.minWidth,Math.min(this.maxWidth-t-this.spacing,s));return[{geometry:{x:0,y:0,width:t,height:e},sides:qe.Top|qe.Left|qe.Bottom},{geometry:{x:t+this.spacing,y:0,width:r,height:i},sides:qe.Top|qe.Right},{geometry:{x:t+this.spacing,y:i+this.spacing,width:r,height:n},sides:qe.Right},{geometry:{x:t+this.spacing,y:i+n+2*this.spacing,width:r,height:a},sides:qe.Bottom|qe.Right}]}static countRatios(e){return e.map(t=>t.w/t.h)}static countProportions(e){return e.map(t=>t>1.2?"w":t<.8?"n":"q").join("")}}class ag{constructor(e,t,s,i,n,a=s*4/3){this.averageRatio=t,this.maxWidth=s,this.minWidth=i,this.spacing=n,this.maxHeight=a,this.ratios=ag.cropRatios(e,t),this.count=e.length}static cropRatios(e,t){return e.map(n=>t>1.1?Ot(n,1,2.75):Ot(n,.6667,1))}layout(){const e=new Array(this.count),t=[],s=(u,p)=>{const m=this.ratios.slice(u,u+p),g=Lr(m,0);return(this.maxWidth-(p-1)*this.spacing)/g},i=u=>{const p=[];let m=0;for(const g of u)p.push(s(m,g)),m+=g;t.push({lineCounts:u,heights:p})};for(let u=1;u!==this.count;++u){const p=this.count-u;u>3||p>3||i([u,p])}for(let u=1;u!==this.count-1;++u)for(let p=1;p!==this.count-u;++p){const m=this.count-u-p;u>3||p>(this.averageRatio<.85?4:3)||m>3||i([u,p,m])}for(let u=1;u!==this.count-1;++u)for(let p=1;p!==this.count-u;++p)for(let m=1;m!==this.count-u-p;++m){const g=this.count-u-p-m;u>3||p>3||m>3||g>3||i([u,p,m,g])}let n=null,a=0;for(const u of t){const{heights:p,lineCounts:m}=u,g=m.length,f=Lr(p,0)+this.spacing*(g-1),y=Math.min(...p);Math.max(...p);const v=y<this.minWidth?1.5:1,b=(()=>{for(let S=1;S!==g;++S)if(m[S-1]>m[S])return 1.5;return 1})(),w=Math.abs(f-this.maxHeight)*v*b;(!n||w<a)&&(n=u,a=w)}const r=n.lineCounts,l=n.heights,c=r.length;let d=0,h=0;for(let u=0;u!==c;++u){const p=r[u],m=l[u],g=Math.round(m);let f=0;for(let y=0;y!==p;++y){const v=qe.None|(u===0?qe.Top:qe.None)|(u===c-1?qe.Bottom:qe.None)|(y===0?qe.Left:qe.None)|(y===p-1?qe.Right:qe.None),b=this.ratios[d],w=y===p-1?this.maxWidth-f:Math.round(b*m);e[d]={geometry:{x:f,y:h,width:w,height:g},sides:v},f+=w+this.spacing,++d}h+=g+this.spacing}return e}}function Ub(o){const t=new lh(o.items,o.maxWidth,o.minWidth,o.spacing,o.maxHeight).layout(),s=t.find(c=>c.sides&qe.Right),i=s.geometry.width+s.geometry.x,n=t.find(c=>c.sides&qe.Bottom),a=n.geometry.height+n.geometry.y,r=o.container;r.style.width=i+"px",r.style.height=a+"px";const l=r.children;t.forEach(({geometry:c,sides:d},h)=>{let u;if(u=l[h],u||(u=document.createElement("div"),r.append(u)),u.classList.add("album-item","grouped-item"),u.style.width=c.width/i*100+"%",u.style.height=c.height/a*100+"%",u.style.top=c.y/a*100+"%",u.style.left=c.x/i*100+"%",d&qe.Left&&d&qe.Top&&(u.style.borderTopLeftRadius="inherit"),d&qe.Left&&d&qe.Bottom&&(u.style.borderBottomLeftRadius="inherit"),d&qe.Right&&d&qe.Top&&(u.style.borderTopRightRadius="inherit"),d&qe.Right&&d&qe.Bottom&&(u.style.borderBottomRightRadius="inherit"),o.forMedia){const p=document.createElement("div");p.classList.add("album-item-media"),u.append(p)}})}const cr=class cr{constructor(){this.reset=!0,this.loop=!0;const e=this.canvas=document.createElement("canvas");this.dpr=window.devicePixelRatio,e.classList.add("canvas-thumbnail","canvas-dots"),this.paused=!0,this.autoplay=!0,this.tempId=0,this.time=0,this.bufferIndex=0,this.context=e.getContext("webgl2")}resize(e,t,s,i={}){this.width=e,this.height=t,this.multiply=s,this.canvas.width=e*this.dpr,this.canvas.height=t*this.dpr,this.config={particlesCount:Ot(e*t/(500*500)*1e3*(mi?5:10),500,1e4),radius:this.dpr*1.6,seed:Math.random()*10,noiseScale:6,noiseSpeed:.6,forceMult:.6,velocityMult:1,dampingMult:.9999,maxVelocity:6,longevity:1.4,noiseMovement:4,timeScale:.65,color:16777215,...i},this.inited&&this.draw()}genBuffer(){this.buffer&&(this.context.deleteBuffer(this.buffer[0]),this.context.deleteBuffer(this.buffer[1])),this.buffer=[];for(let e=0;e<2;++e)this.buffer[e]=this.context.createBuffer(),this.context.bindBuffer(this.context.ARRAY_BUFFER,this.buffer[e]),this.context.bufferData(this.context.ARRAY_BUFFER,(this.bufferParticlesCount=Math.ceil(this.config.particlesCount))*6*4,this.context.DYNAMIC_DRAW)}compileShader(e,t){var n;const s=this.context.createShader(e),i=(n=cr.shaderTexts)[t]??(n[t]=fetch(t).then(a=>a.text()).then(a=>cr.shaderTexts[t]=a+`