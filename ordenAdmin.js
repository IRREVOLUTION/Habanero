var numDePlat = 0;
var platArr = [];
var nameUsr;
var stringPlat = "";
var temo = 0;
var UserNames = [];
var UserNamesE = [];

$(document).ready(function(){
 $("#menu > li").click(function(){
        var identifier = $(this).attr("id");
        
        $("#menu > li").removeClass('selected');
        $(this).addClass('selected');
        
        $("#tabcontent > div").removeClass('active');
        $("#tabcontent > #content-" + identifier).addClass('active');

      if (identifier == "tab1") {
        window.location.href = "habanero_admin.html";
      }
      if (identifier == "tab2") {
        window.location.href = "habanero_ordenesAdmin.html";
      }
      if (identifier == "tab3") {
        window.location.href = "habanero_inventorio.html";
      }
      if (identifier == "tab4") {
        window.location.href = "habanero_VdD.html";
      }
      if (identifier == "tab5") {
        window.location.href = "habanero_login.html";
      }
  });
});

$(document).ready(function(){

 $.ajax({
          url: "data/ApplicationLayer.php",
          type: "POST",
          data: {"action" : "ORDERSLOAD"},
          dataType: "json",
          contentType: "application/x-www-form-urlencoded",
          success:function(jsonObject){
            var i = 0;
            var xy=0;
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
                  xy = platArr[i];
     //             inv(xy);
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

 /* function inv(xy){
    var dataToSend = {"action" : "inv","platArr"};
          url: "data/ApplicationLayer.php",
          data: dataToSend,
          dataType: "json",
          type: "POST",
          contentType: "application/x-www-form-urlencoded",
          success:function(jsonObject){
            var i = 0;
            $.each(jsonObject ,function(co, co2){
              if (co2 != null) {
                var currentHTML = "";
                for (var i = 0; i < tempN; i++) {
                  currentHTML+= "<spam class='orderItem'><label>" + platArr[i] + "</br>";
                  inv();
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
  }*/
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



