import { BusinessProps } from "@/modules/interfaces";

const BusinessCard = ({
  //Defining requested parameters, and their default values
  id,
  businessName,
  location,
  industry,
  displayImage,
}: BusinessProps) => {
  return (
    <li key={id}>
      {/* Image - commented out until we add images to the database*/}
      {/* <img src={displayImage} alt="business image" /> */}
      {/* Business Name */}
      <h2>{businessName}</h2>
      {/* Industry */}
      <h3>{industry}</h3>
      {/* Business Location */}
      <p>{location}</p>
    </li>
  );
};

export default BusinessCard;
