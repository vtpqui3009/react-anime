// import { HeartIcon, EyeIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { PlayIcon } from "@heroicons/react/outline";
const MainLayoutItem = ({ animeList }) => {
  return (
    <>
      {animeList &&
        animeList.map((anime) => (
          <div
            className="flex items-center justify-center flex-col w-full h-96"
            key={anime.id}
          >
            <div className="relative mb-auto md:h-5/6 w-full">
              <span className="absolute top-3 left-3 bg-red-600 rounded text-sm px-1 z-10">{`${
                anime.attributes.episodeCount
              } ${"/"} ${anime.attributes.episodeCount}`}</span>
              <Link to={`anime/${anime.id}`} className="h-full">
                <div className="relative flex flex-col items-center group  hover:shadow-card transition-all">
                  <div className="overflow-hidden">
                    <img
                      alt=""
                      src={anime.attributes.posterImage.large}
                      className="relative w-full h-full object-cover rounded hover:scale-110 transition-all"
                    />
                  </div>
                  <div className="absolute top-[35%] left-[35%] translate-x-1/2 translate-y-1/2 hidden group-hover:flex">
                    <PlayIcon className="w-10 h-10" />
                  </div>
                  <div className="absolute rounded-lg bottom-4 right-[-105%] items-center hidden mb-36 group-hover:flex w-full">
                    <div className="relative z-20 p-2 text-sm text-white whitespace-no-wrap bg-gray-600 shadow-lg">
                      <h3 className="font-semibold text-lg">
                        {anime.attributes.canonicalTitle}
                      </h3>
                      <div className="my-2 border-b border-gray-50" />
                      <p className="styled-text-ellipsis-six ">
                        {anime.attributes.description}
                      </p>
                    </div>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
                </div>
              </Link>
            </div>
            <div className=" flex flex-col md:h-1/6 font-semibold text-lg w-full">
              <Link to={`anime/${anime.id}`}>
                {" "}
                <h2>{anime.attributes.canonicalTitle}</h2>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};
export default MainLayoutItem;
