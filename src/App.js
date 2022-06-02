import { useEffect, useMemo, useState } from "react";
import "./App.css";
import _ from "lodash";

function App() {
  const [width, setWidth] = useState(0);
  const [scrollCount, setScrollCount] = useState(0);
  const [deltaY, setDeltaY] = useState(null);
  const [count, setCount] = useState(0);

  let oldValue = 0;
  let newValue = 0;

  useEffect(() => {
    const pageelm = document.getElementsByClassName("pagesContainer");

    // const e1 = document.getElementsByClassName("pages");
    // const eventHandler = (e) => {
    //   console.log(e);
    //   setDeltaY(e.deltaY);
    //   const deltaYcopy = deltaY;x
    //   console.log(deltaYcopy);
    //   deltaYcopy === e.deltaY ? console.log("match") : console.log("unmatch");
    //   if (scrollCount == 0 && e.movementY != 0) {
    //     console.log(e);
    //     (function () {
    //       for (let i = 0; i < 5; i++) {
    //         e1[i].style.transform = "translateX(-100%)";
    //       }
    //       setScrollCount(scrollCount + 1);
    //     })();
    //   }
    // };
    // setWidth(document.getElementsByClassName("pagesContainer")[0].clientWidth);
    window.addEventListener("scroll", (event) => {
      if (isInViewport(document.getElementsByClassName("pagesContainer")[0])) {
        document
          .getElementsByClassName("pagesContainer")[0]
          .addEventListener("wheel", wheelHandle);
        if (isInViewport(document.getElementById("fifthP"))) {
          newValue = window.pageYOffset;
          if (oldValue < newValue) {
            document.body.style.overflow = "scroll";
          } else if (oldValue > newValue) {
            document.body.style.overflow = "hidden";
          }
          oldValue = newValue;
        }
        if (isInViewport(document.getElementById("P1"))) {
          newValue = window.pageYOffset;
          if (oldValue < newValue) {
            document.body.style.overflow = "hidden";
          } else if (oldValue > newValue) {
            document.body.style.overflow = "scroll";
          }
          oldValue = newValue;
        }
      } else {
        document
          .getElementsByClassName("pagesContainer")[0]
          .removeEventListener("wheel", wheelHandle);
        document.body.style.overflow = "scroll";
      }
    });
    // document
    //   .getElementsByClassName("pagesContainer")[0]
    //   .addEventListener("wheel", wheelHandle);
  }, []);
  var t = null;
  const e1 = document.getElementsByClassName("slider_wraper");

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const setTransitionFun = (e) => {
    console.log("once");

    // console.log("expected event", e);
    const P1 = isInViewport(document.getElementById("P1"));
    const P2 = isInViewport(document.getElementById("P2"));
    const P3 = isInViewport(document.getElementById("P3"));
    const fouthP = isInViewport(document.getElementById("fouthP"));
    const fifthP = isInViewport(document.getElementById("fifthP"));
    console.log("P1" + P1);
    console.log("P2" + P2);
    console.log("P3" + P3);
    console.log("P4" + fouthP);
    console.log("P5" + fifthP);

    // if (P1) {
    //   document.body.style.overflow = "hidden";
    // }
    // if (fifthP) {
    //   document.body.style.overflow = "scroll";
    // }

    if (P1 && e.deltaY > 0) {
      document.body.style.overflow = "hidden";
      e1[0].style.transform = "translateX(-20%)";
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    } else {
      if (P1 && e.deltaY < 0) {
        document.body.style.overflow = "scroll";
        e1[0].style.transform = "translateX(-0%)";
      }
    }

    if (P2 && e.deltaY > 0) {
      e1[0].style.transform = "translateX(-40%)";
      // window.scrollBy(0, window.innerHeight * 3);
      window.scrollTo({
        top: window.innerHeight * 2,
        behavior: "smooth",
      });
    } else {
      if (P2 && e.deltaY < 0) {
        e1[0].style.transform = "translateX(-0%)";
      }
    }

    if (P3 && e.deltaY > 0) {
      e1[0].style.transform = "translateX(-60%)";
      // window.scrollBy(0, window.innerHeight * 4);
      window.scrollTo({
        top: window.innerHeight * 3,
        behavior: "smooth",
      });
    } else {
      if (P3 && e.deltaY < 0) {
        e1[0].style.transform = "translateX(-20%)";
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }
    }

    if (fouthP && e.deltaY > 0) {
      e1[0].style.transform = "translateX(-80%)";
      // window.scrollBy(0, window.innerHeight * 5);
      window.scrollTo({
        top: window.innerHeight * 4,
        behavior: "smooth",
      });
    } else {
      if (fouthP && e.deltaY < 0) {
        e1[0].style.transform = "translateX(-40%)";
        window.scrollTo({
          top: window.innerHeight * 2,
          behavior: "smooth",
        });
      }
    }

    if (fifthP && e.deltaY > 0) {
      document.body.style.overflow = "scroll";
      e1[0].style.transform = "translateX(-80%)";
      // window.scrollTo({
      //   top: window.innerHeight * 4 + 100,
      //   behavior: "smooth",
      // });
    } else {
      if (fifthP && e.deltaY < 0) {
        document.body.style.overflow = "hidden";
        e1[0].style.transform = "translateX(-60%)";
        window.scrollTo({
          top: window.innerHeight * 3,
          behavior: "smooth",
        });
      }
    }

    // if()

    // if (e.deltaY > 0) {
    //   e1[0].style.transform = "translateX(-20%)";
    // } else {
    //   e1[0].style.transform = "translateX(0%)";
    // }
  };

  const stopWheelHandle = useMemo(
    (e) =>
      _.debounce(
        (e) => {
          setTransitionFun(e);
        },
        200,
        {
          leading: true,
          trailing: false,
        }
      ),
    []
  );

  const wheelHandle = (e) => {
    // setScrollCount(scrollCount + 1);
    stopWheelHandle(e);
    console.log("wheel");
    // return;
    // e.deltaY > 0 ? setScrollCount(scrollCount + 1) : console.log("negative");
  };
  console.log(count);

  return (
    <div>
      <div className="section">section 1</div>
      <div className="secondSection">
        <div className="masterContainer">
          <div className="pagesContainer">
            <div className="slider_wraper">
              <div className="pages">
                <span id="P1">Slide 1</span>
              </div>
              <div className="pages">
                <span id="P2">Slide 2</span>
              </div>
              <div className="pages">
                <span id="P3">Slide 3</span>
              </div>
              <div className="pages">
                <span id="fouthP">Slide 4</span>
              </div>
              <div className="pages">
                <span id="fifthP">Slide 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">section 2</div>
    </div>
  );
}

export default App;
