"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SesAdapter_1 = __importDefault(require("../adapters/SesAdapter"));
const SendgridAdapter_1 = __importDefault(require("../adapters/SendgridAdapter"));
class MailerProviderAdapterFactory {
    static createMailerAdapter(type) {
        switch (type) {
            case 'sendgrid':
                return new SendgridAdapter_1.default();
            case 'ses':
                return new SesAdapter_1.default();
            default:
                throw new Error('Tipo de adaptador de correo no válido');
        }
    }
}
exports.default = MailerProviderAdapterFactory;
