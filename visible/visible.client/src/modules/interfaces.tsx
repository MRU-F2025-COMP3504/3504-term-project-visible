//This module contains interfaces (object blueprints) used in data handling

//TODO: I made 2 gig listing interfaces for some reason, the first is defining the exact structure received from the db,
// the 2nd is defining the structure used while passing gig listings as props to components.
// Condense these into 1 and update refences (whenever the gig structure is changed in the db).

//GigListing Object - defines the data attatched to a unqiue gig listing
export interface GigListings {
  id: number;
  author: string;
  description: string;
  budget: string;
}

//Budget range object - used while filtering gig listings
export interface BudgetRange {
  low: number;
  high: number;
}

//Object containing the props to describe a specific gig
export interface GigProps {
  id: number;
  imagePath: string;
  businessTitle: string;
  description: string;
  budget: number;
}
