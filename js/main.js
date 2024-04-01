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


            //6-Image Carousel// 
           
});