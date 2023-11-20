"use strict";
// MailerProviderAdapterFactory.ts
class MailerProviderAdapterFactory {
    static createMailerAdapter(type) {
        switch (type) {
            case 'sendgrid':
                return new SendgridAdapter();
            case 'ses':
                return new SesAdapter();
            default:
                throw new Error('Tipo de adaptador de correo no válido');
        }
    }
}
