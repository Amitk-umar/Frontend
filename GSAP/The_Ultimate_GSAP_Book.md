# The Ultimate GSAP Book by Swaraj Singh

GSAP (GreenSock Animation Platform) is the industry-standard JavaScript animation engine, used on more than 12 million live sites, from Apple and Google product pages to Awwwards Site-of-the-Day winners. In April 2025, Webflow acquired GreenSock and made 100% of GSAP free. Every plugin that used to require a paid "Club GreenSock" membership (ScrollTrigger, SplitText, MorphSVG, DrawSVG, Flip, ScrollSmoother, InertiaPlugin, and more) now ships free with a plain `npm install gsap`. That means everything in this handbook — no credit card, no license key — is available to you right now.

---

## Part 0 - Setup

### 0.1 What is GSAP?

GSAP is a JavaScript animation engine, not a CSS framework. You write JavaScript that tells GSAP "animate this property, on this element, to this value, over this duration, with this ease" — and GSAP handles all the browser quirks, frame timing, and math for you.

> **Rule of thumb:** Use plain CSS for simple hover states and micro-interactions. Reach for GSAP the moment you need sequencing, scroll-linking, SVG motion, or fine-grained runtime control.

**The 2025 "GSAP is now free" story**
For over a decade, GSAP's core was free but its best plugins required a paid Club GreenSock membership. In April 2025, Webflow acquired GreenSock and removed the paywall entirely. Every plugin is now bundled into the open `gsap` npm package and free for commercial use, with no sign-up and no private registry. If you find an old tutorial telling you to buy a "Business Green" license or pull from `npm.greensock.com`, ignore it.

### 0.2 Installing GSAP

**Option A - CDN (fastest way to start)**

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>
<script>
  gsap.to(".box", { x: 300, rotation: 360, duration: 1 });
</script>
```

**Option B - npm (recommended for real projects)**

```bash
npm install gsap
```
```javascript
import gsap from "gsap";

gsap.to(".box", { x: 300, duration: 1 });
```

Plugins are imported individually and must be registered once before use:

```javascript
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, SplitText, Flip, Draggable);
```

### 🎯 Practice - Part 0

* Create a blank HTML file, load GSAP from the CDN, and animate a `<div>` 300px to the right over 2 seconds. Open it in a browser and confirm it works.
* In your own words, write down two situations where you'd reach for GSAP instead of a CSS transition.
* True or false: As of 2026, you need a paid membership to use ScrollTrigger. (Explain your answer.)

---

## Part 1 - Foundations

### 1.1 Your first tween

A tween is a single animation instance - it changes one or more properties of a target over time. Everything in GSAP builds on top of tweens.

```javascript
gsap.to(".box", {
  x: 300,        // move 300px right
  rotation: 360, // spin a full turn
  duration: 2,   // over 2 seconds
  ease: "power2.out"
});
```
Read this sentence out loud — it's exactly what the code does: *"Animate the elements matching `.box` to these values, over 2 seconds, using a `power2.out` ease."*

### 1.2 The four core tween methods

| Method | What it does | Example |
|---|---|---|
| `gsap.to()` | Animates from current values → given values | `gsap.to(".box", { x: 300 })` |
| `gsap.from()` | Animates from given values → current values (great for entrances) | `gsap.from(".box", { opacity: 0, y: 50 })` |
| `gsap.fromTo()` | You explicitly set both the start and end values | `gsap.fromTo(".box", { opacity: 0 }, { opacity: 1, duration: 1 })` |
| `gsap.set()` | Instantly sets values, no animation (duration 0) | `gsap.set(".box", { opacity: 0 })` |

```javascript
// from() is the workhorse for "reveal" animations —
// it animates FROM the given state back to whatever the
// element's natural/current CSS state already is.
gsap.from(".card", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});
```

> ⚠️ **Common pitfall:** With `from()`, GSAP applies the starting values immediately (even before the animation begins), which can cause a flash of the "from" state if the element was already visible. Combine it with `autoAlpha` (opacity + visibility) and set the initial CSS state to `hidden` if it matters for SEO/accessibility.

### 1.3 Duration, delay, and ease

Every tween accepts these three properties (all optional — GSAP defaults duration to 0.5s and ease to `"power1.out"`):

```javascript
gsap.to(".box", {
  x: 200,
  duration: 1.5,   // seconds
  delay: 0.3,      // wait 0.3s before starting
  ease: "elastic.out(1, 0.4)"
});
```

### 1.4 Tweening anything - CSS, transforms, SVG, colors, plain objects

GSAP can animate almost any numeric or color value on almost anything:

```javascript
// CSS transforms (GPU accelerated — always prefer these over top/left)
gsap.to(".box", { x: 100, y: 50, scale: 1.5, rotation: 45 });

