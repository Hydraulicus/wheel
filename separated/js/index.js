"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// init controller
var controller = new ScrollMagic.Controller();

function InitAnimation(_ref) {
  var path2Wheel = _ref.path2Wheel,
      placeID = _ref.placeID,
      duration = _ref.duration,
      triggerID = _ref.triggerID,
      circle = _ref.circle,
      arrowStatus = _ref.arrowStatus;

  fetch(path2Wheel).then(function (resp) {
    return resp.text();
  }).then(function (SVG) {
    document.getElementById(placeID).insertAdjacentHTML("afterbegin", SVG);
    performAnimation({ placeID: placeID, triggerID: triggerID, duration: duration, circle: circle, arrowStatus: arrowStatus });
  });

  function performAnimation(_ref2) {
    var placeID = _ref2.placeID,
        triggerID = _ref2.triggerID,
        duration = _ref2.duration,
        circle = _ref2.circle,
        arrowStatus = _ref2.arrowStatus;

    var animDuration = function animDuration(item) {
      return document.getElementById(item).scrollHeight || document.getElementById(item).offsetHeight;
    };
    var IdEl = document.getElementById(placeID);
    var targetMiddle = [].concat(_toConsumableArray(IdEl.getElementsByClassName("middle-group")));
    targetMiddle[0].style.opacity = circle === "active" ? 0 : 1;

    /* hide not active arrows */
    [].concat(_toConsumableArray(IdEl.getElementsByClassName("movable-arrow"))).forEach(function (el, idx) {
      var opacityState = arrowStatus[idx] !== "opened" ? 0 : 1;
      el.setAttribute('opacity', opacityState);
    });

    var targetArrow0 = [].concat(_toConsumableArray(IdEl.getElementsByClassName("movable-arrow0"))); //get element in SVG
    var targetArrow1 = [].concat(_toConsumableArray(IdEl.getElementsByClassName("movable-arrow1"))); //get element in SVG
    var targetArrow2 = [].concat(_toConsumableArray(IdEl.getElementsByClassName("movable-arrow2"))); //get element in SVG

    var progressCallback = [targetArrow0, targetArrow1, targetArrow2].map(function (el) {
      return function (event) {
        el.forEach(function (el) {
          el.setAttribute('transform', "rotate(" + 120 * event.progress + ", 270, 270)");
        });
      };
    });

    // build scenes
    if (circle === "active") {
      var sceneCircle = new ScrollMagic.Scene({
        triggerElement: "#" + triggerID,
        duration: animDuration(duration), //or set 540 - size of wheel
        triggerHook: 0.75
      }).addTo(controller).on("progress", progress1Callback);
    } else {

      var ArrowScenes = Object.entries(arrowStatus).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            i = _ref4[0],
            val = _ref4[1];

        if (val !== "active") return;
        return new ScrollMagic.Scene({
          triggerElement: "#" + triggerID,
          duration: animDuration(duration),
          triggerHook: 1
        }).addTo(controller).on("enter", turnOnOpacity) // turn opacity = 1
        .on("progress", progressCallback[i]); //rotate arrow
      });
    }

    function progress1Callback(event) {
      targetMiddle[0].style.opacity = event.progress;
    }

    function turnOnOpacity(event) {
      var elements = event.target.triggerElement().id;
      [].concat(_toConsumableArray(IdEl.getElementsByClassName(elements))).forEach(function (el) {
        el.setAttribute('opacity', 1);
      });
    }
  }
}