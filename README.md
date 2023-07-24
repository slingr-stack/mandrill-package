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

# Overview

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

# Overview

# Javascript API

The Javascript API of the mandrill package has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST` requests to the [mandrill API](API_URL_HERE) like this:
```javascript
var response = pkg.mandrill.post('/whitelists/list', body)
var response = pkg.mandrill.post('/whitelists/list')
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
pkg.mandrill.users.info.post(body)
```
---
* API URL: '/users/ping'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.users.ping.post(body)
```
---
* API URL: '/users/ping2'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.users.ping2.post(body)
```
---
* API URL: '/users/senders'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.users.senders.post(body)
```
---
* API URL: '/messages/send'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.messages.send.post(body)
```
---
* API URL: '/messages/send-template'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.messages.sendTemplate.post(body)
```
---
* API URL: '/messages/search'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.messages.search.post(body)
```
---
* API URL: '/messages/search-time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.messages.searchTimeSeries.post(body)
```
---
* API URL: '/messages/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.messages.info.post(body)
```
---
* API URL: '/messages/content'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.messages.content.post(body)
```
---
* API URL: '/messages/parse'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.messages.parse.post(body)
```
---
* API URL: '/messages/send-raw'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.messages.sendRaw.post(body)
```
---
* API URL: '/messages/list-scheduled'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.messages.listScheduled.post(body)
```
---
* API URL: '/messages/cancel-scheduled'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.messages.cancelScheduled.post(body)
```
---
* API URL: '/messages/reschedule'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.messages.reschedule.post(body)
```
---
* API URL: '/tags/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.tags.list.post(body)
```
---
* API URL: '/tags/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.tags.delete.post(body)
```
---
* API URL: '/tags/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.tags.info.post(body)
```
---
* API URL: '/tags/time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.tags.timeSeries.post(body)
```
---
* API URL: '/tags/all-time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.tags.allTimeSeries.post(body)
```
---
* API URL: '/rejects/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.rejects.add.post(body)
```
---
* API URL: '/rejects/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.rejects.list.post(body)
```
---
* API URL: '/rejects/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.rejects.delete.post(body)
```
---
* API URL: '/whitelists/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.whitelists.add.post(body)
```
---
* API URL: '/whitelists/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.whitelists.list.post(body)
```
---
* API URL: '/whitelists/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.whitelists.delete.post(body)
```
---
* API URL: '/senders/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.senders.list.post(body)
```
---
* API URL: '/senders/domains'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.senders.domains.post(body)
```
---
* API URL: '/senders/add-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.senders.addDomain.post(body)
```
---
* API URL: '/senders/check-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.senders.checkDomain.post(body)
```
---
* API URL: '/senders/verify-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.senders.verifyDomain.post(body)
```
---
* API URL: '/senders/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.senders.info.post(body)
```
---
* API URL: '/senders/time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.senders.timeSeries.post(body)
```
---
* API URL: '/urls/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.urls.list.post(body)
```
---
* API URL: '/urls/search'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.urls.search.post(body)
```
---
* API URL: '/urls/time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.urls.timeSeries.post(body)
```
---
* API URL: '/urls/tracking-domains'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.urls.trackingDomains.post(body)
```
---
* API URL: '/urls/check-tracking-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.urls.checkTrackingDomain.post(body)
```
---
* API URL: '/templates/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.templates.add.post(body)
```
---
* API URL: '/templates/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.templates.info.post(body)
```
---
* API URL: '/templates/update'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.templates.update.post(body)
```
---
* API URL: '/templates/publish'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.templates.publish.post(body)
```
---
* API URL: '/templates/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.templates.delete.post(body)
```
---
* API URL: '/templates/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.templates.list.post(body)
```
---
* API URL: '/templates/time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.templates.timeSeries.post(body)
```
---
* API URL: '/templates/render'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.templates.render.post(body)
```
---
* API URL: '/webhooks/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.webhooks.list.post(body)
```
---
* API URL: '/webhooks/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.webhooks.add.post(body)
```
---
* API URL: '/webhooks/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.webhooks.info.post(body)
```
---
* API URL: '/webhooks/update'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.webhooks.update.post(body)
```
---
* API URL: '/webhooks/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.webhooks.delete.post(body)
```
---
* API URL: '/subaccounts/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.subaccounts.list.post(body)
```
---
* API URL: '/subaccounts/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.subaccounts.add.post(body)
```
---
* API URL: '/subaccounts/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.subaccounts.info.post(body)
```
---
* API URL: '/subaccounts/update'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.subaccounts.update.post(body)
```
---
* API URL: '/subaccounts/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.subaccounts.delete.post(body)
```
---
* API URL: '/subaccounts/pause'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.subaccounts.pause.post(body)
```
---
* API URL: '/subaccounts/resume'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.subaccounts.resume.post(body)
```
---
* API URL: '/inbound/domains'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.inbound.domains.post(body)
```
---
* API URL: '/inbound/add-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.inbound.addDomain.post(body)
```
---
* API URL: '/inbound/check-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.inbound.checkDomain.post(body)
```
---
* API URL: '/inbound/delete-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.inbound.deleteDomain.post(body)
```
---
* API URL: '/inbound/routes'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.inbound.routes.post(body)
```
---
* API URL: '/inbound/add-route'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.inbound.addRoute.post(body)
```
---
* API URL: '/inbound/update-route'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.inbound.updateRoute.post(body)
```
---
* API URL: '/inbound/delete-route'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.inbound.deleteRoute.post(body)
```
---
* API URL: '/inbound/send-raw'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.inbound.sendRaw.post(body)
```
---
* API URL: '/exports/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.exports.info.post(body)
```
---
* API URL: '/exports/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.exports.list.post(body)
```
---
* API URL: '/exports/rejects'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.exports.rejects.post(body)
```
---
* API URL: '/exports/whitelist'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.exports.whitelist.post(body)
```
---
* API URL: '/exports/activity'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.exports.activity.post(body)
```
---
* API URL: '/ips/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.ips.list.post(body)
```
---
* API URL: '/ips/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.ips.info.post(body)
```
---
* API URL: '/ips/provision'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.ips.provision.post(body)
```
---
* API URL: '/ips/start-warmup'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.ips.startWarmup.post(body)
```
---
* API URL: '/ips/cancel-warmup'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.ips.cancelWarmup.post(body)
```
---
* API URL: '/ips/set-pool'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.ips.setPool.post(body)
```
---
* API URL: '/ips/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.ips.delete.post(body)
```
---
* API URL: '/ips/list-pools'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.ips.listPools.post(body)
```
---
* API URL: '/ips/pool-info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.ips.poolInfo.post(body)
```
---
* API URL: '/ips/create-pool'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.ips.createPool.post(body)
```
---
* API URL: '/ips/delete-pool'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.ips.deletePool.post(body)
```
---
* API URL: '/ips/check-custom-dns'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.ips.checkCustomDns.post(body)
```
---
* API URL: '/ips/set-custom-dns'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.ips.setCustomDns.post(body)
```
---
* API URL: '/metadata/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.metadata.list.post(body)
```
---
* API URL: '/metadata/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.metadata.add.post(body)
```
---
* API URL: '/metadata/update'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.metadata.update.post(body)
```
---
* API URL: '/metadata/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.metadata.delete.post(body)
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
