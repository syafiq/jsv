function cleanModal(id)
{
    var obj = document.getElementById(id);
    obj.innerHTML = '';
    
    if(document.getElementById('conf_div1')){
       document.getElementById('conf_div1').innerHTML = ''; 
    }
}