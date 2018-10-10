(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["cassetteCore"] = factory(require("prop-types"), require("react"));
	else
		root["cassetteCore"] = factory(root["PropTypes"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (arr, predicate, ctx) {
	if (typeof Array.prototype.findIndex === 'function') {
		return arr.findIndex(predicate, ctx);
	}

	if (typeof predicate !== 'function') {
		throw new TypeError('predicate must be a function');
	}

	var list = Object(arr);
	var len = list.length;

	if (len === 0) {
		return -1;
	}

	for (var i = 0; i < len; i++) {
		if (predicate.call(ctx, list[i], i, list)) {
			return i;
		}
	}

	return -1;
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var PlayerPropTypes_namespaceObject = {};
__webpack_require__.r(PlayerPropTypes_namespaceObject);
__webpack_require__.d(PlayerPropTypes_namespaceObject, "controlKeyword", function() { return controlKeyword; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "control", function() { return control; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "crossOriginAttribute", function() { return crossOriginAttribute; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "repeatStrategy", function() { return PlayerPropTypes_repeatStrategy; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "mediaSource", function() { return mediaSource; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "mediaSessionAction", function() { return mediaSessionAction; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "mediaSessionArtwork", function() { return mediaSessionArtwork; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "track", function() { return PlayerPropTypes_track; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "progressDirection", function() { return progressDirection; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "seekMode", function() { return seekMode; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "aspectRatio", function() { return aspectRatio; });

// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(1);
var external_root_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: external {"root":"PropTypes","commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types"}
var external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_ = __webpack_require__(0);
var external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_);

// EXTERNAL MODULE: ./node_modules/array-find-index/index.js
var array_find_index = __webpack_require__(2);
var array_find_index_default = /*#__PURE__*/__webpack_require__.n(array_find_index);

// CONCATENATED MODULE: ./src/PlayerContext.js

var PlayerContext = Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createContext"])(null);
PlayerContext.displayName = 'PlayerContext';
/* harmony default export */ var src_PlayerContext = (PlayerContext);
// CONCATENATED MODULE: ./src/GroupContext.js

var GroupContext = Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createContext"])(null);
GroupContext.displayName = 'GroupContext';
/* harmony default export */ var src_GroupContext = (GroupContext);
// CONCATENATED MODULE: ./src/constants.js
var repeatStrategyOptions = ['none', 'playlist', 'track'];
// CONCATENATED MODULE: ./src/utils/console.js
/* eslint-disable no-console */
var log = console.log.bind(console);
var logError = console.error ? console.error.bind(console) : log;
var logWarning = console.warn ? console.warn.bind(console) : log;
// CONCATENATED MODULE: ./src/PlayerPropTypes.js




function requiredOnlyUnlessHasProp(propType, altPropName) {
  var warnedAboutDefiningBoth = false;

  function validate(props, propName, componentName) {
    if (propName in props) {
      if (!warnedAboutDefiningBoth && altPropName in props) {
        logWarning("Do not define both the '" + propName + "' and '" + altPropName + "' props.");
        warnedAboutDefiningBoth = true;
      }

      for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        rest[_key - 3] = arguments[_key];
      }

      return propType.isRequired.apply(propType, [props, propName, componentName].concat(rest));
    }

    if (!(altPropName in props)) {
      return new Error("If the '" + altPropName + "' prop is not defined, '" + propName + "' must be.");
    }
  }

  return validate;
}

var controlKeyword = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['playpause', 'backskip', 'forwardskip', 'volume', 'mute', 'repeat', 'shuffle', 'progress', 'progressdisplay', 'fullscreen', 'spacer']);
var control = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func, controlKeyword]);
var crossOriginAttribute = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['anonymous', 'use-credentials']);
var PlayerPropTypes_repeatStrategy = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(repeatStrategyOptions);
var mediaSource = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
  src: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired,
  type: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired
});
var mediaSessionAction = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['play', 'pause', 'previoustrack', 'nexttrack', 'seekbackward', 'seekforward']);
var mediaSessionArtwork = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
  src: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired,
  sizes: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string,
  type: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string
});
var PlayerPropTypes_track = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
  url: requiredOnlyUnlessHasProp(external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string, 'sources'),
  sources: requiredOnlyUnlessHasProp(external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(mediaSource.isRequired), 'url'),
  title: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired,
  artist: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string,
  album: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string,
  artwork: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(mediaSessionArtwork.isRequired),
  meta: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.object
});
var progressDirection = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['left', 'right', 'up', 'down']);
var seekMode = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['paused', 'immediate', 'onrelease']);
function aspectRatio(props, propName) {
  var prop = props[propName];

  if (prop === undefined) {
    return;
  }

  if (typeof prop !== 'string' || prop.split(':').length !== 2 || prop.split(':').some(isNaN)) {
    return new Error("The " + propName + " prop should be a string of the form 'x:y'. Example: 16:9");
  }
}
// CONCATENATED MODULE: ./src/factories/createCustomMediaElement.js
var loopchange = 'loopchange';
var srcrequest = 'srcrequest';

function createCustomMediaElement(media) {
  if (media === void 0) {
    media = document.createElement('media');
  }

  new MutationObserver(function () {
    media.dispatchEvent(new Event(loopchange));
  }).observe(media, {
    attributeFilter: ['loop']
  }); // Don't let the media src property get modified directly.
  // Instead, when it does get set, dispatch an event to be
  // handled in a way that doesn't conflict with the loaded
  // playlist.

  Object.defineProperty(media, 'src', {
    get: function get() {
      return media.currentSrc;
    },
    set: function set(src) {
      var e = new Event(srcrequest);
      e.srcRequested = src;
      media.dispatchEvent(e);
    }
  });
  return media;
}

/* harmony default export */ var factories_createCustomMediaElement = (createCustomMediaElement);
// CONCATENATED MODULE: ./src/utils/ShuffleManager.js
/* ShuffleManager
 *
 * Manages navigation throughout a list which is:
 * - Sourced from another provided list
 * - In random order (except to avoid consecutive duplicates)
 * - Extended endlessly on-the-fly, as needed
 * - Able to have future history overwritten by non-random choices
 * - Able to swap source lists and maintain shuffle order for common members
 */
var ShuffleManager =
/*#__PURE__*/
function () {
  function ShuffleManager(list, options) {
    if (options === void 0) {
      options = {};
    }

    this._list = list;
    this._forwardStack = [];
    this._backStack = [];
    this._currentItem = undefined;
    this._allowBackShuffle = Boolean(options.allowBackShuffle);
  }

  var _proto = ShuffleManager.prototype;

  _proto.findNextItem = function findNextItem(currentIndex) {
    if (currentIndex !== undefined) {
      this.setCurrentIndex(currentIndex);
    }

    this._currentItem = _findNextItem(this._list, this._forwardStack, this._backStack, this._currentItem, true);
    return this._currentItem;
  };

  _proto.findPreviousItem = function findPreviousItem(currentIndex) {
    if (currentIndex !== undefined) {
      this.setCurrentIndex(currentIndex);
    }

    this._currentItem = _findNextItem(this._list, this._backStack, this._forwardStack, this._currentItem, this._allowBackShuffle);
    return this._currentItem;
  };

  _proto.pickNextItem = function pickNextItem(index, currentIndex) {
    if (currentIndex !== undefined) {
      this.setCurrentIndex(currentIndex);
    }

    if (this._list[index] === undefined) {
      return undefined;
    }

    if (this._currentItem !== undefined) {
      this._backStack.push(this._currentItem);
    }

    this._forwardStack.length = 0;
    this._currentItem = this._list[index];
    return this._currentItem;
  };

  _proto.setList = function setList(list) {
    this._list = list;
  };

  _proto.setOptions = function setOptions(options) {
    var _arr = Object.keys(options);

    for (var _i = 0; _i < _arr.length; _i++) {
      var o = _arr[_i];

      switch (o) {
        case 'allowBackShuffle':
          this["_" + o] = Boolean(options[o]);
          break;

        default:
          break;
      }
    }
  };

  _proto.setCurrentIndex = function setCurrentIndex(currentIndex) {
    var item = this._list[currentIndex];

    if (this._currentItem !== item) {
      this.clear();
      this._currentItem = item;
    }
  };

  _proto.clear = function clear() {
    this._forwardStack.length = 0;
    this._backStack.length = 0;
    this._currentItem = undefined;
  };

  return ShuffleManager;
}();

