import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Contact = ({ t, dir }) => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Info */}
                    <div>
                        <div className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-white">H.</span><span className="text-secondary">Djalti</span>
                        </div>
                        <p className="text-blue-100 mb-6 leading-relaxed">
                            {t.hero.subtitle}
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/Orthophoniset" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href="https://www.instagram.com/orthophoniste_h.djalti/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4>Liens Rapides</h4>
                        <ul>
                            <li><a href="#">{t.nav.home}</a></li>
                            <li><a href="#services">{t.nav.services}</a></li>
                            <li><a href="#contact">{t.nav.contact}</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4>{t.contact.title}</h4>
                        <ul>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-secondary" />
                                <span dir="ltr">0798 88 63 64</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-secondary" />
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=Hanane199705@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    Hanane199705@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-secondary mt-1 min-w-[18px]" />
                                <span>2 Rue Madani Fouatih Taher (Muroucho), Oran, Algérie</span>
                            </li>
                        </ul>
                        <div className="mt-6 w-full h-48 rounded-lg overflow-hidden border border-white/20">
                            <iframe
                                title="Map Localisation"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?q=2+Rue+Madani+Fouatih+Taher+Oran+Algerie&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-blue-200 text-sm">
                    <p>© {new Date().getFullYear()} Cabinet H.Djalti. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
