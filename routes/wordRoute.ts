// src/app.ts

import express from 'express';
import bodyParser from 'body-parser';
import wordRoutes from './routes/wordRoutes'; // Import word routes

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/words', wordRoutes); // Mount word routes

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
