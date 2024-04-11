function getResp(r)
{
	console.log(r);
	r.headersOut['x-api-access-token']= 'my_auth_token';
	r.return(200, 'healthy-auth');
}

export default {getResp};