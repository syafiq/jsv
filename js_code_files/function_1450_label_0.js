			bg: ((bg != null) ? bg : mxConstants.NONE),
			base64: base64,
			embedXml: embed,
			xml: data,
			filename: ((filename != null) ? filename : ''),
			extras: JSON.stringify(extras),
			scale: scale,
			border: border,
			w: (w && isFinite(w)? w : null),
			h: (h && isFinite(h)? h : null)
		};