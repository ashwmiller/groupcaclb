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
            $(this).css("transform", "scale(1.2)");
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

    //3-Text Slide In//

    


});