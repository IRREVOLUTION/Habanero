$(document).ready(function(){
  $.ajax({
    type: "POST",
    url: "data/ApplicationLayer.php",
    dataType: "json",
    data: {"action" : "CSERVICE"},
    success:function(cookieJson) {
      $("#nameA").val(cookieJson.cookieValue);
    },
    error:function(errorMsg){
      //alert("no cookie");
    }
  });

    $("#btn1").on("click", function(i){
      i.preventDefault();
      var Uame = $("#nameA").val();
      var PassW = $("#passA").val();
      if(Uame==null||Uame==""){
        document.getElementById("errornameA").innerHTML = "User must be filed out or a valid User";
        return false;
      }
      else{
        document.getElementById("errornameA").innerHTML = null;
      }
      if(PassW==null||PassW==""){
        document.getElementById("errorpassA").innerHTML = "Password must be filed out";
        return false;
      }
      else{
        document.getElementById("errorpassA").innerHTML = null;
      }
      var dataToSend = {
        "action" : "LOGIN",
        "username" : $("#nameA").val(),
        "password" : $("#passA").val(),
        "remember" : $("#rem").is(":checked")
      };
      $.ajax({
        url: "data/ApplicationLayer.php",
        type: "POST",
        data: dataToSend,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success:function(jsonObject){
          if(jsonObject.admin == 0){
            window.location.replace("habanero_home.html");
          }
          else{
            window.location.replace("habanero_admin.html");
          }
        },
        error:function(errorMsg){
          alert("User/Password incorrect");
        }
      });
    });

  $("#regButton").on("click", function(i){
        i.preventDefault();
                var Fname1 = $("#fName").val();
                var UnameR1 = $("#usrn").val();
                var Em = $("#mail").val();
                var tel = $("#telnum").val();
                var PassWR = $("#pass1").val();
                var CPassWR = $("#pass2").val();
                if(Fname1==null||Fname1==""){
                    document.getElementById("errorfName").innerHTML = "First Name must be filed out";
                    return false;
                }
                else{
                    document.getElementById("errorfName").innerHTML = null;
                }
                if(UnameR1==null||UnameR1==""){
                    document.getElementById("erroru").innerHTML = "User Name must be filed out";
                    return false;
                }
                else{
                    document.getElementById("erroru").innerHTML = null;
                }
                if(Em==null||Em==""){
                    document.getElementById("errormail").innerHTML = "Email must be filed out";
                    return false;
                }
                else{
                    document.getElementById("errormail").innerHTML = null;
                }
                if(tel==null||tel==""){
                    document.getElementById("errorn").innerHTML = "Email must be filed out";
                    return false;
                }
                else{
                    document.getElementById("errorn").innerHTML = null;
                }
                if(PassWR==null||PassWR==""){
                    document.getElementById("errorpass").innerHTML = "Password must be filed out";
                    return false;
                }
                else{
                    document.getElementById("errorpass").innerHTML = null;
                }
                if(CPassWR==null||CPassWR==""||CPassWR!=PassWR){
                    document.getElementById("errorp").innerHTML = "Password Confirmation must be filed out & must match with the Passwword";
                    return false;
                }
                else{
                    document.getElementById("errorp").innerHTML = null;
                }
              var dataToSend = {
                "action" : "REGISTER",
                "username" : $("#usrn").val(),
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
                      window.location.replace("habanero_home.html");
                  },
                error:function(errorMsg){
                    //window.location.replace("Home.html");
                }
              });
            });
});