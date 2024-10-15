    </div>`;const r=this.firstElementChild,l=document.createElement("div");l.classList.add("audio-download"),e.type!=="audio"&&this.message&&this.message.pFlags.media_unread&&this.classList.add("is-unread"),n&&(this.classList.add("is-outgoing"),this.append(l));const d=await(s?OP(this):UP(this)),h=this.querySelector(".audio-time");h.textContent=a();const u=this.onLoad=p=>{this.onLoad=void 0;const m=this.audio=lt.addMedia(this.message,p),g=this.readyPromise=Rt();this.audio.readyState>=this.audio.HAVE_CURRENT_DATA?g.resolve():this.addAudioListener("canplay",()=>g.resolve(),{once:!0}),this.onTypeDisconnect=d();const f=()=>Ci(m.currentTime|0)+(s?" / "+a():""),y=()=>{h.innerText=f(),r.classList.toggle("playing",!m.paused)};(!m.paused||m.currentTime>0&&m.currentTime!==m.duration)&&y();const v=b=>{this.togglePlay(b)};r.addEventListener("click",v),this.addAudioListener("ended",()=>{r.classList.remove("playing"),h.innerText=a()}),this.addAudioListener("timeupdate",()=>{!m.currentTime&&m.paused||lt.isSafariBuffering(m)||(h.innerText=f())}),this.addAudioListener("pause",()=>{r.classList.remove("playing")}),this.addAudioListener("play",y)};if(e.thumbs?.length){const p=[],m=await Ns({photo:e,message:null,container:r,boxWidth:48,boxHeight:48,loadPromises:this.loadPromises,withoutPreloader:!0,lazyLoadQueue:this.lazyLoadQueue});r.style.width=r.style.height="",m.images.thumb&&p.push(m.images.thumb),m.images.full&&p.push(m.images.full),this.classList.add("audio-with-thumb"),p.forEach(g=>g.classList.add("audio-thumb"))}if(i){if(n){this.classList.add("downloading"),this.preloader=Du(!1);const p=as.getUpload(n);this.preloader.attachPromise(p),this.dataset.isOutgoing="1",this.preloader.attach(l,!1),p.then(()=>{this.classList.remove("downloading"),l.classList.add("downloaded"),setTimeout(()=>{l.remove()},200)})}}else{let p=this.preloader;const m=e.type!=="audio";u(m);const g=this.load=(f,y)=>{if(this.load=void 0,!this.audio.src){if(lt.resolveWaitingForLoadMedia(this.message.peerId,this.message.mid,this.message.pFlags.is_scheduled),this.onDownloadInit(f),!p)if(e.supportsStreaming){this.classList.add("corner-download");let v;const b=()=>{const S=Du(!1),I=Rt();I.notifyAll({done:75,total:100}),I.catch(()=>{this.audio.pause(),lt.willBePlayed(void 0)}),I.cancel=()=>{I.cancel=qt;const L=new Error;L.type="CANCELED",I.reject(L)},S.attach(l,!1,I),v=this.addAudioListener("pause",()=>{I.cancel()},{once:!0}),this.onDownloadInit(f)},w=this.addAudioListener("play",b);this.readyPromise.then(()=>{this.listenerSetter.remove(w),v&&this.listenerSetter.remove(v)})}else{p=Du(),f||(this.readyPromise=Rt());const v=()=>{this.onDownloadInit(f);const b=as.downloadMediaURL({media:e});return f||b.then(()=>{this.readyPromise.resolve()}),p.attach(l,!1,b),{download:b}};p.setDownloadFunction(v),v()}this.classList.contains("corner-download")?r.append(l):this.append(l),this.classList.add("downloading"),this.readyPromise.then(()=>{DP&&(this.classList.remove("downloading"),l.classList.add("downloaded"),setTimeout(()=>{l.remove()},200)),!y&&lt.willBePlayedMedia===this.audio&&(Pi(this.audio),lt.willBePlayed(void 0))})}};this.audio?.src||(m?g(!1):D(r,()=>{g(!0)},{once:!0,listenerSetter:this.listenerSetter}))}}onDownloadInit(e){e&&(lt.willBePlayed(this.audio),Yi&&!this.audio.autoplay&&(this.audio.autoplay=!0))}togglePlay(e,t=this.audio.paused){e&&X(e),t?(this.setTargetsIfNeeded(),Pi(this.audio)):this.audio.pause()}setTargetsIfNeeded(){const e=!!this.searchContext;if(lt.setSearchContext(this.searchContext||{peerId:Vt,inputFilter:{_:"inputMessagesFilterEmpty"},useSearch:!1})){const[t,s]=e?Lb(this,this.message.mid):[];lt.setTargets({peerId:this.message.peerId,mid:this.message.mid},t,s)}}playWithTimestamp(e){this.load?.(!0),ti(this.audio,e),this.togglePlay(void 0,!0)}get addAudioListener(){return this.listenerSetter.add(this.audio)}disconnectedCallback(){setTimeout(()=>{this.isConnected||(this.onTypeDisconnect&&(this.onTypeDisconnect(),this.onTypeDisconnect=null),this.readyPromise&&this.readyPromise.reject(),this.listenerSetter&&(this.listenerSetter.removeAll(),this.listenerSetter=null),this.preloader&&(this.preloader=null))},100)}}customElements.define("audio-element",eg);const HP=50*1024*1024;let vn=0;Fe.addEventListener("changeScreen",(o,e)=>{if(e===ei.mobile||o===ei.mobile){const t=Array.from(document.querySelectorAll(".media-round .progress-ring")),s=Fe.active.round.width,i=s/2,n=i-7;vn=2*Math.PI*n,t.forEach(a=>{a.setAttributeNS(null,"width",""+s),a.setAttributeNS(null,"height",""+s);const r=a.firstElementChild;r.setAttributeNS(null,"cx",""+i),r.setAttributeNS(null,"cy",""+i),r.setAttributeNS(null,"r",""+n),r.style.strokeDasharray=vn+" "+vn,r.style.strokeDashoffset=""+vn})}});async function On({doc:o,altDoc:e,container:t,message:s,boxWidth:i,boxHeight:n,withTail:a,isOut:r,middleware:l,lazyLoadQueue:c,noInfo:d,group:h,onlyPreview:u,noPreview:p,withoutPreloader:m,loadPromises:g,noPlayButton:f,photoSize:y,videoSize:v,searchContext:b,autoDownload:w,managers:S=C.managers,noAutoplayAttribute:I,ignoreStreaming:L,canAutoplay:M,useBlur:P}){const E=o.supportsStreaming&&!L;!E&&e&&!u&&!nC&&(o=e,e=void 0);const k=w?.video;let A=k===0;const x=!(i&&n);M??(M=(o.type!=="video"||o.size<=HP&&!x)&&(o.type==="gif"?et.isAvailable("gif"):et.isAvailable("video")));let T,O;if(!d&&t){T=document.createElement("span"),T.classList.add("video-time"),t.append(T);let ae=!1;o.type!=="gif"?(T.innerText=Ci(o.duration,!1),!f&&o.type!=="round"&&(M&&!A?(T.classList.add("can-autoplay"),T.append(Le("nosound","video-time-icon"))):ae=!0)):(T.innerText="GIF",!M&&!f&&(ae=!0,A=void 0)),ae&&(O=Ve("btn-circle video-play position-center",{icon:"largeplay",noRipple:!0}),t.append(O))}const F={};if(o.mime_type==="image/gif"){const ae=await Ns({photo:o,message:s,container:t,boxWidth:i,boxHeight:n,withTail:a,isOut:r,lazyLoadQueue:c,middleware:l,withoutPreloader:m,loadPromises:g,autoDownloadSize:k,size:y,managers:S,useBlur:P});return F.thumb=ae,F.loadPromise=ae.loadPromises.full,F}let N;const G=Lo({middleware:l});if(G.classList.add("media-video"),G.muted=!0,o.type==="round"){const ae=document.createElement("div");ae.classList.add("media-round","z-depth-1"),ae.dataset.mid=""+s.mid,ae.dataset.peerId=""+s.peerId,ae.message=s;const re=Fe.active.round,Ue=re.width/2,ye=3.5,Z=Ue-ye*2;ae.innerHTML=`<svg class="progress-ring" width="${re.width}" height="${re.width}" style="transform: rotate(-90deg);">