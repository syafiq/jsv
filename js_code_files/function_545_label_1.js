"120px",D.style.backgroundImage="url('"+IMAGE_PATH+"/droptarget.png')",D.style.backgroundPosition="center 65%",D.style.backgroundRepeat="no-repeat",B=document.createElement("div"),B.style.position="absolute",B.style.width="420px",B.style.top="58%",B.style.textAlign="center",B.style.fontSize="18px",B.style.color="#a0c3ff",mxUtils.write(B,mxResources.get("dragImagesHere")),D.appendChild(B));D.appendChild(G);this.container=D},LinkDialog=function(b,g,k,d,t,v,B){function G(x,E,A){A=mxUtils.button("",A);
A.className="geBtn";A.setAttribute("title",E);E=document.createElement("img");E.style.height="26px";E.style.width="26px";E.setAttribute("src",x);A.style.minWidth="42px";A.style.verticalAlign="middle";A.appendChild(E);y.appendChild(A)}var H=document.createElement("div");H.style.height="100%";mxUtils.write(H,mxResources.get("editLink")+":");var I=document.createElement("div");I.className="geTitle";I.style.backgroundColor="transparent";I.style.borderColor="transparent";I.style.whiteSpace="nowrap";I.style.textOverflow=