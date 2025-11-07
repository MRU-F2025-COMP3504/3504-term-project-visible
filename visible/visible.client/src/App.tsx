import { useEffect, useState, createContext } from "react";
import "./App.css";
import { GigListings } from "./modules/interfaces";
import DevComponent from "./components/DevComponent";

export const Context = createContext<any>({
  gigs: [undefined, () => {}],
});

function App() {
  //data state declarations
  const [gigs, setGigs] = useState<GigListings[]>();

  //context object
  const contextObj = {
    gigs: [gigs, setGigs],
  };

  return (
    <main className="border-8 border-indigo-500 h-dvh p-[2em] aspect-9/16">
      <Context.Provider value={contextObj}>
        <DevComponent />
      </Context.Provider>
    </main>
  );
}

export default App;
