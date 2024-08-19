import prisma from "../../../../../lib/prisma.js";
import dotenv from "dotenv";
dotenv.config()

export const deleteAvailability = async (req, res) => {
    const {
        photographer_id,
        datesToBeRemoved
    } = req.body

    try {
        const checkExistingRecord = await prisma.availability.findFirst({
            where: {
                photographerId: photographer_id,
            }
        })
        if (!checkExistingRecord) {
            return res.status(404).json({ message: "No availability record found for this photographer" })
        }
        const datesToDeleteObjects = datesToBeRemoved.map(date => new Date(date).toISOString())
        const updatedAvailability = checkExistingRecord.availableDates.filter(
            date => !datesToDeleteObjects.includes(date.toISOString())
        )
        await prisma.availability.update({
            where: {
                availability_id: checkExistingRecord.availability_id
            },
            data: {
                availableDates: updatedAvailability
            }
        })
        res.status(201).json({ message: "Dates deleted successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}