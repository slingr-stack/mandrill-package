# Javascript API

The Javascript API of the mandrill package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `POST` requests to the [mandrill API](API_URL_HERE) like this:
```javascript
var response = pkg.mandrill.functions.post('/ips/delete-pool', body)
var response = pkg.mandrill.functions.post('/ips/delete-pool')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the package:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/exports/activity'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.exports.activity.post(body)
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
* API URL: '/inbound/add-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.addDomain.post(body)
```
---
* API URL: '/inbound/add-route'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.addRoute.post(body)
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
* API URL: '/inbound/delete-route'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.deleteRoute.post(body)
```
---
* API URL: '/inbound/domains'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.domains.post(body)
```
---
* API URL: '/inbound/routes'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.routes.post(body)
```
---
* API URL: '/inbound/send-raw'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.sendRaw.post(body)
```
---
* API URL: '/inbound/update-route'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.inbound.updateRoute.post(body)
```
---
* API URL: '/ips/cancel-warmup'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.cancelWarmup.post(body)
```
---
* API URL: '/ips/check-custom-dns'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.checkCustomDns.post(body)
```
---
* API URL: '/ips/create-pool'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.createPool.post(body)
```
---
* API URL: '/ips/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.delete.post(body)
```
---
* API URL: '/ips/delete-pool'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.deletePool.post(body)
```
---
* API URL: '/ips/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.info.post(body)
```
---
* API URL: '/ips/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.list.post(body)
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
* API URL: '/ips/provision'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.provision.post(body)
```
---
* API URL: '/ips/set-custom-dns'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.setCustomDns.post(body)
```
---
* API URL: '/ips/set-pool'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.setPool.post(body)
```
---
* API URL: '/ips/start-warmup'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.ips.startWarmup.post(body)
```
---
* API URL: '/messages/cancel-scheduled'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.cancelScheduled.post(body)
```
---
* API URL: '/messages/content'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.content.post(body)
```
---
* API URL: '/messages/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.info.post(body)
```
---
* API URL: '/messages/list-scheduled'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.listScheduled.post(body)
```
---
* API URL: '/messages/parse'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.parse.post(body)
```
---
* API URL: '/messages/reschedule'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.reschedule.post(body)
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
* API URL: '/messages/send'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.send.post(body)
```
---
* API URL: '/messages/send-raw'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.sendRaw.post(body)
```
---
* API URL: '/messages/send-template'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.messages.sendTemplate.post(body)
```
---
* API URL: '/metadata/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.metadata.add.post(body)
```
---
* API URL: '/metadata/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.metadata.delete.post(body)
```
---
* API URL: '/metadata/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.metadata.list.post(body)
```
---
* API URL: '/metadata/update'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.metadata.update.post(body)
```
---
* API URL: '/rejects/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.rejects.add.post(body)
```
---
* API URL: '/rejects/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.rejects.delete.post(body)
```
---
* API URL: '/rejects/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.rejects.list.post(body)
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
* API URL: '/senders/domains'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.senders.domains.post(body)
```
---
* API URL: '/senders/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.senders.info.post(body)
```
---
* API URL: '/senders/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.senders.list.post(body)
```
---
* API URL: '/senders/time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.senders.timeSeries.post(body)
```
---
* API URL: '/senders/verify-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.senders.verifyDomain.post(body)
```
---
* API URL: '/subaccounts/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.subaccounts.add.post(body)
```
---
* API URL: '/subaccounts/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.subaccounts.delete.post(body)
```
---
* API URL: '/subaccounts/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.subaccounts.info.post(body)
```
---
* API URL: '/subaccounts/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.subaccounts.list.post(body)
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
* API URL: '/subaccounts/update'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.subaccounts.update.post(body)
```
---
* API URL: '/tags/all-time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.tags.allTimeSeries.post(body)
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
* API URL: '/tags/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.tags.list.post(body)
```
---
* API URL: '/tags/time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.tags.timeSeries.post(body)
```
---
* API URL: '/templates/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.add.post(body)
```
---
* API URL: '/templates/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.delete.post(body)
```
---
* API URL: '/templates/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.info.post(body)
```
---
* API URL: '/templates/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.list.post(body)
```
---
* API URL: '/templates/publish'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.publish.post(body)
```
---
* API URL: '/templates/render'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.render.post(body)
```
---
* API URL: '/templates/time-series'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.timeSeries.post(body)
```
---
* API URL: '/templates/update'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.templates.update.post(body)
```
---
* API URL: '/urls/check-tracking-domain'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.urls.checkTrackingDomain.post(body)
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
* API URL: '/webhooks/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.webhooks.add.post(body)
```
---
* API URL: '/webhooks/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.webhooks.delete.post(body)
```
---
* API URL: '/webhooks/info'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.webhooks.info.post(body)
```
---
* API URL: '/webhooks/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.webhooks.list.post(body)
```
---
* API URL: '/webhooks/update'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.webhooks.update.post(body)
```
---
* API URL: '/whitelists/add'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.whitelists.add.post(body)
```
---
* API URL: '/whitelists/delete'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.whitelists.delete.post(body)
```
---
* API URL: '/whitelists/list'
* HTTP Method: 'POST'
```javascript
pkg.mandrill.functions.whitelists.list.post(body)
```
---

</details>

