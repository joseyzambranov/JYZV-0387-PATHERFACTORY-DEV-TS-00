# Factory Method Pattern for Mail Providers

This project implements the **Factory Method Pattern** to manage the creation of mail provider adapters. The following explains how the pattern is structured in this context:

## Project Structure

### Interface (`IMailerProviderAdapter`)

- `IMailerProviderAdapter` defines the interface that all mail provider adapters must implement. It includes the `sendEmail` operation, representing the common contract for sending emails.

### Concrete Implementations (`SendgridAdapter` and `SesAdapter`)

- `SendgridAdapter` and `SesAdapter` are concrete classes that implement the `IMailerProviderAdapter` interface. Each provides specific logic for sending emails using the corresponding mail provider (Sendgrid or SES).

### Adapter Factory (`MailerProviderAdapterFactory`)

- `MailerProviderAdapterFactory` is a class that acts as a factory to create instances of mail provider adapters. Its static method `createMailerAdapter` takes a `type` parameter indicating which adapter type to create (Sendgrid or SES) and returns an instance of the corresponding adapter.

## Client Usage (`Main.ts`)

In the `Main.ts` file, it illustrates how to use the factory to obtain a concrete instance of `IMailerProviderAdapter` based on the specified type. This enables sending emails without knowing the specific underlying implementation of the mail provider.

```typescript
// Main.ts
import IMailerProviderAdapter from './adapters/IMailerProviderAdapter';
import { MailerProviderAdapterFactory } from './factories/MailerProviderAdapterFactory';

const type = 'sendgrid';
const mailerProvider: IMailerProviderAdapter = MailerProviderAdapterFactory.createMailerAdapter(type);
mailerProvider.sendEmail();
```

## Tests and Examples

## Tests

The project includes a test suite to ensure the correctness of the Factory Method Pattern implementation for mail provider adapters. One specific test case is highlighted below as an example:

### Invalid Adapter Type Test
To ensure that the factory method correctly handles invalid adapter types, a test case has been included in the test suite. This test verifies that attempting to create an adapter with an invalid type results in the expected error.

```typescript
// tests/Main.test.ts
import { expect } from 'chai';
import IMailerProviderAdapter from '../src/adapters/IMailerProviderAdapter';
import MailerProviderAdapterFactory from '../src/factories/MailerProviderAdapterFactory';

describe('Mailer Provider Tests', () => {
  it('Invalid Adapter Type Test', () => {
    const invalidType = 'invalid';

    // Utiliza una función anónima para verificar el lanzamiento de la excepción
    expect(() => {
      MailerProviderAdapterFactory.createMailerAdapter(invalidType);
    }).to.throw('Tipo de adaptador de correo no válido');
  });
});
```
Make sure to run this test as part of your testing suite to ensure the robustness of the factory method implementation.