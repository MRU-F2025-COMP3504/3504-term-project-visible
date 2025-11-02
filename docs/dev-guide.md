## About

This project utilizes **Docker** to containerize the application and database.

## Getting Started

- Follow this link to install [Docker Desktop](https://www.docker.com/get-started/). You will need to create an account, which can be done by linking your Google or GitHub profile.

- Follow this link to install [.NET](https://dotnet.microsoft.com/en-us/download). You will need to install .NET 9.0 to ensure compatibility with the project.

- Open **Docker Desktop**, and ensure that you are signed in to your Docker account.

- In a terminal, navigate to the repository's `visible` directory.

### Configuring Local Secrets

- In order to authenticate the database instance, you will need to create a `postgres_user_password` file. Use the following two commands:

        mkdir secrets
        echo [your-password] > secrets/postgres_user_password

  This file is only for your machine, and should not be added to the repository. The password can be anything you want.

- The front-end application utilizes https, so you will need to create local dev certificates. From the `visible` directory, run the following command:

        dotnet dev-certs https --export-path secrets/visible.client.pem --format Pem --no-password

- Once you have created the file, start the Docker containers by running the following command:

        docker compose up --build --watch

- **Note:** If you've previously built the project and have made changes, run the following commands:

        docker compose down
        docker compose up --build --watch

- You should now be able to view the local instance of the project.
  Visit http://localhost:5173 in your browser to see the result.

### Set Up Pre-Commit

- This project is using `pre-commit` to enforce C# code styling prescriptively set via `CSharpier`. From the repository's root (`3504-term-project-visible`), install `pre-commit` using the following commands:

        pip3 install pre-commit
        pre-commit install

### Using Pre-Commit

- When you attempt to create a commit (`git commit -m "..."`), pre-commit will validate that any changed C# files are conforming to the code styles outlined. If it detects failures, it will modify the files appropriately, and abort the commit. You must then accept the changes by adding the modified files using `git add`, and re-attempt the commit.

- `pre-commit` can be run at any time using the following command:
  pre-commit run
  - **Note:** pre-commit will only validate files that are currently staged.

## Front End Developement

This project uses **npm** (node package manager) to manage dependencies required by front-end components.

These dependecies are intentionally **excluded** from the repository, via the .gitignore file. **They should not be added to the repository.**

- They are installed by docker when hosting the project.

The package.json file lists these dependencies, and _is_ included in the repository. It allows all dependencies to be easily installed to a local environment.

- Node and npm can be installed via the [NodeJS](https://nodejs.org/en/download) website.

- Once Node/npm are installed, before performing front-end development, navigate to the visible/visible.client directory and execute the following command:

        npm i

This should install all depencies listed in package.json to the local environment, allowing your IDE to index the libraries used in the project.

They consist of a directory 'node_modules/' and a file 'package-lock.json'.

- **Note:** Missing these files will cause your IDE to flag the use of the npm libraries as an error. If these files are ever missing from your local repository, they can be reinstalled via the above command.

## Populating the Database with Test Data

### Creating Users

Because the user table will contain emails and passwords, I have not committed this file to the repository at this point. The format required to create test users is as seen in the following code snippet.

```SQL
INSERT INTO users (email, password, first_name, last_name)
VALUES ('email', 'password', 'First Name', 'Last Name');
```

### Creating Gig Listings

The `visible/visible.Server/Data` directory contains a file called `gigs.sql` which can be used to populate the Gigs table if you are currently not seeing gig listings on the home page.

To create additional gig listings, use the following format:

```SQL
INSERT INTO gigs (author, description, budget)
VALUES ('Author Name', 'Gig Description', Amount);
```
