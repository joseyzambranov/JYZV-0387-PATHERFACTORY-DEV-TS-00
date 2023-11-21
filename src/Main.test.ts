// tests/Main.test.ts
import { expect } from 'chai';
import IMailerProviderAdapter from '../src/adapters/IMailerProviderAdapter';
import  MailerProviderAdapterFactory  from '../src/factories/MailerProviderAdapterFactory';

describe('Mailer Provider Tests', () => {
  it('Sendgrid Adapter Test', async () => {
    const type = 'sendgrid';
    const mailerProvider: IMailerProviderAdapter = MailerProviderAdapterFactory.createMailerAdapter(type);

    // Realiza las pruebas específicas para el adaptador de Sendgrid
    // ...

    // Ejemplo:
   expect(mailerProvider.sendEmail()).to.equal('Enviando email con Sendgrid');
  });

  it('SES Adapter Test', () => {
    const type = 'ses';
    const mailerProvider: IMailerProviderAdapter = MailerProviderAdapterFactory.createMailerAdapter(type);

    // Realiza las pruebas específicas para el adaptador de SES
    // ...

    // Ejemplo:
    expect(mailerProvider.sendEmail()).to.equal('Enviando email con SES');
  });
});

it('Invalid Adapter Test', () => {
  const invalidType = 'Invalid';
  expect(() => {
    MailerProviderAdapterFactory.createMailerAdapter(invalidType);
  }).to.throw('Tipo de adaptador de correo no válido');
});

