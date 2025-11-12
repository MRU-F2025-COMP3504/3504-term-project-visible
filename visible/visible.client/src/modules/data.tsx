//This module contains all necessary functions for database interaction & data handling
// fetch functions query the api and set react's state objects with the received data
// Fetch functions expect a useState setter function to be passed

// All Gig Listings - Theoretically shouldn't be using this as there could be too many gig listings in the db to reasonably request
export async function fetchAllGigListings(setter: any) {
  const response = await fetch(`api/giglistings`);
  const data = await response.json();
  setter(data);
}

// Sign in request handler - function expects an object with 'Username' and 'Password' fields
//encrypt / hashing of user data should be added
export async function submitSignIn(dataToSend) {
  //Post request to server with given data
  fetch(`api/authentication/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
}

// Sign up request handler - functions expects an object with 'Username' and 'Password' fields
//encrypt / hashing of user data should be added
export async function submitSignUp(dataToSend) {
  //POST request to server with given data
  fetch(`api/authentication/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
}

// Handler to create an influencer profile
export async function createInfluencerProfile(influencerProfileData) {
  //POST request to server with given data
  fetch(`api/influencer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(influencerProfileData),
  });
}

// Handler to create a business profile
export async function createBusinessProfile(businessProfileData) {
  //POST request to server with given data
  fetch(`api/business`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(businessProfileData),
  });
}

// Handler to create a gig listing
export async function createGigListing(gigListingData) {
  //POST request to server with given data
  fetch(`api/giglistings/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gigListingData),
  });
}

// Handler to submit a gig application
export async function submitGigApplication(gigApplicationData) {
  //POST request to server with given data
  fetch(`api/application/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gigApplicationData),
  });
}

export async function signOut() {
  fetch(`api/authentication/sign-out`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
