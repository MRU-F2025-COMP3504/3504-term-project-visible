//This module contains all necessary functions for database interaction & data handling
// fetch functions query the api and set react's state objects with the received data
// Fetch functions expect a useState setter function to be passed

//Port definition used for api paths
const SERVERPORT = "https://localhost:8080/";

// All Gig Listings - Theoretically shouldn't be using this as there could be too many gig listings in the db to reasonably request
export async function fetchAllGigListings(setter: any) {
  const response = await fetch(`${SERVERPORT}api/giglistings`);
  const data = await response.json();
  setter(data);
}

// Sign in request handler - function expects an object with 'Username' and 'Password' fields
//encrypt / hashing of user data should be added
export async function submitSignIn(dataToSend) {
  console.log(`submitSignIn called with: ${JSON.stringify(dataToSend)}`);
  //Post request to server with given data
  fetch(`${SERVERPORT}api/authentication/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  }).then(() => {
    console.log(`fetch completed`);
  });
}

// Sign up request handler - functions expects an object with 'Username' and 'Password' fields
//encrypt / hashing of user data should be added
export async function submitSignUp(dataToSend) {
  //POST request to server with given data
  fetch(`${SERVERPORT}api/authentication/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
}
