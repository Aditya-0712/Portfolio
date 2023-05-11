var abt_me = document.querySelectorAll(".part1 div p");
var clk = document.querySelectorAll(".part1 div p")[2];
var cont = document.getElementsByClassName("cont")[0];

function show()
{
    if (abt_me[0].style.transform == "none")
    {
        abt_me[0].style.transform = "translateY(-200px)";
        abt_me[1].style.transform = "translateY(-200px)";
        cont.style.transform = "none";
        clk.style.transform = "translateY(200px)";
    }
    else 
    {
        abt_me[0].style.transform = "none";
        abt_me[1].style.transform = "none";
        cont.style.transform = "translateX(-500px)";
        clk.style.transform = "none";
    }
}