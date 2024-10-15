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