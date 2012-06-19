(function(b){if(!Modernizr.genericDOM){var d=document,i,j,m=/<([\w:]+)/,s={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};b.webshims.fixHTML5=function(b){if("string"!=typeof b||s[(m.exec(b)||["",""])[1].toLowerCase()])return b;if(!j){i=d.body;if(!i)return b;j=d.createElement("div");j.style.display="none"}var r=j.cloneNode(!1);i.appendChild(r);r.innerHTML=b;i.removeChild(r);return r.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(b,d,i,j,m){var s=d.modules,l=/\s*,\s*/,r={},p={},q={},h={},u={},x=b.fn.val,v=function(a,c,e,f,o){return o?x.call(b(a)):x.call(b(a),e)};b.fn.val=function(a){var c=this[0];arguments.length&&null==a&&(a="");if(!arguments.length)return!c||1!==c.nodeType?x.call(this):b.prop(c,"value",a,"val",!0);if(b.isArray(a))return x.apply(this,arguments);var e=b.isFunction(a);return this.each(function(f){c=this;1===c.nodeType&&(e?(f=a.call(c,f,b.prop(c,"value",m,"val",
!0)),null==f&&(f=""),b.prop(c,"value",f,"val")):b.prop(c,"value",a,"val"))})};var w="_webshimsLib"+Math.round(1E3*Math.random()),t=function(a,c,e){a=a.jquery?a[0]:a;if(!a)return e||{};var f=b.data(a,w);e!==m&&(f||(f=b.data(a,w,{})),c&&(f[c]=e));return c?f&&f[c]:f};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(a){b.fn[a.name]=function(){return this.map(function(){var c=t(this,
"shadowData");return c&&c[a.prop]||this})}});["removeAttr","prop","attr"].forEach(function(a){r[a]=b[a];b[a]=function(c,e,f,o,g){var h="val"==o,d=!h?r[a]:v;if(!c||!p[e]||1!==c.nodeType||!h&&o&&"attr"==a&&b.attrFn[e])return d(c,e,f,o,g);var z=(c.nodeName||"").toLowerCase(),k=q[z],l="attr"==a&&(!1===f||null===f)?"removeAttr":a,n,s,j;k||(k=q["*"]);k&&(k=k[e]);k&&(n=k[l]);if(n){if("value"==e)s=n.isVal,n.isVal=h;if("removeAttr"===l)return n.value.call(c);if(f===m)return n.get?n.get.call(c):n.value;n.set&&
("attr"==a&&!0===f&&(f=e),j=n.set.call(c,f));if("value"==e)n.isVal=s}else j=d(c,e,f,o,g);if((f!==m||"removeAttr"===l)&&u[z]&&u[z][e]){var i;i="removeAttr"==l?!1:"prop"==l?!!f:!0;u[z][e].forEach(function(e){if(!e.only||(e.only="prop"==a)||"attr"==e.only&&"prop"!=a)e.call(c,f,i,h?"val":l,a)})}return j};h[a]=function(c,e,f){q[c]||(q[c]={});q[c][e]||(q[c][e]={});var o=q[c][e][a],g=function(c,b,o){return b&&b[c]?b[c]:o&&o[c]?o[c]:"prop"==a&&"value"==e?function(c){return f.isVal?v(this,e,c,!1,0===arguments.length):
r[a](this,e,c)}:"prop"==a&&"value"==c&&f.value.apply?function(c){var b=r[a](this,e);b&&b.apply&&(b=b.apply(this,arguments));return b}:function(c){return r[a](this,e,c)}};q[c][e][a]=f;if(f.value===m){if(!f.set)f.set=f.writeable?g("set",f,o):d.cfg.useStrict&&"prop"==e?function(){throw e+" is readonly on "+c;}:b.noop;if(!f.get)f.get=g("get",f,o)}["value","get","set"].forEach(function(a){f[a]&&(f["_sup"+a]=g(a,o))})}});var y=!b.browser.msie||8<parseInt(b.browser.version,10),g=function(){var a=d.getPrototypeOf(j.createElement("foobar")),
c=Object.prototype.hasOwnProperty;return function(e,b,o){var g=j.createElement(e),h=d.getPrototypeOf(g);if(y&&h&&a!==h&&(!g[b]||!c.call(g,b))){var k=g[b];o._supvalue=function(){return k&&k.apply?k.apply(this,arguments):k};h[b]=o.value}else o._supvalue=function(){var a=t(this,"propValue");return a&&a[b]&&a[b].apply?a[b].apply(this,arguments):a&&a[b]},n.extendValue(e,b,o.value);o.value._supvalue=o._supvalue}}(),n=function(){var a={};d.addReady(function(c,e){var f={},g=function(a){f[a]||(f[a]=b(c.getElementsByTagName(a)),
e[0]&&b.nodeName(e[0],a)&&(f[a]=f[a].add(e)))};b.each(a,function(a,c){g(a);!c||!c.forEach?d.warn("Error: with "+a+"-property. methods: "+c):c.forEach(function(c){f[a].each(c)})});f=null});var c,e=b([]),f=function(e,f){a[e]?a[e].push(f):a[e]=[f];b.isDOMReady&&(c||b(j.getElementsByTagName(e))).each(f)};return{createTmpCache:function(a){b.isDOMReady&&(c=c||b(j.getElementsByTagName(a)));return c||e},flushTmpCache:function(){c=null},content:function(a,c){f(a,function(){var a=b.attr(this,c);null!=a&&b.attr(this,
c,a)})},createElement:function(a,c){f(a,c)},extendValue:function(a,c,e){f(a,function(){b(this).each(function(){t(this,"propValue",{})[c]=this[c];this[c]=e})})}}}(),k=function(a,c){if(a.defaultValue===m)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[c||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};b.extend(d,{getID:function(){var a=(new Date).getTime();return function(c){var c=b(c),e=c.attr("id");e||(a++,e="ID-"+a,c.attr("id",e));return e}}(),extendUNDEFProp:function(a,
c){b.each(c,function(c,b){c in a||(a[c]=b)})},createPropDefault:k,data:t,moveToFirstEvent:function(){var a=b._data?"_data":"data";return function(c,e,f){if((c=(b[a](c,"events")||{})[e])&&1<c.length)e=c.pop(),f||(f="bind"),"bind"==f&&c.delegateCount?c.splice(c.delegateCount,0,e):c.unshift(e)}}(),addShadowDom:function(a,c,e){e=e||{};a.jquery&&(a=a[0]);c.jquery&&(c=c[0]);if(!e.shadowFocusElement)e.shadowFocusElement=c;var f=b.data(a,w)||b.data(a,w,{}),g=b.data(c,w)||b.data(c,w,{});f.hasShadow=c;g.nativeElement=
a;g.shadowData=f.shadowData={nativeElement:a,shadowElement:c,shadowFocusElement:e.shadowFocusElement};e.shadowChilds&&e.shadowChilds.each(function(){t(this,"shadowData",g.shadowData)});if(e.data)f.shadowData.data=e.data,g.shadowData.data=e.data;e=null},propTypes:{standard:function(a){k(a);if(!a.prop)a.prop={set:function(c){a.attr.set.call(this,""+c)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){k(a);if(!a.prop)a.prop={set:function(c){c?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(a,c){"string"==typeof c&&(c=c.split(l));c.forEach(function(c){d.defineNodeNamesProperty(a,c,{prop:{set:function(a){b.attr(this,c,a)},get:function(){return b.attr(this,c)||""}}})})},defineNodeNameProperty:function(a,c,e){p[c]=!0;if(e.reflect)d.propTypes[e.propType||"standard"](e);["prop","attr","removeAttr"].forEach(function(f){var o=e[f];o&&(o="prop"===f?b.extend({writeable:!0},o):b.extend({},
o,{writeable:!0}),h[f](a,c,o),"*"!=a&&d.cfg.extendNative&&"prop"==f&&o.value&&b.isFunction(o.value)&&g(a,c,o),e[f]=o)});e.initAttr&&n.content(a,c);return e},defineNodeNameProperties:function(a,c,e,b){for(var g in c)!b&&c[g].initAttr&&n.createTmpCache(a),e&&(c[g][e]?d.log("override: "+a+"["+g+"] for "+e):(c[g][e]={},["value","set","get"].forEach(function(a){a in c[g]&&(c[g][e][a]=c[g][a],delete c[g][a])}))),c[g]=d.defineNodeNameProperty(a,g,c[g]);b||n.flushTmpCache();return c},createElement:function(a,
c,e){var f;b.isFunction(c)&&(c={after:c});n.createTmpCache(a);c.before&&n.createElement(a,c.before);e&&(f=d.defineNodeNameProperties(a,e,!1,!0));c.after&&n.createElement(a,c.after);n.flushTmpCache();return f},onNodeNamesPropertyModify:function(a,c,e,f){"string"==typeof a&&(a=a.split(l));b.isFunction(e)&&(e={set:e});a.forEach(function(a){u[a]||(u[a]={});"string"==typeof c&&(c=c.split(l));e.initAttr&&n.createTmpCache(a);c.forEach(function(c){u[a][c]||(u[a][c]=[],p[c]=!0);if(e.set){if(f)e.set.only=f;
u[a][c].push(e.set)}e.initAttr&&n.content(a,c)});n.flushTmpCache()})},defineNodeNamesBooleanProperty:function(a,c,e){e||(e={});if(b.isFunction(e))e.set=e;d.defineNodeNamesProperty(a,c,{attr:{set:function(a){this.setAttribute(c,a);e.set&&e.set.call(this,!0)},get:function(){return null==this.getAttribute(c)?m:c}},removeAttr:{value:function(){this.removeAttribute(c);e.set&&e.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:e.initAttr||!1})},contentAttr:function(a,c,e){if(a.nodeName){if(e===
m)return e=(a.attributes[c]||{}).value,null==e?m:e;"boolean"==typeof e?e?a.setAttribute(c,c):a.removeAttribute(c):a.setAttribute(c,e)}},activeLang:function(){var a=[],c={},e,f,g=/:\/\/|^\.*\//,h=function(a,c,e){return c&&e&&-1!==b.inArray(c,e.availabeLangs||[])?(a.loading=!0,e=e.langSrc,g.test(e)||(e=d.cfg.basePath+e),d.loader.loadScript(e+c+".js",function(){a.langObj[c]?(a.loading=!1,n(a,!0)):b(function(){a.langObj[c]&&n(a,!0);a.loading=!1})}),!0):!1},k=function(a){c[a]&&c[a].forEach(function(a){a.callback()})},
n=function(a,c){if(a.activeLang!=e&&a.activeLang!==f){var b=s[a.module].options;if(a.langObj[e]||f&&a.langObj[f])a.activeLang=e,a.callback(a.langObj[e]||a.langObj[f],e),k(a.module);else if(!c&&!h(a,e,b)&&!h(a,f,b)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],e),k(a.module)}};return function(g){if("string"==typeof g&&g!==e)e=g,f=e.split("-")[0],e==f&&(f=!1),b.each(a,function(a,c){n(c)});else if("object"==typeof g)if(g.register)c[g.register]||(c[g.register]=[]),c[g.register].push(g),
g.callback();else{if(!g.activeLang)g.activeLang="";a.push(g);n(g)}return e}}()});b.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,c){d[a]=function(a,b,g,h){"string"==typeof a&&(a=a.split(l));var k={};a.forEach(function(a){k[a]=d[c](a,b,g,h)});return k}});d.isReady("webshimLocalization",!0)});
(function(b,d){var i=b.webshims.browserVersion;if(!(b.browser.mozilla&&5<i)&&(!b.browser.msie||12>i&&7<i)){var j={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},m=function(b,d){b.getAttribute("role")||b.setAttribute("role",d)};b.webshims.addReady(function(s,l){b.each(j,function(h,d){for(var i=b(h,s).add(l.filter(h)),j=0,p=i.length;j<p;j++)m(i[j],d)});if(s===d){var i=d.getElementsByTagName("header")[0],p=d.getElementsByTagName("footer"),q=p.length;
i&&!b(i).closest("section, article")[0]&&m(i,"banner");q&&(i=p[q-1],b(i).closest("section, article")[0]||m(i,"contentinfo"))}})}})(jQuery,document);
(function(b,d,i){var j=d.audio&&d.video,m=!1;if(j)b=document.createElement("video"),d.videoBuffered="buffered"in b,m="loop"in b,i.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),d.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:d.videoBuffered,d:["dom-support"]}),i.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(b,d,i,p,q){var h=d.mediaelement,u=d.cfg.mediaelement,
x=function(a,c){var a=b(a),e={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!e.src)return e;var f=a.attr("type");if(f)e.type=f,e.container=b.trim(f.split(";")[0]);else if(c||(c=a[0].nodeName.toLowerCase(),"source"==c&&(c=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),f=h.getTypeForSrc(e.src,c))e.type=f,e.container=f,d.warn("you should always provide a proper mime-type using the source element. "+e.src+" detected as: "+f),b.nodeName(a[0],"source")&&a.attr("type",
f);if(f=a.attr("media"))e.media=f;return e},v=swfobject.hasFlashPlayerVersion("9.0.115"),w=function(){d.ready("mediaelement-swf",function(){if(!h.createSWF)d.modules["mediaelement-swf"].test=b.noop,d.reTest(["mediaelement-swf"],j)})};h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8",
"m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};h.mimeTypes.source=b.extend({},h.mimeTypes.audio,h.mimeTypes.video);h.getTypeForSrc=function(a,c){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";
var a=a.split("?")[0].split("."),a=a[a.length-1],e;b.each(h.mimeTypes[c],function(c,b){if(-1!==b.indexOf(a))return e=c,!1});return e};h.srces=function(a,c){a=b(a);if(c)a.removeAttr("src").removeAttr("type").find("source").remove(),b.isArray(c)||(c=[c]),c.forEach(function(c){var b=p.createElement("source");"string"==typeof c&&(c={src:c});b.setAttribute("src",c.src);c.type&&b.setAttribute("type",c.type);c.media&&b.setAttribute("media",c.media);a.append(b)});else{var c=[],e=a[0].nodeName.toLowerCase(),
f=x(a,e);f.src?c.push(f):b("source",a).each(function(){f=x(this,e);f.src&&c.push(f)});return c}};b.fn.loadMediaSrc=function(a,c){return this.each(function(){c!==q&&(b(this).removeAttr("poster"),c&&b.attr(this,"poster",c));h.srces(this,a);b(this).mediaLoad()})};h.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
h.canSwfPlaySrces=function(a,c){var e="";v&&(a=b(a),c=c||h.srces(a),b.each(c,function(a,c){if(c.container&&c.src&&-1!=h.swfMimeTypes.indexOf(c.container))return e=c,!1}));return e};var t={};h.canNativePlaySrces=function(a,c){var e="";if(j){var a=b(a),f=(a[0].nodeName||"").toLowerCase();if(!t[f])return e;c=c||h.srces(a);b.each(c,function(c,b){if(b.type&&t[f].prop._supvalue.call(a[0],b.type))return e=b,!1})}return e};h.setError=function(a,c){c||(c="can't play sources");b(a).pause().data("mediaerror",
c);d.warn("mediaelementError: "+c);setTimeout(function(){b(a).data("mediaerror")&&b(a).trigger("mediaerror")},1)};var y=function(){var a;return function(c,b,f){d.ready("mediaelement-swf",function(){h.createSWF?h.createSWF(c,b,f):a||(a=!0,w(),y(c,b,f))})}}(),g=function(a,c,b,f,d){b||!1!==b&&c&&"flash"==c.isActive?(b=h.canSwfPlaySrces(a,f))?y(a,b,c):d?h.setError(a,!1):g(a,c,!1,f,!0):(b=h.canNativePlaySrces(a,f))?c&&"flash"==c.isActive&&h.setActive(a,"html5",c):d?(h.setError(a,!1),c&&"flash"==c.isActive&&
h.setActive(a,"html5",c)):g(a,c,!0,f,!0)},n=/^(?:embed|object|datalist)$/i,k=function(a,c){var e=d.data(a,"mediaelementBase")||d.data(a,"mediaelementBase",{}),f=h.srces(a),k=a.parentNode;clearTimeout(e.loadTimer);b.data(a,"mediaerror",!1);if(f.length&&k&&!(1!=k.nodeType||n.test(k.nodeName||"")))c=c||d.data(a,"mediaelement"),g(a,c,u.preferFlash||q,f)};b(p).bind("ended",function(a){var c=d.data(a.target,"mediaelement");(!m||c&&"html5"!=c.isActive||b.prop(a.target,"loop"))&&setTimeout(function(){!b.prop(a.target,
"paused")&&b.prop(a.target,"loop")&&b(a.target).prop("currentTime",0).play()},1)});m||d.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(a){var c=d.defineNodeNameProperty(a,"load",{prop:{value:function(){var a=d.data(this,"mediaelement");k(this,a);j&&(!a||"html5"==a.isActive)&&c.prop._supvalue&&c.prop._supvalue.apply(this,arguments)}}});t[a]=d.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(c){var f="";j&&t[a].prop._supvalue&&(f=t[a].prop._supvalue.call(this,
c),"no"==f&&(f=""));!f&&v&&(c=b.trim((c||"").split(";")[0]),-1!=h.swfMimeTypes.indexOf(c)&&(f="maybe"));return f}}})});d.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,c=d.data(a,"mediaelementBase")||d.data(a,"mediaelementBase",{});clearTimeout(c.loadTimer);c.loadTimer=setTimeout(function(){k(a);a=null},9)}});i=function(){d.addReady(function(a,c){b("video, audio",a).add(c.filter("video, audio")).each(function(){b.browser.msie&&8<d.browserVersion&&b.prop(this,
"paused")&&!b.prop(this,"readyState")&&b(this).is('audio[preload="none"][controls]:not([autoplay])')?b(this).prop("preload","metadata").mediaLoad():k(this);if(j){var a,c,g=this,h=function(){var a=b.prop(g,"buffered");if(a){for(var c="",e=0,f=a.length;e<f;e++)c+=a.end(e);return c}},n=function(){var a=h();a!=c&&(c=a,b(g).triggerHandler("progress"))};b(this).bind("play loadstart progress",function(b){"progress"==b.type&&(c=h());clearTimeout(a);a=setTimeout(n,999)}).bind("emptied stalled mediaerror abort suspend",
function(b){"emptied"==b.type&&(c=!1);clearTimeout(a)})}})})};j?(d.isReady("mediaelement-core",!0),i(),v&&d.ready("WINDOWLOAD mediaelement",w)):d.ready("mediaelement-swf",i)})})(jQuery,Modernizr,jQuery.webshims);
(function(b){var d=window.Modernizr,i=b.webshims,j=i.bugs,m=b('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required /><input type="date" required name="a" /><input type="submit" /></form>'),s=function(){if(m[0].querySelector)try{j.findRequired=!m[0].querySelector("select:required")}catch(b){j.findRequired=!1}};j.findRequired=!1;j.validationMessage=!1;j.valueAsNumberSet=!1;i.capturingEventPrevented=function(d){if(!d._isPolyfilled){var i=d.isDefaultPrevented,
j=d.preventDefault;d.preventDefault=function(){clearTimeout(b.data(d.target,d.type+"DefaultPrevented"));b.data(d.target,d.type+"DefaultPrevented",setTimeout(function(){b.removeData(d.target,d.type+"DefaultPrevented")},30));return j.apply(this,arguments)};d.isDefaultPrevented=function(){return!(!i.apply(this,arguments)&&!b.data(d.target,d.type+"DefaultPrevented"))};d._isPolyfilled=!0}};if(!d.formvalidation||j.bustedValidity)s();else{d.bugfreeformvalidation=!0;if(window.opera||b.browser.webkit||window.testGoodWithFix){var l=
b("input",m).eq(0),r,p=function(h){var j=["form-extend","form-message","form-native-fix"];h&&(h.preventDefault(),h.stopImmediatePropagation());clearTimeout(r);setTimeout(function(){m&&(m.remove(),m=l=null)},9);if(!d.bugfreeformvalidation)i.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),i.modules["form-extend"].test=b.noop;i.isReady("form-number-date-api")&&j.push("form-number-date-api");i.reTest(j);if(b.browser.opera||window.testGoodWithFix)i.loader.loadList(["dom-extend"]),i.ready("dom-extend",
function(){var h=function(b){b.preventDefault()};["form","input","textarea","select"].forEach(function(d){var j=i.defineNodeNameProperty(d,"checkValidity",{prop:{value:function(){i.fromSubmit||b(this).bind("invalid.checkvalidity",h);i.fromCheckValidity=!0;var d=j.prop._supvalue.apply(this,arguments);i.fromSubmit||b(this).unbind("invalid.checkvalidity",h);i.fromCheckValidity=!1;return d}}})});d.input.list&&!(b("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&
i.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var d=this.options||[];if(!d.length){var h=b("select",this);if(h[0]&&h[0].options&&h[0].options.length)d=h[0].options}return d}}})})};m.appendTo("head");if(window.opera||window.testGoodWithFix){s();j.validationMessage=!l.prop("validationMessage");if((d.inputtypes||{}).date){try{l.prop("valueAsNumber",0)}catch(q){}j.valueAsNumberSet="1970-01-01"!=l.prop("value")}l.prop("value","")}m.bind("submit",function(b){d.bugfreeformvalidation=
!1;p(b)});r=setTimeout(function(){m&&m.triggerHandler("submit")},9);i.capturingEvents(["input"]);i.capturingEvents(["invalid"],!0);b("input, select",m).bind("invalid",p).filter('[type="submit"]').bind("click",function(b){b.stopImmediatePropagation()}).trigger("click")}i.capturingEvents(["input"]);i.capturingEvents(["invalid"],!0)}})(jQuery);
jQuery.webshims.register("form-core",function(b,d,i,j,m,s){var l={radio:1},r={checkbox:1,radio:1},p=b([]),q=d.bugs,h=function(g){var g=b(g),d,k;d=p;if(l[g[0].type])k=g.prop("form"),d=(d=g[0].name)?k?b(k[d]):b(j.getElementsByName(d)).filter(function(){return!b.prop(this,"form")}):g,d=d.filter('[type="radio"]');return d},u=d.getContentValidationMessage=function(g,h){var k=g.getAttribute("x-moz-errormessage")||g.getAttribute("data-errormessage")||"";if(k&&-1!=k.indexOf("{")){try{k=jQuery.parseJSON(k)}catch(a){return k}"object"==
typeof k&&(h=h||b.prop(g,"validity")||{valid:1},h.valid||b.each(h,function(a,b){if(b&&"valid"!=a&&k[a])return k=k[a],!1}));d.data(g,"contentErrorMessage",k);if("object"==typeof k)k=k.defaultMessage}return k||""},x={number:1,range:1,date:1};b.extend(b.expr.filters,{"valid-element":function(g){return!(!b.prop(g,"willValidate")||!(b.prop(g,"validity")||{valid:1}).valid)},"invalid-element":function(g){return!(!b.prop(g,"willValidate")||(b.prop(g,"validity")||{valid:1}).valid)},"required-element":function(g){return!(!b.prop(g,
"willValidate")||!b.prop(g,"required"))},"optional-element":function(g){return!!(b.prop(g,"willValidate")&&!1===b.prop(g,"required"))},"in-range":function(g){if(!x[b.prop(g,"type")]||!b.prop(g,"willValidate"))return!1;g=b.prop(g,"validity");return!(!g||g.rangeOverflow||g.rangeUnderflow)},"out-of-range":function(g){if(!x[b.prop(g,"type")]||!b.prop(g,"willValidate"))return!1;g=b.prop(g,"validity");return!(!g||!g.rangeOverflow&&!g.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(g){b.expr.filters[g]=
b.expr.filters[g+"-element"]});var v=b.event.customEvent||{};(q.bustedValidity||q.findRequired)&&function(){var g=b.find,d=b.find.matchesSelector,h=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,a=function(a){return a+"-element"};b.find=function(){var c=Array.prototype.slice,b=function(b){var e=arguments,e=c.call(e,1,e.length);e.unshift(b.replace(h,a));return g.apply(this,e)},f;for(f in g)g.hasOwnProperty(f)&&(b[f]=g[f]);return b}();if(!Modernizr.prefixed||
Modernizr.prefixed("matchesSelector",j.documentElement))b.find.matchesSelector=function(c,b){b=b.replace(h,a);return d.call(this,c,b)}}();var w=b.prop,t={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};b.prop=function(g,d,k){var a=w.apply(this,arguments);if(g&&"form"in g&&t[d]&&k!==m&&b(g).hasClass("form-ui-invalid")&&(b.prop(g,"validity")||{valid:1}).valid)b(g).getShadowElement().removeClass("form-ui-invalid"),"checked"==d&&k&&h(g).not(g).removeClass("form-ui-invalid").removeAttr("aria-invalid");
return a};var y=function(g,d){var h;b.each(g,function(a,c){if(c)return h="customError"==a?b.prop(d,"validationMessage"):a,!1});return h};b(j).bind("focusout change refreshvalidityui",function(g){if(g.target&&"submit"!=g.target.type&&b.prop(g.target,"willValidate")){var d=b.data(g.target,"webshimsswitchvalidityclass");d&&clearTimeout(d);b.data(g.target,"webshimsswitchvalidityclass",setTimeout(function(){var d=b(g.target).getNativeElement()[0],a=b.prop(d,"validity"),c=b(d).getShadowElement(),e,f,i,
j;a.valid?c.hasClass("form-ui-valid")||(e="form-ui-valid",f="form-ui-invalid",j="changedvaliditystate",i="changedvalid",r[d.type]&&d.checked&&h(d).not(d).removeClass(f).addClass(e).removeAttr("aria-invalid"),b.removeData(d,"webshimsinvalidcause")):(a=y(a,d),b.data(d,"webshimsinvalidcause")!=a&&(b.data(d,"webshimsinvalidcause",a),j="changedvaliditystate"),c.hasClass("form-ui-invalid")||(e="form-ui-invalid",f="form-ui-valid",r[d.type]&&!d.checked&&h(d).not(d).removeClass(f).addClass(e),i="changedinvalid"));
e&&(c.addClass(e).removeClass(f),setTimeout(function(){b(d).trigger(i)},0));j&&setTimeout(function(){b(d).trigger(j)},0);b.removeData(g.target,"webshimsswitchvalidityclass")},9))}});v.changedvaliditystate=!0;v.changedvalid=!0;v.changedinvalid=!0;v.refreshvalidityui=!0;d.triggerInlineForm=function(d,h){b(d).trigger(h)};d.modules["form-core"].getGroupElements=h;q=function(){d.scrollRoot=b.browser.webkit||"BackCompat"==j.compatMode?b(j.body):b(j.documentElement)};q();d.ready("DOM",q);d.getRelOffset=
function(d,h){var d=b(d),k=b(h).offset(),a;b.swap(b(d)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){a=d.offset()});k.top-=a.top;k.left-=a.left;return k};d.validityAlert=function(){var g=!b.browser.msie||7<parseInt(b.browser.version,10)?"span":"label",h,k=!1,a=!1,c,e={hideDelay:5E3,showFor:function(d,g,j,p){e._create();var d=b(d),l=b(d).getShadowElement(),m=e.getOffsetFromBody(l);e.clear();p?this.hide():(this.getMessage(d,g),this.position(l,m),h.css({fontSize:d.css("fontSize"),
fontFamily:d.css("fontFamily")}),this.show(),this.hideDelay&&(k=setTimeout(c,this.hideDelay)),b(i).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(a);a=setTimeout(function(){e.position(l)},9)}));j||this.setFocus(l,m)},getOffsetFromBody:function(a){return d.getRelOffset(h,a)},setFocus:function(a,e){var k=b(a).getShadowFocusElement(),i=d.scrollRoot.scrollTop(),l=(e||k.offset()).top-30,p;d.getID&&"label"==g&&h.attr("for",d.getID(k));i>l&&(d.scrollRoot.animate({scrollTop:l-
5},{queue:!1,duration:Math.max(Math.min(600,1.5*(i-l)),80)}),p=!0);try{k[0].focus()}catch(m){}p&&(d.scrollRoot.scrollTop(i),setTimeout(function(){d.scrollRoot.scrollTop(i)},0));setTimeout(function(){b(j).bind("focusout.validityalert",c)},10)},getMessage:function(a,c){""===c?this.hide():b("span.va-box",h).text(c||u(a[0])||a.prop("validationMessage"))},position:function(a,c){c=c?b.extend({},c):e.getOffsetFromBody(a);c.top+=a.outerHeight();h.css(c)},show:function(){"none"===h.css("display")&&h.css({opacity:0}).show();
h.addClass("va-visible").fadeTo(400,1)},hide:function(){h.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(k);b(j).unbind(".validityalert");b(i).unbind(".validityalert");h.stop().removeAttr("for")},_create:function(){if(!h)h=e.errorBubble=b("<"+g+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+g+">").css({position:"absolute",display:"none"}),
d.ready("DOM",function(){h.appendTo("body");b.fn.bgIframe&&b.browser.msie&&7>parseInt(b.browser.version,10)&&h.bgIframe()})}};c=b.proxy(e,"hide");return e}();(function(){var d,h=[],k;b(j).bind("invalid",function(a){if(!a.wrongWebkitInvalid){var c=b(a.target),e=c.getShadowElement();e.hasClass("form-ui-invalid")||(e.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){b(a.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!d)d=b.Event("firstinvalid"),
d.isInvalidUIPrevented=a.isDefaultPrevented,e=b.Event("firstinvalidsystem"),b(j).triggerHandler(e,{element:a.target,form:a.target.form,isInvalidUIPrevented:a.isDefaultPrevented}),c.trigger(d);d&&d.isDefaultPrevented()&&a.preventDefault();h.push(a.target);a.extraData="fix";clearTimeout(k);k=setTimeout(function(){var c={type:"lastinvalid",cancelable:!1,invalidlist:b(h)};d=!1;h=[];b(a.target).trigger(c,c)},9);e=c=null}})})();s.replaceValidationUI&&d.ready("DOM",function(){b(j).bind("firstinvalid",function(d){d.isInvalidUIPrevented()||
(d.preventDefault(),b.webshims.validityAlert.showFor(d.target,b(d.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(b,d,i,j,m,s){var l=d.validityMessages,i=s.overrideMessages||s.customMessages?["customValidationMessage"]:[];l.en=l.en||l["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(b){l.en.valueMissing[b]="Please select an option."});["date","time","datetime-local"].forEach(function(b){l.en.rangeUnderflow[b]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(b){l.en.rangeOverflow[b]=
"Value must be at or before {%max}."});l["en-US"]=l["en-US"]||l.en;l[""]=l[""]||l["en-US"];l.de=l.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(b){l.de.valueMissing[b]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(b){l.de.rangeUnderflow[b]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(b){l.de.rangeOverflow[b]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var r=
l[""];d.createValidationMessage=function(d,i){var h=r[i];h&&"string"!==typeof h&&(h=h[b.prop(d,"type")]||h[(d.nodeName||"").toLowerCase()]||h.defaultMessage);h&&"value,min,max,title,maxlength,label".split(",").forEach(function(i){if(-1!==h.indexOf("{%"+i)){var j=("label"==i?b.trim(b('label[for="'+d.id+'"]',d.form).text()).replace(/\*$|:$/,""):b.attr(d,i))||"";h=h.replace("{%"+i+"}",j);"value"==i&&(h=h.replace("{%valueLen}",j.length))}});return h||""};(d.bugs.validationMessage||!Modernizr.formvalidation||
d.bugs.bustedValidity)&&i.push("validationMessage");d.activeLang({langObj:l,module:"form-core",callback:function(b){r=b}});Modernizr.input.list&&!(b("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&d.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var d=this.options||[];if(!d.length){var i=b("select",this);if(i[0]&&i[0].options&&i[0].options.length)d=i[0].options}return d}}});i.forEach(function(i){d.defineNodeNamesProperty(["fieldset",
"output","button"],i,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(j){var h=d.defineNodeNameProperty(j,i,{prop:{get:function(){var i=this,j="";if(!b.prop(i,"willValidate"))return j;var l=b.prop(i,"validity")||{valid:1};if(l.valid||(j=d.getContentValidationMessage(i,l)))return j;if(l.customError&&i.nodeName&&(j=Modernizr.formvalidation&&!d.bugs.bustedValidity&&h.prop._supget?h.prop._supget.call(i):d.data(i,"customvalidationMessage")))return j;b.each(l,function(b,h){if("valid"!=
b&&h&&(j=d.createValidationMessage(i,b)))return!1});return j||""},writeable:!1}})})})});
