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
      placeIDs.map((id, idx) => {
        document.getElementById(id).insertAdjacentHTML("afterbegin", SVG);
      });
      initAnimation();
    }
  );

function initAnimation() {
  const animDuration = item => document.getElementById(item).scrollHeight;
  const targetMiddle = [... document.getElementsByClassName("middle-group")];
  targetMiddle[0].style.opacity = 0;
  const targetArrow2 = [...document.getElementsByClassName("movable-arrow1")];
  const targetArrow3 = [...document.getElementsByClassName("movable-arrow2")];
  const targetArrow4 = [...document.getElementsByClassName("movable-arrow3")];
  targetArrow2.forEach(el => el.setAttribute('transform', ''));
  targetArrow3.forEach(el => el.setAttribute('transform', ''));
  targetArrow4.forEach(el => el.setAttribute('transform', ''));

  [... document.getElementsByClassName("movable-arrow")].forEach(el => el.setAttribute('opacity', 0));
  const progressCallback = [targetArrow2, targetArrow3, targetArrow4].map(el => event => {
    if (event.state === 'BEFORE')
      el.forEach(el => el.setAttribute('opacity', 0))
      else
      el.forEach(el => el.setAttribute('transform', `rotate(${120 * event.progress}, 270, 270)`));
  });

  function toggleMaskArrow1() {
    console.log("toggleMaskArrow1" );
    [... document.getElementsByClassName("mask-2")].forEach(el => {
      const currentOpacity = +el.getAttribute('opacity') || 0;
      const toggled = currentOpacity === 0 ? 1 : 0;
      el.setAttribute('opacity', toggled);
    });
  }

// build scenes
  const scene1 = new ScrollMagic.Scene({
    triggerElement: "#STARTTRIGER1",
    duration: animDuration("WHEEL1"), //or set 540 - size of wheel
    triggerHook: 0.75
  })
    .addTo(controller)
    .on("progress", progress1Callback);

  const scene2 = new ScrollMagic.Scene({
    triggerElement: "#movable-arrow1",
    duration: animDuration("WHEEL2"),
    triggerHook: 1,
  })
    .addTo(controller)
    .on("start", toggleMaskArrow1)
    .on("end", toggleMaskArrow1) //hide mask of 1st arrow
    .on("enter", turnOnOpacity) // turn opacity = 1
    .on("progress", progressCallback[0]); //rotate arrow


  const scene3 = new ScrollMagic.Scene({
    triggerElement: "#movable-arrow2",
    duration: animDuration("WHEEL3"),
    triggerHook: 1
  })
    .addTo(controller)
    .on("enter", turnOnOpacity) // turn opacity = 1
    .on("progress", progressCallback[1]); //rotate arrow


  const scene4 = new ScrollMagic.Scene({
    triggerElement: "#movable-arrow3",
    duration: animDuration("WHEEL4"),
    triggerHook: 1
  })
    .addTo(controller)
    .on("enter", turnOnOpacity) // turn opacity = 1
    .on("progress", progressCallback[2]);  //rotate arrow

  function progress1Callback(event) {
    targetMiddle[0].style.opacity = event.progress;
  }

  function turnOnOpacity(event) {
    const elements = event.target.triggerElement().id;
    [... document.getElementsByClassName(elements)].forEach(el => {el.setAttribute('opacity', 1);});
  }
}
