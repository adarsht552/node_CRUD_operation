**Photographer Booking API**
This project is a Node.js API designed for managing photographers and their bookings. It utilizes Express to handle server functionality, Prisma as an ORM with MongoDB, and includes routes for managing photographers and booking their services.

*Features*
Create a Photographer: Allows vendors to add new photographers to the system with details such as name, price, and availability.
Select a Photographer: Enables clients to book a photographer for a specific date and time.
Manage Photographer Availability: Allows vendors to set and update available dates for photographers.
Manage Photographer Services: Lets vendors create and update the services offered by photographers, including names, descriptions, and prices.

*Technologies*
Node.js: JavaScript runtime for building the server.
Express: Web framework for handling HTTP requests and routing.
Prisma: ORM (Object-Relational Mapping) tool for interacting with MongoDB databases.
MongoDB: NoSQL database used for storing application data.
Helmet: Middleware for enhancing security by setting various HTTP headers.
CORS: Middleware for enabling Cross-Origin Resource Sharing, allowing secure cross-origin requests.
dotenv: Module for loading environment variables from a .env file into process.env
