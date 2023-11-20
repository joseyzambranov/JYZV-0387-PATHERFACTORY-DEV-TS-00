import IMailerProviderAdapter from '../adapters/IMailerProviderAdapter';

class SesAdapter implements IMailerProviderAdapter {
    sendEmail(): void {
      console.log('Enviando email con SES');
    }
  }
  
  export default SesAdapter;