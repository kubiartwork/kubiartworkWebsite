
function getCurrentYear() {
  var d = new Date();
  var n = d.getFullYear();
  $(".currYear").text(n);
};
  



$('.grid').masonry({
  // options...
  itemSelector: '.grid-item',
  columnWidth: 200
});
