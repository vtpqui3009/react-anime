import { XIcon } from "@heroicons/react/outline";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
const MobileSideDrawer = (props) => {
  return (
    <>
      <section
        className="w-0 z-20 block xl:hidden lg:hidden md:hidden fixed top-0 right-0 h-screen bg-header-color ease-linear transition-all"
        style={{ width: props.width }}
      >
        <header className="flex w-full items-center justify-between p-4">
          <div className="w-3/4 relative">
            <SearchInput />
          </div>
          <XIcon
            className="h-8 text-white m-4 "
            onClick={props.onCloseSideDrawer}
          />
        </header>
        <main>
          <ul className="p-4 text-white">
            <Link to="/anime">
              <li className="m-4">Anime</li>
            </Link>
            <Link to="/manga">
              <li className="m-4">Manga</li>
            </Link>
            <Link to="/ranking">
              <li className="m-4">Bảng xếp hạng</li>
            </Link>
            <Link to="/auth">
              <li className="m-4">Đăng nhập</li>
            </Link>
          </ul>
        </main>
      </section>
    </>
  );
};
export default MobileSideDrawer;
