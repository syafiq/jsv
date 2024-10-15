function load_link_group(the_content, stat) {

    the_content = the_content.replace("Modules.php", "Ajax.php");
    request.open('get', the_content);

    request.onreadystatechange = function () {


        if (request.readyState == 1) {
            document.getElementById('content').innerHTML = '<center><img border=0 src=assets/ajax_loader.gif><br>Loading...</center>';
        }
        if (request.readyState == 4) {
            var answer = request.responseText;
            document.getElementById('content').innerHTML = answer;

        }

        if (stat == '1')
        {

document.getElementById('divErr').innerHTML ="<div class='alert alert-success alert-styled-left'><button type='button' class='close' data-dismiss='alert'><span></span><span class='sr-only'>Close</span></button>Member added successfully.</div>";

        }
        else if (stat == '2')
        {

            document.getElementById('divErr').innerHTML = "<div class='alert alert-danger alert-styled-left'><button type='button' class='close' data-dismiss='alert'><span></span><span class='sr-only'>Close</span></button>Member deleted successfully.</div>";

        }

    };
    request.send('');
}