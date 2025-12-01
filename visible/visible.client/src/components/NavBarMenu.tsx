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
          className="grow flex p-0! hover:border-none! border-none! focus:outline-none! focus-visible:outline-none! focus:ring-0! focus-visible:ring-0! bg-purple!"
        >
          <Menu className="text-white hover:text-orange-300 grow h-full pt-1 pb-1 border-none!" />
        </DropdownMenuTrigger>
        <DropdownMenuContent hidden={isMenuHidden} className="p-0!">
          <div className="flex flex-col items-center justify-center bg-purple-500">
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
              className="bg-pink-500! hover:bg-pink-400! rounded-none! w-full border-none!"
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
