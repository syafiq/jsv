c.moveTo(k,q);c.lineTo(k+w,q);c.lineTo(k+w,q+Math.max(0,I-1.5*v));c.lineTo(k+Math.max(0,w-v),q+I);c.lineTo(k,q+I);c.close();c.fillAndStroke();c.begin();c.moveTo(k+w,q);c.lineTo(k+l,q);c.lineTo(k+l,q+p);c.lineTo(k,q+p);c.lineTo(k,q+I);c.stroke()};mxCellRenderer.registerShape("umlFrame",sa);mxPerimeter.CenterPerimeter=function(c,k,q,l){return new mxPoint(c.getCenterX(),c.getCenterY())};mxStyleRegistry.putValue("centerPerimeter",mxPerimeter.CenterPerimeter);mxPerimeter.LifelinePerimeter=function(c,k,