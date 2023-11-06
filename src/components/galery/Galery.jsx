import "./Galery.css";
import { useEffect, useRef, useState } from "react";
import { data } from "../data";

const Galery = () => {
  //----------- HOOKS ----------
  const listImages = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listImages.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex]);
  // -----------SCROOL SLIDER GALLERY--------
  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex((curr) => curr + 1);
      }
    }
  };

  return (
    <div>
      <h4 id="imagina">Imaginá tu evento</h4>
      <div id="galeryconteiner" className="galeyconteiner">
        <div id="sliderconteiner" className="sliderconteiner">
          <div className="leftArrow" onClick={() => scrollToImage("prev")}>
            <img src="../../../public/left.svg" alt="" />
          </div>
          <div className="rightArrow" onClick={() => scrollToImage("next")}>
            <img src="../../../public/right.svg" alt="" />
          </div>
          <div id="containerimages" className="containerimages">
            <ul id="listimages" className="listimages" ref={listImages}>
              {data.map((item) => {
                return (
                  <li key={item.id}>
                    <img src={item.imgUrl} alt="" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galery;

/*
width={200} height={250}
*/
