`)}function Bo(o){return`m=application 9 UDP/DTLS/SCTP webrtc-datachannel
c=IN IP4 0.0.0.0
a=ice-options:trickle
a=mid:2
a=sctp-port:5000
a=max-message-size:262144`}class Mx{static generateCandidate(e){if(!e)return null;const{sdpString:t,sdpMLineIndex:s,sdpMid:i,foundation:n,component:a,protocol:r,priority:l,address:c,type:d,relAddress:h,generation:u,tcpType:p,networkId:m,networkCost:g,username:f}=e;if(t)return{candidate:t,sdpMLineIndex:s,sdpMid:i};throw"no sdpString"}static generateOffer(e){return Ay()?Ty.generateOffer(e):Fy()?xy.generateOffer(e):ky.generateOffer(e)}static generateAnswer(e){return Ay()?Ty.generateAnswer(e):Fy()?xy.generateAnswer(e):ky.generateAnswer(e)}}class LS extends Tw{constructor(e){super(),this.log=zs("CALL"),this.protocol||(this.protocol=wx()),Lt(this,e),this.createdAt=Date.now(),this.offerReceived=!1,this.offerSent=!1,this.decryptQueue=[],this.candidates=[],this.addEventListener("state",n=>{this.log("state",Ft[n]),n===Ft.CLOSED&&this.cleanup()});const t=this.streamManager=new Er(Pw);t.direction="sendrecv",t.types.push("screencast"),this.isOutgoing||(t.locked=!0,t.canCreateConferenceEntry=!1);let s={"@type":"MediaState",type:"input",lowBattery:!1,muted:!0,screencastState:"inactive",videoRotation:0,videoState:"inactive"};const i=this;s=new Proxy(s,{set:function(n,a,r){return n[a]=r,i.setMediaState(s),i.sendMediaState(),!0}}),this.mediaStates={input:s},this.sendMediaState=Zs(this._sendMediaState.bind(this),0,!1,!0)}get connectionState(){const{_connectionState:e,connectionInstance:t}=this;if(e!==void 0)return e;if(t){const{iceConnectionState:s}=t.connection;return s==="closed"?Ft.CLOSED:s!=="connected"&&(!Yi||s!=="completed")?Ft.CONNECTING:Ft.CONNECTED}else return Ft.CONNECTING}get sortIndex(){const e=this.connectionState;let s=(Ft.CLOSED-e+1)*1e13;return s+=2147483647e3-(e===Ft.PENDING&&this.isOutgoing?0:this.createdAt),s}getVideoElement(e){if(e==="input")return this.elements.get("main");{const t=this.getMediaState("output");if(!t)return;const s=t.videoState==="active"?"video":t.screencastState==="active"?"screencast":void 0;if(!s)return;const i=this.description.findEntry(n=>n.type===s);return i?this.elements.get(""+i.recvEntry.source):void 0}}async startScreenSharingInternal(){try{this.wasStartingScreen=!0,this.wasStartingVideo=!1,this.streamManager.types=["audio","screencast"],await this.requestScreen()}catch(e){this.log.error("startScreenSharing error",e)}}async toggleScreenSharing(){return this.isSharingVideo&&await this.stopVideoSharing(),this.isSharingScreen?this.stopVideoSharing():this.startScreenSharingInternal()}async startVideoSharingInternal(){try{this.wasStartingScreen=!1,this.wasStartingVideo=!0,this.streamManager.types=["audio","video"],await this.requestInputSource(!1,!0,!1)}catch(e){this.log.error("startVideoSharing error",e)}}async stopVideoSharing(){const e=this.getMediaState("input");e.videoState=e.screencastState="inactive";const{streamManager:t,description:s}=this,i=t.inputStream.getVideoTracks()[0];i&&(nu(i),t.appendToConference(s))}async toggleVideoSharing(){return this.isSharingScreen&&await this.stopVideoSharing(),this.isSharingVideo?this.stopVideoSharing():this.startVideoSharingInternal()}getMediaState(e){return this.mediaStates[e]}setMediaState(e){this.mediaStates[e.type]=e,this.dispatchEvent("mediaState",e)}isSharingVideoType(e){try{return super.isSharingVideo&&!!(this.wasStartingScreen&&e==="screencast"||this.wasStartingVideo&&e==="video")}catch{return!1}}get isSharingVideo(){return this.isSharingVideoType("video")}get isSharingScreen(){return this.isSharingVideoType("screencast")}get isMuted(){return!this.streamManager.inputStream.getAudioTracks()[0]?.enabled}get isClosing(){const{connectionState:e}=this;return e===Ft.CLOSING||e===Ft.CLOSED}get description(){return this.connectionInstance?.description}setHangUpTimeout(e,t){this.clearHangUpTimeout(),this.hangUpTimeout=zd.setTimeout(()=>{this.hangUpTimeout=void 0,this.hangUp(t)},e)}clearHangUpTimeout(){this.hangUpTimeout!==void 0&&(clearTimeout(this.hangUpTimeout),this.hangUpTimeout=void 0)}setPhoneCall(e){this.call=e;const{id:t}=e;if(this.id!==t){const s=this.id;this.id=t,this.dispatchEvent("id",t,s)}}async acceptCall(){const e=(await Promise.all(this.dispatchResultableEvent("acceptCallOverride")))[0]??!0;if(this.isClosing||!e)return;this.overrideConnectionState(Ft.EXCHANGING_KEYS);const t=this.call;this.requestInputSource(!0,!!t.pFlags.video,!1);const s=t.g_a_hash;this.managers.appCallsManager.generateDh().then(async i=>(this.dh={g_a_hash:s,b:i.a,g_b:i.g_a,g_b_hash:i.g_a_hash,p:i.p},this.managers.apiManager.invokeApi("phone.acceptCall",{peer:await this.managers.appCallsManager.getCallInput(this.id),protocol:this.protocol,g_b:this.dh.g_b}))).then(async i=>{await this.managers.appCallsManager.savePhonePhoneCall(i)}).catch(i=>{this.log.error("accept call error",i),this.hangUp("phoneCallDiscardReasonHangup")})}joinCall(){this.log("joinCall"),this.getEmojisFingerprint(),this.overrideConnectionState();const{isOutgoing:e,encryptionKey:t,streamManager:s}=this,i=Sx(this.call);if(this.log("joinCall configuration",i),!i)return;const n=this.connectionInstance=new fx({call:this,streamManager:s,log:this.log.bindPrefix("connection")}),a=n.createPeerConnection(i);a.addEventListener("iceconnectionstatechange",()=>{const r=this.connectionState;this.connectedAt===void 0&&r===Ft.CONNECTED&&(this.connectedAt=Date.now()),this.dispatchEvent("state",r)}),a.addEventListener("negotiationneeded",()=>{n.negotiate()}),a.addEventListener("icecandidate",r=>{const{candidate:l}=r;a.log("onicecandidate",l),l?.candidate&&this.sendIceCandidate(l)}),a.addEventListener("track",r=>{const{track:l}=r;a.log("ontrack",l),this.onTrack(r)}),n.createDescription(),this.encryptor=new _y(e,t),this.decryptor=new _y(!e,t),this.log("currentCall",this),e&&n.appendStreamToConference(),this.createDataChannel(),this.processDecryptQueue()}createDataChannelEntry(){const e=this.description.createEntry("application");e.setDirection("sendrecv"),e.sendEntry=e.recvEntry=e}createDataChannel(){if(this.connectionInstance.dataChannel)return;const e=this.connectionInstance.createDataChannel({id:0,negotiated:!0});e.addEventListener("message",t=>{this.applyDataChannelData(JSON.parse(t.data))}),e.addEventListener("open",()=>{this.sendMediaState()})}applyDataChannelData(e){switch(e["@type"]){case"MediaState":{e.type="output",this.log("got output media state",e),this.setMediaState(e);break}default:this.log.error("unknown data channel data:",e);break}}_sendMediaState(){const{connectionInstance:e}=this;if(!e)return;const t={...this.getMediaState("input")};delete t.type,this.log("sendMediaState",t),e.sendDataChannelData(t)}async sendCallSignalingData(e){const t=JSON.stringify(e),s=new TextEncoder().encode(t),{bytes:i}=await this.encryptor.encryptRawPacket(s);this.log("sendCallSignalingData",this.id,t),await this.managers.apiManager.invokeApi("phone.sendSignalingData",{peer:await this.managers.appCallsManager.getCallInput(this.id),data:i})}sendIceCandidate(e){this.log("sendIceCandidate",e);const{candidate:t,sdpMLineIndex:s}=e;if(s!==0)return;const i=Lx(t);this.sendCallSignalingData({"@type":"Candidates",candidates:[i]})}async confirmCall(){const{protocol:e,id:t,call:s}=this,i=this.dh;this.overrideConnectionState(Ft.EXCHANGING_KEYS);const{key:n,key_fingerprint:a}=await this.managers.appCallsManager.computeKey(s.g_b,i.a,i.p),r=await this.managers.apiManager.invokeApi("phone.confirmCall",{peer:await this.managers.appCallsManager.getCallInput(t),protocol:e,g_a:i.g_a,key_fingerprint:a});this.encryptionKey=n,await this.managers.appCallsManager.savePhonePhoneCall(r),this.joinCall()}getEmojisFingerprint(){return this.emojisFingerprint?this.emojisFingerprint:this.getEmojisFingerprintPromise?this.getEmojisFingerprintPromise:this.getEmojisFingerprintPromise=fe.invokeCrypto("get-emojis-fingerprint",this.encryptionKey,this.dh.g_a).then(e=>(this.getEmojisFingerprintPromise=void 0,this.emojisFingerprint=e.map(t=>Sm(t))))}unlockStreamManager(){this.connectionInstance.streamManager.locked=!1,this.connectionInstance.appendStreamToConference()}async doTheMagic(){this.connectionInstance.appendStreamToConference();const e=this.connectionInstance.connection;let t=await e.createAnswer();this.log("[sdp] local",t.type,t.sdp),await e.setLocalDescription(t),e.getTransceivers().filter(l=>l.direction==="recvonly").forEach(l=>{const c=this.connectionInstance.description.getEntryByMid(l.mid);c.transceiver=c.recvEntry.transceiver=l,l.direction="sendrecv"});const s=!1,i=this.description,n=i.entries.map(l=>l.mid),a={type:"offer",sdp:i.generateSdp({bundle:n,entries:i.entries.filter(l=>n.includes(l.mid)),isAnswer:!s})};await e.setRemoteDescription(a),t=await e.createAnswer(),await e.setLocalDescription(t);const r=IS(ph(t.sdp));this.log("[InitialSetup] send 1"),this.sendCallSignalingData(r),this.unlockStreamManager()}overrideConnectionState(e){this._connectionState=e,this.dispatchEvent("state",this.connectionState)}get duration(){return this.connectedAt!==void 0?(Date.now()-this.connectedAt)/1e3|0:0}onInputStream(e){super.onInputStream(e);const t=e.getVideoTracks()[0];if(t){const s=this.getMediaState("input");!this.wasStartingScreen&&!this.wasStartingVideo&&(this.wasStartingVideo=!0),this.isSharingVideo?s.videoState="active":this.isSharingScreen&&(s.screencastState="active"),t.addEventListener("ended",()=>{this.stopVideoSharing()},{once:!0})}e.getAudioTracks().length&&this.onMutedChange()}onMutedChange(){const e=this.isMuted;this.dispatchEvent("muted",e);const t=this.getMediaState("input");t.muted=e}toggleMuted(){return this.requestAudioSource(!0).then(()=>{this.setMuted(),this.onMutedChange()})}async hangUp(e,t){if(!this.isClosing&&(this.discardReason=e,this.log("hangUp",e),this.overrideConnectionState(Ft.CLOSED),this.connectionInstance&&this.connectionInstance.closeConnectionAndStream(!0),e&&!t)){let s=!1;for(const i in this.mediaStates){const n=this.mediaStates[i];s=n.videoState==="active"||n.screencastState==="active"||s}await this.managers.appCallsManager.discardCall(this.id,this.duration,e,s)}}performCodec(e){const t=e.payloadTypes.map(i=>({...i,"rtcp-fbs":i.feedbackTypes}));return{"rtp-hdrexts":e.rtpExtensions,"payload-types":t}}setDataToDescription(e){this.description.setData({transport:{pwd:e.pwd,ufrag:e.ufrag,fingerprints:e.fingerprints,"rtcp-mux":!0},audio:this.performCodec(e.audio),video:e.video?this.performCodec(e.video):void 0,screencast:e.screencast?this.performCodec(e.screencast):void 0})}filterNotVP8(e){this.isOutgoing||[e.video,e.screencast].filter(Boolean).forEach(t=>{const s=t.payloadTypes,i=s.findIndex(r=>r.name==="VP8"),n=s[i],a=s.findIndex(r=>+r.parameters?.apt===n.id);t.payloadTypes=[s[i],s[a]]})}async applyCallSignalingData(e){this.log("applyCallSignalingData",this,e);const{connection:t,description:s}=this.connectionInstance;switch(e["@type"]){case"InitialSetup":{this.log("[sdp] InitialSetup",e),this.filterNotVP8(e),this.setDataToDescription(e);const i=c=>c.map(d=>({_:"groupCallParticipantVideoSourceGroup",semantics:d.semantics,sources:d.ssrcs.map(h=>+h)}));[Nd("audio",+e.audio.ssrc),e.video?Nd("video",i(e.video.ssrcGroups)):void 0,e.screencast?Nd("screencast",i(e.screencast.ssrcGroups)):void 0].filter(Boolean).forEach(c=>{let d=s.getEntryBySource(c.source);if(d)return;const h=s.findFreeSendRecvEntry(c.type,!1);d=new ou(h.mid,c.type),d.setDirection("sendrecv"),h.recvEntry=d,s.setEntrySource(d,c.sourceGroups||c.source)}),this.createDataChannelEntry();const a=this.offerSent;this.offerSent=!1;const r=s.entries.map(c=>c.mid),l={type:a?"answer":"offer",sdp:s.generateSdp({bundle:r,entries:s.entries.filter(c=>r.includes(c.mid)),isAnswer:!a})};this.log("[sdp] remote",l.sdp),await t.setRemoteDescription(l),await this.tryToReleaseCandidates(),a||await this.doTheMagic();break}case"Candidates":{for(const i of e.candidates){const n=Mx.generateCandidate(i);n.sdpMLineIndex=0;const a=new RTCIceCandidate(n);this.candidates.push(a)}await this.tryToReleaseCandidates();break}default:this.log.error("unrecognized signaling data",e)}}async tryToReleaseCandidates(){const{connectionInstance:e}=this;if(!e)return;const{connection:t}=e;if(t.remoteDescription){const s=this.candidates.map(i=>this.addIceCandidate(t,i));this.candidates.length=0,await Promise.all(s)}else this.log("[candidates] postpone")}async addIceCandidate(e,t){this.log("[candidate] start",t);try{await e.addIceCandidate(t),this.log("[candidate] add",t)}catch(s){this.log.error("[candidate] error",t,s)}}async processDecryptQueue(){const{encryptor:e}=this;if(!e){this.log.warn("got encrypted signaling data before the encryption key");return}if(!this.decryptQueue.length)return;const s=this.decryptQueue.slice();this.decryptQueue.length=0;for(const i of s){const n=await e.decryptRawPacket(i);if(!n)continue;const a=new TextDecoder().decode(n);try{const r=JSON.parse(a);this.log("[update] updateNewCallSignalingData",r),this.applyCallSignalingData(r)}catch{this.log.error("wrong signaling data",a),this.hangUp("phoneCallDiscardReasonDisconnect"),_i.dispatchEvent("incompatible",this.interlocutorUserId)}}}onUpdatePhoneCallSignalingData(e){this.decryptQueue.push(e),this.processDecryptQueue()}}function Px(o,e){switch(o){case Ft.CLOSING:case Ft.CLOSED:return ts.CLOSED;case Ft.CONNECTED:return e?ts.MUTED:ts.UNMUTED;default:return ts.CONNECTING}}const ul="topbar-call";class Ex{constructor(e){this.managers=e,this.onState=()=>{this.updateInstance(this.instance)};const t=this.listenerSetter=new Qt;t.add(_i)("instance",({instance:s})=>{this.instance||this.updateInstance(s)}),t.add(_i)("accepting",s=>{this.instance!==s&&this.updateInstance(s)}),t.add(Sn)("instance",s=>{this.updateInstance(s)}),t.add(C)("group_call_update",s=>{const i=Sn.groupCall;i?.id===s.id&&this.updateInstance(i)}),t.add(Er.ANALYSER_LISTENER)("amplitude",({amplitudes:s,type:i})=>{const{weave:n}=this;if(!s.length||!n)return;let a=0;for(let r=0;r<s.length;++r){const{type:l,value:c}=s[r];a=c>a?c:a}n.setAmplitude(a)})}clearCurrentInstance(){this.instance&&(this.center.textContent="",this.currentDescription&&(this.currentDescription.detach(),this.currentDescription=void 0),this.instance=void 0,this.instanceListenerSetter.removeAll())}updateInstance(e){this.construct&&(this.construct(),this.construct=void 0);const t=this.instance!==e;t&&(this.clearCurrentInstance(),this.instance=e,this.instanceListenerSetter=new Qt,this.instanceListenerSetter.add(e)("state",this.onState),e instanceof tr?this.currentDescription=this.groupCallDescription:(this.currentDescription=this.callDescription,this.instanceListenerSetter.add(e)("muted",this.onState)),this.container.classList.toggle("is-call",!(e instanceof tr)));const s=this.instance.isMuted,i=e instanceof tr?e.state:Px(e.connectionState,s),{weave:n}=this;n.componentDidMount();const a=i===ts.CLOSED;(!document.body.classList.contains("is-calling")||t||a)&&(a&&n.setAmplitude(0),vt({element:document.body,className:"is-calling",forwards:!a,duration:250,onTransitionEnd:a?()=>{n.componentWillUnmount(),this.clearCurrentInstance()}:void 0})),!a&&(n.setCurrentState(i,!0),this.setTitle(e),this.setDescription(e),this.groupCallMicrophoneIconMini.setState(!s))}setDescription(e){return this.currentDescription.update(e)}setTitle(e){if(e instanceof tr)return this.groupCallTitle.update(e);tt(this.center,new Mt({peerId:e.interlocutorUserId.toPeerId()}).element)}construct(){const{listenerSetter:e}=this,t=this.container=document.createElement("div");t.classList.add("sidebar-header",ul+"-container");const s=document.createElement("div");s.classList.add(ul+"-left");const i=this.groupCallMicrophoneIconMini=new im,n=Xe();n.append(i.container),s.append(n);const a=$n(()=>{this.instance.toggleMuted()},600,!0);D(n,u=>{X(u),a()},{listenerSetter:e});const r=this.center=document.createElement("div");r.classList.add(ul+"-center"),this.groupCallTitle=new gS(r),this.groupCallDescription=new tm(s),this.callDescription=new bS(s);const l=document.createElement("div");l.classList.add(ul+"-right");const c=Xe("endcall_filled");l.append(c),D(c,u=>{X(u);const{instance:p}=this;p&&(p instanceof tr?p.hangUp():p.hangUp("phoneCallDiscardReasonHangup"))},{listenerSetter:e}),D(t,()=>{if(this.instance instanceof tr){if(J.getPopups(bh).length)return;J.createPopup(bh).show()}else if(this.instance instanceof LS){if(J.getPopups(nm).find(p=>p.getCallInstance()===this.instance))return;J.createPopup(nm,this.instance).show()}},{listenerSetter:e}),t.append(s,r,l);const d=this.weave=new ax,h=d.render(ul+"-weave");t.prepend(h),document.getElementById("column-center").prepend(t),d.componentDidMount()}}const _x="assets/img/logo_filled_rounded.png",kx="assets/img/logo_plain.svg";class Tx{constructor(){this.notificationsShown={},this.notificationIndex=0,this.notificationsCount=0,this.soundsPlayed={},this.vibrateSupport=TC,this.faviconElements=Array.from(document.head.querySelectorAll('link[rel="icon"], link[rel="alternate icon"]')),this.titleBackup=document.title,this.titleChanged=!1,this.stopped=!1,this.settings={},this.pushInited=!1,this.updateLocalSettings=()=>{const t=["notify_nodesktop","notify_volume","notify_novibrate","notify_nopreview","notify_nopush"].map(()=>{});Promise.all(t).then(s=>{if(this.settings.nodesktop=s[0],this.settings.volume=s[1]===void 0?.5:s[1],this.settings.novibrate=s[2],this.settings.nopreview=s[3],this.settings.nopush=s[4],this.pushInited){const i=!this.settings.nopush&&!this.settings.nodesktop&&Hi.isAvailable||!1,n=this.registeredDevice!==!1;i!==n&&(i?Hi.subscribe():Hi.unsubscribe())}Hi.setSettings(this.settings)}),fe.getState().then(s=>{this.settings.nosound=!s.settings.notifications.sound})},this.requestPermission=()=>{Notification.requestPermission(),window.removeEventListener("click",this.requestPermission)},this.clear=()=>{this.log.warn("clear");for(const e in this.notificationsShown){const t=this.notificationsShown[e];this.closeNotification(t)}this.notificationsShown={},this.notificationsCount=0,Hi.hidePushNotifications()}}construct(e){this.managers=e,this.log=zs("NOTIFICATIONS"),this.notificationsQueue=new sv(1),navigator.vibrate=navigator.vibrate||navigator.mozVibrate||navigator.webkitVibrate,this.setAppBadge=navigator.setAppBadge?.bind(navigator),this.setAppBadge?.(0),this.notificationsUiSupport="Notification"in window||"mozNotification"in navigator,this.notifySoundEl=document.createElement("div"),this.notifySoundEl.id="notify-sound",document.body.append(this.notifySoundEl),this.topMessagesDeferred=Rt(),La.addEventListener("deactivated",()=>{this.stop()}),La.addEventListener("activated",()=>{this.stopped&&this.start()}),aa.addEventListener("change",t=>{this.stopped||(t||this.clear(),this.toggleToggler())}),C.addEventListener("notification_reset",t=>{this.soundReset(t)}),C.addEventListener("notification_cancel",t=>{this.cancel(t)}),this.setAppBadge&&C.addEventListener("folder_unread",t=>{t.id===0&&this.setAppBadge(t.unreadUnmutedPeerIds.size)}),Hi.addEventListener("push_init",t=>{this.pushInited=!0,!this.settings.nodesktop&&!this.settings.nopush?t?this.registerDevice(t):Hi.subscribe():this.unregisterDevice(t)}),Hi.addEventListener("push_subscribe",t=>{this.registerDevice(t)}),Hi.addEventListener("push_unsubscribe",t=>{this.unregisterDevice(t)}),C.addEventListener("dialogs_multiupdate",()=>{this.topMessagesDeferred.resolve()},{once:!0}),Hi.addEventListener("push_notification_click",t=>{if(t.action==="push_settings")return;if(t.action==="mute1d"){this.managers.apiManager.invokeApi("account.updateDeviceLocked",{period:86400}).then(()=>{});return}const s=t.custom&&t.custom.peerId.toPeerId();console.log("click",t,s),s&&this.topMessagesDeferred.then(async()=>{const i=s.isAnyChat()?s.toChatId():void 0;let n;if(i){if(!await this.managers.appChatsManager.hasChat(i))return;n=await this.managers.appChatsManager.isChannel(i)?i:void 0}!i&&!await this.managers.appUsersManager.hasUser(s.toUserId())||ce.setInnerPeer({peerId:s,lastMsgId:await this.managers.appMessagesIdsManager.generateMessageId(+t.custom.msg_id,n)})})})}async buildNotificationQueue(e){this.notificationsQueue.push({load:()=>this.buildNotification(e)})}async buildNotification({message:e,fwdCount:t,peerReaction:s,peerTypeNotifySettings:i}){const n=e.peerId,a=n.isAnyChat(),r={},[l,c=!1,d]=await Promise.all([this.managers.appPeersManager.getPeerString(n),a&&this.managers.appPeersManager.isForum(n),fe.getPeer(n)]);let h,u=!1;if(i.show_previews)if(e._==="message"&&e.fwd_from&&t>1)h=De.format("Notifications.Forwarded",!0,[t]);else{h=await Fa({message:e,plain:!0});const w=s?.reaction;if(w&&w._!=="reactionEmpty"){let S=w.emoticon;S||(S=(await this.managers.appEmojiManager.getCustomEmojiDocument(w.document_id)).stickerEmojiRaw);const I="Notification.Contact.Reacted",L=[Ym(S),h];h=De.format(I,!0,L)}else u=!0}else h=De.format("Notifications.New",!0);s&&(r.noIncrement=!0,r.silent=!0);const p={plainText:!0,managers:this.managers},m=c?Un(e,c):void 0,g=s?Je(s.peer_id):e.fromId,f=r.title=await Ea({...p,peerId:n,threadId:m});if(c){const w=await Ea({...p,peerId:n});r.title+=` (${w})`,u&&g!==e.peerId&&(h=await Ea({...p,peerId:g})+": "+h)}else a&&g!==e.peerId&&(r.title=await Ea({...p,peerId:g})+" @ "+r.title);r.title=Rr(r.title),r.onclick=()=>{ce.setInnerPeer({peerId:n,lastMsgId:e.mid,threadId:m})},r.message=h,r.key="msg"+e.mid,r.tag=l,r.silent=!0;const y=await this.managers.appPeersManager.getPeerPhoto(n);if(y){const w=await this.managers.appAvatarsManager.loadAvatar(n,y,"photo_small");if(!s&&(e=await this.managers.appMessagesManager.getMessageByPeer(e.peerId,e.mid),!e||!e.pFlags.unread))return;r.image=w}else{let{avatarCanvas:w,avatarContext:S}=this;if(this.avatarCanvas)S.clearRect(0,0,w.width,w.height);else{w=this.avatarCanvas=document.createElement("canvas"),S=this.avatarContext=w.getContext("2d");const E=54,k=1;w.dpr=k,w.width=w.height=E*k,this.avatarGradients={}}const I=mp(d);let L=this.avatarGradients[I];if(!L){L=this.avatarGradients[I]=S.createLinearGradient(w.width/2,0,w.width/2,w.height);const E=fs.getProperty(`peer-avatar-${I}-top`),k=fs.getProperty(`peer-avatar-${I}-bottom`);L.addColorStop(0,E),L.addColorStop(1,k)}S.fillStyle=L,zv(S,w.width/2,w.height/2,w.width/2),S.fill();const M=20*w.dpr,P=Em(f);S.font=`700 ${M}px ${Io}`,S.textBaseline="middle",S.textAlign="center",S.fillStyle="white",S.fillText(P.text,w.width/2,w.height*(window.devicePixelRatio>1,.5625)),r.image=w.toDataURL()}const v={custom:{msg_id:""+e.mid,peerId:""+n},description:"",loc_key:"",loc_args:[],mute:"",random_id:0,title:""};await this.notify(r,v)&&this.registeredDevice&&Hi.ignorePushByMid(n,e.mid)}toggleToggler(e=aa.isIdle){if(mi)return;const t=s=>{this.titleChanged=!1,document.title=this.titleBackup,this.setFavicon()};window.clearInterval(this.titleInterval),this.titleInterval=0,e?this.titleInterval=window.setInterval(()=>{const s=this.notificationsCount;if(!s)this.toggleToggler(!1);else if(this.titleChanged)t();else{this.titleChanged=!0,document.title=De.format("Notifications.Count",!0,[s]);const i=document.createElement("canvas");i.width=32*window.devicePixelRatio,i.height=i.width;const n=i.getContext("2d");n.beginPath(),n.arc(i.width/2,i.height/2,i.width/2,0,2*Math.PI,!1),n.fillStyle="#3390ec",n.fill();let a=24,r=""+s;s<10?a=22:s<100?a=20:(r="99+",a=16),a*=window.devicePixelRatio,n.font=`700 ${a}px ${Io}`,n.textBaseline="middle",n.textAlign="center",n.fillStyle="white",n.fillText(r,i.width/2,i.height*.5625),this.setFavicon(i.toDataURL())}},1e3):t()}setFavicon(e){this.prevFavicon!==e&&(this.prevFavicon=e,this.faviconElements.forEach((t,s,i)=>{var a;const n=t.cloneNode();(a=n.dataset).href||(a.href=n.href),e??(e=n.dataset.href),n.href=e,t.replaceWith(i[s]=n)}))}async notify(e,t){if(this.log("notify",e,aa.isIdle,this.notificationsUiSupport,this.stopped),this.stopped)return;e.image||(e.image=_x),e.noIncrement||++this.notificationsCount,this.titleInterval||this.toggleToggler();const s=++this.notificationIndex,i=e.key||"k"+s;this.notificationsShown[i]=!0;const n=Es();if(this.settings.volume>0&&!this.settings.nosound&&(this.testSound(this.settings.volume),this.soundsPlayed[e.tag]=n),!this.notificationsUiSupport||"Notification"in window&&Notification.permission!=="granted")return;if(this.settings.nodesktop){if(this.vibrateSupport&&!this.settings.novibrate){navigator.vibrate([200,100,200]);return}return}if(!("Notification"in window))return;let a;const r={badge:kx,icon:e.image||"",body:e.message||"",tag:e.tag||"",silent:e.silent||!1,data:t};try{if(e.tag)for(const l in this.notificationsShown){const c=this.notificationsShown[l];typeof c!="boolean"&&c.tag===e.tag&&(c.hidden=!0)}a=new Notification(e.title,r)}catch{try{const c=await navigator.serviceWorker.ready;await c.showNotification(e.title,r);const d=await c.getNotifications({tag:r.tag});a=d[d.length-1]}catch(c){this.log.error("creating push error",c,e,r)}if(!a){this.notificationsUiSupport=!1,Hi.setLocalNotificationsDisabled();return}}return a.onclick=()=>{this.log("notification onclick"),a.close(),Zy.focus(),this.clear(),e.onclick?.()},a.onclose=()=>{this.log("notification onclose"),a.hidden||(delete this.notificationsShown[i],this.clear())},a.show?.(),this.notificationsShown[i]=a,mi||setTimeout(()=>{this.hide(i)},8e3),!0}getLocalSettings(){return this.settings}hide(e){const t=this.notificationsShown[e];t&&this.closeNotification(t)}soundReset(e){delete this.soundsPlayed[e]}testSound(e){const t=Es();if(this.nextSoundAt&&t<this.nextSoundAt&&this.prevSoundVolume===e)return;this.nextSoundAt=t+1e3,this.prevSoundVolume=e;const s="assets/audio/notification.mp3",i=document.createElement("audio");i.autoplay=!0,i.setAttribute("mozaudiochannel","notification"),i.volume=e,i.innerHTML=`