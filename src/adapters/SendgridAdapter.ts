import IMailerProviderAdapter from '../adapters/IMailerProviderAdapter';

class SendgridAdapter implements IMailerProviderAdapter {
    sendEmail(): string {
      return 'Enviando email con Sendgrid';
    }
  }
  
  export default SendgridAdapter;