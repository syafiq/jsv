Da.childNodes[0],Da.nodeName==za)return!0;return!1},A=function(za){za=null!=za?za.fontSize:null;return null!=za&&"px"==za.substring(za.length-2)?parseFloat(za):mxConstants.DEFAULT_FONTSIZE},E=function(za,Da,La){return null!=La.style&&null!=Da?(Da=Da.lineHeight,null!=La.style.lineHeight&&"%"==La.style.lineHeight.substring(La.style.lineHeight.length-1)?parseInt(La.style.lineHeight)/100:"px"==Da.substring(Da.length-2)?parseFloat(Da)/za:parseInt(Da)):""},G=mxUtils.getCurrentStyle(ca),L=A(G),Y=E(L,G,ca),