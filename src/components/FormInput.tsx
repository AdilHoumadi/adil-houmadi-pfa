import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormInputProps {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    icon?: LucideIcon;
    rows?: number;
}

export const FormInput: React.FC<FormInputProps> = ({
    id,
    type,
    label,
    placeholder,
    icon: Icon,
    rows
}) => {
    const baseClasses = "w-full py-3 bg-gray-950 border border-gray-800 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600";

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-2">
                {label}
            </label>
            <div className="relative">
                {Icon && (
                    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                )}

                {type === 'textarea' ? (
                    <textarea
                        name={id}
                        id={id}
                        required
                        rows={rows || 4}
                        className={`${baseClasses} px-4 resize-none`}
                        placeholder={placeholder}
                    />
                ) : (
                    <input
                        type={type}
                        name={id}
                        id={id}
                        required
                        className={`${baseClasses} ${Icon ? 'pl-11' : 'px-4'} pr-4`}
                        placeholder={placeholder}
                    />
                )}
            </div>
        </div>
    );
};
