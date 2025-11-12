import { Menu, Briefcase } from "lucide-react";

const NavBar = () => {
  return (
    <div className="border-t border-white h-24 max-h-24 grow flex justify-center items-center">
      {/* Gig Search */}
      <Briefcase className="text-white hover:text-orange-400 grow h-full pt-2 pb-2" />
      {/* Hamburger Menu */}
      <Menu className="text-white hover:text-orange-400 grow h-full pt-2 pb-2" />
    </div>
  );
};

export default NavBar;
