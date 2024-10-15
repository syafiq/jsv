    function parseCommentForTooltip(comment) {
        if (/"TYPE":"PACKAGE_MATERIAL"/.test(comment)) {
            var comment_tooltip = "";
            var comment_map = JSON.parse(comment);
            var package_comment = comment_map['COMMENT'];
            var trackback_url = comment_map['TRACKBACK_URL'];
            if (typeof package_comment !== "undefined" || package_comment != null) {
                comment_tooltip = package_comment + "\n";
            }
            if (typeof trackback_url !== "undefined" || trackback_url != null) {
                return comment_tooltip + "Trackback: " + trackback_url;
            }
            return comment_tooltip + "Trackback: " + "Not Provided";
        }
        return _.escape(comment);
    }