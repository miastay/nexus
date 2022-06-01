# Nexus
Nexus is the start of a reimagination of collaborative student tools.

Our group focused on implementing different user-friendly features to enhance
connectivity, feedback, and collaboration between students.

### Contents
- [Features](#features)
  - [Posts](#posts)
  - [Voting](#voting)
  - [Leaderboard](#leaderboard)
  - [Profiles](#profiles)
  - [Authentication](#authentication)
- [Stack](#stack)
- [Installation & Running Locally](#installation-and-running-locally)
- [Contributors](#contributors)

## Features
Nexus focuses on highly data-oriented components; every feature of the application
implements the custom querying API to deliver meaningful content to the user.

  ### Posts
  Users have the ability to create posts with a variety of metadata, which persist in the backend
  and are exposed to other users for feedback through the voting system.
  
  <img src="https://user-images.githubusercontent.com/59121627/171512302-08d17768-66a4-42a1-bc69-3b0ca1cea3ff.png" alt="Image of Nexus post" width="500"/>

  ### Voting
  Users have the ability to provide feedback on their classmates' posts using the voting feature.
  Through a clear UI, each user can "upvote" or "downvote" posts they interact with, which is stored
  persistently in the backend and visible to all other users. These votes impact the sorting of the
  respective posts, as well as the authors' standing in the Leaderboard.
  
  ![demo-upvote](https://user-images.githubusercontent.com/59121627/171513310-824bd3eb-444d-43ee-b010-6042a297a9f7.gif)

  ### Leaderboard
  Users' data is also presented in a compelling fashion through the leaderboard system--each user
  has a specific score that is calculated from all of their interactions (stored efficiently in the database),
  which is displayed in the leaderboard to track users' positive contributions.
  
  <img src="https://user-images.githubusercontent.com/59121627/171513566-a661762c-6000-4bd6-a215-94eb0c2d0bf2.png" alt="Image of Nexus leaderboard, with multiple users and their respective scores" width="300"/>

  ### Profiles
  The current user's information is displayed in a profile section of the app, which provides a convenient display
  of the logged in user's information, as well as their cumulative post score and a list of posts they have authored.
  
  <img src="https://user-images.githubusercontent.com/59121627/171513709-bd3dd6a7-5c81-4fbd-99d0-03e08da46fcd.png" alt="Image of Nexus profile, displaying various user data" width="500"/>

  ### Authentication
  Sessions are handled by an authentication API, which allows users to create profiles with their own data, log into
  a session for that profile using their username and password, and be able to access their account persistently until
  they log out, using a combination of double hashing and cookies to allow for persistent sessions without excessive
  database querying or unnecessary data storage.
  
  <img src="https://user-images.githubusercontent.com/59121627/171513977-5c8a03bc-3a33-4d43-941b-40b70781c5ee.png" alt="Image of Nexus authentication page with formatted username and password fields" width="300"/>

  User session data is used throughout the application to verify the current user and display information for that
  particular user.
  
  An authorized session is required to access the application, with data behind the authentication layer not being
  passed to the client until their session has been authorized. Sensitive data like passwords and session keys are
  hashed securely before being stored, both in the database and the session objects on the client side.

## Stack
Nexus is built in React and Node, running a Next.js app.
The app makes use of SCSS with CSS preprocessing and Webpack.
The backend is supported by a persistent database running through Firebase.

## Installation and Running Locally
1. Clone this repository onto your local machine:
`git clone https://github.com/rytaylor/nexus.git`
2. In the installed directory, install the associated node dependencies:
`npm i`
3. Place the provided config file `config.js` into the `nexus/components` directory.
3. To run the application locally, type `npm run dev`.
4. Point your browser to `localhost:3000`.

## Contributors
Ryan Taylor, Saayujh Ramanathan, Aaryaman Bhute

> Project submitted as final for UCLA CS35L Software Construction.
