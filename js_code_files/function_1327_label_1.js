mxUtils.write(qa,mxResources.get("timeAgo",[sa],"{1} ago"));qa.setAttribute("title",aa.toLocaleDateString()+" "+aa.toLocaleTimeString())}function G(aa){var qa=document.createElement("img");qa.className="geCommentBusyImg";qa.src=IMAGE_PATH+"/spin.gif";aa.appendChild(qa);aa.busyImg=qa}function L(aa){aa.style.border="1px solid red";aa.removeChild(aa.busyImg)}function Q(aa){aa.style.border="";aa.removeChild(aa.busyImg)}function d(aa,qa,sa,K,V){function T(U,ca,da){var pa=document.createElement("li");pa.className=
"geCommentAction";var ra=document.createElement("a");ra.className="geCommentActionLnk";mxUtils.write(ra,U);pa.appendChild(ra);mxEvent.addListener(ra,"click",function(ua){ca(ua,aa);ua.preventDefault();mxEvent.consume(ua)});ba.appendChild(pa);da&&(pa.style.display="none")}function Z(){function U(pa){ca.push(da);if(null!=pa.replies)for(var ra=0;ra<pa.replies.length;ra++)da=da.nextSibling,U(pa.replies[ra])}var ca=[],da=ka;U(aa);return{pdiv:da,replies:ca}}function X(U,ca,da,pa,ra){function ua(){G(ya);