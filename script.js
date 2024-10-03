//loading animation page
function loadingAnimation(){
    var t1 = gsap.timeline();
    t1.from(".line h1",{
        y: 100,
        stagger: 0.2,
        duration: 0.6,
        delay: 0.5,
    })
    t1.from("#line1-part1, .line h2", {
        opacity: 0,
        onStart: function(){
            // front page timer
            var h5Timer = document.querySelector("#line1-part1 h5");
            var count = 0;
            setInterval(function(){
                if(count < 100){
                    h5Timer.innerHTML = count++;
                }
                else{
                    count = 100;
                    h5Timer.innerHTML = count;
                }
                
            }, 33);
        },
    });
    t1.to(".line h2",{
        animationName: "anime",
        opacity: 1
    })
    t1.to("#loader",{
        opacity: 0,
        duration: 0.4,
        delay: 4,
    });
    t1.from("#page1",{
        delay: 0.2,
        y: 1600,
        duration: 0.6,
        opacity: 0,
        ease: Power4
    })
    t1.to("#loader",{
        display: "none"
    })
    t1.from("#nav",{
        opacity: 0
    })
    //page1 ka h1 
    t1.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
        y: 140,
        stagger:0.2
    })
}
//function for cursor animation
function cursorAnimation(){
    // for mouse move cursor
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr", {
            left:dets.x,
            top:dets.y
        })
    })
    Shery.makeMagnet("#nav-part2 h4", {});
}

loadingAnimation();
cursorAnimation();
