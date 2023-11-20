import IMailerProviderAdapter from '../adapters/IMailerProviderAdapter';
import SesAdapter from "../adapters/SesAdapter"
import SendgridAdapter from "../adapters/SendgridAdapter"

class MailerProviderAdapterFactory {
    static createMailerAdapter(type: string): IMailerProviderAdapter {
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
  
  export default MailerProviderAdapterFactory;