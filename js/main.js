$(function(){
   
    $('.burger-menu').on('click' , function(){
        $('.mobile-nav').addClass('mobile-nav--active');
        
         
    });

    $('.burger-menu__close').on('click',function(){
        $('.mobile-nav').removeClass('mobile-nav--active');
    });
    $('.mobile-nav__link').on('click',function(){
        $('.mobile-nav').removeClass('mobile-nav--active');
    });

    $('nav a').on('click', function(e) {
       if(this.hash !== ''){
           e.preventDefault();

           const hash = this.hash;

           $('html,body').animate({
                scrollTop : $(hash).offset().top
           },
           800
           )
           
       } 
        
    });

     
     
});

const animItems = document.querySelectorAll('._anim-items');

    if(animItems.length > 0){
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll(){
            for (let index = 0; index < animItems.length; index++) {
               const animItem = animItems[index];
               const animItemHeight = animItem.offsetHeight;
               const animItemOffset = offset(animItem).top;
               const animStart = 4;
               
               let animItemPoint = window.innerHeight - animItemHeight / animStart;
    
               if(animItemHeight > window.innerHeight){
                   animItemPoint = window.innerHeight - window.innerHeight / animStart;
               }
               if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                   animItem.classList.add('_active');
               }
               else{

                   if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active'); 
                   }
                 
                   
               }
    
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop  = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft} 
            
        }
        setTimeout(() => {
            animOnScroll();
        }, 300);

        
    }

 

