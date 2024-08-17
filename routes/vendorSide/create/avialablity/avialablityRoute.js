import express from 'express';
import { avialablity } from '../../../../controllers/vendor/create/artist/photographer/createPhotographerAvialablity.js';

const artistAvialablity = express.Router();

/**
 * Route to handle the creation of photographer availability.
 * 
 * @route POST /artist/avialablity
 * @param {Request} req - The request object containing photographer availability data.
 * @param {Response} res - The response object used to send back status and messages.
 */
artistAvialablity.post('/artist/avialablity', avialablity);

export default artistAvialablity;
