function checkAllDtMod2(elem,name)
{
    var res_length=document.getElementById('res_length').value;
    var res_len=document.getElementById('res_len').value;
    var unique_id=res_len.split(',');
    
    for(var i=0;i<res_length;i++){
        if(elem.checked==true){
            if(document.getElementById(unique_id[i])){
                $('#hidden_checkboxes').append("<input type=hidden name='"+name+"["+unique_id[i]+"]' value='"+unique_id[i]+"' data-checkbox-hidden-id='"+unique_id[i]+"' />");
                // document.getElementById(unique_id[i]).checked=true;
                // window.$('#'+unique_id[i]).attr("checked",true);
                $(".student_label_cbx").prop('checked', true);
                // alert(unique_id[i]);
            }
        }else{
            if(document.getElementById(unique_id[i])){
                $('[data-checkbox-hidden-id='+unique_id[i]+']').remove();   
                // document.getElementById(unique_id[i]).checked=false;
                $(".student_label_cbx").prop('checked', false);
            }
        }
    }
}