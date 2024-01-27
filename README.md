# Car Sale

Car sale is an application for adding, deleting, favoriting and sorting vehicles

## Contents

- [Tech Stack](#tech-Stack)
- [Installation](#Installation)
- [Usage](#Usage)
- [Features](#Features)
- [LIVE DEMO](#LIVE-DEMO)


## Used Technolgy

- NextJS
- Toastify
- Redux
- TypeScript
- Redux toolkit
- Redux-persist
- SCSS (for styling)
- Skeleton
- Eslint (for linting)
- Prettier (for code formatting)

## Installation

1. Clone this project:

   ```bash
     Clone the project: `git clone https://github.com/UserName/ProjectName.git`
   ```

2. Install the necessary dependencies:

   ```bash
   npm install / yarn
   ```

## Usage

1. Start the application:

   ```bash
   npm run dev / yarn dev
   ```

2. Open your web browser and go to [http://localhost:3000/](http://localhost:3000)

## Features

- Landing page should list
- First listing "last added item is displayed first"
- Users can add the advertisement to their favorites with the "favorite" button that affects the "number of favorites" field at the bottom of the advertisement card. Clicking the "favorite" button increases the "number of favorites" value by 1 point.

- The listing order can be changed with a select or drop-down item. From this select/dropdown item, the order can be sorted with "less" or "more" favorite amounts. The advertising card with the "high number" of points is shown in the "first place".
- In case of a conflict with the "number of favorites", the list order is changed according to the "last update date". 

- When the user hovers over the item, a button appears to delete the item from the list. Clicking the delete button deletes the item and displays a tostify on the screen.
- The user has to enter the advertisement name. 
- The user can select and add any of their own pictures.
- If he/she wants, he/she can click on the urgent checkbox and show his/her advertisement as urgent.
- If the listing is successful, a tostify alert is displayed on the screen and the user is redirected to the homepage.

## LIVE DEMO

[https://sale-car.netlify.app/](https://sale-car.netlify.app/)

