import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

//This component implements the structure for lists used by the search views of the project.
//It expects to receive a list of JSX elements - each element should have a unique 'key' identifier (likely the database ID associate with the information)
//<div key="123"/> or <COMPONENT key={"123"}/>
const SearchList = ({ listItems }) => {
  //build the list elements
  const listElements = listItems.map((item, index) => (
    //Fragment wrapper so as to not add a redundant div
    <Fragment key={item.key}>
      {/* adds a seperator for every gig after the first */}
      {index > 0 && <Separator className="my-4 bg-white!" />}
      {item}
    </Fragment>
  ));
  return (
    // Scroll area in case the list is too long
    <ScrollArea>
      <ul>{listElements}</ul>
    </ScrollArea>
  );
};

export default SearchList;
