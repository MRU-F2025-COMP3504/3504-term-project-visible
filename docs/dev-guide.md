## About
This project utilizes **Docker** to containerize the application and database. 

## Getting Started
- Follow this link to install [Docker Desktop](https://www.docker.com/get-started/). You will need to create an account, which can be done by linking your Google or GitHub profile.

- Open **Docker Desktop**, and ensure that you are signed in to your Docker account.

- In a terminal, navigate to the repository's `visible` directory.

- In order to authenticate the database instance, you will need to create a `postgres_user_password` file. Use the following two commands:

        mkdir secrets
        echo [your-password] > secrets/postgres_user_password

  This file is only for your machine, and should not be added to the repository. The password can be anything you want.

- Once you have created the file, start the Docker containers by running the following command:
        
        docker-compose up --build

- **Note:** If you've previously built the project and have made changes, run the following commands:

        docker-compose down
        docker-compose up --build

- You should now be able to view the local instance of the project.
  Visit http://localhost:8080 in your browser to see the result.

## Front End Developement
This project uses **npm** (node package manager) to manage dependencies required by front-end components.

These dependecies are intentionally **excluded** from the repository, via the .gitignore file. **They should not be added to the repository.**

- They are installed by docker when hosting the project.

The package.json file lists these dependencies, and *is* included in the repository. It allows all dependencies to be easily installed to a local environment.

- Node and npm can be installed via the [NodeJS](https://nodejs.org/en/download) website.

- Once Node/npm are installed, before performing front-end development, navigate to the visible/visible.client directory and execute the following command:

        npm i

 This should install all depencies listed in package.json to the local environment, allowing your IDE to index the libraries used in the project.

 They consist of a directory 'node_modules/' and a file 'package-lock.json'.

- **Note:**  Missing these files will cause your IDE to flag the use of the npm libraries as an error. If these files are ever missing from your local repository, they can be reinstalled via the above command.