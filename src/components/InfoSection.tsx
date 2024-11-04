import React from 'react';

interface InfoSectionProps {
  title: string;
  icon: React.ReactNode;
  iconColor: string;
  children: React.ReactNode;
}

export function InfoSection({ title, icon, iconColor, children }: InfoSectionProps) {
  return (
    <section className="bg-gray-800 rounded-xl p-8 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-6 h-6 ${iconColor}`}>{icon}</div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      {children}
    </section>
  );
}