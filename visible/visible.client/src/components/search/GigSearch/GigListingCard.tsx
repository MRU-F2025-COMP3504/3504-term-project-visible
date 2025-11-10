import { GigProps } from "@/modules/interfaces";

const GigListingCard = ({
  //Defining requested parameters, and their default values
  id,
  imagePath,
  businessTitle,
  description,
  budget = 0,
}: GigProps) => {
  return (
    <li key={id}>
      {/* Image - commented out until we add images to the database*/}
      {/* <img src={imagePath} alt="business image" /> */}
      {/* Business Name */}
      <h2>{businessTitle}</h2>
      {/* Gig Description */}
      <p>{description}</p>
      {/* Budget */}
      <h3>${budget}</h3>
    </li>
  );
};

export default GigListingCard;
