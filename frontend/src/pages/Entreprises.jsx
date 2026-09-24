import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import { PageHero } from "./Prestations";
import { Button } from "../components/ui/button";
import { entrepriseServices } from "../mock";

const benefits = [
  "Un interlocuteur unique qui connaît votre parc",
  "Interventions à distance et sur site dans le 44",
  "Contrats d'infogérance sur mesure",
  "Supervision proactive : on repère avant que ça casse",
  "Sauvegardes et cybersécurité aux normes",
  "Reporting clair, en français (promis)",
];

export default function Entreprises() {
  const list = entrepriseServices();
  return (
    <div>
      <PageHero
        eyebrow="Pour les entreprises"
        title="Votre informatique entre de bonnes pattes"
        subtitle="CrokoTech intervient sur l'ensemble de votre parc (Mac, PC, Linux, serveurs, imprimantes, routeurs, switchs...). Avec des sauvegardes et des mises à jour aussi fréquentes que les blagues du vendredi après-midi, travaillez l'esprit léger."
      />

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <img
            src="https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Infrastructure serveur"
            className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="inline-flex items-center gap-2 text-[#0f7a4d] font-semibold"><Building2 size={20} /> Un partenaire de confiance</div>
          <h2 className="mt-3 font-display font-bold text-3xl text-slate-900">On gère, vous respirez</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">Nous nous occupons du reste, même quand on doit affronter des bugs plus coriaces qu'une réunion de famille pendant les fêtes.</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <CheckCircle2 className="text-[#0f7a4d] shrink-0 mt-0.5" size={19} />
                <span className="text-slate-700 text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <Reveal><h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900">Nos services entreprises</h2></Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}><ServiceCard service={s} /></Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <Reveal>
        <div className="rounded-[2rem] bg-secondary/70 border border-border px-6 py-12 md:px-14 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900">Parlons de votre projet</h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">Devis gratuit, sans engagement et sans prise de tête. On croque le problème, pas votre budget.</p>
          <Link to="/contact"><Button size="lg" className="mt-6 bg-[#0f7a4d] hover:bg-[#0b5f3c] text-white rounded-full px-8 h-12">Nous contacter <ArrowRight size={18} className="ml-1" /></Button></Link>
        </div>
      </Reveal>
    </section>
  );
}
