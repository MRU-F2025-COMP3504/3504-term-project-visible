import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import CreateGigListingModal from "./CreateGigListingModal";
import { useState } from "react";
import { Button } from "./ui/button";
import { Context } from "@/App";
import { useContext } from "react";
import { signOut } from "@/modules/data";
import CreateInfluencerProfileModal from "./InfluencerProfileModal";
import CreateBusinessProfileModal from "@/components/BusinessProfileModal.tsx";

const NavBarMenu = () => {
  const [loggedIn, setLoggedIn] = useContext(Context).loggedIn;
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  return (
    <div className="flex grow h-full">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger
          asChild
          className="grow flex p-0! hover:border-none! border-none! focus:outline-none! focus-visible:outline-none! focus:ring-0! focus-visible:ring-0! bg-black!"
        >
          <Menu className="text-white hover:text-orange-400 grow h-full pt-1 pb-1 border-none!" />
        </DropdownMenuTrigger>
        <DropdownMenuContent hidden={isMenuHidden}>
          <div className="flex flex-col items-center justify-center">
            <CreateInfluencerProfileModal
              isParentOpen={setIsOpen}
              isParentMenuHidden={setIsMenuHidden}
            />
            <CreateBusinessProfileModal
              isParentOpen={setIsOpen}
              isParentMenuHidden={setIsMenuHidden}
            />
            <CreateGigListingModal
              isParentOpen={setIsOpen}
              isParentMenuHidden={setIsMenuHidden}
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                setLoggedIn(false);
                signOut();
              }}
            >
              Sign Out
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavBarMenu;
