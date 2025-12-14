import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
    icon: LucideIcon;
    label: string;
    children: React.ReactNode;
}

export const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, label, children }) => (
    <div className="flex items-start space-x-4">
        <div className="p-3 bg-teal-500/10 rounded-lg">
            <Icon className="w-6 h-6 text-teal-400" />
        </div>
        <div>
            <p className="text-sm text-gray-400 mb-1">{label}</p>
            {children}
        </div>
    </div>
);
