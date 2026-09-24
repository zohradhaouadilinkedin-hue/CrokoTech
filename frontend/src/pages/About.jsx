import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Server, ShieldCheck, Cloud, Cpu, Code2, Network, Linkedin, MapPin, HeartHandshake } from "lucide-react";
import Reveal from "../components/Reveal";
import Croco from "../components/Croco";
import { PageHero } from "./Prestations";
import { Button } from "../components/ui/button";
import { company, stats } from "../mock";

const expertises = [
  { icon: Server, text: "Création et gestion de serveurs (Windows & Linux)" },
  { icon: Network, text: "Maintien en condition opérationnelle du parc" },
  { icon: Cloud, text: "Supervision et sauvegarde des données" },
  { icon: Cpu, text: "Infogérance complète du parc informatique" },
  { icon: ShieldCheck, text: "Sécurisation et cybersécurité du système d'information" },
  { icon: Code2, text: "Création de sites web et d'applications" },
];

const values = [
  { title: "Proximité", text: "Une entreprise locale, un interlocuteur unique qui connaît votre installation." },
  { title: "Transparence", text: "Des devis clairs, des explications en français, jamais de facture surprise." },
  { title: "Réactivité", text: "On repère et on règle les problèmes vite, souvent avant que vous ne les voyiez." },
  { title: "Bonne humeur", text: "On ne mord que dans les problèmes, jamais dans nos clients. 🐊" },
];

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="À propos"
        title="CrokoTech, votre partenaire informatique en Bretagne"
        subtitle="Une entreprise locale spécialisée en informatique, réseaux et cybersécurité, au service des entreprises et des particuliers de Nantes et de tout le 44."
      />

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20 grid lg:grid-cols-5 gap-12 items-center">
        <Reveal className="lg:col-span-2">
          <div className="relative mx-auto w-full max-w-sm aspect-square rounded-[2.5rem] croco-gradient shadow-2xl flex items-center justify-center">
            <Croco size={200} />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-3 text-center whitespace-nowrap">
              <div className="font-display font-bold text-slate-900">CrokoTech</div>
              <div className="text-xs text-slate-500">Informatique & Cybersécurité</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-3">
          <div className="inline-flex items-center gap-2 text-[#0f7a4d] font-semibold"><MapPin size={20} /> {company.location}</div>
          <h2 className="mt-3 font-display font-bold text-3xl text-slate-900">Qui sommes-nous ?</h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            Chez <strong>CrokoTech</strong>, nous mettons notre passion et notre expertise au service de votre tranquillité numérique. Que vous soyez une entreprise en pleine transformation digitale ou un particulier en quête de simplicité, nous construisons et entretenons votre infrastructure comme si c'était la nôtre.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Notre mission est simple : rendre l'informatique <strong>fiable, sécurisée et agréable</strong>. On privilégie le contact humain, les explications claires et un accompagnement de proximité. Bretagne, bits et crocos : l'alliance parfaite ! 🐊
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {expertises.map(({ icon: Ico, text }) => (
              <div key={text} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4 card-hover">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-[#0f7a4d] shrink-0"><Ico size={20} /></div>
                <span className="text-sm text-slate-700">{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact"><Button size="lg" className="bg-[#0f7a4d] hover:bg-[#0b5f3c] text-white rounded-full px-8 h-12">Travaillons ensemble <ArrowRight size={18} className="ml-1" /></Button></Link>
            <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#0A66C2]/30 bg-[#0A66C2]/5 text-[#0A66C2] font-medium px-6 h-12 hover:bg-[#0A66C2]/10 transition-colors">
              <Linkedin size={18} /> {company.linkedinLabel}
            </a>
          </div>
        </Reveal>
      </section>

      {/* Stats band */}
      <section className="bg-secondary/60 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <div className="font-display font-extrabold text-3xl md:text-4xl text-gradient">{s.value}</div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#0e7490] font-semibold justify-center"><HeartHandshake size={20} /> Nos valeurs</div>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-slate-900">Ce qui nous fait avancer</h2>
          <p className="mt-4 text-slate-600">Un service local, humain et transparent. Parce que la confiance, ça ne se négocie pas.</p>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="card-hover bg-white rounded-2xl border border-border p-6 h-full">
                <div className="w-12 h-12 rounded-xl croco-gradient flex items-center justify-center text-white"><CheckCircle2 size={24} /></div>
                <h3 className="mt-4 font-display font-semibold text-lg text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
