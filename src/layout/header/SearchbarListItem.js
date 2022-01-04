import { Link } from "react-router-dom";
const SearchbarListItem = ({ animeList }) => {
  return (
    <>
      {" "}
      {animeList &&
        animeList.map((anime) => (
          <li
            key={anime.id}
            className="bg-blue-dark text-white border-b border-gray-600 hover:bg-hover-input-dark"
          >
            <Link to={`anime/${anime.id}`} className="flex px-2 py-4 gap-2 ">
              <img
                src={anime.attributes.posterImage.tiny}
                alt=""
                className="w-1/5 h-20 object-cover"
              />
              <div className="w-4/5">
                <h3 className="font-bold">{anime.attributes.titles.en_jp}</h3>
                <p className="styled-text-ellipsis text-sm">
                  {anime.attributes.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
    </>
  );
};
export default SearchbarListItem;
