import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Piles Cure Centre" },
      { name: "description", content: "Privacy Policy for Piles Cure Centre, Lalbagh, Murshidabad." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-6">
      <div className="container mx-auto max-w-3xl prose prose-slate">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm font-medium"><ArrowLeft className="h-4 w-4" /> Back to home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="space-y-5 mt-6 text-foreground/85 leading-relaxed">
          <p>Piles Cure Centre ("we", "our") is committed to protecting your privacy. This policy explains how we collect, use and safeguard your information.</p>
          <h2 className="text-xl font-semibold mt-8">Information We Collect</h2>
          <p>We collect name, contact number, age, and medical history that you voluntarily provide through our appointment form, calls, or WhatsApp.</p>
          <h2 className="text-xl font-semibold mt-8">How We Use Your Information</h2>
          <p>Your information is used solely to schedule appointments, provide medical care, and communicate with you about your treatment.</p>
          <h2 className="text-xl font-semibold mt-8">Data Confidentiality</h2>
          <p>All medical records are kept strictly confidential and are never shared with third parties without your explicit consent, except as required by law.</p>
          <h2 className="text-xl font-semibold mt-8">Contact</h2>
          <p>For privacy concerns, contact us at care@pilescurecentre.in or +91 94041 25718.</p>
        </div>
      </div>
    </main>
  );
}
