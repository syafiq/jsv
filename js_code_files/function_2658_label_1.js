"keys",[b],"values",[B],"cells",D))}finally{r.getModel().endUpdate()}}},{install:function(B){this.listener=function(){B(mxUtils.getValue(x,b,f)!=g)};r.getModel().addListener(mxEvent.CHANGE,this.listener)},destroy:function(){r.getModel().removeListener(this.listener)}})};