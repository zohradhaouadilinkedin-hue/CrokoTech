import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import { Button } from "../components/ui/button";
import { services } from "../mock";

export default function Prestations() {
  return (
    <div>
      <PageHero
        eyebrow="Nos prestations"
        title="Toute l'informatique, sans prise de tête"
        subtitle="Aujourd'hui, l'informatique s'incruste dans toutes les entreprises comme ce collègue un peu envahissant. Chez CrokoTech, on construit et on entretient votre infrastructure comme un gardien zélé protégeant ses précieux snacks."
      />
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16 text-center">
          <p className="text-slate-600">Un besoin spécifique ? Parlons-en autour d'un café (ou d'un snack) !</p>
          <Link to="/contact"><Button size="lg" className="mt-5 bg-[#0f7a4d] hover:bg-[#0b5f3c] text-white rounded-full px-8 h-12">Demander un devis <ArrowRight size={18} className="ml-1" /></Button></Link>
        </Reveal>
      </section>
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden croco-gradient text-white">
      <div className="absolute -top-20 -right-16 w-80 h-80 bg-white/10 animate-blob" />
      <div className="absolute -bottom-24 -left-10 w-72 h-72 bg-black/10 animate-blob" style={{ animationDelay: "3s" }} />
      <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
        <span className="inline-block text-sm font-semibold uppercase tracking-wide text-white/80">{eyebrow}</span>
        <h1 className="mt-3 font-display font-extrabold text-4xl md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-5 text-white/85 text-lg leading-relaxed max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
