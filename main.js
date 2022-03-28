gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: container,
    }
  });
  t1.set(container, { autoAlpha: 1 });
  t1.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });

  t1.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
})