// Regular CSS properties
gsap.to(".box", { backgroundColor: "#ff6b6b", borderRadius: "50%" });

// SVG attributes
gsap.to("circle", { attr: { r: 80, fill: "#5227FF" } });

// Plain JavaScript objects (not just DOM elements!)
const counter = { value: 0 };
gsap.to(counter, {
  value: 100,
  duration: 2,
  onUpdate: () => console.log(Math.round(counter.value))
});

// Scroll position
gsap.to(window, { scrollTo: { y: 500 }, duration: 1 });
```

### 1.5 Relative values & special string syntax

```javascript
gsap.to(".box", { x: "+=100" });   // move 100px further right than current position
gsap.to(".box", { x: "-=50" });    // move 50px left
gsap.to(".box", { rotation: "+=360" }); // spin one more full turn from wherever it is
gsap.to(".box", { scale: "*=2" }); // multiply current scale by 2
gsap.to(".box", { x: "random(-100, 100)" }); // random value each time
```
Units work too - GSAP is smart about converting:
```javascript
gsap.to(".box", { width: "50%" });
gsap.to(".box", { x: "10rem" });
```

### 🎯 Practice - Part 1

* Animate a box `to()` x: 400, rotation: 720 over 3 seconds with ease: `"bounce.out"`.
* Rewrite the same animation using `from()` instead of `to()`. What visually changes?
* Use `fromTo()` to animate an element's opacity from 0 to 1 and scale from 0.5 to 1, over 1 second.
* Create a plain object `{ score: 0 }` and tween its score to 500 over 3 seconds, logging the rounded value on every update.
* What's the difference between `x: "+=50"` and `x: 50`?

### 🛠️ Mini-Project 1: Hover Button Pack

Build 3 buttons, each with a different GSAP-powered hover effect:

```html
<button class="btn btn--scale">Scale</button>
<button class="btn btn--glow">Glow</button>
<button class="btn btn--wiggle">Wiggle</button>
```
```javascript
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.08, duration: 0.3, ease: "back.out(2)" });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
});
```
Your task: implement `.btn--glow` (animate a `boxShadow` or `backgroundColor`) and `.btn--wiggle` (animate rotation back and forth using a small timeline or `yoyo: true`, `repeat: 1`). 

---

## Part 2 - Core Mechanics

### 2.1 Easing deep-dive

Easing is the single biggest factor in whether an animation feels "cheap" or "premium." 

```javascript
ease: "power1.in"    // starts slow, accelerates — like a falling object
ease: "power1.out"   // starts fast, decelerates — like a ball rolling to a stop
ease: "power1.inOut" // slow → fast → slow — like a car accelerating and braking
```

| Ease family | Feel | Best for |
|---|---|---|
| **power1 → power4** | Increasing intensity of acceleration | General purpose UI motion (`power2.out` is the most common default) |
| **back** | Overshoots then settles | Playful pop-ins, `back.out(1.7)` |
| **elastic** | Springy overshoot with oscillation | Bouncy, toy-like UI |
| **bounce** | Literal bounce, like a ball | Physical/cartoon effects |
| **circ** | Sharp, circular acceleration curve | Dramatic reveals |
| **expo** | Very fast start/end | High-energy motion |
| **sine** | Gentle, smooth | Subtle looping/breathing animations |
| **linear** (none) | Constant speed, no easing | Rotating loaders, progress bars |

```javascript
gsap.to(".box", { x: 300, ease: "back.out(1.7)" });   // 1.7 = overshoot strength
gsap.to(".box", { x: 300, ease: "elastic.out(1, 0.3)" }); // (amplitude, period)
```

For fully custom curves, load `CustomEase` (also free now):
```javascript
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

