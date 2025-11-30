import { BusinessProps } from "@/modules/interfaces";
import ContactFormModal from "@/components/ContactFormModal";

const BusinessCard = ({
  //Defining requested parameters, and their default values
  id,
  businessName,
  location,
  industry,
  displayImage,
}: BusinessProps) => {
  return (
    <li key={id} className="flex gap-4 items-center p-4 border rounded-xl">
      {/* Image - commented out until we add images to the database*/}
      {
        <img
          src="/business.png"
          width={200}
          height={200}
          alt="business image"
          className="rounded-lg object-cover"
        />
      }
      <div className="flex flex-col">
        {/* Business Name */}
        <h2 className="text-xl font-bold">{businessName}</h2>
        {/* Industry */}
        <div>
          <h3 className="font-bold">Industry: </h3> <span>{industry}</span>
        </div>
        {/* Business Location */}
        <div>
          <h3 className="font-bold">Location: </h3> <span>{location}</span>
        </div>
        <ContactFormModal
          label={`Contact ${businessName}`}
          recipient={businessName}
        />
      </div>
    </li>
  );
};

export default BusinessCard;
