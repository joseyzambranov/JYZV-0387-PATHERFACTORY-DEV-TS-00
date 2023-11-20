"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MailerProviderAdapterFactory_1 = __importDefault(require("./factories/MailerProviderAdapterFactory"));
const type = 'ses';
const mailerProvider = MailerProviderAdapterFactory_1.default.createMailerAdapter(type);
mailerProvider.sendEmail();
