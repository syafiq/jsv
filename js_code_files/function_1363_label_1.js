function transformer(args, body, isAsync, isGenerator, filename) {
	let code;
	let argsOffset;
	if (args === null) {
		code = body;
		// Note: Keywords are not allows to contain u escapes
		if (!/\b(?:catch|import|async)\b/.test(code)) {
			return {__proto__: null, code, hasAsync: false};
		}
	} else {
		code = isAsync ? '(async function' : '(function';
		if (isGenerator) code += '*';
		code += ' anonymous(';
		code += args;
		argsOffset = code.length;
		code += '\n) {\n';
		code += body;
		code += '\n})';
	}

	const parser = new AcornParser({
		__proto__: null,
		ecmaVersion: 2022,
		allowAwaitOutsideFunction: args === null && isAsync,
		allowReturnOutsideFunction: args === null
	}, code);
	let ast;
	try {
		ast = parser.parse();
	} catch (e) {
		// Try to generate a nicer error message.
		if (e instanceof SyntaxError && e.pos !== undefined) {
			let message = e.message;
			const match = message.match(/^(.*) \(\d+:\d+\)$/);
			if (match) message = match[1];
			e = makeNiceSyntaxError(message, code, filename, e.pos, parser);
		}
		throw e;
	}

	if (args !== null) {
		const pBody = assertType(ast, 'Program').body;
		if (pBody.length !== 1) throw new SyntaxError('Single function literal required');
		const expr = pBody[0];
		if (expr.type !== 'ExpressionStatement') throw new SyntaxError('Single function literal required');
		const func = expr.expression;
		if (func.type !== 'FunctionExpression') throw new SyntaxError('Single function literal required');
		if (func.body.start !== argsOffset + 3) throw new SyntaxError('Unexpected end of arg string');
	}

	const insertions = [];
	let hasAsync = false;

	const TO_LEFT = -100;
	const TO_RIGHT = 100;

	let internStateValiable = undefined;
	let tmpname = 'VM2_INTERNAL_TMPNAME';

	acornWalkFull(ast, (node, state, type) => {
		if (type === 'Function') {
			if (node.async) hasAsync = true;
		}
		const nodeType = node.type;
		if (nodeType === 'CatchClause') {
			const param = node.param;
			if (param) {
				if (param.type === 'ObjectPattern') {
					insertions.push({
						__proto__: null,
						pos: node.start,
						order: TO_RIGHT,
						code: `catch($tmpname){try{throw ${INTERNAL_STATE_NAME}.handleException($tmpname);}`
					});
					insertions.push({
						__proto__: null,
						pos: node.body.end,
						order: TO_LEFT,
						code: `}`
					});
				} else {
					const name = assertType(param, 'Identifier').name;
					const cBody = assertType(node.body, 'BlockStatement');
					if (cBody.body.length > 0) {
						insertions.push({
							__proto__: null,
							pos: cBody.body[0].start,
							order: TO_LEFT,
							code: `${name}=${INTERNAL_STATE_NAME}.handleException(${name});`
						});
					}
				}
			}
		} else if (nodeType === 'WithStatement') {
			insertions.push({
				__proto__: null,
				pos: node.object.start,
				order: TO_LEFT,
				code: INTERNAL_STATE_NAME + '.wrapWith('
			});
			insertions.push({
				__proto__: null,
				pos: node.object.end,
				order: TO_RIGHT,
				code: ')'
			});
		} else if (nodeType === 'Identifier') {
			if (node.name === INTERNAL_STATE_NAME) {
				if (internStateValiable === undefined || internStateValiable.start > node.start) {
					internStateValiable = node;
				}
			} else if (node.name.startsWith(tmpname)) {
				tmpname = node.name + '_UNIQUE';
			}
		} else if (nodeType === 'ImportExpression') {
			insertions.push({
				__proto__: null,
				pos: node.start,
				order: TO_RIGHT,
				code: INTERNAL_STATE_NAME + '.'
			});
		}
	});

	if (internStateValiable) {
		throw makeNiceSyntaxError('Use of internal vm2 state variable', code, filename, internStateValiable.start, {
			__proto__: null,
			start: internStateValiable.start,
			end: internStateValiable.end
		});
	}

	if (insertions.length === 0) return {__proto__: null, code, hasAsync};

	insertions.sort((a, b) => (a.pos == b.pos ? a.order - b.order : a.pos - b.pos));

	let ncode = '';
	let curr = 0;
	for (let i = 0; i < insertions.length; i++) {
		const change = insertions[i];
		ncode += code.substring(curr, change.pos) + change.code.replace(/\$tmpname/g, tmpname);
		curr = change.pos;
	}
	ncode += code.substring(curr);

	return {__proto__: null, code: ncode, hasAsync};
}