# Click the Pic

https://clickthepic.netlify.app


### About

Click the Pic is an app that helps beginners in a new language to learn words through fun games.

The first game is click the pic: one word and two random pictures are shown to the user.
The user has to click the correct picture to gain points. If the user fails, the game is over.

In the second game, flip the cards, the user chooses a category.
For each category, pictures are displayed and when hovered over, show the corresponding description.

Currently it supports English, German, French and Spanish.


### Goals

Our goal for this app was mainly to practice on collaborating, especially github branching 
and avoiding merge conflicts, and to practice with technologies that we learned during the bootcamp:

##### Front End

- React
- Redux
- Axios
- React Bootstrap

##### Back End

- Express
- Sequelize
- Postgres


### API's

Two external API's were used for the click game:

Unsplash for images: https://unsplash.com/developers

Imagga for image-reading: https://imagga.com/

If you want to use this app locally, you should get your own API key by registering to Imagga.
Then add it to the src/config/constants.js file.

### Backend

The backend repository can be found here:
https://github.com/ewa-mi/clickthepic-server
