500)});k("#refreshOD").addEventListener("click",function(){null!=V&&(e(null),I.apply(this,V))});z&&k("#odBackBtn").addEventListener("click",z);A&&k("#odSubmitBtn").addEventListener("click",x);null!=d?(z=d.pop(),"sharepoint"==d[0].driveId&&G(k("#odSharepoint")),O=d,I(z.driveId,z.folderId,z.siteId,z.name)):I()};App=function(b,e,f){EditorUi.call(this,b,e,null!=f?f:"1"==urlParams.lightbox||"min"==uiTheme&&"0"!=urlParams.chrome);mxClient.IS_CHROMEAPP||EditorUi.isElectronApp||(window.onunload=mxUtils.bind(this,function(){var c=this.getCurrentFile();if(null!=c&&c.isModified()){var l={category:"DISCARD-FILE-"+c.getHash(),action:(c.savingFile?"saving":"")+(c.savingFile&&null!=c.savingFileTime?"_"+Math.round((Date.now()-c.savingFileTime.getTime())/1E3):"")+(null!=c.saveLevel?"-sl_"+c.saveLevel:"")+"-age_"+(null!=