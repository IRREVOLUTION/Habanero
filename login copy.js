$(document).ready(function(){
  $.ajax({
    type: "POST",
    url: "data/ApplicationLayer.php",
    dataType: "json",
    data: {"action" : "CSERVICE"},
    success:function(cookieJson) {
      $("#nameAcc").val(cookieJson.cookieValue);
    },
    error:function(errorMsg){
      //alert("no cookie");
    }
  });
});

function validateReg() {
    var correct = true
    var nameInput = document.getElementById("fName");
    var currentText = nameInput.value;
    var Errormessage = document.getElementById("errorfName");
    var checkRadio = false;
    if (currentText == "") {
      Errormessage.innerHTML = " First Name needed"
      correct = false
    }
    else
      Errormessage.innerHTML = ""

    nameInput = document.getElementById("mail");
    currentText = nameInput.value;
    Errormessage = document.getElementById("errormail");
    if (currentText == "") {
      Errormessage.innerHTML = " E-mail nedded"
      correct = false
    }
    else
      Errormessage.innerHTML = ""

    nameInput = document.getElementById("telnum");
    currentText = nameInput.value;
    Errormessage = document.getElementById("errornum");
    if (currentText == "") {
      Errormessage.innerHTML = " N&uacute;mero Telef&oacute;nico Necesario"
      correct = false
    }
    else
      Errormessage.innerHTML = ""

    nameInput = document.getElementById("pass1");
    var PassInput = nameInput.value;
    Errormessage = document.getElementById("errorpass");
    if (PassInput == "") {
      Errormessage.innerHTML = " Password nedded"
      correct = false
    }
    else
      Errormessage.innerHTML = ""

    nameInput = document.getElementById("pass2");
    currentText = nameInput.value;
    Errormessage = document.getElementById("errorpass=");
    if (currentText != PassInput) {
      Errormessage.innerHTML = " Password is incorrect"
      correct = false
    }
    else
      Errormessage.innerHTML = ""  

    nameInput = document.getElementById("address");
    currentText = nameInput.value;
    Errormessage = document.getElementById("erroradd");
    if (currentText == "") {
      Errormessage.innerHTML = " Dirección Necesaria"
      correct = false
    }
    else
      Errormessage.innerHTML = ""

    var selectVal = $('select[id= colonia]').val();

    Errormessage = document.getElementById("errorcol");
    Errormessage.innerHTML = selectVal
    if (selectVal == "1") {
      Errormessage.innerHTML = " Colonia necesaria"
      correct = false
    }
    else
      Errormessage.innerHTML = ""

    if (correct) {
      //window.location.href = "home.html";
    }

    return false;
}

function validateLog(){
    
  if ($('#rem').is(":checked")) {var RR = true;}
  else {var RR = false;}

  var dataToSend = {
    "action" : "LOGIN",
    "username" : $("#nameAcc").val(),
    "password" : $("#passAcc").val(),
    "remember" : RR
  };

  $.ajax({
    url: "data/ApplicationLayer.php",
    type: "POST",
    data: dataToSend,
    dataType: "json",
    contentType: "application/x-www-form-urlencoded",
    success:function(jsonObject){
      alert("eafaft");
      window.location.href = "habanero_home.html";
    },
    error:function(errorMsg){
      alert("User/Password incorrect");
    }
  });
}

function registerUser() {
  var dataToSend = {
    "action" : "REGISTER",
    "username" : $("#usrname").val(),
    "password" : $("#pass1").val(),
    "email" : $("#mail").val(),
    "Name" : $("#fName").val(),
    "numTel" : $("#telnum").val(),
    "col" : $("#colonia").val(),
    "address" : $("#address").val()
  };
  $.ajax({
    url: "data/ApplicationLayer.php",
    type: "POST",
    data: dataToSend,
    dataType: "json",
    contentType: "application/x-www-form-urlencoded",
    success:function(jsonObject){
      alert(jsonObject.Name);
      window.location.href = "habanero_home.html";
      return false;
    },
    error:function(errorMsg){
      alert("Registration error");
    }
  });
  return false;
}