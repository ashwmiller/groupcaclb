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

            const initSlider = () => {
                const imageList = document.querySelector(".slider-wrapper .image-list");
                const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
                const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
                const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
                const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
                
                // Handle scrollbar thumb drag
                scrollbarThumb.addEventListener("mousedown", (e) => {
                    const startX = e.clientX;
                    const thumbPosition = scrollbarThumb.offsetLeft;
                    const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
                    
                    // Update thumb position on mouse move
                    const handleMouseMove = (e) => {
                        const deltaX = e.clientX - startX;
                        const newThumbPosition = thumbPosition + deltaX;
                        // Ensure the scrollbar thumb stays within bounds
                        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
                        
                        scrollbarThumb.style.left = `${boundedPosition}px`;
                        imageList.scrollLeft = scrollPosition;
                    }
                    // Remove event listeners on mouse up
                    const handleMouseUp = () => {
                        document.removeEventListener("mousemove", handleMouseMove);
                        document.removeEventListener("mouseup", handleMouseUp);
                    }
                    // Add event listeners for drag interaction
                    document.addEventListener("mousemove", handleMouseMove);
                    document.addEventListener("mouseup", handleMouseUp);
                });
                // Slide images according to the slide button clicks
                slideButtons.forEach(button => {
                    button.addEventListener("click", () => {
                        const direction = button.id === "prev-slide" ? -1 : 1;
                        const scrollAmount = imageList.clientWidth * direction;
                        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
                    });
                });
                 // Show or hide slide buttons based on scroll position
                const handleSlideButtons = () => {
                    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
                    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
                }
                // Update scrollbar thumb position based on image scroll
                const updateScrollThumbPosition = () => {
                    const scrollPosition = imageList.scrollLeft;
                    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
                    scrollbarThumb.style.left = `${thumbPosition}px`;
                }
                // Call these two functions when image list scrolls
                imageList.addEventListener("scroll", () => {
                    updateScrollThumbPosition();
                    handleSlideButtons();
                });
            }
            window.addEventListener("resize", initSlider);
            window.addEventListener("load", initSlider);
            
        //7-Image Carousel for Staff// 
        
           
});