d+"?ref="+z;var A={Authorization:"token "+b};t=d.split("/");this.ui.convertFile(m,0<t.length?t[t.length-1]:d,null,this.extension,f,c,null,A)}else c({message:mxResources.get("accessDenied")});else t="&t="+(new Date).getTime(),d=new mxXmlRequest(this.baseUrl+"/repos/"+y+"/"+B+"/contents/"+d+"?ref="+z+t,null,"GET"),this.executeRequest(d,mxUtils.bind(this,function(J){try{f(this.createGitHubFile(y,B,z,JSON.parse(J.getText()),l))}catch(e){c(e)}}),c)};GitHubClient.prototype.createGitHubFile=function(d,f,
c,l,m){d={org:d,repo:f,ref:c,name:l.name,path:l.path,sha:l.sha,html_url:l.html_url,download_url:l.download_url};f=l.content;"base64"===l.encoding&&(/\.jpe?g$/i.test(l.name)?f="data:image/jpeg;base64,"+f:/\.gif$/i.test(l.name)?f="data:image/gif;base64,"+f:/\.png$/i.test(l.name)?(l=this.ui.extractGraphModelFromPng(f),f=null!=l&&0<l.length?l:"data:image/png;base64,"+f):f=Base64.decode(f));return m?new GitHubLibrary(this.ui,f,d):new GitHubFile(this.ui,f,d)};GitHubClient.prototype.insertLibrary=function(d,