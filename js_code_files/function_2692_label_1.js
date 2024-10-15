        function getFileLink(file) {
            var file_name = highlight(file.name, filter_terms);

            return (
                '<a data-nodrag="true" href="' +
                getFileUrl(file) +
                '" title="' +
                file.description +
                '"><i class="fas fa-paperclip extra-card-field-file-icon"></i>' +
                file_name +
                "</a>"
            );
        }