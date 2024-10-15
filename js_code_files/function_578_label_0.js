          options: this.sourceData.sortOptions.map((o) => {
            return {
              label: Craft.escapeHtml(o.label),
              value: o.attr,
            };
          }),
          value: this.sourceData.defaultSort[0],
        })