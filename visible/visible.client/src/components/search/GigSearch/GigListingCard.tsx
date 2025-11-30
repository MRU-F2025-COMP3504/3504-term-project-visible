import { GigProps } from "@/modules/interfaces";
import CreateGigApplicationModal from "@/components/CreateGigApplicationModal";

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
      {
        <img
          src="/giglisting.png"
          width={200}
          height={200}
          alt="business image"
        />
      }
      {/* Gig Title */}
      <h2 className="text-xl font-bold">{gigTitle}</h2>
      {/* Business Name */}
      <h3 className="font-bold">Created By: </h3> <span>{businessName}</span>
      {/* Gig Description */}
      <h3 className="font-bold">Description: </h3>
      <span>{description}</span>
      {/* Budget */}
      <h3 className="font-bold">Budget: </h3>{" "}
      <span className="italic">${budget}</span>
      <br />
      <CreateGigApplicationModal label="Apply" propGigId={id} />
    </li>
  );
};

export default GigListingCard;
