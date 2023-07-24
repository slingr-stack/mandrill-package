/****************************************************
 Dependencies
 ****************************************************/

var httpReference = dependencies.http;

var httpDependency = {
    get: httpReference.get,
    post: httpReference.post,
    put: httpReference.put,
    patch: httpReference.patch,
    delete: httpReference.delete,
    head: httpReference.head,
    options: httpReference.options
};
var httpService = {};

function handleRequestWithRetry(requestFn, options, callbackData, callbacks) {
    try {
        return requestFn(options, callbackData, callbacks);
    } catch (error) {
        sys.logs.error(JSON.stringify(error));
        sys.logs.info("[Mandrill] Handling request...");
    }
}

function createWrapperFunction(requestFn) {
    return function(options, callbackData, callbacks) {
        return handleRequestWithRetry(requestFn, options, callbackData, callbacks);
    };
}

for (var key in httpDependency) {
    if (typeof httpDependency[key] === 'function') httpService[key] = createWrapperFunction(httpDependency[key]);
}


/****************************************************
 Helpers
 ****************************************************/

exports.users = {};

exports.users.info = {};

exports.users.ping = {};

exports.users.ping2 = {};

exports.users.senders = {};

exports.messages = {};

exports.messages.send = {};

exports.messages.sendTemplate = {};

exports.messages.search = {};

exports.messages.searchTimeSeries = {};

exports.messages.info = {};

exports.messages.content = {};

exports.messages.parse = {};

exports.messages.sendRaw = {};

exports.messages.listScheduled = {};

exports.messages.cancelScheduled = {};

exports.messages.reschedule = {};

exports.tags = {};

exports.tags.list = {};

exports.tags.delete = {};

exports.tags.info = {};

exports.tags.timeSeries = {};

exports.tags.allTimeSeries = {};

exports.rejects = {};

exports.rejects.add = {};

exports.rejects.list = {};

exports.rejects.delete = {};

exports.whitelists = {};

exports.whitelists.add = {};

exports.whitelists.list = {};

exports.whitelists.delete = {};

exports.senders = {};

exports.senders.list = {};

exports.senders.domains = {};

exports.senders.addDomain = {};

exports.senders.checkDomain = {};

exports.senders.verifyDomain = {};

exports.senders.info = {};

exports.senders.timeSeries = {};

exports.urls = {};

exports.urls.list = {};

exports.urls.search = {};

exports.urls.timeSeries = {};

exports.urls.trackingDomains = {};

exports.urls.checkTrackingDomain = {};

exports.templates = {};

exports.templates.add = {};

exports.templates.info = {};

exports.templates.update = {};

exports.templates.publish = {};

exports.templates.delete = {};

exports.templates.list = {};

exports.templates.timeSeries = {};

exports.templates.render = {};

exports.webhooks = {};

exports.webhooks.list = {};

exports.webhooks.add = {};

exports.webhooks.info = {};

exports.webhooks.update = {};

exports.webhooks.delete = {};

exports.subaccounts = {};

exports.subaccounts.list = {};

exports.subaccounts.add = {};

exports.subaccounts.info = {};

exports.subaccounts.update = {};

exports.subaccounts.delete = {};

exports.subaccounts.pause = {};

exports.subaccounts.resume = {};

exports.inbound = {};

exports.inbound.domains = {};

exports.inbound.addDomain = {};

exports.inbound.checkDomain = {};

exports.inbound.deleteDomain = {};

exports.inbound.routes = {};

exports.inbound.addRoute = {};

exports.inbound.updateRoute = {};

exports.inbound.deleteRoute = {};

exports.inbound.sendRaw = {};

exports.exports = {};

exports.exports.info = {};

exports.exports.list = {};

exports.exports.rejects = {};

exports.exports.whitelist = {};

exports.exports.activity = {};

exports.ips = {};

exports.ips.list = {};

exports.ips.info = {};

exports.ips.provision = {};

exports.ips.startWarmup = {};

exports.ips.cancelWarmup = {};

exports.ips.setPool = {};

exports.ips.delete = {};

exports.ips.listPools = {};

exports.ips.poolInfo = {};

exports.ips.createPool = {};

exports.ips.deletePool = {};

exports.ips.checkCustomDns = {};

exports.ips.setCustomDns = {};

exports.metadata = {};

exports.metadata.list = {};

exports.metadata.add = {};

exports.metadata.update = {};

exports.metadata.delete = {};

