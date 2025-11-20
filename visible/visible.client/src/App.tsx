import { useEffect, useState, createContext } from "react";
import "./App.css";
import { GigListings, InfluencerProfile } from "./modules/interfaces";
import DevComponent from "./components/DevComponent";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
//import GigSearch from "./components/search/GigSearch/GigSearch";
//import InfluencerSearch from "./components/search/InfluencerSearch/InfluencerSearch";
import BusinessSearch from "./components/search/BusinessSearch/BusinessSearch";

//define structure of context provider
export const Context = createContext<any>(undefined);

function App() {
  //data state declarations
  const [loggedIn, setLoggedIn] = useState(false);
  //const [pageView, setPageView] = useState("GigSearch");
  //const [pageView, setPageView] = useState("InfluencerSearch");
  //const [influencers, setInfluencers] = useState<InfluencerProfile[]>([]);
  const [businesses, setBusinesses] = useState<BusinessProfile[]>([]);
  const [pageView, setPageView] = useState("BusinessSearch");
  //const [gigs, setGigs] = useState<GigListings[]>([]);

  //context object to pass
  const contextObj = {
    loggedIn: [loggedIn, setLoggedIn],
    pageView: [pageView, setPageView],
    //gigs: [gigs, setGigs],
    //influencers: [influencers, setInfluencers],
    businesses: [businesses, setBusinesses],
  };

  return (
    <main className="bg-black border h-dvh aspect-9/16 mx-auto flex flex-col justify-between">
      <Context.Provider value={contextObj}>
        {/* If not logged in - display landing page */}
        {!loggedIn && <LandingPage />}
        {/* If logged in - display content */}
        {loggedIn && (
          <>
            {/* Content Container - holds everything but navbar */}
            <div className="grow flex flex-col max-h-full overflow-hidden pr-[2em] pl-[2em]">
              {pageView === "BusinessSearch" && <BusinessSearch />}
            </div>
            {/* NavBar - always visible */}
            <NavBar />
          </>
        )}
      </Context.Provider>
    </main>
  );
}

export default App;
