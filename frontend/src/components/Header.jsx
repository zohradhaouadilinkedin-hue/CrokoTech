import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import Croco from "./Croco";
import { ServiceIcon } from "./ServiceCard";
import { company, entrepriseServices, particulierServices } from "../mock";
import { Button } from "./ui/button";

const navBase =
  "px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  const ent = entrepriseServices();
  const part = particulierServices();

  const isActive = (p) => location.pathname === p;

  return (
    <>
      {/* Top contact bar */}
      <div className="croco-gradient text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center md:justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-6">
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone size={15} /> <span>{company.phone}</span>
            </a>
            <a href={`mailto:${company.email}`} className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail size={15} /> <span>{company.email}</span>
            </a>
          </div>
          <span className="hidden md:block text-white/85 italic">{company.location} — Déplacements gratuits</span>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[74px]">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="transition-transform duration-300 group-hover:-rotate-6">
              <Croco size={44} />
            </div>
            <span className="font-display font-extrabold text-2xl tracking-tight">
              <span className="text-[#0f7a4d]">Croko</span>
              <span className="text-[#0e7490]">Tech</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/prestations" className={`${navBase} ${isActive("/prestations") ? "text-[#0f7a4d]" : "text-slate-700 hover:text-[#0f7a4d] hover:bg-secondary"}`}>
              Nos prestations
            </Link>

            <NavDropdown label="Pour les entreprises" to="/pour-les-entreprises" items={ent} isActive={isActive("/pour-les-entreprises")} />
            <NavDropdown label="Pour les particuliers" to="/pour-les-particuliers" items={part} isActive={isActive("/pour-les-particuliers")} />

            <Link to="/a-propos" className={`${navBase} ${isActive("/a-propos") ? "text-[#0f7a4d]" : "text-slate-700 hover:text-[#0f7a4d] hover:bg-secondary"}`}>
              À propos
            </Link>
            <Link to="/contact" className="ml-2">
              <Button className="bg-[#0f7a4d] hover:bg-[#0b5f3c] text-white rounded-full px-5">Contact</Button>
            </Link>
          </nav>

          <button className="lg:hidden p-2 text-slate-700" onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white max-h-[75vh] overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              <MobileLink to="/prestations" label="Nos prestations" />
              <MobileGroup label="Pour les entreprises" to="/pour-les-entreprises" items={ent} open={openGroup === "ent"} onToggle={() => setOpenGroup(openGroup === "ent" ? null : "ent")} />
              <MobileGroup label="Pour les particuliers" to="/pour-les-particuliers" items={part} open={openGroup === "part"} onToggle={() => setOpenGroup(openGroup === "part" ? null : "part")} />
              <MobileLink to="/a-propos" label="À propos" />
              <MobileLink to="/contact" label="Contact" />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function NavDropdown({ label, to, items, isActive }) {
  const cols = items.length > 8 ? "grid-cols-2" : "grid-cols-2";
  const width = items.length > 8 ? "w-[620px]" : "w-[440px]";
  return (
    <div className="relative group">
      <Link to={to} className={`${navBase} inline-flex items-center gap-1 ${isActive ? "text-[#0f7a4d]" : "text-slate-700 hover:text-[#0f7a4d] hover:bg-secondary"}`}>
        {label} <ChevronDown size={15} className="transition-transform duration-300 group-hover:rotate-180" />
      </Link>
      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
        <div className={`${width} max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-border p-3`}>
          <div className={`grid ${cols} gap-1`}>
            {items.map((s) => (
              <Link key={s.slug} to={`/service/${s.slug}`} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-slate-700 hover:bg-secondary hover:text-[#0f7a4d] transition-colors">
                <span className="w-8 h-8 rounded-lg bg-secondary group-hover:bg-white flex items-center justify-center text-[#0f7a4d] shrink-0">
                  <ServiceIcon name={s.icon} size={16} />
                </span>
                <span className="leading-tight">{s.title}</span>
              </Link>
            ))}
          </div>
          <Link to={to} className="mt-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-white croco-gradient hover:opacity-95 transition-opacity">
            Voir la page {label.toLowerCase()}
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileLink({ to, label }) {
  return (
    <Link to={to} className="block px-3 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-secondary">
      {label}
    </Link>
  );
}

function MobileGroup({ label, to, items, open, onToggle }) {
  return (
    <div>
      <div className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-secondary">
        <Link to={to} className="text-slate-800 font-medium">{label}</Link>
        <button onClick={onToggle} className="p-1" aria-label="Ouvrir">
          <ChevronDown size={18} className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="pl-4 py-1 space-y-0.5">
          {items.map((s) => (
            <Link key={s.slug} to={`/service/${s.slug}`} className="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-secondary hover:text-[#0f7a4d]">
              {s.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
