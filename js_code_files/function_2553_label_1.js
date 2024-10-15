function attachfile(this_val)
{

    document.getElementById('del' + this_val).style.display = 'block';
    if (this_val == 1)
        document.getElementById('attach1').style.display = 'block';
}