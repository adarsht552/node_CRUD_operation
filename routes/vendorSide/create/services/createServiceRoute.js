import express from 'express';
import { createServices } from '../../../../controllers/vendor/create/artist/photographer/createServices.js';

const createServiceRoute = express.Router();

/**
 * Route to handle the creation or updating of photographer services.
 * 
 * @route POST /artist/services
 * @param {Request} req - The request object containing service details such as name, description, price, and photographer_id.
 * @param {Response} res - The response object used to send back status and messages.
 */
createServiceRoute.post('/artist/services', createServices);

export default createServiceRoute;
