$(document).ready(function(){
    
    window.onload = function() {
        var animationEnd = (function(el) {
        var animations = {
            animation: 'animationend',
            OAnimation: 'oAnimationEnd',
            MozAnimation: 'mozAnimationEnd',
            WebkitAnimation: 'webkitAnimationEnd',
        };

        for (var t in animations) {
            if (el.style[t] !== undefined) {
            return animations[t];
            }
        }
        })(document.createElement('div'));

        $("#amana").addClass("animated rubberBand").one(animationEnd, function(){
            $(this).removeClass("animated rubberBand");
            $("#ttAnimate").fadeIn();
            $("#ttAnimate").addClass("animated bounceInRight").one(animationEnd, function(){
                $(this).removeClass("animated bounceInRight");
            });
            $("#igAnimate").fadeIn();
            $("#igAnimate").addClass("animated bounceInRight").one(animationEnd, function(){
                $(this).removeClass("animated bounceInRight");
            });
            $("#fbAnimate").fadeIn();
            $("#fbAnimate").addClass("animated bounceInRight").one(animationEnd, function(){
                $(this).removeClass("animated bounceInRight");
            });
            $("#menuAnimate").fadeIn();
            $("#menuAnimate").addClass("animated bounceInLeft").one(animationEnd, function(){
                $(this).removeClass("animated bounceInLeft");    
            });
        });
               
        //showing topnav
        var lastScrollTop = 0;      
        $(document).on('scroll', function () {
            var st = $(this).scrollTop();
            
            if (st > 0) {
                $('.topnav').slideDown(500);    
                if ($('#menubar').hasClass('change')){
                }else{
                   $('.menubar').fadeOut();
                }
            } else {
                $("#amana").addClass("animated rubberBand").one(animationEnd, function(){
                  $(this).removeClass("animated rubberBand");
                });
                $('.topnav').slideUp(500);
                $('.menubar').fadeIn();
            }
            
        });
         
        //trigger when visiblein screen ??
        $("#aboutUs").addClass("animated fadeInRight").one(animationEnd, function(){
            $(this).removeClass("animated fadeInRight");    
        });
        
        //hover get id
        $('[id^="ds"]').hover(function(){
            idno = $(this).attr('id');
            noarray = idno.split("_");
            no = noarray[1];
            $("#udButton"+no).fadeIn();
        },function(){
            $("#udButton"+no).fadeOut();
        });

        // estimation
        DAdultRate = 250;
        DChildRate = 200;
        DSeniorRate = 200;
        NAdultRate = 210;
        NChildRate = 150;
        NSeniorRate = 150;
        DAdultPerson = 1;
        DChildPerson = 1;
        DSeniorPerson = 1;
        NAdultPerson = 1;
        NChildPerson = 1;
        NSeniorPerson = 1;
        $("#atot1").text(DAdultRate); $("#ahc1").text(DAdultPerson);
        $("#atot2").text(DChildRate); $("#ahc2").text(DChildPerson);
        $("#atot3").text(DSeniorRate); $("#ahc3").text(DSeniorPerson);
        $("#atot4").text(NAdultRate); $("#ahc4").text(NAdultPerson);
        $("#atot5").text(NChildRate); $("#ahc5").text(NChildPerson);
        $("#atot6").text(NSeniorRate); $("#ahc6").text(NSeniorPerson);

        //srolling carousel
        $("#arrowLeft").click(function(){
            $("#img-holder").animate({scrollLeft: "-="+500});
        });
        $("#arrowRight").click(function(){
            $("#img-holder").animate({scrollLeft: "+="+500});
        }); 
        $("#arrowLeft1").click(function(){
            $("#img-holder1").animate({scrollLeft: "-="+500});
        });
        $("#arrowRight1").click(function(){
            $("#img-holder1").animate({scrollLeft: "+="+500});
        }); 


        //clicking room accomodation
        $("#rm_1").click(function(){
            $("#bg-accom_1").animate({ height: '50%',});
            //  $("html, body").animate({scrollTop: "+="+400});
            $("#fontFront1").slideUp(500);
            $("#cross_1").slideDown(500);
            $("#back1").slideDown(500);
        });
        $("#cross_1").click(function(){
            $("#bg-accom_1").animate({ height: '20%',});
            //  $("html, body").animate({scrollTop: "+="+400});
            $("#fontFront1").slideDown(500);
            $("#cross_1").slideUp(500);
            $("#back1").slideUp(500);
        });
          $("#rm_2").click(function(){
            $("#bg-accom_2").animate({ height: '50%',});
            //  $("html, body").animate({scrollTop: "+="+400});
            $("#fontFront2").slideUp(500);
            $("#cross_2").slideDown(500);
            $("#back2").slideDown(500);
        });
        $("#cross_2").click(function(){
            $("#bg-accom_2").animate({ height: '20%',});
            //  $("html, body").animate({scrollTop: "+="+400});
            $("#fontFront2").slideDown(500);
            $("#cross_2").slideUp(500);
            $("#back2").slideUp(500);
        });
          $("#rm_3").click(function(){
            $("#bg-accom_3").animate({ height: '50%',});
            //  $("html, body").animate({scrollTop: "+="+400});
            $("#fontFront3").slideUp(500);
            $("#cross_3").slideDown(500);
            $("#back3").slideDown(500);
        });
        $("#cross_3").click(function(){
            $("#bg-accom_3").animate({ height: '20%',});
            //  $("html, body").animate({scrollTop: "+="+400});
            $("#fontFront3").slideDown(500);
            $("#cross_3").slideUp(500);
            $("#back3").slideUp(500);
        });
          $("#rm_4").click(function(){
            $("#bg-accom_4").animate({ height: '50%',});
            //  $("html, body").animate({scrollTop: "+="+400});
            $("#fontFront4").slideUp(500);
            $("#cross_4").slideDown(500);
            $("#back4").slideDown(500);
        });
        $("#cross_4").click(function(){
            $("#bg-accom_4").animate({ height: '20%',});
            //  $("html, body").animate({scrollTop: "+="+400});
            $("#fontFront4").slideDown(500);
            $("#cross_4").slideUp(500);
            $("#back4").slideUp(500);
        });
          $("#rm_5").click(function(){
            $("#bg-accom_5").animate({ height: '50%',});
            //  $("html, body").animate({scrollTop: "+="+400});
            $("#fontFront5").slideUp(500);
            $("#cross_5").slideDown(500);
            $("#back5").slideDown(500);
        });
        $("#cross_5").click(function(){
            $("#bg-accom_5").animate({ height: '20%',});
            //  $("html, body").animate({scrollTop: "+="+400});
            $("#fontFront5").slideDown(500);
            $("#cross_5").slideUp(500);
            $("#back5").slideUp(500);
        });
          $("#rm_6").click(function(){
            $("#bg-accom_6").animate({ height: '50%',});
            //  $("html, body").animate({scrollTop: "+="+400});
            $("#fontFront6").slideUp(500);
            $("#cross_6").slideDown(500);
            $("#back6").slideDown(500);
        });
        $("#cross_6").click(function(){
            $("#bg-accom_6").animate({ height: '20%',});
            //  $("html, body").animate({scrollTop: "+="+400});
            $("#fontFront6").slideDown(500);
            $("#cross_6").slideUp(500);
            $("#back6").slideUp(500);
        });

                
        // slides image carousel
        var slideIndex = 0;
        showSlides();
            
        // function plusSlides(n){
        //     alert(n);
        //     showSlides(slideIndex += n);
        // }

        $(".rp").click(function(){
            showlides();
            slideIndex += 1;
          
        });
        $(".lp").click(function(){
            showlides();
            slideIndex += -1;
           
        });

        function showSlides(){
            var icarousel;
            var slides = document.getElementsByClassName("bg-pool");
            for (icarousel = 0; icarousel < slides.length; icarousel++) {
                // slides[icarousel].style.display = "none";  
                $(slides[icarousel]).slideUp();
            }
            slideIndex++
            if (slideIndex > slides.length) {slideIndex = 1}    
            // slides[slideIndex-1].style.display = "block";  
            $(slides[slideIndex-1]).slideDown();
            setTimeout(showSlides, 3000); // Change image every 2 seconds
        }

        $("#googleMap").click(function(){
        window.open('https://www.google.com/maps/place/Amana+Waterpark/@14.8904613,120.9502082,17z/data=!3m1!4b1!4m7!3m6!1s0x3397aba4a5333a71:0x543bea1fd551a05f!5m1!1s2018-09-30!8m2!3d14.8904613!4d120.9523969', '_blank');
        });
        $(".waze").click(function(){
        window.open('https://www.waze.com/livemap', '_blank');
        });
        $("#email").click(function(){
        window.open('https://login.yahoo.com/?.src=ym&.lang=en-US&.intl=us&.done=https%3A%2F%2Fmail.yahoo.com%2Fd', '_blank');
        });
        $("#facebook").click(function(){
        window.open('https://www.facebook.com/amanawaterparkph/', '_blank');
        });
        $("#instagram").click(function(){
        window.open('https://www.instagram.com/amanawaterparkresort/', '_blank');
        });
        $("#twitter").click(function(){
        window.open('https://twitter.com/Amanawaterpark1/', '_blank');
        });
    };
});


