import { Context } from "@/App";
import { useContext, useEffect, useState } from "react";
import InfluencerCard from "./InfluencerCard";
import InfluencerFilter from "./InfluencerFilter";
import SearchList from "@/components/search/SearchList";
import { fetchAllInfluencers } from "@/modules/data";

//TODO:
// - Add a clear search button
// - Wrap the search logic in it's function for easier maintenance

//This component implements the view for searching Influencers
//It manages the state of the array used to build a list of influencers, and produces that list
const InfluencerSearch = () => {
  //grab influencer context from broader app's context
  const [influencers, setInfluencers] = useContext(Context).influencers;
  //influencer list state for the filtered (& sorted, later) list
  const [filteredInfluencers, setFilteredInfluencers] = useState(influencers);
  //State to hold the search filter keyword - setter passed to filter component
  const [searchKeyword, setSearchKeyword] = useState("");

  //Function to implement behaviour for filtering & unfiltering the list
  const filterListFunction = () => {
    // If search keyword is empty, reset the list to full list
    if (searchKeyword == "") {
      setFilteredInfluencers(influencers);
    }
    // if search is not empty, filter the list -> checking every attribute for the keyword, item included in list if any attribute includes the keyword
    else {
      const newInfluencerList: any = [];
      //define regular expression for comparisons
      const regex = new RegExp(searchKeyword.toLowerCase());
      const regexBudget = new RegExp("\\$?" + searchKeyword.replace(/^\$/, "")); //normalize string in case user add $ while looking for budget
      influencers.forEach((influencer) => {
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
          regex.test(influencer.displayName.toLowerCase()) ||
          regex.test(influencer.bio.toLowerCase())
        ) {
          //add the influencer to the new array if it matches the fitler
          newInfluencerList.push(influencer);
        }
      });
      //update filteredInfluencers with new filtered list
      setFilteredInfluencers(newInfluencerList);
    }
  };

  //USE EFFECTS
  //fetch initial influencer list
  useEffect(() => {
    fetchAllInfluencers(setInfluencers);
  }, []);

  //populate default filteredInfluencers when influencers is received from context
  useEffect(() => {
    if (!(influencers.length === 0)) {
      setFilteredInfluencers(influencers);
    }
  }, [influencers]);

  //Updating the list of influencers whenever the search keyword is changed
  useEffect(() => {
    filterListFunction();
  }, [searchKeyword]);

  //build array of listing components
  const listItems = filteredInfluencers.map((influencer) => (
    <InfluencerCard
      key={influencer.influencerId}
      id={influencer.influencerId}
      avatar={influencer.avatar}
      displayName={influencer.displayName}
      bio={influencer.bio}
    />
  ));

  //filteredInfluencers length > 0 boolean - used to conditionally render a no influencers found element
  const influencersFound = listItems.length > 0;

  return (
    <div className="max-h-full flex flex-col">
      {/* Filter Component */}
      <InfluencerFilter setSearchKeyword={setSearchKeyword} />
      {/* List Component */}
      {influencersFound && <SearchList listItems={listItems} />}
      {!influencersFound && !(influencers.length == 0) && (
        <div>No influencers found. Try broadening your search.</div>
      )}
      {influencers.length == 0 && (
        <div>No influencers could be pulled from the database.</div>
      )}
    </div>
  );
};

export default InfluencerSearch;
