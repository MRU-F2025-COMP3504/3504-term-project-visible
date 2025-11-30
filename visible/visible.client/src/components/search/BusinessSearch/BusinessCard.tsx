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
      {
        <img
          src="/business.png"
          width={200}
          height={200}
          alt="business image"
        />
      }
      {/* Business Name */}
      <h2 className="text-xl font-bold">{businessName}</h2>
      {/* Industry */}
      <h3 className="font-bold">Industry: </h3> <span>{industry}</span>
      {/* Business Location */}
      <h3 className="font-bold">Location: </h3> <span>{location}</span>
    </li>
  );
};

export default BusinessCard;
