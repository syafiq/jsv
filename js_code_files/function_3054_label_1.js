0>P?(I=P*Q.width,P=0):1<P&&(I=(P-1)*Q.width,P=1);0>N?(M=N*Q.height,N=0):1<N&&(M=(N-1)*Q.height,N=1);return{x:P,y:N,dx:parseInt(I),dy:parseInt(M)}}function z(){if(1==J.getSelectionCount()){var N=J.getSelectionCell();N=B(N);p.value=100*N.x;G.value=100*N.y;x.value=N.dx;K.value=N.dy;T.style.visibility=""}else T.style.visibility="hidden"}var A=document.createElement("div");A.style.width="350px";A.style.height="350px";A.style.overflow="hidden";A.style.border="1px solid lightGray";A.style.boxSizing="border-box";