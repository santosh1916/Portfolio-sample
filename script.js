function mouseFollower(){
    var allbutton = document.querySelectorAll("#main button");
    var circle = document.querySelector("#circle");
    allbutton.forEach((buttons)=>{
        buttons.addEventListener("mouseenter", ()=>{
            gsap.to(circle,{
                scale:4,
                opacity:0,
                duration:.1
            })
            gsap.to(buttons,{
                backgroundColor:"rgb(89, 0, 255)",
                boxShadow: "1px 20px 40px 1px rgb(89, 0, 255)"
            })
        })
        buttons.addEventListener("mouseleave", ()=>{
            gsap.to(buttons,{
                backgroundColor: "#825fc4",
                boxShadow: "1px 20px 40px 1px #825fc4",
            })
            gsap.to(circle,{
                scale:1,
                opacity:1
            })
        })
    })

    document.querySelectorAll("#nav a").forEach((elem)=>{
        elem.addEventListener("mouseenter" , ()=>{
            gsap.to(elem,{
                scale:1.1,
                color:"rgb(89, 0, 255)",
                fontWeight:700,
                ease:Expo,
            })
            gsap.to(circle,{
                scale:4,
                opacity:0,
                duration:.1
            })
        })
        elem.addEventListener("mouseleave",()=>{
            gsap.to(elem,{
                scale:1,
                color:"#000",
                fontWeight:300
            })
            gsap.to(circle,{
                scale:1,
                opacity:1
            })
        })
    })

    window.addEventListener("mousemove" ,(dets)=>{
        gsap.to(circle,{
            x:dets.clientX,
            y:dets.clientY,
        })
    })
    
}
function valueSetter(){
    gsap.set("#nav a , #nav h1",{y: "-100%" , opacity: 0});
    gsap.set("#home-l span .child" ,{y: "100%"})
    gsap.set("#home-l button, #home-l p , #home-r img" , {opacity:0})

    document.querySelectorAll("#Visual>g").forEach((e)=>{
        let character = e.childNodes[1].childNodes[1];
        // console.log(character)
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })
}
function revelToSpan(){
    document.querySelectorAll(".revel").forEach(function(elem){
        let spanParent = document.createElement("span")
        let spanChild = document.createElement("span")
    
        spanParent.classList.add("parent")
        spanChild.classList.add("child")
        
        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild)
    
        elem.innerHTML = "";
        elem.appendChild(spanParent);
    }) 
}
function loderAnimetion(){
    var t1 = gsap.timeline();
t1
    .from("#loder .child span" , {
        x:100,
        delay:1,
        stagger:.2,
        duration: 1,
        ease:Power3.easeInOut
    })
    .to("#loder .parent .child",{
        y:"-100%",
        duration:1,
        ease:Circ.easeInOut
    })
    .to("#loder",{
        height:0,
        duration:1,
        ease:Circ.easeInOut
    })
    .to("#red",{
        height:"100%",
        top:0,
        delay:-.8,
        duration:1,
        ease:Circ.easeInOut
    })
    .to("#red",{
        height:"0%",
        top:0,
        delay:-.4,
        duration:1,
        ease:Circ.easeInOut,
        onComplete:function(){
            animateHomepage();
        }
    })

}
function svgAnimation(){
    gsap.to("#Visual>g>g>path",{
        strokeDashoffset: 0,
        duration:3,
        ease:Expo.easeInOut
    })
    gsap.to("#Visual>g>g>polyline",{
        strokeDashoffset: 0,
        duration:3,
        ease:Expo.easeInOut
    })
}
function animateHomepage(){
    var tl2 = gsap.timeline();
    tl2.to("#nav a , #nav h1",{
        y: 0,
        opacity:1,
        stagger: .05,
        ease: Expo.easeInOut,
        duration:1,
    })
    .to("#home-l span .child",{
        y: 0,
        stagger: .1,
        duration:2,
        ease: Expo.easeInOut,
    })
    .to("#home-l button , #home-r img ,#home-l p" , {
        opacity : 1,
        delay:-.9,
        duration:1,
        ease:Expo.easeInOut,
        onComplete: function(){
            svgAnimation();
        }
    })
}
function locomotivejs(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
revelToSpan();
valueSetter();
loderAnimetion();
mouseFollower();
locomotivejs();
// function cardHoverEffect(){
//     document.querySelectorAll(".img-cnt")
//     .forEach(function(cnt){
//         var showingImg;
//         var filterImg
//         cnt.addEventListener("mousemove", (dets)=>{
//             document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
//             showingImg = document.querySelector("#cursor").children[dets.target.dataset.index];
//             filterImg = dets.target
//             document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`
//             document.querySelector("#work").style.backgroundColor ="#" + dets.target.dataset.color
//             dets.target.style.filter = "grayscale(1)"

//         })
//         cnt.addEventListener("mouseleave" ,function(){
//             showingImg.style.opacity = 0;
//             document.querySelector("#work").style.backgroundColor = "#F2F2F2"
//             filterImg.style.filter = "grayscale(0)"

//         })

//     })
// }
