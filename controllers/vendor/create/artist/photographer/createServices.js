import prisma from '../../../../../lib/prisma.js';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Creates or updates services for a photographer.
 * 
 * @param {Object} req - The request object containing service details.
 * @param {Object} res - The response object used to send back status and messages.
 */
export const createServices = async (req, res) => {
    // Extract service details and photographer_id from the request body
    const {
        name,
        description,
        price,
        photographer_id
    } = req.body;

    try {
        // Check if a service already exists for the given photographer_id
        const checkServiceExistence = await prisma.services.findFirst({
            where: {
                photographerId: photographer_id
            }
        });

        if (checkServiceExistence) {
            // Update the existing service with new details
            const updatedService = await prisma.services.update({
                where: {
                    service_id: checkServiceExistence.service_id
                },
                data: {
                    // Assuming you want to append new values to existing arrays
                    name: {
                        push: name
                    },
                    description: {
                        push: description
                    },
                    price: {
                        push: price
                    },
                }
            });
            // Respond with a success message for the update
            res.status(200).json({ message: 'Service updated successfully' });
        } else {
            // Create a new service if none exists for the photographer_id
            const newService = await prisma.services.create({
                data: {
                    name,
                    description,
                    price,
                    photographerId: photographer_id
                }
            });
            // Respond with a success message for the creation
            res.status(201).json({ message: 'Service created successfully' });
        }
    } catch (error) {
        // Log any errors and send a failure response
        console.log(error);
        res.status(500).json({ message: 'Failed to create or update service' });
    }
};
