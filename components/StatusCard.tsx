import SystemWindow from "./SystemWindow";

const stats = [
  { label: "HP", value: "100 / 100", note: "masih kuat begadang" },
  { label: "Sabar", value: "87", note: "ngadepin bacotan temen-temen" },
  { label: "Loyalitas", value: "MAX", note: "gak pernah php kalau diajak" },
  { label: "Ganteng", value: "ERROR", note: "data terlalu subjektif untuk dihitung" },
];

const skills = [
  "Auto-connect ke wifi siapapun",
  "Bisa tidur di mana aja, kapan aja",
  "Jago cari alasan telat",
];

export default function StatusCard() {
  return (
    <section className="relative z-10 mx-auto max-w-2xl px-6 py-16">
      <SystemWindow label="Character Sheet // Dafi">
        <div className="mb-6 flex items-baseline justify-between border-b border-panelEdge pb-4">
          <h2 className="font-display text-2xl font-600 text-bone sm:text-3xl">
            Dafi
          </h2>
          <span className="tag text-xs text-magenta">Class: Sahabat Legendaris</span>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="tag text-[11px] text-smoke">{s.label}</div>
              <div className="font-mono text-lg text-violet-bright">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-smoke">{s.note}</div>
            </div>
          ))}
        </div>

        <div className="mt-7 border-t border-panelEdge pt-5">
          <div className="tag mb-3 text-[11px] text-smoke">Skill Pasif</div>
          <ul className="space-y-2">
            {skills.map((sk) => (
              <li key={sk} className="flex items-start gap-2 text-sm text-bone">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-bright" />
                {sk}
              </li>
            ))}
          </ul>
        </div>
      </SystemWindow>
    </section>
  );
}