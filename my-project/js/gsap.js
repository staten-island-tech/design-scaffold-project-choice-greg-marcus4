export { gsap } from "gsap";

const tl = gsap.timeline({ delay: 0.3 });
tl.from(".header-title", { opacity: 0, duration: 0.3, ease: "ease-out" });
tl.from(".navigation-bar", { opacity: 0, duration: 0.5, ease: "ease-out" });

const headers = gsap.utils.toArray(".header");

headers.forEach((header, i) => {
  const anim = gsap.fromTo(
    header,
    { autoAlpha: 0, y: 100 },
    { duration: 1, autoAlpha: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: header,
    animation: anim,
    toggleActions: "play none none none",
    once: true,
  });
});

const meals = gsap.utils.toArray(".meal");

meals.forEach((meal, i) => {
  const anim = gsap.fromTo(
    meal,
    { autoAlpha: 0, y: 100 },
    { duration: 3, autoAlpha: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: meal,
    animation: anim,
    toggleActions: "play none none none",
    once: true,
  });
});

const meals1 = gsap.utils.toArray(".meal1");

meals1.forEach((meal1, i) => {
  const anim = gsap.fromTo(
    meal1,
    { autoAlpha: 0, y: 100 },
    { duration: 4, autoAlpha: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: meal1,
    animation: anim,
    toggleActions: "play none none none",
    once: true,
  });
});

const meals2 = gsap.utils.toArray(".meal2");

meals2.forEach((meal2, i) => {
  const anim = gsap.fromTo(
    meal2,
    { autoAlpha: 0, y: 100 },
    { duration: 5, autoAlpha: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: meal2,
    animation: anim,
    toggleActions: "play none none none",
    once: true,
  });
});

const attractionnames = gsap.utils.toArray(".attractionname");

attractionnames.forEach((attractionname, i) => {
  const anim = gsap.fromTo(
    attractionname,
    { autoAlpha: 0, y: 0 },
    { duration: 3, autoAlpha: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: attractionname,
    animation: anim,
    toggleActions: "play none none none",
    once: true,
  });
});
