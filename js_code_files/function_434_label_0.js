function turnCheckOff(id1, id2) {
    if (document.getElementById(id2).checked == false)
        document.getElementById(id1).checked = false;
}