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
import CreateGigListingModal from "./CreateGigListingModal";
import CreateInfluencerProfileModal from "./InfluencerProfileModal";
import CreateGigApplicationModal from "./CreateGigApplicationModal";

const LandingPage = () => {
  return (
    <div className="items-center justify-center gap-15 flex grow flex-col bg-gradient-to-br from-violet-950 via-pink-900 to-violet-950 ">
      {/* Visible Title Component */}
      <h1 className="text-violet-500">Visible</h1>
      <h2 className="text-violet-500">Be Seen by others</h2>
      {/* Sign In / Sign Up Buttons */}
      <div className="gap-10">
        {/* Sign Up */}
        <SignInModal />
        {/* Sign In */}
        <SignUpModal />
      </div>
    </div>
  );
};

export default LandingPage;
