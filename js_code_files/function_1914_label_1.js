        options: this.elementIndex.getSortOptions(this.$source).map((o) => {
          return {
            label: o.label,
            value: o.attr,
          };
        }),
      })