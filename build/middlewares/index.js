"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateItem = void 0;
const validateItem = (req, res, next) => {
    if (req.body.name) {
        next();
    }
    else {
        res.status(400).json({ message: "Item name is required" });
    }
};
exports.validateItem = validateItem;
//# sourceMappingURL=index.js.map