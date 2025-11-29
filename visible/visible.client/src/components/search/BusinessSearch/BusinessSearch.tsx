import { Context } from "@/App";
import { useContext, useEffect, useState } from "react";
import BusinessCard from "./BusinessCard";
import BusinessFilter from "./BusinessFilter";
import SearchList from "@/components/search/SearchList";
import { fetchAllBusinesses } from "@/modules/data";

//TODO:
// - Add a clear search button
// - Wrap the search logic in it's function for easier maintenance

//This component implements the view for searching business listings
//It manages the state of the array used to build a list of businesses, and produces that list
const BusinessSearch = () => {
  //grab business context from broader app's context
  const [businesses, setBusinesses] = useContext(Context).businesses;
  //business list state for the filtered (& sorted, later) list
  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);
  //State to hold the search filter keyword - setter passed to filter component
  const [searchKeyword, setSearchKeyword] = useState("");

  //Function to implement behaviour for filtering & unfiltering the list
  const filterListFunction = () => {
    // If search keyword is empty, reset the list to full list
    if (searchKeyword == "") {
      setFilteredBusinesses(businesses);
    }
    // if search is not empty, filter the list -> checking every attribute for the keyword, item included in list if any attribute includes the keyword
    else {
      const newBusinessesList: any = [];
      //define regular expression for comparisons
      const regex = new RegExp(searchKeyword.toLowerCase());
      const regexBudget = new RegExp("\\$?" + searchKeyword.replace(/^\$/, "")); //normalize string in case user add $ while looking for budget
      businesses.forEach((business) => {
        //check keyword against all attributes
        const keywordValue = isNaN(+searchKeyword.replace(/^\$/, ""))
          ? Number.MAX_SAFE_INTEGER
          : searchKeyword.replace(/^\$/, "");
        /* 
          SEARCH LOGIC BELOW - may be useful to wrap this behaviour in a different function

        */
        if (
          regex.test(business.businessName.toLowerCase()) ||
          regex.test(business.location.toLowerCase()) ||
          regex.test(business.industry.toLowerCase())
        ) {
          //add the business to the new array if it matches the fitler
          newBusinessesList.push(business);
        }
      });
      //update filteredBusinesses with new filtered list
      setFilteredBusinesses(newBusinessesList);
    }
  };

  //USE EFFECTS
  //fetch initial business list
  useEffect(() => {
    fetchAllBusinesses(setBusinesses);
  }, []);

  //populate default filteredBusinesses when businesses is received from context
  useEffect(() => {
    if (!(businesses.length === 0)) {
      setFilteredBusinesses(businesses);
    }
  }, [businesses]);

  //Updating the list of businesses whenever the search keyword is changed
  useEffect(() => {
    filterListFunction();
  }, [searchKeyword]);

  //build array of listing components
  const listItems = filteredBusinesses.map((business) => (
    <BusinessCard
      key={business.businessId}
      id={business.businessId}
      businessName={business.businessName}
      location={business.location}
      industry={business.industry}
      displayImage={business.displayImage}
    />
  ));

  //filteredBusinesses length > 0 boolean - used to conditionall render a no businesses found element
  const businessesFound = listItems.length > 0;

  return (
    <div className="max-h-full flex flex-col">
      {/* Filter Component */}
      <BusinessFilter setSearchKeyword={setSearchKeyword} />
      {/* List Component */}
      {businessesFound && <SearchList listItems={listItems} />}
      {!businessesFound && !(businesses.length == 0) && (
        <div>No businesses found. Try broadening your search.</div>
      )}
      {businesses.length == 0 && (
        <div>No businesses could be pulled from the database.</div>
      )}
    </div>
  );
};

export default BusinessSearch;
