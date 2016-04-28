$(document).ready(function(){

 $("#menuHome > li").click(function(){
        var identifier = $(this).attr("id");
        
        $("#menuHome > li").removeClass('selected');
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


