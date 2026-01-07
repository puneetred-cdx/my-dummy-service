"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.getAll = void 0;
const getAll = async (req, res, next) => {
    return res.status(200).json([{ id: 1, name: "item1" }]);
};
exports.getAll = getAll;
const create = async (req, res, next) => {
    return res.status(201).json({ message: "Item created" });
};
exports.create = create;
//# sourceMappingURL=items.js.map