				value: bridge.from(sandboxGlobal),
				enumerable: true
			},
			_runScript: {__proto__: null, value: runScript},
			_makeReadonly: {__proto__: null, value: makeReadonly},
			_makeProtected: {__proto__: null, value: makeProtected},
			_addProtoMapping: {__proto__: null, value: addProtoMapping},
			_addProtoMappingFactory: {__proto__: null, value: addProtoMappingFactory},
			_compiler: {__proto__: null, value: resolvedCompiler},
			_allowAsync: {__proto__: null, value: allowAsync}
		});

		this.readonly(inspect);

		// prepare global sandbox
		if (sandbox) {
			this.setGlobals(sandbox);
		}
	}