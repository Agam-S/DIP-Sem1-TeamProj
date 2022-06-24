# DIP-Sem1-TeamProj
this is a team project about NBA predictions made for Swinburne in DIPLOMA OF IT (ADVANCED PROGRAMMING)

In this project, user is able to create custom nba teams, add players to it. 
Moreover, user can compare 2 teams with a machine learning algorithm written in python

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
