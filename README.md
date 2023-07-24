# Overview

The "SLINGR Helpers Generator" is a simple CLI based module that is used to easily generate the "helpers" file for SLINGR endpoints.  

Some features are:

- Conversion of URL to camelCase (eg. dashes, underscore).
- Group helpers with similar functionalities with "prefixes".
- Add custom names (suffixes) to helper functions.
- Omit parts of the URL that you don't want on the final helper.
- Automatic numbering of repeated URL parameters.
- Supporting GET, PUT, PATCH, POST, HEAD, OPTIONS, CONNECT, & TRACE methods.
- Generation of http generic helpers.
- Generation of helpers documentation.

# Installation

To install the module, just run the following command in the command line:

```
npm install slingr-helpgen
```

If you want to install it globally you can run this:
```
npm install -g slingr-helpgen
```

# How to use

## Configuration File
This module will receive a ".json" file as parameter that must be located on the ``gen`` folder on the endpoint project.
The module will read this file and based on the content, will generate the helpers for the endpoint.

For paths that repeat the same pattern:
Be careful, the paths must have an order, from lesser amount of variables to greater amount (paths without variables should be first in the .json file).

The file must look like this:
```json
{
	"fileName": "", //Optional, the name of the generated helpers file.
	"endpointName": "", //Required, the name of the endpoint, used to generate some logs with the endpoint name.
    "omittableUrlParts": [ //Optional, Sections of the url that have to be omitted (or replaced) on the helper generation.
		"someString", //If specified as a string, it will be ommited from the helper.
		{"replace":"someString","with":"someOtherString"} //If specified as object, it will replace the part with the value provided.
	], 
	"apiDescriptors": [
		{
			"prefix": "somePrefix", //Optional, this will be added at the beggining of the helper, can be used to group similar calls.
			"suffix": "someNameOfYourLikeness", //Optional, this will be added at the end of the helper. If empty or not declared, it will have the URL segments only.
			"method": "GET/PUT/PATCH/POST/HEAD/OPTIONS/DELETE", //Required, method of the HTTP Request.
			"url": "/someUrlPart/:someParam/someOtherUrlPart", //Required, url of the endpoint without the "base". Query params must not be defined here, only URL params.
            "queryParams": ["param2", "param3"], //Optional, query variable params to be added to the helper.
			"omittableUrlParts": ["someString",{"replace":"someString","with":"someOtherString"}], //Optional, The same as the top level one, but specific to only this api entry. This one will override the top level one.
			"acceptsCallbacks": false, //Optional. If this field is true it will add the "callbackData" and "callback" parameters to the helper to allow the managment of events.
			"docsLinks": ["someURL.com"], //Optional. These links will be inserted in the helpers documentation for fast reference to the original API docs.
            "injectedHelper": false //Optional. If this field is true, it will not generate the helper, but it will inject the code from gen/injection.js.
		}
	]
}
```
You can also generate this file by running the following command at the root folder of the endpoint project:
```
slingr-helpgen --exampleFile
```
Or 
```
slingr-helpgen -f
```
This will generate a template file called ``exampleGeneratorConfig.json`` similar to the above one in the ``gen`` folder (if the folder does not exist, it will generate it too).

