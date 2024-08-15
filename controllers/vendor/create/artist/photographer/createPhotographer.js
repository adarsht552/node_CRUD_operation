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
        offers
    } = req.body;

    try {
        // Create a new photographer record in the database
        const newPhotographer = await prisma.photographer.create({
            data: {
                name,        // Photographer's name
                price,       // Photographer's price
                image,       // Photographer's image URL or path
                description, // Photographer's description
                category,    // Category of photography
                tag,         // Tags associated with the photographer
                offers       // Special offers or promotions
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
