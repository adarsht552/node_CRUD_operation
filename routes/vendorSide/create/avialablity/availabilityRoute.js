import express from 'express';
import {availability} from '../../../../controllers/vendor/create/artist/photographer/createPhotographerAvailability.js'

const artistAvailability = express.Router();

/**
 * Route to handle the creation of photographer availability.
 * 
 * @route POST /artist/availablity
 * @param {Request} req - The request object containing photographer availability data.
 * @param {Response} res - The response object used to send back status and messages.
 */
artistAvailability.post('/artist/availability', availability);

export default artistAvailability;