function _goForward(n, forwardStack, backStack, currentItem) {
  var item = currentItem;

  for (var i = 0; i < n; i++) {
    if (!forwardStack.length) {
      // rollback before erroring (note stack reversal)
      _goForward(i, backStack, forwardStack, item);

      throw "Moving " + n + " places was not possible!";
    }

    backStack.push(item);
    item = forwardStack.pop();
  }

  return item;
}

function _allItemsMatch(list, item) {
  if (!list.length) {
    return false;
  }

  for (var i = 0; i < list.length; i++) {
    if (item !== list[i]) {
      return false;
    }
  }

  return true;
}

function _findNextItem(list, forwardStack, backStack, currentItem, allowMore) {
  var item = currentItem;

  if (!list.length) {
    return undefined;
  }

  for (var i = 1; i <= forwardStack.length; i++) {
    if (list.indexOf(forwardStack[forwardStack.length - i]) !== -1) {
      return _goForward(i, forwardStack, backStack, item);
    }
  }

  if (!allowMore) {
    return undefined;
  }

  if (_allItemsMatch(list, item)) {
    // we can serve this as our "next" item but we
    // won't modify our history since it's the same.
    return item;
  }

  var nextItem;

  do {
    nextItem = list[Math.floor(Math.random() * list.length)];
  } while (item === nextItem || nextItem === undefined); // if we're skipping items that aren't in our current list we may
  // have some items in our forwardStack - make sure we move to the front.


  item = _goForward(forwardStack.length, forwardStack, backStack, item);

  if (item !== undefined) {
    backStack.push(item);
  }

  return nextItem;
}

/* harmony default export */ var utils_ShuffleManager = (ShuffleManager);
// CONCATENATED MODULE: ./src/utils/isPlaylistValid.js
function isPlaylistValid(playlist) {
  return Boolean(playlist && playlist.length);
}

/* harmony default export */ var utils_isPlaylistValid = (isPlaylistValid);
// CONCATENATED MODULE: ./src/utils/getTrackSources.js

var blankSources = [{
  src: ''
}];

function getTrackSources(playlist, index) {
  if (!utils_isPlaylistValid(playlist)) {
    return blankSources;
  }

  var _playlist$index = playlist[index],
      sources = _playlist$index.sources,
      url = _playlist$index.url;

  if (sources) {
    return sources.length ? sources : blankSources;
  }

  return [{
    src: url
  }];
}

/* harmony default export */ var utils_getTrackSources = (getTrackSources);
// CONCATENATED MODULE: ./src/utils/findTrackIndexByUrl.js


function findTrackIndexByUrl(playlist, url) {
  return array_find_index_default()(playlist, function (track) {
    if (track.sources) {
      return array_find_index_default()(track.sources, function (source) {
        return source.src === url;
      }) !== -1;
    }

    return track.url && url === track.url;
  });
}

/* harmony default export */ var utils_findTrackIndexByUrl = (findTrackIndexByUrl);
// CONCATENATED MODULE: ./src/utils/snapshot.js



function getStateSnapshot(state) {
  var paused = state.paused,
      currentTime = state.currentTime,
      activeTrackIndex = state.activeTrackIndex,
      volume = state.volume,
      muted = state.muted,
      loop = state.loop,
      cycle = state.cycle,
      shuffle = state.shuffle,
      playbackRate = state.playbackRate,
      __playlist__ = state.__playlist__;
  return {
    __unstable__: {
      paused: paused,
      currentTime: currentTime,
      activeTrackIndex: activeTrackIndex,
      volume: volume,
      muted: muted,
      loop: loop,
      cycle: cycle,
      shuffle: shuffle,
      playbackRate: playbackRate,
      activeTrackSrc: utils_isPlaylistValid(__playlist__) ? utils_getTrackSources(__playlist__, activeTrackIndex)[0].src : null
    }
  };
}
function restoreStateFromSnapshot(snapshot, props) {
  var _snapshot$__unstable_ = snapshot.__unstable__,
      paused = _snapshot$__unstable_.paused,
      currentTime = _snapshot$__unstable_.currentTime,
      activeTrackIndex = _snapshot$__unstable_.activeTrackIndex,
      volume = _snapshot$__unstable_.volume,
      muted = _snapshot$__unstable_.muted,
      loop = _snapshot$__unstable_.loop,
      cycle = _snapshot$__unstable_.cycle,
      shuffle = _snapshot$__unstable_.shuffle,
      playbackRate = _snapshot$__unstable_.playbackRate,
      activeTrackSrc = _snapshot$__unstable_.activeTrackSrc;
  var restoredStateValues = {};

  if (utils_isPlaylistValid(props.playlist) && typeof paused === 'boolean') {
    // using awaitingPlay instead of paused triggers an animation
    restoredStateValues.awaitingPlay = !paused;
  }

  if (typeof volume === 'number' && volume >= 0 && volume <= 1) {
    restoredStateValues.volume = volume;
  }

  if (typeof muted === 'boolean') {
    restoredStateValues.muted = muted;
  }

  if (typeof loop === 'boolean') {
    restoredStateValues.loop = loop;
  }

  if (typeof cycle === 'boolean') {
    restoredStateValues.cycle = cycle;
  }

  if (typeof shuffle === 'boolean') {
    restoredStateValues.shuffle = shuffle;
  }

  if (typeof playbackRate === 'number') {
    restoredStateValues.playbackRate = playbackRate;
  }

  var useCurrentTime = false;

  if (typeof activeTrackSrc === 'string' && typeof activeTrackIndex === 'number' && activeTrackIndex >= 0) {
    // let's try staying on the same track index
    var currentSrc = utils_getTrackSources(props.playlist, activeTrackIndex)[0].src;

    if (activeTrackSrc === currentSrc) {
      restoredStateValues.activeTrackIndex = activeTrackIndex;
      useCurrentTime = true;
    } else {
      /* if the track we were playing before is in the new playlist,
       * update the activeTrackIndex.
       */
      var newTrackIndex = utils_findTrackIndexByUrl(props.playlist, activeTrackSrc);

      if (newTrackIndex !== -1) {
        restoredStateValues.activeTrackIndex = newTrackIndex;
        useCurrentTime = true;
      }
    }
  }

  if (useCurrentTime && typeof currentTime === 'number' && currentTime >= 0) {
    restoredStateValues.currentTime = currentTime;
  }

  return restoredStateValues;
}
// CONCATENATED MODULE: ./src/utils/getSourceList.js
 // collapses playlist into flat list containing
// the first source url for each track

function getSourceList(playlist) {
  return (playlist || []).map(function (_, i) {
    return utils_getTrackSources(playlist, i)[0].src;
  });
}

