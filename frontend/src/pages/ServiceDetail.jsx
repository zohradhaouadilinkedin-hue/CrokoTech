import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import Reveal from "../components/Reveal";
import { ServiceIcon } from "../components/ServiceCard";
import { Button } from "../components/ui/button";
import { getService, services, company } from "../mock";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center">
        <h1 className="font-display font-bold text-3xl text-slate-900">Service introuvable</h1>
        <p className="mt-3 text-slate-600">Ce croco a dû s'échapper. Revenez à nos prestations.</p>
        <Link to="/prestations"><Button className="mt-6 bg-[#0f7a4d] hover:bg-[#0b5f3c] text-white rounded-full px-6">Voir les prestations</Button></Link>
      </div>
    );
  }

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);
  const audience = service.category.includes("entreprise") && service.category.includes("particulier")
    ? "Entreprises & particuliers"
    : service.category.includes("entreprise") ? "Entreprises" : "Particuliers";

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden croco-gradient text-white">
        <div className="absolute -top-20 -right-16 w-80 h-80 bg-white/10 animate-blob" />
        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Link to="/prestations" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm"><ArrowLeft size={16} /> Toutes les prestations</Link>
            <div className="mt-5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center"><ServiceIcon name={service.icon} size={28} /></div>
              <span className="text-sm font-medium bg-white/15 rounded-full px-3 py-1">{audience}</span>
            </div>
            <h1 className="mt-5 font-display font-extrabold text-4xl md:text-5xl">{service.title}</h1>
            <p className="mt-4 text-white/90 text-lg leading-relaxed">{service.intro}</p>
            <Link to="/contact"><Button size="lg" className="mt-7 bg-white text-[#0f7a4d] hover:bg-white/90 rounded-full px-7 h-12 font-semibold">Demander un devis <ArrowRight size={18} className="ml-1" /></Button></Link>
          </div>
          <Reveal>
            <img src={service.image} alt={service.title} className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" />
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20 grid lg:grid-cols-3 gap-10">
        <Reveal className="lg:col-span-2">
          <h2 className="font-display font-bold text-3xl text-slate-900">Ce que l'on propose</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">{service.short}</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {service.features.map((f) => (
              <div key={f} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4 card-hover">
                <CheckCircle2 className="text-[#0f7a4d] shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700">{f}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="bg-secondary/70 border border-border rounded-2xl p-6 sticky top-28">
            <h3 className="font-display font-semibold text-xl text-slate-900">Un projet en tête ?</h3>
            <p className="mt-2 text-sm text-slate-600">Contactez CrokoTech pour un devis gratuit et personnalisé. On croque le problème, pas votre budget.</p>
            <div className="mt-5 space-y-3">
              <Link to="/contact" className="block"><Button className="w-full bg-[#0f7a4d] hover:bg-[#0b5f3c] text-white rounded-full h-11">Nous contacter</Button></Link>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="block"><Button variant="outline" className="w-full rounded-full h-11 border-[#0f7a4d]/30 text-[#0f7a4d] hover:bg-[#0f7a4d]/5"><Phone size={16} className="mr-2" />{company.phone}</Button></a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Related */}
      <section className="bg-secondary/60">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Reveal><h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900">D'autres prestations</h2></Reveal>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <Link to={`/service/${s.slug}`} className="card-hover group flex items-center gap-4 bg-white border border-border rounded-2xl p-5">
                  <div className="w-12 h-12 rounded-xl croco-gradient flex items-center justify-center text-white shrink-0"><ServiceIcon name={s.icon} size={22} /></div>
                  <div>
                    <div className="font-semibold text-slate-900 group-hover:text-[#0f7a4d] transition-colors">{s.title}</div>
                    <div className="text-sm text-slate-500 line-clamp-1">{s.short}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
