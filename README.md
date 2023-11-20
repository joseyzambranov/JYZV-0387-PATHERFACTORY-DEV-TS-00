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
