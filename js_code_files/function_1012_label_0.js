			onclosetag: (name: string) => {
				const current = currentTag();

				if (current === name.toLowerCase()) tagStack.pop();

				// The Markdown sanitization code can result in calls like this:
				//     sanitizeHtml('<invlaid>')
				//     sanitizeHtml('</invalid>')
				// Thus, we need to be able to remove '</invalid>', even if there is no
				// corresponding opening tag.
				if (disallowedTags.includes(current) || disallowedTags.includes(name)) {
					if (disallowedTagDepth > 0) {
						disallowedTagDepth--;
					}
					return;
				}

				if (disallowedTagDepth) return;

				if (this.isSelfClosingTag(name)) return;
				output.push(`</${name}>`);
			},