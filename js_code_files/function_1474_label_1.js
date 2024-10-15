function requestPasteField(title,course_id)
{
    var obj = document.getElementById('request_div');
    var field = title+'<INPUT type=hidden name=request_course_id value='+course_id+'>';
    // var obj_hidden = document.getElementById('hidden_tag_cp_id');
    obj.innerHTML =field ;
    $('#course_div').text(title);
    $('#modal_default_request').modal('hide');
    $('.modal-backdrop').remove();
}