/* harmony default export */ var utils_getSourceList = (getSourceList);
// CONCATENATED MODULE: ./src/utils/getTimeRangesArray.js
function getTimeRangesArray(timeRangesObj) {
  var timeRangesArray = Array(timeRangesObj.length);

  for (var i = 0; i < timeRangesObj.length; i++) {
    timeRangesArray[i] = {
      start: timeRangesObj.start(i),
      end: timeRangesObj.end(i)
    };
  }

  return timeRangesArray;
}

/* harmony default export */ var utils_getTimeRangesArray = (getTimeRangesArray);
// CONCATENATED MODULE: ./src/utils/getRepeatStrategy.js
function getRepeatStrategy(loop, cycle) {
  if (loop) {
    return 'track';
  }

  if (cycle) {
    return 'playlist';
  }

  return 'none';
}

/* harmony default export */ var utils_getRepeatStrategy = (getRepeatStrategy);
// CONCATENATED MODULE: ./src/utils/convertToNumberWithinIntervalBounds.js
function convertToNumberWithinIntervalBounds(number, min, max) {
  min = typeof min === 'number' ? min : -Infinity;
  max = typeof max === 'number' ? max : Infinity;
  return Math.max(min, Math.min(number, max));
}

/* harmony default export */ var utils_convertToNumberWithinIntervalBounds = (convertToNumberWithinIntervalBounds);
// CONCATENATED MODULE: ./src/utils/streamVideoElementToCanvas.js
function streamVideoElementToCanvas(videoElement, canvas, callback) {
  var ctx = canvas.getContext('2d');
  var requestId = null;
  var widthSet = null;
  var heightSet = null;
  var placeholderImage = null;
  requestId = requestAnimationFrame(streamToCanvas);
  return {
    endStream: function endStream() {
      cancelAnimationFrame(requestId);
    },
    setCanvasSize: function setCanvasSize(width, height) {
      widthSet = width || null;
      heightSet = height || null;
    },
    setPlaceholderImage: function setPlaceholderImage(img) {
      placeholderImage = img || null;
    }
  };

  function streamToCanvas() {
    var videoWidth = videoElement.videoWidth,
        videoHeight = videoElement.videoHeight; // we want to draw the current frame image from the video element

    var imageElement = videoElement;
    var imageWidth = videoWidth;
    var imageHeight = videoHeight;
    var targetWidth = videoWidth;
    var targetHeight = videoHeight;
    var isVideo = true; // however if there's no video to display (usually means we're playing
    // media) then we want to display a placeholder image, if available

    if (!(targetWidth && targetHeight) && placeholderImage) {
      imageElement = placeholderImage;
      imageWidth = placeholderImage.naturalWidth;
      imageHeight = placeholderImage.naturalHeight;
      targetWidth = placeholderImage.naturalWidth;
      targetHeight = placeholderImage.naturalHeight;
      isVideo = false;
    } // figure out what resolution the drawn image should be


    if (widthSet && heightSet) {
      targetWidth = widthSet;
      targetHeight = heightSet;
    } else if (widthSet) {
      targetWidth = widthSet;
      targetHeight = widthSet / imageWidth * imageHeight;
    } else if (heightSet) {
      targetHeight = heightSet;
      targetWidth = heightSet / imageHeight * imageWidth;
    } // resize the canvas to the draw resolution if it doesn't already match


    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    } // draw


    ctx.drawImage(imageElement, 0, 0, targetWidth, targetHeight); // let the callback handle any post-processing

    if (callback) {
      callback(ctx, isVideo);
    }

    requestId = requestAnimationFrame(streamToCanvas);
  }
}

/* harmony default export */ var utils_streamVideoElementToCanvas = (streamVideoElementToCanvas);
// CONCATENATED MODULE: ./src/PlayerContextProvider.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





















function playErrorHandler(err) {
  logError(err);

  if (err.name === 'NotAllowedError') {
    var warningMessage = 'Media playback failed at ' + new Date().toLocaleTimeString() + '! (Perhaps autoplay is disabled in this browser.)';
    logWarning(warningMessage);
  }
} // Existing Media Session API implementations have default handlers
// for play/pause, and may yield unexpected behavior if custom
// play/pause handlers are defined - so let's leave them be.


var supportableMediaSessionActions = ['previoustrack', 'nexttrack', 'seekbackward', 'seekforward']; // media element readyState

var HAVE_NOTHING = 0;
var defaultState = {
  // indicates whether media player should be paused
  paused: true,
  // elapsed time for active track, in seconds
  currentTime: 0,
  // The most recent targeted time, in seconds, for seek preview
  seekPreviewTime: 0,

  /* true if the user is currently dragging the mouse
   * to seek a new track position
   */
  seekInProgress: false,

  /* true if media was playing when seek previewing began,
   * it was paused, and it should be resumed on seek
   * complete
   */
  awaitingResumeOnSeekComplete: false,
  // the duration in seconds of the loaded track
  duration: 0,
  // array describing the buffered ranges in the loaded track
  bufferedRanges: [],
  // array describing the already-played ranges in the loaded track
  playedRanges: [],
  // array describing the seekable ranges in the loaded track
  seekableRanges: [],
  // true if the media is currently stalled pending data buffering
  stalled: false,
  // true if the active track should play on the next componentDidUpdate
  awaitingPlay: false
}; // assumes playlist is valid

function getGoToTrackState(prevState, index, shouldPlay) {
  if (shouldPlay === void 0) {
    shouldPlay = true;
  }

  var isNewTrack = prevState.activeTrackIndex !== index;
  return {
    activeTrackIndex: index,
    trackLoading: isNewTrack,
    currentTime: 0,
    loop: isNewTrack ? false : prevState.loop,
    awaitingPlay: Boolean(shouldPlay),
    paused: !shouldPlay
  };
}
/**
 * Wraps an area which shares a common [`playerContext`](#playercontext)
 */


