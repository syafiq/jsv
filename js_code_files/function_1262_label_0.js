        function getValueRendered(value) {
            if (value.color) {
                return getValueRenderedWithColor(value, filter_terms);
            } else if (value.tlp_color) {
                return getValueRenderedWithTlpColor(value, filter_terms);
            } else if (value.avatar_url) {
                return getCardFieldUserValueTemplate(value, filter_terms);
            }

            return highlightFilterElements(value.label, filter_terms);
        }