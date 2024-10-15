    function renderListItems(items, render_item) {
        let templated_content = html``;

        for (const [i, file] of items.entries()) {
            if (i === 0) {
                templated_content = render_item(file);
            } else {
                templated_content = html`${templated_content}, ${render_item(file)}`;
            }
        }

        return templated_content;
    }