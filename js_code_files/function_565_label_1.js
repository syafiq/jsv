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

            document.getElementById('divErr').innerHTML = "Member added successfuly.";

        }
        else if (stat == '2')
        {

            document.getElementById('divErr').innerHTML = "<font style='color:red'>Member deleted successfuly.</font>";

        }

    };