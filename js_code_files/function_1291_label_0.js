    function getHTMLStringFromTemplate(template) {
        const element = document.createElement("div");
        template({}, element);

        return $sce.trustAsHtml(element.innerHTML);
    }