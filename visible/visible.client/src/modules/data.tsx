//This module contains all necessary functions for database interaction & data handling
// fetch functions query the api and set react's state objects with the received data
// Fetch functions expect a useState setter function to be passed

/* All Gig Listings - Theoretically shouldn't be using this as there could be too many gig listings in the db to reasonably request*/
export async function fetchAllGigListings(setter: any) {
  const response = await fetch("api/giglistings");
  const data = await response.json();
  setter(data);
}
