
# Overview

Repo: [https://github.com/slingr-stack/mandrill-package](https://github.com/slingr-stack/mandrill-package)

Mandrill is an email infrastructure service offered as an add-on for MailChimp that you can use to send personalized,
one-to-one e-commerce emails, or automated transactional emails.


## Configuration

- Check the setting page to create a new API key: [Settings page](https://mandrillapp.com/settings/)
- Configure the inbound domain to receive messages and notifications: [Inbound Email Processing Overview](https://mandrill.zendesk.com/hc/en-us/articles/205583197-Inbound-Email-Processing-Overview)
- You will need to configure the Webhook URL as a route inside the registered inbound domain: [Inbound page](https://mandrillapp.com/inbound)
- A new webhook (as well as the one that we use as inbound webhook) can be configured to receive different kinds of message and sync events: [Webhooks page](https://mandrillapp.com/settings/webhooks)

#### API key
API to access to Mandrill service

**Name**: apiKey
**Type**: text
**Mandatory**: true

#### Sender account
Account to use as sender of the emails (Do not include the @ and the domain).

**Name**: account
**Type**: text
**Mandatory**: true

#### Sender name
Name of the sender of the emails

**Name**: fromName
**Type**: text
**Mandatory**: true

#### Redirect emails
If it is enabled, all the emails will be sent to the redirect address instead to the real ones. This parameter is available only in dev environments.

**Name**: redirectEnabled
**Type**: buttonsGroup
**Mandatory**: true

#### Redirect to address
Redirect address used as receiver of all the emails when the redirect option is enabled. This parameter is available only in dev environments.

**Name**: redirectEmail
**Type**: text
**Mandatory**: false

#### Webhook URL
The Webhook URL is a generated URL that follows the pattern `https://<appName>.slingrs.io/<environment>/services/<httpServiceName>/mandril`. This is the URL you should configure in your Mandrill app to receive events.

## Events

### Webhook

Incoming webhook events will be automatically captured by the default listener named `Catch HTTP Mandrill Events`, which can be found below the `Scripts` section. Alternatively, you have the option to create a new package listener. For more information, please refer to the [Listeners Documentation](https://platform-docs.slingr.io/dev-reference/data-model-and-logic/listeners/).

Mandrill's webhooks enable your application to receive real-time updates about email events. The following events can be triggered:

- `Message is sent`
- `Message is delayed`
- `Message is soft-bounced`
- `Message is clicked`
- `Message recipient unsubscribes`
- `Rejection Denylist changes`
- `Message is delivered`
- `Message is bounced`
- `Message is opened`
- `Message is marked as spam`
- `Message is rejected`
- `Rejection Allowlist changes`

# Javascript API

You can make `POST` requests to the [mandrill API](https://mailchimp.com/developer/transactional/api/) like this:

Send new message without template:
```javascript
    pkg.mandrill.api.post({
    path: '/messages/send',
    body: {  
        message: {
            from_email: "do-not-reply@acme.com",
            from_name: "ACME",
            subject: "Password expiration",
            to: [{email: "test@slingr.io"}],
            html: "<h1>Important:</h1><p>Your password is about to expire!</p><p>Please <a href='https://your-reset-password-link.com'>click here</a> to reset your password.</p>"
        }
    }
    });

```
Send new message using template and attaching files:
```javascript
    pkg.mandrill.api.post({
        path: '/messages/send-template',
        body: {      
          template_name: "your-notification-template",
          template_content: [],
          message: {
            from_email: "do-not-reply@acme.com",
            from_name: "ACME" ,
            subject: 'New invoices have been generated',
            to: [{email: "customer@test.com"}],
            merge_language: 'handlebars',
            global_merge_vars: [
              {
                name: 'message',
                content: `<p>Hello<b>${customer}</b>. You have new invoices.</p>`,
              }
            ],
            attachments: invoices.map(invoice => ({
              "type": "application/pdf",
              "name": invoice.name,
              "content": invoice.content
            }))
          }
        }
    }); 

```
You can send an email in the same way, but using the Mandrill helper (the `from_name` field is automatically filled with the value defined in the configuration, and by default, the path `/messages/send` is used), as follows:

```javascript
pkg.mandrill.api.messages.send.post({
    message: {
      from_name: "ACME",
      subject: "Password expiration",
      to: [{email: "test@slingr.io"}],
      html: "<h1>Important:</h1><p>Your password is about to expire!</p><p>Please <a href='https://your-reset-password-link.com'>click here</a> to reset your password.</p>"
  }
});
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

# Overview of common transactional API endpoints

The [Mailchimp Transactional API](https://mailchimp.com/developer/transactional/guides/quick-start/) offers a variety of endpoints to facilitate common use cases in transactional email management. Here's a summary of the most frequently used endpoints:

### Messages: Manage the sending and retrieval of transactional emails.
* `POST /messages/send`: Send a new transactional message.
* `POST /messages/send-template`: Send a new message using a stored template.
* `POST /messages/search`: Search recently sent messages with optional filters.
* `POST /messages/info`: Retrieve information about a specific sent message.
* `POST /messages/content`: Retrieve the full content of a sent message.
* `POST /messages/list-scheduled`: List all scheduled emails.
* `POST /messages/cancel-scheduled`: Cancel a scheduled email.
* `POST /messages/reschedule`: Reschedule a scheduled email.

### Templates: Create and manage email templates for consistent messaging.
* `POST /templates/add`: Add a new template to your account.
* `POST /templates/info`: Retrieve information about a specific template.
* `POST /templates/update`: Update an existing template.
* `POST /templates/delete`: Delete a template.
* `POST /templates/list`: List all templates in your account.

### Senders: Manage and verify sender domains and email addresses.
* `POST /senders/list`: List all senders that have used your account.
* `POST /senders/domains`: List all sender domains added to your account.
* `POST /senders/add-domain`: Add a new sender domain.
* `POST /senders/verify-domain`: Send a verification email to verify domain ownership.

### Tags: Organize and categorize your emails for better tracking.
* `POST /tags/list`: List all tags used in your account.
* `POST /tags/delete`: Delete a specific tag.
* `POST /tags/info`: Retrieve information about a specific tag.
* `POST /tags/time-series`: Retrieve hourly statistics for a tag.

### Webhooks: Set up real-time notifications for specific email events.
* `POST /webhooks/list`: List all webhooks defined on your account.
* `POST /webhooks/add`: Add a new webhook URL.
* `POST /webhooks/info`: Retrieve information about a specific webhook.
* `POST /webhooks/update`: Update an existing webhook.
* `POST /webhooks/delete`: Delete an existing webhook.

### Rejects: Manage your email rejection denylist.
* `POST /rejects/add`: Add an email address to your rejection denylist.
* `POST /rejects/list`: List all email addresses on your rejection denylist.
* `POST /rejects/delete`: Remove an email address from your rejection denylist.

These endpoints cover the essential functionalities for sending emails, managing templates, handling sender domains, organizing emails with tags, setting up webhooks for event notifications, and managing rejection lists. For detailed information on each endpoint, refer to the [Mailchimp Transactional API Reference](https://mailchimp.com/developer/transactional/api/).

## Dependencies
* HTTP Service

# About Slingr

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
