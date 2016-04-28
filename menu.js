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
      url: "data/ApplicationLayer.php",
      type: "POST",
      data: {"action" : "MENULOAD"},
      dataType: "json",
      contentType: "application/x-www-form-urlencoded",
      success:function(jsonObject){
        $.each(jsonObject ,function(co, co2){

          if (co2.Class == "taco") {
            var currentHTML = "";
            currentHTML+= "<div class='menuI'><div class='menuIzq'><h2>" + co2.nameM + "</h2>";
            currentHTML += "<label>" + " Precio: $"+ co2.precio + "</label> </br>";
            currentHTML += "<label id='descriptionText'>" + co2.descr + "</label>";
            currentHTML+= "</div> </br>";
            if (co2.img != "img/habanero_logo.jpg") {
              currentHTML += "<div><img src='"+co2.img+"'height='300' width='400'></div></div>";
            }
          
            if (co2.nameM != "undefined") {
              $("#tacos").append(currentHTML);
            }
          };
          if (co2.Class == "entrada") {
            var currentHTML = "";
            currentHTML+= "<div class='menuI'><div class='menuIzq'><h2>" + co2.nameM + "</h2>";
            currentHTML += "<label>" + " Precio: $"+ co2.precio + "</label> </br>";
            currentHTML += "<label id='descriptionText'>" + co2.descr + "</label>";
            currentHTML+= "</div> </br>";
            if (co2.img != "img/habanero_logo.jpg") {
              currentHTML += "<div><img src='"+co2.img+"'height='300' width='400'></div></div>";
            }
          
            if (co2.nameM != "undefined") {
              $("#entradas").append(currentHTML);
            }
          };
          if (co2.Class == "plato") {
            var currentHTML = "";
            currentHTML+= "<div class='menuI'><div class='menuIzq'><h2>" + co2.nameM + "</h2>";
            currentHTML += "<label>" + " Precio: $"+ co2.precio + "</label> </br>";
            currentHTML += "<label id='descriptionText'>" + co2.descr + "</label>";
            currentHTML+= "</div> </br>";
            if (co2.img != "img/habanero_logo.jpg") {
              currentHTML += "<div><img src='"+co2.img+"'height='300' width='400'></div></div>";
            }
          
            if (co2.nameM != "undefined") {
              $("#platillos").append(currentHTML);
            }
          };

          if (co2.Class == "complemento") {
            var currentHTML = "";
            currentHTML+= "<div class='menuI'><div class='menuIzq'><h2>" + co2.nameM + "</h2>";
            currentHTML += "<label>" + " Precio: $"+ co2.precio + "</label> </br>";
            currentHTML += "<label id='descriptionText'>" + co2.descr + "</label>";
            currentHTML+= "</div> </br>";
            if (co2.img != "img/habanero_logo.jpg") {
              currentHTML += "<div><img src='"+co2.img+"'height='300' width='400'></div></div>";
            }
          
            if (co2.nameM != "undefined") {
              $("#complemento").append(currentHTML);
            }
          };

          if (co2.Class == "kilo") {
            var currentHTML = "";
            currentHTML+= "<div class='menuI'><div class='menuIzq'><h2>" + co2.nameM + "</h2>";
            currentHTML += "<label>" + " Precio: $"+ co2.precio + "</label> </br>";
            currentHTML += "<label id='descriptionText'>" + co2.descr + "</label>";
            currentHTML+= "</div> </br>";
            if (co2.img != "img/habanero_logo.jpg") {
              currentHTML += "<div><img src='"+co2.img+"'height='300' width='400'></div></div>";
            }
          
            if (co2.nameM != "undefined") {
              $("#kilo").append(currentHTML);
            }
          };
        })
      },
      error:function(errorMsg){
        alert("Comment database error");
      }
  })
});


