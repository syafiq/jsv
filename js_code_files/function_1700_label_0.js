e.getCell(k),null!=g&&g!=d&&(d=null));null!=d&&(e.getChildAt(f,y)!=d&&e.add(f,d,y),this.patchCellRecursive(b,e,d,c,l),y++);return k});for(z=[null];0<z.length;)if(A=z.shift(),A=C(null!=A?A.child:null,null!=A?A.insert:!1),J=m[A],null!=J&&(delete m[A],z.push({child:e.getCell(J)})),J=t[A],null!=J&&(delete t[A],z.push({child:this.getCellForJson(J),insert:!0})),0==z.length){for(A in m)z.push({child:e.getCell(m[A])}),delete m[A];for(A in t)z.push({child:this.getCellForJson(t[A]),insert:!0}),delete t[A]}}};