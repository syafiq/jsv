	async function doExport(socket, data, type) {
		sockets.warnDeprecated(socket, 'POST /api/v3/users/:uid/exports/:type');

		if (!socket.uid) {
			throw new Error('[[error:invalid-uid]]');
		}

		if (!data || parseInt(data.uid, 10) <= 0) {
			throw new Error('[[error:invalid-data]]');
		}

		await user.isAdminOrSelf(socket.uid, data.uid);

		api.users.generateExport(socket, { type, uid: data.uid });
	}