"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForDbSetup = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const port = 8080;
dotenv_1.default.config();
if (!process.env.MONGO_DB_URL) {
    throw new Error('There is no mongo db environment variable set');
}
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
    });
});
const server = app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Example app listening on port ${port}`);
}));
const waitForDbSetup = () => {
    return new Promise((resolve, reject) => {
        const mongoSetupPromise = mongoose_1.default.connect(process.env.MONGO_DB_URL);
        mongoSetupPromise
            .then((res) => {
            resolve('success');
        })
            .catch((err) => {
            console.log(err);
            reject('error');
        });
    });
};
exports.waitForDbSetup = waitForDbSetup;
if (process.env.NODE_ENV !== 'test') {
    (0, exports.waitForDbSetup)();
}
exports.default = server;
//# sourceMappingURL=app.js.map