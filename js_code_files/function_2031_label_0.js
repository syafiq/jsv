			onopentag: (name: string, attrs: Record<string, string>) => {
				// Note: "name" and attribute names are always lowercase even
				// when the input is not. So there is no need to call
				// "toLowerCase" on them.

				tagStack.push(name);

				if (disallowedTags.includes(currentTag())) {
					disallowedTagDepth++;
					return;
				}

				if (disallowedTagDepth) return;

				attrs = Object.assign({}, attrs);

				// Remove all the attributes that start with "on", which
				// normally should be JavaScript events. A better solution
				// would be to blacklist known events only but it seems the
				// list is not well defined [0] and we don't want any to slip
				// throught the cracks. A side effect of this change is a
				// regular harmless attribute that starts with "on" will also
				// be removed.
				// 0: https://developer.mozilla.org/en-US/docs/Web/Events
				for (const attrName in attrs) {
					if (!attrs.hasOwnProperty(attrName)) continue;
					if (attrName.length <= 2) continue;
					if (attrName.substr(0, 2) !== 'on') continue;
					delete attrs[attrName];
				}

				// Make sure that only non-acceptable URLs are filtered out. In
				// particular we want to exclude `javascript:` URLs. This
				// applies to A tags, and also AREA ones but to be safe we don't
				// filter on the tag name and process all HREF attributes.
				if ('href' in attrs && !this.isAcceptedUrl(attrs['href'])) {
					attrs['href'] = '#';
				}

				// We need to clear any such attribute, otherwise it will
				// make any arbitrary link open within the application.
				if ('data-from-md' in attrs) {
					delete attrs['data-from-md'];
				}

				if (options.addNoMdConvClass) {
					let classAttr = attrs['class'] || '';
					if (!classAttr.includes('jop-noMdConv')) {
						classAttr += ' jop-noMdConv';
						attrs['class'] = classAttr.trim();
					}
				}

				// For some reason, entire parts of HTML notes don't show up in
				// the viewer when there's an anchor tag without an "href"
				// attribute. It doesn't always happen and it seems to depend on
				// what else is in the note but in any case adding the "href"
				// fixes it. https://github.com/laurent22/joplin/issues/5687
				if (name === 'a' && !attrs['href']) {
					attrs['href'] = '#';
				}

				let attrHtml = this.attributesHtml(attrs);
				if (attrHtml) attrHtml = ` ${attrHtml}`;
				const closingSign = this.isSelfClosingTag(name) ? '/>' : '>';
				output.push(`<${name}${attrHtml}${closingSign}`);
			},