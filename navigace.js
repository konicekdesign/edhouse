$(document).ready(function () {
      vymazID();
});

var resizeTimer;

$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    vymazID();          
  }, 250);
});

$(document).keydown(function(e) {
      if($(".section").is(":visible")) {
      //alert(e.which);
      switch(e.which) {
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
                  
         case 32: // space
             if (e.shiftKey) { // space + shift
              posunDoleva();
             } else {
                 posunDoprava();
             }
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

function vymazID(){
      // smazani duplicitnich ID			
      //$(".kotva:hidden, .section:hidden").remove();
      var i = 0;
      $(".kotva").each(function() { 
           if($(this).is(':visible')) { //mobil
                 $(this).attr("id",  $(".section").eq(i).attr("id"));
                 $(".section").eq(i).attr("id","");
           }
           if($(this).is(':hidden')) { //desktop
                 $(".section").eq(i).attr("id",  $(this).attr("id"));
                 $(this).attr("id","");
           }
      });
}

