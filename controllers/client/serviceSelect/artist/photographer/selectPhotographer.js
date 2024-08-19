import prisma from "../../../../../lib/prisma.js";
import dotenv from 'dotenv';
dotenv.config();

export const photographer = async (req, res) => {
    // Extract photographer ID, date, and time from the request body
    const {
        photographer_id,
        date,
        time
    } = req.body;

    try {
        // Parse the date and time from the request body
        const parseDate = new Date(date);
        const parseTime = new Date(`${date}T${time}Z`);

        // Check if there is already an existing booking for the same date and time
        const existingBooking = await prisma.bookings.findFirst({
            where: {
                date: parseDate,
                time: parseTime,
                photographerId: photographer_id
            }
        });

        // If a booking already exists, return a 400 status with an error message
        if (existingBooking) {
            return res.status(400).json({ message: "Failed, appointment for the same date-time is already booked." });
        }

        // If no existing booking is found, create a new booking
        const newBooking = await prisma.bookings.create({
            data: {
                date: parseDate,
                time: parseTime,
                photographerId: photographer_id
            }
        });

        // Return a 201 status with a success message
        res.status(201).json({ message: "Photographer booked successfully" });
    } catch (error) {
        // Log the error and return a 500 status with an error message
        console.log(error);
        res.status(500).json({ message: "Failed to create booking" });
    }
};
