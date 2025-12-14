import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ContactSectionProps {
    visibleSections: Set<string>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ visibleSections }) => {
    const { t } = useTranslation();
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('sending');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formsubmit.co/b6c862fa953942f066ede6e8396a9643", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
                form.reset();
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                console.error("FormSubmit Error");
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 5000);
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden" data-section="contact">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                <div className="text-center mb-20">
                    <h2
                        className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        {t('contact.title_start')}{' '}
                        <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                            {t('contact.title_end')}
                        </span>
                    </h2>
                    <p
                        className={`text-xl text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-100 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div
                        className={`space-y-8 transition-all duration-700 delay-200 ${visibleSections.has('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}
                    >
                        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
                            <h3 className="text-2xl font-bold text-white mb-6">{t('contact.info.title')}</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-teal-500/10 rounded-lg">
                                        <Mail className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">{t('contact.info.email')}</p>
                                        <a
                                            href="mailto:contact@adil.ro"
                                            className="text-lg text-white hover:text-teal-400 transition-colors"
                                        >
                                            contact@adil.ro
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-teal-500/10 rounded-lg">
                                        <MapPin className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">{t('contact.info.address')}</p>
                                        <p
                                            className="text-white leading-relaxed"
                                            dangerouslySetInnerHTML={{
                                                __html: t('contact.info.address_val'),
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-800">
                                <p className="text-gray-400 leading-relaxed">
                                    {t('contact.info.availability')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`bg-gray-900/50 p-8 rounded-2xl border border-gray-800 transition-all duration-700 delay-300 ${visibleSections.has('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">{t('contact.form.title')}</h3>
                        <form
                            action="https://formsubmit.co/b6c862fa953942f066ede6e8396a9643"
                            method="POST"
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <input type="hidden" name="_subject" value="New Contact Form Submission" />
                            <input type="hidden" name="_template" value="table" />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                    {t('contact.form.name')}
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="w-full pl-11 pr-4 py-3 bg-gray-950 border border-gray-800 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                                        placeholder={t('contact.form.name_placeholder')}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                    {t('contact.form.email')}
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="w-full pl-11 pr-4 py-3 bg-gray-950 border border-gray-800 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                                        placeholder={t('contact.form.email_placeholder')}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                    {t('contact.form.message')}
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 resize-none"
                                    placeholder={t('contact.form.message_placeholder')}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === 'sending' || formStatus === 'success'}
                                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] ${formStatus === 'success'
                                    ? 'bg-green-500/10 text-green-500 border border-green-500/50 cursor-default'
                                    : formStatus === 'error'
                                        ? 'bg-red-500/10 text-red-500 border border-red-500/50'
                                        : 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white shadow-lg shadow-teal-900/20'
                                    }`}
                            >
                                {formStatus === 'sending' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>{t('contact.form.sending')}</span>
                                    </>
                                ) : formStatus === 'success' ? (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        <span>{t('contact.form.success')}</span>
                                    </>
                                ) : formStatus === 'error' ? (
                                    <>
                                        <AlertCircle className="w-5 h-5" />
                                        <span>{t('contact.form.error')}</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>{t('contact.form.submit')}</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
