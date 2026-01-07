"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.getAll = void 0;
const getAll = async (req, res, next) => {
    return res.status(200).json([{ id: 1, name: "user1" }]);
};
exports.getAll = getAll;
const create = async (req, res, next) => {
    return res.status(201).json({ message: "User created" });
};
exports.create = create;
//# sourceMappingURL=users.js.map