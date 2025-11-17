# User Guide

## Welcome to Visible!

Visible is a two-way marketplace that connects local businesses with local influencers.
The platform lets businesses create gigs and promote their products/services, while influencers can browse these gigs, apply to them, and build real collaborations that help them grow.

A user would want to use Visible because it simplifies the whole collaboration process. Instead of cold messaging, guessing, or dealing with unorganized communication, Visible brings everything into one place! gigs, profiles, applications, and the full workflow between businesses and influencers. For influencers, it means opportunities that match their niche. For businesses, it means reaching the right audience faster with creators who actually fit their brand.

---

## How to Install Visible

Right now, users can access our public beta by going to https://visibleapp.ca. However, if a user wishes to run a local instance of Visible, they can do so by follow the instructions within [the Developer Guide](../README.md#developer-guide). To run a local instance, you will need to complete the steps outlined in the following sections in their entirety:

- [Obtaining Source Code](../README.md#obtaining-source-code)
- [How to Build Visible](../README.md#how-to-build-visible) - this section ends after **Populating the Database with Test Data**

<!-- Currently visible can be run locally using Docker. These steps are for someone who wants to host their own instance of the visible app. In the future it will beh osted locally at visibleapp.ca.
Before you start, make sure you have:

1. Prequsite

Git – to clone the repository
Docker Desktop (latest version)
Windows 10/11, macOS, or Linux
.NET SDK 9.0 – used to generate local HTTPS

You can download:

Docker Desktop: https://www.docker.com/get-started

.NET 9.0 SDK: https://dotnet.microsoft.com/en-us/download

**_IMPORTANT: Make sure Docker Desktop is running and you’re signed in before you continue_**

2. Get the Source Code from our Github

Clone the repository:
git clone https://github.com/MRU-F2025-COMP3504/3504-term-project-visible.git
Once closed move into the project folder:
TERMINAL -> cd 3504-term-project-visible/visible

3. Configure Local Secrets folder (in the visible directory)

Visible needs a few local “secret” files to connect to the database and handle authentication. These stay on your machine only and are not committed to Git for obvious security purposes.

Create a secrets folder in the visible directory:

mkdir secrets

First step we will create a database password file in the secrets directory:

echo your_db_password_here > secrets/postgres_user_password

**_IMPORTANT: You can choose any password; it just needs to match what Docker uses for the local Postgres instance._**

Second step generate a local HTTPS certificate for the front end:

dotnet dev-certs https --export-path secrets/visible.client.pem --format Pem --no-password

Almost there, step three create two more files in secrets:

JwtIssuer – for local development you can set this to:
http://localhost

JwtKey – This provides you a long random secret string (at least 256 bits).
You can generate one using a site like https://jwt.io/ or any secure random generator.

4. Start the Application
   From the visible directory, run: docker compose up --build --watch
   Once everything is running, you should see the containers start without errors.

5) Access the Application
   When Docker is up:
   Open your browser and go to: http://localhost:5173

## BOO YEAH! You’re now running your own local instance of Visible. -->

## How to Run Visible

- If you are using the public version of Visible, you can simply navigate to https://visibleapp.ca in the browser of your choice. We currently support both mobile and desktop access, and are not aware of any modern browser compatibility issues.
- If you are using a local version of Visible, you will need to build the Docker images as outlined in the Developer Guide, and can access the site by going to https://localhost:5173.

## How to Use Visible

Visible is designed to be simple and intuitive to use. The platform supports two primary user types: Influencers and Businesses. Below is a breakdown of how users interact with the core features of the system. FYI features still in development are marked as (WIP).

1. Browsing Gig Listings (Influencer)

- Influencers can explore postings by local businesses
- How to use it:
  - Open the Visible web application in your browser.
  - On the home page, scroll through the list of available gigs. Each gig "card" shows:
    - Business name
    - Description
    - Budget
    - Minimum follower requirement

- Click a gig to view more details (WIP).
- Influencers can apply to a gig (WIP).

2. Business Gig Posting (Business Users)

- Businesses can create promotional opportunities for influencers.
- How to use it:
  - Log in as a business user (WIP).
  - Navigate to “Create a Gig” (WIP).
  - Enter details the form such as:
    - Title
    - Description
    - Budget
    - Required niche or follower count
  - Submit the form to publish the gig (WIP).

3. Viewing Applications (Business) — (WIP)

- Businesses will be able to see who has applied to their gigs.
- Expected functionality:
  - View all incoming influencer applications
  - Filter applications by some metric
  - Approve or decline applicants

- \*\*This feature is still being implemented.

4. Secure Login & Authorization — (WIP)

- The platform uses JWT-based authentication to keep user sessions secure.
- Expected functionality:
  - Users log in with an email and password
  - JWT token verifies their identity

5. Responsive User Interface

- Visible is built using React + Vite, so the interface is built to be fast, smooth, and workable on almost any browser.
- Browser requirements: Chrome, Edge, Firefox, or Safari

6. Searching & Filtering Gigs — (WIP)

- A search feature will allow influencers to find gigs by:
  - Category
  - Budget
  - Keywords

### Currently Implemented Features

- [x] User sign-up
- [x] Sign-in with username and password
- [x] Create a Business profile
- [x] Create an Influencer profile
- [x] Create a Gig Listnig (Business Owner)
- [x] Apply to a Gig Listing (Influencer)
- [x] Search for a Gig by keywords, budget, etc.

### Work-in-Progress (WIP) Features

- [ ]
- [ ]

## How to Report a Bug

If you encounter an issue while using Visible, we as a team want to resolve that as quickly and effectively as possible. To help us do that, please create a **Bug Report** using the issue template available in our [GitHub Issues](https://github.com/MRU-F2025-COMP3504/3504-term-project-visible/issues).

The template provided should prompt you for the relevant information we as a team need in order to effectively understand and address the issues you are encountering.

### Example Bug Report:

1. Short summary of the issue

- Example: "Unable to submit influencer application when all the required fields are filled."

2. How can we reproduce the error

- Example:
  1.  Log in as an influencer.
  2.  Navigate to "Apply for Gig".
  3.  Fill out all fields.
  4.  Click Apply.

3. Expected Result

- Example: "The application should submit successfully."

4. Actual Result

- Example: "The page reloads with no confirmation."

5. Additional Information is also appreciated such as screenshots or error messages

## Known Bugs

- [BUG: User can create multiple influencer profiles with the same information #170](https://github.com/MRU-F2025-COMP3504/3504-term-project-visible/issues/170)
- [BUG: User can create multiple business profiles with the exact same information #171](https://github.com/MRU-F2025-COMP3504/3504-term-project-visible/issues/171)
