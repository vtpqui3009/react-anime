import MainLayout from "./MainLayout";
import MainLayoutItem from "./MainLayoutItem";
import useMainAnimeList from "../../../hooks/useAnimeList";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
const TrendingAnime = () => {
  const data = useMainAnimeList("trending/anime", 1, 10);
  return (
    <MainLayout
      heading="Trending"
      action={
        <div className="flex items-center">
          <span className="mr-2">View all</span>
          <ArrowNarrowRightIcon className="w-5 h-5" />
        </div>
      }
    >
      <MainLayoutItem animeList={data} />
    </MainLayout>
  );
};
export default TrendingAnime;
