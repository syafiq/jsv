    function getCardFieldListValues(values, filter_terms) {
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

        function getValueRenderedWithColor(value, filter_terms) {
            const r = parseInt(value.color.r, 10);
            const g = parseInt(value.color.g, 10);
            const b = parseInt(value.color.b, 10);

            const styles = {
                background: `rgb(${r}, ${g}, ${b})`,
            };

            return html`<span class="extra-card-field-color" style="${styles}"></span
                >${highlightFilterElements(value.label, filter_terms)}`;
        }

        function getValueRenderedWithTlpColor({ label, tlp_color }, filter_terms) {
            const classlist = ["extra-card-field-color", `card-field-${tlp_color}`];

            return html`<span class="${classlist}"></span>${highlightFilterElements(
                    label,
                    filter_terms
                )}`;
        }

        return getHTMLStringFromTemplate(renderListItems(values, getValueRendered));
    }