/****************************************************
 Dependencies
 ****************************************************/

let httpReference = dependencies.http;

let httpDependency = {
    post: httpReference.post,
};

let httpService = {};

/**
 *
 * Handles a request with retry from the platform side.
 */
function handleRequestWithRetry(requestFn, options, callbackData, callbacks) {
    return requestFn(options, callbackData, callbacks);
}

function createWrapperFunction(requestFn) {
    return function(options, callbackData, callbacks) {
        return handleRequestWithRetry(requestFn, options, callbackData, callbacks);
    };
}

for (let key in httpDependency) {
    if (typeof httpDependency[key] === 'function') httpService[key] = createWrapperFunction(httpDependency[key]);
}

/****************************************************
 Helpers
 ****************************************************/

exports.messages = {};

exports.messages.send = {};

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

    if (httpOptions.message !== null) {
        httpOptions.message.from_email = config.get("account");
        httpOptions.message.headers = {}
    }

    sys.logs.debug('[mandrill] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);

    return httpService.post(Mandrill(options));
};

/****************************************************
 Public API - Generic Functions
 ****************************************************/

/**
 * Sends an HTTP POST request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the POST request to.
 * @param {object} httpOptions  - The options to be included in the POST request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the POST request. [optional]
 * @return {object}             - The response of the POST request.
 */
exports.post = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.post(Mandrill(options), callbackData, callbacks);
};

/****************************************************
 Private helpers
 ****************************************************/

function parse (url, pathVariables){
    var regex = /{([^}]*)}/g;
    if (!url.match(regex)){
        return url;
    }
    if(!pathVariables){
        sys.logs.error('No path variables have been received and the url contains curly brackets\'{}\'');
        throw new Error('Error please contact support.');
    }
    url = url.replace(regex, function(m, i) {
        return pathVariables[i] ? pathVariables[i] : m;
    })
    return url;
}

function checkHttpOptions (path, options) {
    options = options || {};
    if (!!path) {
        if (isObject(path)) {
            // take the 'path' parameter as the options
            options = path || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contain the http package format
                options.path = path;
            } else {
                // create html package
                options = {
                    path: path,
                    body: options
                }
            }
        }
    }
    return options;
}

function isObject (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

let stringType = Function.prototype.call.bind(Object.prototype.toString)

/****************************************************
 Configurator
 ****************************************************/

let Mandrill = function (options) {
    options = options || {};
    options= setApiUri(options);
    options= setRequestHeaders(options);
    options = setRequestBody(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    let API_URL = config.get("MANDRILL_API_BASE_URL");
    let url = options.path || "";
    options.url = API_URL + url;
    sys.logs.debug('[mandrill] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    let headers = options.headers || {};
    headers = mergeJSON(headers, {"Content-Type": "application/json"});

    options.headers = headers;
    return options;
}

function setRequestBody(options) {
    let body = options.body || {};
    body.key = body.key || config.get("apiKey");
    options.body = body;
    return options;
}

function mergeJSON (json1, json2) {
    const result = {};
    let key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}
