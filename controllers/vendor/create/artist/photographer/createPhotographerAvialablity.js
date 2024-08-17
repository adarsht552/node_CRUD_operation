import prisma from "../../../../../lib/prisma.js";
import dotenv from 'dotenv';
dotenv.config();

/**
 * Handles the creation of availability records for a photographer.
 * 
 * @param {Object} req - The request object containing photographer_id and availableDates.
 * @param {Object} res - The response object used to send back status and messages.
 */
export const availability = async (req, res) => {
    // Extract photographer_id and availableDates from the request body
    const {
        photographer_id,
        availableDates
    } = req.body;

    try {
        // Create a new availability record in the database
        const photographerAvailability = await prisma.availability.create({
            data: {
                photographer_id,
                // Convert availableDates from strings to Date objects
                availableDates: availableDates.map(date => new Date(date))
            }
        });

        // Send a success response
        res.status(201).json({ message: "Availability created successfully" });
    } catch (error) {
        // Log any errors and send a failure response
        console.log(error);
        res.status(500).json({ message: "Failed to create availability" });
    }
};
