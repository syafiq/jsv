if(0<C.length){var H=parseFloat(C[0].getAttribute("width")),F=parseFloat(C[0].getAttribute("height"));if(isNaN(H)||isNaN(F))try{var T=C[0].getAttribute("viewBox").split(/\s+/);H=parseFloat(T[2]);F=parseFloat(T[3])}catch(p){H=H||100,F=F||100}k(u.convertDataUri(Editor.createSvgDataUri(E)),H,F)}else n({message:mxResources.get("invalidInput")})}catch(p){n(p)}})}catch(E){n(E)}};"undefined"!==typeof mermaid||this.loadingMermaid||this.isOffline(!0)?v():(this.loadingMermaid=!0,"1"==urlParams.dev?mxscript("js/mermaid/mermaid.min.js",