import TopViewHeading from "./TopViewHeading";
import TopViewLayout from "./TopViewLayout";
import useMainAnimeList from "../../../hooks/useAnimeList";
const TopViewAnime = () => {
  const animeList = useMainAnimeList("/anime/?sort=-userCount", 0, 5);
  return (
    <>
      <TopViewHeading heading="Top view" />
      <main className=" w-full text-white gap-6">
        <TopViewLayout animeList={animeList} />
      </main>
    </>
  );
};
export default TopViewAnime;
