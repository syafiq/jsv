    function renderScmInstance(instance) {

        return '<li class="instance">'
                + '<div title="' + instance.revision + '" class="revision"><span>Revision: </span>' + '<a href="' + instance.locator + '">' + instance.revision + '</a>' + ' </div>'
                + '<div class="usercomment wraptext">' + parseComment(instance.comment) + '</div>'
                + '<div class="author">'
                + '<p>' + _.escape(instance.user) + ' </p>'
                + '<p>' + _.escape(instance.modified_time) + '</p>'
                + '</div>'
                + '</li>';
    }