import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

// Import translations directly
import frLocale from './locales/fr.json';
import arLocale from './locales/ar.json';

function App() {
    const [lang, setLang] = useState('fr');
    const [theme, setTheme] = useState('light');

    // Load saved preferences
    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        if (savedLang) setLang(savedLang);

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) setTheme(savedTheme);
        else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('lang', lang);
        document.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [lang]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const t = lang === 'fr' ? frLocale : arLocale;

    return (
        <div className="min-h-screen bg-bg-main text-text-main font-sans transition-colors duration-300">
            <Navbar
                lang={lang}
                setLang={setLang}
                theme={theme}
                toggleTheme={toggleTheme}
                t={t}
            />

            <main>
                <Hero t={t} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
                <Services t={t} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
            </main>

            <Contact t={t} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
        </div>
    );
}

export default App;
