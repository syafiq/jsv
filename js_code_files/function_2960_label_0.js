if(0<F.length){var I=parseFloat(F[0].getAttribute("width")),G=parseFloat(F[0].getAttribute("height"));if(isNaN(I)||isNaN(G))try{var U=F[0].getAttribute("viewBox").split(/\s+/);I=parseFloat(U[2]);G=parseFloat(U[3])}catch(q){I=I||100,G=G||100}k(x.convertDataUri(Editor.createSvgDataUri(D)),I,G)}else n({message:mxResources.get("invalidInput")})}catch(q){n(q)}})}catch(D){n(D)}};"undefined"!==typeof mermaid||this.loadingMermaid||this.isOffline(!0)?u():(this.loadingMermaid=!0,"1"==urlParams.dev?mxscript("js/mermaid/mermaid.min.js",