import EmberField from "@/components/EmberField";
import Hero from "@/components/Hero";
import StatusCard from "@/components/StatusCard";
import QuestLog from "@/components/QuestLog";
import SideQuests from "@/components/SideQuests";
import PhotoFinale from "@/components/PhotoFinale";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <EmberField />
      <Hero />
      <StatusCard />
      <QuestLog />
      <SideQuests />
      <PhotoFinale />
      <Footer />
    </main>
  );
}