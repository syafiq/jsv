"4px";Ma.style.margin="2px";Ma.style.border="1px solid black";Ma.style.background=la&&"none"!=la?la:"url('"+Dialog.prototype.noColorImage+"')";btn=mxUtils.button("",mxUtils.bind(Z,function(Ia){this.editorUi.pickColor(la,function(ia){Ma.style.background="none"==ia?"url('"+Dialog.prototype.noColorImage+"')":ia;Q(ta,ia,ua)});mxEvent.consume(Ia)}));btn.style.height="12px";btn.style.width="40px";btn.className="geColorBtn";btn.appendChild(Ma);return btn}function T(ta,la,ua,Ma,Ia,ia,va){null!=la&&(la=la.split(","),
ca.push({name:ta,values:la,type:ua,defVal:Ma,countProperty:Ia,parentRow:ia,isDeletable:!0,flipBkg:va}));btn=mxUtils.button("+",mxUtils.bind(Z,function(sa){for(var na=ia,oa=0;null!=na.nextSibling;)if(na.nextSibling.getAttribute("data-pName")==ta)na=na.nextSibling,oa++;else break;var Ca={type:ua,parentRow:ia,index:oa,isDeletable:!0,defVal:Ma,countProperty:Ia};oa=Y(ta,"",Ca,0==oa%2,va);Q(ta,Ma,Ca);na.parentNode.insertBefore(oa,na.nextSibling);mxEvent.consume(sa)}));btn.style.height="16px";btn.style.width=
"25px";btn.className="geColorBtn";return btn}function W(ta,la,ua,Ma,Ia,ia,va){if(0<Ia){var sa=Array(Ia);la=null!=la?la.split(","):[];for(var na=0;na<Ia;na++)sa[na]=null!=la[na]?la[na]:null!=Ma?Ma:"";ca.push({name:ta,values:sa,type:ua,defVal:Ma,parentRow:ia,flipBkg:va,size:Ia})}return document.createElement("div")}function X(ta,la,ua){var Ma=document.createElement("input");Ma.type="checkbox";Ma.checked="1"==la;mxEvent.addListener(Ma,"change",function(){Q(ta,Ma.checked?"1":"0",ua)});return Ma}function Y(ta,