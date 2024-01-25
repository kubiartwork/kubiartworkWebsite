
function getCurrentYear() {
  var d = new Date();
  var n = d.getFullYear();
  $(".currYear").text(n);
};
  

function runMasonryLayout() {
  $(".grid").masonry({
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
    fitWidth: true,
    horizontalOrder: true
  });
};