## Generating helpers 
You call the module by entering the following command:
```
slingr-helpgen
``` 
This will generate several files on the ``scripts`` folder (it will also create the folder if it doesn't exist):
1. A ".js" file with name of ``fileName`` value defined in the configuration file.
2. A `helpersDocs.md` file with some "copy-pastable" documentations of the endpoint helpers. (You can avoid this by passing `--noDocs` or `-n` parameter);
3. If not existing, it will generate a file called `http-generic-helpers.js`. This is a generic file that contains the helpers used by the HTTP endpoint to handle the requests.

# Generation Examples
If you run the generator with a ".json" file like this:
```json
{
	"fileName": "testEndpoint-helpers",
	"endpointName": "testEndpoint",
    "omittableUrlParts": ["v1"],
	"apiDescriptors": [
		{
			"prefix": "", 
			"suffix": "",
			"method": "GET", 
			"url": "/v2/patients/:patientId/read-patient"
		},
		{
			"prefix": "", 
			"suffix": "",
			"method": "GET", 
			"url": "/v2/orders/:id/reports/:id",
			"acceptsCallbacks": true
		},
		{
			"prefix": "updates", 
			"suffix": "",
			"method": "PUT", 
			"url": "/v2/orders/:orderId/tests"
		},
		{
			"prefix": "", 
			"suffix": "updateOrder",
			"method": "PATCH", 
			"omittableUrlParts": [{"replace":"v1","with":"oldApi"}],
			"url": "/v1/orders/:orderId"
		},
		{
			"prefix": "creations", 
			"suffix": "new-patient",
			"method": "POST", 
			"url": "/v1/patients"
		}
	]
}
```
You will generate a file named "testEndpoint-helpers.js" on the ``gen`` folder with the following code:
```javascript
endpoint.v2 = {};

endpoint.v2.patients = {};

endpoint.v2.patients.readPatient = function(patientId, httpOptions) {
	if (!patientId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [patientId].');
		return;
	}
	var url = parse('/v2/patients/:patientId/read-patient', [patientId]);
	sys.logs.debug('[testEndpoint] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.v2.orders = {};

endpoint.v2.orders.reports = function(id, id2, httpOptions, callbackData, callbacks) {
	if (!orderId || !reportId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v2/orders/:orderId/reports/:reportId', [id, id2]);
	sys.logs.debug('[testEndpoint] GET from: ' + url);
	return endpoint.get(url, httpOptions, callbackData, callbacks);
};

endpoint.updates = {};

endpoint.updates.v2 = {};

endpoint.updates.v2.orders = {};

endpoint.updates.v2.orders.tests = function(orderId, httpOptions) {
	if (!orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [orderId].');
		return;
	}
	var url = parse('/v2/orders/:orderId/tests', [orderId]);
	sys.logs.debug('[testEndpoint] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.orders = {};

endpoint.orders.updateOrder = function(orderId, httpOptions) {
	if (!orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [orderId].');
		return;
	}
	var url = parse('/v1/orders/:orderId', [orderId]);
	sys.logs.debug('[testEndpoint] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.creations = {};

endpoint.creations.oldApi = {};

endpoint.creations.oldApi.patients = {};

endpoint.creations.oldApi.patients.newPatient = function(httpOptions) {
	var url = parse('/v1/patients');
	sys.logs.debug('[testEndpoint] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
```
As you can see, each ``apiDescriptor`` object generates one helper. 

## Example 1
You can see how the following descriptor:
```json
{
	"prefix": "", 
	"suffix": "",
	"method": "GET", 
	"url": "/v2/patients/:patientId/read-patient"
}
```
Generates the following helper:
```js
endpoint.v2.patients.readPatient = function(patientId, httpOptions) {
	if (!patientId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [patientId].');
		return;
	}
	var url = parse('/v2/patients/:patientId/read-patient', [patientId]);
	sys.logs.debug('[testEndpoint] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
```
Diving a little bit into how the "apiDescriptor" was converted:
1. Note how the helper does not have prefix nor suffix so the whole name is derived from the URL. 
2. Note that the "read-patient" part of the url got converted to camelCase.
3. Note that the URL parameters are not included in the helper name declaration, but are expected as arguments in the function.
4. Note how the `method` and `endpointName` are also used in the helper's function.
5. Lastly, you can see that the function also receives a parameter called "httpOptions", this is an optional parameter for **every helper** that specifies some options for the HTTP request. For more information about what can be sent on this parameter check the [HTTP Endpoint Documentation - Javascript API](https://github.com/slingr-stack/http-endpoint#javascript-api).

## Example 2
For the second one:
```json
{
	"prefix": "", 
	"suffix": "",
	"method": "GET", 
	"url": "/v2/orders/:id/reports/:id",
	"acceptsCallbacks": true
}
```
You get:
```js
endpoint.v2.orders.reports = function(id, id2, httpOptions, callbackData, callbacks) {
	if (!orderId || !reportId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v2/orders/:orderId/reports/:reportId', [id, id2]);
	sys.logs.debug('[testEndpoint] GET from: ' + url);
	return endpoint.get(url, httpOptions, callbackData, callbacks);
};
```
Here two things happened:
1. First, see how additional parameters to accept a callback are generated:
When you add the `acceptsCallbacks` property on the "apiDescriptor" you will see that the helper generated will receive two additional parameters: `callbackData` and `callbacks`. You can check the [HTTP Endpoint Documentation - Downloading Files](https://github.com/slingr-stack/http-endpoint#downloading-files) to see an example of callbacks being used to download files.
2. See how the URL specified in the apiDescriptor has two URL params that are the same (`:id`). The tool will number them in increasing integers to differentiate them on the function parameters.

*NOTE: The `parse()` function will parse the URL params in order of appearance, so the arguments passed do not need to match the name of the URL params, they just need to be passed in the correct order.*

## Example 3
And for the third one:
```json
{
	"prefix": "updates", 
	"suffix": "",
	"method": "PUT", 
	"url": "/v2/orders/:orderId/tests"
}
```
You get:
```js
endpoint.updates.v2.orders.tests = function(orderId, httpOptions) {
	if (!orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [orderId].');
		return;
	}
	var url = parse('/v2/orders/:orderId/tests', [orderId]);
	sys.logs.debug('[testEndpoint] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};
```
Note that the prefix ```updates``` is added in the first part of the helper.

## Example 4
And for the fourth one:
```json
{
	"prefix": "", 
	"suffix": "updateOrder",
	"method": "PATCH", 
	"url": "/v1/orders/:orderId"
}
```
You get:
```js
endpoint.orders.updateOrder = function(orderId, httpOptions) {
	if (!orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [orderId].');
		return;
	}
	var url = parse('/v1/orders/:orderId', [orderId]);
	sys.logs.debug('[testEndpoint] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
```
Here two things happened:
1. Note that the suffix is added at the end of the helper.
2. Note that we had the property `"omittableUrlParts"` on the root of the JSON file. What this does is "omit" the matching parts of the url on the helper function definition. As we got `["v1"]` on the value, that part was omitted on the helper.

## Example 5
Lastly, you have the apiDescriptor:
```json
{
	"prefix": "creations", 
	"suffix": "new-patient",
	"method": "POST", 
	"omittableUrlParts": [{"replace":"v1","with":"oldApi"}],
	"url": "/v1/patients"
}
```
You get:
```js
endpoint.creations.oldApi.patients.newPatient = function(httpOptions) {
	var url = parse('/v1/patients');
	sys.logs.debug('[testEndpoint] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
```
Here several things happened:
1. Note how both the prefix and suffix were added at the start and end of the helper (respectively). 
2. The `suffix` property got converted to camelCase, however this will trigger a warning on the console. We recommend using camelCase instead of separators like ".", "-" or "_". 
3. We have the `"omittableUrlParts"` property **inside** the apiDescriptor. This works the same as the top level one, but scoped only to this apyEntry in particular and overriding the top level one. Note that instead of a string, we have an object. What this will do is to replace the `"replace"` part of the url with the desired `"with"` value on the helper. So instead of `endpoint.creations.v1.patients.newPatient` we got `endpoint.creations.oldApi.patients.newPatient`. If `"omittableUrlParts"` is defined as `[]` it will ignore the top's level one.

## Usage on SLINGR
If the previous helpers were part of an endpoint deployed on SLINGR, we could call them from a script in the SLINGR app as follows:
```js
app.endpoints.testEndpoint.v2.patients.readPatient(patientId, httpOptions);
app.endpoints.testEndpoint.v2.orders.reports(orderId, reportId, httpOptions, callbackData, callbacks);
app.endpoints.testEndpoint.updates.v2.orders.tests(orderId, jsonBody);
app.endpoints.testEndpoint.orders.updateOrder(orderId, jsonBody);
app.endpoints.testEndpoint.creations.oldApi.patients.newPatient(jsonBody);
```
Or:
```js
var res = app.endpoints.testEndpoint.v2.patients.readPatient(patientId, httpOptions);
var res2 = app.endpoints.testEndpoint.v2.orders.reports(orderId, reportId, httpOptions, callbackData, callbacks);
var res3 = app.endpoints.testEndpoint.updates.v2.orders.tests(orderId, jsonBody);
var res4 = app.endpoints.testEndpoint.orders.updateOrder(orderId, jsonBody);
var res5 = app.endpoints.testEndpoint.creations.oldApi.patients.newPatient(jsonBody);
```
Depending on the response expected from the http request, we can (or not) assign the result to a variable.

**Important:** The `httpOptions` parameter may be optional, so the helpers can be called without passing it as argument, this is the way it's documented on each endpoint, but you can pass these arguments anyway. In some other cases though, it will be required as it will have the body of `PATCH`,`PUT` & `POST` requests (in the above examples, `jsonBody`).

# Improving the module
If you have new features to propose, or you have detected bugs/issues, feel free to create tickets.

# Testing the module
If you want to run the tests there are two additional step that you will need to follow to successfully run the tests:

1. Create a `gen` and `scripts` folders in the root package of the module and also create a `endpoint.json` file in the root folder.
2. Run the following command on the root directory:
```
npm run test
``` 

# About SLINGR
SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License
This endpoint is licensed under the Apache License 2.0. Check [this](https://www.apache.org/licenses/LICENSE-2.0) for more details.
