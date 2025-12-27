import React, { useState } from 'react';
import { Moon, Sun, Languages } from 'lucide-react';

const Navbar = ({ lang, setLang, theme, toggleTheme, t }) => {
    const navLinks = [
        { name: t.nav.home, href: '#' },
        { name: t.nav.services, href: '#services' },
        { name: t.nav.contact, href: '#contact' },
    ];

    const ControlButton = ({ onClick, icon: Icon, label }) => (
        <button
            onClick={onClick}
            aria-label={label}
            title={label}
            className="btn-icon"
        >
            <Icon size={20} />
        </button>
    );

    return (
        <header className="header">
            <div className="container">
                <nav className="nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    {/* 1. Left Side: Logo */}
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                        <div className="logo">
                            H.<span>Djalti</span>
                        </div>
                    </div>

                    {/* 2. Center: Navigation Links */}
                    <div className="nav-links desktop-only" style={{ flex: 1, justifyContent: 'center' }}>
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href}>
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* 3. Right Side: Toggles (Icon Only) */}
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.75rem' }}>
                        <ControlButton
                            onClick={toggleTheme}
                            icon={theme === 'dark' ? Sun : Moon}
                            label="Toggle Theme"
                        />

                        <ControlButton
                            onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')}
                            icon={Languages}
                            label="Switch Language"
                        />
                    </div>

                </nav>
            </div>
        </header>
    );
};

export default Navbar;
