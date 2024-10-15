			const newWrapped = (error, sst) => {
				const sandboxSst = ensureThis(sst);
				if (localArrayIsArray(sst)) {
					if (sst === sandboxSst) {
						for (let i=0; i < sst.length; i++) {
							const cs = sst[i];
							if (typeof cs === 'object' && localReflectGetPrototypeOf(cs) === OriginalCallSite.prototype) {
								sst[i] = new CallSite(cs);
							}
						}
					} else {
						sst = [];
						for (let i=0; i < sandboxSst.length; i++) {
							const cs = sandboxSst[i];
							localReflectDefineProperty(sst, i, {
								__proto__: null,
								value: new CallSite(cs),
								enumerable: true,
								configurable: true,
								writable: true
							});
						}
					}
				} else {
					sst = sandboxSst;
				}
				return value(error, sst);
			};
			localReflectApply(localWeakMapSet, wrappedPrepareStackTrace, [value, newWrapped]);
			localReflectApply(localWeakMapSet, wrappedPrepareStackTrace, [newWrapped, newWrapped]);
			currentPrepareStackTrace = newWrapped;
		}