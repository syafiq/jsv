`){this.joiner=e,this.lines=[],this.newLine=[]}add(...e){return this.lines.push(...e),this}push(e){return this.newLine.push(e),this}addJoined(e=""){return this.add(this.newLine.join(e)),this.newLine=[],this}join(){return this.lines.join(this.joiner)}finalize(){return this.join()+this.joiner}}function dg(o){return o<<0}function Jf(o){return o>>>0}function m_(o,e=3){if(!o)return 0;const{length:t}=o;let s=0;for(let n=0;n<t;++n)s+=o[n]*o[n];const i=Math.sqrt(s/t)/255;return Math.min(1,i*e)}const Ew="9";function au(o){return o==="screencast"?"video":o}function g_(o){const e=[];return e.push("a=candidate:"),e.push(`${o.foundation} ${o.component} ${o.protocol.toUpperCase()} ${o.priority} ${o.ip} ${o.port} typ ${o.type}`),o["rel-addr"]!==void 0&&e.push(` raddr ${o["rel-addr"]} rport ${o["rel-port"]}`),e.push(` generation ${o.generation}`),e.join("")}function _w(o){return o==="application"?"DTLS/SCTP":"UDP/TLS/RTP/SAVPF"}function kw(o,e=Ew,t){const s=_w(o);return`m=${au(o)} ${e} ${s} ${t.join(" ")}`}class ru extends Vp{addCandidate(e){return this.add(g_(e))}addHeader(e,t){const s=t.join(" ");return this.add("v=0",`o=- ${e} 2 IN IP4 0.0.0.0`,"s=-","t=0 0","a=extmap-allow-mixed",`a=group:BUNDLE ${s}`,"a=ice-options:trickle","a=msid-semantic:WMS *")}addTransport(e,t){this.add(`a=ice-ufrag:${e.ufrag}`,`a=ice-pwd:${e.pwd}`,"a=ice-options:trickle");for(const s of e.fingerprints)this.add(`a=fingerprint:${s.hash} ${s.fingerprint}`,`a=setup:${s.setup}`);if(!t&&e.candidates)for(const s of e.candidates)this.addCandidate(s);return this}addSsrc(e){let t="stream",{type:s,sourceGroups:i}=e;const n=Jf(e.source);t+=n,s+=n;const a=()=>{this.add(`a=msid:${t} ${s}`)},r=l=>{this.add(`a=ssrc:${l} cname:${t}`,`a=ssrc:${l} msid:${t} ${s}`,`a=ssrc:${l} mslabel:${t}`,`a=ssrc:${l} label:${s}`)};return a(),i?.length?i.forEach(l=>{if(l.sources.length){const c=l.sources.map(Jf);this.add(`a=ssrc-group:${l.semantics} ${c.join(" ")}`),c.forEach(r)}}):r(n),this}addSsrcEntry(e,t,s){const i=(...f)=>this.add(...f),{type:n,mid:a,direction:r,port:l}=e,c=t.transport,d=n==="application",h=d?void 0:t[n],u=r==="inactive";if(e.shouldBeSkipped(s))return i(`m=${au(n)} 0 ${_w(n)} 0`,"c=IN IP4 0.0.0.0","a=inactive",`a=mid:${a}`);const p=d?[{id:5e3}]:h["payload-types"],m=p.map(f=>f.id);i(kw(n,l,m),"c=IN IP4 0.0.0.0",`a=rtcp:${l} IN IP4 0.0.0.0`),c["rtcp-mux"]&&i("a=rtcp-mux"),i(`a=mid:${a}`);let g=r;if(r!=="sendrecv"&&s&&!(u||d)&&(g=r==="sendonly"?"recvonly":"sendonly"),i(`a=${g}`),this.addTransport(c),d)i(`a=sctpmap:${p[0].id} webrtc-datachannel 256`);else{const f=h["rtp-hdrexts"];f?.length&&f.forEach(y=>{i(`a=extmap:${y.id} ${y.uri}`)}),p.forEach(y=>{i(`a=rtpmap:${y.id} ${y.name}/${y.clockrate}${y.channels&&y.channels>1?`/${y.channels}`:""}`);const v=y.parameters;if(Array.isArray(v))v.length&&console.error("parameters is array???",v);else if(v&&Object.keys(v).length){const w=[];for(const S in v)w.push(`${S}=${v[S]}`);i(`a=fmtp:${y.id} ${w.join(";")}`)}const b=y["rtcp-fbs"];b?.length&&b.forEach(w=>{i(`a=rtcp-fb:${y.id} ${w.type}${w.subtype?" "+w.subtype:""}`)})})}return e.source&&(g==="sendonly"||g==="sendrecv")&&this.addSsrc(e),this}addConference(e){const{conference:t,entries:s,bundle:i,isAnswer:n}=e;this.addHeader(t.sessionId,i),np&&this.addTransport(t.transport);for(const a of s)this.addSsrcEntry((n?a.recvEntry||a.sendEntry:a.sendEntry||a.recvEntry)||a,t,n);return this}static fromConference(e){return new ru().addConference(e).finalize()}}class f_{constructor(e,t){const s=this.streamSource=e.createMediaStreamSource(t),i=this.analyser=e.createAnalyser();this.gain=e.createGain(),i.minDecibels=-100,i.maxDecibels=-30,i.smoothingTimeConstant=.05,i.fftSize=1024,s.connect(i)}}const Dl=class Dl{constructor(e){this.interval=e,this.getAmplitude=t=>{const{streamAnalyser:s,stream:i,track:n,source:a,type:r}=t,l=s.analyser;if(!l)return;const c=new Uint8Array(l.frequencyBinCount);l.getByteFrequencyData(c);const d=m_(c);return{type:r,source:a,stream:i,track:n,value:d}},this.analyse=()=>{const t=this.counter%3===0,n=(t?this.items:this.items.filter(a=>a.type==="input")).filter(a=>a.kind==="audio").slice(0,p_).map(this.getAmplitude);++this.counter>=1e3&&(this.counter=0),Dl.ANALYSER_LISTENER.dispatchEvent("amplitude",{amplitudes:n,type:t?"all":"input"})},this.context=new(window.AudioContext||window.webkitAudioContext),this.items=[],this.outputStream=new MediaStream,this.inputStream=new MediaStream,this.counter=0,this.log=zs("SM"),this.direction="sendonly",this.canCreateConferenceEntry=!0,this.types=["audio","video"]}addStream(e,t){e.getTracks().forEach(s=>{this.addTrack(e,s,t)})}addTrack(e,t,s){this.log("addTrack",s,t,e);const{context:i,items:n,inputStream:a,outputStream:r}=this,l=t.kind,c=Dl.getSource(e,s);switch(s){case"input":{a?a.addTrack(t):this.inputStream=e;break}case"output":{for(let d=0;d<n.length;++d){const{track:h,type:u,source:p}=n[d];if(p===c&&u==="input"){n.splice(d,1),r.removeTrack(h);break}}l!=="video"&&r.addTrack(t);break}}this.finalizeAddingTrack({type:s,source:c,stream:e,track:t,kind:l,streamAnalyser:l==="audio"?new f_(i,e):void 0}),l==="audio"&&this.interval&&this.changeTimer()}finalizeAddingTrack(e){const{track:t}=e;t.addEventListener("ended",()=>{this.removeTrack(t)},{once:!0}),this.items.push(e)}hasInputTrackKind(e){return this.items.find(t=>t.type==="input"&&t.kind===e)}static getSource(e,t){return t==="input"?e.source||e.id:""+dg(+e.id.substring(6))}removeTrack(e){this.log("removeTrack",e);const{items:t}=this;let s=!1;for(let i=0,n=t.length;!s&&i<n;++i){const{track:a,type:r}=t[i];switch(r){case"output":{a===e&&(t.splice(i,1),this.outputStream.removeTrack(e),s=!0);break}case"input":{a===e&&(t.splice(i,1),this.inputStream.removeTrack(e),s=!0);break}}}e.kind==="audio"&&this.interval&&this.changeTimer()}replaceInputAudio(e,t){this.removeTrack(t),this.addStream(e,"input")}changeTimer(){this.timer!==void 0&&clearInterval(this.timer),this.items.length&&(this.timer=window.setInterval(this.analyse,this.interval))}appendToConference(e){if(this.locked)return;const{inputStream:t,direction:s,canCreateConferenceEntry:i}=this,n={direction:s,streams:[t]},a=this.types.map(l=>[l,n]),r=t.getTracks();for(const[l,c]of a){let d=e.findEntry(f=>f.direction===s&&f.type===l);if(!d){if(!i)continue;d=e.createEntry(l)}let{transceiver:h}=d;h||(h=d.createTransceiver(e.connection,c)),d.direction!==h.direction&&(h.direction=d.direction);const u=au(l),p=r.findIndex(f=>f.kind===u),m=p!==-1?r.splice(p,1)[0]:void 0,g=h.sender;g.track!==m&&g.replaceTrack(m).catch(f=>{this.log.error(f)})}}stop(){try{this.inputStream.getTracks().concat(this.outputStream.getTracks()).forEach(t=>{nu(t)})}catch(e){this.log.error(e)}}};Dl.ANALYSER_LISTENER=new vi;let Er=Dl;class Tw extends vi{constructor(){super(!1);const e=this.player=document.createElement("div");e.classList.add("call-player"),e.style.display="none",document.body.append(e),this.elements=new Map;const t=this.audio=new Audio;t.autoplay=!0,t.volume=1,this.player.append(t),this.elements.set("audio",t),this.fixSafariAudio(),this.getStream=Mw()}get isSharingAudio(){return!!this.streamManager.hasInputTrackKind("audio")}get isSharingVideo(){return!!this.streamManager.hasInputTrackKind("video")}fixSafariAudio(){Pi(this.audio)}requestAudioSource(e){return this.requestInputSource(!0,!1,e)}requestInputSource(e,t,s){const{streamManager:i}=this;if(i){const a=!e||this.isSharingAudio,r=!t||this.isSharingVideo;if(a&&r)return Promise.resolve()}const n={audio:e&&Cw(),video:t&&cg()};return this.getStream({constraints:n,muted:s}).then(a=>{this.onInputStream(a)})}requestScreen(){return this.getStream({isScreen:!0,constraints:Iw(!0)}).then(e=>{this.onInputStream(e)})}getElement(e){return this.elements.get(""+e)}cleanup(){this.player.textContent="",this.player.remove(),this.elements.clear(),this.streamManager.stop(),super.cleanup()}onTrack(e){this.tryAddTrack({stream:e.streams[0],track:e.track,type:"output"})}saveInputVideoStream(e,t){const s=e.getVideoTracks()[0];this.tryAddTrack({stream:e,track:s,type:"input",source:t||"main"})}tryAddTrack({stream:e,track:t,type:s,source:i}){i||(i=Er.getSource(e,s)),this.log("tryAddTrack",e,t,s,i);const n=s==="output",{player:a,elements:r,streamManager:l}=this,c=t.kind,d=c==="video",h=d?i:c;let u=r.get(h);d&&t.addEventListener("ended",()=>{this.log("[track] onended"),r.delete(h)},{once:!0}),n&&l.addTrack(e,t,s);const p=d?e:l.outputStream;if(u)u.paused&&Pi(u),u.srcObject=p;else{if(u=document.createElement(c),u.autoplay=!0,u.srcObject=p,u.volume=1,u.sinkId!=="undefined"){const{outputDeviceId:m}=this;m&&u.setSinkId(m)}d?(u.setAttribute("playsinline","true"),u.muted=!0):a.appendChild(u),r.set(h,u)}return i}setMuted(e){this.streamManager.inputStream.getAudioTracks().forEach(t=>{t?.kind==="audio"&&(t.enabled=e===void 0?!t.enabled:!e)})}onInputStream(e){if(this.isClosing)e.getTracks().forEach(t=>{nu(t)});else{e.getVideoTracks().length&&this.saveInputVideoStream(e,"main");const{streamManager:s,description:i}=this;s.addStream(e,"input"),i&&s.appendToConference(i)}}}function y_(o,e,t){t||(t=zs("RTCDataChannel"));const s=o.createDataChannel("data",e);return s.addEventListener("message",i=>{t("onmessage",i)}),s.addEventListener("open",()=>{t("onopen")}),s.addEventListener("close",()=>{t("onclose")}),s.log=t,s}function v_(o,e){e||(e=zs("RTCPeerConnection")),e("constructor");const t=new RTCPeerConnection(o);return t.addEventListener("track",s=>{e("ontrack",s)}),t.addEventListener("signalingstatechange",()=>{e("onsignalingstatechange",t.signalingState)}),t.addEventListener("connectionstatechange",()=>{e("onconnectionstatechange",t.connectionState)}),t.addEventListener("negotiationneeded",()=>{e("onnegotiationneeded",t.signalingState)}),t.addEventListener("icecandidate",s=>{e("onicecandidate",s)}),t.addEventListener("iceconnectionstatechange",()=>{e("oniceconnectionstatechange",t.iceConnectionState)}),t.addEventListener("datachannel",()=>{e("ondatachannel")}),t.log=e,{connection:t}}class ou{constructor(e,t){this.mid=e,this.type=t,this.port=Ew}setDirection(e){return this.originalDirection||(this.originalDirection=e),this.direction=e}setPort(e){return this.port=e}setEndpoint(e){return this.endpoint=e}setPeerId(e){return this.peerId=e}createTransceiver(e,t){return t?.direction&&this.setDirection(t.direction),this.transceiver=e.addTransceiver(au(this.type),t)}setSource(e){let t;if(Array.isArray(e)){if(!e[0])return;t=e,e=t[0].sources[0]}return this.sourceGroups=t,this.source=e}shouldBeSkipped(e){return e&&this.direction==="inactive"}}function Nd(o,e,t){let s;if(Array.isArray(e)){if(!e[0])return;s=e,e=s[0].sources[0]}return{endpoint:t,type:o,source:e,sourceGroups:s}}class b_{constructor(e){this.connection=e,this.sessionId=""+Date.now(),this.maxSeenId=-1,this.entries=[],this.entriesByMid=new Map,this.entriesBySource=new Map,this.entriesByPeerId=new Map}setData(e){return Lt(this,e)}createEntry(e){const t=""+ ++this.maxSeenId,s=new ou(t,e);return this.entries.push(s),this.entriesByMid.set(t,s),s}deleteEntry(e){cs(this.entries,e),this.entriesByMid.delete(e.mid),this.entriesBySource.delete(e.source);const t=this.entriesByPeerId.get(e.peerId);t&&(t.delete(e),t.size||this.entriesByPeerId.delete(e.peerId))}setEntrySource(e,t){e.setSource(t),this.entriesBySource.set(e.source,e)}setEntryPeerId(e,t){e.setPeerId(t);let s=this.entriesByPeerId.get(t);s||this.entriesByPeerId.set(t,s=new Set),s.add(e)}findEntry(e){return this.entries.find(e)}findFreeSendRecvEntry(e,t){let s=this.entries.find(i=>i.direction==="sendrecv"&&i.type===e&&!(t?i.sendEntry:i.recvEntry));return s||(s=this.createEntry(e),s.setDirection("sendrecv")),s}getEntryByMid(e){return this.entriesByMid.get(e)}getEntryBySource(e){return this.entriesBySource.get(e)}getEntriesByPeerId(e){return this.entriesByPeerId.get(e)}generateSdp(e){return ru.fromConference({conference:this,...e})}}class xw{constructor(e){Lt(this,e),this.log||(this.log=this.connection?.log||zs("CALL-CONNECTION-BASE")),this.sources={}}createPeerConnection(e){return this.connection||(this.connection=v_(e,this.log.bindPrefix("connection")).connection)}createDataChannel(e){return this.dataChannel||(this.dataChannel=y_(this.connection,e,this.log.bindPrefix("data")))}createDescription(){return this.description||(this.description=new b_(this.connection))}appendStreamToConference(){return this.streamManager.appendToConference(this.description)}closeConnection(){const{connection:e}=this;if(e)try{e.log("close"),e.close()}catch(t){this.log.error(t)}}closeConnectionAndStream(e){this.closeConnection(),e&&this.streamManager.stop()}negotiate(){const e=this.negotiating;return e||(this.negotiating=this.negotiateInternal().finally(()=>{this.negotiating=void 0}))}sendDataChannelData(e){this.dataChannel.readyState==="open"&&this.dataChannel.send(JSON.stringify(e))}}function w_(o,e){const t=i=>{const n={};return i.attributes.get("extmap").forEach(r=>{const l=r.key.split("/",1)[0];n[l]=r.value}),n};["audio","video"].filter(i=>e[i]).map(i=>[e[i],i]).forEach(([i,n])=>{const a=o.find(l=>l.mediaType===n);if(!a)return;const r=t(a);ii(i["rtp-hdrexts"],(l,c,d)=>{r[l.id]!==l.uri&&(d.splice(c,1),console.log("[sdp] filtered extmap:",l,c,n))})})}var mc,gc;class S_{constructor(e,t){es(this,mc,void 0);es(this,gc,void 0);kt(this,mc,e),kt(this,gc,t)}get session(){return At(this,mc)}get media(){return At(this,gc)}get bundle(){return this.session.lines.find(t=>t.parsed?.key==="group").value.split(" ").slice(1)}toString(){return this.session.lines.concat(...this.media.map(e=>e.lines)).map(e=>e.toString()).join(`\r