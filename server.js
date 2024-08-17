import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import selectPhotographer from './routes/clientSide/serviceSelect/artist/photographer/selectPhotographerRoute.js';
import createPhotographer from './routes/vendorSide/create/artist/photographer/photographerRoute.js';
import artistAvialablity from './routes/vendorSide/create/avialablity/avialablityRoute.js';
import createServiceRoute from './routes/vendorSide/create/services/createServiceRoute.js';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000; // Provide a fallback port if PORT is not defined

// Middleware
app.use(helmet()); // Security middleware to set various HTTP headers for protection
app.use(cors()); // Enable CORS to allow cross-origin requests
app.use(express.json()); // Middleware to parse JSON bodies in requests

// Vendor routes
app.use('/api/vendor/create/photographer', createPhotographer); // Routes for creating photographers
app.use('/api/vendor/create/availability', artistAvialablity); // Routes for managing photographer availability
app.use('/api/vendor/create/services', createServiceRoute); // Routes for managing photographer services

// Client routes
app.use('/api/client/serviceSelect', selectPhotographer); // Routes for selecting photographers

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace to the console for debugging
    res.status(500).json({ message: 'Something went wrong!' }); // Send a generic error message to the client
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to Node.js CRUD API'); // Send a welcome message on the root route
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start the server and listen for incoming connections

//AVIABLE_ON_TABLE
