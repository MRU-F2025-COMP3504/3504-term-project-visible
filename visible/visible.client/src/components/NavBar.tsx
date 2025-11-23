import { Briefcase } from "lucide-react";
import NavBarMenu from "./NavBarMenu";
import { useContext } from "react";
import { Context } from "@/App";

const NavBar = () => {
  //get pageView context for page control
  const [pageView, setPageView] = useContext(Context).pageView;
  return (
    <div className="border-t border-purple-750 h-24 max-h-24 grow flex justify-center items-center hover:cursor-pointer bg-violet-900">
      {/* Gig Search */}
      <Briefcase
        // text colour -> orange if selected or hovered
        className={`${pageView === "GigSearch" ? "text-orange-400" : "text-white"} hover:text-orange-300 grow h-full pt-2 pb-1`}
        onClick={() => {
          setPageView("GigSearch");
        }}
      />
      {/* Hamburger Menu */}
      {/* <Menu className="text-white hover:text-orange-400 grow h-full pt-1 pb-1" /> */}
      <NavBarMenu />
    </div>
  );
};

export default NavBar;
