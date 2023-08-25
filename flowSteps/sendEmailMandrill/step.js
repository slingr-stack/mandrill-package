/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;


step.sendEmailMandrill = function (inputs) {

	var inputs = {
		from: inputs.from || "",
		subject: inputs.subject || "",
		message: inputs.message || "",
		to: inputs.to || ""
	};

	var msg = {
		"key": config.get("apiKey"),
		"message": {
			"from_name": inputs.from,
			"subject": inputs.subject,
			"html": inputs.message,
			"from_email": config.get("account"),
			"headers":{},
			"to": [
				{
					"email": inputs.to,
					"type": "to"
				}
			]
		}
	};

	var options = {
		url: config.get("url") + "/messages/send",
		body: msg
	}

	return httpService.post(options);

};
