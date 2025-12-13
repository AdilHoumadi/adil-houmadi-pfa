import { Server, Cloud, Code, MessageSquare, CheckCircle } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

interface ServicesSectionProps {
  visibleSections: Set<string>;
}

interface ColorScheme {
  icon: string;
  iconBg: string;
  iconBgHover: string;
  border: string;
  borderHover: string;
  shadow: string;
  gradient: string;
  gradientHover: string;
  text: string;
}

const colorSchemes: Record<string, ColorScheme> = {
  blue: {
    icon: 'text-blue-400',
    iconBg: 'bg-blue-600/10',
    iconBgHover: 'group-hover:bg-blue-600/20',
    border: 'border-gray-800',
    borderHover: 'hover:border-blue-600/50',
    shadow: 'hover:shadow-blue-600/20',
    gradient: 'from-blue-600/0 to-blue-600/0',
    gradientHover: 'group-hover:from-blue-600/5',
    text: 'text-blue-400',
  },
  emerald: {
    icon: 'text-emerald-400',
    iconBg: 'bg-emerald-600/10',
    iconBgHover: 'group-hover:bg-emerald-600/20',
    border: 'border-gray-800',
    borderHover: 'hover:border-emerald-600/50',
    shadow: 'hover:shadow-emerald-600/20',
    gradient: 'from-emerald-600/0 to-emerald-600/0',
    gradientHover: 'group-hover:from-emerald-600/5',
    text: 'text-emerald-400',
  },
  orange: {
    icon: 'text-orange-400',
    iconBg: 'bg-orange-600/10',
    iconBgHover: 'group-hover:bg-orange-600/20',
    border: 'border-gray-800',
    borderHover: 'hover:border-orange-600/50',
    shadow: 'hover:shadow-orange-600/20',
    gradient: 'from-orange-600/0 to-orange-600/0',
    gradientHover: 'group-hover:from-orange-600/5',
    text: 'text-orange-400',
  },
  cyan: {
    icon: 'text-cyan-400',
    iconBg: 'bg-cyan-600/10',
    iconBgHover: 'group-hover:bg-cyan-600/20',
    border: 'border-gray-800',
    borderHover: 'hover:border-cyan-600/50',
    shadow: 'hover:shadow-cyan-600/20',
    gradient: 'from-cyan-600/0 to-cyan-600/0',
    gradientHover: 'group-hover:from-cyan-600/5',
    text: 'text-cyan-400',
  },
};

export function ServicesSection({ visibleSections }: ServicesSectionProps) {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Server className="w-12 h-12" />,
      title: t('services.cards.data.title'),
      description: t('services.cards.data.description'),
      details: t('services.cards.data.details'),
      features: t('services.cards.data.features', { returnObjects: true }) as string[],
      delay: 'delay-0',
      color: 'blue',
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: t('services.cards.cloud.title'),
      description: t('services.cards.cloud.description'),
      details: t('services.cards.cloud.details'),
      features: t('services.cards.cloud.features', { returnObjects: true }) as string[],
      delay: 'delay-100',
      color: 'emerald',
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: t('services.cards.backend.title'),
      description: t('services.cards.backend.description'),
      details: t('services.cards.backend.details'),
      features: t('services.cards.backend.features', { returnObjects: true }) as string[],
      delay: 'delay-200',
      color: 'orange',
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: t('services.cards.consulting.title'),
      description: t('services.cards.consulting.description'),
      details: t('services.cards.consulting.details'),
      features: t('services.cards.consulting.features', { returnObjects: true }) as string[],
      delay: 'delay-300',
      color: 'cyan',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden" data-section="services">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-600/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div
            className={`inline-block px-4 py-2 bg-teal-600/10 border border-teal-600/30 rounded-full mb-6 transition-all duration-700 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <span className="text-teal-400 font-semibold text-sm">{t('services.badge')}</span>
          </div>
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <span className="bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent">
              {t('services.title')}
            </span>
          </h2>
          <p
            className={`text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {t('services.description')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((service, index) => {
            const colors = colorSchemes[service.color];
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl ${colors.border} ${colors.borderHover} transition-all duration-500 hover:shadow-2xl ${colors.shadow} overflow-hidden ${visibleSections.has('services') ? `opacity-100 translate-y-0 ${service.delay}` : 'opacity-0 translate-y-10'
                  }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} ${colors.gradientHover} group-hover:to-transparent transition-all duration-500`} />

                <div className="relative p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className={`p-4 ${colors.iconBg} rounded-2xl border ${colors.border} ${colors.iconBgHover} group-hover:scale-110 transition-all duration-300 inline-block ${colors.icon}`}>
                        {service.icon}
                      </div>
                    </div>

                    <div className="flex-1 space-y-6">
                      <div>
                        <h3 className={`text-3xl font-bold text-white mb-3 group-hover:${colors.text} transition-colors duration-300`}>
                          {service.title}
                        </h3>
                        <p className="text-lg text-gray-300 leading-relaxed mb-4">{service.description}</p>
                        <p className="text-gray-400 leading-relaxed">{service.details}</p>
                      </div>

                      <div className="border-t border-gray-800 pt-6">
                        <h4 className={`text-sm font-semibold ${colors.text} uppercase tracking-wider mb-4`}>
                          {t('services.key_capabilities')}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.features.map((feature, featureIdx) => (
                            <div
                              key={featureIdx}
                              className="flex items-start space-x-3 text-sm text-gray-400 group/feature"
                            >
                              <CheckCircle className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5 transition-colors`} />
                              <span className="group-hover/feature:text-gray-300 transition-colors leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <div className={`inline-flex items-center ${colors.text} font-semibold text-sm transition-colors`}>
                          <span>{t('services.production_ready')}</span>
                          <svg
                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="inline-block p-8 bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl border border-gray-800">
            <p className="text-lg text-gray-300 mb-4 max-w-2xl">
              <Trans
                i18nKey="services.stats.experience"
                components={[
                  <span key="0" className="text-teal-400 font-semibold" />,
                  <span key="1" />,
                  <span key="2" className="text-teal-400 font-semibold" />,
                  <span key="3" />,
                  <span key="4" className="text-teal-400 font-semibold" />
                ]}
              />
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg">{t('services.stats.reliability')}</span>
              <span className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg">{t('services.stats.practices')}</span>
              <span className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg">{t('services.stats.scalable')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
