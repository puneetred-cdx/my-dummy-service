import { Request, Response, NextFunction } from 'express';

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json([{ id: 1, name: "item1" }]);
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(201).json({ message: "Item created" });
};
