Aa){va=da.getAttribute("section");ma=da.getAttribute("subsection");if(null==va&&(Da=Aa.indexOf("/"),va=Aa.substring(0,Da),null==ma)){var qa=Aa.indexOf("/",Da+1);-1<qa&&(ma=Aa.substring(Da+1,qa))}Da=Ma[va];null==Da&&(ra++,Da=[],Ma[va]=Da);Aa=da.getAttribute("clibs");null!=ia[Aa]&&(Aa=ia[Aa]);Aa={url:da.getAttribute("url"),libs:da.getAttribute("libs"),title:da.getAttribute("title")||da.getAttribute("name"),preview:da.getAttribute("preview"),clibs:Aa,tags:da.getAttribute("tags")};Da.push(Aa);null!=ma&&
(Da=Ia[va],null==Da&&(Da={},Ia[va]=Da),va=Da[ma],null==va&&(va=[],Da[ma]=va),va.push(Aa))}da=da.nextSibling}t(Ma,ka,na)}})}function H(da){A&&(pa.scrollTop=0,ba.innerText="",ua.spin(ba),l=!1,V=!0,ea.innerText=mxResources.get("recentDiag"),Z=null,A(oa,function(){n(mxResources.get("cannotLoad"));oa([])},da?null:v))}function L(da){if(""==da)null!=K&&(K.click(),K=null);else{if(null==TemplatesDialog.tagsList[d]){var ia={};for(Qa in Ma)for(var ma=Ma[Qa],va=0;va<ma.length;va++){var Aa=ma[va];if(null!=Aa.tags)for(var Da=