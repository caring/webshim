(function(l,e){if(l.attachEvent){var q=e.createElement("div");q.innerHTML="<z>i</z>";q.childNodes.length!==1&&function(){function r(a,b){if(g[a])g[a].styleSheet.cssText+=b;else{var c=s[m],d=e[j]("style");d.media=a;c.insertBefore(d,c[m]);g[a]=d;r(a,b)}}function t(a,b){for(var c=RegExp("\\b("+n+")\\b(?!.*[;}])","gi"),d=function(k){return".iepp_"+k},h=-1;++h<a.length;){b=a[h].media||b;t(a[h].imports,b);r(b,a[h].cssText.replace(c,d))}}for(var s=e.documentElement,i=e.createDocumentFragment(),g={},n="abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".replace(/ /g,
"|"),o=n.split("|"),f=[],p=-1,m="firstChild",j="createElement";++p<o.length;){e[j](o[p]);i[j](o[p])}i=i.appendChild(e[j]("div"));l.attachEvent("onbeforeprint",function(){for(var a,b=e.getElementsByTagName("*"),c,d,h=RegExp("^"+n+"$","i"),k=-1;++k<b.length;)if((a=b[k])&&(d=a.nodeName.match(h))){c=RegExp("^\\s*<"+d+"(.*)\\/"+d+">\\s*$","i");i.innerHTML=a.outerHTML.replace(/\r|\n/g," ").replace(c,a.currentStyle.display=="block"?"<div$1/div>":"<span$1/span>");c=i.childNodes[0];c.className+=" iepp_"+d;
c=f[f.length]=[a,c];a.parentNode.replaceChild(c[1],c[0])}t(e.styleSheets,"all")});l.attachEvent("onafterprint",function(){for(var a=-1,b;++a<f.length;)f[a][1].parentNode.replaceChild(f[a][0],f[a][1]);for(b in g)s[m].removeChild(g[b]);g={};f=[]})}()}})(this,document);