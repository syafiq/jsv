    function getCardFieldUserValue(value, filter_terms) {
        let display_name;

        if (value.user_url === null) {
            display_name = highlight(value.display_name, filter_terms);
            return `<div class="tlp-avatar-mini"> </div><span>${display_name}</span>`;
        }

        display_name = highlight(value.display_name, filter_terms);
        return `<a data-nodrag="true" class="extra-card-field-user" href="${value.user_url}">
                            <div class="tlp-avatar-mini"><img src="${value.avatar_url}" /></div><span>${display_name}</span>
                        </a>`;
    }