<table>
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
        <td>July 24, 2023</td>
        <td>Detailed description of the API of the Mandrill package.</td>
    </tr>
    </tbody>
</table>

## Overview

Mandrill is an email infrastructure service offered as an add-on for MailChimp that you can use to send personalized,
one-to-one e-commerce emails, or automated transactional emails.

Some features are:

- Shortcuts for the REST API
- Helpers to convert date times

In most cases, you will be using the provided shortcuts to access the API. For example, you could use the REST API
directly by doing an HTTP request like this:

```js
var res = pkg.mandrill.functions.users.info();
```

These shortcuts are based on the [Mandrill REST API](https://mandrillapp.com/api/docs/).

## Quick start

One common integration case with Mandrill is sending an email. For example:

```js
var res = pkg.mandrill.functions.messages.send.post({
 "message": {
   "html": "<p>Example HTML content</p>",
   "text": "Example text content",
   "subject": "example subject",
   "from_name": "Example Name",
   "to": [
     {
       "email": "recipient.email@example.com",
       "name": "Recipient Name",
       "type": "to"
     }
   ]
 }
});
```

## Configuration

- Check the setting page to create a new API key: [Settings page](https://mandrillapp.com/settings/)
- Configure the inbound domain in order to receive messages and notifications: [Inbound Email Processing Overview](https://mandrill.zendesk.com/hc/en-us/articles/205583197-Inbound-Email-Processing-Overview)
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

### Email events
Event thrown when something happens with a message on Mandrill. The event type can be one o the following ones: send, deferral, hard_bounce, soft_bounce, open, click, spam, unsub, reject.

```js
var res = pkg.mandrill.functions.messages.send.post({
 "message": {
   "html": "<p>Example HTML content</p>",
   "text": "Example text content",
   "subject": "example subject",
   "from_name": "Example Name",
   "to": [
     {
       "email": "recipient.email@example.com",
       "name": "Recipient Name",
       "type": "to"
     }
   ]
 }
}, {
   "name": 'Object to return'
 }, {
   "responseArrived": function(res, resData){
     //... code here
   },
   "emailArrived": function(res, resData){
     //... code here
   },
   "emailEvent": function(res, resData){
     //... code here
   },
   "syncEvent": function(res, resData){
     //... code here
   }
 });
```

### Send email using SLINGR files

When send and email, it is possible to send the ID of a file in the SLINGR app and the endpoint will automatically
read and attach it into Mandrill email:

```js
var res = pkg.mandrill.functions.messages.send.post({
 "message": {
   "html": "<p>Example HTML content</p>",
   "text": "Example text content",
   "subject": "example subject",
   "from_name": "Example Name",
   "attachments": [
      {
        "file_id": record.field('file').id()
      },
      {
        "type": "text/plain",
        "name": "myfile.txt",
        "content": "ZXhhbXBsZSBmaWxl"
      }
    ],
    "images": [
          {
            "file_id": record.field('image').id()
          },
          {
            "type": "image/png",
            "name": "IMAGECID",
            "content": "ZXhhbXBsZSBmaWxl"
          }
        ],
   "to": [
     {
       "email": "recipient.email@example.com",
       "name": "Recipient Name",
       "type": "to"
     }
   ]
 }
}, {
   "name": 'Object to return'
 }, {
   "responseArrived": function(res, resData){
     //... code here
   },
   "emailArrived": function(res, resData){
     //... code here
   },
   "emailEvent": function(res, resData){
     //... code here
   },
   "syncEvent": function(res, resData){
     //... code here
   }
 });
```

Where `file_id` is the ID of a file in the SLINGR app and you should send it in attachments files.


# Javascript API

The Javascript API of the mandrill package has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST` requests to the [mandrill API](API_URL_HERE) like this:
```javascript
var response = pkg.mandrill.functions.post('/whitelists/list', body)
var response = pkg.mandrill.functions.post('/whitelists/list')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/users/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.users.info.post(body)
```
---
* API URL: '/users/ping'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.users.ping.post(body)
```
---
* API URL: '/users/ping2'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.users.ping2.post(body)
```
---
* API URL: '/users/senders'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.users.senders.post(body)
```
---
* API URL: '/messages/send'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.send.post(body)
```
---
* API URL: '/messages/send-template'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.sendTemplate.post(body)
```
---
* API URL: '/messages/search'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.search.post(body)
```
---
* API URL: '/messages/search-time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.searchTimeSeries.post(body)
```
---
* API URL: '/messages/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.info.post(body)
```
---
* API URL: '/messages/content'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.content.post(body)
```
---
* API URL: '/messages/parse'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.parse.post(body)
```
---
* API URL: '/messages/send-raw'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.sendRaw.post(body)
```
---
* API URL: '/messages/list-scheduled'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.listScheduled.post(body)
```
---
* API URL: '/messages/cancel-scheduled'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.cancelScheduled.post(body)
```
---
* API URL: '/messages/reschedule'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.reschedule.post(body)
```
---
* API URL: '/tags/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.tags.list.post(body)
```
---
* API URL: '/tags/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.tags.delete.post(body)
```
---
* API URL: '/tags/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.tags.info.post(body)
```
---
* API URL: '/tags/time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.tags.timeSeries.post(body)
```
---
* API URL: '/tags/all-time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.tags.allTimeSeries.post(body)
```
---
* API URL: '/rejects/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.rejects.add.post(body)
```
---
* API URL: '/rejects/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.rejects.list.post(body)
```
---
* API URL: '/rejects/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.rejects.delete.post(body)
```
---
* API URL: '/whitelists/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.whitelists.add.post(body)
```
---
* API URL: '/whitelists/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.whitelists.list.post(body)
```
---
* API URL: '/whitelists/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.whitelists.delete.post(body)
```
---
* API URL: '/senders/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.senders.list.post(body)
```
---
* API URL: '/senders/domains'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.senders.domains.post(body)
```
---
* API URL: '/senders/add-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.senders.addDomain.post(body)
```
---
* API URL: '/senders/check-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.senders.checkDomain.post(body)
```
---
* API URL: '/senders/verify-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.senders.verifyDomain.post(body)
```
---
* API URL: '/senders/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.senders.info.post(body)
```
---
* API URL: '/senders/time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.senders.timeSeries.post(body)
```
---
* API URL: '/urls/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.urls.list.post(body)
```
---
* API URL: '/urls/search'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.urls.search.post(body)
```
---
* API URL: '/urls/time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.urls.timeSeries.post(body)
```
---
* API URL: '/urls/tracking-domains'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.urls.trackingDomains.post(body)
```
---
* API URL: '/urls/check-tracking-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.urls.checkTrackingDomain.post(body)
```
---
* API URL: '/templates/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.add.post(body)
```
---
* API URL: '/templates/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.info.post(body)
```
---
* API URL: '/templates/update'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.update.post(body)
```
---
* API URL: '/templates/publish'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.publish.post(body)
```
---
* API URL: '/templates/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.delete.post(body)
```
---
* API URL: '/templates/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.list.post(body)
```
---
* API URL: '/templates/time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.timeSeries.post(body)
```
---
* API URL: '/templates/render'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.render.post(body)
```
---
* API URL: '/webhooks/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.webhooks.list.post(body)
```
---
* API URL: '/webhooks/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.webhooks.add.post(body)
```
---
* API URL: '/webhooks/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.webhooks.info.post(body)
```
---
* API URL: '/webhooks/update'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.webhooks.update.post(body)
```
---
* API URL: '/webhooks/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.webhooks.delete.post(body)
```
---
* API URL: '/subaccounts/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.subaccounts.list.post(body)
```
---
* API URL: '/subaccounts/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.subaccounts.add.post(body)
```
---
* API URL: '/subaccounts/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.subaccounts.info.post(body)
```
---
* API URL: '/subaccounts/update'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.subaccounts.update.post(body)
```
---
* API URL: '/subaccounts/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.subaccounts.delete.post(body)
```
---
* API URL: '/subaccounts/pause'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.subaccounts.pause.post(body)
```
---
* API URL: '/subaccounts/resume'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.subaccounts.resume.post(body)
```
---
* API URL: '/inbound/domains'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.domains.post(body)
```
---
* API URL: '/inbound/add-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.addDomain.post(body)
```
---
* API URL: '/inbound/check-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.checkDomain.post(body)
```
---
* API URL: '/inbound/delete-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.deleteDomain.post(body)
```
---
* API URL: '/inbound/routes'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.routes.post(body)
```
---
* API URL: '/inbound/add-route'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.addRoute.post(body)
```
---
* API URL: '/inbound/update-route'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.updateRoute.post(body)
```
---
* API URL: '/inbound/delete-route'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.deleteRoute.post(body)
```
---
* API URL: '/inbound/send-raw'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.sendRaw.post(body)
```
---
* API URL: '/exports/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.exports.info.post(body)
```
---
* API URL: '/exports/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.exports.list.post(body)
```
---
* API URL: '/exports/rejects'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.exports.rejects.post(body)
```
---
* API URL: '/exports/whitelist'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.exports.whitelist.post(body)
```
---
* API URL: '/exports/activity'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.exports.activity.post(body)
```
---
* API URL: '/ips/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.list.post(body)
```
---
* API URL: '/ips/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.info.post(body)
```
---
* API URL: '/ips/provision'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.provision.post(body)
```
---
* API URL: '/ips/start-warmup'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.startWarmup.post(body)
```
---
* API URL: '/ips/cancel-warmup'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.cancelWarmup.post(body)
```
---
* API URL: '/ips/set-pool'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.setPool.post(body)
```
---
* API URL: '/ips/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.delete.post(body)
```
---
* API URL: '/ips/list-pools'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.listPools.post(body)
```
---
* API URL: '/ips/pool-info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.poolInfo.post(body)
```
---
* API URL: '/ips/create-pool'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.createPool.post(body)
```
---
* API URL: '/ips/delete-pool'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.deletePool.post(body)
```
---
* API URL: '/ips/check-custom-dns'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.checkCustomDns.post(body)
```
---
* API URL: '/ips/set-custom-dns'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.setCustomDns.post(body)
```
---
* API URL: '/metadata/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.metadata.list.post(body)
```
---
* API URL: '/metadata/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.metadata.add.post(body)
```
---
* API URL: '/metadata/update'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.metadata.update.post(body)
```
---
* API URL: '/metadata/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.metadata.delete.post(body)
```
---

</details>

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

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
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
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

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*


## Dependencies
* HTTP Service (Latest Version)

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
