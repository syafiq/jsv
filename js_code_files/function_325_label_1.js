function showhidediv(it, box)
{
    if (document.getElementById)
    {



        var vis = (box.checked) ? "block" : "none";

        document.getElementById(it).style.display = vis;
    }
}