var PlayerContextProvider_PlayerContextProvider =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(PlayerContextProvider, _Component);

  function PlayerContextProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = _objectSpread({}, defaultState, {
      // index matching requested track (whether track has loaded or not)
      activeTrackIndex: utils_convertToNumberWithinIntervalBounds(props.startingTrackIndex, 0),
      // whether we're waiting on loading metadata for the active track
      trackLoading: utils_isPlaylistValid(props.playlist),
      // the current timestamp on the active track in seconds
      currentTime: utils_convertToNumberWithinIntervalBounds(props.startingTime, 0),
      // the latest volume of the media, between 0 and 1.
      volume: utils_convertToNumberWithinIntervalBounds(props.defaultVolume, 0, 1),
      // true if the media has been muted
      muted: props.defaultMuted,
      // whether to loop the active track
      loop: props.defaultRepeatStrategy === 'track',
      // true if playlist should continue at start after completion
      cycle: props.defaultRepeatStrategy === 'playlist',
      // whether to randomly pick next track from playlist after one finishes
      shuffle: props.defaultShuffle,
      // Rate at which media should be played. 1.0 is normal speed.
      playbackRate: props.defaultPlaybackRate,
      // true if user is currently dragging mouse to change the volume
      setVolumeInProgress: false,
      // initialize awaitingPlay from autoplay prop
      awaitingPlay: props.autoplay && utils_isPlaylistValid(props.playlist),
      // playlist prop copied to state (for getDerivedStateFromProps)
      __playlist__: props.playlist
    }, props.initialStateSnapshot ? restoreStateFromSnapshot(props.initialStateSnapshot, props) : {}); // volume at last time we were unmuted and not actively setting volume

    _this.lastStableVolume = _this.state.volume; // used to keep track of play history when we are shuffling

    _this.shuffler = new utils_ShuffleManager(utils_getSourceList(props.playlist), {
      allowBackShuffle: props.allowBackShuffle
    }); // html media element used for playback

    _this.media = null;
    _this.setMediaElementRef = _this.setMediaElementRef.bind(_assertThisInitialized(_this)); // bind callback methods to pass to descendant elements

    _this.togglePause = _this.togglePause.bind(_assertThisInitialized(_this));
    _this.selectTrackIndex = _this.selectTrackIndex.bind(_assertThisInitialized(_this));
    _this.forwardSkip = _this.forwardSkip.bind(_assertThisInitialized(_this));
    _this.backSkip = _this.backSkip.bind(_assertThisInitialized(_this));
    _this.seekPreview = _this.seekPreview.bind(_assertThisInitialized(_this));
    _this.seekComplete = _this.seekComplete.bind(_assertThisInitialized(_this));
    _this.setVolume = _this.setVolume.bind(_assertThisInitialized(_this));
    _this.setVolumeComplete = _this.setVolumeComplete.bind(_assertThisInitialized(_this));
    _this.toggleMuted = _this.toggleMuted.bind(_assertThisInitialized(_this));
    _this.toggleShuffle = _this.toggleShuffle.bind(_assertThisInitialized(_this));
    _this.setRepeatStrategy = _this.setRepeatStrategy.bind(_assertThisInitialized(_this));
    _this.setPlaybackRate = _this.setPlaybackRate.bind(_assertThisInitialized(_this));
    _this.pipeVideoStreamToCanvas = _this.pipeVideoStreamToCanvas.bind(_assertThisInitialized(_this)); // bind media event handlers

    _this.handleMediaPlay = _this.handleMediaPlay.bind(_assertThisInitialized(_this));
    _this.handleMediaPause = _this.handleMediaPause.bind(_assertThisInitialized(_this));
    _this.handleMediaSrcrequest = _this.handleMediaSrcrequest.bind(_assertThisInitialized(_this));
    _this.handleMediaEnded = _this.handleMediaEnded.bind(_assertThisInitialized(_this));
    _this.handleMediaStalled = _this.handleMediaStalled.bind(_assertThisInitialized(_this));
    _this.handleMediaCanplaythrough = _this.handleMediaCanplaythrough.bind(_assertThisInitialized(_this));
    _this.handleMediaTimeupdate = _this.handleMediaTimeupdate.bind(_assertThisInitialized(_this));
    _this.handleMediaLoadedmetadata = _this.handleMediaLoadedmetadata.bind(_assertThisInitialized(_this));
    _this.handleMediaVolumechange = _this.handleMediaVolumechange.bind(_assertThisInitialized(_this));
    _this.handleMediaDurationchange = _this.handleMediaDurationchange.bind(_assertThisInitialized(_this));
    _this.handleMediaProgress = _this.handleMediaProgress.bind(_assertThisInitialized(_this));
    _this.handleMediaLoopchange = _this.handleMediaLoopchange.bind(_assertThisInitialized(_this));
    _this.handleMediaRatechange = _this.handleMediaRatechange.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = PlayerContextProvider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var media = this.media = factories_createCustomMediaElement(this.media); // initialize media properties

    if (media.readyState !== HAVE_NOTHING) {
      // we only set the currentTime now if we're beyond the
      // HAVE_NOTHING readyState. Otherwise we'll let this get
      // set when the loadedmetadata event fires. This avoids
      // an issue where some browsers ignore or delay currentTime
      // updates when in the HAVE_NOTHING state.
      media.currentTime = this.state.currentTime;
    }

    media.volume = this.state.volume;
    media.muted = this.state.muted;
    media.defaultPlaybackRate = this.props.defaultPlaybackRate;
    media.playbackRate = this.state.playbackRate; // add special event listeners on the media element

    media.addEventListener('srcrequest', this.handleMediaSrcrequest);
    media.addEventListener('loopchange', this.handleMediaLoopchange);

    if (this.state.awaitingPlay) {
      this.setState({
        awaitingPlay: false
      });
      this.delayTimeout = setTimeout(function () {
        _this2.togglePause(false);
      }, this.props.autoplayDelayInSeconds * 1000);
    }
  };

  PlayerContextProvider.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var newPlaylist = nextProps.playlist;

    if (newPlaylist === prevState.__playlist__) {
      // reference comparison is equal so we'll
      // assume the playlist is unchanged.
      return null;
    }

    var baseNewState = {
      __playlist__: newPlaylist
    }; // check if the new playlist is invalid

    if (!utils_isPlaylistValid(newPlaylist)) {
      return _objectSpread({}, defaultState, baseNewState, {
        activeTrackIndex: 0,
        trackLoading: false
      });
    } // check if the activeTrackIndex doesn't need to be updated


    var prevSources = utils_getTrackSources(prevState.__playlist__, prevState.activeTrackIndex); // the sources if we stay on the same track index

    var currentSources = utils_getTrackSources(newPlaylist, prevState.activeTrackIndex); // non-comprehensive but probably accurate check

    if (prevSources[0].src === currentSources[0].src) {
      // our active track index already matches
      return baseNewState;
    }
    /* if the track we're already playing is in the new playlist, update the
     * activeTrackIndex.
     */


    var newTrackIndex = utils_findTrackIndexByUrl(newPlaylist, prevSources[0].src);

    if (newTrackIndex !== -1) {
      return _objectSpread({}, baseNewState, {
        activeTrackIndex: newTrackIndex
      });
    } // if not, then load the first track in the new playlist, and pause.


    return _objectSpread({}, baseNewState, getGoToTrackState(prevState, 0, false));
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this3 = this;

    this.media.defaultPlaybackRate = this.props.defaultPlaybackRate;
    this.shuffler.setList(utils_getSourceList(this.props.playlist));
    this.shuffler.setOptions({
      allowBackShuffle: this.props.allowBackShuffle
    });
    var prevSources = utils_getTrackSources(prevProps.playlist, prevState.activeTrackIndex);
    var newSources = utils_getTrackSources(this.props.playlist, this.state.activeTrackIndex);

    if (prevSources[0].src !== newSources[0].src) {
      // cancel playback and re-scan current sources
      this.media.load();

      if (!this.state.shuffle) {
        // after toggling off shuffle, we defer clearing the shuffle
        // history until we actually change tracks - if the user quickly
        // toggles  shuffle off then back on again, we don't want to have
        // lost our history.
        this.shuffler.clear();
      }
    }

    if (prevProps !== this.props && !this.media.paused) {
      // update running media session based on new props
      this.stealMediaSession();
    }

    if (this.state.awaitingPlay) {
      this.setState({
        awaitingPlay: false
      }); // media.currentSrc is updated asynchronously so we should
      // play async to avoid weird intermediate state issues

      setTimeout(function () {
        _this3.togglePause(false);
      });
    }

    clearTimeout(this.snapshotUpdateTimeout);
    this.snapshotUpdateTimeout = setTimeout(function () {
      if (_this3.props.onStateSnapshot) {
        _this3.props.onStateSnapshot(getStateSnapshot(_this3.state));
      }
    }, 100);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var media = this.media; // remove special event listeners on the media element

    media.removeEventListener('srcrequest', this.handleMediaSrcrequest);
    media.removeEventListener('loopchange', this.handleMediaLoopchange);
    clearTimeout(this.gapLengthTimeout);
    clearTimeout(this.delayTimeout);
  };

  _proto.setMediaElementRef = function setMediaElementRef(ref) {
    this.media = ref;

    if (typeof this.props.mediaElementRef === 'function') {
      this.props.mediaElementRef(ref);
    }
  };

  _proto.stealMediaSession = function stealMediaSession() {
    var _this4 = this;

    if ( // eslint-disable-next-line no-undef
    !(window.MediaSession && navigator.mediaSession instanceof MediaSession)) {
      return;
    } // eslint-disable-next-line no-undef


    navigator.mediaSession.metadata = new MediaMetadata(this.props.playlist[this.state.activeTrackIndex]);
    supportableMediaSessionActions.map(function (action) {
      if (_this4.props.supportedMediaSessionActions.indexOf(action) === -1) {
        return null;
      }

      var seekLength = _this4.props.mediaSessionSeekLengthInSeconds;

      switch (action) {
        case 'play':
          return _this4.togglePause.bind(_this4, false);

        case 'pause':
          return _this4.togglePause.bind(_this4, true);

        case 'previoustrack':
          return _this4.backSkip;

        case 'nexttrack':
          return _this4.forwardSkip;

        case 'seekbackward':
          return function () {
            return _this4.media.currentTime -= seekLength;
          };

        case 'seekforward':
          return function () {
            return _this4.media.currentTime += seekLength;
          };

        default:
          return undefined;
      }
    }).forEach(function (handler, i) {
      navigator.mediaSession.setActionHandler(supportableMediaSessionActions[i], handler);
    });
  };

  _proto.pipeVideoStreamToCanvas = function pipeVideoStreamToCanvas(canvas, callback) {
    return utils_streamVideoElementToCanvas(this.media, canvas, callback);
  };

  _proto.handleMediaPlay = function handleMediaPlay() {
    this.setState(function (state) {
      return state.paused === false ? null : {
        paused: false
      };
    });
    this.stealMediaSession();
  };

  _proto.handleMediaPause = function handleMediaPause() {
    this.setState(function (state) {
      return state.paused === true ? null : {
        paused: true
      };
    });
  };

  _proto.handleMediaSrcrequest = function handleMediaSrcrequest(e) {
    var playlist = this.props.playlist;
    var sources = utils_getTrackSources(playlist, this.state.activeTrackIndex);

    if (array_find_index_default()(sources, function (s) {
      return s.src === e.srcRequested;
    }) !== -1) {
      // we're good! nothing to update.
      return;
    } // looks like 'src' was set from outside our component.
    // let's see if we can use it.


    var newTrackIndex = utils_findTrackIndexByUrl(playlist, e.srcRequested);

    if (newTrackIndex === -1) {
      logError("Source '" + e.srcRequested + "' does not exist in the loaded playlist. " + "Make sure you've updated the 'playlist' prop to " + "PlayerContextProvider before you select this track!");
      return;
    }

    this.selectTrackIndex(newTrackIndex);
  };

  _proto.handleMediaEnded = function handleMediaEnded() {
    if (this.state.seekInProgress) {
      // nothing to do if we're in the middle of a seek
      // (this can happen if we're in seekMode: immediate)
      return;
    }

    clearTimeout(this.gapLengthTimeout);
    var _props = this.props,
        playlist = _props.playlist,
        loadFirstTrackOnPlaylistComplete = _props.loadFirstTrackOnPlaylistComplete;

    if (!utils_isPlaylistValid(playlist)) {
      return;
    }

    var _state = this.state,
        cycle = _state.cycle,
        activeTrackIndex = _state.activeTrackIndex;

    if (!cycle && activeTrackIndex + 1 >= playlist.length) {
      if (loadFirstTrackOnPlaylistComplete) {
        this.goToTrack(0, false);
      }

      return;
    }

    this.gapLengthTimeout = setTimeout(this.forwardSkip, this.props.gapLengthInSeconds * 1000);
  };

  _proto.handleMediaStalled = function handleMediaStalled() {
    this.setState(function (state) {
      return state.stalled === true ? null : {
        stalled: true
      };
    });
  };

  _proto.handleMediaCanplaythrough = function handleMediaCanplaythrough() {
    this.setState(function (state) {
      return state.stalled === false ? null : {
        stalled: false
      };
    });
  };

  _proto.handleMediaTimeupdate = function handleMediaTimeupdate() {
    var _media = this.media,
        currentTime = _media.currentTime,
        played = _media.played;
    this.setState({
      currentTime: currentTime,
      playedRanges: utils_getTimeRangesArray(played)
    });
  };

  _proto.handleMediaLoadedmetadata = function handleMediaLoadedmetadata() {
    if (this.media.currentTime !== this.state.currentTime) {
      this.media.currentTime = this.state.currentTime;
    }

    this.setState(function (state) {
      return state.trackLoading === false ? null : {
        trackLoading: false
      };
    });
  };

  _proto.handleMediaVolumechange = function handleMediaVolumechange() {
    var _media2 = this.media,
        volume = _media2.volume,
        muted = _media2.muted;
    this.setState({
      volume: volume,
      muted: muted
    });
  };

  _proto.handleMediaDurationchange = function handleMediaDurationchange() {
    var duration = this.media.duration;
    this.setState({
      duration: duration
    });
  };

  _proto.handleMediaProgress = function handleMediaProgress() {
    this.setState({
      bufferedRanges: utils_getTimeRangesArray(this.media.buffered),
      seekableRanges: utils_getTimeRangesArray(this.media.seekable)
    });
  };

  _proto.handleMediaLoopchange = function handleMediaLoopchange() {
    var loop = this.media.loop;
    this.setState(function (state) {
      return state.loop === loop ? null : {
        loop: loop
      };
    });
  };

  _proto.handleMediaRatechange = function handleMediaRatechange() {
    var playbackRate = this.media.playbackRate;
    this.setState(function (state) {
      return state.playbackRate === playbackRate ? null : {
        playbackRate: playbackRate
      };
    });
  };

  _proto.togglePause = function togglePause(value) {
    clearTimeout(this.delayTimeout);
    var pause = typeof value === 'boolean' ? value : !this.state.paused;

    if (pause) {
      this.media.pause();
      return;
    }

    if (!this.media.currentSrc) {
      return;
    }

    try {
      var playPromise = this.media.play();

      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function (err) {
          // AbortError is pretty much always called because we're skipping
          // tracks quickly or hitting pause before a track has a chance to
          // play. It's pretty safe to just ignore these error messages.
          if (err.name !== 'AbortError') {
            return Promise.reject(err);
          }
        }).catch(playErrorHandler);
      }
    } catch (err) {
      playErrorHandler(err);
    }
  }; // assumes playlist is valid - don't call without checking


  _proto.goToTrack = function goToTrack(index, shouldPlay) {
    if (shouldPlay === void 0) {
      shouldPlay = true;
    }

    clearTimeout(this.delayTimeout);
    this.setState(function (state) {
      return getGoToTrackState(state, index, shouldPlay);
    });
  };

  _proto.selectTrackIndex = function selectTrackIndex(index) {
    var playlist = this.props.playlist;

    if (!utils_isPlaylistValid(playlist)) {
      return;
    }

    if (index < 0 || index > playlist.length) {
      logWarning("Playlist index " + index + " is out of bounds!");
      return;
    }

    if (this.state.shuffle) {
      this.shuffler.pickNextItem(index, this.state.activeTrackIndex);
    }

    this.goToTrack(index);
  };

  _proto.backSkip = function backSkip() {
    var _props2 = this.props,
        playlist = _props2.playlist,
        stayOnBackSkipThreshold = _props2.stayOnBackSkipThreshold;
    var media = this.media;
    var _state2 = this.state,
        cycle = _state2.cycle,
        activeTrackIndex = _state2.activeTrackIndex,
        shuffle = _state2.shuffle;

    if (!utils_isPlaylistValid(playlist) || media.currentTime >= stayOnBackSkipThreshold || !cycle && activeTrackIndex < 1) {
      media.currentTime = 0;
      return;
    }

    var index;

    if (shuffle) {
      var previousItem = this.shuffler.findPreviousItem(activeTrackIndex);

      if (previousItem === undefined) {
        // if we aren't allowing backShuffle then we'll hit a stopping point.
        media.currentTime = 0;
        return;
      }

      index = utils_findTrackIndexByUrl(playlist, previousItem);
    } else {
      index = activeTrackIndex - 1;

      if (index < 0) {
        index = playlist.length - 1;
      }
    }

    this.goToTrack(index);
  };

  _proto.forwardSkip = function forwardSkip() {
    var playlist = this.props.playlist;
    var _state3 = this.state,
        cycle = _state3.cycle,
        activeTrackIndex = _state3.activeTrackIndex,
        shuffle = _state3.shuffle;

    if (!utils_isPlaylistValid(playlist) || !cycle && activeTrackIndex + 1 >= playlist.length) {
      return;
    }

    var index;

    if (shuffle) {
      index = utils_findTrackIndexByUrl(playlist, this.shuffler.findNextItem(activeTrackIndex));
    } else {
      index = activeTrackIndex + 1;

      if (index >= playlist.length) {
        index = 0;
      }
    }

    this.goToTrack(index);
  };

  _proto.seekPreview = function seekPreview(targetTime) {
    if (!utils_isPlaylistValid(this.props.playlist)) {
      return;
    }

    var baseStateUpdate = {
      seekPreviewTime: targetTime,
      seekInProgress: true
    };

    switch (this.props.seekMode) {
      case 'paused':
        this.setState(function (_ref) {
          var paused = _ref.paused,
              awaitingResumeOnSeekComplete = _ref.awaitingResumeOnSeekComplete;
          return _objectSpread({}, baseStateUpdate, {
            awaitingResumeOnSeekComplete: paused ? awaitingResumeOnSeekComplete : true
          });
        });
        this.media.currentTime = targetTime;

        if (!this.state.paused) {
          this.togglePause(true);
        }

        break;

      case 'immediate':
        this.setState(function (_ref2) {
          var paused = _ref2.paused,
              awaitingResumeOnSeekComplete = _ref2.awaitingResumeOnSeekComplete;
          return _objectSpread({}, baseStateUpdate, {
            awaitingResumeOnSeekComplete: paused ? awaitingResumeOnSeekComplete : true
          });
        });
        this.media.currentTime = targetTime;

        if (this.state.awaitingResumeOnSeekComplete && !this.media.ended) {
          // if we earlier encountered an 'ended' state,
          // un-pausing becomes necessary to resume playback
          this.togglePause(false);
        }

        break;

      case 'onrelease':
        this.setState(baseStateUpdate);
        break;
    }
  };

  _proto.seekComplete = function seekComplete() {
    var _state4 = this.state,
        seekPreviewTime = _state4.seekPreviewTime,
        awaitingResumeOnSeekComplete = _state4.awaitingResumeOnSeekComplete;
    var baseStateUpdate = {
      seekInProgress: false,
      awaitingResumeOnSeekComplete: false
    };

    if (isNaN(seekPreviewTime)) {
      this.setState(baseStateUpdate);
      return;
    }

    this.setState(_objectSpread({}, baseStateUpdate, {
      /* we'll update currentTime on the media listener hook anyway,
       * but that might not happen for a bit... so the optimistic update
       * helps us avoid the progress bar jumping around and confusing the user.
       * https://github.com/benwiley4000/cassette/issues/209
       */
      currentTime: seekPreviewTime
    }));
    this.media.currentTime = seekPreviewTime;

    if (awaitingResumeOnSeekComplete) {
      if (this.media.ended) {
        this.forwardSkip();
      } else {
        this.togglePause(false);
      }
    }
  };

  _proto.setVolume = function setVolume(volume) {
    if (!this.state.setVolumeInProgress) {
      this.setState({
        setVolumeInProgress: true
      });
    }

    var volumeInBounds = utils_convertToNumberWithinIntervalBounds(volume, 0, 1);
    this.media.muted = volumeInBounds === 0 ? true : false;
    this.media.volume = volumeInBounds;
  };

  _proto.setVolumeComplete = function setVolumeComplete() {
    this.setState({
      setVolumeInProgress: false
    });

    if (!this.media.muted) {
      this.lastStableVolume = this.media.volume;
    }
  };

  _proto.toggleMuted = function toggleMuted(value) {
    var muted = typeof value === 'boolean' ? value : !this.state.muted;
    this.media.muted = muted;

    if (!muted) {
      this.media.volume = this.lastStableVolume;
    }
  };

  _proto.toggleShuffle = function toggleShuffle(value) {
    var shuffle = typeof value === 'boolean' ? value : !this.state.shuffle;
    this.setState({
      shuffle: shuffle
    });
  };

  _proto.setRepeatStrategy = function setRepeatStrategy(repeatStrategy) {
    if (repeatStrategyOptions.indexOf(repeatStrategy) === -1) {
      logWarning('repeatStrategy "' + repeatStrategy + '" is not one of: ' + repeatStrategyOptions.split(', ') + '.');
      return;
    }

    this.setState(function () {
      switch (repeatStrategy) {
        case 'track':
          return {
            loop: true
          };

        case 'playlist':
          return {
            loop: false,
            cycle: true
          };

        case 'none':
          return {
            loop: false,
            cycle: false
          };

        default:
          return null;
      }
    });
  };

  _proto.setPlaybackRate = function setPlaybackRate(rate) {
    this.media.playbackRate = rate;
  };

  _proto.getControlProps = function getControlProps() {
    var props = this.props,
        state = this.state;
    var playerContext = {
      playlist: props.playlist,
      activeTrackIndex: state.activeTrackIndex,
      trackLoading: state.trackLoading,
      paused: state.paused,
      currentTime: state.currentTime,
      seekPreviewTime: state.seekPreviewTime,
      seekInProgress: state.seekInProgress,
      awaitingResumeOnSeekComplete: state.awaitingResumeOnSeekComplete,
      duration: state.duration,
      bufferedRanges: state.bufferedRanges,
      playedRanges: state.playedRanges,
      seekableRanges: state.seekableRanges,
      volume: state.volume,
      muted: state.muted,
      shuffle: state.shuffle,
      stalled: state.stalled,
      playbackRate: state.playbackRate,
      setVolumeInProgress: state.setVolumeInProgress,
      repeatStrategy: utils_getRepeatStrategy(state.loop, state.cycle),
      pipeVideoStreamToCanvas: this.pipeVideoStreamToCanvas,
      onTogglePause: this.togglePause,
      onSelectTrackIndex: this.selectTrackIndex,
      onBackSkip: this.backSkip,
      onForwardSkip: this.forwardSkip,
      onSeekPreview: this.seekPreview,
      onSeekComplete: this.seekComplete,
      onSetVolume: this.setVolume,
      onSetVolumeComplete: this.setVolumeComplete,
      onToggleMuted: this.toggleMuted,
      onToggleShuffle: this.toggleShuffle,
      onSetRepeatStrategy: this.setRepeatStrategy,
      onSetPlaybackRate: this.setPlaybackRate
    };

    if (this.playerContext) {
      // only update this.playerContext if something has changed
      var _arr = Object.keys(this.playerContext);

      for (var _i = 0; _i < _arr.length; _i++) {
        var key = _arr[_i];

        if (playerContext[key] !== this.playerContext[key]) {
          this.playerContext = playerContext;
          break;
        }
      }
    } else {
      // first time - nothing to compare
      this.playerContext = playerContext;
    }

    return this.playerContext;
  };

  _proto.render = function render() {
    var sources = utils_getTrackSources(this.props.playlist, this.state.activeTrackIndex);
    var playerContext = this.getControlProps();
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_commonjs_react_commonjs2_react_amd_react_["Fragment"], null, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("video", {
      hidden: true,
      ref: this.setMediaElementRef,
      crossOrigin: this.props.crossOrigin,
      preload: "metadata",
      loop: this.state.loop,
      onPlay: this.handleMediaPlay,
      onPause: this.handleMediaPause,
      onEnded: this.handleMediaEnded,
      onStalled: this.handleMediaStalled,
      onCanPlayThrough: this.handleMediaCanplaythrough,
      onTimeUpdate: this.handleMediaTimeupdate,
      onLoadedMetadata: this.handleMediaLoadedmetadata,
      onVolumeChange: this.handleMediaVolumechange,
      onDurationChange: this.handleMediaDurationchange,
      onProgress: this.handleMediaProgress,
      onRateChange: this.handleMediaRatechange
    }, sources.map(function (source) {
      return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("source", {
        key: source.src,
        src: source.src,
        type: source.type
      });
    })), external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_PlayerContext.Provider, {
      value: playerContext
    }, typeof this.props.children === 'function' ? this.props.children(playerContext) : this.props.children));
  };

  return PlayerContextProvider;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"]);
