async function onMessage(socket, payload) {
	if (!payload.data.length) {
		return winston.warn('[socket.io] Empty payload');
	}

	let eventName = payload.data[0];
	const params = typeof payload.data[1] === 'function' ? {} : payload.data[1];
	const callback = typeof payload.data[payload.data.length - 1] === 'function' ? payload.data[payload.data.length - 1] : function () {};

	try {
		if (!eventName) {
			return winston.warn('[socket.io] Empty method name');
		}

		if (typeof eventName !== 'string') {
			eventName = typeof eventName;
			const escapedName = validator.escape(eventName);
			return callback({ message: `[[error:invalid-event, ${escapedName}]]` });
		}

		const parts = eventName.split('.');
		const namespace = parts[0];
		const methodToCall = parts.reduce((prev, cur) => {
			if (prev !== null && prev[cur] && (!prev.hasOwnProperty || prev.hasOwnProperty(cur))) {
				return prev[cur];
			}
			return null;
		}, Namespaces);

		if (!methodToCall || typeof methodToCall !== 'function') {
			if (process.env.NODE_ENV === 'development') {
				winston.warn(`[socket.io] Unrecognized message: ${eventName}`);
			}
			const escapedName = validator.escape(String(eventName));
			return callback({ message: `[[error:invalid-event, ${escapedName}]]` });
		}

		socket.previousEvents = socket.previousEvents || [];
		socket.previousEvents.push(eventName);
		if (socket.previousEvents.length > 20) {
			socket.previousEvents.shift();
		}

		if (!eventName.startsWith('admin.') && ratelimit.isFlooding(socket)) {
			winston.warn(`[socket.io] Too many emits! Disconnecting uid : ${socket.uid}. Events : ${socket.previousEvents}`);
			return socket.disconnect();
		}

		await checkMaintenance(socket);
		await validateSession(socket, '[[error:revalidate-failure]]');

		if (Namespaces[namespace].before) {
			await Namespaces[namespace].before(socket, eventName, params);
		}

		if (methodToCall.constructor && methodToCall.constructor.name === 'AsyncFunction') {
			const result = await methodToCall(socket, params);
			callback(null, result);
		} else {
			methodToCall(socket, params, (err, result) => {
				callback(err ? { message: err.message } : null, result);
			});
		}
	} catch (err) {
		winston.error(`${eventName}\n${err.stack ? err.stack : err.message}`);
		callback({ message: err.message });
	}
}