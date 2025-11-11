import { Context } from "@/App";
import { useContext, useEffect, useState } from "react";
import GigListingCard from "./GigListingCard";
import GigFilter from "./GigFilter";
import SearchList from "@/components/search/SearchList";

//TODO:
// - Add a clear search button
// - Wrap the search logic in it's function for easier maintenance

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
      //define regular expression for comparisons
      const regex = new RegExp(searchKeyword.toLowerCase());
      const regexBudget = new RegExp("\\$?" + searchKeyword.replace(/^\$/, "")); //normalize string in case user add $ while looking for budget
      gigs.forEach((gig) => {
        //check keyword against all attributes
        //Any of (Business Title, Description, Budget) contains keyword
        //value the keyword (if it is a number, or 0 if its not) to show search results above a dollar value
        const keywordValue = isNaN(+searchKeyword.replace(/^\$/, ""))
          ? Number.MAX_SAFE_INTEGER
          : searchKeyword.replace(/^\$/, "");
        /* 
          SEARCH LOGIC BELOW - may be useful to wrap this behaviour in a different function

        */
        if (
          regex.test(gig.author.toLowerCase()) ||
          regex.test(gig.description.toLowerCase()) ||
          regexBudget.test(gig.budget) ||
          keywordValue < gig.budget
        ) {
          //add the gig to the new array if it matches the fitler
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
      key={gig.gigId}
      id={gig.gigId}
      imagePath={gig.image}
      businessTitle={gig.author}
      gigTitle={gig.title}
      description={gig.description}
      budget={gig.budget}
    />
  ));

  //filteredGigs length > 0 boolean - used to conditionall render a no gigs found element
  const gigsFound = listItems.length > 0;

  return (
    <div>
      {/* Filter Component */}
      <GigFilter setSearchKeyword={setSearchKeyword} />
      {/* List Component */}
      {gigsFound && <SearchList listItems={listItems} />}
      {!gigsFound && !(gigs.length == 0) && (
        <div>No gigs found. Try broadening your search.</div>
      )}
      {gigs.length == 0 && (
        <div>No gigs could be pulled from the database.</div>
      )}
    </div>
  );
};

export default GigSearch;
