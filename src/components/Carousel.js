import React, { useState } from "react";
import Slider from "react-slick";
import Apple from "../assets/apple.png";
import Orange from "../assets/orange.png";
import Pear from "../assets/pear.png";
import Left from "../assets/leftarrow.png";
import Right from "../assets/rightarrow.png";
import Receipt from "../assets/receipt.png";
import Message from "../assets/message.png";
import "../styles/Carousel.css";

const images = [
  { img: Pear, text: "PEAR" },
  { img: Orange, text: "ORANGE" },
  { img: Apple, text: "APPLE" },
];
function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <img src={Right} className="right-arrow" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src={Left} className="left-arrow" />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerPadding: 0,
    centerMode: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <>
      <div className="carousel">
        <Slider {...settings}>
          {images.map((item, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={item.img} alt={item.img} className="carousel-img" />
            </div>
          ))}
        </Slider>
      </div>

      <div>
        <img src={Message} className="message" />
        <div class="text-block">
          <div style={{ display: "flex" }}>
            <h4 style={{ paddingRight: 10 }}>TOTAL</h4>
            <img src={Receipt} className="receipt" />
          </div>
          <h1
            style={{
              color: "black",
              marginTop: 0,
              marginBottom: 10,
              fontSize: 45,
            }}
          >
            $ 68
          </h1>
          <div className="tax">
            <p style={{ fontSize: 8, marginLeft: "14px", paddingTop: "2px" }}>
              TAX INCLUDED
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;

{
  /* <span className="carousel-text">{item.text}</span> */
}
