// variables
// BASE_URL : url
// otp_p 
// TOKEN_D
// otp_d
// TOKEN_P


// pre
pm.request.headers.add({key: 'x-apikey', value: 'token_value' })


let requestBody = pm.request.body?.raw ?? {};
try {
    requestBody = JSON.parse(requestBody);
} catch (error) {
    // If parsing fails, assume it's not JSON
}

requestBody.country_code = '+91';
requestBody.domain_name = 'absy';
pm.request.body.raw = JSON.stringify(requestBody, null, 2);


// test
var res = pm.response.json()
pm.environment.set('otp_d', res.data.otp)


// verify otp
let requestBody = pm.request.body?.raw ?? {};
try {
    requestBody = JSON.parse(requestBody);
} catch (error) {
    // If parsing fails, assume it's not JSON
}
requestBody.otp = pm.environment.get("otp_d") ;
pm.request.body.raw = JSON.stringify(requestBody, null, 2);

// test
var res = pm.response.json()
pm.environment.set('TOKEN_D', res.data.access_token)
