/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.sendEmailMandrill = function (inputs) {

	var inputsLogic = {
		from: inputs.from || "",
		subject: inputs.subject || "",
		message: inputs.message || "",
		to: inputs.to || ""
	};

	var msg = {
		"key": config.get("apiKey"),
		"message": {
			"from_name": inputsLogic.from,
			"subject": inputsLogic.subject,
			"html": inputsLogic.message,
			"from_email": config.get("account"),
			"headers":{},
			"to": [
				{
					"email": inputsLogic.to,
					"type": "to"
				}
			]
		}
	};

	var options = {
		url: config.get("url") + "/messages/send",
		body: msg
	}

	options= setRequestHeaders(options);
	options = setRequestBody(options);

	return httpService.post(options);

};

function setRequestHeaders(options) {
	var headers = options.headers || {};
	headers = mergeJSON(headers, {"Content-Type": "application/json"});

	options.headers = headers;
	return options;
}

function setRequestBody(options) {
	var body = options.body || {};
	body.key = body.key || config.get("apiKey");
	options.body = body;
	return options;
}

function mergeJSON (json1, json2) {
	var result = {};
	var key;
	for (key in json1) {
		if(json1.hasOwnProperty(key)) result[key] = json1[key];
	}
	for (key in json2) {
		if(json2.hasOwnProperty(key)) result[key] = json2[key];
	}
	return result;
}
