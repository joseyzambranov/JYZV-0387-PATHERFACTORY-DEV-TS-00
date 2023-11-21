import IMailerProviderAdapter from '../adapters/IMailerProviderAdapter';

class SesAdapter implements IMailerProviderAdapter {
    sendEmail(): string {
      return 'Enviando email con SES';
    }
  }
  
  export default SesAdapter;