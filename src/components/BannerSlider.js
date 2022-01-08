import { useState } from "react";
import useAnimeList from "../hooks/useAnimeList";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const { animeList: featureAnimes, isLoading } = useAnimeList(
    "anime/?filter[text]=Fate"
  );
  console.log(isLoading);
  if (!featureAnimes && featureAnimes.length <= 0) {
    return;
  }
  const handlePrevSlide = () => {
    setCurrent(current === 0 ? featureAnimes.length - 1 : current - 1);
  };
  const handleNextSlide = () => {
    setCurrent(current === featureAnimes.length - 1 ? 0 : current + 1);
  };
  const skeletonClass = !isLoading
    ? "animation-pulse bg-gray-700"
    : "styled-text-ellipsis text-[10px] md:text-base mt-1 md:mt-4";
  return (
    <>
      <section className="z-0 relative flex items-center justify-center mt-24 ">
        {featureAnimes.map((anime, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-100 transition duration-1000 ease-in relative"
                  : "opacity-0 transition duration-1000 ease-out relative"
              }
            >
              {index === current && (
                <>
                  <img
                    src={anime.attributes.coverImage.original}
                    alt=""
                    className={`rounded-lg object-cover w-[79vw] h-[38vw]`}
                  />
                  <div className="absolute bottom-[-1rem] lg:bottom-16 md:bottom-4 sm:bottom-4 text-white p-12 w-2/4">
                    <h1 className="lg:text-4xl md:text-3xl text-xl font-bold ">
                      {anime.attributes.canonicalTitle}
                    </h1>
                    <p className={`  ${skeletonClass}`}>
                      {anime.attributes.description}
                    </p>
                    <Link to={`/anime/${anime.id}`}>
                      <button className="lg:px-4 lg:py-3 sm:px-2 sm:py-2 px-[2px] py-[2px] bg-red-600 rounded uppercase tracking-2  mt-1 md:mt-4 flex items-center font-semibold">
                        <span className="lg:mr-2 mr-[2px] text-[8px] md:text-sm">
                          Watch now
                        </span>
                        <PlayIcon className="md:w-6 md:h-6 w-3 h-3" />
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          );
        })}
        <div className="absolute xl:left-[7.5%] xl:w-[65px] xl:h-[65px] lg:left-[7.5%] lg:w-[60px] lg:h-[60px] md:left-[7%] md:w-[55px] md:h-[55px] sm:left-[6.5%] sm:w-[50px] sm:h-[50px] left-[4.5%] w-[42px] h-[42px] bg-base-color rotate-45  flex items-center justify-center">
          <button className="slider-prev-icon">
            <ChevronLeftIcon
              className="text-white z-10 -rotate-45 w-4 xl:w-8 md:w-7 sm:w-5"
              onClick={handlePrevSlide}
            />
          </button>
        </div>
        <div className="absolute xl:right-[7.5%] xl:w-[65px] xl:h-[65px] lg:right-[7.5%] lg:w-[60px] lg:h-[60px] md:right-[7%] md:w-[55px] md:h-[55px] sm:right-[6.5%] sm:w-[50px] sm:h-[50px] right-[4.5%] w-[42px] h-[42px] bg-base-color rotate-45  flex items-center justify-center">
          <button className="slider-next-icon">
            <ChevronRightIcon
              className="text-white z-10 -rotate-45 w-4 xl:w-8 md:w-7 sm:w-5"
              onClick={handleNextSlide}
            />
          </button>
        </div>
      </section>
    </>
  );
};
export default BannerSlider;
