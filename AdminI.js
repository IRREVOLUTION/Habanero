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

var cont1=0;

$(document).on("ready",function(){
  var dataToSend={
    "action": "Inventario"
  };
  $.ajax({
      url:"data/ApplicationLayer.php",
      data: dataToSend,
      dataType: "json",
      type: "POST",
      contentType: "application/x-www-form-urlencoded",
      success:function(data){
        var Va = "";
            Va = data;
        var ing;
        var innerH;
        var Cant;
        var CLength = data.length;
          for (i = 0; i < CLength; i++) {
            ing = data[i].Ing
            Cant = data[i].CantKG;
            innerH +="<tr><td>"+ing+"</td><td>"+Cant+"</td></tr>";
            if(data[i].Ing=="Pan" && Cant < 40){
              $("#pan").html("<p> Ocupas comprar mas Pan para el inventorio solo quedan 40KG para un dia approx </p>");
            }

            if(data[i].Ing=="cebolla" && Cant < 30){
              $("#cebolla").html("<p> Ocupas comprar mas cebolla para el inventorio solo quedan 30KG para un dia approx </p>");
            }
            
            if(data[i].Ing=="salchicha" && Cant < 40){
              $("#salchicha").html("<p> Ocupas comprar mas Salchicha para el inventorio solo quedan 40KG para dos dia approx</p>");
            }

            if(data[i].Ing=="aguacate" && Cant < 30){
              $("#aguacte").html("<p> Ocupas comprar mas aguacate para el inventorio solo quedan 30KG para un dia approx</p>");
            }

            if(data[i].Ing=="papas" && Cant < 40){
              $("#papas").html("<p> Ocupas comprar mas papas para el inventorio solo quedan 40KG para un dia approx</p>");
            }

            if(data[i].Ing=="Carne Asada" && Cant < 45){
              $("#CarneA").html("<p> Ocupas comprar mas Carne Asada para el inventorio solo quedan 45KG para un dia approx</p>");
            }
            
            if(data[i].Ing=="queso" && Cant < 30){
              $("#queso").html("<p> Ocupas comprar mas queso para el inventorio solo quedan 30KG para un dia approx</p>");
            }

            if(data[i].Ing=="tortillas de maiz" && Cant < 50){
              $("#tortillasM").html("<p> Ocupas comprar mas tortillas de maiz para el inventorio solo quedan 50KG para un dia approx</p>");
            }
            
            if(data[i].Ing=="tortillas de harina" && Cant < 50){
              $("#tortillasA").html("<p> Ocupas comprar mas tortillas de arina para el inventorio solo quedan 50KG para un dia approx</p>");
            }

            if(data[i].Ing=="Sodas" && Cant < 60){
              $("#sodas").html("<p> Ocupas comprar mas Sodas para el inventorio solo quedan 60 para un dia approx</p>");
            }
            
            if(data[i].Ing=="chorizo" && Cant < 45){
              $("#chorizo").html("<p> Ocupas comprar mas chorizo para el inventorio solo quedan 45KG para un dia approx</p>");
            }

            if(data[i].Ing=="tocino" && Cant < 50){
              $("#tocino").html("<p> Ocupas comprar mas tocino para el inventorio solo quedan 50KG para un dia approx</p>");
            }
            
            if(data[i].Ing=="chile morron" && Cant < 30){
              $("#ChileM").html("<p> Ocupas comprar mas Chile morron para el inventorio solo quedan 30KG para un dia approx</p>");
            }

            if(data[i].Ing=="frijoles" && Cant < 40){
              $("#frijoles").html("<p> Ocupas comprar mas frijoles para el inventorio solo quedan 40KG para un dia approx</p>");
            }
            
            if(data[i].Ing=="salsa" && Cant < 60){
              $("#salsa").html("<p> Ocupas comprar mas salsa para el inventorio solo quedan 60KG para un dia approx</p>");
            }
            
            if(data[i].Ing=="Chile" && Cant < 50){
              $("#chile").html("<p> Ocupas comprar mas chile para el inventorio solo quedan 50KG para un dia approx</p>");
            }
        }
      cont1++;
        $("#inventorio").append(innerH);
      },
      error:function(errorMsg){
        alert("fallaron los tacos");
      }
  });
});