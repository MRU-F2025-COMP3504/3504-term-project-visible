import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

const NavBarMenu = () => {
  return (
    <div className="flex grow h-full">
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="grow flex p-0! hover:border-none! border-none! focus:outline-none! focus-visible:outline-none! focus:ring-0! focus-visible:ring-0! bg-black!"
        >
          <Menu
            className="text-white hover:text-orange-400 grow h-full pt-1 pb-1 border-none!"
            onClick={() => {
              console.log("menu button clicked");
            }}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="flex items-center">
            Post A Gig
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavBarMenu;
