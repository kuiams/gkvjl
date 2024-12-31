const cursor = document.querySelector(".cursor");
const cursor1 = document.querySelector(".cursor1");
const videoPage = document.querySelector(".video-page");
const vodeoheading = document.querySelector(".video-page .vodeoheading");
const videodiv = document.querySelector(".video-div");
const workVideo = document.querySelector(".video-div video");
const project = document.querySelectorAll(".project");
const l = document.querySelectorAll(".l");

document.addEventListener('mousemove', (e) => {
  const { pageX, pageY } = e;
  gsap.to([cursor, cursor1], {
    left: pageX ,
    top: pageY,
    duration:0.8,
    ease: "power3.out"
  });
});







videoPage.addEventListener("mouseenter",function() {
 
  gsap.to(vodeoheading,{
    scale: 1,
    opacity:1,
    duration:0.5,
    ease: "power3.out"
  })
  gsap.to([cursor, cursor1], {
    scale: 0,
    opacity:0,
  });



});
videoPage.addEventListener("click",function() {
  
  if(workVideo.muted ==true){
    workVideo.muted = false;
    vodeoheading.textContent = "Mute"
  }else{
    workVideo.muted = true;
    vodeoheading.textContent = "unMute"
  }


})


videoPage.addEventListener("mousemove",function(dets) {
  gsap.to(vodeoheading, {
    left: dets.pageX - 70,
    top: dets.pageY - 15,
    duration: 0.7,
    ease: "power3.out"
  });
}
)




videoPage.addEventListener("mouseleave",function  () {
  workVideo.muted = true;
  vodeoheading.textContent = "unMute"
  gsap.to([cursor, cursor1], {
    scale: 1,
    opacity:1,
    duration:0.5,
    ease: "power3.out",
  });
  gsap.to(vodeoheading,{
    scale: 0,
    opacity:0,
   
  })
});




l.forEach(function(m) {
  m.addEventListener("mouseenter", function() {
    gsap.to([cursor, cursor1], {
      scale: 0,
      opacity: 0
    });
  });

  m.addEventListener("mouseleave", function() {
    gsap.to([cursor, cursor1], {
      scale: 1,
      opacity: 1
    });
  });
});

