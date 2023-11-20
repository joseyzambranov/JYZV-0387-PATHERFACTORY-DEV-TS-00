import  MailerProviderAdapterFactory  from './factories/MailerProviderAdapterFactory';
import IMailerProviderAdapter from './adapters/IMailerProviderAdapter';

const type = 'ses';
const mailerProvider: IMailerProviderAdapter = MailerProviderAdapterFactory.createMailerAdapter(type);
mailerProvider.sendEmail();
