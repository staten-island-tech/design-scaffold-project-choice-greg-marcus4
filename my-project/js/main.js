import "../index.css";
import { gsap } from "gsap";

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
