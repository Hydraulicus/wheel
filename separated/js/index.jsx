// init controller
const controller = new ScrollMagic.Controller();

function InitAnimation({path2Wheel, placeID, duration, triggerID, circle, arrowStatus}) {
  fetch(path2Wheel)
    .then(resp => resp.text())
    .then(SVG => {
        document.getElementById(placeID).insertAdjacentHTML("afterbegin", SVG);
        performAnimation({placeID, triggerID, duration, circle, arrowStatus});
      }
    );

  function performAnimation({placeID, triggerID, duration, circle, arrowStatus}) {
    const animDuration = item => document.getElementById(item).scrollHeight || document.getElementById(item).offsetHeight ;
    const IdEl = document.getElementById(placeID);
    const targetMiddle = [... IdEl.getElementsByClassName("middle-group")];
    targetMiddle[0].style.opacity = (circle === "active") ? 0 : 1;

    /* hide not active arrows */
    [... IdEl.getElementsByClassName("movable-arrow")].forEach((el, idx) => {
      const opacityState = arrowStatus[idx] !== "opened" ? 0 : 1;
      el.setAttribute('opacity', opacityState);
    });

    const targetArrow0 = [...IdEl.getElementsByClassName("movable-arrow0")];//get element in SVG
    const targetArrow1 = [...IdEl.getElementsByClassName("movable-arrow1")];//get element in SVG
    const targetArrow2 = [...IdEl.getElementsByClassName("movable-arrow2")];//get element in SVG

    const progressCallback = [targetArrow0, targetArrow1, targetArrow2].map(el => event => {
        el.forEach(el => {
          el.setAttribute('transform', `rotate(${120 * event.progress}, 270, 270)`);
        });
      }
    );

// build scenes
    if (circle === "active") {
      const sceneCircle = new ScrollMagic.Scene({
        triggerElement: `#${triggerID}`,
        duration: animDuration(duration), //or set 540 - size of wheel
        triggerHook: 0.75
      })
        .addTo(controller)
        .on("progress", progress1Callback);
    }
    else {

      const ArrowScenes = Object.entries(arrowStatus).map(([i, val]) => {
          if (val !== "active") return;
          return new ScrollMagic.Scene({
            triggerElement: `#${triggerID}`,
            duration: animDuration(duration),
            triggerHook: 1
          })
            .addTo(controller)
            .on("enter", turnOnOpacity) // turn opacity = 1
            .on("progress", progressCallback[i]);  //rotate arrow
        }
      );
    }

    function progress1Callback(event) {
      targetMiddle[0].style.opacity = event.progress;
    }

    function turnOnOpacity(event) {
      const elements = event.target.triggerElement().id;
      [... IdEl.getElementsByClassName(elements)].forEach(el => {
        el.setAttribute('opacity', 1);
      });
    }
  }
}
