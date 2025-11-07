//This component is used for rapid development debugging & testing - it serves as a isolated environment to use for testing, that can be added or removed from the app's component tree as needed
import { useEffect, useContext } from "react";
import { Context } from "@/App";
import { Button } from "@/components/ui/button";
import { fetchAllGigListings } from "@/modules/data";
import { MouseEvent } from "react";

const DevComponent = () => {
  return <div></div>;
};

export default DevComponent;
