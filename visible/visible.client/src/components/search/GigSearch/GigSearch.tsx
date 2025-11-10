import { Context } from "@/App";
import { useContext, useEffect, useState } from "react";
import { BudgetRange } from "@/modules/interfaces";
import GigListingCard from "./GigListingCard";
import { Separator } from "@/components/ui/separator";
import GigFilter from "./GigFilter";
import { Button } from "@/components/ui/button";
import SearchList from "@/components/search/SearchList";

//This component implements the view for searching gig listings
//It manages the state of the array used to build a list of gigs, and produces that list
const GigSearch = () => {
  //grab gig context from broader app's context
  const [gigs, setGigs] = useContext(Context).gigs;
  //gig list state for the filtered (& sorted, later) list
  const [filteredGigs, setFilteredGigs] = useState(gigs);
  //State to hold the search filter keyword - setter passed to filter component
  const [searchKeyword, setSearchKeyword] = useState("");

  //Function to implement behaviour for filtering & unfiltering the list
  const filterListFunction = () => {
    // If search keyword is empty, reset the list to full list
    if (searchKeyword == "") {
      setFilteredGigs(gigs);
    }
    // if search is not empty, filter the list -> checking every attribute for the keyword, item included in list if any attribute includes the keyword
    else {
      const newGigsList: any = [];
      gigs.forEach((gig) => {
        //check keyword against all attributes
        //Any of (Business Title, Description, Budget) contains keyword
        const regex = new RegExp(searchKeyword.toLowerCase()); //define regular expression for comparisons
        if (
          regex.test(gig.author.toLowerCase()) ||
          regex.test(gig.description.toLowerCase()) ||
          regex.test(gig.budget)
        ) {
          //add the gig to the new array if it mathces the fitler
          newGigsList.push(gig);
        }
      });
      //update filteredGigs with new filtered list
      console.log(`Updating filtered array to ${JSON.stringify(newGigsList)}`);
      setFilteredGigs(newGigsList);
    }
  };

  //USE EFFECTS
  //populate default filteredGigs when gigs is received from context
  useEffect(() => {
    if (!(gigs.length === 0)) {
      setFilteredGigs(gigs);
    }
  }, [gigs]);

  //Updating the list of gigs whenever the search keyword is changed
  useEffect(() => {
    filterListFunction();
  }, [searchKeyword]);

  //build array of listing components
  const listItems = filteredGigs.map((gig) => (
    <GigListingCard
      key={gig.id}
      id={gig.id}
      imagePath={gig.image}
      businessTitle={gig.author}
      description={gig.description}
      budget={gig.budget}
    />
  ));

  return (
    <div>
      {/* Filter Component */}
      <GigFilter setSearchKeyword={setSearchKeyword} />
      {/* List Component */}
      <SearchList listItems={listItems} />
    </div>
  );
};

export default GigSearch;
