function clearfile(this_id)
{
    var oFiles = document.getElementById("up" + this_id);

    oFiles.value = "";
    document.getElementById('del' + this_id).style.display = 'none';

    var counter = document.getElementById('counter').value;
    var counter_split = counter.split(',');

    if (counter_split.length == 1)
    {
        document.getElementById('counter').value = this_id;
    }
    if (counter_split.length == 2)
    {
        if (counter_split[0] != this_id)
            document.getElementById('counter').value = counter_split[0];

        if (counter_split[1] != this_id)
            document.getElementById('counter').value = counter_split[1];

    }
    if (counter_split.length == 3)
    {
        var counter_val = new Array();
        var i = 0;
        if (counter_split[0] != this_id)
        {
            counter_val[i] = counter_split[0];
            i++;
        }
        if (counter_split[1] != this_id)
        {
            counter_val[i] = counter_split[1];
            i++;
        }
        if (counter_split[2] != this_id)
        {
            counter_val[i] = counter_split[2];
            i++;
        }
        document.getElementById('counter').value = counter_val.join();
    }

    var counter = document.getElementById('counter').value;
    var row = document.getElementById('div' + this_id);
    row.parentNode.removeChild(row);
    if (this_id == 1)
    {
        if (counter == '1')
        {
            var newtr = document.createElement('div');
            newtr.id = 'div1';
            newtr.innerHTML = '<div class="form-group clearfix"><div class="col-md-4"><input type="file" name="f[]" id="up1" onchange="attachfile(1);" multiple/></div><div id="del1" style="display:none;" class="col-md-8"><input type="button" value="Clear" class="btn btn-danger btn-xs" onclick="clearfile(1)" /></div></div>';
            document.getElementById('append_tab').appendChild(newtr);
            document.getElementById('attach1').style.display = 'none';
        }
        else
        {
            document.getElementById('attach1').style.display = 'block';
        }
    }
    if (this_id == 2)
    {
        if (counter == '2')
        {
            var newtr = document.createElement('div');
            newtr.id = 'div1';
            newtr.innerHTML = '<div class="form-group clearfix"><div class="col-md-4"><input type="file" name="f[]" id="up1" onchange="attachfile(1);" multiple/></div><div id="del1" style="display:none;" class="col-md-8"><input type="button" value="Clear" class="btn btn-danger btn-xs" onclick="clearfile(1)" /></div></div>';
            document.getElementById('append_tab').appendChild(newtr);
            document.getElementById('attach1').style.display = 'none';
        }
        else
            document.getElementById('attach1').style.display = 'block';
    }
    if (this_id == 3)
    {
        if (counter == '3')
        {
            var newtr = document.createElement('div');
            newtr.id = 'div1';
            newtr.innerHTML = '<div class="form-group clearfix"><div class="col-md-4"><input type="file" name="f[]" id="up1" onchange="attachfile(1);" multiple/></div><div id="del1" style="display:none;" class="col-md-8"><input type="button" value="Clear" class="btn btn-danger btn-xs" onclick="clearfile(1)" /></div></div>';
            document.getElementById('append_tab').appendChild(newtr);
            document.getElementById('attach1').style.display = 'none';
        }
        else
            document.getElementById('attach1').style.display = 'block';
    }
}