PlayerContextProvider_PlayerContextProvider.propTypes = {
  playlist: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(PlayerPropTypes_track.isRequired).isRequired,
  autoplay: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  autoplayDelayInSeconds: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  gapLengthInSeconds: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  crossOrigin: crossOriginAttribute,
  defaultVolume: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  defaultMuted: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,
  defaultRepeatStrategy: PlayerPropTypes_repeatStrategy.isRequired,
  defaultShuffle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,
  defaultPlaybackRate: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  startingTime: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  startingTrackIndex: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  loadFirstTrackOnPlaylistComplete: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,
  seekMode: seekMode.isRequired,
  maintainPlaybackRate: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  allowBackShuffle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,
  stayOnBackSkipThreshold: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  supportedMediaSessionActions: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(mediaSessionAction.isRequired).isRequired,
  mediaSessionSeekLengthInSeconds: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  mediaElementRef: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,
  initialStateSnapshot: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
    __unstable__: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.object.isRequired
  }),
  onStateSnapshot: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,
  children: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.node, external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func]).isRequired
};
PlayerContextProvider_PlayerContextProvider.defaultProps = {
  autoplay: false,
  autoplayDelayInSeconds: 0,
  gapLengthInSeconds: 0,
  defaultVolume: 1,
  defaultMuted: false,
  defaultRepeatStrategy: 'playlist',
  defaultShuffle: false,
  defaultPlaybackRate: 1,
  startingTime: 0,
  startingTrackIndex: 0,
  loadFirstTrackOnPlaylistComplete: true,
  seekMode: 'immediate',
  maintainPlaybackRate: false,
  allowBackShuffle: false,
  stayOnBackSkipThreshold: 5,
  supportedMediaSessionActions: ['play', 'pause', 'previoustrack', 'nexttrack'],
  mediaSessionSeekLengthInSeconds: 10
};
var PlayerContextProvider_PlayerContextGroupMember =
/*#__PURE__*/
function (_Component2) {
  _inheritsLoose(PlayerContextGroupMember, _Component2);

  function PlayerContextGroupMember() {
    return _Component2.apply(this, arguments) || this;
  }

  var _proto2 = PlayerContextGroupMember.prototype;

  _proto2.componentDidMount = function componentDidMount() {
    this.props.groupContext.registerMediaElement(this.mediaElement);
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    this.props.groupContext.unregisterMediaElement(this.mediaElement);
  };

  _proto2.render = function render() {
    var _this5 = this;

    var _props3 = this.props,
        groupContext = _props3.groupContext,
        props = _props3.props;

    var _mediaElementRef = props.mediaElementRef,
        rest = _objectWithoutProperties(props, ["mediaElementRef"]);

    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(PlayerContextProvider_PlayerContextProvider, _extends({}, groupContext.groupProps, rest, {
      mediaElementRef: function mediaElementRef(ref) {
        if (_mediaElementRef) {
          _mediaElementRef(ref);
        }

        _this5.mediaElement = ref;
      }
    }));
  };

  return PlayerContextGroupMember;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"]);
PlayerContextProvider_PlayerContextGroupMember.propTypes = {
  groupContext: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
    groupProps: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.object.isRequired,
    registerMediaElement: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
    unregisterMediaElement: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
  }).isRequired
};

