'use client';

import { useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['home', 'about', 'skills', 'projects', 'contact']);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '소개' },
    { id: 'skills', label: '스킬' },
    { id: 'projects', label: '프로젝트' },
    { id: 'contact', label: '연락' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: 'var(--nav-bg)',
        borderColor: 'var(--nav-border)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold" style={{ color: 'var(--text-heading)' }}>
            최민락
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors ${
                  activeSection === link.id
                    ? 'font-semibold'
                    : 'hover:opacity-70'
                }`}
                style={{
                  color: activeSection === link.id ? 'var(--color-primary)' : 'var(--text-body)',
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors hover:opacity-70"
              style={{ color: 'var(--text-body)' }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'var(--text-body)' }}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: 'var(--nav-bg)',
            borderColor: 'var(--nav-border)',
          }}
        >
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="block px-3 py-2 rounded-md transition-colors"
                style={{
                  color: activeSection === link.id ? 'var(--color-primary)' : 'var(--text-body)',
                  fontWeight: activeSection === link.id ? 600 : 400,
                }}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="w-full text-left px-3 py-2 rounded-md transition-colors flex items-center gap-2"
              style={{ color: 'var(--text-body)' }}
            >
              {theme === 'light' ? '🌙 다크모드' : '☀️ 라이트모드'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
