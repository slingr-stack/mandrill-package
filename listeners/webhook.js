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
        sys.logs.info('Received Mandrill webhook. Processing and triggering a package event.', event);
        sys.events.triggerEvent('mandrill:webhook', event.data);
    }
};
