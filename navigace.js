$( document ).ready(function() {
  vymazID(); //vymazani duplicitnich ID
  //pozice scrollu
  var percent;
    window.addEventListener("scroll", getScrollPercent);
    function getScrollPercent() {
      percent = window.pageYOffset / document.body.scrollHeight;
    }
  window.addEventListener("resize", function(){
    alert ("resize");
    var Ypos = document.body.scrollHeight * percent;
    window.scrollTo(0, Ypos);
  });
  
  
  //zavirani menu na mobilu a tabletu
 $('.w-nav-menu').on('click', 'a', function() {
 	 $('.w-nav-button.w--open').triggerHandler('tap');
  });
  //oznacovani aktivního menu na klik a na scroll
            let menuScrollTimer = null;
            $(".nav-menu a").click(function (e) {
                // Prevent default behaviour ( scroll to element )
                //e.preventDefault();
                if (menuScrollTimer === null) {
                    // Highlight the clicked item
                    $('.nav-menu a.active').removeClass('active');
                    $(this).addClass('active');
                    // Smooth scroll to the target section
                    let target = $(this).attr('href').substring(1);
                    $('html, body').animate({ scrollTop: $(target).offset().top - 100 }, 1050);
                    // Set `menuScrollTimer` timer
                    // This will prevents multiple clicks on menu items whule the smooth scroll is taking effect
                    // This will also prevent the scroll logic from running
                    menuScrollTimer = setTimeout(function () {
                        clearTimeout(menuScrollTimer);
                        menuScrollTimer = null;
                    }, 1050);
                }
            });

            $(window).scroll(function (e) {
                // Avoid triggering the logic if the scroll event is triggerd from clicking one of the items
                if (menuScrollTimer === null) {
                    let windowTop = $(this).scrollTop();

                    $('.nav-menu a').each(function (event) {
                      	var target = $(this).attr('href').substring(1);
                        if (windowTop >= $(target).offset().top - 100) {
                            $('.nav-menu .active').removeClass('active');
                            $(this).addClass('active');
                        }
                    });
                }
            });
});

$(window).resize(vymazID);

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
           i++;
      });
}

