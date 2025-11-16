**_Welcome to Visible!_**

Visible is a two-way marketplace that connects local businesses with local influencers.
The platform lets businesses create gigs and promote their products/services, while influencers can browse these gigs, apply to them, and build real collaborations that help them grow.

A user would want to use Visible because it simplifies the whole collaboration process. Instead of cold messaging, guessing, or dealing with unorganized communication, Visible brings everything into one place! gigs, profiles, applications, and the full workflow between businesses and influencers. For influencers, it means opportunities that match their niche. For businesses, it means reaching the right audience faster with creators who actually fit their brand.

---

**_How to Install Visible_**

Currently visible can be run locally using Docker. These steps are for someone who wants to host their own instance of the visible app. In the future it will beh osted locally at visibleapp.ca.
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

## BOO YEAH! You’re now running your own local instance of Visible.

**_How to use the software_**

Visible is designed to be simple and intuitive to use. The platform supports two primary user types (1) Influencers and (2 )Businesses. Below is a breakdown of how users interact with the core features of the system. FYI features still in development are marked as (WIP).

1. Browsing Gig Listings (Influencer)

Influencers can explore postings by local businesses

How to use it:

Open the Visible web application in your browser.
On the home page, scroll through the list of available gigs.

Each gig "card" shows:

Business name

Description

Budget

Minimum follower requirement

Click a gig to view more details (WIP).

Influencers can apply to a gig (WIP).

2. Business Gig Posting (Business Users)

Businesses can create promotional opportunities for influencers.

How to use it:

Log in as a business user (WIP).

Navigate to “Create a Gig” (WIP).

Enter details the form such as:

Title

Description

Budget

Required niche or follower count

Submit the form to publish the gig (WIP).

3. Viewing Applications (Business) — (WIP)

Businesses will be able to see who has applied to their gigs.

Expected functionality:

View all incoming influencer applications

Filter applications by some metric

Approve or decline applicants

This feature is still being implemented.

4. Secure Login & Authorization — (WIP)

The platform uses JWT-based authentication to keep user sessions secure.

Expected functionality:

Users log in with an email and password

JWT token verifies their identity

5. Responsive User Interface

Visible is built using React + Vite, so the interface is built to be fast, smooth, and workable on almsot any browser.

Browser requirements: Chrome, Edge, Firefox, or Safari

6. Searching & Filtering Gigs — (WIP)

A search feature will allow influencers to find gigs by:

Category

Budget

Keywords

## Follower requirements

**_How to Report a Bug_**

If you encounter an issue while using Visible, we as a team want to resolve that as quickly and effectively as possible. To help us do that, please follow the steps below when submitting a bug report.

Where to Report Bugs

Please report all bugs to our GitHub repository’s Issues page:

👉 GitHub Issues:
https://github.com/MRU-F2025-COMP3504/3504-term-project-visible/issues

What to Include in a Bug Report

1. Short summary of the issue

Example:
"Unable to submit influencer application when all the required fields are filled."

2. How can we reproduce the error

Example:

Log in as an influencer.

Navigate to "Apply for Gig".

Fill out all fields.

Click Submit.

3. Expected Result

Example:
"The application should submit successfully."

4. Actual Result

Example:
"The page reloads with no confirmation."

5. Additional Information is also appreciated such as screenshots or error messages

---
