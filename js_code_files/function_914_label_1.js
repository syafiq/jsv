    function parseComment(comment) {
        if (/"TYPE":"PACKAGE_MATERIAL"/.test(comment)) {
            var comment_markup = "";
            var comment_map = JSON.parse(comment);
            var package_comment = comment_map['COMMENT'];
            var trackback_url = comment_map['TRACKBACK_URL'];
            if (typeof package_comment !== "undefined" || package_comment != null) {
                comment_markup = package_comment + "<br/>";
            }
            if (typeof trackback_url !== "undefined" || trackback_url != null) {
                return comment_markup + "Trackback: " + "<a href=" + trackback_url + ">" + trackback_url + "</a>";
            }
            return comment_markup + "Trackback: " + "Not Provided";
        }
        return _.escape(comment);
    }