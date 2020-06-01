import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, d as _assertThisInitialized, e as _createClass } from '../getPrototypeOf-d7a15518.js';
import { _ as _defineProperty } from '../defineProperty-e8b8a880.js';
import React, { createElement, Component, isValidElement } from 'react';
import { r as require$$1, e as createCommonjsModule, d as propTypes_1, a as propTypes_2, f as propTypes_3, g as propTypes_4, c as propTypes_5, p as propTypes_6 } from '../index-23943bf4.js';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var inheritsLoose = _inheritsLoose;

var cloneSvg = function cloneSvg(sourceSvg) {
  return sourceSvg.cloneNode(true);
};

var isLocal = function isLocal() {
  return window.location.protocol === 'file:';
};

var svgCache = new Map();

var requestQueue = {};
var queueRequest = function queueRequest(url, callback) {
  requestQueue[url] = requestQueue[url] || [];
  requestQueue[url].push(callback);
};
var processRequestQueue = function processRequestQueue(url) {
  var _loop_1 = function _loop_1(i, len) {
    setTimeout(function () {
      if (Array.isArray(requestQueue[url])) {
        var cacheValue = svgCache.get(url);
        var callback = requestQueue[url][i];

        if (cacheValue instanceof SVGElement) {
          callback(null, cloneSvg(cacheValue));
        }

        if (cacheValue instanceof Error) {
          callback(cacheValue);
        }

        if (i === requestQueue[url].length - 1) {
          delete requestQueue[url];
        }
      }
    }, 0);
  };

  for (var i = 0, len = requestQueue[url].length; i < len; i++) {
    _loop_1(i);
  }
};

var loadSvg = function loadSvg(url, callback) {
  if (svgCache.has(url)) {
    var cacheValue = svgCache.get(url);

    if (cacheValue instanceof SVGElement) {
      callback(null, cloneSvg(cacheValue));
      return;
    }

    if (cacheValue instanceof Error) {
      callback(cacheValue);
      return;
    }

    queueRequest(url, callback);
    return;
  }

  svgCache.set(url, undefined);
  queueRequest(url, callback);
  var httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = function () {
    try {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 404 || httpRequest.responseXML === null) {
          throw new Error(isLocal() ? 'Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver.' : 'Unable to load SVG file: ' + url);
        }

        if (httpRequest.status === 200 || isLocal() && httpRequest.status === 0) {
          if (httpRequest.responseXML instanceof Document) {
            if (httpRequest.responseXML.documentElement) {
              svgCache.set(url, httpRequest.responseXML.documentElement);
            }
          }

          processRequestQueue(url);
        } else {
          throw new Error('There was a problem injecting the SVG: ' + httpRequest.status + ' ' + httpRequest.statusText);
        }
      }
    } catch (error) {
      svgCache.set(url, error);
      processRequestQueue(url);
    }
  };

  httpRequest.open('GET', url);

  if (httpRequest.overrideMimeType) {
    httpRequest.overrideMimeType('text/xml');
  }

  httpRequest.send();
};

var idCounter = 0;

var uniqueId = function uniqueId() {
  return ++idCounter;
};

var __spreadArrays =  function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};
var injectedElements = [];
var ranScripts = {};
var svgNamespace = 'http://www.w3.org/2000/svg';
var xlinkNamespace = 'http://www.w3.org/1999/xlink';

