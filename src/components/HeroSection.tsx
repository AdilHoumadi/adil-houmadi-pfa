
import React from 'react';
import { AnimatedBackground } from './AnimatedBackground';
import { useTranslation, Trans } from 'react-i18next';

interface HeroSectionProps {
    scrollToSection: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
    const { t } = useTranslation();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 md:pt-20" data-section="home">
            <div className="absolute inset-0">
                <AnimatedBackground />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8 flex justify-center animate-fade-in">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                            <div className="relative">
                                <img
                                    src="./profile_pic_v4.png"
                                    alt="Adil Houmadi"
                                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover object-top border-4 border-gray-900 shadow-2xl ring-4 ring-teal-500/20"
                                />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500/10 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                        {t('hero.title_start')}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                            {t('hero.title_end')}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay-1">
                        {t('hero.subtitle')}
                    </p>
                    <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2">
                        <Trans
                            i18nKey="hero.bio"
                            components={[
                                <span key="0" />,
                                <strong key="1" className="text-gray-200" />,
                                <span key="2" />,
                                <strong key="3" className="text-gray-200" />,
                                <span key="4" />,
                                <strong key="5" className="text-gray-200" />
                            ]}
                        />
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-teal-600/50"
                        >
                            {t('hero.contact_me')}
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 border border-gray-700"
                        >
                            {t('hero.view_services')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
