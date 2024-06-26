import "./Slider.scss";
import CarouselSlider from "../../utils/carouselSlider";
import { useEffect, useRef } from "react";
import { CursorsStyles } from "darco-cursors";

export default function Slider({ data, section }) {
  const carouselRef = useRef();

  useEffect(() => {
    if (carouselRef.current) CarouselSlider(carouselRef.current);
  }, [carouselRef.current]);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="carousel__nav">
        <span
          id="moveLeft"
          className={`carousel__arrow ${CursorsStyles.pointer}`}
        >
          <svg
            className="carousel__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
          </svg>
        </span>
        <span
          id="moveRight"
          className={`carousel__arrow ${CursorsStyles.pointer}`}
        >
          <svg
            className="carousel__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
          </svg>
        </span>
      </div>
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <div key={item.id} className="carousel-item">
            <div className="carousel-item__image">
              <img src={item.img} alt={`img-slider-${item.name}`} />
            </div>
            <div className="carousel-item__info">
              <div className="carousel-item__container">
                <h2 className="carousel-item__subtitle">{section} </h2>
                <h1 className="carousel-item__title">{item.name}</h1>
                <p className="carousel-item__description">{item.description}</p>
              </div>
              <div className="links">
                <a
                  href={item.browse}
                  target="_blank"
                  rel="noreferrer"
                  className={`carousel-item__btn ${CursorsStyles.pointer}`}
                >
                  demo
                </a>
                <a
                  href={item.code}
                  target="_blank"
                  rel="noreferrer"
                  className={`carousel-item__btn ${CursorsStyles.pointer}`}
                >
                  code
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
