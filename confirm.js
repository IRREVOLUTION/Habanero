var numDePlat = 0;
var platArr = [];
var nameUsr;
var stringPlat = "";
var temo = 0;

$(document).ready(function(){

 $.ajax({
    type: "POST",
    url: "data/ApplicationLayer.php",
    data: {"action" : "SSERVICE"},
    dataType: "json",
    contentType: "application/x-www-form-urlencoded",
      success:function(sessionObjJson) {
        nameUsr = sessionObjJson.nameU;
        $.ajax({
          url: "data/ApplicationLayer.php",
          type: "POST",
          data: {"action" : "ORDERLOAD", "username" : nameUsr},
          dataType: "json",
          contentType: "application/x-www-form-urlencoded",
          success:function(jsonObject){
            $.each(jsonObject ,function(co, co2){
              tempA = co2.list;
              tempN = parseInt(co2.num);
              platArr = tempA.split("-");

              for (var i = 0; i < tempN; i++) {
                var currentHTML = "";
                currentHTML+= "<spam class='orderItem'><h4>" + platArr[i] + "</h4></span>";
                $("#content-tab1").append(currentHTML);
              }
              var totalHTML = "<spam class='orderTotal'><h2> Su Total: $" + co2.total + ".00</h2></span>";
              $("#content-tab1").append(totalHTML);
            })
          },
          error:function(errorMsg){
            alert("Comment database error");
          }
        })
      },
      error:function(errorMsg){
        alert("No se tiene una sesi&oacute;n abierta");
      }
  }); 


  $("#cancelOrderButton").on("click",function(){

    var dataToSend = {
      "action" : "DELETEORDER",
      "username" : nameUsr
    };

    $.ajax({
      url: "data/ApplicationLayer.php",
      type: "POST",
      data: dataToSend,
      dataType: "json",
      contentType: "application/x-www-form-urlencoded",
      success:function(jsonObject){
        //alert(jsonObject.fName+ " " +jsonObject.lName);
        alert("Orden eliminada");
        window.location.href = "habanero_orden.html";
      },
      error:function(errorMsg){
        alert("Error");
      }
      });
  });

  $("#submitOrderButton").on("click",function(){

    var dataToSend = {
      "action" : "SUBMITORDER",
      "username" : nameUsr
    };

    $.ajax({
      url: "data/ApplicationLayer.php",
      type: "POST",
      data: dataToSend,
      dataType: "json",
      contentType: "application/x-www-form-urlencoded",
      success:function(jsonObject){
        //alert(jsonObject.fName+ " " +jsonObject.lName);
        alert("Orden enviada! Te la enviaremos en cuanto este lista!");
        window.location.href = "habanero_home.html";
      },
      error:function(errorMsg){
        alert("Error");
      }
      });
  });


});