var injectElement = function injectElement(el, evalScripts, renumerateIRIElements, beforeEach, callback) {
  var imgUrl = el.getAttribute('data-src') || el.getAttribute('src');

  if (!imgUrl || !/\.svg/i.test(imgUrl)) {
    callback(new Error('Attempted to inject a file with a non-svg extension: ' + imgUrl));
    return;
  }

  if (injectedElements.indexOf(el) !== -1) {
    injectedElements.splice(injectedElements.indexOf(el), 1);
    el = null;
    return;
  }

  injectedElements.push(el);
  el.setAttribute('src', '');
  loadSvg(imgUrl, function (error, svg) {
    if (!svg) {
      injectedElements.splice(injectedElements.indexOf(el), 1);
      el = null;
      callback(error);
      return;
    }

    var imgId = el.getAttribute('id');

    if (imgId) {
      svg.setAttribute('id', imgId);
    }

    var imgTitle = el.getAttribute('title');

    if (imgTitle) {
      svg.setAttribute('title', imgTitle);
    }

    var imgWidth = el.getAttribute('width');

    if (imgWidth) {
      svg.setAttribute('width', imgWidth);
    }

    var imgHeight = el.getAttribute('height');

    if (imgHeight) {
      svg.setAttribute('height', imgHeight);
    }

    var mergedClasses = Array.from(new Set(__spreadArrays((svg.getAttribute('class') || '').split(' '), ['injected-svg'], (el.getAttribute('class') || '').split(' ')))).join(' ').trim();
    svg.setAttribute('class', mergedClasses);
    var imgStyle = el.getAttribute('style');

    if (imgStyle) {
      svg.setAttribute('style', imgStyle);
    }

    svg.setAttribute('data-src', imgUrl);
    var imgData = [].filter.call(el.attributes, function (at) {
      return /^data-\w[\w-]*$/.test(at.name);
    });
    Array.prototype.forEach.call(imgData, function (dataAttr) {
      if (dataAttr.name && dataAttr.value) {
        svg.setAttribute(dataAttr.name, dataAttr.value);
      }
    });

    if (renumerateIRIElements) {
      var iriElementsAndProperties_1 = {
        clipPath: ['clip-path'],
        'color-profile': ['color-profile'],
        cursor: ['cursor'],
        filter: ['filter'],
        linearGradient: ['fill', 'stroke'],
        marker: ['marker', 'marker-start', 'marker-mid', 'marker-end'],
        mask: ['mask'],
        path: [],
        pattern: ['fill', 'stroke'],
        radialGradient: ['fill', 'stroke']
      };
      var element_1;
      var elements_1;
      var properties_1;
      var currentId_1;
      var newId_1;
      Object.keys(iriElementsAndProperties_1).forEach(function (key) {
        element_1 = key;
        properties_1 = iriElementsAndProperties_1[key];
        elements_1 = svg.querySelectorAll(element_1 + '[id]');

        var _loop_1 = function _loop_1(a, elementsLen) {
          currentId_1 = elements_1[a].id;
          newId_1 = currentId_1 + '-' + uniqueId();
          var referencingElements;
          Array.prototype.forEach.call(properties_1, function (property) {
            referencingElements = svg.querySelectorAll('[' + property + '*="' + currentId_1 + '"]');

            for (var b = 0, referencingElementLen = referencingElements.length; b < referencingElementLen; b++) {
              var attrValue = referencingElements[b].getAttribute(property);

              if (attrValue && !attrValue.match(new RegExp('url\\(#' + currentId_1 + '\\)'))) {
                continue;
              }

              referencingElements[b].setAttribute(property, 'url(#' + newId_1 + ')');
            }
          });
          var allLinks = svg.querySelectorAll('[*|href]');
          var links = [];

          for (var c = 0, allLinksLen = allLinks.length; c < allLinksLen; c++) {
            var href = allLinks[c].getAttributeNS(xlinkNamespace, 'href');

            if (href && href.toString() === '#' + elements_1[a].id) {
              links.push(allLinks[c]);
            }
          }

          for (var d = 0, linksLen = links.length; d < linksLen; d++) {
            links[d].setAttributeNS(xlinkNamespace, 'href', '#' + newId_1);
          }

          elements_1[a].id = newId_1;
        };

        for (var a = 0, elementsLen = elements_1.length; a < elementsLen; a++) {
          _loop_1(a);
        }
      });
    }

    svg.removeAttribute('xmlns:a');
    var scripts = svg.querySelectorAll('script');
    var scriptsToEval = [];
    var script;
    var scriptType;

    for (var i = 0, scriptsLen = scripts.length; i < scriptsLen; i++) {
      scriptType = scripts[i].getAttribute('type');

      if (!scriptType || scriptType === 'application/ecmascript' || scriptType === 'application/javascript' || scriptType === 'text/javascript') {
        script = scripts[i].innerText || scripts[i].textContent;

        if (script) {
          scriptsToEval.push(script);
        }

        svg.removeChild(scripts[i]);
      }
    }

    if (scriptsToEval.length > 0 && (evalScripts === 'always' || evalScripts === 'once' && !ranScripts[imgUrl])) {
      for (var l = 0, scriptsToEvalLen = scriptsToEval.length; l < scriptsToEvalLen; l++) {
        new Function(scriptsToEval[l])(window);
      }

      ranScripts[imgUrl] = true;
    }

    var styleTags = svg.querySelectorAll('style');
    Array.prototype.forEach.call(styleTags, function (styleTag) {
      styleTag.textContent += '';
    });
    svg.setAttribute('xmlns', svgNamespace);
    svg.setAttribute('xmlns:xlink', xlinkNamespace);
    beforeEach(svg);

    if (el.parentNode) {
      el.parentNode.replaceChild(svg, el);
    }

    injectedElements.splice(injectedElements.indexOf(el), 1);
    el = null;
    callback(null, svg);
  });
};

