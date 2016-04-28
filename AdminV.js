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
    "action": "Ventas"
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
        var name;
        var list;
        var innerH;
        var Total;
        var Date1;
        var CLength = data.length;
          for (i = 0; i < CLength; i++) {
            name = data[i].name1;
            list = data[i].list;
            Total = data[i].total;
            Date1 = data[i].Date1;
            innerH +="<tr><td>"+name+"</td><td>"+list+"</td><td>"+Total+"</td><td>"+Date1+"</td></tr>";
        }
      cont1++;
        $("#VT").append(innerH);
      },
      error:function(errorMsg){
        alert("fallaron los tacos");
      }
  });
});

/*$(document).on("ready",function(){
  var dataToSend={
    "action": "VentasT"
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
        var name;
        var list;
        var innerH;
        var Total;
        var Date1;
        var CLength = data.length;
        for (i = 0; i < CLength; i++) {
            Total = data[i].total;
            Date1 = data[i].Date1;
            innerH +="<tr><td>"+Total+"</td><td>"+Date1+"</td></tr>";
        }
      cont1++;
        $("#VT").append(innerH);
      },
      error:function(errorMsg){
        alert("fallaron los tacos");
      }
  });
});*/