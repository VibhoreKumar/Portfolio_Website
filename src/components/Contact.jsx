import { useState, useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { sendEmail } from "../utils/emailjs";

const contactLinks = [
  {
    icon: "lucide:mail",
    text: "vibhore098sharma@gmail.com",
    href: "mailto:vibhore098sharma@gmail.com",
  },
  {
    icon: "lucide:phone",
    text: "+91-8875023885",
    href: "tel:+918875023885",
  },
  {
    icon: "lucide:map-pin",
    text: "Delhi, India",
    href: "#",
  },
  {
    icon: "lucide:graduation-cap",
    text: "B.Tech CSE — GD Goenka Univ. (2027)",
    href: "#",
  },
];

export default function Contact() {
  const ref = useScrollReveal();
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const result = await sendEmail(formRef.current);
      if (result.success) {
        setStatus("success");
        formRef.current.reset();
      }
    } catch (err) {
      console.error("Email Error:", err);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section">
      <div className="section-container">
        <div className="section-label" ref={ref}>
          Contact
        </div>
        <h2 className="section-title">
          LET&apos;S <span className="accent">CONNECT_</span>
        </h2>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              I&apos;m currently open to internship opportunities, freelance
              projects, and collaborations. If you have something exciting in
              mind or just want to say hi, drop me a message!
            </p>

            <div className="contact-links">
              {contactLinks.map((item, i) => (
                <a href={item.href} className="contact-link" key={i}>
                  <iconify-icon icon={item.icon} />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="from_name">Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="from_email">Email</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                placeholder="you@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Internship / Freelance / Collaboration"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about the opportunity..."
                required
              />
            </div>

            <div className="form-submit">
              <button type="submit" className="btn-pixel" disabled={loading}>
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </div>

            <div
              role="status"
              aria-live="polite"
              className={`form-status ${status || ""}`}
            >
              {status === "success" &&
                "✓ Message sent successfully. Thanks for reaching out!"}
              {status === "error" &&
                "✗ Failed to send. Try again or email me directly."}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
