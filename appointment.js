function my_app_button(){
    document.getElementById("app_avail").innerHTML = "Your Current Appointments:"; 
    document.getElementById("a1").style.backgroundColor = "#5856d6";
    document.getElementById("a2").style.backgroundColor = "#5856d6";
    document.getElementById("a3").style.backgroundColor = "#5856d6";
    document.getElementById("a4").style.backgroundColor = "#5856d6";
    document.getElementById("a4").style.backgroundColor = "#5856d6";
    document.li.li.backgroundColor = "#5856d6";
    document.getElementById("nav1").style.borderBottomColor = "#5856d6";
    document.getElementById("nav2").style.borderBottomColor = "#5856d6";

    x=document.getElementsByClassName("choose_appointment");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].innerText="Reschedule/Cancel";    // Change the content
    }
}
function theme(){

    document.body.style.backgroundColor = "white";
    document.getElementById("customer_name").style.color = "black";
    document.getElementById("app_avail").style.color = "black";
    document.getElementById("nav1").style.color = "black";
    document.getElementById("appointment_check").style.color = "black";
    document.getElementById("theme").style.color = "black";
    document.getElementById("logout_button").style.color = "black";

}