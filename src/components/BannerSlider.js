import { useState, useEffect } from "react";
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
const BannerSlider = () => {
  const [featureAnimes, setFeatureAnimes] = useState([]);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    try {
      const getFeatureAnime = async () => {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/anime/?filter[text]=Fate`
        );
        const responseData = await response.data.data;
        const loadedData = responseData.slice(0, 3);
        setFeatureAnimes(loadedData);
      };
      getFeatureAnime();
    } catch (err) {}
  }, []);
  if (!featureAnimes && featureAnimes.length <= 0) {
    return;
  }
  const handlePrevSlide = () => {
    setCurrent(current === 0 ? featureAnimes.length - 1 : current - 1);
  };
  const handleNextSlide = () => {
    setCurrent(current === featureAnimes.length - 1 ? 0 : current + 1);
  };
  return (
    <section className="slider">
      {featureAnimes.map((anime, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <>
                <img
                  src={anime.attributes.coverImage.original}
                  alt=""
                  className="slider-image"
                />
                <div className="slider-content">
                  <h1 className="text-4xl font-semibold">
                    {anime.attributes.canonicalTitle}
                  </h1>
                  <p className="styled-text-ellipsis font-semibold text-xl">
                    {anime.attributes.description}
                  </p>
                </div>
              </>
            )}
          </div>
        );
      })}
      <div className="absolute left-12 xl:left-28 lg:left-22 md:left-14 sm:left-12">
        <button className="slider-prev-icon">
          {" "}
          <ChevronLeftIcon
            className="text-white z-10 -rotate-45 w-6 xl:w-8 md:w-7 sm:w-6"
            onClick={handlePrevSlide}
          />
        </button>
      </div>
      <div className="absolute right-12 xl:right-28 lg:right-22 md:right-14 sm:right-12">
        <button className="slider-next-icon">
          <ChevronRightIcon
            className="text-white z-10 -rotate-45 w-6 xl:w-8 md:w-7 sm:w-6"
            onClick={handleNextSlide}
          />
        </button>
      </div>
    </section>
  );
};
export default BannerSlider;
