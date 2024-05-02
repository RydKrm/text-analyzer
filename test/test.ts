// src/tests/wordCount.test.ts

import request from 'supertest';
import app from '..'; // Assuming we export our Express app from app.ts

describe('Word Count API', () => {
    it('should return the correct word count for a given text', async () => {
        const text = 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.';
        const response = await request(app).get('/api/words').query({ text });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ count: 12 }); // Since there are 12 words in the given text
    });

    it('should handle empty text and return 0', async () => {
        const text = '';
        const response = await request(app).get('/api/words').query({ text });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ count: 0 });
    });
});
