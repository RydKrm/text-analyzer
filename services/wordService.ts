// src/services/wordService.ts

export const countWords = (text: string): number => {
    if (!text.trim()) {
        return 0;
    }

    return text.trim().split(/\s+/).length;
};
