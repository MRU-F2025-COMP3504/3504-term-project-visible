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
        <div className="w-1/2">
          <img
            src="/giglisting.png"
            width={200}
            height={200}
            alt="business image"
            className="rounded-lg object-cover"
          />
        </div>
      }
      <div className="flex flex-col w-1/2 wrap-normal">
        <div className="flex flex-col py-1">
          {/* Gig Title */}
          <h2 className="text-xl font-bold">{gigTitle}</h2>
          {/* Business Name */}
        </div>
        <div className="flex-col wrap-normal py-2">
          <h3 className="font-bold">Created By: </h3>{" "}
          <span>{businessName}</span>
        </div>
        {/* Gig Description */}
        <div className="flex-col wrap-normal py-2">
          <h3 className="font-bold">Description: </h3>
          <span>{description}</span>
        </div>
        <div className="flex-col wrap-normal pb-2">
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
