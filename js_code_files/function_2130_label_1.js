		sessionId: request.signedCookies ? request.signedCookies[nconf.get('sessionKey')] : null,
		request: request,
	});

	const sessionData = await getSessionAsync(sessionId);

	if (sessionData && sessionData.passport && sessionData.passport.user) {
		request.session = sessionData;
		socket.uid = parseInt(sessionData.passport.user, 10);
	} else {
		socket.uid = 0;
	}
	request.uid = socket.uid;
	callback();
}