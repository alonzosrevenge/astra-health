import React from 'react';

interface GlowCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function GlowCard({ title, subtitle, children }: GlowCardProps) {
  return (
    <div className="group relative border border-white/10 bg-slate/30 p-8 rounded-lg transition-all duration-300 hover:border-mint/30">
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
           style={{ boxShadow: 'inset 0 0 40px rgba(189, 248, 226, 0.15)' }}>
      </div>
      <div className="relative z-10">
        <p className="text-xs uppercase tracking-widecaps text-mint/60 mb-2">{subtitle}</p>
        <h3 className="text-xl font-medium mb-4 text-[#E6E7E8]">{title}</h3>
        <p className="text-[#E6E7E8]/70 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
