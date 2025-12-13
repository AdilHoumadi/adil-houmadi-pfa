
import React from 'react';
import { Home, Briefcase, Code2, MessageCircle, Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    isScrolled: boolean;
    activeSection: string;
    scrollToSection: (id: string) => void;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
    isScrolled,
    activeSection,
    scrollToSection,
    mobileMenuOpen,
    setMobileMenuOpen,
}) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-gray-900/98 backdrop-blur-md shadow-2xl shadow-teal-500/10 border-b border-teal-500/20'
                : 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50'
                }`}
        >
            <nav className="container mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="flex items-center space-x-3 hover:opacity-90 transition-opacity text-left focus:outline-none"
                    >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/30">
                            <span className="text-white font-bold text-lg">AH</span>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-white">Adil Houmadi</div>
                            <div className="text-xs text-teal-400">PFA</div>
                        </div>
                    </button>

                    <div className="hidden md:flex items-center space-x-1">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`group relative px-4 py-2 rounded-lg transition-all duration-300 font-medium flex items-center space-x-2 ${activeSection === 'home'
                                ? 'text-teal-400 bg-teal-500/10'
                                : 'text-gray-300 hover:text-teal-400 hover:bg-teal-500/5'
                                }`}
                        >
                            <Home className="w-4 h-4" />
                            <span>{t('navbar.home')}</span>
                            {activeSection === 'home' && (
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
                            )}
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className={`group relative px-4 py-2 rounded-lg transition-all duration-300 font-medium flex items-center space-x-2 ${activeSection === 'services'
                                ? 'text-teal-400 bg-teal-500/10'
                                : 'text-gray-300 hover:text-teal-400 hover:bg-teal-500/5'
                                }`}
                        >
                            <Briefcase className="w-4 h-4" />
                            <span>{t('navbar.services')}</span>
                            {activeSection === 'services' && (
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
                            )}
                        </button>
                        <button
                            onClick={() => scrollToSection('expertise')}
                            className={`group relative px-4 py-2 rounded-lg transition-all duration-300 font-medium flex items-center space-x-2 ${activeSection === 'expertise'
                                ? 'text-teal-400 bg-teal-500/10'
                                : 'text-gray-300 hover:text-teal-400 hover:bg-teal-500/5'
                                }`}
                        >
                            <Code2 className="w-4 h-4" />
                            <span>{t('navbar.expertise')}</span>
                            {activeSection === 'expertise' && (
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
                            )}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`group relative ml-2 px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold flex items-center space-x-2 shadow-lg transform hover:scale-105 ${activeSection === 'contact'
                                ? 'bg-teal-500 text-white shadow-teal-500/40'
                                : 'bg-teal-600 text-white hover:bg-teal-500 shadow-teal-600/30'
                                }`}
                        >
                            <MessageCircle className="w-4 h-4" />
                            <span>{t('navbar.contact')}</span>
                        </button>

                        <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-700">
                            <button onClick={() => changeLanguage('en')} className={`text-sm font-medium transition-colors ${i18n.language === 'en' ? 'text-teal-400' : 'text-gray-400 hover:text-white'}`}>EN</button>
                            <span className="text-gray-600">|</span>
                            <button onClick={() => changeLanguage('fr')} className={`text-sm font-medium transition-colors ${i18n.language === 'fr' ? 'text-teal-400' : 'text-gray-400 hover:text-white'}`}>FR</button>
                            <span className="text-gray-600">|</span>
                            <button onClick={() => changeLanguage('ro')} className={`text-sm font-medium transition-colors ${i18n.language === 'ro' ? 'text-teal-400' : 'text-gray-400 hover:text-white'}`}>RO</button>
                        </div>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden mt-6 pb-4 space-y-2 border-t border-gray-800/50 pt-4">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`group flex items-center space-x-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === 'home'
                                ? 'bg-teal-500/10 text-teal-400 border border-teal-500/30'
                                : 'hover:bg-teal-500/5 hover:text-teal-400 border border-transparent'
                                }`}
                        >
                            <Home className="w-5 h-5" />
                            <span className="font-medium">{t('navbar.home')}</span>
                            {activeSection === 'home' && (
                                <div className="ml-auto w-2 h-2 rounded-full bg-teal-400" />
                            )}
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className={`group flex items-center space-x-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === 'services'
                                ? 'bg-teal-500/10 text-teal-400 border border-teal-500/30'
                                : 'hover:bg-teal-500/5 hover:text-teal-400 border border-transparent'
                                }`}
                        >
                            <Briefcase className="w-5 h-5" />
                            <span className="font-medium">{t('navbar.services')}</span>
                            {activeSection === 'services' && (
                                <div className="ml-auto w-2 h-2 rounded-full bg-teal-400" />
                            )}
                        </button>
                        <button
                            onClick={() => scrollToSection('expertise')}
                            className={`group flex items-center space-x-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === 'expertise'
                                ? 'bg-teal-500/10 text-teal-400 border border-teal-500/30'
                                : 'hover:bg-teal-500/5 hover:text-teal-400 border border-transparent'
                                }`}
                        >
                            <Code2 className="w-5 h-5" />
                            <span className="font-medium">{t('navbar.expertise')}</span>
                            {activeSection === 'expertise' && (
                                <div className="ml-auto w-2 h-2 rounded-full bg-teal-400" />
                            )}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`group flex items-center space-x-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-semibold mt-2 ${activeSection === 'contact'
                                ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/40'
                                : 'bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-600/30'
                                }`}
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>{t('navbar.contact')}</span>
                        </button>

                        <div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-gray-800">
                            <button onClick={() => changeLanguage('en')} className={`text-sm font-medium px-3 py-1 rounded-md ${i18n.language === 'en' ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400'}`}>EN</button>
                            <button onClick={() => changeLanguage('fr')} className={`text-sm font-medium px-3 py-1 rounded-md ${i18n.language === 'fr' ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400'}`}>FR</button>
                            <button onClick={() => changeLanguage('ro')} className={`text-sm font-medium px-3 py-1 rounded-md ${i18n.language === 'ro' ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400'}`}>RO</button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};
