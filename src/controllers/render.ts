import { Request, Response, NextFunction } from 'express';
import path from 'path';

export const complex = async (req: Request, res: Response, next: NextFunction) => {
    res.render(path.join(__dirname, '../templates/complex.ejs'), {
        user: {
            name: "Test User",
            id: 123
        },
        showSecret: true,
        secretLink: "https://example.com/secret"
    });
};
