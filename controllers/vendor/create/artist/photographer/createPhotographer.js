import prisma from "../../../../../lib/prisma.js";
import dotenv from 'dotenv';
dotenv.config();

export const photographer = async (req, res) => {
    // Extract photographer details from the request body
    const {
        name,
        price,
        image,
        description,
        category,
        tag,
        offers,
        city,
        eventType,
        gender,
        language,
        ratings,
        phonenumber,
        email,
        address
    } = req.body;

    try {
        // Create a new photographer record in the database
        const newPhotographer = await prisma.photographer.create({
            data: {
                name,
                price,
                image,
                description,
                category,
                tag,
                offers,
                city,
                eventType,
                gender,
                language,
                ratings,
                phonenumber,
                email,
                address
            }
        });

        // Respond with a 201 status and success message if creation is successful
        res.status(201).json({ message: "New photographer created successfully" });
    } catch (error) {
        // Log the error and respond with a 500 status and failure message
        console.log(error);
        res.status(500).json({ message: "Failed to create new photographer" });
    }
};
