$(document).ready(function()
{
    $("#add").on("click", listabaIr);
    $('li').delegate('img ','click', torles);
});
var torlesId=0;
var keszId=0;
function listabaIr(){
   var listaElem = $("#todo").val()+" "+$("#datum").val();
   $("section").append("<li>"+listaElem).append("<img src='kepek/delete.ico' id='t"+torlesId+"'>").append("<img src='kepek/pipa.png' id='k"+keszId+"'>").append("<li>");
   torlesId++;
   keszId++;
}