function checkPerson(){
    if(DAdultPerson == 1){ $("#est1").fadeOut(); }else{ $("#est1").fadeIn(); }
    if(DChildPerson == 1){ $("#est2").fadeOut(); }else{ $("#est2").fadeIn(); }
    if(DSeniorPerson == 1){ $("#est3").fadeOut(); }else{ $("#est3").fadeIn(); }
    if(NAdultPerson == 1){ $("#est4").fadeOut(); }else{ $("#est4").fadeIn(); }
    if(NChildPerson == 1){ $("#est5").fadeOut(); }else{ $("#est5").fadeIn(); }
    if(NSeniorPerson == 1){ $("#est6").fadeOut(); }else{ $("#est6").fadeIn(); }   
}

function addPerson(x){
    switch (x){
        case 1:
            if(DAdultPerson < 30){ 
                DAdultRate += 250;
                DAdultPerson += 1;            
                $("#atot1").text(DAdultRate);
                $("#ahc1").text(DAdultPerson);
                checkPerson();
            }else{
                alert("Use Estimation");
            }
            break;
        case 2:
            if(DChildPerson < 30){ 
                DChildRate += 200;
                DChildPerson += 1;            
                $("#atot2").text(DChildRate);
                $("#ahc2").text(DChildPerson);
                checkPerson();
            }else{
                alert("Use Estimation");
            }
            break;
        case 3:
            if(DSeniorPerson < 30){  
                DSeniorRate += 200;
                DSeniorPerson += 1;            
                $("#atot3").text(DSeniorRate);
                $("#ahc3").text(DSeniorPerson);
                checkPerson();
            }else{
                alert("Use Estimation");
            }
            break;
        case 4:
            if(NAdultPerson < 30){ 
                NAdultRate += 210;
                NAdultPerson += 1;            
                $("#atot4").text(NAdultRate);
                $("#ahc4").text(NAdultPerson);
                checkPerson();
            }else{
                alert("Use Estimation");
            }
            break;
        case 5:
            if(NChildPerson < 30){ 
                NChildRate += 150;
                NChildPerson += 1;            
                $("#atot5").text(NChildRate);
                $("#ahc5").text(NChildPerson);
                checkPerson();
            }else{
                alert("Use Estimation");
            }
            break;
        case 6:
            if(NSeniorPerson < 30){  
                NSeniorRate += 150;
                NSeniorPerson += 1;            
                $("#atot6").text(NSeniorRate);
                $("#ahc6").text(NSeniorPerson);
                checkPerson();
            }else{
                alert("Use Estimation");
            }
    }
}