CustomEase.create("myEase", "M0,0 C0.126,0.382 0.282,0.674 0.44,0.822 0.632,1.002 0.818,1 1,1");
gsap.to(".box", { x: 300, ease: "myEase" });
```

### 2.2 Stagger

`stagger` offsets the start time of each target in a multi-element tween — instant "wave" effects with one line of code.

```javascript
// Simple: 0.1s between each element
gsap.from(".card", { opacity: 0, y: 40, stagger: 0.1 });
```

Advanced object syntax gives you full control:
```javascript
gsap.from(".card", {
  opacity: 0,
  y: 40,
  stagger: {
    each: 0.08,
    from: "center",      // "start" | "end" | "center" | "edges" | "random" | index
    grid: "auto",        // detect grid automatically for 2D stagger
    ease: "power2.inOut"
  }
});
```

| Property | What it does |
|---|---|
| **each** | seconds between each element's start |
| **amount** | total seconds spread across all elements (use instead of `each` when you want a fixed total duration regardless of element count) |
| **from** | where the "wave" originates |
| **grid** | `[rows, cols]` or `"auto"` for 2D staggers (great for image grids) |
| **axis** | limit stagger direction to `"x"` or `"y"` within a grid |

### 2.3 Timelines - the real power tool

A Timeline is a container of tweens that plays them in sequence (by default), giving you one master play/pause/reverse control for a whole animation sequence.

```javascript
const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.out" } });

tl.from(".hero-title", { opacity: 0, y: 40 })
  .from(".hero-subtitle", { opacity: 0, y: 20 })
  .from(".hero-cta", { opacity: 0, scale: 0.8 })
  .from(".hero-image", { opacity: 0, x: 60 }, "-=0.4"); // position parameter
```

### 2.4 The position parameter - sequencing superpower

The second argument to any timeline method controls exactly when that tween starts, relative to the timeline:

```javascript
tl.to(".a", { x: 100 })
  .to(".b", { x: 100 }, "-=0.3")    // start 0.3s before the previous tween ends
  .to(".c", { x: 100 }, "+=0.2")    // start 0.2s after the previous tween ends
  .to(".d", { x: 100 }, 0)          // start at the absolute 0-second mark
  .to(".e", { x: 100 }, "<")        // start at the same time as the previous tween started
  .to(".f", { x: 100 }, "myLabel"); // start at a named label
```

| Syntax | Meaning |
|---|---|
| `"+=1"` | 1 second after the end of the previous tween (gap) |
| `"-=1"` | 1 second before the end of the previous tween (overlap) |
| `0.5` | absolute time, 0.5s from the timeline's start |
| `"<"` | same start time as the previous tween |
| `"<0.2"`| 0.2s after the previous tween started |
| `"myLabel"` | at a named label |

### 2.5 Control methods & playback

Timelines (and individual tweens) return an instance you can control at runtime:

```javascript
const tl = gsap.timeline({ paused: true });
tl.to(".box", { x: 300, duration: 1 });

tl.play();
tl.pause();
tl.reverse();
tl.restart();
tl.seek(0.5);         // jump to 0.5 seconds
tl.progress(0.5);     // jump to 50% progress
tl.timeScale(2);      // play at 2x speed
```

Useful lifecycle callbacks:
```javascript
gsap.to(".box", {
  x: 300,
  onStart: () => console.log("started"),
  onUpdate: () => console.log("every frame"),
  onComplete: () => console.log("done"),
  onRepeat: () => console.log("looped again")
});
```

Looping:
```javascript
gsap.to(".pulse", {
  scale: 1.1,
  duration: 0.8,
  repeat: -1,        // -1 = infinite
  yoyo: true,        // reverse back and forth
  ease: "sine.inOut"
});
```

### 2.6 gsap.set(), defaults, and global config

```javascript
// Instantly apply styles, no animation
gsap.set(".card", { opacity: 0, y: 30 });

// Timeline-wide defaults
const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" } });

