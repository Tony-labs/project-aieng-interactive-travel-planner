// This file is the entry point of the application. It initializes the application, sets up routes, and handles requests related to the guide.

import express from 'express';
import { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route for getting locations
app.get('/api/locations', (req: Request, res: Response) => {
    res.json([
        { id: 1, name: 'Old San Juan', description: 'Historic colonial district' },
        { id: 2, name: 'El Yunque', description: 'Tropical rainforest' },
        { id: 3, name: 'Bioluminescent Bay', description: 'Natural wonder' }
    ]);
});

// Sample route for getting attractions
app.get('/api/attractions', (req: Request, res: Response) => {
    res.json([
        { id: 1, name: 'Castillo San Felipe del Morro', type: 'Fortress' },
        { id: 2, name: 'La Parguera', type: 'Beach' },
        { id: 3, name: 'Arecibo Observatory', type: 'Science' }
    ]);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});