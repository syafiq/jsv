function(){f.checked&&(null==e||e.checked)?q.removeAttribute("disabled"):q.setAttribute("disabled","disabled")}));mxUtils.br(c);return{getLink:function(){return f.checked?"blank"===q.value?"_blank":p:null},getEditInput:function(){return f},getEditSelect:function(){return q}}};EditorUi.prototype.addLinkSection=function(c,e){function f(){var x=document.createElement("div");x.style.width="100%";x.style.height="100%";x.style.boxSizing="border-box";null!=q&&q!=mxConstants.NONE?(x.style.border="1px solid black",