function PlayerContextGroupConsumer(props) {
  return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_GroupContext.Consumer, null, function (groupContext) {
    if (!groupContext) {
      return Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createElement"])(PlayerContextProvider_PlayerContextProvider, props);
    }

    return Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createElement"])(PlayerContextProvider_PlayerContextGroupMember, {
      groupContext: groupContext,
      props: props
    });
  });
}

/* harmony default export */ var src_PlayerContextProvider = (PlayerContextGroupConsumer);
// CONCATENATED MODULE: ./src/PlayerContextGroup.js
function PlayerContextGroup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PlayerContextGroup_defineProperty(target, key, source[key]); }); } return target; }

function PlayerContextGroup_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PlayerContextGroup_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function PlayerContextGroup_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




/**
 * A wrapper which can be used to share configuration among multiple descendant [`PlayerContextProvider`](#playercontextprovider) instances as well as prevent multiple media elements from playing audio simultaneously
 */

var PlayerContextGroup_PlayerContextGroup =
/*#__PURE__*/
function (_Component) {
  PlayerContextGroup_inheritsLoose(PlayerContextGroup, _Component);

  function PlayerContextGroup(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.registerMediaElement = _this.registerMediaElement.bind(PlayerContextGroup_assertThisInitialized(_this));
    _this.unregisterMediaElement = _this.unregisterMediaElement.bind(PlayerContextGroup_assertThisInitialized(_this));
    _this.enforceOneMediaSourceOnly = _this.enforceOneMediaSourceOnly.bind(PlayerContextGroup_assertThisInitialized(_this));
    _this.mediaElements = [];
    return _this;
  }

  var _proto = PlayerContextGroup.prototype;

  _proto.registerMediaElement = function registerMediaElement(elem) {
    this.mediaElements = this.mediaElements.concat(elem);
    elem.addEventListener('play', this.enforceOneMediaSourceOnly, true);
    elem.addEventListener('volumechange', this.enforceOneMediaSourceOnly, true);
  };

  _proto.unregisterMediaElement = function unregisterMediaElement(elem) {
    this.mediaElements = this.mediaElements.filter(function (element) {
      return elem !== element;
    });
    elem.removeEventListener('play', this.enforceOneMediaSourceOnly, true);
    elem.removeEventListener('volumechange', this.enforceOneMediaSourceOnly, true);
  };

  _proto.enforceOneMediaSourceOnly = function enforceOneMediaSourceOnly(e) {
    var mediaElement = e.target;
    var paused = mediaElement.paused,
        muted = mediaElement.muted;

    if (paused || muted) {
      return;
    }

    for (var _iterator = this.mediaElements, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var _element = _ref;

      if (_element !== mediaElement && !_element.muted) {
        _element.pause();
      }
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_GroupContext.Consumer, null, function (groupContext) {
      var value = groupContext ? PlayerContextGroup_objectSpread({}, groupContext, {
        groupProps: PlayerContextGroup_objectSpread({}, groupContext.groupProps, _this2.props)
      }) : {
        groupProps: _this2.props,
        registerMediaElement: _this2.registerMediaElement,
        unregisterMediaElement: _this2.unregisterMediaElement
      };
      return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_GroupContext.Provider, {
        value: value
      }, _this2.props.children);
    });
  };

  return PlayerContextGroup;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"]);
