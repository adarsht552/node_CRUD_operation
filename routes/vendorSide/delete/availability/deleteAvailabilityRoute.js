import express from 'express';
import { deleteAvailability } from '../../../../controllers/vendor/delete/artist/photographer/deleteAvailability.js';

const deleteAvailabilityRoute = express.Router();

/**
 * Route to handle the creation of photographer availability.
 * 
 * @route POST /artist/availablity
 * @param {Request} req - The request object containing photographer availability data.
 * @param {Response} res - The response object used to send back status and messages.
 */
deleteAvailabilityRoute.post('/artist/availability', deleteAvailability);

export default deleteAvailabilityRoute;
