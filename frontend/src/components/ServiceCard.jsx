import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Cpu, Network, Cable, Settings2, ShieldCheck, Handshake, LifeBuoy, Activity, DatabaseBackup, RefreshCw, Phone, Cctv, Code2, Headset, Wrench } from "lucide-react";

const ICONS = {
  Server, Cpu, Network, Cable, Settings2, ShieldCheck, Handshake, LifeBuoy,
  Activity, DatabaseBackup, RefreshCw, Phone, Cctv, Code2, Headset, Wrench,
};

export function ServiceIcon({ name, size = 24, className = "" }) {
  const Ico = ICONS[name] || Server;
  return <Ico size={size} className={className} />;
}

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/service/${service.slug}`}
      className="card-hover group block bg-white rounded-2xl border border-border overflow-hidden"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute top-3 left-3 w-11 h-11 rounded-xl bg-white/95 shadow flex items-center justify-center text-[#0f7a4d]">
          <ServiceIcon name={service.icon} size={22} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-slate-900 group-hover:text-[#0f7a4d] transition-colors">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0e7490] group-hover:gap-2.5 transition-all">
          En savoir plus <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
