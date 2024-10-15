        function getValueRenderedWithTlpColor({ label, tlp_color }, filter_terms) {
            const color = $sce.getTrustedHtml(
                `<span class="extra-card-field-color card-field-${tlp_color}"></span>`
            );

            return color + highlight(label, filter_terms);
        }