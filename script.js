
  function valid() {
    var x = document.forms["myForm"]["f-name"].value;
    if (x == "") {
      document.getElementById("first-hide").style.display = "block";
    
    }

    var y = document.forms["myForm"]["l-name"].value;
    if (y == "") {
      document.getElementById("last-hide").style.display = "block";
    
    }  
    var z = document.forms["myForm"]["phone"].value;
    if (z == "") {
      document.getElementById("phone-hide").style.display = "block";
    }  

    
    var t = document.forms["myForm"]["email"].value;
    if (t == "") {
      document.getElementById("email-hide").style.display = "block";
    } 

    var s = document.forms["myForm"]["email"].validity.typeMismatch;
    if (s ="true") {
      document.getElementById("email-p-hide").style.display = "block";
    } 
  
    return false;
  }
 