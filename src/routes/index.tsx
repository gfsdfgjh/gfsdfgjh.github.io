import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Papers } from "@/components/Papers";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-center" richColors closeButton={false} />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Papers />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
