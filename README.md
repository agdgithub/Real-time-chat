# Real-Time Chat App

This repository contains the source code for chat.io, a real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO. The app allows users to engage in live chat conversations, displays online users, and features a modern and simple design that is responsive across all devices.

## Prerequisites

- Node.js and npm installed on your machine
- MongoDB database connection

## Installation

1. Install the dependencies:

   ````bash
   cd Chat.io/client && npm install
   cd Chat.io/server && npm install
   cd Chat.io/socket && npm install

2. Create a `.env` file in the server directory and provide the following environment variables:

   ````plaintext
   MONGODB_URI=<your-mongodb-connection-uri>
   PORT = 5000
   JWT_SECRET =<secret_code>
   JWT_EXP = 30d

3. Start the development server in socket/server/client:

   ````bash
   npm run dev

4. Open your browser and visit `http://localhost:5173` to access the chat.io application.
