import { useEffect, useState, createContext } from "react";
import "./App.css";
import { GigListings } from "./modules/interfaces";
import DevComponent from "./components/DevComponent";
import LandingPage from "./components/LandingPage";

//define structure of context provider
export const Context = createContext<any>({
  gigs: [[], () => {}],
});

function App() {
  //data state declarations
  const [gigs, setGigs] = useState<GigListings[]>([]);

  //context object to pass
  const contextObj = {
    gigs: [gigs, setGigs],
  };

  return (
    <main className="bg-black border-8 border-indigo-500 h-dvh p-[2em] aspect-9/16 mx-auto flex">
      <Context.Provider value={contextObj}>
        {/* <LandingPage /> */}
        <DevComponent />
      </Context.Provider>
    </main>
  );
}

export default App;
