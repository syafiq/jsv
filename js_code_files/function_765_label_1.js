[M],"{1} ago"));J.setAttribute("title",C.toLocaleDateString()+" "+C.toLocaleTimeString())}function I(C){var J=document.createElement("img");J.className="geCommentBusyImg";J.src=IMAGE_PATH+"/spin.gif";C.appendChild(J);C.busyImg=J}function D(C){C.style.border="1px solid red";C.removeChild(C.busyImg)}function N(C){C.style.border="";C.removeChild(C.busyImg)}function c(C,J,M,F,L){function P(O,T,Q){var W=document.createElement("li");W.className="geCommentAction";var Z=document.createElement("a");Z.className=