exports.users.info.post = function(httpOptions) {
    var url = parse('/users/info');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.users.ping.post = function(httpOptions) {
    var url = parse('/users/ping');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.users.ping2.post = function(httpOptions) {
    var url = parse('/users/ping2');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.users.senders.post = function(httpOptions) {
    var url = parse('/users/senders');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.messages.send.post = function(httpOptions) {
    var url = parse('/messages/send');

    if (httpOptions.message !== null) {
        httpOptions.message.from_email = config.get("account");
        httpOptions.message.headers = {}
    }

    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);

    return httpService.post(Mandrill(options));
};

exports.messages.sendTemplate.post = function(httpOptions) {
    var url = parse('/messages/send-template');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.messages.search.post = function(httpOptions) {
    var url = parse('/messages/search');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.messages.searchTimeSeries.post = function(httpOptions) {
    var url = parse('/messages/search-time-series');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.messages.info.post = function(httpOptions) {
    var url = parse('/messages/info');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.messages.content.post = function(httpOptions) {
    var url = parse('/messages/content');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.messages.parse.post = function(httpOptions) {
    var url = parse('/messages/parse');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.messages.sendRaw.post = function(httpOptions) {
    var url = parse('/messages/send-raw');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.messages.listScheduled.post = function(httpOptions) {
    var url = parse('/messages/list-scheduled');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.messages.cancelScheduled.post = function(httpOptions) {
    var url = parse('/messages/cancel-scheduled');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.messages.reschedule.post = function(httpOptions) {
    var url = parse('/messages/reschedule');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.tags.list.post = function(httpOptions) {
    var url = parse('/tags/list');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.tags.delete.post = function(httpOptions) {
    var url = parse('/tags/delete');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.tags.info.post = function(httpOptions) {
    var url = parse('/tags/info');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.tags.timeSeries.post = function(httpOptions) {
    var url = parse('/tags/time-series');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.tags.allTimeSeries.post = function(httpOptions) {
    var url = parse('/tags/all-time-series');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.rejects.add.post = function(httpOptions) {
    var url = parse('/rejects/add');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.rejects.list.post = function(httpOptions) {
    var url = parse('/rejects/list');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.rejects.delete.post = function(httpOptions) {
    var url = parse('/rejects/delete');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.whitelists.add.post = function(httpOptions) {
    var url = parse('/whitelists/add');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.whitelists.list.post = function(httpOptions) {
    var url = parse('/whitelists/list');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.whitelists.delete.post = function(httpOptions) {
    var url = parse('/whitelists/delete');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.senders.list.post = function(httpOptions) {
    var url = parse('/senders/list');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.senders.domains.post = function(httpOptions) {
    var url = parse('/senders/domains');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.senders.addDomain.post = function(httpOptions) {
    var url = parse('/senders/add-domain');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.senders.checkDomain.post = function(httpOptions) {
    var url = parse('/senders/check-domain');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.senders.verifyDomain.post = function(httpOptions) {
    var url = parse('/senders/verify-domain');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.senders.info.post = function(httpOptions) {
    var url = parse('/senders/info');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.senders.timeSeries.post = function(httpOptions) {
    var url = parse('/senders/time-series');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.urls.list.post = function(httpOptions) {
    var url = parse('/urls/list');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.urls.search.post = function(httpOptions) {
    var url = parse('/urls/search');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.urls.timeSeries.post = function(httpOptions) {
    var url = parse('/urls/time-series');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.urls.trackingDomains.post = function(httpOptions) {
    var url = parse('/urls/tracking-domains');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.urls.checkTrackingDomain.post = function(httpOptions) {
    var url = parse('/urls/check-tracking-domain');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.templates.add.post = function(httpOptions) {
    var url = parse('/templates/add');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.templates.info.post = function(httpOptions) {
    var url = parse('/templates/info');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.templates.update.post = function(httpOptions) {
    var url = parse('/templates/update');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.templates.publish.post = function(httpOptions) {
    var url = parse('/templates/publish');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.templates.delete.post = function(httpOptions) {
    var url = parse('/templates/delete');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.templates.list.post = function(httpOptions) {
    var url = parse('/templates/list');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.templates.timeSeries.post = function(httpOptions) {
    var url = parse('/templates/time-series');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.templates.render.post = function(httpOptions) {
    var url = parse('/templates/render');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.webhooks.list.post = function(httpOptions) {
    var url = parse('/webhooks/list');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.webhooks.add.post = function(httpOptions) {
    var url = parse('/webhooks/add');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.webhooks.info.post = function(httpOptions) {
    var url = parse('/webhooks/info');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.webhooks.update.post = function(httpOptions) {
    var url = parse('/webhooks/update');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.webhooks.delete.post = function(httpOptions) {
    var url = parse('/webhooks/delete');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.subaccounts.list.post = function(httpOptions) {
    var url = parse('/subaccounts/list');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.subaccounts.add.post = function(httpOptions) {
    var url = parse('/subaccounts/add');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.subaccounts.info.post = function(httpOptions) {
    var url = parse('/subaccounts/info');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.subaccounts.update.post = function(httpOptions) {
    var url = parse('/subaccounts/update');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.subaccounts.delete.post = function(httpOptions) {
    var url = parse('/subaccounts/delete');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.subaccounts.pause.post = function(httpOptions) {
    var url = parse('/subaccounts/pause');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.subaccounts.resume.post = function(httpOptions) {
    var url = parse('/subaccounts/resume');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.inbound.domains.post = function(httpOptions) {
    var url = parse('/inbound/domains');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.inbound.addDomain.post = function(httpOptions) {
    var url = parse('/inbound/add-domain');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.inbound.checkDomain.post = function(httpOptions) {
    var url = parse('/inbound/check-domain');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.inbound.deleteDomain.post = function(httpOptions) {
    var url = parse('/inbound/delete-domain');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.inbound.routes.post = function(httpOptions) {
    var url = parse('/inbound/routes');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.inbound.addRoute.post = function(httpOptions) {
    var url = parse('/inbound/add-route');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.inbound.updateRoute.post = function(httpOptions) {
    var url = parse('/inbound/update-route');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.inbound.deleteRoute.post = function(httpOptions) {
    var url = parse('/inbound/delete-route');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.inbound.sendRaw.post = function(httpOptions) {
    var url = parse('/inbound/send-raw');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.exports.info.post = function(httpOptions) {
    var url = parse('/exports/info');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.exports.list.post = function(httpOptions) {
    var url = parse('/exports/list');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.exports.rejects.post = function(httpOptions) {
    var url = parse('/exports/rejects');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.exports.whitelist.post = function(httpOptions) {
    var url = parse('/exports/whitelist');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.exports.activity.post = function(httpOptions) {
    var url = parse('/exports/activity');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.ips.list.post = function(httpOptions) {
    var url = parse('/ips/list');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.ips.info.post = function(httpOptions) {
    var url = parse('/ips/info');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.ips.provision.post = function(httpOptions) {
    var url = parse('/ips/provision');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.ips.startWarmup.post = function(httpOptions) {
    var url = parse('/ips/start-warmup');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.ips.cancelWarmup.post = function(httpOptions) {
    var url = parse('/ips/cancel-warmup');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.ips.setPool.post = function(httpOptions) {
    var url = parse('/ips/set-pool');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.ips.delete.post = function(httpOptions) {
    var url = parse('/ips/delete');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.ips.listPools.post = function(httpOptions) {
    var url = parse('/ips/list-pools');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.ips.poolInfo.post = function(httpOptions) {
    var url = parse('/ips/pool-info');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.ips.createPool.post = function(httpOptions) {
    var url = parse('/ips/create-pool');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.ips.deletePool.post = function(httpOptions) {
    var url = parse('/ips/delete-pool');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.ips.checkCustomDns.post = function(httpOptions) {
    var url = parse('/ips/check-custom-dns');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.ips.setCustomDns.post = function(httpOptions) {
    var url = parse('/ips/set-custom-dns');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.metadata.list.post = function(httpOptions) {
    var url = parse('/metadata/list');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.metadata.add.post = function(httpOptions) {
    var url = parse('/metadata/add');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.metadata.update.post = function(httpOptions) {
    var url = parse('/metadata/update');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

exports.metadata.delete.post = function(httpOptions) {
    var url = parse('/metadata/delete');
    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options));
};

/****************************************************
 Public API - Generic Functions
 ****************************************************/

exports.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mandrill(options), callbackData, callbacks);
};

exports.post = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mandrill(options), callbackData, callbacks);
};

exports.put = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Mandrill(options), callbackData, callbacks);
};

exports.patch = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mandrill(options), callbackData, callbacks);
};

exports.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mandrill(options), callbackData, callbacks);
};

exports.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.head(Mandrill(options), callbackData, callbacks);
};

exports.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.options(Mandrill(options), callbackData, callbacks);
};

exports.utils = {};

exports.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

exports.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

exports.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

exports.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

/****************************************************
 Private helpers
 ****************************************************/

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}

/****************************************************
 Constants
 ****************************************************/


var MANDRILL_API_BASE_URL = config.get("url"); // TODO: Set the base url
var API_URL = MANDRILL_API_BASE_URL+""; // TODO: Set the base url for the api

/****************************************************
 Configurator
 ****************************************************/

var Mandrill = function (options) {
    options = options || {};
    options = setApiUri(options);
    options = setRequestHeaders(options);
    options = setRequestBody(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    var url = options.path || "";
    options.url = API_URL + url;
    sys.logs.debug('[mandrill] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    var headers = options.headers || {};
    headers = mergeJSON(headers, {"Content-Type": "application/json"});

    options.headers = headers;
    return options;
}

function mergeJSON (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

function setRequestBody(options) {
    var body = options.body || {};
    body.key = body.key || config.get("apiKey");
    options.body = body;
    return options;
}