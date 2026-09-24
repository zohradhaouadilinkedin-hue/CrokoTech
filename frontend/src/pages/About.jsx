import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Server, ShieldCheck, Cloud, Cpu, Code2, Network, Linkedin } from "lucide-react";
import Reveal from "../components/Reveal";
import Croco from "../components/Croco";
import { PageHero } from "./Prestations";
import { Button } from "../components/ui/button";
import { company } from "../mock";

const skills = [
  { icon: Server, text: "Création de serveurs (Windows et Linux) divers" },
  { icon: Network, text: "Gestion et maintien en condition opérationnelle" },
  { icon: Cloud, text: "Supervision et sauvegarde" },
  { icon: Cpu, text: "Infogérance du parc informatique" },
  { icon: ShieldCheck, text: "Sécurisation du parc informatique" },
  { icon: Code2, text: "Création de sites web et applications web" },
];

export default function About() {
  return (
    <div>
      <PageHero eyebrow="À propos de moi" title="Bonjour, moi c'est Corentin 👋" />

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20 grid lg:grid-cols-5 gap-12 items-center">
        <Reveal className="lg:col-span-2">
          <div className="relative mx-auto w-full max-w-sm aspect-square rounded-[2.5rem] croco-gradient shadow-2xl flex items-center justify-center">
            <Croco size={200} />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-3 text-center whitespace-nowrap">
              <div className="font-display font-bold text-slate-900">{company.founder}</div>
              <div className="text-xs text-slate-500">Ingénieur Systèmes & Réseaux</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-3">
          <p className="text-lg text-slate-700 leading-relaxed">
            Je m'appelle <strong>Corentin Leriche</strong>, 28 printemps et d'origine Bretonne. Je suis ingénieur Systèmes & Réseaux et je propose mes services aux entreprises comme aux particuliers.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Passionné depuis toujours, je code même en rêve ! Mon objectif : rendre l'informatique simple, sûre et agréable, en gardant toujours le sourire. Croquez la vie à pleines dents ! 🐊
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {skills.map(({ icon: Ico, text }) => (
              <div key={text} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4 card-hover">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-[#0f7a4d] shrink-0"><Ico size={20} /></div>
                <span className="text-sm text-slate-700">{text}</span>
              </div>
            ))}
          </div>
          <Link to="/contact"><Button size="lg" className="mt-8 bg-[#0f7a4d] hover:bg-[#0b5f3c] text-white rounded-full px-8 h-12">Travaillons ensemble <ArrowRight size={18} className="ml-1" /></Button></Link>
          <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="mt-8 ml-3 inline-flex items-center gap-2 rounded-full border border-[#0A66C2]/30 bg-[#0A66C2]/5 text-[#0A66C2] font-medium px-6 h-12 hover:bg-[#0A66C2]/10 transition-colors align-middle">
            <Linkedin size={18} /> {company.linkedinLabel}
          </a>
        </Reveal>
      </section>

      <section className="bg-secondary/60">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl text-slate-900">Mon engagement</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">Un service local, humain et transparent. Un interlocuteur unique qui connaît votre installation, des délais tenus, et des explications toujours en français. Parce que la confiance, ça ne se négocie pas.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {["Proximité", "Transparence", "Réactivité", "Bonne humeur"].map((v) => (
                <div key={v} className="flex items-center gap-2 text-slate-800 font-medium"><CheckCircle2 size={20} className="text-[#0f7a4d]" /> {v}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
