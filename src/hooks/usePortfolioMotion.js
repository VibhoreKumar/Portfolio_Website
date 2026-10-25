import { useEffect } from "react";

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

// Native scrolling stays in control. Only decorative layers interpolate.
export default function usePortfolioMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reveals = [...document.querySelectorAll("[data-reveal]")];
    const hero = document.querySelector(".hero-heading");
    const portrait = document.querySelector(".about-portrait");
    const skills = document.querySelector(".skills-sentence");
    const words = [...document.querySelectorAll(".skill-word")];
    const projects = [...document.querySelectorAll(".project-row")];
    const footer = document.querySelector(".footer-name");
    const scene = document.querySelector(".hand-scene");
    const heroSection = document.querySelector(".hero");
    let frame = 0;
    let position = window.scrollY;
    let observer;

    function render() {
      frame = 0;
      if (preference.matches) return;
      const target = window.scrollY;
      position += (target - position) * 0.12;
      const lag = target - position;
      const height = window.innerHeight;
      const compact = window.innerWidth <= 700;
      // Read layout before making style writes.
      const portraitRect = portrait?.getBoundingClientRect();
      const skillsRect = skills?.getBoundingClientRect();
      const projectRects = projects.map((row) => row.getBoundingClientRect());
      const footerRect = footer?.parentElement.getBoundingClientRect();
      const sceneRect = scene?.getBoundingClientRect();
      heroSection?.style.setProperty("--star-turn", `${position * 0.09}deg`);
      if (sceneRect) {
        const progress = clamp(
          (height - sceneRect.top - lag) / (height + sceneRect.height),
        );
        scene.style.setProperty("--hand-spread", `${(1 - progress) * 120}px`);
        scene.style.setProperty("--scene-turn", `${progress * 100 - 30}deg`);
        scene.style.setProperty("--scene-rise", `${(0.5 - progress) * 90}px`);
      }
      hero?.style.setProperty(
        "--hero-drift",
        `${Math.min(position * 0.16, 130)}px`,
      );
      hero?.style.setProperty(
        "--hero-opacity",
        `${1 - clamp(position / (height * 0.85)) * 0.6}`,
      );
      if (portraitRect) {
        const progress = clamp(
          (height / 2 - (portraitRect.top + portraitRect.height / 2) - lag) /
            height,
          -1,
          1,
        );
        portrait.style.setProperty(
          "--photo-drift",
          `${progress * (compact ? 18 : 40)}px`,
        );
      }
      if (skillsRect) {
        const progress = clamp(
          (height * 0.83 - skillsRect.top - lag) / (height * 0.43),
        );
        words.forEach((word, index) => {
          const active = clamp(progress * (words.length + 2) - index);
          word.style.setProperty("--word-opacity", `${0.17 + active * 0.83}`);
        });
      }
      projects.forEach((row, index) => {
        const rect = projectRects[index];
        if (rect.bottom < -100 || rect.top > height + 100) return;
        const progress = clamp(
          (height / 2 - (rect.top + rect.height / 2) - lag) / height,
          -1,
          1,
        );
        row.style.setProperty(
          "--project-drift",
          `${progress * (compact ? 12 : 32)}px`,
        );
      });
      if (footerRect) {
        const amount = clamp((height - footerRect.top - lag) / height);
        footer.style.setProperty("--footer-rise", `${(1 - amount) * 55}px`);
      }
      if (Math.abs(target - position) > 0.15)
        frame = requestAnimationFrame(render);
    }
    function schedule() {
      if (!frame && !preference.matches) frame = requestAnimationFrame(render);
    }
    function configure() {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      frame = 0;
      if (preference.matches) {
        reveals.forEach((el) => el.classList.add("revealed"));
        return;
      }
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (isIntersecting) {
              target.classList.add("revealed");
              observer.unobserve(target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
      );
      reveals.forEach((el) => observer.observe(el));
      position = window.scrollY;
      schedule();
    }
    configure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", configure);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", configure);
    };
  }, []);
}
