import "../index.css";
import { gsap } from "gsap";

const tl = gsap.timeline({ delay: 0.3 });
tl.from(".header-title", { opacity: 0, duration: 0.3, ease: "ease-out" });
tl.from(".navigation-bar", { opacity: 0, duration: 0.5, ease: "ease-out" });
