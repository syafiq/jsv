				coder: () => ')'
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
				coder: () => INTERNAL_STATE_NAME + '.'
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
		ncode += code.substring(curr, change.pos) + change.coder();
		curr = change.pos;
	}
	ncode += code.substring(curr);

	return {__proto__: null, code: ncode, hasAsync};
}