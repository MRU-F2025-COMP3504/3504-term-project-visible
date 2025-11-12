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

const NavBarMenu = () => {
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
          <CreateGigListingModal
            isParentOpen={setIsOpen}
            isParentMenuHidden={setIsMenuHidden}
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavBarMenu;
