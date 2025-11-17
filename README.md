# Visible

## Communication channel

- Discord (https://discord.gg/pRyF8kXgvA)

## Shared Google folder

- https://drive.google.com/drive/u/4/folders/0AOaIp1x9vWR4Uk9PVA

### Contributors:

- Amy Caufield
- Alexander Hilliard
- Roman Little
- Matthew McCusker

---

# Developer Guide

## Obtaining Source Code

- Option 1: Clone the repository:

        git clone https://github.com/MRU-F2025-COMP3504/3504-term-project-visible.git

- Option 2: Fork the repository (on GitHub), and then clone your fork of the project:

        git clone https://github.com/YOUR_USERNAME/FORKED_REPOSITORY_NAME.git

## Directory Structure Overview

### visible

The visible directory is the root of our application's source code. It holds the React front-end project, as well as the .NET server-side and unit testing projects.

#### _visible.Server_

- This is our server-side project for the back-end API endpoints.
- Notable Folders:
  - _Configurations:_ Provides infrastructure to include Docker secrets as part of the application's configuration properties.
  - _Controllers:_ Contains the controller classes that define our API endpoints.
  - _Data:_ Contains SQL files used for database initialization and test-data population.

#### _visible.Services_

- This server-side project contains utilities not directly related to servicing web requests.
- Notable Folders:
  - _Data:_ Contains custom classes meant to serve as wrappers for the `NpgsqlConnection` and `NpgsqlCommand` utilities, in order to facilitate unit testing of database functionality.
  - _Interfaces:_ Defines contracts for the various data accessor types, categorized by feature type (e.g., Authentication, Businesses, Influencer).
  - _Models:_ Contains classes defining the types of objects that are expected to be sent to/received from the database.
  - _Repositories:_ Contains the concrete implementations of our various data accessors types.

#### _visible.Tests_

- `visible.Tests` is the unit testing project for the **visible.Server** and **visible.Services** projects.
- Noteable Folders:
  - _ControllerTests:_ Contains test for for API endpoint functionality.
  - _Models:_ Contains utilities required for unit testing, but not production.
  - _Services:_ Contains test files for data accessor functionality.

#### _visible.client_

- Contains source files and assets for the web application project.
- Noteable Folders:
  - _src:_
    - _components:_
    - _hooks:_
    - _lib:_
    - _modules:_

## How to Build Visible

This project utilizes **Docker** to containerize the application and database.

**Note:** This project has been designed so that it should be able to build and run on Windows, Mac, and Linux systems. Please ensure that you have the dependencies installed on your system as outlined below.

### System Requirements

<!-- prettier-ignore -->
| Dependency | Minimum Version (if known) | Source | Notes |
|:----------:|:---------------:|:------:| :----|
| Docker Desktop |  | [Docker.com](https://www.docker.com/get-started/) | After installation, you will need to sign in to your Docker account. If you need to create one, you can do so using your Google or GitHub credentials. |
| .NET | 9.0 | [Download .NET 9.0](https://dotnet.microsoft.com/en-us/download/dotnet/9.0) | Select the appropriate installer for your system's architecture: ![](images/dotnet.png) |
| Node.js & npm | Node: 22, npm: 11 | [NodeJS](https://nodejs.org/en/download) |
| Python (pip) | python3 |  | pip is required to install `pre-commit` |

### Configuring Local Secrets

- In a terminal, navigate to the repository's `visible` directory, and make a directory called `secrets`:

        mkdir secrets

- Create the following secret files:

<!-- prettier-ignore -->
| Secret | Command to Create | Notes |
| :-------:| --------------- | :---- |
| **postgres_user_password** | `echo [your-password] > secrets/postgres_user_password` | This file is only for your machine, and should not be added to the repository. The password can be anything you want. |
| **HTTPS Certificate & Key** | `dotnet dev-certs https --export-path secrets/visible.client.pem --format Pem --no-password` | The front-end application utilizes HTTPS, so this command will generate development certificates. |
| **JwtIssuer** | `echo "localhost" > secrets/JwtIssuer` |
| **JwtKey** | `echo "a-string-secret-at-least-256-bits-long" > secrets/JwtKey` | |

- **Note:** If you have run any of the above commands in Powershell, you may need to swap the file encoding from `UTF-16LE` to `UTF-8` to ensure compatability.

### Build the Docker Containers

- Open **Docker Desktop**, and ensure that you are signed in to your Docker account.
- In a terminal, navigate to the `visible` directory (`path-to-local/3504-term-project-visible/visible`).
- Start the Docker containers by running the following command:

        docker compose up --build --watch

- **Note:** If you've previously built the project and have made changes, run the following commands:

        docker compose down
        docker compose up --build --watch

- You should now be able to view the project. Visit https://localhost:5173 in your browser to see the result.

## Populating the Database with Test Data

<!-- TODO: Update to include tables not previously documented -->

- In order to add data to your instance of the database, please configure a new Postgres connection as shown in the following image.

![](images/database-config.png)

- **Note:** You will need to authenticate using the `postgres_user_password` from your local secrets.

### Creating Users

Because the user table will contain emails and passwords, I have not committed this file to the repository at this point. The format required to create test users is as seen in the following code snippet.

```SQL
INSERT INTO users (email, password, first_name, last_name)
VALUES ('email', 'password', 'First Name', 'Last Name');
```

### Creating Gig Listings

The `visible/visible.Server/Data` directory contains a file called `gigs.sql` which can be used to populate the Gigs table if you are currently not seeing gig listings on the home page.

To create additional gig listings, use the following format:

<!-- TODO: Update example to use new table schema.-->

```SQL
INSERT INTO gigs (author, description, budget)
VALUES ('Author Name', 'Gig Description', Amount);
```

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

## How to Test Visible

### Running Back-End Tests (xUnit)

- In a terminal, navigate to the `visible` directory.
- Run the following command:

        dotnet test

### Front End Testing

- This project is using vitest to deploy tests for the front end components.

- Several testing libraries have been added in the project for vitest to utilize:
  - React Testing Library
    - user-event
    - jest-dom
  - jsdom

- To test a front end component, a test file for that component should be created in the same directory with the following name scheme:

        {component_to_test}.tsx

        {component_to_test}.test.tsx

- To run created tests, navigate to the visible.client directory in a terminal, then run the following command:

        npm run test

- Specific instructions to create a test will depend on the component and purpose of the specific test.
  - [Vitest documentation can be found here](https://vitest.dev/guide/)
  - [React Testing Library Documentation can be found here](https://testing-library.com/docs/react-testing-library/intro/)
  - [A video tutorial including simple example component tests can be found here](https://www.youtube.com/watch?v=CxSL0knFxAs)

### Back End Unit Testing

- This project utilizes the `xUnit` framework for unit testing the C#/.NET backend.

#### Adding an xUnit Test

- Go to `visible.Tests`. The tests are organized into files based on the unit being tested. For example, `Controllers/GigListingsControllerTests.cs` contains the current tests for the `visible.Server/Controllers/GigListingController.cs` file.

- The project tests should be set up to follow the **Arrange, Act, Assert** pattern, as shown below:

```cs
[Fact]
public async Task Test_CanGetGigListings()
{
    // Arrange
    var mockRepository = new Mock<IGigListingRepository>();
    var gigListings = new List<GigListing>
    {
        new GigListing(1,"Canela","New Product Launch", 300),
        new GigListing(2,"Breakaway","Instagram Follower Drive", 1000),
    };
    mockRepository.Setup(r => r.GetRecentGigListings()).ReturnsAsync(gigListings);

    // Act
    var controller = new GigListingsController(mockRepository.Object);
    var result = await controller.Get();

    // Assert
    Assert.IsType<OkObjectResult>(result);
    var okResult = result as OkObjectResult;
    Assert.NotNull(okResult);
}
```

- Ensure that you mock any dependencies as part of the **Arrange** step.

## Building a Release of Visible

- To generate a new release of _Visible_, the steps required are the same as building for development.

1.  Update your local repository by running `git fetch` and `git pull` as required.
2.  In a terminal, navigate to the root of the repository (`path-to-local/3504-term-project-visible`), and then run the following command:

        docker compose --file visible/compose.yaml up --build --watch

3.  In a browser, navigate to https://localhost:5173. You should now see the most recent changes.
