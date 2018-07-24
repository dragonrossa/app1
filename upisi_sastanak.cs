
function submit_by_tag() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var datum = document.getElementById("datum").value;
    var iznos = document.getElementById("iznos").value;
    var placa = document.getElementById("tko plaća").value;

    var x = document.getElementsByTagName("frm1");
    x[0].submit(); //form submission
    alert(" Name : " + fname + " n Email : " + lname + " n Form Tag : <form>nn Form Submitted Successfully......");
   
   