function lessPerson(x){
    switch (x){
        case 1:
            if(DAdultPerson > 1){ 
                DAdultRate -= 250;
                DAdultPerson -= 1;            
                $("#atot1").text(DAdultRate);
                $("#ahc1").text(DAdultPerson);
                checkPerson();
            }else{
            }
            break;
        case 2:
            if(DChildPerson > 1){ 
                DChildRate -= 200;
                DChildPerson -= 1;            
                $("#atot2").text(DChildRate);
                $("#ahc2").text(DChildPerson);
                checkPerson();
            }else{
            }
            break;
        case 3:
            if(DSeniorPerson > 1){  
                DSeniorRate -= 200;
                DSeniorPerson -= 1;            
                $("#atot3").text(DSeniorRate);
                $("#ahc3").text(DSeniorPerson);
                checkPerson();
            }else{                
            }
            break;
        case 4:
            if(NAdultPerson > 1){ 
                NAdultRate -= 210;
                NAdultPerson -= 1;            
                $("#atot4").text(NAdultRate);
                $("#ahc4").text(NAdultPerson);
                checkPerson();
            }else{
            }
            break;
        case 5:
            if(NChildPerson > 1){ 
                NChildRate -= 150;
                NChildPerson -= 1;            
                $("#atot5").text(NChildRate);
                $("#ahc5").text(NChildPerson);
                checkPerson();
            }else{
            }
            break;
        case 6:
            if(NSeniorPerson > 1){  
                NSeniorRate -= 150;
                NSeniorPerson -= 1;            
                $("#atot6").text(NSeniorRate);
                $("#ahc6").text(NSeniorPerson);
                checkPerson();
            }else{
            }
            
    }
}


// menubar
function changeMenubar(x) {
    x.classList.toggle("change");
    if ($(x).hasClass('change')){
        openNav();
    }else{
        closeNav();
    }
}


function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}




// modal image viewer
function imageViewer(myImg){
    var modal = document.getElementById('myModalIV');
    var captionText = document.getElementById("captionIV");
    var modalImg = document.getElementById("imgIV");
    var img = document.getElementById(myImg);
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeImageViewer(){
    var modal = document.getElementById('myModalIV');

    modal.style.display = "none";
}

