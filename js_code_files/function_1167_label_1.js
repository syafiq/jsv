d.style.padding="2px",d.style.right="62px",this.toolbar.container.appendChild(d),this.toolbar.staticElements.push(d))};EditorUi.prototype.showImportCsvDialog=function(){null==this.importCsvDialog&&(this.importCsvDialog=new TextareaDialog(this,mxResources.get("csv")+":",Editor.defaultCsvValue,mxUtils.bind(this,function(d){this.importCsv(d)}),null,null,620,430,null,!0,!0,mxResources.get("import"),this.isOffline()?null:"https://drawio-app.com/import-from-csv-to-drawio/"));this.showDialog(this.importCsvDialog.container,
640,520,!0,!0,null,null,null,null,!0);this.importCsvDialog.init()};EditorUi.prototype.loadOrgChartLayouts=function(d){var f=mxUtils.bind(this,function(){this.loadingOrgChart=!1;this.spinner.stop();d()});"undefined"!==typeof mxOrgChartLayout||this.loadingOrgChart||this.isOffline(!0)?f():this.spinner.spin(document.body,mxResources.get("loading"))&&(this.loadingOrgChart=!0,"1"==urlParams.dev?mxscript("js/orgchart/bridge.min.js",function(){mxscript("js/orgchart/bridge.collections.min.js",function(){mxscript("js/orgchart/OrgChart.Layout.min.js",