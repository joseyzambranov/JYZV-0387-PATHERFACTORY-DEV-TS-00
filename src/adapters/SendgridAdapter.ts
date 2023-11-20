import IMailerProviderAdapter from '../adapters/IMailerProviderAdapter';

class SendgridAdapter implements IMailerProviderAdapter {
    sendEmail(): void {
      console.log('Enviando email con Sendgrid');
    }
  }
  
  export default SendgridAdapter;