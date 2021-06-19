function calculate24(str){
    var h1 = Number(str[1] - '0');
    var h2 = Number(str[0] - '0');
    var hh = (h2 * 10 + h1 % 10);
    var time24 =[];
    // If time is in "AM"
    if (str[8] == 'A')
    {
        if (hh == 12)
        {
            time24.push("00");
            for (var i = 2; i <= 7; i++)
                time24.push(str[i]);
        }
        else
        {
            for (var i = 0; i <= 7; i++)
                time24.push(str[i]);
        }
    }
  
    // If time is in "PM"
    else
    {
        if (hh == 12)
        {
            time24.push("12");
            for (var i = 2; i <= 7; i++)
                time24.push(str[i]);
        }
        else
        {
            hh = hh + 12;
            time24.push(hh);
            for (var i = 2; i <= 7; i++)
                time24.push(str[i]);
        }
    }
    return(time24.join(""))
}



function onClick() {
    var time = document.getElementById("time").value
    if (time.length != 10 ){
        document.getElementById("error").style.display="block";
    }
    else{
        document.getElementById("error").style.display="none";
    }
    time = calculate24(time)
    var reserv = new Date(2020,11,11,time.slice(0,2),time.slice(3,5),time.slice(6,8)) 
    time = new Date(reserv.getTime() + 2745000).toTimeString().slice(0,8)
    document.getElementById("result").innerHTML= time;
    return false;
}