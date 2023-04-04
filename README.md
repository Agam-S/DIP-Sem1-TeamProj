# DIP-Sem1-TeamProj
This project was created for the Diploma of IT (Advanced Programming) program at Swinburne University. The main purpose of this project was to enable users to create custom NBA teams and add their desired players to it.

One of the main features of this project is the ability to compare two teams using a machine learning algorithm written in Python with Scikit-Learn. The algorithm was created by collecting two years' worth of NBA player data, generating their win %, and then getting the median value.

The API for this project had two distinct sides. The first was to verify authentication with Auth0 and manage the CRUD (Create, Read, Update, Delete) operations depending on the logged-in user. The second was to run a Python script in ExpressJS that would take a user's team's data, get their win %, compare the results, and then send them back to the frontend.


## Software Architecture
 1. Frontend: Client Side 
    - Built in Angular with BLK Theme by Creative Tim
    - Written in Typescript
    - Compiles to HTML, CSS, JavaScript, Assests, Images
 2. API: Application Programming Interface 
    - Built in ExpressJS
    - Written in JavaScript
 3. DBS: Database
    - MongoDB database
    - Self hosted cloud service

## How to Deploy Frontend

Step 1: Go to Frontend/nba_app folder.

Step 2: Make sure you have nodeJS installed

Step 3: Run Npm Install

Step 4: Run Ng Build

A dist folder will be created, feel free to delpoy that onto a service.


## How to Change MongoDB Database
Step 1: Go to Backend/API

Step 2: Open Index.js file

Step 3: Change ( Line 22 ) Link to your mongoDB database link.


## How to Deploy Backend
Step 1: Go to Backend/API

Step 2: Make sure you have nodeJS installed

Step 3: Run Npm Install

Step 4: Look up the process on how to deploy nodejs api on your preferred service.

Example : Azure has drop in and extension so you would use the extension or zip api and drop.

#### ~ API does NOT create a bundle to deploy.

## How to Change Auth0
Follow this guide - [Auth0 Guide](https://auth0.com/developers/hub/code-samples/full-stack/hello-world/basic-access-control/spa/angular-typescript/express-javascript)

TIP: If you make an account, it gives you a detailed documentation on what and how to change
