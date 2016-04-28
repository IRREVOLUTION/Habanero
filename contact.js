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

});


