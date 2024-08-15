import express from 'express';
import { photographer } from '../../../../../controllers/vendor/create/artist/photographer/createPhotographer.js';

// Create a new instance of an Express router
const createPhotographer = express.Router();

// Define a POST route to handle requests for creating a new photographer
createPhotographer.post('/artist/photographer', photographer);

// Export the router to be used in other parts of your application
export default createPhotographer;
