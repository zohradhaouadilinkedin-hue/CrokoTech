import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Linkedin } from "lucide-react";
import Croco from "./Croco";
import { company, entrepriseServices, particulierServices } from "../mock";

export default function Footer() {
  const ent = entrepriseServices().slice(0, 7);
  const part = particulierServices();
  return (
    <footer className="bg-[#0b2a20] text-white/80 mt-24">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <Croco size={40} />
            <span className="font-display font-extrabold text-2xl text-white">CrokoTech</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Informatique, réseaux et cybersécurité pour les entreprises et les particuliers. Une entreprise Bretonne et fière de l'être. Croquez la vie à pleines dents !
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Entreprises</h4>
          <ul className="space-y-2 text-sm">
            {ent.map((s) => (
              <li key={s.slug}>
                <Link to={`/service/${s.slug}`} className="hover:text-[#22c55e] transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Particuliers</h4>
          <ul className="space-y-2 text-sm">
            {part.map((s) => (
              <li key={s.slug}>
                <Link to={`/service/${s.slug}`} className="hover:text-[#22c55e] transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} className="text-[#22c55e]" /> <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-white">{company.phone}</a></li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-[#22c55e]" /> <a href={`mailto:${company.email}`} className="hover:text-white break-all">{company.email}</a></li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-[#22c55e]" /> {company.location}</li>
            <li className="pt-1">
              <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 text-white">
                <Linkedin size={16} className="text-[#22c55e]" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} CrokoTech — Tous droits réservés.</span>
          <span>Bretagne, bits et crocos : l'alliance parfaite ! 🐊</span>
        </div>
      </div>
    </footer>
  );
}
