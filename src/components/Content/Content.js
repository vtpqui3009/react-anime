import MainContent from "./MainContent/MainContent";
import SidebarContent from "./SidebarContent/SidebarContent";
const Content = () => {
  return (
    <section className="flex items-center">
      <div className="w-8/12">
        <MainContent />
      </div>
      <div className="w-4/12">
        <SidebarContent />
      </div>
    </section>
  );
};
export default Content;
