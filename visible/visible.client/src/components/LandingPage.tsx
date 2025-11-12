import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import viewGigsButton from "./ViewGigsButton";
import profileButton from "./ProfileButon";

const LandingPage = () => {
  return (
    <div className="border-2 border-white items-center justify-center gap-10 flex grow flex-col">
      {/* Visible Title Component */}
      <h1>Visible</h1>
      {/* Sign In / Sign Up Buttons */}
      <div>
        {/* Sign Up */}
        <SignInModal />
        {/* Sign In */}
        <SignUpModal />
      </div>
      <div>
        {/* profile buton */}
        <viewGigsButton />
        {/* gigs buton */}
        <profileButton />
      </div>
    </div>
  );
};

export default LandingPage;
