import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, Calendar, MapPin, Mail, Clock, Shield, Award, HeartPulse, Users, Star, ChevronDown, Stethoscope, Activity, Sparkles, ShieldCheck, Wallet, Timer, Lock, Building2, LifeBuoy, Menu, X, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";

const PHONE = "+919404125718";
const PHONE_DISPLAY = "+91 94041 25718";
const WHATSAPP = "919404125718";
const WA_LINK = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello, I'd like to consult about piles treatment at Piles Cure Centre.")}`;
const TEL_LINK = `tel:${PHONE}`;
const ADDRESS = "Railway Station Rd, Lalbagh, Murshidabad, West Bengal 742149";

const treatments = [
  { icon: HeartPulse, title: "Piles Treatment", desc: "Painless, non-surgical relief for internal and external hemorrhoids using modern laser techniques." },
  { icon: Activity, title: "Fissure Treatment", desc: "Effective healing of anal fissures with minimal discomfort and quick recovery protocols." },
  { icon: Stethoscope, title: "Fistula Treatment", desc: "Advanced fistula care using laser and minimally invasive procedures for lasting results." },
  { icon: Sparkles, title: "Constipation Management", desc: "Personalized dietary, lifestyle and medical plans to restore healthy digestive function." },
  { icon: Shield, title: "Rectal Disorders", desc: "Comprehensive diagnosis and treatment of a wide range of anorectal conditions." },
  { icon: Award, title: "Non-Surgical Procedures", desc: "Daycare procedures with no cuts, no stitches, and same-day discharge in most cases." },
];

const whyUs = [
  { icon: Users, title: "Experienced Specialists", desc: "Decade-plus expertise in proctology and anorectal care." },
  { icon: Wallet, title: "Affordable Treatment", desc: "Transparent pricing with EMI options available." },
  { icon: Timer, title: "Minimal Recovery Time", desc: "Most patients resume work within 24–48 hours." },
  { icon: Lock, title: "Patient Privacy", desc: "Strict confidentiality and discreet consultation rooms." },
  { icon: Building2, title: "Modern Facilities", desc: "State-of-the-art laser and diagnostic equipment." },
  { icon: LifeBuoy, title: "Emergency Support", desc: "Round-the-clock assistance for urgent concerns." },
];

const testimonials = [
  { name: "Rahul S.", review: "Painless laser treatment and the staff was incredibly kind. Back to work in 2 days!", rating: 5 },
  { name: "Anita D.", review: "Doctor explained everything clearly. My fissure healed completely without surgery.", rating: 5 },
  { name: "Mohammed K.", review: "Affordable, modern clinic with very professional care. Highly recommend.", rating: 5 },
  { name: "Priya M.", review: "I was scared of surgery, but the non-surgical option was perfect. No pain at all.", rating: 5 },
  { name: "Sourav B.", review: "Clean facility, friendly team, and excellent follow-up. Truly patient-first care.", rating: 4 },
  { name: "Farida R.", review: "After years of suffering, I finally found permanent relief here. Thank you, doctor!", rating: 5 },
];

const faqs = [
  { q: "Is piles treatment painful?", a: "Modern laser and non-surgical procedures are virtually painless. Patients typically report only mild discomfort and recover quickly." },
  { q: "Do I need surgery?", a: "Most cases are treated with non-surgical or minimally invasive techniques. Surgery is recommended only in advanced cases after thorough evaluation." },
  { q: "How long is recovery?", a: "Most patients resume normal daily activities within 24–48 hours after a non-surgical procedure." },
  { q: "What are the symptoms of piles?", a: "Common symptoms include bleeding during bowel movements, itching, pain, swelling, and a lump near the anus." },
  { q: "How can I book an appointment?", a: "You can book via our online form, call us, or send a WhatsApp message. Same-day appointments are often available." },
  { q: "Is consultation confidential?", a: "Yes. All consultations and medical records are kept strictly confidential and handled with utmost discretion." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Piles Cure Centre — Piles, Fissure & Fistula Treatment in Murshidabad" },
      { name: "description", content: "Advanced non-surgical piles, fissure & fistula treatment at Piles Cure Centre, Lalbagh, Murshidabad. Safe, effective, painless care. Book your appointment today." },
      { name: "keywords", content: "piles treatment Murshidabad, fissure treatment, fistula clinic Lalbagh, laser piles surgery, proctologist Murshidabad" },
      { property: "og:title", content: "Piles Cure Centre — Advanced Piles, Fissure & Fistula Treatment" },
      { property: "og:description", content: "Safe, effective non-surgical treatment options in Lalbagh, Murshidabad. Modern laser care, expert specialists." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        name: "Piles Cure Centre",
        image: "/hero-clinic.jpg",
        telephone: PHONE,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Railway Station Road",
          addressLocality: "Lalbagh, Murshidabad",
          addressRegion: "West Bengal",
          postalCode: "742149",
          addressCountry: "IN",
        },
        medicalSpecialty: ["Proctology", "Gastroenterology"],
        priceRange: "₹₹",
      }),
    }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Treatments />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <BookingAndContact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

