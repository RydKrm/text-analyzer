// src/controllers/wordController.ts

import { Request, Response } from 'express';
import { countWords } from '../services/wordService'; // Import word service

export const getWordCount = (req: Request, res: Response) => {
    const { text } = req.query;

    if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'Invalid text provided' });
    }

    const wordCount = countWords(text);

    return res.status(200).json({ count: wordCount });
};
