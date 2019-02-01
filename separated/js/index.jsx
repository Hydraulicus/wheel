// init controller
const controller = new ScrollMagic.Controller();

function InitAnimation({path2Wheel, placeID, durationSize, triggerID, circle, arrowStatus, responsivness}) {
  fetch(path2Wheel)
    .then(resp => resp.text())
    .then(SVG => {
        document.getElementById(placeID).insertAdjacentHTML("afterbegin", SVG);
        performAnimation({placeID, triggerID, durationSize, circle, arrowStatus, responsivness});
      }
    );

  function performAnimation({placeID, triggerID, durationSize, circle, arrowStatus, responsivness}) {

    /* get options set according to current width */
    const relevantOptions = (responsivness) => {
      const innerWidth = window.innerWidth;

      for ( let i = responsivness.length-1; i >= 0; i -= 1 )
      {
        // console.log( innerWidth, i, " responsivness = ",  responsivness[i].width, responsivness[i]);
        if ( innerWidth > responsivness[i].width ) {
          return responsivness[i];
        }
      }
      return responsivness[0];
    };

    // console.log("relevantOptions = ", relevantOptions(responsivness));
    const { trigger, duration } =  relevantOptions(responsivness);

    let animSize;
    switch (typeof(durationSize)) {

      case "number": { animSize = durationSize; }
        break;
      case "string": {
        animSize = document.getElementById(durationSize).scrollHeight || document.getElementById(durationSize).offsetHeight;
        // console.log("window.devicePixelRatio=", window.devicePixelRatio);
      }
        break;
      default: { animSize = window.innerHeight; }
    }

    const animDuration = (duration) => duration * animSize;
    // console.log(" animDuration= ", animDuration(duration), "animSize = ", animSize, "durationSize =", durationSize, typeof(durationSize), document.getElementById(durationSize) );
    // const animDuration = item => document.getElementById(item).scrollHeight || document.getElementById(item).offsetHeight ;
    // console.log("the orientation of the device is now " + screen.orientation.angle, " window zise = ", window.innerHeight, " x ", window.innerWidth);

    const IdEl = document.getElementById(placeID);
    const targetMiddle = [... IdEl.getElementsByClassName("middle-group")];
    const targetMiddleCircle = document.getElementById("middle-circle");
    targetMiddle[0].style.opacity = (circle === "active") ? 0 : 1;

    /* hide not active arrows */
    [... IdEl.getElementsByClassName("movable-arrow")].forEach((el, idx) => {
      const opacityState = arrowStatus[idx] !== "opened" ? 0 : 1;
      el.setAttribute('opacity', opacityState);
    });

    const passedTrigger = [...IdEl.getElementsByClassName(trigger)][0];//get element in SVG

    const targetArrow0 = [...IdEl.getElementsByClassName("movable-arrow0")];//get element in SVG
    const targetArrow1 = [...IdEl.getElementsByClassName("movable-arrow1")];//get element in SVG
    const targetArrow2 = [...IdEl.getElementsByClassName("movable-arrow2")];//get element in SVG

    const progressCallback = [targetArrow0, targetArrow1, targetArrow2].map(el => event => {
        // console.log("progressCallback", el, event.target.triggerElement(), event.target.progress(), " of ", event.target.duration());
        el.forEach(el => {
          if (el.getAttribute("opacity") == "0") {
            el.setAttribute('opacity', 1);
          }
          el.setAttribute('transform', `rotate(${120 * event.progress}, 270, 270)`);
        });
      }
    );

// build scenes
    if (circle === "active") {
      targetMiddleCircle.setAttribute("r", 0);
      const sceneCircle = new ScrollMagic.Scene({
        triggerElement: passedTrigger,
        duration: animDuration(duration), //or set 540 - size of wheel
        triggerHook: 1
      })
        .addTo(controller)
        .on("progress", progress1Callback);

      window.addEventListener("resize", function () {
        const { trigger, duration } =  relevantOptions(responsivness);
        // console.log("sceneCircle. the orientation of the device is now " + screen.orientation.angle, " window zise = ", window.innerWidth, " x ", window.innerHeight);
        sceneCircle.duration(animDuration(duration));
        sceneCircle.triggerElement([...IdEl.getElementsByClassName(trigger)][0]);
        // console.log("relevantOptions = ", relevantOptions(responsivness));
        // console.log([...IdEl.getElementsByClassName(trigger)][0]);
        // console.log("sceneCircle = ", sceneCircle.state(), sceneCircle.triggerElement());
        // sceneCircle.update();
        // sceneCircle.refresh(true);
      });
    }
    else {
      const ArrowScenes = Object.entries(arrowStatus).map(([i, val]) => {
          if (val !== "active") return;
          const arrowScene = new ScrollMagic.Scene({
            triggerElement: passedTrigger,
            duration: animDuration(duration),
            triggerHook: 1
          })
            .addTo(controller)
            .on("progress", progressCallback[i]);  //rotate arrow

          window.addEventListener("resize", function() {
            const { trigger, duration } =  relevantOptions(responsivness);

            // console.log("the orientation of the device is now " + screen.orientation.angle, " window zise = ", window.innerHeight, " x ", window.innerWidth);
            arrowScene.duration( animDuration(duration) );
            arrowScene.triggerElement([...IdEl.getElementsByClassName(trigger)][0]);

            console.log("relevantOptions = ", relevantOptions(responsivness));
            console.log("arrowScene = ", arrowScene.duration(), arrowScene.triggerElement());

            // arrowScene.triggerElement(document.getElementById(trigger));
            // arrowScene.update(true);
          });
        }
      );
    }

    function progress1Callback(event) {
      // console.log("progressCallback", event.target.progress(), "  duration =", event.target.duration(), "  triggerElement =", event.target.triggerElement() );
      targetMiddle[0].style.opacity = event.progress;
      targetMiddleCircle.setAttribute("r", 90 * event.progress);
    }
  }
}
