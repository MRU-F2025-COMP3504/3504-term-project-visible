import { GigProps } from "@/modules/interfaces";

const GigListingCard = ({
  //Defining requested parameters, and their default values
  id,
  imagePath,
  businessName,
  gigTitle,
  description,
  budget = 0,
}: GigProps) => {
  return (
    <li key={id}>
      {/* Image - commented out until we add images to the database*/}
      {/* <img src={imagePath} alt="business image" /> */}
      {/* Gig Title */}
      <h2>{gigTitle}</h2>
      {/* Business Name */}
      <h3>{businessName}</h3>
      {/* Gig Description */}
      <p>{description}</p>
      {/* Budget */}
      <h3>${budget}</h3>
      <button type="submit">Apply</button>
    </li>
  );
};

export default GigListingCard;
