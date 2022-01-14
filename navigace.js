$(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
              posunDoleva();
          break;

         case 38: // up
             nothing();
         break;

         case 39: // right
             posunDoprava();
         break;

         case 40: // down
             selectCurrentSection();
         break;

         default: return; 
     }
     e.preventDefault(); 
  });
function getYPosition(){
  var top  = window.pageYOffset || document.documentElement.scrollTop
  return top;
}

function posunDoleva(){
    var pozice = getYPosition();
    var vyska = $(".section").outerHeight();
    var next = Math.floor(pozice / vyska) * vyska - vyska;
    $('html, body').animate({ scrollTop: next }, 500);
}
function nothing(){
    
}
function posunDoprava(){
    var pozice = getYPosition();
    var vyska = $(".section").outerHeight();
    var next = Math.floor(pozice / vyska) * vyska + vyska;
    $('html, body').animate({ scrollTop: next }, 500);
}
function selectCurrentSection(){
    alert("down pressed");
}
