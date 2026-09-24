import React from "react";
import { CheckCircle2, User } from "lucide-react";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import { PageHero } from "./Prestations";
import { CtaBand } from "./Entreprises";
import { particulierServices } from "../mock";

const benefits = [
  "Dépannage à domicile sur Nantes et le 44",
  "Montage de PC sur mesure, du bureautique au gaming",
  "Upgrade (SSD, RAM, GPU) pour une machine plus rapide",
  "Suppression de virus et nettoyage complet",
  "Vidéosurveillance pour votre domicile",
  "Des explications simples, en français",
];

export default function Particuliers() {
  const list = particulierServices();
  return (
    <div>
      <PageHero
        eyebrow="Pour les particuliers"
        title="La tranquillité numérique à la maison"
        subtitle="Un pépin avec votre ordinateur ? Envie d'une machine plus rapide ou d'un peu plus de sécurité ? Un croco sympathique arrive à votre rescousse, le sourire en prime."
      />

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal delay={120} className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 text-[#0f7a4d] font-semibold"><User size={20} /> Proche de chez vous</div>
          <h2 className="mt-3 font-display font-bold text-3xl text-slate-900">On dédramatise l'informatique</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">Pas de jargon incompréhensible ni de facture surprise. On prend le temps de vous expliquer, et on ne mord que dans les problèmes.</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <CheckCircle2 className="text-[#0f7a4d] shrink-0 mt-0.5" size={19} />
                <span className="text-slate-700 text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="order-1 lg:order-2">
          <img
            src="https://images.pexels.com/photos/4705603/pexels-photo-4705603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Réparation d'ordinateur"
            className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
          />
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <Reveal><h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900">Nos services particuliers</h2></Reveal>
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
