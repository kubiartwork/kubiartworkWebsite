//PAGE SCRIPTS

//Get Year
function getCurrentYear() {
  var d = new Date();
  var n = d.getFullYear();
  $(".currYear").text(n);
}
return getCurrentYear;

