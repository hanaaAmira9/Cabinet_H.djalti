import React from 'react';

const Hero = ({ t, dir }) => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-grid">
                    {/* Text Content */}
                    <div>
                        <h1>{t.hero.welcome}</h1>
                        <p>{t.hero.subtitle}</p>
                        {/* Buttons removed as per user request */}
                    </div>

                    {/* Image Content */}
                    <div className="relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/hero.png"
                                alt="Cabinet"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -top-10 -right-10 w-full h-full bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
