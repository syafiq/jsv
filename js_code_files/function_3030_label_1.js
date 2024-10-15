        function getValueRenderedWithColor(value, filter_terms) {
            const r = parseInt(value.color.r, 10);
            const g = parseInt(value.color.g, 10);
            const b = parseInt(value.color.b, 10);
            const color = $sce.getTrustedHtml(`<span class="extra-card-field-color"
                style="background: rgb(${r}, ${g}, ${b})"></span>`);

            return color + highlight(value.label, filter_terms);
        }