var SVGInjector = function SVGInjector(elements, _a) {
  var _b = _a === void 0 ? {} : _a,
      _c = _b.afterAll,
      afterAll = _c === void 0 ? function () {
    return undefined;
  } : _c,
      _d = _b.afterEach,
      afterEach = _d === void 0 ? function () {
    return undefined;
  } : _d,
      _e = _b.beforeEach,
      beforeEach = _e === void 0 ? function () {
    return undefined;
  } : _e,
      _f = _b.evalScripts,
      evalScripts = _f === void 0 ? 'never' : _f,
      _g = _b.renumerateIRIElements,
      renumerateIRIElements = _g === void 0 ? true : _g;

  if (elements && 'length' in elements) {
    var elementsLoaded_1 = 0;

    for (var i = 0, j = elements.length; i < j; i++) {
      injectElement(elements[i], evalScripts, renumerateIRIElements, beforeEach, function (error, svg) {
        afterEach(error, svg);

        if (elements && 'length' in elements && elements.length === ++elementsLoaded_1) {
          afterAll(elementsLoaded_1);
        }
      });
    }
  } else if (elements) {
    injectElement(elements, evalScripts, renumerateIRIElements, beforeEach, function (error, svg) {
      afterEach(error, svg);
      afterAll(1);
      elements = null;
    });
  } else {
    afterAll(0);
  }
};

