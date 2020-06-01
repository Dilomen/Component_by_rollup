(function (React, ReactDOM) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
  Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
  function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
  var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
  var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
  var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

  var reactIs_production_min = {
  	AsyncMode: AsyncMode,
  	ConcurrentMode: ConcurrentMode,
  	ContextConsumer: ContextConsumer,
  	ContextProvider: ContextProvider,
  	Element: Element$1,
  	ForwardRef: ForwardRef,
  	Fragment: Fragment,
  	Lazy: Lazy,
  	Memo: Memo,
  	Portal: Portal,
  	Profiler: Profiler,
  	StrictMode: StrictMode,
  	Suspense: Suspense,
  	isAsyncMode: isAsyncMode,
  	isConcurrentMode: isConcurrentMode,
  	isContextConsumer: isContextConsumer,
  	isContextProvider: isContextProvider,
  	isElement: isElement,
  	isForwardRef: isForwardRef,
  	isFragment: isFragment,
  	isLazy: isLazy,
  	isMemo: isMemo,
  	isPortal: isPortal,
  	isProfiler: isProfiler,
  	isStrictMode: isStrictMode,
  	isSuspense: isSuspense,
  	isValidElementType: isValidElementType,
  	typeOf: typeOf
  };

  var reactIs_development = createCommonjsModule(function (module, exports) {
  });
  var reactIs_development_1 = reactIs_development.AsyncMode;
  var reactIs_development_2 = reactIs_development.ConcurrentMode;
  var reactIs_development_3 = reactIs_development.ContextConsumer;
  var reactIs_development_4 = reactIs_development.ContextProvider;
  var reactIs_development_5 = reactIs_development.Element;
  var reactIs_development_6 = reactIs_development.ForwardRef;
  var reactIs_development_7 = reactIs_development.Fragment;
  var reactIs_development_8 = reactIs_development.Lazy;
  var reactIs_development_9 = reactIs_development.Memo;
  var reactIs_development_10 = reactIs_development.Portal;
  var reactIs_development_11 = reactIs_development.Profiler;
  var reactIs_development_12 = reactIs_development.StrictMode;
  var reactIs_development_13 = reactIs_development.Suspense;
  var reactIs_development_14 = reactIs_development.isAsyncMode;
  var reactIs_development_15 = reactIs_development.isConcurrentMode;
  var reactIs_development_16 = reactIs_development.isContextConsumer;
  var reactIs_development_17 = reactIs_development.isContextProvider;
  var reactIs_development_18 = reactIs_development.isElement;
  var reactIs_development_19 = reactIs_development.isForwardRef;
  var reactIs_development_20 = reactIs_development.isFragment;
  var reactIs_development_21 = reactIs_development.isLazy;
  var reactIs_development_22 = reactIs_development.isMemo;
  var reactIs_development_23 = reactIs_development.isPortal;
  var reactIs_development_24 = reactIs_development.isProfiler;
  var reactIs_development_25 = reactIs_development.isStrictMode;
  var reactIs_development_26 = reactIs_development.isSuspense;
  var reactIs_development_27 = reactIs_development.isValidElementType;
  var reactIs_development_28 = reactIs_development.typeOf;

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_production_min;
  }
  });
  var reactIs_1 = reactIs.isValidElementType;

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });
  var propTypes_1 = propTypes.func;
  var propTypes_2 = propTypes.oneOf;
  var propTypes_3 = propTypes.oneOfType;
  var propTypes_4 = propTypes.object;
  var propTypes_5 = propTypes.string;
  var propTypes_6 = propTypes.bool;
  var propTypes_7 = propTypes.node;
  var propTypes_8 = propTypes.number;
  var propTypes_9 = propTypes.array;

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function isAbsolute(pathname) {
    return pathname.charAt(0) === '/';
  }

  // About 1.5x faster than the two-arg version of Array#splice()
  function spliceOne(list, index) {
    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
      list[i] = list[k];
    }

    list.pop();
  }

  // This implementation is based heavily on node's url.parse
  function resolvePathname(to, from) {
    if (from === undefined) from = '';

    var toParts = (to && to.split('/')) || [];
    var fromParts = (from && from.split('/')) || [];

    var isToAbs = to && isAbsolute(to);
    var isFromAbs = from && isAbsolute(from);
    var mustEndAbs = isToAbs || isFromAbs;

    if (to && isAbsolute(to)) {
      // to is absolute
      fromParts = toParts;
    } else if (toParts.length) {
      // to is relative, drop the filename
      fromParts.pop();
      fromParts = fromParts.concat(toParts);
    }

    if (!fromParts.length) return '/';

    var hasTrailingSlash;
    if (fromParts.length) {
      var last = fromParts[fromParts.length - 1];
      hasTrailingSlash = last === '.' || last === '..' || last === '';
    } else {
      hasTrailingSlash = false;
    }

    var up = 0;
    for (var i = fromParts.length; i >= 0; i--) {
      var part = fromParts[i];

      if (part === '.') {
        spliceOne(fromParts, i);
      } else if (part === '..') {
        spliceOne(fromParts, i);
        up++;
      } else if (up) {
        spliceOne(fromParts, i);
        up--;
      }
    }

    if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

    if (
      mustEndAbs &&
      fromParts[0] !== '' &&
      (!fromParts[0] || !isAbsolute(fromParts[0]))
    )
      fromParts.unshift('');

    var result = fromParts.join('/');

    if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

    return result;
  }

  function valueOf(obj) {
    return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
  }

  function valueEqual(a, b) {
    // Test for strict equality first.
    if (a === b) return true;

    // Otherwise, if either of them == null they are not equal.
    if (a == null || b == null) return false;

    if (Array.isArray(a)) {
      return (
        Array.isArray(b) &&
        a.length === b.length &&
        a.every(function(item, index) {
          return valueEqual(item, b[index]);
        })
      );
    }

    if (typeof a === 'object' || typeof b === 'object') {
      var aValue = valueOf(a);
      var bValue = valueOf(b);

      if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

      return Object.keys(Object.assign({}, a, b)).every(function(key) {
        return valueEqual(a[key], b[key]);
      });
    }

    return false;
  }

  var prefix = 'Invariant failed';
  function invariant(condition, message) {
      if (condition) {
          return;
      }
      {
          throw new Error(prefix);
      }
  }

  function addLeadingSlash(path) {
    return path.charAt(0) === '/' ? path : '/' + path;
  }
  function stripLeadingSlash(path) {
    return path.charAt(0) === '/' ? path.substr(1) : path;
  }
  function hasBasename(path, prefix) {
    return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
  }
  function stripBasename(path, prefix) {
    return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
  }
  function stripTrailingSlash(path) {
    return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
  }
  function parsePath(path) {
    var pathname = path || '/';
    var search = '';
    var hash = '';
    var hashIndex = pathname.indexOf('#');

    if (hashIndex !== -1) {
      hash = pathname.substr(hashIndex);
      pathname = pathname.substr(0, hashIndex);
    }

    var searchIndex = pathname.indexOf('?');

    if (searchIndex !== -1) {
      search = pathname.substr(searchIndex);
      pathname = pathname.substr(0, searchIndex);
    }

    return {
      pathname: pathname,
      search: search === '?' ? '' : search,
      hash: hash === '#' ? '' : hash
    };
  }
  function createPath(location) {
    var pathname = location.pathname,
        search = location.search,
        hash = location.hash;
    var path = pathname || '/';
    if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
    if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
    return path;
  }

  function createLocation(path, state, key, currentLocation) {
    var location;

    if (typeof path === 'string') {
      // Two-arg form: push(path, state)
      location = parsePath(path);
      location.state = state;
    } else {
      // One-arg form: push(location)
      location = _extends({}, path);
      if (location.pathname === undefined) location.pathname = '';

      if (location.search) {
        if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
      } else {
        location.search = '';
      }

      if (location.hash) {
        if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
      } else {
        location.hash = '';
      }

      if (state !== undefined && location.state === undefined) location.state = state;
    }

    try {
      location.pathname = decodeURI(location.pathname);
    } catch (e) {
      if (e instanceof URIError) {
        throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
      } else {
        throw e;
      }
    }

    if (key) location.key = key;

    if (currentLocation) {
      // Resolve incomplete/relative pathname relative to current location.
      if (!location.pathname) {
        location.pathname = currentLocation.pathname;
      } else if (location.pathname.charAt(0) !== '/') {
        location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
      }
    } else {
      // When there is no prior location and pathname is empty, set it to /
      if (!location.pathname) {
        location.pathname = '/';
      }
    }

    return location;
  }
  function locationsAreEqual(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
  }

  function createTransitionManager() {
    var prompt = null;

    function setPrompt(nextPrompt) {
      prompt = nextPrompt;
      return function () {
        if (prompt === nextPrompt) prompt = null;
      };
    }

    function confirmTransitionTo(location, action, getUserConfirmation, callback) {
      // TODO: If another transition starts while we're still confirming
      // the previous one, we may end up in a weird state. Figure out the
      // best way to handle this.
      if (prompt != null) {
        var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

        if (typeof result === 'string') {
          if (typeof getUserConfirmation === 'function') {
            getUserConfirmation(result, callback);
          } else {
            callback(true);
          }
        } else {
          // Return false from a transition hook to cancel the transition.
          callback(result !== false);
        }
      } else {
        callback(true);
      }
    }

    var listeners = [];

    function appendListener(fn) {
      var isActive = true;

      function listener() {
        if (isActive) fn.apply(void 0, arguments);
      }

      listeners.push(listener);
      return function () {
        isActive = false;
        listeners = listeners.filter(function (item) {
          return item !== listener;
        });
      };
    }

    function notifyListeners() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      listeners.forEach(function (listener) {
        return listener.apply(void 0, args);
      });
    }

    return {
      setPrompt: setPrompt,
      confirmTransitionTo: confirmTransitionTo,
      appendListener: appendListener,
      notifyListeners: notifyListeners
    };
  }

  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  function getConfirmation(message, callback) {
    callback(window.confirm(message)); // eslint-disable-line no-alert
  }
  /**
   * Returns true if the HTML5 history API is supported. Taken from Modernizr.
   *
   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
   * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
   */

  function supportsHistory() {
    var ua = window.navigator.userAgent;
    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
    return window.history && 'pushState' in window.history;
  }
  /**
   * Returns true if browser fires popstate on hash change.
   * IE10 and IE11 do not.
   */

  function supportsPopStateOnHashChange() {
    return window.navigator.userAgent.indexOf('Trident') === -1;
  }
  /**
   * Returns false if using go(n) with hash history causes a full page reload.
   */

  function supportsGoWithoutReloadUsingHash() {
    return window.navigator.userAgent.indexOf('Firefox') === -1;
  }
  /**
   * Returns true if a given popstate event is an extraneous WebKit event.
   * Accounts for the fact that Chrome on iOS fires real popstate events
   * containing undefined state when pressing the back button.
   */

  function isExtraneousPopstateEvent(event) {
    return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
  }

  var PopStateEvent = 'popstate';
  var HashChangeEvent = 'hashchange';

  function getHistoryState() {
    try {
      return window.history.state || {};
    } catch (e) {
      // IE 11 sometimes throws when accessing window.history.state
      // See https://github.com/ReactTraining/history/pull/289
      return {};
    }
  }
  /**
   * Creates a history object that uses the HTML5 history API including
   * pushState, replaceState, and the popstate event.
   */


  function createBrowserHistory(props) {
    if (props === void 0) {
      props = {};
    }

    !canUseDOM ?  invariant(false) : void 0;
    var globalHistory = window.history;
    var canUseHistory = supportsHistory();
    var needsHashChangeListener = !supportsPopStateOnHashChange();
    var _props = props,
        _props$forceRefresh = _props.forceRefresh,
        forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
        _props$getUserConfirm = _props.getUserConfirmation,
        getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
        _props$keyLength = _props.keyLength,
        keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
    var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

    function getDOMLocation(historyState) {
      var _ref = historyState || {},
          key = _ref.key,
          state = _ref.state;

      var _window$location = window.location,
          pathname = _window$location.pathname,
          search = _window$location.search,
          hash = _window$location.hash;
      var path = pathname + search + hash;
      if (basename) path = stripBasename(path, basename);
      return createLocation(path, state, key);
    }

    function createKey() {
      return Math.random().toString(36).substr(2, keyLength);
    }

    var transitionManager = createTransitionManager();

    function setState(nextState) {
      _extends(history, nextState);

      history.length = globalHistory.length;
      transitionManager.notifyListeners(history.location, history.action);
    }

    function handlePopState(event) {
      // Ignore extraneous popstate events in WebKit.
      if (isExtraneousPopstateEvent(event)) return;
      handlePop(getDOMLocation(event.state));
    }

    function handleHashChange() {
      handlePop(getDOMLocation(getHistoryState()));
    }

    var forceNextPop = false;

    function handlePop(location) {
      if (forceNextPop) {
        forceNextPop = false;
        setState();
      } else {
        var action = 'POP';
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({
              action: action,
              location: location
            });
          } else {
            revertPop(location);
          }
        });
      }
    }

    function revertPop(fromLocation) {
      var toLocation = history.location; // TODO: We could probably make this more reliable by
      // keeping a list of keys we've seen in sessionStorage.
      // Instead, we just default to 0 for keys we don't know.

      var toIndex = allKeys.indexOf(toLocation.key);
      if (toIndex === -1) toIndex = 0;
      var fromIndex = allKeys.indexOf(fromLocation.key);
      if (fromIndex === -1) fromIndex = 0;
      var delta = toIndex - fromIndex;

      if (delta) {
        forceNextPop = true;
        go(delta);
      }
    }

    var initialLocation = getDOMLocation(getHistoryState());
    var allKeys = [initialLocation.key]; // Public interface

    function createHref(location) {
      return basename + createPath(location);
    }

    function push(path, state) {
      var action = 'PUSH';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var href = createHref(location);
        var key = location.key,
            state = location.state;

        if (canUseHistory) {
          globalHistory.pushState({
            key: key,
            state: state
          }, null, href);

          if (forceRefresh) {
            window.location.href = href;
          } else {
            var prevIndex = allKeys.indexOf(history.location.key);
            var nextKeys = allKeys.slice(0, prevIndex + 1);
            nextKeys.push(location.key);
            allKeys = nextKeys;
            setState({
              action: action,
              location: location
            });
          }
        } else {
          window.location.href = href;
        }
      });
    }

    function replace(path, state) {
      var action = 'REPLACE';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var href = createHref(location);
        var key = location.key,
            state = location.state;

        if (canUseHistory) {
          globalHistory.replaceState({
            key: key,
            state: state
          }, null, href);

          if (forceRefresh) {
            window.location.replace(href);
          } else {
            var prevIndex = allKeys.indexOf(history.location.key);
            if (prevIndex !== -1) allKeys[prevIndex] = location.key;
            setState({
              action: action,
              location: location
            });
          }
        } else {
          window.location.replace(href);
        }
      });
    }

    function go(n) {
      globalHistory.go(n);
    }

    function goBack() {
      go(-1);
    }

    function goForward() {
      go(1);
    }

    var listenerCount = 0;

    function checkDOMListeners(delta) {
      listenerCount += delta;

      if (listenerCount === 1 && delta === 1) {
        window.addEventListener(PopStateEvent, handlePopState);
        if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
      } else if (listenerCount === 0) {
        window.removeEventListener(PopStateEvent, handlePopState);
        if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
      }
    }

    var isBlocked = false;

    function block(prompt) {
      if (prompt === void 0) {
        prompt = false;
      }

      var unblock = transitionManager.setPrompt(prompt);

      if (!isBlocked) {
        checkDOMListeners(1);
        isBlocked = true;
      }

      return function () {
        if (isBlocked) {
          isBlocked = false;
          checkDOMListeners(-1);
        }

        return unblock();
      };
    }

    function listen(listener) {
      var unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);
      return function () {
        checkDOMListeners(-1);
        unlisten();
      };
    }

    var history = {
      length: globalHistory.length,
      action: 'POP',
      location: initialLocation,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      block: block,
      listen: listen
    };
    return history;
  }

  var HashChangeEvent$1 = 'hashchange';
  var HashPathCoders = {
    hashbang: {
      encodePath: function encodePath(path) {
        return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
      },
      decodePath: function decodePath(path) {
        return path.charAt(0) === '!' ? path.substr(1) : path;
      }
    },
    noslash: {
      encodePath: stripLeadingSlash,
      decodePath: addLeadingSlash
    },
    slash: {
      encodePath: addLeadingSlash,
      decodePath: addLeadingSlash
    }
  };

  function stripHash(url) {
    var hashIndex = url.indexOf('#');
    return hashIndex === -1 ? url : url.slice(0, hashIndex);
  }

  function getHashPath() {
    // We can't use window.location.hash here because it's not
    // consistent across browsers - Firefox will pre-decode it!
    var href = window.location.href;
    var hashIndex = href.indexOf('#');
    return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
  }

  function pushHashPath(path) {
    window.location.hash = path;
  }

  function replaceHashPath(path) {
    window.location.replace(stripHash(window.location.href) + '#' + path);
  }

  function createHashHistory(props) {
    if (props === void 0) {
      props = {};
    }

    !canUseDOM ?  invariant(false) : void 0;
    var globalHistory = window.history;
    var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
    var _props = props,
        _props$getUserConfirm = _props.getUserConfirmation,
        getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
        _props$hashType = _props.hashType,
        hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
    var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
    var _HashPathCoders$hashT = HashPathCoders[hashType],
        encodePath = _HashPathCoders$hashT.encodePath,
        decodePath = _HashPathCoders$hashT.decodePath;

    function getDOMLocation() {
      var path = decodePath(getHashPath());
      if (basename) path = stripBasename(path, basename);
      return createLocation(path);
    }

    var transitionManager = createTransitionManager();

    function setState(nextState) {
      _extends(history, nextState);

      history.length = globalHistory.length;
      transitionManager.notifyListeners(history.location, history.action);
    }

    var forceNextPop = false;
    var ignorePath = null;

    function locationsAreEqual$$1(a, b) {
      return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
    }

    function handleHashChange() {
      var path = getHashPath();
      var encodedPath = encodePath(path);

      if (path !== encodedPath) {
        // Ensure we always have a properly-encoded hash.
        replaceHashPath(encodedPath);
      } else {
        var location = getDOMLocation();
        var prevLocation = history.location;
        if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

        if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

        ignorePath = null;
        handlePop(location);
      }
    }

    function handlePop(location) {
      if (forceNextPop) {
        forceNextPop = false;
        setState();
      } else {
        var action = 'POP';
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({
              action: action,
              location: location
            });
          } else {
            revertPop(location);
          }
        });
      }
    }

    function revertPop(fromLocation) {
      var toLocation = history.location; // TODO: We could probably make this more reliable by
      // keeping a list of paths we've seen in sessionStorage.
      // Instead, we just default to 0 for paths we don't know.

      var toIndex = allPaths.lastIndexOf(createPath(toLocation));
      if (toIndex === -1) toIndex = 0;
      var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
      if (fromIndex === -1) fromIndex = 0;
      var delta = toIndex - fromIndex;

      if (delta) {
        forceNextPop = true;
        go(delta);
      }
    } // Ensure the hash is encoded properly before doing anything else.


    var path = getHashPath();
    var encodedPath = encodePath(path);
    if (path !== encodedPath) replaceHashPath(encodedPath);
    var initialLocation = getDOMLocation();
    var allPaths = [createPath(initialLocation)]; // Public interface

    function createHref(location) {
      var baseTag = document.querySelector('base');
      var href = '';

      if (baseTag && baseTag.getAttribute('href')) {
        href = stripHash(window.location.href);
      }

      return href + '#' + encodePath(basename + createPath(location));
    }

    function push(path, state) {
      var action = 'PUSH';
      var location = createLocation(path, undefined, undefined, history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var path = createPath(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;

        if (hashChanged) {
          // We cannot tell if a hashchange was caused by a PUSH, so we'd
          // rather setState here and ignore the hashchange. The caveat here
          // is that other hash histories in the page will consider it a POP.
          ignorePath = path;
          pushHashPath(encodedPath);
          var prevIndex = allPaths.lastIndexOf(createPath(history.location));
          var nextPaths = allPaths.slice(0, prevIndex + 1);
          nextPaths.push(path);
          allPaths = nextPaths;
          setState({
            action: action,
            location: location
          });
        } else {
          setState();
        }
      });
    }

    function replace(path, state) {
      var action = 'REPLACE';
      var location = createLocation(path, undefined, undefined, history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var path = createPath(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;

        if (hashChanged) {
          // We cannot tell if a hashchange was caused by a REPLACE, so we'd
          // rather setState here and ignore the hashchange. The caveat here
          // is that other hash histories in the page will consider it a POP.
          ignorePath = path;
          replaceHashPath(encodedPath);
        }

        var prevIndex = allPaths.indexOf(createPath(history.location));
        if (prevIndex !== -1) allPaths[prevIndex] = path;
        setState({
          action: action,
          location: location
        });
      });
    }

    function go(n) {
      globalHistory.go(n);
    }

    function goBack() {
      go(-1);
    }

    function goForward() {
      go(1);
    }

    var listenerCount = 0;

    function checkDOMListeners(delta) {
      listenerCount += delta;

      if (listenerCount === 1 && delta === 1) {
        window.addEventListener(HashChangeEvent$1, handleHashChange);
      } else if (listenerCount === 0) {
        window.removeEventListener(HashChangeEvent$1, handleHashChange);
      }
    }

    var isBlocked = false;

    function block(prompt) {
      if (prompt === void 0) {
        prompt = false;
      }

      var unblock = transitionManager.setPrompt(prompt);

      if (!isBlocked) {
        checkDOMListeners(1);
        isBlocked = true;
      }

      return function () {
        if (isBlocked) {
          isBlocked = false;
          checkDOMListeners(-1);
        }

        return unblock();
      };
    }

    function listen(listener) {
      var unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);
      return function () {
        checkDOMListeners(-1);
        unlisten();
      };
    }

    var history = {
      length: globalHistory.length,
      action: 'POP',
      location: initialLocation,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      block: block,
      listen: listen
    };
    return history;
  }

  function clamp(n, lowerBound, upperBound) {
    return Math.min(Math.max(n, lowerBound), upperBound);
  }
  /**
   * Creates a history object that stores locations in memory.
   */


  function createMemoryHistory(props) {
    if (props === void 0) {
      props = {};
    }

    var _props = props,
        getUserConfirmation = _props.getUserConfirmation,
        _props$initialEntries = _props.initialEntries,
        initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
        _props$initialIndex = _props.initialIndex,
        initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
        _props$keyLength = _props.keyLength,
        keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
    var transitionManager = createTransitionManager();

    function setState(nextState) {
      _extends(history, nextState);

      history.length = history.entries.length;
      transitionManager.notifyListeners(history.location, history.action);
    }

    function createKey() {
      return Math.random().toString(36).substr(2, keyLength);
    }

    var index = clamp(initialIndex, 0, initialEntries.length - 1);
    var entries = initialEntries.map(function (entry) {
      return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
    }); // Public interface

    var createHref = createPath;

    function push(path, state) {
      var action = 'PUSH';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var prevIndex = history.index;
        var nextIndex = prevIndex + 1;
        var nextEntries = history.entries.slice(0);

        if (nextEntries.length > nextIndex) {
          nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
        } else {
          nextEntries.push(location);
        }

        setState({
          action: action,
          location: location,
          index: nextIndex,
          entries: nextEntries
        });
      });
    }

    function replace(path, state) {
      var action = 'REPLACE';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        history.entries[history.index] = location;
        setState({
          action: action,
          location: location
        });
      });
    }

    function go(n) {
      var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
      var action = 'POP';
      var location = history.entries[nextIndex];
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location,
            index: nextIndex
          });
        } else {
          // Mimic the behavior of DOM histories by
          // causing a render after a cancelled POP.
          setState();
        }
      });
    }

    function goBack() {
      go(-1);
    }

    function goForward() {
      go(1);
    }

    function canGo(n) {
      var nextIndex = history.index + n;
      return nextIndex >= 0 && nextIndex < history.entries.length;
    }

    function block(prompt) {
      if (prompt === void 0) {
        prompt = false;
      }

      return transitionManager.setPrompt(prompt);
    }

    function listen(listener) {
      return transitionManager.appendListener(listener);
    }

    var history = {
      length: entries.length,
      action: 'POP',
      location: entries[index],
      index: index,
      entries: entries,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      canGo: canGo,
      block: block,
      listen: listen
    };
    return history;
  }

  var MAX_SIGNED_31_BIT_INT = 1073741823;
  var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

  function getUniqueId() {
    var key = '__global_unique_id__';
    return commonjsGlobal$1[key] = (commonjsGlobal$1[key] || 0) + 1;
  }

  function objectIs(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }

  function createEventEmitter(value) {
    var handlers = [];
    return {
      on: function on(handler) {
        handlers.push(handler);
      },
      off: function off(handler) {
        handlers = handlers.filter(function (h) {
          return h !== handler;
        });
      },
      get: function get() {
        return value;
      },
      set: function set(newValue, changedBits) {
        value = newValue;
        handlers.forEach(function (handler) {
          return handler(value, changedBits);
        });
      }
    };
  }

  function onlyChild(children) {
    return Array.isArray(children) ? children[0] : children;
  }

  function createReactContext(defaultValue, calculateChangedBits) {
    var _Provider$childContex, _Consumer$contextType;

    var contextProp = '__create-react-context-' + getUniqueId() + '__';

    var Provider = /*#__PURE__*/function (_Component) {
      _inheritsLoose(Provider, _Component);

      function Provider() {
        var _this;

        _this = _Component.apply(this, arguments) || this;
        _this.emitter = createEventEmitter(_this.props.value);
        return _this;
      }

      var _proto = Provider.prototype;

      _proto.getChildContext = function getChildContext() {
        var _ref;

        return _ref = {}, _ref[contextProp] = this.emitter, _ref;
      };

      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
          var oldValue = this.props.value;
          var newValue = nextProps.value;
          var changedBits;

          if (objectIs(oldValue, newValue)) {
            changedBits = 0;
          } else {
            changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

            changedBits |= 0;

            if (changedBits !== 0) {
              this.emitter.set(nextProps.value, changedBits);
            }
          }
        }
      };

      _proto.render = function render() {
        return this.props.children;
      };

      return Provider;
    }(React.Component);

    Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = propTypes.object.isRequired, _Provider$childContex);

    var Consumer = /*#__PURE__*/function (_Component2) {
      _inheritsLoose(Consumer, _Component2);

      function Consumer() {
        var _this2;

        _this2 = _Component2.apply(this, arguments) || this;
        _this2.state = {
          value: _this2.getValue()
        };

        _this2.onUpdate = function (newValue, changedBits) {
          var observedBits = _this2.observedBits | 0;

          if ((observedBits & changedBits) !== 0) {
            _this2.setState({
              value: _this2.getValue()
            });
          }
        };

        return _this2;
      }

      var _proto2 = Consumer.prototype;

      _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var observedBits = nextProps.observedBits;
        this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
      };

      _proto2.componentDidMount = function componentDidMount() {
        if (this.context[contextProp]) {
          this.context[contextProp].on(this.onUpdate);
        }

        var observedBits = this.props.observedBits;
        this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
      };

      _proto2.componentWillUnmount = function componentWillUnmount() {
        if (this.context[contextProp]) {
          this.context[contextProp].off(this.onUpdate);
        }
      };

      _proto2.getValue = function getValue() {
        if (this.context[contextProp]) {
          return this.context[contextProp].get();
        } else {
          return defaultValue;
        }
      };

      _proto2.render = function render() {
        return onlyChild(this.props.children)(this.state.value);
      };

      return Consumer;
    }(React.Component);

    Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = propTypes.object, _Consumer$contextType);
    return {
      Provider: Provider,
      Consumer: Consumer
    };
  }

  var index = React__default.createContext || createReactContext;

  var isarray = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };

  /**
   * Expose `pathToRegexp`.
   */
  var pathToRegexp_1 = pathToRegexp;
  var parse_1 = parse;
  var compile_1 = compile;
  var tokensToFunction_1 = tokensToFunction;
  var tokensToRegExp_1 = tokensToRegExp;

  /**
   * The main path matching regexp utility.
   *
   * @type {RegExp}
   */
  var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
    // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
    '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
  ].join('|'), 'g');

  /**
   * Parse a string for the raw tokens.
   *
   * @param  {string}  str
   * @param  {Object=} options
   * @return {!Array}
   */
  function parse (str, options) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = '';
    var defaultDelimiter = options && options.delimiter || '/';
    var res;

    while ((res = PATH_REGEXP.exec(str)) != null) {
      var m = res[0];
      var escaped = res[1];
      var offset = res.index;
      path += str.slice(index, offset);
      index = offset + m.length;

      // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1];
        continue
      }

      var next = str[index];
      var prefix = res[2];
      var name = res[3];
      var capture = res[4];
      var group = res[5];
      var modifier = res[6];
      var asterisk = res[7];

      // Push the current path onto the tokens.
      if (path) {
        tokens.push(path);
        path = '';
      }

      var partial = prefix != null && next != null && next !== prefix;
      var repeat = modifier === '+' || modifier === '*';
      var optional = modifier === '?' || modifier === '*';
      var delimiter = res[2] || defaultDelimiter;
      var pattern = capture || group;

      tokens.push({
        name: name || key++,
        prefix: prefix || '',
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        partial: partial,
        asterisk: !!asterisk,
        pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
      });
    }

    // Match any characters still remaining.
    if (index < str.length) {
      path += str.substr(index);
    }

    // If the path exists, push it onto the end.
    if (path) {
      tokens.push(path);
    }

    return tokens
  }

  /**
   * Compile a string to a template function for the path.
   *
   * @param  {string}             str
   * @param  {Object=}            options
   * @return {!function(Object=, Object=)}
   */
  function compile (str, options) {
    return tokensToFunction(parse(str, options), options)
  }

  /**
   * Prettier encoding of URI path segments.
   *
   * @param  {string}
   * @return {string}
   */
  function encodeURIComponentPretty (str) {
    return encodeURI(str).replace(/[\/?#]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase()
    })
  }

  /**
   * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
   *
   * @param  {string}
   * @return {string}
   */
  function encodeAsterisk (str) {
    return encodeURI(str).replace(/[?#]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase()
    })
  }

  /**
   * Expose a method for transforming tokens into the path function.
   */
  function tokensToFunction (tokens, options) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length);

    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'object') {
        matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
      }
    }

    return function (obj, opts) {
      var path = '';
      var data = obj || {};
      var options = opts || {};
      var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          path += token;

          continue
        }

        var value = data[token.name];
        var segment;

        if (value == null) {
          if (token.optional) {
            // Prepend partial segment prefixes.
            if (token.partial) {
              path += token.prefix;
            }

            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to be defined')
          }
        }

        if (isarray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
          }

          if (value.length === 0) {
            if (token.optional) {
              continue
            } else {
              throw new TypeError('Expected "' + token.name + '" to not be empty')
            }
          }

          for (var j = 0; j < value.length; j++) {
            segment = encode(value[j]);

            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
            }

            path += (j === 0 ? token.prefix : token.delimiter) + segment;
          }

          continue
        }

        segment = token.asterisk ? encodeAsterisk(value) : encode(value);

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
        }

        path += token.prefix + segment;
      }

      return path
    }
  }

  /**
   * Escape a regular expression string.
   *
   * @param  {string} str
   * @return {string}
   */
  function escapeString (str) {
    return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
  }

  /**
   * Escape the capturing group by escaping special characters and meaning.
   *
   * @param  {string} group
   * @return {string}
   */
  function escapeGroup (group) {
    return group.replace(/([=!:$\/()])/g, '\\$1')
  }

  /**
   * Attach the keys as a property of the regexp.
   *
   * @param  {!RegExp} re
   * @param  {Array}   keys
   * @return {!RegExp}
   */
  function attachKeys (re, keys) {
    re.keys = keys;
    return re
  }

  /**
   * Get the flags for a regexp from the options.
   *
   * @param  {Object} options
   * @return {string}
   */
  function flags (options) {
    return options && options.sensitive ? '' : 'i'
  }

  /**
   * Pull out keys from a regexp.
   *
   * @param  {!RegExp} path
   * @param  {!Array}  keys
   * @return {!RegExp}
   */
  function regexpToRegexp (path, keys) {
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);

    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          partial: false,
          asterisk: false,
          pattern: null
        });
      }
    }

    return attachKeys(path, keys)
  }

  /**
   * Transform an array into a regexp.
   *
   * @param  {!Array}  path
   * @param  {Array}   keys
   * @param  {!Object} options
   * @return {!RegExp}
   */
  function arrayToRegexp (path, keys, options) {
    var parts = [];

    for (var i = 0; i < path.length; i++) {
      parts.push(pathToRegexp(path[i], keys, options).source);
    }

    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

    return attachKeys(regexp, keys)
  }

  /**
   * Create a path regexp from string input.
   *
   * @param  {string}  path
   * @param  {!Array}  keys
   * @param  {!Object} options
   * @return {!RegExp}
   */
  function stringToRegexp (path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options)
  }

  /**
   * Expose a function for taking tokens and returning a RegExp.
   *
   * @param  {!Array}          tokens
   * @param  {(Array|Object)=} keys
   * @param  {Object=}         options
   * @return {!RegExp}
   */
  function tokensToRegExp (tokens, keys, options) {
    if (!isarray(keys)) {
      options = /** @type {!Object} */ (keys || options);
      keys = [];
    }

    options = options || {};

    var strict = options.strict;
    var end = options.end !== false;
    var route = '';

    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        route += escapeString(token);
      } else {
        var prefix = escapeString(token.prefix);
        var capture = '(?:' + token.pattern + ')';

        keys.push(token);

        if (token.repeat) {
          capture += '(?:' + prefix + capture + ')*';
        }

        if (token.optional) {
          if (!token.partial) {
            capture = '(?:' + prefix + '(' + capture + '))?';
          } else {
            capture = prefix + '(' + capture + ')?';
          }
        } else {
          capture = prefix + '(' + capture + ')';
        }

        route += capture;
      }
    }

    var delimiter = escapeString(options.delimiter || '/');
    var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

    // In non-strict mode we allow a slash at the end of match. If the path to
    // match already ends with a slash, we remove it for consistency. The slash
    // is valid at the end of a path match, not in the middle. This is important
    // in non-ending mode, where "/test/" shouldn't match "/test//route".
    if (!strict) {
      route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
    }

    if (end) {
      route += '$';
    } else {
      // In non-ending mode, we need the capturing groups to match as much as
      // possible by using a positive lookahead to the end or next path segment.
      route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
    }

    return attachKeys(new RegExp('^' + route, flags(options)), keys)
  }

  /**
   * Normalize the given path string, returning a regular expression.
   *
   * An empty array can be passed in for the keys, which will hold the
   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
   *
   * @param  {(string|RegExp|Array)} path
   * @param  {(Array|Object)=}       keys
   * @param  {Object=}               options
   * @return {!RegExp}
   */
  function pathToRegexp (path, keys, options) {
    if (!isarray(keys)) {
      options = /** @type {!Object} */ (keys || options);
      keys = [];
    }

    options = options || {};

    if (path instanceof RegExp) {
      return regexpToRegexp(path, /** @type {!Array} */ (keys))
    }

    if (isarray(path)) {
      return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
    }

    return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
  }
  pathToRegexp_1.parse = parse_1;
  pathToRegexp_1.compile = compile_1;
  pathToRegexp_1.tokensToFunction = tokensToFunction_1;
  pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

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

  var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  // TODO: Replace with React.createContext once we can assume React 16+

  var createNamedContext = function createNamedContext(name) {
    var context = index();
    context.displayName = name;
    return context;
  };

  var historyContext =
  /*#__PURE__*/
  createNamedContext("Router-History");

  // TODO: Replace with React.createContext once we can assume React 16+

  var createNamedContext$1 = function createNamedContext(name) {
    var context = index();
    context.displayName = name;
    return context;
  };

  var context =
  /*#__PURE__*/
  createNamedContext$1("Router");

  /**
   * The public API for putting history on context.
   */

  var Router =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Router, _React$Component);

    Router.computeRootMatch = function computeRootMatch(pathname) {
      return {
        path: "/",
        url: "/",
        params: {},
        isExact: pathname === "/"
      };
    };

    function Router(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.state = {
        location: props.history.location
      }; // This is a bit of a hack. We have to start listening for location
      // changes here in the constructor in case there are any <Redirect>s
      // on the initial render. If there are, they will replace/push when
      // they mount and since cDM fires in children before parents, we may
      // get a new location before the <Router> is mounted.

      _this._isMounted = false;
      _this._pendingLocation = null;

      if (!props.staticContext) {
        _this.unlisten = props.history.listen(function (location) {
          if (_this._isMounted) {
            _this.setState({
              location: location
            });
          } else {
            _this._pendingLocation = location;
          }
        });
      }

      return _this;
    }

    var _proto = Router.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this._isMounted = true;

      if (this._pendingLocation) {
        this.setState({
          location: this._pendingLocation
        });
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this.unlisten) this.unlisten();
    };

    _proto.render = function render() {
      return React__default.createElement(context.Provider, {
        value: {
          history: this.props.history,
          location: this.state.location,
          match: Router.computeRootMatch(this.state.location.pathname),
          staticContext: this.props.staticContext
        }
      }, React__default.createElement(historyContext.Provider, {
        children: this.props.children || null,
        value: this.props.history
      }));
    };

    return Router;
  }(React__default.Component);

  /**
   * The public API for a <Router> that stores location in memory.
   */

  var MemoryRouter =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(MemoryRouter, _React$Component);

    function MemoryRouter() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.history = createMemoryHistory(_this.props);
      return _this;
    }

    var _proto = MemoryRouter.prototype;

    _proto.render = function render() {
      return React__default.createElement(Router, {
        history: this.history,
        children: this.props.children
      });
    };

    return MemoryRouter;
  }(React__default.Component);

  var Lifecycle =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Lifecycle, _React$Component);

    function Lifecycle() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Lifecycle.prototype;

    _proto.componentDidMount = function componentDidMount() {
      if (this.props.onMount) this.props.onMount.call(this, this);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this.props.onUnmount) this.props.onUnmount.call(this, this);
    };

    _proto.render = function render() {
      return null;
    };

    return Lifecycle;
  }(React__default.Component);

  var cache = {};
  var cacheLimit = 10000;
  var cacheCount = 0;

  function compilePath(path) {
    if (cache[path]) return cache[path];
    var generator = pathToRegexp_1.compile(path);

    if (cacheCount < cacheLimit) {
      cache[path] = generator;
      cacheCount++;
    }

    return generator;
  }
  /**
   * Public API for generating a URL pathname from a path and parameters.
   */


  function generatePath(path, params) {
    if (path === void 0) {
      path = "/";
    }

    if (params === void 0) {
      params = {};
    }

    return path === "/" ? path : compilePath(path)(params, {
      pretty: true
    });
  }

  /**
   * The public API for navigating programmatically with a component.
   */

  function Redirect(_ref) {
    var computedMatch = _ref.computedMatch,
        to = _ref.to,
        _ref$push = _ref.push,
        push = _ref$push === void 0 ? false : _ref$push;
    return React__default.createElement(context.Consumer, null, function (context) {
      !context ?  invariant(false) : void 0;
      var history = context.history,
          staticContext = context.staticContext;
      var method = push ? history.push : history.replace;
      var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
        pathname: generatePath(to.pathname, computedMatch.params)
      }) : to); // When rendering in a static context,
      // set the new location immediately.

      if (staticContext) {
        method(location);
        return null;
      }

      return React__default.createElement(Lifecycle, {
        onMount: function onMount() {
          method(location);
        },
        onUpdate: function onUpdate(self, prevProps) {
          var prevLocation = createLocation(prevProps.to);

          if (!locationsAreEqual(prevLocation, _extends({}, location, {
            key: prevLocation.key
          }))) {
            method(location);
          }
        },
        to: to
      });
    });
  }

  var cache$1 = {};
  var cacheLimit$1 = 10000;
  var cacheCount$1 = 0;

  function compilePath$1(path, options) {
    var cacheKey = "" + options.end + options.strict + options.sensitive;
    var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
    if (pathCache[path]) return pathCache[path];
    var keys = [];
    var regexp = pathToRegexp_1(path, keys, options);
    var result = {
      regexp: regexp,
      keys: keys
    };

    if (cacheCount$1 < cacheLimit$1) {
      pathCache[path] = result;
      cacheCount$1++;
    }

    return result;
  }
  /**
   * Public API for matching a URL pathname to a path.
   */


  function matchPath(pathname, options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof options === "string" || Array.isArray(options)) {
      options = {
        path: options
      };
    }

    var _options = options,
        path = _options.path,
        _options$exact = _options.exact,
        exact = _options$exact === void 0 ? false : _options$exact,
        _options$strict = _options.strict,
        strict = _options$strict === void 0 ? false : _options$strict,
        _options$sensitive = _options.sensitive,
        sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
    var paths = [].concat(path);
    return paths.reduce(function (matched, path) {
      if (!path && path !== "") return null;
      if (matched) return matched;

      var _compilePath = compilePath$1(path, {
        end: exact,
        strict: strict,
        sensitive: sensitive
      }),
          regexp = _compilePath.regexp,
          keys = _compilePath.keys;

      var match = regexp.exec(pathname);
      if (!match) return null;
      var url = match[0],
          values = match.slice(1);
      var isExact = pathname === url;
      if (exact && !isExact) return null;
      return {
        path: path,
        // the path used to match
        url: path === "/" && url === "" ? "/" : url,
        // the matched portion of the URL
        isExact: isExact,
        // whether or not we matched exactly
        params: keys.reduce(function (memo, key, index) {
          memo[key.name] = values[index];
          return memo;
        }, {})
      };
    }, null);
  }
  /**
   * The public API for matching a single path and rendering.
   */


  var Route =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Route, _React$Component);

    function Route() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Route.prototype;

    _proto.render = function render() {
      var _this = this;

      return React__default.createElement(context.Consumer, null, function (context$1) {
        !context$1 ?  invariant(false) : void 0;
        var location = _this.props.location || context$1.location;
        var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
        : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

        var props = _extends({}, context$1, {
          location: location,
          match: match
        });

        var _this$props = _this.props,
            children = _this$props.children,
            component = _this$props.component,
            render = _this$props.render; // Preact uses an empty array as children by
        // default, so use null if that's the case.

        if (Array.isArray(children) && children.length === 0) {
          children = null;
        }

        return React__default.createElement(context.Provider, {
          value: props
        }, props.match ? children ? typeof children === "function" ?  children(props) : children : component ? React__default.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  children(props) : null);
      });
    };

    return Route;
  }(React__default.Component);

  function addLeadingSlash$1(path) {
    return path.charAt(0) === "/" ? path : "/" + path;
  }

  function addBasename(basename, location) {
    if (!basename) return location;
    return _extends({}, location, {
      pathname: addLeadingSlash$1(basename) + location.pathname
    });
  }

  function stripBasename$1(basename, location) {
    if (!basename) return location;
    var base = addLeadingSlash$1(basename);
    if (location.pathname.indexOf(base) !== 0) return location;
    return _extends({}, location, {
      pathname: location.pathname.substr(base.length)
    });
  }

  function createURL(location) {
    return typeof location === "string" ? location : createPath(location);
  }

  function staticHandler(methodName) {
    return function () {
        invariant(false) ;
    };
  }

  function noop() {}
  /**
   * The public top-level API for a "static" <Router>, so-called because it
   * can't actually change the current location. Instead, it just records
   * location changes in a context object. Useful mainly in testing and
   * server-rendering scenarios.
   */


  var StaticRouter =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(StaticRouter, _React$Component);

    function StaticRouter() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      _this.handlePush = function (location) {
        return _this.navigateTo(location, "PUSH");
      };

      _this.handleReplace = function (location) {
        return _this.navigateTo(location, "REPLACE");
      };

      _this.handleListen = function () {
        return noop;
      };

      _this.handleBlock = function () {
        return noop;
      };

      return _this;
    }

    var _proto = StaticRouter.prototype;

    _proto.navigateTo = function navigateTo(location, action) {
      var _this$props = this.props,
          _this$props$basename = _this$props.basename,
          basename = _this$props$basename === void 0 ? "" : _this$props$basename,
          _this$props$context = _this$props.context,
          context = _this$props$context === void 0 ? {} : _this$props$context;
      context.action = action;
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    };

    _proto.render = function render() {
      var _this$props2 = this.props,
          _this$props2$basename = _this$props2.basename,
          basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
          _this$props2$context = _this$props2.context,
          context = _this$props2$context === void 0 ? {} : _this$props2$context,
          _this$props2$location = _this$props2.location,
          location = _this$props2$location === void 0 ? "/" : _this$props2$location,
          rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);

      var history = {
        createHref: function createHref(path) {
          return addLeadingSlash$1(basename + createURL(path));
        },
        action: "POP",
        location: stripBasename$1(basename, createLocation(location)),
        push: this.handlePush,
        replace: this.handleReplace,
        go: staticHandler(),
        goBack: staticHandler(),
        goForward: staticHandler(),
        listen: this.handleListen,
        block: this.handleBlock
      };
      return React__default.createElement(Router, _extends({}, rest, {
        history: history,
        staticContext: context
      }));
    };

    return StaticRouter;
  }(React__default.Component);

  /**
   * The public API for rendering the first <Route> that matches.
   */

  var Switch =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Switch, _React$Component);

    function Switch() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Switch.prototype;

    _proto.render = function render() {
      var _this = this;

      return React__default.createElement(context.Consumer, null, function (context) {
        !context ?  invariant(false) : void 0;
        var location = _this.props.location || context.location;
        var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
        // here because toArray adds keys to all child elements and we do not want
        // to trigger an unmount/remount for two <Route>s that render the same
        // component at different URLs.

        React__default.Children.forEach(_this.props.children, function (child) {
          if (match == null && React__default.isValidElement(child)) {
            element = child;
            var path = child.props.path || child.props.from;
            match = path ? matchPath(location.pathname, _extends({}, child.props, {
              path: path
            })) : context.match;
          }
        });
        return match ? React__default.cloneElement(element, {
          location: location,
          computedMatch: match
        }) : null;
      });
    };

    return Switch;
  }(React__default.Component);

  var useContext = React__default.useContext;

  /**
   * The public API for a <Router> that uses HTML5 history.
   */

  var BrowserRouter =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(BrowserRouter, _React$Component);

    function BrowserRouter() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.history = createBrowserHistory(_this.props);
      return _this;
    }

    var _proto = BrowserRouter.prototype;

    _proto.render = function render() {
      return React__default.createElement(Router, {
        history: this.history,
        children: this.props.children
      });
    };

    return BrowserRouter;
  }(React__default.Component);

  /**
   * The public API for a <Router> that uses window.location.hash.
   */

  var HashRouter =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(HashRouter, _React$Component);

    function HashRouter() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.history = createHashHistory(_this.props);
      return _this;
    }

    var _proto = HashRouter.prototype;

    _proto.render = function render() {
      return React__default.createElement(Router, {
        history: this.history,
        children: this.props.children
      });
    };

    return HashRouter;
  }(React__default.Component);

  var resolveToLocation = function resolveToLocation(to, currentLocation) {
    return typeof to === "function" ? to(currentLocation) : to;
  };
  var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
    return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
  };

  var forwardRefShim = function forwardRefShim(C) {
    return C;
  };

  var forwardRef = React__default.forwardRef;

  if (typeof forwardRef === "undefined") {
    forwardRef = forwardRefShim;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
    var innerRef = _ref.innerRef,
        navigate = _ref.navigate,
        _onClick = _ref.onClick,
        rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);

    var target = rest.target;

    var props = _extends({}, rest, {
      onClick: function onClick(event) {
        try {
          if (_onClick) _onClick(event);
        } catch (ex) {
          event.preventDefault();
          throw ex;
        }

        if (!event.defaultPrevented && // onClick prevented default
        event.button === 0 && ( // ignore everything but left clicks
        !target || target === "_self") && // let browser handle "target=_blank" etc.
        !isModifiedEvent(event) // ignore clicks with modifier keys
        ) {
            event.preventDefault();
            navigate();
          }
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.ref = innerRef;
    }
    /* eslint-disable-next-line jsx-a11y/anchor-has-content */


    return React__default.createElement("a", props);
  });
  /**
   * The public API for rendering a history-aware <a>.
   */


  var Link = forwardRef(function (_ref2, forwardedRef) {
    var _ref2$component = _ref2.component,
        component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
        replace = _ref2.replace,
        to = _ref2.to,
        innerRef = _ref2.innerRef,
        rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);

    return React__default.createElement(context.Consumer, null, function (context) {
      !context ?  invariant(false) : void 0;
      var history = context.history;
      var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
      var href = location ? history.createHref(location) : "";

      var props = _extends({}, rest, {
        href: href,
        navigate: function navigate() {
          var location = resolveToLocation(to, context.location);
          var method = replace ? history.replace : history.push;
          method(location);
        }
      }); // React 15 compat


      if (forwardRefShim !== forwardRef) {
        props.ref = forwardedRef || innerRef;
      } else {
        props.innerRef = innerRef;
      }

      return React__default.createElement(component, props);
    });
  });

  var forwardRefShim$1 = function forwardRefShim(C) {
    return C;
  };

  var forwardRef$1 = React__default.forwardRef;

  if (typeof forwardRef$1 === "undefined") {
    forwardRef$1 = forwardRefShim$1;
  }

  function joinClassnames() {
    for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
      classnames[_key] = arguments[_key];
    }

    return classnames.filter(function (i) {
      return i;
    }).join(" ");
  }
  /**
   * A <Link> wrapper that knows if it's "active" or not.
   */


  var NavLink = forwardRef$1(function (_ref, forwardedRef) {
    var _ref$ariaCurrent = _ref["aria-current"],
        ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
        _ref$activeClassName = _ref.activeClassName,
        activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
        activeStyle = _ref.activeStyle,
        classNameProp = _ref.className,
        exact = _ref.exact,
        isActiveProp = _ref.isActive,
        locationProp = _ref.location,
        sensitive = _ref.sensitive,
        strict = _ref.strict,
        styleProp = _ref.style,
        to = _ref.to,
        innerRef = _ref.innerRef,
        rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

    return React__default.createElement(context.Consumer, null, function (context) {
      !context ?  invariant(false) : void 0;
      var currentLocation = locationProp || context.location;
      var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
      var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

      var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      var match = escapedPath ? matchPath(currentLocation.pathname, {
        path: escapedPath,
        exact: exact,
        sensitive: sensitive,
        strict: strict
      }) : null;
      var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
      var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
      var style = isActive ? _extends({}, styleProp, {}, activeStyle) : styleProp;

      var props = _extends({
        "aria-current": isActive && ariaCurrent || null,
        className: className,
        style: style,
        to: toLocation
      }, rest); // React 15 compat


      if (forwardRefShim$1 !== forwardRef$1) {
        props.ref = forwardedRef || innerRef;
      } else {
        props.innerRef = innerRef;
      }

      return React__default.createElement(Link, props);
    });
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames () {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg) && arg.length) {
  				var inner = classNames.apply(null, arg);
  				if (inner) {
  					classes.push(inner);
  				}
  			} else if (argType === 'object') {
  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes.push(key);
  					}
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if ( module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var ConfigContext = React__default.createContext({
    getPrefixCls: function getPrefixCls(suffixCls) {
      return "serein-".concat(suffixCls);
    }
  });
  var Provider = ConfigContext.Provider,
      Consumer = ConfigContext.Consumer;

  var ConfigProvider = /*#__PURE__*/function (_React$Component) {
    _inherits(ConfigProvider, _React$Component);

    var _super = _createSuper(ConfigProvider);

    function ConfigProvider() {
      var _this;

      _classCallCheck(this, ConfigProvider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "renderProvider", function (context) {
        var _this$props = _this.props,
            children = _this$props.children,
            value = _this$props.value;

        var config = _objectSpread(_objectSpread({}, context), value);

        return /*#__PURE__*/React__default.createElement(Provider, {
          value: config
        }, children);
      });

      return _this;
    }

    _createClass(ConfigProvider, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return /*#__PURE__*/React__default.createElement(Consumer, null, function (context) {
          return _this2.renderProvider(context);
        });
      }
    }]);

    return ConfigProvider;
  }(React__default.Component);

  function _objectWithoutPropertiesLoose$1(source, excluded) {
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

  var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose$1;

  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var inheritsLoose = _inheritsLoose$1;

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

  function q$1(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
  var t$1="function"===typeof Symbol&&Symbol.for,aa=t$1?Symbol.for("react.portal"):60106,u=t$1?Symbol.for("react.fragment"):60107,ba=t$1?Symbol.for("react.strict_mode"):60108,ca=t$1?Symbol.for("react.profiler"):60114,v$1=t$1?Symbol.for("react.provider"):60109,da=t$1?Symbol.for("react.context"):60110,ea=t$1?Symbol.for("react.concurrent_mode"):60111,fa=t$1?Symbol.for("react.forward_ref"):60112,B=t$1?Symbol.for("react.suspense"):60113,ha=t$1?Symbol.for("react.suspense_list"):60120,ia=t$1?Symbol.for("react.memo"):60115,ja=t$1?Symbol.for("react.lazy"):
  60116,ka=t$1?Symbol.for("react.block"):60121,la=t$1?Symbol.for("react.fundamental"):60117,ma=t$1?Symbol.for("react.scope"):60119;function na(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(c){0===a._status&&(c=c.default,a._status=1,a._result=c);},function(c){0===a._status&&(a._status=2,a._result=c);});}}
  function C(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case u:return "Fragment";case aa:return "Portal";case ca:return "Profiler";case ba:return "StrictMode";case B:return "Suspense";case ha:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case da:return "Context.Consumer";case v$1:return "Context.Provider";case fa:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");
  case ia:return C(a.type);case ka:return C(a.render);case ja:if(a=1===a._status?a._result:null)return C(a)}return null}var D=React__default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;D.hasOwnProperty("ReactCurrentDispatcher")||(D.ReactCurrentDispatcher={current:null});D.hasOwnProperty("ReactCurrentBatchConfig")||(D.ReactCurrentBatchConfig={suspense:null});var oa={};function E(a,b){for(var c=a._threadCount|0;c<=b;c++)a[c]=a._currentValue2,a._threadCount=c+1;}
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
  var Aa="function"===typeof Object.is?Object.is:za,O=null,P=null,Q=null,R=!1,S=!1,U=null,V=0;function W(){if(null===O)throw Error(q$1(321));return O}function Ba(){if(0<V)throw Error(q$1(312));return {memoizedState:null,queue:null,next:null}}function Ca(){null===Q?null===P?(R=!1,P=Q=Ba()):(R=!0,Q=P):null===Q.next?(R=!1,Q=Q.next=Ba()):(R=!0,Q=Q.next);return Q}function Da(a,b,c,d){for(;S;)S=!1,V+=1,Q=null,c=a(b,d);P=O=null;V=0;Q=U=null;return c}function Ea(a,b){return "function"===typeof b?b(a):b}
  function Fa(a,b,c){O=W();Q=Ca();if(R){var d=Q.queue;b=d.dispatch;if(null!==U&&(c=U.get(d),void 0!==c)){U.delete(d);d=Q.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);Q.memoizedState=d;return [d,b]}return [Q.memoizedState,b]}a=a===Ea?"function"===typeof b?b():b:void 0!==c?c(b):b;Q.memoizedState=a;a=Q.queue={last:null,dispatch:null};a=a.dispatch=Ga.bind(null,O,a);return [Q.memoizedState,a]}
  function Ga(a,b,c){if(!(25>V))throw Error(q$1(301));if(a===O)if(S=!0,a={action:c,next:null},null===U&&(U=new Map),c=U.get(b),void 0===c)U.set(b,a);else {for(b=c;null!==b.next;)b=b.next;b.next=a;}}function Ha(){}
  var X=0,Ia={readContext:function(a){var b=X;E(a,b);return a[b]},useContext:function(a){W();var b=X;E(a,b);return a[b]},useMemo:function(a,b){O=W();Q=Ca();b=void 0===b?null:b;if(null!==Q){var c=Q.memoizedState;if(null!==c&&null!==b){a:{var d=c[1];if(null===d)d=!1;else {for(var f=0;f<d.length&&f<b.length;f++)if(!Aa(b[f],d[f])){d=!1;break a}d=!0;}}if(d)return c[0]}}a=a();Q.memoizedState=[a,b];return a},useReducer:Fa,useRef:function(a){O=W();Q=Ca();var b=Q.memoizedState;return null===b?(a={current:a},Q.memoizedState=
  a):b},useState:function(a){return Fa(Ea,a)},useLayoutEffect:function(){},useCallback:function(a){return a},useImperativeHandle:Ha,useEffect:Ha,useDebugValue:Ha,useResponder:function(a,b){return {props:b,responder:a}},useDeferredValue:function(a){W();return a},useTransition:function(){W();return [function(a){a();},!1]}},Ja={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
  function Ka(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
  var La={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Ma=objectAssign({menuitem:!0},La),Y={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
  gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Na=["Webkit","ms","Moz","O"];Object.keys(Y).forEach(function(a){Na.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y[b]=Y[a];});});
  var Oa=/([A-Z])/g,Pa=/^ms-/,Z=React__default.Children.toArray,Qa=D.ReactCurrentDispatcher,Ra={listing:!0,pre:!0,textarea:!0},Sa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ta={},Ua={};function Va(a){if(void 0===a||null===a)return a;var b="";React__default.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}var Wa=Object.prototype.hasOwnProperty,Xa={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Ya(a,b){if(void 0===a)throw Error(q$1(152,C(b)||"Component"));}
  function Za(a,b,c){function d(d,g){var e=g.prototype&&g.prototype.isReactComponent,f=pa(g,b,c,e),x=[],h=!1,m={isMounted:function(){return !1},enqueueForceUpdate:function(){if(null===x)return null},enqueueReplaceState:function(a,c){h=!0;x=[c];},enqueueSetState:function(a,c){if(null===x)return null;x.push(c);}};if(e){if(e=new g(d.props,f,m),"function"===typeof g.getDerivedStateFromProps){var w=g.getDerivedStateFromProps.call(null,d.props,e.state);null!=w&&(e.state=objectAssign({},e.state,w));}}else if(O={},e=g(d.props,
  f,m),e=Da(g,d.props,e,f),null==e||null==e.render){a=e;Ya(a,g);return}e.props=d.props;e.context=f;e.updater=m;m=e.state;void 0===m&&(e.state=m=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),x.length){m=x;var r=
  h;x=null;h=!1;if(r&&1===m.length)e.state=m[0];else {w=r?m[0]:e.state;var y=!0;for(r=r?1:0;r<m.length;r++){var p=m[r];p="function"===typeof p?p.call(e,w,d.props,f):p;null!=p&&(y?(y=!1,w=objectAssign({},w,p)):objectAssign(w,p));}e.state=w;}}else x=null;a=e.render();Ya(a,g);if("function"===typeof e.getChildContext&&(d=g.childContextTypes,"object"===typeof d)){var A=e.getChildContext();for(var T in A)if(!(T in d))throw Error(q$1(108,C(g)||"Unknown",T));}A&&(b=objectAssign({},b,A));}for(;React__default.isValidElement(a);){var f=a,g=f.type;if("function"!==
  typeof g)break;d(f,g);}return {child:a,context:b}}
  var $a=function(){function a(a,b){React__default.isValidElement(a)?a.type!==u?a=[a]:(a=a.props.children,a=React__default.isValidElement(a)?[a]:Z(a)):a=Z(a);a={type:null,domNamespace:Ja.html,children:a,childIndex:0,context:oa,footer:""};var c=F[0];if(0===c){var g=F;c=g.length;var d=2*c;if(!(65536>=d))throw Error(q$1(304));var h=new Uint16Array(d);h.set(g);F=h;F[0]=c+1;for(g=c;g<d-1;g++)F[g]=g+1;F[d-1]=0;}else F[0]=F[c];this.threadID=c;this.stack=[a];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=
  b;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[];}var b=a.prototype;b.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;F[a]=F[0];F[0]=a;}};b.pushProvider=function(a){var c=++this.contextIndex,b=a.type._context,g=this.threadID;E(b,g);var x=b[g];this.contextStack[c]=b;this.contextValueStack[c]=x;b[g]=a.props.value;};b.popProvider=function(){var a=this.contextIndex,b=this.contextStack[a],f=this.contextValueStack[a];
  this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;b[this.threadID]=f;};b.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a];};b.read=function(a){if(this.exhausted)return null;var b=X;X=this.threadID;var c=Qa.current;Qa.current=Ia;try{for(var g=[""],x=!1;g[0].length<a;){if(0===this.stack.length){this.exhausted=!0;var h=this.threadID;F[h]=F[0];F[0]=h;break}var e=this.stack[this.stack.length-1];if(x||e.childIndex>=
  e.children.length){var I=e.footer;""!==I&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===e.type)this.currentSelectValue=null;else if(null!=e.type&&null!=e.type.type&&e.type.type.$$typeof===v$1)this.popProvider(e.type);else if(e.type===B){this.suspenseDepth--;var G=g.pop();if(x){x=!1;var n=e.fallbackFrame;if(!n)throw Error(q$1(303));this.stack.push(n);g[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else g[this.suspenseDepth]+=G;}g[this.suspenseDepth]+=I;}else {var m=e.children[e.childIndex++],
  w="";try{w+=this.render(m,e.context,e.domNamespace);}catch(r){if(null!=r&&"function"===typeof r.then)throw Error(q$1(294));throw r;}finally{}g.length<=this.suspenseDepth&&g.push("");g[this.suspenseDepth]+=w;}}return g[0]}finally{Qa.current=c,X=b;}};b.render=function(a,b,f){if("string"===typeof a||"number"===typeof a){f=""+a;if(""===f)return "";if(this.makeStaticMarkup)return N(f);if(this.previousWasTextNode)return "\x3c!-- --\x3e"+N(f);this.previousWasTextNode=!0;return N(f)}b=Za(a,b,this.threadID);a=b.child;
  b=b.context;if(null===a||!1===a)return "";if(!React__default.isValidElement(a)){if(null!=a&&null!=a.$$typeof){f=a.$$typeof;if(f===aa)throw Error(q$1(257));throw Error(q$1(258,f.toString()));}a=Z(a);this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""});return ""}var c=a.type;if("string"===typeof c)return this.renderDOM(a,b,f);switch(c){case ba:case ea:case ca:case ha:case u:return a=Z(a.props.children),this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),
  "";case B:throw Error(q$1(294));}if("object"===typeof c&&null!==c)switch(c.$$typeof){case fa:O={};var d=c.render(a.props,a.ref);d=Da(c.render,a.props,d,a.ref);d=Z(d);this.stack.push({type:null,domNamespace:f,children:d,childIndex:0,context:b,footer:""});return "";case ia:return a=[React__default.createElement(c.type,objectAssign({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case v$1:return c=Z(a.props.children),f={type:a,domNamespace:f,children:c,childIndex:0,
  context:b,footer:""},this.pushProvider(a),this.stack.push(f),"";case da:c=a.type;d=a.props;var h=this.threadID;E(c,h);c=Z(d.children(c[h]));this.stack.push({type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""});return "";case la:throw Error(q$1(338));case ja:switch(c=a.type,na(c),c._status){case 1:return a=[React__default.createElement(c._result,objectAssign({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case 2:throw c._result;default:throw Error(q$1(295));
  }case ma:throw Error(q$1(343));}throw Error(q$1(130,null==c?c:typeof c,""));};b.renderDOM=function(a,b,f){var c=a.type.toLowerCase();if(!Ta.hasOwnProperty(c)){if(!Sa.test(c))throw Error(q$1(65,c));Ta[c]=!0;}var d=a.props;if("input"===c)d=objectAssign({type:void 0},d,{defaultChecked:void 0,defaultValue:void 0,value:null!=d.value?d.value:d.defaultValue,checked:null!=d.checked?d.checked:d.defaultChecked});else if("textarea"===c){var h=d.value;if(null==h){h=d.defaultValue;var e=d.children;if(null!=e){if(null!=
  h)throw Error(q$1(92));if(Array.isArray(e)){if(!(1>=e.length))throw Error(q$1(93));e=e[0];}h=""+e;}null==h&&(h="");}d=objectAssign({},d,{value:void 0,children:""+h});}else if("select"===c)this.currentSelectValue=null!=d.value?d.value:d.defaultValue,d=objectAssign({},d,{value:void 0});else if("option"===c){e=this.currentSelectValue;var I=Va(d.children);if(null!=e){var G=null!=d.value?d.value+"":I;h=!1;if(Array.isArray(e))for(var n=0;n<e.length;n++){if(""+e[n]===G){h=!0;break}}else h=""+e===G;d=objectAssign({selected:void 0,children:void 0},
  d,{selected:h,children:I});}}if(h=d){if(Ma[c]&&(null!=h.children||null!=h.dangerouslySetInnerHTML))throw Error(q$1(137,c,""));if(null!=h.dangerouslySetInnerHTML){if(null!=h.children)throw Error(q$1(60));if(!("object"===typeof h.dangerouslySetInnerHTML&&"__html"in h.dangerouslySetInnerHTML))throw Error(q$1(61));}if(null!=h.style&&"object"!==typeof h.style)throw Error(q$1(62,""));}h=d;e=this.makeStaticMarkup;I=1===this.stack.length;G="<"+a.type;for(z in h)if(Wa.call(h,z)){var m=h[z];if(null!=m){if("style"===
  z){n=void 0;var w="",r="";for(n in m)if(m.hasOwnProperty(n)){var y=0===n.indexOf("--"),p=m[n];if(null!=p){if(y)var A=n;else if(A=n,Ua.hasOwnProperty(A))A=Ua[A];else {var T=A.replace(Oa,"-$1").toLowerCase().replace(Pa,"-ms-");A=Ua[A]=T;}w+=r+A+":";r=n;y=null==p||"boolean"===typeof p||""===p?"":y||"number"!==typeof p||0===p||Y.hasOwnProperty(r)&&Y[r]?(""+p).trim():p+"px";w+=y;r=";";}}m=w||null;}n=null;b:if(y=c,p=h,-1===y.indexOf("-"))y="string"===typeof p.is;else switch(y){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":y=
  !1;break b;default:y=!0;}y?Xa.hasOwnProperty(z)||(n=z,n=ua(n)&&null!=m?n+'="'+(N(m)+'"'):""):n=ya(z,m);n&&(G+=" "+n);}}e||I&&(G+=' data-reactroot=""');var z=G;h="";La.hasOwnProperty(c)?z+="/>":(z+=">",h="</"+a.type+">");a:{e=d.dangerouslySetInnerHTML;if(null!=e){if(null!=e.__html){e=e.__html;break a}}else if(e=d.children,"string"===typeof e||"number"===typeof e){e=N(e);break a}e=null;}null!=e?(d=[],Ra.hasOwnProperty(c)&&"\n"===e.charAt(0)&&(z+="\n"),z+=e):d=Z(d.children);a=a.type;f=null==f||"http://www.w3.org/1999/xhtml"===
  f?Ka(a):"http://www.w3.org/2000/svg"===f&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":f;this.stack.push({domNamespace:f,type:c,children:d,childIndex:0,context:b,footer:h});this.previousWasTextNode=!1;return z};return a}(),ab={renderToString:function(a){a=new $a(a,!1);try{return a.read(Infinity)}finally{a.destroy();}},renderToStaticMarkup:function(a){a=new $a(a,!0);try{return a.read(Infinity)}finally{a.destroy();}},renderToNodeStream:function(){throw Error(q$1(207));},renderToStaticNodeStream:function(){throw Error(q$1(208));
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
          wrapper.innerHTML = server_browser.renderToStaticMarkup(React.createElement(Wrapper, null, React.createElement(Wrapper, {
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
        return React.createElement(Wrapper, Object.assign({}, rest, {
          ref: this.refCallback
        }), this.state.isLoading && Loading && React.createElement(Loading, null), this.state.hasError && Fallback && React.createElement(Fallback, null));
      };

      return ReactSVG;
    }(React.Component);

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

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var Icon = /*#__PURE__*/function (_Component) {
    _inherits(Icon, _Component);

    var _super = _createSuper$1(Icon);

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
          return /*#__PURE__*/React__default.createElement("i", {
            className: "iconfont icon-".concat(icon, " ").concat(className)
          });
        }

        if (React.isValidElement(icon) || icon instanceof Element) {
          return /*#__PURE__*/React__default.createElement("i", {
            className: className
          }, icon);
        }

        return /*#__PURE__*/React__default.createElement(ReactSVG, {
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
        return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, this.renderIcon());
      }
    }]);

    return Icon;
  }(React.Component);

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var Button = /*#__PURE__*/function (_React$Component) {
    _inherits(Button, _React$Component);

    var _super = _createSuper$2(Button);

    function Button(props) {
      var _this;

      _classCallCheck(this, Button);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "renderButton", function (_ref) {
        var _Classnames;

        var getPrefixCls = _ref.getPrefixCls;
        var iconNode = null;
        var _this$props = _this.props,
            type = _this$props.type,
            size = _this$props.size,
            className = _this$props.className,
            children = _this$props.children,
            icon = _this$props.icon,
            ghost = _this$props.ghost,
            block = _this$props.block,
            onClick = _this$props.onClick,
            htmlType = _this$props.htmlType,
            href = _this$props.href,
            target = _this$props.target,
            style = _this$props.style;
        var prefixCls = getPrefixCls("btn");
        var classes = classnames(["".concat(prefixCls)], (_Classnames = {}, _defineProperty(_Classnames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_Classnames, "".concat(prefixCls, "-").concat(size), size), _defineProperty(_Classnames, "".concat(prefixCls, "-").concat(type, "-ghost"), ghost), _defineProperty(_Classnames, "".concat(prefixCls, "-block"), block), _Classnames), className);

        if (icon) {
          iconNode = /*#__PURE__*/React__default.createElement(Icon, {
            icon: icon,
            className: "".concat(prefixCls, "-icon")
          });
        }

        if (href) {
          return /*#__PURE__*/React__default.createElement("a", {
            href: href,
            target: target,
            ref: _this.btnRef,
            onClick: onClick,
            className: classes
          }, iconNode, children);
        }

        return /*#__PURE__*/React__default.createElement("button", {
          type: htmlType,
          ref: _this.btnRef,
          onClick: onClick,
          className: classes
        }, iconNode, children);
      });

      _this.btnRef = React__default.createRef();
      return _this;
    }

    _createClass(Button, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React__default.createElement(Consumer, null, this.renderButton);
      }
    }]);

    return Button;
  }(React__default.Component);

  Button.defaultProps = {
    ghost: false,
    block: false,
    htmlType: "button",
    children: "btn",
    size: "large",
    type: "default",
    className: "",
    icon: "",
    href: "",
    target: ""
  };
  Button.propTypes = {
    ghost: propTypes_6,
    block: propTypes_6,
    htmlType: propTypes_2(["submit", "button", "reset"]),
    children: propTypes_7,
    size: propTypes_2(["small", "middle", "large"]),
    type: propTypes_2(["default", "primary", "link", "danger"]),
    href: propTypes_5,
    target: propTypes_5,
    onClick: propTypes_1,
    icon: propTypes_7,
    className: propTypes_5
  };

  var marked = createCommonjsModule(function (module, exports) {
  /**
   * marked - a markdown parser
   * Copyright (c) 2011-2020, Christopher Jeffrey. (MIT Licensed)
   * https://github.com/markedjs/marked
   */

  /**
   * DO NOT EDIT THIS FILE
   * The code in this file is generated from files in ./src/
   */

  (function (global, factory) {
     module.exports = factory() ;
  }(commonjsGlobal, (function () {
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

      return arr2;
    }

    function _createForOfIteratorHelperLoose(o) {
      var i = 0;

      if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      i = o[Symbol.iterator]();
      return i.next.bind(i);
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var defaults = createCommonjsModule(function (module) {
      function getDefaults() {
        return {
          baseUrl: null,
          breaks: false,
          gfm: true,
          headerIds: true,
          headerPrefix: '',
          highlight: null,
          langPrefix: 'language-',
          mangle: true,
          pedantic: false,
          renderer: null,
          sanitize: false,
          sanitizer: null,
          silent: false,
          smartLists: false,
          smartypants: false,
          tokenizer: null,
          walkTokens: null,
          xhtml: false
        };
      }

      function changeDefaults(newDefaults) {
        module.exports.defaults = newDefaults;
      }

      module.exports = {
        defaults: getDefaults(),
        getDefaults: getDefaults,
        changeDefaults: changeDefaults
      };
    });
    var defaults_1 = defaults.defaults;
    var defaults_2 = defaults.getDefaults;
    var defaults_3 = defaults.changeDefaults;

    /**
     * Helpers
     */
    var escapeTest = /[&<>"']/;
    var escapeReplace = /[&<>"']/g;
    var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
    var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
    var escapeReplacements = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    var getEscapeReplacement = function getEscapeReplacement(ch) {
      return escapeReplacements[ch];
    };

    function escape(html, encode) {
      if (encode) {
        if (escapeTest.test(html)) {
          return html.replace(escapeReplace, getEscapeReplacement);
        }
      } else {
        if (escapeTestNoEncode.test(html)) {
          return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
        }
      }

      return html;
    }

    var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

    function unescape(html) {
      // explicitly match decimal, hex, and named HTML entities
      return html.replace(unescapeTest, function (_, n) {
        n = n.toLowerCase();
        if (n === 'colon') return ':';

        if (n.charAt(0) === '#') {
          return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
        }

        return '';
      });
    }

    var caret = /(^|[^\[])\^/g;

    function edit(regex, opt) {
      regex = regex.source || regex;
      opt = opt || '';
      var obj = {
        replace: function replace(name, val) {
          val = val.source || val;
          val = val.replace(caret, '$1');
          regex = regex.replace(name, val);
          return obj;
        },
        getRegex: function getRegex() {
          return new RegExp(regex, opt);
        }
      };
      return obj;
    }

    var nonWordAndColonTest = /[^\w:]/g;
    var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

    function cleanUrl(sanitize, base, href) {
      if (sanitize) {
        var prot;

        try {
          prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
        } catch (e) {
          return null;
        }

        if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
          return null;
        }
      }

      if (base && !originIndependentUrl.test(href)) {
        href = resolveUrl(base, href);
      }

      try {
        href = encodeURI(href).replace(/%25/g, '%');
      } catch (e) {
        return null;
      }

      return href;
    }

    var baseUrls = {};
    var justDomain = /^[^:]+:\/*[^/]*$/;
    var protocol = /^([^:]+:)[\s\S]*$/;
    var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

    function resolveUrl(base, href) {
      if (!baseUrls[' ' + base]) {
        // we can ignore everything in base after the last slash of its path component,
        // but we might need to add _that_
        // https://tools.ietf.org/html/rfc3986#section-3
        if (justDomain.test(base)) {
          baseUrls[' ' + base] = base + '/';
        } else {
          baseUrls[' ' + base] = rtrim(base, '/', true);
        }
      }

      base = baseUrls[' ' + base];
      var relativeBase = base.indexOf(':') === -1;

      if (href.substring(0, 2) === '//') {
        if (relativeBase) {
          return href;
        }

        return base.replace(protocol, '$1') + href;
      } else if (href.charAt(0) === '/') {
        if (relativeBase) {
          return href;
        }

        return base.replace(domain, '$1') + href;
      } else {
        return base + href;
      }
    }

    var noopTest = {
      exec: function noopTest() {}
    };

    function merge(obj) {
      var i = 1,
          target,
          key;

      for (; i < arguments.length; i++) {
        target = arguments[i];

        for (key in target) {
          if (Object.prototype.hasOwnProperty.call(target, key)) {
            obj[key] = target[key];
          }
        }
      }

      return obj;
    }

    function splitCells(tableRow, count) {
      // ensure that every cell-delimiting pipe has a space
      // before it to distinguish it from an escaped pipe
      var row = tableRow.replace(/\|/g, function (match, offset, str) {
        var escaped = false,
            curr = offset;

        while (--curr >= 0 && str[curr] === '\\') {
          escaped = !escaped;
        }

        if (escaped) {
          // odd number of slashes means | is escaped
          // so we leave it alone
          return '|';
        } else {
          // add space before unescaped |
          return ' |';
        }
      }),
          cells = row.split(/ \|/);
      var i = 0;

      if (cells.length > count) {
        cells.splice(count);
      } else {
        while (cells.length < count) {
          cells.push('');
        }
      }

      for (; i < cells.length; i++) {
        // leading or trailing whitespace is ignored per the gfm spec
        cells[i] = cells[i].trim().replace(/\\\|/g, '|');
      }

      return cells;
    } // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
    // /c*$/ is vulnerable to REDOS.
    // invert: Remove suffix of non-c chars instead. Default falsey.


    function rtrim(str, c, invert) {
      var l = str.length;

      if (l === 0) {
        return '';
      } // Length of suffix matching the invert condition.


      var suffLen = 0; // Step left until we fail to match the invert condition.

      while (suffLen < l) {
        var currChar = str.charAt(l - suffLen - 1);

        if (currChar === c && !invert) {
          suffLen++;
        } else if (currChar !== c && invert) {
          suffLen++;
        } else {
          break;
        }
      }

      return str.substr(0, l - suffLen);
    }

    function findClosingBracket(str, b) {
      if (str.indexOf(b[1]) === -1) {
        return -1;
      }

      var l = str.length;
      var level = 0,
          i = 0;

      for (; i < l; i++) {
        if (str[i] === '\\') {
          i++;
        } else if (str[i] === b[0]) {
          level++;
        } else if (str[i] === b[1]) {
          level--;

          if (level < 0) {
            return i;
          }
        }
      }

      return -1;
    }

    function checkSanitizeDeprecation(opt) {
      if (opt && opt.sanitize && !opt.silent) {
        console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
      }
    }

    var helpers = {
      escape: escape,
      unescape: unescape,
      edit: edit,
      cleanUrl: cleanUrl,
      resolveUrl: resolveUrl,
      noopTest: noopTest,
      merge: merge,
      splitCells: splitCells,
      rtrim: rtrim,
      findClosingBracket: findClosingBracket,
      checkSanitizeDeprecation: checkSanitizeDeprecation
    };

    var defaults$1 = defaults.defaults;
    var rtrim$1 = helpers.rtrim,
        splitCells$1 = helpers.splitCells,
        _escape = helpers.escape,
        findClosingBracket$1 = helpers.findClosingBracket;

    function outputLink(cap, link, raw) {
      var href = link.href;
      var title = link.title ? _escape(link.title) : null;

      if (cap[0].charAt(0) !== '!') {
        return {
          type: 'link',
          raw: raw,
          href: href,
          title: title,
          text: cap[1]
        };
      } else {
        return {
          type: 'image',
          raw: raw,
          text: _escape(cap[1]),
          href: href,
          title: title
        };
      }
    }

    function indentCodeCompensation(raw, text) {
      var matchIndentToCode = raw.match(/^(\s+)(?:```)/);

      if (matchIndentToCode === null) {
        return text;
      }

      var indentToCode = matchIndentToCode[1];
      return text.split('\n').map(function (node) {
        var matchIndentInNode = node.match(/^\s+/);

        if (matchIndentInNode === null) {
          return node;
        }

        var indentInNode = matchIndentInNode[0];

        if (indentInNode.length >= indentToCode.length) {
          return node.slice(indentToCode.length);
        }

        return node;
      }).join('\n');
    }
    /**
     * Tokenizer
     */


    var Tokenizer_1 = /*#__PURE__*/function () {
      function Tokenizer(options) {
        this.options = options || defaults$1;
      }

      var _proto = Tokenizer.prototype;

      _proto.space = function space(src) {
        var cap = this.rules.block.newline.exec(src);

        if (cap) {
          if (cap[0].length > 1) {
            return {
              type: 'space',
              raw: cap[0]
            };
          }

          return {
            raw: '\n'
          };
        }
      };

      _proto.code = function code(src, tokens) {
        var cap = this.rules.block.code.exec(src);

        if (cap) {
          var lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

          if (lastToken && lastToken.type === 'paragraph') {
            return {
              raw: cap[0],
              text: cap[0].trimRight()
            };
          }

          var text = cap[0].replace(/^ {4}/gm, '');
          return {
            type: 'code',
            raw: cap[0],
            codeBlockStyle: 'indented',
            text: !this.options.pedantic ? rtrim$1(text, '\n') : text
          };
        }
      };

      _proto.fences = function fences(src) {
        var cap = this.rules.block.fences.exec(src);

        if (cap) {
          var raw = cap[0];
          var text = indentCodeCompensation(raw, cap[3] || '');
          return {
            type: 'code',
            raw: raw,
            lang: cap[2] ? cap[2].trim() : cap[2],
            text: text
          };
        }
      };

      _proto.heading = function heading(src) {
        var cap = this.rules.block.heading.exec(src);

        if (cap) {
          return {
            type: 'heading',
            raw: cap[0],
            depth: cap[1].length,
            text: cap[2]
          };
        }
      };

      _proto.nptable = function nptable(src) {
        var cap = this.rules.block.nptable.exec(src);

        if (cap) {
          var item = {
            type: 'table',
            header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : [],
            raw: cap[0]
          };

          if (item.header.length === item.align.length) {
            var l = item.align.length;
            var i;

            for (i = 0; i < l; i++) {
              if (/^ *-+: *$/.test(item.align[i])) {
                item.align[i] = 'right';
              } else if (/^ *:-+: *$/.test(item.align[i])) {
                item.align[i] = 'center';
              } else if (/^ *:-+ *$/.test(item.align[i])) {
                item.align[i] = 'left';
              } else {
                item.align[i] = null;
              }
            }

            l = item.cells.length;

            for (i = 0; i < l; i++) {
              item.cells[i] = splitCells$1(item.cells[i], item.header.length);
            }

            return item;
          }
        }
      };

      _proto.hr = function hr(src) {
        var cap = this.rules.block.hr.exec(src);

        if (cap) {
          return {
            type: 'hr',
            raw: cap[0]
          };
        }
      };

      _proto.blockquote = function blockquote(src) {
        var cap = this.rules.block.blockquote.exec(src);

        if (cap) {
          var text = cap[0].replace(/^ *> ?/gm, '');
          return {
            type: 'blockquote',
            raw: cap[0],
            text: text
          };
        }
      };

      _proto.list = function list(src) {
        var cap = this.rules.block.list.exec(src);

        if (cap) {
          var raw = cap[0];
          var bull = cap[2];
          var isordered = bull.length > 1;
          var list = {
            type: 'list',
            raw: raw,
            ordered: isordered,
            start: isordered ? +bull : '',
            loose: false,
            items: []
          }; // Get each top-level item.

          var itemMatch = cap[0].match(this.rules.block.item);
          var next = false,
              item,
              space,
              b,
              addBack,
              loose,
              istask,
              ischecked;
          var l = itemMatch.length;

          for (var i = 0; i < l; i++) {
            item = itemMatch[i];
            raw = item; // Remove the list item's bullet
            // so it is seen as the next token.

            space = item.length;
            item = item.replace(/^ *([*+-]|\d+\.) */, ''); // Outdent whatever the
            // list item contains. Hacky.

            if (~item.indexOf('\n ')) {
              space -= item.length;
              item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
            } // Determine whether the next list item belongs here.
            // Backpedal if it does not belong in this list.


            if (i !== l - 1) {
              b = this.rules.block.bullet.exec(itemMatch[i + 1])[0];

              if (bull.length > 1 ? b.length === 1 : b.length > 1 || this.options.smartLists && b !== bull) {
                addBack = itemMatch.slice(i + 1).join('\n');
                list.raw = list.raw.substring(0, list.raw.length - addBack.length);
                i = l - 1;
              }
            } // Determine whether item is loose or not.
            // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
            // for discount behavior.


            loose = next || /\n\n(?!\s*$)/.test(item);

            if (i !== l - 1) {
              next = item.charAt(item.length - 1) === '\n';
              if (!loose) loose = next;
            }

            if (loose) {
              list.loose = true;
            } // Check for task list items


            istask = /^\[[ xX]\] /.test(item);
            ischecked = undefined;

            if (istask) {
              ischecked = item[1] !== ' ';
              item = item.replace(/^\[[ xX]\] +/, '');
            }

            list.items.push({
              type: 'list_item',
              raw: raw,
              task: istask,
              checked: ischecked,
              loose: loose,
              text: item
            });
          }

          return list;
        }
      };

      _proto.html = function html(src) {
        var cap = this.rules.block.html.exec(src);

        if (cap) {
          return {
            type: this.options.sanitize ? 'paragraph' : 'html',
            raw: cap[0],
            pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
          };
        }
      };

      _proto.def = function def(src) {
        var cap = this.rules.block.def.exec(src);

        if (cap) {
          if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
          var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
          return {
            tag: tag,
            raw: cap[0],
            href: cap[2],
            title: cap[3]
          };
        }
      };

      _proto.table = function table(src) {
        var cap = this.rules.block.table.exec(src);

        if (cap) {
          var item = {
            type: 'table',
            header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
          };

          if (item.header.length === item.align.length) {
            item.raw = cap[0];
            var l = item.align.length;
            var i;

            for (i = 0; i < l; i++) {
              if (/^ *-+: *$/.test(item.align[i])) {
                item.align[i] = 'right';
              } else if (/^ *:-+: *$/.test(item.align[i])) {
                item.align[i] = 'center';
              } else if (/^ *:-+ *$/.test(item.align[i])) {
                item.align[i] = 'left';
              } else {
                item.align[i] = null;
              }
            }

            l = item.cells.length;

            for (i = 0; i < l; i++) {
              item.cells[i] = splitCells$1(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
            }

            return item;
          }
        }
      };

      _proto.lheading = function lheading(src) {
        var cap = this.rules.block.lheading.exec(src);

        if (cap) {
          return {
            type: 'heading',
            raw: cap[0],
            depth: cap[2].charAt(0) === '=' ? 1 : 2,
            text: cap[1]
          };
        }
      };

      _proto.paragraph = function paragraph(src) {
        var cap = this.rules.block.paragraph.exec(src);

        if (cap) {
          return {
            type: 'paragraph',
            raw: cap[0],
            text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
          };
        }
      };

      _proto.text = function text(src, tokens) {
        var cap = this.rules.block.text.exec(src);

        if (cap) {
          var lastToken = tokens[tokens.length - 1];

          if (lastToken && lastToken.type === 'text') {
            return {
              raw: cap[0],
              text: cap[0]
            };
          }

          return {
            type: 'text',
            raw: cap[0],
            text: cap[0]
          };
        }
      };

      _proto.escape = function escape(src) {
        var cap = this.rules.inline.escape.exec(src);

        if (cap) {
          return {
            type: 'escape',
            raw: cap[0],
            text: _escape(cap[1])
          };
        }
      };

      _proto.tag = function tag(src, inLink, inRawBlock) {
        var cap = this.rules.inline.tag.exec(src);

        if (cap) {
          if (!inLink && /^<a /i.test(cap[0])) {
            inLink = true;
          } else if (inLink && /^<\/a>/i.test(cap[0])) {
            inLink = false;
          }

          if (!inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            inRawBlock = true;
          } else if (inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            inRawBlock = false;
          }

          return {
            type: this.options.sanitize ? 'text' : 'html',
            raw: cap[0],
            inLink: inLink,
            inRawBlock: inRawBlock,
            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
          };
        }
      };

      _proto.link = function link(src) {
        var cap = this.rules.inline.link.exec(src);

        if (cap) {
          var lastParenIndex = findClosingBracket$1(cap[2], '()');

          if (lastParenIndex > -1) {
            var start = cap[0].indexOf('!') === 0 ? 5 : 4;
            var linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = '';
          }

          var href = cap[2];
          var title = '';

          if (this.options.pedantic) {
            var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

            if (link) {
              href = link[1];
              title = link[3];
            } else {
              title = '';
            }
          } else {
            title = cap[3] ? cap[3].slice(1, -1) : '';
          }

          href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
          var token = outputLink(cap, {
            href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
            title: title ? title.replace(this.rules.inline._escapes, '$1') : title
          }, cap[0]);
          return token;
        }
      };

      _proto.reflink = function reflink(src, links) {
        var cap;

        if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
          var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
          link = links[link.toLowerCase()];

          if (!link || !link.href) {
            var text = cap[0].charAt(0);
            return {
              type: 'text',
              raw: text,
              text: text
            };
          }

          var token = outputLink(cap, link, cap[0]);
          return token;
        }
      };

      _proto.strong = function strong(src) {
        var cap = this.rules.inline.strong.exec(src);

        if (cap) {
          return {
            type: 'strong',
            raw: cap[0],
            text: cap[4] || cap[3] || cap[2] || cap[1]
          };
        }
      };

      _proto.em = function em(src) {
        var cap = this.rules.inline.em.exec(src);

        if (cap) {
          return {
            type: 'em',
            raw: cap[0],
            text: cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]
          };
        }
      };

      _proto.codespan = function codespan(src) {
        var cap = this.rules.inline.code.exec(src);

        if (cap) {
          var text = cap[2].replace(/\n/g, ' ');
          var hasNonSpaceChars = /[^ ]/.test(text);
          var hasSpaceCharsOnBothEnds = text.startsWith(' ') && text.endsWith(' ');

          if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
            text = text.substring(1, text.length - 1);
          }

          text = _escape(text, true);
          return {
            type: 'codespan',
            raw: cap[0],
            text: text
          };
        }
      };

      _proto.br = function br(src) {
        var cap = this.rules.inline.br.exec(src);

        if (cap) {
          return {
            type: 'br',
            raw: cap[0]
          };
        }
      };

      _proto.del = function del(src) {
        var cap = this.rules.inline.del.exec(src);

        if (cap) {
          return {
            type: 'del',
            raw: cap[0],
            text: cap[1]
          };
        }
      };

      _proto.autolink = function autolink(src, mangle) {
        var cap = this.rules.inline.autolink.exec(src);

        if (cap) {
          var text, href;

          if (cap[2] === '@') {
            text = _escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
            href = 'mailto:' + text;
          } else {
            text = _escape(cap[1]);
            href = text;
          }

          return {
            type: 'link',
            raw: cap[0],
            text: text,
            href: href,
            tokens: [{
              type: 'text',
              raw: text,
              text: text
            }]
          };
        }
      };

      _proto.url = function url(src, mangle) {
        var cap;

        if (cap = this.rules.inline.url.exec(src)) {
          var text, href;

          if (cap[2] === '@') {
            text = _escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
            href = 'mailto:' + text;
          } else {
            // do extended autolink path validation
            var prevCapZero;

            do {
              prevCapZero = cap[0];
              cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
            } while (prevCapZero !== cap[0]);

            text = _escape(cap[0]);

            if (cap[1] === 'www.') {
              href = 'http://' + text;
            } else {
              href = text;
            }
          }

          return {
            type: 'link',
            raw: cap[0],
            text: text,
            href: href,
            tokens: [{
              type: 'text',
              raw: text,
              text: text
            }]
          };
        }
      };

      _proto.inlineText = function inlineText(src, inRawBlock, smartypants) {
        var cap = this.rules.inline.text.exec(src);

        if (cap) {
          var text;

          if (inRawBlock) {
            text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0];
          } else {
            text = _escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
          }

          return {
            type: 'text',
            raw: cap[0],
            text: text
          };
        }
      };

      return Tokenizer;
    }();

    var noopTest$1 = helpers.noopTest,
        edit$1 = helpers.edit,
        merge$1 = helpers.merge;
    /**
     * Block-Level Grammar
     */

    var block = {
      newline: /^\n+/,
      code: /^( {4}[^\n]+\n*)+/,
      fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
      hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
      html: '^ {0,3}(?:' // optional indentation
      + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
      + '|comment[^\\n]*(\\n+|$)' // (2)
      + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
      + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
      + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
      + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
      + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
      + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
      + ')',
      def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
      nptable: noopTest$1,
      table: noopTest$1,
      lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
      // regex template, placeholders will be replaced according to different paragraph
      // interruption rules of commonmark and the original markdown spec:
      _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
      text: /^[^\n]+/
    };
    block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
    block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
    block.def = edit$1(block.def).replace('label', block._label).replace('title', block._title).getRegex();
    block.bullet = /(?:[*+-]|\d{1,9}\.)/;
    block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
    block.item = edit$1(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();
    block.list = edit$1(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
    block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
    block._comment = /<!--(?!-?>)[\s\S]*?-->/;
    block.html = edit$1(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
    block.paragraph = edit$1(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
    .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
    .getRegex();
    block.blockquote = edit$1(block.blockquote).replace('paragraph', block.paragraph).getRegex();
    /**
     * Normal Block Grammar
     */

    block.normal = merge$1({}, block);
    /**
     * GFM Block Grammar
     */

    block.gfm = merge$1({}, block.normal, {
      nptable: '^ *([^|\\n ].*\\|.*)\\n' // Header
      + ' *([-:]+ *\\|[-| :]*)' // Align
      + '(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
      // Cells
      table: '^ *\\|(.+)\\n' // Header
      + ' *\\|?( *[-:]+[-| :]*)' // Align
      + '(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

    });
    block.gfm.nptable = edit$1(block.gfm.nptable).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
    .getRegex();
    block.gfm.table = edit$1(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
    .getRegex();
    /**
     * Pedantic grammar (original John Gruber's loose markdown specification)
     */

    block.pedantic = merge$1({}, block.normal, {
      html: edit$1('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
      + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
      fences: noopTest$1,
      // fences not supported
      paragraph: edit$1(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
    });
    /**
     * Inline-Level Grammar
     */

    var inline = {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: noopTest$1,
      tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
      + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
      + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
      + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
      + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
      // CDATA section
      link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
      nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
      strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
      em: /^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\s,punctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\s,punctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      br: /^( {2,}|\\)\n(?!\s*$)/,
      del: noopTest$1,
      text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
    }; // list of punctuation marks from common mark spec
    // without ` and ] to workaround Rule 17 (inline code blocks/links)
    // without , to work around example 393

    inline._punctuation = '!"#$%&\'()*+\\-./:;<=>?@\\[^_{|}~';
    inline.em = edit$1(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();
    inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
    inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
    inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
    inline.autolink = edit$1(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
    inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
    inline.tag = edit$1(inline.tag).replace('comment', block._comment).replace('attribute', inline._attribute).getRegex();
    inline._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
    inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
    inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
    inline.link = edit$1(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
    inline.reflink = edit$1(inline.reflink).replace('label', inline._label).getRegex();
    /**
     * Normal Inline Grammar
     */

    inline.normal = merge$1({}, inline);
    /**
     * Pedantic Inline Grammar
     */

    inline.pedantic = merge$1({}, inline.normal, {
      strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
      link: edit$1(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
      reflink: edit$1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
    });
    /**
     * GFM Inline Grammar
     */

    inline.gfm = merge$1({}, inline.normal, {
      escape: edit$1(inline.escape).replace('])', '~|])').getRegex(),
      _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
      del: /^~+(?=\S)([\s\S]*?\S)~+/,
      text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
    });
    inline.gfm.url = edit$1(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
    /**
     * GFM + Line Breaks Inline Grammar
     */

    inline.breaks = merge$1({}, inline.gfm, {
      br: edit$1(inline.br).replace('{2,}', '*').getRegex(),
      text: edit$1(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
    });
    var rules = {
      block: block,
      inline: inline
    };

    var defaults$2 = defaults.defaults;
    var block$1 = rules.block,
        inline$1 = rules.inline;
    /**
     * smartypants text replacement
     */

    function smartypants(text) {
      return text // em-dashes
      .replace(/---/g, "\u2014") // en-dashes
      .replace(/--/g, "\u2013") // opening singles
      .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
      .replace(/'/g, "\u2019") // opening doubles
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
      .replace(/"/g, "\u201D") // ellipses
      .replace(/\.{3}/g, "\u2026");
    }
    /**
     * mangle email addresses
     */


    function mangle(text) {
      var out = '',
          i,
          ch;
      var l = text.length;

      for (i = 0; i < l; i++) {
        ch = text.charCodeAt(i);

        if (Math.random() > 0.5) {
          ch = 'x' + ch.toString(16);
        }

        out += '&#' + ch + ';';
      }

      return out;
    }
    /**
     * Block Lexer
     */


    var Lexer_1 = /*#__PURE__*/function () {
      function Lexer(options) {
        this.tokens = [];
        this.tokens.links = Object.create(null);
        this.options = options || defaults$2;
        this.options.tokenizer = this.options.tokenizer || new Tokenizer_1();
        this.tokenizer = this.options.tokenizer;
        this.tokenizer.options = this.options;
        var rules = {
          block: block$1.normal,
          inline: inline$1.normal
        };

        if (this.options.pedantic) {
          rules.block = block$1.pedantic;
          rules.inline = inline$1.pedantic;
        } else if (this.options.gfm) {
          rules.block = block$1.gfm;

          if (this.options.breaks) {
            rules.inline = inline$1.breaks;
          } else {
            rules.inline = inline$1.gfm;
          }
        }

        this.tokenizer.rules = rules;
      }
      /**
       * Expose Rules
       */


      /**
       * Static Lex Method
       */
      Lexer.lex = function lex(src, options) {
        var lexer = new Lexer(options);
        return lexer.lex(src);
      }
      /**
       * Preprocessing
       */
      ;

      var _proto = Lexer.prototype;

      _proto.lex = function lex(src) {
        src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
        this.blockTokens(src, this.tokens, true);
        this.inline(this.tokens);
        return this.tokens;
      }
      /**
       * Lexing
       */
      ;

      _proto.blockTokens = function blockTokens(src, tokens, top) {
        if (tokens === void 0) {
          tokens = [];
        }

        if (top === void 0) {
          top = true;
        }

        src = src.replace(/^ +$/gm, '');
        var token, i, l, lastToken;

        while (src) {
          // newline
          if (token = this.tokenizer.space(src)) {
            src = src.substring(token.raw.length);

            if (token.type) {
              tokens.push(token);
            }

            continue;
          } // code


          if (token = this.tokenizer.code(src, tokens)) {
            src = src.substring(token.raw.length);

            if (token.type) {
              tokens.push(token);
            } else {
              lastToken = tokens[tokens.length - 1];
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
            }

            continue;
          } // fences


          if (token = this.tokenizer.fences(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // heading


          if (token = this.tokenizer.heading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // table no leading pipe (gfm)


          if (token = this.tokenizer.nptable(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // hr


          if (token = this.tokenizer.hr(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // blockquote


          if (token = this.tokenizer.blockquote(src)) {
            src = src.substring(token.raw.length);
            token.tokens = this.blockTokens(token.text, [], top);
            tokens.push(token);
            continue;
          } // list


          if (token = this.tokenizer.list(src)) {
            src = src.substring(token.raw.length);
            l = token.items.length;

            for (i = 0; i < l; i++) {
              token.items[i].tokens = this.blockTokens(token.items[i].text, [], false);
            }

            tokens.push(token);
            continue;
          } // html


          if (token = this.tokenizer.html(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // def


          if (top && (token = this.tokenizer.def(src))) {
            src = src.substring(token.raw.length);

            if (!this.tokens.links[token.tag]) {
              this.tokens.links[token.tag] = {
                href: token.href,
                title: token.title
              };
            }

            continue;
          } // table (gfm)


          if (token = this.tokenizer.table(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // lheading


          if (token = this.tokenizer.lheading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // top-level paragraph


          if (top && (token = this.tokenizer.paragraph(src))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // text


          if (token = this.tokenizer.text(src, tokens)) {
            src = src.substring(token.raw.length);

            if (token.type) {
              tokens.push(token);
            } else {
              lastToken = tokens[tokens.length - 1];
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
            }

            continue;
          }

          if (src) {
            var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

            if (this.options.silent) {
              console.error(errMsg);
              break;
            } else {
              throw new Error(errMsg);
            }
          }
        }

        return tokens;
      };

      _proto.inline = function inline(tokens) {
        var i, j, k, l2, row, token;
        var l = tokens.length;

        for (i = 0; i < l; i++) {
          token = tokens[i];

          switch (token.type) {
            case 'paragraph':
            case 'text':
            case 'heading':
              {
                token.tokens = [];
                this.inlineTokens(token.text, token.tokens);
                break;
              }

            case 'table':
              {
                token.tokens = {
                  header: [],
                  cells: []
                }; // header

                l2 = token.header.length;

                for (j = 0; j < l2; j++) {
                  token.tokens.header[j] = [];
                  this.inlineTokens(token.header[j], token.tokens.header[j]);
                } // cells


                l2 = token.cells.length;

                for (j = 0; j < l2; j++) {
                  row = token.cells[j];
                  token.tokens.cells[j] = [];

                  for (k = 0; k < row.length; k++) {
                    token.tokens.cells[j][k] = [];
                    this.inlineTokens(row[k], token.tokens.cells[j][k]);
                  }
                }

                break;
              }

            case 'blockquote':
              {
                this.inline(token.tokens);
                break;
              }

            case 'list':
              {
                l2 = token.items.length;

                for (j = 0; j < l2; j++) {
                  this.inline(token.items[j].tokens);
                }

                break;
              }
          }
        }

        return tokens;
      }
      /**
       * Lexing/Compiling
       */
      ;

      _proto.inlineTokens = function inlineTokens(src, tokens, inLink, inRawBlock) {
        if (tokens === void 0) {
          tokens = [];
        }

        if (inLink === void 0) {
          inLink = false;
        }

        if (inRawBlock === void 0) {
          inRawBlock = false;
        }

        var token;

        while (src) {
          // escape
          if (token = this.tokenizer.escape(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // tag


          if (token = this.tokenizer.tag(src, inLink, inRawBlock)) {
            src = src.substring(token.raw.length);
            inLink = token.inLink;
            inRawBlock = token.inRawBlock;
            tokens.push(token);
            continue;
          } // link


          if (token = this.tokenizer.link(src)) {
            src = src.substring(token.raw.length);

            if (token.type === 'link') {
              token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
            }

            tokens.push(token);
            continue;
          } // reflink, nolink


          if (token = this.tokenizer.reflink(src, this.tokens.links)) {
            src = src.substring(token.raw.length);

            if (token.type === 'link') {
              token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
            }

            tokens.push(token);
            continue;
          } // strong


          if (token = this.tokenizer.strong(src)) {
            src = src.substring(token.raw.length);
            token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
            tokens.push(token);
            continue;
          } // em


          if (token = this.tokenizer.em(src)) {
            src = src.substring(token.raw.length);
            token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
            tokens.push(token);
            continue;
          } // code


          if (token = this.tokenizer.codespan(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // br


          if (token = this.tokenizer.br(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // del (gfm)


          if (token = this.tokenizer.del(src)) {
            src = src.substring(token.raw.length);
            token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
            tokens.push(token);
            continue;
          } // autolink


          if (token = this.tokenizer.autolink(src, mangle)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // url (gfm)


          if (!inLink && (token = this.tokenizer.url(src, mangle))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // text


          if (token = this.tokenizer.inlineText(src, inRawBlock, smartypants)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }

          if (src) {
            var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

            if (this.options.silent) {
              console.error(errMsg);
              break;
            } else {
              throw new Error(errMsg);
            }
          }
        }

        return tokens;
      };

      _createClass(Lexer, null, [{
        key: "rules",
        get: function get() {
          return {
            block: block$1,
            inline: inline$1
          };
        }
      }]);

      return Lexer;
    }();

    var defaults$3 = defaults.defaults;
    var cleanUrl$1 = helpers.cleanUrl,
        escape$1 = helpers.escape;
    /**
     * Renderer
     */

    var Renderer_1 = /*#__PURE__*/function () {
      function Renderer(options) {
        this.options = options || defaults$3;
      }

      var _proto = Renderer.prototype;

      _proto.code = function code(_code, infostring, escaped) {
        var lang = (infostring || '').match(/\S*/)[0];

        if (this.options.highlight) {
          var out = this.options.highlight(_code, lang);

          if (out != null && out !== _code) {
            escaped = true;
            _code = out;
          }
        }

        if (!lang) {
          return '<pre><code>' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
        }

        return '<pre><code class="' + this.options.langPrefix + escape$1(lang, true) + '">' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
      };

      _proto.blockquote = function blockquote(quote) {
        return '<blockquote>\n' + quote + '</blockquote>\n';
      };

      _proto.html = function html(_html) {
        return _html;
      };

      _proto.heading = function heading(text, level, raw, slugger) {
        if (this.options.headerIds) {
          return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
        } // ignore IDs


        return '<h' + level + '>' + text + '</h' + level + '>\n';
      };

      _proto.hr = function hr() {
        return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
      };

      _proto.list = function list(body, ordered, start) {
        var type = ordered ? 'ol' : 'ul',
            startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
        return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
      };

      _proto.listitem = function listitem(text) {
        return '<li>' + text + '</li>\n';
      };

      _proto.checkbox = function checkbox(checked) {
        return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
      };

      _proto.paragraph = function paragraph(text) {
        return '<p>' + text + '</p>\n';
      };

      _proto.table = function table(header, body) {
        if (body) body = '<tbody>' + body + '</tbody>';
        return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
      };

      _proto.tablerow = function tablerow(content) {
        return '<tr>\n' + content + '</tr>\n';
      };

      _proto.tablecell = function tablecell(content, flags) {
        var type = flags.header ? 'th' : 'td';
        var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
        return tag + content + '</' + type + '>\n';
      } // span level renderer
      ;

      _proto.strong = function strong(text) {
        return '<strong>' + text + '</strong>';
      };

      _proto.em = function em(text) {
        return '<em>' + text + '</em>';
      };

      _proto.codespan = function codespan(text) {
        return '<code>' + text + '</code>';
      };

      _proto.br = function br() {
        return this.options.xhtml ? '<br/>' : '<br>';
      };

      _proto.del = function del(text) {
        return '<del>' + text + '</del>';
      };

      _proto.link = function link(href, title, text) {
        href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);

        if (href === null) {
          return text;
        }

        var out = '<a href="' + escape$1(href) + '"';

        if (title) {
          out += ' title="' + title + '"';
        }

        out += '>' + text + '</a>';
        return out;
      };

      _proto.image = function image(href, title, text) {
        href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);

        if (href === null) {
          return text;
        }

        var out = '<img src="' + href + '" alt="' + text + '"';

        if (title) {
          out += ' title="' + title + '"';
        }

        out += this.options.xhtml ? '/>' : '>';
        return out;
      };

      _proto.text = function text(_text) {
        return _text;
      };

      return Renderer;
    }();

    /**
     * TextRenderer
     * returns only the textual part of the token
     */
    var TextRenderer_1 = /*#__PURE__*/function () {
      function TextRenderer() {}

      var _proto = TextRenderer.prototype;

      // no need for block level renderers
      _proto.strong = function strong(text) {
        return text;
      };

      _proto.em = function em(text) {
        return text;
      };

      _proto.codespan = function codespan(text) {
        return text;
      };

      _proto.del = function del(text) {
        return text;
      };

      _proto.html = function html(text) {
        return text;
      };

      _proto.text = function text(_text) {
        return _text;
      };

      _proto.link = function link(href, title, text) {
        return '' + text;
      };

      _proto.image = function image(href, title, text) {
        return '' + text;
      };

      _proto.br = function br() {
        return '';
      };

      return TextRenderer;
    }();

    /**
     * Slugger generates header id
     */
    var Slugger_1 = /*#__PURE__*/function () {
      function Slugger() {
        this.seen = {};
      }
      /**
       * Convert string to unique id
       */


      var _proto = Slugger.prototype;

      _proto.slug = function slug(value) {
        var slug = value.toLowerCase().trim() // remove html tags
        .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
        .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');

        if (this.seen.hasOwnProperty(slug)) {
          var originalSlug = slug;

          do {
            this.seen[originalSlug]++;
            slug = originalSlug + '-' + this.seen[originalSlug];
          } while (this.seen.hasOwnProperty(slug));
        }

        this.seen[slug] = 0;
        return slug;
      };

      return Slugger;
    }();

    var defaults$4 = defaults.defaults;
    var unescape$1 = helpers.unescape;
    /**
     * Parsing & Compiling
     */

    var Parser_1 = /*#__PURE__*/function () {
      function Parser(options) {
        this.options = options || defaults$4;
        this.options.renderer = this.options.renderer || new Renderer_1();
        this.renderer = this.options.renderer;
        this.renderer.options = this.options;
        this.textRenderer = new TextRenderer_1();
        this.slugger = new Slugger_1();
      }
      /**
       * Static Parse Method
       */


      Parser.parse = function parse(tokens, options) {
        var parser = new Parser(options);
        return parser.parse(tokens);
      }
      /**
       * Parse Loop
       */
      ;

      var _proto = Parser.prototype;

      _proto.parse = function parse(tokens, top) {
        if (top === void 0) {
          top = true;
        }

        var out = '',
            i,
            j,
            k,
            l2,
            l3,
            row,
            cell,
            header,
            body,
            token,
            ordered,
            start,
            loose,
            itemBody,
            item,
            checked,
            task,
            checkbox;
        var l = tokens.length;

        for (i = 0; i < l; i++) {
          token = tokens[i];

          switch (token.type) {
            case 'space':
              {
                continue;
              }

            case 'hr':
              {
                out += this.renderer.hr();
                continue;
              }

            case 'heading':
              {
                out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape$1(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
                continue;
              }

            case 'code':
              {
                out += this.renderer.code(token.text, token.lang, token.escaped);
                continue;
              }

            case 'table':
              {
                header = ''; // header

                cell = '';
                l2 = token.header.length;

                for (j = 0; j < l2; j++) {
                  cell += this.renderer.tablecell(this.parseInline(token.tokens.header[j]), {
                    header: true,
                    align: token.align[j]
                  });
                }

                header += this.renderer.tablerow(cell);
                body = '';
                l2 = token.cells.length;

                for (j = 0; j < l2; j++) {
                  row = token.tokens.cells[j];
                  cell = '';
                  l3 = row.length;

                  for (k = 0; k < l3; k++) {
                    cell += this.renderer.tablecell(this.parseInline(row[k]), {
                      header: false,
                      align: token.align[k]
                    });
                  }

                  body += this.renderer.tablerow(cell);
                }

                out += this.renderer.table(header, body);
                continue;
              }

            case 'blockquote':
              {
                body = this.parse(token.tokens);
                out += this.renderer.blockquote(body);
                continue;
              }

            case 'list':
              {
                ordered = token.ordered;
                start = token.start;
                loose = token.loose;
                l2 = token.items.length;
                body = '';

                for (j = 0; j < l2; j++) {
                  item = token.items[j];
                  checked = item.checked;
                  task = item.task;
                  itemBody = '';

                  if (item.task) {
                    checkbox = this.renderer.checkbox(checked);

                    if (loose) {
                      if (item.tokens.length > 0 && item.tokens[0].type === 'text') {
                        item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

                        if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                          item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                        }
                      } else {
                        item.tokens.unshift({
                          type: 'text',
                          text: checkbox
                        });
                      }
                    } else {
                      itemBody += checkbox;
                    }
                  }

                  itemBody += this.parse(item.tokens, loose);
                  body += this.renderer.listitem(itemBody, task, checked);
                }

                out += this.renderer.list(body, ordered, start);
                continue;
              }

            case 'html':
              {
                // TODO parse inline content if parameter markdown=1
                out += this.renderer.html(token.text);
                continue;
              }

            case 'paragraph':
              {
                out += this.renderer.paragraph(this.parseInline(token.tokens));
                continue;
              }

            case 'text':
              {
                body = token.tokens ? this.parseInline(token.tokens) : token.text;

                while (i + 1 < l && tokens[i + 1].type === 'text') {
                  token = tokens[++i];
                  body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
                }

                out += top ? this.renderer.paragraph(body) : body;
                continue;
              }

            default:
              {
                var errMsg = 'Token with "' + token.type + '" type was not found.';

                if (this.options.silent) {
                  console.error(errMsg);
                  return;
                } else {
                  throw new Error(errMsg);
                }
              }
          }
        }

        return out;
      }
      /**
       * Parse Inline Tokens
       */
      ;

      _proto.parseInline = function parseInline(tokens, renderer) {
        renderer = renderer || this.renderer;
        var out = '',
            i,
            token;
        var l = tokens.length;

        for (i = 0; i < l; i++) {
          token = tokens[i];

          switch (token.type) {
            case 'escape':
              {
                out += renderer.text(token.text);
                break;
              }

            case 'html':
              {
                out += renderer.html(token.text);
                break;
              }

            case 'link':
              {
                out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
                break;
              }

            case 'image':
              {
                out += renderer.image(token.href, token.title, token.text);
                break;
              }

            case 'strong':
              {
                out += renderer.strong(this.parseInline(token.tokens, renderer));
                break;
              }

            case 'em':
              {
                out += renderer.em(this.parseInline(token.tokens, renderer));
                break;
              }

            case 'codespan':
              {
                out += renderer.codespan(token.text);
                break;
              }

            case 'br':
              {
                out += renderer.br();
                break;
              }

            case 'del':
              {
                out += renderer.del(this.parseInline(token.tokens, renderer));
                break;
              }

            case 'text':
              {
                out += renderer.text(token.text);
                break;
              }

            default:
              {
                var errMsg = 'Token with "' + token.type + '" type was not found.';

                if (this.options.silent) {
                  console.error(errMsg);
                  return;
                } else {
                  throw new Error(errMsg);
                }
              }
          }
        }

        return out;
      };

      return Parser;
    }();

    var merge$2 = helpers.merge,
        checkSanitizeDeprecation$1 = helpers.checkSanitizeDeprecation,
        escape$2 = helpers.escape;
    var getDefaults = defaults.getDefaults,
        changeDefaults = defaults.changeDefaults,
        defaults$5 = defaults.defaults;
    /**
     * Marked
     */

    function marked(src, opt, callback) {
      // throw error in case of non string input
      if (typeof src === 'undefined' || src === null) {
        throw new Error('marked(): input parameter is undefined or null');
      }

      if (typeof src !== 'string') {
        throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
      }

      if (typeof opt === 'function') {
        callback = opt;
        opt = null;
      }

      opt = merge$2({}, marked.defaults, opt || {});
      checkSanitizeDeprecation$1(opt);

      if (callback) {
        var highlight = opt.highlight;
        var tokens;

        try {
          tokens = Lexer_1.lex(src, opt);
        } catch (e) {
          return callback(e);
        }

        var done = function done(err) {
          var out;

          if (!err) {
            try {
              out = Parser_1.parse(tokens, opt);
            } catch (e) {
              err = e;
            }
          }

          opt.highlight = highlight;
          return err ? callback(err) : callback(null, out);
        };

        if (!highlight || highlight.length < 3) {
          return done();
        }

        delete opt.highlight;
        if (!tokens.length) return done();
        var pending = 0;
        marked.walkTokens(tokens, function (token) {
          if (token.type === 'code') {
            pending++;
            highlight(token.text, token.lang, function (err, code) {
              if (err) {
                return done(err);
              }

              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }

              pending--;

              if (pending === 0) {
                done();
              }
            });
          }
        });

        if (pending === 0) {
          done();
        }

        return;
      }

      try {
        var _tokens = Lexer_1.lex(src, opt);

        if (opt.walkTokens) {
          marked.walkTokens(_tokens, opt.walkTokens);
        }

        return Parser_1.parse(_tokens, opt);
      } catch (e) {
        e.message += '\nPlease report this to https://github.com/markedjs/marked.';

        if (opt.silent) {
          return '<p>An error occurred:</p><pre>' + escape$2(e.message + '', true) + '</pre>';
        }

        throw e;
      }
    }
    /**
     * Options
     */


    marked.options = marked.setOptions = function (opt) {
      merge$2(marked.defaults, opt);
      changeDefaults(marked.defaults);
      return marked;
    };

    marked.getDefaults = getDefaults;
    marked.defaults = defaults$5;
    /**
     * Use Extension
     */

    marked.use = function (extension) {
      var opts = merge$2({}, extension);

      if (extension.renderer) {
        (function () {
          var renderer = marked.defaults.renderer || new Renderer_1();

          var _loop = function _loop(prop) {
            var prevRenderer = renderer[prop];

            renderer[prop] = function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              var ret = extension.renderer[prop].apply(renderer, args);

              if (ret === false) {
                ret = prevRenderer.apply(renderer, args);
              }

              return ret;
            };
          };

          for (var prop in extension.renderer) {
            _loop(prop);
          }

          opts.renderer = renderer;
        })();
      }

      if (extension.tokenizer) {
        (function () {
          var tokenizer = marked.defaults.tokenizer || new Tokenizer_1();

          var _loop2 = function _loop2(prop) {
            var prevTokenizer = tokenizer[prop];

            tokenizer[prop] = function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              var ret = extension.tokenizer[prop].apply(tokenizer, args);

              if (ret === false) {
                ret = prevTokenizer.apply(tokenizer, args);
              }

              return ret;
            };
          };

          for (var prop in extension.tokenizer) {
            _loop2(prop);
          }

          opts.tokenizer = tokenizer;
        })();
      }

      if (extension.walkTokens) {
        var walkTokens = marked.defaults.walkTokens;

        opts.walkTokens = function (token) {
          extension.walkTokens(token);

          if (walkTokens) {
            walkTokens(token);
          }
        };
      }

      marked.setOptions(opts);
    };
    /**
     * Run callback for every token
     */


    marked.walkTokens = function (tokens, callback) {
      for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
        var token = _step.value;
        callback(token);

        switch (token.type) {
          case 'table':
            {
              for (var _iterator2 = _createForOfIteratorHelperLoose(token.tokens.header), _step2; !(_step2 = _iterator2()).done;) {
                var cell = _step2.value;
                marked.walkTokens(cell, callback);
              }

              for (var _iterator3 = _createForOfIteratorHelperLoose(token.tokens.cells), _step3; !(_step3 = _iterator3()).done;) {
                var row = _step3.value;

                for (var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;) {
                  var _cell = _step4.value;
                  marked.walkTokens(_cell, callback);
                }
              }

              break;
            }

          case 'list':
            {
              marked.walkTokens(token.items, callback);
              break;
            }

          default:
            {
              if (token.tokens) {
                marked.walkTokens(token.tokens, callback);
              }
            }
        }
      }
    };
    /**
     * Expose
     */


    marked.Parser = Parser_1;
    marked.parser = Parser_1.parse;
    marked.Renderer = Renderer_1;
    marked.TextRenderer = TextRenderer_1;
    marked.Lexer = Lexer_1;
    marked.lexer = Lexer_1.lex;
    marked.Tokenizer = Tokenizer_1;
    marked.Slugger = Slugger_1;
    marked.parse = marked;
    var marked_1 = marked;

    return marked_1;

  })));
  });

  function transferFile(codeStr) {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });
    marked.setOptions({
      highlight: function highlight(codeStr) {
        return hljs.highlightAuto(codeStr).value;
      }
    });
    return marked(codeStr);
  }

  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var CodePreview = /*#__PURE__*/function (_Component) {
    _inherits(CodePreview, _Component);

    var _super = _createSuper$3(CodePreview);

    function CodePreview(props) {
      var _this;

      _classCallCheck(this, CodePreview);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "renderPreview", function (_ref) {
        var getPrefixCls = _ref.getPrefixCls;
        var _this$props = _this.props,
            children = _this$props.children,
            _this$props$code = _this$props.code,
            code = _this$props$code === void 0 ? '' : _this$props$code,
            title = _this$props.title;
        var isExpand = _this.state.isExpand;
        var prefixCls = getPrefixCls("code-preview");
        var classes = classnames(prefixCls);
        code = Array.isArray(code) ? code : [code];
        code = code.reduce(function (str, item) {
          return str += '```' + "".concat(item || '暂无代码') + '```\n';
        }, '');
        return /*#__PURE__*/React__default.createElement("div", {
          className: classes
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "".concat(prefixCls, "-title")
        }, title), /*#__PURE__*/React__default.createElement("div", {
          className: "".concat(prefixCls, "-content")
        }, children), /*#__PURE__*/React__default.createElement("div", {
          className: "".concat(prefixCls, "-expand"),
          onClick: function onClick() {
            _this.setState({
              isExpand: !isExpand
            });
          }
        }, /*#__PURE__*/React__default.createElement(Icon, {
          icon: isExpand ? "up" : "down"
        })), /*#__PURE__*/React__default.createElement("div", {
          className: "".concat(prefixCls, "-code"),
          style: {
            display: !isExpand ? 'none' : 'block'
          },
          dangerouslySetInnerHTML: {
            __html: transferFile(code)
          }
        }));
      });

      _this.state = {
        isExpand: false
      };
      return _this;
    }

    _createClass(CodePreview, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React__default.createElement(Consumer, null, this.renderPreview);
      }
    }]);

    return CodePreview;
  }(React.Component);

  var _Dialog$defaultProps;

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var Dialog = /*#__PURE__*/function (_React$Component) {
    _inherits(Dialog, _React$Component);

    var _super = _createSuper$4(Dialog);

    function Dialog(props) {
      var _this;

      _classCallCheck(this, Dialog);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "close", function (e) {
        var onClose = _this.props.onClose;
        if (!onClose) throw new Error("请声明onClose事件");
        onClose(e);
      });

      _defineProperty(_assertThisInitialized(_this), "onMasKClose", function () {
        var maskClosable = _this.props.maskClosable;
        if (!maskClosable) return;

        _this.close();
      });

      _defineProperty(_assertThisInitialized(_this), "renderDialog", function (_ref) {
        var getPrefixCls = _ref.getPrefixCls;
        var _this$props = _this.props,
            className = _this$props.className,
            children = _this$props.children,
            closable = _this$props.closable,
            title = _this$props.title,
            propsFooter = _this$props.footer,
            visible = _this$props.visible,
            destroyOnClose = _this$props.destroyOnClose,
            zIndex = _this$props.zIndex,
            width = _this$props.width,
            centered = _this$props.centered,
            bodyStyle = _this$props.bodyStyle;
        var prefixCls = getPrefixCls("dialog");
        var classes = classnames("".concat(prefixCls, "-container"), _defineProperty({}, "".concat(prefixCls, "-centered"), centered), className);
        var closeBtn = null;
        var header = null;
        var footer = null;

        if (closable) {
          closeBtn = /*#__PURE__*/React__default.createElement("div", {
            className: "".concat(prefixCls, "-close-btn"),
            onClick: _this.close
          }, /*#__PURE__*/React__default.createElement(Icon, {
            icon: "close"
          }));
        }

        if (title || closable) {
          header = /*#__PURE__*/React__default.createElement("div", {
            className: "".concat(prefixCls, "-header")
          }, /*#__PURE__*/React__default.createElement("span", null, title), closeBtn);
        }

        if (propsFooter) {
          footer = /*#__PURE__*/React__default.createElement("div", {
            className: "".concat(prefixCls, "-footer")
          }, " ", propsFooter);
        } // 关闭销毁


        if (!visible && destroyOnClose) {
          return null;
        }

        return /*#__PURE__*/React__default.createElement("div", {
          className: classes,
          style: _objectSpread$1(_objectSpread$1({}, bodyStyle), {}, {
            zIndex: zIndex,
            width: width
          })
        }, header, /*#__PURE__*/React__default.createElement("div", {
          className: "".concat(prefixCls, "-content")
        }, children), footer);
      });

      _defineProperty(_assertThisInitialized(_this), "renderMask", function () {
        var _this$props2 = _this.props,
            maskClassName = _this$props2.maskClassName,
            mask = _this$props2.mask,
            visible = _this$props2.visible;
        if (!mask || !visible) return null;
        return /*#__PURE__*/React__default.createElement("div", {
          className: "serein-dialog-mask ".concat(maskClassName),
          onClick: _this.onMasKClose
        });
      });

      _this.state = {};
      return _this;
    }

    _createClass(Dialog, [{
      key: "componentDidMount",
      value: function componentDidMount() {} // 关闭

    }, {
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            wrapClassName = _this$props3.wrapClassName,
            visible = _this$props3.visible;
        var style = {};
        style.display = visible ? "block" : "none";
        return /*#__PURE__*/React__default.createElement("div", {
          className: "serein-dialog-wrap ".concat(wrapClassName),
          style: style
        }, this.renderMask(), /*#__PURE__*/React__default.createElement(Consumer, null, this.renderDialog));
      }
    }]);

    return Dialog;
  }(React__default.Component);

  Dialog.defaultProps = (_Dialog$defaultProps = {
    width: 600,
    zIndex: 100,
    visible: false,
    title: "",
    className: "",
    wrapClassName: "",
    maskClassName: "",
    mask: true
  }, _defineProperty(_Dialog$defaultProps, "visible", false), _defineProperty(_Dialog$defaultProps, "keyboard", true), _defineProperty(_Dialog$defaultProps, "closable", true), _defineProperty(_Dialog$defaultProps, "maskClosable", true), _defineProperty(_Dialog$defaultProps, "destroyOnClose", false), _defineProperty(_Dialog$defaultProps, "centered", false), _Dialog$defaultProps);
  Dialog.propTypes = {
    width: propTypes_8,
    zIndex: propTypes_8,
    title: propTypes_5,
    className: propTypes_5,
    wrapClassName: propTypes_5,
    maskClassName: propTypes_5,
    mask: propTypes_6,
    visible: propTypes_6,
    closable: propTypes_6,
    maskClosable: propTypes_6,
    destroyOnClose: propTypes_6,
    prefixCls: propTypes_5,
    footer: propTypes_7,
    centered: propTypes_6,
    bodyStyle: propTypes_4
  };

  function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var Modal = /*#__PURE__*/function (_React$Component) {
    _inherits(Modal, _React$Component);

    var _super = _createSuper$5(Modal);

    function Modal() {
      var _this;

      _classCallCheck(this, Modal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "renderFooter", function (_ref) {
        var prefixCls = _ref.prefixCls;
        var _this$props = _this.props,
            cancelText = _this$props.cancelText,
            onText = _this$props.onText,
            onCancel = _this$props.onCancel,
            onOk = _this$props.onOk;
        return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Button, {
          onClick: onCancel,
          size: "middle",
          className: "".concat(prefixCls, "-cancel")
        }, cancelText), /*#__PURE__*/React__default.createElement(Button, {
          type: "primary",
          onClick: onOk,
          size: "middle",
          className: "".concat(prefixCls, "-ok")
        }, onText));
      });

      _defineProperty(_assertThisInitialized(_this), "renderModal", function (_ref2) {
        var getPrefixCls = _ref2.getPrefixCls;
        var _this$props2 = _this.props,
            title = _this$props2.title,
            visible = _this$props2.visible,
            onClose = _this$props2.onClose,
            className = _this$props2.className,
            children = _this$props2.children,
            maskClosable = _this$props2.maskClosable,
            wrapClassName = _this$props2.wrapClassName,
            maskClassName = _this$props2.maskClassName,
            mask = _this$props2.mask,
            closable = _this$props2.closable,
            destroyOnClose = _this$props2.destroyOnClose,
            footer = _this$props2.footer,
            zIndex = _this$props2.zIndex,
            width = _this$props2.width,
            bodyStyle = _this$props2.bodyStyle;
        var prefixCls = getPrefixCls("modal"); // 默认底部

        var defineFooter = footer;

        if (footer === undefined) {
          defineFooter = /*#__PURE__*/React__default.createElement("div", {
            className: "".concat(prefixCls, "-footer")
          }, _this.renderFooter({
            prefixCls: prefixCls
          }));
        }

        return /*#__PURE__*/React__default.createElement(Dialog, {
          bodyStyle: bodyStyle,
          width: width,
          zIndex: zIndex,
          title: title,
          visible: visible,
          onClose: onClose,
          className: className,
          wrapClassName: wrapClassName,
          maskClassName: maskClassName,
          mask: mask,
          closable: closable,
          maskClosable: maskClosable,
          destroyOnClose: destroyOnClose,
          prefixCls: prefixCls,
          footer: defineFooter
        }, children);
      });

      return _this;
    }

    _createClass(Modal, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React__default.createElement(Consumer, null, this.renderModal);
      }
    }]);

    return Modal;
  }(React__default.Component);

  Modal.defaultProps = {
    width: 600,
    zIndex: 100,
    visible: false,
    title: "",
    className: "",
    wrapClassName: "",
    maskClassName: "",
    mask: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: "",
    cancelText: "取消",
    onText: "确定",
    centered: false
  };
  Modal.propTypes = {
    width: propTypes_8,
    zIndex: propTypes_8,
    title: propTypes_5,
    className: propTypes_5,
    wrapClassName: propTypes_5,
    maskClassName: propTypes_5,
    mask: propTypes_6,
    visible: propTypes_6,
    closable: propTypes_6,
    maskClosable: propTypes_6,
    destroyOnClose: propTypes_6,
    prefixCls: propTypes_5,
    footer: propTypes_7,
    cancelText: propTypes_5,
    onText: propTypes_5,
    centered: propTypes_6,
    bodyStyle: propTypes_4
  };

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var ConfirmDialog = /*#__PURE__*/function (_React$Component) {
    _inherits(ConfirmDialog, _React$Component);

    var _super = _createSuper$6(ConfirmDialog);

    function ConfirmDialog() {
      var _this;

      _classCallCheck(this, ConfirmDialog);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "renderIcon", function () {
        var _this$props = _this.props,
            _this$props$type = _this$props.type,
            type = _this$props$type === void 0 ? "confirm" : _this$props$type,
            _this$props$icon = _this$props.icon,
            icon = _this$props$icon === void 0 ? "question-circle-fill" : _this$props$icon;
        var classes = classnames("serein-confirm-icon", _defineProperty({}, "serein-confirm-".concat(type), type));
        return /*#__PURE__*/React__default.createElement(Icon, {
          icon: icon,
          className: classes
        });
      });

      _defineProperty(_assertThisInitialized(_this), "renderActionButton", function () {
        var _this$props2 = _this.props,
            _this$props2$type = _this$props2.type,
            type = _this$props2$type === void 0 ? "confirm" : _this$props2$type,
            onClose = _this$props2.onClose,
            onOk = _this$props2.onOk;

        if (type === "confirm") {
          return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Button, {
            size: "middle",
            className: "serein-confirm-btn-left",
            onClick: onClose
          }, "\u53D6\u6D88"), /*#__PURE__*/React__default.createElement(Button, {
            size: "middle",
            type: "primary",
            onClick: onOk
          }, "\u786E\u8BA4"));
        } else {
          return /*#__PURE__*/React__default.createElement(Button, {
            size: "middle",
            type: "primary",
            onClick: onClose
          }, "\u77E5\u9053\u4E86");
        }
      });

      return _this;
    }

    _createClass(ConfirmDialog, [{
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            title = _this$props3.title,
            content = _this$props3.content;
        return /*#__PURE__*/React__default.createElement(Modal, _extends({}, this.props, {
          title: ""
        }), /*#__PURE__*/React__default.createElement("div", {
          className: "serein-confirm-title"
        }, this.renderIcon(), /*#__PURE__*/React__default.createElement("span", null, title)), /*#__PURE__*/React__default.createElement("div", {
          className: "serein-confirm-content"
        }, content), /*#__PURE__*/React__default.createElement("div", {
          className: "serein-confirm-footer"
        }, this.renderActionButton()));
      }
    }]);

    return ConfirmDialog;
  }(React__default.Component);

  function confirm(config) {
    var _oDiv = document.createElement("div");

    document.body.appendChild(_oDiv);

    function destroy() {
      var unmountResult = ReactDOM.unmountComponentAtNode(_oDiv);

      if (unmountResult && _oDiv.parentNode) {
        _oDiv.parentNode.removeChild(_oDiv);
      }
    }

    function render(props) {
      ReactDOM.render( /*#__PURE__*/React__default.createElement(ConfirmDialog, _extends({}, props, {
        visible: true,
        onClose: destroy,
        footer: false,
        closable: false,
        maskClosable: false,
        width: 400,
        bodyStyle: _objectSpread$2({
          top: "8%"
        }, props.bodyStyle)
      })), _oDiv);
    }

    render(config);
  }

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  Modal.warning = function (props) {
    var config = _objectSpread$3({
      icon: "warning-circle-fill",
      type: "warning"
    }, props);

    return confirm(config);
  };

  Modal.info = function (props) {
    var config = _objectSpread$3({
      icon: "info-circle-fill",
      type: "info"
    }, props);

    return confirm(config);
  };

  Modal.success = function (props) {
    var config = _objectSpread$3({
      icon: "check-circle-fill",
      type: "success"
    }, props);

    return confirm(config);
  };

  Modal.error = function (props) {
    var config = _objectSpread$3({
      icon: "close-circle-fill",
      type: "error"
    }, props);

    return confirm(config);
  };

  Modal.confirm = confirm;

  function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var Space = /*#__PURE__*/function (_React$Component) {
    _inherits(Space, _React$Component);

    var _super = _createSuper$7(Space);

    function Space() {
      var _this;

      _classCallCheck(this, Space);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "renderSpaceCps", function () {
        var children = _this.props.children;
        return /*#__PURE__*/React__default.createElement("div", {
          className: "serein-space-wrap",
          style: {
            display: "inline-flex"
          }
        }, React__default.Children.map(children, function (child) {
          return /*#__PURE__*/React__default.createElement("div", {
            style: {
              marginRight: "8px"
            }
          }, child);
        }));
      });

      return _this;
    }

    _createClass(Space, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, this.renderSpaceCps());
      }
    }]);

    return Space;
  }(React__default.Component);

  function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var Notification = /*#__PURE__*/function (_React$Component) {
    _inherits(Notification, _React$Component);

    var _super = _createSuper$8(Notification);

    function Notification() {
      _classCallCheck(this, Notification);

      return _super.apply(this, arguments);
    }

    _createClass(Notification, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React__default.createElement("p", null, "123456");
      }
    }]);

    return Notification;
  }(React__default.Component);

  var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] =
      GeneratorFunction.displayName = "GeneratorFunction";

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        prototype[method] = function(arg) {
          return this._invoke(method, arg);
        };
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    Gp[toStringTagSymbol] = "Generator";

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
     module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  var regenerator = runtime_1;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  /**
   * 将传入文件base64编码转成文件类型
   * @param {String} dataurl 传入的文件base64编码
   * @param {String} filename 文件名
   * @param {String} type 文件类型
   */
  /**
   * 代理加载图片
   */
  // let myImage = (function() {
  //   let imgNode = document.createElement('img')
  //   document.body.appendChild(imgNode);
  //   return {
  //     setSrc: function(src) {
  //       imgNode.src = src;
  //     }
  //   }
  // })()
  // let proxyImage = (function() {
  //   let img = new Image()
  //   img.onload = function() {
  //     myImage.setSrc(this.src)
  //   }
  //   return {
  //     setSrc: function(src) {
  //       myImage.setSrc('loading.gif')
  //       img.src = src
  //     }
  //   }
  // })
  // export function lazyLoadImage(element) {
  //   if (getScrollTop(element) <= getScrollTop()) {
  //     element.setAttribute(src, element.getAttribute("data-src"));
  //   }
  // }

  /**
   * 执行方法
   * @param func
   * @param params
   * @returns {*}
   */
  var tryFunc = function tryFunc(func) {
    if (func instanceof Function) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      return func.apply(void 0, params);
    }

    return func;
  };
  /**
   * 执行promise方法
   * @param func 传入执行的函数
   * @param params 传入的参数
   * @returns {Promise<any>} 返回的Promise对象
   */

  var tryPromiseFunc = function tryPromiseFunc(func) {
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }

    return new Promise(function (resolve, reject) {
      try {
        var res = tryFunc.apply(void 0, [func].concat(params));

        if (res instanceof Promise) {
          res.then(function (data) {
            return resolve(data);
          })["catch"](function (err) {
            return reject(err);
          });
        } else {
          resolve(res);
        }
      } catch (err) {
        reject(err);
      }
    });
  };
  /**
   * 获取url路径上的键值对
   * @param url
   * @return {URLSearchParams} 返回一个实例
   */

  var searchParams = new URLSearchParams(location.search.replace(/\?/gi, ""));

  function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var DragList = /*#__PURE__*/function (_React$Component) {
    _inherits(DragList, _React$Component);

    var _super = _createSuper$9(DragList);

    function DragList(props) {
      var _this;

      _classCallCheck(this, DragList);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "docClick", function () {
        _this.isClickEvent = true;
      });

      _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (e) {
        var beforeDragStart = _this.props.beforeDragStart; // 当元素执行click事件时，阻止onmousedown执行的内容

        _this.isClickEvent = false;
        setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
          var node, isContinue, elementSite;
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this._startX = e.clientX;
                  _this._startY = e.clientY;
                  node = document.elementFromPoint(_this._startX, _this._startY);
                  node = _this.findContainerChild(node); // 监听父级事件

                  _context.next = 6;
                  return tryPromiseFunc(beforeDragStart, node);

                case 6:
                  isContinue = _context.sent;

                  if (!(isContinue === false)) {
                    _context.next = 9;
                    break;
                  }

                  return _context.abrupt("return", false);

                case 9:
                  if (node) {
                    _context.next = 11;
                    break;
                  }

                  return _context.abrupt("return", false);

                case 11:
                  _this.currentNode = node;
                  elementSite = _this.getEleSizeAndSite(node);
                  _this.currentNodeTop = elementSite.y;
                  _this.currentNodeLeft = elementSite.x;

                  _this.docMouseEvent();

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })), 200);
      });

      _defineProperty(_assertThisInitialized(_this), "handleMouseMove", /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(e) {
          var _this$props, isCopyNode, beforeDragMove, _moveX, _moveY, isContinue;

          return regenerator.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this$props = _this.props, isCopyNode = _this$props.isCopyNode, beforeDragMove = _this$props.beforeDragMove;
                  window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
                  _moveX = e.clientX;
                  _moveY = e.clientY;

                  _this.currentNode.classList.add("serein-draping-item");

                  if (isCopyNode && !_this.copyNode) {
                    _this.copyNode = _this.currentNode.cloneNode(true);

                    _this.copyNode.classList.add("serein-draping-copy-item");

                    document.body.appendChild(_this.copyNode);
                  }

                  if (_this.copyNode) {
                    _this.copyNode.style.top = _this.currentNodeTop + (_moveY - _this._startY) + "px";
                    _this.copyNode.style.left = _this.currentNodeLeft + (_moveX - _this._startX) + "px";
                  }

                  _this.pointNode = document.elementFromPoint(_moveX, _moveY);
                  _this.pointNode = _this.findContainerChild(_this.pointNode);
                  _context2.next = 11;
                  return tryPromiseFunc(beforeDragMove, _this.currentNode, _this.pointNode);

                case 11:
                  isContinue = _context2.sent;

                  if (!(isContinue === false)) {
                    _context2.next = 14;
                    break;
                  }

                  return _context2.abrupt("return", false);

                case 14:
                  if (_this.pointNode) {
                    _this.handleDomMoveIn(_moveX, _moveY);
                  }

                case 15:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());

      _defineProperty(_assertThisInitialized(_this), "handleDomMoveIn", function (_moveX, _moveY) {
        var direction = _this.props.direction;

        var _pointSite = _this.getEleSizeAndSite(_this.pointNode);

        if (direction === "vertical") {
          if (_moveY <= _pointSite.y + _pointSite.height / 2) {
            _this.pointNode.parentNode.insertBefore(_this.currentNode, _this.pointNode);
          } else {
            _this.pointNode.parentNode.insertBefore(_this.currentNode, _this.pointNode.nextElementSibling);
          }
        } else {
          if (_moveX <= _pointSite.x + _pointSite.width / 2) {
            _this.pointNode.parentNode.insertBefore(_this.currentNode, _this.pointNode);
          } else {
            _this.pointNode.parentNode.insertBefore(_this.currentNode, _this.pointNode.nextElementSibling);
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function () {
        var afterDragEnd = _this.props.afterDragEnd;
        var _oDivWrap = _this.dragList.current;
        var children = Array.from(_oDivWrap.children) || [];
        var result = children.map(function (ele) {
          return ele.dataset.key;
        });
        afterDragEnd && afterDragEnd(result);

        _this.currentNode.classList.remove("serein-draping-item");

        _this.docMouseEvent(true);

        if (_this.copyNode) {
          document.body.removeChild(_this.copyNode);
        }

        _this.clear();
      });

      _defineProperty(_assertThisInitialized(_this), "getEleSizeAndSite", function (ele) {
        return ele.getBoundingClientRect();
      });

      _this.dragList = React__default.createRef(); // 防止一个应用中使用多个DragList组件，导致共享一个闭包的问题

      _this.currentNode = null;
      _this.isClickEvent = false;
      _this._startX = 0;
      _this._startY = 0;
      _this.pointNode = null;
      _this.currentNodeTop = 0;
      _this.currentNodeLeft = 0;
      _this.copyNode = null;
      return _this;
    }

    _createClass(DragList, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var dragWrapLength = document.getElementsByClassName("serein-dragList-wrap").length || 1;
        this._oDivWrap = dragWrapLength > 1 ? this.dragList.current : document;

        this._oDivWrap.addEventListener("mousedown", this.handleMouseDown);

        this._oDivWrap.addEventListener("click", this.docClick);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this._oDivWrap.removeEventListener("mousedown", this.handleMouseDown);

        this._oDivWrap.removeEventListener("click", this.docClick);
      }
    }, {
      key: "clear",
      value: function clear() {
        this.currentNode = null;
        this.isClickEvent = false;
        this._startX = 0;
        this._startY = 0;
        this.pointNode = null;
        this.currentNodeTop = 0;
        this.currentNodeLeft = 0;
        this.copyNode = null;
      }
    }, {
      key: "docMouseEvent",
      value: function docMouseEvent(remove) {
        if (remove) {
          this._oDivWrap.removeEventListener("mouseup", this.handleMouseUp);

          this._oDivWrap.removeEventListener("mousemove", this.handleMouseMove);

          this._oDivWrap.removeEventListener("mouseleave", this.handleMouseUp);
        } else {
          if (this.isClickEvent) return false;

          this._oDivWrap.addEventListener("mouseup", this.handleMouseUp);

          this._oDivWrap.addEventListener("mousemove", this.handleMouseMove);

          this._oDivWrap.addEventListener("mouseleave", this.handleMouseUp);
        }
      }
    }, {
      key: "findContainerChild",
      value: function findContainerChild(node) {
        if (node === document.documentElement || !(node instanceof HTMLElement)) return null;

        if (node.classList.contains("serein-dragList-item")) {
          return node;
        } else {
          var parentNode = node.parentNode;
          return this.findContainerChild(parentNode);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            children = _this$props2.children,
            itemClassName = _this$props2.itemClassName;
        return /*#__PURE__*/React__default.createElement("div", {
          ref: this.dragList,
          className: "serein-dragList-wrap"
        }, React__default.Children.map(children, function (child, index) {
          return /*#__PURE__*/React__default.createElement("div", {
            className: "serein-dragList-item ".concat(itemClassName),
            id: "serein-dragList-item-".concat(index),
            "data-key": child.key
          }, child);
        }));
      }
    }]);

    return DragList;
  }(React__default.Component);

  DragList.defaultProps = {
    isCopyNode: true,
    direction: "vertical",
    itemClassName: ''
  };
  DragList.propTypes = {
    beforeDragStart: propTypes_1,
    beforeDragMove: propTypes_1,
    afterDragEnd: propTypes_1,
    isCopyNode: propTypes_6,
    itemClassName: propTypes_5,
    direction: propTypes_2(["horizontal", "vertical"])
  };

  function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var PreviewImage = /*#__PURE__*/function (_React$Component) {
    _inherits(PreviewImage, _React$Component);

    var _super = _createSuper$a(PreviewImage);

    function PreviewImage(props) {
      var _this;

      _classCallCheck(this, PreviewImage);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "renderCloseBtn", function () {
        var onClose = _this.props.onClose;
        return /*#__PURE__*/React__default.createElement("div", {
          className: "serein-preview-image-close",
          onClick: onClose
        }, /*#__PURE__*/React__default.createElement(Icon, {
          icon: "close"
        }));
      });

      _defineProperty(_assertThisInitialized(_this), "handleError", function () {
        _this.setState({
          loadError: true
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleSuccess", function () {
        _this.setState({
          loadError: false
        });
      });

      _defineProperty(_assertThisInitialized(_this), "renderLayout", function (_ref) {
        var getPrefixCls = _ref.getPrefixCls;
        var _this$props = _this.props,
            list = _this$props.list,
            defaultError = _this$props.defaultError;
        var _this$state = _this.state,
            currentIndex = _this$state.currentIndex,
            loadError = _this$state.loadError;
        var prefixCls = getPrefixCls("preview-image");
        var leftBtn = null;
        var rightBtn = null;
        var errorNode = null;

        if (currentIndex !== 0) {
          leftBtn = /*#__PURE__*/React__default.createElement("div", {
            className: "".concat(prefixCls, "-left"),
            onClick: function onClick() {
              return _this.setState({
                currentIndex: currentIndex - 1,
                loadError: false
              });
            }
          }, /*#__PURE__*/React__default.createElement(Icon, {
            icon: "left"
          }));
        }

        if (currentIndex !== list.length - 1) {
          rightBtn = /*#__PURE__*/React__default.createElement("div", {
            className: "".concat(prefixCls, "-right"),
            onClick: function onClick() {
              return _this.setState({
                currentIndex: currentIndex + 1,
                loadError: false
              });
            }
          }, /*#__PURE__*/React__default.createElement(Icon, {
            icon: "right"
          }));
        }

        if (loadError) {
          errorNode = defaultError ? defaultError : /*#__PURE__*/React__default.createElement("div", {
            className: "".concat(prefixCls, "-error")
          }, "\u56FE\u7247\u4E0D\u5B58\u5728");
        }

        return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, leftBtn, rightBtn, /*#__PURE__*/React__default.createElement("div", {
          className: "".concat(prefixCls, "-content")
        }, !loadError ? /*#__PURE__*/React__default.createElement("img", {
          src: list[currentIndex],
          alt: "",
          onError: _this.handleError
        }) : errorNode));
      });

      _this.state = {
        currentIndex: props.currentIndex
      };
      return _this;
    }

    _createClass(PreviewImage, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener("load", this.handleSuccess);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener("load", this.handleSuccess);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "serein-preview-image-wrap"
        }, this.renderCloseBtn(), /*#__PURE__*/React__default.createElement(Consumer, null, this.renderLayout));
      }
    }]);

    return PreviewImage;
  }(React__default.Component);

  PreviewImage.defaultProps = {
    currentIndex: 0,
    list: []
  };
  PreviewImage.propTypes = {
    currentIndex: propTypes_8.isRequired,
    list: propTypes_9.isRequired,
    defaultError: propTypes_7
  };
  var _oDiv = null;

  function init() {
    _oDiv = document.createElement("div");
    document.body.appendChild(_oDiv);
  }

  function destory() {
    if (_oDiv) {
      ReactDOM.unmountComponentAtNode(_oDiv);

      _oDiv.parentNode.removeChild(_oDiv);

      _oDiv = null;
    }
  }

  var previewImage = function previewImage(_ref2) {
    var _ref2$currentIndex = _ref2.currentIndex,
        currentIndex = _ref2$currentIndex === void 0 ? 0 : _ref2$currentIndex,
        _ref2$list = _ref2.list,
        list = _ref2$list === void 0 ? [] : _ref2$list,
        _ref2$defaultError = _ref2.defaultError,
        defaultError = _ref2$defaultError === void 0 ? '' : _ref2$defaultError;

    if (!_oDiv) {
      init();
    }

    ReactDOM.render( /*#__PURE__*/React__default.createElement(PreviewImage, {
      currentIndex: currentIndex,
      list: list,
      onClose: destory,
      defaultError: defaultError
    }), _oDiv);
  };

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var Checkbox = /*#__PURE__*/function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    var _super = _createSuper$b(Checkbox);

    function Checkbox(props) {
      var _this;

      _classCallCheck(this, Checkbox);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
        var _this$props = _this.props,
            disabled = _this$props.disabled,
            onChange = _this$props.onChange;

        if (disabled) {
          return;
        }

        if (!("checked" in _this.props)) {
          _this.setState({
            checked: e.target.checked
          });
        }

        onChange && onChange(e);
      });

      _defineProperty(_assertThisInitialized(_this), "renderCheckbox", function (_ref) {
        var _Classnames;

        var getPrefixCls = _ref.getPrefixCls;

        var _this$props2 = _this.props,
            disabled = _this$props2.disabled,
            children = _this$props2.children,
            onChange = _this$props2.onChange,
            className = _this$props2.className,
            value = _this$props2.value,
            others = _objectWithoutProperties(_this$props2, ["disabled", "children", "onChange", "className", "value"]);

        var checked = _this.state.checked;
        var globalProps = Object.keys(others).reduce(function (prev, key) {
          if (key.substr(0, 5) === "aria-" || key.substr(0, 5) === "data-" || key === "role") {
            prev[key] = others[key];
          }

          return prev;
        }, {});
        var prefixCls = getPrefixCls("checkbox");
        var classes = classnames((_Classnames = {}, _defineProperty(_Classnames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_Classnames, "".concat(prefixCls, "-checked"), checked), _Classnames), className);
        return /*#__PURE__*/React__default.createElement("label", {
          className: "".concat(prefixCls, "-wrap ").concat(classes)
        }, /*#__PURE__*/React__default.createElement("input", _extends({
          ref: _this.input,
          type: "checkbox",
          disabled: disabled,
          checked: checked,
          onChange: _this.handleChange,
          value: value
        }, globalProps)), /*#__PURE__*/React__default.createElement("span", null, children));
      });

      var defaultChecked = props.defaultChecked,
          _value = props.value;
      var initChecked = false;

      if (props.defaultChecked) {
        initChecked = Array.isArray(defaultChecked) ? defaultChecked.includes(_value) : defaultChecked;
      }

      var _checked = "checked" in props ? props.checked : initChecked;

      _this.state = {
        checked: _checked
      };
      _this.input = React__default.createRef();
      return _this;
    }

    _createClass(Checkbox, [{
      key: "focus",
      value: function focus() {
        this.input.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.input.blur();
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React__default.createElement(Consumer, null, this.renderCheckbox);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        if ("checked" in props) {
          return _objectSpread$4(_objectSpread$4({}, state), {}, {
            checked: props.checked
          });
        }

        return null;
      }
    }]);

    return Checkbox;
  }(React__default.Component);

  Checkbox.defaultProps = {
    defaultChecked: false,
    disabled: false,
    className: ""
  };
  Checkbox.propTypes = {
    defaultChecked: propTypes_3([propTypes_6, propTypes_9]),
    checked: propTypes_6,
    disabled: propTypes_6,
    onChange: propTypes_1,
    className: propTypes_5
  };

  function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var CheckboxGroup = /*#__PURE__*/function (_React$Component) {
    _inherits(CheckboxGroup, _React$Component);

    var _super = _createSuper$c(CheckboxGroup);

    function CheckboxGroup(props) {
      var _this;

      _classCallCheck(this, CheckboxGroup);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "getOptions", function () {
        var _this$props = _this.props,
            options = _this$props.options,
            disabled = _this$props.disabled;
        return options.map(function (option) {
          // 如果传入的是字符串数组，就组成所需的结构
          if (typeof option === "string") {
            return {
              label: option,
              value: option
            };
          }

          return option;
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleGroupChange", function (e) {
        var onChange = _this.props.onChange;
        var value = _this.state.value;
        var changeValue = e.target.value;
        var index = value.indexOf(e.target.value);

        if (index === -1) {
          value.push(changeValue);
        } else {
          value.splice(index, 1);
        }

        _this.setState({
          value: value
        }, function () {
          onChange && onChange(value);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "renderGroup", function (_ref) {
        var getPrefixCls = _ref.getPrefixCls;
        var _this$props2 = _this.props,
            options = _this$props2.options,
            disabled = _this$props2.disabled;
        var children = _this.props.children;
        var value = _this.state.value;
        var prefixCls = getPrefixCls("checkgroup");

        if (options && options.length > 0) {
          children = _this.getOptions().map(function (option) {
            return /*#__PURE__*/React__default.createElement(Checkbox, {
              key: option.value.toString(),
              disabled: "disabled" in option ? option.disabled : disabled,
              checked: value.indexOf(option.value) !== -1,
              value: option.value
            }, option.label);
          });
        } else {
          children = React__default.Children.map(children, function (child) {
            return React__default.cloneElement(child, {
              defaultChecked: value,
              disabled: disabled
            });
          });
        }

        return /*#__PURE__*/React__default.createElement("div", {
          className: "".concat(prefixCls, "-wrap"),
          onChange: _this.handleGroupChange
        }, children);
      });

      _this.state = {
        value: []
      };
      return _this;
    }

    _createClass(CheckboxGroup, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React__default.createElement(Consumer, null, this.renderGroup);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps) {
        if ("value" in nextProps) {
          return {
            value: nextProps.value || []
          };
        }

        return null;
      }
    }]);

    return CheckboxGroup;
  }(React__default.Component);

  CheckboxGroup.defaultProps = {
    options: [],
    value: [],
    disabled: false
  };
  CheckboxGroup.propTypes = {
    options: propTypes_9,
    onChange: propTypes_1,
    value: propTypes_9,
    disabled: propTypes_6
  };

  function handleCode(code, language) {
    return "```" + language + "\n" + code + "```\n";
  }

  var installCode = "npm install -D serein_ui\nyarn add -D serein_ui\n";
  var useCode = "import {Modal} from 'serein_ui'\nimport 'serein_ui/es/index.css'\nReactDOM.render(<Modal visible={true}>Hello Serein</Modal>, document.getElementById('root'))\n";
  var importCode = "yarn add -D serein-import \n\u6216\u8005 npm install -D serein-import\n\nconst sereinImport = require(\"serein-import\");\n// \u7136\u540E\u914D\u7F6Ebabel\u7684plugins\u5C31\u5927\u529F\u544A\u6210\u4E86\nplugins: [\n        ...\n        [\n        sereinImport,\n        { libraryName: \"serein_ui\", libraryDirectory: \"es\"},\n        ],\n    ],\n}\n// \u4EE3\u7801\u5C31\u4F1A\u88AB\u8F6C\u5316\u6210\u6307\u5B9A\u7684\u8DEF\u5F84\nimport { Button } from 'serein_ui'\n\u4F1A\u88AB\u8F6C\u5316\u4E3A\nimport Button from 'serein_ui/es/Button/index.js\nimport 'serein_ui/es/Button/index.css' \n";
  var instrction = "\n# \u5F00\u59CB\n\n## \u5B89\u88C5\n".concat(handleCode(installCode, "bash"), "\n\n## \u4F7F\u7528\n").concat(handleCode(useCode, "jsx"), " \n\n### \u6309\u9700\u52A0\u8F7D\n").concat(handleCode(importCode, "js"));
  var renderInstruction = transferFile(instrction);

  function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var Start = /*#__PURE__*/function (_React$Component) {
    _inherits(Start, _React$Component);

    var _super = _createSuper$d(Start);

    function Start() {
      var _this;

      _classCallCheck(this, Start);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "state", {});

      return _this;
    }

    _createClass(Start, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "instruction",
          dangerouslySetInnerHTML: {
            __html: renderInstruction
          }
        });
      }
    }]);

    return Start;
  }(React__default.Component);

  var instrction$1 = "\n# Button\n\n| \u5C5E\u6027      | \u8BF4\u660E                                                  | \u7C7B\u578B    | \u9ED8\u8BA4\u503C  |\n| --------- | ----------------------------------------------------- | ------- | ------- |\n| type      | \u8BBE\u7F6E\u6309\u94AE\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A primary default danger link    | string  | default |\n| size      | \u8BBE\u7F6E\u6309\u94AE\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A small middle large             | string  | large   |\n| ghost     | \u5E7D\u7075\u5C5E\u6027                                              | boolean | false   |\n| href      | \u70B9\u51FB\u8DF3\u8F6C\u7684\u5730\u5740\uFF0C\u6307\u5B9A\u6B64\u5C5E\u6027 button \u7684\u884C\u4E3A\u548C a \u94FE\u63A5\u4E00\u81F4 | string  | -       |  |\n| target    | \u76F8\u5F53\u4E8E a \u94FE\u63A5\u7684 target \u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548          | string  | -       |\n| htmlType  | \u8BBE\u7F6E button \u539F\u751F\u7684 type \u503C                            | string  | button  |\n| icon      | \u8BBE\u7F6E\u6309\u94AE\u7684\u56FE\u6807\u7C7B\u578B                                    | string  | -       |\n| className | \u6DFB\u52A0 class \u6837\u5F0F                                       | object  | {}      |\n| onClick   | \u70B9\u51FB button                                           | func    | -       |\n| children  | button \u5185\u5BB9                                           | -       | 'btn'   |\n| block     | \u662F\u5426\u5757\u72B6\u6837\u5F0F                                          | boolean | false   |\n| style     | \u884C\u5185\u6837\u5F0F                                              | object  | -       |\n";
  var renderInstruction$1 = transferFile(instrction$1);

  function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var typeCode = "jsx\n    <Button type='primary'>\u786E\u5B9A</Button>\n    <Button>\u9ED8\u8BA4</Button>\n    <Button type=\"danger\">danger</Button>\n    <Button type=\"link\" href=\"http://www.baidu.com\">Link</Button>\n    <Button icon={<Icon icon={\"search\"}></Icon>}></Button>\n    <Button type=\"primary\">\u786E\u5B9A</Button>\n    <Button>\u9ED8\u8BA4</Button>\n    <Button type=\"danger\">danger</Button>\n    <Button type=\"link\" href=\"http://www.baidu.com\">Link</Button>\n    <Button icon={<Icon icon={\"search\"}></Icon>}></Button>\n";
  var sizeCode = "jsx\n    <Button type=\"link\" size=\"middle\">Link</Button>\n    <Button type=\"primary\" size=\"small\">\u786E\u5B9A</Button>\n    <Button size=\"middle\">\u9ED8\u8BA4</Button>\n    <Button type=\"danger\" size=\"large\">danger</Button>\n";
  var ghostCode = "jsx\n    <Button type=\"primary\" ghost>\u786E\u5B9A</Button>\n    <Button ghost>\u9ED8\u8BA4</Button>\n    <Button type=\"danger\" ghost>danger</Button>\n";
  var blockCode = "jsx\n    <Button type=\"primary\" block>\u786E\u5B9A</Button>\n    <Button block>\u9ED8\u8BA4</Button>\n    <Button type=\"danger\" block>danger</Button>\n";

  var Form = /*#__PURE__*/function (_React$Component) {
    _inherits(Form, _React$Component);

    var _super = _createSuper$e(Form);

    function Form() {
      var _this;

      _classCallCheck(this, Form);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "state", {});

      return _this;
    }

    _createClass(Form, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "\u7C7B\u578B",
          code: typeCode
        }, /*#__PURE__*/React__default.createElement(Space, null, /*#__PURE__*/React__default.createElement(Button, {
          type: "primary"
        }, "\u786E\u5B9A"), /*#__PURE__*/React__default.createElement(Button, null, "\u9ED8\u8BA4"), /*#__PURE__*/React__default.createElement(Button, {
          type: "danger"
        }, "danger"), /*#__PURE__*/React__default.createElement(Button, {
          type: "link",
          href: "http://www.baidu.com"
        }, "Link"), /*#__PURE__*/React__default.createElement(Button, {
          icon: /*#__PURE__*/React__default.createElement(Icon, {
            icon: "search"
          })
        }))), /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "\u5927\u5C0F",
          code: sizeCode
        }, /*#__PURE__*/React__default.createElement(Space, null, /*#__PURE__*/React__default.createElement(Button, {
          type: "link",
          size: "middle"
        }, "Link"), /*#__PURE__*/React__default.createElement(Button, {
          type: "primary",
          size: "small"
        }, "\u786E\u5B9A"), /*#__PURE__*/React__default.createElement(Button, {
          size: "middle"
        }, "\u9ED8\u8BA4"), /*#__PURE__*/React__default.createElement(Button, {
          type: "danger",
          size: "large"
        }, "danger"))), /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "\u7075\u9B42\u6309\u94AE",
          code: ghostCode
        }, /*#__PURE__*/React__default.createElement(Space, null, /*#__PURE__*/React__default.createElement(Button, {
          type: "primary",
          ghost: true
        }, "\u786E\u5B9A"), /*#__PURE__*/React__default.createElement(Button, {
          ghost: true
        }, "\u9ED8\u8BA4"), /*#__PURE__*/React__default.createElement(Button, {
          type: "danger",
          ghost: true
        }, "danger"))), /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "\u5757\u72B6",
          code: blockCode
        }, /*#__PURE__*/React__default.createElement(Button, {
          type: "primary",
          block: true
        }, "\u786E\u5B9A"), /*#__PURE__*/React__default.createElement(Button, {
          block: true
        }, "\u9ED8\u8BA4"), /*#__PURE__*/React__default.createElement(Button, {
          type: "danger",
          block: true
        }, "danger")), /*#__PURE__*/React__default.createElement("div", {
          className: "instruction",
          dangerouslySetInnerHTML: {
            __html: renderInstruction$1
          }
        }));
      }
    }]);

    return Form;
  }(React__default.Component);

  function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var IconGroups = ["check-circle", "close-circle", "info-circle", "left-circle", "down-circle", "minus-circle", "plus-circle", "play-circle", "question-circle", "right-circle", "time out", "up-circle", "warning-circle", "sync", "redo", "message", "poweroff", "pie chart", "setting", "eye", "location", "edit-square", "export", "save", "app store", "close-square", "control", "code library", "detail", "minus-square", "plus-square", "check-square", "like", "unlike", "folder", "folder-open", "folder-add", "scan", "right", "left", "up", "down", "check", "close", "check-circle-fill", "left-circle-fill", "down-circle-fill", "minus-circle-fill", "close-circle-fill", "info-circle-fill", "up-circle-fill", "right-circle-fill", "plus-circle-fill", "search", "question-circle-fill", "warning-circle-fill", "check-square-fill", "folder-fill", "folder-open-fill"];

  var IconShow = /*#__PURE__*/function (_Component) {
    _inherits(IconShow, _Component);

    var _super = _createSuper$f(IconShow);

    function IconShow(props) {
      var _this;

      _classCallCheck(this, IconShow);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "handleCopyIcon", function (icon) {
        var tag = document.createElement("input");
        tag.setAttribute("id", "copt_text");
        tag.value = icon;
        tag.style.opacity = 0;
        document.body.appendChild(tag);
        document.getElementById("copt_text").select();
        var successful = document.execCommand("copy");

        if (successful) {
          alert("复制成功");
        } else {
          alert("复制失败");
        }

        document.getElementById("copt_text").remove();
      });

      _this.state = {};
      return _this;
    }

    _createClass(IconShow, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return /*#__PURE__*/React__default.createElement("div", null, IconGroups.map(function (v) {
          v = v.replace(" ", "");
          return /*#__PURE__*/React__default.createElement("div", {
            className: "serein-icon-wrap",
            key: v,
            onClick: function onClick() {
              return _this2.handleCopyIcon(v);
            }
          }, /*#__PURE__*/React__default.createElement(Icon, {
            icon: v,
            className: "serein-icon"
          }), /*#__PURE__*/React__default.createElement("p", null, v));
        }));
      }
    }]);

    return IconShow;
  }(React.Component);

  var instrction$2 = "\n# Modal\n\n| \u5C5E\u6027           | \u8BF4\u660E                                           | \u7C7B\u578B    | \u9ED8\u8BA4\u503C |\n| -------------- | ---------------------------------------------- | ------- | ------ |\n| width          | \u5F39\u51FA\u6846\u7684\u5BBD\u5EA6                                   | number  | 600    |\n| zIndex         | \u5F39\u51FA\u6846\u7684 z-index \u5C5E\u6027                          | number  | 100    |\n| visible        | \u63A7\u5236\u5F39\u51FA\u6846\u7684\u663E\u793A                               | boolean | false  |\n| title          | \u5F39\u51FA\u6846\u6807\u9898                                     | string  | -      |\n| className      | \u5F39\u51FA\u6846\u5185\u5BB9\u6837\u5F0F                                 | string  | -      |\n| wrapClassName  | \u5F39\u51FA\u6846\u6574\u4E2A\u5305\u88F9\u6837\u5F0F                             | string  | -      |\n| maskClassName  | \u9634\u5F71\u906E\u7F69\u6837\u5F0F                                   | string  | -      |\n| mask           | \u662F\u5426\u9700\u8981\u9634\u5F71\u906E\u7F69                               | string  | button |\n| closable       | \u5173\u95ED\u6309\u94AE                                       | boolean | true   |\n| maskClosable   | \u662F\u5426\u53EF\u70B9\u51FB\u9634\u5F71\u906E\u7F69\u5173\u95ED                         | boolean | true   |\n| destroyOnClose | \u5173\u95ED\u662F\u5426\u9500\u6BC1\u7EC4\u4EF6                               | boolean | false  |\n| cancelText     | \u53D6\u6D88\u6587\u672C                                       | string  | '\u53D6\u6D88\u2018 |\n| onText         | \u786E\u8BA4\u6587\u672C                                       | string  | '\u786E\u5B9A' |\n| onCancel       | \u53D6\u6D88\u4E8B\u4EF6                                       | func    | -      |\n| onOk           | \u786E\u8BA4\u4E8B\u4EF6                                       | func    | -      |\n| footer         | \u5E95\u90E8\u5185\u5BB9\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A null \u548C false\uFF0C\u4E0D\u9700\u8981\u5E95\u90E8 | node    | -      |\n| bodyStyle      | \u5F39\u51FA\u6846\u6837\u5F0F                                     | object  | -      |\n";
  var renderInstruction$2 = transferFile(instrction$2);

  function _createSuper$g(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$g(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$g() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var baseCode = "jsx\n<Button type=\"primary\"\n  onClick={() => {\n    this.setState({ baseVisible: true });\n  }}\n>\u6253\u5F00\u5F39\u6846</Button>\n<Modal\n  title=\"\u6211\u7684\u8BA1\u5212\"\n  visible={baseVisible}\n  onClose={() => this.setState({ baseVisible: false })}\n>\n  <li>\u4EFB\u52A1\u4E00</li>\n  <li>\u4EFB\u52A1\u4E8C</li>\n  <li>\u4EFB\u52A1\u4E09</li>\n</Modal>\n";
  var customCode = "jsx\n<Button type=\"primary\"\n  onClick={() => {\n    this.setState({ customVisible: true });\n  }}>\n  \u6253\u5F00\u5F39\u6846\n</Button>\n<Modal\n  title=\"\u6211\u7684\u8BA1\u5212\"\n  visible={customVisible}\n  onClose={() => this.setState({ customVisible: false })}\n  footer={<span>\u81EA\u5B9A\u4E49\u5E95\u90E8</span>}\n>\n  <li>\u4EFB\u52A1\u4E00</li>\n</Modal>\n";
  var confirmCode = "jsx\nhandleConfirm = () => {\n  Modal.confirm({ title: \"\u6211\u662F\u6807\u9898\", content: \"\u6211\u662F\u5185\u5BB9\u3002\u3002\u3002\u3002\u3002\u3002\" });\n};\nhandleConfirmError = () => {\n  Modal.error({ title: \"\u6211\u662F\u6807\u9898\", content: \"\u6211\u662Ferror\u3002\u3002\u3002\u3002\u3002\u3002\" });\n};\nhandleConfirmWarn = () => {\n  Modal.warning({ title: \"\u6211\u662F\u6807\u9898\", content: \"\u6211\u662Fwarn\u3002\u3002\u3002\u3002\u3002\u3002\" });\n};\nhandleConfirmSuccess = () => {\n  Modal.success({ title: \"\u6211\u662F\u6807\u9898\", content: \"\u6211\u662Fsuccess\u3002\u3002\u3002\u3002\u3002\u3002\" });\n};\nhandleConfirmInfo = () => {\n  Modal.info({ title: \"\u6211\u662F\u6807\u9898\", content: \"\u6211\u662Finfo\u3002\u3002\u3002\u3002\u3002\u3002\" });\n};\n\n<Button onClick={this.handleConfirm}>confirm</Button>\n<Button onClick={this.handleConfirmError}>Error</Button>\n<Button onClick={this.handleConfirmWarn}>Warning</Button>\n<Button onClick={this.handleConfirmSuccess}>Success</Button>\n<Button onClick={this.handleConfirmInfo}>Info</Button>\n";

  var ModalShow = /*#__PURE__*/function (_React$Component) {
    _inherits(ModalShow, _React$Component);

    var _super = _createSuper$g(ModalShow);

    function ModalShow(props) {
      var _this;

      _classCallCheck(this, ModalShow);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "handleConfirm", function () {
        Modal.confirm({
          title: "我是标题",
          content: "我是内容。。。。。。"
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleConfirmError", function () {
        Modal.error({
          title: "我是标题",
          content: "我是error。。。。。。"
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleConfirmWarn", function () {
        Modal.warning({
          title: "我是标题",
          content: "我是warn。。。。。。"
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleConfirmSuccess", function () {
        Modal.success({
          title: "我是标题",
          content: "我是success。。。。。。"
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleConfirmInfo", function () {
        Modal.info({
          title: "我是标题",
          content: "我是info。。。。。。"
        });
      });

      _this.state = {
        baseVisible: false,
        customVisible: false
      };
      return _this;
    }

    _createClass(ModalShow, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$state = this.state,
            baseVisible = _this$state.baseVisible,
            customVisible = _this$state.customVisible;
        return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "\u57FA\u672C",
          code: baseCode
        }, /*#__PURE__*/React__default.createElement(Button, {
          type: "primary",
          onClick: function onClick() {
            _this2.setState({
              baseVisible: true
            });
          }
        }, "\u6253\u5F00\u5F39\u6846"), /*#__PURE__*/React__default.createElement(Modal, {
          title: "\u6211\u7684\u8BA1\u5212",
          visible: baseVisible,
          onClose: function onClose() {
            return _this2.setState({
              baseVisible: false
            });
          }
        }, /*#__PURE__*/React__default.createElement("li", null, "\u4EFB\u52A1\u4E00"), /*#__PURE__*/React__default.createElement("li", null, "\u4EFB\u52A1\u4E8C"), /*#__PURE__*/React__default.createElement("li", null, "\u4EFB\u52A1\u4E09"))), /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "\u81EA\u5B9A\u4E49\u5E95\u90E8",
          code: customCode
        }, /*#__PURE__*/React__default.createElement(Button, {
          type: "primary",
          onClick: function onClick() {
            _this2.setState({
              customVisible: true
            });
          }
        }, "\u6253\u5F00\u5F39\u6846"), /*#__PURE__*/React__default.createElement(Modal, {
          title: "\u6211\u7684\u8BA1\u5212",
          visible: customVisible,
          onClose: function onClose() {
            return _this2.setState({
              customVisible: false
            });
          },
          footer: /*#__PURE__*/React__default.createElement("span", null, "\u81EA\u5B9A\u4E49\u5E95\u90E8")
        }, /*#__PURE__*/React__default.createElement("li", null, "\u4EFB\u52A1\u4E00"))), /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "confirm",
          code: confirmCode
        }, /*#__PURE__*/React__default.createElement(Space, null, /*#__PURE__*/React__default.createElement(Button, {
          onClick: this.handleConfirm
        }, "confirm"), /*#__PURE__*/React__default.createElement(Button, {
          onClick: this.handleConfirmError
        }, "Error"), /*#__PURE__*/React__default.createElement(Button, {
          onClick: this.handleConfirmWarn
        }, "Warning"), /*#__PURE__*/React__default.createElement(Button, {
          onClick: this.handleConfirmSuccess
        }, "Success"), /*#__PURE__*/React__default.createElement(Button, {
          onClick: this.handleConfirmInfo
        }, "Info"))), /*#__PURE__*/React__default.createElement("div", {
          className: "instruction",
          dangerouslySetInnerHTML: {
            __html: renderInstruction$2
          }
        }));
      }
    }]);

    return ModalShow;
  }(React__default.Component);

  var instrction$3 = "";
  var renderInstruction$3 = transferFile(instrction$3);

  function _createSuper$h(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$h(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$h() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var NotificationShow = /*#__PURE__*/function (_React$Component) {
    _inherits(NotificationShow, _React$Component);

    var _super = _createSuper$h(NotificationShow);

    function NotificationShow() {
      _classCallCheck(this, NotificationShow);

      return _super.apply(this, arguments);
    }

    _createClass(NotificationShow, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "\u57FA\u672C"
        }, /*#__PURE__*/React__default.createElement(Notification, null), ";"), /*#__PURE__*/React__default.createElement("div", {
          className: "instruction",
          dangerouslySetInnerHTML: {
            __html: renderInstruction$3
          }
        }));
      }
    }]);

    return NotificationShow;
  }(React__default.Component);

  var instrction$4 = "\n# DragList\n\n| \u5C5E\u6027            | \u8BF4\u660E                                                             | \u7C7B\u578B                     | \u9ED8\u8BA4\u503C                         |\n| --------------- | ---------------------------------------------------------------- | ------------------------ | ------------------------------ |\n| isCopyNode      | \u662F\u5426\u663E\u793A\u62D6\u62C9\u5143\u7D20\u6548\u679C                                             | bool                     | true                           |\n| beforeDragStart | \u62D6\u52A8\u524D\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u8FD4\u56DE false(undefined \u7B49\u4E0D\u4F1A\u963B\u6B62)\uFF0C\u6765\u963B\u6B62\u9ED8\u8BA4\u64CD\u4F5C | func                     | (\u62D6\u62C9\u5143\u7D20) => {}               |\n| beforeDragMove  | \u62D6\u52A8\u4E2D\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u8FD4\u56DE false(undefined \u7B49\u4E0D\u4F1A\u963B\u6B62)\uFF0C\u6765\u963B\u6B62\u9ED8\u8BA4\u64CD\u4F5C | func                     | (\u62D6\u62C9\u5143\u7D20\uFF0C\u9F20\u6807\u6240\u5728\u5143\u7D20) => {} |\n| afterDragEnd    | \u62D6\u52A8\u5B8C\u6210\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u65B0\u7684\u6392\u5E8F\u5E8F\u53F7\uFF08key\uFF09                            | func                     | \uFF08keys\uFF09=> {}                  |\n| itemClassName   | \u6BCF\u4E2A\u5B50\u9879\u7684\u6837\u5F0F                                                   | string                   | \"\"                             |\n| direction       | \u6C34\u5E73\u6392\u5E8F\u8FD8\u662F\u5782\u76F4                                                 | \"horizontal\", \"vertical\" | \"vertical\"                     |\n#### \u540C\u4E00\u4E2A\u9875\u9762\u662F\u5426\u6709\u591A\u4E2A DragList \u7EC4\u4EF6\uFF0C\u5982\u679C\u6709\u591A\u4E2A\uFF0C\u4E8B\u4EF6\u5C31\u4F1A\u7ED1\u5B9A\u5230\u5BF9\u5E94\u7684\u7236\u7EC4\u4EF6\uFF0C\u76F8\u4E92\u9694\u79BB\uFF0C\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u90A3\u4E48\u5C31\u7ED1\u5B9A\u5728 document \u4E0A\n";
  var renderInstruction$4 = transferFile(instrction$4);

  function _createSuper$i(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$i(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$i() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var verticalCode = ["jsx\nconst arr = [\"\u4EFB\u52A1\u4E00\", \"\u4EFB\u52A1\u4E8C\", \"\u4EFB\u52A1\u4E09\", \"\u4EFB\u52A1\u56DB\", \"\u4EFB\u52A1\u4E94\"];\nrender() {\n  return (\n    <div className=\"serein-drag-list\">\n      <DragList>\n        {arr.map((item) => (\n          <li className=\"serein-drag-item\" key={item}>{item}</li>\n        ))}\n      </DragList>\n    </div>\n  )\n}\n", "css\n.serein-drag-item {\n  height: 50px;\n  border: 1px solid #333;\n  list-style: none;\n  text-align: center;\n  margin: 5px;\n  width: 400px;\n  line-height: 50px;\n  background: #999;\n}\n"];
  var horCode = ["jsx\nconst arr = [\"\u4EFB\u52A1\u4E00\", \"\u4EFB\u52A1\u4E8C\", \"\u4EFB\u52A1\u4E09\", \"\u4EFB\u52A1\u56DB\", \"\u4EFB\u52A1\u4E94\"];\nrender() {\n  return (\n    <div className=\"serein-drag-horizontal-list\">\n      <DragList itemClassName=\"serein-drag-horizontal-item\" direction=\"horizontal\">\n        {arr.map((item) => (\n          <li key={item}>\n            {item}\n          </li>\n        ))}\n      </DragList>\n    </div>\n  )\n}\n", "css\n.serein-drag-horizontal-item {\n  height: 50px;\n  border: 1px solid #333;\n  list-style: none;\n  text-align: center;\n  margin: 5px;\n  width: 400px;\n  line-height: 50px;\n  background: #999;\n  display: inline-block;\n}\n"];
  var eventCode = ["jsx\nconst arr = [\"\u4EFB\u52A1\u4E00\", \"\u4EFB\u52A1\u4E8C\", \"\u4EFB\u52A1\u4E09\", \"\u4EFB\u52A1\u56DB\", \"\u4EFB\u52A1\u4E94\"];\n\nhandleDragEnd = (keys) => {\n  console.log(keys);\n};\nhandleDragMove = (node, pointNode) => {\n  console.log(node, pointNode);\n  // if (...)  return false;\n};\nhandleDragStart = (currentNode) => {\n  console.log(currentNode);\n  // if (...)  return false;\n};\n\nrender() {\n  return (\n    <div className=\"serein-drag-list\">\n    <DragList\n      beforeDragStart={this.handleDragStart}\n      beforeDragMove={this.handleDragMove}\n      afterDragEnd={this.handleDragEnd}\n    >\n      {arr.map((item) => (\n        <li className=\"serein-drag-item\" key={item}>\n          {item}\n        </li>\n      ))}\n    </DragList>\n  </div>)\n}\n"];

  var DragListShow = /*#__PURE__*/function (_React$Component) {
    _inherits(DragListShow, _React$Component);

    var _super = _createSuper$i(DragListShow);

    function DragListShow() {
      var _this;

      _classCallCheck(this, DragListShow);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "handleDragEnd", function (keys) {
        console.log(keys);
      });

      _defineProperty(_assertThisInitialized(_this), "handleDragMove", function (node, pointNode) {
        console.log(node, pointNode); // if (...)  return false;
      });

      _defineProperty(_assertThisInitialized(_this), "handleDragStart", function (currentNode) {
        console.log(currentNode); // if (...)  return false;
      });

      return _this;
    }

    _createClass(DragListShow, [{
      key: "render",
      value: function render() {
        var arr = ["任务一", "任务二", "任务三", "任务四", "任务五"];
        return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "\u5782\u76F4\u6392\u5E8F",
          code: verticalCode
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "serein-drag-list"
        }, /*#__PURE__*/React__default.createElement(DragList, null, arr.map(function (item) {
          return /*#__PURE__*/React__default.createElement("li", {
            className: "serein-drag-item",
            key: item
          }, item);
        })))), /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "\u6C34\u5E73\u6392\u5E8F",
          code: horCode
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "serein-drag-horizontal-list"
        }, /*#__PURE__*/React__default.createElement(DragList, {
          itemClassName: "serein-drag-horizontal-item",
          direction: "horizontal"
        }, arr.map(function (item) {
          return /*#__PURE__*/React__default.createElement("li", {
            key: item
          }, item);
        })))), /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "\u4E8B\u4EF6",
          code: eventCode
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "serein-drag-list"
        }, /*#__PURE__*/React__default.createElement(DragList, {
          beforeDragStart: this.handleDragStart,
          beforeDragMove: this.handleDragMove,
          afterDragEnd: this.handleDragEnd
        }, arr.map(function (item) {
          return /*#__PURE__*/React__default.createElement("li", {
            className: "serein-drag-item",
            key: item
          }, item);
        })))), /*#__PURE__*/React__default.createElement("div", {
          className: "instruction",
          dangerouslySetInnerHTML: {
            __html: renderInstruction$4
          }
        }));
      }
    }]);

    return DragListShow;
  }(React__default.Component);

  var instrction$5 = "\n# previewImage\n\n| \u5C5E\u6027         | \u8BF4\u660E                   | \u7C7B\u578B   | \u9ED8\u8BA4\u503C   |\n| ------------ | ---------------------- | ------ | -------- |\n| currentIndex | \u5F53\u524D\u5C55\u793A\u7684\u56FE\u7247         | number | 0        |\n| list         | \u9700\u8981\u5C55\u793A\u7684\u56FE\u7247\u5217\u8868     | Arrry  | []       |\n| defaultError | \u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u7684\u6837\u5F0F\u663E\u793A | node   | \u9ED8\u8BA4\u6837\u5F0F |\n";
  var renderInstruction$5 = transferFile(instrction$5);

  function _createSuper$j(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$j(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$j() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var code = "\nhandleOpenImage = (index, list) => {\n  previewImage({\n    currentIndex: index,\n    list,\n  });\n};\nrender() {\n  const list = [\n  \"http://cnpm.dilomen.top:9001/study.jpg\",\n  \"http://cnpm.dilomen.top:9001/meeting.jpg\",\n  \"http://cnpm.dilomen.top:9001/industry.jpg\",\n  \"http://cnpm.dilomen.top:9001/education.jpeg\",\n];\nreturn (<>\n  {list.map((item, index) => (\n    <img\n      className=\"preview-show-img\"\n      src={item}\n      key={item}\n      onClick={() => this.handleOpenImage(index, list)}\n    />\n  ))}\n  </>)\n}\n\n";
  var errorcode = "\nhandleOpenImage = (index, list) => {\n  previewImage({\n    currentIndex: index,\n    list,\n    defaultError: <p style={{color: \"#fff\"}}>\u52A0\u8F7D\u5931\u8D25</p>\n  });\n};\n";

  var previewImageShow = /*#__PURE__*/function (_React$Component) {
    _inherits(previewImageShow, _React$Component);

    var _super = _createSuper$j(previewImageShow);

    function previewImageShow() {
      var _this;

      _classCallCheck(this, previewImageShow);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "handleOpenImage", function (index, list) {
        previewImage({
          currentIndex: index,
          list: list
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleErrorImage", function (index, list) {
        previewImage({
          currentIndex: index,
          list: list,
          defaultError: /*#__PURE__*/React__default.createElement("p", {
            style: {
              color: "#fff"
            }
          }, "\u52A0\u8F7D\u5931\u8D25")
        });
      });

      return _this;
    }

    _createClass(previewImageShow, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var list = ["http://cnpm.dilomen.top:9001/study.jpg", "http://cnpm.dilomen.top:9001/meeting.jpg", "http://cnpm.dilomen.top:9001/industry.jpg", "http://cnpm.dilomen.top:9001/education.jpeg"];
        var errorList = ["http://cnpm.dilomen.top:9001/study.jpg", "http://cnpm.dilomen.top:9001/meting.jpg", "http://cnpm.dilomen.top:9001/industry.jpg", "http://cnpm.dilomen.top:9001/education.jpeg"];
        return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "\u70B9\u51FB\u56FE\u7247",
          code: code
        }, /*#__PURE__*/React__default.createElement(Space, null, list.map(function (item, index) {
          return /*#__PURE__*/React__default.createElement("img", {
            className: "preview-show-img",
            src: item,
            key: item,
            onClick: function onClick() {
              return _this2.handleOpenImage(index, list);
            }
          });
        }))), /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "\u81EA\u5B9A\u4E49\u5931\u8D25\u663E\u793A",
          code: errorcode
        }, /*#__PURE__*/React__default.createElement(Space, null, errorList.map(function (item, index) {
          return /*#__PURE__*/React__default.createElement("img", {
            className: "preview-show-img",
            src: item,
            key: item,
            onClick: function onClick() {
              return _this2.handleErrorImage(index, errorList);
            }
          });
        }))), /*#__PURE__*/React__default.createElement("div", {
          className: "instruction",
          dangerouslySetInnerHTML: {
            __html: renderInstruction$5
          }
        }));
      }
    }]);

    return previewImageShow;
  }(React__default.Component);

  var instrction$6 = "\n  # Checkbox\n\n| \u5C5E\u6027           | \u8BF4\u660E         | \u7C7B\u578B    | \u9ED8\u8BA4\u503C |\n| -------------- | ------------ | ------- | ------ |\n| defaultChecked | \u662F\u5426\u9ED8\u8BA4\u9009\u4E2D | boolean | false  |\n| checked        | \u662F\u5426\u9009\u4E2D     | boolean | false  |\n| disabled       | \u662F\u5426\u7981\u7528     | boolean | false  |\n| onChange       | \u53D8\u5316\u65F6\u56DE\u8C03   | func    | -      |\n\n# CheckboxGroup\n\n| \u5C5E\u6027     | \u8BF4\u660E                                                                                | \u7C7B\u578B     | \u9ED8\u8BA4\u503C |\n| -------- | ----------------------------------------------------------------------------------- | -------- | ------ |\n| value    | \u9009\u4E2D\u7684\u9879                                                                            | string[] | []     |\n| options  | \u6307\u5B9A\u53EF\u9009\u9879\uFF0C['a', 'b', 'c'] \u6216 [{label: 'a', value: '1'}, {label: 'b', value: '2'}] | array    | []     |\n| disabled | \u662F\u5426\u7981\u7528\u5305\u88F9\u4E0B\u6240\u6709\u7684\u53EF\u9009\u9879                                                          | boolean  | false  |\n| onChange | \u53D8\u5316\u65F6\u56DE\u8C03                                                                          | func     | -      |\n\n  ";
  var renderInstruction$6 = transferFile(instrction$6);

  function _createSuper$k(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$k(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$k() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var eventCode$1 = "\nhandleChange = (e) => {\n  const {value, checked} = e.target\n  console.log(value, checked);\n};\n<Checkbox onChange={this.handleChange} value=\"aa\">\u7537</Checkbox>\n\n<Checkbox disabled>\u7981\u7528</Checkbox>\n\n<Checkbox disabled checked>\u9009\u4E2D\u7981\u7528</Checkbox>\n";
  var GroupCode = "\nthis.state = {\n  defaultValue: [\"a\"],\n};\nhandleGroupChnage = (value) => {\n  this.setState({\n    defaultValue: value,\n  });\n};\nrender () {\n  return (\n    <CheckboxGroup\n      options={[\"a\", \"b\", \"c\"]}\n      onChange={this.handleGroupChnage}\n      value={defaultValue}\n    ></CheckboxGroup>\n  )\n}\n";
  var GroupCode2 = "\nthis.state = {\n  defaultValue: [\"1\"],\n};\nhandleGroupChange2 = (value) => {\n  this.setState({\n    defaultValue2: value,\n  });\n}\nrender() {\n  return (\n    <CheckboxGroup onChange={this.handleGroupChange2} value={defaultValue2}>\n      <Checkbox value=\"1\">1</Checkbox>\n      <Checkbox value=\"2\">2</Checkbox>\n      <Checkbox value=\"3\">3</Checkbox>\n    </CheckboxGroup>\n  )\n}\n";

  var CheckboxShow = /*#__PURE__*/function (_React$Component) {
    _inherits(CheckboxShow, _React$Component);

    var _super = _createSuper$k(CheckboxShow);

    function CheckboxShow(props) {
      var _this;

      _classCallCheck(this, CheckboxShow);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
        var _e$target = e.target,
            value = _e$target.value,
            checked = _e$target.checked;
        console.log(value, checked);
      });

      _defineProperty(_assertThisInitialized(_this), "handleGroupChange", function (value) {
        _this.setState({
          defaultValue: value
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleGroupChange2", function (value) {
        _this.setState({
          defaultValue2: value
        });
      });

      _this.state = {
        defaultValue: ["a"],
        defaultValue2: ['1', '2']
      };
      return _this;
    }

    _createClass(CheckboxShow, [{
      key: "render",
      value: function render() {
        var _this$state = this.state,
            defaultValue = _this$state.defaultValue,
            defaultValue2 = _this$state.defaultValue2;
        return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "\u70B9\u51FB\u4E8B\u4EF6",
          code: eventCode$1
        }, /*#__PURE__*/React__default.createElement(Space, null, /*#__PURE__*/React__default.createElement(Checkbox, {
          onChange: this.handleChange,
          value: "aa"
        }, "\u6539\u53D8\u72B6\u6001"), /*#__PURE__*/React__default.createElement(Checkbox, {
          disabled: true
        }, "\u7981\u7528"), /*#__PURE__*/React__default.createElement(Checkbox, {
          disabled: true,
          defaultChecked: true
        }, "\u9009\u4E2D\u7981\u7528"))), /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "Group",
          code: GroupCode
        }, /*#__PURE__*/React__default.createElement(CheckboxGroup, {
          options: ["a", "b", "c"],
          onChange: this.handleGroupChange,
          value: defaultValue
        })), /*#__PURE__*/React__default.createElement(CodePreview, {
          title: "\u81EA\u5B9A\u4E49Group",
          code: GroupCode2
        }, /*#__PURE__*/React__default.createElement(CheckboxGroup, {
          onChange: this.handleGroupChange2,
          value: defaultValue2,
          disabled: true
        }, /*#__PURE__*/React__default.createElement(Checkbox, {
          value: "1"
        }, "1"), /*#__PURE__*/React__default.createElement(Checkbox, {
          value: "2"
        }, "2"), /*#__PURE__*/React__default.createElement(Checkbox, {
          value: "3"
        }, "3"))), /*#__PURE__*/React__default.createElement("div", {
          className: "instruction",
          dangerouslySetInnerHTML: {
            __html: renderInstruction$6
          }
        }));
      }
    }]);

    return CheckboxShow;
  }(React__default.Component);

  var routers = [{
    name: "开始使用",
    path: "/start",
    component: Start
  }, {
    name: "Button",
    path: "/button",
    component: Form
  }, {
    name: "Icon",
    path: "/icon",
    component: IconShow
  }, {
    name: "Modal",
    path: "/modal",
    component: ModalShow
  }, // {name: "Notification", path: "/notification", component: Notification},
  {
    name: "DragList",
    path: "/dragList",
    component: DragListShow
  }, {
    name: "previewImage",
    path: "/previewImage",
    component: previewImageShow
  }, {
    name: "Checkbox",
    path: "/checkbox",
    component: CheckboxShow
  }];

  var App = function App() {
    return /*#__PURE__*/React__default.createElement(HashRouter, null, /*#__PURE__*/React__default.createElement("nav", {
      className: "serein-nav"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "serein-scroll"
    }, routers.map(function (route) {
      return /*#__PURE__*/React__default.createElement("li", {
        key: route.path
      }, /*#__PURE__*/React__default.createElement(Link, {
        to: route.path
      }, route.name));
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "serein-container"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "serein-scroll"
    }, /*#__PURE__*/React__default.createElement(ConfigProvider, null, /*#__PURE__*/React__default.createElement(Switch, null, routers.map(function (route) {
      return /*#__PURE__*/React__default.createElement(Route, {
        key: route.path,
        path: route.path,
        component: route.component
      });
    }), /*#__PURE__*/React__default.createElement(Redirect, {
      to: "/start"
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "serein-footer"
    }, /*#__PURE__*/React__default.createElement("li", null, "\u6B22\u8FCE\u4E00\u8D77\u5B66\u4E60\u4EA4\u6D41\uFF01\uFF01\uFF01"), /*#__PURE__*/React__default.createElement("li", null, "\u6211\u7684\u535A\u5BA2\uFF1A", /*#__PURE__*/React__default.createElement("a", {
      target: "__blank",
      href: "https://www.dilomen.top"
    }, "https://www.dilomen.top")), /*#__PURE__*/React__default.createElement("li", null, "CSDN\uFF1A", /*#__PURE__*/React__default.createElement("a", {
      target: "__blank",
      href: "https://blog.csdn.net/Dilomen"
    }, "https://blog.csdn.net/Dilomen")), /*#__PURE__*/React__default.createElement("li", null, "Github\uFF1A", /*#__PURE__*/React__default.createElement("a", {
      target: "__blank",
      href: "https://github.com/Dilomen"
    }, "https://github.com/Dilomen"))))));
  };

  ReactDOM.render( /*#__PURE__*/React__default.createElement(App, null), document.getElementById("root"));

}(React, ReactDOM));
