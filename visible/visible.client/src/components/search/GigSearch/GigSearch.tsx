import { Context } from "@/App";
import { useContext, useState } from "react";
import { BudgetRange } from "@/modules/interfaces";
import GigListingCard from "./GigListingCard";
import { Separator } from "@/components/ui/separator";
import GigFilter from "./GigFilter";
import { Button } from "@/components/ui/button";

//This component implements the view for searching gig listings
//It manages the state of the array used to build a list of gigs, and produces that list
const GigSearch = () => {
  //grab gig context from broader app's context
  const [gigs, setGigs] = useContext(Context).gigs;

  //Search parameters -> Default states
  const [searchByName, setSearchByName] = useState("");
  const [searchByDescription, setSearchByDescription] = useState("");
  const [searchByBudget, setSearchByBudget] = useState<BudgetRange>({
    low: 0,
    high: Number.MAX_SAFE_INTEGER,
  });

  //build array of listing components
  const listItems = gigs.map((gig) => (
    <div>
      {/* adds a seperator for every gig after the first */}
      {!(gigs[0] === gig) && <Separator className="my-4" />}
      <GigListingCard
        imagePath={gig.image}
        businessTitle={gig.author}
        description={gig.description}
        budget={gig.budget}
      />
    </div>
  ));

  //build strucure of list items
  const listView = () => {
    let isFirst = true;
    listItems.forEach;
  };

  return (
    <div className="border-2 border-amber-400">
      {/* Filter Component */}
      <GigFilter />
      {/* List Component */}
      <ul>{listItems}</ul>
    </div>
  );
};

export default GigSearch;
