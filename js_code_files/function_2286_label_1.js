function(){return D.editor.autosave},function(R){D.editor.setAutosave(R);D.editor.autosave&&U.isModified()&&U.fileChanged()},{install:function(R){this.listener=function(){R(D.editor.autosave)};D.editor.addListener("autosaveChanged",this.listener)},destroy:function(){D.editor.removeListener(this.listener)}});q.appendChild(O)}}if(this.isMathOptionVisible()&&L.isEnabled()&&"undefined"!==typeof MathJax){O=this.createOption(mxResources.get("mathematicalTypesetting"),function(){return L.mathEnabled},function(R){D.actions.get("mathematicalTypesetting").funct()},