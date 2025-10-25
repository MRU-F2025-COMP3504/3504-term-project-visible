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
        
        docker-compose up

- You should now be able to view the local instance of the project.
  Visit http://localhost:8080 in your browser to see the result.

