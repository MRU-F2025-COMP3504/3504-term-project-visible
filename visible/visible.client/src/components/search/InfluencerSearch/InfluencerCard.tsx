import { InfluencerProps } from "@/modules/interfaces";
import Image from "react";

const InfluencerCard = ({
  //Defining requested parameters, and their default values
  id,
  avatar,
  displayName,
  bio,
}: InfluencerProps) => {
  return (
    <li key={id}>
      {/* Image - commented out until we add images to the database*/}
      {
        <img
          src="public/profile.png"
          width={200}
          height={200}
          alt="influencer image"
        />
      }
      {/* Influencer Display Name */}
      <h2 className="text-xl font-bold">{displayName}</h2>
      {/* Influencer Bio */}
      <h3 className="font-bold">About {displayName}</h3> <span>{bio}</span>
    </li>
  );
};

export default InfluencerCard;
