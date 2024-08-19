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
    const {
        photographer_id,
        availableDates
    } = req.body;

    // Ensure availableDates is defined and is an array
    if (!Array.isArray(availableDates) || availableDates.length === 0) {
        return res.status(400).json({ message: "Invalid or missing available dates" });
    }

    try {
        // Adjust field name to match Prisma schema
        const existingAvailableDates = await prisma.availability.findFirst({
            where: {
                photographer: {
                    photographer_id: photographer_id
                }
            }
        });

        if (existingAvailableDates) {
            await prisma.availability.update({
                where: {
                    availability_id: existingAvailableDates.availability_id
                },
                data: {
                    availableDates: {
                        set: [...existingAvailableDates.availableDates, ...availableDates.map(date => new Date(date))]
                    }
                }
            });
            return res.status(200).json({ message: "Availability updated successfully" });
        }

        // Create a new availability record if none exists
        await prisma.availability.create({
            data: {
                photographer: {
                    connect: { photographer_id: photographer_id }
                },
                availableDates: availableDates.map(date => new Date(date))
            }
        });

        res.status(201).json({ message: "Availability created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create availability" });
    }
};
