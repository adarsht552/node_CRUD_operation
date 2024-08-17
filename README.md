Photographer Booking API
This project is a Node.js API designed for managing photographers and their bookings. It utilizes Express to handle server functionality, Prisma as an ORM with MongoDB, and includes routes for managing photographers and booking their services.

Features
Create a Photographer: Allows vendors to add new photographers to the system with details such as name, price, and availability.
Select a Photographer: Enables clients to book a photographer for a specific date and time.
Manage Photographer Availability: Allows vendors to set and update available dates for photographers.
Manage Photographer Services: Lets vendors create and update the services offered by photographers, including names, descriptions, and prices.
Technologies
Node.js: JavaScript runtime for building the server.
Express: Web framework for handling HTTP requests and routing.
Prisma: ORM (Object-Relational Mapping) tool for interacting with MongoDB databases.
MongoDB: NoSQL database used for storing application data.
Helmet: Middleware for enhancing security by setting various HTTP headers.
CORS: Middleware for enabling Cross-Origin Resource Sharing, allowing secure cross-origin requests.
dotenv: Module for loading environment variables from a .env file into process.env.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/photographer-booking-api.git
cd photographer-booking-api
Install dependencies:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory of the project and add your environment variables, such as DATABASE_URL for MongoDB connection.

Run the application:

bash
Copy code
npm start
API Endpoints
POST /api/vendor/create/photographer: Add a new photographer.
POST /api/vendor/create/availability: Set or update photographer availability.
POST /api/vendor/create/services: Create or update services offered by a photographer.
POST /api/client/serviceSelect: Book a photographer for a specific date and time.
Error Handling
The API includes basic error handling that logs errors to the console and returns a generic error message to the client if something goes wrong.
