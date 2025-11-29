import { InfluencerProps } from "@/modules/interfaces";

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
      {/* <img src={avatar} alt="influencer image" /> */}
      {/* Influencer Display Name */}
      <h2>{displayName}</h2>
      {/* Influencer Bio */}
      <p>{bio}</p>
    </li>
  );
};

export default InfluencerCard;
