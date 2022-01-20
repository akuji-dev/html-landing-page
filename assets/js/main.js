$(document).ready(function(){
  function SlideElement(button, elementWrapper, element, toggle){
    $("."+button).click(function(){
      var targetElement = $(this).attr("target");
      if($(this).hasClass("active")){
        if(toggle == true){
          $(this).removeClass("active");
          $("."+element+"[value="+targetElement+"]").removeClass("active");
        }
      }else{
        $("."+button).each((introItemCount, introItem) => {
          $(introItem).removeClass("active");
        });
        $(this).addClass("active");
        
        $("."+element).each((introItemCount, introItem) => {
          $(introItem).removeClass("active");
        });
        $("."+element+"[value="+targetElement+"]").addClass("active");
        $('html, body').animate({
          scrollTop: $("#"+elementWrapper).offset().top
        }, 1000);
      }
    })
  }
  SlideElement("hero__box", "intro", "intro__content__item", true);
  SlideElement("info__sidebar__item", "info", "info__content__item", true);

  $(".intro__read__icon").click(function(){
    var box = $(this).parent().parent();
    box.addClass("active");
    console.log();
  })
})

// Tenstimonal
function Testimonial(dir){
  var testimonialWrapper = document.querySelector(".rating__wrapper");
  var testimonialItems = [].slice.call(testimonialWrapper.children);
  var testimonialItemsCount = testimonialWrapper.childElementCount;
  var testimonialActive = document.querySelector(".rating__wrapper .active");
  var testimonialActiveIndex = Array.prototype.indexOf.call(testimonialWrapper.children, testimonialActive);
  var testimonialItemNext = testimonialItems[(testimonialActiveIndex + 1)];
  var testimonialItemPrev = testimonialItems[(testimonialActiveIndex - 1)];
  var testimonialItemLast = testimonialItems[(testimonialItemsCount - 1)];
  var testimonialFirstItem = testimonialItems[0];
  var testimonialWidth = testimonialFirstItem.offsetWidth;
  var testimonialNextLeft = testimonialWidth * (testimonialActiveIndex + 1);
  var testimonialPrevLeft = testimonialWidth * (testimonialActiveIndex - 1);
  var testimonialFullLeft = testimonialWidth * (testimonialItemsCount - 1);


  if(dir == "next" && testimonialItemsCount > 1){
    if((testimonialActiveIndex + 1 ) == testimonialItemsCount){
      testimonialFirstItem.style.marginLeft = "0px";
      testimonialActive.classList.remove("active");
      testimonialFirstItem.classList.add("active");
    }else{
      testimonialFirstItem.style.marginLeft = "-"+testimonialNextLeft+"px";
      testimonialActive.classList.remove("active");
      testimonialItemNext.classList.add("active");
    }
  }else if(dir == "prev" && testimonialItemsCount > 1){
    if((testimonialActiveIndex + 1) == 1){
      testimonialFirstItem.style.marginLeft = "-"+testimonialFullLeft+"px";
      testimonialActive.classList.remove("active");
      testimonialItemLast.classList.add("active");
    }else{
      testimonialFirstItem.style.marginLeft = "-"+testimonialPrevLeft+"px";
      testimonialActive.classList.remove("active");
      testimonialItemPrev.classList.add("active");
    }
  }

}