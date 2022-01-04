import MainLayoutItem from "./MainLayoutItem";
import useMainAnimeList from "../../../hooks/useMainAnimeList";
const TrendingAnime = () => {
  const data = useMainAnimeList("trending/anime", null);
  console.log(data);
  return <MainLayoutItem />;
};
export default TrendingAnime;
