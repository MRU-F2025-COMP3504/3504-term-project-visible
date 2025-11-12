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
    <div className="border-2 border-white items-center justify-center gap-10 flex grow flex-col">
      {/* Visible Title Component */}
      <h1>Visible</h1>
      {/* Sign In / Sign Up Buttons */}
      <div>
        {/* Sign Up */}
        <SignInModal />
        {/* Sign In */}
        <SignUpModal />
        {/* Gig Listing Creation */}
        <CreateGigListingModal />
        {/* Influencer Profile Creation */}
        <CreateInfluencerProfileModal />
        {/* Gig Application Modal */}
        <CreateGigApplicationModal />
      </div>
    </div>
  );
};

export default LandingPage;
