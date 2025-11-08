import { GigProps } from "@/modules/interfaces";

const GigListingCard = (props: GigProps) => {
  return (
    <li>
      {/* Image */}
      <img src={props.imagePath} alt="business image" />
      {/* Business Name */}
      <h2>{props.businessTitle}</h2>
      {/* Gig Description */}
      <p>{props.description}</p>
      {/* Budget */}
      <h3>{props.budget}</h3>
    </li>
  );
};

export default GigListingCard;
