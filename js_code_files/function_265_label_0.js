this.fireEvent(new mxEventObject("sketchModeChanged"))}),0)};Editor.createMinimalCss=function(){return"* { -webkit-font-smoothing: antialiased; }html body td.mxWindowTitle > div > img { padding: 8px 4px; }"+(Editor.isDarkMode()?"html body td.mxWindowTitle > div > img { margin: -4px; }html body .geToolbarContainer .geMenuItem, html body .geToolbarContainer .geToolbarButton, html body .geMenubarContainer .geMenuItem .geMenuItem, html body .geMenubarContainer a.geMenuItem,html body .geMenubarContainer .geToolbarButton { filter: invert(1); }html body div.geToolbarContainer a.geInverted { filter: none; }html body .geMenubarContainer .geMenuItem .geMenuItem, html body .geMenubarContainer a.geMenuItem { color: #353535; }html > body > div > .geToolbarContainer { border: 1px solid #c0c0c0 !important; box-shadow: none !important; }html > body.geEditor > div > a.geItem { background-color: #2a2a2a; color: #cccccc; border-color: #505759; }html body .geTabContainer, html body .geTabContainer div, html body .geMenubarContainer { border-color: #505759 !important; }html body .mxCellEditor { color: #f0f0f0; }":
"html > body > div > .geToolbarContainer { box-shadow:0px 2px 10px #e0e0e0; }html body div.geToolbarContainer a.geInverted { filter: invert(1); }html body.geEditor .geTabContainer div { border-color: #e5e5e5 !important; }")+'html body .geStatus { overflow: hidden; text-overflow: ellipsis; }html body .geStatus > *:not([class]) { vertical-align:top; }html > body > div > a.geItem { background-color: #ffffff; color: #707070; border-top: 1px solid lightgray; border-left: 1px solid lightgray; }html body .geMenubarContainer { border-bottom:1px solid lightgray;background-color:#ffffff; }html body .mxWindow button.geBtn { font-size:12px !important; margin-left: 0; }html body .geSidebarContainer *:not(svg *) { font-size:9pt; }html body table.mxWindow td.mxWindowPane div.mxWindowPane *:not(svg *) { font-size:9pt; }table.mxWindow * :not(svg *) { font-size:13px; }html body .mxWindow { z-index: 3; }html body div.diagramContainer button, html body button.geBtn { font-size:14px; font-weight:700; border-radius: 5px; }html body button.geBtn:active { opacity: 0.6; }html body a.geMenuItem { opacity: 0.75; cursor: pointer; user-select: none; }html body a.geMenuItem[disabled] { opacity: 0.2; }html body a.geMenuItem[disabled]:active { opacity: 0.2; }html body div.geActivePage { opacity: 0.7; }html body a.geMenuItem:active { opacity: 0.2; }html body .geToolbarButton:active { opacity: 0.15; }html body .geStatus:active { opacity: 0.5; }.geStatus > div { box-sizing: border-box; max-width: 100%; text-overflow: ellipsis; }html table.mxPopupMenu tr.mxPopupMenuItemHover:active { opacity: 0.7; }html body .geDialog input, html body .geToolbarContainer input, html body .mxWindow input {padding: 2px; display: inline-block; }html body .mxWindow input[type="checkbox"] {padding: 0px; }div.geDialog { border-radius: 5px; }html body div.geDialog button.geBigButton { color: '+
(Editor.isDarkMode()?Editor.darkColor:"#fff")+" !important; border: none !important; }html body .geToolbarContainer a div { color: "+(Editor.isDarkMode()?"#707070":Editor.darkColor)+" }.mxWindow button, .geDialog select, .mxWindow select { display:inline-block; }html body .mxWindow .geColorBtn, html body .geDialog .geColorBtn { background: none; }html body div.diagramContainer button, html body .mxWindow button, html body .geDialog button { min-width: 0px; border-radius: 5px; color: "+(Editor.isDarkMode()?
"#cccccc":"#353535")+" !important; border-style: solid; border-width: 1px; border-color: rgb(216, 216, 216); }html body div.diagramContainer button:hover, html body .mxWindow button:hover, html body .geDialog button:hover { border-color: rgb(177, 177, 177); }html body div.diagramContainer button:active, html body .mxWindow button:active, html body .geDialog button:active { opacity: 0.6; }div.diagramContainer button.geBtn, .mxWindow button.geBtn, .geDialog button.geBtn { min-width:72px; font-weight: 600; background: none; }div.diagramContainer button.gePrimaryBtn, .mxWindow button.gePrimaryBtn, .geDialog button.gePrimaryBtn, html body .gePrimaryBtn { background: #29b6f2; color: #fff !important; border: none; box-shadow: none; }html body .gePrimaryBtn:hover { background: #29b6f2; border: none; box-shadow: inherit; }html body button.gePrimaryBtn:hover { background: #29b6f2; border: none; }.geBtn button { min-width:72px !important; }div.geToolbarContainer a.geButton { margin:0px; padding: 0 2px 4px 2px; } html body div.geToolbarContainer a.geColorBtn { margin: 2px; } html body .mxWindow td.mxWindowPane input, html body .mxWindow td.mxWindowPane select, html body .mxWindow td.mxWindowPane textarea, html body .mxWindow td.mxWindowPane radio { padding: 0px; box-sizing: border-box; }.geDialog, .mxWindow td.mxWindowPane *, div.geSprite, td.mxWindowTitle, .geDiagramContainer { box-sizing:content-box; }.mxWindow div button.geStyleButton { box-sizing: border-box; }.mxWindowPane > .geSidebarContainer { border: none !important; }table.mxWindow td.mxWindowPane button.geColorBtn { padding:0px; box-sizing: border-box; }td.mxWindowPane .geSidebarContainer button { padding:2px; box-sizing: border-box; }html body .geMenuItem { font-size:14px; text-decoration: none; font-weight: normal; padding: 6px 10px 6px 10px; border: none; border-radius: 5px; color: #353535; box-shadow: inset 0 0 0 1px rgba(0,0,0,.11), inset 0 -1px 0 0 rgba(0,0,0,.08), 0 1px 2px 0 rgba(0,0,0,.04); "+
(EditorUi.isElectronApp?"app-region: no-drag; ":"")+"}.geTabContainer { border-bottom:1px solid lightgray; border-top:1px solid lightgray; background: "+(Editor.isDarkMode()?Editor.darkColor:"#fff")+" !important; }html body .geToolbarContainer { background: "+(Editor.isDarkMode()?Editor.darkColor:"#fff")+"; }div.geSidebarContainer { background-color: "+(Editor.isDarkMode()?Editor.darkColor:"#fff")+"; }div.geSidebarContainer .geTitle { background-color: "+(Editor.isDarkMode()?Editor.darkColor:"#fdfdfd")+
"; }div.mxWindow td.mxWindowPane button { background-image: none; float: none; }td.mxWindowTitle { height: 22px !important; background: none !important; font-size: 13px !important; text-align:center !important; border-bottom:1px solid lightgray; }div.mxWindow, div.mxWindowTitle { background-image: none !important; background-color:"+(Editor.isDarkMode()?Editor.darkColor:"#fff")+" !important; }div.mxWindow { border-radius:5px; box-shadow: 0px 0px 2px #C0C0C0 !important;}div.mxWindow *:not(svg *) { font-family: inherit !important; }html div.geVerticalHandle { position:absolute;bottom:0px;left:50%;cursor:row-resize;width:11px;height:11px;background:white;margin-bottom:-6px; margin-left:-6px; border: none; border-radius: 6px; box-shadow: inset 0 0 0 1px rgba(0,0,0,.11), inset 0 -1px 0 0 rgba(0,0,0,.08), 0 1px 2px 0 rgba(0,0,0,.04); }html div.geInactivePage { background: "+
(Editor.isDarkMode()?Editor.darkColor:"rgb(249, 249, 249)")+" !important; color: #A0A0A0 !important; } html div.geActivePage { background:  "+(Editor.isDarkMode()?Editor.darkColor:"#fff")+" !important;  "+(Editor.isDarkMode()?"":"color: #353535 !important; } ")+"html div.mxRubberband { border:1px solid; border-color: #29b6f2 !important; background:rgba(41,182,242,0.4) !important; } html body div.mxPopupMenu { border-radius:5px; border:1px solid #c0c0c0; padding:5px 0 5px 0; box-shadow: 0px 4px 17px -4px rgba(96,96,96,1); } html table.mxPopupMenu td.mxPopupMenuItem { color: "+
(Editor.isDarkMode()?"#cccccc":"#353535")+"; font-size: 14px; padding-top: 4px; padding-bottom: 4px; }html table.mxPopupMenu tr.mxPopupMenuItemHover { background-color: "+(Editor.isDarkMode()?"#000000":"#29b6f2")+"; }html tr.mxPopupMenuItemHover td.mxPopupMenuItem, html tr.mxPopupMenuItemHover td.mxPopupMenuItem span { color: "+(Editor.isDarkMode()?"#cccccc":"#ffffff")+" !important; }html tr.mxPopupMenuItem, html td.mxPopupMenuItem { transition-property: none !important; }html table.mxPopupMenu hr { height: 2px; background-color: rgba(0,0,0,.07); margin: 5px 0; }html body td.mxWindowTitle { padding-right: 14px; }html td.mxWindowTitle div { top: 0px !important; }"+
(mxClient.IS_IOS?"html input[type=checkbox], html input[type=radio] { height:12px; }":"")+("1"==urlParams.sketch?"a.geStatus > div { overflow: hidden; text-overflow: ellipsis; max-width: 100%; }":"")};EditorUi.prototype.isAutoDarkMode=function(){return"auto"==urlParams.dark||this.isSettingsEnabled()&&"auto"==mxSettings.settings.darkMode};EditorUi.prototype.setAndPersistDarkMode=function(d){var f=d;"auto"==d&&(f=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches);this.setDarkMode(f);