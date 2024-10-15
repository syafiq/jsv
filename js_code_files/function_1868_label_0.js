function mp_range_toggle(rad) {
    if (rad.checked == true && rad.id == 'preset') {
        document.getElementById("mp_range").style.display = 'block';
        document.getElementById("date_range").style.display = 'none';
        document.getElementById("select_range").style.display = 'block';
        document.getElementById("select_mp").style.display = 'none';
    }
    else {
        document.getElementById("mp_range").style.display = 'none';
        document.getElementById("date_range").style.display = 'block';
        document.getElementById("select_range").style.display = 'none';
        document.getElementById("select_mp").style.display = 'block';
    }
}