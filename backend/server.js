// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000; // You can choose any available port

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define API routes and logic here

// Example route
app.get('/api/v1/projects', (req, res) => {
  // Handle project retrieval logic here (e.g., fetch projects from a database)
  const projects = [
    // Example project data
    {
      _id: 1,
      name: 'Project 1',
      description: 'Description 1',
      // ... other project fields ...
    },
    {
      _id: 2,
      name: 'Project 2',
      description: 'Description 2',
      // ... other project fields ...
    },
    // ... add more projects as needed ...
  ];

  res.json(projects);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});