						args[1] = function wrapper(error) {
							error = ensureThis(error);
							return localReflectApply(onRejected, this, [error]);
						};