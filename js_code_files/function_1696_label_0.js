function cpPasteField(title, course_period_id) {

    var obj = document.getElementById('course_div');
    var field = title + '<INPUT type=hidden name=w_course_period_id value=' + course_period_id + '>';
    //    var obj_hidden = document.getElementById('hidden_tag_cp_id');
    obj.innerHTML = field;
    $('#modal_default').modal('hide');
    $('.modal-backdrop').remove();
}