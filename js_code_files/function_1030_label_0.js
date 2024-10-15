function addseccheck_button() {
    if (document.getElementById('values[people][SECONDARY][RELATIONSHIP]').value != '') {
        document.getElementById('rss').checked = true;
    } else {
        document.getElementById('rss').checked = false;
    }

}