function TopBar() {
  return (
    <div className="hidden md:block bg-primary text-primary-foreground text-sm">
      <div className="container mx-auto max-w-7xl px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Mon–Sat: 9 AM – 8 PM · Sun: By Appointment</div>
        <div className="flex items-center gap-4">
          <a href={TEL_LINK} className="flex items-center gap-1.5 hover:underline"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</a>
          <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Lalbagh, Murshidabad</span>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#treatments", label: "Treatments" },
    { href: "#why", label: "Why Us" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="container mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-xl gradient-hero grid place-items-center text-white shadow-soft">
            <HeartPulse className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-base">Piles Cure Centre</div>
            <div className="text-[11px] text-muted-foreground">Lalbagh · Murshidabad</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {links.map(l => <a key={l.href} href={l.href} className="text-foreground/80 hover:text-primary transition-colors">{l.label}</a>)}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a href="#booking" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition shadow-soft">
            <Calendar className="h-4 w-4" /> Book Appointment
          </a>
        </div>
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 border-b border-border/60 text-foreground/85 hover:text-primary">{l.label}</a>
            ))}
            <a href="#booking" onClick={() => setOpen(false)} className="mt-3 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold">
              <Calendar className="h-4 w-4" /> Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden gradient-soft">
      <div className="container mx-auto max-w-7xl px-6 py-14 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-[fade-in_0.6s_ease-out]">
          <div className="inline-flex items-center gap-2 bg-accent-soft text-accent-foreground/90 px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
            <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Trusted by 10,000+ patients
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
            Advanced Piles, Fissure & <span className="text-primary">Fistula Treatment</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Safe, effective and non-surgical treatment options delivered by experienced specialists in Lalbagh, Murshidabad.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#booking" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold shadow-soft hover:translate-y-[-1px] transition">
              <Calendar className="h-5 w-5" /> Book Appointment
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[var(--whatsapp)] text-white px-6 py-3.5 rounded-xl font-semibold shadow-soft hover:translate-y-[-1px] transition">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
            <a href={TEL_LINK} className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3.5 rounded-xl font-semibold hover:bg-primary-soft transition">
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[["10K+", "Patients"], ["12+", "Years"], ["4.9★", "Rating"]].map(([v, l]) => (
              <div key={l}>
                <div className="text-2xl md:text-3xl font-bold text-primary font-display">{v}</div>
                <div className="text-xs text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 gradient-hero opacity-20 blur-3xl rounded-full" />
          <img
            src={heroImg}
            alt="Modern medical clinic interior at Piles Cure Centre"
            width={1536}
            height={1024}
            className="relative rounded-3xl shadow-card w-full h-auto object-cover"
          />
          <div className="absolute -bottom-5 -left-5 md:-left-8 bg-card border border-border rounded-2xl shadow-card p-4 flex items-center gap-3 animate-float">
            <div className="h-11 w-11 rounded-full bg-accent-soft grid place-items-center"><ShieldCheck className="h-5 w-5 text-accent" /></div>
            <div>
              <div className="text-sm font-semibold">Non-Surgical</div>
              <div className="text-xs text-muted-foreground">Laser Treatment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const items = [
    { icon: Award, label: "12+ Years of Experience" },
    { icon: HeartPulse, label: "Patient-First Approach" },
    { icon: Sparkles, label: "Modern Laser Methods" },
    { icon: Users, label: "Personalized Care Plans" },
  ];
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">About the Clinic</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Compassionate care, modern expertise</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Piles Cure Centre is dedicated to providing the most advanced, painless treatment for piles, fissures, fistulas and rectal disorders. Our team combines decade-long clinical expertise with the latest non-surgical techniques to ensure faster recovery and lasting results.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We believe every patient deserves dignified, confidential and personalized care — delivered in a calm, modern facility designed for your comfort.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-card transition">
              <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center text-white mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <div className="font-semibold">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Treatments() {
  return (
    <section id="treatments" className="py-20 md:py-28 bg-primary-soft/50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Our Treatments</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Comprehensive proctology care</h2>
          <p className="mt-4 text-muted-foreground">Specialized treatments using the latest non-surgical and minimally invasive techniques.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group bg-card border border-border rounded-2xl p-7 hover:shadow-card hover:-translate-y-1 transition-all duration-300">
              <div className="h-14 w-14 rounded-2xl bg-primary-soft text-primary grid place-items-center mb-5 group-hover:gradient-hero group-hover:text-white transition-all">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{desc}</p>
              <a href="#booking" className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all">
                Learn More <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Care you can trust</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:border-accent/40 transition">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-accent-soft text-accent grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-primary-soft/40">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Patient Stories</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Loved by patients across Bengal</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <figure key={t.name} className="bg-card rounded-2xl p-7 border border-border shadow-soft">
              <div className="flex gap-0.5 mb-3" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed mb-4">"{t.review}"</blockquote>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-10 w-10 rounded-full gradient-hero text-white grid place-items-center font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Verified Patient</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Frequently asked questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-border rounded-xl bg-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold hover:bg-primary-soft/50 transition"
              >
                <span>{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed animate-[fade-in_0.2s_ease-out]">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingAndContact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-primary-soft/40">
      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
        <BookingForm />
        <ContactCard />
      </div>
    </section>
  );
}

function BookingForm() {
  const [form, setForm] = useState({ name: "", phone: "", age: "", treatment: "Piles Treatment", date: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.length < 2) e.name = "Please enter your full name";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "").slice(-10))) e.phone = "Enter a valid 10-digit mobile";
    if (!form.age || +form.age < 1 || +form.age > 120) e.age = "Enter a valid age";
    if (!form.date) e.date = "Select a preferred date";
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    const msg = `New Appointment Request:%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AAge: ${form.age}%0ATreatment: ${form.treatment}%0ADate: ${form.date}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    setSubmitted(true);
  }

  const input = "w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition";

  return (
    <div id="booking" className="bg-card border border-border rounded-3xl p-8 shadow-card">
      <div className="text-sm font-semibold text-primary uppercase tracking-wider">Book Appointment</div>
      <h2 className="mt-2 text-2xl md:text-3xl font-bold mb-6">Request a consultation</h2>
      {submitted ? (
        <div className="bg-accent-soft border border-accent/30 rounded-xl p-6 text-center">
          <CheckCircle2 className="h-10 w-10 mx-auto text-accent mb-2" />
          <div className="font-semibold">Request sent!</div>
          <p className="text-sm text-muted-foreground mt-1">We'll reach out shortly to confirm your appointment.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">Full Name *</label>
            <input id="name" className={input} maxLength={80} value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Mobile Number *</label>
              <input id="phone" type="tel" inputMode="numeric" maxLength={15} className={input} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium mb-1.5">Age *</label>
              <input id="age" type="number" min={1} max={120} className={input} value={form.age} onChange={e => setForm({...form, age: e.target.value})} />
              {errors.age && <p className="text-xs text-destructive mt-1">{errors.age}</p>}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="treatment" className="block text-sm font-medium mb-1.5">Treatment Needed</label>
              <select id="treatment" className={input} value={form.treatment} onChange={e => setForm({...form, treatment: e.target.value})}>
                {treatments.map(t => <option key={t.title}>{t.title}</option>)}
                <option>General Consultation</option>
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-1.5">Preferred Date *</label>
              <input id="date" type="date" min={new Date().toISOString().split("T")[0]} className={input} value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
              {errors.date && <p className="text-xs text-destructive mt-1">{errors.date}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
            <textarea id="message" rows={3} maxLength={500} className={input} value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
          </div>
          <button type="submit" className="w-full gradient-hero text-white font-semibold py-3.5 rounded-xl shadow-soft hover:opacity-95 transition flex items-center justify-center gap-2">
            <Calendar className="h-5 w-5" /> Request Appointment
          </button>
          <p className="text-xs text-muted-foreground text-center">By submitting, you agree to be contacted regarding your appointment.</p>
        </form>
      )}
    </div>
  );
}

function ContactCard() {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-sm font-semibold text-primary uppercase tracking-wider">Visit Us</div>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold mb-2">Get in touch</h2>
        <p className="text-muted-foreground">We're here to help. Reach us through any of the channels below.</p>
      </div>

      <div className="bg-card border border-border rounded-2xl divide-y divide-border overflow-hidden">
        <div className="p-5 flex gap-4 items-start">
          <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0"><MapPin className="h-5 w-5" /></div>
          <div>
            <div className="font-semibold mb-0.5">Address</div>
            <address className="not-italic text-muted-foreground text-sm leading-relaxed">{ADDRESS}</address>
          </div>
        </div>
        <a href={TEL_LINK} className="p-5 flex gap-4 items-center hover:bg-primary-soft/40 transition">
          <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0"><Phone className="h-5 w-5" /></div>
          <div>
            <div className="font-semibold mb-0.5">Phone</div>
            <div className="text-muted-foreground text-sm">{PHONE_DISPLAY}</div>
          </div>
        </a>
        <div className="p-5 flex gap-4 items-start">
          <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0"><Clock className="h-5 w-5" /></div>
          <div>
            <div className="font-semibold mb-0.5">Hours</div>
            <div className="text-muted-foreground text-sm">Mon–Sat: 9:00 AM – 8:00 PM<br/>Sun: By Appointment</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <a href={TEL_LINK} className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold shadow-soft hover:opacity-90 transition">
          <Phone className="h-5 w-5" /> Call
        </a>
        <a href={WA_LINK} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-[var(--whatsapp)] text-white py-3.5 rounded-xl font-semibold shadow-soft hover:opacity-90 transition">
          <MessageCircle className="h-5 w-5" /> WhatsApp
        </a>
      </div>

      <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-[16/10]">
        <iframe
          title="Piles Cure Centre location map"
          src="https://www.google.com/maps?q=Lalbagh+Murshidabad+West+Bengal+742149&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/90 pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-10 w-10 rounded-xl gradient-hero grid place-items-center text-white">
              <HeartPulse className="h-5 w-5" />
            </div>
            <div className="font-display font-bold text-lg text-background">Piles Cure Centre</div>
          </div>
          <p className="text-background/60 text-sm leading-relaxed">Advanced, painless treatment for piles, fissures and fistulas in Lalbagh, Murshidabad.</p>
        </div>
        <div>
          <div className="font-semibold mb-4 text-background">Quick Links</div>
          <ul className="space-y-2 text-sm text-background/70">
            <li><a href="#about" className="hover:text-background">About</a></li>
            <li><a href="#why" className="hover:text-background">Why Choose Us</a></li>
            <li><a href="#testimonials" className="hover:text-background">Reviews</a></li>
            <li><a href="#faq" className="hover:text-background">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-4 text-background">Services</div>
          <ul className="space-y-2 text-sm text-background/70">
            {treatments.slice(0,6).map(t => <li key={t.title}><a href="#treatments" className="hover:text-background">{t.title}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-4 text-background">Contact</div>
          <ul className="space-y-2.5 text-sm text-background/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> {ADDRESS}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> <a href={TEL_LINK} className="hover:text-background">{PHONE_DISPLAY}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> care@pilescurecentre.in</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-background/15 flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-background/60">
        <div>© {new Date().getFullYear()} Piles Cure Centre. All rights reserved.</div>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-background">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-background">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a href={WA_LINK} target="_blank" rel="noopener" aria-label="WhatsApp consultation"
        className="h-14 w-14 rounded-full bg-[var(--whatsapp)] text-white grid place-items-center shadow-card hover:scale-110 transition animate-float">
        <MessageCircle className="h-6 w-6" />
      </a>
      <a href={TEL_LINK} aria-label="Call now"
        className="h-14 w-14 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-card hover:scale-110 transition">
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