PlayerContextGroup_PlayerContextGroup.propTypes = {
  children: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.node.isRequired
};
/* harmony default export */ var src_PlayerContextGroup = (PlayerContextGroup_PlayerContextGroup);
// CONCATENATED MODULE: ./src/FullscreenContext.js


var FullscreenContext = Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createContext"])({
  fullscreen: false,
  requestFullscreen: function requestFullscreen() {
    logWarning('Fullscreen request ignored since there is no ' + 'FullscreenContextProvider ancestor.');
  },
  requestExitFullscreen: function requestExitFullscreen() {
    logWarning('Exit fullscreen request ignored since there is no ' + 'FullscreenContextProvider ancestor.');
  }
});
FullscreenContext.displayName = 'FullscreenContext';
/* harmony default export */ var src_FullscreenContext = (FullscreenContext);
// CONCATENATED MODULE: ./src/FullscreenContextProvider.js
function FullscreenContextProvider_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function FullscreenContextProvider_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var fullscreenStyle = {
  width: '100%',
  height: '100%'
};
/**
 * Wraps an area which should be fullscreen-able
 */

var FullscreenContextProvider_FullscreenContextProvider =
/*#__PURE__*/
function (_PureComponent) {
  FullscreenContextProvider_inheritsLoose(FullscreenContextProvider, _PureComponent);

  function FullscreenContextProvider(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;
    _this.state = {
      fullscreen: false
    };
    _this.requestFullscreen = _this.requestFullscreen.bind(FullscreenContextProvider_assertThisInitialized(_this));
    _this.requestExitFullscreen = _this.requestExitFullscreen.bind(FullscreenContextProvider_assertThisInitialized(_this));
    _this.handleFullscreenChange = _this.handleFullscreenChange.bind(FullscreenContextProvider_assertThisInitialized(_this));
    _this.fullscreenElement = null;
    return _this;
  }

  var _proto = FullscreenContextProvider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    document.addEventListener('fullscreenchange', this.handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', this.handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', this.handleFullscreenChange);
    document.addEventListener('msfullscreenchange', this.handleFullscreenChange);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('mozfullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('msfullscreenchange', this.handleFullscreenChange);
  };

  _proto.requestFullscreen = function requestFullscreen() {
    if (!this.props.fullscreenEnabled) {
      return;
    }

    if (this.fullscreenElement.requestFullscreen) {
      this.fullscreenElement.requestFullscreen();
    } else if (this.fullscreenElement.webkitRequestFullscreen) {
      this.fullscreenElement.webkitRequestFullscreen();
    } else if (this.fullscreenElement.mozRequestFullscreen) {
      this.fullscreenElement.mozRequestFullScreen();
    } else if (this.fullscreenElement.msRequestFullscreen) {
      this.fullscreenElement.msRequestFullscreen();
    }
  };

  _proto.requestExitFullscreen = function requestExitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.mozExitFullscreen();
    }
  };

  _proto.handleFullscreenChange = function handleFullscreenChange() {
    var documentFullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    this.setState({
      fullscreen: documentFullscreenElement === this.fullscreenElement
    });
  };

  _proto.getFullscreenContext = function getFullscreenContext() {
    var fullscreenContext = {
      fullscreen: this.state.fullscreen,
      requestFullscreen: this.requestFullscreen,
      requestExitFullscreen: this.requestExitFullscreen
    };

    if (this.fullscreenContext && fullscreenContext.fullscreen === this.fullscreenContext.fullscreen) {
      // no change
      return this.fullscreenContext;
    }

    return this.fullscreenContext = fullscreenContext;
  };

  _proto.render = function render() {
    var _this2 = this;

    var fullscreenContext = this.getFullscreenContext();
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      ref: function ref(elem) {
        return _this2.fullscreenElement = elem;
      },
      style: this.state.fullscreen ? fullscreenStyle : undefined
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_FullscreenContext.Provider, {
      value: fullscreenContext
    }, typeof this.props.children === 'function' ? this.props.children(fullscreenContext) : this.props.children));
  };

  return FullscreenContextProvider;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"]);
