var nameUsr;

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
      },
      error:function(errorMsg){
        alert("No se tiene una sesi&oacute;n abierta");
      }
  }); 
  /*
 $.ajax({
      url: "data/ApplicationLayer.php",
      type: "POST",
      data: {"action" : "MESALOAD"},
      dataType: "json",
      contentType: "application/x-www-form-urlencoded",
      success:function(jsonObject){
        if (jsonObject == "HAY") {
          var currentHTML = "";
            currentHTML+= "<font color='green'><h3>HAY MESAS DISPONIBLES</h3></font>";
            $("#dispM").append(currentHTML);
        };
        if (jsonObject == "NOHAY") {
          var currentHTML = "";
            currentHTML+= "<font color='red'><h3>NO HAY MESAS DISPONIBLES</h3></font>";
            $("#dispM").append(currentHTML);
        };
      },
      error:function(errorMsg){
        alert("Comment database error");
      }
  })*/

 $("#tableButton").on("click",function(){

    var dataToSend = {
      "action" : "SAVETABLE",
      "fecha" : $("#date").val(),
      "hora" : $("#time").val(),
      "cantPer" :$("#numPer").val(),
      "username" : nameUsr
    };

    $.ajax({
      url: "data/ApplicationLayer.php",
      type: "POST",
      data: dataToSend,
      dataType: "json",
      contentType: "application/x-www-form-urlencoded",
      success:function(jsonObject){
        alert("Mesa reservada");
        window.location.replace("habanero_home.html");
      },
      error:function(errorMsg){
        alert("Error al guardar la mesa");
      }
    }); 
  });
});


