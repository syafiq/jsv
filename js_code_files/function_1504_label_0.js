function appendFile() {
    var counter = document.getElementById('counter').value;
    var counter_split = counter.split(',');

    if (counter_split.length == 1) {
        document.getElementById('counter').value = '1,2';
        var count_id = 2;
    }
    if (counter_split.length == 2) {
        if (counter_split[0] == 1 && counter_split[1] == 2)
            var count_id = 3;

        if (counter_split[0] == 1 && counter_split[1] == 3)
            var count_id = 2;

        if (counter_split[0] == 2 && counter_split[1] == 3)
            var count_id = 1;

        document.getElementById('counter').value = '1,2,3';

    }

    var newtr = document.createElement('div');
    newtr.id = 'div' + count_id;
    newtr.innerHTML = '<div class="form-group clearfix"><div class="col-md-4"><input type="file" name="f[]" id="up' + count_id + '" onchange="attachfile(' + count_id + ');" multiple/></div><div id="del' + count_id + '" class="col-md-8" style="display: none;"><input type="button" value="Clear" class="btn btn-danger btn-xs" onclick="clearfile(' + count_id + ')" /></div></div>';
    document.getElementById('append_tab').appendChild(newtr);


    if (document.getElementById('counter').value == '1,2,3')
        document.getElementById('attach1').style.display = 'none';


}