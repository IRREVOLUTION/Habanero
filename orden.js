var numDePlat = 0;
var nameUsr, dirUsr;
var stringPlat = "";
var temo = 0;
var total = 0;

$(document).ready(function(){

 $("#menu > li").click(function(){
        var identifier = $(this).attr("id");
        
        $("#menu > li").removeClass('selected');
        $(this).addClass('selected');
        
        $("#tabcontent > div").removeClass('active');
        $("#tabcontent > #content-" + identifier).addClass('active');

        if (identifier == "tab1") {
          window.location.href = "habanero_home.html";
        }
        if (identifier == "tab2") {
          window.location.href = "habanero_menu.html";
        }
        if (identifier == "tab3") {
          window.location.href = "habanero_orden.html";
        }
        if (identifier == "tab4") {
          window.location.href = "habanero_separar.html";
        }
        if (identifier == "tab5") {
          window.location.href = "habanero_contact.html";
        }
        if (identifier == "tab6") {
          window.location.href = "habanero_login.html";
        }
  });

 $.ajax({
    type: "POST",
    url: "data/ApplicationLayer.php",
    data: {"action" : "SSERVICE"},
    dataType: "json",
    contentType: "application/x-www-form-urlencoded",
      success:function(sessionObjJson) {
        nameUsr = sessionObjJson.nameU;
        dirUsr = sessionObjJson.address;
      },
      error:function(errorMsg){
        alert("No se tiene una sesi&oacute;n abierta");
      }
  }); 

 $.ajax({
      url: "data/ApplicationLayer.php",
      type: "POST",
      data: {"action" : "MENULOAD"},
      dataType: "json",
      contentType: "application/x-www-form-urlencoded",
      success:function(jsonObject){
        $.each(jsonObject ,function(co, co2){

          if (co2.Class == "taco") {
            var currentHTML = "";
            currentHTML+= "<div class='ordenarI'><div class='orderIzq'><h3>" + co2.nameM + "</h3>";
            currentHTML += "<select id = plat"+numDePlat+"num>";
            currentHTML += orderfill(co2.nameM, co2.precio);
            currentHTML+= "</select> </br>";
            
            if (co2.nameM != "undefined") {
              $("#tacos").append(currentHTML);
              numDePlat = numDePlat + 1;
            }
          };
          if (co2.Class == "entrada") {
            var currentHTML = "";
            currentHTML+= "<div class='ordenarI'><div class='orderIzq'><h3>" + co2.nameM + "</h3>";
            currentHTML += "<select id = plat"+numDePlat+"num>";
            currentHTML += orderfill(co2.nameM, co2.precio);
            currentHTML+= "</select> </br>";
          
            if (co2.nameM != "undefined") {
              $("#entradas").append(currentHTML);
              numDePlat = numDePlat + 1;
            }
          };
          if (co2.Class == "plato") {
            var currentHTML = "";
            currentHTML+= "<div class='ordenarI'><div class='orderIzq'><h3>" + co2.nameM + "</h3>";
            currentHTML += "<select id = plat"+numDePlat+"num>";
            currentHTML += orderfill(co2.nameM, co2.precio);
            currentHTML+= "</select> </br>";
          
            if (co2.nameM != "undefined") {
              $("#platillos").append(currentHTML);
              numDePlat = numDePlat + 1;
            }
          };

          if (co2.Class == "complemento") {
            var currentHTML = "";
            currentHTML+= "<div class='ordenarI'><div class='orderIzq'><h3>" + co2.nameM + "</h3>";
            currentHTML += "<select id = plat"+numDePlat+"num>";
            currentHTML += orderfill(co2.nameM, co2.precio);
            currentHTML+= "</select> </br>";
          
            if (co2.nameM != "undefined") {
              $("#complemento").append(currentHTML);
              numDePlat = numDePlat + 1;
            }
          };

          if (co2.Class == "kilo") {
            var currentHTML = "";
            currentHTML+= "<div class='ordenarI'><div class='orderIzq'><h3>" + co2.nameM + "</h3>";
            currentHTML += "<select id = plat"+numDePlat+"num>";
            currentHTML += orderfill(co2.nameM, co2.precio);
            currentHTML+= "</select> </br>";
          
            if (co2.nameM != "undefined") {
              $("#kilo").append(currentHTML);
              numDePlat = numDePlat + 1;
            }
          };

        })
      },
      error:function(errorMsg){
        alert("Comment database error");
      }
    })

var Ord = [];
var xz =0;
  $("#saveOrderButton").on("click",function(){

    for (var i = 1; i <= numDePlat; i++) {
      var selectID = "#plat"+(i-1)+"num"; 
      if ($(selectID).val() != 0) {
          var lect = $(selectID).val();
          var res = lect.split(".");
          var prec = res[2];
          var orde = res[1];
          Ord[xz] = orde;
          xz++;
          prec = prec.slice(1,3);
          var precN = parseInt(prec);
          var numP = res[0];
          var numPN = parseInt(numP);
          total = total + (precN * numPN);
          temo = temo + 1;
          //rd[i] = 
          stringPlat = stringPlat + $(selectID).val() + "-";
      };
    };

    var dataToSend = {
      "action" : "SAVEORDER",
      "order2Save" : stringPlat,
      "username" : nameUsr,
      "address" : dirUsr,
      "cantPlat" : temo,
      "total" : total,
      "Orden" : Ord,
      "LO" : xz
    };

    $.ajax({
      url: "data/ApplicationLayer.php",
      type: "POST",
      data: dataToSend,
      dataType: "json",
      contentType: "application/x-www-form-urlencoded",
      success:function(jsonObject){
        //alert(jsonObject.fName+ " " +jsonObject.lName);
        alert("Orden guradada");
        window.location.href = "habanero_confirm.html";
      },
      error:function(errorMsg){
        alert("Este Usuario ya tiene una orden en proceso");
        window.location.href = "habanero_confirm.html";
      }
    }); 
});
});

function orderfill(paltName, platPre){
  var numParaPlat =   "<option value = '0'>0</option>"+
                            "<option value = '1. "+paltName+" .$"+platPre+"'>1</option>"+
                            "<option value = '2. "+paltName+" .$"+platPre+"'>2</option>"+
                            "<option value = '3. "+paltName+" .$"+platPre+"'>3</option>"+
                            "<option value = '4. "+paltName+" .$"+platPre+"'>4</option>"+
                            "<option value = '5. "+paltName+" .$"+platPre+"'>5</option>";
  return numParaPlat;
}




