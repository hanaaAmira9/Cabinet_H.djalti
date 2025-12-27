import React, { useState } from 'react';
import { MessageCircle, Brain, Check, ArrowRight, ArrowLeft } from 'lucide-react';

const Services = ({ t, dir }) => {
    const [selectedService, setSelectedService] = useState(null); // 'speech' | 'psych' | null
    const isRtl = dir === 'rtl';

    const resetSelection = () => {
        setSelectedService(null);
    };

    // Content map
    const modalContent = selectedService === 'speech'
        ? {
            title: t.speech_therapy.title,
            items: t.speech_therapy.items,
            icon: <MessageCircle size={40} className="text-white" />,
            img: '/speech.png',
            color: 'bg-primary'
        }
        : selectedService === 'psych'
            ? {
                title: t.psychology.title,
                items: t.psychology.items,
                icon: <Brain size={40} className="text-white" />,
                img: '/psych.png',
                color: 'bg-secondary'
            }
            : null;

    return (
        <section id="services" className="services">
            <div className="container">

                {/* Header - Only visible when NO service selected */}
                {!selectedService && (
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-4xl font-bold text-primary mb-4">{t.nav.services}</h2>
                        <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                    </div>
                )}

                {/* View Switcher: Grid OR Details */}
                {!selectedService ? (
                    /* --- Grid View --- */
                    <div className="services-grid animate-fade-in">
                        {/* Speech Therapy Card */}
                        <div className="service-card cursor-pointer group" onClick={() => setSelectedService('speech')}>
                            <div className="mb-4 group-hover:scale-110 transition-transform">
                                <MessageCircle size={40} className="text-primary mx-auto" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{t.speech_therapy.title}</h3>
                            <p className="text-text-secondary mb-6">{t.speech_therapy.description}</p>

                            <ul className="text-start space-y-2 mb-6">
                                {t.speech_therapy.items.slice(0, 4).map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                                        <Check size={16} className="text-secondary shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="text-start mt-4 font-semibold text-primary cursor-pointer hover:underline">
                                {isRtl ? "عرض المزيد..." : "En savoir plus..."}
                            </div>
                        </div>

                        {/* Psychology Card */}
                        <div className="service-card cursor-pointer group" onClick={() => setSelectedService('psych')}>
                            <div className="mb-4 group-hover:scale-110 transition-transform">
                                <Brain size={40} className="text-secondary mx-auto" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{t.psychology.title}</h3>
                            <p className="text-text-secondary mb-6">{t.psychology.description}</p>

                            <ul className="text-start space-y-2 mb-6">
                                {t.psychology.items.slice(0, 4).map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                                        <Check size={16} className="text-primary shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="text-start mt-4 font-semibold text-secondary cursor-pointer hover:underline">
                                {isRtl ? "عرض المزيد..." : "En savoir plus..."}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* --- Detail View (In-Place) --- */
                    <div className="animate-fade-in">
                        {/* Back Button with clean style */}
                        <button
                            onClick={resetSelection}
                            className="mb-8 btn-icon w-12 h-12 border border-border bg-bg-card hover:bg-primary hover:text-white"
                            title={isRtl ? "العودة إلى الخدمات" : "Retour aux services"}
                        >
                            {isRtl ? <ArrowRight size={24} /> : <ArrowLeft size={24} />}
                        </button>

                        <div className="bg-transparent">
                            <div className="grid md:grid-cols-2 gap-8">

                                {/* Text Content */}
                                <div className="p-0 md:p-8">
                                    <div className="mb-6">
                                        {modalContent.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-6 text-text-main">{modalContent.title}</h3>

                                    <ul className="space-y-4">
                                        {modalContent.items.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-border/50 last:border-0">
                                                <Check size={20} className={`${selectedService === 'speech' ? 'text-secondary' : 'text-primary'} shrink-0 mt-1`} />
                                                <span className="text-lg text-text-secondary">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Image Content */}
                                <div className="h-60 md:h-96 relative rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src={modalContent.img}
                                        alt={modalContent.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Services;
