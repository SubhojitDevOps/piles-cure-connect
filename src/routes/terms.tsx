import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Piles Cure Centre" },
      { name: "description", content: "Terms & Conditions for using the Piles Cure Centre website and services." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-6">
      <div className="container mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm font-medium"><ArrowLeft className="h-4 w-4" /> Back to home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="space-y-5 mt-6 text-foreground/85 leading-relaxed">
          <p>By accessing the Piles Cure Centre website, you agree to be bound by these terms and conditions.</p>
          <h2 className="text-xl font-semibold mt-8">Medical Disclaimer</h2>
          <p>Information on this website is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified physician.</p>
          <h2 className="text-xl font-semibold mt-8">Appointments</h2>
          <p>Appointment requests are confirmed upon contact from our team. We reserve the right to reschedule based on medical priority.</p>
          <h2 className="text-xl font-semibold mt-8">Limitation of Liability</h2>
          <p>Piles Cure Centre shall not be liable for any indirect or consequential damages arising from the use of this website.</p>
          <h2 className="text-xl font-semibold mt-8">Contact</h2>
          <p>For questions, contact us at care@pilescurecentre.in or +91 94041 25718.</p>
        </div>
      </div>
    </main>
  );
}
