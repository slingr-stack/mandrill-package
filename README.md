<table class="table" style="margin-top: 10px">
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Mandrill package</td>
        <td>November 13, 2023</td>
        <td>Detailed description of the API of the Mandrill package.</td>
    </tr>
    </tbody>
</table>

# Overview

Mandrill is an email infrastructure service offered as an add-on for MailChimp that you can use to send personalized,
one-to-one e-commerce emails, or automated transactional emails.


## Configuration

- Check the setting page to create a new API key: [Settings page](https://mandrillapp.com/settings/)
- Configure the inbound domain to receive messages and notifications: [Inbound Email Processing Overview](https://mandrill.zendesk.com/hc/en-us/articles/205583197-Inbound-Email-Processing-Overview)
- You will need to configure the Webhook URL as a route inside the registered inbound domain: [Inbound page](https://mandrillapp.com/inbound)
- A new webhook (as well as the one that we use as inbound webhook) can be configured to receive different kinds of message and sync events: [Webhooks page](https://mandrillapp.com/settings/webhooks)

### API key
API to access to Mandrill service

### Sender name
Name of the sender of the emails

### Sender account
Account to use as sender of the emails (Do not include the @ and the domain).

### Sender domain
Domain to use as sender of the emails (Do not include the @ and the account name).

### Redirect emails
If it is enabled, all the emails will be sent to the redirect address instead to the real ones. This parameter is available only in dev environments.

### Redirect to address
Redirect address used as receiver of all the emails when the redirect option is enabled. This parameter is available only in dev environments.

## Events

### Webhook

Mandrill's webhooks allow your application to receive information about email events as they occur.

### Received email
Event thrown when an email is received by the Mandrill service

### Received response to a previously sent email
Events thrown when an email is received by the Mandrill service as response to a previously sent email through the messages.send or messages.sendTemplate functions.

# Javascript API

The Javascript API of the mandrill package has two pieces:

- **HTTP requests**
- **Flow steps**

## HTTP requests
You can make `POST` requests to the [mandrill API](https://mailchimp.com/developer/transactional/api/) like this:
```javascript
var response = pkg.mandrill.api.post('/ips/delete-pool', body)
var response = pkg.mandrill.api.post('/ips/delete-pool')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the package:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>

### Generic Flow Step

Generic flow step for full use of the entire package and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>POST</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/users/info<br>/users/ping<br>/users/ping2<br>/users/senders<br>/messages/send<br>/messages/send-template<br>/messages/search<br>/messages/search-time-series<br>/messages/info<br>/messages/content<br>/messages/parse<br>/messages/send-raw<br>/messages/list-scheduled<br>/messages/cancel-scheduled<br>/messages/reschedule<br>/tags/list<br>/tags/delete<br>/tags/info<br>/tags/time-series<br>/tags/all-time-series<br>/rejects/add<br>/rejects/list<br>/rejects/delete<br>/whitelists/add<br>/whitelists/list<br>/whitelists/delete<br>/senders/list<br>/senders/domains<br>/senders/add-domain<br>/senders/check-domain<br>/senders/verify-domain<br>/senders/info<br>/senders/time-series<br>/urls/list<br>/urls/search<br>/urls/time-series<br>/urls/tracking-domains<br>/urls/check-tracking-domain<br>/templates/add<br>/templates/info<br>/templates/update<br>/templates/publish<br>/templates/delete<br>/templates/list<br>/templates/time-series<br>/templates/render<br>/webhooks/list<br>/webhooks/add<br>/webhooks/info<br>/webhooks/update<br>/webhooks/delete<br>/subaccounts/list<br>/subaccounts/add<br>/subaccounts/info<br>/subaccounts/update<br>/subaccounts/delete<br>/subaccounts/pause<br>/subaccounts/resume<br>/inbound/domains<br>/inbound/add-domain<br>/inbound/check-domain<br>/inbound/delete-domain<br>/inbound/routes<br>/inbound/add-route<br>/inbound/update-route<br>/inbound/delete-route<br>/inbound/send-raw<br>/exports/info<br>/exports/list<br>/exports/rejects<br>/exports/whitelist<br>/exports/activity<br>/ips/list<br>/ips/info<br>/ips/provision<br>/ips/start-warmup<br>/ips/cancel-warmup<br>/ips/set-pool<br>/ips/delete<br>/ips/list-pools<br>/ips/pool-info<br>/ips/create-pool<br>/ips/delete-pool<br>/ips/check-custom-dns<br>/ips/set-custom-dns<br>/metadata/list<br>/metadata/add<br>/metadata/update<br>/metadata/delete<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps work, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).


## Dependencies
* HTTP Service (Latest Version)

# About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
