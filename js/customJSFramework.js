
function getCurrentYear() {
  var d = new Date();
  var n = d.getFullYear();
  $(".currYear").text(n);
};
  

// element
imagesLoaded( document.querySelector('#container'), function( instance ) {
  console.log('all images are loaded');
});




// vanilla JS
// init with element
var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  // options...
  itemSelector: '.grid-item',
  columnWidth: 200
});

// init with selector
var msnry = new Masonry( '.grid', {
  // options...
});
