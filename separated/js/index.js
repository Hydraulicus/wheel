"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// init controller
var controller = new ScrollMagic.Controller();

function InitAnimation(_ref) {
  var path2Wheel = _ref.path2Wheel,
      placeID = _ref.placeID,
      duration = _ref.duration,
      durationSize = _ref.durationSize,
      triggerID = _ref.triggerID,
      trigger = _ref.trigger,
      circle = _ref.circle,
      arrowStatus = _ref.arrowStatus;

  fetch(path2Wheel).then(function (resp) {
    return resp.text();
  }).then(function (SVG) {
    document.getElementById(placeID).insertAdjacentHTML("afterbegin", SVG);
    performAnimation({ placeID: placeID, triggerID: triggerID, duration: duration, durationSize: durationSize, trigger: trigger, circle: circle, arrowStatus: arrowStatus });
  });

  function performAnimation(_ref2) {
    var placeID = _ref2.placeID,
        triggerID = _ref2.triggerID,
        trigger = _ref2.trigger,
        duration = _ref2.duration,
        durationSize = _ref2.durationSize,
        circle = _ref2.circle,
        arrowStatus = _ref2.arrowStatus;


    var animSize = void 0;
    switch (typeof durationSize === "undefined" ? "undefined" : _typeof(durationSize)) {

      case "number":
        {
          animSize = durationSize;
        }
        break;
      case "string":
        {
          animSize = document.getElementById(durationSize).scrollHeight || document.getElementById(durationSize).offsetHeight;
          // console.log("window.devicePixelRatio=", window.devicePixelRatio);
        }
        break;
      default:
        {
          animSize = window.innerHeight;
        }
    }

    var animDuration = function animDuration(duration) {
      return duration * animSize;
    };
    // console.log(" animDuration= ", animDuration(duration), "animSize = ", animSize, "durationSize =", durationSize, typeof(durationSize), document.getElementById(durationSize) );
    // const animDuration = item => document.getElementById(item).scrollHeight || document.getElementById(item).offsetHeight ;
    // console.log("the orientation of the device is now " + screen.orientation.angle, " window zise = ", window.innerHeight, " x ", window.innerWidth);

    var IdEl = document.getElementById(placeID);
    var targetMiddle = [].concat(_toConsumableArray(IdEl.getElementsByClassName("middle-group")));
    var targetMiddleCircle = document.getElementById("middle-circle");
    targetMiddle[0].style.opacity = circle === "active" ? 0 : 1;

    /* hide not active arrows */
    [].concat(_toConsumableArray(IdEl.getElementsByClassName("movable-arrow"))).forEach(function (el, idx) {
      var opacityState = arrowStatus[idx] !== "opened" ? 0 : 1;
      el.setAttribute('opacity', opacityState);
    });

    var passedTrigger = [].concat(_toConsumableArray(IdEl.getElementsByClassName(trigger)))[0]; //get element in SVG

    var targetArrow0 = [].concat(_toConsumableArray(IdEl.getElementsByClassName("movable-arrow0"))); //get element in SVG
    var targetArrow1 = [].concat(_toConsumableArray(IdEl.getElementsByClassName("movable-arrow1"))); //get element in SVG
    var targetArrow2 = [].concat(_toConsumableArray(IdEl.getElementsByClassName("movable-arrow2"))); //get element in SVG

    var progressCallback = [targetArrow0, targetArrow1, targetArrow2].map(function (el) {
      return function (event) {
        // console.log("progressCallback", el, event.target.triggerElement(), event.target.progress(), " of ", event.target.duration());
        el.forEach(function (el) {
          if (el.getAttribute("opacity") == "0") {
            el.setAttribute('opacity', 1);
          }
          el.setAttribute('transform', "rotate(" + 120 * event.progress + ", 270, 270)");
        });
      };
    });

    // build scenes
    if (circle === "active") {
      targetMiddleCircle.setAttribute("r", 0);
      var sceneCircle = new ScrollMagic.Scene({
        triggerElement: passedTrigger,
        duration: animDuration(duration), //or set 540 - size of wheel
        triggerHook: 1
      }).addTo(controller).on("progress", progress1Callback);

      window.addEventListener("resize", function () {
        sceneCircle.duration(animDuration(duration));
        sceneCircle.update(true);
      });
    } else {
      var ArrowScenes = Object.entries(arrowStatus).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            i = _ref4[0],
            val = _ref4[1];

        if (val !== "active") return;
        var arrowScene = new ScrollMagic.Scene({
          triggerElement: passedTrigger,
          duration: animDuration(duration),
          triggerHook: 1
        }).addTo(controller).on("progress", progressCallback[i]); //rotate arrow

        window.addEventListener("resize", function () {
          // console.log("the orientation of the device is now " + screen.orientation.angle, " window zise = ", window.innerHeight, " x ", window.innerWidth);
          arrowScene.duration(animDuration(duration));
          arrowScene.update(true);
        });
      });
    }

    function progress1Callback(event) {
      targetMiddle[0].style.opacity = event.progress;
      targetMiddleCircle.setAttribute("r", 90 * event.progress);
    }
  }
}