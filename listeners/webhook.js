/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookMandrill = {
    label: 'Catch HTTP mandrill events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/mandrill',
        }
    },
    callback: function(event) {
        sys.logs.info('Received Mandrill webhook. Processing and triggering a package event.');
        sys.logs.debug("Mandrill event object: "+ JSON.stringify(event));
        sys.logs.info('Triggering mandrill event [webhook]');
        sys.events.triggerEvent('mandrill:webhook', event.data);
    }
};
