"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.complex = void 0;
const path_1 = __importDefault(require("path"));
const complex = async (req, res, next) => {
    res.render(path_1.default.join(__dirname, '../templates/complex.ejs'), {
        user: {
            name: "Test User",
            id: 123
        },
        showSecret: true,
        secretLink: "https://example.com/secret"
    });
};
exports.complex = complex;
//# sourceMappingURL=render.js.map