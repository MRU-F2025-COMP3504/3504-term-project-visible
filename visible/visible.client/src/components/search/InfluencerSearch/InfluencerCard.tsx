import { InfluencerProps } from "@/modules/interfaces";
import ContactFormModal from "@/components/ContactFormModal";

const InfluencerCard = ({
  //Defining requested parameters, and their default values
  id,
  avatar,
  displayName,
  bio,
}: InfluencerProps) => {
  return (
    <li key={id} className="flex gap-4 items-center p-4 border rounded-xl">
      {/* Image - commented out until we add images to the database*/}
      {
        <div className="w-1/2">
          <img
            src="public/profile.png"
            width={200}
            height={200}
            alt="influencer image"
            className="rounded-lg object-cover"
          />
        </div>
      }

      <div className="flex flex-col w-1/2 wrap-normal">
        <div className="flex flex-col py-1">
          {/* Influencer Display Name */}
          <h2 className="text-xl font-bold">{displayName}</h2>
        </div>
        <div className="flex-col wrap-normal pb-2">
          {/* Influencer Bio */}
          <h3 className="font-bold">About {displayName}</h3> <span>{bio}</span>
        </div>
        <ContactFormModal label="Contact" recipient={displayName} />
      </div>
    </li>
  );
};

export default InfluencerCard;
