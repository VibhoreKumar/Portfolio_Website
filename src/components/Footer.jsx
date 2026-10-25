export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      icon: 'lucide:linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vibhore-kumar-9b9298376',
    },
    {
      icon: 'simple-icons:github',
      label: 'GitHub',
      href: 'https://github.com/VibhoreKumar',
    },
    {
      icon: 'simple-icons:leetcode',
      label: 'LeetCode',
      href: 'https://leetcode.com/u/8ZHi5hqRLR',
    },
    {
      icon: 'lucide:mail',
      label: 'Email',
      href: 'mailto:vibhore098sharma@gmail.com',
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          © {year} <span className="accent">VIBHORE_KUMAR</span> 
          
        </div>
        <div className="footer-socials">
          {socials.map((s, i) => (
            <a
              href={s.href}
              className="footer-social"
              key={i}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <iconify-icon icon={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}