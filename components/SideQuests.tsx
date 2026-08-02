import ReflexGame from "./ReflexGame";
import QuizGame from "./QuizGame";

export default function SideQuests() {
  return (
    <section className="relative z-10 mx-auto max-w-2xl px-6 py-8">
      <h2 className="font-display mb-6 text-2xl font-600 text-bone sm:text-3xl">
        Side Quests
      </h2>
      <div className="space-y-6">
        <ReflexGame />
        <QuizGame />
      </div>
    </section>
  );
}