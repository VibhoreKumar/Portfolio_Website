import { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Exp.' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ theme, toggleTheme, activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className="header"
        style={scrolled ? { boxShadow: '0 4px 30px rgba(0,0,0,0.3)' } : {}}
      >
        <div className="header-logo">
          <div className="" />
          
        </div>

        <nav className="header-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => handleNav(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <iconify-icon
              icon={theme === 'dark' ? 'lucide:sun' : 'lucide:moon'}
            />
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <iconify-icon
              icon={mobileOpen ? 'lucide:x' : 'lucide:menu'}
            />
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a key={item.id} onClick={() => handleNav(item.id)}>
            {'// '}
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}