import express from 'express';
import { photographer } from '../../../../../controllers/client/serviceSelect/artist/photographer/selectPhotographer.js';

// Create a new instance of an Express router
const selectPhotographer = express.Router();

// Define a POST route to handle requests for selecting a photographer
selectPhotographer.post('/artist/photographer', photographer);

// Export the router to be used in other parts of your application
export default selectPhotographer;
