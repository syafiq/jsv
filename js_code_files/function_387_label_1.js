`&&l!==v.length-1){const R=v.splice(l+1,1)[0];v[l]=q+R,r.entities.forEach(b=>{b.offset>=j&&(b.offset-=1)}),x+=R.length}x+=1}const S=v.join(`
`);r.value=S}const w=r.value.replace(/\s/g,"").length,C=i.replace(/\s/g,"").length;if(w===C||r.entities.find(v=>v._==="messageEntityCustomEmoji")){t=r.value,s=r.entities,a=!1;let v=Zf(t);v=v.filter(o),gd(s,v)}}a&&(t=i,s=Zf(t),s=s.filter(o)),yd(f,t,s,c)}),I1=null};var Ed=(d=>(d[d.Neutral=0]="Neutral",d[d.Valid=1]="Valid",d[d.Error=2]="Error",d))(Ed||{});function i0(d,f){return xf.create({wrappingDraft:!0,isSelectable:!0,textColor:d||"primary-text-color",animationGroup:f})}function be(d){const f=Array.from(d.querySelectorAll(".custom-emoji, .custom-emoji-placeholder"));let e=d.querySelector(".custom-emoji-renderer");if(!e&&f.length)e=i0(d.dataset.textColor,d.dataset.animationGroup),d.prepend(e);else if(e&&!f.length){e.remove();return}if(!e)return;const t=new Map;f.forEach(s=>{const i=s.loop!==void 0?s:s.customEmojiElement,{docId:a}=i;let n=t.get(a);n||t.set(a,n=new Set),n.add(i)});for(const[s,i]of t){let a=e.customEmojis.get(s);if(a)for(const n of a)i.has(n)||n.destroy();else a=new Set;for(const n of i)a.has(n)||n.connectedCallback()}e.add({addCustomEmojis:t,lazyLoadQueue:!1}),e.forceRender()}class xd{constructor(f={}){this.options=f,this.setEmpty=(r=this.isEmpty())=>{[this.input,this.placeholder].filter(Boolean).forEach(y=>{y.classList.toggle("is-empty",r)})},this.container=document.createElement("div"),this.container.classList.add("input-field"),this.required=f.required,this.validate=f.validate,f.maxLength!==void 0&&f.showLengthOn===void 0&&(f.showLengthOn=Math.min(40,Math.round(f.maxLength/3)));const{placeholder:e,maxLength:t,showLengthOn:s,name:i,plainText:a,canBeEdited:n=!0,autocomplete:o,withBorder:c,allowStartingSpace:h}=f,p=f.label||f.labelText;this.allowStartingSpace=h;const g=[];let m;if(a?(this.container.innerHTML=`