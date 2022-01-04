import HeaderLogo from "./HeaderLogo";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderAuth from "./HeaderAuth";
const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between fixed top-0 left-0 right-0 pl-6 pr-12 bg-base-darker-color z-10">
      <HeaderLogo />
      <HeaderSearchBar />
      <HeaderAuth />
    </header>
  );
};
export default Header;
