console.log("Error:",ba)}}function y(P,V){if(!K&&SimplePeer.WEBRTC_SUPPORT){var W=new SimplePeer({initiator:V,config:{iceServers:[{urls:"stun:54.89.235.160:3478"}]}});W.on("signal",function(q){Q("sendSignal",{to:P,from:H,signal:q})});W.on("error",function(q){delete F[P];EditorUi.debug("P2PCollab: p2p socket error",q);!G&&V&&W.destroyed&&E[P]&&(EditorUi.debug("P2PCollab: p2p socket reconnecting",P),y(P,!0))});W.on("connect",function(){delete F[P];null==T[P]||T[P].destroyed?(T[P]=W,E[P]=!0,EditorUi.debug("P2PCollab: p2p socket connected",
P)):(W.noP2PMapDel=!0,W.destroy(),EditorUi.debug("P2PCollab: p2p socket duplicate",P))});W.on("close",function(){W.noP2PMapDel||(EditorUi.debug("P2PCollab: p2p socket closed",P),z(v[P]),delete T[P])});W.on("data",t);return F[P]=W}}function B(P,V){z(V||v[P]);null!=P&&(delete v[P],E[P]=!1)}function z(P){var V=k[P];if(null!=V){var W=V.selection,q;for(q in W)null!=W[q]&&W[q].destroy();null!=V.cursor&&null!=V.cursor.parentNode&&V.cursor.parentNode.removeChild(V.cursor);clearTimeout(V.inactiveTO);delete k[P]}}