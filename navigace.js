/*
$(document).bind('keypress', function(e) {
    
    if( event.which === 32 && event.shiftKey ) {
        alert("shift + mezerník");
    }
e.preventDefault(); 
});
*/
$(document).bind('keypress', function(e) {
      if($(".section").is(":visible")) {
      switch(e.which) {
          case 32: // space
             posunDoprava();
          break;
              
          case (32 && 16) // space + shift
             posunDoleva();
          break;
                  
          case 33: // pageup
              posunDoleva();
          break;
                  
          case 34: // pagedown
             posunDoprava();
          break;
          
          case 37: // left
              posunDoleva();
          break;

         case 38: // up
             posunDoleva();
         break;

         case 39: // right
             posunDoprava();
         break;

         case 40: // down
             posunDoprava();
         break;

         default: return; 
     }
      
     e.preventDefault(); 
     } //endif
  });

function getYPosition(){
  var top  = window.pageYOffset || document.documentElement.scrollTop
  return top;
}

function posunDoleva(){
    var pozice = getYPosition();
    var vyska = $(".section").outerHeight();
    var next = Math.floor(pozice / vyska) * vyska - vyska;
    $('html, body').animate({ scrollTop: next }, 300);
}
function nothing(){
    
}
function posunDoprava(){
    var pozice = getYPosition();
    var vyska = $(".section").outerHeight();
    var next = Math.floor(pozice / vyska) * vyska + vyska;
    $('html, body').animate({ scrollTop: next }, 300);
}

