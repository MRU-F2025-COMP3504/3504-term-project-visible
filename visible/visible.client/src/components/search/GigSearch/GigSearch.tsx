import { Context } from "@/App";
import { useContext, useState } from "react";
import { BudgetRange } from "@/modules/interfaces";

//This component implements the view for searching gig listings
//It manages the state of the array used to build a list of gigs, then utilizes another component to produce that list
const GigSearch = () => {
  //grab gig context from broader app's context
  const [gigs, setGigs] = useContext(Context).gigs;

  //Search parameters
  const [searchByName, setSearchByName] = useState("");
  const [searchByDescription, setSearchByDescription] = useState("");
  const [searchByBudget, setSearchByBudget] = useState<BudgetRange>({
    low: 0,
    high: Number.MAX_SAFE_INTEGER,
  });

  //build array of listing components

  return (
    <div>
      {/* Filter Component */}
      {/* List Component */}
    </div>
  );
};

export default GigSearch;
