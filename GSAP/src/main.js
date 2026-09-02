import './style.css';
import { gsap } from "gsap";



gsap.fromTo(".box", {
  y: 200,
  x: 0,
  backgroundColor: "green",
  borderRadius:0
  


},
  {
    y: 0,
    x: 900,        // move 600px right
    rotation: 360, // spin a full turn
    borderRadius: 50,
    duration: 2,   // over 2 seconds
    ease: "power2.out"
  });
