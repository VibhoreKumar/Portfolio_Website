import useScrollReveal from '../hooks/useScrollReveal';
import useCounter from '../hooks/useCounter';

function Stat({ end, suffix, label }) {
  const [count, ref] = useCounter(end);
  return (
    <div className="hero-stat">
      <div className="hero-stat-number" ref={ref}>
        {count}
        {suffix}
      </div>
      <div className="hero-stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section id="home" className="hero section">
      <div className="section-container">
        <div className="hero-content" ref={ref}>
          <div className="hero-text">
            <div className="hero-greeting">
              <span>{''}</span>  <span className="" />
            </div>

            <h1 className="hero-title">
              <span className="glitch">DATA</span>
              <br />
              <span style={{ color: 'var(--accent)' }}>ENGINEER</span>
              <br />
              &amp; FULL-STACK DEVELOPER 
            </h1>

            <p className="hero-subtitle">
              B.Tech CSE student at GD Goenka University, building scalable
              web applications with MERN stack, Django, and clean code
              practices. Passionate about solving real-world problems
              through technology.
            </p>

            <div className="hero-cta">
              <button
                className="btn-pixel"
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View Projects
              </button>
              <button
                className="btn-pixel-outline"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Hire Me
              </button>
            </div>

            <div className="hero-stats">
              <Stat end={100} suffix="+" label="DSA Problems" />
              <Stat end={2} suffix="" label="Internships" />
              <Stat end={4} suffix="+" label="Projects" />
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-wrapper">
              {/* ✅ YOUR REAL PHOTO */}
              <img
                src="https://z-cdn-media.chatglm.cn/files/50e8ce9a-d1e3-483c-b8df-265c9deeadf6.jpeg?auth_key=1883776374-983785311bfd429185e2699f50930c81-0-7a5b0dd1e8a1721b8a1b10f2cf964c5a"
                alt="Vibhore Kumar"
                className="hero-photo"
              />
              {/* Vignette overlay */}
              <div className="hero-photo-vignette" />
              {/* Orange tint overlay */}
              <div className="hero-photo-tint" />
              {/* Scanline texture */}
              <div className="hero-photo-scanlines" />
            </div>
            <div className="hero-image-corner tl" />
            <div className="hero-image-corner tr" />
            <div className="hero-image-corner bl" />
            <div className="hero-image-corner br" />
            {/* Pixel border label */}
            <div className="hero-image-label">
              <span className="hero-image-label-dot" />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}