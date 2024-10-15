    function getCardFieldPermissionsValue(values, filter_terms) {
        return getHTMLStringFromTemplate(
            renderListItems(
                values,
                (value) => html`${highlightFilterElements(value, filter_terms)}`
            )
        );
    }