(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(e,t,n){var r,o;
/*!
 * ScrollMagic v2.0.6 (2018-10-08)
 * The javascript library for magical scroll interactions.
 * (c) 2018 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.6
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */void 0===(o="function"==typeof(r=function(){"use strict";var e=function(){r.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};e.version="2.0.6",window.addEventListener("mousewheel",function(){}),e.Controller=function(n){var o,i,l="ScrollMagic.Controller",a=t.defaults,s=this,c=r.extend({},a,n),u=[],f=!1,d=0,p="PAUSED",g=!0,h=0,v=!0,m=function(){c.refreshInterval>0&&(i=window.setTimeout(F,c.refreshInterval))},w=function(){return c.vertical?r.get.scrollTop(c.container):r.get.scrollLeft(c.container)},y=function(){return c.vertical?r.get.height(c.container):r.get.width(c.container)},S=this._setScrollPos=function(e){c.vertical?g?window.scrollTo(r.get.scrollLeft(),e):c.container.scrollTop=e:g?window.scrollTo(e,r.get.scrollTop()):c.container.scrollLeft=e},E=function(){if(v&&f){var e=r.type.Array(f)?f:u.slice(0);f=!1;var t=d,n=(d=s.scrollPos())-t;0!==n&&(p=n>0?"FORWARD":"REVERSE"),"REVERSE"===p&&e.reverse(),e.forEach(function(t,n){T(3,"updating Scene "+(n+1)+"/"+e.length+" ("+u.length+" total)"),t.update(!0)}),0===e.length&&c.loglevel>=3&&T(3,"updating 0 Scenes (nothing added to controller)")}},R=function(){o=r.rAF(E)},b=function(e){T(3,"event fired causing an update:",e.type),"resize"==e.type&&(h=y(),p="PAUSED"),!0!==f&&(f=!0,R())},F=function(){if(!g&&h!=y()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){(e=document.createEvent("Event")).initEvent("resize",!1,!1)}c.container.dispatchEvent(e)}u.forEach(function(e,t){e.refresh()}),m()},T=this._log=function(e,t){c.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+l+") ->"),r.log.apply(window,arguments))};this._options=c;var O=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(r.type.Array(t))t.forEach(function(e,t){s.addScene(e)});else if(t instanceof e.Scene){if(t.controller()!==s)t.addTo(s);else if(u.indexOf(t)<0){for(var n in u.push(t),u=O(u),t.on("shift.controller_sort",function(){u=O(u)}),c.globalSceneOptions)t[n]&&t[n].call(t,c.globalSceneOptions[n]);T(3,"adding Scene (now "+u.length+" total)")}}else T(1,"ERROR: invalid argument supplied for '.addScene()'");return s},this.removeScene=function(e){if(r.type.Array(e))e.forEach(function(e,t){s.removeScene(e)});else{var t=u.indexOf(e);t>-1&&(e.off("shift.controller_sort"),u.splice(t,1),T(3,"removing Scene (now "+u.length+" left)"),e.remove())}return s},this.updateScene=function(t,n){return r.type.Array(t)?t.forEach(function(e,t){s.updateScene(e,n)}):n?t.update(!0):!0!==f&&t instanceof e.Scene&&(-1==(f=f||[]).indexOf(t)&&f.push(t),f=O(f),R()),s},this.update=function(e){return b({type:"resize"}),e&&E(),s},this.scrollTo=function(t,n){if(r.type.Number(t))S.call(c.container,t,n);else if(t instanceof e.Scene)t.controller()===s?s.scrollTo(t.scrollOffset(),n):T(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",t);else if(r.type.Function(t))S=t;else{var o=r.get.elements(t)[0];if(o){for(;o.parentNode.hasAttribute("data-scrollmagic-pin-spacer");)o=o.parentNode;var i=c.vertical?"top":"left",l=r.get.offset(c.container),a=r.get.offset(o);g||(l[i]-=s.scrollPos()),s.scrollTo(a[i]-l[i],n)}else T(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",t)}return s},this.scrollPos=function(e){return arguments.length?(r.type.Function(e)?w=e:T(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),s):w.call(s)},this.info=function(e){var t={size:h,vertical:c.vertical,scrollPos:d,scrollDirection:p,container:c.container,isDocument:g};return arguments.length?void 0!==t[e]?t[e]:void T(1,'ERROR: option "'+e+'" is not available'):t},this.loglevel=function(e){return arguments.length?(c.loglevel!=e&&(c.loglevel=e),s):c.loglevel},this.enabled=function(e){return arguments.length?(v!=e&&(v=!!e,s.updateScene(u,!0)),s):v},this.destroy=function(e){window.clearTimeout(i);for(var t=u.length;t--;)u[t].destroy(e);return c.container.removeEventListener("resize",b),c.container.removeEventListener("scroll",b),r.cAF(o),T(3,"destroyed "+l+" (reset: "+(e?"true":"false")+")"),null},function(){for(var t in c)a.hasOwnProperty(t)||(T(2,'WARNING: Unknown option "'+t+'"'),delete c[t]);if(c.container=r.get.elements(c.container)[0],!c.container)throw T(1,"ERROR creating object "+l+": No valid scroll container supplied"),l+" init failed.";(g=c.container===window||c.container===document.body||!document.body.contains(c.container))&&(c.container=window),h=y(),c.container.addEventListener("resize",b),c.container.addEventListener("scroll",b);var n=parseInt(c.refreshInterval,10);c.refreshInterval=r.type.Number(n)?n:a.refreshInterval,m(),T(3,"added new "+l+" controller (v"+e.version+")")}(),s};var t={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,n){t.defaults[e]=n},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=r.extend({},this),t.apply(this,arguments)||this},r.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(t){var o,i,l="ScrollMagic.Scene",a=n.defaults,s=this,c=r.extend({},a,t),u="BEFORE",f=0,d={start:0,end:0},p=0,g=!0,h={};this.on=function(e,t){return r.type.Function(t)?(e=e.trim().split(" ")).forEach(function(e){var n=e.split("."),r=n[0],o=n[1];"*"!=r&&(h[r]||(h[r]=[]),h[r].push({namespace:o||"",callback:t}))}):v(1,"ERROR when calling '.on()': Supplied callback for '"+e+"' is not a valid function!"),s},this.off=function(e,t){return e?((e=e.trim().split(" ")).forEach(function(e,n){var r=e.split("."),o=r[0],i=r[1]||"",l="*"===o?Object.keys(h):[o];l.forEach(function(e){for(var n=h[e]||[],r=n.length;r--;){var o=n[r];!o||i!==o.namespace&&"*"!==i||t&&t!=o.callback||n.splice(r,1)}n.length||delete h[e]})}),s):(v(1,"ERROR: Invalid event name supplied."),s)},this.trigger=function(t,n){if(t){var r=t.trim().split("."),o=r[0],i=r[1],l=h[o];v(3,"event fired:",o,n?"->":"",n||""),l&&l.forEach(function(t,r){i&&i!==t.namespace||t.callback.call(s,new e.Event(o,t.namespace,s,n))})}else v(1,"ERROR: Invalid event name supplied.");return s},s.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?E():"reverse"===e.what&&s.update())}).on("shift.internal",function(e){y(),s.update()});var v=this._log=function(e,t){c.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+l+") ->"),r.log.apply(window,arguments))};this.addTo=function(t){return t instanceof e.Controller?i!=t&&(i&&i.removeScene(s),i=t,F(),S(!0),E(!0),y(),i.info("container").addEventListener("resize",R),t.addScene(s),s.trigger("add",{controller:i}),v(3,"added "+l+" to controller"),s.update()):v(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),s},this.enabled=function(e){return arguments.length?(g!=e&&(g=!!e,s.update(!0)),s):g},this.remove=function(){if(i){i.info("container").removeEventListener("resize",R);var e=i;i=void 0,e.removeScene(s),s.trigger("remove"),v(3,"removed "+l+" from controller")}return s},this.destroy=function(e){return s.trigger("destroy",{reset:e}),s.remove(),s.off("*.*"),v(3,"destroyed "+l+" (reset: "+(e?"true":"false")+")"),null},this.update=function(e){if(i)if(e)if(i.enabled()&&g){var t,n=i.info("scrollPos");t=c.duration>0?(n-d.start)/(d.end-d.start):n>=d.start?1:0,s.trigger("update",{startPos:d.start,endPos:d.end,scrollPos:n}),s.progress(t)}else m&&"DURING"===u&&N(!0);else i.updateScene(s,!1);return s},this.refresh=function(){return S(),E(),s},this.progress=function(e){if(arguments.length){var t=!1,n=u,r=i?i.info("scrollDirection"):"PAUSED",o=c.reverse||e>=f;if(0===c.duration?(t=f!=e,u=0==(f=e<1&&o?0:1)?"BEFORE":"DURING"):e<0&&"BEFORE"!==u&&o?(f=0,u="BEFORE",t=!0):e>=0&&e<1&&o?(f=e,u="DURING",t=!0):e>=1&&"AFTER"!==u?(f=1,u="AFTER",t=!0):"DURING"!==u||o||N(),t){var l={progress:f,state:u,scrollDirection:r},a=u!=n,d=function(e){s.trigger(e,l)};a&&"DURING"!==n&&(d("enter"),d("BEFORE"===n?"start":"end")),d("progress"),a&&"DURING"!==u&&(d("BEFORE"===u?"start":"end"),d("leave"))}return s}return f};var m,w,y=function(){d={start:p+c.offset},i&&c.triggerElement&&(d.start-=i.info("size")*c.triggerHook),d.end=d.start+c.duration},S=function(e){o&&T("duration",o.call(s))&&!e&&(s.trigger("change",{what:"duration",newval:c.duration}),s.trigger("shift",{reason:"duration"}))},E=function(e){var t=0,n=c.triggerElement;if(i&&(n||p>0)){if(n)if(n.parentNode){for(var o=i.info(),l=r.get.offset(o.container),a=o.vertical?"top":"left";n.parentNode.hasAttribute("data-scrollmagic-pin-spacer");)n=n.parentNode;var u=r.get.offset(n);o.isDocument||(l[a]-=i.scrollPos()),t=u[a]-l[a]}else v(2,"WARNING: triggerElement was removed from DOM and will be reset to",void 0),s.triggerElement(void 0);var f=t!=p;p=t,f&&!e&&s.trigger("shift",{reason:"triggerElementPosition"})}},R=function(e){c.triggerHook>0&&s.trigger("shift",{reason:"containerResize"})},b=r.extend(n.validate,{duration:function(e){if(r.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return i?i.info("size")*t:0}}if(r.type.Function(e)){o=e;try{e=parseFloat(o())}catch(t){e=-1}}if(e=parseFloat(e),!r.type.Number(e)||e<0)throw o?(o=void 0,['Invalid return value of supplied function for option "duration":',e]):['Invalid value for option "duration":',e];return e}}),F=function(e){(e=arguments.length?[e]:Object.keys(b)).forEach(function(e,t){var n;if(b[e])try{n=b[e](c[e])}catch(t){n=a[e];var o=r.type.String(t)?[t]:t;r.type.Array(o)?(o[0]="ERROR: "+o[0],o.unshift(1),v.apply(this,o)):v(1,"ERROR: Problem executing validation callback for option '"+e+"':",t.message)}finally{c[e]=n}})},T=function(e,t){var n=!1,r=c[e];return c[e]!=t&&(c[e]=t,F(e),n=r!=c[e]),n},O=function(e){s[e]||(s[e]=function(t){return arguments.length?("duration"===e&&(o=void 0),T(e,t)&&(s.trigger("change",{what:e,newval:c[e]}),n.shifts.indexOf(e)>-1&&s.trigger("shift",{reason:e})),s):c[e]})};this.controller=function(){return i},this.state=function(){return u},this.scrollOffset=function(){return d.start},this.triggerPosition=function(){var e=c.offset;return i&&(c.triggerElement?e+=p:e+=i.info("size")*s.triggerHook()),e},s.on("shift.internal",function(e){var t="duration"===e.reason;("AFTER"===u&&t||"DURING"===u&&0===c.duration)&&N(),t&&C()}).on("progress.internal",function(e){N()}).on("add.internal",function(e){C()}).on("destroy.internal",function(e){s.removePin(e.reset)});var N=function(e){if(m&&i){var t=i.info(),n=w.spacer.firstChild;if(e||"DURING"!==u){var o={position:w.inFlow?"relative":"absolute",top:0,left:0},l=r.css(n,"position")!=o.position;w.pushFollowers?c.duration>0&&("AFTER"===u&&0===parseFloat(r.css(w.spacer,"padding-top"))?l=!0:"BEFORE"===u&&0===parseFloat(r.css(w.spacer,"padding-bottom"))&&(l=!0)):o[t.vertical?"top":"left"]=c.duration*f,r.css(n,o),l&&C()}else{"fixed"!=r.css(n,"position")&&(r.css(n,{position:"fixed"}),C());var a=r.get.offset(w.spacer,!0),s=c.reverse||0===c.duration?t.scrollPos-d.start:Math.round(f*c.duration*10)/10;a[t.vertical?"top":"left"]+=s,r.css(w.spacer.firstChild,{top:a.top,left:a.left})}}},C=function(){if(m&&i&&w.inFlow){var e="DURING"===u,t=i.info("vertical"),n=w.spacer.firstChild,o=r.isMarginCollapseType(r.css(w.spacer,"display")),l={};w.relSize.width||w.relSize.autoFullWidth?e?r.css(m,{width:r.get.width(w.spacer)}):r.css(m,{width:"100%"}):(l["min-width"]=r.get.width(t?m:n,!0,!0),l.width=e?l["min-width"]:"auto"),w.relSize.height?e?r.css(m,{height:r.get.height(w.spacer)-(w.pushFollowers?c.duration:0)}):r.css(m,{height:"100%"}):(l["min-height"]=r.get.height(t?n:m,!0,!o),l.height=e?l["min-height"]:"auto"),w.pushFollowers&&(l["padding"+(t?"Top":"Left")]=c.duration*f,l["padding"+(t?"Bottom":"Right")]=c.duration*(1-f)),r.css(w.spacer,l)}},I=function(){i&&m&&"DURING"===u&&!i.info("isDocument")&&N()},x=function(){i&&m&&"DURING"===u&&((w.relSize.width||w.relSize.autoFullWidth)&&r.get.width(window)!=r.get.width(w.spacer.parentNode)||w.relSize.height&&r.get.height(window)!=r.get.height(w.spacer.parentNode))&&C()},A=function(e){i&&m&&"DURING"===u&&!i.info("isDocument")&&(e.preventDefault(),i._setScrollPos(i.info("scrollPos")-((e.wheelDelta||e[i.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,t){if(t=r.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t),!(e=r.get.elements(e)[0]))return v(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),s;if("fixed"===r.css(e,"position"))return v(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),s;if(m){if(m===e)return s;s.removePin()}var n=(m=e).parentNode.style.display,o=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];m.parentNode.style.display="none";var i="absolute"!=r.css(m,"position"),l=r.css(m,o.concat(["display"])),a=r.css(m,["width","height"]);m.parentNode.style.display=n,!i&&t.pushFollowers&&(v(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),t.pushFollowers=!1),window.setTimeout(function(){m&&0===c.duration&&t.pushFollowers&&v(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0);var u=m.parentNode.insertBefore(document.createElement("div"),m),f=r.extend(l,{position:i?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(i||r.extend(f,r.css(m,["width","height"])),r.css(u,f),u.setAttribute("data-scrollmagic-pin-spacer",""),r.addClass(u,t.spacerClass),w={spacer:u,relSize:{width:"%"===a.width.slice(-1),height:"%"===a.height.slice(-1),autoFullWidth:"auto"===a.width&&i&&r.isMarginCollapseType(l.display)},pushFollowers:t.pushFollowers,inFlow:i},!m.___origStyle){m.___origStyle={};var d=m.style,p=o.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);p.forEach(function(e){m.___origStyle[e]=d[e]||""})}return w.relSize.width&&r.css(u,{width:a.width}),w.relSize.height&&r.css(u,{height:a.height}),u.appendChild(m),r.css(m,{position:i?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(w.relSize.width||w.relSize.autoFullWidth)&&r.css(m,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",I),window.addEventListener("resize",I),window.addEventListener("resize",x),m.addEventListener("mousewheel",A),m.addEventListener("DOMMouseScroll",A),v(3,"added pin"),N(),s},this.removePin=function(e){if(m){if("DURING"===u&&N(!0),e||!i){var t=w.spacer.firstChild;if(t.hasAttribute("data-scrollmagic-pin-spacer")){var n=w.spacer.style,o={};["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach(function(e){o[e]=n[e]||""}),r.css(t,o)}w.spacer.parentNode.insertBefore(t,w.spacer),w.spacer.parentNode.removeChild(w.spacer),m.parentNode.hasAttribute("data-scrollmagic-pin-spacer")||(r.css(m,m.___origStyle),delete m.___origStyle)}window.removeEventListener("scroll",I),window.removeEventListener("resize",I),window.removeEventListener("resize",x),m.removeEventListener("mousewheel",A),m.removeEventListener("DOMMouseScroll",A),m=void 0,v(3,"removed pin (reset: "+(e?"true":"false")+")")}return s};var z,P=[];return s.on("destroy.internal",function(e){s.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=r.get.elements(e);return 0!==n.length&&r.type.String(t)?(P.length>0&&s.removeClassToggle(),z=t,P=n,s.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?r.addClass:r.removeClass;P.forEach(function(e,n){t(e,z)})}),s):(v(1,"ERROR calling method 'setClassToggle()': Invalid "+(0===n.length?"element":"classes")+" supplied."),s)},this.removeClassToggle=function(e){return e&&P.forEach(function(e,t){r.removeClass(e,z)}),s.off("start.internal_class end.internal_class"),z=void 0,P=[],s},function(){for(var e in c)a.hasOwnProperty(e)||(v(2,'WARNING: Unknown option "'+e+'"'),delete c[e]);for(var t in a)O(t);F()}(),s};var n={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!r.type.Number(e))throw['Invalid value for option "offset":',e];return e},triggerElement:function(e){if(e=e||void 0){var t=r.get.elements(e)[0];if(!t||!t.parentNode)throw['Element defined in option "triggerElement" was not found:',e];e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(r.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw['Invalid value for option "triggerHook": ',e];e=t[e]}return e},reverse:function(e){return!!e},loglevel:function(e){if(e=parseInt(e),!r.type.Number(e)||e<0||e>3)throw['Invalid value for option "loglevel":',e];return e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(t,r,o,i){t in n.defaults?e._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+t+"', because it already exists."):(n.defaults[t]=r,n.validate[t]=o,i&&n.shifts.push(t))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=r.extend({},this),t.apply(this,arguments)||this},r.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,r){for(var o in r=r||{})this[o]=r[o];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var r=e._util=function(e){var t,n={},r=function(e){return parseFloat(e)||0},o=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},i=function(t,n,i,l){if((n=n===document?e:n)===e)l=!1;else if(!g.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var a=(i?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(i&&l){var s=o(n);a+="Height"===t?r(s.marginTop)+r(s.marginBottom):r(s.marginLeft)+r(s.marginRight)}return a},l=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};n.extend=function(e){for(e=e||{},t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var a=0,s=["ms","moz","webkit","o"],c=e.requestAnimationFrame,u=e.cancelAnimationFrame;for(t=0;!c&&t<s.length;++t)c=e[s[t]+"RequestAnimationFrame"],u=e[s[t]+"CancelAnimationFrame"]||e[s[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-a)),o=e.setTimeout(function(){t(n+r)},r);return a=n+r,o}),u||(u=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=u.bind(e);var f=["error","warn","log"],d=e.console||{};for(d.log=d.log||function(){},t=0;t<f.length;t++){var p=f[t];d[p]||(d[p]=d.log)}n.log=function(e){(e>f.length||e<=0)&&(e=f.length);var t=new Date,n=("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)+":"+("00"+t.getMilliseconds()).slice(-3),r=f[e-1],o=Array.prototype.splice.call(arguments,1),i=Function.prototype.bind.call(d[r],d);o.unshift(n),i.apply(d,o)};var g=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};g.String=function(e){return"string"===g(e)},g.Function=function(e){return"function"===g(e)},g.Array=function(e){return Array.isArray(e)},g.Number=function(e){return!g.Array(e)&&e-parseFloat(e)+1>=0},g.DomElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var h=n.get={};return h.elements=function(t){var n=[];if(g.String(t))try{t=document.querySelectorAll(t)}catch(e){return n}if("nodelist"===g(t)||g.Array(t))for(var r=0,o=n.length=t.length;r<o;r++){var i=t[r];n[r]=g.DomElement(i)?i:h.elements(i)}else(g.DomElement(t)||t===document||t===e)&&(n=[t]);return n},h.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},h.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},h.width=function(e,t,n){return i("width",e,t,n)},h.height=function(e,t,n){return i("height",e,t,n)},h.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=h.scrollTop(),n.left+=h.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(g.String(t))return o(e)[l(t)];if(g.Array(t)){var n={},r=o(e);return t.forEach(function(e,t){n[e]=r[l(e)]}),n}for(var i in t){var a=t[i];a==parseFloat(a)&&(a+="px"),e.style[l(i)]=a}},n}(window||{});return e.Scene.prototype.addIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.removeIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.setTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.removeTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.setVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e.Scene.prototype.removeVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e})?r.call(t,n,t,e):r)||(e.exports=o)}]]);
//# sourceMappingURL=1.2753cfb1.chunk.js.map