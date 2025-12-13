import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-gray-950 py-8 border-t border-gray-900">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <p dangerouslySetInnerHTML={{ __html: t('footer.copyright', { year: new Date().getFullYear() }) }} />
            </div>
        </footer>
    );
};
