var numDePlat = 0;
var platArr = [];
var nameUsr;
var stringPlat = "";
var temo = 0;
var UserNames = [];
var UserNamesE = [];

$(document).ready(function(){

 $.ajax({
          url: "data/ApplicationLayer.php",
          type: "POST",
          data: {"action" : "ORDERSLOAD"},
          dataType: "json",
          contentType: "application/x-www-form-urlencoded",
          success:function(jsonObject){
            var i = 0;
            $.each(jsonObject ,function(co, co2){
              if (co2 != null) {
                tempA = co2.list;
                tempN = parseInt(co2.num);
                platArr = tempA.split("-");
                tempName = co2.name1;
                tempDir = co2.direccion;
                tempTotal = co2.total;
                var currentHTML = "";
                for (var i = 0; i < tempN; i++) {
                  currentHTML+= "<spam class='orderItem'><label>" + platArr[i] + "</br>";
                }
                currentHTML += "</label></br><label>" + tempName + " " + tempDir + " total: $"+tempTotal+".00</label></span></br></br>"+
                               "<input id='button_"+i+"' type='submit' class='requestB' value='  Marcar como Enviado  '/></br></div>";
                UserNames[i] = tempName;
                i = i + 1;
                $("#ordenPen").append(currentHTML);
              }
            })
          },
          error:function(errorMsg){
            //alert("Comment database error");
          }
  })

  $.ajax({
          url: "data/ApplicationLayer.php",
          type: "POST",
          data: {"action" : "ORDERSLOAD2"},
          dataType: "json",
          contentType: "application/x-www-form-urlencoded",
          success:function(jsonObject){
            var i = 0;
            $.each(jsonObject ,function(co, co2){
              tempA = co2.list;
              tempN = parseInt(co2.num);
              platArr = tempA.split("-");
              tempName = co2.name1;
              tempDir = co2.direccion;
              var currentHTML = "";
              for (var i = 0; i < tempN; i++) {
                currentHTML+= "<spam class='orderItem'><label>" + platArr[i] + "</br>";
              }
              currentHTML += "</label></br><label>" + tempName + " " + tempDir + " "+ "</label></span></br></br>"+
               "<input id='button_"+i+"' type='submit' class='requestC' value='  Marcar como Entregado  '/></br></div>";              
              UserNamesE[i] = tempName;
              i = i + 1;
              $("#ordenEnv").append(currentHTML);

            })
          },
          error:function(errorMsg){
            //alert("Comment database error");
          }
  })

  $("#ordenPen").on("click",".requestB",function(){

        var id = $(this).attr("id");
        var idN = id.slice(7);
        var Nn = parseInt(idN);
        var dataToSend = {
            "action" : "DELIVERORDER",
            "sentName" : UserNames[Nn]
        };

        $.ajax({
            url: "data/ApplicationLayer.php",
            type: "POST",
            data: dataToSend,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            success:function(jsonObject){
              window.location.href = "habanero_ordenesAdmin.html";
            },
            error:function(errorMsg){
              alert("Access error");
            }
        });
   });

  $("#ordenEnv").on("click",".requestC",function(){

        var id = $(this).attr("id");
        var idN = id.slice(7);
        var Nn = parseInt(idN);
        var dataToSend = {
            "action" : "DELIVEREDORDER",
            "sentName" : UserNamesE[Nn]
        };

        $.ajax({
            url: "data/ApplicationLayer.php",
            type: "POST",
            data: dataToSend,
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            success:function(jsonObject){
              window.location.href = "habanero_ordenesAdmin.html";
            },
            error:function(errorMsg){
              alert("Access error");
            }
        });
   });




});



