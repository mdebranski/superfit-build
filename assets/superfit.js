/*! jQuery v1.8.3 jquery.com | jquery.org/license */

(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.7.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',

    // Button elements boud jquery-ujs
    buttonClickSelector: 'button[data-remote]',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            return rails.fire(element, 'ajax:beforeSend', [xhr, settings]);
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: crossDomain
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        var jqxhr = rails.ajax(options);
        element.trigger('ajax:send', jqxhr);
        return jqxhr;
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrf_token = $('meta[name=csrf-token]').attr('content'),
        csrf_param = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadata_input = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrf_param !== undefined && csrf_token !== undefined) {
        metadata_input += '<input name="' + csrf_param + '" value="' + csrf_token + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadata_input).appendTo('body');
      form.submit();
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      form.find(rails.disableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        element.data('ujs:enable-with', element[method]());
        element[method](element.data('disable-with'));
        element.prop('disabled', true);
      });
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      form.find(rails.enableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
        element.prop('disabled', false);
      });
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      element.data('ujs:enable-with', element.html()); // store enabled state
      element.html(element.data('disable-with')); // set to disabled state
      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }

  };

  if (rails.fire($(document), 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    $(document).delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $(document).delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params');
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if ( (e.metaKey || e.ctrlKey) && (!method || method === 'GET') && !data ) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (link.data('method')) {
        rails.handleMethod(link);
        return false;
      }
    });

    $(document).delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);
      if (!rails.allowAction(button)) return rails.stopEverything(e);

      rails.handleRemote(button);
      return false;
    });

    $(document).delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $(document).delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector),
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (blankRequiredInputs && form.attr("novalidate") == undefined && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
        return rails.stopEverything(e);
      }

      if (remote) {
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $(document).delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $(document).delegate(rails.formSubmitSelector, 'ajax:beforeSend.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $(document).delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      // making sure that all forms have actual up-to-date token(cached forms contain old one)
      var csrf_token = $('meta[name=csrf-token]').attr('content');
      var csrf_param = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrf_param + '"]').val(csrf_token);
    });
  }

})( jQuery );
// Underscore.js 1.1.7
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){var p=this,C=p._,m={},i=Array.prototype,n=Object.prototype,f=i.slice,D=i.unshift,E=n.toString,l=n.hasOwnProperty,s=i.forEach,t=i.map,u=i.reduce,v=i.reduceRight,w=i.filter,x=i.every,y=i.some,o=i.indexOf,z=i.lastIndexOf;n=Array.isArray;var F=Object.keys,q=Function.prototype.bind,b=function(a){return new j(a)};typeof module!=="undefined"&&module.exports?(module.exports=b,b._=b):p._=b;b.VERSION="1.1.7";var h=b.each=b.forEach=function(a,c,b){if(a!=null)if(s&&a.forEach===s)a.forEach(c,b);else if(a.length===
+a.length)for(var e=0,k=a.length;e<k;e++){if(e in a&&c.call(b,a[e],e,a)===m)break}else for(e in a)if(l.call(a,e)&&c.call(b,a[e],e,a)===m)break};b.map=function(a,c,b){var e=[];if(a==null)return e;if(t&&a.map===t)return a.map(c,b);h(a,function(a,g,G){e[e.length]=c.call(b,a,g,G)});return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var k=d!==void 0;a==null&&(a=[]);if(u&&a.reduce===u)return e&&(c=b.bind(c,e)),k?a.reduce(c,d):a.reduce(c);h(a,function(a,b,f){k?d=c.call(e,d,a,b,f):(d=a,k=!0)});if(!k)throw new TypeError("Reduce of empty array with no initial value");
return d};b.reduceRight=b.foldr=function(a,c,d,e){a==null&&(a=[]);if(v&&a.reduceRight===v)return e&&(c=b.bind(c,e)),d!==void 0?a.reduceRight(c,d):a.reduceRight(c);a=(b.isArray(a)?a.slice():b.toArray(a)).reverse();return b.reduce(a,c,d,e)};b.find=b.detect=function(a,c,b){var e;A(a,function(a,g,f){if(c.call(b,a,g,f))return e=a,!0});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(w&&a.filter===w)return a.filter(c,b);h(a,function(a,g,f){c.call(b,a,g,f)&&(e[e.length]=a)});return e};
b.reject=function(a,c,b){var e=[];if(a==null)return e;h(a,function(a,g,f){c.call(b,a,g,f)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=!0;if(a==null)return e;if(x&&a.every===x)return a.every(c,b);h(a,function(a,g,f){if(!(e=e&&c.call(b,a,g,f)))return m});return e};var A=b.some=b.any=function(a,c,d){c=c||b.identity;var e=!1;if(a==null)return e;if(y&&a.some===y)return a.some(c,d);h(a,function(a,b,f){if(e|=c.call(d,a,b,f))return m});return!!e};b.include=b.contains=function(a,c){var b=
!1;if(a==null)return b;if(o&&a.indexOf===o)return a.indexOf(c)!=-1;A(a,function(a){if(b=a===c)return!0});return b};b.invoke=function(a,c){var d=f.call(arguments,2);return b.map(a,function(a){return(c.call?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);var e={computed:-Infinity};h(a,function(a,b,f){b=c?c.call(d,a,b,f):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,
c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);var e={computed:Infinity};h(a,function(a,b,f){b=c?c.call(d,a,b,f):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,f){return{value:a,criteria:c.call(d,a,b,f)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,b){var d={};h(a,function(a,f){var g=b(a,f);(d[g]||(d[g]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||
(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){if(!a)return[];if(a.toArray)return a.toArray();if(b.isArray(a))return f.call(a);if(b.isArguments(a))return f.call(a);return b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?f.call(a,0,b):a[0]};b.rest=b.tail=function(a,b,d){return f.call(a,b==null||d?1:b)};b.last=function(a){return a[a.length-1]};b.compact=function(a){return b.filter(a,
function(a){return!!a})};b.flatten=function(a){return b.reduce(a,function(a,d){if(b.isArray(d))return a.concat(b.flatten(d));a[a.length]=d;return a},[])};b.without=function(a){return b.difference(a,f.call(arguments,1))};b.uniq=b.unique=function(a,c){return b.reduce(a,function(a,e,f){if(0==f||(c===!0?b.last(a)!=e:!b.include(a,e)))a[a.length]=e;return a},[])};b.union=function(){return b.uniq(b.flatten(arguments))};b.intersection=b.intersect=function(a){var c=f.call(arguments,1);return b.filter(b.uniq(a),
function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a,c){return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=f.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(o&&a.indexOf===o)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(a[d]===c)return d;return-1};b.lastIndexOf=function(a,
b){if(a==null)return-1;if(z&&a.lastIndexOf===z)return a.lastIndexOf(b);for(var d=a.length;d--;)if(a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);d=arguments[2]||1;for(var e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};b.bind=function(a,b){if(a.bind===q&&q)return q.apply(a,f.call(arguments,1));var d=f.call(arguments,2);return function(){return a.apply(b,d.concat(f.call(arguments)))}};b.bindAll=function(a){var c=f.call(arguments,1);
c.length==0&&(c=b.functions(a));h(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var b=c.apply(this,arguments);return l.call(d,b)?d[b]:d[b]=a.apply(this,arguments)}};b.delay=function(a,b){var d=f.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(f.call(arguments,1)))};var B=function(a,b,d){var e;return function(){var f=this,g=arguments,h=function(){e=null;
a.apply(f,g)};d&&clearTimeout(e);if(d||!e)e=setTimeout(h,b)}};b.throttle=function(a,b){return B(a,b,!1)};b.debounce=function(a,b){return B(a,b,!0)};b.once=function(a){var b=!1,d;return function(){if(b)return d;b=!0;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(f.call(arguments));return b.apply(this,d)}};b.compose=function(){var a=f.call(arguments);return function(){for(var b=f.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=
function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}};b.keys=F||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],d;for(d in a)l.call(a,d)&&(b[b.length]=d);return b};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){h(f.call(arguments,1),function(b){for(var d in b)b[d]!==void 0&&(a[d]=b[d])});return a};b.defaults=function(a){h(f.call(arguments,
1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,c){if(a===c)return!0;var d=typeof a;if(d!=typeof c)return!1;if(a==c)return!0;if(!a&&c||a&&!c)return!1;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(a.isEqual)return a.isEqual(c);if(c.isEqual)return c.isEqual(a);if(b.isDate(a)&&b.isDate(c))return a.getTime()===c.getTime();if(b.isNaN(a)&&b.isNaN(c))return!1;
if(b.isRegExp(a)&&b.isRegExp(c))return a.source===c.source&&a.global===c.global&&a.ignoreCase===c.ignoreCase&&a.multiline===c.multiline;if(d!=="object")return!1;if(a.length&&a.length!==c.length)return!1;d=b.keys(a);var e=b.keys(c);if(d.length!=e.length)return!1;for(var f in a)if(!(f in c)||!b.isEqual(a[f],c[f]))return!1;return!0};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(l.call(a,c))return!1;return!0};b.isElement=function(a){return!!(a&&a.nodeType==
1)};b.isArray=n||function(a){return E.call(a)==="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return!(!a||!l.call(a,"callee"))};b.isFunction=function(a){return!(!a||!a.constructor||!a.call||!a.apply)};b.isString=function(a){return!!(a===""||a&&a.charCodeAt&&a.substr)};b.isNumber=function(a){return!!(a===0||a&&a.toExponential&&a.toFixed)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===!0||a===!1};b.isDate=function(a){return!(!a||!a.getTimezoneOffset||
!a.setUTCFullYear)};b.isRegExp=function(a){return!(!a||!a.test||!a.exec||!(a.ignoreCase||a.ignoreCase===!1))};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.noConflict=function(){p._=C;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.mixin=function(a){h(b.functions(a),function(c){H(c,b[c]=a[c])})};var I=0;b.uniqueId=function(a){var b=I++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g};
b.template=function(a,c){var d=b.templateSettings;d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";d=new Function("obj",d);return c?d(c):d};
var j=function(a){this._wrapped=a};b.prototype=j.prototype;var r=function(a,c){return c?b(a).chain():a},H=function(a,c){j.prototype[a]=function(){var a=f.call(arguments);D.call(a,this._wrapped);return r(c.apply(b,a),this._chain)}};b.mixin(b);h(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=i[a];j.prototype[a]=function(){b.apply(this._wrapped,arguments);return r(this._wrapped,this._chain)}});h(["concat","join","slice"],function(a){var b=i[a];j.prototype[a]=function(){return r(b.apply(this._wrapped,
arguments),this._chain)}});j.prototype.chain=function(){this._chain=!0;return this};j.prototype.value=function(){return this._wrapped}})();
!function(e,t){"use strict";var n=t.prototype.trim,r=t.prototype.trimRight,i=t.prototype.trimLeft,s=function(e){return e*1||0},o=function(e,t){if(t<1)return"";var n="";while(t>0)t&1&&(n+=e),t>>=1,e+=e;return n},u=[].slice,a=function(e){return e==null?"\\s":e.source?e.source:"["+p.escapeRegExp(e)+"]"},f={lt:"<",gt:">",quot:'"',amp:"&",apos:"'"},l={};for(var c in f)l[f[c]]=c;l["'"]="#39";var h=function(){function e(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}var n=o,r=function(){return r.cache.hasOwnProperty(arguments[0])||(r.cache[arguments[0]]=r.parse(arguments[0])),r.format.call(null,r.cache[arguments[0]],arguments)};return r.format=function(r,i){var s=1,o=r.length,u="",a,f=[],l,c,p,d,v,m;for(l=0;l<o;l++){u=e(r[l]);if(u==="string")f.push(r[l]);else if(u==="array"){p=r[l];if(p[2]){a=i[s];for(c=0;c<p[2].length;c++){if(!a.hasOwnProperty(p[2][c]))throw new Error(h('[_.sprintf] property "%s" does not exist',p[2][c]));a=a[p[2][c]]}}else p[1]?a=i[p[1]]:a=i[s++];if(/[^s]/.test(p[8])&&e(a)!="number")throw new Error(h("[_.sprintf] expecting number but found %s",e(a)));switch(p[8]){case"b":a=a.toString(2);break;case"c":a=t.fromCharCode(a);break;case"d":a=parseInt(a,10);break;case"e":a=p[7]?a.toExponential(p[7]):a.toExponential();break;case"f":a=p[7]?parseFloat(a).toFixed(p[7]):parseFloat(a);break;case"o":a=a.toString(8);break;case"s":a=(a=t(a))&&p[7]?a.substring(0,p[7]):a;break;case"u":a=Math.abs(a);break;case"x":a=a.toString(16);break;case"X":a=a.toString(16).toUpperCase()}a=/[def]/.test(p[8])&&p[3]&&a>=0?"+"+a:a,v=p[4]?p[4]=="0"?"0":p[4].charAt(1):" ",m=p[6]-t(a).length,d=p[6]?n(v,m):"",f.push(p[5]?a+d:d+a)}}return f.join("")},r.cache={},r.parse=function(e){var t=e,n=[],r=[],i=0;while(t){if((n=/^[^\x25]+/.exec(t))!==null)r.push(n[0]);else if((n=/^\x25{2}/.exec(t))!==null)r.push("%");else{if((n=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t))===null)throw new Error("[_.sprintf] huh?");if(n[2]){i|=1;var s=[],o=n[2],u=[];if((u=/^([a-z_][a-z_\d]*)/i.exec(o))===null)throw new Error("[_.sprintf] huh?");s.push(u[1]);while((o=o.substring(u[0].length))!=="")if((u=/^\.([a-z_][a-z_\d]*)/i.exec(o))!==null)s.push(u[1]);else{if((u=/^\[(\d+)\]/.exec(o))===null)throw new Error("[_.sprintf] huh?");s.push(u[1])}n[2]=s}else i|=2;if(i===3)throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");r.push(n)}t=t.substring(n[0].length)}return r},r}(),p={VERSION:"2.3.0",isBlank:function(e){return e==null&&(e=""),/^\s*$/.test(e)},stripTags:function(e){return e==null?"":t(e).replace(/<\/?[^>]+>/g,"")},capitalize:function(e){return e=e==null?"":t(e),e.charAt(0).toUpperCase()+e.slice(1)},chop:function(e,n){return e==null?[]:(e=t(e),n=~~n,n>0?e.match(new RegExp(".{1,"+n+"}","g")):[e])},clean:function(e){return p.strip(e).replace(/\s+/g," ")},count:function(e,n){if(e==null||n==null)return 0;e=t(e),n=t(n);var r=0,i=0,s=n.length;for(;;){i=e.indexOf(n,i);if(i===-1)break;r++,i+=s}return r},chars:function(e){return e==null?[]:t(e).split("")},swapCase:function(e){return e==null?"":t(e).replace(/\S/g,function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()})},escapeHTML:function(e){return e==null?"":t(e).replace(/[&<>"']/g,function(e){return"&"+l[e]+";"})},unescapeHTML:function(e){return e==null?"":t(e).replace(/\&([^;]+);/g,function(e,n){var r;return n in f?f[n]:(r=n.match(/^#x([\da-fA-F]+)$/))?t.fromCharCode(parseInt(r[1],16)):(r=n.match(/^#(\d+)$/))?t.fromCharCode(~~r[1]):e})},escapeRegExp:function(e){return e==null?"":t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},splice:function(e,t,n,r){var i=p.chars(e);return i.splice(~~t,~~n,r),i.join("")},insert:function(e,t,n){return p.splice(e,t,0,n)},include:function(e,n){return n===""?!0:e==null?!1:t(e).indexOf(n)!==-1},join:function(){var e=u.call(arguments),t=e.shift();return t==null&&(t=""),e.join(t)},lines:function(e){return e==null?[]:t(e).split("\n")},reverse:function(e){return p.chars(e).reverse().join("")},startsWith:function(e,n){return n===""?!0:e==null||n==null?!1:(e=t(e),n=t(n),e.length>=n.length&&e.slice(0,n.length)===n)},endsWith:function(e,n){return n===""?!0:e==null||n==null?!1:(e=t(e),n=t(n),e.length>=n.length&&e.slice(e.length-n.length)===n)},succ:function(e){return e==null?"":(e=t(e),e.slice(0,-1)+t.fromCharCode(e.charCodeAt(e.length-1)+1))},titleize:function(e){return e==null?"":t(e).replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})},camelize:function(e){return p.trim(e).replace(/[-_\s]+(.)?/g,function(e,t){return t.toUpperCase()})},underscored:function(e){return p.trim(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},dasherize:function(e){return p.trim(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()},classify:function(e){return p.titleize(t(e).replace(/_/g," ")).replace(/\s/g,"")},humanize:function(e){return p.capitalize(p.underscored(e).replace(/_id$/,"").replace(/_/g," "))},trim:function(e,r){return e==null?"":!r&&n?n.call(e):(r=a(r),t(e).replace(new RegExp("^"+r+"+|"+r+"+$","g"),""))},ltrim:function(e,n){return e==null?"":!n&&i?i.call(e):(n=a(n),t(e).replace(new RegExp("^"+n+"+"),""))},rtrim:function(e,n){return e==null?"":!n&&r?r.call(e):(n=a(n),t(e).replace(new RegExp(n+"+$"),""))},truncate:function(e,n,r){return e==null?"":(e=t(e),r=r||"...",n=~~n,e.length>n?e.slice(0,n)+r:e)},prune:function(e,n,r){if(e==null)return"";e=t(e),n=~~n,r=r!=null?t(r):"...";if(e.length<=n)return e;var i=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},s=e.slice(0,n+1).replace(/.(?=\W*\w*$)/g,i);return s.slice(s.length-2).match(/\w\w/)?s=s.replace(/\s*\S+$/,""):s=p.rtrim(s.slice(0,s.length-1)),(s+r).length>e.length?e:e.slice(0,s.length)+r},words:function(e,t){return p.isBlank(e)?[]:p.trim(e,t).split(t||/\s+/)},pad:function(e,n,r,i){e=e==null?"":t(e),n=~~n;var s=0;r?r.length>1&&(r=r.charAt(0)):r=" ";switch(i){case"right":return s=n-e.length,e+o(r,s);case"both":return s=n-e.length,o(r,Math.ceil(s/2))+e+o(r,Math.floor(s/2));default:return s=n-e.length,o(r,s)+e}},lpad:function(e,t,n){return p.pad(e,t,n)},rpad:function(e,t,n){return p.pad(e,t,n,"right")},lrpad:function(e,t,n){return p.pad(e,t,n,"both")},sprintf:h,vsprintf:function(e,t){return t.unshift(e),h.apply(null,t)},toNumber:function(e,n){if(e==null||e=="")return 0;e=t(e);var r=s(s(e).toFixed(~~n));return r===0&&!e.match(/^0+$/)?Number.NaN:r},numberFormat:function(e,t,n,r){if(isNaN(e)||e==null)return"";e=e.toFixed(~~t),r=typeof r=="string"?r:",";var i=e.split("."),s=i[0],o=i[1]?(n||".")+i[1]:"";return s.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+r)+o},strRight:function(e,n){if(e==null)return"";e=t(e),n=n!=null?t(n):n;var r=n?e.indexOf(n):-1;return~r?e.slice(r+n.length,e.length):e},strRightBack:function(e,n){if(e==null)return"";e=t(e),n=n!=null?t(n):n;var r=n?e.lastIndexOf(n):-1;return~r?e.slice(r+n.length,e.length):e},strLeft:function(e,n){if(e==null)return"";e=t(e),n=n!=null?t(n):n;var r=n?e.indexOf(n):-1;return~r?e.slice(0,r):e},strLeftBack:function(e,t){if(e==null)return"";e+="",t=t!=null?""+t:t;var n=e.lastIndexOf(t);return~n?e.slice(0,n):e},toSentence:function(e,t,n,r){t=t||", ",n=n||" and ";var i=e.slice(),s=i.pop();return e.length>2&&r&&(n=p.rtrim(t)+n),i.length?i.join(t)+n+s:s},toSentenceSerial:function(){var e=u.call(arguments);return e[3]=!0,p.toSentence.apply(p,e)},slugify:function(e){if(e==null)return"";var n="ąàáäâãåæćęèéëêìíïîłńòóöôõøùúüûñçżź",r="aaaaaaaaceeeeeiiiilnoooooouuuunczz",i=new RegExp(a(n),"g");return e=t(e).toLowerCase().replace(i,function(e){var t=n.indexOf(e);return r.charAt(t)||"-"}),p.dasherize(e.replace(/[^\w\s-]/g,""))},surround:function(e,t){return[t,e,t].join("")},quote:function(e){return p.surround(e,'"')},exports:function(){var e={};for(var t in this){if(!this.hasOwnProperty(t)||t.match(/^(?:include|contains|reverse)$/))continue;e[t]=this[t]}return e},repeat:function(e,n,r){if(e==null)return"";n=~~n;if(r==null)return o(t(e),n);for(var i=[];n>0;i[--n]=e);return i.join(r)},levenshtein:function(e,n){if(e==null&&n==null)return 0;if(e==null)return t(n).length;if(n==null)return t(e).length;e=t(e),n=t(n);var r=[],i,s;for(var o=0;o<=n.length;o++)for(var u=0;u<=e.length;u++)o&&u?e.charAt(u-1)===n.charAt(o-1)?s=i:s=Math.min(r[u],r[u-1],i)+1:s=o+u,i=r[u],r[u]=s;return r.pop()}};p.strip=p.trim,p.lstrip=p.ltrim,p.rstrip=p.rtrim,p.center=p.lrpad,p.rjust=p.lpad,p.ljust=p.rpad,p.contains=p.include,p.q=p.quote,typeof exports!="undefined"&&(typeof module!="undefined"&&module.exports&&(module.exports=p),exports._s=p),typeof define=="function"&&define.amd&&define("underscore.string",[],function(){return p}),e._=e._||{},e._.string=e._.str=p}(this,String);
/*

            _/    _/_/    _/_/_/_/_/                              _/
               _/    _/      _/      _/_/    _/    _/    _/_/_/  _/_/_/
          _/  _/  _/_/      _/    _/    _/  _/    _/  _/        _/    _/
         _/  _/    _/      _/    _/    _/  _/    _/  _/        _/    _/
        _/    _/_/  _/    _/      _/_/      _/_/_/    _/_/_/  _/    _/
       _/
    _/

    Created by David Kaneda <http://www.davidkaneda.com>
    Maintained by Thomas Yip <http://beedesk.com/>
    Sponsored by Sencha Labs <http://www.sencha.com/>
    Special thanks to Jonathan Stark <http://www.jonathanstark.com/>

    Documentation and issue tracking on GitHub <http://github.com/senchalabs/jQTouch/>

    (c) 2009-2011 Sencha Labs
    jQTouch may be freely distributed under the MIT license.

*/

(function() {

    $.jQTouch = function(options) {
        // Initialize internal jQT variables
        var $ = fx(),
            $body,
            $head=$('head'),
            history=[],
            newPageCount=0,
            jQTSettings={},
            $currentPage='',
            orientation='portrait',
            touchSelectors=[],
            publicObj={},
            tapBuffer=100, // High click delay = ~350, quickest animation (slide) = 250
            extensions=$.jQTouch.prototype.extensions,
            animations=[],
            hairExtensions='',
            defaults = {
                addGlossToIcon: true,
                backSelector: '.back, .cancel, .goback',
                cacheGetRequests: true,
                debug: true,
                defaultAnimation: 'slideleft',
                fixedViewport: true,
                formSelector: 'form',
                fullScreen: true,
                fullScreenClass: 'fullscreen',
                icon: null,
                icon4: null, // available in iOS 4.2 and later.
                preloadImages: false,
                startupScreen: null,
                statusBar: 'default', // other options: black-translucent, black
                submitSelector: '.submit',
                touchSelector: 'a, .touch',
                trackScrollPositions: true,
                useAnimations: true,
                useFastTouch: true,
                useTouchScroll: true,
                animations: [ // highest to lowest priority
                    {name:'cubeleft', selector:'.cubeleft, .cube', is3d: true},
                    {name:'cuberight', selector:'.cuberight', is3d: true},
                    {name:'dissolve', selector:'.dissolve'},
                    {name:'fade', selector:'.fade'},
                    {name:'flipleft', selector:'.flipleft, .flip', is3d: true},
                    {name:'flipright', selector:'.flipright', is3d: true},
                    {name:'pop', selector:'.pop', is3d: true},
                    {name:'swapleft', selector:'.swap', is3d: true},
                    {name:'slidedown', selector:'.slidedown'},
                    {name:'slideright', selector:'.slideright'},
                    {name:'slideup', selector:'.slideup'},
                    {name:'slideleft', selector:'.slideleft, .slide, #jqt > * > ul li a'}
                ]
            }; // end defaults

        function fx() {
            var fx;
            if (!!window.Zepto) {
                fx = window.Zepto;
                fx.fn.prop = fx.fn.attr;

                Event.prototype.isDefaultPrevented = function() {
                  return this.defaultPrevented;
                };
            } else if (!!window.jQuery) {
                fx = window.jQuery;
                // trick to get Zepto/touch.js to work for jQuery
                //window.Zepto = $;
            } else {
                throw('Either Zepto or jQuery is required but neither can be found.');
            }
            return fx;
        }

        function warn(message) {
            if (window.console !== undefined && jQTSettings.debug === true) {
                console.warn(message);
            }
        }
        function addAnimation(animation) {
            if (typeof(animation.selector) === 'string' && typeof(animation.name) === 'string') {
                animations.push(animation);
            }
        }
        function addPageToHistory(page, animation) {
            history.unshift({
                page: page,
                animation: animation,
                hash: '#' + page.attr('id'),
                id: page.attr('id')
            });
        }

        // Unfortunately, we can not assume the "tap" event
        // is being used for links, forms, etc.
        function clickHandler(e) {
            // Figure out whether to prevent default
            var $el = $(e.target);

            // Find the nearest tappable ancestor
            if (!$el.is(touchSelectors.join(', '))) {
                $el = $(e.target).closest(touchSelectors.join(', '));
            }

            // Prevent default if we found an internal link (relative or absolute)
            if ($el && $el.prop('href') && !$el.isExternalLink()) {
                warn('Need to prevent default click behavior');
                e.preventDefault();
            } else {
                warn('No need to prevent default click behavior');
            }

            // Trigger a tap event if touchstart is not on the job
            if ($.support.touch) {
                warn('Not converting click to a tap event because touch handler is on the job');
            } else {
                warn('Converting click event to a tap event because touch handlers are not present or off');
                $(e.target).trigger('tap', e);
            }

        }
        function doNavigation(fromPage, toPage, animation, goingBack) {

            goingBack = goingBack ? goingBack : false;

            // Error check for target page
            if (toPage === undefined || toPage.length === 0) {
                $.fn.unselect();
                warn('Target element is missing.');
                return false;
            }

            // Error check for fromPage===toPage
            if (toPage.hasClass('current')) {
                $.fn.unselect();
                warn('You are already on the page you are trying to navigate to.');
                return false;
            }

            // Collapse the keyboard
            $(':focus').trigger('blur');

            fromPage.trigger('pageAnimationStart', { direction: 'out', back: goingBack });
            toPage.trigger('pageAnimationStart', { direction: 'in', back: goingBack });

            if ($.support.animationEvents && animation && jQTSettings.useAnimations) {
                // Fail over to 2d animation if need be
                if (!$.support.transform3d && animation.is3d) {
                    warn('Did not detect support for 3d animations, falling back to ' + jQTSettings.defaultAnimation);
                    animation.name = jQTSettings.defaultAnimation;
                }

                // Reverse animation if need be
                var finalAnimationName = animation.name,
                    is3d = animation.is3d ? 'animating3d' : '';

                if (goingBack) {
                    finalAnimationName = finalAnimationName.replace(/left|right|up|down|in|out/, reverseAnimation );
                }

                warn('finalAnimationName is ' + finalAnimationName);

                // Bind internal "cleanup" callback
                fromPage.bind('webkitAnimationEnd', navigationEndHandler);

                // Trigger animations
                $body.addClass('animating ' + is3d);

                var lastScroll = window.pageYOffset;

                // Position the incoming page so toolbar is at top of viewport regardless of scroll position on from page
                if (jQTSettings.trackScrollPositions === true) {
                    toPage.css('top', window.pageYOffset - (toPage.data('lastScroll') || 0));
                }

                toPage.addClass(finalAnimationName + ' in current');
                fromPage.addClass(finalAnimationName + ' out');

                if (jQTSettings.trackScrollPositions === true) {
                    fromPage.data('lastScroll', lastScroll);
                    $('.scroll', fromPage).each(function(){
                        $(this).data('lastScroll', this.scrollTop);
                    });
                }

            } else {
                toPage.addClass('current in');
                navigationEndHandler();
            }

            // Private navigationEnd callback
            function navigationEndHandler(event) {
                var bufferTime = tapBuffer;

                if ($.support.animationEvents && animation && jQTSettings.useAnimations) {
                    fromPage.unbind('webkitAnimationEnd', navigationEndHandler);
                    fromPage.removeClass('current ' + finalAnimationName + ' out');
                    toPage.removeClass(finalAnimationName);
                    $body.removeClass('animating animating3d');
                    if (jQTSettings.trackScrollPositions === true) {
                        toPage.css('top', -toPage.data('lastScroll'));

                        // Have to make sure the scroll/style resets
                        // are outside the flow of this function.
                        setTimeout(function(){
                            toPage.css('top', 0);
                            window.scroll(0, toPage.data('lastScroll'));
                            $('.scroll', toPage).each(function(){
                                this.scrollTop = - $(this).data('lastScroll');
                            });
                        }, 0);
                    }
                } else {
                    fromPage.removeClass(finalAnimationName + ' out current');
                    bufferTime += 260;
                }

                // In class is intentionally delayed, as it is our ghost click hack
                setTimeout(function(){
                    toPage.removeClass('in');
                }, bufferTime);

                // Housekeeping
                $currentPage = toPage;
                if (goingBack) {
                    history.shift();
                } else {
                    addPageToHistory($currentPage, animation);
                }

                fromPage.unselect();

                setHash($currentPage.attr('id'));

                // Trigger custom events
                toPage.trigger('pageAnimationEnd', { direction:'in', animation: animation});
                fromPage.trigger('pageAnimationEnd', { direction:'out', animation: animation});
            }

            return true;
        }
        function reverseAnimation(animation) {
            var opposites={
                'up' : 'down',
                'down' : 'up',
                'left' : 'right',
                'right' : 'left',
                'in' : 'out',
                'out' : 'in'
            };

            return opposites[animation] || animation;
        }
        function getOrientation() {
            return orientation;
        }
        function goBack() {

            // Error checking
            if (history.length < 1 ) {
                warn('History is empty.');
            }

            if (history.length === 1 ) {
                warn('You are on the first panel.');
                window.history.go(-1);
            }

            var from = history[0],
                to = history[1];

            if (doNavigation(from.page, to.page, from.animation, true)) {
                return publicObj;
            } else {
                warn('Could not go back.');
                return false;
            }

        }
        function goTo(toPage, animation) {

            var fromPage = history[0].page;

            if (typeof animation === 'string') {
                for (var i=0, max=animations.length; i < max; i++) {
                    if (animations[i].name === animation) {
                        animation = animations[i];
                        break;
                    }
                }
            }

            if (typeof toPage === 'string') {
                var nextPage = $(toPage);

                if (nextPage.length < 1) {
                    showPageByHref(toPage, {
                        animation: animation
                    });
                    return;
                } else {
                    toPage = nextPage;
                }
            }
            if (doNavigation(fromPage, toPage, animation)) {
                return publicObj;
            } else {
                warn('Could not animate pages.');
                return false;
            }
        }
        function hashChangeHandler(e) {
            if (location.hash === history[0].hash) {
                warn('We are on the right panel');
                return true;
            } else if (location.hash === '') {
                goBack();
                return true;
            } else {
                if( (history[1] && location.hash === history[1].hash) ) {
                    goBack();
                    return true;
                } else {
                    // Lastly, just try going to the ID...
                    warn('Could not find ID in history, just forwarding to DOM element.');
                    goTo($(location.hash), jQTSettings.defaultAnimation);
                }
            }
        }
        function init(options) {
            jQTSettings = $.extend({}, defaults, options);

            // Preload images
            if (jQTSettings.preloadImages) {
                for (var i = jQTSettings.preloadImages.length - 1; i >= 0; i--) {
                    (new Image()).src = jQTSettings.preloadImages[i];
                }
            }

            // Set appropriate icon (retina display available in iOS 4.2 and later.)
            var precomposed = (jQTSettings.addGlossToIcon) ? '' : '-precomposed';
            if (jQTSettings.icon) {
                hairExtensions += '<link rel="apple-touch-icon' + precomposed + '" href="' + jQTSettings.icon + '" />';
            }
            if (jQTSettings.icon4) {
                hairExtensions += '<link rel="apple-touch-icon' + precomposed + '" sizes="114x114" href="' + jQTSettings.icon4 + '" />';
            }
            // Set startup screen
            if (jQTSettings.startupScreen) {
                hairExtensions += '<link rel="apple-touch-startup-image" href="' + jQTSettings.startupScreen + '" />';
            }

            // Set viewport
            if (jQTSettings.fixedViewport) {
                hairExtensions += '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>';
            }

            // Set full-screen
            if (jQTSettings.fullScreen) {
                hairExtensions += '<meta name="apple-mobile-web-app-capable" content="yes" />';
                if (jQTSettings.statusBar) {
                    hairExtensions += '<meta name="apple-mobile-web-app-status-bar-style" content="' + jQTSettings.statusBar + '" />';
                }
            }

            // Attach hair extensions
            if (hairExtensions) {
                $head.prepend(hairExtensions);
            }
        }

        function getAnimation(el) {
            var animation;

            for (var i=0, max=animations.length; i < max; i++) {
                if (el.is(animations[i].selector)) {
                    animation = animations[i];
                    break;
                }
            }

            if (!animation) {
                warn('Animation could not be found. Using ' + jQTSettings.defaultAnimation + '.');
                animation = jQTSettings.defaultAnimation;
            }
            return animation;
        }

        function insertPages(nodes, animation) {

            var targetPage = null;

            // Call dom.createElement element directly instead of relying on $(nodes),
            // to work around: https://github.com/madrobby/zepto/issues/312
            var div = document.createElement('div');
            div.innerHTML = nodes;

            $(div).children().each(function(index, node) {
                var $node = $(this);
                if (!$node.attr('id')) {
                    $node.attr('id', 'page-' + (++newPageCount));
                }

                // Remove any existing instance
                $('#' + $node.attr('id')).remove();

                $body.append($node);
                $body.trigger('pageInserted', {page: $node});

                if ($node.hasClass('current') || !targetPage) {
                    targetPage = $node;
                }
            });
            if (targetPage !== null) {
                goTo(targetPage, animation);
                return targetPage;
            } else {
                return false;
            }
        }

        function orientationChangeHandler() {
            $body.css('minHeight', 1000);
            scrollTo(0,0);
            var bodyHeight = window.innerHeight;
            $body.css('minHeight', bodyHeight);

            orientation = Math.abs(window.orientation) == 90 ? 'landscape' : 'portrait';
            $body.removeClass('portrait landscape').addClass(orientation).trigger('turn', {orientation: orientation});
        }
        function setHash(hash) {
            // Sanitize
            location.hash = '#' + hash.replace(/^#/, '');
        }
        function showPageByHref(href, options) {

            var defaults = {
                data: null,
                method: 'GET',
                animation: null,
                callback: null,
                $referrer: null
            };

            var settings = $.extend({}, defaults, options);

            if (href != '#') {
                $.ajax({
                    url: href,
                    data: settings.data,
                    type: settings.method,
                    success: function (data) {
                        var firstPage = insertPages(data, settings.animation);
                        if (firstPage) {
                            if (settings.method == 'GET' && jQTSettings.cacheGetRequests === true && settings.$referrer) {
                                settings.$referrer.attr('href', '#' + firstPage.attr('id'));
                            }
                            if (settings.callback) {
                                settings.callback(true);
                            }
                        }
                    },
                    error: function (data) {
                        if (settings.$referrer) {
                            settings.$referrer.unselect();
                        }
                        if (settings.callback) {
                            settings.callback(false);
                        }
                    }
                });
            } else if (settings.$referrer) {
                settings.$referrer.unselect();
            }
        }
        function submitHandler(e, callback) {

            $(':focus').trigger('blur');

            e.preventDefault();

            var $form = (typeof(e)==='string') ? $(e).eq(0) : (e.target ? $(e.target) : $(e));

            if ($form.length && $form.is(jQTSettings.formSelector) && $form.attr('action')) {
                showPageByHref($form.attr('action'), {
                    data: $form.serialize(),
                    method: $form.attr('method') || "POST",
                    animation: getAnimation($form),
                    callback: callback
                });
                return false;
            }
            return true;
        }
        function submitParentForm($el) {

            var $form = $el.closest('form');
            if ($form.length === 0) {
                warn('No parent form found');
            } else {
                warn('About to submit parent form');
                $form.trigger('submit');
                return false;
            }
            return true;
        }
        function supportForTransform3d() {

            var head, body, style, div, result;

            head = document.getElementsByTagName('head')[0];
            body = document.body;

            style = document.createElement('style');
            style.textContent = '@media (transform-3d),(-o-transform-3d),(-moz-transform-3d),(-webkit-transform-3d){#jqt-3dtest{height:3px}}';

            div = document.createElement('div');
            div.id = 'jqt-3dtest';

            // Add to the page
            head.appendChild(style);
            body.appendChild(div);

            // Check the result
            result = div.offsetHeight === 3;

            // Clean up
            style.parentNode.removeChild(style);
            div.parentNode.removeChild(div);

            // Pass back result
            warn('Support for 3d transforms: ' + result);
            return result;
        }
        function supportIOS5() {
            var support = false;
            var REGEX_IOS_VERSION = /OS (\d+)(_\d+)* like Mac OS X/i;

            var agentString = window.navigator.userAgent;
            if (REGEX_IOS_VERSION.test(agentString)) {
                support = (REGEX_IOS_VERSION.exec(agentString)[1] >= 5);
            }
            return support;
        }
        function touchStartHandler(e){

            var $el = $(e.target),
                selectors = touchSelectors.join(', ');

            // Find the nearest tappable ancestor
            if (!$el.is(selectors)) {
                $el = $el.closest(selectors);
            }

            // Make sure we have a tappable element
            if ($el.length && $el.prop('href')) {
                $el.addClass('active');
            }

            // Remove our active class if we move
            $el.on($.support.touch ? 'touchmove' : 'mousemove', function(){
                $el.removeClass('active');
            });

            $el.on('touchend', function(){
                $el.unbind('touchmove mousemove');
            });

        }
        function tapHandler(e){

            if (e.isDefaultPrevented()) {
                return true;
            }

            // Grab the target element
            var $el = $(e.target);

            // Find the nearest tappable ancestor
            if (!$el.is(touchSelectors.join(', '))) {
                $el = $el.closest(touchSelectors.join(', '));
            }

            // Make sure we have a tappable element
            if (!$el.length || !$el.prop('href')) {
                warn('Could not find a link related to tapped element');
                return false;
            }

            // Init some vars
            var target = $el.attr('target'),
                hash = $el.prop('hash'),
                href = $el.prop('href'),
                animation = null;

            if ($el.isExternalLink()) {
                $el.unselect();
                return true;

            } else if ($el.is(jQTSettings.backSelector)) {
                // User clicked or tapped a back button
                goBack(hash);

            } else if ($el.is(jQTSettings.submitSelector)) {
                // User clicked or tapped a submit element
                submitParentForm($el);

            } else if (target === '_webapp') {
                // User clicked or tapped an internal link, fullscreen mode
                window.location = href;
                return false;

            } else if (href === '#') {
                // Allow tap on item with no href
                $el.unselect();
                return true;
            } else {
                animation = getAnimation($el);

                if (hash && hash !== '#') {
                    // Internal href
                    $el.addClass('active');
                    goTo($(hash).data('referrer', $el), animation, $el.hasClass('reverse'));
                    return false;
                } else {
                    // External href
                    $el.addClass('loading active');
                    showPageByHref($el.prop('href'), {
                        animation: animation,
                        callback: function() {
                            $el.removeClass('loading');
                            setTimeout($.fn.unselect, 250, $el);
                        },
                        $referrer: $el
                    });
                    return false;
                }
            }
        }

        // Get the party started
        init(options);

        // Document ready stuff
        $(document).ready(function RUMBLE() {
            // Store some properties in a support object
            if (!$.support) $.support = {};
            $.support.animationEvents = (typeof window.WebKitAnimationEvent != 'undefined');
            $.support.touch = (typeof window.TouchEvent != 'undefined') && (window.navigator.userAgent.indexOf('Mobile') > -1) && jQTSettings.useFastTouch;
            $.support.transform3d = supportForTransform3d();
            $.support.ios5 = supportIOS5();

            if (!$.support.touch) {
                warn('This device does not support touch interaction, or it has been deactivated by the developer. Some features might be unavailable.');
            }
            if (!$.support.transform3d) {
                warn('This device does not support 3d animation. 2d animations will be used instead.');
            }

            // Define public jQuery functions
            $.fn.isExternalLink = function() {
                var $el = $(this);
                return ($el.attr('target') == '_blank' || $el.attr('rel') == 'external' || $el.is('a[href^="http://maps.google.com"], a[href^="mailto:"], a[href^="tel:"], a[href^="javascript:"], a[href*="youtube.com/v"], a[href*="youtube.com/watch"]'));
            };
            $.fn.makeActive = function() {
                return $(this).addClass('active');
            };
            $.fn.unselect = function(obj) {
                if (obj) {
                    obj.removeClass('active');
                } else {
                    $('.active').removeClass('active');
                }
            };

            // Add extensions
            for (var i=0, max=extensions.length; i < max; i++) {
                var fn = extensions[i];
                if ($.isFunction(fn)) {
                    $.extend(publicObj, fn(publicObj));
                }
            }

            // Add animations
            for (var j=0, max_anims=defaults.animations.length; j < max_anims; j++) {
                var animation = defaults.animations[j];
                if(jQTSettings[animation.name + 'Selector'] !== undefined){
                    animation.selector = jQTSettings[animation.name + 'Selector'];
                }
                addAnimation(animation);
            }

            // Create an array of stuff that needs touch event handling
            touchSelectors.push(jQTSettings.touchSelector);
            touchSelectors.push(jQTSettings.backSelector);
            touchSelectors.push(jQTSettings.submitSelector);
            $(touchSelectors.join(', ')).css('-webkit-touch-callout', 'none');

            // Make sure we have a jqt element
            $body = $('#jqt');
            var anatomy_lessons = [];

            if ($body.length === 0) {
                warn('Could not find an element with the id "jqt", so the body id has been set to "jqt". If you are having any problems, wrapping your panels in a div with the id "jqt" might help.');
                $body = $(document.body).attr('id', 'jqt');
            }

            // Add some specific css if need be
            if ($.support.transform3d) {
                anatomy_lessons.push('supports3d');
            }
            if ($.support.ios5 && jQTSettings.useTouchScroll) {
                anatomy_lessons.push('touchscroll');
            }

            if (jQTSettings.fullScreenClass && window.navigator.standalone === true) {
                anatomy_lessons.push(jQTSettings.fullScreenClass, jQTSettings.statusBar);
            }

            // Bind events

            $body
                .addClass(anatomy_lessons.join(' '))
                .bind('click', clickHandler)
                .bind('orientationchange', orientationChangeHandler)
                .bind('submit', submitHandler)
                .bind('tap', tapHandler)
                .bind( $.support.touch ? 'touchstart' : 'mousedown', touchStartHandler)
                .trigger('orientationchange');

            $(window).bind('hashchange', hashChangeHandler);

            var startHash = location.hash;

            // Determine what the initial view should be
            if ($('#jqt > .current').length === 0) {
                $currentPage = $('#jqt > *:first-child').addClass('current');
            } else {
                $currentPage = $('#jqt > .current');
            }

            setHash($currentPage.attr('id'));
            addPageToHistory($currentPage);

            if ($(startHash).length === 1) {
                goTo(startHash);
            }
        });

        // Expose public methods and properties
        publicObj = {
            addAnimation: addAnimation,
            animations: animations,
            getOrientation: getOrientation,
            goBack: goBack,
            insertPages: insertPages,
            goTo: goTo,
            history: history,
            settings: jQTSettings,
            submitForm: submitHandler
        };
        return publicObj;
    };

    $.jQTouch.prototype.extensions = [];

            // Extensions directly manipulate the jQTouch object, before it's initialized.
            $.jQTouch.addExtension = function(extension) {
        $.jQTouch.prototype.extensions.push(extension);
            };
})(); // Double closure, ALL THE WAY ACROSS THE SKY
;
/*

            _/    _/_/    _/_/_/_/_/                              _/
               _/    _/      _/      _/_/    _/    _/    _/_/_/  _/_/_/
          _/  _/  _/_/      _/    _/    _/  _/    _/  _/        _/    _/
         _/  _/    _/      _/    _/    _/  _/    _/  _/        _/    _/
        _/    _/_/  _/    _/      _/_/      _/_/_/    _/_/_/  _/    _/
       _/
    _/

    Created by David Kaneda <http://www.davidkaneda.com>
    Maintained by Thomas Yip <http://beedesk.com/>
    Sponsored by Sencha Labs <http://www.sencha.com/>
    Special thanks to Jonathan Stark <http://www.jonathanstark.com/>

    Documentation and issue tracking on GitHub <http://github.com/senchalabs/jQTouch/>

    (c) 2009-2011 Sencha Labs
    jQTouch may be freely distributed under the MIT license.

*/


(function($){
  var touch = {}, touchTimeout;

  function parentIfText(node){
    return 'tagName' in node ? node : node.parentNode;
  }

  function swipeDirection(x1, x2, y1, y2){
    var xDelta = Math.abs(x1 - x2), yDelta = Math.abs(y1 - y2);
    if (xDelta >= yDelta) {
      return (x1 - x2 > 0 ? 'Left' : 'Right');
    } else {
      return (y1 - y2 > 0 ? 'Up' : 'Down');
    }
  }

  var longTapDelay = 750;
  function longTap(){
    if (touch.last && (Date.now() - touch.last >= longTapDelay)) {
      touch.el.trigger('longTap');
      touch = {};
    }
  }

  $(document).ready(function(){
    $(document.body).bind('touchstart', function(e){
      var ToucH = e.originalEvent.touches[0] || e.changedTouches[0];
      var now = Date.now(), delta = now - (touch.last || now);
      touch.el = $(parentIfText(ToucH.target));
      touchTimeout && clearTimeout(touchTimeout);
      touch.x1 =ToucH.pageX;
      touch.y1 = ToucH.pageY;
      if (delta > 0 && delta <= 250) touch.isDoubleTap = true;
      touch.last = now;
      setTimeout(longTap, longTapDelay);
    }).bind('touchmove', function(e){
      var ToucH = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]
      touch.x2 = ToucH.pageX;
      touch.y2 = ToucH.pageY;
    }).bind('touchend', function(e){
      if (touch.isDoubleTap) {
        touch.el.trigger('doubleTap');
        touch = {};
      } else if (touch.x2 > 0 || touch.y2 > 0) {
        (Math.abs(touch.x1 - touch.x2) > 30 || Math.abs(touch.y1 - touch.y2) > 30)  &&
          touch.el.trigger('swipe') &&
          touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)));
        touch.x1 = touch.x2 = touch.y1 = touch.y2 = touch.last = 0;
      } else if ('last' in touch) {
        touch.el.trigger('tap');

        touchTimeout = setTimeout(function(){
          touchTimeout = null;
          touch.el.trigger('singleTap');
          touch = {};
        }, 250);
      }
    }).bind('touchcancel', function(){ touch = {} });
  });

  ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(m){
    $.fn[m] = function(callback){ return this.bind(m, callback) }
  });
})($);
/* Javascript plotting library for jQuery, version 0.8.0.

Copyright (c) 2007-2013 IOLA and Ole Laursen.
Licensed under the MIT license.

*/

// first an inline dependency, jquery.colorhelpers.js, we inline it here
// for convenience

/* Plugin for jQuery for working with colors.
 *
 * Version 1.1.
 *
 * Inspiration from jQuery color animation plugin by John Resig.
 *
 * Released under the MIT license by Ole Laursen, October 2009.
 *
 * Examples:
 *
 *   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()
 *   var c = $.color.extract($("#mydiv"), 'background-color');
 *   console.log(c.r, c.g, c.b, c.a);
 *   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"
 *
 * Note that .scale() and .add() return the same modified object
 * instead of making a new one.
 *
 * V. 1.1: Fix error handling so e.g. parsing an empty string does
 * produce a color rather than just crashing.
 */

(function(B){B.color={};B.color.make=function(F,E,C,D){var G={};G.r=F||0;G.g=E||0;G.b=C||0;G.a=D!=null?D:1;G.add=function(J,I){for(var H=0;H<J.length;++H){G[J.charAt(H)]+=I}return G.normalize()};G.scale=function(J,I){for(var H=0;H<J.length;++H){G[J.charAt(H)]*=I}return G.normalize()};G.toString=function(){if(G.a>=1){return"rgb("+[G.r,G.g,G.b].join(",")+")"}else{return"rgba("+[G.r,G.g,G.b,G.a].join(",")+")"}};G.normalize=function(){function H(J,K,I){return K<J?J:(K>I?I:K)}G.r=H(0,parseInt(G.r),255);G.g=H(0,parseInt(G.g),255);G.b=H(0,parseInt(G.b),255);G.a=H(0,G.a,1);return G};G.clone=function(){return B.color.make(G.r,G.b,G.g,G.a)};return G.normalize()};B.color.extract=function(D,C){var E;do{E=D.css(C).toLowerCase();if(E!=""&&E!="transparent"){break}D=D.parent()}while(!B.nodeName(D.get(0),"body"));if(E=="rgba(0, 0, 0, 0)"){E="transparent"}return B.color.parse(E)};B.color.parse=function(F){var E,C=B.color.make;if(E=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(F)){return C(parseInt(E[1],10),parseInt(E[2],10),parseInt(E[3],10))}if(E=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(F)){return C(parseInt(E[1],10),parseInt(E[2],10),parseInt(E[3],10),parseFloat(E[4]))}if(E=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(F)){return C(parseFloat(E[1])*2.55,parseFloat(E[2])*2.55,parseFloat(E[3])*2.55)}if(E=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(F)){return C(parseFloat(E[1])*2.55,parseFloat(E[2])*2.55,parseFloat(E[3])*2.55,parseFloat(E[4]))}if(E=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(F)){return C(parseInt(E[1],16),parseInt(E[2],16),parseInt(E[3],16))}if(E=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(F)){return C(parseInt(E[1]+E[1],16),parseInt(E[2]+E[2],16),parseInt(E[3]+E[3],16))}var D=B.trim(F).toLowerCase();if(D=="transparent"){return C(255,255,255,0)}else{E=A[D]||[0,0,0];return C(E[0],E[1],E[2])}};var A={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);

// the actual Flot code
(function($) {

	// Cache the prototype hasOwnProperty for faster access

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	///////////////////////////////////////////////////////////////////////////
	// The Canvas object is a wrapper around an HTML5 <canvas> tag.
	//
	// @constructor
	// @param {string} cls List of classes to apply to the canvas.
	// @param {element} container Element onto which to append the canvas.
	//
	// Requiring a container is a little iffy, but unfortunately canvas
	// operations don't work unless the canvas is attached to the DOM.

	function Canvas(cls, container) {

		var element = container.children("." + cls)[0];

		if (element == null) {

			element = document.createElement("canvas");
			element.className = cls;

			$(element).css({ direction: "ltr", position: "absolute", left: 0, top: 0 })
				.appendTo(container);

			// If HTML5 Canvas isn't available, fall back to [Ex|Flash]canvas

			if (!element.getContext) {
				if (window.G_vmlCanvasManager) {
					element = window.G_vmlCanvasManager.initElement(element);
				} else {
					throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
				}
			}
		}

		this.element = element;

		var context = this.context = element.getContext("2d");

		// Determine the screen's ratio of physical to device-independent
		// pixels.  This is the ratio between the canvas width that the browser
		// advertises and the number of pixels actually present in that space.

		// The iPhone 4, for example, has a device-independent width of 320px,
		// but its screen is actually 640px wide.  It therefore has a pixel
		// ratio of 2, while most normal devices have a ratio of 1.

		var devicePixelRatio = window.devicePixelRatio || 1,
			backingStoreRatio =
				context.webkitBackingStorePixelRatio ||
				context.mozBackingStorePixelRatio ||
				context.msBackingStorePixelRatio ||
				context.oBackingStorePixelRatio ||
				context.backingStorePixelRatio || 1;

		this.pixelRatio = devicePixelRatio / backingStoreRatio;

		// Size the canvas to match the internal dimensions of its container

		this.resize(container.width(), container.height());

		// Collection of HTML div layers for text overlaid onto the canvas

		this.textContainer = null;
		this.text = {};

		// Cache of text fragments and metrics, so we can avoid expensively
		// re-calculating them when the plot is re-rendered in a loop.

		this._textCache = {};
	}

	// Resizes the canvas to the given dimensions.
	//
	// @param {number} width New width of the canvas, in pixels.
	// @param {number} width New height of the canvas, in pixels.

	Canvas.prototype.resize = function(width, height) {

		if (width <= 0 || height <= 0) {
			throw new Error("Invalid dimensions for plot, width = " + width + ", height = " + height);
		}

		var element = this.element,
			context = this.context,
			pixelRatio = this.pixelRatio;

		// Resize the canvas, increasing its density based on the display's
		// pixel ratio; basically giving it more pixels without increasing the
		// size of its element, to take advantage of the fact that retina
		// displays have that many more pixels in the same advertised space.

		// Resizing should reset the state (excanvas seems to be buggy though)

		if (this.width != width) {
			element.width = width * pixelRatio;
			element.style.width = width + "px";
			this.width = width;
		}

		if (this.height != height) {
			element.height = height * pixelRatio;
			element.style.height = height + "px";
			this.height = height;
		}

		// Save the context, so we can reset in case we get replotted.  The
		// restore ensure that we're really back at the initial state, and
		// should be safe even if we haven't saved the initial state yet.

		context.restore();
		context.save();

		// Scale the coordinate space to match the display density; so even though we
		// may have twice as many pixels, we still want lines and other drawing to
		// appear at the same size; the extra pixels will just make them crisper.

		context.scale(pixelRatio, pixelRatio);
	};

	// Clears the entire canvas area, not including any overlaid HTML text

	Canvas.prototype.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height);
	};

	// Finishes rendering the canvas, including managing the text overlay.

	Canvas.prototype.render = function() {

		var cache = this._textCache;

		// For each text layer, add elements marked as active that haven't
		// already been rendered, and remove those that are no longer active.

		for (var layerKey in cache) {
			if (hasOwnProperty.call(cache, layerKey)) {

				var layer = this.getTextLayer(layerKey),
					layerCache = cache[layerKey];

				layer.hide();

				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey];
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {
								var info = styleCache[key];
								if (info.active) {
									if (!info.rendered) {
										layer.append(info.element);
										info.rendered = true;
									}
								} else {
									delete styleCache[key];
									if (info.rendered) {
										info.element.detach();
									}
								}
							}
						}
					}
				}

				layer.show();
			}
		}
	};

	// Creates (if necessary) and returns the text overlay container.
	//
	// @param {string} classes String of space-separated CSS classes used to
	//     uniquely identify the text layer.
	// @return {object} The jQuery-wrapped text-layer div.

	Canvas.prototype.getTextLayer = function(classes) {

		var layer = this.text[classes];

		// Create the text layer if it doesn't exist

		if (layer == null) {

			// Create the text layer container, if it doesn't exist

			if (this.textContainer == null) {
				this.textContainer = $("<div class='flot-text'></div>")
					.css({
						position: "absolute",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						'font-size': "smaller",
						color: "#545454"
					})
					.insertAfter(this.element);
			}

			layer = this.text[classes] = $("<div></div>")
				.addClass(classes)
				.css({
					position: "absolute",
					top: 0,
					left: 0,
					bottom: 0,
					right: 0
				})
				.appendTo(this.textContainer);
		}

		return layer;
	};

	// Creates (if necessary) and returns a text info object.
	//
	// The object looks like this:
	//
	// {
	//     width: Width of the text's wrapper div.
	//     height: Height of the text's wrapper div.
	//     active: Flag indicating whether the text should be visible.
	//     rendered: Flag indicating whether the text is currently visible.
	//     element: The jQuery-wrapped HTML div containing the text.
	// }
	//
	// Canvas maintains a cache of recently-used text info objects; getTextInfo
	// either returns the cached element or creates a new entry.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {string} text Text string to retrieve info for.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @return {object} a text info object.

	Canvas.prototype.getTextInfo = function(layer, text, font, angle) {

		var textStyle, layerCache, styleCache, info;

		// Cast the value to a string, in case we were given a number or such

		text = "" + text;

		// If the font is a font-spec object, generate a CSS font definition

		if (typeof font === "object") {
			textStyle = font.style + " " + font.variant + " " + font.weight + " " + font.size + "px/" + font.lineHeight + "px " + font.family;
		} else {
			textStyle = font;
		}

		// Retrieve (or create) the cache for the text's layer and styles

		layerCache = this._textCache[layer];

		if (layerCache == null) {
			layerCache = this._textCache[layer] = {};
		}

		styleCache = layerCache[textStyle];

		if (styleCache == null) {
			styleCache = layerCache[textStyle] = {};
		}

		info = styleCache[text];

		// If we can't find a matching element in our cache, create a new one

		if (info == null) {

			var element = $("<div></div>").html(text)
				.css({
					position: "absolute",
					top: -9999
				})
				.appendTo(this.getTextLayer(layer));

			if (typeof font === "object") {
				element.css({
					font: textStyle,
					color: font.color
				});
			} else if (typeof font === "string") {
				element.addClass(font);
			}

			info = styleCache[text] = {
				active: false,
				rendered: false,
				element: element,
				width: element.outerWidth(true),
				height: element.outerHeight(true)
			};

			element.detach();
		}

		return info;
	};

	// Adds a text string to the canvas text overlay.
	//
	// The text isn't drawn immediately; it is marked as rendering, which will
	// result in its addition to the canvas on the next render pass.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {number} x X coordinate at which to draw the text.
	// @param {number} y Y coordinate at which to draw the text.
	// @param {string} text Text string to draw.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @param {string=} halign Horizontal alignment of the text; either "left",
	//     "center" or "right".
	// @param {string=} valign Vertical alignment of the text; either "top",
	//     "middle" or "bottom".

	Canvas.prototype.addText = function(layer, x, y, text, font, angle, halign, valign) {

		var info = this.getTextInfo(layer, text, font, angle);

		// Mark the div for inclusion in the next render pass

		info.active = true;

		// Tweak the div's position to match the text's alignment

		if (halign == "center") {
			x -= info.width / 2;
		} else if (halign == "right") {
			x -= info.width;
		}

		if (valign == "middle") {
			y -= info.height / 2;
		} else if (valign == "bottom") {
			y -= info.height;
		}

		// Move the element to its final position within the container

		info.element.css({
			top: Math.round(y),
			left: Math.round(x)
		});
	};

	// Removes one or more text strings from the canvas text overlay.
	//
	// If no parameters are given, all text within the layer is removed.
	// The text is not actually removed; it is simply marked as inactive, which
	// will result in its removal on the next render pass.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {string} text Text string to remove.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which the text is rotated, in degrees.
	//     Angle is currently unused, it will be implemented in the future.

	Canvas.prototype.removeText = function(layer, text, font, angle) {
		if (text == null) {
			var layerCache = this._textCache[layer];
			if (layerCache != null) {
				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey]
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {
								styleCache[key].active = false;
							}
						}
					}
				}
			}
		} else {
			this.getTextInfo(layer, text, font, angle).active = false;
		}
	};

	///////////////////////////////////////////////////////////////////////////
	// The top-level container for the entire plot.

    function Plot(placeholder, data_, options_, plugins) {
        // data is on the form:
        //   [ series1, series2 ... ]
        // where series is either just the data as [ [x1, y1], [x2, y2], ... ]
        // or { data: [ [x1, y1], [x2, y2], ... ], label: "some label", ... }

        var series = [],
            options = {
                // the color theme used for graphs
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: true,
                    noColumns: 1, // number of colums in legend table
                    labelFormatter: null, // fn: string -> string
                    labelBoxBorderColor: "#ccc", // border color for the little label boxes
                    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position: "ne", // position of default legend container within plot
                    margin: 5, // distance from grid edge to default legend container within plot
                    backgroundColor: null, // null means auto-detect
                    backgroundOpacity: 0.85, // set to 0 to avoid background
                    sorted: null    // default to no legend sorting
                },
                xaxis: {
                    show: null, // null = auto-detect, true = always, false = never
                    position: "bottom", // or "top"
                    mode: null, // null or "time"
                    font: null, // null (derived from CSS in placeholder) or object like { size: 11, lineHeight: 13, style: "italic", weight: "bold", family: "sans-serif", variant: "small-caps" }
                    color: null, // base color, labels, ticks
                    tickColor: null, // possibly different color of ticks, e.g. "rgba(0,0,0,0.15)"
                    transform: null, // null or f: number -> number to transform axis
                    inverseTransform: null, // if transform is set, this should be the inverse function
                    min: null, // min. value to show, null means set automatically
                    max: null, // max. value to show, null means set automatically
                    autoscaleMargin: null, // margin in % to add if auto-setting min/max
                    ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
                    tickFormatter: null, // fn: number -> string
                    labelWidth: null, // size of tick labels in pixels
                    labelHeight: null,
                    reserveSpace: null, // whether to reserve space even if axis isn't shown
                    tickLength: null, // size in pixels of ticks, or "full" for whole line
                    alignTicksWithAxis: null, // axis number or null for no sync
                    tickDecimals: null, // no. of decimals, null means auto
                    tickSize: null, // number or [number, "unit"]
                    minTickSize: null // number or [number, "unit"]
                },
                yaxis: {
                    autoscaleMargin: 0.02,
                    position: "left" // or "right"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: false,
                        radius: 3,
                        lineWidth: 2, // in pixels
                        fill: true,
                        fillColor: "#ffffff",
                        symbol: "circle" // or callback
                    },
                    lines: {
                        // we don't put in show: false so we can see
                        // whether lines were actively disabled
                        lineWidth: 2, // in pixels
                        fill: false,
                        fillColor: null,
                        steps: false
                        // Omit 'zero', so we can later default its value to
                        // match that of the 'fill' option.
                    },
                    bars: {
                        show: false,
                        lineWidth: 2, // in pixels
                        barWidth: 1, // in units of the x axis
                        fill: true,
                        fillColor: null,
                        align: "left", // "left", "right", or "center"
                        horizontal: false,
                        zero: true
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: true,
                    aboveData: false,
                    color: "#545454", // primary color used for outline and labels
                    backgroundColor: null, // null for transparent, else color
                    borderColor: null, // set if different from the grid color
                    tickColor: null, // color for the ticks, e.g. "rgba(0,0,0,0.15)"
                    margin: 0, // distance from the canvas edge to the grid
                    labelMargin: 5, // in pixels
                    axisMargin: 8, // in pixels
                    borderWidth: 2, // in pixels
                    minBorderMargin: null, // in pixels, null means taken from points radius
                    markings: null, // array of ranges or fn: axes -> array of ranges
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    // interactive stuff
                    clickable: false,
                    hoverable: false,
                    autoHighlight: true, // highlight in case mouse is near
                    mouseActiveRadius: 10 // how far the mouse can be away to activate an item
                },
                interaction: {
                    redrawOverlayInterval: 1000/60 // time between updates, -1 means in same flow
                },
                hooks: {}
            },
        surface = null,     // the canvas for the plot itself
        overlay = null,     // canvas for interactive stuff on top of plot
        eventHolder = null, // jQuery object that events should be bound to
        ctx = null, octx = null,
        xaxes = [], yaxes = [],
        plotOffset = { left: 0, right: 0, top: 0, bottom: 0},
        plotWidth = 0, plotHeight = 0,
        hooks = {
            processOptions: [],
            processRawData: [],
            processDatapoints: [],
            processOffset: [],
            drawBackground: [],
            drawSeries: [],
            draw: [],
            bindEvents: [],
            drawOverlay: [],
            shutdown: []
        },
        plot = this;

        // public functions
        plot.setData = setData;
        plot.setupGrid = setupGrid;
        plot.draw = draw;
        plot.getPlaceholder = function() { return placeholder; };
        plot.getCanvas = function() { return surface.element; };
        plot.getPlotOffset = function() { return plotOffset; };
        plot.width = function () { return plotWidth; };
        plot.height = function () { return plotHeight; };
        plot.offset = function () {
            var o = eventHolder.offset();
            o.left += plotOffset.left;
            o.top += plotOffset.top;
            return o;
        };
        plot.getData = function () { return series; };
        plot.getAxes = function () {
            var res = {}, i;
            $.each(xaxes.concat(yaxes), function (_, axis) {
                if (axis)
                    res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis;
            });
            return res;
        };
        plot.getXAxes = function () { return xaxes; };
        plot.getYAxes = function () { return yaxes; };
        plot.c2p = canvasToAxisCoords;
        plot.p2c = axisToCanvasCoords;
        plot.getOptions = function () { return options; };
        plot.highlight = highlight;
        plot.unhighlight = unhighlight;
        plot.triggerRedrawOverlay = triggerRedrawOverlay;
        plot.pointOffset = function(point) {
            return {
                left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left, 10),
                top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top, 10)
            };
        };
        plot.shutdown = shutdown;
        plot.resize = function () {
        	var width = placeholder.width(),
        		height = placeholder.height();
            surface.resize(width, height);
            overlay.resize(width, height);
        };

        // public attributes
        plot.hooks = hooks;

        // initialize
        initPlugins(plot);
        parseOptions(options_);
        setupCanvases();
        setData(data_);
        setupGrid();
        draw();
        bindEvents();


        function executeHooks(hook, args) {
            args = [plot].concat(args);
            for (var i = 0; i < hook.length; ++i)
                hook[i].apply(this, args);
        }

        function initPlugins() {

            // References to key classes, allowing plugins to modify them

            var classes = {
                Canvas: Canvas
            };

            for (var i = 0; i < plugins.length; ++i) {
                var p = plugins[i];
                p.init(plot, classes);
                if (p.options)
                    $.extend(true, options, p.options);
            }
        }

        function parseOptions(opts) {

            $.extend(true, options, opts);

            if (options.xaxis.color == null)
                options.xaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();
            if (options.yaxis.color == null)
                options.yaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            if (options.xaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.xaxis.tickColor = options.grid.tickColor || options.xaxis.color;
            if (options.yaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.yaxis.tickColor = options.grid.tickColor || options.yaxis.color;

            if (options.grid.borderColor == null)
                options.grid.borderColor = options.grid.color;
            if (options.grid.tickColor == null)
                options.grid.tickColor = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            // Fill in defaults for axis options, including any unspecified
            // font-spec fields, if a font-spec was provided.

            // If no x/y axis options were provided, create one of each anyway,
            // since the rest of the code assumes that they exist.

            var i, axisOptions, axisCount,
                fontDefaults = {
                    style: placeholder.css("font-style"),
                    size: Math.round(0.8 * (+placeholder.css("font-size").replace("px", "") || 13)),
                    variant: placeholder.css("font-variant"),
                    weight: placeholder.css("font-weight"),
                    family: placeholder.css("font-family")
                };

            fontDefaults.lineHeight = fontDefaults.size * 1.15;

            axisCount = options.xaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.xaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.xaxis, axisOptions);
                options.xaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                }
            }

            axisCount = options.yaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.yaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.yaxis, axisOptions);
                options.yaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                }
            }

            // backwards compatibility, to be removed in future
            if (options.xaxis.noTicks && options.xaxis.ticks == null)
                options.xaxis.ticks = options.xaxis.noTicks;
            if (options.yaxis.noTicks && options.yaxis.ticks == null)
                options.yaxis.ticks = options.yaxis.noTicks;
            if (options.x2axis) {
                options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);
                options.xaxes[1].position = "top";
            }
            if (options.y2axis) {
                options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);
                options.yaxes[1].position = "right";
            }
            if (options.grid.coloredAreas)
                options.grid.markings = options.grid.coloredAreas;
            if (options.grid.coloredAreasColor)
                options.grid.markingsColor = options.grid.coloredAreasColor;
            if (options.lines)
                $.extend(true, options.series.lines, options.lines);
            if (options.points)
                $.extend(true, options.series.points, options.points);
            if (options.bars)
                $.extend(true, options.series.bars, options.bars);
            if (options.shadowSize != null)
                options.series.shadowSize = options.shadowSize;
            if (options.highlightColor != null)
                options.series.highlightColor = options.highlightColor;

            // save options on axes for future reference
            for (i = 0; i < options.xaxes.length; ++i)
                getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];
            for (i = 0; i < options.yaxes.length; ++i)
                getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];

            // add hooks from options
            for (var n in hooks)
                if (options.hooks[n] && options.hooks[n].length)
                    hooks[n] = hooks[n].concat(options.hooks[n]);

            executeHooks(hooks.processOptions, [options]);
        }

        function setData(d) {
            series = parseData(d);
            fillInSeriesOptions();
            processData();
        }

        function parseData(d) {
            var res = [];
            for (var i = 0; i < d.length; ++i) {
                var s = $.extend(true, {}, options.series);

                if (d[i].data != null) {
                    s.data = d[i].data; // move the data instead of deep-copy
                    delete d[i].data;

                    $.extend(true, s, d[i]);

                    d[i].data = s.data;
                }
                else
                    s.data = d[i];
                res.push(s);
            }

            return res;
        }

        function axisNumber(obj, coord) {
            var a = obj[coord + "axis"];
            if (typeof a == "object") // if we got a real axis, extract number
                a = a.n;
            if (typeof a != "number")
                a = 1; // default to first axis
            return a;
        }

        function allAxes() {
            // return flat array without annoying null entries
            return $.grep(xaxes.concat(yaxes), function (a) { return a; });
        }

        function canvasToAxisCoords(pos) {
            // return an object with x/y corresponding to all used axes
            var res = {}, i, axis;
            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used)
                    res["x" + axis.n] = axis.c2p(pos.left);
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used)
                    res["y" + axis.n] = axis.c2p(pos.top);
            }

            if (res.x1 !== undefined)
                res.x = res.x1;
            if (res.y1 !== undefined)
                res.y = res.y1;

            return res;
        }

        function axisToCanvasCoords(pos) {
            // get canvas coords from the first pair of x/y found in pos
            var res = {}, i, axis, key;

            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used) {
                    key = "x" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "x";

                    if (pos[key] != null) {
                        res.left = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used) {
                    key = "y" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "y";

                    if (pos[key] != null) {
                        res.top = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            return res;
        }

        function getOrCreateAxis(axes, number) {
            if (!axes[number - 1])
                axes[number - 1] = {
                    n: number, // save the number for future reference
                    direction: axes == xaxes ? "x" : "y",
                    options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)
                };

            return axes[number - 1];
        }

        function fillInSeriesOptions() {

            var neededColors = series.length, maxIndex = -1, i;

            // Subtract the number of series that already have fixed colors or
            // color indexes from the number that we still need to generate.

            for (i = 0; i < series.length; ++i) {
                var sc = series[i].color;
                if (sc != null) {
                    neededColors--;
                    if (typeof sc == "number" && sc > maxIndex) {
                        maxIndex = sc;
                    }
                }
            }

            // If any of the series have fixed color indexes, then we need to
            // generate at least as many colors as the highest index.

            if (neededColors <= maxIndex) {
                neededColors = maxIndex + 1;
            }

            // Generate all the colors, using first the option colors and then
            // variations on those colors once they're exhausted.

            var c, colors = [], colorPool = options.colors,
                colorPoolSize = colorPool.length, variation = 0;

            for (i = 0; i < neededColors; i++) {

                c = $.color.parse(colorPool[i % colorPoolSize] || "#666");

                // Each time we exhaust the colors in the pool we adjust
                // a scaling factor used to produce more variations on
                // those colors. The factor alternates negative/positive
                // to produce lighter/darker colors.

                // Reset the variation after every few cycles, or else
                // it will end up producing only white or black colors.

                if (i % colorPoolSize == 0 && i) {
                    if (variation >= 0) {
                        if (variation < 0.5) {
                            variation = -variation - 0.2;
                        } else variation = 0;
                    } else variation = -variation;
                }

                colors[i] = c.scale('rgb', 1 + variation);
            }

            // Finalize the series options, filling in their colors

            var colori = 0, s;
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                // assign colors
                if (s.color == null) {
                    s.color = colors[colori].toString();
                    ++colori;
                }
                else if (typeof s.color == "number")
                    s.color = colors[s.color].toString();

                // turn on lines automatically in case nothing is set
                if (s.lines.show == null) {
                    var v, show = true;
                    for (v in s)
                        if (s[v] && s[v].show) {
                            show = false;
                            break;
                        }
                    if (show)
                        s.lines.show = true;
                }

                // If nothing was provided for lines.zero, default it to match
                // lines.fill, since areas by default should extend to zero.

                if (s.lines.zero == null) {
                    s.lines.zero = !!s.lines.fill;
                }

                // setup axes
                s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));
                s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"));
            }
        }

        function processData() {
            var topSentry = Number.POSITIVE_INFINITY,
                bottomSentry = Number.NEGATIVE_INFINITY,
                fakeInfinity = Number.MAX_VALUE,
                i, j, k, m, length,
                s, points, ps, x, y, axis, val, f, p,
                data, format;

            function updateAxis(axis, min, max) {
                if (min < axis.datamin && min != -fakeInfinity)
                    axis.datamin = min;
                if (max > axis.datamax && max != fakeInfinity)
                    axis.datamax = max;
            }

            $.each(allAxes(), function (_, axis) {
                // init axis
                axis.datamin = topSentry;
                axis.datamax = bottomSentry;
                axis.used = false;
            });

            for (i = 0; i < series.length; ++i) {
                s = series[i];
                s.datapoints = { points: [] };

                executeHooks(hooks.processRawData, [ s, s.data, s.datapoints ]);
            }

            // first pass: clean and copy data
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                data = s.data;
                format = s.datapoints.format;

                if (!format) {
                    format = [];
                    // find out how to copy
                    format.push({ x: true, number: true, required: true });
                    format.push({ y: true, number: true, required: true });

                    if (s.bars.show || (s.lines.show && s.lines.fill)) {
                        var autoscale = !!((s.bars.show && s.bars.zero) || (s.lines.show && s.lines.zero));
                        format.push({ y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale });
                        if (s.bars.horizontal) {
                            delete format[format.length - 1].y;
                            format[format.length - 1].x = true;
                        }
                    }

                    s.datapoints.format = format;
                }

                if (s.datapoints.pointsize != null)
                    continue; // already filled in

                s.datapoints.pointsize = format.length;

                ps = s.datapoints.pointsize;
                points = s.datapoints.points;

                var insertSteps = s.lines.show && s.lines.steps;
                s.xaxis.used = s.yaxis.used = true;

                for (j = k = 0; j < data.length; ++j, k += ps) {
                    p = data[j];

                    var nullify = p == null;
                    if (!nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = p[m];
                            f = format[m];

                            if (f) {
                                if (f.number && val != null) {
                                    val = +val; // convert to number
                                    if (isNaN(val))
                                        val = null;
                                    else if (val == Infinity)
                                        val = fakeInfinity;
                                    else if (val == -Infinity)
                                        val = -fakeInfinity;
                                }

                                if (val == null) {
                                    if (f.required)
                                        nullify = true;

                                    if (f.defaultValue != null)
                                        val = f.defaultValue;
                                }
                            }

                            points[k + m] = val;
                        }
                    }

                    if (nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = points[k + m];
                            if (val != null) {
                                f = format[m];
                                // extract min/max info
                                if (f.x)
                                    updateAxis(s.xaxis, val, val);
                                if (f.y)
                                    updateAxis(s.yaxis, val, val);
                            }
                            points[k + m] = null;
                        }
                    }
                    else {
                        // a little bit of line specific stuff that
                        // perhaps shouldn't be here, but lacking
                        // better means...
                        if (insertSteps && k > 0
                            && points[k - ps] != null
                            && points[k - ps] != points[k]
                            && points[k - ps + 1] != points[k + 1]) {
                            // copy the point to make room for a middle point
                            for (m = 0; m < ps; ++m)
                                points[k + ps + m] = points[k + m];

                            // middle point has same y
                            points[k + 1] = points[k - ps + 1];

                            // we've added a point, better reflect that
                            k += ps;
                        }
                    }
                }
            }

            // give the hooks a chance to run
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                executeHooks(hooks.processDatapoints, [ s, s.datapoints]);
            }

            // second pass: find datamax/datamin for auto-scaling
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                points = s.datapoints.points,
                ps = s.datapoints.pointsize;
                format = s.datapoints.format;

                var xmin = topSentry, ymin = topSentry,
                    xmax = bottomSentry, ymax = bottomSentry;

                for (j = 0; j < points.length; j += ps) {
                    if (points[j] == null)
                        continue;

                    for (m = 0; m < ps; ++m) {
                        val = points[j + m];
                        f = format[m];
                        if (!f || f.autoscale === false || val == fakeInfinity || val == -fakeInfinity)
                            continue;

                        if (f.x) {
                            if (val < xmin)
                                xmin = val;
                            if (val > xmax)
                                xmax = val;
                        }
                        if (f.y) {
                            if (val < ymin)
                                ymin = val;
                            if (val > ymax)
                                ymax = val;
                        }
                    }
                }

                if (s.bars.show) {
                    // make sure we got room for the bar on the dancing floor
                    var delta;

                    switch (s.bars.align) {
                        case "left":
                            delta = 0;
                            break;
                        case "right":
                            delta = -s.bars.barWidth;
                            break;
                        case "center":
                            delta = -s.bars.barWidth / 2;
                            break;
                        default:
                            throw new Error("Invalid bar alignment: " + s.bars.align);
                    }

                    if (s.bars.horizontal) {
                        ymin += delta;
                        ymax += delta + s.bars.barWidth;
                    }
                    else {
                        xmin += delta;
                        xmax += delta + s.bars.barWidth;
                    }
                }

                updateAxis(s.xaxis, xmin, xmax);
                updateAxis(s.yaxis, ymin, ymax);
            }

            $.each(allAxes(), function (_, axis) {
                if (axis.datamin == topSentry)
                    axis.datamin = null;
                if (axis.datamax == bottomSentry)
                    axis.datamax = null;
            });
        }

        function setupCanvases() {

            // Make sure the placeholder is clear of everything except canvases
            // from a previous plot in this container that we'll try to re-use.

            placeholder.css("padding", 0) // padding messes up the positioning
                .children(":not(.flot-base,.flot-overlay)").remove();

            if (placeholder.css("position") == 'static')
                placeholder.css("position", "relative"); // for positioning labels and overlay

            surface = new Canvas("flot-base", placeholder);
            overlay = new Canvas("flot-overlay", placeholder); // overlay canvas for interactive features

            ctx = surface.context;
            octx = overlay.context;

            // define which element we're listening for events on
            eventHolder = $(overlay.element).unbind();

            // If we're re-using a plot object, shut down the old one

            var existing = placeholder.data("plot");

            if (existing) {
                existing.shutdown();
                overlay.clear();
            }

            // save in case we get replotted
            placeholder.data("plot", plot);
        }

        function bindEvents() {
            // bind events
            if (options.grid.hoverable) {
                eventHolder.mousemove(onMouseMove);

                // Use bind, rather than .mouseleave, because we officially
                // still support jQuery 1.2.6, which doesn't define a shortcut
                // for mouseenter or mouseleave.  This was a bug/oversight that
                // was fixed somewhere around 1.3.x.  We can return to using
                // .mouseleave when we drop support for 1.2.6.

                eventHolder.bind("mouseleave", onMouseLeave);
            }

            if (options.grid.clickable)
                eventHolder.click(onClick);

            executeHooks(hooks.bindEvents, [eventHolder]);
        }

        function shutdown() {
            if (redrawTimeout)
                clearTimeout(redrawTimeout);

            eventHolder.unbind("mousemove", onMouseMove);
            eventHolder.unbind("mouseleave", onMouseLeave);
            eventHolder.unbind("click", onClick);

            executeHooks(hooks.shutdown, [eventHolder]);
        }

        function setTransformationHelpers(axis) {
            // set helper functions on the axis, assumes plot area
            // has been computed already

            function identity(x) { return x; }

            var s, m, t = axis.options.transform || identity,
                it = axis.options.inverseTransform;

            // precompute how much the axis is scaling a point
            // in canvas space
            if (axis.direction == "x") {
                s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));
                m = Math.min(t(axis.max), t(axis.min));
            }
            else {
                s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));
                s = -s;
                m = Math.max(t(axis.max), t(axis.min));
            }

            // data point to canvas coordinate
            if (t == identity) // slight optimization
                axis.p2c = function (p) { return (p - m) * s; };
            else
                axis.p2c = function (p) { return (t(p) - m) * s; };
            // canvas coordinate to data point
            if (!it)
                axis.c2p = function (c) { return m + c / s; };
            else
                axis.c2p = function (c) { return it(m + c / s); };
        }

        function measureTickLabels(axis) {

            var opts = axis.options, ticks = axis.ticks || [],
                axisw = opts.labelWidth || 0, axish = opts.labelHeight || 0,
                legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                font = opts.font || "flot-tick-label tickLabel";

            for (var i = 0; i < ticks.length; ++i) {

                var t = ticks[i];

                if (!t.label)
                    continue;

                var info = surface.getTextInfo(layer, t.label, font);

                if (opts.labelWidth == null)
                    axisw = Math.max(axisw, info.width);
                if (opts.labelHeight == null)
                    axish = Math.max(axish, info.height);
            }

            axis.labelWidth = Math.ceil(axisw);
            axis.labelHeight = Math.ceil(axish);
        }

        function allocateAxisBoxFirstPhase(axis) {
            // find the bounding box of the axis by looking at label
            // widths/heights and ticks, make room by diminishing the
            // plotOffset; this first phase only looks at one
            // dimension per axis, the other dimension depends on the
            // other axes so will have to wait

            var lw = axis.labelWidth,
                lh = axis.labelHeight,
                pos = axis.options.position,
                tickLength = axis.options.tickLength,
                axisMargin = options.grid.axisMargin,
                padding = options.grid.labelMargin,
                all = axis.direction == "x" ? xaxes : yaxes,
                index, innermost;

            // determine axis margin
            var samePosition = $.grep(all, function (a) {
                return a && a.options.position == pos && a.reserveSpace;
            });
            if ($.inArray(axis, samePosition) == samePosition.length - 1)
                axisMargin = 0; // outermost

            // determine tick length - if we're innermost, we can use "full"
            if (tickLength == null) {
                var sameDirection = $.grep(all, function (a) {
                    return a && a.reserveSpace;
                });

                innermost = $.inArray(axis, sameDirection) == 0;
                if (innermost)
                    tickLength = "full";
                else
                    tickLength = 5;
            }

            if (!isNaN(+tickLength))
                padding += +tickLength;

            // compute box
            if (axis.direction == "x") {
                lh += padding;

                if (pos == "bottom") {
                    plotOffset.bottom += lh + axisMargin;
                    axis.box = { top: surface.height - plotOffset.bottom, height: lh };
                }
                else {
                    axis.box = { top: plotOffset.top + axisMargin, height: lh };
                    plotOffset.top += lh + axisMargin;
                }
            }
            else {
                lw += padding;

                if (pos == "left") {
                    axis.box = { left: plotOffset.left + axisMargin, width: lw };
                    plotOffset.left += lw + axisMargin;
                }
                else {
                    plotOffset.right += lw + axisMargin;
                    axis.box = { left: surface.width - plotOffset.right, width: lw };
                }
            }

             // save for future reference
            axis.position = pos;
            axis.tickLength = tickLength;
            axis.box.padding = padding;
            axis.innermost = innermost;
        }

        function allocateAxisBoxSecondPhase(axis) {
            // now that all axis boxes have been placed in one
            // dimension, we can set the remaining dimension coordinates
            if (axis.direction == "x") {
                axis.box.left = plotOffset.left - axis.labelWidth / 2;
                axis.box.width = surface.width - plotOffset.left - plotOffset.right + axis.labelWidth;
            }
            else {
                axis.box.top = plotOffset.top - axis.labelHeight / 2;
                axis.box.height = surface.height - plotOffset.bottom - plotOffset.top + axis.labelHeight;
            }
        }

        function adjustLayoutForThingsStickingOut() {
            // possibly adjust plot offset to ensure everything stays
            // inside the canvas and isn't clipped off

            var minMargin = options.grid.minBorderMargin,
                margins = { x: 0, y: 0 }, i, axis;

            // check stuff from the plot (FIXME: this should just read
            // a value from the series, otherwise it's impossible to
            // customize)
            if (minMargin == null) {
                minMargin = 0;
                for (i = 0; i < series.length; ++i)
                    minMargin = Math.max(minMargin, 2 * (series[i].points.radius + series[i].points.lineWidth/2));
            }

            margins.x = margins.y = Math.ceil(minMargin);

            // check axis labels, note we don't check the actual
            // labels but instead use the overall width/height to not
            // jump as much around with replots
            $.each(allAxes(), function (_, axis) {
                var dir = axis.direction;
                if (axis.reserveSpace)
                    margins[dir] = Math.ceil(Math.max(margins[dir], (dir == "x" ? axis.labelWidth : axis.labelHeight) / 2));
            });

            plotOffset.left = Math.max(margins.x, plotOffset.left);
            plotOffset.right = Math.max(margins.x, plotOffset.right);
            plotOffset.top = Math.max(margins.y, plotOffset.top);
            plotOffset.bottom = Math.max(margins.y, plotOffset.bottom);
        }

        function setupGrid() {
            var i, axes = allAxes(), showGrid = options.grid.show;

            // Initialize the plot's offset from the edge of the canvas

            for (var a in plotOffset) {
                var margin = options.grid.margin || 0;
                plotOffset[a] = typeof margin == "number" ? margin : margin[a] || 0;
            }

            executeHooks(hooks.processOffset, [plotOffset]);

            // If the grid is visible, add its border width to the offset

            for (var a in plotOffset) {
                if(typeof(options.grid.borderWidth) == "object") {
                    plotOffset[a] += showGrid ? options.grid.borderWidth[a] : 0;
                }
                else {
                    plotOffset[a] += showGrid ? options.grid.borderWidth : 0;
                }
            }

            // init axes
            $.each(axes, function (_, axis) {
                axis.show = axis.options.show;
                if (axis.show == null)
                    axis.show = axis.used; // by default an axis is visible if it's got data

                axis.reserveSpace = axis.show || axis.options.reserveSpace;

                setRange(axis);
            });

            if (showGrid) {

                var allocatedAxes = $.grep(axes, function (axis) { return axis.reserveSpace; });

                $.each(allocatedAxes, function (_, axis) {
                    // make the ticks
                    setupTickGeneration(axis);
                    setTicks(axis);
                    snapRangeToTicks(axis, axis.ticks);
                    // find labelWidth/Height for axis
                    measureTickLabels(axis);
                });

                // with all dimensions calculated, we can compute the
                // axis bounding boxes, start from the outside
                // (reverse order)
                for (i = allocatedAxes.length - 1; i >= 0; --i)
                    allocateAxisBoxFirstPhase(allocatedAxes[i]);

                // make sure we've got enough space for things that
                // might stick out
                adjustLayoutForThingsStickingOut();

                $.each(allocatedAxes, function (_, axis) {
                    allocateAxisBoxSecondPhase(axis);
                });
            }

            plotWidth = surface.width - plotOffset.left - plotOffset.right;
            plotHeight = surface.height - plotOffset.bottom - plotOffset.top;

            // now we got the proper plot dimensions, we can compute the scaling
            $.each(axes, function (_, axis) {
                setTransformationHelpers(axis);
            });

            if (showGrid) {
                drawAxisLabels();
            }

            insertLegend();
        }

        function setRange(axis) {
            var opts = axis.options,
                min = +(opts.min != null ? opts.min : axis.datamin),
                max = +(opts.max != null ? opts.max : axis.datamax),
                delta = max - min;

            if (delta == 0.0) {
                // degenerate case
                var widen = max == 0 ? 1 : 0.01;

                if (opts.min == null)
                    min -= widen;
                // always widen max if we couldn't widen min to ensure we
                // don't fall into min == max which doesn't work
                if (opts.max == null || opts.min != null)
                    max += widen;
            }
            else {
                // consider autoscaling
                var margin = opts.autoscaleMargin;
                if (margin != null) {
                    if (opts.min == null) {
                        min -= delta * margin;
                        // make sure we don't go below zero if all values
                        // are positive
                        if (min < 0 && axis.datamin != null && axis.datamin >= 0)
                            min = 0;
                    }
                    if (opts.max == null) {
                        max += delta * margin;
                        if (max > 0 && axis.datamax != null && axis.datamax <= 0)
                            max = 0;
                    }
                }
            }
            axis.min = min;
            axis.max = max;
        }

        function setupTickGeneration(axis) {
            var opts = axis.options;

            // estimate number of ticks
            var noTicks;
            if (typeof opts.ticks == "number" && opts.ticks > 0)
                noTicks = opts.ticks;
            else
                // heuristic based on the model a*sqrt(x) fitted to
                // some data points that seemed reasonable
                noTicks = 0.3 * Math.sqrt(axis.direction == "x" ? surface.width : surface.height);

            var delta = (axis.max - axis.min) / noTicks,
                dec = -Math.floor(Math.log(delta) / Math.LN10),
                maxDec = opts.tickDecimals;

            if (maxDec != null && dec > maxDec) {
                dec = maxDec;
            }

            var magn = Math.pow(10, -dec),
                norm = delta / magn, // norm is between 1.0 and 10.0
                size;

            if (norm < 1.5) {
                size = 1;
            } else if (norm < 3) {
                size = 2;
                // special case for 2.5, requires an extra decimal
                if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {
                    size = 2.5;
                    ++dec;
                }
            } else if (norm < 7.5) {
                size = 5;
            } else {
                size = 10;
            }

            size *= magn;

            if (opts.minTickSize != null && size < opts.minTickSize) {
                size = opts.minTickSize;
            }

            axis.delta = delta;
            axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);
            axis.tickSize = opts.tickSize || size;

            // Time mode was moved to a plug-in in 0.8, but since so many people use this
            // we'll add an especially friendly make sure they remembered to include it.

            if (opts.mode == "time" && !axis.tickGenerator) {
                throw new Error("Time mode requires the flot.time plugin.");
            }

            // Flot supports base-10 axes; any other mode else is handled by a plug-in,
            // like flot.time.js.

            if (!axis.tickGenerator) {

                axis.tickGenerator = function (axis) {

                    var ticks = [],
                        start = floorInBase(axis.min, axis.tickSize),
                        i = 0,
                        v = Number.NaN,
                        prev;

                    do {
                        prev = v;
                        v = start + i * axis.tickSize;
                        ticks.push(v);
                        ++i;
                    } while (v < axis.max && v != prev);
                    return ticks;
                };

				axis.tickFormatter = function (value, axis) {

					var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
					var formatted = "" + Math.round(value * factor) / factor;

					// If tickDecimals was specified, ensure that we have exactly that
					// much precision; otherwise default to the value's own precision.

					if (axis.tickDecimals != null) {
						var decimal = formatted.indexOf(".");
						var precision = decimal == -1 ? 0 : formatted.length - decimal - 1;
						if (precision < axis.tickDecimals) {
							return (precision ? formatted : formatted + ".") + ("" + factor).substr(1, axis.tickDecimals - precision);
						}
					}

                    return formatted;
                };
            }

            if ($.isFunction(opts.tickFormatter))
                axis.tickFormatter = function (v, axis) { return "" + opts.tickFormatter(v, axis); };

            if (opts.alignTicksWithAxis != null) {
                var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];
                if (otherAxis && otherAxis.used && otherAxis != axis) {
                    // consider snapping min/max to outermost nice ticks
                    var niceTicks = axis.tickGenerator(axis);
                    if (niceTicks.length > 0) {
                        if (opts.min == null)
                            axis.min = Math.min(axis.min, niceTicks[0]);
                        if (opts.max == null && niceTicks.length > 1)
                            axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1]);
                    }

                    axis.tickGenerator = function (axis) {
                        // copy ticks, scaled to this axis
                        var ticks = [], v, i;
                        for (i = 0; i < otherAxis.ticks.length; ++i) {
                            v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);
                            v = axis.min + v * (axis.max - axis.min);
                            ticks.push(v);
                        }
                        return ticks;
                    };

                    // we might need an extra decimal since forced
                    // ticks don't necessarily fit naturally
                    if (!axis.mode && opts.tickDecimals == null) {
                        var extraDec = Math.max(0, -Math.floor(Math.log(axis.delta) / Math.LN10) + 1),
                            ts = axis.tickGenerator(axis);

                        // only proceed if the tick interval rounded
                        // with an extra decimal doesn't give us a
                        // zero at end
                        if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))
                            axis.tickDecimals = extraDec;
                    }
                }
            }
        }

        function setTicks(axis) {
            var oticks = axis.options.ticks, ticks = [];
            if (oticks == null || (typeof oticks == "number" && oticks > 0))
                ticks = axis.tickGenerator(axis);
            else if (oticks) {
                if ($.isFunction(oticks))
                    // generate the ticks
                    ticks = oticks(axis);
                else
                    ticks = oticks;
            }

            // clean up/labelify the supplied ticks, copy them over
            var i, v;
            axis.ticks = [];
            for (i = 0; i < ticks.length; ++i) {
                var label = null;
                var t = ticks[i];
                if (typeof t == "object") {
                    v = +t[0];
                    if (t.length > 1)
                        label = t[1];
                }
                else
                    v = +t;
                if (label == null)
                    label = axis.tickFormatter(v, axis);
                if (!isNaN(v))
                    axis.ticks.push({ v: v, label: label });
            }
        }

        function snapRangeToTicks(axis, ticks) {
            if (axis.options.autoscaleMargin && ticks.length > 0) {
                // snap to ticks
                if (axis.options.min == null)
                    axis.min = Math.min(axis.min, ticks[0].v);
                if (axis.options.max == null && ticks.length > 1)
                    axis.max = Math.max(axis.max, ticks[ticks.length - 1].v);
            }
        }

        function draw() {

            surface.clear();

            executeHooks(hooks.drawBackground, [ctx]);

            var grid = options.grid;

            // draw background, if any
            if (grid.show && grid.backgroundColor)
                drawBackground();

            if (grid.show && !grid.aboveData) {
                drawGrid();
            }

            for (var i = 0; i < series.length; ++i) {
                executeHooks(hooks.drawSeries, [ctx, series[i]]);
                drawSeries(series[i]);
            }

            executeHooks(hooks.draw, [ctx]);

            if (grid.show && grid.aboveData) {
                drawGrid();
            }

            surface.render();
        }

        function extractRange(ranges, coord) {
            var axis, from, to, key, axes = allAxes();

            for (var i = 0; i < axes.length; ++i) {
                axis = axes[i];
                if (axis.direction == coord) {
                    key = coord + axis.n + "axis";
                    if (!ranges[key] && axis.n == 1)
                        key = coord + "axis"; // support x1axis as xaxis
                    if (ranges[key]) {
                        from = ranges[key].from;
                        to = ranges[key].to;
                        break;
                    }
                }
            }

            // backwards-compat stuff - to be removed in future
            if (!ranges[key]) {
                axis = coord == "x" ? xaxes[0] : yaxes[0];
                from = ranges[coord + "1"];
                to = ranges[coord + "2"];
            }

            // auto-reverse as an added bonus
            if (from != null && to != null && from > to) {
                var tmp = from;
                from = to;
                to = tmp;
            }

            return { from: from, to: to, axis: axis };
        }

        function drawBackground() {
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)");
            ctx.fillRect(0, 0, plotWidth, plotHeight);
            ctx.restore();
        }

        function drawGrid() {
            var i, axes, bw, bc;

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // draw markings
            var markings = options.grid.markings;
            if (markings) {
                if ($.isFunction(markings)) {
                    axes = plot.getAxes();
                    // xmin etc. is backwards compatibility, to be
                    // removed in the future
                    axes.xmin = axes.xaxis.min;
                    axes.xmax = axes.xaxis.max;
                    axes.ymin = axes.yaxis.min;
                    axes.ymax = axes.yaxis.max;

                    markings = markings(axes);
                }

                for (i = 0; i < markings.length; ++i) {
                    var m = markings[i],
                        xrange = extractRange(m, "x"),
                        yrange = extractRange(m, "y");

                    // fill in missing
                    if (xrange.from == null)
                        xrange.from = xrange.axis.min;
                    if (xrange.to == null)
                        xrange.to = xrange.axis.max;
                    if (yrange.from == null)
                        yrange.from = yrange.axis.min;
                    if (yrange.to == null)
                        yrange.to = yrange.axis.max;

                    // clip
                    if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max ||
                        yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)
                        continue;

                    xrange.from = Math.max(xrange.from, xrange.axis.min);
                    xrange.to = Math.min(xrange.to, xrange.axis.max);
                    yrange.from = Math.max(yrange.from, yrange.axis.min);
                    yrange.to = Math.min(yrange.to, yrange.axis.max);

                    if (xrange.from == xrange.to && yrange.from == yrange.to)
                        continue;

                    // then draw
                    xrange.from = xrange.axis.p2c(xrange.from);
                    xrange.to = xrange.axis.p2c(xrange.to);
                    yrange.from = yrange.axis.p2c(yrange.from);
                    yrange.to = yrange.axis.p2c(yrange.to);

                    if (xrange.from == xrange.to || yrange.from == yrange.to) {
                        // draw line
                        ctx.beginPath();
                        ctx.strokeStyle = m.color || options.grid.markingsColor;
                        ctx.lineWidth = m.lineWidth || options.grid.markingsLineWidth;
                        ctx.moveTo(xrange.from, yrange.from);
                        ctx.lineTo(xrange.to, yrange.to);
                        ctx.stroke();
                    }
                    else {
                        // fill area
                        ctx.fillStyle = m.color || options.grid.markingsColor;
                        ctx.fillRect(xrange.from, yrange.to,
                                     xrange.to - xrange.from,
                                     yrange.from - yrange.to);
                    }
                }
            }

            // draw the ticks
            axes = allAxes();
            bw = options.grid.borderWidth;

            for (var j = 0; j < axes.length; ++j) {
                var axis = axes[j], box = axis.box,
                    t = axis.tickLength, x, y, xoff, yoff;
                if (!axis.show || axis.ticks.length == 0)
                    continue;

                ctx.lineWidth = 1;

                // find the edges
                if (axis.direction == "x") {
                    x = 0;
                    if (t == "full")
                        y = (axis.position == "top" ? 0 : plotHeight);
                    else
                        y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0);
                }
                else {
                    y = 0;
                    if (t == "full")
                        x = (axis.position == "left" ? 0 : plotWidth);
                    else
                        x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0);
                }

                // draw tick bar
                if (!axis.innermost) {
                    ctx.strokeStyle = axis.options.color;
                    ctx.beginPath();
                    xoff = yoff = 0;
                    if (axis.direction == "x")
                        xoff = plotWidth + 1;
                    else
                        yoff = plotHeight + 1;

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x") {
                            y = Math.floor(y) + 0.5;
                        } else {
                            x = Math.floor(x) + 0.5;
                        }
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                    ctx.stroke();
                }

                // draw ticks

                ctx.strokeStyle = axis.options.tickColor;

                ctx.beginPath();
                for (i = 0; i < axis.ticks.length; ++i) {
                    var v = axis.ticks[i].v;

                    xoff = yoff = 0;

                    if (isNaN(v) || v < axis.min || v > axis.max
                        // skip those lying on the axes if we got a border
                        || (t == "full"
                            && ((typeof bw == "object" && bw[axis.position] > 0) || bw > 0)
                            && (v == axis.min || v == axis.max)))
                        continue;

                    if (axis.direction == "x") {
                        x = axis.p2c(v);
                        yoff = t == "full" ? -plotHeight : t;

                        if (axis.position == "top")
                            yoff = -yoff;
                    }
                    else {
                        y = axis.p2c(v);
                        xoff = t == "full" ? -plotWidth : t;

                        if (axis.position == "left")
                            xoff = -xoff;
                    }

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x")
                            x = Math.floor(x) + 0.5;
                        else
                            y = Math.floor(y) + 0.5;
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                }

                ctx.stroke();
            }


            // draw border
            if (bw) {
                // If either borderWidth or borderColor is an object, then draw the border
                // line by line instead of as one rectangle
                bc = options.grid.borderColor;
                if(typeof bw == "object" || typeof bc == "object") {
                    if (typeof bw !== "object") {
                        bw = {top: bw, right: bw, bottom: bw, left: bw};
                    }
                    if (typeof bc !== "object") {
                        bc = {top: bc, right: bc, bottom: bc, left: bc};
                    }

                    if (bw.top > 0) {
                        ctx.strokeStyle = bc.top;
                        ctx.lineWidth = bw.top;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left, 0 - bw.top/2);
                        ctx.lineTo(plotWidth, 0 - bw.top/2);
                        ctx.stroke();
                    }

                    if (bw.right > 0) {
                        ctx.strokeStyle = bc.right;
                        ctx.lineWidth = bw.right;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right / 2, 0 - bw.top);
                        ctx.lineTo(plotWidth + bw.right / 2, plotHeight);
                        ctx.stroke();
                    }

                    if (bw.bottom > 0) {
                        ctx.strokeStyle = bc.bottom;
                        ctx.lineWidth = bw.bottom;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right, plotHeight + bw.bottom / 2);
                        ctx.lineTo(0, plotHeight + bw.bottom / 2);
                        ctx.stroke();
                    }

                    if (bw.left > 0) {
                        ctx.strokeStyle = bc.left;
                        ctx.lineWidth = bw.left;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left/2, plotHeight + bw.bottom);
                        ctx.lineTo(0- bw.left/2, 0);
                        ctx.stroke();
                    }
                }
                else {
                    ctx.lineWidth = bw;
                    ctx.strokeStyle = options.grid.borderColor;
                    ctx.strokeRect(-bw/2, -bw/2, plotWidth + bw, plotHeight + bw);
                }
            }

            ctx.restore();
        }

        function drawAxisLabels() {

            $.each(allAxes(), function (_, axis) {
                if (!axis.show || axis.ticks.length == 0)
                    return;

                var box = axis.box,
                    legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                    layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                    font = axis.options.font || "flot-tick-label tickLabel",
                    tick, x, y, halign, valign;

                surface.removeText(layer);

                for (var i = 0; i < axis.ticks.length; ++i) {

                    tick = axis.ticks[i];
                    if (!tick.label || tick.v < axis.min || tick.v > axis.max)
                        continue;

                    if (axis.direction == "x") {
                        halign = "center";
                        x = plotOffset.left + axis.p2c(tick.v);
                        if (axis.position == "bottom") {
                            y = box.top + box.padding;
                        } else {
                            y = box.top + box.height - box.padding;
                            valign = "bottom";
                        }
                    } else {
                        valign = "middle";
                        y = plotOffset.top + axis.p2c(tick.v);
                        if (axis.position == "left") {
                            x = box.left + box.width - box.padding;
                            halign = "right";
                        } else {
                            x = box.left + box.padding;
                        }
                    }

                    surface.addText(layer, x, y, tick.label, font, null, halign, valign);
                }
            });
        }

        function drawSeries(series) {
            if (series.lines.show)
                drawSeriesLines(series);
            if (series.bars.show)
                drawSeriesBars(series);
            if (series.points.show)
                drawSeriesPoints(series);
        }

        function drawSeriesLines(series) {
            function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    prevx = null, prevy = null;

                ctx.beginPath();
                for (var i = ps; i < points.length; i += ps) {
                    var x1 = points[i - ps], y1 = points[i - ps + 1],
                        x2 = points[i], y2 = points[i + 1];

                    if (x1 == null || x2 == null)
                        continue;

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min) {
                        if (y2 < axisy.min)
                            continue;   // line segment is outside
                        // compute new intersection point
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min) {
                        if (y1 < axisy.min)
                            continue;
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max) {
                        if (y2 > axisy.max)
                            continue;
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max) {
                        if (y1 > axisy.max)
                            continue;
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (x1 != prevx || y1 != prevy)
                        ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);

                    prevx = x2;
                    prevy = y2;
                    ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset);
                }
                ctx.stroke();
            }

            function plotLineArea(datapoints, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    bottom = Math.min(Math.max(0, axisy.min), axisy.max),
                    i = 0, top, areaOpen = false,
                    ypos = 1, segmentStart = 0, segmentEnd = 0;

                // we process each segment in two turns, first forward
                // direction to sketch out top, then once we hit the
                // end we go backwards to sketch the bottom
                while (true) {
                    if (ps > 0 && i > points.length + ps)
                        break;

                    i += ps; // ps is negative if going backwards

                    var x1 = points[i - ps],
                        y1 = points[i - ps + ypos],
                        x2 = points[i], y2 = points[i + ypos];

                    if (areaOpen) {
                        if (ps > 0 && x1 != null && x2 == null) {
                            // at turning point
                            segmentEnd = i;
                            ps = -ps;
                            ypos = 2;
                            continue;
                        }

                        if (ps < 0 && i == segmentStart + ps) {
                            // done with the reverse sweep
                            ctx.fill();
                            areaOpen = false;
                            ps = -ps;
                            ypos = 1;
                            i = segmentStart = segmentEnd + ps;
                            continue;
                        }
                    }

                    if (x1 == null || x2 == null)
                        continue;

                    // clip x values

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (!areaOpen) {
                        // open area
                        ctx.beginPath();
                        ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));
                        areaOpen = true;
                    }

                    // now first check the case where both is outside
                    if (y1 >= axisy.max && y2 >= axisy.max) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));
                        continue;
                    }
                    else if (y1 <= axisy.min && y2 <= axisy.min) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));
                        continue;
                    }

                    // else it's a bit more complicated, there might
                    // be a flat maxed out rectangle first, then a
                    // triangular cutout or reverse; to find these
                    // keep track of the current x values
                    var x1old = x1, x2old = x2;

                    // clip the y values, without shortcutting, we
                    // go through all cases in turn

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // if the x value was changed we got a rectangle
                    // to fill
                    if (x1 != x1old) {
                        ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1));
                        // it goes to (x1, y1), but we fill that below
                    }

                    // fill triangular section, this sometimes result
                    // in redundant points if (x1, y1) hasn't changed
                    // from previous line to, but we just ignore that
                    ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));
                    ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));

                    // fill the other rectangle if it's there
                    if (x2 != x2old) {
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
                        ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2));
                    }
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            ctx.lineJoin = "round";

            var lw = series.lines.lineWidth,
                sw = series.shadowSize;
            // FIXME: consider another form of shadow when filling is turned on
            if (lw > 0 && sw > 0) {
                // draw shadow as a thick and thin line with transparency
                ctx.lineWidth = sw;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                // position shadow at angle from the mid of line
                var angle = Math.PI/18;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/2), Math.cos(angle) * (lw/2 + sw/2), series.xaxis, series.yaxis);
                ctx.lineWidth = sw/2;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/4), Math.cos(angle) * (lw/2 + sw/4), series.xaxis, series.yaxis);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);
            if (fillStyle) {
                ctx.fillStyle = fillStyle;
                plotLineArea(series.datapoints, series.xaxis, series.yaxis);
            }

            if (lw > 0)
                plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function drawSeriesPoints(series) {
            function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    var x = points[i], y = points[i + 1];
                    if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                        continue;

                    ctx.beginPath();
                    x = axisx.p2c(x);
                    y = axisy.p2c(y) + offset;
                    if (symbol == "circle")
                        ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false);
                    else
                        symbol(ctx, x, y, radius, shadow);
                    ctx.closePath();

                    if (fillStyle) {
                        ctx.fillStyle = fillStyle;
                        ctx.fill();
                    }
                    ctx.stroke();
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            var lw = series.points.lineWidth,
                sw = series.shadowSize,
                radius = series.points.radius,
                symbol = series.points.symbol;

            // If the user sets the line width to 0, we change it to a very 
            // small value. A line width of 0 seems to force the default of 1.
            // Doing the conditional here allows the shadow setting to still be 
            // optional even with a lineWidth of 0.

            if( lw == 0 )
                lw = 0.0001;

            if (lw > 0 && sw > 0) {
                // draw shadow in two steps
                var w = sw / 2;
                ctx.lineWidth = w;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                plotPoints(series.datapoints, radius, null, w + w/2, true,
                           series.xaxis, series.yaxis, symbol);

                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                plotPoints(series.datapoints, radius, null, w/2, true,
                           series.xaxis, series.yaxis, symbol);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            plotPoints(series.datapoints, radius,
                       getFillStyle(series.points, series.color), 0, false,
                       series.xaxis, series.yaxis, symbol);
            ctx.restore();
        }

        function drawBar(x, y, b, barLeft, barRight, offset, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
            var left, right, bottom, top,
                drawLeft, drawRight, drawTop, drawBottom,
                tmp;

            // in horizontal mode, we start the bar from the left
            // instead of from the bottom so it appears to be
            // horizontal rather than vertical
            if (horizontal) {
                drawBottom = drawRight = drawTop = true;
                drawLeft = false;
                left = b;
                right = x;
                top = y + barLeft;
                bottom = y + barRight;

                // account for negative bars
                if (right < left) {
                    tmp = right;
                    right = left;
                    left = tmp;
                    drawLeft = true;
                    drawRight = false;
                }
            }
            else {
                drawLeft = drawRight = drawTop = true;
                drawBottom = false;
                left = x + barLeft;
                right = x + barRight;
                bottom = b;
                top = y;

                // account for negative bars
                if (top < bottom) {
                    tmp = top;
                    top = bottom;
                    bottom = tmp;
                    drawBottom = true;
                    drawTop = false;
                }
            }

            // clip
            if (right < axisx.min || left > axisx.max ||
                top < axisy.min || bottom > axisy.max)
                return;

            if (left < axisx.min) {
                left = axisx.min;
                drawLeft = false;
            }

            if (right > axisx.max) {
                right = axisx.max;
                drawRight = false;
            }

            if (bottom < axisy.min) {
                bottom = axisy.min;
                drawBottom = false;
            }

            if (top > axisy.max) {
                top = axisy.max;
                drawTop = false;
            }

            left = axisx.p2c(left);
            bottom = axisy.p2c(bottom);
            right = axisx.p2c(right);
            top = axisy.p2c(top);

            // fill the bar
            if (fillStyleCallback) {
                c.beginPath();
                c.moveTo(left, bottom);
                c.lineTo(left, top);
                c.lineTo(right, top);
                c.lineTo(right, bottom);
                c.fillStyle = fillStyleCallback(bottom, top);
                c.fill();
            }

            // draw outline
            if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {
                c.beginPath();

                // FIXME: inline moveTo is buggy with excanvas
                c.moveTo(left, bottom + offset);
                if (drawLeft)
                    c.lineTo(left, top + offset);
                else
                    c.moveTo(left, top + offset);
                if (drawTop)
                    c.lineTo(right, top + offset);
                else
                    c.moveTo(right, top + offset);
                if (drawRight)
                    c.lineTo(right, bottom + offset);
                else
                    c.moveTo(right, bottom + offset);
                if (drawBottom)
                    c.lineTo(left, bottom + offset);
                else
                    c.moveTo(left, bottom + offset);
                c.stroke();
            }
        }

        function drawSeriesBars(series) {
            function plotBars(datapoints, barLeft, barRight, offset, fillStyleCallback, axisx, axisy) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    if (points[i] == null)
                        continue;
                    drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, offset, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth);
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // FIXME: figure out a way to add shadows (for instance along the right edge)
            ctx.lineWidth = series.bars.lineWidth;
            ctx.strokeStyle = series.color;

            var barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                case "center":
                    barLeft = -series.bars.barWidth / 2;
                    break;
                default:
                    throw new Error("Invalid bar alignment: " + series.bars.align);
            }

            var fillStyleCallback = series.bars.fill ? function (bottom, top) { return getFillStyle(series.bars, series.color, bottom, top); } : null;
            plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, 0, fillStyleCallback, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function getFillStyle(filloptions, seriesColor, bottom, top) {
            var fill = filloptions.fill;
            if (!fill)
                return null;

            if (filloptions.fillColor)
                return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);

            var c = $.color.parse(seriesColor);
            c.a = typeof fill == "number" ? fill : 0.4;
            c.normalize();
            return c.toString();
        }

        function insertLegend() {

            placeholder.find(".legend").remove();

            if (!options.legend.show)
                return;

            var fragments = [], entries = [], rowStarted = false,
                lf = options.legend.labelFormatter, s, label;

            // Build a list of legend entries, with each having a label and a color

            for (var i = 0; i < series.length; ++i) {
                s = series[i];
                if (s.label) {
                    label = lf ? lf(s.label, s) : s.label;
                    if (label) {
                        entries.push({
                            label: label,
                            color: s.color
                        });
                    }
                }
            }

            // Sort the legend using either the default or a custom comparator

            if (options.legend.sorted) {
                if ($.isFunction(options.legend.sorted)) {
                    entries.sort(options.legend.sorted);
                } else if (options.legend.sorted == "reverse") {
                	entries.reverse();
                } else {
                    var ascending = options.legend.sorted != "descending";
                    entries.sort(function(a, b) {
                        return a.label == b.label ? 0 : (
                            (a.label < b.label) != ascending ? 1 : -1   // Logical XOR
                        );
                    });
                }
            }

            // Generate markup for the list of entries, in their final order

            for (var i = 0; i < entries.length; ++i) {

                var entry = entries[i];

                if (i % options.legend.noColumns == 0) {
                    if (rowStarted)
                        fragments.push('</tr>');
                    fragments.push('<tr>');
                    rowStarted = true;
                }

                fragments.push(
                    '<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + entry.color + ';overflow:hidden"></div></div></td>' +
                    '<td class="legendLabel">' + entry.label + '</td>'
                );
            }

            if (rowStarted)
                fragments.push('</tr>');

            if (fragments.length == 0)
                return;

            var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + '</table>';
            if (options.legend.container != null)
                $(options.legend.container).html(table);
            else {
                var pos = "",
                    p = options.legend.position,
                    m = options.legend.margin;
                if (m[0] == null)
                    m = [m, m];
                if (p.charAt(0) == "n")
                    pos += 'top:' + (m[1] + plotOffset.top) + 'px;';
                else if (p.charAt(0) == "s")
                    pos += 'bottom:' + (m[1] + plotOffset.bottom) + 'px;';
                if (p.charAt(1) == "e")
                    pos += 'right:' + (m[0] + plotOffset.right) + 'px;';
                else if (p.charAt(1) == "w")
                    pos += 'left:' + (m[0] + plotOffset.left) + 'px;';
                var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos +';') + '</div>').appendTo(placeholder);
                if (options.legend.backgroundOpacity != 0.0) {
                    // put in the transparent background
                    // separately to avoid blended labels and
                    // label boxes
                    var c = options.legend.backgroundColor;
                    if (c == null) {
                        c = options.grid.backgroundColor;
                        if (c && typeof c == "string")
                            c = $.color.parse(c);
                        else
                            c = $.color.extract(legend, 'background-color');
                        c.a = 1;
                        c = c.toString();
                    }
                    var div = legend.children();
                    $('<div style="position:absolute;width:' + div.width() + 'px;height:' + div.height() + 'px;' + pos +'background-color:' + c + ';"> </div>').prependTo(legend).css('opacity', options.legend.backgroundOpacity);
                }
            }
        }


        // interactive features

        var highlights = [],
            redrawTimeout = null;

        // returns the data item the mouse is over, or null if none is found
        function findNearbyItem(mouseX, mouseY, seriesFilter) {
            var maxDistance = options.grid.mouseActiveRadius,
                smallestDistance = maxDistance * maxDistance + 1,
                item = null, foundPoint = false, i, j, ps;

            for (i = series.length - 1; i >= 0; --i) {
                if (!seriesFilter(series[i]))
                    continue;

                var s = series[i],
                    axisx = s.xaxis,
                    axisy = s.yaxis,
                    points = s.datapoints.points,
                    mx = axisx.c2p(mouseX), // precompute some stuff to make the loop faster
                    my = axisy.c2p(mouseY),
                    maxx = maxDistance / axisx.scale,
                    maxy = maxDistance / axisy.scale;

                ps = s.datapoints.pointsize;
                // with inverse transforms, we can't use the maxx/maxy
                // optimization, sadly
                if (axisx.options.inverseTransform)
                    maxx = Number.MAX_VALUE;
                if (axisy.options.inverseTransform)
                    maxy = Number.MAX_VALUE;

                if (s.lines.show || s.points.show) {
                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1];
                        if (x == null)
                            continue;

                        // For points and lines, the cursor must be within a
                        // certain distance to the data point
                        if (x - mx > maxx || x - mx < -maxx ||
                            y - my > maxy || y - my < -maxy)
                            continue;

                        // We have to calculate distances in pixels, not in
                        // data units, because the scales of the axes may be different
                        var dx = Math.abs(axisx.p2c(x) - mouseX),
                            dy = Math.abs(axisy.p2c(y) - mouseY),
                            dist = dx * dx + dy * dy; // we save the sqrt

                        // use <= to ensure last point takes precedence
                        // (last generally means on top of)
                        if (dist < smallestDistance) {
                            smallestDistance = dist;
                            item = [i, j / ps];
                        }
                    }
                }

                if (s.bars.show && !item) { // no other point can be nearby
                    var barLeft = s.bars.align == "left" ? 0 : -s.bars.barWidth/2,
                        barRight = barLeft + s.bars.barWidth;

                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1], b = points[j + 2];
                        if (x == null)
                            continue;

                        // for a bar graph, the cursor must be inside the bar
                        if (series[i].bars.horizontal ?
                            (mx <= Math.max(b, x) && mx >= Math.min(b, x) &&
                             my >= y + barLeft && my <= y + barRight) :
                            (mx >= x + barLeft && mx <= x + barRight &&
                             my >= Math.min(b, y) && my <= Math.max(b, y)))
                                item = [i, j / ps];
                    }
                }
            }

            if (item) {
                i = item[0];
                j = item[1];
                ps = series[i].datapoints.pointsize;

                return { datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),
                         dataIndex: j,
                         series: series[i],
                         seriesIndex: i };
            }

            return null;
        }

        function onMouseMove(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return s["hoverable"] != false; });
        }

        function onMouseLeave(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return false; });
        }

        function onClick(e) {
            triggerClickHoverEvent("plotclick", e,
                                   function (s) { return s["clickable"] != false; });
        }

        // trigger click or hover event (they send the same parameters
        // so we share their code)
        function triggerClickHoverEvent(eventname, event, seriesFilter) {
            var offset = eventHolder.offset(),
                canvasX = event.pageX - offset.left - plotOffset.left,
                canvasY = event.pageY - offset.top - plotOffset.top,
            pos = canvasToAxisCoords({ left: canvasX, top: canvasY });

            pos.pageX = event.pageX;
            pos.pageY = event.pageY;

            var item = findNearbyItem(canvasX, canvasY, seriesFilter);

            if (item) {
                // fill in mouse pos for any listeners out there
                item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left, 10);
                item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top, 10);
            }

            if (options.grid.autoHighlight) {
                // clear auto-highlights
                for (var i = 0; i < highlights.length; ++i) {
                    var h = highlights[i];
                    if (h.auto == eventname &&
                        !(item && h.series == item.series &&
                          h.point[0] == item.datapoint[0] &&
                          h.point[1] == item.datapoint[1]))
                        unhighlight(h.series, h.point);
                }

                if (item)
                    highlight(item.series, item.datapoint, eventname);
            }

            placeholder.trigger(eventname, [ pos, item ]);
        }

        function triggerRedrawOverlay() {
            var t = options.interaction.redrawOverlayInterval;
            if (t == -1) {      // skip event queue
                drawOverlay();
                return;
            }

            if (!redrawTimeout)
                redrawTimeout = setTimeout(drawOverlay, t);
        }

        function drawOverlay() {
            redrawTimeout = null;

            // draw highlights
            octx.save();
            overlay.clear();
            octx.translate(plotOffset.left, plotOffset.top);

            var i, hi;
            for (i = 0; i < highlights.length; ++i) {
                hi = highlights[i];

                if (hi.series.bars.show)
                    drawBarHighlight(hi.series, hi.point);
                else
                    drawPointHighlight(hi.series, hi.point);
            }
            octx.restore();

            executeHooks(hooks.drawOverlay, [octx]);
        }

        function highlight(s, point, auto) {
            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i == -1) {
                highlights.push({ series: s, point: point, auto: auto });

                triggerRedrawOverlay();
            }
            else if (!auto)
                highlights[i].auto = false;
        }

        function unhighlight(s, point) {
            if (s == null && point == null) {
                highlights = [];
                triggerRedrawOverlay();
                return;
            }

            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i != -1) {
                highlights.splice(i, 1);

                triggerRedrawOverlay();
            }
        }

        function indexOfHighlight(s, p) {
            for (var i = 0; i < highlights.length; ++i) {
                var h = highlights[i];
                if (h.series == s && h.point[0] == p[0]
                    && h.point[1] == p[1])
                    return i;
            }
            return -1;
        }

        function drawPointHighlight(series, point) {
            var x = point[0], y = point[1],
                axisx = series.xaxis, axisy = series.yaxis,
                highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString();

            if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                return;

            var pointRadius = series.points.radius + series.points.lineWidth / 2;
            octx.lineWidth = pointRadius;
            octx.strokeStyle = highlightColor;
            var radius = 1.5 * pointRadius;
            x = axisx.p2c(x);
            y = axisy.p2c(y);

            octx.beginPath();
            if (series.points.symbol == "circle")
                octx.arc(x, y, radius, 0, 2 * Math.PI, false);
            else
                series.points.symbol(octx, x, y, radius, false);
            octx.closePath();
            octx.stroke();
        }

        function drawBarHighlight(series, point) {
            var highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString(),
                fillStyle = highlightColor,
                barLeft = series.bars.align == "left" ? 0 : -series.bars.barWidth/2;

            octx.lineWidth = series.bars.lineWidth;
            octx.strokeStyle = highlightColor;

            drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth,
                    0, function () { return fillStyle; }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth);
        }

        function getColorOrGradient(spec, bottom, top, defaultColor) {
            if (typeof spec == "string")
                return spec;
            else {
                // assume this is a gradient spec; IE currently only
                // supports a simple vertical gradient properly, so that's
                // what we support too
                var gradient = ctx.createLinearGradient(0, top, 0, bottom);

                for (var i = 0, l = spec.colors.length; i < l; ++i) {
                    var c = spec.colors[i];
                    if (typeof c != "string") {
                        var co = $.color.parse(defaultColor);
                        if (c.brightness != null)
                            co = co.scale('rgb', c.brightness);
                        if (c.opacity != null)
                            co.a *= c.opacity;
                        c = co.toString();
                    }
                    gradient.addColorStop(i / (l - 1), c);
                }

                return gradient;
            }
        }
    }

    // Add the plot function to the top level of the jQuery object

    $.plot = function(placeholder, data, options) {
        //var t0 = new Date();
        var plot = new Plot($(placeholder), data, options, $.plot.plugins);
        //(window.console ? console.log : alert)("time used (msecs): " + ((new Date()).getTime() - t0.getTime()));
        return plot;
    };

    $.plot.version = "0.8.0";

    $.plot.plugins = [];

    // Also add the plot function as a chainable property

    $.fn.plot = function(data, options) {
        return this.each(function() {
            $.plot(this, data, options);
        });
    }

    // round to nearby lower multiple of base
    function floorInBase(n, base) {
        return base * Math.floor(n / base);
    }

})(jQuery);
/* Flot plugin for automatically redrawing plots as the placeholder resizes.

Copyright (c) 2007-2013 IOLA and Ole Laursen.
Licensed under the MIT license.

It works by listening for changes on the placeholder div (through the jQuery
resize event plugin) - if the size changes, it will redraw the plot.

There are no options. If you need to disable the plugin for some plots, you
can just fix the size of their placeholders.

*/

/* Inline dependency:
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */


(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);

(function ($) {
    var options = { }; // no options

    function init(plot) {
        function onResize() {
            var placeholder = plot.getPlaceholder();

            // somebody might have hidden us and we can't plot
            // when we don't have the dimensions
            if (placeholder.width() == 0 || placeholder.height() == 0)
                return;

            plot.resize();
            plot.setupGrid();
            plot.draw();
        }
        
        function bindEvents(plot, eventHolder) {
            plot.getPlaceholder().resize(onResize);
        }

        function shutdown(plot, eventHolder) {
            plot.getPlaceholder().unbind("resize", onResize);
        }
        
        plot.hooks.bindEvents.push(bindEvents);
        plot.hooks.shutdown.push(shutdown);
    }
    
    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'resize',
        version: '1.0'
    });
})(jQuery);
/* Pretty handling of time axes.

Copyright (c) 2007-2013 IOLA and Ole Laursen.
Licensed under the MIT license.

Set axis.mode to "time" to enable. See the section "Time series data" in
API.txt for details.

*/


(function($) {

	var options = {
		xaxis: {
			timezone: null,		// "browser" for local to the client or timezone for timezone-js
			timeformat: null,	// format string to use
			twelveHourClock: false,	// 12 or 24 time in time mode
			monthNames: null	// list of names of months
		}
	};

	// round to nearby lower multiple of base

	function floorInBase(n, base) {
		return base * Math.floor(n / base);
	}

	// Returns a string with the date d formatted according to fmt.
	// A subset of the Open Group's strftime format is supported.

	function formatDate(d, fmt, monthNames, dayNames) {

		if (typeof d.strftime == "function") {
			return d.strftime(fmt);
		}

		var leftPad = function(n, pad) {
			n = "" + n;
			pad = "" + (pad == null ? "0" : pad);
			return n.length == 1 ? pad + n : n;
		};

		var r = [];
		var escape = false;
		var hours = d.getHours();
		var isAM = hours < 12;

		if (monthNames == null) {
			monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		}

		if (dayNames == null) {
			dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		}

		var hours12;

		if (hours > 12) {
			hours12 = hours - 12;
		} else if (hours == 0) {
			hours12 = 12;
		} else {
			hours12 = hours;
		}

		for (var i = 0; i < fmt.length; ++i) {

			var c = fmt.charAt(i);

			if (escape) {
				switch (c) {
					case 'a': c = "" + dayNames[d.getDay()]; break;
					case 'b': c = "" + monthNames[d.getMonth()]; break;
					case 'd': c = leftPad(d.getDate()); break;
					case 'e': c = leftPad(d.getDate(), " "); break;
					case 'H': c = leftPad(hours); break;
					case 'I': c = leftPad(hours12); break;
					case 'l': c = leftPad(hours12, " "); break;
					case 'm': c = leftPad(d.getMonth() + 1); break;
					case 'M': c = leftPad(d.getMinutes()); break;
					// quarters not in Open Group's strftime specification
					case 'q':
						c = "" + (Math.floor(d.getMonth() / 3) + 1); break;
					case 'S': c = leftPad(d.getSeconds()); break;
					case 'y': c = leftPad(d.getFullYear() % 100); break;
					case 'Y': c = "" + d.getFullYear(); break;
					case 'p': c = (isAM) ? ("" + "am") : ("" + "pm"); break;
					case 'P': c = (isAM) ? ("" + "AM") : ("" + "PM"); break;
					case 'w': c = "" + d.getDay(); break;
				}
				r.push(c);
				escape = false;
			} else {
				if (c == "%") {
					escape = true;
				} else {
					r.push(c);
				}
			}
		}

		return r.join("");
	}

	// To have a consistent view of time-based data independent of which time
	// zone the client happens to be in we need a date-like object independent
	// of time zones.  This is done through a wrapper that only calls the UTC
	// versions of the accessor methods.

	function makeUtcWrapper(d) {

		function addProxyMethod(sourceObj, sourceMethod, targetObj, targetMethod) {
			sourceObj[sourceMethod] = function() {
				return targetObj[targetMethod].apply(targetObj, arguments);
			};
		};

		var utc = {
			date: d
		};

		// support strftime, if found

		if (d.strftime != undefined) {
			addProxyMethod(utc, "strftime", d, "strftime");
		}

		addProxyMethod(utc, "getTime", d, "getTime");
		addProxyMethod(utc, "setTime", d, "setTime");

		var props = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"];

		for (var p = 0; p < props.length; p++) {
			addProxyMethod(utc, "get" + props[p], d, "getUTC" + props[p]);
			addProxyMethod(utc, "set" + props[p], d, "setUTC" + props[p]);
		}

		return utc;
	};

	// select time zone strategy.  This returns a date-like object tied to the
	// desired timezone

	function dateGenerator(ts, opts) {
		if (opts.timezone == "browser") {
			return new Date(ts);
		} else if (!opts.timezone || opts.timezone == "utc") {
			return makeUtcWrapper(new Date(ts));
		} else if (typeof timezoneJS != "undefined" && typeof timezoneJS.Date != "undefined") {
			var d = new timezoneJS.Date();
			// timezone-js is fickle, so be sure to set the time zone before
			// setting the time.
			d.setTimezone(opts.timezone);
			d.setTime(ts);
			return d;
		} else {
			return makeUtcWrapper(new Date(ts));
		}
	}
	
	// map of app. size of time units in milliseconds

	var timeUnitSize = {
		"second": 1000,
		"minute": 60 * 1000,
		"hour": 60 * 60 * 1000,
		"day": 24 * 60 * 60 * 1000,
		"month": 30 * 24 * 60 * 60 * 1000,
		"quarter": 3 * 30 * 24 * 60 * 60 * 1000,
		"year": 365.2425 * 24 * 60 * 60 * 1000
	};

	// the allowed tick sizes, after 1 year we use
	// an integer algorithm

	var baseSpec = [
		[1, "second"], [2, "second"], [5, "second"], [10, "second"],
		[30, "second"], 
		[1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"],
		[30, "minute"], 
		[1, "hour"], [2, "hour"], [4, "hour"],
		[8, "hour"], [12, "hour"],
		[1, "day"], [2, "day"], [3, "day"],
		[0.25, "month"], [0.5, "month"], [1, "month"],
		[2, "month"]
	];

	// we don't know which variant(s) we'll need yet, but generating both is
	// cheap

	var specMonths = baseSpec.concat([[3, "month"], [6, "month"],
		[1, "year"]]);
	var specQuarters = baseSpec.concat([[1, "quarter"], [2, "quarter"],
		[1, "year"]]);

	function init(plot) {
		plot.hooks.processDatapoints.push(function (plot, series, datapoints) {
			$.each(plot.getAxes(), function(axisName, axis) {

				var opts = axis.options;

				if (opts.mode == "time") {
					axis.tickGenerator = function(axis) {

						var ticks = [];
						var d = dateGenerator(axis.min, opts);
						var minSize = 0;

						// make quarter use a possibility if quarters are
						// mentioned in either of these options

						var spec = (opts.tickSize && opts.tickSize[1] ===
							"quarter") ||
							(opts.minTickSize && opts.minTickSize[1] ===
							"quarter") ? specQuarters : specMonths;

						if (opts.minTickSize != null) {
							if (typeof opts.tickSize == "number") {
								minSize = opts.tickSize;
							} else {
								minSize = opts.minTickSize[0] * timeUnitSize[opts.minTickSize[1]];
							}
						}

						for (var i = 0; i < spec.length - 1; ++i) {
							if (axis.delta < (spec[i][0] * timeUnitSize[spec[i][1]]
											  + spec[i + 1][0] * timeUnitSize[spec[i + 1][1]]) / 2
								&& spec[i][0] * timeUnitSize[spec[i][1]] >= minSize) {
								break;
							}
						}

						var size = spec[i][0];
						var unit = spec[i][1];

						// special-case the possibility of several years

						if (unit == "year") {

							// if given a minTickSize in years, just use it,
							// ensuring that it's an integer

							if (opts.minTickSize != null && opts.minTickSize[1] == "year") {
								size = Math.floor(opts.minTickSize[0]);
							} else {

								var magn = Math.pow(10, Math.floor(Math.log(axis.delta / timeUnitSize.year) / Math.LN10));
								var norm = (axis.delta / timeUnitSize.year) / magn;

								if (norm < 1.5) {
									size = 1;
								} else if (norm < 3) {
									size = 2;
								} else if (norm < 7.5) {
									size = 5;
								} else {
									size = 10;
								}

								size *= magn;
							}

							// minimum size for years is 1

							if (size < 1) {
								size = 1;
							}
						}

						axis.tickSize = opts.tickSize || [size, unit];
						var tickSize = axis.tickSize[0];
						unit = axis.tickSize[1];

						var step = tickSize * timeUnitSize[unit];

						if (unit == "second") {
							d.setSeconds(floorInBase(d.getSeconds(), tickSize));
						} else if (unit == "minute") {
							d.setMinutes(floorInBase(d.getMinutes(), tickSize));
						} else if (unit == "hour") {
							d.setHours(floorInBase(d.getHours(), tickSize));
						} else if (unit == "month") {
							d.setMonth(floorInBase(d.getMonth(), tickSize));
						} else if (unit == "quarter") {
							d.setMonth(3 * floorInBase(d.getMonth() / 3,
								tickSize));
						} else if (unit == "year") {
							d.setFullYear(floorInBase(d.getFullYear(), tickSize));
						}

						// reset smaller components

						d.setMilliseconds(0);

						if (step >= timeUnitSize.minute) {
							d.setSeconds(0);
						} else if (step >= timeUnitSize.hour) {
							d.setMinutes(0);
						} else if (step >= timeUnitSize.day) {
							d.setHours(0);
						} else if (step >= timeUnitSize.day * 4) {
							d.setDate(1);
						} else if (step >= timeUnitSize.month * 2) {
							d.setMonth(floorInBase(d.getMonth(), 3));
						} else if (step >= timeUnitSize.quarter * 2) {
							d.setMonth(floorInBase(d.getMonth(), 6));
						} else if (step >= timeUnitSize.year) {
							d.setMonth(0);
						}

						var carry = 0;
						var v = Number.NaN;
						var prev;

						do {

							prev = v;
							v = d.getTime();
							ticks.push(v);

							if (unit == "month" || unit == "quarter") {
								if (tickSize < 1) {

									// a bit complicated - we'll divide the
									// month/quarter up but we need to take
									// care of fractions so we don't end up in
									// the middle of a day

									d.setDate(1);
									var start = d.getTime();
									d.setMonth(d.getMonth() +
										(unit == "quarter" ? 3 : 1));
									var end = d.getTime();
									d.setTime(v + carry * timeUnitSize.hour + (end - start) * tickSize);
									carry = d.getHours();
									d.setHours(0);
								} else {
									d.setMonth(d.getMonth() +
										tickSize * (unit == "quarter" ? 3 : 1));
								}
							} else if (unit == "year") {
								d.setFullYear(d.getFullYear() + tickSize);
							} else {
								d.setTime(v + step);
							}
						} while (v < axis.max && v != prev);

						return ticks;
					};

					axis.tickFormatter = function (v, axis) {

						var d = dateGenerator(v, axis.options);

						// first check global format

						if (opts.timeformat != null) {
							return formatDate(d, opts.timeformat, opts.monthNames, opts.dayNames);
						}

						// possibly use quarters if quarters are mentioned in
						// any of these places

						var useQuarters = (axis.options.tickSize &&
								axis.options.tickSize[1] == "quarter") ||
							(axis.options.minTickSize &&
								axis.options.minTickSize[1] == "quarter");

						var t = axis.tickSize[0] * timeUnitSize[axis.tickSize[1]];
						var span = axis.max - axis.min;
						var suffix = (opts.twelveHourClock) ? " %p" : "";
						var hourCode = (opts.twelveHourClock) ? "%I" : "%H";
						var fmt;

						if (t < timeUnitSize.minute) {
							fmt = hourCode + ":%M:%S" + suffix;
						} else if (t < timeUnitSize.day) {
							if (span < 2 * timeUnitSize.day) {
								fmt = hourCode + ":%M" + suffix;
							} else {
								fmt = "%b %d " + hourCode + ":%M" + suffix;
							}
						} else if (t < timeUnitSize.month) {
							fmt = "%b %d";
						} else if ((useQuarters && t < timeUnitSize.quarter) ||
							(!useQuarters && t < timeUnitSize.year)) {
							if (span < timeUnitSize.year) {
								fmt = "%b";
							} else {
								fmt = "%b %Y";
							}
						} else if (useQuarters && t < timeUnitSize.year) {
							if (span < timeUnitSize.year) {
								fmt = "Q%q";
							} else {
								fmt = "Q%q %Y";
							}
						} else {
							fmt = "%Y";
						}

						var rt = formatDate(d, fmt, opts.monthNames, opts.dayNames);

						return rt;
					};
				}
			});
		});
	}

	$.plot.plugins.push({
		init: init,
		options: options,
		name: 'time',
		version: '1.0'
	});

	// Time-axis support used to be in Flot core, which exposed the
	// formatDate function on the plot object.  Various plugins depend
	// on the function, so we need to re-expose it here.

	$.plot.formatDate = formatDate;

})(jQuery);
/*
 * jquery.flot.tooltip
 *
 * description: easy-to-use tooltips for Flot charts
 * version: 0.6.1
 * author: Krzysztof Urbas @krzysu [myviews.pl]
 * website: https://github.com/krzysu/flot.tooltip
 *
 * build on 2013-07-10
 * released under MIT License, 2012
*/

(function(t){var i={tooltip:!1,tooltipOpts:{content:"%s | X: %x | Y: %y",xDateFormat:null,yDateFormat:null,shifts:{x:10,y:20},defaultTheme:!0,onHover:function(){}}},o=function(t){this.tipPosition={x:0,y:0},this.init(t)};o.prototype.init=function(i){var o=this;i.hooks.bindEvents.push(function(i,e){if(o.plotOptions=i.getOptions(),o.plotOptions.tooltip!==!1&&void 0!==o.plotOptions.tooltip){o.tooltipOptions=o.plotOptions.tooltipOpts;var s=o.getDomElement();t(i.getPlaceholder()).bind("plothover",function(t,i,e){if(e){var n;n=o.stringFormat(o.tooltipOptions.content,e),s.html(n),o.updateTooltipPosition({x:i.pageX,y:i.pageY}),s.css({left:o.tipPosition.x+o.tooltipOptions.shifts.x,top:o.tipPosition.y+o.tooltipOptions.shifts.y}).show(),"function"==typeof o.tooltipOptions.onHover&&o.tooltipOptions.onHover(e,s)}else s.hide().html("")}),e.mousemove(function(t){var i={};i.x=t.pageX,i.y=t.pageY,o.updateTooltipPosition(i)})}})},o.prototype.getDomElement=function(){var i;return t("#flotTip").length>0?i=t("#flotTip"):(i=t("<div />").attr("id","flotTip"),i.appendTo("body").hide().css({position:"absolute"}),this.tooltipOptions.defaultTheme&&i.css({background:"#fff","z-index":"100",padding:"0.4em 0.6em","border-radius":"0.5em","font-size":"0.8em",border:"1px solid #111",display:"inline-block","white-space":"nowrap"})),i},o.prototype.updateTooltipPosition=function(i){var o=t("#flotTip").outerWidth()+this.tooltipOptions.shifts.x,e=t("#flotTip").outerHeight()+this.tooltipOptions.shifts.y;i.x-t(window).scrollLeft()>t(window).innerWidth()-o&&(i.x-=o),i.y-t(window).scrollTop()>t(window).innerHeight()-e&&(i.y-=e),this.tipPosition.x=i.x,this.tipPosition.y=i.y},o.prototype.stringFormat=function(t,i){var o=/%p\.{0,1}(\d{0,})/,e=/%s/,s=/%x\.{0,1}(?:\d{0,})/,n=/%y\.{0,1}(?:\d{0,})/;return"function"==typeof t&&(t=t(i.series.label,i.series.data[i.dataIndex][0],i.series.data[i.dataIndex][1])),i.series.percent!==void 0&&(t=this.adjustValPrecision(o,t,i.series.percent)),i.series.label!==void 0&&(t=t.replace(e,i.series.label)),this.isTimeMode("xaxis",i)&&this.isXDateFormat(i)&&(t=t.replace(s,this.timestampToDate(i.series.data[i.dataIndex][0],this.tooltipOptions.xDateFormat))),this.isTimeMode("yaxis",i)&&this.isYDateFormat(i)&&(t=t.replace(n,this.timestampToDate(i.series.data[i.dataIndex][1],this.tooltipOptions.yDateFormat))),"number"==typeof i.series.data[i.dataIndex][0]&&(t=this.adjustValPrecision(s,t,i.series.data[i.dataIndex][0])),"number"==typeof i.series.data[i.dataIndex][1]&&(t=this.adjustValPrecision(n,t,i.series.data[i.dataIndex][1])),i.series.xaxis.tickFormatter!==void 0&&(t=t.replace(s,i.series.xaxis.tickFormatter(i.series.data[i.dataIndex][0],i.series.xaxis))),i.series.yaxis.tickFormatter!==void 0&&(t=t.replace(n,i.series.yaxis.tickFormatter(i.series.data[i.dataIndex][1],i.series.yaxis))),t},o.prototype.isTimeMode=function(t,i){return i.series[t].options.mode!==void 0&&"time"===i.series[t].options.mode},o.prototype.isXDateFormat=function(){return this.tooltipOptions.xDateFormat!==void 0&&null!==this.tooltipOptions.xDateFormat},o.prototype.isYDateFormat=function(){return this.tooltipOptions.yDateFormat!==void 0&&null!==this.tooltipOptions.yDateFormat},o.prototype.timestampToDate=function(i,o){var e=new Date(i);return t.plot.formatDate(e,o)},o.prototype.adjustValPrecision=function(t,i,o){var e,s=i.match(t);return null!==s&&""!==RegExp.$1&&(e=RegExp.$1,o=o.toFixed(e),i=i.replace(t,o)),i};var e=function(t){new o(t)};t.plot.plugins.push({init:e,options:i,name:"tooltip",version:"0.6.1"})})(jQuery);

/*
 * jquery.flot.tooltip
 *
 * desc:	create tooltip with values of hovered point on the graph,
 support many series, time mode, stacking
 you can set custom tip content (also with use of HTML tags) and precision of values
 * version:	0.5
 * author: 	Krzysztof Urbas @krzysu [myviews.pl]
 * modify:  SKELETON9@9#, https://github.com/skeleton9/flot.tooltip
 * website:	https://github.com/krzysu/flot.tooltip
 *
 * released under MIT License, 2012
 */

(function ($) {
    var options = {
        tooltip: false, //boolean
        tooltipOpts: {
            content: "%s | X: %x | Y: %y.2", //%s -> series label, %x -> X value, %y -> Y value, %x.2 -> precision of X value, %p.2 -> percentage of pie or stacked with precision
            dateFormat: "%y-%0m-%0d",
            shifts: {
                x: 10,
                y: 20
            },
            defaultTheme: true,
            labelRegex: null      //use regex to process label
        }
    };

    var init = function(plot) {
        var adjustLabel = null;
        var tipPosition = {x: 0, y: 0};
        var opts = plot.getOptions();
        var processed = false;
        var stackSums = {};

        var updateTooltipPosition = function(pos) {
            tipPosition.x = pos.x;
            tipPosition.y = pos.y;
        };

        var onMouseMove = function(e) {

            var pos = {x: 0, y: 0};
            pos.x = e.pageX;
            pos.y = e.pageY;

            updateTooltipPosition(pos);
        };

        var timestampToDate = function(tmst) {

            var theDate = new Date(tmst);

            return $.plot.formatDate(theDate, opts.tooltipOpts.dateFormat);
        };

        plot.hooks.processOptions.push(function(plot, options)
        {
            if(options.tooltipOpts.labelRegex)
            {
                adjustLabel = options.tooltipOpts.labelRegex;
            }
            if(options.series.stack) // support percentage for stacked chart, add by skeleton9
            {
                plot.hooks.processRawData.push(processRawData);
            }
        });

        plot.hooks.bindEvents.push(function (plot, eventHolder) {

            var to = opts.tooltipOpts;
            var placeholder = plot.getPlaceholder();
            var $tip;

            if (opts.tooltip === false) return;

            if( $('#flotTip').length > 0 ){
                $tip = $('#flotTip');
            }
            else {
                $tip = $('<div />').attr('id', 'flotTip');
                $tip.appendTo('body').hide().css({position: 'absolute'});

                if(to.defaultTheme) {
                    $tip.css({
                        'background': '#fff',
                        'z-index': '10000',
                        'padding': '0.4em 0.6em',
                        'border-radius': '0.5em',
                        'font-size': '0.8em',
                        'border': '1px solid #111'
                    });
                }
            }

            $(placeholder).bind("plotclick", function (event, pos, item) {
                if (item) {
                    var tipText;

                    if(opts.xaxis.mode === "time" || opts.xaxes[0].mode === "time") {
                        tipText = stringFormat(to.content, item, timestampToDate);
                    }
                    else {
                        tipText = stringFormat(to.content, item);
                    }

                    $tip.html( tipText ).css({left: tipPosition.x + to.shifts.x, top: tipPosition.y + to.shifts.y}).show();
                }
                else {
                    $tip.hide().html('');
                }
            });

            eventHolder.mousemove(onMouseMove);
        });

        var stringFormat = function(content, item, fnct) {
            if (item.series.tooltipOpts && item.series.tooltipOpts.content){
                content = item.series.tooltipOpts.content;
            }
            var seriesPattern = /%s/;
            var xPattern = /%x\.{0,1}(\d{0,})/;
            var yPattern = /%y\.{0,1}(\d{0,})/;
            var pPattern = /%p\.{0,1}(\d{0,})/; //add by skeleton9 to support percentage in pie/stacked

            //series match
            if( typeof(item.series.label) !== 'undefined' ) {
                var label = item.series.label;
                if(adjustLabel)
                {
                    label = label.match(adjustLabel)[0]
                }
                content = content.replace(seriesPattern, label);
            }
            // xVal match
            if( typeof(fnct) === 'function' ) {
                content = content.replace(xPattern, fnct(item.series.data[item.dataIndex][0]) );
            }
            else {
                content = adjustValPrecision(xPattern, content, item.series.data[item.dataIndex][0]);
            }
            // yVal match
            content = adjustValPrecision(yPattern, content, item.series.data[item.dataIndex][1]);

            //add by skeleton9 to support percentage in pie
            if(item.series.percent)
            {
                content = adjustValPrecision(pPattern, content, item.series.percent);
            }
            else if(item.series.percents) //support for stacked percentage
            {
                content = adjustValPrecision(pPattern, content, item.series.percents[item.dataIndex])
            }

            return content;
        };

        var adjustValPrecision = function(pattern, content, value) {

            var precision;
            if( content.match(pattern) !== 'null' ) {
                if(RegExp.$1 !== '') {
                    precision = RegExp.$1;
                    value = value.toFixed(precision)
                }
                content = content.replace(pattern, value);
            }

            return content;
        };

        //set percentage for stacked chart
        function processRawData(plot, series, data, datapoints)
        {
            if (!processed)
            {
                processed = true;
                stackSums = getStackSums(plot.getData());
            }
            var num = data.length;
            series.percents = [];
            for(var j=0;j<num;j++)
            {
                var sum = stackSums[data[j][0]+""];
                if(sum>0)
                {
                    series.percents.push(data[j][1]*100/sum);
                } else {
                    series.percents.push(0);
                }
            }
        }

        //calculate summary
        function getStackSums(_data) {
            var data_len = _data.length;
            var sums = {};
            if (data_len > 0) {
                //caculate summary
                for (var i = 0; i < data_len; i++) {
                    if (_data[i].stackpercent || _data[i].stack) {
                        var key_idx = 0;
                        var value_idx = 1;
                        if (_data[i].bars && _data[i].bars.horizontal && _data[i].bars.horizontal === true) {
                            key_idx = 1;
                            value_idx = 0;
                        }
                        var num = _data[i].data.length;
                        for (var j = 0; j < num; j++) {
                            var value = 0;
                            if (_data[i].data[j][1] != null) {
                                value = _data[i].data[j][value_idx];
                            }
                            if (sums[_data[i].data[j][key_idx] + ""]) {
                                sums[_data[i].data[j][key_idx] + ""] += value;
                            } else {
                                sums[_data[i].data[j][key_idx] + ""] = value;
                            }

                        }
                    }
                }
            }
            return sums;
        }
    }

    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'tooltip',
        version: '0.5'
    });
})(jQuery);
/*
 * Make It Retina v1.1 - jQuery Plugin
 * http://www.steviostudio.it
 *
 * Cristoforo Stevio Cervino
 * Date: 28/07/2012
 */

(function(a){a.makeItRetina=function(d){var c={retinaSuffix:"_2x",checkExistenceBefore:true,checkifAlreadyRetina:true,retinaBackgrounds:true,retinaBackgroundsTags:"*",tryEavenforExternalImages:false,consoleDebugMessages:false,makeItRetinaAnyway:false};if(d){a.extend(c,d)}var b=window.devicePixelRatio>1?true:false;a.fn.changeWithRetina=function(e,f){switch(f){case"img":this.attr("src",e);break;case"background":this.css({"background-image":"url("+e+")"});break}};a.fn.addSuffix=function(g,h){var j=this;switch(h){case"img":var f=j.attr("src");break;case"background":var f=j.css("background-image").replace("url(","").replace(")","").replace("'","").replace('"',"");break}var i=f;var e=f.split(".");if(g.checkifAlreadyRetina){if((e[e.length-2].indexOf(g.retinaSuffix))>=0){if(g.consoleDebugMessages){console.log("The image "+f+" is already retina;")}}}e[e.length-1]=(g.retinaSuffix)+"."+e[e.length-1];e[e.length-2]=e[e.length-2]+e[e.length-1];e.splice(e.length-1);f=e.join(".");if(g.checkExistenceBefore){a.ajax({url:f,type:"HEAD",async:true,error:function(){if(g.consoleDebugMessages){console.log("Can not load the image: "+i+".")}},success:function(){j.changeWithRetina(f,h)}})}else{j.changeWithRetina(f,h)}};a.fn.makeMeRetina=function(f,g){switch(g){case"img":var e=this.attr("src");break;case"background":var e=this.css("background-image").replace("url(","").replace(")","").replace("'","").replace('"',"");break}if((e.indexOf("http"))>=0){if((e.indexOf(location.origin))>=0){this.addSuffix(f,g)}else{if(f.tryEavenforExternalImages){this.addSuffix(f,g)}}}else{this.addSuffix(f,g)}};if(b||(c.makeItRetinaAnyway==true)){a(window).load(function(){a("img").each(function(e){a(this).css({width:a(this).width(),height:a(this).height()});var f=a(this).attr("src");if(f!="none"){a(this).makeMeRetina(c,"img")}});if(c.retinaBackgrounds){a(c.retinaBackgroundsTags).each(function(h,j){var g=a(j).css("background-image");var k=a(j).css("background-size");if(g!="none"&&((g.indexOf("http"))>0)){if(k=="auto"){var g=a(j).css("background-image").replace("url(","").replace(")","").replace("'","").replace('"',"");var f=a("<img />");f.hide().attr("src",g);a("body").append(f);f.bind("load",function(){a(this).attr("data-height",a(this).height());a(this).attr("data-width",a(this).width());var e=a(this).attr("data-width")+"px "+a(this).attr("data-height")+"px";a(j).css({"background-size":e}).makeMeRetina(c,"background");a(this).remove()})}else{a(j).makeMeRetina(c,"background")}}})}})}}})(jQuery);
/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */
(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."),void 0;var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){if(t(this[0]).is("form"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this)}),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,"validator").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case"remove":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\s/),function(t,e){u[e]=a[e],delete a[e]}),u}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o)}return o}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide())},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,"");i.settings[s]&&i.settings[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){"string"==typeof s&&(s=s.split(/\s/)),t.each(s,function(t,s){i[s]=e})});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e=0;for(var i in t)e++;return e},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.replace(" ",".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i=t(e).attr("type"),s=t(e).val();return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof s?s.replace(/\r/g,""):s},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),"dependency-mismatch"===i){r=!0;continue}if(r=!1,"pending"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1}catch(o){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+u.method+"' method.",o),o}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0)},customDataMessage:function(e,i){return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase())},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr("for")===i})},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute("type");for(var n in t.validator.methods){var a;"required"===n?(a=s.get(0).getAttribute(n),""===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&"range"!==r&&(i[n]=!0)}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule-"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(""+new Date(t))},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\D/g,"");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r}return 0===i%10},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s="string"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||"true"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()}else{var o={},l=s||n.defaultMessage(i,"remote");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o)}r.valid=a,n.stopRequest(i,a)}},s)),"pending"}}}),t.format=t.validator.format})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;"abort"===t.mode&&(e[r]&&e[r].abort(),e[r]=s)});else{var i=t.ajax;t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments)}}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}(jQuery);
//
// Use internal $.serializeArray to get list of form elements which is
// consistent with $.serialize
//
// From version 2.0.0, $.serializeObject will stop converting [name] values
// to camelCase format. This is *consistent* with other serialize methods:
//
//   - $.serialize
//   - $.serializeArray
//
// If you require camel casing, you can either download version 1.0.4 or map
// them yourself.
//
$.fn.serializeObject = function () {
  "use strict";

  var result = {};
  var extend = function (i, element) {
    var node = result[element.name];

// If node with same name exists already, need to convert it to an array as it
// is a multi-value field (i.e., checkboxes)

    if ('undefined' !== typeof node && node !== null) {
      if ($.isArray(node)) {
        node.push(element.value);
      } else {
        result[element.name] = [node, element.value];
      }
    } else {
      result[element.name] = element.value;
    }
  };

// For each serialzable element, convert element names to camelCasing and
// extend each of them to a JSON object

  $.each(this.serializeArray(), extend);
  return result;
};
/*!
 * jQuery UI Core 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

(function( $, undefined ) {

var uuid = 0,
	runiqueId = /^ui-id-\d+$/;

// $.ui might exist from components with no dependencies, e.g., $.ui.position
$.ui = $.ui || {};

$.extend( $.ui, {
	version: "1.10.3",

	keyCode: {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		NUMPAD_ADD: 107,
		NUMPAD_DECIMAL: 110,
		NUMPAD_DIVIDE: 111,
		NUMPAD_ENTER: 108,
		NUMPAD_MULTIPLY: 106,
		NUMPAD_SUBTRACT: 109,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}
});

// plugins
$.fn.extend({
	focus: (function( orig ) {
		return function( delay, fn ) {
			return typeof delay === "number" ?
				this.each(function() {
					var elem = this;
					setTimeout(function() {
						$( elem ).focus();
						if ( fn ) {
							fn.call( elem );
						}
					}, delay );
				}) :
				orig.apply( this, arguments );
		};
	})( $.fn.focus ),

	scrollParent: function() {
		var scrollParent;
		if (($.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
			scrollParent = this.parents().filter(function() {
				return (/(relative|absolute|fixed)/).test($.css(this,"position")) && (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
			}).eq(0);
		} else {
			scrollParent = this.parents().filter(function() {
				return (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
			}).eq(0);
		}

		return (/fixed/).test(this.css("position")) || !scrollParent.length ? $(document) : scrollParent;
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ), 10 );
					if ( !isNaN( value ) && value !== 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	},

	uniqueId: function() {
		return this.each(function() {
			if ( !this.id ) {
				this.id = "ui-id-" + (++uuid);
			}
		});
	},

	removeUniqueId: function() {
		return this.each(function() {
			if ( runiqueId.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		});
	}
});

// selectors
function focusable( element, isTabIndexNotNaN ) {
	var map, mapName, img,
		nodeName = element.nodeName.toLowerCase();
	if ( "area" === nodeName ) {
		map = element.parentNode;
		mapName = map.name;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap=#" + mapName + "]" )[0];
		return !!img && visible( img );
	}
	return ( /input|select|textarea|button|object/.test( nodeName ) ?
		!element.disabled :
		"a" === nodeName ?
			element.href || isTabIndexNotNaN :
			isTabIndexNotNaN) &&
		// the element and all of its ancestors must be visible
		visible( element );
}

function visible( element ) {
	return $.expr.filters.visible( element ) &&
		!$( element ).parents().addBack().filter(function() {
			return $.css( this, "visibility" ) === "hidden";
		}).length;
}

$.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo(function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		}) :
		// support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		},

	focusable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
	},

	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			isTabIndexNaN = isNaN( tabIndex );
		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
	}
});

// support: jQuery <1.8
if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
	$.each( [ "Width", "Height" ], function( i, name ) {
		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce( elem, size, border, margin ) {
			$.each( side, function() {
				size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
				if ( border ) {
					size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
				}
				if ( margin ) {
					size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
				}
			});
			return size;
		}

		$.fn[ "inner" + name ] = function( size ) {
			if ( size === undefined ) {
				return orig[ "inner" + name ].call( this );
			}

			return this.each(function() {
				$( this ).css( type, reduce( this, size ) + "px" );
			});
		};

		$.fn[ "outer" + name] = function( size, margin ) {
			if ( typeof size !== "number" ) {
				return orig[ "outer" + name ].call( this, size );
			}

			return this.each(function() {
				$( this).css( type, reduce( this, size, true, margin ) + "px" );
			});
		};
	});
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
	$.fn.removeData = (function( removeData ) {
		return function( key ) {
			if ( arguments.length ) {
				return removeData.call( this, $.camelCase( key ) );
			} else {
				return removeData.call( this );
			}
		};
	})( $.fn.removeData );
}





// deprecated
$.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

$.support.selectstart = "onselectstart" in document.createElement( "div" );
$.fn.extend({
	disableSelection: function() {
		return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
			".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
	},

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	}
});

$.extend( $.ui, {
	// $.ui.plugin is deprecated. Use $.widget() extensions instead.
	plugin: {
		add: function( module, option, set ) {
			var i,
				proto = $.ui[ module ].prototype;
			for ( i in set ) {
				proto.plugins[ i ] = proto.plugins[ i ] || [];
				proto.plugins[ i ].push( [ option, set[ i ] ] );
			}
		},
		call: function( instance, name, args ) {
			var i,
				set = instance.plugins[ name ];
			if ( !set || !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) {
				return;
			}

			for ( i = 0; i < set.length; i++ ) {
				if ( instance.options[ set[ i ][ 0 ] ] ) {
					set[ i ][ 1 ].apply( instance.element, args );
				}
			}
		}
	},

	// only used by resizable
	hasScroll: function( el, a ) {

		//If overflow is hidden, the element might have extra content, but the user wants to hide it
		if ( $( el ).css( "overflow" ) === "hidden") {
			return false;
		}

		var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
			has = false;

		if ( el[ scroll ] > 0 ) {
			return true;
		}

		// TODO: determine which cases actually cause this to happen
		// if the element doesn't have the scroll set, see if it's possible to
		// set the scroll
		el[ scroll ] = 1;
		has = ( el[ scroll ] > 0 );
		el[ scroll ] = 0;
		return has;
	}
});

})( jQuery );
/*!
 * jQuery UI Widget 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */

(function( $, undefined ) {

var uuid = 0,
	slice = Array.prototype.slice,
	_cleanData = $.cleanData;
$.cleanData = function( elems ) {
	for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
		try {
			$( elem ).triggerHandler( "remove" );
		// http://bugs.jquery.com/ticket/8235
		} catch( e ) {}
	}
	_cleanData( elems );
};

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );
};

$.widget.extend = function( target ) {
	var input = slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.widget.extend.apply( null, [ options ].concat(args) ) :
			options;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;
		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			// 1.9 BC for #7810
			// TODO remove dual storage
			.removeData( this.widgetName )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( value === undefined ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( value === undefined ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled ui-state-disabled", !!value )
				.attr( "aria-disabled", value );
			this.hoverable.removeClass( "ui-state-hover" );
			this.focusable.removeClass( "ui-state-focus" );
		}

		return this;
	},

	enable: function() {
		return this._setOption( "disabled", false );
	},
	disable: function() {
		return this._setOption( "disabled", true );
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			// accept selectors, DOM elements
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^(\w+)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

})( jQuery );



/*!
 * jQuery UI Button 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */

(function( $, undefined ) {

var lastActive, startXPos, startYPos, clickDragged,
	baseClasses = "ui-button ui-widget ui-state-default ui-corner-all",
	stateClasses = "ui-state-hover ui-state-active ",
	typeClasses = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
	formResetHandler = function() {
		var form = $( this );
		setTimeout(function() {
			form.find( ":ui-button" ).button( "refresh" );
		}, 1 );
	},
	radioGroup = function( radio ) {
		var name = radio.name,
			form = radio.form,
			radios = $( [] );
		if ( name ) {
			name = name.replace( /'/g, "\\'" );
			if ( form ) {
				radios = $( form ).find( "[name='" + name + "']" );
			} else {
				radios = $( "[name='" + name + "']", radio.ownerDocument )
					.filter(function() {
						return !this.form;
					});
			}
		}
		return radios;
	};

$.widget( "ui.button", {
	version: "1.10.3",
	defaultElement: "<button>",
	options: {
		disabled: null,
		text: true,
		label: null,
		icons: {
			primary: null,
			secondary: null
		}
	},
	_create: function() {
		this.element.closest( "form" )
			.unbind( "reset" + this.eventNamespace )
			.bind( "reset" + this.eventNamespace, formResetHandler );

		if ( typeof this.options.disabled !== "boolean" ) {
			this.options.disabled = !!this.element.prop( "disabled" );
		} else {
			this.element.prop( "disabled", this.options.disabled );
		}

		this._determineButtonType();
		this.hasTitle = !!this.buttonElement.attr( "title" );

		var that = this,
			options = this.options,
			toggleButton = this.type === "checkbox" || this.type === "radio",
			activeClass = !toggleButton ? "ui-state-active" : "",
			focusClass = "ui-state-focus";

		if ( options.label === null ) {
			options.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
		}

		this._hoverable( this.buttonElement );

		this.buttonElement
			.addClass( baseClasses )
			.attr( "role", "button" )
			.bind( "mouseenter" + this.eventNamespace, function() {
				if ( options.disabled ) {
					return;
				}
				if ( this === lastActive ) {
					$( this ).addClass( "ui-state-active" );
				}
			})
			.bind( "mouseleave" + this.eventNamespace, function() {
				if ( options.disabled ) {
					return;
				}
				$( this ).removeClass( activeClass );
			})
			.bind( "click" + this.eventNamespace, function( event ) {
				if ( options.disabled ) {
					event.preventDefault();
					event.stopImmediatePropagation();
				}
			});

		this.element
			.bind( "focus" + this.eventNamespace, function() {
				// no need to check disabled, focus won't be triggered anyway
				that.buttonElement.addClass( focusClass );
			})
			.bind( "blur" + this.eventNamespace, function() {
				that.buttonElement.removeClass( focusClass );
			});

		if ( toggleButton ) {
			this.element.bind( "change" + this.eventNamespace, function() {
				if ( clickDragged ) {
					return;
				}
				that.refresh();
			});
			// if mouse moves between mousedown and mouseup (drag) set clickDragged flag
			// prevents issue where button state changes but checkbox/radio checked state
			// does not in Firefox (see ticket #6970)
			this.buttonElement
				.bind( "mousedown" + this.eventNamespace, function( event ) {
					if ( options.disabled ) {
						return;
					}
					clickDragged = false;
					startXPos = event.pageX;
					startYPos = event.pageY;
				})
				.bind( "mouseup" + this.eventNamespace, function( event ) {
					if ( options.disabled ) {
						return;
					}
					if ( startXPos !== event.pageX || startYPos !== event.pageY ) {
						clickDragged = true;
					}
			});
		}

		if ( this.type === "checkbox" ) {
			this.buttonElement.bind( "click" + this.eventNamespace, function() {
				if ( options.disabled || clickDragged ) {
					return false;
				}
			});
		} else if ( this.type === "radio" ) {
			this.buttonElement.bind( "click" + this.eventNamespace, function() {
				if ( options.disabled || clickDragged ) {
					return false;
				}
				$( this ).addClass( "ui-state-active" );
				that.buttonElement.attr( "aria-pressed", "true" );

				var radio = that.element[ 0 ];
				radioGroup( radio )
					.not( radio )
					.map(function() {
						return $( this ).button( "widget" )[ 0 ];
					})
					.removeClass( "ui-state-active" )
					.attr( "aria-pressed", "false" );
			});
		} else {
			this.buttonElement
				.bind( "mousedown" + this.eventNamespace, function() {
					if ( options.disabled ) {
						return false;
					}
					$( this ).addClass( "ui-state-active" );
					lastActive = this;
					that.document.one( "mouseup", function() {
						lastActive = null;
					});
				})
				.bind( "mouseup" + this.eventNamespace, function() {
					if ( options.disabled ) {
						return false;
					}
					$( this ).removeClass( "ui-state-active" );
				})
				.bind( "keydown" + this.eventNamespace, function(event) {
					if ( options.disabled ) {
						return false;
					}
					if ( event.keyCode === $.ui.keyCode.SPACE || event.keyCode === $.ui.keyCode.ENTER ) {
						$( this ).addClass( "ui-state-active" );
					}
				})
				// see #8559, we bind to blur here in case the button element loses
				// focus between keydown and keyup, it would be left in an "active" state
				.bind( "keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
					$( this ).removeClass( "ui-state-active" );
				});

			if ( this.buttonElement.is("a") ) {
				this.buttonElement.keyup(function(event) {
					if ( event.keyCode === $.ui.keyCode.SPACE ) {
						// TODO pass through original event correctly (just as 2nd argument doesn't work)
						$( this ).click();
					}
				});
			}
		}

		// TODO: pull out $.Widget's handling for the disabled option into
		// $.Widget.prototype._setOptionDisabled so it's easy to proxy and can
		// be overridden by individual plugins
		this._setOption( "disabled", options.disabled );
		this._resetButton();
	},

	_determineButtonType: function() {
		var ancestor, labelSelector, checked;

		if ( this.element.is("[type=checkbox]") ) {
			this.type = "checkbox";
		} else if ( this.element.is("[type=radio]") ) {
			this.type = "radio";
		} else if ( this.element.is("input") ) {
			this.type = "input";
		} else {
			this.type = "button";
		}

		if ( this.type === "checkbox" || this.type === "radio" ) {
			// we don't search against the document in case the element
			// is disconnected from the DOM
			ancestor = this.element.parents().last();
			labelSelector = "label[for='" + this.element.attr("id") + "']";
			this.buttonElement = ancestor.find( labelSelector );
			if ( !this.buttonElement.length ) {
				ancestor = ancestor.length ? ancestor.siblings() : this.element.siblings();
				this.buttonElement = ancestor.filter( labelSelector );
				if ( !this.buttonElement.length ) {
					this.buttonElement = ancestor.find( labelSelector );
				}
			}
			this.element.addClass( "ui-helper-hidden-accessible" );

			checked = this.element.is( ":checked" );
			if ( checked ) {
				this.buttonElement.addClass( "ui-state-active" );
			}
			this.buttonElement.prop( "aria-pressed", checked );
		} else {
			this.buttonElement = this.element;
		}
	},

	widget: function() {
		return this.buttonElement;
	},

	_destroy: function() {
		this.element
			.removeClass( "ui-helper-hidden-accessible" );
		this.buttonElement
			.removeClass( baseClasses + " " + stateClasses + " " + typeClasses )
			.removeAttr( "role" )
			.removeAttr( "aria-pressed" )
			.html( this.buttonElement.find(".ui-button-text").html() );

		if ( !this.hasTitle ) {
			this.buttonElement.removeAttr( "title" );
		}
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "disabled" ) {
			if ( value ) {
				this.element.prop( "disabled", true );
			} else {
				this.element.prop( "disabled", false );
			}
			return;
		}
		this._resetButton();
	},

	refresh: function() {
		//See #8237 & #8828
		var isDisabled = this.element.is( "input, button" ) ? this.element.is( ":disabled" ) : this.element.hasClass( "ui-button-disabled" );

		if ( isDisabled !== this.options.disabled ) {
			this._setOption( "disabled", isDisabled );
		}
		if ( this.type === "radio" ) {
			radioGroup( this.element[0] ).each(function() {
				if ( $( this ).is( ":checked" ) ) {
					$( this ).button( "widget" )
						.addClass( "ui-state-active" )
						.attr( "aria-pressed", "true" );
				} else {
					$( this ).button( "widget" )
						.removeClass( "ui-state-active" )
						.attr( "aria-pressed", "false" );
				}
			});
		} else if ( this.type === "checkbox" ) {
			if ( this.element.is( ":checked" ) ) {
				this.buttonElement
					.addClass( "ui-state-active" )
					.attr( "aria-pressed", "true" );
			} else {
				this.buttonElement
					.removeClass( "ui-state-active" )
					.attr( "aria-pressed", "false" );
			}
		}
	},

	_resetButton: function() {
		if ( this.type === "input" ) {
			if ( this.options.label ) {
				this.element.val( this.options.label );
			}
			return;
		}
		var buttonElement = this.buttonElement.removeClass( typeClasses ),
			buttonText = $( "<span></span>", this.document[0] )
				.addClass( "ui-button-text" )
				.html( this.options.label )
				.appendTo( buttonElement.empty() )
				.text(),
			icons = this.options.icons,
			multipleIcons = icons.primary && icons.secondary,
			buttonClasses = [];

		if ( icons.primary || icons.secondary ) {
			if ( this.options.text ) {
				buttonClasses.push( "ui-button-text-icon" + ( multipleIcons ? "s" : ( icons.primary ? "-primary" : "-secondary" ) ) );
			}

			if ( icons.primary ) {
				buttonElement.prepend( "<span class='ui-button-icon-primary ui-icon " + icons.primary + "'></span>" );
			}

			if ( icons.secondary ) {
				buttonElement.append( "<span class='ui-button-icon-secondary ui-icon " + icons.secondary + "'></span>" );
			}

			if ( !this.options.text ) {
				buttonClasses.push( multipleIcons ? "ui-button-icons-only" : "ui-button-icon-only" );

				if ( !this.hasTitle ) {
					buttonElement.attr( "title", $.trim( buttonText ) );
				}
			}
		} else {
			buttonClasses.push( "ui-button-text-only" );
		}
		buttonElement.addClass( buttonClasses.join( " " ) );
	}
});

$.widget( "ui.buttonset", {
	version: "1.10.3",
	options: {
		items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
	},

	_create: function() {
		this.element.addClass( "ui-buttonset" );
	},

	_init: function() {
		this.refresh();
	},

	_setOption: function( key, value ) {
		if ( key === "disabled" ) {
			this.buttons.button( "option", key, value );
		}

		this._super( key, value );
	},

	refresh: function() {
		var rtl = this.element.css( "direction" ) === "rtl";

		this.buttons = this.element.find( this.options.items )
			.filter( ":ui-button" )
				.button( "refresh" )
			.end()
			.not( ":ui-button" )
				.button()
			.end()
			.map(function() {
				return $( this ).button( "widget" )[ 0 ];
			})
				.removeClass( "ui-corner-all ui-corner-left ui-corner-right" )
				.filter( ":first" )
					.addClass( rtl ? "ui-corner-right" : "ui-corner-left" )
				.end()
				.filter( ":last" )
					.addClass( rtl ? "ui-corner-left" : "ui-corner-right" )
				.end()
			.end();
	},

	_destroy: function() {
		this.element.removeClass( "ui-buttonset" );
		this.buttons
			.map(function() {
				return $( this ).button( "widget" )[ 0 ];
			})
				.removeClass( "ui-corner-left ui-corner-right" )
			.end()
			.button( "destroy" );
	}
});

}( jQuery ) );




/*!
 * jQuery UI Spinner 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/spinner/
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 *  jquery.ui.button.js
 */

(function( $ ) {

function modifier( fn ) {
	return function() {
		var previous = this.element.val();
		fn.apply( this, arguments );
		this._refresh();
		if ( previous !== this.element.val() ) {
			this._trigger( "change" );
		}
	};
}

$.widget( "ui.spinner", {
	version: "1.10.3",
	defaultElement: "<input>",
	widgetEventPrefix: "spin",
	options: {
		culture: null,
		icons: {
			down: "ui-icon-triangle-1-s",
			up: "ui-icon-triangle-1-n"
		},
		incremental: true,
		max: null,
		min: null,
		numberFormat: null,
		page: 10,
		step: 1,

		change: null,
		spin: null,
		start: null,
		stop: null
	},

	_create: function() {
		// handle string values that need to be parsed
		this._setOption( "max", this.options.max );
		this._setOption( "min", this.options.min );
		this._setOption( "step", this.options.step );

		// format the value, but don't constrain
		this._value( this.element.val(), true );

		this._draw();
		this._on( this._events );
		this._refresh();

		// turning off autocomplete prevents the browser from remembering the
		// value when navigating through history, so we re-enable autocomplete
		// if the page is unloaded before the widget is destroyed. #7790
		this._on( this.window, {
			beforeunload: function() {
				this.element.removeAttr( "autocomplete" );
			}
		});
	},

	_getCreateOptions: function() {
		var options = {},
			element = this.element;

		$.each( [ "min", "max", "step" ], function( i, option ) {
			var value = element.attr( option );
			if ( value !== undefined && value.length ) {
				options[ option ] = value;
			}
		});

		return options;
	},

	_events: {
		keydown: function( event ) {
			if ( this._start( event ) && this._keydown( event ) ) {
				event.preventDefault();
			}
		},
		keyup: "_stop",
		focus: function() {
			this.previous = this.element.val();
		},
		blur: function( event ) {
			if ( this.cancelBlur ) {
				delete this.cancelBlur;
				return;
			}

			this._stop();
			this._refresh();
			if ( this.previous !== this.element.val() ) {
				this._trigger( "change", event );
			}
		},
		mousewheel: function( event, delta ) {
			if ( !delta ) {
				return;
			}
			if ( !this.spinning && !this._start( event ) ) {
				return false;
			}

			this._spin( (delta > 0 ? 1 : -1) * this.options.step, event );
			clearTimeout( this.mousewheelTimer );
			this.mousewheelTimer = this._delay(function() {
				if ( this.spinning ) {
					this._stop( event );
				}
			}, 100 );
			event.preventDefault();
		},
		"mousedown .ui-spinner-button": function( event ) {
			var previous;

			// We never want the buttons to have focus; whenever the user is
			// interacting with the spinner, the focus should be on the input.
			// If the input is focused then this.previous is properly set from
			// when the input first received focus. If the input is not focused
			// then we need to set this.previous based on the value before spinning.
			previous = this.element[0] === this.document[0].activeElement ?
				this.previous : this.element.val();
			function checkFocus() {
				var isActive = this.element[0] === this.document[0].activeElement;
				if ( !isActive ) {
					this.element.focus();
					this.previous = previous;
					// support: IE
					// IE sets focus asynchronously, so we need to check if focus
					// moved off of the input because the user clicked on the button.
					this._delay(function() {
						this.previous = previous;
					});
				}
			}

			// ensure focus is on (or stays on) the text field
			event.preventDefault();
			checkFocus.call( this );

			// support: IE
			// IE doesn't prevent moving focus even with event.preventDefault()
			// so we set a flag to know when we should ignore the blur event
			// and check (again) if focus moved off of the input.
			this.cancelBlur = true;
			this._delay(function() {
				delete this.cancelBlur;
				checkFocus.call( this );
			});

			if ( this._start( event ) === false ) {
				return;
			}

			this._repeat( null, $( event.currentTarget ).hasClass( "ui-spinner-up" ) ? 1 : -1, event );
		},
		"mouseup .ui-spinner-button": "_stop",
		"mouseenter .ui-spinner-button": function( event ) {
			// button will add ui-state-active if mouse was down while mouseleave and kept down
			if ( !$( event.currentTarget ).hasClass( "ui-state-active" ) ) {
				return;
			}

			if ( this._start( event ) === false ) {
				return false;
			}
			this._repeat( null, $( event.currentTarget ).hasClass( "ui-spinner-up" ) ? 1 : -1, event );
		},
		// TODO: do we really want to consider this a stop?
		// shouldn't we just stop the repeater and wait until mouseup before
		// we trigger the stop event?
		"mouseleave .ui-spinner-button": "_stop"
	},

	_draw: function() {
		var uiSpinner = this.uiSpinner = this.element
			.addClass( "ui-spinner-input" )
			.attr( "autocomplete", "off" )
			.wrap( this._uiSpinnerHtml() )
			.parent()
				// add buttons
				.append( this._buttonHtml() );

		this.element.attr( "role", "spinbutton" );

		// button bindings
		this.buttons = uiSpinner.find( ".ui-spinner-button" )
			.attr( "tabIndex", -1 )
			.button()
			.removeClass( "ui-corner-all" );

		// IE 6 doesn't understand height: 50% for the buttons
		// unless the wrapper has an explicit height
		if ( this.buttons.height() > Math.ceil( uiSpinner.height() * 0.5 ) &&
				uiSpinner.height() > 0 ) {
			uiSpinner.height( uiSpinner.height() );
		}

		// disable spinner if element was already disabled
		if ( this.options.disabled ) {
			this.disable();
		}
	},

	_keydown: function( event ) {
		var options = this.options,
			keyCode = $.ui.keyCode;

		switch ( event.keyCode ) {
		case keyCode.UP:
			this._repeat( null, 1, event );
			return true;
		case keyCode.DOWN:
			this._repeat( null, -1, event );
			return true;
		case keyCode.PAGE_UP:
			this._repeat( null, options.page, event );
			return true;
		case keyCode.PAGE_DOWN:
			this._repeat( null, -options.page, event );
			return true;
		}

		return false;
	},

	_uiSpinnerHtml: function() {
		return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
	},

	_buttonHtml: function() {
		return "" +
			"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>" +
				"<span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" +
			"</a>" +
			"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" +
				"<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" +
			"</a>";
	},

	_start: function( event ) {
		if ( !this.spinning && this._trigger( "start", event ) === false ) {
			return false;
		}

		if ( !this.counter ) {
			this.counter = 1;
		}
		this.spinning = true;
		return true;
	},

	_repeat: function( i, steps, event ) {
		i = i || 500;

		clearTimeout( this.timer );
		this.timer = this._delay(function() {
			this._repeat( 40, steps, event );
		}, i );

		this._spin( steps * this.options.step, event );
	},

	_spin: function( step, event ) {
		var value = this.value() || 0;

		if ( !this.counter ) {
			this.counter = 1;
		}

		value = this._adjustValue( value + step * this._increment( this.counter ) );

		if ( !this.spinning || this._trigger( "spin", event, { value: value } ) !== false) {
			this._value( value );
			this.counter++;
		}
	},

	_increment: function( i ) {
		var incremental = this.options.incremental;

		if ( incremental ) {
			return $.isFunction( incremental ) ?
				incremental( i ) :
				Math.floor( i*i*i/50000 - i*i/500 + 17*i/200 + 1 );
		}

		return 1;
	},

	_precision: function() {
		var precision = this._precisionOf( this.options.step );
		if ( this.options.min !== null ) {
			precision = Math.max( precision, this._precisionOf( this.options.min ) );
		}
		return precision;
	},

	_precisionOf: function( num ) {
		var str = num.toString(),
			decimal = str.indexOf( "." );
		return decimal === -1 ? 0 : str.length - decimal - 1;
	},

	_adjustValue: function( value ) {
		var base, aboveMin,
			options = this.options;

		// make sure we're at a valid step
		// - find out where we are relative to the base (min or 0)
		base = options.min !== null ? options.min : 0;
		aboveMin = value - base;
		// - round to the nearest step
		aboveMin = Math.round(aboveMin / options.step) * options.step;
		// - rounding is based on 0, so adjust back to our base
		value = base + aboveMin;

		// fix precision from bad JS floating point math
		value = parseFloat( value.toFixed( this._precision() ) );

		// clamp the value
		if ( options.max !== null && value > options.max) {
			return options.max;
		}
		if ( options.min !== null && value < options.min ) {
			return options.min;
		}

		return value;
	},

	_stop: function( event ) {
		if ( !this.spinning ) {
			return;
		}

		clearTimeout( this.timer );
		clearTimeout( this.mousewheelTimer );
		this.counter = 0;
		this.spinning = false;
		this._trigger( "stop", event );
	},

	_setOption: function( key, value ) {
		if ( key === "culture" || key === "numberFormat" ) {
			var prevValue = this._parse( this.element.val() );
			this.options[ key ] = value;
			this.element.val( this._format( prevValue ) );
			return;
		}

		if ( key === "max" || key === "min" || key === "step" ) {
			if ( typeof value === "string" ) {
				value = this._parse( value );
			}
		}
		if ( key === "icons" ) {
			this.buttons.first().find( ".ui-icon" )
				.removeClass( this.options.icons.up )
				.addClass( value.up );
			this.buttons.last().find( ".ui-icon" )
				.removeClass( this.options.icons.down )
				.addClass( value.down );
		}

		this._super( key, value );

		if ( key === "disabled" ) {
			if ( value ) {
				this.element.prop( "disabled", true );
				this.buttons.button( "disable" );
			} else {
				this.element.prop( "disabled", false );
				this.buttons.button( "enable" );
			}
		}
	},

	_setOptions: modifier(function( options ) {
		this._super( options );
		this._value( this.element.val() );
	}),

	_parse: function( val ) {
		if ( typeof val === "string" && val !== "" ) {
			val = window.Globalize && this.options.numberFormat ?
				Globalize.parseFloat( val, 10, this.options.culture ) : +val;
		}
		return val === "" || isNaN( val ) ? null : val;
	},

	_format: function( value ) {
		if ( value === "" ) {
			return "";
		}
		return window.Globalize && this.options.numberFormat ?
			Globalize.format( value, this.options.numberFormat, this.options.culture ) :
			value;
	},

	_refresh: function() {
		this.element.attr({
			"aria-valuemin": this.options.min,
			"aria-valuemax": this.options.max,
			// TODO: what should we do with values that can't be parsed?
			"aria-valuenow": this._parse( this.element.val() )
		});
	},

	// update the value without triggering change
	_value: function( value, allowAny ) {
		var parsed;
		if ( value !== "" ) {
			parsed = this._parse( value );
			if ( parsed !== null ) {
				if ( !allowAny ) {
					parsed = this._adjustValue( parsed );
				}
				value = this._format( parsed );
			}
		}
		this.element.val( value );
		this._refresh();
	},

	_destroy: function() {
		this.element
			.removeClass( "ui-spinner-input" )
			.prop( "disabled", false )
			.removeAttr( "autocomplete" )
			.removeAttr( "role" )
			.removeAttr( "aria-valuemin" )
			.removeAttr( "aria-valuemax" )
			.removeAttr( "aria-valuenow" );
		this.uiSpinner.replaceWith( this.element );
	},

	stepUp: modifier(function( steps ) {
		this._stepUp( steps );
	}),
	_stepUp: function( steps ) {
		if ( this._start() ) {
			this._spin( (steps || 1) * this.options.step );
			this._stop();
		}
	},

	stepDown: modifier(function( steps ) {
		this._stepDown( steps );
	}),
	_stepDown: function( steps ) {
		if ( this._start() ) {
			this._spin( (steps || 1) * -this.options.step );
			this._stop();
		}
	},

	pageUp: modifier(function( pages ) {
		this._stepUp( (pages || 1) * this.options.page );
	}),

	pageDown: modifier(function( pages ) {
		this._stepDown( (pages || 1) * this.options.page );
	}),

	value: function( newVal ) {
		if ( !arguments.length ) {
			return this._parse( this.element.val() );
		}
		modifier( this._value ).call( this, newVal );
	},

	widget: function() {
		return this.uiSpinner;
	}
});

}( jQuery ) );
(function() {
  var TimeAgo;

  TimeAgo = (function() {
    function TimeAgo(element, options) {
      this.startInterval = 60000;
      this.init(element, options);
    }

    TimeAgo.prototype.init = function(element, options) {
      this.$element = $(element);
      this.options = $.extend({}, $.fn.timeago.defaults, options);
      this.updateTime();
      return this.startTimer();
    };

    TimeAgo.prototype.startTimer = function() {
      var self;

      self = this;
      return this.interval = setInterval((function() {
        return self.refresh();
      }), this.startInterval);
    };

    TimeAgo.prototype.stopTimer = function() {
      return clearInterval(this.interval);
    };

    TimeAgo.prototype.restartTimer = function() {
      this.stopTimer();
      return this.startTimer();
    };

    TimeAgo.prototype.refresh = function() {
      this.updateTime();
      return this.updateInterval();
    };

    TimeAgo.prototype.updateTime = function() {
      var self;

      self = this;
      return this.$element.findAndSelf(this.options.selector).each(function() {
        var timeAgoInWords;

        timeAgoInWords = self.timeAgoInWords($(this).attr(self.options.attr));
        return $(this).html(timeAgoInWords);
      });
    };

    TimeAgo.prototype.updateInterval = function() {
      var filter, newestTime, newestTimeInMinutes, newestTimeSrc;

      if (this.$element.findAndSelf(this.options.selector).length > 0) {
        if (this.options.dir === "up") {
          filter = ":first";
        } else if (this.options.dir === "down") {
          filter = ":last";
        }
        newestTimeSrc = this.$element.findAndSelf(this.options.selector).filter(filter).attr(this.options.attr);
        newestTime = this.parse(newestTimeSrc);
        newestTimeInMinutes = this.getTimeDistanceInMinutes(newestTime);
        if (newestTimeInMinutes >= 0 && newestTimeInMinutes <= 44 && this.startInterval !== 60000) {
          this.startInterval = 60000;
          return this.restartTimer();
        } else if (newestTimeInMinutes >= 45 && newestTimeInMinutes <= 89 && this.startInterval !== 60000 * 22) {
          this.startInterval = 60000 * 22;
          return this.restartTimer();
        } else if (newestTimeInMinutes >= 90 && newestTimeInMinutes <= 2519 && this.startInterval !== 60000 * 30) {
          this.startInterval = 60000 * 30;
          return this.restartTimer();
        } else if (newestTimeInMinutes >= 2520 && this.startInterval !== 60000 * 60 * 12) {
          this.startInterval = 60000 * 60 * 12;
          return this.restartTimer();
        }
      }
    };

    TimeAgo.prototype.timeAgoInWords = function(timeString) {
      var absolutTime;

      absolutTime = this.parse(timeString);
      return "" + this.options.lang.prefixes.ago + (this.distanceOfTimeInWords(absolutTime)) + this.options.lang.suffix;
    };

    TimeAgo.prototype.parse = function(iso8601) {
      var timeStr;

      timeStr = $.trim(iso8601);
      timeStr = timeStr.replace(/\.\d\d\d+/, "");
      timeStr = timeStr.replace(/-/, "/").replace(/-/, "/");
      timeStr = timeStr.replace(/T/, " ").replace(/Z/, " UTC");
      timeStr = timeStr.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
      return new Date(timeStr);
    };

    TimeAgo.prototype.getTimeDistanceInMinutes = function(absolutTime) {
      var timeDistance;

      timeDistance = new Date().getTime() - absolutTime.getTime();
      return Math.round((Math.abs(timeDistance) / 1000) / 60);
    };

    TimeAgo.prototype.distanceOfTimeInWords = function(absolutTime) {
      var dim;

      dim = this.getTimeDistanceInMinutes(absolutTime);
      if (dim === 0) {
        return "" + this.options.lang.prefixes.lt + " " + this.options.lang.units.minute;
      } else if (dim === 1) {
        return "1 " + this.options.lang.units.minute;
      } else if (dim >= 2 && dim <= 44) {
        return "" + dim + " " + this.options.lang.units.minutes;
      } else if (dim >= 45 && dim <= 89) {
        return "" + this.options.lang.prefixes.about + " 1 " + this.options.lang.units.hour;
      } else if (dim >= 90 && dim <= 1439) {
        return "" + this.options.lang.prefixes.about + " " + (Math.round(dim / 60)) + " " + this.options.lang.units.hours;
      } else if (dim >= 1440 && dim <= 2519) {
        return "1 " + this.options.lang.units.day;
      } else if (dim >= 2520 && dim <= 43199) {
        return "" + (Math.round(dim / 1440)) + " " + this.options.lang.units.days;
      } else if (dim >= 43200 && dim <= 86399) {
        return "" + this.options.lang.prefixes.about + " 1 " + this.options.lang.units.month;
      } else if (dim >= 86400 && dim <= 525599) {
        return "" + (Math.round(dim / 43200)) + " " + this.options.lang.units.months;
      } else if (dim >= 525600 && dim <= 655199) {
        return "" + this.options.lang.prefixes.about + " 1 " + this.options.lang.units.year;
      } else if (dim >= 655200 && dim <= 914399) {
        return "" + this.options.lang.prefixes.over + " 1 " + this.options.lang.units.year;
      } else if (dim >= 914400 && dim <= 1051199) {
        return "" + this.options.lang.prefixes.almost + " 2 " + this.options.lang.units.years;
      } else {
        return "" + this.options.lang.prefixes.about + " " + (Math.round(dim / 525600)) + " " + this.options.lang.units.years;
      }
    };

    return TimeAgo;

  })();

  $.fn.timeago = function(options) {
    if (options == null) {
      options = {};
    }
    return this.each(function() {
      var $this, data;

      $this = $(this);
      data = $this.data("timeago");
      if (!data) {
        $this.data("timeago", new TimeAgo(this, options));
      }
      if (typeof options === 'string') {
        return data[options]();
      }
    });
  };

  $.fn.findAndSelf = function(selector) {
    return this.find(selector).add(this.filter(selector));
  };

  $.fn.timeago.Constructor = TimeAgo;

  $.fn.timeago.defaults = {
    selector: 'time.timeago',
    attr: 'datetime',
    dir: 'up',
    lang: {
      units: {
        second: "second",
        seconds: "seconds",
        minute: "minute",
        minutes: "minutes",
        hour: "hour",
        hours: "hours",
        day: "day",
        days: "days",
        month: "month",
        months: "months",
        year: "year",
        years: "years"
      },
      prefixes: {
        lt: "less than a",
        about: "about",
        over: "over",
        almost: "almost",
        ago: ""
      },
      suffix: ' ago'
    }
  };

}).call(this);
// moment.js
// version : 1.7.2
// author : Tim Wood
// license : MIT
// momentjs.com
(function(a){function E(a,b,c,d){var e=c.lang();return e[a].call?e[a](c,d):e[a][b]}function F(a,b){return function(c){return K(a.call(this,c),b)}}function G(a){return function(b){var c=a.call(this,b);return c+this.lang().ordinal(c)}}function H(a,b,c){this._d=a,this._isUTC=!!b,this._a=a._a||null,this._lang=c||!1}function I(a){var b=this._data={},c=a.years||a.y||0,d=a.months||a.M||0,e=a.weeks||a.w||0,f=a.days||a.d||0,g=a.hours||a.h||0,h=a.minutes||a.m||0,i=a.seconds||a.s||0,j=a.milliseconds||a.ms||0;this._milliseconds=j+i*1e3+h*6e4+g*36e5,this._days=f+e*7,this._months=d+c*12,b.milliseconds=j%1e3,i+=J(j/1e3),b.seconds=i%60,h+=J(i/60),b.minutes=h%60,g+=J(h/60),b.hours=g%24,f+=J(g/24),f+=e*7,b.days=f%30,d+=J(f/30),b.months=d%12,c+=J(d/12),b.years=c,this._lang=!1}function J(a){return a<0?Math.ceil(a):Math.floor(a)}function K(a,b){var c=a+"";while(c.length<b)c="0"+c;return c}function L(a,b,c){var d=b._milliseconds,e=b._days,f=b._months,g;d&&a._d.setTime(+a+d*c),e&&a.date(a.date()+e*c),f&&(g=a.date(),a.date(1).month(a.month()+f*c).date(Math.min(g,a.daysInMonth())))}function M(a){return Object.prototype.toString.call(a)==="[object Array]"}function N(a,b){var c=Math.min(a.length,b.length),d=Math.abs(a.length-b.length),e=0,f;for(f=0;f<c;f++)~~a[f]!==~~b[f]&&e++;return e+d}function O(a,b,c,d){var e,f,g=[];for(e=0;e<7;e++)g[e]=a[e]=a[e]==null?e===2?1:0:a[e];return a[7]=g[7]=b,a[8]!=null&&(g[8]=a[8]),a[3]+=c||0,a[4]+=d||0,f=new Date(0),b?(f.setUTCFullYear(a[0],a[1],a[2]),f.setUTCHours(a[3],a[4],a[5],a[6])):(f.setFullYear(a[0],a[1],a[2]),f.setHours(a[3],a[4],a[5],a[6])),f._a=g,f}function P(a,c){var d,e,g=[];!c&&h&&(c=require("./lang/"+a));for(d=0;d<i.length;d++)c[i[d]]=c[i[d]]||f.en[i[d]];for(d=0;d<12;d++)e=b([2e3,d]),g[d]=new RegExp("^"+(c.months[d]||c.months(e,""))+"|^"+(c.monthsShort[d]||c.monthsShort(e,"")).replace(".",""),"i");return c.monthsParse=c.monthsParse||g,f[a]=c,c}function Q(a){var c=typeof a=="string"&&a||a&&a._lang||null;return c?f[c]||P(c):b}function R(a){return a.match(/\[.*\]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function S(a){var b=a.match(k),c,d;for(c=0,d=b.length;c<d;c++)D[b[c]]?b[c]=D[b[c]]:b[c]=R(b[c]);return function(e){var f="";for(c=0;c<d;c++)f+=typeof b[c].call=="function"?b[c].call(e,a):b[c];return f}}function T(a,b){function d(b){return a.lang().longDateFormat[b]||b}var c=5;while(c--&&l.test(b))b=b.replace(l,d);return A[b]||(A[b]=S(b)),A[b](a)}function U(a){switch(a){case"DDDD":return p;case"YYYY":return q;case"S":case"SS":case"SSS":case"DDD":return o;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return r;case"Z":case"ZZ":return s;case"T":return t;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return n;default:return new RegExp(a.replace("\\",""))}}function V(a,b,c,d){var e,f;switch(a){case"M":case"MM":c[1]=b==null?0:~~b-1;break;case"MMM":case"MMMM":for(e=0;e<12;e++)if(Q().monthsParse[e].test(b)){c[1]=e,f=!0;break}f||(c[8]=!1);break;case"D":case"DD":case"DDD":case"DDDD":b!=null&&(c[2]=~~b);break;case"YY":c[0]=~~b+(~~b>70?1900:2e3);break;case"YYYY":c[0]=~~Math.abs(b);break;case"a":case"A":d.isPm=(b+"").toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":c[3]=~~b;break;case"m":case"mm":c[4]=~~b;break;case"s":case"ss":c[5]=~~b;break;case"S":case"SS":case"SSS":c[6]=~~(("0."+b)*1e3);break;case"Z":case"ZZ":d.isUTC=!0,e=(b+"").match(x),e&&e[1]&&(d.tzh=~~e[1]),e&&e[2]&&(d.tzm=~~e[2]),e&&e[0]==="+"&&(d.tzh=-d.tzh,d.tzm=-d.tzm)}b==null&&(c[8]=!1)}function W(a,b){var c=[0,0,1,0,0,0,0],d={tzh:0,tzm:0},e=b.match(k),f,g;for(f=0;f<e.length;f++)g=(U(e[f]).exec(a)||[])[0],g&&(a=a.slice(a.indexOf(g)+g.length)),D[e[f]]&&V(e[f],g,c,d);return d.isPm&&c[3]<12&&(c[3]+=12),d.isPm===!1&&c[3]===12&&(c[3]=0),O(c,d.isUTC,d.tzh,d.tzm)}function X(a,b){var c,d=a.match(m)||[],e,f=99,g,h,i;for(g=0;g<b.length;g++)h=W(a,b[g]),e=T(new H(h),b[g]).match(m)||[],i=N(d,e),i<f&&(f=i,c=h);return c}function Y(a){var b="YYYY-MM-DDT",c;if(u.exec(a)){for(c=0;c<4;c++)if(w[c][1].exec(a)){b+=w[c][0];break}return s.exec(a)?W(a,b+" Z"):W(a,b)}return new Date(a)}function Z(a,b,c,d,e){var f=e.relativeTime[a];return typeof f=="function"?f(b||1,!!c,a,d):f.replace(/%d/i,b||1)}function $(a,b,c){var e=d(Math.abs(a)/1e3),f=d(e/60),g=d(f/60),h=d(g/24),i=d(h/365),j=e<45&&["s",e]||f===1&&["m"]||f<45&&["mm",f]||g===1&&["h"]||g<22&&["hh",g]||h===1&&["d"]||h<=25&&["dd",h]||h<=45&&["M"]||h<345&&["MM",d(h/30)]||i===1&&["y"]||["yy",i];return j[2]=b,j[3]=a>0,j[4]=c,Z.apply({},j)}function _(a,c){b.fn[a]=function(a){var b=this._isUTC?"UTC":"";return a!=null?(this._d["set"+b+c](a),this):this._d["get"+b+c]()}}function ab(a){b.duration.fn[a]=function(){return this._data[a]}}function bb(a,c){b.duration.fn["as"+a]=function(){return+this/c}}var b,c="1.7.2",d=Math.round,e,f={},g="en",h=typeof module!="undefined"&&module.exports,i="months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),j=/^\/?Date\((\-?\d+)/i,k=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g,l=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g,m=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,n=/\d\d?/,o=/\d{1,3}/,p=/\d{3}/,q=/\d{1,4}/,r=/[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,s=/Z|[\+\-]\d\d:?\d\d/i,t=/T/i,u=/^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,v="YYYY-MM-DDTHH:mm:ssZ",w=[["HH:mm:ss.S",/T\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],x=/([\+\-]|\d\d)/gi,y="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),z={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},A={},B="DDD w M D d".split(" "),C="M D H h m s w".split(" "),D={M:function(){return this.month()+1},MMM:function(a){return E("monthsShort",this.month(),this,a)},MMMM:function(a){return E("months",this.month(),this,a)},D:function(){return this.date()},DDD:function(){var a=new Date(this.year(),this.month(),this.date()),b=new Date(this.year(),0,1);return~~((a-b)/864e5+1.5)},d:function(){return this.day()},dd:function(a){return E("weekdaysMin",this.day(),this,a)},ddd:function(a){return E("weekdaysShort",this.day(),this,a)},dddd:function(a){return E("weekdays",this.day(),this,a)},w:function(){var a=new Date(this.year(),this.month(),this.date()-this.day()+5),b=new Date(a.getFullYear(),0,4);return~~((a-b)/864e5/7+1.5)},YY:function(){return K(this.year()%100,2)},YYYY:function(){return K(this.year(),4)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return K(~~(this.milliseconds()/10),2)},SSS:function(){return K(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return a<0&&(a=-a,b="-"),b+K(~~(a/60),2)+":"+K(~~a%60,2)},ZZ:function(){var a=-this.zone(),b="+";return a<0&&(a=-a,b="-"),b+K(~~(10*a/6),4)}};while(B.length)e=B.pop(),D[e+"o"]=G(D[e]);while(C.length)e=C.pop(),D[e+e]=F(D[e],2);D.DDDD=F(D.DDD,3),b=function(c,d){if(c===null||c==="")return null;var e,f;return b.isMoment(c)?new H(new Date(+c._d),c._isUTC,c._lang):(d?M(d)?e=X(c,d):e=W(c,d):(f=j.exec(c),e=c===a?new Date:f?new Date(+f[1]):c instanceof Date?c:M(c)?O(c):typeof c=="string"?Y(c):new Date(c)),new H(e))},b.utc=function(a,c){return M(a)?new H(O(a,!0),!0):(typeof a=="string"&&!s.exec(a)&&(a+=" +0000",c&&(c+=" Z")),b(a,c).utc())},b.unix=function(a){return b(a*1e3)},b.duration=function(a,c){var d=b.isDuration(a),e=typeof a=="number",f=d?a._data:e?{}:a,g;return e&&(c?f[c]=a:f.milliseconds=a),g=new I(f),d&&(g._lang=a._lang),g},b.humanizeDuration=function(a,c,d){return b.duration(a,c===!0?null:c).humanize(c===!0?!0:d)},b.version=c,b.defaultFormat=v,b.lang=function(a,c){var d;if(!a)return g;(c||!f[a])&&P(a,c);if(f[a]){for(d=0;d<i.length;d++)b[i[d]]=f[a][i[d]];b.monthsParse=f[a].monthsParse,g=a}},b.langData=Q,b.isMoment=function(a){return a instanceof H},b.isDuration=function(a){return a instanceof I},b.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(a){var b=a%10;return~~(a%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th"}}),b.fn=H.prototype={clone:function(){return b(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this._d.toString()},toDate:function(){return this._d},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds(),!!this._isUTC]},isValid:function(){return this._a?this._a[8]!=null?!!this._a[8]:!N(this._a,(this._a[7]?b.utc(this._a):b(this._a)).toArray()):!isNaN(this._d.getTime())},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(a){return T(this,a?a:b.defaultFormat)},add:function(a,c){var d=c?b.duration(+c,a):b.duration(a);return L(this,d,1),this},subtract:function(a,c){var d=c?b.duration(+c,a):b.duration(a);return L(this,d,-1),this},diff:function(a,c,e){var f=this._isUTC?b(a).utc():b(a).local(),g=(this.zone()-f.zone())*6e4,h=this._d-f._d-g,i=this.year()-f.year(),j=this.month()-f.month(),k=this.date()-f.date(),l;return c==="months"?l=i*12+j+k/30:c==="years"?l=i+(j+k/30)/12:l=c==="seconds"?h/1e3:c==="minutes"?h/6e4:c==="hours"?h/36e5:c==="days"?h/864e5:c==="weeks"?h/6048e5:h,e?l:d(l)},from:function(a,c){return b.duration(this.diff(a)).lang(this._lang).humanize(!c)},fromNow:function(a){return this.from(b(),a)},calendar:function(){var a=this.diff(b().sod(),"days",!0),c=this.lang().calendar,d=c.sameElse,e=a<-6?d:a<-1?c.lastWeek:a<0?c.lastDay:a<1?c.sameDay:a<2?c.nextDay:a<7?c.nextWeek:d;return this.format(typeof e=="function"?e.apply(this):e)},isLeapYear:function(){var a=this.year();return a%4===0&&a%100!==0||a%400===0},isDST:function(){return this.zone()<b([this.year()]).zone()||this.zone()<b([this.year(),5]).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return a==null?b:this.add({d:a-b})},startOf:function(a){switch(a.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return this},endOf:function(a){return this.startOf(a).add(a.replace(/s?$/,"s"),1).subtract("ms",1)},sod:function(){return this.clone().startOf("day")},eod:function(){return this.clone().endOf("day")},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return b.utc([this.year(),this.month()+1,0]).date()},lang:function(b){return b===a?Q(this):(this._lang=b,this)}};for(e=0;e<y.length;e++)_(y[e].toLowerCase(),y[e]);_("year","FullYear"),b.duration.fn=I.prototype={weeks:function(){return J(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(a){var b=+this,c=this.lang().relativeTime,d=$(b,!a,this.lang()),e=b<=0?c.past:c.future;return a&&(typeof e=="function"?d=e(d):d=e.replace(/%s/i,d)),d},lang:b.fn.lang};for(e in z)z.hasOwnProperty(e)&&(bb(e,z[e]),ab(e.toLowerCase()));bb("Weeks",6048e5),h&&(module.exports=b),typeof ender=="undefined"&&(this.moment=b),typeof define=="function"&&define.amd&&define("moment",[],function(){return b})}).call(this);
(function() {
  var $, Controller, Events, Log, Model, Module, Spine, createObject, isArray, isBlank, makeArray, moduleKeywords,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Events = {
    bind: function(ev, callback) {
      var calls, evs, name, _i, _len;

      evs = ev.split(' ');
      calls = this.hasOwnProperty('_callbacks') && this._callbacks || (this._callbacks = {});
      for (_i = 0, _len = evs.length; _i < _len; _i++) {
        name = evs[_i];
        calls[name] || (calls[name] = []);
        calls[name].push(callback);
      }
      return this;
    },
    one: function(ev, callback) {
      var handler;

      return this.bind(ev, handler = function() {
        this.unbind(ev, handler);
        return callback.apply(this, arguments);
      });
    },
    trigger: function() {
      var args, callback, ev, list, _i, _len, _ref;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      ev = args.shift();
      list = this.hasOwnProperty('_callbacks') && ((_ref = this._callbacks) != null ? _ref[ev] : void 0);
      if (!list) {
        return;
      }
      for (_i = 0, _len = list.length; _i < _len; _i++) {
        callback = list[_i];
        if (callback.apply(this, args) === false) {
          break;
        }
      }
      return true;
    },
    listenTo: function(obj, ev, callback) {
      obj.bind(ev, callback);
      this.listeningTo || (this.listeningTo = []);
      this.listeningTo.push(obj);
      return this;
    },
    listenToOnce: function(obj, ev, callback) {
      var listeningToOnce;

      listeningToOnce = this.listeningToOnce || (this.listeningToOnce = []);
      listeningToOnce.push(obj);
      obj.one(ev, function() {
        var idx;

        idx = listeningToOnce.indexOf(obj);
        if (idx !== -1) {
          listeningToOnce.splice(idx, 1);
        }
        return callback.apply(this, arguments);
      });
      return this;
    },
    stopListening: function(obj, ev, callback) {
      var idx, listeningTo, retain, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _results;

      if (arguments.length === 0) {
        retain = [];
        _ref = [this.listeningTo, this.listeningToOnce];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          listeningTo = _ref[_i];
          if (!listeningTo) {
            continue;
          }
          for (_j = 0, _len1 = listeningTo.length; _j < _len1; _j++) {
            obj = listeningTo[_j];
            if (!(!(__indexOf.call(retain, obj) >= 0))) {
              continue;
            }
            obj.unbind();
            retain.push(obj);
          }
        }
        this.listeningTo = void 0;
        return this.listeningToOnce = void 0;
      } else if (obj) {
        if (ev) {
          obj.unbind(ev, callback);
        }
        if (!ev) {
          obj.unbind();
        }
        _ref1 = [this.listeningTo, this.listeningToOnce];
        _results = [];
        for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
          listeningTo = _ref1[_k];
          if (!listeningTo) {
            continue;
          }
          idx = listeningTo.indexOf(obj);
          if (idx !== -1) {
            _results.push(listeningTo.splice(idx, 1));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    },
    unbind: function(ev, callback) {
      var cb, evs, i, list, name, _i, _j, _len, _len1, _ref;

      if (arguments.length === 0) {
        this._callbacks = {};
        return this;
      }
      if (!ev) {
        return this;
      }
      evs = ev.split(' ');
      for (_i = 0, _len = evs.length; _i < _len; _i++) {
        name = evs[_i];
        list = (_ref = this._callbacks) != null ? _ref[name] : void 0;
        if (!list) {
          continue;
        }
        if (!callback) {
          delete this._callbacks[name];
          continue;
        }
        for (i = _j = 0, _len1 = list.length; _j < _len1; i = ++_j) {
          cb = list[i];
          if (!(cb === callback)) {
            continue;
          }
          list = list.slice();
          list.splice(i, 1);
          this._callbacks[name] = list;
          break;
        }
      }
      return this;
    }
  };

  Events.on = Events.bind;

  Events.off = Events.unbind;

  Log = {
    trace: true,
    logPrefix: '(App)',
    log: function() {
      var args;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (!this.trace) {
        return;
      }
      if (this.logPrefix) {
        args.unshift(this.logPrefix);
      }
      if (typeof console !== "undefined" && console !== null) {
        if (typeof console.log === "function") {
          console.log.apply(console, args);
        }
      }
      return this;
    }
  };

  moduleKeywords = ['included', 'extended'];

  Module = (function() {
    Module.include = function(obj) {
      var key, value, _ref;

      if (!obj) {
        throw new Error('include(obj) requires obj');
      }
      for (key in obj) {
        value = obj[key];
        if (__indexOf.call(moduleKeywords, key) < 0) {
          this.prototype[key] = value;
        }
      }
      if ((_ref = obj.included) != null) {
        _ref.apply(this);
      }
      return this;
    };

    Module.extend = function(obj) {
      var key, value, _ref;

      if (!obj) {
        throw new Error('extend(obj) requires obj');
      }
      for (key in obj) {
        value = obj[key];
        if (__indexOf.call(moduleKeywords, key) < 0) {
          this[key] = value;
        }
      }
      if ((_ref = obj.extended) != null) {
        _ref.apply(this);
      }
      return this;
    };

    Module.proxy = function(func) {
      var _this = this;

      return function() {
        return func.apply(_this, arguments);
      };
    };

    Module.prototype.proxy = function(func) {
      var _this = this;

      return function() {
        return func.apply(_this, arguments);
      };
    };

    function Module() {
      if (typeof this.init === "function") {
        this.init.apply(this, arguments);
      }
    }

    return Module;

  })();

  Model = (function(_super) {
    __extends(Model, _super);

    Model.extend(Events);

    Model.records = [];

    Model.irecords = {};

    Model.crecords = {};

    Model.attributes = [];

    Model.configure = function() {
      var attributes, name;

      name = arguments[0], attributes = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      this.className = name;
      this.deleteAll();
      if (attributes.length) {
        this.attributes = attributes;
      }
      this.attributes && (this.attributes = makeArray(this.attributes));
      this.attributes || (this.attributes = []);
      this.unbind();
      return this;
    };

    Model.toString = function() {
      return "" + this.className + "(" + (this.attributes.join(", ")) + ")";
    };

    Model.find = function(id) {
      var record;

      record = this.exists(id);
      if (!record) {
        throw new Error("\"" + this.className + "\" model could not find a record for the ID \"" + id + "\"");
      }
      return record;
    };

    Model.exists = function(id) {
      var _ref, _ref1;

      return (_ref = (_ref1 = this.irecords[id]) != null ? _ref1 : this.crecords[id]) != null ? _ref.clone() : void 0;
    };

    Model.refresh = function(values, options) {
      var record, records, result, _i, _len;

      if (options == null) {
        options = {};
      }
      if (options.clear) {
        this.deleteAll();
      }
      records = this.fromJSON(values);
      if (!isArray(records)) {
        records = [records];
      }
      for (_i = 0, _len = records.length; _i < _len; _i++) {
        record = records[_i];
        if (record.id && this.irecords[record.id]) {
          this.records[this.records.indexOf(this.irecords[record.id])] = record;
        } else {
          record.id || (record.id = record.cid);
          this.records.push(record);
        }
        this.irecords[record.id] = record;
        this.crecords[record.cid] = record;
      }
      this.sort();
      result = this.cloneArray(records);
      this.trigger('refresh', this.cloneArray(records));
      return result;
    };

    Model.select = function(callback) {
      var record, _i, _len, _ref, _results;

      _ref = this.records;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        record = _ref[_i];
        if (callback(record)) {
          _results.push(record.clone());
        }
      }
      return _results;
    };

    Model.findByAttribute = function(name, value) {
      var record, _i, _len, _ref;

      _ref = this.records;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        record = _ref[_i];
        if (record[name] === value) {
          return record.clone();
        }
      }
      return null;
    };

    Model.findAllByAttribute = function(name, value) {
      return this.select(function(item) {
        return item[name] === value;
      });
    };

    Model.each = function(callback) {
      var record, _i, _len, _ref, _results;

      _ref = this.records;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        record = _ref[_i];
        _results.push(callback(record.clone()));
      }
      return _results;
    };

    Model.all = function() {
      return this.cloneArray(this.records);
    };

    Model.first = function() {
      var _ref;

      return (_ref = this.records[0]) != null ? _ref.clone() : void 0;
    };

    Model.last = function() {
      var _ref;

      return (_ref = this.records[this.records.length - 1]) != null ? _ref.clone() : void 0;
    };

    Model.count = function() {
      return this.records.length;
    };

    Model.deleteAll = function() {
      this.records = [];
      this.irecords = {};
      return this.crecords = {};
    };

    Model.destroyAll = function(options) {
      var record, _i, _len, _ref, _results;

      _ref = this.records;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        record = _ref[_i];
        _results.push(record.destroy(options));
      }
      return _results;
    };

    Model.update = function(id, atts, options) {
      return this.find(id).updateAttributes(atts, options);
    };

    Model.create = function(atts, options) {
      var record;

      record = new this(atts);
      return record.save(options);
    };

    Model.destroy = function(id, options) {
      return this.find(id).destroy(options);
    };

    Model.change = function(callbackOrParams) {
      if (typeof callbackOrParams === 'function') {
        return this.bind('change', callbackOrParams);
      } else {
        return this.trigger.apply(this, ['change'].concat(__slice.call(arguments)));
      }
    };

    Model.fetch = function(callbackOrParams) {
      if (typeof callbackOrParams === 'function') {
        return this.bind('fetch', callbackOrParams);
      } else {
        return this.trigger.apply(this, ['fetch'].concat(__slice.call(arguments)));
      }
    };

    Model.toJSON = function() {
      return this.records;
    };

    Model.fromJSON = function(objects) {
      var value, _i, _len, _results;

      if (!objects) {
        return;
      }
      if (typeof objects === 'string') {
        objects = JSON.parse(objects);
      }
      if (isArray(objects)) {
        _results = [];
        for (_i = 0, _len = objects.length; _i < _len; _i++) {
          value = objects[_i];
          _results.push(new this(value));
        }
        return _results;
      } else {
        return new this(objects);
      }
    };

    Model.fromForm = function() {
      var _ref;

      return (_ref = new this).fromForm.apply(_ref, arguments);
    };

    Model.sort = function() {
      if (this.comparator) {
        this.records.sort(this.comparator);
      }
      return this.records;
    };

    Model.cloneArray = function(array) {
      var value, _i, _len, _results;

      _results = [];
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        value = array[_i];
        _results.push(value.clone());
      }
      return _results;
    };

    Model.idCounter = 0;

    Model.uid = function(prefix) {
      var uid;

      if (prefix == null) {
        prefix = '';
      }
      uid = prefix + this.idCounter++;
      if (this.exists(uid)) {
        uid = this.uid(prefix);
      }
      return uid;
    };

    function Model(atts) {
      Model.__super__.constructor.apply(this, arguments);
      if (atts) {
        this.load(atts);
      }
      this.cid = this.constructor.uid('c-');
    }

    Model.prototype.isNew = function() {
      return !this.exists();
    };

    Model.prototype.isValid = function() {
      return !this.validate();
    };

    Model.prototype.validate = function() {};

    Model.prototype.load = function(atts) {
      var key, value;

      if (atts.id) {
        this.id = atts.id;
      }
      for (key in atts) {
        value = atts[key];
        if (atts.hasOwnProperty(key) && typeof this[key] === 'function') {
          this[key](value);
        } else {
          this[key] = value;
        }
      }
      return this;
    };

    Model.prototype.attributes = function() {
      var key, result, _i, _len, _ref;

      result = {};
      _ref = this.constructor.attributes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        if (key in this) {
          if (typeof this[key] === 'function') {
            result[key] = this[key]();
          } else {
            result[key] = this[key];
          }
        }
      }
      if (this.id) {
        result.id = this.id;
      }
      return result;
    };

    Model.prototype.eql = function(rec) {
      return !!(rec && rec.constructor === this.constructor && (rec.cid === this.cid) || (rec.id && rec.id === this.id));
    };

    Model.prototype.save = function(options) {
      var error, record;

      if (options == null) {
        options = {};
      }
      if (options.validate !== false) {
        error = this.validate();
        if (error) {
          this.trigger('error', error);
          return false;
        }
      }
      this.trigger('beforeSave', options);
      record = this.isNew() ? this.create(options) : this.update(options);
      this.stripCloneAttrs();
      this.trigger('save', options);
      return record;
    };

    Model.prototype.stripCloneAttrs = function() {
      var key, value;

      if (this.hasOwnProperty('cid')) {
        return;
      }
      for (key in this) {
        if (!__hasProp.call(this, key)) continue;
        value = this[key];
        if (this.constructor.attributes.indexOf(key) > -1) {
          delete this[key];
        }
      }
      return this;
    };

    Model.prototype.updateAttribute = function(name, value, options) {
      var atts;

      atts = {};
      atts[name] = value;
      return this.updateAttributes(atts, options);
    };

    Model.prototype.updateAttributes = function(atts, options) {
      this.load(atts);
      return this.save(options);
    };

    Model.prototype.changeID = function(id) {
      var records;

      records = this.constructor.irecords;
      records[id] = records[this.id];
      delete records[this.id];
      this.id = id;
      return this.save();
    };

    Model.prototype.destroy = function(options) {
      var i, record, records, _i, _len;

      if (options == null) {
        options = {};
      }
      this.trigger('beforeDestroy', options);
      records = this.constructor.records.slice(0);
      for (i = _i = 0, _len = records.length; _i < _len; i = ++_i) {
        record = records[i];
        if (!(this.eql(record))) {
          continue;
        }
        records.splice(i, 1);
        break;
      }
      this.constructor.records = records;
      delete this.constructor.irecords[this.id];
      delete this.constructor.crecords[this.cid];
      this.destroyed = true;
      this.trigger('destroy', options);
      this.trigger('change', 'destroy', options);
      if (this.listeningTo) {
        this.stopListening();
      }
      this.unbind();
      return this;
    };

    Model.prototype.dup = function(newRecord) {
      var result;

      result = new this.constructor(this.attributes());
      if (newRecord === false) {
        result.cid = this.cid;
      } else {
        delete result.id;
      }
      return result;
    };

    Model.prototype.clone = function() {
      return createObject(this);
    };

    Model.prototype.reload = function() {
      var original;

      if (this.isNew()) {
        return this;
      }
      original = this.constructor.find(this.id);
      this.load(original.attributes());
      return original;
    };

    Model.prototype.toJSON = function() {
      return this.attributes();
    };

    Model.prototype.toString = function() {
      return "<" + this.constructor.className + " (" + (JSON.stringify(this)) + ")>";
    };

    Model.prototype.fromForm = function(form) {
      var key, result, _i, _len, _ref;

      result = {};
      _ref = $(form).serializeArray();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        result[key.name] = key.value;
      }
      return this.load(result);
    };

    Model.prototype.exists = function() {
      return this.constructor.exists(this.id);
    };

    Model.prototype.update = function(options) {
      var clone, records;

      this.trigger('beforeUpdate', options);
      records = this.constructor.irecords;
      records[this.id].load(this.attributes());
      this.constructor.sort();
      clone = records[this.id].clone();
      clone.trigger('update', options);
      clone.trigger('change', 'update', options);
      return clone;
    };

    Model.prototype.create = function(options) {
      var clone, record;

      this.trigger('beforeCreate', options);
      if (!this.id) {
        this.id = this.cid;
      }
      record = this.dup(false);
      this.constructor.records.push(record);
      this.constructor.irecords[this.id] = record;
      this.constructor.crecords[this.cid] = record;
      this.constructor.sort();
      clone = record.clone();
      clone.trigger('create', options);
      clone.trigger('change', 'create', options);
      return clone;
    };

    Model.prototype.bind = function(events, callback) {
      var binder, singleEvent, _fn, _i, _len, _ref,
        _this = this;

      this.constructor.bind(events, binder = function(record) {
        if (record && _this.eql(record)) {
          return callback.apply(_this, arguments);
        }
      });
      _ref = events.split(' ');
      _fn = function(singleEvent) {
        var unbinder;

        return _this.constructor.bind("unbind", unbinder = function(record, event, cb) {
          if (record && _this.eql(record)) {
            if (event && event !== singleEvent) {
              return;
            }
            if (cb && cb !== callback) {
              return;
            }
            _this.constructor.unbind(singleEvent, binder);
            return _this.constructor.unbind("unbind", unbinder);
          }
        });
      };
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        singleEvent = _ref[_i];
        _fn(singleEvent);
      }
      return this;
    };

    Model.prototype.one = function(events, callback) {
      var handler,
        _this = this;

      return this.bind(events, handler = function() {
        _this.unbind(events, handler);
        return callback.apply(_this, arguments);
      });
    };

    Model.prototype.trigger = function() {
      var args, _ref;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      args.splice(1, 0, this);
      return (_ref = this.constructor).trigger.apply(_ref, args);
    };

    Model.prototype.listenTo = function(obj, events, callback) {
      obj.bind(events, callback);
      this.listeningTo || (this.listeningTo = []);
      return this.listeningTo.push(obj);
    };

    Model.prototype.listenToOnce = function(obj, events, callback) {
      var handler, listeningToOnce,
        _this = this;

      listeningToOnce = this.listeningToOnce || (this.listeningToOnce = []);
      listeningToOnce.push(obj);
      return obj.bind(events, handler = function() {
        var idx;

        idx = listeningToOnce.indexOf(obj);
        if (idx !== -1) {
          listeningToOnce.splice(idx, 1);
        }
        obj.unbind(events, handler);
        return callback.apply(obj, arguments);
      });
    };

    Model.prototype.stopListening = function(obj, events, callback) {
      var idx, listeningTo, retain, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;

      if (arguments.length === 0) {
        retain = [];
        _ref = [this.listeningTo, this.listeningToOnce];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          listeningTo = _ref[_i];
          if (!listeningTo) {
            continue;
          }
          _ref1 = this.listeningTo;
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            obj = _ref1[_j];
            if (!(!(__indexOf.call(retain, obj) >= 0))) {
              continue;
            }
            obj.unbind();
            retain.push(obj);
          }
        }
        this.listeningTo = void 0;
        this.listeningToOnce = void 0;
        return;
      }
      if (obj) {
        if (!events) {
          obj.unbind();
        }
        if (events) {
          obj.unbind(events, callback);
        }
        _ref2 = [this.listeningTo, this.listeningToOnce];
        _results = [];
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          listeningTo = _ref2[_k];
          if (!listeningTo) {
            continue;
          }
          idx = listeningTo.indexOf(obj);
          if (idx !== -1) {
            _results.push(listeningTo.splice(idx, 1));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    };

    Model.prototype.unbind = function(events, callback) {
      var event, _i, _len, _ref, _results;

      if (arguments.length === 0) {
        return this.trigger('unbind');
      } else if (events) {
        _ref = events.split(' ');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          event = _ref[_i];
          _results.push(this.trigger('unbind', event, callback));
        }
        return _results;
      }
    };

    return Model;

  })(Module);

  Model.prototype.on = Model.prototype.bind;

  Model.prototype.off = Model.prototype.unbind;

  Controller = (function(_super) {
    __extends(Controller, _super);

    Controller.include(Events);

    Controller.include(Log);

    Controller.prototype.eventSplitter = /^(\S+)\s*(.*)$/;

    Controller.prototype.tag = 'div';

    function Controller(options) {
      this.release = __bind(this.release, this);
      var context, key, parent_prototype, value, _ref;

      this.options = options;
      _ref = this.options;
      for (key in _ref) {
        value = _ref[key];
        this[key] = value;
      }
      if (!this.el) {
        this.el = document.createElement(this.tag);
      }
      this.el = $(this.el);
      this.$el = this.el;
      if (this.className) {
        this.el.addClass(this.className);
      }
      if (this.attributes) {
        this.el.attr(this.attributes);
      }
      if (!this.events) {
        this.events = this.constructor.events;
      }
      if (!this.elements) {
        this.elements = this.constructor.elements;
      }
      context = this;
      while (parent_prototype = context.constructor.__super__) {
        if (parent_prototype.events) {
          this.events = $.extend({}, parent_prototype.events, this.events);
        }
        if (parent_prototype.elements) {
          this.elements = $.extend({}, parent_prototype.elements, this.elements);
        }
        context = parent_prototype;
      }
      if (this.events) {
        this.delegateEvents(this.events);
      }
      if (this.elements) {
        this.refreshElements();
      }
      Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.release = function() {
      this.trigger('release', this);
      this.el.remove();
      this.unbind();
      return this.stopListening();
    };

    Controller.prototype.$ = function(selector) {
      return $(selector, this.el);
    };

    Controller.prototype.delegateEvents = function(events) {
      var eventName, key, match, method, selector, _results,
        _this = this;

      _results = [];
      for (key in events) {
        method = events[key];
        if (typeof method === 'function') {
          method = (function(method) {
            return function() {
              method.apply(_this, arguments);
              return true;
            };
          })(method);
        } else {
          if (!this[method]) {
            throw new Error("" + method + " doesn't exist");
          }
          method = (function(method) {
            return function() {
              _this[method].apply(_this, arguments);
              return true;
            };
          })(method);
        }
        match = key.match(this.eventSplitter);
        eventName = match[1];
        selector = match[2];
        if (selector === '') {
          _results.push(this.el.bind(eventName, method));
        } else {
          _results.push(this.el.delegate(selector, eventName, method));
        }
      }
      return _results;
    };

    Controller.prototype.refreshElements = function() {
      var key, value, _ref, _results;

      _ref = this.elements;
      _results = [];
      for (key in _ref) {
        value = _ref[key];
        _results.push(this[value] = this.$(key));
      }
      return _results;
    };

    Controller.prototype.delay = function(func, timeout) {
      return setTimeout(this.proxy(func), timeout || 0);
    };

    Controller.prototype.html = function(element) {
      this.el.html(element.el || element);
      this.refreshElements();
      return this.el;
    };

    Controller.prototype.append = function() {
      var e, elements, _ref;

      elements = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      elements = (function() {
        var _i, _len, _results;

        _results = [];
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          e = elements[_i];
          _results.push(e.el || e);
        }
        return _results;
      })();
      (_ref = this.el).append.apply(_ref, elements);
      this.refreshElements();
      return this.el;
    };

    Controller.prototype.appendTo = function(element) {
      this.el.appendTo(element.el || element);
      this.refreshElements();
      return this.el;
    };

    Controller.prototype.prepend = function() {
      var e, elements, _ref;

      elements = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      elements = (function() {
        var _i, _len, _results;

        _results = [];
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          e = elements[_i];
          _results.push(e.el || e);
        }
        return _results;
      })();
      (_ref = this.el).prepend.apply(_ref, elements);
      this.refreshElements();
      return this.el;
    };

    Controller.prototype.replace = function(element) {
      var previous, _ref;

      _ref = [this.el, $(element.el || element)], previous = _ref[0], this.el = _ref[1];
      previous.replaceWith(this.el);
      this.delegateEvents(this.events);
      this.refreshElements();
      return this.el;
    };

    return Controller;

  })(Module);

  $ = (typeof window !== "undefined" && window !== null ? window.jQuery : void 0) || (typeof window !== "undefined" && window !== null ? window.Zepto : void 0) || function(element) {
    return element;
  };

  createObject = Object.create || function(o) {
    var Func;

    Func = function() {};
    Func.prototype = o;
    return new Func();
  };

  isArray = function(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  };

  isBlank = function(value) {
    var key;

    if (!value) {
      return true;
    }
    for (key in value) {
      return false;
    }
    return true;
  };

  makeArray = function(args) {
    return Array.prototype.slice.call(args, 0);
  };

  Spine = this.Spine = {};

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Spine;
  }

  Spine.version = '1.1.0';

  Spine.isArray = isArray;

  Spine.isBlank = isBlank;

  Spine.$ = $;

  Spine.Events = Events;

  Spine.Log = Log;

  Spine.Module = Module;

  Spine.Controller = Controller;

  Spine.Model = Model;

  Module.extend.call(Spine, Events);

  Module.create = Module.sub = Controller.create = Controller.sub = Model.sub = function(instances, statics) {
    var Result, _ref;

    Result = (function(_super) {
      __extends(Result, _super);

      function Result() {
        _ref = Result.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return Result;

    })(this);
    if (instances) {
      Result.include(instances);
    }
    if (statics) {
      Result.extend(statics);
    }
    if (typeof Result.unbind === "function") {
      Result.unbind();
    }
    return Result;
  };

  Model.setup = function(name, attributes) {
    var Instance, _ref;

    if (attributes == null) {
      attributes = [];
    }
    Instance = (function(_super) {
      __extends(Instance, _super);

      function Instance() {
        _ref = Instance.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return Instance;

    })(this);
    Instance.configure.apply(Instance, [name].concat(__slice.call(attributes)));
    return Instance;
  };

  Spine.Class = Module;

}).call(this);
(function() {
  var $, Spine,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  Spine = this.Spine || require('spine');

  $ = Spine.$;

  Spine.Manager = (function(_super) {
    __extends(Manager, _super);

    Manager.include(Spine.Events);

    function Manager() {
      this.controllers = [];
      this.bind('change', this.change);
      this.add.apply(this, arguments);
    }

    Manager.prototype.add = function() {
      var cont, controllers, _i, _len, _results;

      controllers = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      _results = [];
      for (_i = 0, _len = controllers.length; _i < _len; _i++) {
        cont = controllers[_i];
        _results.push(this.addOne(cont));
      }
      return _results;
    };

    Manager.prototype.addOne = function(controller) {
      var _this = this;

      controller.bind('active', function() {
        var args;

        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return _this.trigger.apply(_this, ['change', controller].concat(__slice.call(args)));
      });
      controller.bind('release', function() {
        return _this.controllers.splice(_this.controllers.indexOf(controller), 1);
      });
      return this.controllers.push(controller);
    };

    Manager.prototype.deactivate = function() {
      return this.trigger.apply(this, ['change', false].concat(__slice.call(arguments)));
    };

    Manager.prototype.change = function() {
      var args, cont, current, _i, _len, _ref, _results;

      current = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      _ref = this.controllers;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cont = _ref[_i];
        if (cont === current) {
          _results.push(cont.activate.apply(cont, args));
        } else {
          _results.push(cont.deactivate.apply(cont, args));
        }
      }
      return _results;
    };

    return Manager;

  })(Spine.Module);

  Spine.Controller.include({
    active: function() {
      var args;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (typeof args[0] === 'function') {
        this.bind('active', args[0]);
      } else {
        args.unshift('active');
        this.trigger.apply(this, args);
      }
      return this;
    },
    isActive: function() {
      return this.el.hasClass('active');
    },
    activate: function() {
      this.el.addClass('active');
      return this;
    },
    deactivate: function() {
      this.el.removeClass('active');
      return this;
    }
  });

  Spine.Stack = (function(_super) {
    __extends(Stack, _super);

    Stack.prototype.controllers = {};

    Stack.prototype.routes = {};

    Stack.prototype.className = 'spine stack';

    function Stack() {
      var key, value, _fn, _ref, _ref1,
        _this = this;

      Stack.__super__.constructor.apply(this, arguments);
      this.manager = new Spine.Manager;
      _ref = this.controllers;
      for (key in _ref) {
        value = _ref[key];
        if (this[key] != null) {
          throw Error("'@" + key + "' already assigned - choose a different name");
        }
        this[key] = new value({
          stack: this
        });
        this.add(this[key]);
      }
      _ref1 = this.routes;
      _fn = function(key, value) {
        var callback;

        if (typeof value === 'function') {
          callback = value;
        }
        callback || (callback = function() {
          var _ref2;

          return (_ref2 = _this[value]).active.apply(_ref2, arguments);
        });
        return _this.route(key, callback);
      };
      for (key in _ref1) {
        value = _ref1[key];
        _fn(key, value);
      }
      if (this["default"]) {
        this[this["default"]].active();
      }
    }

    Stack.prototype.add = function(controller) {
      this.manager.add(controller);
      return this.append(controller);
    };

    return Stack;

  })(Spine.Controller);

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Spine.Manager;
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports.Stack = Spine.Stack;
  }

}).call(this);
(function() {
  var Spine;

  Spine = this.Spine || require('spine');

  Spine.Model.Local = {
    extended: function() {
      this.change(this.saveLocal);
      return this.fetch(this.loadLocal);
    },
    saveLocal: function() {
      var result;

      result = JSON.stringify(this);
      return localStorage[this.className] = result;
    },
    loadLocal: function() {
      var result;

      result = localStorage[this.className];
      return this.refresh(result || [], {
        clear: true
      });
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Spine.Model.Local;
  }

}).call(this);
(function() {
  var $, Spine, escapeRegExp, hashStrip, namedParam, splatParam,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  Spine = this.Spine || require('spine');

  $ = Spine.$;

  hashStrip = /^#*/;

  namedParam = /:([\w\d]+)/g;

  splatParam = /\*([\w\d]+)/g;

  escapeRegExp = /[-[\]{}()+?.,\\^$|#\s]/g;

  Spine.Route = (function(_super) {
    var _ref;

    __extends(Route, _super);

    Route.extend(Spine.Events);

    Route.historySupport = ((_ref = window.history) != null ? _ref.pushState : void 0) != null;

    Route.routes = [];

    Route.options = {
      trigger: true,
      history: false,
      shim: false,
      replace: false
    };

    Route.add = function(path, callback) {
      var key, value, _results;

      if (typeof path === 'object' && !(path instanceof RegExp)) {
        _results = [];
        for (key in path) {
          value = path[key];
          _results.push(this.add(key, value));
        }
        return _results;
      } else {
        return this.routes.push(new this(path, callback));
      }
    };

    Route.setup = function(options) {
      if (options == null) {
        options = {};
      }
      this.options = $.extend({}, this.options, options);
      if (this.options.history) {
        this.history = this.historySupport && this.options.history;
      }
      if (this.options.shim) {
        return;
      }
      if (this.history) {
        $(window).bind('popstate', this.change);
      } else {
        $(window).bind('hashchange', this.change);
      }
      return this.change();
    };

    Route.unbind = function() {
      if (this.options.shim) {
        return;
      }
      if (this.history) {
        return $(window).unbind('popstate', this.change);
      } else {
        return $(window).unbind('hashchange', this.change);
      }
    };

    Route.navigate = function() {
      var args, lastArg, options, path;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      options = {};
      lastArg = args[args.length - 1];
      if (typeof lastArg === 'object') {
        options = args.pop();
      } else if (typeof lastArg === 'boolean') {
        options.trigger = args.pop();
      }
      options = $.extend({}, this.options, options);
      path = args.join('/');
      if (this.path === path) {
        return;
      }
      this.path = path;
      this.trigger('navigate', this.path);
      if (options.trigger) {
        this.matchRoute(this.path, options);
      }
      if (options.shim) {
        return;
      }
      if (this.history && options.replace) {
        return history.replaceState({}, document.title, this.path);
      } else if (this.history) {
        return history.pushState({}, document.title, this.path);
      } else {
        return window.location.hash = this.path;
      }
    };

    Route.getPath = function() {
      var path;

      if (this.history) {
        path = window.location.pathname;
        if (path.substr(0, 1) !== '/') {
          path = '/' + path;
        }
      } else {
        path = window.location.hash;
        path = path.replace(hashStrip, '');
      }
      return path;
    };

    Route.getHost = function() {
      return "" + window.location.protocol + "//" + window.location.host;
    };

    Route.change = function() {
      var path;

      path = this.getPath();
      if (path === this.path) {
        return;
      }
      this.path = path;
      return this.matchRoute(this.path);
    };

    Route.matchRoute = function(path, options) {
      var route, _i, _len, _ref1;

      _ref1 = this.routes;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        route = _ref1[_i];
        if (!(route.match(path, options))) {
          continue;
        }
        this.trigger('change', route, path);
        return route;
      }
    };

    function Route(path, callback) {
      var match;

      this.path = path;
      this.callback = callback;
      this.names = [];
      if (typeof path === 'string') {
        namedParam.lastIndex = 0;
        while ((match = namedParam.exec(path)) !== null) {
          this.names.push(match[1]);
        }
        splatParam.lastIndex = 0;
        while ((match = splatParam.exec(path)) !== null) {
          this.names.push(match[1]);
        }
        path = path.replace(escapeRegExp, '\\$&').replace(namedParam, '([^\/]*)').replace(splatParam, '(.*?)');
        this.route = new RegExp("^" + path + "$");
      } else {
        this.route = path;
      }
    }

    Route.prototype.match = function(path, options) {
      var i, match, param, params, _i, _len;

      if (options == null) {
        options = {};
      }
      match = this.route.exec(path);
      if (!match) {
        return false;
      }
      options.match = match;
      params = match.slice(1);
      if (this.names.length) {
        for (i = _i = 0, _len = params.length; _i < _len; i = ++_i) {
          param = params[i];
          options[this.names[i]] = param;
        }
      }
      return this.callback.call(null, options) !== false;
    };

    return Route;

  })(Spine.Module);

  Spine.Route.change = Spine.Route.proxy(Spine.Route.change);

  Spine.Controller.include({
    route: function(path, callback) {
      return Spine.Route.add(path, this.proxy(callback));
    },
    routes: function(routes) {
      var key, value, _results;

      _results = [];
      for (key in routes) {
        value = routes[key];
        _results.push(this.route(key, value));
      }
      return _results;
    },
    navigate: function() {
      return Spine.Route.navigate.apply(Spine.Route, arguments);
    }
  });

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Spine.Route;
  }

}).call(this);
(function() {
  if (typeof Spine !== "undefined" && Spine !== null) {
    Spine.Controller.include({
      className: function() {
        return this.__proto__.constructor.name;
      },
      registerStateEvents: function() {
        var _this = this;

        Superfit.controllers[this.className()] = this;
        return this.el.on("pageAnimationEnd", function(e, data) {
          if (data.direction === 'in') {
            return Superfit.activeController = _this;
          }
        });
      },
      defaultTemplateName: function() {
        return _.str.underscored(this.className());
      },
      view: function(name) {
        var view, viewPath;

        viewPath = "superfit/views/" + name;
        view = JST[viewPath];
        if (!view) {
          throw "View " + viewPath + " not found";
        }
        return view;
      },
      template: function(data) {
        if (!this.templateName) {
          this.templateName = this.defaultTemplateName();
        }
        return this.view(this.templateName)(data);
      },
      render: function(data) {
        var html;

        html = this.html(this.template(data));
        if (this.afterRender != null) {
          _.defer(this.afterRender);
        }
        return html;
      },
      activate: function() {
        this.el.addClass('active');
        if (Buzz.fbInited) {
          if (typeof FB !== "undefined" && FB !== null) {
            FB.Canvas.scrollTo(0, 0);
          }
        }
        window.scrollTo(0, 0);
        return this;
      },
      keyboard_shortcuts: function(shortcuts) {
        var callback, key, _results;

        _results = [];
        for (key in shortcuts) {
          callback = shortcuts[key];
          _results.push((function(key, callback) {
            return $(document).bind('keydown', key, function(e) {
              e.preventDefault();
              return callback(e);
            });
          })(key, callback));
        }
        return _results;
      }
    });
  }

}).call(this);
(function() {
  var Utils, _base, _base1, _ref, _ref1;

  String.prototype.commafy = function() {
    return this.replace(/(^|[^\w.])(\d{4,})/g, function($0, $1, $2) {
      return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
    });
  };

  String.prototype.present = function() {
    return this.trim().length > 0;
  };

  String.prototype.contains = function(str) {
    return this.indexOf(str) !== -1;
  };

  String.prototype.truncate = function(length, suffix) {
    var str;

    if (suffix == null) {
      suffix = '...';
    }
    if (this.length > length) {
      str = this.substring(0, length);
      str = str.substring(0, Math.min(str.length, str.lastIndexOf(" ")));
      if (str.length === 0) {
        str = this.substring(0, length);
      }
      return str + suffix;
    } else {
      return this.toString();
    }
  };

  Number.prototype.commafy = function() {
    return String(this).commafy();
  };

  Number.prototype.limit = function(max) {
    if (this > max) {
      return ("" + max + "+").commafy();
    } else {
      return this.commafy();
    }
  };

  String.prototype.lpad = function(length, strToPad) {
    var str;

    if (strToPad == null) {
      strToPad = "0";
    }
    str = this.toString();
    while (str.length < length) {
      str = strToPad + str;
    }
    return str;
  };

  Number.prototype.lpad = function(length, strToPad) {
    if (strToPad == null) {
      strToPad = "0";
    }
    return String(this).lpad(length, strToPad);
  };

  $.easing.easeOutCubic = function(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  };

  if (!String.prototype.trim) {
    String.prototype.trim = function() {
      return this.replace(/^\s+|\s+$/g, "");
    };
  }

  if ((_ref = (_base = Array.prototype).some) == null) {
    _base.some = function(f) {
      var x, _i, _len;

      for (_i = 0, _len = this.length; _i < _len; _i++) {
        x = this[_i];
        if (f(x)) {
          return true;
        }
      }
      return false;
    };
  }

  if ((_ref1 = (_base1 = Array.prototype).every) == null) {
    _base1.every = function(f) {
      var x, _i, _len;

      for (_i = 0, _len = this.length; _i < _len; _i++) {
        x = this[_i];
        if (!f(x)) {
          return false;
        }
      }
      return true;
    };
  }

  Utils = (function() {
    function Utils() {}

    Utils.simpleFormat = function(text) {
      if (text === null) {
        return '';
      }
      text = text.toString();
      text = text.replace(/\r\n?/g, "\n");
      return text = text.replace(/\n/g, '<br/>');
    };

    return Utils;

  })();

  window.Utils = Utils;

  
$.validator.prototype.elements = function() {
    var validator = this;
    // select all valid inputs inside the form (no submit or reset buttons)
    return $(this.currentForm)
        .find("input")
        .not(":submit, :reset, :image, [disabled]")
        .not( this.settings.ignore )
        .filter(function() {
            !this.name && validator.settings.debug && window.console && console.error( "%o has no name assigned", this);
            return validator.objectLength($(this).rules());
        });
};
;

}).call(this);
(function() {
  var __slice = [].slice;

  window.HAML = (function() {
    function HAML() {}

    HAML.escape = function(text) {
      return ("" + text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#47;");
    };

    HAML.cleanValue = function(text) {
      switch (text) {
        case null:
        case void 0:
          return '';
        case true:
        case false:
          return '\u0093' + text;
        default:
          return text;
      }
    };

    HAML.extend = function() {
      var key, obj, source, sources, val, _i, _len;

      obj = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      for (_i = 0, _len = sources.length; _i < _len; _i++) {
        source = sources[_i];
        for (key in source) {
          val = source[key];
          obj[key] = val;
        }
      }
      return obj;
    };

    HAML.globals = function() {
      return {};
    };

    HAML.context = function(locals) {
      return this.extend({}, HAML.globals(), locals);
    };

    HAML.preserve = function(text) {
      return text.replace(/\n/g, '&#x000A;');
    };

    HAML.findAndPreserve = function(text) {
      var tags;

      tags = 'textarea,pre'.split(',').join('|');
      return text = text.replace(RegExp("<(" + tags + ")>([^]*?)<\\/\\1>", "g"), function(str, tag, content) {
        return "<" + tag + ">" + (window.HAML.preserve(content)) + "</" + tag + ">";
      });
    };

    HAML.surround = function(start, end, fn) {
      var _ref;

      return start + ((_ref = fn.call(this)) != null ? _ref.replace(/^\s+|\s+$/g, '') : void 0) + end;
    };

    HAML.succeed = function(end, fn) {
      var _ref;

      return ((_ref = fn.call(this)) != null ? _ref.replace(/\s+$/g, '') : void 0) + end;
    };

    HAML.precede = function(start, fn) {
      var _ref;

      return start + ((_ref = fn.call(this)) != null ? _ref.replace(/^\s+/g, '') : void 0);
    };

    HAML.reference = function(object, prefix) {
      var id, name, result, _ref;

      name = prefix ? prefix + '_' : '';
      if (typeof object.hamlObjectRef === 'function') {
        name += object.hamlObjectRef();
      } else {
        name += (((_ref = object.constructor) != null ? _ref.name : void 0) || 'object').replace(/\W+/g, '_').replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
      }
      id = typeof object.to_key === 'function' ? object.to_key() : typeof object.id === 'function' ? object.id() : object.id ? object.id : object;
      result = "class='" + name + "'";
      if (id) {
        return result += " id='" + name + "_" + id + "'";
      }
    };

    return HAML;

  })();

}).call(this);
/**
 * jquery.calendario.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */

;( function( $, window, undefined ) {
	
	'use strict';

	$.Calendario = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );
		
	};

	// the options
	$.Calendario.defaults = {
		/*
		you can also pass:
		month : initialize calendar with this month (1-12). Default is today.
		year : initialize calendar with this year. Default is today.
		caldata : initial data/content for the calendar.
		caldata format:
		{
			'MM-DD-YYYY' : 'HTML Content',
			'MM-DD-YYYY' : 'HTML Content',
			'MM-DD-YYYY' : 'HTML Content'
			...
		}
		*/
		weeks : [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
		weekabbrs : [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
		months : [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
		monthabbrs : [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
		// choose between values in options.weeks or options.weekabbrs
		displayWeekAbbr : false,
		// choose between values in options.months or options.monthabbrs
		displayMonthAbbr : false,
		// left most day in the calendar
		// 0 - Sunday, 1 - Monday, ... , 6 - Saturday
		startIn : 1,
		onDayClick : function( $el, $content, dateProperties ) { return false; }
	};

	$.Calendario.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.Calendario.defaults, options );

			this.today = new Date();
			this.month = ( isNaN( this.options.month ) || this.options.month == null) ? this.today.getMonth() : this.options.month - 1;
			this.year = ( isNaN( this.options.year ) || this.options.year == null) ? this.today.getFullYear() : this.options.year;
			this.caldata = this.options.caldata || {};
			this._generateTemplate();
			this._initEvents();

		},
		_initEvents : function() {

			var self = this;

			this.$el.on( 'click.calendario', 'div.fc-row > div', function() {

				var $cell = $( this ),
					idx = $cell.index(),
					$content = $cell.children( 'div' ),
					dateProp = {
						day : $cell.children( 'span.fc-date' ).text(),
						month : self.month + 1,
						monthname : self.options.displayMonthAbbr ? self.options.monthabbrs[ self.month ] : self.options.months[ self.month ],
						year : self.year,
						weekday : idx + self.options.startIn,
						weekdayname : self.options.weeks[ idx + self.options.startIn ]
					};

				if( dateProp.day ) {
					self.options.onDayClick( $cell, $content, dateProp );
				}

			} );

		},
		// Calendar logic based on http://jszen.blogspot.pt/2007/03/how-to-build-simple-calendar-with.html
		_generateTemplate : function( callback ) {

			var head = this._getHead(),
				body = this._getBody(),
				rowClass;

			switch( this.rowTotal ) {
				case 4 : rowClass = 'fc-four-rows'; break;
				case 5 : rowClass = 'fc-five-rows'; break;
				case 6 : rowClass = 'fc-six-rows'; break;
			}

			this.$cal = $( '<div class="fc-calendar ' + rowClass + '">' ).append( head, body );

			this.$el.find( 'div.fc-calendar' ).remove().end().append( this.$cal );

			if( callback ) { callback.call(); }

		},
		_getHead : function() {

			var html = '<div class="fc-head">';
		
			for ( var i = 0; i <= 6; i++ ) {

				var pos = i + this.options.startIn,
					j = pos > 6 ? pos - 6 - 1 : pos;

				html += '<div>';
				html += this.options.displayWeekAbbr ? this.options.weekabbrs[ j ] : this.options.weeks[ j ];
				html += '</div>';

			}

			html += '</div>';

			return html;

		},
		_getBody : function() {

			var d = new Date( this.year, this.month + 1, 0 ),
				// number of days in the month
				monthLength = d.getDate(),
				firstDay = new Date( this.year, this.month, 1 );

			// day of the week
			this.startingDay = firstDay.getDay();

			var html = '<div class="fc-body"><div class="fc-row">',
				// fill in the days
				day = 1;

			// this loop is for weeks (rows)
			for ( var i = 0; i < 7; i++ ) {

				// this loop is for weekdays (cells)
				for ( var j = 0; j <= 6; j++ ) {

					var pos = this.startingDay - this.options.startIn,
						p = pos < 0 ? 6 + pos + 1 : pos,
						inner = '',
						today = this.month === this.today.getMonth() && this.year === this.today.getFullYear() && day === this.today.getDate(),
						content = '';
					
					if ( day <= monthLength && ( i > 0 || j >= p ) ) {

						inner += '<span class="fc-date">' + day + '</span><span class="fc-weekday">' + this.options.weekabbrs[ j + this.options.startIn > 6 ? j + this.options.startIn - 6 - 1 : j + this.options.startIn ] + '</span>';

						// this day is:
						var strdate = ( this.month + 1 < 10 ? '0' + ( this.month + 1 ) : this.month + 1 ) + '-' + ( day < 10 ? '0' + day : day ) + '-' + this.year,
							dayData = this.caldata[ strdate ];

						if( dayData ) {
							content = dayData;
						}

						if( content !== '' ) {
							inner += '<div>' + content + '</div>';
						}

						++day;

					}
					else {
						today = false;
					}

					var cellClasses = today ? 'fc-today ' : '';
					if( content !== '' ) {
						cellClasses += 'fc-content';
					}

					html += cellClasses !== '' ? '<div class="' + cellClasses + '">' : '<div>';
					html += inner;
					html += '</div>';

				}

				// stop making rows if we've run out of days
				if (day > monthLength) {
					this.rowTotal = i + 1;
					break;
				} 
				else {
					html += '</div><div class="fc-row">';
				}

			}
			html += '</div></div><div class="close-calendar"><a href="#home" class="pop">Close Calendar</a></div>';

			return html;

		},
		// based on http://stackoverflow.com/a/8390325/989439
		_isValidDate : function( date ) {

			date = date.replace(/-/gi,'');
			var month = parseInt( date.substring( 0, 2 ), 10 ),
				day = parseInt( date.substring( 2, 4 ), 10 ),
				year = parseInt( date.substring( 4, 8 ), 10 );

			if( ( month < 1 ) || ( month > 12 ) ) {
				return false;
			}
			else if( ( day < 1 ) || ( day > 31 ) )  {
				return false;
			}
			else if( ( ( month == 4 ) || ( month == 6 ) || ( month == 9 ) || ( month == 11 ) ) && ( day > 30 ) )  {
				return false;
			}
			else if( ( month == 2 ) && ( ( ( year % 400 ) == 0) || ( ( year % 4 ) == 0 ) ) && ( ( year % 100 ) != 0 ) && ( day > 29 ) )  {
				return false;
			}
			else if( ( month == 2 ) && ( ( year % 100 ) == 0 ) && ( day > 29 ) )  {
				return false;
			}

			return {
				day : day,
				month : month,
				year : year
			};

		},
		_move : function( period, dir, callback ) {

			if( dir === 'previous' ) {
				
				if( period === 'month' ) {
					this.year = this.month > 0 ? this.year : --this.year;
					this.month = this.month > 0 ? --this.month : 11;
				}
				else if( period === 'year' ) {
					this.year = --this.year;
				}

			}
			else if( dir === 'next' ) {

				if( period === 'month' ) {
					this.year = this.month < 11 ? this.year : ++this.year;
					this.month = this.month < 11 ? ++this.month : 0;
				}
				else if( period === 'year' ) {
					this.year = ++this.year;
				}

			}

			this._generateTemplate( callback );

		},
		/************************* 
		******PUBLIC METHODS *****
		**************************/
		getYear : function() {
			return this.year;
		},
		getMonth : function() {
			return this.month + 1;
		},
		getMonthName : function() {
			return this.options.displayMonthAbbr ? this.options.monthabbrs[ this.month ] : this.options.months[ this.month ];
		},
		// gets the cell's content div associated to a day of the current displayed month
		// day : 1 - [28||29||30||31]
		getCell : function( day ) {

			var row = Math.floor( ( day + this.startingDay - this.options.startIn ) / 7 ),
				pos = day + this.startingDay - this.options.startIn - ( row * 7 ) - 1;

			return this.$cal.find( 'div.fc-body' ).children( 'div.fc-row' ).eq( row ).children( 'div' ).eq( pos ).children( 'div' );

		},
		setData : function( caldata ) {

			caldata = caldata || {};
			$.extend( this.caldata, caldata );
			this._generateTemplate();

		},
		// goes to today's month/year
		gotoNow : function( callback ) {

			this.month = this.today.getMonth();
			this.year = this.today.getFullYear();
			this._generateTemplate( callback );

		},
		// goes to month/year
		goto : function( month, year, callback ) {

			this.month = month;
			this.year = year;
			this._generateTemplate( callback );

		},
		gotoPreviousMonth : function( callback ) {
			this._move( 'month', 'previous', callback );
		},
		gotoPreviousYear : function( callback ) {
			this._move( 'year', 'previous', callback );
		},
		gotoNextMonth : function( callback ) {
			this._move( 'month', 'next', callback );
		},
		gotoNextYear : function( callback ) {
			this._move( 'year', 'next', callback );
		}

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.calendario = function( options ) {

		var instance = $.data( this, 'calendario' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !instance ) {

					logError( "cannot call methods on calendario prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for calendario instance" );
					return;
				
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( instance ) {

					instance._init();
				
				}
				else {

					instance = $.data( this, 'calendario', new $.Calendario( options, this ) );
				
				}

			});
		
		}
		
		return instance;
		
	};
	
} )( jQuery, window );
(function() {
  var Superfit,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit = (function(_super) {
    __extends(Superfit, _super);

    Superfit.extend(Spine.Events);

    Superfit.NO_CHART_DATA = "<li class='no-data'>Not enough data to display chart</li>";

    Superfit.controllers = {};

    Superfit.prototype.elements = {
      '.page#get-started-step3': 'start',
      '.page#home': 'home',
      '.page#goals': 'goals',
      '.page#goal-detail': 'goalDetail',
      '.page#edit-goal': 'editGoal',
      '.page#records': 'records',
      '.page#edit-record': 'editRecord',
      '.page#record-detail': 'recordDetail',
      '.page#add-wod': 'addWod',
      '.page#browse-wods': 'browseWods',
      '.page#edit-wod': 'editWod',
      '.page#review-wod': 'reviewWod',
      '.page#calendar': 'calendar',
      '.page#edit-profile': 'editProfile',
      '.page#edit-profile-gym': 'editProfileGym',
      '.page#profile': 'profile',
      '.page#about': 'about'
    };

    Superfit.prototype.events = {
      'pageAnimationStart .page': 'onPageTransition'
    };

    function Superfit() {
      this.setVariableError = __bind(this.setVariableError, this);
      this.setVariableSuccess = __bind(this.setVariableSuccess, this);
      this.updateUserVariables = __bind(this.updateUserVariables, this);
      this.trackPageError = __bind(this.trackPageError, this);
      this.trackPageSuccess = __bind(this.trackPageSuccess, this);
      this.onPageTransition = __bind(this.onPageTransition, this);
      this.gaError = __bind(this.gaError, this);
      this.gaSuccess = __bind(this.gaSuccess, this);
      this.onResume = __bind(this.onResume, this);
      this.onPause = __bind(this.onPause, this);
      this.loadAnalytics = __bind(this.loadAnalytics, this);
      var user,
        _this = this;

      Superfit.__super__.constructor.apply(this, arguments);
      user = User.first();
      this.render({
        user: user
      });
      new Superfit.Navigation();
      if (!user) {
        new Superfit.Start({
          el: this.start
        });
      }
      new Superfit.Home({
        el: this.home
      });
      new Superfit.Goals({
        el: this.goals
      });
      new Superfit.GoalDetail({
        el: this.goalDetail
      });
      new Superfit.EditGoal({
        el: this.editGoal
      });
      new Superfit.Records({
        el: this.records
      });
      new Superfit.EditRecord({
        el: this.editRecord
      });
      new Superfit.RecordDetail({
        el: this.recordDetail
      });
      new Superfit.AddWod({
        el: this.addWod
      });
      new Superfit.BrowseWods({
        el: this.browseWods
      });
      new Superfit.EditWod({
        el: this.editWod
      });
      new Superfit.ReviewWod({
        el: this.reviewWod
      });
      new Superfit.Calendar({
        el: this.calendar
      });
      new Superfit.EditProfile({
        el: this.editProfile
      });
      new Superfit.EditProfileGym({
        el: this.editProfileGym
      });
      new Superfit.Profile({
        el: this.profile
      });
      new Superfit.About({
        el: this.about
      });
      $(this.el).timeago();
      Superfit.bind('timeago', function() {
        return $(_this.el).timeago('refresh');
      });
      _.defer(function() {
        return $.makeItRetina({
          'retinaBackgrounds': true
        });
      });
      _.defer(function() {
        if (!user) {
          return jQT.goTo('#get-started-step1', jQT.settings.defaultTransition);
        }
      });
      this.log("Registering listeners...");
      document.addEventListener("deviceready", this.loadAnalytics, false);
      document.addEventListener("pause", this.onPause, false);
      document.addEventListener("resume", this.onResume, false);
    }

    Superfit.prototype.loadAnalytics = function() {
      var _ref;

      if (this.gaPlugin = (_ref = window.plugins) != null ? _ref.gaPlugin : void 0) {
        return this.gaPlugin.init(this.gaSuccess, this.gaError, "UA-40739445-2", 10);
      }
    };

    Superfit.prototype.onPause = function() {
      var active, error, savedState, state;

      this.log("Pausing...");
      try {
        SavedState.destroyAll();
        if (active = Superfit.activeController) {
          state = active.state != null ? active.state() : {};
          savedState = SavedState.create({
            controller: active.className(),
            state: state
          });
          return this.log("Saved state: " + (JSON.stringify(savedState)));
        }
      } catch (_error) {
        error = _error;
        this.log(error);
        return alert("Error pausing: " + error);
      }
    };

    Superfit.prototype.onResume = function() {
      var controller, error, savedState;

      this.log("Resuming...");
      try {
        SavedState.fetch();
        if (savedState = SavedState.first()) {
          this.log("Resuming for controller: '" + savedState.controller + "'; State: " + (JSON.stringify(savedState.state)));
          controller = Superfit.controllers[savedState.controller];
          if (controller.resume != null) {
            controller.resume(savedState.state);
          }
          return jQT.goTo(controller.el);
        }
      } catch (_error) {
        error = _error;
        this.log(error);
        return alert("Error resuming: " + error);
      }
    };

    Superfit.prototype.gaSuccess = function() {
      this.updateUserVariables();
      User.bind('create update', this.updateUserVariables);
      return this.gaPlugin.trackPage(this.trackPageSuccess, this.trackPageError, "index.html");
    };

    Superfit.prototype.gaError = function(msg) {
      return this.log("Analytics failed to load: " + msg);
    };

    Superfit.prototype.onPageTransition = function(e, data) {
      var pageId;

      if (data.direction === 'in') {
        Superfit.activeController = null;
        pageId = $(e.target).attr('id');
        this.log("Tracking page: " + pageId);
        if (this.gaPlugin != null) {
          return this.gaPlugin.trackPage(this.trackPageSuccess, this.trackPageError, pageId);
        }
      }
    };

    Superfit.prototype.trackPageSuccess = function() {
      return this.log("Track page success");
    };

    Superfit.prototype.trackPageError = function(msg) {
      return this.log("Track page error: " + msg);
    };

    Superfit.prototype.updateUserVariables = function() {
      var user;

      if (user = User.first()) {
        this.gaPlugin.setVariable(this.setVariableSuccess, this.setVariableError, 1, user.email);
        this.gaPlugin.setVariable(this.setVariableSuccess, this.setVariableError, 2, user.newsletter);
        this.gaPlugin.setVariable(this.setVariableSuccess, this.setVariableError, 3, user.gender);
        return this.gaPlugin.setVariable(this.setVariableSuccess, this.setVariableError, 4, user.gym);
      }
    };

    Superfit.prototype.setVariableSuccess = function() {};

    Superfit.prototype.setVariableError = function(msg) {
      return this.log("Error setting variable: " + msg);
    };

    return Superfit;

  })(Spine.Controller);

  window.Superfit = Superfit;

  $(function() {
    User.fetch();
    Wod.fetch();
    Category.fetch();
    WodsVersion.fetch();
    WodEntry.fetch();
    Goal.fetch();
    $.get('wods_version.txt', function(latest_version) {
      var wods_version;

      latest_version = latest_version.trim();
      wods_version = WodsVersion.first() || new WodsVersion();
      console.log("WODs version - latest: " + latest_version + ", current: " + wods_version.version);
      if (wods_version.needs_update(latest_version)) {
        console.log("WODs Updating...");
        return $.get('wods.txt', function(result) {
          var wods;

          wods = $.parseJSON(result);
          _.each(wods, function(wod_hash) {
            var id, wod;

            id = wod_hash.id;
            if (Wod.exists(id)) {
              wod = Wod.find(id);
              console.log("Updating wod " + id + " with:", wod_hash);
              return wod.updateAttributes(wod_hash);
            } else {
              console.log("Creating wod " + wod_hash.id + " with:", wod_hash);
              wod = new Wod(wod_hash);
              return wod.save();
            }
          });
          wods_version.version = latest_version;
          wods_version.save();
          Wod.trigger('refresh');
          return console.log("" + (Wod.all().length) + " WODs updated to version " + latest_version);
        });
      }
    });
    window.superfit = new Superfit({
      el: $('body')
    });
    return window.jQT = new $.jQTouch({
      icon: 'jqtouch.png',
      icon4: 'jqtouch4.png',
      addGlossToIcon: false,
      startupScreen: 'jqt_startup.png',
      statusBar: 'black-translucent',
      preloadImages: []
    });
  });

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.SearchWods = (function(_super) {
    __extends(SearchWods, _super);

    function SearchWods() {
      var _this = this;

      SearchWods.__super__.constructor.apply(this, arguments);
      this.el.bind("pageAnimationEnd", function(e, data) {
        if (data.direction === 'out') {
          _this.searchEl.val('');
          return _this.clearSearch();
        }
      });
    }

    SearchWods.prototype.search = function(e, type) {
      var item, value, wod, wods, _i, _len;

      if (type == null) {
        type = null;
      }
      value = $(e.target).val();
      if ((value != null) && value.length > 0) {
        this.log("Searching for " + value + " of type " + (type || 'all'));
        this.wodsBrowse.hide();
        this.wodsSearch.html('');
        wods = Wod.search(value, type);
        if (wods.length > 0) {
          for (_i = 0, _len = wods.length; _i < _len; _i++) {
            wod = wods[_i];
            item = new Superfit.WodItem({
              wod: wod,
              type: this.searchType
            });
            this.wodsSearch.append(item.render());
          }
          this.noMatches.hide();
          return this.wodsSearch.fadeIn();
        } else {
          return this.noMatches.fadeIn();
        }
      } else {
        return this.clearSearch();
      }
    };

    SearchWods.prototype.clearSearch = function() {
      this.wodsSearch.hide();
      this.noMatches.hide();
      return this.wodsBrowse.fadeIn();
    };

    return SearchWods;

  })(Spine.Controller);

}).call(this);
(function() {
  var Category, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Category = (function(_super) {
    __extends(Category, _super);

    function Category() {
      _ref = Category.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Category.configure('Category', 'name');

    Category.extend(Spine.Model.Local);

    Category.extend(Spine.Events);

    Category.extend(Spine.Log);

    return Category;

  })(Spine.Model);

  window.Category = Category;

}).call(this);
(function() {
  var Goal, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Goal = (function(_super) {
    __extends(Goal, _super);

    function Goal() {
      this.newEntry = __bind(this.newEntry, this);      _ref = Goal.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Goal.configure('Goal', 'id', 'start_date', 'complete_date', 'last_update', 'start_entry_id', 'start_score', 'last_entry_id', 'history', 'wod_id', 'score', 'min', 'sec', 'reps', 'type');

    Goal.extend(Spine.Model.Local);

    Goal.extend(Spine.Events);

    Goal.extend(Spine.Log);

    Goal.prototype.name = function() {
      var wod;

      wod = Wod.find(this.wod_id);
      return "" + wod.name + " " + (this.scoreString());
    };

    Goal.prototype.percentComplete = function() {
      var percent;

      if (this.total() === 0) {
        return 100;
      } else if (this.last_entry_id) {
        percent = Math.floor(this.progress() / this.total() * 100);
        if (percent > 100) {
          return 100;
        } else if (percent < 0) {
          return 0;
        } else {
          return percent;
        }
      } else {
        return 0;
      }
    };

    Goal.prototype.wod = function() {
      return Wod.find(this.wod_id);
    };

    Goal.prototype.start_entry = function() {
      if (this.start_entry_id) {
        return WodEntry.find(this.start_entry_id);
      }
    };

    Goal.prototype.last_entry = function() {
      if (this.last_entry_id) {
        return WodEntry.find(this.last_entry_id);
      }
    };

    Goal.prototype.scoreString = function(summary) {
      if (summary == null) {
        summary = false;
      }
      return WodEntry.scoreString(this, this.wod().scoring_method, summary);
    };

    Goal.prototype.best_score = function() {
      var best_entry,
        _this = this;

      if (this.last_entry_id) {
        if (this.wod().scoring_method === 'for_time') {
          best_entry = _.min(this.entries(), function(entry) {
            return _this.calcScore(entry);
          });
        } else {
          best_entry = _.max(this.entries(), function(entry) {
            return _this.calcScore(entry);
          });
        }
        if (best_entry) {
          return this.calcScore(best_entry);
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    };

    Goal.prototype.progress = function() {
      if (this.wod().scoring_method === 'for_time') {
        return this.start_score - this.best_score();
      } else {
        return this.best_score() - this.start_score;
      }
    };

    Goal.prototype.total = function() {
      if (this.wod().scoring_method === 'for_time') {
        return this.start_score - this.goal_score();
      } else {
        return this.goal_score() - this.start_score;
      }
    };

    Goal.prototype.goal_score = function() {
      return this.calcScore(this);
    };

    Goal.prototype.entries = function() {
      var entries,
        _this = this;

      entries = _.select(WodEntry.byWodId(this.wod_id), function(entry) {
        return _this.start_entry_id === entry.id || (_this.isMatch(entry) && entry.created_date >= _this.start_date && (!_this.complete_date || entry.date < _this.complete_date));
      });
      return _.sortBy(entries, function(entry) {
        return -1 * moment(entry.created_date).valueOf();
      });
    };

    Goal.prototype.newEntry = function(entry, start) {
      if (start == null) {
        start = false;
      }
      if (this.isMatch(entry)) {
        if (!this.start_entry_id) {
          this.start_entry_id = entry.id;
          this.start_score = this.calcScore(entry);
        }
        this.last_entry_id = entry.id;
        this.history || (this.history = []);
        this.history.push([moment().valueOf(), this.percentComplete()]);
        if (this.isComplete() && !this.complete_date) {
          this.trigger('complete');
          this.complete_date = moment().valueOf();
        }
        this.last_update = moment().valueOf();
        return this.save();
      } else {
        return console.log("NOT A MATCH", entry);
      }
    };

    Goal.prototype.isMatch = function(entry) {
      var _this = this;

      if (entry.wod_id !== this.wod_id) {
        throw "Can't check goal match unless entry is for this wod";
      }
      switch (this.wod().scoring_method) {
        case 'rounds':
        case 'weight':
        case 'max_reps':
          return true;
        case 'for_time':
          return entry.type.toLowerCase() === this.type.toLowerCase();
        case 'weight_reps':
          return _.find(entry.reps, function(reps) {
            return reps === _this.reps;
          });
      }
    };

    Goal.prototype.isComplete = function() {
      if (this.wod().scoring_method === 'for_time') {
        return this.best_score() <= this.goal_score();
      } else {
        return this.best_score() >= this.goal_score();
      }
    };

    Goal.prototype.calcScore = function(model) {
      var wod;

      wod = model.wod();
      switch (wod.scoring_method) {
        case 'for_time':
          return (model.min * 60) + model.sec;
        case 'rounds':
        case 'weight':
        case 'max_reps':
          return model.score;
        case 'weight_reps':
          if (model.repMax != null) {
            return model.repMax(this.reps);
          } else {
            return model.score;
          }
          break;
        case 'pass_fail':
          if (model.score.toUpperCase() === 'PASS') {
            return 1;
          } else {
            return 0;
          }
      }
    };

    Goal.byWodId = function(wodId) {
      return _.filter(Goal.all(), function(goal) {
        return goal.wod_id === wodId;
      });
    };

    Goal.lastUpdated = function() {
      return _.max(Goal.inProgress(), function(goal) {
        return goal.last_update;
      });
    };

    Goal.inProgress = function() {
      return _.filter(Goal.all(), function(goal) {
        return goal.complete_date == null;
      });
    };

    Goal.completed = function() {
      return _.filter(Goal.all(), function(goal) {
        return goal.complete_date != null;
      });
    };

    return Goal;

  })(Spine.Model);

  window.Goal = Goal;

}).call(this);
(function() {
  var SavedState, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SavedState = (function(_super) {
    __extends(SavedState, _super);

    function SavedState() {
      _ref = SavedState.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SavedState.configure('SavedState', 'controller', 'state');

    SavedState.extend(Spine.Model.Local);

    SavedState.extend(Spine.Events);

    return SavedState;

  })(Spine.Model);

  window.SavedState = SavedState;

}).call(this);
(function() {
  var User, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  User = (function(_super) {
    __extends(User, _super);

    function User() {
      _ref = User.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    User.configure('User', 'id', 'name', 'gender', 'gym_id', 'gym', 'zipcode', 'birthdate', 'email', 'newsletter');

    User.extend(Spine.Model.Local);

    User.extend(Spine.Events);

    User.extend(Spine.Log);

    return User;

  })(Spine.Model);

  window.User = User;

}).call(this);
(function() {
  var Wod, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Wod = (function(_super) {
    __extends(Wod, _super);

    function Wod() {
      _ref = Wod.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Wod.configure('Wod', 'id', 'name', 'type', 'category', 'scoring_method', 'workout_male', 'workout_female', 'scoring_notes', 'workout_notes', 'personal_record');

    Wod.extend(Spine.Model.Local);

    Wod.extend(Spine.Events);

    Wod.extend(Spine.Log);

    Wod.scoringMethodMap = {
      for_time: "For Time",
      pass_fail: "Pass/Fail",
      rounds: "AMRAP (rounds)",
      max_reps: "Max Reps",
      weight_reps: "Weight / Reps / Rounds"
    };

    Wod.byName = function(name) {
      return _.find(this.all(), function(wod) {
        return wod.name === name;
      });
    };

    Wod.byType = function(type) {
      var wods;

      wods = _.select(this.all(), function(wod) {
        return wod.typeSlug() === type.toLowerCase();
      });
      return _.sortBy(wods, function(wod) {
        return wod.name.toLowerCase();
      });
    };

    Wod.byCategory = function(category) {
      return _.select(this.all(), function(wod) {
        return wod.category.toLowerCase() === category.toLowerCase();
      });
    };

    Wod.search = function(value, type) {
      var wods;

      if (type == null) {
        type = null;
      }
      wods = type != null ? Wod.byType(type) : Wod.all();
      return _.select(wods, function(wod) {
        return wod.name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
      });
    };

    Wod.prototype.scoringMethod = function() {
      return Wod.scoringMethodMap[this.scoring_method];
    };

    Wod.prototype.typeSlug = function() {
      return this.type.toLowerCase();
    };

    Wod.prototype.strength = function() {
      return this.typeSlug() === 'strength';
    };

    Wod.prototype.repMax = function(reps) {
      var max;

      max = this.personal_record["max_" + reps];
      if (max) {
        return "" + max + " lbs";
      } else {
        return "No record";
      }
    };

    Wod.prototype.recordString = function(summary) {
      if (summary == null) {
        summary = false;
      }
      if (this.personal_record != null) {
        return WodEntry.scoreString(this.personal_record, this.scoring_method, summary);
      } else {
        return "";
      }
    };

    Wod.prototype.history = function() {
      var history;

      history = _.map(WodEntry.byWodId(this.id), function(entry) {
        return [entry.date, entry.value()];
      });
      return _.sortBy(history, function(history) {
        return history[0];
      });
    };

    Wod.prototype.isRecord = function(entry) {
      var entry_seconds, max_1, max_3, max_5, record, record_seconds, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;

      if (!(entry.wod_id = this.id)) {
        throw "Can't check record unless entry is for this wod";
      }
      if (this.personal_record != null) {
        switch (this.scoring_method) {
          case 'for_time':
            if (entry.type === 'RX' && this.personal_record.type === 'scaled') {
              return true;
            } else if (entry.type === 'scaled' && this.personal_record.type === 'RX') {
              return false;
            } else {
              record_seconds = this.personal_record.min * 60 + this.personal_record.sec;
              entry_seconds = entry.min * 60 + entry.sec;
              return entry_seconds < record_seconds;
            }
            break;
          case 'rounds':
          case 'weight':
          case 'max_reps':
            return entry.score > this.personal_record.score;
          case 'weight_reps':
            record = {};
            max_1 = entry.repMax(1);
            max_3 = entry.repMax(3);
            max_5 = entry.repMax(5);
            return (max_1 && (!((_ref1 = this.personal_record) != null ? _ref1.max_1 : void 0) || max_1 > ((_ref2 = this.personal_record) != null ? _ref2.max_1 : void 0))) || (max_3 && (!((_ref3 = this.personal_record) != null ? _ref3.max_3 : void 0) || max_3 > ((_ref4 = this.personal_record) != null ? _ref4.max_3 : void 0))) || (max_5 && (!((_ref5 = this.personal_record) != null ? _ref5.max_5 : void 0) || max_5 > ((_ref6 = this.personal_record) != null ? _ref6.max_5 : void 0)));
        }
      } else {
        return true;
      }
    };

    Wod.prototype.updateRecord = function(entry) {
      var max_1, max_3, max_5, record, _ref1, _ref2, _ref3;

      if (entry != null) {
        if (!(entry.wod_id = this.id)) {
          throw "Can't update record unless entry is for this wod";
        }
        switch (this.scoring_method) {
          case 'for_time':
            record = {
              min: entry.min,
              sec: entry.sec,
              type: entry.type
            };
            break;
          case 'rounds':
          case 'weight':
          case 'max_reps':
            record = {
              score: entry.score,
              type: entry.type
            };
            break;
          case 'weight_reps':
            record = {};
            max_1 = entry.repMax(1);
            max_3 = entry.repMax(3);
            max_5 = entry.repMax(5);
            console.log("Max 1", max_1);
            console.log("Max 3", max_3);
            console.log("Max 5", max_5);
            if (max_1 && (!((_ref1 = this.personal_record) != null ? _ref1.max_1 : void 0) || max_1 > this.personal_record.max_1)) {
              record.max_1 = max_1;
            }
            if (max_3 && (!((_ref2 = this.personal_record) != null ? _ref2.max_3 : void 0) || max_3 > this.personal_record.max_3)) {
              record.max_3 = max_3;
            }
            if (max_5 && (!((_ref3 = this.personal_record) != null ? _ref3.max_5 : void 0) || max_5 > this.personal_record.max_5)) {
              record.max_5 = max_5;
            }
        }
        if (!$.isEmptyObject(record)) {
          record = _.extend(record, {
            entry_id: entry.id
          });
          if (this.personal_record != null) {
            this.personal_record = _.extend(this.personal_record, record);
          } else {
            this.personal_record = record;
          }
          console.log("Record after", this.personal_record);
          this.save();
        }
      } else {
        this.updateAttributes({
          personal_record: null
        });
      }
      return this.trigger('newRecord');
    };

    return Wod;

  })(Spine.Model);

  window.Wod = Wod;

}).call(this);
(function() {
  var WodEntry, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  WodEntry = (function(_super) {
    __extends(WodEntry, _super);

    function WodEntry() {
      _ref = WodEntry.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    WodEntry.configure('WodEntry', 'id', 'wod_id', 'name', 'score', 'min', 'sec', 'reps', 'weight', 'method', 'type', 'details', 'created_date', 'date', 'warm_up', 'photo');

    WodEntry.extend(Spine.Model.Local);

    WodEntry.extend(Spine.Events);

    WodEntry.extend(Spine.Log);

    WodEntry.byDate = function(date) {
      return _.select(this.all(), function(entry) {
        return moment(entry.date).startOf('day').valueOf() === date.getTime();
      });
    };

    WodEntry.byWodId = function(wod_id) {
      return _.select(this.all(), function(entry) {
        return wod_id === entry.wod_id;
      });
    };

    WodEntry.history = function(wod) {
      return _.sortBy(WodEntry.byWodId(wod.id), function(entry) {
        return -1 * entry.date;
      });
    };

    WodEntry.prototype.wod = function() {
      return Wod.find(this.wod_id);
    };

    WodEntry.prototype.scoreString = function(summary) {
      if (summary == null) {
        summary = false;
      }
      return WodEntry.scoreString(this, this.method, summary);
    };

    WodEntry.prototype.value = function() {
      switch (this.method) {
        case 'for_time':
          return this.min * 60 + this.sec;
        case 'rounds':
        case 'weight':
        case 'max_reps':
          return this.score;
        case 'weight_reps':
          return _.max(this.weight);
      }
    };

    WodEntry.scoreString = function(score_obj, method, summary) {
      var _ref1;

      if (summary == null) {
        summary = false;
      }
      switch (method) {
        case 'for_time':
          if (summary) {
            return _.str.sprintf("%d:%02d %s", Number(score_obj.min), Number(score_obj.sec), score_obj.type);
          } else {
            return _.str.sprintf("%d:%02d", Number(score_obj.min), Number(score_obj.sec));
          }
          break;
        case 'rounds':
          return "" + score_obj.score + " rounds";
        case 'weight':
          return "" + score_obj.score + " lbs";
        case 'max_reps':
          return "" + score_obj.score + " reps";
        case 'pass_fail':
          return (_ref1 = score_obj.score) != null ? _ref1.toUpperCase() : void 0;
        case 'weight_reps':
          if (score_obj.score) {
            return "" + score_obj.score + "lb x " + score_obj.reps + " reps";
          } else if (score_obj.max_1) {
            return "" + score_obj.max_1 + " lbs 1RM";
          } else if (score_obj.max_3) {
            return "" + score_obj.max_3 + " lbs 3RM";
          } else if (score_obj.max_5) {
            return "" + score_obj.max_5 + " lbs 5RM";
          } else {
            return this.weightRepsString(score_obj, summary);
          }
      }
    };

    WodEntry.weightRepsString = function(score_obj, summary) {
      var func, last_idx, str,
        _this = this;

      if (!(score_obj.reps && score_obj.reps.length > 0)) {
        return "";
      }
      if (summary) {
        last_idx = score_obj.reps.length - 1;
        return "" + score_obj.weight[last_idx] + "lb x " + score_obj.reps[last_idx] + " reps";
      } else {
        func = function(acc, reps, i) {
          return acc + ("" + score_obj.weight[i] + "lb x " + reps + " reps, ");
        };
        str = _.reduce(score_obj.reps, func, "");
        return str.slice(0, +(str.length - 3) + 1 || 9e9);
      }
    };

    WodEntry.prototype.typeSlug = function() {
      if (this.wod_id) {
        return this.wod().typeSlug();
      } else {
        return "custom";
      }
    };

    WodEntry.prototype.wodName = function() {
      if (this.wod_id) {
        return this.wod().name;
      } else {
        return this.name;
      }
    };

    WodEntry.prototype.repMax = function(reps) {
      var reduceWeights,
        _this = this;

      reduceWeights = function(acc, currentReps, i) {
        if (currentReps === reps && _this.weight[i] > acc) {
          return _this.weight[i];
        } else {
          return acc;
        }
      };
      return _.reduce(this.reps, reduceWeights, null);
    };

    return WodEntry;

  })(Spine.Model);

  window.WodEntry = WodEntry;

}).call(this);
(function() {
  var WodsVersion, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  WodsVersion = (function(_super) {
    __extends(WodsVersion, _super);

    function WodsVersion() {
      _ref = WodsVersion.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    WodsVersion.configure('WodsVersion', 'version');

    WodsVersion.extend(Spine.Model.Local);

    WodsVersion.prototype.needs_update = function(latest_version) {
      return !this.version || this.version < latest_version;
    };

    return WodsVersion;

  })(Spine.Model);

  window.WodsVersion = WodsVersion;

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.About = (function(_super) {
    __extends(About, _super);

    function About() {
      this.render = __bind(this.render, this);      About.__super__.constructor.apply(this, arguments);
      this.render();
    }

    About.prototype.render = function() {
      return About.__super__.render.call(this);
    };

    return About;

  })(Spine.Controller);

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.AddWod = (function(_super) {
    __extends(AddWod, _super);

    AddWod.prototype.searchType = 'wod';

    AddWod.prototype.elements = {
      '.wods-search': 'wodsSearch',
      '.wods-browse': 'wodsBrowse',
      '.no-matches': 'noMatches',
      'input.search-text': 'searchEl'
    };

    AddWod.prototype.events = {
      'keyup input.search-text': 'search',
      'tap input.search-text': 'search',
      'tap .wods-browse li a.custom': 'addCustomWod',
      'tap .wods-browse li a.browse': 'browseWods'
    };

    function AddWod() {
      AddWod.__super__.constructor.apply(this, arguments);
      this.registerStateEvents();
      this.render();
    }

    AddWod.prototype.addCustomWod = function() {
      return Wod.trigger('new', null);
    };

    AddWod.prototype.browseWods = function(e) {
      var type;

      type = $(e.target).closest('li').data('type');
      return Wod.trigger('browse', type);
    };

    return AddWod;

  })(Superfit.SearchWods);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.BrowseWods = (function(_super) {
    __extends(BrowseWods, _super);

    BrowseWods.prototype.searchType = 'wod';

    BrowseWods.prototype.elements = {
      '.wods-search': 'wodsSearch',
      '.wods-browse': 'wodsBrowse',
      '.no-matches': 'noMatches',
      '.page-header h1': 'header',
      'input.search-text': 'searchEl'
    };

    BrowseWods.prototype.events = {
      'keyup input.search-text': 'search',
      'tap input.search-text': 'search'
    };

    function BrowseWods() {
      this.updateWods = __bind(this.updateWods, this);      BrowseWods.__super__.constructor.apply(this, arguments);
      this.registerStateEvents();
      Wod.bind('browse', this.updateWods);
      this.render();
    }

    BrowseWods.prototype.updateWods = function(type) {
      var item, wod, wods, _i, _len, _results;

      this.type = type;
      this.header.text("" + (this.type.toUpperCase()));
      wods = Wod.byType(type);
      this.wodsBrowse.html('');
      _results = [];
      for (_i = 0, _len = wods.length; _i < _len; _i++) {
        wod = wods[_i];
        item = new Superfit.WodItem({
          wod: wod,
          type: 'wod'
        });
        _results.push(this.wodsBrowse.append(item.render()));
      }
      return _results;
    };

    BrowseWods.prototype.state = function() {
      return {
        type: this.type
      };
    };

    BrowseWods.prototype.resume = function(state) {
      return this.updateWods(state.type);
    };

    BrowseWods.prototype.search = function(e) {
      return BrowseWods.__super__.search.call(this, e, this.type);
    };

    return BrowseWods;

  })(Superfit.SearchWods);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.Calendar = (function(_super) {
    __extends(Calendar, _super);

    Calendar.prototype.elements = {
      '.fc-calendar-container': 'calendarEl',
      '#custom-month': 'monthEl',
      '#custom-year': 'yearEl'
    };

    Calendar.prototype.events = {
      'tap #custom-next': 'nextMonth',
      'tap #custom-prev': 'prevMonth'
    };

    function Calendar() {
      this.dayClick = __bind(this.dayClick, this);
      this.updateMonthYear = __bind(this.updateMonthYear, this);
      var _this = this;

      Calendar.__super__.constructor.apply(this, arguments);
      this.render();
      WodEntry.bind('change', function() {
        return _this.render();
      });
    }

    Calendar.prototype.render = function() {
      var caldata, date, reduceData;

      Calendar.__super__.render.apply(this, arguments);
      reduceData = function(acc, entry) {
        var formattedDate;

        formattedDate = moment(entry.date).format('MM-DD-YYYY');
        acc[formattedDate] || (acc[formattedDate] = "");
        if (!(acc[formattedDate].indexOf(entry.typeSlug()) >= 0)) {
          acc[formattedDate] += "<span class='entry " + (entry.typeSlug()) + "'></span>";
        }
        return acc;
      };
      caldata = _.reduce(WodEntry.all(), reduceData, {});
      date = moment(Superfit.currentDate);
      this.cal = this.calendarEl.calendario({
        month: date.month() + 1,
        year: date.year(),
        onDayClick: this.dayClick,
        displayWeekAbbr: true,
        caldata: caldata
      });
      return this.updateMonthYear();
    };

    Calendar.prototype.nextMonth = function() {
      return this.cal.gotoNextMonth(this.updateMonthYear);
    };

    Calendar.prototype.prevMonth = function() {
      return this.cal.gotoPreviousMonth(this.updateMonthYear);
    };

    Calendar.prototype.updateMonthYear = function() {
      this.monthEl.html(this.cal.getMonthName());
      return this.yearEl.html(this.cal.getYear());
    };

    Calendar.prototype.dayClick = function(el, contentEl, properties) {
      var day, month, newDate, year;

      month = properties.month;
      day = properties.day;
      year = properties.year;
      newDate = new Date(year, month - 1, day);
      if (newDate.getTime() <= moment().startOf('day').valueOf()) {
        return Superfit.trigger('changeDate', newDate);
      }
    };

    return Calendar;

  })(Spine.Controller);

}).call(this);
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.Chart = (function(_super) {
    var options;

    __extends(Chart, _super);

    function Chart() {
      _ref = Chart.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Chart.extend(Spine.Log);

    Chart.chart = function(el, data, options) {
      var combinedOptions;

      combinedOptions = $.extend(true, {}, this.defaultOptions, options);
      this.log("Initing chart", combinedOptions);
      if (data) {
        return $.plot(el, [data], combinedOptions);
      } else {
        return el.hide();
      }
    };

    Chart.goalChart = function(el, data) {
      var options;

      options = {
        yaxis: {
          max: 100,
          tickSize: 25,
          tickFormatter: function(value) {
            return "" + value + "%";
          }
        }
      };
      return this.chart(el, data, options);
    };

    Chart.wodChart = function(el, data, method) {
      var options,
        _this = this;

      options = {
        yaxis: {
          tickFormatter: function(value) {
            return _this.formatWodValue(value, method);
          }
        }
      };
      return this.chart(el, data, options);
    };

    Chart.formatWodValue = function(value, method) {
      var min, sec;

      switch (method) {
        case 'for_time':
          min = Math.floor(value / 60);
          sec = value % 60;
          return _.str.sprintf("%d:%02d", Number(min), Number(sec));
        case 'rounds':
        case 'weight':
        case 'max_reps':
          return value;
        case 'weight_reps':
          return "" + value + " lb";
      }
    };

    Chart.defaultOptions = options = {
      xaxis: {
        mode: 'time',
        labelWidth: 40,
        tickFormatter: function(value) {
          return moment(value).format('MMM D');
        },
        ticks: 4
      },
      yaxis: {
        min: 0,
        minTickSize: 1,
        ticks: 4,
        labelWidth: 15,
        align: 'center'
      },
      series: {
        color: 'rgba(78, 163, 227, 0.95)',
        lines: {
          show: true,
          lineWidth: 1,
          fill: true,
          fillColor: 'rgba(78, 163, 227, 0.15)',
          align: 'center'
        },
        points: {
          show: true,
          borderWidth: 1
        },
        shadowSize: 0
      },
      grid: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        clickable: true,
        color: 'rgba(0, 0, 0, 0.2)',
        labelMargin: 20
      },
      tooltip: false,
      tooltipOpts: {
        content: "%x | %y",
        shifts: {
          x: -5,
          y: 1
        }
      }
    };

    return Chart;

  })(Spine.Module);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.EditGoal = (function(_super) {
    __extends(EditGoal, _super);

    EditGoal.prototype.searchType = 'goal';

    EditGoal.prototype.templateName = 'edit_goal';

    EditGoal.prototype.elements = {
      '.wods-search': 'wodsSearch',
      '.wods-browse': 'wodsBrowse',
      '.no-matches': 'noMatches',
      'input.search-text': 'searchEl',
      'form': 'form',
      '.score-container .sub-header': 'scoreLabel'
    };

    EditGoal.prototype.events = {
      'keyup input.search-text': 'search',
      'tap input.search-text': 'search',
      'tap .wods-browse li a.browse': 'browseWods',
      'submit form': 'submit'
    };

    function EditGoal() {
      this.submit = __bind(this.submit, this);
      this.clear = __bind(this.clear, this);
      this.newGoal = __bind(this.newGoal, this);
      var _this = this;

      EditGoal.__super__.constructor.apply(this, arguments);
      Goal.bind('new', this.newGoal);
      this.render();
      this.el.bind("pageAnimationStart", function(e, data) {
        if (data.direction === 'in') {
          _this.clear();
          return _this.render();
        }
      });
    }

    EditGoal.prototype.newGoal = function(wod) {
      this.clear();
      if (wod) {
        this.wod = wod;
        return this.render();
      } else {
        return this.render();
      }
    };

    EditGoal.prototype.clear = function() {
      this.log("CLEAR");
      this.goal_id = null;
      this.wod = null;
      this.wods = null;
      return this.wods_type = null;
    };

    EditGoal.prototype.browseWods = function(e) {
      var item, wod, wods, _i, _len, _results;

      this.wods_type = $(e.target).closest('li').data('type');
      this.render();
      wods = Wod.byType(this.wods_type);
      this.wodsBrowse.html('');
      _results = [];
      for (_i = 0, _len = wods.length; _i < _len; _i++) {
        wod = wods[_i];
        item = new Superfit.WodItem({
          wod: wod,
          type: 'goal'
        });
        _results.push(this.wodsBrowse.append(item.render()));
      }
      return _results;
    };

    EditGoal.prototype.search = function(e) {
      return EditGoal.__super__.search.call(this, e, this.wods_type);
    };

    EditGoal.prototype.render = function() {
      var goal, wod;

      this.log("GOAL ID: " + this.goal_id);
      this.log("GOAL ID: " + this.wod);
      this.log("GOAL ID: " + this.wods);
      if (this.goal_id) {
        this.templateName = 'edit_goal';
        goal = Goal.find(this.goal_id);
        wod = Wod.find(goal.wod_id);
        EditGoal.__super__.render.call(this, {
          goal: goal,
          wod: wod
        });
        this.changeMethod();
      } else if (this.wod) {
        this.templateName = 'edit_goal';
        EditGoal.__super__.render.call(this, {
          wod: this.wod,
          user: User.first()
        });
        this.changeMethod();
      } else if (this.wods) {
        this.templateName = 'create_goal';
        EditGoal.__super__.render.call(this, {
          wods_type: this.wods_type
        });
      } else {
        this.templateName = 'create_goal';
        EditGoal.__super__.render.apply(this, arguments);
      }
      this.initSpinners();
      return this.initValidation();
    };

    EditGoal.prototype.initSpinners = function() {
      return this.$('input[type=number]').spinner();
    };

    EditGoal.prototype.initValidation = function() {
      return this.form.validate({
        submitHandler: this.submit
      });
    };

    EditGoal.prototype.changeMethod = function() {
      var method;

      this.$('.score').hide();
      this.$('.score input').attr('disabled', true);
      method = this.wod.scoring_method;
      this.$("." + method + ".score").show().attr('disabled', false);
      this.$("." + method + ".score input").removeAttr('disabled');
      return this.scoreLabel.text("Enter Goal");
    };

    EditGoal.prototype.submit = function() {
      var data, goal, last;

      data = this.form.serializeObject();
      data.wod_id = parseInt(data.wod_id);
      data.score = data.score ? parseInt(data.score) : parseInt(data.weight);
      data.min = parseInt(data.min);
      data.sec = parseInt(data.sec);
      data.reps = parseInt(data.reps);
      data.reps = parseInt(data.reps);
      data.start_date = moment().valueOf();
      data.last_update = moment().valueOf();
      this.clear();
      if (data.goal_id) {
        goal = Goal.find(data.goal_id);
        goal.updateAttributes(data);
      } else {
        goal = Goal.create(data);
        last = _.last(WodEntry.byWodId(goal.wod_id));
        if (last && goal.isMatch(last)) {
          goal.newEntry(last);
        } else {
          goal.start_score = 0;
          goal.save();
        }
      }
      return jQT.goTo('#goal-detail', jQT.settings.defaultTransition);
    };

    return EditGoal;

  })(Superfit.SearchWods);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.EditProfile = (function(_super) {
    __extends(EditProfile, _super);

    EditProfile.prototype.elements = {
      'form': 'form'
    };

    EditProfile.prototype.events = {
      'change form': 'submit'
    };

    function EditProfile() {
      this.submit = __bind(this.submit, this);
      var user,
        _this = this;

      EditProfile.__super__.constructor.apply(this, arguments);
      user = User.first();
      if (user != null) {
        this.render({
          user: user
        });
      }
      User.bind('create update', function(user) {
        return _this.render({
          user: user
        });
      });
      this.form.validate({
        submitHandler: this.submit
      });
    }

    EditProfile.prototype.submit = function() {
      var data, user;

      data = this.form.serializeObject();
      this.log("Form data", data);
      user = User.first();
      user.updateAttributes(data);
      return jQT.goTo('#edit-profile', jQT.settings.defaultTransition);
    };

    return EditProfile;

  })(Spine.Controller);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.EditProfileGym = (function(_super) {
    __extends(EditProfileGym, _super);

    EditProfileGym.prototype.elements = {
      '.gyms': 'gymsEl',
      '.no-matches': 'noMatches',
      'input[name=gym_id]': 'gymId',
      'form': 'form'
    };

    EditProfileGym.prototype.events = {
      'tap .gym': 'selectGym',
      'keydown input#gym-search': 'search'
    };

    function EditProfileGym() {
      this.selectGym = __bind(this.selectGym, this);
      this.addGyms = __bind(this.addGyms, this);
      this.submit = __bind(this.submit, this);      EditProfileGym.__super__.constructor.apply(this, arguments);
      this.render({
        user: User.first()
      });
      this.debounceLoadGyms = _.debounce(this.loadGyms, 300);
      this.form.validate({
        submitHandler: this.submit
      });
    }

    EditProfileGym.prototype.submit = function() {
      var data, user;

      data = this.form.serializeObject();
      this.log("Form data", data);
      if (data.gym_id) {
        data.gym = _.find(this.gyms, function(gym) {
          return gym.id.toString() === data.gym_id;
        });
      }
      user = User.first();
      user.updateAttributes(data);
      return jQT.goTo('#edit-profile', jQT.settings.defaultTransition);
    };

    EditProfileGym.prototype.search = function(e) {
      var value;

      if (e.keyCode === 13) {
        e.preventDefault();
      }
      value = $(e.target).val();
      if ((value != null) && value.length > 0) {
        return this.debounceLoadGyms(value);
      } else {
        return this.gymsEl.hide();
      }
    };

    EditProfileGym.prototype.loadGyms = function(search) {
      return $.getJSON("/api/gyms?name=" + search, this.addGyms);
    };

    EditProfileGym.prototype.addGyms = function(gyms) {
      var _this = this;

      this.gyms = gyms;
      this.gymsEl.html('');
      if (this.gyms && this.gyms.length > 0) {
        _.each(this.gyms, function(gym) {
          return _this.gymsEl.append(JST['superfit/views/_gym']({
            gym: gym
          }));
        });
        this.noMatches.hide();
        return this.gymsEl.fadeIn();
      } else {
        this.gymsEl.hide();
        return this.noMatches.fadeIn();
      }
    };

    EditProfileGym.prototype.selectGym = function(e) {
      var gym_id, li;

      li = $(e.target).closest('li');
      gym_id = li.data('id');
      this.gymId.val(gym_id);
      this.$('.gym').removeClass('selected');
      return li.addClass('selected');
    };

    return EditProfileGym;

  })(Spine.Controller);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.EditRecord = (function(_super) {
    __extends(EditRecord, _super);

    EditRecord.prototype.elements = {
      'form': 'form',
      '.score-container .sub-header': 'scoreLabel'
    };

    EditRecord.prototype.events = {
      'tap .filter-navigation a': 'navigate'
    };

    function EditRecord() {
      this.submit = __bind(this.submit, this);
      this.updateEditRecord = __bind(this.updateEditRecord, this);
      var _this = this;

      EditRecord.__super__.constructor.apply(this, arguments);
      Wod.bind('editRecord', this.updateEditRecord);
      this.el.bind("pageAnimationStart", function(e, data) {
        var id, _ref;

        if (data.direction === 'in' && (id = (_ref = _this.el.data('referrer')) != null ? _ref.data('id') : void 0)) {
          _this.wod = Wod.find(id);
          return _this.updateEditRecord(_this.wod);
        }
      });
    }

    EditRecord.prototype.render = function() {
      EditRecord.__super__.render.apply(this, arguments);
      this.changeMethod();
      this.initSpinners();
      return this.initValidation();
    };

    EditRecord.prototype.changeMethod = function() {
      var method;

      this.$('.score').hide();
      this.$('.score input').attr('disabled', true);
      method = this.wod.scoring_method;
      this.$("." + method + ".score").show().attr('disabled', false);
      this.$("." + method + ".score input").removeAttr('disabled');
      if (this.wod.typeSlug() === 'strength') {
        return this.scoreLabel.text("Enter Your " + this.repMax + " Rep Max");
      } else {
        return this.scoreLabel.text('Enter New Record');
      }
    };

    EditRecord.prototype.navigate = function(e) {
      var repMax;

      e.preventDefault();
      repMax = $(e.target).closest('a').data('rep-max');
      return Wod.trigger('goToRecord', this.wod.id, repMax);
    };

    EditRecord.prototype.initSpinners = function() {
      return this.$('input[type=number]').spinner();
    };

    EditRecord.prototype.initValidation = function() {
      return this.form.validate({
        submitHandler: this.submit
      });
    };

    EditRecord.prototype.updateEditRecord = function(wod, repMax) {
      if (repMax == null) {
        repMax = 1;
      }
      this.wod = wod;
      this.repMax = repMax;
      return this.render({
        wod: this.wod,
        repMax: this.repMax
      });
    };

    EditRecord.prototype.submit = function() {
      var data, _base;

      data = this.form.serializeObject();
      (_base = this.wod).personal_record || (_base.personal_record = {});
      this.wod.personal_record = _.extend(this.wod.personal_record, data);
      this.wod.save();
      this.wod.trigger('newRecord');
      this.wod.trigger('recordDetail');
      return Wod.trigger('goToRecord', this.wod.id, this.repMax);
    };

    return EditRecord;

  })(Spine.Controller);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.EditWod = (function(_super) {
    __extends(EditWod, _super);

    EditWod.prototype.elements = {
      'form': 'form',
      '.sets': 'sets',
      '.customwod-tabs': 'tabs',
      '.custom-wod-photo': 'customWodPhoto',
      '.custom-wod-img': 'customWodImage',
      '.initial-capture': 'initialCapture',
      '.post-capture': 'postCapture'
    };

    EditWod.prototype.events = {
      'tap .add-set': 'addSet',
      'tap .remove-set': 'removeSet',
      'change select[name=method]': 'changeMethod',
      'change input[type=number]': 'notNegative',
      'spinstop input[type=number]': 'notNegative',
      'tap .take-photo': 'takePhoto',
      'tap .warm-up': 'togglestyle',
      'tap .tab-nav .tab-btn': 'togglePhoto',
      'tap .delete-photo': 'deletePhoto'
    };

    function EditWod() {
      this.submit = __bind(this.submit, this);
      this.updateNewWod = __bind(this.updateNewWod, this);
      var _this = this;

      EditWod.__super__.constructor.apply(this, arguments);
      this.registerStateEvents();
      Wod.bind('new', this.updateNewWod);
      this.el.bind("pageAnimationStart", function(e, data) {
        var entry, id, _ref;

        if (data.direction === 'in' && (id = (_ref = _this.el.data('referrer')) != null ? _ref.data('id') : void 0)) {
          entry = WodEntry.find(id);
          return _this.updateEditEntry(entry);
        }
      });
    }

    EditWod.prototype.takePhoto = function(e) {
      var captureError, captureSuccess, options,
        _this = this;

      if (!window.device.platform) {
        return;
      }
      captureSuccess = function(filePath) {
        return window.resolveLocalFileSystemURI(filePath, (function(file) {
          var filename;

          filename = Date.now() + ".jpg";
          return window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, (function(fs) {
            return file.copyTo(fs.root, filename, (function(newFile) {
              _this.customWodPhoto.val(newFile.fullPath);
              _this.customWodImage.attr("src", newFile.fullPath);
              return _this.updatePhoto(newFile.fullPath);
            }), captureError);
          }), captureError);
        }), captureError);
      };
      captureError = function(error) {
        self.log(error);
        if (error !== "no image selected") {
          return setTimeout((function() {
            return navigator.notification.alert("An error occurred with your photo.  Please try again.");
          }), 0);
        }
      };
      options = {
        quality: 75,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 320,
        targetHeight: 480,
        saveToPhotoAlbum: false
      };
      navigator.camera.getPicture(captureSuccess, captureError, options);
      return e.preventDefault();
    };

    EditWod.prototype.changeMethod = function() {
      var method;

      this.$('.score').hide();
      this.$('.score input').attr('disabled', true);
      method = this.wod ? this.wod.scoring_method : this.$('select[name=method]').val();
      this.$("." + method + ".score").show().attr('disabled', false);
      return this.$("." + method + ".score input").removeAttr('disabled');
    };

    EditWod.prototype.render = function() {
      EditWod.__super__.render.apply(this, arguments);
      this.initSpinners();
      this.initValidation();
      return this.changeMethod();
    };

    EditWod.prototype.initSpinners = function() {
      return this.$('input[type=number]').spinner();
    };

    EditWod.prototype.initValidation = function() {
      return this.form.validate({
        errorPlacement: function(error, element) {
          return error.appendTo(element.closest('.ui-spinner'));
        },
        highlight: function(element) {
          $(element).removeClass('success').addClass('form-error');
          return $(element).closest('.enter-score').removeClass('success').addClass('error');
        },
        unhighlight: function(element) {
          $(element).removeClass('form-error').addClass('success');
          return $(element).closest('.enter-score').removeClass('error').addClass('success');
        },
        submitHandler: this.submit
      });
    };

    EditWod.prototype.deletePhoto = function(e) {
      e.preventDefault();
      this.customWodPhoto.val('');
      this.customWodImage.attr("src", '');
      return this.updatePhoto('');
    };

    EditWod.prototype.updatePhoto = function(photo) {
      if (photo) {
        this.initialCapture.hide();
        return this.postCapture.show();
      } else {
        this.postCapture.hide();
        return this.initialCapture.show();
      }
    };

    EditWod.prototype.updateNewWod = function(wod) {
      this.wod = wod;
      this.templateName = wod && wod.type === 'Strength' ? 'enter_strength_score' : 'enter_wod_score';
      this.render({
        wod: this.wod,
        user: User.first()
      });
      if (this.wod && this.wod.type === 'Strength') {
        this.addSets();
      }
      return this.updatePhoto(null);
    };

    EditWod.prototype.updateEditEntry = function(entry) {
      if (entry.wod_id) {
        this.wod = Wod.find(entry.wod_id);
      }
      this.templateName = this.wod && this.wod.type === 'Strength' ? 'enter_strength_score' : 'enter_wod_score';
      this.render({
        wod: this.wod,
        entry: entry,
        user: User.first()
      });
      if (this.wod && this.wod.type === 'Strength') {
        this.addSets(entry);
      }
      return this.updatePhoto(entry.photo);
    };

    EditWod.prototype.toInt = function(numOrArray) {
      if (!numOrArray) {
        return null;
      }
      if (typeof numOrArray === 'object') {
        return _.map(numOrArray, function(num) {
          return parseInt(num);
        });
      } else {
        return parseInt(numOrArray);
      }
    };

    EditWod.prototype.ensureArray = function(arrayOrNot) {
      if (typeof arrayOrNot === 'object') {
        return arrayOrNot;
      } else {
        return [arrayOrNot];
      }
    };

    EditWod.prototype.submit = function() {
      var attributes, data, entry, method;

      data = this.form.serializeObject();
      method = this.wod ? this.wod.scoring_method : data.method;
      attributes = {
        wod_id: this.wod && this.wod.id,
        name: data.name,
        score: method === 'pass_fail' ? data.score : this.toInt(data.score),
        min: this.toInt(data.min),
        sec: this.toInt(data.sec),
        reps: this.ensureArray(this.toInt(data.reps)),
        weight: this.ensureArray(this.toInt(data.weight)),
        method: method,
        type: data.type,
        details: data.details,
        created_date: new Date().valueOf(),
        date: new Date(Superfit.currentDate).valueOf(),
        warm_up: data.warm_up,
        photo: data.photo
      };
      if (data.entry_id) {
        entry = WodEntry.find(data.entry_id);
        entry.updateAttributes(attributes);
      } else {
        entry = WodEntry.create(attributes);
      }
      return jQT.goTo('#review-wod', jQT.settings.defaultTransition);
    };

    EditWod.prototype.addSets = function(entry) {
      var _this = this;

      if (entry == null) {
        entry = null;
      }
      if (!entry) {
        return this.addSet();
      } else {
        return _.each(entry.reps, function(reps, i) {
          return _this.addSet(null, reps, entry.weight[i]);
        });
      }
    };

    EditWod.prototype.togglestyle = function(e) {
      return $(e.target).toggleClass("selected", $(e.target).is(":checked"));
    };

    EditWod.prototype.togglePhoto = function(e) {
      if (this.tabs.hasClass('photo')) {
        return this.tabs.removeClass('photo').addClass('text');
      } else if (this.tabs.hasClass('text')) {
        return this.tabs.removeClass('text').addClass('photo');
      }
    };

    EditWod.prototype.addSet = function(e, reps, weight) {
      var html;

      if (e == null) {
        e = null;
      }
      if (reps == null) {
        reps = null;
      }
      if (weight == null) {
        weight = null;
      }
      if (e) {
        e.preventDefault();
      }
      this.set_number = this.$('.set').length + 1;
      html = JST['superfit/views/_set']({
        set_number: this.set_number,
        reps: reps,
        weight: weight
      });
      this.sets.append(html);
      return this.initSpinners();
    };

    EditWod.prototype.removeSet = function(e) {
      e.preventDefault();
      if ($('.set').length > 1) {
        $(e.target).closest('.set').detach();
      } else {
        $('input[type=number]').val('');
      }
      return _.each($('.set-number'), function(el, i) {
        return $(el).text(i + 1);
      });
    };

    EditWod.prototype.notNegative = function(e) {
      var val;

      val = $(e.target).val();
      if (parseInt(val) < 0) {
        return $(e.target).val(0);
      }
    };

    return EditWod;

  })(Spine.Controller);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.GoalDetail = (function(_super) {
    __extends(GoalDetail, _super);

    GoalDetail.prototype.elements = {
      '.chart': 'chart',
      '.chart-container': 'chartContainer'
    };

    GoalDetail.prototype.events = {
      'tap .delete': 'delete'
    };

    function GoalDetail() {
      this.update = __bind(this.update, this);
      var _this = this;

      GoalDetail.__super__.constructor.apply(this, arguments);
      Goal.bind('create', this.update);
      Goal.bind('update', this.update);
      this.el.bind("pageAnimationStart", function(e, data) {
        var goal, id, referrer;

        if (data.direction === 'in' && (referrer = _this.el.data('referrer'))) {
          _this.el.data('referrer', null);
          id = referrer.data('id');
          goal = Goal.find(id);
          return _this.update(goal);
        }
      });
    }

    GoalDetail.prototype.update = function(goal) {
      this.wod = Wod.find(goal.wod_id);
      this.goal = goal;
      this.pastEntries = this.goal.entries();
      this.render({
        wod: this.wod,
        goal: this.goal,
        startEntry: this.goal.start_entry(),
        pastEntries: this.pastEntries,
        showHistory: true
      });
      Superfit.trigger('timeago');
      if (this.goal.history && this.goal.history.length > 1) {
        return Superfit.Chart.goalChart(this.chart, this.goal.history);
      } else {
        return this.chartContainer.replaceWith(Superfit.NO_CHART_DATA);
      }
    };

    GoalDetail.prototype["delete"] = function() {
      return this.goal.destroy();
    };

    return GoalDetail;

  })(Spine.Controller);

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.Goals = (function(_super) {
    __extends(Goals, _super);

    Goals.prototype.events = {
      'tap .filter-navigation a': 'navigateType',
      'tap .add-goal': function() {
        return Goal.trigger('new');
      }
    };

    function Goals() {
      var _this = this;

      Goals.__super__.constructor.apply(this, arguments);
      this.type = 'in_progress';
      this.render();
      Goal.bind('change', function() {
        return _this.render();
      });
      WodEntry.bind('create update', function(entry) {
        var goals;

        goals = Goal.byWodId(entry.wod_id);
        return _.each(goals, function(goal) {
          return goal.newEntry(entry);
        });
      });
    }

    Goals.prototype.render = function() {
      var goals;

      if (this.type === 'in_progress') {
        goals = Goal.inProgress();
      } else {
        goals = Goal.completed();
      }
      Goals.__super__.render.call(this, {
        goals: goals,
        type: this.type
      });
      return Superfit.trigger('timeago');
    };

    Goals.prototype.navigateType = function(e) {
      e.preventDefault();
      this.type = $(e.target).data('type');
      return this.render();
    };

    return Goals;

  })(Spine.Controller);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.Home = (function(_super) {
    __extends(Home, _super);

    Home.prototype.elements = {
      '.chart': 'chart',
      '.chart-container': 'chartContainer'
    };

    Home.prototype.events = {
      'tap .prev-day': 'prevDay',
      'tap .next-day': 'nextDay',
      'tap .date': 'openCalendar'
    };

    function Home() {
      this.nextDay = __bind(this.nextDay, this);
      this.prevDay = __bind(this.prevDay, this);
      this.changeDate = __bind(this.changeDate, this);
      var _this = this;

      Home.__super__.constructor.apply(this, arguments);
      Superfit.currentDate = this.today();
      this.render();
      Superfit.bind('changeDate', this.changeDate);
      WodEntry.bind('change', function() {
        return _this.render();
      });
      Goal.bind('change', function() {
        return _this.render();
      });
    }

    Home.prototype.render = function() {
      var entries;

      entries = WodEntry.byDate(Superfit.currentDate);
      this.goal = Goal.lastUpdated();
      Home.__super__.render.call(this, {
        currentDate: Superfit.currentDate,
        entries: entries,
        goal: this.goal,
        today: this.today()
      });
      if (this.goal != null) {
        if (this.goal.history && this.goal.history.length > 1) {
          return Superfit.Chart.goalChart(this.chart, this.goal.history);
        } else {
          return this.chartContainer.replaceWith(Superfit.NO_CHART_DATA);
        }
      }
    };

    Home.prototype.today = function() {
      return moment().startOf('day').toDate();
    };

    Home.prototype.changeDate = function(date) {
      Superfit.currentDate = date;
      this.render();
      return jQT.goTo('#home', 'pop');
    };

    Home.prototype.prevDay = function() {
      var previous;

      previous = moment(Superfit.currentDate).subtract('days', 1).toDate();
      return this.changeDate(previous);
    };

    Home.prototype.nextDay = function() {
      var next;

      next = moment(Superfit.currentDate).add('days', 1).toDate();
      return this.changeDate(next);
    };

    Home.prototype.openCalendar = function() {
      return jQT.goTo('#calendar', 'pop');
    };

    return Home;

  })(Spine.Controller);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.Navigation = (function(_super) {
    __extends(Navigation, _super);

    function Navigation() {
      this.pulldown = __bind(this.pulldown, this);
      this.hideNavigation = __bind(this.hideNavigation, this);
      this.clicked = __bind(this.clicked, this);      Navigation.__super__.constructor.apply(this, arguments);
      this.navigation = $(this.template());
      $('.app-container').on('tap', '.pulldown', this.pulldown);
      this.navigation.on('tap', 'a', this.clicked);
      $('.page').on('pageAnimationEnd', this.hideNavigation);
    }

    Navigation.prototype.clicked = function(e) {
      var goTo;

      e.preventDefault();
      $('.pulldown').removeClass('open');
      this.navigation.removeClass('active');
      goTo = function() {
        return jQT.goTo($(e.target).attr('href'), 'dissolve');
      };
      return _.delay(goTo, 300);
    };

    Navigation.prototype.hideNavigation = function() {
      this.navigation.detach();
      $('.pulldown').removeClass('open');
      return this.navigation.removeClass('active');
    };

    Navigation.prototype.pulldown = function(e) {
      var pulldown,
        _this = this;

      pulldown = $('.pulldown');
      if (this.navigation.is('.active')) {
        pulldown.removeClass('open');
        return this.navigation.removeClass('active');
      } else {
        pulldown.addClass('open');
        this.navigation.prependTo('.current');
        return _.defer(function() {
          return _this.navigation.addClass('active');
        });
      }
    };

    return Navigation;

  })(Spine.Controller);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.Profile = (function(_super) {
    __extends(Profile, _super);

    function Profile() {
      this.render = __bind(this.render, this);      Profile.__super__.constructor.apply(this, arguments);
      if (User.first()) {
        this.render();
      }
      User.bind('create update', this.render);
    }

    Profile.prototype.render = function() {
      return Profile.__super__.render.call(this, {
        user: User.first()
      });
    };

    return Profile;

  })(Spine.Controller);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.RecordDetail = (function(_super) {
    __extends(RecordDetail, _super);

    RecordDetail.prototype.events = {
      'tap .filter-navigation a': 'navigate'
    };

    RecordDetail.prototype.elements = {
      '.chart': 'chart',
      '.chart-container': 'chartContainer'
    };

    function RecordDetail() {
      this.update = __bind(this.update, this);
      var _this = this;

      RecordDetail.__super__.constructor.apply(this, arguments);
      Wod.bind('recordDetail', this.update);
      this.el.bind("pageAnimationStart", function(e, data) {
        var id, referrer, wod;

        if (data.direction === 'in' && (referrer = _this.el.data('referrer'))) {
          _this.el.data('referrer', null);
          id = referrer.data('id');
          wod = Wod.find(id);
          return _this.update(wod);
        }
      });
    }

    RecordDetail.prototype.update = function(wod, repMax) {
      var history,
        _this = this;

      if (repMax == null) {
        repMax = 1;
      }
      this.wod = wod;
      this.repMax = repMax;
      if (this.wod.personal_record != null) {
        this.pastEntries = WodEntry.history(this.wod);
        if (this.wod.type === 'Strength') {
          this.pastEntries = _.filter(this.pastEntries, function(entry) {
            return _.contains(entry.reps, _this.repMax);
          });
        }
        this.render({
          wod: this.wod,
          pastEntries: this.pastEntries,
          repMax: this.repMax,
          showHistory: this.pastEntries.length > 0
        });
        history = _.map(this.pastEntries, function(entry) {
          return [entry.date, entry.value()];
        });
        if (this.wod.method === 'pass_fail') {
          return this.chart.hide();
        } else if (history && history.length > 1) {
          return Superfit.Chart.wodChart(this.chart, history, this.wod.scoring_method);
        } else {
          return this.chartContainer.replaceWith(Superfit.NO_CHART_DATA);
        }
      }
    };

    RecordDetail.prototype.navigate = function(e) {
      var repMax;

      e.preventDefault();
      repMax = $(e.target).closest('a').data('rep-max');
      return Wod.trigger('goToRecord', this.wod.id, repMax);
    };

    return RecordDetail;

  })(Spine.Controller);

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.Records = (function(_super) {
    __extends(Records, _super);

    Records.prototype.events = {
      'tap .filter-navigation a': 'navigateType',
      'tap .records a': 'recordClicked'
    };

    Records.prototype.currentType = 'strength';

    function Records() {
      var _this = this;

      Records.__super__.constructor.apply(this, arguments);
      this.render();
      Wod.bind('refresh newRecord', function() {
        return _this.render();
      });
      Wod.bind('goToRecord', this.goToRecord);
      WodEntry.bind('create update', function(entry) {
        return _this.checkIfNewRecord(entry);
      });
      WodEntry.bind('destroy', function(entry) {
        return _this.entryDestroyed(entry);
      });
    }

    Records.prototype.render = function() {
      Records.__super__.render.apply(this, arguments);
      return this.updateTypes();
    };

    Records.prototype.navigateType = function(e) {
      e.preventDefault();
      this.currentType = $(e.target).data('type');
      return this.updateTypes();
    };

    Records.prototype.updateTypes = function() {
      this.$("section:visible").hide();
      this.$("section." + this.currentType).fadeIn();
      this.$(".filter-navigation a").removeClass('selected');
      return this.$(".filter-navigation a[data-type=" + this.currentType + "]").addClass('selected');
    };

    Records.prototype.checkIfNewRecord = function(entry) {
      var wod;

      if (entry.wod_id != null) {
        wod = Wod.find(entry.wod_id);
        if (wod.isRecord(entry)) {
          return wod.updateRecord(entry);
        }
      }
    };

    Records.prototype.entryDestroyed = function(entry) {
      var wod;

      if (entry.wod_id != null) {
        wod = Wod.find(entry.wod_id);
        if (wod.personal_record != null) {
          if (wod.personal_record.entry_id === entry.id) {
            return this.findNewRecord(wod);
          }
        }
      }
    };

    Records.prototype.findNewRecord = function(wod) {
      wod.personal_record = null;
      return _.each(WodEntry.history(wod), function(entry) {
        return wod.updateRecord(entry);
      });
    };

    Records.prototype.recordClicked = function(e) {
      var wod_id;

      e.preventDefault();
      wod_id = $(e.target).closest('a').data('id');
      return Wod.trigger('goToRecord', wod_id, 1, 'slideleft');
    };

    Records.prototype.goToRecord = function(wod_id, repMax, transition) {
      var hasRecord, wod, _ref;

      if (repMax == null) {
        repMax = 1;
      }
      if (transition == null) {
        transition = 'fade';
      }
      wod = Wod.find(wod_id);
      hasRecord = wod.strength() ? ((_ref = wod.personal_record) != null ? _ref["max_" + repMax] : void 0) != null : wod.personal_record != null;
      if (hasRecord) {
        Wod.trigger('recordDetail', wod, repMax);
        return jQT.goTo('#record-detail', transition);
      } else {
        Wod.trigger('editRecord', wod, repMax);
        return jQT.goTo('#edit-record', transition);
      }
    };

    return Records;

  })(Spine.Controller);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.ReviewWod = (function(_super) {
    __extends(ReviewWod, _super);

    ReviewWod.prototype.elements = {
      '.chart': 'chart',
      '.chart-container': 'chartContainer'
    };

    ReviewWod.prototype.events = {
      'tap .delete': 'deleteWod',
      'tap .history a': 'history'
    };

    function ReviewWod() {
      this.updateReviewWod = __bind(this.updateReviewWod, this);
      var _this = this;

      ReviewWod.__super__.constructor.apply(this, arguments);
      WodEntry.bind('create', this.updateReviewWod);
      WodEntry.bind('update', this.updateReviewWod);
      Goal.bind('complete', function(goal) {
        return _this.completedGoal = goal;
      });
      this.el.bind("pageAnimationStart", function(e, data) {
        var entry, id, referrer;

        if (data.direction === 'in' && (referrer = _this.el.data('referrer'))) {
          _this.el.data('referrer', null);
          id = referrer.data('id');
          entry = WodEntry.find(id);
          return _this.updateReviewWod(entry);
        }
      });
    }

    ReviewWod.prototype.updateReviewWod = function(entry) {
      var history, personalRecord, _ref;

      if (entry.wod_id) {
        this.wod = Wod.find(entry.wod_id);
      }
      this.entry = entry;
      if (entry.wod_id != null) {
        this.pastEntries = WodEntry.history(this.wod);
        if (entry.type) {
          this.pastEntries = this.pastEntries.filter(function(pastEntry) {
            return entry.type === pastEntry.type;
          });
        }
      }
      personalRecord = (((_ref = this.wod) != null ? _ref.personal_record : void 0) != null) && this.entry.id === this.wod.personal_record.entry_id;
      this.render({
        wod: this.wod,
        entry: this.entry,
        pastEntries: this.pastEntries,
        completedGoal: this.completedGoal,
        showHistory: this.wod !== null,
        personalRecord: personalRecord
      });
      this.completedGoal = null;
      return -(this.wod ? (history = this.wod.history(), this.wod.method === 'pass_fail' ? this.chart.hide() : history && history.length > 1 ? Superfit.Chart.wodChart(this.chart, history, this.wod.scoring_method) : this.chartContainer.replaceWith(Superfit.NO_CHART_DATA)) : void 0);
    };

    ReviewWod.prototype.deleteWod = function() {
      return this.entry.destroy();
    };

    ReviewWod.prototype.history = function(e) {
      var entry, id;

      id = $(e.target).closest('a').data('id');
      entry = WodEntry.find(id);
      return this.updateReviewWod(entry);
    };

    return ReviewWod;

  })(Spine.Controller);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.Start = (function(_super) {
    __extends(Start, _super);

    Start.prototype.elements = {
      '.gyms': 'gymsEl',
      '.no-matches': 'noMatches',
      'input[name=gym_id]': 'gymId',
      'form': 'form'
    };

    Start.prototype.events = {
      'tap .gym': 'selectGym',
      'keydown input#gym-search': 'search'
    };

    function Start() {
      this.selectGym = __bind(this.selectGym, this);
      this.addGyms = __bind(this.addGyms, this);
      this.submit = __bind(this.submit, this);      Start.__super__.constructor.apply(this, arguments);
      this.debounceLoadGyms = _.debounce(this.loadGyms, 300);
      this.form.validate({
        submitHandler: this.submit
      });
    }

    Start.prototype.submit = function() {
      var data;

      data = this.form.serializeObject();
      if (data.gym_id) {
        data.gym = _.find(this.gyms, function(gym) {
          return gym.id.toString() === data.gym_id;
        });
      }
      User.destroyAll();
      User.create(data);
      return jQT.goTo('#home', jQT.settings.defaultTransition);
    };

    Start.prototype.search = function(e) {
      var value;

      if (e.keyCode === 13) {
        e.preventDefault();
      }
      value = $(e.target).val();
      if ((value != null) && value.length > 0) {
        return this.debounceLoadGyms(value);
      } else {
        return this.gymsEl.hide();
      }
    };

    Start.prototype.loadGyms = function(search) {
      return $.getJSON("/api/gyms?name=" + search, this.addGyms);
    };

    Start.prototype.addGyms = function(gyms) {
      var _this = this;

      this.gyms = gyms;
      this.gymsEl.html('');
      if (this.gyms && this.gyms.length > 0) {
        _.each(this.gyms, function(gym) {
          return _this.gymsEl.append(JST['superfit/views/_gym']({
            gym: gym
          }));
        });
        this.noMatches.hide();
        return this.gymsEl.fadeIn();
      } else {
        this.gymsEl.hide();
        return this.noMatches.fadeIn();
      }
    };

    Start.prototype.selectGym = function(e) {
      var gym_id, li;

      li = $(e.target).closest('li');
      gym_id = li.data('id');
      this.gymId.val(gym_id);
      this.$('.gym').removeClass('selected');
      return li.addClass('selected');
    };

    return Start;

  })(Spine.Controller);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Superfit.WodItem = (function(_super) {
    __extends(WodItem, _super);

    WodItem.prototype.tag = 'li';

    WodItem.prototype.templateName = '_wod_item';

    WodItem.prototype.events = {
      'tap a': 'select'
    };

    function WodItem() {
      this.select = __bind(this.select, this);      WodItem.__super__.constructor.apply(this, arguments);
      if (!this.wod) {
        throw "No wod specified";
      }
      if (!this.type) {
        throw "No wod type specified";
      }
    }

    WodItem.prototype.render = function() {
      return WodItem.__super__.render.call(this, {
        wod: this.wod,
        type: this.type
      });
    };

    WodItem.prototype.select = function() {
      if (this.type === 'goal') {
        return Goal.trigger('new', this.wod);
      } else if (this.type === 'wod') {
        return Wod.trigger('new', this.wod);
      } else {
        throw "Unrecognized wod item type: " + this.type;
      }
    };

    return WodItem;

  })(Spine.Controller);

}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/_gym"] = (function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<li class='gym' data-id='" + ($e($c(this.gym.id))) + "'>\n  <a href='#dashboard'>\n    <div class='label'>\n      <p>");
      $o.push("        " + $e($c(this.gym.name)));
      $o.push("      </p>\n      <p class='arrow awesome icon-chevron-right'></p>\n    </div>\n  </a>\n</li>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/_history"] = (function(context) {
    return (function() {
      var $c, $e, $o, history, _i, _len, _ref;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='content-main'>\n  <div class='secondary'>\n    <div class='title'>\n      <h3>History</h3>\n    </div>\n    <ul class='history'>\n      <li class='chart-container'>\n        <div class='chart'></div>\n      </li>");
  if (this.pastEntries) {
    _ref = this.pastEntries;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      history = _ref[_i];
      $o.push("      <li>\n        <a href='#' data-id='" + ($e($c(history.id))) + "'></a>\n        <div class='label'>\n          <p>" + ($e($c(moment(history.date).format('MMM D, YYYY')))) + "</p>\n          <p>" + ($e($c(history.scoreString()))) + "</p>\n        </div>\n      </li>");
    }
      }
      $o.push("    </ul>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/_score"] = (function(context) {
    return (function() {
      var $c, $e, $o, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='score-container'>\n  <h3 class='sub-header'>Enter Score</h3>\n  <div class='for_time score'>\n    <input class='required' type='number' name='min' placeholder='Min' value='" + ($e($c((_ref = this.entry) != null ? _ref.min : void 0))) + "'>\n    <input class='required' type='number' name='sec' placeholder='Sec' value='" + ($e($c((_ref1 = this.entry) != null ? _ref1.sec : void 0))) + "'>\n  </div>\n  <div class='rounds score'>\n    <input class='required' type='number' name='score' placeholder='Enter Rounds' value='" + ($e($c((_ref2 = this.entry) != null ? _ref2.score : void 0))) + "'>\n  </div>\n  <div class='score weight'>\n    <input class='required' type='number' name='score' placeholder='Enter Weight (lbs)' value='" + ($e($c((_ref3 = this.entry) != null ? _ref3.score : void 0))) + "'>\n  </div>\n  <div class='max_reps score'>\n    <input class='required' type='number' name='score' placeholder='Enter Reps' value='" + ($e($c((_ref4 = this.entry) != null ? _ref4.score : void 0))) + "'>\n  </div>\n  <div class='pass_fail score'>\n    <input class='left' id='score-pass' type='radio' name='score' value='pass' checked='" + ($e($c(this.entry ? this.entry.score === 'pass' : 'checked'))) + "'>\n      <label class='radio' for='score-pass'>Pass</label>\n    <input class='right' id='score-fail' type='radio' name='score' value='fail' checked='" + ($e($c(((_ref5 = this.entry) != null ? _ref5.score : void 0) === 'fail'))) + "'>\n      <label class='radio' for='score-fail'>Fail</label>\n  </div>\n  <div class='score weight_reps'>");
  if (this.repMax) {
    $o.push("    <input class='required' type='number' name='max_" + ($e($c(this.repMax))) + "' placeholder='Enter Weight (lbs)' value='" + ($e($c((_ref6 = this.entry) != null ? _ref6.score : void 0))) + "'>");
  } else {
    $o.push("    <div class='enter-score'>\n      <div class='set'>\n        <div class='input'>\n          <input class='number required' type='number' name='weight' placeholder='ex. 155' value='" + ($e($c(this.weight))) + "'>\n          <span class='small'>Enter Weight (lbs)</span>\n        </div>\n        <div class='times'>\n          <span class='awesome icon-cancel'></span>\n        </div>\n        <div class='reps'>\n          <input class='number required' type='number' name='reps' placeholder='ex. 10' value='" + ($e($c(this.reps))) + "'>\n          <span class='small'>Enter Reps</span>\n        </div>\n      </div>\n    </div>");
      }
      $o.push("  </div>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/_set"] = (function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='set'>\n  <div class='enter-score-label'>\n    <p>Set <span class='set-number'>" + this.set_number + "</span></p>\n    <i class=\"remove-set icon-remove-sign\"></i>\n    <input class='warm-up' type='checkbox' name='warm_up' placeholder='Warm-up' value='" + ($e($c(this.warm_up))) + "'>\n  </div>\n  <div class='enter-score'>\n    <div class='input'>\n      <input class='number required' type='number' name='weight' placeholder='ex. 155' value='" + ($e($c(this.weight))) + "'>\n      <span class='small'>Enter Weight (lbs)</span>\n    </div>\n    <div class='times'>\n      <span class='awesome icon-cancel'></span>\n    </div>\n    <div class='reps'>\n      <input class='number required' type='number' name='reps' placeholder='ex. 10' value='" + ($e($c(this.reps))) + "'>\n      <span class='small'>Enter Reps</span>\n    </div>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/_wod_item"] = (function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<a href='#edit-" + ($e($c(this.type))) + "' data-wod-id='" + ($e($c(this.wod.id))) + "'>\n  <div class='label'>\n    <div class='" + (['icon', 'sprite-sf', "" + ($e($c(this.wod.typeSlug())))].sort().join(' ').replace(/^\s+|\s+$/g, '')) + "'></div>\n    <p>" + ($e($c(this.wod.name))) + "</p>\n  </div>\n  <p class='arrow awesome icon-chevron-right'></p>\n</a>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/about"] = (function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<div class='page-header'>\n  <div class='toolbar'>\n    <div class='pulldown sprite-sf'>\n      Navigation Pulldown\n    </div>\n    <h1>About</h1>\n  </div>\n</div>\n<div class='about'>\n  <h3>About Superfit  (v1.1)</h3>\n  <p>Superfit was designed to provide the everyday athlete with a better tool for tracking progress and workout activity.</p>\n  <p>\n    <a href='mailto:support@superfitapp.com' target='_blank'>Need Help? Email: support@superfitapp.com</a>\n  </p>\n  <p>\n    Learn more about Superfit at http://www.superfitapp.com\n  </p>\n  <p>\n    Not affiliated with CrossFit, Inc.\n  </p>\n</div>");
      return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/add_wod"] = (function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<div class='page-header'>\n  <div class='toolbar'>\n    <div>\n      <a class='awesome goback icon-chevron-left' href='#home'></a>\n    </div>\n    <h1>Select Workout</h1>\n  </div>\n</div>\n<div class='search-block'>\n  <form>\n    <input class='search-text' type='text' name='search-text' placeholder='Search All'>\n  </form>\n</div>\n<div class='content-main'>\n  <h3 class='no-matches'>No WODs found for this search.</h3>\n  <ul class='wods-search'></ul>\n  <ul class='wods-browse'>\n    <li>\n      <a class='custom' href='#edit-wod'>\n        <div class='label'>\n          <div class='custom icon sprite-sf'></div>\n          <p>Custom</p>\n        </div>\n        <p class='arrow awesome icon-chevron-right'></p>\n      </a>\n    </li>\n    <li data-type='benchmark'>\n      <a class='browse' href='#browse-wods'>\n        <div class='label'>\n          <div class='benchmark icon sprite-sf'></div>\n          <p>Benchmark</p>\n        </div>\n        <p class='arrow awesome icon-chevron-right'></p>\n      </a>\n    </li>\n    <li data-type='strength'>\n      <a class='browse' href='#browse-wods'>\n        <div class='label'>\n          <div class='icon sprite-sf strength'></div>\n          <p>Strength</p>\n        </div>\n        <p class='arrow awesome icon-chevron-right'></p>\n      </a>\n    </li>\n    <li data-type='other'>\n      <a class='browse' href='#browse-wods'>\n        <div class='label'>\n          <div class='icon other sprite-sf'></div>\n          <p>Other</p>\n        </div>\n        <p class='arrow awesome icon-chevron-right'></p>\n      </a>\n    </li>\n  </ul>\n</div>");
      return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/browse_wods"] = (function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<div class='page-header'>\n  <div class='toolbar'>\n    <div>\n      <a class='awesome goback icon-chevron-left' href='#add-wod'></a>\n    </div>\n    <h1>Select WOD</h1>\n  </div>\n</div>\n<div class='scroll'>\n  <div class='search-block'>\n    <form>\n      <input class='search-text' type='text' name='search-text' placeholder='Search WODs'>\n    </form>\n  </div>\n  <div class='content-main'>\n    <h3 class='no-matches'>No WODs found for this search.</h3>\n    <ul class='wods-search'></ul>\n    <ul class='wods-browse'></ul>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/calendar"] = (function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<div class='page' id='calendar'>\n  <div class='custom-calendar-wrap'>\n    <div class='custom-inner' id='custom-inner'>\n      <div class='custom-header'>\n        <nav>\n          <span class='custom-prev' id='custom-prev'></span>\n          <span class='custom-next' id='custom-next'></span>\n        </nav>\n        <h2 class='custom-month' id='custom-month'></h2>\n        <h3 class='custom-year' id='custom-year'></h3>\n      </div>\n      <div class='fc-calendar-container'></div>\n    </div>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/create_goal"] = (function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<div class='page-header'>\n  <div class='toolbar'>\n    <div>\n      <a class='awesome goback icon-chevron-left' href='#home'></a>\n    </div>");
  if (this.wods_type) {
    $o.push("    <h1>Select " + this.wods_type + "</h1>");
  } else {
    $o.push("    <h1>Create Goal</h1>");
      }
      $o.push("  </div>\n</div>\n<div class='scroll'>\n  <p class='goal-notify'>Start by selecting a Movement, Workout or Benchmark you want to measure.</p>\n  <div class='search-block'>\n    <form>\n      <input class='search-text' type='text' name='search-text' placeholder='Search All'>\n    </form>\n  </div>\n  <div class='content-main'>\n    <h3 class='no-matches'>No WODs found for this search.</h3>\n    <ul class='wods-search'></ul>\n    <ul class='wods-browse'>");
  if (!this.wods_type) {
    $o.push("      <li data-type='benchmark'>\n        <a class='browse' href='#edit-goal'>\n          <div class='label'>\n            <div class='benchmark icon sprite-sf'></div>\n            <p>Benchmark</p>\n          </div>\n          <p class='arrow awesome icon-chevron-right'></p>\n        </a>\n      </li>\n      <li data-type='strength'>\n        <a class='browse' href='#edit-goal'>\n          <div class='label'>\n            <div class='icon sprite-sf strength'></div>\n            <p>Strength</p>\n          </div>\n          <p class='arrow awesome icon-chevron-right'></p>\n        </a>\n      </li>\n      <li data-type='other'>\n        <a class='browse' href='#edit-goal'>\n          <div class='label'>\n            <div class='icon other sprite-sf'></div>\n            <p>Other</p>\n          </div>\n          <p class='arrow awesome icon-chevron-right'></p>\n        </a>\n      </li>");
      }
      $o.push("    </ul>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/edit_goal"] = (function(context) {
    return (function() {
      var $c, $e, $o, _ref, _ref1;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='page-header'>\n  <div class='toolbar'>\n    <div>\n      <a class='awesome goback icon-chevron-left' href='#'></a>\n    </div>\n    <h1>" + this.wod.name + " Goal</h1>\n  </div>\n</div>\n<div class='scroll'>");
  if (this.wod.type !== 'Strength') {
    $o.push("  <div class='content-main'>\n    <div class='content-block'>\n      <div class='yellow-block'>\n        <div class='score'>" + ($e($c(this.wod.name))) + "</div>\n        <p class='score-details'>" + ($e($c())));
    if (this.user.gender === 'male' || (this.user.gender === 'female' && !this.wod.workout_female)) {
      $o.push("          " + $c(Utils.simpleFormat(this.wod.workout_male)));
    }
    if (this.user.gender === 'female') {
      $o.push("          " + $c(Utils.simpleFormat(this.wod.workout_female)));
    }
    $o.push("        </p>\n        <hr>\n        <p class='score-notes'>");
    $o.push("          " + $e($c(this.wod.scoringMethod())));
    $o.push("          <br>");
    $o.push("          " + $e($c(this.wod.scoring_notes)));
    $o.push("        </p>\n      </div>\n    </div>\n  </div>");
      }
      $o.push("  <div class='content-main'>\n    <div class='content-block'>\n      <form>");
  if (this.wod) {
    $o.push("        <input type='hidden' name='wod_id' value='" + ($e($c(this.wod.id))) + "'>");
      }
  if (this.goal) {
    $o.push("        <input type='hidden' name='goal_id' value='" + ($e($c(this.goal.id))) + "'>");
      }
      $o.push("        <div class='enter-score'>\n          <div class='score-container'>");
  $o.push("            " + $c(JST['superfit/views/_score']({
    entry: this.goal,
    repMax: this.repMax
      })));
      $o.push("          </div>");
  if (this.wod.typeSlug() !== 'strength') {
    $o.push("          <div class='score-type'>\n            <input id='rx-type' type='radio' name='type' value='rx' checked='" + ($e($c(this.goal ? ((_ref = this.goal) != null ? _ref.type : void 0) === 'rx' : 'checked'))) + "'>\n              <label class='radio' for='rx-type'>RX</label>\n            <input id='scaled-type' type='radio' name='type' value='scaled' checked='" + ($e($c(((_ref1 = this.goal) != null ? _ref1.type : void 0) === 'scaled'))) + "'>\n              <label class='radio' for='scaled-type'>Scaled</label>\n          </div>");
      }
      $o.push("        </div>\n        <input class='bluer bottom button fade' type='submit'>\n      </form>\n    </div>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/edit_profile"] = (function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='page-header'>\n  <div class='toolbar'>\n    <div class='pulldown sprite-sf'>\n      Navigation Pulldown\n    </div>\n    <h1>Profile</h1>\n  </div>\n</div>\n<form>\n  <div class='content-main edit-profile scroll'>\n    <ul>\n      <li>\n        <p>Name</p>\n        <input class='profile-data' type='text' name='name' placeholder='Enter Full Name' value='" + ($e($c(this.user.name))) + "'>\n      </li>\n      <li>\n        <p>Zip Code</p>\n        <input class='profile-data' type='number' name='zipcode' placeholder='Enter Zip Code' value='" + ($e($c(this.user.zipcode))) + "'>\n      </li>\n      <li>\n        <p>Email</p>\n        <input class='profile-data' type='text' name='email' placeholder='Enter Email' value='" + ($e($c(this.user.email))) + "'>\n      </li>\n      <li>\n        <p>My Gym</p>\n        <input class='profile-data' type='text' name='gym' placeholder='My Gym' value='" + ($e($c(this.user.gym))) + "'>\n      </li>\n      <li class='radio'>\n        <p>Gender</p>\n        <select class='profile-data' name='gender'>\n          <option value='female' selected='" + ($e($c(this.user.gender === 'female'))) + "'>Female</option>\n          <option value='male' selected='" + ($e($c(this.user.gender === 'male'))) + "'>Male</option>\n        </select>\n      </li>\n      <li class='radio'>\n        <p>Newsletter</p>\n        <select class='profile-data' name='newsletter'>\n          <option value='yes' selected='" + ($e($c(this.user.newsletter === 'yes'))) + "'>Yes,  I want the Newsletter.</option>\n          <option value='no' selected='" + ($e($c(this.user.newsletter === 'no'))) + "'>No Thanks</option>\n        </select>\n      </li>\n    </ul>\n  </div>\n  <div class='footer'>\n  </div>\n</form>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  var _ref;

  if ((_ref = window.JST) == null) {
    window.JST = {};
  }

  window.JST['superfit/views/edit_profile_gym'] = function(context) {
    return (function() {
      var $o;

      $o = [];
      $o.push("<div class='page' id='edit-profile-gym'></div>\n<div class='page-header'>\n  <div class='toolbar'>\n    <div>\n      <a class='awesome goback icon-chevron-left' href='#'></a>\n    </div>\n    <h1>Find My Gym</h1>\n  </div>\n</div>\n<div class='scroll'>\n  <div class='search-block'>\n    <form>\n      <input id='gym-search' type='text' name='search' placeholder='Enter Gym Name'>\n    </form>\n  </div>\n  <div class='content-main'>\n    <h3 class='no-matches'>No gyms found for this search.</h3>\n    <ul class='gyms' style='display:none'></ul>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/edit_record"] = (function(context) {
    return (function() {
      var $c, $e, $o, _ref, _ref1;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='page-header'>\n  <div class='toolbar'>\n    <div>\n      <a class='awesome icon-chevron-left slideright' href='#records'></a>\n    </div>\n    <h1>" + ($e($c(this.wod.name))) + "</h1>\n  </div>\n</div>\n<div class='scroll'>");
  if (this.wod.typeSlug() === 'strength') {
    $o.push("  <ul class='filter-navigation not-main'>\n    <li>\n      <a class='" + ($e($c(this.repMax === 1 ? 'selected' : ''))) + "' href='#' data-rep-max='" + ($e($c(1))) + "'>1RM</a>\n    </li>\n    <li>\n      <a class='" + ($e($c(this.repMax === 3 ? 'selected' : ''))) + "' href='#' data-rep-max='" + ($e($c(3))) + "'>3RM</a>\n    </li>\n    <li>\n      <a class='" + ($e($c(this.repMax === 5 ? 'selected' : ''))) + "' href='#' data-rep-max='" + ($e($c(5))) + "'>5RM</a>\n    </li>\n  </ul>");
      }
      $o.push("  <form>\n    <div class='content-main'>\n      <div class='content-block'>\n        <div class='enter-score'>");
  $o.push("          " + $c(JST['superfit/views/_score']({
    entry: this.entry,
    repMax: this.repMax
      })));
      $o.push("        </div>");
  if (this.wod.typeSlug() !== 'strength') {
    $o.push("        <div class='score-type'>\n          <input id='rx-type' type='radio' name='type' value='rx' checked='" + ($e($c(this.entry ? ((_ref = this.entry) != null ? _ref.type : void 0) === 'rx' : 'checked'))) + "'>\n            <label class='radio' for='rx-type'>RX</label>\n          <input id='scaled-type' type='radio' name='type' value='scaled' checked='" + ($e($c(((_ref1 = this.entry) != null ? _ref1.type : void 0) === 'scaled'))) + "'>\n            <label class='radio' for='scaled-type'>Scaled</label>\n        </div>\n        <br>");
      }
      $o.push("        <input class='bluer bottom button' type='submit'>\n      </div>\n    </div>\n  </form>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/enter_strength_score"] = (function(context) {
    return (function() {
      var $c, $e, $o, _ref;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='page-header'>\n  <div class='toolbar'>\n    <div>\n      <a class='awesome goback icon-chevron-left' href='#add-wod'></a>\n    </div>\n    <h1>" + ($e($c(this.wod.name))) + "</h1>\n  </div>\n</div>\n<div class='scroll'>\n  <div class='content-main'>\n    <div class='content-block'>\n      <form>\n        <input type='hidden' name='wod_id' value='" + ($e($c(this.wod.id))) + "'>");
  if (this.entry) {
    $o.push("        <input type='hidden' name='entry_id' value='" + ($e($c(this.entry.id))) + "'>");
      }
      $o.push("        <div class='sets'></div>\n        <textarea name='details' placeholder='Enter Workout Notes' cols='30' rows='5'>");
      $o.push("        " + $e($c((_ref = this.entry) != null ? _ref.details : void 0)));
      $o.push("        </textarea>\n        <a class='add-set bottom button lighter' href='#'>Add Another Set</a>\n        <input class='bluer bottom button' type='submit'>\n      </form>\n    </div>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "").replace(/[\s\n]*\u0091/mg, '').replace(/\u0092[\s\n]*/mg, '');
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/enter_wod_score"] = (function(context) {
    return (function() {
      var $c, $e, $o, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='page-header'>\n  <div class='toolbar'>\n    <div>\n      <a class='awesome goback icon-chevron-left' href='#'></a>\n    </div>");
  if (this.wod) {
    $o.push("    <h1>" + ($e($c(this.wod.name))) + "</h1>");
  } else {
    $o.push("    <h1>Custom</h1>");
      }
      $o.push("  </div>\n</div>\n<div class='scroll'>");
  if (this.wod && (this.wod.workout_male != null)) {
    $o.push("  <div class='content-main'>\n    <div class='content-block'>\n      <div class='yellow-block'>\n        <p class='score-details'>" + ($e($c())));
    if (this.user.gender === 'male' || (this.user.gender === 'female' && !this.wod.workout_female)) {
      $o.push("          " + $c(Utils.simpleFormat(this.wod.workout_male)));
    }
    if (this.user.gender === 'female') {
      $o.push("          " + $c(Utils.simpleFormat(this.wod.workout_female)));
    }
    $o.push("        </p>\n        <hr>\n        <p class='score-notes'>");
    $o.push("          " + $e($c(this.wod.scoringMethod())));
    $o.push("          <br>");
    $o.push("          " + $e($c(this.wod.scoring_notes)));
    $o.push("        </p>\n      </div>\n    </div>\n  </div>");
      }
      $o.push("  <fieldset>\n    <form>");
  if (this.wod) {
    $o.push("      <input type='hidden' name='wod_id' value='" + ($e($c(this.wod.id))) + "'>");
      }
  if (this.entry) {
    $o.push("      <input type='hidden' name='entry_id' value='" + ($e($c(this.entry.id))) + "'>");
      }
  if (!this.wod) {
    $o.push("      <div class='content-main'>\n        <div class='content-block'>\n          <h3 class='sub-header'>Create Workout</h3>\n          <label class='custom' for='entry-name'>Workout name</label>\n          <input class='required' id='entry-name' name='name' type='text' placeholder='Name your WOD' value='" + ($e($c(this.entry ? this.entry.name : moment().format('MMM D, YYYY')))) + "'>");
    if (!this.wod) {
      $o.push("          <div class='type'>\n            <p>How is the workout scored</p>\n            <select class='required' name='method'>\n              <option value='for_time' selected='" + ($e($c(!this.entry || ((_ref = this.entry) != null ? _ref.method : void 0) === 'for_time'))) + "'>Time</option>\n              <option value='rounds' selected='" + ($e($c(((_ref1 = this.entry) != null ? _ref1.method : void 0) === 'rounds'))) + "'>Rounds</option>\n              <option value='weight' selected='" + ($e($c(((_ref2 = this.entry) != null ? _ref2.method : void 0) === 'weight'))) + "'>Weight (lbs)</option>\n              <option value='max_reps' selected='" + ($e($c(((_ref3 = this.entry) != null ? _ref3.method : void 0) === 'max_reps'))) + "'>Reps</option>\n              <option value='pass_fail' selected='" + ($e($c(((_ref4 = this.entry) != null ? _ref4.method : void 0) === 'pass_fail'))) + "'>Pass / Fail</option>\n            </select>\n          </div>");
    }
    $o.push("          <p>Enter the workout details</p>\n          <div class='customwod-tabs photo'>\n            <ul class='tab-nav'>\n              <li>\n                <a class='photo-capture tab-btn' href='#'>Photo Capture</a>\n              </li>\n              <li>\n                <a class='tab-btn text-entry' href='#'>Type It In</a>\n              </li>\n            </ul>\n            <div id='photo-capture'>\n              <a class='take-photo' href='#'>\n                <div class='initial-capture'>\n                  <span class='icon-camera-alt'></span>\n                  <br>\n                  <span>Take a Photo</span>\n                </div>\n                <div class='post-capture'>\n                  <input class='custom-wod-photo' name='photo' type='hidden' value='" + ($e($c((_ref5 = this.entry) != null ? _ref5.photo : void 0))) + "'>\n                  <img class='custom-wod-img' src='" + ($e($c((_ref6 = this.entry) != null ? _ref6.photo : void 0))) + "'>\n                </div>\n              </a>\n              <div class='post-capture'>\n                <a class='delete-photo' href='#'><i class=\"remove-set icon-remove-sign\"></i> Delete Photo</a>\n              </div>\n            </div>\n            <div id='text-entry'>\n              <textarea name='details' placeholder='What did you do? Burpees? Thrusters? ' cols='30' rows='5'></textarea>\n            </div>\n          </div>\n        </div>\n      </div>");
      }
      $o.push("      <div class='content-main'>\n        <div class='content-block'>\n          <div class='enter-score'>");
  $o.push("            " + $c(JST['superfit/views/_score']({
    entry: this.entry
      })));
      $o.push("            <div>\n              <input class='left' id='rx-type' type='radio' name='type' value='RX' checked='" + ($e($c(this.entry ? ((_ref7 = this.entry) != null ? _ref7.type : void 0) === 'RX' : 'checked'))) + "'>\n                <label class='radio' for='rx-type'>RX</label>\n              <input class='right' id='scaled-type' type='radio' name='type' value='scaled' checked='" + ($e($c(((_ref8 = this.entry) != null ? _ref8.type : void 0) === 'scaled'))) + "'>\n                <label class='radio' for='scaled-type'>Scaled</label>\n              <textarea name='details' placeholder='Enter Workout Notes' cols='30' rows='5'>");
      $o.push("              " + $e($c((_ref9 = this.entry) != null ? _ref9.details : void 0)));
      $o.push("              </textarea>\n            </div>\n          </div>\n          <input class='bluer bottom button' type='submit'>\n        </div>\n      </div>\n    </form>\n  </fieldset>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "").replace(/[\s\n]*\u0091/mg, '').replace(/\u0092[\s\n]*/mg, '');
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/get_started_step1"] = (function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<div class='page' id='get-started-step1'>\n  <div class='orientation'>\n    <div class='main'>\n      <div class='step1'></div>\n      <h1>All about the work</h1>\n      <p>Log workouts and see the days activity from the dashboard. Want to see what you did last week? Pop open the calendar. Tap through to a day.</p>\n    </div>\n    <div class='orientation-footer'>\n      <a class='bottom button slide' href='#get-started-step2'>Next : See Your Progress</a>\n    </div>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/get_started_step2"] = (function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<div class='page' id='get-started-step2'>\n  <div class='orientation'>\n    <div class='main'>\n      <h1>Work = Progress</h1>\n      <p>Goals and PRs are integral to measuring progress. Superfit maintains those in the background with the workouts you enter via the dashboard. Further, we provide visual tracking for a quick high level view of your progress.</p>\n      <br>\n      <div class='step2'></div>\n    </div>\n    <div class='orientation-footer'>\n      <a class='bottom button slide' href='#get-started-step3'>Next : Set-Up is Simple</a>\n    </div>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/get_started_step3"] = (function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<div class='page' id='get-started-step3'>\n  <div class='orientation'>\n    <form>\n      <div class='main'>\n        <br>\n        <h1>A few Questions!\n          <input type='hidden' name='gym_id'>\n          <h2>Male or Female?</h2>\n          <p class='left'>Some workouts differ for males and females.</p>\n          <fieldset>\n            <input class='left' id='female' type='radio' name='gender' value='female' checked='checked'>\n              <label class='radio' for='female'>Female</label>\n            <input class='right' id='male' type='radio' name='gender' value='male'>\n              <label class='radio' for='male'>Male</label>\n          </fieldset>\n          <h2>Where do you Workout?</h2>\n          <fieldset>\n            <input type='text' name='gym' placeholder='Enter Gym Name'>\n          </fieldset>\n        </h1>\n      </div>\n      <div class='orientation-footer'>\n        <input class='bottom button' id='get-started' type='submit' value='Start Logging Workouts'>\n      </div>\n    </form>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/goal_detail"] = (function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='page-header'>\n  <div class='toolbar'>\n    <div>\n      <a class='awesome goback icon-chevron-left' href='#'></a>\n    </div>\n    <h1>" + ($e($c(this.goal.name()))) + "</h1>\n  </div>\n</div>\n<div class='scroll'>\n  <div class='content-main'>\n    <div class='content-block'>\n      <div class='yellow-block'>\n        <div class='review-score'>\n          <div class='goal-score score'>" + ($e($c("" + (this.goal.percentComplete()) + "% complete"))) + "\n            <span class='score-level'>" + ($e($c(this.goal.type))) + "</span>\n            <p class='score-details'>" + ($e($c(this.goal.scoreString(true)))) + "</p>\n          </div>");
  if (this.startEntry) {
    $o.push("          <p class='score-details'>\n            <br>\n            Your goal starting score is " + (this.startEntry.scoreString()) + "\n          </p>");
  } else {
    $o.push("          <p class='score-details'>\n            <br>\n            You don't currently have an entry for this movement or workout in the app - your first entry will be your starting score and from there your goal will begin to measure progress.\n          </p>");
      }
      $o.push("        </div>\n      </div>\n      <a class='bottom button dissolve' href='#home'>Jump to Dashboard</a>\n    </div>\n  </div>");
  if (this.showHistory) {
    $o.push("  " + $c(JST['superfit/views/_history']({
      wod: this.wod,
      pastEntries: this.pastEntries
    })));
      }
      $o.push("  <div class='content-main'>\n    <div class='secondary'>\n      <div class='title'>\n        <h3>Details</h3>\n      </div>\n      <ul>\n        <li>\n          <div class='history label'>\n            <p>Start Date</p>\n            <p class='record'>" + ($e($c(moment(this.goal.start_date).format('MMMM D, YYYY')))) + "</p>\n          </div>\n        </li>\n        <li>\n          <div class='history label'>\n            <p>Movement</p>\n            <p class='record'>" + ($e($c(this.goal.wod().name))) + "</p>\n          </div>\n        </li>");
  if (this.goal.type) {
    $o.push("        <li>\n          <div class='history label'>\n            <p>Scoring Method</p>\n            <p class='record'>" + ($e($c(this.goal.type))) + "</p>\n          </div>\n        </li>");
      }
      $o.push("        <li>\n          <div class='history label'>\n            <p>Goal Score</p>\n            <p class='record'>" + ($e($c(this.goal.scoreString()))) + "</p>\n          </div>\n        </li>");
  if (this.goal.complete_date) {
    $o.push("        <li>\n          <div class='history label'>\n            <p>Completed</p>\n            <p class='record'>" + ($e($c(moment(this.goal.complete_date).format('MMMM D, YYYY')))) + "</p>\n          </div>\n        </li>");
  } else {
    $o.push("        <li>\n          <div class='history label'>\n            <p>Last Updated</p>\n            <p class='record'>\n              <time class='timeago' datetime='" + ($e($c(moment(this.goal.last_update).format()))) + "'></time>\n            </p>\n          </div>\n        </li>");
      }
      $o.push("      </ul>\n    </div>\n  </div>\n  <div class='footer'>\n    <a class='bottom button delete pop red' href='#goals' data-id='" + ($e($c(this.goal.id))) + "'>Delete Goal</a>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/goals"] = (function(context) {
    return (function() {
      var $c, $e, $o, goal, _i, _len, _ref;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='page-header'>\n  <div class='toolbar'>\n    <div class='pulldown sprite-sf'>Navigation Pulldown</div>\n    <h1>Goals</h1>\n    <a class='awesome icon-plus' href='#edit-goal'></a>\n  </div>\n</div>\n<div class='scroll'>\n  <ul class='filter-navigation two'>\n    <li>\n      <a class='" + ($e($c(this.type === 'in_progress' ? 'selected' : ''))) + "' href='#' data-type='in_progress'>In Progress</a>\n    </li>\n    <li>\n      <a class='" + ($e($c(this.type === 'completed' ? 'selected' : ''))) + "' href='#' data-type='completed'>Completed</a>\n    </li>\n  </ul>\n  <div class='content-main'>\n    <ul>");
  if (this.goals.length === 0) {
    if (this.type === 'in_progress') {
      $o.push("      <li>\n        <a class='add-new' href='#edit-goal'>\n          <p class='goalsnodata'></p>\n        </a>\n      </li>");
    } else {
      $o.push("      <li>No goals completed yet</li>");
    }
      }
  _ref = this.goals;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    goal = _ref[_i];
    $o.push("      <li class='goal'>\n        <a href='#goal-detail' data-id='" + ($e($c(goal.id))) + "'>\n          <div class='label'>\n            <p class='goal-label'>" + ($e($c(goal.name()))) + "\n              <br>\n              <span>\n                Last Update:\n                <time class='timeago' datetime='" + ($e($c(moment(goal.last_update).format()))) + "'></time>\n              </span>\n            </p>\n          </div>\n          <p class='goal-progress'>" + ($e($c("" + (goal.percentComplete()) + "%"))) + "</p>\n          <p class='arrow awesome icon-chevron-right'></p>\n        </a>\n      </li>");
      }
      $o.push("      <li class='goal'>\n        <a class='add-goal' href='#edit-goal'>\n          <div class='label'>\n            <p>Create New Goal</p>\n          </div>\n          <p class='arrow awesome icon-chevron-right'></p>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/home"] = (function(context) {
    return (function() {
      var $c, $e, $o, entry, _i, _len, _ref;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='page-header'>\n  <div class='toolbar'>\n    <div class='pulldown sprite-sf'>\n      Navigation Pulldown\n    </div>\n    <h1>Dashboard</h1>\n    <a class='awesome icon-plus' href='#add-wod'></a>\n  </div>\n</div>\n<div class='scroll'>\n  <div class='date-navigation'>\n    <ul>\n      <li class='awesome icon-chevron-left prev-day'></li>\n      <li class='date'>\n        <p class='icon-calendar-1'></p>");
      $o.push("        " + $e($c(moment(this.currentDate).format('MMM D, YYYY'))));
      $o.push("      </li>");
  if (this.currentDate.getTime() < this.today.getTime()) {
    $o.push("      <li class='awesome icon-chevron-right next-day'></li>");
      }
      $o.push("    </ul>\n  </div>\n  <div class='content-main home'>\n    <ul>\n      <li class='title'>\n        <h2>Workout Activity</h2>\n      </li>");
  if (this.entries.length > 0) {
    _ref = this.entries;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      entry = _ref[_i];
      $o.push("      <li>\n        <a href='#review-wod' data-id='" + ($e($c(entry.id))) + "'>\n          <div class='label'>\n            <div class='" + (['icon', 'sprite-sf', "" + ($e($c(entry.typeSlug())))].sort().join(' ').replace(/^\s+|\s+$/g, '')) + "'></div>\n            <p>" + ($e($c(entry.wodName()))) + "</p>\n            <p>" + ($e($c(entry.scoreString(true)))) + "</p>\n          </div>\n          <p class='arrow awesome icon-chevron-right'></p>\n        </a>\n      </li>");
    }
    $o.push("      <li>\n        <a class='add-new' href='#add-wod'>\n          <div class='label'>\n            <p>Add Workout</p>\n          </div>\n          <p class='arrow awesome icon-plus'></p>\n        </a>\n      </li>");
  } else {
    $o.push("      <li>\n        <a class='add-new' href='#add-wod'>\n          <p class='wodnodata'></p>\n        </a>\n      </li>");
      }
      $o.push("    </ul>\n  </div>\n  <div class='content-main goals-home'>\n    <ul>\n      <li class='title'>\n        <h2>Goals</h2>\n        <div class='action'>\n          <a class='dissolve' href='#goals'>\n            <p>View All</p>\n            <p class='arrow awesome icon-chevron-right'></p>\n          </a>\n        </div>\n      </li>");
  if (this.goal) {
    $o.push("      <li class='chart-container'>\n        <div class='chart'></div>\n      </li>\n      <li class='goal'>\n        <a class='slideleft' href='#goal-detail' data-id='" + ($e($c(this.goal.id))) + "'>\n          <div class='label'>\n            <p class='goal-label'>" + ($e($c(this.goal.name()))) + "\n              <br>\n              <span>\n                Last Update:\n                <time class='timeago' datetime='" + ($e($c(moment(this.goal.last_update).format()))) + "'></time>\n              </span>\n            </p>\n          </div>\n          <div class='goal-progress'>" + ($e($c("" + (this.goal.percentComplete()) + "%"))) + "</div>\n          <p class='arrow awesome icon-chevron-right'></p>\n        </a>\n      </li>");
  } else {
    $o.push("      <li>\n        <a class='add-new slideleft' href='#edit-goal'>\n          <p class='goalsnodata'></p>\n        </a>\n      </li>");
      }
      $o.push("    </ul>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/landing"] = function(__obj) {
    if (!__obj) __obj = {};
    var __out = [], __capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return __safe(result);
    }, __sanitize = function(value) {
      if (value && value.ecoSafe) {
        return value;
      } else if (typeof value !== 'undefined' && value != null) {
        return __escape(value);
      } else {
        return '';
      }
    }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
    __safe = __obj.safe = function(value) {
      if (value && value.ecoSafe) {
        return value;
      } else {
        if (!(typeof value !== 'undefined' && value != null)) value = '';
        var result = new String(value);
        result.ecoSafe = true;
        return result;
      }
    };
    if (!__escape) {
      __escape = __obj.escape = function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      };
    }
    (function() {
      (function() {
        __out.push('<div id="landing" class="page landing">\n  <div class="landing">\n      <div class="splash">\n        <img src="./assets/logo-landing.png">\n      </div>\n  </div>\n</div>\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/login"] = (function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<div class='page' id='login'>\n  <div class='leather'>\n    <div class='leather-binding orientation scroll'>\n      <div class='branding-login'>\n        <div class='login'>\n          <a class='button facebook' href='/users/auth/facebook' rel='external'>\n            SIGN IN WITH FACEBOOK\n          </a>\n          <p>Or Login with your Superfit Account</p>\n          <div class='login-form'>\n            <form id='login-form' action='/users/sign_in' data-remote='true' data-method='post' method='post'>\n              <ul>\n                <li class='form grey-input'>\n                  <input id='email-address' type='text' name='user[email]' placeholder='Email Address'>\n                  <input class='divider' id='password' type='password' name='user[password]' placeholder='Password'>\n                </li>\n                <li>\n                  <button id='login-button'>login now</button>\n                </li>\n              </ul>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/navigation"] = (function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<div id='navigation'>\n  <div class='navigation'>\n    <div>\n      <a class='dissolve' href='#home'>\n        <p class='dashboard icon sprite-sf'></p>\n        Dashboard\n      </a>\n    </div>\n    <div>\n      <a class='dissolve' href='#goals'>\n        <p class='goals icon sprite-sf'></p>\n        Goals\n      </a>\n    </div>\n    <div>\n      <a class='dissolve' href='#records'>\n        <p class='icon records sprite-sf'></p>\n        Records\n      </a>\n    </div>\n    <div>\n      <a class='dissolve' href='#edit-profile'>\n        <p class='icon me sprite-sf'></p>\n        Profile\n      </a>\n    </div>\n    <div>\n      <a class='dissolve' href='#about'>\n        <p class='aboutSf icon sprite-sf'></p>\n        About\n      </a>\n    </div>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/overlay_goal_complete"] = (function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<div class='page' id='overlay-goal-complete'>\n  <div class='overlay'>\n    <div class='main'>\n      <h1>High Fives!</h1>\n      <p>You completed [Enter Goal Name Here]!</p>\n    </div>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/profile"] = (function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='page-header'>\n  <div class='toolbar'>\n    <div class='pulldown sprite-sf'>\n      Navigation Pulldown\n    </div>\n    <h1>Profile</h1>\n  </div>\n</div>\n<div class='scroll'>\n  <div class='content-main profile'>\n    <ul>\n      <li>\n        <p>Name</p>\n        <p>");
  if (this.user.name) {
    $o.push("          " + $e($c(this.user.name)));
      }
  if (!this.user.name) {
    $o.push("          <a href='#edit-profile'>Enter Now</a>");
      }
      $o.push("        </p>\n      </li>\n      <li>\n        <p>My Gym</p>\n        <p>");
  if (this.user.gym) {
    $o.push("          " + $e($c(this.user.gym)));
      }
  if (!this.user.gym) {
    $o.push("          <a href='#edit-profile-gym'>Enter Now</a>");
      }
      $o.push("        </p>\n      </li>\n      <li>\n        <p>Zip Code</p>\n        <p>");
  if (this.user.zipcode) {
    $o.push("          " + $e($c(this.user.zipcode)));
      }
  if (!this.user.zipcode) {
    $o.push("          <a href='#edit-profile'>Enter Now</a>");
      }
      $o.push("        </p>\n      </li>\n      <li>\n        <p>Email</p>\n        <p>");
  if (this.user.email) {
    $o.push("          " + $e($c(this.user.email)));
      }
  if (!this.user.email) {
    $o.push("          <a href='#edit-profile'>Enter Now</a>");
      }
      $o.push("        </p>\n      </li>\n      <li>\n        <p>Gender</p>\n        <p>" + ($e($c(this.user.gender))) + "</p>\n      </li>\n      <li>\n        <p>Birthdate</p>\n        <p>");
  if (this.user.birthdate) {
    $o.push("          " + $e($c(this.user.birthdate)));
      }
  if (!this.user.birthdate) {
    $o.push("          <a href='#edit-profile'>Enter Now</a>");
      }
      $o.push("        </p>\n      </li>\n      <li class='disable'>\n        <p>Syncs data</p>\n        <p>soon, friend :)</p>\n      </li>\n    </ul>\n  </div>\n  <div class='footer'>\n    <a class='bottom button dissolve lighter' href='#edit-profile'>\n      Edit Profile\n    </a>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/record_detail"] = (function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='page' id='record-detail'>\n  <div class='page-header'>\n    <div class='toolbar'>\n      <div>\n        <a class='awesome icon-chevron-left slideright' href='#records'></a>\n      </div>\n      <h1>" + ($e($c(this.wod.name))) + "</h1>\n    </div>\n  </div>\n  <div class='scroll'>");
  if (this.wod.typeSlug() === 'strength') {
    $o.push("    <ul class='filter-navigation not-main'>\n      <li>\n        <a class='" + (['dissolve', "" + ($e($c(this.repMax === 1 ? 'selected' : '')))].sort().join(' ').replace(/^\s+|\s+$/g, '')) + "' href='#' data-rep-max='" + ($e($c(1))) + "'>1RM</a>\n      </li>\n      <li>\n        <a class='" + (['dissolve', "" + ($e($c(this.repMax === 3 ? 'selected' : '')))].sort().join(' ').replace(/^\s+|\s+$/g, '')) + "' href='#' data-rep-max='" + ($e($c(3))) + "'>3RM</a>\n      </li>\n      <li>\n        <a class='" + (['dissolve', "" + ($e($c(this.repMax === 5 ? 'selected' : '')))].sort().join(' ').replace(/^\s+|\s+$/g, '')) + "' href='#' data-rep-max='" + ($e($c(5))) + "'>5RM</a>\n      </li>\n    </ul>");
      }
      $o.push("    <div class='content-main'>\n      <div class='content-block'>\n        <div class='yellow-block'>\n          <div class='review-score'>\n            <div class='score'>");
  if (this.wod.typeSlug() === 'strength') {
    $o.push("              " + $e($c(this.wod.repMax(this.repMax))));
    $o.push("              <p class='score-details'>Current " + this.repMax + " Max Rep Record</p>");
  } else {
    $o.push("              " + $e($c(this.wod.recordString())));
    $o.push("              <span class='score-level'>" + ($e($c(this.wod.personal_record.type))) + "</span>\n              <p class='score-details'>Current Personal Record</p>");
      }
      $o.push("            </div>\n          </div>\n        </div>\n      </div>\n    </div>");
  if (this.showHistory) {
    $o.push("    " + $c(JST['superfit/views/_history']({
      wod: this.wod,
      pastEntries: this.pastEntries
    })));
      }
      $o.push("    <div class='footer'>\n      <a class='bottom button fade' href='#records'>Back to All Records</a>\n    </div>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/records"] = (function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='page-header'>\n  <div class='toolbar'>\n    <div class='pulldown sprite-sf'>Navigation Pulldown</div>\n    <h1>Records</h1>\n  </div>\n</div>\n<div class='scroll'>\n  <ul class='filter-navigation'>\n    <li>\n      <a class='filter-strength' href='#' data-type='strength'>Strength</a>\n    </li>\n    <li>\n      <a class='filter-strength' href='#' data-type='benchmark'>Benchmarks</a>\n    </li>\n    <li>\n      <a class='filter-strength' href='#' data-type='other'>Other</a>\n    </li>\n  </ul>\n  <div class='content-main'>");
  _.each(['strength', 'benchmark', 'other'], function(type) {
        var wod, _i, _len, _ref;
    $o.push("    <section class='" + ($e($c(type))) + "' style='display: none;'>\n      <ul class='records'>");
    _ref = Wod.byType(type);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      wod = _ref[_i];
      $o.push("        <li>");
      if (wod.personal_record != null) {
        $o.push("          <a class='slideleft' href='#record-detail' data-id='" + ($e($c(wod.id))) + "'>\n            <div class='label'>\n              <p>" + ($e($c(wod.name))) + "</p>\n              <p>" + ($e($c(wod.recordString(true)))) + "</p>\n            </div>\n            <p class='arrow awesome icon-chevron-right'></p>\n          </a>");
      } else {
        $o.push("          <a class='slideleft' href='#edit-record' data-id='" + ($e($c(wod.id))) + "'>\n            <div class='empty label'>\n              <p>" + ($e($c(wod.name))) + "</p>\n              <p>\n            </div>\n            <p class='arrow awesome icon-plus'></p>\n          </a>");
      }
      $o.push("        </li>");
    }
    $o.push("      </ul>\n    </section>");
    return '';
      });
      $o.push("  </div>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/review_wod"] = (function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='page-header'>\n  <div class='toolbar'>\n    <div>\n      <a class='awesome goback icon-chevron-left' href='#'></a>\n    </div>\n    <h1>" + ($e($c(this.entry.wodName()))) + "</h1>\n  </div>\n</div>\n<div class='scroll'>");
  if (this.completedGoal) {
    $o.push("  <p class='goal-notify'>\n    Goal Completed:  " + (this.completedGoal.name()) + "!\n  </p>");
      }
      $o.push("  <div class='content-main'>\n    <div class='content-block'>\n      <div class='yellow-block'>\n        <div class='review-score'>\n          <div class='score'>" + ($e($c(this.entry.scoreString()))) + "\n            <span class='score-level'>" + ($e($c(this.entry.type))) + "</span>\n          </div>");
  if (this.personalRecord) {
    $o.push("          <div class='score-tags'>\n            <span class='pr'>Personal Record</span>\n          </div>");
      }
      $o.push("          <p class='score-details'>" + ($e($c(this.entry.details))) + "</p>");
  if (this.entry.photo) {
    $o.push("          <img class='custom-wod-img' src='" + ($e($c(this.entry.photo))) + "'>");
      }
      $o.push("        </div>\n      </div>\n      <a class='bottom button lighter slideleft' data-id='" + ($e($c(this.entry.id))) + "' href='#edit-wod'>Edit Workout</a>\n      <a class='bottom button fade' href='#home'>Jump To Dashboard</a>\n      <a class='delete pop red' data-id='" + ($e($c(this.entry.id))) + "' href='#home'><i class=\"remove-set icon-remove-sign\"></i> Delete This Workout</a>\n    </div>\n  </div>\n  <div class='footer'></div>");
  if (this.showHistory) {
    $o.push("  " + $c(JST['superfit/views/_history']({
      wod: this.wod,
      pastEntries: this.pastEntries
    })));
      }
      $o.push("</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["superfit/views/superfit"] = (function(context) {
    return (function() {
      var $c, $o;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='app-container' id='jqt'>");
  if (!this.user) {
    $o.push("  " + $c(JST['superfit/views/get_started_step1']()));
    $o.push("  " + $c(JST['superfit/views/get_started_step2']()));
    $o.push("  " + $c(JST['superfit/views/get_started_step3']()));
      }
      $o.push("  <div class='page' id='home'></div>\n  <div class='page' id='calendar'></div>\n  <div class='page' id='add-wod'></div>\n  <div class='page' id='browse-wods'></div>\n  <div class='page' id='records'></div>\n  <div class='page' id='record-detail'></div>\n  <div class='page' id='edit-record'></div>\n  <div class='page' id='edit-wod'></div>\n  <div class='page' id='review-wod'></div>\n  <div class='in page slideupSelector' id='goals'></div>\n  <div class='page' id='edit-goal'></div>\n  <div class='page' id='edit-profile'></div>\n  <div class='page' id='edit-profile-gym'></div>\n  <div class='in page slideupSelector' id='profile'></div>\n  <div class='page' id='overlay-goal-complete'></div>\n  <div class='page' id='goal-detail'></div>\n  <div class='page' id='about'></div>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  });;
}).call(this);
