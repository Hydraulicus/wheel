import ScrollMagic from "ScrollMagic";
import "../styles/index.scss";

// init controller
const controller = new ScrollMagic.Controller();

const placeIDs = [
  "WHEEL1", "WHEEL2", "WHEEL3", "WHEEL4",
];

fetch("assets/wheel1.svg")
  .then(resp => resp.text())
  .then(SVG => {
    placeIDs.map( (id, idx) => {
      document.getElementById(id).insertAdjacentHTML("afterbegin", SVG);
      });
      initAnimation();
    }
  );

function initAnimation() {
  const animDuration = item => document.getElementById(item).scrollHeight;
  const targetMiddle = [... document.getElementsByClassName("middle-group")];
  targetMiddle[0].style.opacity = 0;
  const targetArrow2 = document.getElementById("WHEEL2").getElementsByClassName("movable-arrow1")[0];
  const targetArrow3 = document.getElementById("WHEEL3").getElementsByClassName("movable-arrow2")[0];
  const targetArrow4 = document.getElementById("WHEEL4").getElementsByClassName("movable-arrow3")[0];
  targetArrow2.setAttribute('transform',`rotate(-120, 270, 270)`);
  targetArrow3.setAttribute('transform',`rotate(-120, 270, 270)`);
  targetArrow4.setAttribute('transform',`rotate(-120, 270, 270)`);

// build scenes
  const scene1 = new ScrollMagic.Scene({
    triggerElement: "#STARTTRIGER1",
    duration: animDuration("WHEEL1"),
    triggerHook: 0.75
  })
    .addTo(controller)
    .on("progress", progress1Callback);

  const scene2 = new ScrollMagic.Scene({
    triggerElement: "#STARTTRIGER2",
    duration: animDuration("WHEEL2"),
    triggerHook: 1
  })
    .addTo(controller)
    .on("progress", progress2Callback);

  const scene3 = new ScrollMagic.Scene({
    triggerElement: "#STARTTRIGER3",
    duration: animDuration("WHEEL3"),
    triggerHook: 1
  })
    .addTo(controller)
    .on("progress", progress3Callback);

  const scene4 = new ScrollMagic.Scene({
    triggerElement: "#STARTTRIGER4",
    duration: animDuration("WHEEL4"),
    triggerHook: 1
  })
    .addTo(controller)
    .on("progress", progress4Callback);

  function progress1Callback(event) {
    targetMiddle[0].style.opacity = event.progress;
  }

  function progress2Callback(event) {
    targetArrow2.setAttribute('transform',`rotate(${-120 * (1 - event.progress)}, 270, 270)`);
  }

  function progress3Callback(event) {
    targetArrow3.setAttribute('transform',`rotate(${-120 * (1 - event.progress)}, 270, 270)`);
  }

  function progress4Callback(event) {
    targetArrow4.setAttribute('transform',`rotate(${-120 * (1 - event.progress)}, 270, 270)`);
  }
}

// (function(window){
//   const _init = ({container = ''})=>{
//     let gameBody = document.getElementById(container);
//     if(gameBody === undefined)
//       gameBody = document.getElementsByTagName("body")[0];
//     console.log("Game Initialised");
//   };
//   window.Game = {
//     init:_init
//   };
// })(window);