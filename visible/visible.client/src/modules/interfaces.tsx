//This module contains interfaces (object blueprints) used in data handling

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
  imagePath: string;
  businessTitle: string;
  description: string;
  budget: number;
}