// Global config
gsap.defaults({ ease: "power2.out", duration: 0.6 }); 
```

### 🎯 Practice — Part 2

* Build a timeline that animates 3 boxes in sequence, then adjust the second tween to start `-=0.2` seconds early so they slightly overlap.
* Add a label `"reveal"` to a timeline, then make a 4th tween start exactly at that label.
* Animate 12 grid items (`display: grid`) with a 2D stagger using `grid: "auto"`, `from: "center"`.
* Create an infinitely rotating loader using `repeat: -1` and `ease: "linear"`.
* Build a paused timeline and wire up your own Play / Pause / Reverse buttons.

### 🛠️ Mini-Project 2: Animated Hero Section

```html
<section class="hero">
  <h1 class="hero-title">Build animations that feel alive</h1>
  <p class="hero-subtitle">A hands-on GSAP course for 2026</p>
  <button class="hero-cta">Get Started</button>
  <img class="hero-image" src="..." />
</section>
```
```javascript
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.from(".hero-title", { opacity: 0, y: 40, duration: 0.8 })
  .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
  .from(".hero-cta", { opacity: 0, scale: 0.8, duration: 0.5 }, "-=0.3")
  .from(".hero-image", { opacity: 0, x: 60, duration: 1 }, "-=0.5");
```
Your task: Add a subtle infinite floating animation to the hero image (`yoyo: true`, `repeat: -1`) that starts after the entrance timeline completes, using `onComplete`.

---

## Part 3 - Scroll-Driven Animation (ScrollTrigger)

ScrollTrigger links any tween or timeline's playback to the user's scroll position.

```javascript
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
```

### 3.1 Fundamentals: trigger, start, end, markers

```javascript
gsap.to(".box", {
  x: 400,
  scrollTrigger: {
    trigger: ".box",   // element that triggers the animation
    start: "top 80%",  // when the TOP of .box hits 80% down the viewport
    end: "top 30%",    // when the TOP of .box hits 30% down the viewport
    markers: true      // 🔴 dev-only visual debug markers
  }
});
```

### 3.2 scrub and pin

`scrub` ties the animation's progress directly to the scrollbar.

```javascript
gsap.to(".box", {
  x: 500,
  scrollTrigger: {
    trigger: ".section",
    start: "top top",
    end: "+=1000",       // scroll for 1000px while active
    scrub: 1             // 1 second of "catch-up" lag for a smoother feel
  }
});
```

`pin` freezes the trigger element in place (`position: fixed` under the hood) for the duration of the scroll range.

```javascript
gsap.timeline({
  scrollTrigger: {
    trigger: ".panel",
    start: "top top",
    end: "+=1500",
    pin: true,
    scrub: 1
  }
})
  .from(".panel h2", { opacity: 0, y: 60 })
  .from(".panel img", { opacity: 0, scale: 0.8 }, "-=0.3");
```

### 3.4 toggleActions & scroll callbacks

If you don't use `scrub`, the animation plays once and you control what happens on enter/leave with `toggleActions`.

```javascript
gsap.from(".card", {
  opacity: 0,
  y: 40,
  scrollTrigger: {
    trigger: ".card",
    start: "top 85%",
    toggleActions: "play none none reverse"
    // play on enter, do nothing on leave,
    // do nothing on enter-back, reverse on leave-back
  }
});
```

### 3.5 batch() for animating lists efficiently

```javascript
ScrollTrigger.batch(".list-item", {
  start: "top 85%",
  onEnter: batch => gsap.from(batch, { opacity: 0, y: 30, stagger: 0.15, overwrite: true })
});
```

### 🎯 Practice — Part 3

* Build a section that fades and slides in an `<h2>` the first time it scrolls into view, using `toggleActions: "play none none reverse"`.
* Build a pinned section (`pin: true`) that stays fixed for `+=800` pixels of scroll while an image scales from 1 to 1.5 via `scrub: 1`.
* Use `ScrollTrigger.batch()` to stagger-reveal a list of 20 items.

---

## Part 4 - gsap.matchMedia()

`gsap.matchMedia()` handles breakpoints cleanly and automatically cleans up when a breakpoint is exited.

```javascript
let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  // desktop-only pinned scroll section
  gsap.timeline({ scrollTrigger: { trigger: ".panel", pin: true, scrub: 1 } })
    .to(".panel img", { scale: 1.4 });
});

mm.add("(max-width: 799px)", () => {
  // simpler mobile version, no pinning
  gsap.from(".panel img", { opacity: 0, scrollTrigger: { trigger: ".panel" } });
});

mm.add("(prefers-reduced-motion: reduce)", () => {
  gsap.set(".panel *", { clearProps: "all" }); // effectively disable motion
});
```
