mxUtils.bind(this,function(R,d,f,g){var u=this.actions.get(f);null!=u&&(f=function(){u.isEnabled()&&u.funct.apply(this,arguments)},d?g?B.bindControlShiftKey(R,f):B.bindControlKey(R,f):g?B.bindShiftKey(R,f):B.bindKey(R,f))});var F=this,K=B.escape;B.escape=function(R){K.apply(this,arguments)};B.enter=function(){};B.bindControlShiftKey(36,function(){l.exitGroup()});B.bindControlShiftKey(35,function(){l.enterGroup()});B.bindShiftKey(36,function(){l.home()});B.bindKey(35,function(){l.refresh()});B.bindAction(107,