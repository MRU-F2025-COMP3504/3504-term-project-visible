import { Menu, Briefcase } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import NavBarMenu from "./NavBarMenu";

const NavBar = () => {
  return (
    <div className="border-t border-gray-400 h-24 max-h-24 grow flex justify-center items-center hover:cursor-pointer">
      {/* Gig Search */}
      <Briefcase className="text-white hover:text-orange-400 grow h-full pt-2 pb-1" />
      {/* Hamburger Menu */}
      {/* <Menu className="text-white hover:text-orange-400 grow h-full pt-1 pb-1" /> */}
      <NavBarMenu />
    </div>
  );
};

export default NavBar;
