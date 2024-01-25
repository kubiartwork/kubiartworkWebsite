
function getCurrentYear() {
  var d = new Date();
  var n = d.getFullYear();
  $(".currYear").text(n);
};
  



var msnry = new Masonry( '.grid', {
  columnWidth: 200,
  itemSelector: '.grid-item'
});
