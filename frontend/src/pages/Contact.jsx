import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";
import { PageHero } from "./Prestations";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useToast } from "../hooks/use-toast";
import { company, services } from "../mock";

const empty = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Champs manquants", description: "Merci de remplir le nom, l'email et le message.", variant: "destructive" });
      return;
    }
    setLoading(true);
    // MOCK: store locally for now. Will be replaced by backend POST /api/contact.
    try {
      const stored = JSON.parse(localStorage.getItem("croko_messages") || "[]");
      stored.push({ ...form, date: new Date().toISOString() });
      localStorage.setItem("croko_messages", JSON.stringify(stored));
      await new Promise((r) => setTimeout(r, 600));
      setSent(true);
      setForm(empty);
      toast({ title: "Message envoyé ! 🐊", description: "Un croco vous répondra très vite." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHero eyebrow="Contact" title="Croquons votre projet ensemble" subtitle="Une question, un devis, un simple bonjour ? Écrivez-nous, on répond avec le sourire." />

      <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-2 space-y-4">
          <ContactItem icon={Phone} label="Téléphone" value={company.phone} href={`tel:${company.phone.replace(/\s/g, "")}`} />
          <ContactItem icon={Mail} label="Email" value={company.email} href={`mailto:${company.email}`} />
          <ContactItem icon={MapPin} label="Zone d'intervention" value={`${company.location} — déplacements gratuits`} />
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm mt-4">
            <iframe
              title="Carte Nantes"
              src="https://www.google.com/maps?q=Nantes,France&output=embed"
              className="w-full h-56"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-3">
          <div className="bg-white rounded-3xl border border-border shadow-sm p-6 md:p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto rounded-full croco-gradient flex items-center justify-center text-white"><CheckCircle2 size={32} /></div>
                <h3 className="mt-5 font-display font-bold text-2xl text-slate-900">Merci !</h3>
                <p className="mt-2 text-slate-600">Votre message a bien été envoyé. Un croco vous recontacte au plus vite.</p>
                <Button className="mt-6 bg-[#0f7a4d] hover:bg-[#0b5f3c] text-white rounded-full px-6" onClick={() => setSent(false)}>Envoyer un autre message</Button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Nom complet *"><Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Jean Dupont" /></Field>
                  <Field label="Email *"><Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jean@exemple.fr" /></Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Téléphone"><Input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="06 12 34 56 78" /></Field>
                  <Field label="Sujet">
                    <Select value={form.subject} onValueChange={(v) => update("subject", v)}>
                      <SelectTrigger><SelectValue placeholder="Choisir un service" /></SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (<SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>))}
                        <SelectItem value="Autre">Autre demande</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <Field label="Votre message *"><Textarea rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Décrivez votre besoin..." /></Field>
                <Button type="submit" size="lg" disabled={loading} className="w-full bg-[#0f7a4d] hover:bg-[#0b5f3c] text-white rounded-full h-12">
                  {loading ? "Envoi..." : (<>Envoyer le message <Send size={18} className="ml-2" /></>)}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="space-y-2">
      <Label className="text-slate-700">{label}</Label>
      {children}
    </div>
  );
}

function ContactItem({ icon: Ico, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 bg-white border border-border rounded-2xl p-4 card-hover">
      <div className="w-12 h-12 rounded-xl croco-gradient flex items-center justify-center text-white shrink-0"><Ico size={22} /></div>
      <div>
        <div className="text-xs text-slate-500">{label}</div>
        <div className="font-medium text-slate-900 break-all">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
