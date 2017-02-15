/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-cssall-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms3d-csstransitions-cssvalid-flexbox-flexboxlegacy-fontface-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-nthchild-oninput-opacity-postmessage-sessionstorage-smil-svg-svgclippaths-textshadow-touchevents-video-videoautoplay-videopreload-webgl-websockets-websqldatabase-webworkers-domprefixes-hasevent-prefixes-shiv-testallprops-testprop-teststyles !*/
!function(e,t,A){function n(e,t){return typeof e===t}function o(){var e,t,A,o,a,r,i;for(var s in w)if(w.hasOwnProperty(s)){if(e=[],t=w[s],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(A=0;A<t.options.aliases.length;A++)e.push(t.options.aliases[A].toLowerCase());for(o=n(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)r=e[a],i=r.split("."),1===i.length?Modernizr[i[0]]=o:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=o),y.push((o?"":"no-")+i.join("-"))}}function a(e){var t=R.className,A=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");t=t.replace(n,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(t+=" "+A+e.join(" "+A),C?R.className.baseVal=t:R.className=t)}function r(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(e,t){return!!~(""+e).indexOf(t)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,A){return t+A.toUpperCase()}).replace(/^-/,"")}function d(){var e=t.body;return e||(e=r(C?"svg":"body"),e.fake=!0),e}function c(e,A,n,o){var a,i,s,c,l="modernizr",u=r("div"),p=d();if(parseInt(n,10))for(;n--;)s=r("div"),s.id=o?o[n]:l+(n+1),u.appendChild(s);return a=r("style"),a.type="text/css",a.id="s"+l,(p.fake?p:u).appendChild(a),p.appendChild(u),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),u.id=l,p.fake&&(p.style.background="",p.style.overflow="hidden",c=R.style.overflow,R.style.overflow="hidden",R.appendChild(p)),i=A(u,e),p.fake?(p.parentNode.removeChild(p),R.style.overflow=c,R.offsetHeight):u.parentNode.removeChild(u),!!i}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(t,n){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(l(t[o]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+l(t[o])+":"+n+")");return a=a.join(" or "),c("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return A}function p(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,A){var o;for(var a in e)if(e[a]in t)return A===!1?e[a]:(o=t[e[a]],n(o,"function")?p(o,A||t):o);return!1}function h(e,t){if("object"==typeof e)for(var A in e)M(e,A)&&h(A,e[A]);else{e=e.toLowerCase();var n=e.split("."),o=Modernizr[n[0]];if(2==n.length&&(o=o[n[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==n.length?Modernizr[n[0]]=t:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=t),a([(t&&0!=t?"":"no-")+n.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function m(e,t,o,a){function d(){l&&(delete H.style,delete H.modElem)}if(a=n(a,"undefined")?!1:a,!n(o,"undefined")){var c=u(e,o);if(!n(c,"undefined"))return c}for(var l,p,f,h,m,g=["modernizr","tspan"];!H.style;)l=!0,H.modElem=r(g.shift()),H.style=H.modElem.style;for(f=e.length,p=0;f>p;p++)if(h=e[p],m=H.style[h],i(h,"-")&&(h=s(h)),H.style[h]!==A){if(a||n(o,"undefined"))return d(),"pfx"==t?h:!0;try{H.style[h]=o}catch(v){}if(H.style[h]!=m)return d(),"pfx"==t?h:!0}return d(),!1}function g(e,t,A,o,a){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+Y.join(r+" ")+r).split(" ");return n(t,"string")||n(t,"undefined")?m(i,t,o,a):(i=(e+" "+x.join(r+" ")+r).split(" "),f(i,t,A))}function v(e,t,n){return g(e,A,A,t,n)}var y=[],w=[],E={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var A=this;setTimeout(function(){t(A[e])},0)},addTest:function(e,t,A){w.push({name:e,fn:t,options:A})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=E,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("websockets","WebSocket"in e&&2===e.WebSocket.CLOSING),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("websqldatabase","openDatabase"in e),Modernizr.addTest("webworkers","Worker"in e);var T=E._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];E._prefixes=T;var b="Moz O ms Webkit",x=E._config.usePrefixes?b.toLowerCase().split(" "):[];E._domPrefixes=x;var R=t.documentElement;Modernizr.addTest("cssall","all"in R.style);var C="svg"===R.nodeName.toLowerCase();C||!function(e,t){function A(e,t){var A=e.createElement("p"),n=e.getElementsByTagName("head")[0]||e.documentElement;return A.innerHTML="x<style>"+t+"</style>",n.insertBefore(A.lastChild,n.firstChild)}function n(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var A=y.elements;"string"!=typeof A&&(A=A.join(" ")),"string"!=typeof e&&(e=e.join(" ")),y.elements=A+" "+e,d(t)}function a(e){var t=v[e[m]];return t||(t={},g++,e[m]=g,v[g]=t),t}function r(e,A,n){if(A||(A=t),l)return A.createElement(e);n||(n=a(A));var o;return o=n.cache[e]?n.cache[e].cloneNode():h.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e),!o.canHaveChildren||f.test(e)||o.tagUrn?o:n.frag.appendChild(o)}function i(e,A){if(e||(e=t),l)return e.createDocumentFragment();A=A||a(e);for(var o=A.frag.cloneNode(),r=0,i=n(),s=i.length;s>r;r++)o.createElement(i[r]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(A){return y.shivMethods?r(A,e,t):t.createElem(A)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function d(e){e||(e=t);var n=a(e);return!y.shivCSS||c||n.hasCSS||(n.hasCSS=!!A(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||s(e,n),e}var c,l,u="3.7.3",p=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(A){c=!0,l=!0}}();var y={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:u,shivCSS:p.shivCSS!==!1,supportsUnknownElements:l,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:d,createElement:r,createDocumentFragment:i,addElements:o};e.html5=y,d(t),"object"==typeof module&&module.exports&&(module.exports=y)}("undefined"!=typeof e?e:this,t);var B=function(e){function A(t,A){var o;return t?(A&&"string"!=typeof A||(A=r(A||"div")),t="on"+t,o=t in A,!o&&n&&(A.setAttribute||(A=r("div")),A.setAttribute(t,""),o="function"==typeof A[t],A[t]!==e&&(A[t]=e),A.removeAttribute(t)),o):!1}var n=!("onblur"in t.documentElement);return A}();E.hasEvent=B,Modernizr.addTest("hashchange",function(){return B("hashchange",e)===!1?!1:t.documentMode===A||t.documentMode>7}),Modernizr.addTest("audio",function(){var e=r("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(A){}return t}),Modernizr.addTest("canvas",function(){var e=r("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("video",function(){var e=r("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(A){}return t}),Modernizr.addTest("webgl",function(){var t=r("canvas"),A="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return A in t?t[A]("webgl")||t[A]("experimental-webgl"):"WebGLRenderingContext"in e}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",A="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="",o=0,a=T.length-1;a>o;o++)e=0===o?"to ":"",n+=t+T[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(n+=t+"-webkit-"+A);var i=r("a"),s=i.style;return s.cssText=n,(""+s.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=r("a").style;return e.cssText=T.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("inlinesvg",function(){var e=r("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),Modernizr.addTest("videopreload","preload"in r("video"));var F=r("input"),S="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),k={};Modernizr.input=function(t){for(var A=0,n=t.length;n>A;A++)k[t[A]]=!!(t[A]in F);return k.list&&(k.list=!(!r("datalist")||!e.HTMLDataListElement)),k}(S);var G="search tel url email datetime date month week time datetime-local number range color".split(" "),U={};Modernizr.inputtypes=function(e){for(var n,o,a,r=e.length,i=":)",s=0;r>s;s++)F.setAttribute("type",n=e[s]),a="text"!==F.type&&"style"in F,a&&(F.value=i,F.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&F.style.WebkitAppearance!==A?(R.appendChild(F),o=t.defaultView,a=o.getComputedStyle&&"textfield"!==o.getComputedStyle(F,null).WebkitAppearance&&0!==F.offsetHeight,R.removeChild(F)):/^(search|tel)$/.test(n)||(a=/^(url|email|number)$/.test(n)?F.checkValidity&&F.checkValidity()===!1:F.value!=i)),U[e[s]]=!!a;return U}(G);var Q="CSS"in e&&"supports"in e.CSS,V="supportsCSS"in e;Modernizr.addTest("supports",Q||V);var P={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(P.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(P.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))}),Modernizr.addTest("hsla",function(){var e=r("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",i(e.backgroundColor,"rgba")||i(e.backgroundColor,"hsla")});var Y=E._config.usePrefixes?b.split(" "):[];E._cssomPrefixes=Y;var N=E.testStyles=c;Modernizr.addTest("touchevents",function(){var A;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)A=!0;else{var n=["@media (",T.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");N(n,function(e){A=9===e.offsetTop})}return A});var D=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),A=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return A||o||n}();D?Modernizr.addTest("fontface",!1):N('@font-face {font-family:"font";src:url("https://")}',function(e,A){var n=t.getElementById("smodernizr"),o=n.sheet||n.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",r=/src/i.test(a)&&0===a.indexOf(A.split(" ")[0]);Modernizr.addTest("fontface",r)}),N('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)}),N("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){Modernizr.addTest("nthchild",function(){for(var t=e.getElementsByTagName("div"),A=!0,n=0;5>n;n++)A=A&&t[n].offsetWidth===n%2+1;return A})},5),Modernizr.addTest("cssvalid",function(){return N("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=r("input");return e.appendChild(t),t.clientWidth>10})}),Modernizr.addTest("oninput",function(){var A,n=r("input");if(n.setAttribute("oninput","return"),B("oninput",R)||"function"==typeof n.oninput)return!0;try{var o=t.createEvent("KeyboardEvent");A=!1;var a=function(e){A=!0,e.preventDefault(),e.stopPropagation()};o.initKeyEvent("keypress",!0,!0,e,!1,!1,!1,!1,0,"e".charCodeAt(0)),R.appendChild(n),n.addEventListener("input",a,!1),n.focus(),n.dispatchEvent(o),n.removeEventListener("input",a,!1),R.removeChild(n)}catch(i){A=!1}return A});var I=function(t){var n,o=T.length,a=e.CSSRule;if("undefined"==typeof a)return A;if(!t)return!1;if(t=t.replace(/^@/,""),n=t.replace(/-/g,"_").toUpperCase()+"_RULE",n in a)return"@"+t;for(var r=0;o>r;r++){var i=T[r],s=i.toUpperCase()+"_"+n;if(s in a)return"@-"+i.toLowerCase()+"-"+t}return!1};E.atRule=I;var M;!function(){var e={}.hasOwnProperty;M=n(e,"undefined")||n(e.call,"undefined")?function(e,t){return t in e&&n(e.constructor.prototype[t],"undefined")}:function(t,A){return e.call(t,A)}}(),E._l={},E.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},E._trigger=function(e,t){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,n;for(e=0;e<A.length;e++)(n=A[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){E.addTest=h}),Modernizr.addAsyncTest(function(){function e(A){clearTimeout(t),n.removeEventListener("playing",e,!1),h("videoautoplay",A&&"playing"===A.type||0!==n.currentTime),n.parentNode.removeChild(n)}var t,A=300,n=r("video"),o=n.style;if(!(Modernizr.video&&"autoplay"in n))return void h("videoautoplay",!1);o.position="absolute",o.height=0,o.width=0;try{if(Modernizr.video.ogg)n.src="data:video/ogg;base64,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";else{if(!Modernizr.video.h264)return void h("videoautoplay",!1);n.src="data:video/mp4;base64,AAAAHGZ0eXBtcDQyAAAAAG1wNDJpc29tYXZjMQAAAz5tb292AAAAbG12aGQAAAAAzaNacc2jWnEAAV+QAAFfkAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAGGlvZHMAAAAAEICAgAcAT////3//AAACQ3RyYWsAAABcdGtoZAAAAAHNo1pxzaNacQAAAAEAAAAAAAFfkAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAEAAAABAAAAAAAd9tZGlhAAAAIG1kaGQAAAAAzaNacc2jWnEAAV+QAAFfkFXEAAAAAAAhaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAAAAAAGWbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABVnN0YmwAAACpc3RzZAAAAAAAAAABAAAAmWF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAQAEgAAABIAAAAAAAAAAEOSlZUL0FWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwH0AAr/4QAZZ/QACq609NQYBBkAAAMAAQAAAwAKjxImoAEABWjOAa8gAAAAEmNvbHJuY2xjAAYAAQAGAAAAGHN0dHMAAAAAAAAAAQAAAAUAAEZQAAAAKHN0c3oAAAAAAAAAAAAAAAUAAAIqAAAACAAAAAgAAAAIAAAACAAAAChzdHNjAAAAAAAAAAIAAAABAAAABAAAAAEAAAACAAAAAQAAAAEAAAAYc3RjbwAAAAAAAAACAAADYgAABaQAAAAUc3RzcwAAAAAAAAABAAAAAQAAABFzZHRwAAAAAAREREREAAAAb3VkdGEAAABnbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcgAAAAAAAAAAAAAAAAAAAAA6aWxzdAAAADKpdG9vAAAAKmRhdGEAAAABAAAAAEhhbmRCcmFrZSAwLjkuOCAyMDEyMDcxODAwAAACUm1kYXQAAAHkBgX/4NxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxMjAgLSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDExIC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9uczogY2FiYWM9MCByZWY9MSBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgxOjAgbWU9ZXNhIHN1Ym1lPTkgcHN5PTAgbWl4ZWRfcmVmPTAgbWVfcmFuZ2U9NCBjaHJvbWFfbWU9MSB0cmVsbGlzPTAgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0wIGNocm9tYV9xcF9vZmZzZXQ9MCB0aHJlYWRzPTYgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTUwIGtleWludF9taW49NSBzY2VuZWN1dD00MCBpbnRyYV9yZWZyZXNoPTAgcmM9Y3FwIG1idHJlZT0wIHFwPTAAgAAAAD5liISscR8A+E4ACAACFoAAITAAAgsAAPgYCoKgoC+L4vi+KAvi+L4YfAEAACMzgABF9AAEUGUgABDJiXnf4AAAAARBmiKUAAAABEGaQpQAAAAEQZpilAAAAARBmoKU"}}catch(a){return void h("videoautoplay",!1)}n.setAttribute("autoplay",""),n.style.cssText="display:none",R.appendChild(n),setTimeout(function(){n.addEventListener("playing",e,!1),t=setTimeout(e,A)},0)});var Z={elem:r("modernizr")};Modernizr._q.push(function(){delete Z.elem});var H={style:Z.elem.style};Modernizr._q.unshift(function(){delete H.style});var W=E.testProp=function(e,t,n){return m([e],A,t,n)};Modernizr.addTest("textshadow",W("textShadow","1px 1px")),E.testAllProps=g,E.testAllProps=v,Modernizr.addTest("cssanimations",v("animationName","a",!0)),Modernizr.addTest("borderimage",v("borderImage","url() 1",!0)),Modernizr.addTest("backgroundsize",v("backgroundSize","100%",!0)),Modernizr.addTest("borderradius",v("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",v("boxShadow","1px 1px",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=v("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(A){}return e});for(var e,t,A=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],n=0;n<A.length;n++)e=A[n].toLowerCase(),t=v("column"+A[n]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||v(A[n])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",v("boxDirection","reverse",!0)),Modernizr.addTest("cssreflections",v("boxReflect","above",!0)),Modernizr.addTest("csstransforms3d",function(){var e=!!v("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in R.style)){var A,n="#modernizr{width:0;height:0}";Modernizr.supports?A="@supports (perspective: 1px)":(A="@media (transform-3d)",t&&(A+=",(-webkit-transform-3d)")),A+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",N(n+A,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",v("transition","all",!0));var z=E.prefixed=function(e,t,A){return 0===e.indexOf("@")?I(e):(-1!=e.indexOf("-")&&(e=s(e)),t?g(e,t,A):g(e,"pfx"))},j=z("indexedDB",e);Modernizr.addTest("indexeddb",!!j),j&&Modernizr.addTest("indexeddb.deletedatabase","deleteDatabase"in j),o(),a(y),delete E.addTest,delete E.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);