function q(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var t="function"===typeof Symbol&&Symbol.for,aa=t?Symbol.for("react.portal"):60106,u=t?Symbol.for("react.fragment"):60107,ba=t?Symbol.for("react.strict_mode"):60108,ca=t?Symbol.for("react.profiler"):60114,v=t?Symbol.for("react.provider"):60109,da=t?Symbol.for("react.context"):60110,ea=t?Symbol.for("react.concurrent_mode"):60111,fa=t?Symbol.for("react.forward_ref"):60112,B=t?Symbol.for("react.suspense"):60113,ha=t?Symbol.for("react.suspense_list"):60120,ia=t?Symbol.for("react.memo"):60115,ja=t?Symbol.for("react.lazy"):
60116,ka=t?Symbol.for("react.block"):60121,la=t?Symbol.for("react.fundamental"):60117,ma=t?Symbol.for("react.scope"):60119;function na(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(c){0===a._status&&(c=c.default,a._status=1,a._result=c);},function(c){0===a._status&&(a._status=2,a._result=c);});}}
function C(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case u:return "Fragment";case aa:return "Portal";case ca:return "Profiler";case ba:return "StrictMode";case B:return "Suspense";case ha:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case da:return "Context.Consumer";case v:return "Context.Provider";case fa:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");
case ia:return C(a.type);case ka:return C(a.render);case ja:if(a=1===a._status?a._result:null)return C(a)}return null}var D=React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;D.hasOwnProperty("ReactCurrentDispatcher")||(D.ReactCurrentDispatcher={current:null});D.hasOwnProperty("ReactCurrentBatchConfig")||(D.ReactCurrentBatchConfig={suspense:null});var oa={};function E(a,b){for(var c=a._threadCount|0;c<=b;c++)a[c]=a._currentValue2,a._threadCount=c+1;}
function pa(a,b,c,d){if(d&&(d=a.contextType,"object"===typeof d&&null!==d))return E(d,c),d[c];if(a=a.contextTypes){c={};for(var f in a)c[f]=b[f];b=c;}else b=oa;return b}for(var F=new Uint16Array(16),H=0;15>H;H++)F[H]=H+1;F[15]=0;
var qa=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ra=Object.prototype.hasOwnProperty,sa={},ta={};
function ua(a){if(ra.call(ta,a))return !0;if(ra.call(sa,a))return !1;if(qa.test(a))return ta[a]=!0;sa[a]=!0;return !1}function va(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
function wa(a,b,c,d){if(null===b||"undefined"===typeof b||va(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function J(a,b,c,d,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=g;}var K={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){K[a]=new J(a,0,!1,a,null,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];K[b]=new J(b,1,!1,a[1],null,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){K[a]=new J(a,2,!1,a.toLowerCase(),null,!1);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){K[a]=new J(a,2,!1,a,null,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){K[a]=new J(a,3,!1,a.toLowerCase(),null,!1);});
["checked","multiple","muted","selected"].forEach(function(a){K[a]=new J(a,3,!0,a,null,!1);});["capture","download"].forEach(function(a){K[a]=new J(a,4,!1,a,null,!1);});["cols","rows","size","span"].forEach(function(a){K[a]=new J(a,6,!1,a,null,!1);});["rowSpan","start"].forEach(function(a){K[a]=new J(a,5,!1,a.toLowerCase(),null,!1);});var L=/[\-:]([a-z])/g;function M(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(L,
M);K[b]=new J(b,1,!1,a,null,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/1999/xlink",!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1);});["tabIndex","crossOrigin"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!1);});
K.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!0);});var xa=/["'&<>]/;
function N(a){if("boolean"===typeof a||"number"===typeof a)return ""+a;a=""+a;var b=xa.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b;}a=f!==d?c+a.substring(f,d):c;}return a}
function ya(a,b){var c=K.hasOwnProperty(a)?K[a]:null;var d;if(d="style"!==a)d=null!==c?0===c.type:!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]?!1:!0;if(d||wa(a,b,c,!1))return "";if(null!==c){a=c.attributeName;d=c.type;if(3===d||4===d&&!0===b)return a+'=""';c.sanitizeURL&&(b=""+b);return a+'="'+(N(b)+'"')}return ua(a)?a+'="'+(N(b)+'"'):""}function za(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var Aa="function"===typeof Object.is?Object.is:za,O=null,P=null,Q=null,R=!1,S=!1,U=null,V=0;function W(){if(null===O)throw Error(q(321));return O}function Ba(){if(0<V)throw Error(q(312));return {memoizedState:null,queue:null,next:null}}function Ca(){null===Q?null===P?(R=!1,P=Q=Ba()):(R=!0,Q=P):null===Q.next?(R=!1,Q=Q.next=Ba()):(R=!0,Q=Q.next);return Q}function Da(a,b,c,d){for(;S;)S=!1,V+=1,Q=null,c=a(b,d);P=O=null;V=0;Q=U=null;return c}function Ea(a,b){return "function"===typeof b?b(a):b}
function Fa(a,b,c){O=W();Q=Ca();if(R){var d=Q.queue;b=d.dispatch;if(null!==U&&(c=U.get(d),void 0!==c)){U.delete(d);d=Q.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);Q.memoizedState=d;return [d,b]}return [Q.memoizedState,b]}a=a===Ea?"function"===typeof b?b():b:void 0!==c?c(b):b;Q.memoizedState=a;a=Q.queue={last:null,dispatch:null};a=a.dispatch=Ga.bind(null,O,a);return [Q.memoizedState,a]}
function Ga(a,b,c){if(!(25>V))throw Error(q(301));if(a===O)if(S=!0,a={action:c,next:null},null===U&&(U=new Map),c=U.get(b),void 0===c)U.set(b,a);else {for(b=c;null!==b.next;)b=b.next;b.next=a;}}function Ha(){}
var X=0,Ia={readContext:function(a){var b=X;E(a,b);return a[b]},useContext:function(a){W();var b=X;E(a,b);return a[b]},useMemo:function(a,b){O=W();Q=Ca();b=void 0===b?null:b;if(null!==Q){var c=Q.memoizedState;if(null!==c&&null!==b){a:{var d=c[1];if(null===d)d=!1;else {for(var f=0;f<d.length&&f<b.length;f++)if(!Aa(b[f],d[f])){d=!1;break a}d=!0;}}if(d)return c[0]}}a=a();Q.memoizedState=[a,b];return a},useReducer:Fa,useRef:function(a){O=W();Q=Ca();var b=Q.memoizedState;return null===b?(a={current:a},Q.memoizedState=
a):b},useState:function(a){return Fa(Ea,a)},useLayoutEffect:function(){},useCallback:function(a){return a},useImperativeHandle:Ha,useEffect:Ha,useDebugValue:Ha,useResponder:function(a,b){return {props:b,responder:a}},useDeferredValue:function(a){W();return a},useTransition:function(){W();return [function(a){a();},!1]}},Ja={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Ka(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
var La={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Ma=require$$1({menuitem:!0},La),Y={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Na=["Webkit","ms","Moz","O"];Object.keys(Y).forEach(function(a){Na.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y[b]=Y[a];});});
var Oa=/([A-Z])/g,Pa=/^ms-/,Z=React.Children.toArray,Qa=D.ReactCurrentDispatcher,Ra={listing:!0,pre:!0,textarea:!0},Sa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ta={},Ua={};function Va(a){if(void 0===a||null===a)return a;var b="";React.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}var Wa=Object.prototype.hasOwnProperty,Xa={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Ya(a,b){if(void 0===a)throw Error(q(152,C(b)||"Component"));}
function Za(a,b,c){function d(d,g){var e=g.prototype&&g.prototype.isReactComponent,f=pa(g,b,c,e),x=[],h=!1,m={isMounted:function(){return !1},enqueueForceUpdate:function(){if(null===x)return null},enqueueReplaceState:function(a,c){h=!0;x=[c];},enqueueSetState:function(a,c){if(null===x)return null;x.push(c);}};if(e){if(e=new g(d.props,f,m),"function"===typeof g.getDerivedStateFromProps){var w=g.getDerivedStateFromProps.call(null,d.props,e.state);null!=w&&(e.state=require$$1({},e.state,w));}}else if(O={},e=g(d.props,
f,m),e=Da(g,d.props,e,f),null==e||null==e.render){a=e;Ya(a,g);return}e.props=d.props;e.context=f;e.updater=m;m=e.state;void 0===m&&(e.state=m=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),x.length){m=x;var r=
h;x=null;h=!1;if(r&&1===m.length)e.state=m[0];else {w=r?m[0]:e.state;var y=!0;for(r=r?1:0;r<m.length;r++){var p=m[r];p="function"===typeof p?p.call(e,w,d.props,f):p;null!=p&&(y?(y=!1,w=require$$1({},w,p)):require$$1(w,p));}e.state=w;}}else x=null;a=e.render();Ya(a,g);if("function"===typeof e.getChildContext&&(d=g.childContextTypes,"object"===typeof d)){var A=e.getChildContext();for(var T in A)if(!(T in d))throw Error(q(108,C(g)||"Unknown",T));}A&&(b=require$$1({},b,A));}for(;React.isValidElement(a);){var f=a,g=f.type;if("function"!==
typeof g)break;d(f,g);}return {child:a,context:b}}
var $a=function(){function a(a,b){React.isValidElement(a)?a.type!==u?a=[a]:(a=a.props.children,a=React.isValidElement(a)?[a]:Z(a)):a=Z(a);a={type:null,domNamespace:Ja.html,children:a,childIndex:0,context:oa,footer:""};var c=F[0];if(0===c){var g=F;c=g.length;var d=2*c;if(!(65536>=d))throw Error(q(304));var h=new Uint16Array(d);h.set(g);F=h;F[0]=c+1;for(g=c;g<d-1;g++)F[g]=g+1;F[d-1]=0;}else F[0]=F[c];this.threadID=c;this.stack=[a];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=
b;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[];}var b=a.prototype;b.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;F[a]=F[0];F[0]=a;}};b.pushProvider=function(a){var c=++this.contextIndex,b=a.type._context,g=this.threadID;E(b,g);var x=b[g];this.contextStack[c]=b;this.contextValueStack[c]=x;b[g]=a.props.value;};b.popProvider=function(){var a=this.contextIndex,b=this.contextStack[a],f=this.contextValueStack[a];
this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;b[this.threadID]=f;};b.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a];};b.read=function(a){if(this.exhausted)return null;var b=X;X=this.threadID;var c=Qa.current;Qa.current=Ia;try{for(var g=[""],x=!1;g[0].length<a;){if(0===this.stack.length){this.exhausted=!0;var h=this.threadID;F[h]=F[0];F[0]=h;break}var e=this.stack[this.stack.length-1];if(x||e.childIndex>=
e.children.length){var I=e.footer;""!==I&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===e.type)this.currentSelectValue=null;else if(null!=e.type&&null!=e.type.type&&e.type.type.$$typeof===v)this.popProvider(e.type);else if(e.type===B){this.suspenseDepth--;var G=g.pop();if(x){x=!1;var n=e.fallbackFrame;if(!n)throw Error(q(303));this.stack.push(n);g[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else g[this.suspenseDepth]+=G;}g[this.suspenseDepth]+=I;}else {var m=e.children[e.childIndex++],
w="";try{w+=this.render(m,e.context,e.domNamespace);}catch(r){if(null!=r&&"function"===typeof r.then)throw Error(q(294));throw r;}finally{}g.length<=this.suspenseDepth&&g.push("");g[this.suspenseDepth]+=w;}}return g[0]}finally{Qa.current=c,X=b;}};b.render=function(a,b,f){if("string"===typeof a||"number"===typeof a){f=""+a;if(""===f)return "";if(this.makeStaticMarkup)return N(f);if(this.previousWasTextNode)return "\x3c!-- --\x3e"+N(f);this.previousWasTextNode=!0;return N(f)}b=Za(a,b,this.threadID);a=b.child;
b=b.context;if(null===a||!1===a)return "";if(!React.isValidElement(a)){if(null!=a&&null!=a.$$typeof){f=a.$$typeof;if(f===aa)throw Error(q(257));throw Error(q(258,f.toString()));}a=Z(a);this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""});return ""}var c=a.type;if("string"===typeof c)return this.renderDOM(a,b,f);switch(c){case ba:case ea:case ca:case ha:case u:return a=Z(a.props.children),this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),
"";case B:throw Error(q(294));}if("object"===typeof c&&null!==c)switch(c.$$typeof){case fa:O={};var d=c.render(a.props,a.ref);d=Da(c.render,a.props,d,a.ref);d=Z(d);this.stack.push({type:null,domNamespace:f,children:d,childIndex:0,context:b,footer:""});return "";case ia:return a=[React.createElement(c.type,require$$1({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case v:return c=Z(a.props.children),f={type:a,domNamespace:f,children:c,childIndex:0,
context:b,footer:""},this.pushProvider(a),this.stack.push(f),"";case da:c=a.type;d=a.props;var h=this.threadID;E(c,h);c=Z(d.children(c[h]));this.stack.push({type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""});return "";case la:throw Error(q(338));case ja:switch(c=a.type,na(c),c._status){case 1:return a=[React.createElement(c._result,require$$1({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case 2:throw c._result;default:throw Error(q(295));
}case ma:throw Error(q(343));}throw Error(q(130,null==c?c:typeof c,""));};b.renderDOM=function(a,b,f){var c=a.type.toLowerCase();if(!Ta.hasOwnProperty(c)){if(!Sa.test(c))throw Error(q(65,c));Ta[c]=!0;}var d=a.props;if("input"===c)d=require$$1({type:void 0},d,{defaultChecked:void 0,defaultValue:void 0,value:null!=d.value?d.value:d.defaultValue,checked:null!=d.checked?d.checked:d.defaultChecked});else if("textarea"===c){var h=d.value;if(null==h){h=d.defaultValue;var e=d.children;if(null!=e){if(null!=
h)throw Error(q(92));if(Array.isArray(e)){if(!(1>=e.length))throw Error(q(93));e=e[0];}h=""+e;}null==h&&(h="");}d=require$$1({},d,{value:void 0,children:""+h});}else if("select"===c)this.currentSelectValue=null!=d.value?d.value:d.defaultValue,d=require$$1({},d,{value:void 0});else if("option"===c){e=this.currentSelectValue;var I=Va(d.children);if(null!=e){var G=null!=d.value?d.value+"":I;h=!1;if(Array.isArray(e))for(var n=0;n<e.length;n++){if(""+e[n]===G){h=!0;break}}else h=""+e===G;d=require$$1({selected:void 0,children:void 0},
d,{selected:h,children:I});}}if(h=d){if(Ma[c]&&(null!=h.children||null!=h.dangerouslySetInnerHTML))throw Error(q(137,c,""));if(null!=h.dangerouslySetInnerHTML){if(null!=h.children)throw Error(q(60));if(!("object"===typeof h.dangerouslySetInnerHTML&&"__html"in h.dangerouslySetInnerHTML))throw Error(q(61));}if(null!=h.style&&"object"!==typeof h.style)throw Error(q(62,""));}h=d;e=this.makeStaticMarkup;I=1===this.stack.length;G="<"+a.type;for(z in h)if(Wa.call(h,z)){var m=h[z];if(null!=m){if("style"===
z){n=void 0;var w="",r="";for(n in m)if(m.hasOwnProperty(n)){var y=0===n.indexOf("--"),p=m[n];if(null!=p){if(y)var A=n;else if(A=n,Ua.hasOwnProperty(A))A=Ua[A];else {var T=A.replace(Oa,"-$1").toLowerCase().replace(Pa,"-ms-");A=Ua[A]=T;}w+=r+A+":";r=n;y=null==p||"boolean"===typeof p||""===p?"":y||"number"!==typeof p||0===p||Y.hasOwnProperty(r)&&Y[r]?(""+p).trim():p+"px";w+=y;r=";";}}m=w||null;}n=null;b:if(y=c,p=h,-1===y.indexOf("-"))y="string"===typeof p.is;else switch(y){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":y=
!1;break b;default:y=!0;}y?Xa.hasOwnProperty(z)||(n=z,n=ua(n)&&null!=m?n+'="'+(N(m)+'"'):""):n=ya(z,m);n&&(G+=" "+n);}}e||I&&(G+=' data-reactroot=""');var z=G;h="";La.hasOwnProperty(c)?z+="/>":(z+=">",h="</"+a.type+">");a:{e=d.dangerouslySetInnerHTML;if(null!=e){if(null!=e.__html){e=e.__html;break a}}else if(e=d.children,"string"===typeof e||"number"===typeof e){e=N(e);break a}e=null;}null!=e?(d=[],Ra.hasOwnProperty(c)&&"\n"===e.charAt(0)&&(z+="\n"),z+=e):d=Z(d.children);a=a.type;f=null==f||"http://www.w3.org/1999/xhtml"===
f?Ka(a):"http://www.w3.org/2000/svg"===f&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":f;this.stack.push({domNamespace:f,type:c,children:d,childIndex:0,context:b,footer:h});this.previousWasTextNode=!1;return z};return a}(),ab={renderToString:function(a){a=new $a(a,!1);try{return a.read(Infinity)}finally{a.destroy();}},renderToStaticMarkup:function(a){a=new $a(a,!0);try{return a.read(Infinity)}finally{a.destroy();}},renderToNodeStream:function(){throw Error(q(207));},renderToStaticNodeStream:function(){throw Error(q(208));
},version:"16.13.1"};var reactDomServer_browser_production_min=ab.default||ab;

var reactDomServer_browser_development = createCommonjsModule(function (module) {
});

var server_browser = createCommonjsModule(function (module) {

{
  module.exports = reactDomServer_browser_production_min;
}
});

// Hat-tip: https://github.com/developit/preact-compat/blob/master/src/index.js#L402.
var shallowDiffers = function shallowDiffers(a, b) {
  for (var i in a) {
    if (!(i in b)) {
      return true;
    }
  }

  for (var _i in b) {
    if (a[_i] !== b[_i]) {
      return true;
    }
  }

  return false;
};

var ReactSVG =
/** @class */
function () {
  var ReactSVG = /*#__PURE__*/function (_React$Component) {
    inheritsLoose(ReactSVG, _React$Component);

    function ReactSVG() {
      var _this;

      _this = _React$Component.apply(this, arguments) || this;
      _this.initialState = {
        hasError: false,
        isLoading: true
      };
      _this.state = _this.initialState;
      _this._isMounted = false;

      _this.refCallback = function (container) {
        _this.container = container;
      };

      return _this;
    }

    var _proto = ReactSVG.prototype;

    _proto.renderSVG = function renderSVG() {
      var _this2 = this;

      /* istanbul ignore else */
      if (this.container instanceof Node) {
        var _this$props = this.props,
            beforeInjection = _this$props.beforeInjection,
            evalScripts = _this$props.evalScripts,
            renumerateIRIElements = _this$props.renumerateIRIElements,
            src = _this$props.src;
        /* eslint-disable @typescript-eslint/no-non-null-assertion */

        var afterInjection = this.props.afterInjection;
        var Wrapper = this.props.wrapper;
        /* eslint-enable @typescript-eslint/no-non-null-assertion */

        var wrapper = document.createElement(Wrapper);
        wrapper.innerHTML = server_browser.renderToStaticMarkup(createElement(Wrapper, null, createElement(Wrapper, {
          "data-src": src
        })));
        this.svgWrapper = this.container.appendChild(wrapper.firstChild);

        var afterEach = function afterEach(error, svg) {
          if (error) {
            _this2.removeSVG();
          } // TODO: It'd be better to cleanly unsubscribe from SVGInjector
          // callbacks instead of tracking a property like this.


          if (_this2._isMounted) {
            _this2.setState(function () {
              return {
                hasError: !!error,
                isLoading: false
              };
            }, function () {
              afterInjection(error, svg);
            });
          }
        };

        SVGInjector(this.svgWrapper.firstChild, {
          afterEach: afterEach,
          beforeEach: beforeInjection,
          evalScripts: evalScripts,
          renumerateIRIElements: renumerateIRIElements
        });
      }
    };

    _proto.removeSVG = function removeSVG() {
      if (this.container instanceof Node && this.svgWrapper instanceof Node) {
        this.container.removeChild(this.svgWrapper);
        this.svgWrapper = null;
      }
    };

    _proto.componentDidMount = function componentDidMount() {
      this._isMounted = true;
      this.renderSVG();
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var _this3 = this;

      if (shallowDiffers(prevProps, this.props)) {
        this.setState(function () {
          return _this3.initialState;
        }, function () {
          _this3.removeSVG();

          _this3.renderSVG();
        });
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this._isMounted = false;
      this.removeSVG();
    };

    _proto.render = function render() {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      var _this$props2 = this.props,
          afterInjection = _this$props2.afterInjection,
          beforeInjection = _this$props2.beforeInjection,
          evalScripts = _this$props2.evalScripts,
          Fallback = _this$props2.fallback,
          Loading = _this$props2.loading,
          renumerateIRIElements = _this$props2.renumerateIRIElements,
          src = _this$props2.src,
          wrapper = _this$props2.wrapper,
          rest = objectWithoutPropertiesLoose(_this$props2, ["afterInjection", "beforeInjection", "evalScripts", "fallback", "loading", "renumerateIRIElements", "src", "wrapper"]);
      /* eslint-enable @typescript-eslint/no-unused-vars */
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion


      var Wrapper = wrapper;
      return createElement(Wrapper, Object.assign({}, rest, {
        ref: this.refCallback
      }), this.state.isLoading && Loading && createElement(Loading, null), this.state.hasError && Fallback && createElement(Fallback, null));
    };

    return ReactSVG;
  }(Component);

  ReactSVG.defaultProps = {
    afterInjection: function afterInjection() {
      return undefined;
    },
    beforeInjection: function beforeInjection() {
      return undefined;
    },
    evalScripts: 'never',
    fallback: null,
    loading: null,
    renumerateIRIElements: true,
    wrapper: 'div'
  };
  ReactSVG.propTypes =  {
    afterInjection: propTypes_1,
    beforeInjection: propTypes_1,
    evalScripts: propTypes_2(['always', 'once', 'never']),
    fallback: propTypes_3([propTypes_1, propTypes_4, propTypes_5]),
    loading: propTypes_3([propTypes_1, propTypes_4, propTypes_5]),
    renumerateIRIElements: propTypes_6,
    src: propTypes_5.isRequired,
    wrapper: propTypes_2(['div', 'span'])
  } ;
  return ReactSVG;
}();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Icon = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    var _this;

    _classCallCheck(this, Icon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderIcon", function () {
      var _this$props = _this.props,
          icon = _this$props.icon,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? "" : _this$props$className;

      if (typeof icon === "string" && icon.slice(0, 3) !== "<svg") {
        return /*#__PURE__*/React.createElement("i", {
          className: "iconfont icon-".concat(icon, " ").concat(className)
        });
      }

      if (isValidElement(icon) || icon instanceof Element) {
        return /*#__PURE__*/React.createElement("i", {
          className: className
        }, icon);
      }

      return /*#__PURE__*/React.createElement(ReactSVG, {
        src: icon,
        className: className
      });
    });

    return _this;
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var icon = this.props.icon;
      if (!icon) return null;
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.renderIcon());
    }
  }]);

  return Icon;
}(Component);

export default Icon;
