Shery.imageEffect("#back", { style: 5, config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.92,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9793813805383003},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.76,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.65,"range":[0,1]},"antialias_threshold":{"value":0.1,"range":[0,0.1]},"noise_height":{"value":0.29,"range":[0,2]},"noise_scale":{"value":20.61,"range":[0,100]}}, gooey: true });

var main =document.querySelector(".main")


function homepageAnimation(){
    gsap.set(".slidesm",{ scale:5})

var syc=gsap.timeline( {scrollTrigger:{
    trigger:".home",

    start:"top top",
    scrub: 2,
    end:"bottom bottom",
   
}})
syc
.to(".videodiv",{
   
    '--clip':"0%",
    ease:Power2,
   
},"a")

.to(".slidesm",{
    scale:1,
    ease:Power2,
   
},"a")
.to(".lft",{
    xPercent:-10,
    stagger:.03,
    ease:Power4,
},"b")
.to(".rgt",{
    xPercent:10,
    stagger:.03,
    ease:Power4,
},"b")
}



(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();





homepageAnimation();

