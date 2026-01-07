import { Request, Response, NextFunction } from 'express';

export const validateItem = (req: Request, res: Response, next: NextFunction) => {
    if (req.body.name) {
        next();
    } else {
        res.status(400).json({ message: "Item name is required" });
    }
};
