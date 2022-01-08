import MainContent from "./MainContent/MainContent";
import SidebarContent from "./SidebarContent/SidebarContent";
const Content = () => {
  return (
    <section className="flex flex-col md:flex-row w-4/5 m-auto mt-10">
      <div className="md:w-8/12  w-full">
        <MainContent />
      </div>
      <div className="md:w-4/12  md:ml-10 w-full">
        <SidebarContent />
      </div>
    </section>
  );
};
export default Content;
