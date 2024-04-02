$(function(){ 
    //* console.log("I'm ready now.");//

    //1-Custom Curser//
    $(document).ready(function(){
        var cursor = $(".cursor");
        
            $(window).mousemove(function(e) {
                cursor.css({
                    top: e.clientY - cursor.height() / 2,
                    left: e.clientX - cursor.width() / 2
                });
            });
        
            $(window)
                .mouseleave(function() {
                    cursor.css({
                        opacity: "0"
                    });
                })
                .mouseenter(function() {
                    cursor.css({
                        opacity: "1"
                    });
                });
        
            $(".link")
                .mouseenter(function() {
                    cursor.css({
                        transform: "scale(3.2)"
                    });
                })
                .mouseleave(function() {
                    cursor.css({
                        transform: "scale(1)"
                    });
                });
        
            $(window)
                .mousedown(function() {
                    cursor.css({
                        transform: "scale(.2)"
                    });
                })
                .mouseup(function() {
                    cursor.css({
                        transform: "scale(1)"
                    });
                });
        });


    //2-Image Pop-Up//
    $(".pop-image").hover(
        function() {
            $(this).css("transform", "scale(1.04)");
        },
        function() {
            $(this).css("transform", "scale(1)");
        });

    $(".column2").hover(
        function() {
            $(this).css("transform", "scale(1.04)");
        },
        function() {
            $(this).css("transform", "scale(1)");
        });
    
    $(document).ready(function() {
        $(".CTA").hover(function() {
            $(this).css({
                "font-size": "19px"
            });
        
        }, function() {
            $(this).css({
              "font-size": "14px"
                });
            });
        
        });

        $(".imagecolumn").hover(
            function() {
                $(this).css("transform", "scale(1.04)");
            },
            function() {
                $(this).css("transform", "scale(1)");
        });

        //3-Type-In for Coming Soon!// 

        $(document).ready(function() {
            var str = "Coming Soon!";
            var spans = '<span>' + str.split(/\s+/).join('</span> <span>') + '</span>';
            
            $('.coming-soon h1').html(spans).find('span').hide().each(function(i) {
                $(this).delay(400 * i).fadeIn(1000);
            });
        });


         //4-Fade-In for Intro section// 

        $(document).ready(function() {
            var h2 = $('.intro .textcolumn h2');
            
            h2.hide().contents().each(function() {
                var words;
                if (this.nodeType === 3) {
                    words = '<span> ' + this.data.split(/\s+/).join(' </span><span> ') + ' </span>';
                    $(this).replaceWith(words);
                }
            });
            
            h2.find('span').hide().each(function() {
                if (!($.trim(this.innerHTML))) {
                    $(this).remove();
                }
            });
            
            h2.show().find('span').each(function(i) {
                $(this).delay(200 * i).fadeIn(1000);
            });
        
            var paragraph = $('.intro .textcolumn p');
            
            paragraph.hide().contents().each(function() {
                var words;
                if (this.nodeType === 3) {
                    words = '<span> ' + this.data.split(/\s+/).join(' </span><span> ') + ' </span>';
                    $(this).replaceWith(words);
                }
            });
            
            paragraph.find('span').hide().each(function() {
                if (!($.trim(this.innerHTML))) {
                    $(this).remove();
                }
            });
            
            paragraph.show().find('span').each(function(i) {
                $(this).delay(200 * i).fadeIn(1000);
            });
        });


        //5-Hamburger Menu//    
            $("#menu").hide();
            $("#burger").click(function() {
                $("#menu").slideToggle ("slow");
            });

            $(document).click(function() {
                $("#menu").slideUp ("slow");
            });

            $("#burger").click(function(e) {
                e.stopPropagation();
                return false;
            });


        
            
        //6-Image Carousel for Students// 

        const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
        
           
});