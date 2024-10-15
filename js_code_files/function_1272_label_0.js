function wrapProxyHandler(args) {
	if (args.length < 2) return args;
	const handler = args[1];
	args[1] = new LocalProxy({__proto__: null, handler}, proxyHandlerHandler);
	return args;
}