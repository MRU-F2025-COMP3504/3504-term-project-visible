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
    <li key={id} className="flex gap-4 items-center p-4 border rounded-xl">
      {/* Image - commented out until we add images to the database*/}
      {
        <img
          src="/giglisting.png"
          width={200}
          height={200}
          alt="business image"
          className="rounded-lg object-cover"
        />
      }
      <div className="flex flex-col">
        {/* Gig Title */}
        <h2 className="text-xl font-bold flex-wrap">{gigTitle}</h2>
        {/* Business Name */}
        <div>
          <h3 className="font-bold">Created By: </h3>{" "}
          <span>{businessName}</span>
        </div>
        {/* Gig Description */}
        <div>
          <h3 className="font-bold">Description: </h3>
          <span>{description}</span>
        </div>
        <div>
          {/* Budget */}
          <h3 className="font-bold">Budget: </h3>{" "}
          <span className="italic">${budget}</span>
        </div>
        <br />
        <CreateGigApplicationModal label="Apply" propGigId={id} />
      </div>
    </li>
  );
};

export default GigListingCard;
