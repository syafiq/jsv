I);mxEvent.addListener(La,"click",function(Xa){D(Ha,Ta,Oa,Xa)})})(da[wa],Qa,La);ba.appendChild(Qa)}}for(var Va in xa)da=xa[Va],0<da.length&&(Da=document.createElement("div"),Da.className="geTempDlgImportCat",Da.innerText=mxResources.get(Va,null,Va),ba.appendChild(Da),U(da,ja,pa,null,!0))}function q(da,ja){ha.innerText="";F();var pa=Math.floor(ha.offsetWidth/150)-1;ja=!ja&&da.length>pa?pa:da.length;for(var xa=0;xa<ja;xa++){var Da=da[xa];Da.isCategory=!0;var Ga=document.createElement("div"),wa=mxResources.get(Da.title);
null==wa&&(wa=Da.title.substring(0,1).toUpperCase()+Da.title.substring(1));Ga.className="geTempDlgNewDiagramCatItem";Ga.setAttribute("title",wa);wa=mxUtils.htmlEntities(wa);15<wa.length&&(wa=wa.substring(0,15)+"&hellip;");null==Q&&(G(!0),F(Ga,"geTempDlgNewDiagramCatItemActive",Da));var Ba=document.createElement("div");Ba.className="geTempDlgNewDiagramCatItemImg";var ka=document.createElement("img");ka.src=NEW_DIAGRAM_CATS_PATH+"/"+Da.img;Ba.appendChild(ka);Ga.appendChild(Ba);Ba=document.createElement("div");
Ba.className="geTempDlgNewDiagramCatItemLbl";Ba.innerHTML=wa;Ga.appendChild(Ba);ha.appendChild(Ga);(function(Ra,Na){mxEvent.addListener(Ga,"click",function(){Q!=Na&&(G(!0),F(Na,"geTempDlgNewDiagramCatItemActive",Ra))});mxEvent.addListener(Ga,"dblclick",I)})(Da,Ga)}Ga=document.createElement("div");Ga.className="geTempDlgNewDiagramCatItem";wa=mxResources.get("showAllTemps");Ga.setAttribute("title",wa);Ba=document.createElement("div");Ba.className="geTempDlgNewDiagramCatItemImg";Ba.innerText="...";Ba.style.fontSize=
"32px";Ga.appendChild(Ba);Ba=document.createElement("div");Ba.className="geTempDlgNewDiagramCatItemLbl";Ba.innerText=wa;Ga.appendChild(Ba);ha.appendChild(Ga);mxEvent.addListener(Ga,"click",function(){function Ra(){var Ja=Na.querySelector(".geTemplateDrawioCatLink");null!=Ja?Ja.click():setTimeout(Ra,200)}ca=!0;var Na=O.querySelector(".geTemplatesList");Na.style.display="block";ra.style.width="";Ea.style.display="";Ea.value="";Z=null;Ra()});aa.style.display=da.length<=pa?"none":""}function v(da,ja,