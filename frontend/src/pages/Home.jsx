import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, CheckCircle2, Flame, Award, Smile, Star, Phone, Building2, User } from "lucide-react";
import { Button } from "../components/ui/button";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import Croco from "../components/Croco";
import { company, pillars, localPoints, stats, services, testimonials } from "../mock";

const PILLAR_ICONS = { Flame, Award, Smile };

export default function Home() {
  const featured = services.slice(0, 6);
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden croco-gradient-soft">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#22c55e]/15 animate-blob" />
        <div className="absolute top-40 -left-24 w-80 h-80 bg-[#0e7490]/10 animate-blob" style={{ animationDelay: "3s" }} />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-[#0f7a4d]/20 rounded-full px-4 py-1.5 text-sm font-medium text-[#0f7a4d]">
              <MapPin size={15} /> {company.location} — Déplacements gratuits
            </div>
            <h1 className="mt-5 font-display font-extrabold text-4xl md:text-6xl leading-[1.05] text-slate-900">
              Informatique, réseaux &{" "}
              <span className="text-gradient">cybersécurité</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
              Que vous soyez un particulier en quête de tranquillité numérique ou une entreprise en mission digitale, <strong className="text-slate-800">CrokoTech</strong> est là ! Gestion de serveurs, installation de matériel, audit de votre SI et création de sites web — beau ET fonctionnel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button size="lg" className="bg-[#0f7a4d] hover:bg-[#0b5f3c] text-white rounded-full px-7 h-12">
                  Demander un devis <ArrowRight size={18} className="ml-1" />
                </Button>
              </Link>
              <Link to="/prestations">
                <Button size="lg" variant="outline" className="rounded-full px-7 h-12 border-[#0f7a4d]/30 text-[#0f7a4d] hover:bg-[#0f7a4d]/5">
                  Nos prestations
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
              <Phone size={16} className="text-[#0f7a4d]" /> Une question ? <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="font-semibold text-slate-800 hover:text-[#0f7a4d]">{company.phone}</a>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-md aspect-square rounded-[2.5rem] croco-gradient shadow-2xl flex items-center justify-center animate-floaty">
              <Croco size={220} className="drop-shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4">
                <div className="text-3xl font-display font-extrabold text-[#0f7a4d]">5+</div>
                <div className="text-xs text-slate-500">ans d'expérience</div>
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-4">
                <div className="flex items-center gap-1 text-[#0e7490]"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                <div className="text-xs text-slate-500 mt-1">clients satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <div className="font-display font-extrabold text-3xl md:text-4xl text-gradient">{s.value}</div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LOCAL ENTREPRISE */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <img
            src="https://images.pexels.com/photos/4705636/pexels-photo-4705636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Technicien CrokoTech"
            className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
          />
        </Reveal>
        <Reveal delay={120}>
          <span className="text-sm font-semibold text-[#0e7490] uppercase tracking-wide">Une entreprise locale</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-slate-900">Un vrai croco du coin, pas un centre d'appel</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Chez CrokoTech, on privilégie la proximité et le contact humain. Un interlocuteur unique, disponible et sympathique, qui connaît votre installation sur le bout des griffes.
          </p>
          <ul className="mt-6 space-y-3">
            {localPoints.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="text-[#0f7a4d] shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700">{p}</span>
              </li>
            ))}
          </ul>
          <Link to="/a-propos" className="mt-7 inline-flex items-center gap-2 font-medium text-[#0f7a4d] hover:gap-3 transition-all">
            Faire connaissance <ArrowRight size={18} />
          </Link>
        </Reveal>
      </section>

      {/* PILLARS */}
      <section className="bg-secondary/60">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-[#0e7490] uppercase tracking-wide">Pourquoi CrokoTech</span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-slate-900">Trois bonnes raisons de nous croquer</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => {
              const Ico = PILLAR_ICONS[p.icon] || Flame;
              return (
                <Reveal key={p.title} delay={i * 120}>
                  <div className="card-hover bg-white rounded-2xl border border-border p-7 h-full">
                    <div className="w-14 h-14 rounded-2xl croco-gradient flex items-center justify-center text-white">
                      <Ico size={26} />
                    </div>
                    <h3 className="mt-5 font-display font-semibold text-xl text-slate-900">{p.title}</h3>
                    <p className="mt-3 text-slate-600 text-sm leading-relaxed">{p.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <Link to="/pour-les-entreprises" className="card-hover group block relative overflow-hidden rounded-3xl p-8 md:p-10 croco-gradient text-white h-full">
              <Building2 size={40} className="opacity-90" />
              <h3 className="mt-5 font-display font-bold text-2xl">Pour les entreprises</h3>
              <p className="mt-3 text-white/85 max-w-md">Infogérance, serveurs, réseaux, cybersécurité, sauvegardes, téléphonie IP... Toute votre informatique entre de bonnes pattes.</p>
              <span className="mt-6 inline-flex items-center gap-2 font-medium group-hover:gap-3 transition-all">Découvrir <ArrowRight size={18} /></span>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/pour-les-particuliers" className="card-hover group block relative overflow-hidden rounded-3xl p-8 md:p-10 bg-[#0b2a20] text-white h-full">
              <User size={40} className="text-[#22c55e]" />
              <h3 className="mt-5 font-display font-bold text-2xl">Pour les particuliers</h3>
              <p className="mt-3 text-white/80 max-w-md">Assistance à domicile, réparation, montage et upgrade de PC, vidéosurveillance, sites web... On parle français, promis !</p>
              <span className="mt-6 inline-flex items-center gap-2 font-medium text-[#22c55e] group-hover:gap-3 transition-all">Découvrir <ArrowRight size={18} /></span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <Reveal className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-sm font-semibold text-[#0e7490] uppercase tracking-wide">Nos prestations</span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-slate-900">Des services aussi affûtés que nos dents</h2>
          </div>
          <Link to="/prestations" className="inline-flex items-center gap-2 font-medium text-[#0f7a4d] hover:gap-3 transition-all">Tout voir <ArrowRight size={18} /></Link>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 100}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/60 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-[#0e7490] uppercase tracking-wide">Ils nous font confiance</span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-slate-900">Le sourire, notre créneau</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <div className="card-hover bg-white rounded-2xl border border-border p-7 h-full">
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    {Array.from({ length: t.rating }).map((_, k) => <Star key={k} size={18} fill="currentColor" />)}
                  </div>
                  <p className="mt-4 text-slate-700 leading-relaxed italic">“{t.text}”</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full croco-gradient text-white flex items-center justify-center font-semibold">{t.name.charAt(0)}</div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] croco-gradient text-white px-6 py-14 md:px-16 md:py-20 text-center">
            <div className="absolute -top-16 -right-10 w-64 h-64 bg-white/10 animate-blob" />
            <div className="relative">
              <h2 className="font-display font-extrabold text-3xl md:text-5xl">Prêt à croquer vos problèmes informatiques ?</h2>
              <p className="mt-4 text-white/85 max-w-2xl mx-auto text-lg">On ne mord que dans les problèmes, jamais dans nos clients. Contactez CrokoTech pour un devis gratuit et sans prise de tête.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contact"><Button size="lg" className="bg-white text-[#0f7a4d] hover:bg-white/90 rounded-full px-8 h-12 font-semibold">Nous contacter</Button></Link>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`}><Button size="lg" variant="outline" className="rounded-full px-8 h-12 border-white/60 text-white hover:bg-white/10 bg-transparent"><Phone size={18} className="mr-2" />{company.phone}</Button></a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