FullscreenContextProvider_FullscreenContextProvider.propTypes = {
  fullscreenEnabled: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  children: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.node, external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func]).isRequired
};
FullscreenContextProvider_FullscreenContextProvider.defaultProps = {
  fullscreenEnabled: true
};
/* harmony default export */ var src_FullscreenContextProvider = (FullscreenContextProvider_FullscreenContextProvider);
// CONCATENATED MODULE: ./src/playerContextFilter.js
function playerContextFilter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { playerContextFilter_defineProperty(target, key, source[key]); }); } return target; }

function playerContextFilter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function playerContextFilter(component, contextPropNames) {
  var warned = {};
  var childName = component.displayName || component.name;

  function PlayerContextFilter(props) {
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_FullscreenContext.Consumer, null, function (fullscreenContext) {
      return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_PlayerContext.Consumer, null, function (playerContext) {
        var childProps = playerContextFilter_objectSpread({}, props);

        for (var _iterator = contextPropNames, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var _propName = _ref;

          if (playerContext.hasOwnProperty(_propName)) {
            childProps[_propName] = playerContext[_propName];
          } else if (fullscreenContext.hasOwnProperty(_propName)) {
            childProps[_propName] = fullscreenContext[_propName];
          } else if (!warned[_propName]) {
            logWarning("Prop '" + _propName + "' for component " + childName + ' not found in playerContext or fullscreenContext.');
            warned[_propName] = true;
          }
        }

        return Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createElement"])(component, childProps);
      });
    });
  }

  if (childName) {
    PlayerContextFilter.displayName = "PlayerContextFilter(" + childName + ")";
  }

  return PlayerContextFilter;
}

/* harmony default export */ var src_playerContextFilter = (playerContextFilter);
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContextConsumer", function() { return PlayerContextConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenContextConsumer", function() { return FullscreenContextConsumer; });
/* concated harmony reexport PlayerContextProvider */__webpack_require__.d(__webpack_exports__, "PlayerContextProvider", function() { return src_PlayerContextProvider; });
/* concated harmony reexport PlayerContextGroup */__webpack_require__.d(__webpack_exports__, "PlayerContextGroup", function() { return src_PlayerContextGroup; });
/* concated harmony reexport FullscreenContextProvider */__webpack_require__.d(__webpack_exports__, "FullscreenContextProvider", function() { return src_FullscreenContextProvider; });
/* concated harmony reexport playerContextFilter */__webpack_require__.d(__webpack_exports__, "playerContextFilter", function() { return src_playerContextFilter; });
/* concated harmony reexport PlayerPropTypes */__webpack_require__.d(__webpack_exports__, "PlayerPropTypes", function() { return PlayerPropTypes_namespaceObject; });
/* concated harmony reexport logError */__webpack_require__.d(__webpack_exports__, "logError", function() { return logError; });
/* concated harmony reexport logWarning */__webpack_require__.d(__webpack_exports__, "logWarning", function() { return logWarning; });
/* concated harmony reexport convertToNumberWithinIntervalBounds */__webpack_require__.d(__webpack_exports__, "convertToNumberWithinIntervalBounds", function() { return utils_convertToNumberWithinIntervalBounds; });
/* concated harmony reexport isPlaylistValid */__webpack_require__.d(__webpack_exports__, "isPlaylistValid", function() { return utils_isPlaylistValid; });
/* concated harmony reexport repeatStrategyOptions */__webpack_require__.d(__webpack_exports__, "repeatStrategyOptions", function() { return repeatStrategyOptions; });








var PlayerContextConsumer = src_PlayerContext.Consumer;


var FullscreenContextConsumer = src_FullscreenContext.Consumer;

 // undocumented exports






/***/ })
/******/ ]);
});
//# sourceMappingURL=cassette-core.js.map